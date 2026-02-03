// 超大题库生成器7 - 生物分类详细
const giantGen7 = {
    baseId: 200000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genClassificationLevels() {
        const qs = []; let id = this.baseId;
        const levels = [
            {level:"界",example:"动物界植物界",feature:"最大分类单位",organisms:"包含最多生物"},
            {level:"门",example:"脊索动物门",feature:"第二大分类单位",organisms:"包含多个纲"},
            {level:"纲",example:"哺乳纲鸟纲",feature:"中等分类单位",organisms:"包含多个目"},
            {level:"目",example:"灵长目食肉目",feature:"中等分类单位",organisms:"包含多个科"},
            {level:"科",example:"猫科犬科",feature:"较小分类单位",organisms:"包含多个属"},
            {level:"属",example:"猫属犬属",feature:"较小分类单位",organisms:"包含多个种"},
            {level:"种",example:"家猫野猫",feature:"最小分类单位",organisms:"同种能繁殖"}
        ];
        levels.forEach(l => {
            qs.push(this.makeQ(id++,"unit1","medium",`${l.level}的例子是`,l.example,["无例子","随机","不确定"],`${l.level}如${l.example}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${l.level}的特点是`,l.feature,["无特点","随机","不确定"],`${l.level}是${l.feature}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${l.level}包含的生物特点是`,l.organisms,["无特点","随机","不确定"],`${l.level}${l.organisms}。`));
        });
        this.baseId = id; return qs;
    },

    genSpeciesExamples() {
        const qs = []; let id = this.baseId;
        const species = [
            {name:"人",kingdom:"动物界",phylum:"脊索动物门",class:"哺乳纲",order:"灵长目",family:"人科"},
            {name:"狗",kingdom:"动物界",phylum:"脊索动物门",class:"哺乳纲",order:"食肉目",family:"犬科"},
            {name:"猫",kingdom:"动物界",phylum:"脊索动物门",class:"哺乳纲",order:"食肉目",family:"猫科"},
            {name:"麻雀",kingdom:"动物界",phylum:"脊索动物门",class:"鸟纲",order:"雀形目",family:"雀科"},
            {name:"青蛙",kingdom:"动物界",phylum:"脊索动物门",class:"两栖纲",order:"无尾目",family:"蛙科"},
            {name:"鲫鱼",kingdom:"动物界",phylum:"脊索动物门",class:"硬骨鱼纲",order:"鲤形目",family:"鲤科"},
            {name:"蝗虫",kingdom:"动物界",phylum:"节肢动物门",class:"昆虫纲",order:"直翅目",family:"蝗科"},
            {name:"蚯蚓",kingdom:"动物界",phylum:"环节动物门",class:"寡毛纲",order:"单向蚓目",family:"正蚓科"},
            {name:"水稻",kingdom:"植物界",phylum:"被子植物门",class:"单子叶植物纲",order:"禾本目",family:"禾本科"},
            {name:"大豆",kingdom:"植物界",phylum:"被子植物门",class:"双子叶植物纲",order:"豆目",family:"豆科"}
        ];
        species.forEach(s => {
            qs.push(this.makeQ(id++,"unit1","easy",`${s.name}属于`,s.kingdom,["植物界","真菌界","原生生物界"],`${s.name}属于${s.kingdom}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${s.name}属于`,s.phylum,["软体动物门","腔肠动物门","随机"],`${s.name}属于${s.phylum}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${s.name}属于`,s.class,["爬行纲","两栖纲","随机"],`${s.name}属于${s.class}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${s.name}属于`,s.order,["随机目","不确定目","无目"],`${s.name}属于${s.order}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${s.name}属于`,s.family,["随机科","不确定科","无科"],`${s.name}属于${s.family}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genClassificationLevels(),...this.genSpeciesExamples()]; }
};
