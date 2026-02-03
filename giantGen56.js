// 超大题库生成器56 - 生物多样性
const giantGen56 = {
    baseId: 445000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBiodiversity() {
        const qs = []; let id = this.baseId;
        const levels = [
            {level:"基因多样性",definition:"基因的多种多样",example:"同种生物不同个体基因不同"},
            {level:"物种多样性",definition:"物种的多种多样",example:"地球上有数百万种生物"},
            {level:"生态系统多样性",definition:"生态系统的多种多样",example:"森林草原湿地等"},
            {level:"生物多样性价值",type:"直接价值",example:"食物药物工业原料"},
            {level:"生物多样性价值",type:"间接价值",example:"生态功能"},
            {level:"生物多样性价值",type:"潜在价值",example:"未知的利用价值"}
        ];
        levels.forEach(l => {
            qs.push(this.makeQ(id++,"unit11","medium",`${l.level}的定义是`,l.definition||l.type,["无定义","随机","不确定"],`${l.level}是${l.definition||l.type}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${l.level}的例子是`,l.example,["无例子","随机","不确定"],`${l.level}如${l.example}。`));
        });
        this.baseId = id; return qs;
    },

    genProtection() {
        const qs = []; let id = this.baseId;
        const measures = [
            {measure:"就地保护",method:"建立自然保护区",example:"大熊猫保护区"},
            {measure:"迁地保护",method:"动物园植物园",purpose:"保护濒危物种"},
            {measure:"离体保护",method:"种子库基因库",purpose:"保存遗传资源"},
            {measure:"法律保护",example:"野生动物保护法",purpose:"禁止非法捕猎"},
            {measure:"人工繁殖",example:"大熊猫人工繁殖",purpose:"增加种群数量"},
            {measure:"退耕还林",purpose:"恢复生态环境",effect:"增加生物栖息地"}
        ];
        measures.forEach(m => {
            qs.push(this.makeQ(id++,"unit11","medium",`${m.measure}的方法是`,m.method||m.example,["无方法","随机","不确定"],`${m.measure}通过${m.method||m.example}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${m.measure}的目的是`,m.purpose,["无目的","随机","不确定"],`${m.measure}为了${m.purpose}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBiodiversity(),...this.genProtection()]; }
};
