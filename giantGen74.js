// 超大题库生成器74 - 神经系统深化
const giantGen74 = {
    baseId: 535000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genNeuronStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"细胞体",function:"代谢中心",content:"细胞核和细胞质"},
            {part:"树突",function:"接受刺激",feature:"短而多分支"},
            {part:"轴突",function:"传导兴奋",feature:"长而少分支"},
            {part:"突触",structure:"突触前膜突触间隙突触后膜",function:"神经元之间传递信息"},
            {part:"神经递质",example:"乙酰胆碱多巴胺",function:"传递信息"},
            {part:"髓鞘",function:"绝缘加速传导",cell:"施万细胞形成"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit9","hard",`神经元${p.part}的功能是`,p.function,["无功能","随机","不确定"],`${p.part}${p.function}。`));
            if(p.feature) qs.push(this.makeQ(id++,"unit9","hard",`神经元${p.part}的特点是`,p.feature,["无特点","随机","不确定"],`${p.part}${p.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genNerveImpulse() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"静息电位",state:"外正内负",cause:"钾离子外流"},
            {concept:"动作电位",state:"外负内正",cause:"钠离子内流"},
            {concept:"兴奋传导",direction:"双向传导",speed:"有髓神经快"},
            {concept:"突触传递",direction:"单向传递",reason:"递质只能由前膜释放"},
            {concept:"兴奋性突触",effect:"使后膜兴奋",递质:"乙酰胆碱"},
            {concept:"抑制性突触",effect:"使后膜抑制",递质:"γ-氨基丁酸"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,"unit9","hard",`${c.concept}的状态是`,c.state||c.direction||c.effect,["无状态","随机","不确定"],`${c.concept}${c.state||c.direction||c.effect}。`));
            qs.push(this.makeQ(id++,"unit9","hard",`${c.concept}的原因是`,c.cause||c.reason,["无原因","随机","不确定"],`${c.concept}因为${c.cause||c.reason}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genNeuronStructure(),...this.genNerveImpulse()]; }
};
