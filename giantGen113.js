// 超大题库生成器113 - 免疫系统补充
const giantGen113 = {
    baseId: 730000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genImmunityA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"人体的第一道防线是",c:"皮肤和黏膜",w:["吞噬细胞","淋巴细胞","抗体"],u:"unit8"},
            {q:"人体的第二道防线是",c:"吞噬细胞和体液中的杀菌物质",w:["皮肤","淋巴细胞","抗体"],u:"unit8"},
            {q:"人体的第三道防线是",c:"免疫器官和免疫细胞",w:["皮肤","吞噬细胞","黏膜"],u:"unit8"},
            {q:"非特异性免疫的特点是",c:"生来就有对多种病原体有效",w:["后天获得","只对一种病原体有效","需要抗体"],u:"unit8"},
            {q:"特异性免疫的特点是",c:"后天获得只对特定病原体有效",w:["生来就有","对多种病原体有效","不需要抗体"],u:"unit8"},
            {q:"抗原是",c:"能引起免疫反应的物质",w:["抗体","淋巴细胞","吞噬细胞"],u:"unit8"},
            {q:"抗体是",c:"淋巴细胞产生的特殊蛋白质",w:["抗原","病原体","吞噬细胞"],u:"unit8"},
            {q:"产生抗体的细胞是",c:"淋巴细胞",w:["吞噬细胞","红细胞","血小板"],u:"unit8"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genImmunityB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"疫苗的作用是",c:"刺激人体产生抗体",w:["直接杀死病原体","提供营养","治疗疾病"],u:"unit8"},
            {q:"接种疫苗属于",c:"特异性免疫",w:["非特异性免疫","先天性免疫","自然免疫"],u:"unit8"},
            {q:"计划免疫的目的是",c:"预防传染病",w:["治疗传染病","增强体质","补充营养"],u:"unit8"},
            {q:"免疫的功能不包括",c:"消化食物",w:["防御感染","自我稳定","免疫监视"],u:"unit8"},
            {q:"过敏反应是",c:"免疫功能过强",w:["免疫功能正常","免疫功能过弱","没有免疫功能"],u:"unit8"},
            {q:"艾滋病破坏的是",c:"免疫系统",w:["消化系统","呼吸系统","循环系统"],u:"unit8"},
            {q:"艾滋病的传播途径不包括",c:"蚊虫叮咬",w:["性传播","血液传播","母婴传播"],u:"unit8"},
            {q:"器官移植排斥反应属于",c:"免疫反应",w:["过敏反应","感染","中毒"],u:"unit8"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genImmunityA(),...this.genImmunityB()]; }
};
