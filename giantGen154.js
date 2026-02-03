// 超大题库生成器154 - 中考真题精选B
const giantGen154 = {
    baseId: 935000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genExamQuestionsC() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"人体消化食物和吸收营养的主要场所是",c:"小肠",w:["胃","大肠","口腔"],u:"unit5"},
            {q:"下列消化液中不含消化酶的是",c:"胆汁",w:["唾液","胃液","肠液"],u:"unit5"},
            {q:"淀粉在口腔中被初步消化成",c:"麦芽糖",w:["葡萄糖","氨基酸","脂肪酸"],u:"unit5"},
            {q:"蛋白质最终被消化成",c:"氨基酸",w:["葡萄糖","脂肪酸","麦芽糖"],u:"unit5"},
            {q:"脂肪最终被消化成",c:"甘油和脂肪酸",w:["葡萄糖","氨基酸","麦芽糖"],u:"unit5"},
            {q:"人体呼吸系统的主要器官是",c:"肺",w:["鼻","气管","支气管"],u:"unit6"},
            {q:"肺泡适于气体交换的特点不包括",c:"肺泡壁有肌肉",w:["肺泡壁薄","肺泡数量多","肺泡外有毛细血管"],u:"unit6"},
            {q:"吸气时膈肌和肋间肌的状态是",c:"收缩",w:["舒张","不变","先收缩后舒张"],u:"unit6"},
            {q:"呼气时胸廓的变化是",c:"缩小",w:["扩大","不变","先大后小"],u:"unit6"},
            {q:"血液的组成是",c:"血浆和血细胞",w:["只有红细胞","只有白细胞","只有血小板"],u:"unit7"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genExamQuestionsD() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"红细胞的主要功能是",c:"运输氧气",w:["运输二氧化碳","吞噬病菌","止血凝血"],u:"unit7"},
            {q:"白细胞的主要功能是",c:"吞噬病菌",w:["运输氧气","止血凝血","运输营养"],u:"unit7"},
            {q:"血小板的主要功能是",c:"止血和凝血",w:["运输氧气","吞噬病菌","运输营养"],u:"unit7"},
            {q:"心脏四个腔中壁最厚的是",c:"左心室",w:["右心室","左心房","右心房"],u:"unit7"},
            {q:"体循环的起点是",c:"左心室",w:["右心室","左心房","右心房"],u:"unit7"},
            {q:"肺循环的起点是",c:"右心室",w:["左心室","左心房","右心房"],u:"unit7"},
            {q:"尿液形成的场所是",c:"肾脏",w:["膀胱","输尿管","尿道"],u:"unit8"},
            {q:"肾单位的组成是",c:"肾小球肾小囊肾小管",w:["只有肾小球","只有肾小管","肾脏和输尿管"],u:"unit8"},
            {q:"原尿和血浆相比不含有",c:"血细胞和大分子蛋白质",w:["水","无机盐","葡萄糖"],u:"unit8"},
            {q:"尿液和原尿相比不含有",c:"葡萄糖",w:["水","无机盐","尿素"],u:"unit8"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genExamQuestionsC(),...this.genExamQuestionsD()]; }
};
