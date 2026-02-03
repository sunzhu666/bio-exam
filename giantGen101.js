// 超大题库生成器101 - 细胞结构补充
const giantGen101 = {
    baseId: 670000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genCellStructureA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"细胞膜的主要成分是",c:"磷脂和蛋白质",w:["纤维素","淀粉","核酸"],u:"unit4"},
            {q:"细胞壁的主要成分是",c:"纤维素和果胶",w:["蛋白质","脂肪","核酸"],u:"unit4"},
            {q:"细胞核的功能是",c:"控制生命活动",w:["光合作用","呼吸作用","消化"],u:"unit4"},
            {q:"核糖体的功能是",c:"合成蛋白质",w:["合成脂肪","合成糖类","分解物质"],u:"unit4"},
            {q:"线粒体被称为",c:"动力车间",w:["养料制造车间","控制中心","仓库"],u:"unit4"},
            {q:"叶绿体被称为",c:"养料制造车间",w:["动力车间","控制中心","仓库"],u:"unit4"},
            {q:"液泡的功能是",c:"储存物质调节渗透压",w:["合成蛋白质","呼吸作用","光合作用"],u:"unit4"},
            {q:"高尔基体的功能是",c:"加工分泌蛋白质",w:["合成蛋白质","呼吸作用","光合作用"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genCellStructureB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"植物细胞特有的结构是",c:"细胞壁叶绿体液泡",w:["线粒体","核糖体","细胞膜"],u:"unit4"},
            {q:"动物细胞特有的结构是",c:"中心体",w:["细胞壁","叶绿体","液泡"],u:"unit4"},
            {q:"原核细胞没有的结构是",c:"以核膜为界限的细胞核",w:["细胞膜","核糖体","DNA"],u:"unit4"},
            {q:"细菌的遗传物质位于",c:"拟核",w:["细胞核","线粒体","叶绿体"],u:"unit2"},
            {q:"病毒的结构是",c:"蛋白质外壳和核酸",w:["细胞膜","细胞核","线粒体"],u:"unit2"},
            {q:"最小的细胞是",c:"支原体",w:["细菌","病毒","红细胞"],u:"unit2"},
            {q:"没有细胞结构的生物是",c:"病毒",w:["细菌","真菌","原生动物"],u:"unit2"},
            {q:"单细胞生物的例子是",c:"草履虫变形虫",w:["蚯蚓","水螅","海葵"],u:"unit1"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genCellStructureA(),...this.genCellStructureB()]; }
};
