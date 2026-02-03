// 超大题库生成器41 - 人体骨骼详细
const giantGen41 = {
    baseId: 370000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBoneStructure() {
        const qs = []; let id = this.baseId;
        const structures = [
            {structure:"骨膜",func:"营养和再生",feature:"有血管神经",location:"骨的表面"},
            {structure:"骨密质",func:"支撑",feature:"致密坚硬",location:"骨的外层"},
            {structure:"骨松质",func:"减轻重量",feature:"呈蜂窝状",location:"骨的内部"},
            {structure:"骨髓腔",func:"容纳骨髓",feature:"长骨中央",content:"黄骨髓或红骨髓"},
            {structure:"红骨髓",func:"造血",feature:"有造血功能",location:"骨松质内"},
            {structure:"黄骨髓",func:"储存脂肪",feature:"失去造血功能",location:"成人长骨骨髓腔"},
            {structure:"骨骺",func:"骨的生长",feature:"长骨两端",content:"有骺软骨"},
            {structure:"关节软骨",func:"减少摩擦",feature:"光滑有弹性",location:"关节面"}
        ];
        structures.forEach(s => {
            qs.push(this.makeQ(id++,"unit1","medium",`骨的${s.structure}的功能是`,s.func,["无功能","随机","不确定"],`${s.structure}的功能是${s.func}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`骨的${s.structure}的特点是`,s.feature,["无特点","随机","不确定"],`${s.structure}${s.feature}。`));
            qs.push(this.makeQ(id++,"unit1","easy",`骨的${s.structure}位于`,s.location || s.content,["无位置","随机","不确定"],`${s.structure}${s.location || s.content}。`));
        });
        this.baseId = id; return qs;
    },

    genJointStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"关节面",func:"骨的接触面",feature:"覆盖关节软骨",importance:"减少摩擦"},
            {part:"关节囊",func:"连接两骨",feature:"结缔组织",importance:"保护关节"},
            {part:"关节腔",func:"容纳滑液",feature:"密闭空间",importance:"润滑"},
            {part:"滑液",func:"润滑减少摩擦",feature:"黏稠液体",importance:"营养关节软骨"},
            {part:"韧带",func:"加固关节",feature:"结缔组织",importance:"限制活动范围"},
            {part:"关节盘",func:"缓冲压力",feature:"纤维软骨",location:"某些关节内"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit1","medium",`关节${p.part}的功能是`,p.func,["无功能","随机","不确定"],`${p.part}的功能是${p.func}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`关节${p.part}的特点是`,p.feature,["无特点","随机","不确定"],`${p.part}${p.feature}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`关节${p.part}的重要性是`,p.importance || p.location,["无重要性","随机","不确定"],`${p.part}${p.importance || p.location}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBoneStructure(),...this.genJointStructure()]; }
};
