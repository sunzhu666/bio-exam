// 超大题库生成器103 - 呼吸作用补充
const giantGen103 = {
    baseId: 680000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genRespirationA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"呼吸作用的原料是",c:"有机物和氧气",w:["二氧化碳和水","无机盐","光能"],u:"unit3"},
            {q:"呼吸作用的产物是",c:"二氧化碳和水",w:["有机物和氧气","淀粉","蛋白质"],u:"unit3"},
            {q:"呼吸作用的场所是",c:"线粒体",w:["叶绿体","细胞核","核糖体"],u:"unit3"},
            {q:"呼吸作用的能量转变是",c:"化学能转变为其他形式能量",w:["光能转变为化学能","热能转变为化学能","机械能转变为化学能"],u:"unit3"},
            {q:"呼吸作用释放的气体是",c:"二氧化碳",w:["氧气","氮气","水蒸气"],u:"unit3"},
            {q:"呼吸作用吸收的气体是",c:"氧气",w:["二氧化碳","氮气","水蒸气"],u:"unit3"},
            {q:"呼吸作用进行的时间是",c:"昼夜都进行",w:["只在白天","只在夜晚","只在有光时"],u:"unit3"},
            {q:"呼吸作用的意义是",c:"为生命活动提供能量",w:["制造有机物","释放氧气","储存能量"],u:"unit3"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genRespirationB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"有氧呼吸的特点是",c:"需要氧气释放能量多",w:["不需要氧气","释放能量少","产生酒精"],u:"unit3"},
            {q:"无氧呼吸的特点是",c:"不需要氧气释放能量少",w:["需要氧气","释放能量多","产生水"],u:"unit3"},
            {q:"酵母菌无氧呼吸的产物是",c:"酒精和二氧化碳",w:["乳酸","水","氧气"],u:"unit3"},
            {q:"人体肌肉无氧呼吸的产物是",c:"乳酸",w:["酒精","二氧化碳","水"],u:"unit3"},
            {q:"储存粮食时要保持干燥的原因是",c:"抑制呼吸作用",w:["促进光合作用","增加营养","美观"],u:"unit3"},
            {q:"储存水果时要低温的原因是",c:"降低呼吸作用强度",w:["促进光合作用","增加甜度","美观"],u:"unit3"},
            {q:"松土的作用是",c:"促进根的呼吸作用",w:["减少蒸腾","增加光合作用","美观"],u:"unit3"},
            {q:"萝卜放久变空心的原因是",c:"呼吸作用消耗有机物",w:["光合作用","蒸腾作用","吸收作用"],u:"unit3"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genRespirationA(),...this.genRespirationB()]; }
};
