// 超大题库生成器21 - 食物链与能量流动
const giantGen21 = {
    baseId: 270000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genFoodChains() {
        const qs = []; let id = this.baseId;
        const chains = [
            {chain:"草→兔→狐",producer:"草",primary:"兔",secondary:"狐",levels:"3"},
            {chain:"草→蝗虫→青蛙→蛇→鹰",producer:"草",primary:"蝗虫",top:"鹰",levels:"5"},
            {chain:"浮游植物→浮游动物→小鱼→大鱼",producer:"浮游植物",primary:"浮游动物",top:"大鱼",levels:"4"},
            {chain:"树叶→毛虫→麻雀→鹰",producer:"树叶",primary:"毛虫",top:"鹰",levels:"4"},
            {chain:"水草→草鱼→鲶鱼",producer:"水草",primary:"草鱼",secondary:"鲶鱼",levels:"3"},
            {chain:"玉米→老鼠→猫头鹰",producer:"玉米",primary:"老鼠",secondary:"猫头鹰",levels:"3"},
            {chain:"藻类→水蚤→小鱼→翠鸟",producer:"藻类",primary:"水蚤",top:"翠鸟",levels:"4"},
            {chain:"青草→羊→狼",producer:"青草",primary:"羊",secondary:"狼",levels:"3"}
        ];
        chains.forEach(c => {
            qs.push(this.makeQ(id++,"unit11","medium",`食物链"${c.chain}"中生产者是`,c.producer,["无生产者","随机","不确定"],`${c.chain}的生产者是${c.producer}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`食物链"${c.chain}"中初级消费者是`,c.primary,["无消费者","随机","不确定"],`${c.chain}的初级消费者是${c.primary}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`食物链"${c.chain}"有几个营养级`,c.levels,["无营养级","随机","不确定"],`${c.chain}有${c.levels}个营养级。`));
            if(c.top) {
                qs.push(this.makeQ(id++,"unit11","hard",`食物链"${c.chain}"中最高营养级是`,c.top,["无最高级","随机","不确定"],`${c.chain}最高营养级是${c.top}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genEnergyFlow() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"能量流动特点",content:"单向流动逐级递减",reason:"呼吸消耗和未被利用"},
            {concept:"能量传递效率",content:"10%-20%",reason:"大部分能量被呼吸消耗"},
            {concept:"生产者能量来源",content:"太阳能",method:"光合作用固定"},
            {concept:"消费者能量来源",content:"食物中的化学能",method:"摄食获取"},
            {concept:"分解者能量来源",content:"死亡有机物",method:"分解获取"},
            {concept:"能量金字塔",content:"下宽上窄",reason:"能量逐级递减"},
            {concept:"生物量金字塔",content:"通常下宽上窄",reason:"能量限制生物量"},
            {concept:"数量金字塔",content:"可能倒置",reason:"个体大小差异"},
            {concept:"能量最终去向",content:"热能散失",reason:"呼吸作用释放"},
            {concept:"物质循环特点",content:"循环往复",reason:"物质可被重复利用"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}是`,c.content,["无内容","随机","不确定"],`${c.concept}是${c.content}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`${c.concept}的原因是`,c.reason,["无原因","随机","不确定"],`${c.concept}因为${c.reason}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genFoodChains(),...this.genEnergyFlow()]; }
};
