// 超大题库生成器146 - 细胞分裂深化
const giantGen146 = {
    baseId: 895000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genCellDivisionA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"细胞分裂的意义是",c:"使细胞数目增多",w:["使细胞体积增大","使细胞功能改变","使细胞死亡"],u:"unit2"},
            {q:"细胞生长的意义是",c:"使细胞体积增大",w:["使细胞数目增多","使细胞功能改变","使细胞死亡"],u:"unit2"},
            {q:"细胞分化的意义是",c:"形成不同功能的细胞",w:["使细胞数目增多","使细胞体积增大","使细胞死亡"],u:"unit2"},
            {q:"细胞分裂时染色体的变化是",c:"先复制后平均分配",w:["不复制不分配","只复制不分配","只分配不复制"],u:"unit2"},
            {q:"细胞分裂后染色体数目",c:"与原细胞相同",w:["是原细胞的两倍","是原细胞的一半","不确定"],u:"unit2"},
            {q:"细胞分裂后DNA数目",c:"与原细胞相同",w:["是原细胞的两倍","是原细胞的一半","不确定"],u:"unit2"},
            {q:"动物细胞分裂时细胞质分裂方式是",c:"从中央向四周缢裂",w:["从四周向中央","形成细胞板","不分裂"],u:"unit2"},
            {q:"植物细胞分裂时细胞质分裂方式是",c:"形成细胞板",w:["从中央向四周缢裂","从四周向中央","不分裂"],u:"unit2"},
            {q:"细胞分裂的顺序是",c:"核分裂质分裂",w:["质分裂核分裂","同时分裂","不分裂"],u:"unit2"},
            {q:"细胞分裂前DNA复制发生在",c:"间期",w:["前期","中期","后期"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genCellDivisionB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"有丝分裂的特点是",c:"染色体复制一次细胞分裂一次",w:["染色体复制两次","细胞分裂两次","染色体不复制"],u:"unit2"},
            {q:"有丝分裂的结果是",c:"产生两个与母细胞相同的子细胞",w:["产生四个子细胞","子细胞染色体减半","子细胞不同"],u:"unit2"},
            {q:"减数分裂的特点是",c:"染色体复制一次细胞分裂两次",w:["染色体复制两次","细胞分裂一次","染色体不复制"],u:"unit2"},
            {q:"减数分裂的结果是",c:"产生四个染色体减半的子细胞",w:["产生两个子细胞","子细胞染色体不变","子细胞相同"],u:"unit2"},
            {q:"减数分裂发生在",c:"生殖细胞形成过程中",w:["体细胞分裂","受精过程","胚胎发育"],u:"unit2"},
            {q:"受精作用的意义是",c:"恢复染色体数目",w:["减少染色体","增加染色体","不改变染色体"],u:"unit10"},
            {q:"细胞分化后细胞的遗传物质",c:"不变",w:["改变","减少","增加"],u:"unit2"},
            {q:"细胞分化后细胞的形态结构",c:"发生改变",w:["不变","完全相同","消失"],u:"unit2"},
            {q:"癌细胞的特点是",c:"无限分裂失去正常功能",w:["不分裂","正常分裂","分化正常"],u:"unit2"},
            {q:"干细胞的特点是",c:"能分裂分化成多种细胞",w:["不能分裂","不能分化","只能分裂"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genCellDivisionA(),...this.genCellDivisionB()]; }
};
