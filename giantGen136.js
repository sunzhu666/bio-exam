// 超大题库生成器136 - 生物分类深化
const giantGen136 = {
    baseId: 845000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genClassificationA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"生物分类的依据是",c:"形态结构和生理功能的相似程度",w:["只看外形","只看颜色","只看大小"],u:"unit1"},
            {q:"生物分类的等级从大到小是",c:"界门纲目科属种",w:["种属科目纲门界","科属种目纲门界","门界纲目科属种"],u:"unit1"},
            {q:"分类的基本单位是",c:"种",w:["界","门","纲"],u:"unit1"},
            {q:"同种生物的特点是",c:"能自然交配产生可育后代",w:["外形相同","生活环境相同","食物相同"],u:"unit1"},
            {q:"分类等级越高生物之间",c:"共同特征越少差异越大",w:["共同特征越多","差异越小","完全相同"],u:"unit1"},
            {q:"分类等级越低生物之间",c:"共同特征越多差异越小",w:["共同特征越少","差异越大","完全不同"],u:"unit1"},
            {q:"植物界包括",c:"藻类苔藓蕨类裸子被子植物",w:["只有被子植物","只有裸子植物","只有蕨类"],u:"unit1"},
            {q:"动物界包括",c:"无脊椎动物和脊椎动物",w:["只有脊椎动物","只有哺乳动物","只有鸟类"],u:"unit1"},
            {q:"藻类植物的特点是",c:"无根茎叶分化",w:["有根茎叶","有种子","有花"],u:"unit1"},
            {q:"苔藓植物的特点是",c:"有茎叶无根无输导组织",w:["有根","有种子","有花"],u:"unit1"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genClassificationB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"蕨类植物的特点是",c:"有根茎叶有输导组织无种子",w:["有种子","有花","无根茎叶"],u:"unit1"},
            {q:"裸子植物的特点是",c:"有种子种子裸露无果皮包被",w:["种子有果皮包被","无种子","有花"],u:"unit1"},
            {q:"被子植物的特点是",c:"有种子种子有果皮包被",w:["种子裸露","无种子","无花"],u:"unit1"},
            {q:"单子叶植物的特点是",c:"一片子叶平行叶脉须根系",w:["两片子叶","网状叶脉","直根系"],u:"unit1"},
            {q:"双子叶植物的特点是",c:"两片子叶网状叶脉直根系",w:["一片子叶","平行叶脉","须根系"],u:"unit1"},
            {q:"腔肠动物的特点是",c:"有口无肛门辐射对称",w:["有口有肛门","两侧对称","有脊柱"],u:"unit1"},
            {q:"扁形动物的特点是",c:"身体扁平两侧对称有口无肛门",w:["身体圆筒形","辐射对称","有肛门"],u:"unit1"},
            {q:"线形动物的特点是",c:"身体细长有口有肛门",w:["身体扁平","无肛门","有脊柱"],u:"unit1"},
            {q:"环节动物的特点是",c:"身体分节有刚毛或疣足",w:["身体不分节","有脊柱","有外骨骼"],u:"unit1"},
            {q:"软体动物的特点是",c:"身体柔软有外套膜",w:["身体坚硬","有外骨骼","有脊柱"],u:"unit1"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genClassificationA(),...this.genClassificationB()]; }
};
