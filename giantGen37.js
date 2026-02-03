// 超大题库生成器37 - 原生生物
const giantGen37 = {
    baseId: 350000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genProtists() {
        const qs = []; let id = this.baseId;
        const protists = [
            {name:"草履虫",type:"原生动物",feature:"有纤毛",habitat:"淡水",nutrition:"异养"},
            {name:"变形虫",type:"原生动物",feature:"有伪足",habitat:"淡水",nutrition:"异养"},
            {name:"疟原虫",type:"原生动物",feature:"寄生",habitat:"人体红细胞",nutrition:"异养"},
            {name:"眼虫",type:"原生生物",feature:"有眼点和叶绿体",habitat:"淡水",nutrition:"自养和异养"},
            {name:"衣藻",type:"原生生物",feature:"单细胞绿藻",habitat:"淡水",nutrition:"自养"},
            {name:"硅藻",type:"原生生物",feature:"有硅质细胞壁",habitat:"水中",nutrition:"自养"},
            {name:"团藻",type:"原生生物",feature:"群体生活",habitat:"淡水",nutrition:"自养"},
            {name:"伞藻",type:"原生生物",feature:"单细胞巨大",habitat:"海水",nutrition:"自养"}
        ];
        protists.forEach(p => {
            qs.push(this.makeQ(id++,"unit2","medium",`${p.name}属于`,p.type,["细菌","真菌","病毒"],`${p.name}是${p.type}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`${p.name}的特点是`,p.feature,["无特点","随机","不确定"],`${p.name}${p.feature}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`${p.name}的生活环境是`,p.habitat,["无环境","随机","不确定"],`${p.name}生活在${p.habitat}。`));
            qs.push(this.makeQ(id++,"unit2","hard",`${p.name}的营养方式是`,p.nutrition,["无营养","随机","不确定"],`${p.name}是${p.nutrition}。`));
        });
        this.baseId = id; return qs;
    },

    genParamecium() {
        const qs = []; let id = this.baseId;
        const structures = [
            {structure:"纤毛",func:"运动",feature:"覆盖全身"},
            {structure:"口沟",func:"摄食",feature:"凹陷结构"},
            {structure:"食物泡",func:"消化食物",feature:"在细胞质中移动"},
            {structure:"伸缩泡",func:"排出多余水分",feature:"有收集管"},
            {structure:"大核",func:"控制代谢",feature:"营养核"},
            {structure:"小核",func:"控制生殖",feature:"生殖核"},
            {structure:"胞肛",func:"排出食物残渣",feature:"固定位置"},
            {structure:"表膜",func:"保护和物质交换",feature:"有弹性"}
        ];
        structures.forEach(s => {
            qs.push(this.makeQ(id++,"unit2","medium",`草履虫${s.structure}的功能是`,s.func,["无功能","随机","不确定"],`${s.structure}的功能是${s.func}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`草履虫${s.structure}的特点是`,s.feature,["无特点","随机","不确定"],`${s.structure}${s.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genProtists(),...this.genParamecium()]; }
};
