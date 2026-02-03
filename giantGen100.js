// 超大题库生成器100 - 综合复习题
const giantGen100 = {
    baseId: 665000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genComprehensiveA() {
        const qs = []; let id = this.baseId;
        const questions = [
            {q:"生物的基本特征不包括",correct:"能进行光合作用",wrong:["新陈代谢","生长繁殖","应激性"],unit:"unit1"},
            {q:"细胞中控制生命活动的结构是",correct:"细胞核",wrong:["细胞膜","细胞质","液泡"],unit:"unit4"},
            {q:"光合作用的场所是",correct:"叶绿体",wrong:["线粒体","细胞核","核糖体"],unit:"unit3"},
            {q:"人体最大的消化腺是",correct:"肝脏",wrong:["胃","胰腺","唾液腺"],unit:"unit5"},
            {q:"血液中运输氧气的细胞是",correct:"红细胞",wrong:["白细胞","血小板","淋巴细胞"],unit:"unit7"},
            {q:"人体调节生命活动的最高级中枢是",correct:"大脑皮层",wrong:["小脑","脑干","脊髓"],unit:"unit9"},
            {q:"遗传物质的载体是",correct:"染色体",wrong:["细胞膜","细胞质","核糖体"],unit:"unit10"},
            {q:"生态系统中能量流动的起点是",correct:"生产者",wrong:["消费者","分解者","阳光"],unit:"unit11"}
        ];
        questions.forEach(q => {
            qs.push(this.makeQ(id++,q.unit,"medium",q.q,q.correct,q.wrong,`${q.q}${q.correct}。`));
        });
        this.baseId = id; return qs;
    },

    genComprehensiveB() {
        const qs = []; let id = this.baseId;
        const questions = [
            {q:"下列属于先天性行为的是",correct:"蜜蜂采蜜",wrong:["小狗算术","鹦鹉学舌","猴子骑车"],unit:"unit1"},
            {q:"下列属于特异性免疫的是",correct:"接种疫苗",wrong:["皮肤屏障","吞噬细胞","溶菌酶"],unit:"unit8"},
            {q:"下列属于可遗传变异的是",correct:"基因突变",wrong:["晒黑皮肤","锻炼肌肉","营养不良"],unit:"unit10"},
            {q:"下列属于生产者的是",correct:"小麦",wrong:["蚯蚓","蘑菇","细菌"],unit:"unit11"},
            {q:"下列属于无性生殖的是",correct:"扦插",wrong:["种子繁殖","卵生","胎生"],unit:"unit3"},
            {q:"下列属于条件反射的是",correct:"望梅止渴",wrong:["膝跳反射","眨眼反射","缩手反射"],unit:"unit9"},
            {q:"下列属于化石燃料的是",correct:"煤炭",wrong:["太阳能","风能","水能"],unit:"unit11"},
            {q:"下列属于传染病的是",correct:"流感",wrong:["近视","贫血","佝偻病"],unit:"unit8"}
        ];
        questions.forEach(q => {
            qs.push(this.makeQ(id++,q.unit,"hard",q.q,q.correct,q.wrong,`${q.q}${q.correct}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genComprehensiveA(),...this.genComprehensiveB()]; }
};
