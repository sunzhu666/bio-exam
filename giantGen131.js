// 超大题库生成器131 - 人体免疫深化
const giantGen131 = {
    baseId: 820000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genImmunityA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"人体的三道防线中第一道防线是",c:"皮肤和黏膜",w:["吞噬细胞","淋巴细胞","抗体"],u:"unit9"},
            {q:"人体的第二道防线是",c:"体液中的杀菌物质和吞噬细胞",w:["皮肤","淋巴细胞","抗体"],u:"unit9"},
            {q:"人体的第三道防线是",c:"免疫器官和免疫细胞",w:["皮肤","黏膜","吞噬细胞"],u:"unit9"},
            {q:"非特异性免疫的特点是",c:"生来就有对多种病原体有效",w:["后天获得","只对特定病原体有效","需要抗体"],u:"unit9"},
            {q:"特异性免疫的特点是",c:"后天获得只对特定病原体有效",w:["生来就有","对所有病原体有效","不需要抗体"],u:"unit9"},
            {q:"抗原是指",c:"能引起机体产生免疫反应的物质",w:["抗体","淋巴细胞","吞噬细胞"],u:"unit9"},
            {q:"抗体是指",c:"机体受抗原刺激产生的特殊蛋白质",w:["抗原","淋巴细胞","病原体"],u:"unit9"},
            {q:"产生抗体的细胞是",c:"淋巴细胞",w:["红细胞","白细胞","血小板"],u:"unit9"},
            {q:"抗体的作用是",c:"与抗原特异性结合使其失去致病性",w:["吞噬病原体","分解病原体","产生抗原"],u:"unit9"},
            {q:"疫苗的成分是",c:"灭活或减毒的病原体",w:["抗体","抗生素","维生素"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genImmunityB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"接种疫苗属于",c:"人工免疫",w:["自然免疫","非特异性免疫","被动免疫"],u:"unit9"},
            {q:"接种疫苗后机体产生的是",c:"抗体和记忆细胞",w:["抗原","病原体","红细胞"],u:"unit9"},
            {q:"计划免疫的目的是",c:"预防传染病",w:["治疗传染病","消灭病原体","增强体质"],u:"unit9"},
            {q:"免疫的功能包括",c:"防御感染清除异物监控突变",w:["只有防御","只有清除","只有监控"],u:"unit9"},
            {q:"免疫功能过强会导致",c:"过敏反应",w:["免疫缺陷","感染增加","肿瘤"],u:"unit9"},
            {q:"免疫功能过弱会导致",c:"易感染和肿瘤",w:["过敏反应","自身免疫病","排斥反应"],u:"unit9"},
            {q:"艾滋病病毒攻击的细胞是",c:"淋巴细胞",w:["红细胞","血小板","神经细胞"],u:"unit9"},
            {q:"艾滋病的传播途径不包括",c:"空气传播",w:["血液传播","性传播","母婴传播"],u:"unit9"},
            {q:"器官移植排斥反应属于",c:"免疫反应",w:["过敏反应","自身免疫","免疫缺陷"],u:"unit9"},
            {q:"自身免疫病是指",c:"免疫系统攻击自身组织",w:["免疫功能缺失","过敏反应","感染疾病"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genImmunityA(),...this.genImmunityB()]; }
};
