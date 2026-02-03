// 超大题库生成器39 - 昆虫
const giantGen39 = {
    baseId: 360000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genInsectStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"头部",structure:"触角复眼口器",func:"感觉和取食"},
            {part:"胸部",structure:"三对足两对翅",func:"运动"},
            {part:"腹部",structure:"气门生殖器",func:"呼吸和生殖"},
            {part:"外骨骼",structure:"几丁质",func:"保护和支撑"},
            {part:"触角",structure:"分节",func:"触觉和嗅觉"},
            {part:"复眼",structure:"多个小眼组成",func:"视觉"},
            {part:"口器",structure:"多种类型",func:"取食"},
            {part:"气管",structure:"分支管道",func:"呼吸"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit1","medium",`昆虫${p.part}的结构是`,p.structure,["无结构","随机","不确定"],`${p.part}有${p.structure}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`昆虫${p.part}的功能是`,p.func,["无功能","随机","不确定"],`${p.part}的功能是${p.func}。`));
        });
        this.baseId = id; return qs;
    },

    genInsectTypes() {
        const qs = []; let id = this.baseId;
        const insects = [
            {insect:"蜜蜂",order:"膜翅目",metamorphosis:"完全变态",mouthpart:"嚼吸式",feature:"社会性昆虫"},
            {insect:"蝴蝶",order:"鳞翅目",metamorphosis:"完全变态",mouthpart:"虹吸式",feature:"翅有鳞片"},
            {insect:"蝗虫",order:"直翅目",metamorphosis:"不完全变态",mouthpart:"咀嚼式",feature:"后足发达"},
            {insect:"蜻蜓",order:"蜻蜓目",metamorphosis:"不完全变态",mouthpart:"咀嚼式",feature:"复眼发达"},
            {insect:"蚊子",order:"双翅目",metamorphosis:"完全变态",mouthpart:"刺吸式",feature:"只有一对翅"},
            {insect:"蟑螂",order:"蜚蠊目",metamorphosis:"不完全变态",mouthpart:"咀嚼式",feature:"适应力强"},
            {insect:"蚂蚁",order:"膜翅目",metamorphosis:"完全变态",mouthpart:"咀嚼式",feature:"社会性昆虫"},
            {insect:"甲虫",order:"鞘翅目",metamorphosis:"完全变态",mouthpart:"咀嚼式",feature:"前翅硬化"},
            {insect:"蝉",order:"同翅目",metamorphosis:"不完全变态",mouthpart:"刺吸式",feature:"能发声"},
            {insect:"螳螂",order:"螳螂目",metamorphosis:"不完全变态",mouthpart:"咀嚼式",feature:"前足捕捉足"}
        ];
        insects.forEach(i => {
            qs.push(this.makeQ(id++,"unit1","hard",`${i.insect}属于`,i.order,["无目","随机","不确定"],`${i.insect}属于${i.order}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${i.insect}的变态类型是`,i.metamorphosis,["无变态","随机","不确定"],`${i.insect}是${i.metamorphosis}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${i.insect}的口器类型是`,i.mouthpart,["无口器","随机","不确定"],`${i.insect}是${i.mouthpart}口器。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${i.insect}的特点是`,i.feature,["无特点","随机","不确定"],`${i.insect}${i.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genInsectStructure(),...this.genInsectTypes()]; }
};
