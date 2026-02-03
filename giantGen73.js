// 超大题库生成器73 - 呼吸作用深化
const giantGen73 = {
    baseId: 530000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genAerobicRespiration() {
        const qs = []; let id = this.baseId;
        const stages = [
            {stage:"第一阶段",location:"细胞质基质",process:"葡萄糖分解为丙酮酸",product:"少量ATP"},
            {stage:"第二阶段",location:"线粒体基质",process:"丙酮酸分解",product:"二氧化碳和少量ATP"},
            {stage:"第三阶段",location:"线粒体内膜",process:"氢与氧结合",product:"水和大量ATP"}
        ];
        stages.forEach(s => {
            qs.push(this.makeQ(id++,"unit3","hard",`有氧呼吸${s.stage}的场所是`,s.location,["无场所","随机","不确定"],`${s.stage}在${s.location}进行。`));
            qs.push(this.makeQ(id++,"unit3","hard",`有氧呼吸${s.stage}的过程是`,s.process,["无过程","随机","不确定"],`${s.stage}${s.process}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`有氧呼吸${s.stage}的产物是`,s.product,["无产物","随机","不确定"],`${s.stage}产生${s.product}。`));
        });
        this.baseId = id; return qs;
    },

    genAnaerobicRespiration() {
        const qs = []; let id = this.baseId;
        const types = [
            {type:"酒精发酵",organism:"酵母菌植物",product:"酒精和二氧化碳",location:"细胞质基质"},
            {type:"乳酸发酵",organism:"乳酸菌动物肌肉",product:"乳酸",location:"细胞质基质"},
            {type:"无氧呼吸特点",feature:"不需要氧气",energy:"释放少量能量"},
            {type:"无氧呼吸意义",significance:"缺氧时提供能量",example:"剧烈运动时肌肉"}
        ];
        types.forEach(t => {
            qs.push(this.makeQ(id++,"unit3","hard",`${t.type}的产物是`,t.product||t.feature,["无产物","随机","不确定"],`${t.type}产生${t.product||t.feature}。`));
            if(t.organism) qs.push(this.makeQ(id++,"unit3","hard",`${t.type}的生物是`,t.organism,["无生物","随机","不确定"],`${t.type}发生在${t.organism}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genAerobicRespiration(),...this.genAnaerobicRespiration()]; }
};
