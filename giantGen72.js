// 超大题库生成器72 - 光合作用深化
const giantGen72 = {
    baseId: 525000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genLightReaction() {
        const qs = []; let id = this.baseId;
        const facts = [
            {topic:"光反应场所",answer:"叶绿体类囊体薄膜",condition:"需要光"},
            {topic:"光反应过程",content:"水的光解",product:"氧气ATP NADPH"},
            {topic:"光反应能量转变",from:"光能",to:"ATP中活跃化学能"},
            {topic:"光反应产物去向",ATP:"用于暗反应",NADPH:"用于暗反应"},
            {topic:"光反应影响因素",factor:"光照强度",effect:"影响光反应速率"}
        ];
        facts.forEach(f => {
            qs.push(this.makeQ(id++,"unit3","hard",`${f.topic}是`,f.answer||f.content||f.from,["无答案","随机","不确定"],`${f.topic}是${f.answer||f.content||f.from}。`));
            if(f.product) qs.push(this.makeQ(id++,"unit3","hard",`${f.topic}的产物是`,f.product,["无产物","随机","不确定"],`${f.topic}产生${f.product}。`));
        });
        this.baseId = id; return qs;
    },

    genDarkReaction() {
        const qs = []; let id = this.baseId;
        const facts = [
            {topic:"暗反应场所",answer:"叶绿体基质",condition:"不需要光"},
            {topic:"暗反应过程",content:"二氧化碳固定和三碳化合物还原",product:"有机物"},
            {topic:"二氧化碳固定",process:"CO2与C5结合",product:"两个C3"},
            {topic:"三碳化合物还原",need:"ATP和NADPH",product:"有机物和C5"},
            {topic:"暗反应影响因素",factor:"二氧化碳浓度温度",effect:"影响酶活性"}
        ];
        facts.forEach(f => {
            qs.push(this.makeQ(id++,"unit3","hard",`${f.topic}是`,f.answer||f.content,["无答案","随机","不确定"],`${f.topic}是${f.answer||f.content}。`));
            if(f.product) qs.push(this.makeQ(id++,"unit3","hard",`${f.topic}的产物是`,f.product,["无产物","随机","不确定"],`${f.topic}产生${f.product}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genLightReaction(),...this.genDarkReaction()]; }
};
