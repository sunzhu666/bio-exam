// 超大题库生成器43 - 生物圈
const giantGen43 = {
    baseId: 380000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBiosphere() {
        const qs = []; let id = this.baseId;
        const aspects = [
            {aspect:"生物圈范围",content:"大气圈下层水圈岩石圈上层",thickness:"约20千米"},
            {aspect:"生物圈特点",content:"最大的生态系统",feature:"包含所有生物"},
            {aspect:"大气圈",content:"空气层",life:"鸟类昆虫细菌",height:"对流层"},
            {aspect:"水圈",content:"地球上的水",life:"水生生物",depth:"深海也有生物"},
            {aspect:"岩石圈",content:"地壳表层",life:"土壤生物",depth:"数米深"},
            {aspect:"生物圈的统一性",content:"物质循环能量流动",feature:"相互联系"},
            {aspect:"生物圈的稳定性",content:"自我调节能力",feature:"有一定限度"},
            {aspect:"人类对生物圈的影响",content:"破坏和保护",example:"污染和环保"}
        ];
        aspects.forEach(a => {
            qs.push(this.makeQ(id++,"unit11","medium",`${a.aspect}是`,a.content,["无内容","随机","不确定"],`${a.aspect}是${a.content}。`));
            if(a.thickness) {
                qs.push(this.makeQ(id++,"unit11","medium",`${a.aspect}的厚度是`,a.thickness,["无厚度","随机","不确定"],`${a.aspect}${a.thickness}。`));
            }
            if(a.feature) {
                qs.push(this.makeQ(id++,"unit11","medium",`${a.aspect}的特点是`,a.feature,["无特点","随机","不确定"],`${a.aspect}${a.feature}。`));
            }
            if(a.life) {
                qs.push(this.makeQ(id++,"unit11","medium",`${a.aspect}中的生物有`,a.life,["无生物","随机","不确定"],`${a.aspect}有${a.life}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genEcosystemStability() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"生态平衡",def:"生态系统相对稳定状态",feature:"动态平衡",factor:"自我调节"},
            {concept:"抵抗力稳定性",def:"抵抗外界干扰的能力",feature:"物种越多越强",factor:"生物多样性"},
            {concept:"恢复力稳定性",def:"恢复原状的能力",feature:"与抵抗力相反",factor:"环境条件"},
            {concept:"负反馈调节",def:"使偏离减小的调节",example:"捕食者与猎物",effect:"维持稳定"},
            {concept:"正反馈调节",def:"使偏离增大的调节",example:"湖泊富营养化",effect:"破坏稳定"},
            {concept:"生态系统的自我调节",def:"自动调节能力",feature:"有一定限度",basis:"负反馈调节"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}的定义是`,c.def,["无定义","随机","不确定"],`${c.concept}是${c.def}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}的特点是`,c.feature,["无特点","随机","不确定"],`${c.concept}${c.feature}。`));
            if(c.factor) {
                qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}的影响因素是`,c.factor,["无因素","随机","不确定"],`${c.concept}受${c.factor}影响。`));
            }
            if(c.example) {
                qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}的例子是`,c.example,["无例子","随机","不确定"],`${c.concept}如${c.example}。`));
            }
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBiosphere(),...this.genEcosystemStability()]; }
};
