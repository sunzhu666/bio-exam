// 超大题库生成器50 - 综合复习
const giantGen50 = {
    baseId: 415000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genKeyConceptsA() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"生物的基本特征",content:"新陈代谢生长繁殖应激性遗传变异",unit:"unit1"},
            {concept:"细胞是生命活动的基本单位",content:"除病毒外所有生物都由细胞构成",unit:"unit4"},
            {concept:"光合作用的意义",content:"制造有机物释放氧气储存能量",unit:"unit3"},
            {concept:"呼吸作用的意义",content:"分解有机物释放能量",unit:"unit3"},
            {concept:"消化的本质",content:"大分子有机物分解为小分子",unit:"unit5"},
            {concept:"吸收的部位",content:"主要在小肠",unit:"unit5"},
            {concept:"血液循环的意义",content:"运输物质",unit:"unit7"},
            {concept:"呼吸的意义",content:"气体交换获取氧气排出二氧化碳",unit:"unit6"},
            {concept:"排泄的意义",content:"排出代谢废物维持内环境稳定",unit:"unit7"},
            {concept:"神经调节的基本方式",content:"反射",unit:"unit9"},
            {concept:"激素调节的特点",content:"微量高效通过体液运输",unit:"unit9"},
            {concept:"遗传的物质基础",content:"DNA",unit:"unit10"},
            {concept:"变异的类型",content:"可遗传变异和不可遗传变异",unit:"unit10"},
            {concept:"自然选择的结果",content:"适者生存不适者淘汰",unit:"unit12"},
            {concept:"生态系统的组成",content:"生物部分和非生物部分",unit:"unit11"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,c.unit,"medium",`${c.concept}是`,c.content,["无内容","随机","不确定"],`${c.concept}是${c.content}。`));
        });
        this.baseId = id; return qs;
    },

    genKeyConceptsB() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"植物的主要类群",content:"藻类苔藓蕨类裸子被子植物",unit:"unit3"},
            {concept:"动物的主要类群",content:"无脊椎动物和脊椎动物",unit:"unit1"},
            {concept:"微生物的主要类群",content:"细菌真菌病毒",unit:"unit2"},
            {concept:"人体的八大系统",content:"运动消化呼吸循环泌尿神经内分泌生殖",unit:"unit1"},
            {concept:"植物的六大器官",content:"根茎叶花果实种子",unit:"unit3"},
            {concept:"细胞的基本结构",content:"细胞膜细胞质细胞核",unit:"unit4"},
            {concept:"植物细胞特有结构",content:"细胞壁叶绿体液泡",unit:"unit4"},
            {concept:"动物细胞特有结构",content:"中心体",unit:"unit4"},
            {concept:"生态系统的功能",content:"能量流动物质循环信息传递",unit:"unit11"},
            {concept:"食物链的特点",content:"以生产者开始以最高消费者结束",unit:"unit11"},
            {concept:"能量流动的特点",content:"单向流动逐级递减",unit:"unit11"},
            {concept:"物质循环的特点",content:"循环往复反复利用",unit:"unit11"},
            {concept:"免疫的类型",content:"非特异性免疫和特异性免疫",unit:"unit8"},
            {concept:"传染病流行的环节",content:"传染源传播途径易感人群",unit:"unit8"},
            {concept:"预防传染病的措施",content:"控制传染源切断传播途径保护易感人群",unit:"unit8"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,c.unit,"medium",`${c.concept}是`,c.content,["无内容","随机","不确定"],`${c.concept}是${c.content}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genKeyConceptsA(),...this.genKeyConceptsB()]; }
};
