// 超大题库生成器24 - 人体眼睛
const giantGen24 = {
    baseId: 285000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEyeStructure() {
        const qs = []; let id = this.baseId;
        const structures = [
            {structure:"角膜",func:"折射光线",feature:"透明无血管",location:"眼球最前方"},
            {structure:"虹膜",func:"调节瞳孔大小",feature:"有色素",location:"晶状体前方"},
            {structure:"瞳孔",func:"控制进光量",feature:"可调节大小",location:"虹膜中央"},
            {structure:"晶状体",func:"折射光线调节焦距",feature:"双凸透明",location:"虹膜后方"},
            {structure:"玻璃体",func:"支撑眼球折射光线",feature:"透明胶状",location:"晶状体后方"},
            {structure:"视网膜",func:"感受光刺激",feature:"有感光细胞",location:"眼球内壁"},
            {structure:"视神经",func:"传导视觉信息",feature:"神经纤维束",location:"眼球后方"},
            {structure:"巩膜",func:"保护眼球",feature:"白色坚韧",location:"眼球外层"},
            {structure:"脉络膜",func:"营养眼球",feature:"有血管色素",location:"巩膜内侧"},
            {structure:"睫状体",func:"调节晶状体",feature:"有睫状肌",location:"虹膜后方"}
        ];
        structures.forEach(s => {
            qs.push(this.makeQ(id++,"unit9","medium",`眼睛${s.structure}的功能是`,s.func,["无功能","随机","不确定"],`${s.structure}的功能是${s.func}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`眼睛${s.structure}的特点是`,s.feature,["无特点","随机","不确定"],`${s.structure}${s.feature}。`));
            qs.push(this.makeQ(id++,"unit9","easy",`眼睛${s.structure}位于`,s.location,["无位置","随机","不确定"],`${s.structure}在${s.location}。`));
        });
        this.baseId = id; return qs;
    },

    genVisionProblems() {
        const qs = []; let id = this.baseId;
        const problems = [
            {problem:"近视",cause:"眼球前后径过长或晶状体曲度过大",image:"成像在视网膜前",correction:"凹透镜"},
            {problem:"远视",cause:"眼球前后径过短或晶状体曲度过小",image:"成像在视网膜后",correction:"凸透镜"},
            {problem:"散光",cause:"角膜或晶状体曲率不均",image:"成像不清晰",correction:"柱面镜"},
            {problem:"老花眼",cause:"晶状体弹性下降",image:"看近物模糊",correction:"凸透镜"},
            {problem:"白内障",cause:"晶状体混浊",image:"视力下降",correction:"手术更换晶状体"},
            {problem:"青光眼",cause:"眼压升高",image:"视野缺损",correction:"降眼压治疗"},
            {problem:"色盲",cause:"视锥细胞缺陷",image:"不能分辨颜色",correction:"无法矫正"},
            {problem:"夜盲症",cause:"缺乏维生素A",image:"暗处看不清",correction:"补充维生素A"}
        ];
        problems.forEach(p => {
            qs.push(this.makeQ(id++,"unit9","hard",`${p.problem}的原因是`,p.cause,["无原因","随机","不确定"],`${p.problem}由${p.cause}引起。`));
            qs.push(this.makeQ(id++,"unit9","hard",`${p.problem}的成像特点是`,p.image,["无特点","随机","不确定"],`${p.problem}${p.image}。`));
            qs.push(this.makeQ(id++,"unit9","hard",`${p.problem}的矫正方法是`,p.correction,["无方法","随机","不确定"],`${p.problem}用${p.correction}矫正。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEyeStructure(),...this.genVisionProblems()]; }
};
