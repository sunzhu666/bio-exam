// 初中生物组卷系统 - 增强版主逻辑
const app = {
    paper: [],
    filteredQuestions: [],
    favorites: JSON.parse(localStorage.getItem('bioExamFavorites') || '[]'),
    currentPage: 1,
    pageSize: 20,
    showingFavorites: false,
    filters: { unit: '', type: '', difficulty: '', source: '', keyword: '' },

    init() {
        this.loadGeneratedQuestions();
        this.filteredQuestions = [...questionBank.questions];
        this.renderUnitTags();
        this.renderQuestions();
        this.bindEvents();
        this.updateStats();
        this.updateFavCount();
        document.getElementById('totalQuestions').textContent = questionBank.questions.length;
    },

    loadGeneratedQuestions() {
        const generators = [
            'questionGenerator', 'massGenerator', 'megaGenerator', 'superGenerator',
            'hugeGenerator', 'ultimateGenerator'
        ];
        for (let i = 1; i <= 10; i++) generators.push('extraGenerator' + i);
        ['A','B','C','D','E','F','G','H','I','J'].forEach(c => generators.push('megaGen' + c));
        for (let i = 1; i <= 4; i++) generators.push('ultraGen' + i);
        ['A','B','C','D','E','F','G','H','I','J'].forEach(c => generators.push('massiveGen' + c));
        for (let i = 1; i <= 175; i++) generators.push('giantGen' + i);
        for (let i = 1; i <= 3; i++) generators.push('crossSubjectGen' + i);

        generators.forEach(name => {
            try {
                const gen = window[name];
                if (gen && typeof gen.generateAll === 'function') {
                    questionBank.questions = [...questionBank.questions, ...gen.generateAll()];
                }
            } catch(e) {}
        });

        if (typeof examQuestions !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...examQuestions];
        }
        if (typeof weeklyQuestions !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...weeklyQuestions];
        }
    },

    renderUnitTags() {
        const container = document.getElementById('unitGroup');
        let html = '<button class="tag-btn active" data-unit="">全部</button>';
        questionBank.units.forEach(u => {
            html += `<button class="tag-btn" data-unit="${u.id}">${u.name}</button>`;
        });
        container.innerHTML = html;
    },
};

// 绑定事件
app.bindEvents = function() {
    // 搜索
    document.getElementById('searchBtn').addEventListener('click', () => this.doSearch());
    document.getElementById('searchInput').addEventListener('keyup', e => {
        if (e.key === 'Enter') this.doSearch();
    });

    // 标签筛选代理
    const tagGroups = [
        { id: 'unitGroup', key: 'unit', attr: 'unit' },
        { id: 'typeGroup', key: 'type', attr: 'type' },
        { id: 'difficultyGroup', key: 'difficulty', attr: 'diff' },
        { id: 'sourceGroup', key: 'source', attr: 'source' }
    ];
    tagGroups.forEach(g => {
        document.getElementById(g.id).addEventListener('click', e => {
            const btn = e.target.closest('.tag-btn');
            if (!btn) return;
            document.querySelectorAll(`#${g.id} .tag-btn`).forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.filters[g.key] = btn.dataset[g.attr] || '';
            this.applyFilters();
        });
    });

    // 重置筛选
    document.getElementById('resetFilterBtn').addEventListener('click', () => this.resetFilters());
    // 智能组卷
    document.getElementById('smartSelectBtn').addEventListener('click', () => this.smartSelect());
    // 试卷模板
    document.getElementById('templateSelect').addEventListener('change', e => {
        if (e.target.value) this.applyTemplate(e.target.value);
    });
    // 收藏
    document.getElementById('showFavBtn').addEventListener('click', () => this.toggleFavorites());
    // 试卷操作
    document.getElementById('exportWordBtn').addEventListener('click', () => this.exportWord());
    document.getElementById('previewBtn').addEventListener('click', () => this.showPreview());
    document.getElementById('clearBtn').addEventListener('click', () => this.clearPaper());
    document.getElementById('printBtn').addEventListener('click', () => window.print());
    document.getElementById('closePreview').addEventListener('click', () => this.hideModal());
    document.getElementById('previewModal').addEventListener('click', e => {
        if (e.target.id === 'previewModal') this.hideModal();
    });
};

document.addEventListener('DOMContentLoaded', () => app.init());

// 搜索
app.doSearch = function() {
    this.filters.keyword = document.getElementById('searchInput').value.trim();
    this.showingFavorites = false;
    this.applyFilters();
};

// 获取题目来源
app.getSource = function(q) {
    if (q.unit === 'exam' || q.source === 'exam') return 'exam';
    if (q.source === 'weekly') return 'weekly';
    return 'generated';
};

// 应用筛选
app.applyFilters = function() {
    const { unit, type, difficulty, source, keyword } = this.filters;
    this.filteredQuestions = questionBank.questions.filter(q => {
        if (unit && q.unit !== unit) return false;
        if (type && q.type !== type) return false;
        if (difficulty && q.difficulty !== difficulty) return false;
        if (source && this.getSource(q) !== source) return false;
        if (keyword && !q.content.includes(keyword) &&
            !(q.options && q.options.some(o => o.includes(keyword)))) return false;
        return true;
    });
    this.currentPage = 1;
    this.renderQuestions();
};

// 重置筛选
app.resetFilters = function() {
    this.filters = { unit: '', type: '', difficulty: '', source: '', keyword: '' };
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.tag-btn').forEach(b => {
        const isAll = (b.dataset.unit === '' || b.dataset.type === '' ||
                       b.dataset.diff === '' || b.dataset.source === '');
        b.classList.toggle('active', isAll);
    });
    this.showingFavorites = false;
    this.filteredQuestions = [...questionBank.questions];
    this.currentPage = 1;
    this.renderQuestions();
};

// 分页渲染
app.renderQuestions = function() {
    const container = document.getElementById('questionList');
    const total = this.filteredQuestions.length;
    document.getElementById('filteredCount').textContent = total;

    if (total === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-icon">📭</div><p>没有找到符合条件的试题</p></div>';
        document.getElementById('pagination').innerHTML = '';
        return;
    }

    const totalPages = Math.ceil(total / this.pageSize);
    if (this.currentPage > totalPages) this.currentPage = totalPages;
    const start = (this.currentPage - 1) * this.pageSize;
    const pageQuestions = this.filteredQuestions.slice(start, start + this.pageSize);

    container.innerHTML = pageQuestions.map((q, i) => this.createQuestionCard(q, start + i + 1)).join('');
    this.renderPagination(totalPages);
};

// 分页导航
app.renderPagination = function(totalPages) {
    const container = document.getElementById('pagination');
    if (totalPages <= 1) { container.innerHTML = ''; return; }

    let html = `<button ${this.currentPage === 1 ? 'disabled' : ''} onclick="app.goPage(${this.currentPage - 1})">‹</button>`;
    const maxShow = 7;
    let startP = Math.max(1, this.currentPage - 3);
    let endP = Math.min(totalPages, startP + maxShow - 1);
    if (endP - startP < maxShow - 1) startP = Math.max(1, endP - maxShow + 1);

    if (startP > 1) html += `<button onclick="app.goPage(1)">1</button><button disabled>...</button>`;
    for (let i = startP; i <= endP; i++) {
        html += `<button class="${i === this.currentPage ? 'active' : ''}" onclick="app.goPage(${i})">${i}</button>`;
    }
    if (endP < totalPages) html += `<button disabled>...</button><button onclick="app.goPage(${totalPages})">${totalPages}</button>`;
    html += `<button ${this.currentPage === totalPages ? 'disabled' : ''} onclick="app.goPage(${this.currentPage + 1})">›</button>`;
    container.innerHTML = html;
};

app.goPage = function(page) {
    this.currentPage = page;
    this.renderQuestions();
    document.querySelector('.question-area').scrollIntoView({ behavior: 'smooth' });
};

// 题目卡片
app.createQuestionCard = function(q, index) {
    const typeMap = { choice: '选择题', blank: '填空题', judge: '判断题', short: '简答题', experiment: '实验探究题' };
    const diffMap = { easy: '简单', medium: '中等', hard: '较难' };
    const sourceMap = { generated: '生成题', exam: '中考真题', weekly: '周练题' };
    const unitName = questionBank.units.find(u => u.id === q.unit)?.name || '';
    const inPaper = this.paper.some(p => p.id === q.id);
    const isFav = this.favorites.includes(q.id);
    const source = this.getSource(q);

    let optionsHtml = '';
    if (q.options) {
        optionsHtml = '<div class="question-options">' +
            q.options.map(o => `<div class="option-item">${o}</div>`).join('') + '</div>';
    }

    return `<div class="question-card">
        <div class="question-header">
            <div class="question-meta">
                <span class="q-number">#${index}</span>
                <div class="question-tags">
                    <span class="tag-type">${typeMap[q.type]}</span>
                    <span class="tag-difficulty-${q.difficulty}">${diffMap[q.difficulty]}</span>
                    <span class="tag-score">${q.score}分</span>
                    <span class="tag-source">${sourceMap[source]}</span>
                </div>
            </div>
            <div class="question-actions">
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="app.toggleFav(${q.id})">${isFav ? '⭐' : '☆'}</button>
                <button class="btn btn-sm ${inPaper ? 'btn-remove' : 'btn-add'}" onclick="app.toggleQuestion(${q.id})">
                    ${inPaper ? '移除' : '加入试卷'}
                </button>
            </div>
        </div>
        <div class="question-content"><strong>[${unitName}]</strong> ${q.content.replace(/\n/g, '<br>')}</div>
        ${optionsHtml}
        <details class="question-answer">
            <summary>查看答案与解析</summary>
            <div class="answer-content">
                <p><strong>答案：</strong>${q.answer}</p>
                <p><strong>解析：</strong>${q.analysis}</p>
            </div>
        </details>
    </div>`;
};

// 收藏功能
app.toggleFav = function(id) {
    const idx = this.favorites.indexOf(id);
    if (idx > -1) this.favorites.splice(idx, 1);
    else this.favorites.push(id);
    localStorage.setItem('bioExamFavorites', JSON.stringify(this.favorites));
    this.updateFavCount();
    this.renderQuestions();
};

app.updateFavCount = function() {
    document.getElementById('favCount').textContent = this.favorites.length;
};

app.toggleFavorites = function() {
    this.showingFavorites = !this.showingFavorites;
    if (this.showingFavorites) {
        this.filteredQuestions = questionBank.questions.filter(q => this.favorites.includes(q.id));
    } else {
        this.applyFilters();
        return;
    }
    this.currentPage = 1;
    this.renderQuestions();
};

// 试卷操作
app.toggleQuestion = function(id) {
    const question = questionBank.questions.find(q => q.id === id);
    if (!question) return;
    const index = this.paper.findIndex(p => p.id === id);
    if (index > -1) this.paper.splice(index, 1);
    else this.paper.push(question);
    this.updatePaperPanel();
    this.renderQuestions();
};

app.updatePaperPanel = function() {
    document.getElementById('paperCount').textContent = this.paper.length;
    const totalScore = this.paper.reduce((sum, q) => sum + q.score, 0);
    document.getElementById('totalScore').textContent = totalScore;

    // 题型统计
    const typeMap = { choice: '选择', blank: '填空', judge: '判断', short: '简答', experiment: '实验' };
    const typeCounts = {};
    this.paper.forEach(q => { typeCounts[q.type] = (typeCounts[q.type] || 0) + 1; });
    document.getElementById('paperTypeStats').innerHTML = Object.entries(typeCounts)
        .map(([t, c]) => `<span class="paper-type-stat">${typeMap[t]} ${c}题</span>`).join('');

    // 难度饼图
    const diffCounts = { easy: 0, medium: 0, hard: 0 };
    this.paper.forEach(q => { diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1; });
    const total = this.paper.length || 1;
    const easyPct = (diffCounts.easy / total * 100);
    const mediumPct = (diffCounts.medium / total * 100);
    const pie = document.getElementById('difficultyPie');
    if (this.paper.length === 0) {
        pie.className = 'pie-chart empty';
        pie.style.background = '';
    } else {
        pie.className = 'pie-chart';
        pie.style.background = `conic-gradient(var(--easy-color) 0% ${easyPct}%, var(--medium-color) ${easyPct}% ${easyPct + mediumPct}%, var(--hard-color) ${easyPct + mediumPct}% 100%)`;
    }

    // 试卷列表
    document.getElementById('paperList').innerHTML = this.paper.map((q, i) => `
        <div class="paper-item" draggable="true" data-idx="${i}">
            <span>${i + 1}. ${typeMap[q.type]} (${q.score}分) ${q.content.substring(0, 20)}...</span>
            <button class="remove-btn" onclick="app.toggleQuestion(${q.id})">✕</button>
        </div>
    `).join('');

    this.initDragSort();
};

// 拖拽排序
app.initDragSort = function() {
    const list = document.getElementById('paperList');
    let dragIdx = null;
    list.querySelectorAll('.paper-item').forEach(item => {
        item.addEventListener('dragstart', e => {
            dragIdx = parseInt(item.dataset.idx);
            item.classList.add('dragging');
        });
        item.addEventListener('dragend', () => item.classList.remove('dragging'));
        item.addEventListener('dragover', e => e.preventDefault());
        item.addEventListener('drop', e => {
            e.preventDefault();
            const dropIdx = parseInt(item.dataset.idx);
            if (dragIdx !== null && dragIdx !== dropIdx) {
                const moved = this.paper.splice(dragIdx, 1)[0];
                this.paper.splice(dropIdx, 0, moved);
                this.updatePaperPanel();
            }
        });
    });
};

// 智能组卷 (难度比例 3:5:2)
app.smartSelect = function() {
    const totalQ = 25;
    const ratio = { easy: 0.3, medium: 0.5, hard: 0.2 };
    const counts = {
        easy: Math.round(totalQ * ratio.easy),
        medium: Math.round(totalQ * ratio.medium),
        hard: totalQ - Math.round(totalQ * ratio.easy) - Math.round(totalQ * ratio.medium)
    };

    this.paper = [];
    const pool = [...questionBank.questions];
    ['easy', 'medium', 'hard'].forEach(diff => {
        const available = pool.filter(q => q.difficulty === diff);
        const shuffled = available.sort(() => Math.random() - 0.5);
        this.paper.push(...shuffled.slice(0, counts[diff]));
    });

    // 按题型排序
    const typeOrder = { choice: 0, judge: 1, blank: 2, short: 3, experiment: 4 };
    this.paper.sort((a, b) => (typeOrder[a.type] || 0) - (typeOrder[b.type] || 0));

    this.updatePaperPanel();
    this.renderQuestions();
    alert(`智能组卷完成！已选 ${this.paper.length} 题，难度比例 简单:中等:较难 ≈ 3:5:2`);
};

// 试卷模板
app.applyTemplate = function(template) {
    const templates = {
        midterm: { choice: 15, judge: 5, blank: 5, short: 3, experiment: 2, total: 100 },
        final: { choice: 20, judge: 5, blank: 5, short: 5, experiment: 3, total: 100 },
        unit: { choice: 10, judge: 5, blank: 3, short: 2, experiment: 0, total: 50 },
        weekly: { choice: 8, judge: 4, blank: 3, short: 0, experiment: 0, total: 30 }
    };
    const tpl = templates[template];
    if (!tpl) return;

    this.paper = [];
    const pool = [...questionBank.questions].sort(() => Math.random() - 0.5);
    Object.entries(tpl).forEach(([type, count]) => {
        if (type === 'total') return;
        const available = pool.filter(q => q.type === type && !this.paper.some(p => p.id === q.id));
        this.paper.push(...available.slice(0, count));
    });

    const typeOrder = { choice: 0, judge: 1, blank: 2, short: 3, experiment: 4 };
    this.paper.sort((a, b) => (typeOrder[a.type] || 0) - (typeOrder[b.type] || 0));

    this.updatePaperPanel();
    this.renderQuestions();
    document.getElementById('templateSelect').value = '';
    const nameMap = { midterm: '期中考试', final: '期末考试', unit: '单元测试', weekly: '周练' };
    alert(`已应用"${nameMap[template]}"模板，共选 ${this.paper.length} 题`);
};

// 更新统计面板
app.updateStats = function() {
    const qs = questionBank.questions;
    document.getElementById('statChoice').textContent = qs.filter(q => q.type === 'choice').length;
    document.getElementById('statBlank').textContent = qs.filter(q => q.type === 'blank').length;
    document.getElementById('statJudge').textContent = qs.filter(q => q.type === 'judge').length;
    document.getElementById('statShort').textContent = qs.filter(q => q.type === 'short').length;
    document.getElementById('statExperiment').textContent = qs.filter(q => q.type === 'experiment').length;
    document.getElementById('statEasy').textContent = qs.filter(q => q.difficulty === 'easy').length;
    document.getElementById('statMedium').textContent = qs.filter(q => q.difficulty === 'medium').length;
    document.getElementById('statHard').textContent = qs.filter(q => q.difficulty === 'hard').length;
};

// 知识点折叠
app.toggleFilterGroup = function(groupId) {
    const group = document.getElementById(groupId);
    const arrow = document.getElementById(groupId + 'Arrow');
    group.classList.toggle('collapsed');
    if (arrow) arrow.classList.toggle('collapsed');
};

// 清空试卷
app.clearPaper = function() {
    if (this.paper.length === 0) return;
    if (confirm('确定要清空试卷吗？')) {
        this.paper = [];
        this.updatePaperPanel();
        this.renderQuestions();
    }
};

// 预览试卷
app.showPreview = function() {
    if (this.paper.length === 0) { alert('请先添加试题到试卷'); return; }
    const typeMap = { choice: '选择题', blank: '填空题', judge: '判断题', short: '简答题', experiment: '实验探究题' };
    const totalScore = this.paper.reduce((sum, q) => sum + q.score, 0);
    const grouped = {};
    this.paper.forEach(q => { if (!grouped[q.type]) grouped[q.type] = []; grouped[q.type].push(q); });

    let html = `<h2 style="text-align:center">初中生物测试卷</h2><p style="text-align:center">总分：${totalScore}分</p><hr>`;
    let qNum = 1;
    ['choice', 'blank', 'judge', 'short', 'experiment'].forEach(type => {
        if (!grouped[type]) return;
        const typeScore = grouped[type].reduce((s, q) => s + q.score, 0);
        html += `<h3>${typeMap[type]}（共${grouped[type].length}题，${typeScore}分）</h3>`;
        grouped[type].forEach(q => {
            html += `<div style="margin:15px 0"><p>${qNum}. ${q.content.replace(/\n/g, '<br>')}（${q.score}分）</p>`;
            if (q.options) html += `<div style="padding-left:20px">${q.options.map(o => `<p>${o}</p>`).join('')}</div>`;
            html += '</div>';
            qNum++;
        });
    });

    document.getElementById('paperPreview').innerHTML = html;
    document.getElementById('previewModal').classList.add('active');
};

app.hideModal = function() {
    document.getElementById('previewModal').classList.remove('active');
};

// Word导出
app.exportWord = function() {
    if (this.paper.length === 0) { alert('请先添加试题到试卷'); return; }
    const typeMap = { choice: '选择题', blank: '填空题', judge: '判断题', short: '简答题', experiment: '实验探究题' };
    const totalScore = this.paper.reduce((sum, q) => sum + q.score, 0);
    const grouped = {};
    this.paper.forEach(q => { if (!grouped[q.type]) grouped[q.type] = []; grouped[q.type].push(q); });

    let html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head><meta charset="utf-8"><title>初中生物测试卷</title>
    <style>body{font-family:宋体,SimSun,serif;font-size:12pt;line-height:1.8}
    h1{text-align:center;font-size:18pt;margin-bottom:5px}
    h2{text-align:center;font-size:12pt;font-weight:normal;margin-top:5px}
    h3{font-size:14pt;margin:20px 0 10px}
    .question{margin:15px 0}.options{margin-left:20px}.option{margin:5px 0}
    .answer-area{border-bottom:1px solid #000;height:100px;margin:10px 0}
    table{width:100%;border-collapse:collapse;margin:20px 0}
    td{border:1px solid #000;padding:8px;text-align:center}</style></head>
    <body><h1>初中生物测试卷</h1><h2>（满分：${totalScore}分）</h2>
    <table><tr><td>姓名</td><td style="width:150px"></td><td>班级</td><td style="width:150px"></td><td>得分</td><td style="width:100px"></td></tr></table>`;

    let qNum = 1;
    const typeOrder = ['choice', 'blank', 'judge', 'short', 'experiment'];
    typeOrder.forEach(type => {
        if (!grouped[type]) return;
        const typeScore = grouped[type].reduce((s, q) => s + q.score, 0);
        html += `<h3>${typeMap[type]}（共${grouped[type].length}题，${typeScore}分）</h3>`;
        grouped[type].forEach(q => {
            html += `<div class="question"><p>${qNum}. ${q.content.replace(/\n/g, '<br>')}（${q.score}分）</p>`;
            if (q.options) {
                html += '<div class="options">';
                q.options.forEach(o => { html += `<div class="option">${o}</div>`; });
                html += '</div>';
            }
            if (q.type === 'short' || q.type === 'experiment') html += '<div class="answer-area"></div>';
            html += '</div>';
            qNum++;
        });
    });

    // 答案页
    html += '<div style="page-break-before:always"></div><h1>参考答案</h1>';
    qNum = 1;
    typeOrder.forEach(type => {
        if (!grouped[type]) return;
        html += `<h3>${typeMap[type]}</h3><p>`;
        grouped[type].forEach((q, idx) => {
            if (q.type === 'choice' || q.type === 'judge') {
                html += `${qNum}. ${q.answer}　　`;
                if ((idx + 1) % 5 === 0) html += '<br>';
            } else {
                html += `<br>${qNum}. ${q.answer}<br>`;
            }
            qNum++;
        });
        html += '</p>';
    });
    html += '</body></html>';

    const blob = new Blob([html], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '初中生物测试卷.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('试卷已导出为Word文档！');
};
