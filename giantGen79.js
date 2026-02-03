// 超大题库生成器79 - 物质循环
const giantGen79 = {
    baseId: 560000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genCarbonCycle() {
        const qs = []; let id = this.baseId;
        const facts = [
            {topic:"碳在生物体内的形式",form:"有机物",example:"糖类脂肪蛋白质"},
            {topic:"碳在无机环境中的形式",form:"二氧化碳和碳酸盐",location:"大气水体土壤"},
            {topic:"碳进入生物群落的途径",process:"光合作用化能合成作用",organism:"生产者"},
            {topic:"碳返回无机环境的途径",process:"呼吸作用分解作用燃烧",form:"二氧化碳"},
            {topic:"碳循环的特点",feature:"全球性循环往复",range:"生物圈"}
        ];
        facts.forEach(f => {
            qs.push(this.makeQ(id++,"unit11","hard",`${f.topic}是`,f.form||f.process||f.feature,["无答案","随机","不确定"],`${f.topic}是${f.form||f.process||f.feature}。`));
            if(f.example) qs.push(this.makeQ(id++,"unit11","hard",`${f.topic}的例子是`,f.example,["无例子","随机","不确定"],`${f.topic}如${f.example}。`));
        });
        this.baseId = id; return qs;
    },

    genNitrogenCycle() {
        const qs = []; let id = this.baseId;
        const facts = [
            {topic:"氮在生物体内的形式",form:"蛋白质核酸",element:"含氮有机物"},
            {topic:"生物固氮",organism:"根瘤菌固氮菌",product:"氨"},
            {topic:"硝化作用",process:"氨转化为硝酸盐",organism:"硝化细菌"},
            {topic:"反硝化作用",process:"硝酸盐转化为氮气",organism:"反硝化细菌"},
            {topic:"氮循环的意义",significance:"维持生态系统氮平衡",importance:"生物生存必需"}
        ];
        facts.forEach(f => {
            qs.push(this.makeQ(id++,"unit11","hard",`${f.topic}是`,f.form||f.process||f.significance,["无答案","随机","不确定"],`${f.topic}是${f.form||f.process||f.significance}。`));
            if(f.organism) qs.push(this.makeQ(id++,"unit11","hard",`${f.topic}的生物是`,f.organism,["无生物","随机","不确定"],`${f.topic}由${f.organism}完成。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genCarbonCycle(),...this.genNitrogenCycle()]; }
};
