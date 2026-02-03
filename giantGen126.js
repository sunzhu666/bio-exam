// 超大题库生成器126 - 神经调节深化
const giantGen126 = {
    baseId: 795000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genNervousA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"神经系统的组成是",c:"中枢神经系统和周围神经系统",w:["只有大脑","只有脊髓","只有神经"],u:"unit9"},
            {q:"中枢神经系统包括",c:"脑和脊髓",w:["只有大脑","只有神经","只有脊髓"],u:"unit9"},
            {q:"周围神经系统包括",c:"脑神经和脊神经",w:["只有大脑","只有脊髓","只有脑神经"],u:"unit9"},
            {q:"神经元的结构包括",c:"细胞体树突轴突",w:["只有细胞体","只有轴突","只有树突"],u:"unit9"},
            {q:"神经元的功能是",c:"接受刺激产生和传导兴奋",w:["只接受刺激","只传导兴奋","储存营养"],u:"unit9"},
            {q:"反射的结构基础是",c:"反射弧",w:["神经元","大脑","脊髓"],u:"unit9"},
            {q:"反射弧的组成是",c:"感受器传入神经神经中枢传出神经效应器",w:["只有神经中枢","只有感受器","只有效应器"],u:"unit9"},
            {q:"感受器的功能是",c:"接受刺激产生神经冲动",w:["传导冲动","分析处理信息","产生反应"],u:"unit9"},
            {q:"传入神经的功能是",c:"将冲动传向神经中枢",w:["将冲动传向效应器","接受刺激","产生反应"],u:"unit9"},
            {q:"神经中枢的功能是",c:"分析处理信息发出指令",w:["接受刺激","传导冲动","产生反应"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genNervousB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"传出神经的功能是",c:"将冲动传向效应器",w:["将冲动传向神经中枢","接受刺激","分析信息"],u:"unit9"},
            {q:"效应器的功能是",c:"接受冲动产生反应",w:["接受刺激","传导冲动","分析信息"],u:"unit9"},
            {q:"非条件反射的特点是",c:"生来就有不学而能",w:["后天学习获得","可以消退","需要大脑皮层参与"],u:"unit9"},
            {q:"条件反射的特点是",c:"后天学习获得可以消退",w:["生来就有","不学而能","不需要大脑皮层"],u:"unit9"},
            {q:"膝跳反射属于",c:"非条件反射",w:["条件反射","学习行为","本能行为"],u:"unit9"},
            {q:"望梅止渴属于",c:"条件反射",w:["非条件反射","先天行为","本能行为"],u:"unit9"},
            {q:"大脑皮层的功能是",c:"高级神经活动中枢",w:["呼吸中枢","心跳中枢","排尿中枢"],u:"unit9"},
            {q:"脊髓的功能是",c:"反射和传导",w:["只有反射","只有传导","思维活动"],u:"unit9"},
            {q:"小脑的功能是",c:"协调运动维持平衡",w:["思维活动","呼吸调节","心跳调节"],u:"unit9"},
            {q:"脑干的功能是",c:"调节心跳呼吸等基本生命活动",w:["思维活动","协调运动","学习记忆"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genNervousA(),...this.genNervousB()]; }
};
