// 初中生物组卷系统 - 主逻辑
const app = {
    paper: [],
    filteredQuestions: [],

    init() {
        this.initUnitSelect();
        this.filteredQuestions = [...questionBank.questions];
        this.renderQuestions();
        this.bindEvents();
        this.showStats();
    },

    initUnitSelect() {
        const select = document.getElementById('unitSelect');
        questionBank.units.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit.id;
            option.textContent = unit.name;
            select.appendChild(option);
        });
    },

    bindEvents() {
        document.getElementById('filterBtn').addEventListener('click', () => this.filterQuestions());
        document.getElementById('previewBtn').addEventListener('click', () => this.showPreview());
        document.getElementById('clearBtn').addEventListener('click', () => this.clearPaper());
        document.getElementById('printBtn').addEventListener('click', () => window.print());
        document.querySelector('.close').addEventListener('click', () => this.hideModal());
        document.getElementById('previewModal').addEventListener('click', (e) => {
            if (e.target.id === 'previewModal') this.hideModal();
        });
    },

    filterQuestions() {
        const unit = document.getElementById('unitSelect').value;
        const type = document.getElementById('typeSelect').value;
        const difficulty = document.getElementById('difficultySelect').value;

        this.filteredQuestions = questionBank.questions.filter(q => {
            if (unit && q.unit !== unit) return false;
            if (type && q.type !== type) return false;
            if (difficulty && q.difficulty !== difficulty) return false;
            return true;
        });
        this.renderQuestions();
    },

    renderQuestions() {
        const container = document.getElementById('questionList');
        if (this.filteredQuestions.length === 0) {
            container.innerHTML = '<div class="question-card"><p>没有找到符合条件的试题</p></div>';
            return;
        }
        container.innerHTML = this.filteredQuestions.map(q => this.createQuestionCard(q)).join('');
    },

    createQuestionCard(q) {
        const typeMap = { choice: '选择题', blank: '填空题', judge: '判断题', short: '简答题', experiment: '实验探究题' };
        const diffMap = { easy: '简单', medium: '中等', hard: '较难' };
        const unitName = questionBank.units.find(u => u.id === q.unit)?.name || '';
        const inPaper = this.paper.some(p => p.id === q.id);

        let optionsHtml = '';
        if (q.options) {
            optionsHtml = `<div class="question-options">${q.options.map(o => `<div>${o}</div>`).join('')}</div>`;
        }

        return `
            <div class="question-card">
                <div class="question-header">
                    <div class="question-tags">
                        <span class="tag-type">${typeMap[q.type]}</span>
                        <span class="tag-difficulty-${q.difficulty}">${diffMap[q.difficulty]}</span>
                        <span class="tag-score">${q.score}分</span>
                    </div>
                    <button class="btn ${inPaper ? 'btn-remove' : 'btn-add'}" onclick="app.toggleQuestion(${q.id})">
                        ${inPaper ? '移除' : '加入试卷'}
                    </button>
                </div>
                <div class="question-content">
                    <strong>[${unitName}]</strong> ${q.content.replace(/\n/g, '<br>')}
                </div>
                ${optionsHtml}
                <details class="question-answer">
                    <summary>查看答案与解析</summary>
                    <div class="answer-content">
                        <p><strong>答案：</strong>${q.answer}</p>
                        <p><strong>解析：</strong>${q.analysis}</p>
                    </div>
                </details>
            </div>
        `;
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());

// 试卷操作方法
app.toggleQuestion = function(id) {
    const question = questionBank.questions.find(q => q.id === id);
    if (!question) return;

    const index = this.paper.findIndex(p => p.id === id);
    if (index > -1) {
        this.paper.splice(index, 1);
    } else {
        this.paper.push(question);
    }
    this.updatePaperPanel();
    this.renderQuestions();
};

app.updatePaperPanel = function() {
    const countEl = document.getElementById('paperCount');
    const scoreEl = document.getElementById('totalScore');
    const listEl = document.getElementById('paperList');

    const totalScore = this.paper.reduce((sum, q) => sum + q.score, 0);
    countEl.textContent = this.paper.length;
    scoreEl.textContent = totalScore;

    const typeMap = { choice: '选择', blank: '填空', judge: '判断', short: '简答', experiment: '实验' };
    listEl.innerHTML = this.paper.map((q, i) => `
        <div class="paper-item">
            <span>${i + 1}. ${typeMap[q.type]} (${q.score}分)</span>
            <button class="btn btn-remove" onclick="app.toggleQuestion(${q.id})">移除</button>
        </div>
    `).join('');
};

app.clearPaper = function() {
    if (this.paper.length === 0) return;
    if (confirm('确定要清空试卷吗？')) {
        this.paper = [];
        this.updatePaperPanel();
        this.renderQuestions();
    }
};

app.showPreview = function() {
    if (this.paper.length === 0) {
        alert('请先添加试题到试卷');
        return;
    }
    const preview = document.getElementById('paperPreview');
    const typeMap = { choice: '选择题', blank: '填空题', judge: '判断题', short: '简答题', experiment: '实验探究题' };
    const totalScore = this.paper.reduce((sum, q) => sum + q.score, 0);

    // 按题型分组
    const grouped = {};
    this.paper.forEach(q => {
        if (!grouped[q.type]) grouped[q.type] = [];
        grouped[q.type].push(q);
    });

    let html = `<h2>初中生物测试卷</h2><p style="text-align:center">总分：${totalScore}分</p><hr>`;
    let qNum = 1;
    const typeOrder = ['choice', 'blank', 'judge', 'short', 'experiment'];

    typeOrder.forEach(type => {
        if (!grouped[type]) return;
        const typeScore = grouped[type].reduce((s, q) => s + q.score, 0);
        html += `<h3>${typeMap[type]}（共${grouped[type].length}题，${typeScore}分）</h3>`;
        grouped[type].forEach(q => {
            html += `<div class="preview-question"><p>${qNum}. ${q.content.replace(/\n/g, '<br>')}（${q.score}分）</p>`;
            if (q.options) {
                html += `<div style="padding-left:20px">${q.options.map(o => `<p>${o}</p>`).join('')}</div>`;
            }
            html += '</div>';
            qNum++;
        });
    });

    preview.innerHTML = html;
    document.getElementById('previewModal').style.display = 'block';
};

app.hideModal = function() {
    document.getElementById('previewModal').style.display = 'none';
};

app.showStats = function() {
    const total = questionBank.questions.length;
    const stats = {
        choice: questionBank.questions.filter(q => q.type === 'choice').length,
        blank: questionBank.questions.filter(q => q.type === 'blank').length,
        judge: questionBank.questions.filter(q => q.type === 'judge').length,
        short: questionBank.questions.filter(q => q.type === 'short').length,
        experiment: questionBank.questions.filter(q => q.type === 'experiment').length
    };
    console.log(`题库统计：共${total}题（选择${stats.choice}、填空${stats.blank}、判断${stats.judge}、简答${stats.short}、实验${stats.experiment}）`);
};
