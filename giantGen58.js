// 超大题库生成器58 - 实验设计原则
const giantGen58 = {
    baseId: 455000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genExperimentPrinciples() {
        const qs = []; let id = this.baseId;
        const principles = [
            {principle:"对照原则",definition:"设置对照组和实验组",purpose:"排除无关变量影响"},
            {principle:"单一变量原则",definition:"只改变一个变量",purpose:"确定因果关系"},
            {principle:"重复原则",definition:"多次重复实验",purpose:"减少偶然误差"},
            {principle:"随机原则",definition:"随机分组取样",purpose:"避免人为偏差"},
            {principle:"科学性原则",definition:"实验设计合理",purpose:"保证结果可靠"},
            {principle:"可行性原则",definition:"实验条件可实现",purpose:"保证实验能完成"}
        ];
        principles.forEach(p => {
            qs.push(this.makeQ(id++,"unit1","hard",`${p.principle}的定义是`,p.definition,["无定义","随机","不确定"],`${p.principle}是${p.definition}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${p.principle}的目的是`,p.purpose,["无目的","随机","不确定"],`${p.principle}为了${p.purpose}。`));
        });
        this.baseId = id; return qs;
    },

    genVariables() {
        const qs = []; let id = this.baseId;
        const variables = [
            {variable:"自变量",definition:"人为改变的变量",example:"光照强度温度"},
            {variable:"因变量",definition:"随自变量变化的变量",example:"光合作用速率"},
            {variable:"无关变量",definition:"除自变量外的其他变量",treatment:"保持相同"},
            {variable:"对照组",definition:"不做处理的组",purpose:"作为比较标准"},
            {variable:"实验组",definition:"接受处理的组",purpose:"观察实验效果"},
            {variable:"空白对照",definition:"不加任何处理",example:"不加酶的试管"}
        ];
        variables.forEach(v => {
            qs.push(this.makeQ(id++,"unit1","hard",`${v.variable}的定义是`,v.definition,["无定义","随机","不确定"],`${v.variable}是${v.definition}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${v.variable}的例子是`,v.example||v.purpose||v.treatment,["无例子","随机","不确定"],`${v.variable}如${v.example||v.purpose||v.treatment}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genExperimentPrinciples(),...this.genVariables()]; }
};
