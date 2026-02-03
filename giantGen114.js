// 超大题库生成器114 - 生态系统补充
const giantGen114 = {
    baseId: 735000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEcosystemA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"生态系统的组成是",c:"生物部分和非生物部分",w:["只有生物","只有环境","只有植物"],u:"unit11"},
            {q:"生态系统的生物部分包括",c:"生产者消费者分解者",w:["只有生产者","只有消费者","只有分解者"],u:"unit11"},
            {q:"生态系统的非生物部分包括",c:"阳光空气水温度等",w:["只有阳光","只有水","只有空气"],u:"unit11"},
            {q:"生产者主要是",c:"绿色植物",w:["动物","细菌","真菌"],u:"unit11"},
            {q:"消费者主要是",c:"动物",w:["植物","细菌","真菌"],u:"unit11"},
            {q:"分解者主要是",c:"细菌和真菌",w:["植物","动物","病毒"],u:"unit11"},
            {q:"生产者的作用是",c:"制造有机物",w:["分解有机物","消耗有机物","运输有机物"],u:"unit11"},
            {q:"分解者的作用是",c:"分解有机物",w:["制造有机物","消耗有机物","运输有机物"],u:"unit11"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genEcosystemB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"食物链的起点是",c:"生产者",w:["消费者","分解者","阳光"],u:"unit11"},
            {q:"食物链的终点是",c:"最高级消费者",w:["生产者","分解者","阳光"],u:"unit11"},
            {q:"食物链中不包括",c:"分解者",w:["生产者","消费者","植物"],u:"unit11"},
            {q:"能量流动的特点是",c:"单向流动逐级递减",w:["循环流动","逐级增加","双向流动"],u:"unit11"},
            {q:"物质循环的特点是",c:"循环往复反复利用",w:["单向流动","逐级递减","不能循环"],u:"unit11"},
            {q:"能量传递效率一般是",c:"10%-20%",w:["50%-60%","80%-90%","100%"],u:"unit11"},
            {q:"生态系统的自我调节能力",c:"有一定限度",w:["无限大","没有","只有森林有"],u:"unit11"},
            {q:"生态系统中物种越多",c:"自我调节能力越强",w:["自我调节能力越弱","没有影响","会崩溃"],u:"unit11"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEcosystemA(),...this.genEcosystemB()]; }
};
