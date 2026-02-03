// 超大题库生成器83 - 自然选择学说
const giantGen83 = {
    baseId: 580000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genDarwinTheory() {
        const qs = []; let id = this.baseId;
        const points = [
            {point:"过度繁殖",content:"生物繁殖能力很强",result:"产生大量后代"},
            {point:"生存斗争",content:"生物之间争夺资源",type:"种内斗争种间斗争"},
            {point:"遗传变异",content:"生物存在可遗传的变异",importance:"进化的原材料"},
            {point:"适者生存",content:"适应环境的个体生存",result:"有利变异保留"},
            {point:"自然选择",definition:"自然界对生物的选择",result:"适者生存不适者淘汰"}
        ];
        points.forEach(p => {
            qs.push(this.makeQ(id++,"unit12","medium",`达尔文学说${p.point}的内容是`,p.content||p.definition,["无内容","随机","不确定"],`${p.point}是${p.content||p.definition}。`));
            qs.push(this.makeQ(id++,"unit12","medium",`达尔文学说${p.point}的结果是`,p.result,["无结果","随机","不确定"],`${p.point}导致${p.result}。`));
        });
        this.baseId = id; return qs;
    },

    genModernEvolution() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"种群",definition:"进化的基本单位",feature:"同种生物所有个体"},
            {concept:"基因库",definition:"种群中全部基因的总和",change:"进化的实质"},
            {concept:"基因频率",definition:"某基因占全部等位基因的比例",change:"进化的标志"},
            {concept:"突变",type:"基因突变和染色体变异",importance:"进化的原材料"},
            {concept:"隔离",type:"地理隔离和生殖隔离",result:"形成新物种"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,"unit12","hard",`现代进化论${c.concept}的定义是`,c.definition,["无定义","随机","不确定"],`${c.concept}是${c.definition}。`));
            if(c.type) qs.push(this.makeQ(id++,"unit12","hard",`${c.concept}的类型是`,c.type,["无类型","随机","不确定"],`${c.concept}包括${c.type}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genDarwinTheory(),...this.genModernEvolution()]; }
};
