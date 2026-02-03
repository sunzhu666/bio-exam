// 超大题库生成器138 - 感觉器官深化
const giantGen138 = {
    baseId: 855000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genSenseOrgansA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"眼球的结构包括",c:"眼球壁和内容物",w:["只有眼球壁","只有晶状体","只有视网膜"],u:"unit9"},
            {q:"眼球壁的三层结构是",c:"外膜中膜内膜",w:["只有一层","只有两层","四层"],u:"unit9"},
            {q:"眼球的折光系统包括",c:"角膜房水晶状体玻璃体",w:["只有晶状体","只有角膜","只有玻璃体"],u:"unit9"},
            {q:"眼球的感光细胞位于",c:"视网膜",w:["角膜","晶状体","虹膜"],u:"unit9"},
            {q:"调节进入眼球光线多少的结构是",c:"瞳孔",w:["晶状体","视网膜","角膜"],u:"unit9"},
            {q:"调节眼球折光能力的结构是",c:"晶状体",w:["瞳孔","视网膜","角膜"],u:"unit9"},
            {q:"近视眼的成因是",c:"晶状体曲度过大或眼球前后径过长",w:["晶状体曲度过小","眼球前后径过短","视网膜损伤"],u:"unit9"},
            {q:"近视眼的矫正方法是",c:"配戴凹透镜",w:["配戴凸透镜","手术切除晶状体","不需要矫正"],u:"unit9"},
            {q:"远视眼的成因是",c:"晶状体曲度过小或眼球前后径过短",w:["晶状体曲度过大","眼球前后径过长","视网膜损伤"],u:"unit9"},
            {q:"远视眼的矫正方法是",c:"配戴凸透镜",w:["配戴凹透镜","手术切除晶状体","不需要矫正"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genSenseOrgansB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"耳的结构包括",c:"外耳中耳内耳",w:["只有外耳","只有中耳","只有内耳"],u:"unit9"},
            {q:"外耳包括",c:"耳廓和外耳道",w:["鼓膜","听小骨","耳蜗"],u:"unit9"},
            {q:"中耳包括",c:"鼓膜鼓室听小骨咽鼓管",w:["耳廓","耳蜗","前庭"],u:"unit9"},
            {q:"内耳包括",c:"耳蜗前庭半规管",w:["鼓膜","听小骨","外耳道"],u:"unit9"},
            {q:"听觉感受器位于",c:"耳蜗",w:["鼓膜","听小骨","外耳道"],u:"unit9"},
            {q:"平衡感受器位于",c:"前庭和半规管",w:["耳蜗","鼓膜","听小骨"],u:"unit9"},
            {q:"鼓膜的功能是",c:"将声波转变为振动",w:["感受声音","放大振动","传导神经冲动"],u:"unit9"},
            {q:"听小骨的功能是",c:"传导和放大振动",w:["感受声音","产生神经冲动","调节音量"],u:"unit9"},
            {q:"咽鼓管的功能是",c:"平衡鼓膜两侧气压",w:["传导声音","感受声音","产生听觉"],u:"unit9"},
            {q:"听觉形成的部位是",c:"大脑皮层听觉中枢",w:["耳蜗","鼓膜","听小骨"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genSenseOrgansA(),...this.genSenseOrgansB()]; }
};
