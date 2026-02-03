// 超大题库生成器80 - 能量流动
const giantGen80 = {
    baseId: 565000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEnergyFlow() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"能量流动的起点",answer:"生产者固定的太阳能",process:"光合作用"},
            {concept:"能量流动的渠道",answer:"食物链和食物网",direction:"沿食物链传递"},
            {concept:"能量流动的特点",feature:"单向流动逐级递减",efficiency:"10%-20%"},
            {concept:"能量传递效率",range:"10%-20%",meaning:"下一营养级获得的能量比例"},
            {concept:"能量金字塔",shape:"上小下大",reason:"能量逐级递减"},
            {concept:"生态系统的能量来源",source:"太阳能",exception:"化能合成作用"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}是`,c.answer||c.feature||c.source,["无答案","随机","不确定"],`${c.concept}是${c.answer||c.feature||c.source}。`));
            if(c.efficiency) qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}的效率是`,c.efficiency||c.range,["无效率","随机","不确定"],`${c.concept}效率为${c.efficiency||c.range}。`));
        });
        this.baseId = id; return qs;
    },

    genEnergyCalculation() {
        const qs = []; let id = this.baseId;
        const problems = [
            {problem:"生产者能量去向",answer:"呼吸消耗流向下一营养级分解者",total:"同化量"},
            {problem:"消费者能量来源",answer:"摄入量减去粪便量",equal:"同化量"},
            {problem:"最高营养级获能最少原因",reason:"能量逐级递减",loss:"呼吸消耗"},
            {problem:"缩短食物链的意义",benefit:"减少能量损失",application:"农业生产"},
            {problem:"能量流动的意义",significance:"帮助人们合理调整能量流动",application:"提高能量利用率"}
        ];
        problems.forEach(p => {
            qs.push(this.makeQ(id++,"unit11","hard",`${p.problem}是`,p.answer||p.reason||p.significance,["无答案","随机","不确定"],`${p.problem}是${p.answer||p.reason||p.significance}。`));
            if(p.application) qs.push(this.makeQ(id++,"unit11","hard",`${p.problem}的应用是`,p.application,["无应用","随机","不确定"],`${p.problem}应用于${p.application}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEnergyFlow(),...this.genEnergyCalculation()]; }
};
