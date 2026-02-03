// 扩展题库生成器4 - 遗传与进化详细题
const extraGenerator4 = {
    baseId: 28000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genGeneticCrosses() {
        const qs = []; let id = this.baseId;
        const traits = [
            {trait:"豌豆高茎与矮茎",dominant:"高茎",recessive:"矮茎",ratio:"3:1"},
            {trait:"豌豆圆粒与皱粒",dominant:"圆粒",recessive:"皱粒",ratio:"3:1"},
            {trait:"豌豆黄色与绿色",dominant:"黄色",recessive:"绿色",ratio:"3:1"},
            {trait:"人的双眼皮与单眼皮",dominant:"双眼皮",recessive:"单眼皮",ratio:"3:1"},
            {trait:"人的有耳垂与无耳垂",dominant:"有耳垂",recessive:"无耳垂",ratio:"3:1"},
            {trait:"人的卷舌与不卷舌",dominant:"卷舌",recessive:"不卷舌",ratio:"3:1"},
            {trait:"人的有酒窝与无酒窝",dominant:"有酒窝",recessive:"无酒窝",ratio:"3:1"},
            {trait:"番茄红果与黄果",dominant:"红果",recessive:"黄果",ratio:"3:1"},
            {trait:"小鼠黑毛与白毛",dominant:"黑毛",recessive:"白毛",ratio:"3:1"},
            {trait:"果蝇红眼与白眼",dominant:"红眼",recessive:"白眼",ratio:"3:1"}
        ];
        traits.forEach(t => {
            qs.push(this.makeQ(id++,"unit11","medium",`${t.trait}中，显性性状是`,t.dominant,[t.recessive,"都是显性","都是隐性"],`${t.dominant}是显性性状。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${t.trait}中，隐性性状是`,t.recessive,[t.dominant,"都是显性","都是隐性"],`${t.recessive}是隐性性状。`));
            qs.push(this.makeQ(id++,"unit11","hard",`杂合子${t.trait}杂交，后代表现型比例是`,t.ratio,["1:1","1:2:1","全部显性"],`杂合子杂交后代表现型比例为${t.ratio}。`));
        });
        this.baseId = id; return qs;
    },

    genChromosomes() {
        const qs = []; let id = this.baseId;
        const organisms = [
            {name:"人",somatic:46,gamete:23,sex:"XY型"},
            {name:"果蝇",somatic:8,gamete:4,sex:"XY型"},
            {name:"豌豆",somatic:14,gamete:7,sex:"无性染色体"},
            {name:"玉米",somatic:20,gamete:10,sex:"无性染色体"},
            {name:"水稻",somatic:24,gamete:12,sex:"无性染色体"},
            {name:"小麦",somatic:42,gamete:21,sex:"无性染色体"},
            {name:"马",somatic:64,gamete:32,sex:"XY型"},
            {name:"狗",somatic:78,gamete:39,sex:"XY型"},
            {name:"猫",somatic:38,gamete:19,sex:"XY型"},
            {name:"鸡",somatic:78,gamete:39,sex:"ZW型"}
        ];
        organisms.forEach(o => {
            qs.push(this.makeQ(id++,"unit11","medium",`${o.name}体细胞中染色体数目是`,`${o.somatic}条`,[`${o.gamete}条`,`${o.somatic*2}条`,`${o.gamete/2}条`],`${o.name}体细胞有${o.somatic}条染色体。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${o.name}生殖细胞中染色体数目是`,`${o.gamete}条`,[`${o.somatic}条`,`${o.gamete*2}条`,`${o.somatic*2}条`],`${o.name}生殖细胞有${o.gamete}条染色体。`));
        });
        this.baseId = id; return qs;
    },

    genEvolutionEvidence() {
        const qs = []; let id = this.baseId;
        const evidences = [
            {type:"化石证据",example:"始祖鸟化石",support:"鸟类由爬行类进化而来"},
            {type:"化石证据",example:"马的进化化石",support:"马由小型祖先进化而来"},
            {type:"比较解剖学",example:"人的手臂和鲸的鳍",support:"同源器官说明共同祖先"},
            {type:"比较解剖学",example:"蝙蝠翅膀和鸟翅膀",support:"同功器官说明趋同进化"},
            {type:"胚胎学证据",example:"脊椎动物早期胚胎相似",support:"说明共同祖先"},
            {type:"分子生物学",example:"细胞色素C序列比较",support:"亲缘关系越近序列越相似"},
            {type:"分子生物学",example:"DNA序列比较",support:"亲缘关系越近序列越相似"},
            {type:"生物地理学",example:"澳大利亚有袋类动物",support:"地理隔离导致独立进化"}
        ];
        evidences.forEach(e => {
            qs.push(this.makeQ(id++,"unit12","medium",`${e.example}属于什么类型的进化证据`,e.type,["人工选择","自然灾害","环境污染"],`${e.example}是${e.type}。`));
            qs.push(this.makeQ(id++,"unit12","medium",`${e.example}说明`,e.support,["生物不会进化","进化是随机的","生物是独立创造的"],`${e.example}${e.support}。`));
        });
        this.baseId = id; return qs;
    },

    genHumanEvolution() {
        const qs = []; let id = this.baseId;
        const stages = [
            {name:"森林古猿",time:"约2000万年前",feature:"树栖生活",brain:"较小"},
            {name:"南方古猿",time:"约400万年前",feature:"开始直立行走",brain:"约500ml"},
            {name:"能人",time:"约200万年前",feature:"能制造简单工具",brain:"约700ml"},
            {name:"直立人",time:"约180万年前",feature:"能使用火",brain:"约1000ml"},
            {name:"智人",time:"约20万年前",feature:"有语言和文化",brain:"约1400ml"}
        ];
        stages.forEach(s => {
            qs.push(this.makeQ(id++,"unit12","medium",`${s.name}生活在`,s.time,["约1亿年前","约5000年前","约100年前"],`${s.name}生活在${s.time}。`));
            qs.push(this.makeQ(id++,"unit12","medium",`${s.name}的主要特征是`,s.feature,["完全树栖","不会使用工具","没有语言"],`${s.name}的特征是${s.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genGeneticCrosses(),...this.genChromosomes(),...this.genEvolutionEvidence(),...this.genHumanEvolution()]; }
};
