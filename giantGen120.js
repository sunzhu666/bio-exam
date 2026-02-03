// 超大题库生成器120 - 综合练习
const giantGen120 = {
    baseId: 765000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genComprehensiveC() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列不属于生物的是",c:"机器人",w:["细菌","病毒","蘑菇"],u:"unit1"},
            {q:"下列属于生物的是",c:"珊瑚虫",w:["珊瑚礁","钟乳石","水晶"],u:"unit1"},
            {q:"生物的基本特征不包括",c:"能进行光合作用",w:["能生长繁殖","能新陈代谢","能应激"],u:"unit1"},
            {q:"细胞是生命活动的基本单位这句话不适用于",c:"病毒",w:["细菌","植物","动物"],u:"unit4"},
            {q:"下列细胞中没有叶绿体的是",c:"洋葱表皮细胞",w:["叶肉细胞","保卫细胞","藻类细胞"],u:"unit4"},
            {q:"下列细胞中有细胞壁的是",c:"植物细胞",w:["人体细胞","动物细胞","红细胞"],u:"unit4"},
            {q:"观察细胞时使用的染色剂是",c:"碘液",w:["酒精","盐酸","石灰水"],u:"unit4"},
            {q:"显微镜放大倍数等于",c:"目镜倍数乘物镜倍数",w:["目镜倍数加物镜倍数","只看目镜","只看物镜"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genComprehensiveD() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列属于器官的是",c:"心脏",w:["心肌细胞","心肌组织","循环系统"],u:"unit1"},
            {q:"下列属于系统的是",c:"消化系统",w:["胃","小肠","肝脏"],u:"unit1"},
            {q:"植物体的结构层次是",c:"细胞组织器官植物体",w:["细胞组织系统植物体","细胞器官植物体","组织器官植物体"],u:"unit1"},
            {q:"动物体的结构层次是",c:"细胞组织器官系统动物体",w:["细胞组织器官动物体","细胞器官系统动物体","组织器官系统动物体"],u:"unit1"},
            {q:"下列不属于消化系统的是",c:"肾脏",w:["胃","小肠","肝脏"],u:"unit5"},
            {q:"下列不属于呼吸系统的是",c:"心脏",w:["鼻","气管","肺"],u:"unit6"},
            {q:"下列不属于循环系统的是",c:"肺",w:["心脏","血管","血液"],u:"unit7"},
            {q:"下列不属于神经系统的是",c:"甲状腺",w:["大脑","脊髓","神经"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genComprehensiveC(),...this.genComprehensiveD()]; }
};
