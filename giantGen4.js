// 超大题库生成器4 - 人体呼吸系统
const giantGen4 = {
    baseId: 185000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genRespiratoryOrgans() {
        const qs = []; let id = this.baseId;
        const organs = [
            {organ:"鼻腔",func:"温暖湿润清洁空气",feature:"有鼻毛和黏膜",position:"呼吸道起始"},
            {organ:"咽",func:"气体和食物通道",feature:"是共同通道",position:"鼻腔后方"},
            {organ:"喉",func:"发声器官",feature:"有声带",position:"咽下方"},
            {organ:"气管",func:"气体通道",feature:"有C形软骨",position:"喉下方"},
            {organ:"支气管",func:"气体通道",feature:"分支进入肺",position:"气管分支"},
            {organ:"肺",func:"气体交换场所",feature:"由肺泡组成",position:"胸腔内"},
            {organ:"肺泡",func:"气体交换的基本单位",feature:"壁薄有毛细血管",position:"肺内"},
            {organ:"膈肌",func:"参与呼吸运动",feature:"收缩时下降",position:"胸腔腹腔之间"},
            {organ:"肋间肌",func:"参与呼吸运动",feature:"收缩时肋骨上升",position:"肋骨之间"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit6","medium",`${o.organ}的主要功能是`,o.func,["无功能","随机","不确定"],`${o.organ}的功能是${o.func}。`));
            qs.push(this.makeQ(id++,"unit6","medium",`${o.organ}的结构特点是`,o.feature,["无特点","随机","不确定"],`${o.organ}的特点是${o.feature}。`));
            qs.push(this.makeQ(id++,"unit6","easy",`${o.organ}位于`,o.position,["体外","随机","不确定"],`${o.organ}位于${o.position}。`));
        });
        this.baseId = id; return qs;
    },

    genBreathingProcess() {
        const qs = []; let id = this.baseId;
        const processes = [
            {process:"吸气时膈肌",state:"收缩下降",result:"胸腔容积增大"},
            {process:"吸气时肋间肌",state:"收缩",result:"肋骨上升外展"},
            {process:"吸气时胸腔",state:"容积增大",result:"肺扩张"},
            {process:"吸气时肺内气压",state:"低于外界",result:"气体进入肺"},
            {process:"呼气时膈肌",state:"舒张上升",result:"胸腔容积减小"},
            {process:"呼气时肋间肌",state:"舒张",result:"肋骨下降内收"},
            {process:"呼气时胸腔",state:"容积减小",result:"肺回缩"},
            {process:"呼气时肺内气压",state:"高于外界",result:"气体排出肺"},
            {process:"肺泡内气体交换",state:"O2进入血液CO2进入肺泡",result:"静脉血变动脉血"},
            {process:"组织内气体交换",state:"O2进入组织CO2进入血液",result:"动脉血变静脉血"}
        ];
        processes.forEach(p => {
            qs.push(this.makeQ(id++,"unit6","medium",`${p.process}的状态是`,p.state,["无状态","随机","不确定"],`${p.process}${p.state}。`));
            qs.push(this.makeQ(id++,"unit6","hard",`${p.process}的结果是`,p.result,["无结果","随机","不确定"],`${p.process}导致${p.result}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genRespiratoryOrgans(),...this.genBreathingProcess()]; }
};
