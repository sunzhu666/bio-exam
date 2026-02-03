// 超大题库生成器121 - 细胞结构深化
const giantGen121 = {
    baseId: 770000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genCellStructureA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"细胞膜的主要成分是",c:"磷脂和蛋白质",w:["纤维素","淀粉","核酸"],u:"unit2"},
            {q:"细胞膜的功能是",c:"控制物质进出",w:["储存遗传信息","进行光合作用","合成蛋白质"],u:"unit2"},
            {q:"细胞质的功能是",c:"进行各种生命活动的场所",w:["储存遗传信息","控制物质进出","保护细胞"],u:"unit2"},
            {q:"细胞核的功能是",c:"储存和传递遗传信息",w:["进行光合作用","控制物质进出","储存能量"],u:"unit2"},
            {q:"染色体的主要成分是",c:"DNA和蛋白质",w:["RNA","脂肪","糖类"],u:"unit2"},
            {q:"DNA的功能是",c:"携带遗传信息",w:["储存能量","催化反应","运输物质"],u:"unit2"},
            {q:"线粒体的功能是",c:"进行呼吸作用释放能量",w:["进行光合作用","合成蛋白质","储存遗传信息"],u:"unit2"},
            {q:"叶绿体的功能是",c:"进行光合作用",w:["进行呼吸作用","合成蛋白质","储存遗传信息"],u:"unit2"},
            {q:"液泡的功能是",c:"储存物质调节细胞内环境",w:["进行光合作用","进行呼吸作用","合成蛋白质"],u:"unit2"},
            {q:"细胞壁的功能是",c:"保护和支持细胞",w:["控制物质进出","储存遗传信息","进行光合作用"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genCellStructureB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"核糖体的功能是",c:"合成蛋白质",w:["进行光合作用","进行呼吸作用","储存遗传信息"],u:"unit2"},
            {q:"内质网的功能是",c:"加工和运输蛋白质",w:["进行光合作用","储存遗传信息","控制物质进出"],u:"unit2"},
            {q:"高尔基体的功能是",c:"加工和分泌蛋白质",w:["进行光合作用","进行呼吸作用","储存遗传信息"],u:"unit2"},
            {q:"溶酶体的功能是",c:"分解衰老的细胞器",w:["合成蛋白质","进行光合作用","储存遗传信息"],u:"unit2"},
            {q:"中心体的功能是",c:"参与细胞分裂",w:["进行光合作用","合成蛋白质","储存遗传信息"],u:"unit2"},
            {q:"细胞骨架的功能是",c:"维持细胞形态",w:["进行光合作用","储存遗传信息","控制物质进出"],u:"unit2"},
            {q:"核仁的功能是",c:"合成核糖体RNA",w:["储存DNA","进行光合作用","控制物质进出"],u:"unit2"},
            {q:"核膜的功能是",c:"控制核质之间的物质交换",w:["进行光合作用","合成蛋白质","储存能量"],u:"unit2"},
            {q:"细胞器中含有DNA的是",c:"线粒体和叶绿体",w:["核糖体","内质网","高尔基体"],u:"unit2"},
            {q:"细胞器中含有核糖体的是",c:"线粒体叶绿体细胞质",w:["液泡","细胞壁","细胞膜"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genCellStructureA(),...this.genCellStructureB()]; }
};
