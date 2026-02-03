// 超大题库生成器29 - 果实结构
const giantGen29 = {
    baseId: 310000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genFruitStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"果皮",develop:"由子房壁发育而来",func:"保护种子",feature:"可分为外中内果皮"},
            {part:"种子",develop:"由胚珠发育而来",func:"繁殖后代",feature:"含有胚"},
            {part:"外果皮",develop:"子房壁外层",func:"保护",feature:"通常较薄"},
            {part:"中果皮",develop:"子房壁中层",func:"储存营养或保护",feature:"肉质或纤维质"},
            {part:"内果皮",develop:"子房壁内层",func:"保护种子",feature:"可硬可软"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","medium",`果实${p.part}的发育来源是`,p.develop,["无来源","随机","不确定"],`${p.part}${p.develop}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`果实${p.part}的功能是`,p.func,["无功能","随机","不确定"],`${p.part}的功能是${p.func}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`果实${p.part}的特点是`,p.feature,["无特点","随机","不确定"],`${p.part}${p.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genFruitTypes() {
        const qs = []; let id = this.baseId;
        const fruits = [
            {fruit:"苹果",type:"梨果",edible:"肉质花托",seed:"种子在果心"},
            {fruit:"桃",type:"核果",edible:"中果皮",seed:"种子在硬核内"},
            {fruit:"葡萄",type:"浆果",edible:"果皮和果肉",seed:"种子在果肉中"},
            {fruit:"西瓜",type:"瓠果",edible:"胎座",seed:"种子散布果肉中"},
            {fruit:"花生",type:"荚果",edible:"种子",seed:"种子在荚内"},
            {fruit:"向日葵",type:"瘦果",edible:"种子",seed:"果皮与种皮分离"},
            {fruit:"玉米",type:"颖果",edible:"种子",seed:"果皮与种皮愈合"},
            {fruit:"草莓",type:"聚合果",edible:"花托",seed:"瘦果在表面"},
            {fruit:"菠萝",type:"聚花果",edible:"肉质花序轴",seed:"多花发育"},
            {fruit:"橘子",type:"柑果",edible:"汁囊",seed:"种子在瓣中"}
        ];
        fruits.forEach(f => {
            qs.push(this.makeQ(id++,"unit3","hard",`${f.fruit}属于`,f.type,["无类型","随机","不确定"],`${f.fruit}是${f.type}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${f.fruit}的可食部分是`,f.edible,["无可食部分","随机","不确定"],`${f.fruit}可食部分是${f.edible}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${f.fruit}的种子特点是`,f.seed,["无特点","随机","不确定"],`${f.fruit}${f.seed}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genFruitStructure(),...this.genFruitTypes()]; }
};
