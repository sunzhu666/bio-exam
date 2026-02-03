// 超大题库生成器86 - 生物分类详解
const giantGen86 = {
    baseId: 595000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genClassificationLevels() {
        const qs = []; let id = this.baseId;
        const levels = [
            {level:"界",example:"动物界植物界",feature:"最大分类单位"},
            {level:"门",example:"脊索动物门",feature:"按身体结构分"},
            {level:"纲",example:"哺乳纲鸟纲",feature:"按主要特征分"},
            {level:"目",example:"灵长目食肉目",feature:"按生活习性分"},
            {level:"科",example:"猫科犬科",feature:"按形态特征分"},
            {level:"属",example:"猫属豹属",feature:"按亲缘关系分"},
            {level:"种",example:"家猫虎",feature:"最基本分类单位"}
        ];
        levels.forEach(l => {
            qs.push(this.makeQ(id++,"unit1","medium",`分类等级${l.level}的例子是`,l.example,["无例子","随机","不确定"],`${l.level}如${l.example}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`分类等级${l.level}的特点是`,l.feature,["无特点","随机","不确定"],`${l.level}是${l.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genNamingRules() {
        const qs = []; let id = this.baseId;
        const rules = [
            {rule:"双名法",content:"属名+种加词",creator:"林奈"},
            {rule:"学名",language:"拉丁文",format:"斜体"},
            {rule:"分类依据",basis:"形态结构生理功能",modern:"DNA序列"},
            {rule:"分类意义",purpose:"认识生物多样性",application:"保护利用生物"}
        ];
        rules.forEach(r => {
            qs.push(this.makeQ(id++,"unit1","hard",`${r.rule}的内容是`,r.content||r.basis||r.purpose,["无内容","随机","不确定"],`${r.rule}是${r.content||r.basis||r.purpose}。`));
            if(r.creator) qs.push(this.makeQ(id++,"unit1","hard",`${r.rule}的创立者是`,r.creator,["无创立者","随机","不确定"],`${r.rule}由${r.creator}创立。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genClassificationLevels(),...this.genNamingRules()]; }
};
