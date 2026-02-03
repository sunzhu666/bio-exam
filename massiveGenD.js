// 海量题库生成器D - 神经与内分泌系统
const massiveGenD = {
    baseId: 135000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genNervousSystem() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"大脑",func:"思维和意识中枢",location:"颅腔",feature:"有沟回"},
            {part:"小脑",func:"协调运动和平衡",location:"颅腔后下方",feature:"表面有横沟"},
            {part:"脑干",func:"连接大脑和脊髓",location:"大脑下方",feature:"有生命中枢"},
            {part:"脊髓",func:"传导和反射中枢",location:"椎管内",feature:"有灰质白质"},
            {part:"神经元",func:"传导神经冲动",location:"神经系统",feature:"有轴突树突"},
            {part:"突触",func:"神经元间传递信息",location:"神经元之间",feature:"有突触小泡"},
            {part:"感觉神经",func:"传入神经冲动",location:"周围神经",feature:"传向中枢"},
            {part:"运动神经",func:"传出神经冲动",location:"周围神经",feature:"传向效应器"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit9","medium",`${p.part}的主要功能是`,p.func,["无功能","随机","不确定"],`${p.part}的功能是${p.func}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`${p.part}位于`,p.location,["体外","随机","不确定"],`${p.part}位于${p.location}。`));
            qs.push(this.makeQ(id++,"unit9","hard",`${p.part}的特点是`,p.feature,["无特点","随机","不确定"],`${p.part}的特点是${p.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genEndocrineGlands() {
        const qs = []; let id = this.baseId;
        const glands = [
            {gland:"垂体",hormone:"生长激素",func:"促进生长发育",disease:"侏儒症/巨人症"},
            {gland:"甲状腺",hormone:"甲状腺激素",func:"促进新陈代谢",disease:"甲亢/甲减"},
            {gland:"胰岛",hormone:"胰岛素",func:"调节血糖",disease:"糖尿病"},
            {gland:"肾上腺",hormone:"肾上腺素",func:"应激反应",disease:"肾上腺功能异常"},
            {gland:"性腺",hormone:"性激素",func:"促进性发育",disease:"性发育异常"},
            {gland:"胸腺",hormone:"胸腺激素",func:"促进T细胞发育",disease:"免疫功能低下"}
        ];
        glands.forEach(g => {
            qs.push(this.makeQ(id++,"unit9","hard",`${g.gland}分泌的激素是`,g.hormone,["无激素","随机激素","不确定"],`${g.gland}分泌${g.hormone}。`));
            qs.push(this.makeQ(id++,"unit9","hard",`${g.hormone}的功能是`,g.func,["无功能","随机","不确定"],`${g.hormone}的功能是${g.func}。`));
            qs.push(this.makeQ(id++,"unit9","hard",`${g.gland}功能异常会导致`,g.disease,["无疾病","随机","不确定"],`${g.gland}异常导致${g.disease}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genNervousSystem(),...this.genEndocrineGlands()]; }
};
