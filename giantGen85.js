// 超大题库生成器85 - 生命起源
const giantGen85 = {
    baseId: 590000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genOriginOfLife() {
        const qs = []; let id = this.baseId;
        const theories = [
            {theory:"化学起源说",content:"无机物→有机小分子→有机大分子→原始生命",scientist:"奥巴林米勒"},
            {theory:"米勒实验",content:"模拟原始大气合成氨基酸",condition:"放电模拟闪电"},
            {theory:"原始大气成分",content:"甲烷氨气氢气水蒸气",feature:"无氧气"},
            {theory:"原始海洋",role:"生命诞生的摇篮",content:"有机物聚集"},
            {theory:"原始生命特点",feature:"异养厌氧",reason:"无氧气无有机物合成能力"}
        ];
        theories.forEach(t => {
            qs.push(this.makeQ(id++,"unit12","medium",`${t.theory}的内容是`,t.content||t.feature,["无内容","随机","不确定"],`${t.theory}是${t.content||t.feature}。`));
            if(t.scientist) qs.push(this.makeQ(id++,"unit12","medium",`${t.theory}的提出者是`,t.scientist,["无提出者","随机","不确定"],`${t.theory}由${t.scientist}提出。`));
        });
        this.baseId = id; return qs;
    },

    genEarlyLife() {
        const qs = []; let id = this.baseId;
        const stages = [
            {stage:"原核生物出现",time:"约35亿年前",type:"细菌蓝藻"},
            {stage:"光合作用出现",significance:"产生氧气",organism:"蓝藻"},
            {stage:"真核生物出现",time:"约20亿年前",feature:"有细胞核"},
            {stage:"有性生殖出现",significance:"加速进化",reason:"增加变异"},
            {stage:"多细胞生物出现",time:"约10亿年前",advantage:"分工合作"}
        ];
        stages.forEach(s => {
            qs.push(this.makeQ(id++,"unit12","hard",`${s.stage}的时间是`,s.time||s.significance,["无时间","随机","不确定"],`${s.stage}在${s.time||s.significance}。`));
            if(s.significance) qs.push(this.makeQ(id++,"unit12","hard",`${s.stage}的意义是`,s.significance,["无意义","随机","不确定"],`${s.stage}${s.significance}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genOriginOfLife(),...this.genEarlyLife()]; }
};
