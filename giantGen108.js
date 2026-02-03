// 超大题库生成器108 - 神经系统补充
const giantGen108 = {
    baseId: 705000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genNervousA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"神经系统的组成是",c:"中枢神经系统和周围神经系统",w:["只有大脑","只有脊髓","只有神经"],u:"unit9"},
            {q:"中枢神经系统包括",c:"脑和脊髓",w:["只有大脑","只有神经","感受器"],u:"unit9"},
            {q:"周围神经系统包括",c:"脑神经和脊神经",w:["大脑","脊髓","小脑"],u:"unit9"},
            {q:"神经系统的基本单位是",c:"神经元",w:["神经","大脑","脊髓"],u:"unit9"},
            {q:"神经元的结构包括",c:"细胞体和突起",w:["只有细胞体","只有突起","细胞壁"],u:"unit9"},
            {q:"神经元的突起包括",c:"树突和轴突",w:["只有树突","只有轴突","细胞体"],u:"unit9"},
            {q:"接受刺激产生兴奋的是",c:"树突",w:["轴突","细胞体","神经末梢"],u:"unit9"},
            {q:"传导兴奋的是",c:"轴突",w:["树突","细胞体","细胞核"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genNervousB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"反射的结构基础是",c:"反射弧",w:["神经元","大脑","脊髓"],u:"unit9"},
            {q:"反射弧的组成是",c:"感受器传入神经神经中枢传出神经效应器",w:["只有神经中枢","只有感受器","只有效应器"],u:"unit9"},
            {q:"膝跳反射的神经中枢在",c:"脊髓",w:["大脑","小脑","脑干"],u:"unit9"},
            {q:"条件反射的神经中枢在",c:"大脑皮层",w:["脊髓","小脑","脑干"],u:"unit9"},
            {q:"大脑皮层的功能是",c:"产生感觉形成意识",w:["维持平衡","调节心跳","调节呼吸"],u:"unit9"},
            {q:"小脑的功能是",c:"维持身体平衡协调运动",w:["产生感觉","调节心跳","调节呼吸"],u:"unit9"},
            {q:"脑干的功能是",c:"调节心跳呼吸等基本生命活动",w:["产生感觉","维持平衡","形成意识"],u:"unit9"},
            {q:"脊髓的功能是",c:"反射和传导",w:["只有反射","只有传导","产生感觉"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genNervousA(),...this.genNervousB()]; }
};
