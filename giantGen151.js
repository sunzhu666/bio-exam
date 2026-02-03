// 超大题库生成器151 - 易错题精选A
const giantGen151 = {
    baseId: 920000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genMistakesA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"珊瑚是生物还是非生物",c:"珊瑚礁是非生物珊瑚虫是生物",w:["都是生物","都是非生物","无法判断"],u:"unit1"},
            {q:"病毒有没有细胞结构",c:"没有细胞结构",w:["有细胞结构","有细胞核","有细胞膜"],u:"unit2"},
            {q:"细菌有没有成形的细胞核",c:"没有成形的细胞核",w:["有成形的细胞核","有核膜","有染色体"],u:"unit2"},
            {q:"洋葱表皮细胞有没有叶绿体",c:"没有叶绿体",w:["有叶绿体","能光合作用","是绿色的"],u:"unit2"},
            {q:"动脉中一定流动脉血吗",c:"不一定肺动脉流静脉血",w:["一定流动脉血","一定流静脉血","不流血"],u:"unit7"},
            {q:"静脉中一定流静脉血吗",c:"不一定肺静脉流动脉血",w:["一定流静脉血","一定流动脉血","不流血"],u:"unit7"},
            {q:"所有植物都能进行光合作用吗",c:"不是菌类植物不能",w:["都能","都不能","只有树能"],u:"unit4"},
            {q:"所有细胞都有线粒体吗",c:"不是成熟红细胞没有",w:["都有","都没有","只有植物有"],u:"unit2"},
            {q:"所有生物都由细胞构成吗",c:"不是病毒没有细胞结构",w:["都由细胞构成","都没有细胞","只有动物有"],u:"unit2"},
            {q:"呼吸作用只在夜间进行吗",c:"不是白天夜间都进行",w:["只在夜间","只在白天","不进行"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genMistakesB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"光合作用只在白天进行吗",c:"是的需要光照",w:["白天夜间都进行","只在夜间","不需要光"],u:"unit4"},
            {q:"植物呼吸作用消耗氧气吗",c:"是的消耗氧气释放二氧化碳",w:["不消耗氧气","释放氧气","不进行呼吸"],u:"unit4"},
            {q:"人体最大的细胞是什么",c:"成熟的卵细胞",w:["神经细胞","肌肉细胞","红细胞"],u:"unit10"},
            {q:"人体最小的细胞是什么",c:"成熟的红细胞",w:["白细胞","血小板","神经细胞"],u:"unit7"},
            {q:"血小板有没有细胞核",c:"没有细胞核",w:["有细胞核","有核膜","有染色体"],u:"unit7"},
            {q:"成熟红细胞有没有细胞核",c:"没有细胞核",w:["有细胞核","有核膜","有染色体"],u:"unit7"},
            {q:"植物的根能进行呼吸作用吗",c:"能进行呼吸作用",w:["不能","只有叶能","只有茎能"],u:"unit4"},
            {q:"种子萌发需要光照吗",c:"不需要光照",w:["需要光照","必须有光","只在白天萌发"],u:"unit3"},
            {q:"所有种子都有胚乳吗",c:"不是双子叶植物种子无胚乳",w:["都有胚乳","都无胚乳","只有玉米有"],u:"unit3"},
            {q:"受精作用发生在子房内吗",c:"是的发生在子房内的胚珠中",w:["发生在花粉中","发生在柱头上","发生在花药中"],u:"unit3"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genMistakesA(),...this.genMistakesB()]; }
};
