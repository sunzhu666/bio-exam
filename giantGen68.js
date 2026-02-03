// 超大题库生成器68 - 生态系统深化
const giantGen68 = {
    baseId: 505000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEcosystemTypes() {
        const qs = []; let id = this.baseId;
        const ecosystems = [
            {type:"森林生态系统",feature:"物种丰富结构复杂",function:"涵养水源调节气候",distribution:"湿润地区"},
            {type:"草原生态系统",feature:"草本植物为主",function:"防风固沙",distribution:"半干旱地区"},
            {type:"湿地生态系统",feature:"水陆过渡",function:"净化水质蓄洪防旱",example:"沼泽湖泊"},
            {type:"海洋生态系统",feature:"面积最大",function:"调节气候产生氧气",producer:"藻类"},
            {type:"淡水生态系统",feature:"水流动",type2:"河流湖泊池塘",function:"提供淡水资源"},
            {type:"农田生态系统",feature:"人工生态系统",function:"生产粮食",characteristic:"物种单一"},
            {type:"城市生态系统",feature:"人类主导",function:"人类居住",characteristic:"消费者为主"}
        ];
        ecosystems.forEach(e => {
            qs.push(this.makeQ(id++,"unit11","medium",`${e.type}的特点是`,e.feature,["无特点","随机","不确定"],`${e.type}${e.feature}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${e.type}的功能是`,e.function,["无功能","随机","不确定"],`${e.type}${e.function}。`));
        });
        this.baseId = id; return qs;
    },

    genEcologicalBalance() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"生态平衡",definition:"生态系统相对稳定状态",feature:"动态平衡"},
            {concept:"自我调节能力",factor:"物种越多能力越强",limit:"有一定限度"},
            {concept:"负反馈调节",effect:"使偏离减小",example:"捕食者与被捕食者"},
            {concept:"正反馈调节",effect:"使偏离加大",example:"湖泊富营养化"},
            {concept:"生态系统稳定性",type:"抵抗力稳定性和恢复力稳定性",relationship:"负相关"},
            {concept:"抵抗力稳定性",definition:"抵抗干扰的能力",factor:"物种越多越强"},
            {concept:"恢复力稳定性",definition:"恢复原状的能力",factor:"物种越少越强"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}的定义是`,c.definition||c.effect,["无定义","随机","不确定"],`${c.concept}是${c.definition||c.effect}。`));
            if(c.factor) qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}的影响因素是`,c.factor,["无因素","随机","不确定"],`${c.concept}${c.factor}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEcosystemTypes(),...this.genEcologicalBalance()]; }
};
