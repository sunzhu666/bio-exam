// 超大题库生成器32 - 茎的结构
const giantGen32 = {
    baseId: 325000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genStemStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"表皮",func:"保护",feature:"最外层",location:"茎的外层"},
            {part:"皮层",func:"储存和光合作用",feature:"薄壁细胞",location:"表皮内侧"},
            {part:"维管束",func:"输导",feature:"含导管和筛管",location:"皮层内侧"},
            {part:"导管",func:"运输水和无机盐",feature:"死细胞管状",direction:"向上运输"},
            {part:"筛管",func:"运输有机物",feature:"活细胞管状",direction:"向下运输"},
            {part:"形成层",func:"使茎加粗",feature:"分裂能力强",location:"导管和筛管之间"},
            {part:"髓",func:"储存营养",feature:"薄壁细胞",location:"茎的中央"},
            {part:"木质部",func:"支撑和输导",feature:"含导管和木纤维",location:"形成层内侧"},
            {part:"韧皮部",func:"输导有机物",feature:"含筛管和韧皮纤维",location:"形成层外侧"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","medium",`茎的${p.part}的功能是`,p.func,["无功能","随机","不确定"],`${p.part}的功能是${p.func}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`茎的${p.part}的特点是`,p.feature,["无特点","随机","不确定"],`${p.part}${p.feature}。`));
            qs.push(this.makeQ(id++,"unit3","easy",`茎的${p.part}位于`,p.location || p.direction,["无位置","随机","不确定"],`${p.part}${p.location || p.direction}。`));
        });
        this.baseId = id; return qs;
    },

    genStemTypes() {
        const qs = []; let id = this.baseId;
        const types = [
            {type:"直立茎",feature:"垂直向上生长",example:"松树杨树",func:"支撑"},
            {type:"匍匐茎",feature:"沿地面生长",example:"草莓西瓜",func:"繁殖"},
            {type:"攀援茎",feature:"借助卷须攀援",example:"葡萄豌豆",func:"攀援"},
            {type:"缠绕茎",feature:"缠绕其他物体",example:"牵牛花菜豆",func:"攀援"},
            {type:"地下茎",feature:"生长在地下",example:"马铃薯姜",func:"储存营养"},
            {type:"肉质茎",feature:"储存水分",example:"仙人掌",func:"储存水分"},
            {type:"木质茎",feature:"坚硬木质化",example:"树木",func:"支撑"},
            {type:"草质茎",feature:"柔软不木质化",example:"草本植物",func:"支撑"}
        ];
        types.forEach(t => {
            qs.push(this.makeQ(id++,"unit3","medium",`${t.type}的特点是`,t.feature,["无特点","随机","不确定"],`${t.type}${t.feature}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${t.type}的例子是`,t.example,["无例子","随机","不确定"],`${t.type}如${t.example}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${t.type}的功能是`,t.func,["无功能","随机","不确定"],`${t.type}的功能是${t.func}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genStemStructure(),...this.genStemTypes()]; }
};
