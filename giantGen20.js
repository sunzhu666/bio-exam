// 超大题库生成器20 - 生物多样性
const giantGen20 = {
    baseId: 265000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBiodiversity() {
        const qs = []; let id = this.baseId;
        const levels = [
            {level:"基因多样性",def:"同种生物基因组成的差异",example:"不同品种的水稻",importance:"适应环境变化"},
            {level:"物种多样性",def:"生物种类的丰富程度",example:"热带雨林物种丰富",importance:"生态系统稳定"},
            {level:"生态系统多样性",def:"生态系统类型的多样",example:"森林草原湿地",importance:"维持生物圈稳定"}
        ];
        levels.forEach(l => {
            qs.push(this.makeQ(id++,"unit11","hard",`${l.level}的定义是`,l.def,["无定义","随机","不确定"],`${l.level}是${l.def}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`${l.level}的例子是`,l.example,["无例子","随机","不确定"],`${l.level}如${l.example}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`${l.level}的重要性是`,l.importance,["无重要性","随机","不确定"],`${l.level}${l.importance}。`));
        });
        this.baseId = id; return qs;
    },

    genEndangeredSpecies() {
        const qs = []; let id = this.baseId;
        const species = [
            {species:"大熊猫",status:"国家一级保护",habitat:"四川陕西甘肃",threat:"栖息地破坏"},
            {species:"金丝猴",status:"国家一级保护",habitat:"秦岭神农架",threat:"栖息地减少"},
            {species:"朱鹮",status:"国家一级保护",habitat:"陕西洋县",threat:"曾濒临灭绝"},
            {species:"藏羚羊",status:"国家一级保护",habitat:"青藏高原",threat:"盗猎"},
            {species:"白鳍豚",status:"功能性灭绝",habitat:"长江",threat:"水污染航运"},
            {species:"华南虎",status:"野外灭绝",habitat:"华南地区",threat:"栖息地丧失"},
            {species:"扬子鳄",status:"国家一级保护",habitat:"长江中下游",threat:"栖息地减少"},
            {species:"中华鲟",status:"国家一级保护",habitat:"长江",threat:"水坝阻隔"},
            {species:"银杉",status:"国家一级保护",habitat:"广西贵州",threat:"分布狭窄"},
            {species:"珙桐",status:"国家一级保护",habitat:"四川湖北",threat:"分布狭窄"}
        ];
        species.forEach(s => {
            qs.push(this.makeQ(id++,"unit11","medium",`${s.species}的保护级别是`,s.status,["无级别","随机","不确定"],`${s.species}是${s.status}动物。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${s.species}的栖息地是`,s.habitat,["无栖息地","随机","不确定"],`${s.species}生活在${s.habitat}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`${s.species}面临的威胁是`,s.threat,["无威胁","随机","不确定"],`${s.species}受到${s.threat}威胁。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBiodiversity(),...this.genEndangeredSpecies()]; }
};
