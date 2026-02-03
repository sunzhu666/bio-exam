// 超大题库生成器78 - 种群群落
const giantGen78 = {
    baseId: 555000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPopulation() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"种群",definition:"同种生物所有个体的总和",feature:"同一时间同一地点"},
            {concept:"种群密度",definition:"单位面积或体积内的个体数",method:"样方法标志重捕法"},
            {concept:"出生率",definition:"单位时间出生个体数占总数比例",effect:"增加种群数量"},
            {concept:"死亡率",definition:"单位时间死亡个体数占总数比例",effect:"减少种群数量"},
            {concept:"年龄结构",type:"增长型稳定型衰退型",意义:"预测种群变化"},
            {concept:"性别比例",definition:"雌雄个体数目比例",effect:"影响出生率"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}的定义是`,c.definition,["无定义","随机","不确定"],`${c.concept}是${c.definition}。`));
            if(c.method) qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}的调查方法是`,c.method,["无方法","随机","不确定"],`${c.concept}用${c.method}调查。`));
        });
        this.baseId = id; return qs;
    },

    genCommunity() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"群落",definition:"同一地点所有生物的总和",component:"所有种群"},
            {concept:"物种丰富度",definition:"群落中物种数目",factor:"环境条件"},
            {concept:"群落结构",type:"垂直结构和水平结构",cause:"环境因素"},
            {concept:"垂直结构",feature:"分层现象",cause:"光照等因素"},
            {concept:"水平结构",feature:"镶嵌分布",cause:"地形土壤等"},
            {concept:"群落演替",definition:"群落随时间变化",type:"初生演替次生演替"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}的定义是`,c.definition||c.feature,["无定义","随机","不确定"],`${c.concept}是${c.definition||c.feature}。`));
            if(c.type) qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}的类型是`,c.type,["无类型","随机","不确定"],`${c.concept}包括${c.type}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPopulation(),...this.genCommunity()]; }
};
