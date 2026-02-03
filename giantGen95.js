// 超大题库生成器95 - 人体感觉器官
const giantGen95 = {
    baseId: 640000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEyeStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"角膜",function:"透光折射光线",feature:"透明无血管"},
            {part:"虹膜",function:"调节瞳孔大小",feature:"有色素决定眼睛颜色"},
            {part:"瞳孔",function:"调节进光量",change:"光强时缩小光弱时扩大"},
            {part:"晶状体",function:"折射光线调节焦距",feature:"透明有弹性"},
            {part:"视网膜",function:"感受光刺激",cell:"感光细胞"},
            {part:"玻璃体",function:"支撑眼球折射光线",feature:"透明胶状"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit9","medium",`眼睛${p.part}的功能是`,p.function,["无功能","随机","不确定"],`${p.part}${p.function}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`眼睛${p.part}的特点是`,p.feature||p.change||p.cell,["无特点","随机","不确定"],`${p.part}${p.feature||p.change||p.cell}。`));
        });
        this.baseId = id; return qs;
    },

    genEarStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"耳廓",function:"收集声波",structure:"软骨"},
            {part:"外耳道",function:"传导声波",structure:"管道"},
            {part:"鼓膜",function:"将声波转为振动",feature:"薄膜"},
            {part:"听小骨",function:"传导放大振动",number:"三块"},
            {part:"耳蜗",function:"感受声音刺激",cell:"听觉感受器"},
            {part:"半规管",function:"感受头部位置变化",related:"平衡觉"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit9","medium",`耳朵${p.part}的功能是`,p.function,["无功能","随机","不确定"],`${p.part}${p.function}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEyeStructure(),...this.genEarStructure()]; }
};
