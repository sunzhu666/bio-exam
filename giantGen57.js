// 超大题库生成器57 - 环境问题
const giantGen57 = {
    baseId: 450000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEnvironmentalProblems() {
        const qs = []; let id = this.baseId;
        const problems = [
            {problem:"温室效应",cause:"二氧化碳增多",effect:"全球变暖",solution:"减少化石燃料使用"},
            {problem:"臭氧层破坏",cause:"氟利昂等物质",effect:"紫外线增强",solution:"禁用氟利昂"},
            {problem:"酸雨",cause:"二氧化硫氮氧化物",effect:"腐蚀建筑伤害植物",solution:"减少废气排放"},
            {problem:"水体富营养化",cause:"氮磷过多",effect:"藻类大量繁殖",solution:"减少污水排放"},
            {problem:"土地荒漠化",cause:"过度放牧砍伐",effect:"土地退化",solution:"植树造林"},
            {problem:"生物入侵",cause:"外来物种引入",effect:"破坏生态平衡",example:"水葫芦"}
        ];
        problems.forEach(p => {
            qs.push(this.makeQ(id++,"unit11","medium",`${p.problem}的原因是`,p.cause,["无原因","随机","不确定"],`${p.problem}由${p.cause}引起。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${p.problem}的影响是`,p.effect,["无影响","随机","不确定"],`${p.problem}导致${p.effect}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${p.problem}的解决方法是`,p.solution,["无方法","随机","不确定"],`${p.problem}可通过${p.solution}解决。`));
        });
        this.baseId = id; return qs;
    },

    genSustainableDevelopment() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"可持续发展",definition:"满足当代需求不损害后代",principle:"经济社会环境协调"},
            {concept:"低碳生活",method:"减少碳排放",example:"节约用电绿色出行"},
            {concept:"垃圾分类",purpose:"资源回收利用",category:"可回收有害厨余其他"},
            {concept:"节约用水",method:"循环利用",importance:"水资源有限"},
            {concept:"绿色消费",principle:"减少浪费",example:"使用环保产品"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,"unit11","easy",`${c.concept}的定义是`,c.definition||c.method,["无定义","随机","不确定"],`${c.concept}是${c.definition||c.method}。`));
            if(c.example) qs.push(this.makeQ(id++,"unit11","easy",`${c.concept}的例子是`,c.example,["无例子","随机","不确定"],`${c.concept}如${c.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEnvironmentalProblems(),...this.genSustainableDevelopment()]; }
};
