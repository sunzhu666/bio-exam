// 超大题库生成器129 - 生态系统深化
const giantGen129 = {
    baseId: 810000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEcosystemA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"生态系统的组成是",c:"生物部分和非生物部分",w:["只有生物","只有环境","只有生产者"],u:"unit13"},
            {q:"生态系统中的生产者是",c:"绑色植物",w:["动物","细菌","真菌"],u:"unit13"},
            {q:"生态系统中的消费者是",c:"动物",w:["植物","细菌","真菌"],u:"unit13"},
            {q:"生态系统中的分解者是",c:"细菌和真菌",w:["植物","动物","病毒"],u:"unit13"},
            {q:"食物链的起点是",c:"生产者",w:["消费者","分解者","阳光"],u:"unit13"},
            {q:"食物链中不包括",c:"分解者",w:["生产者","消费者","植物"],u:"unit13"},
            {q:"食物网是由什么组成的",c:"多条食物链交织而成",w:["一条食物链","只有生产者","只有消费者"],u:"unit13"},
            {q:"能量流动的特点是",c:"单向流动逐级递减",w:["循环流动","逐级增加","双向流动"],u:"unit13"},
            {q:"能量流动的起点是",c:"生产者固定的太阳能",w:["消费者","分解者","无机环境"],u:"unit13"},
            {q:"物质循环的特点是",c:"循环往复反复利用",w:["单向流动","逐级递减","不能循环"],u:"unit13"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genEcosystemB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"碳循环的主要形式是",c:"二氧化碳",w:["氧气","水","有机物"],u:"unit13"},
            {q:"生态系统的自动调节能力与什么有关",c:"生物种类和数量",w:["面积大小","温度高低","水分多少"],u:"unit13"},
            {q:"生态平衡是指",c:"生态系统中各成分保持相对稳定",w:["完全不变","持续增长","持续减少"],u:"unit13"},
            {q:"破坏生态平衡的因素不包括",c:"正常的物质循环",w:["过度捕猎","环境污染","外来物种入侵"],u:"unit13"},
            {q:"生物富集是指",c:"有毒物质沿食物链逐级积累",w:["能量逐级递减","物质循环利用","生物数量增加"],u:"unit13"},
            {q:"生物富集中毒素浓度最高的是",c:"最高营养级生物",w:["生产者","初级消费者","分解者"],u:"unit13"},
            {q:"生态系统中能量的最终来源是",c:"太阳能",w:["化学能","热能","电能"],u:"unit13"},
            {q:"生态系统中能量的最终去向是",c:"以热能形式散失",w:["储存在生物体内","循环利用","转化为光能"],u:"unit13"},
            {q:"营养级越高的生物",c:"获得的能量越少",w:["获得的能量越多","能量不变","没有能量"],u:"unit13"},
            {q:"食物链越长",c:"能量损失越多",w:["能量损失越少","能量不变","能量增加"],u:"unit13"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEcosystemA(),...this.genEcosystemB()]; }
};
