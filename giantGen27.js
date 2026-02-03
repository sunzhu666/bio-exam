// 超大题库生成器27 - 种子结构
const giantGen27 = {
    baseId: 300000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genSeedStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"种皮",func:"保护种子",develop:"由珠被发育而来",feature:"坚硬"},
            {part:"胚",func:"发育成新植物",develop:"由受精卵发育而来",feature:"种子的主要部分"},
            {part:"胚芽",func:"发育成茎和叶",develop:"胚的一部分",feature:"位于胚轴上方"},
            {part:"胚轴",func:"发育成连接根茎的部分",develop:"胚的一部分",feature:"连接胚芽和胚根"},
            {part:"胚根",func:"发育成根",develop:"胚的一部分",feature:"位于胚轴下方"},
            {part:"子叶",func:"储存或转运营养",develop:"胚的一部分",feature:"单子叶或双子叶"},
            {part:"胚乳",func:"储存营养物质",develop:"由受精极核发育而来",feature:"有些种子无胚乳"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","medium",`种子${p.part}的功能是`,p.func,["无功能","随机","不确定"],`${p.part}的功能是${p.func}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`种子${p.part}的发育来源是`,p.develop,["无来源","随机","不确定"],`${p.part}${p.develop}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`种子${p.part}的特点是`,p.feature,["无特点","随机","不确定"],`${p.part}${p.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genSeedTypes() {
        const qs = []; let id = this.baseId;
        const seeds = [
            {seed:"菜豆种子",cotyledon:"2片",endosperm:"无胚乳",storage:"子叶储存营养"},
            {seed:"花生种子",cotyledon:"2片",endosperm:"无胚乳",storage:"子叶储存营养"},
            {seed:"玉米种子",cotyledon:"1片",endosperm:"有胚乳",storage:"胚乳储存营养"},
            {seed:"小麦种子",cotyledon:"1片",endosperm:"有胚乳",storage:"胚乳储存营养"},
            {seed:"水稻种子",cotyledon:"1片",endosperm:"有胚乳",storage:"胚乳储存营养"},
            {seed:"蓖麻种子",cotyledon:"2片",endosperm:"有胚乳",storage:"胚乳储存营养"},
            {seed:"向日葵种子",cotyledon:"2片",endosperm:"无胚乳",storage:"子叶储存营养"},
            {seed:"大豆种子",cotyledon:"2片",endosperm:"无胚乳",storage:"子叶储存营养"}
        ];
        seeds.forEach(s => {
            qs.push(this.makeQ(id++,"unit3","medium",`${s.seed}有几片子叶`,s.cotyledon,["无子叶","3片","随机"],`${s.seed}有${s.cotyledon}子叶。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${s.seed}的胚乳情况是`,s.endosperm,["有胚乳","无胚乳","随机"],`${s.seed}${s.endosperm}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${s.seed}的营养储存方式是`,s.storage,["无储存","随机","不确定"],`${s.seed}${s.storage}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genSeedStructure(),...this.genSeedTypes()]; }
};
