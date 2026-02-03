// 超大题库生成器175 - 专题复习E
const giantGen175 = {
    baseId: 1040000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genTopicI() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"血液由什么组成",c:"血浆和血细胞",w:["只有血浆","只有血细胞","血清和血细胞"],u:"unit7"},
            {q:"血浆的主要功能是",c:"运载血细胞运输营养物质和废物",w:["运输氧气","凝血","吞噬病菌"],u:"unit7"},
            {q:"红细胞的主要功能是",c:"运输氧气",w:["运输营养物质","凝血","吞噬病菌"],u:"unit7"},
            {q:"白细胞的主要功能是",c:"吞噬病菌防御疾病",w:["运输氧气","凝血","运输营养物质"],u:"unit7"},
            {q:"血小板的主要功能是",c:"止血和凝血",w:["运输氧气","吞噬病菌","运输营养物质"],u:"unit7"},
            {q:"红细胞中含有的物质是",c:"血红蛋白",w:["叶绿素","胆红素","黑色素"],u:"unit7"},
            {q:"血红蛋白的特性是",c:"氧多时与氧结合氧少时与氧分离",w:["始终与氧结合","始终与氧分离","不与氧反应"],u:"unit7"},
            {q:"贫血的原因可能是",c:"红细胞或血红蛋白过少",w:["白细胞过少","血小板过少","血浆过少"],u:"unit7"},
            {q:"发炎时血液中增多的是",c:"白细胞",w:["红细胞","血小板","血浆"],u:"unit7"},
            {q:"血友病患者缺乏的是",c:"凝血因子",w:["红细胞","白细胞","血浆蛋白"],u:"unit7"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"easy",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genTopicJ() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"心脏有几个腔",c:"四个",w:["两个","三个","一个"],u:"unit7"},
            {q:"心脏壁最厚的是",c:"左心室",w:["右心室","左心房","右心房"],u:"unit7"},
            {q:"左心室壁厚的原因是",c:"收缩力强将血液泵向全身",w:["接受血液多","储存血液","产生血液"],u:"unit7"},
            {q:"心房与心室之间有",c:"房室瓣",w:["动脉瓣","静脉瓣","毛细血管"],u:"unit7"},
            {q:"心室与动脉之间有",c:"动脉瓣",w:["房室瓣","静脉瓣","毛细血管"],u:"unit7"},
            {q:"瓣膜的作用是",c:"防止血液倒流",w:["加速血液流动","产生血液","储存血液"],u:"unit7"},
            {q:"体循环的起点是",c:"左心室",w:["右心室","左心房","右心房"],u:"unit7"},
            {q:"体循环的终点是",c:"右心房",w:["左心房","右心室","左心室"],u:"unit7"},
            {q:"肺循环的起点是",c:"右心室",w:["左心室","左心房","右心房"],u:"unit7"},
            {q:"肺循环的终点是",c:"左心房",w:["右心房","右心室","左心室"],u:"unit7"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genTopicI(),...this.genTopicJ()]; }
};
