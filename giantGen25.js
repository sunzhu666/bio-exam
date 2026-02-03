// 超大题库生成器25 - 人体耳朵
const giantGen25 = {
    baseId: 290000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEarStructure() {
        const qs = []; let id = this.baseId;
        const structures = [
            {structure:"耳廓",func:"收集声波",feature:"软骨支撑",part:"外耳"},
            {structure:"外耳道",func:"传导声波",feature:"有耵聍腺",part:"外耳"},
            {structure:"鼓膜",func:"将声波转为振动",feature:"薄膜状",part:"中耳"},
            {structure:"听小骨",func:"放大和传导振动",feature:"三块小骨",part:"中耳"},
            {structure:"咽鼓管",func:"平衡鼓室气压",feature:"连接咽部",part:"中耳"},
            {structure:"耳蜗",func:"感受声波产生神经冲动",feature:"蜗牛状",part:"内耳"},
            {structure:"前庭",func:"感受头部位置变化",feature:"有耳石",part:"内耳"},
            {structure:"半规管",func:"感受头部旋转",feature:"三个互相垂直",part:"内耳"},
            {structure:"听神经",func:"传导听觉信息",feature:"神经纤维",part:"神经"}
        ];
        structures.forEach(s => {
            qs.push(this.makeQ(id++,"unit9","medium",`耳朵${s.structure}的功能是`,s.func,["无功能","随机","不确定"],`${s.structure}的功能是${s.func}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`耳朵${s.structure}的特点是`,s.feature,["无特点","随机","不确定"],`${s.structure}${s.feature}。`));
            qs.push(this.makeQ(id++,"unit9","easy",`耳朵${s.structure}属于`,s.part,["无部分","随机","不确定"],`${s.structure}属于${s.part}。`));
        });
        this.baseId = id; return qs;
    },

    genHearingProcess() {
        const qs = []; let id = this.baseId;
        const steps = [
            {step:"声波收集",structure:"耳廓",action:"收集声波",next:"外耳道"},
            {step:"声波传导",structure:"外耳道",action:"传导声波到鼓膜",next:"鼓膜"},
            {step:"声波转振动",structure:"鼓膜",action:"振动",next:"听小骨"},
            {step:"振动放大",structure:"听小骨",action:"放大振动",next:"耳蜗"},
            {step:"振动转神经冲动",structure:"耳蜗",action:"产生神经冲动",next:"听神经"},
            {step:"神经冲动传导",structure:"听神经",action:"传导到大脑",next:"听觉中枢"},
            {step:"听觉形成",structure:"大脑皮层听觉中枢",action:"产生听觉",next:"无"}
        ];
        steps.forEach(s => {
            qs.push(this.makeQ(id++,"unit9","medium",`听觉形成过程中${s.step}的结构是`,s.structure,["无结构","随机","不确定"],`${s.step}在${s.structure}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`听觉形成过程中${s.step}的作用是`,s.action,["无作用","随机","不确定"],`${s.step}${s.action}。`));
            if(s.next !== "无") {
                qs.push(this.makeQ(id++,"unit9","hard",`听觉形成过程中${s.step}后传到`,s.next,["无下一步","随机","不确定"],`${s.step}后传到${s.next}。`));
            }
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEarStructure(),...this.genHearingProcess()]; }
};
