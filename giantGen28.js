// 超大题库生成器28 - 花的结构
const giantGen28 = {
    baseId: 305000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genFlowerStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"花萼",func:"保护花蕾",develop:"保护作用",feature:"绿色叶状"},
            {part:"花瓣",func:"吸引传粉者",develop:"保护和吸引",feature:"颜色鲜艳"},
            {part:"雄蕊",func:"产生花粉",develop:"雄性生殖器官",feature:"有花药和花丝"},
            {part:"雌蕊",func:"产生胚珠",develop:"雌性生殖器官",feature:"有柱头花柱子房"},
            {part:"花药",func:"产生花粉",develop:"雄蕊的一部分",feature:"含花粉囊"},
            {part:"花丝",func:"支撑花药",develop:"雄蕊的一部分",feature:"细长"},
            {part:"柱头",func:"接受花粉",develop:"雌蕊的一部分",feature:"有黏液"},
            {part:"花柱",func:"连接柱头和子房",develop:"雌蕊的一部分",feature:"管状"},
            {part:"子房",func:"保护胚珠",develop:"雌蕊的一部分",feature:"发育成果实"},
            {part:"胚珠",func:"发育成种子",develop:"子房内",feature:"含卵细胞"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","medium",`花的${p.part}的功能是`,p.func,["无功能","随机","不确定"],`${p.part}的功能是${p.func}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`花的${p.part}的特点是`,p.feature,["无特点","随机","不确定"],`${p.part}${p.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genPollination() {
        const qs = []; let id = this.baseId;
        const types = [
            {type:"自花传粉",def:"同一朵花的花粉传到柱头",example:"豌豆小麦",feature:"不需要媒介"},
            {type:"异花传粉",def:"不同花的花粉传到柱头",example:"玉米苹果",feature:"需要媒介"},
            {type:"虫媒传粉",def:"昆虫传播花粉",example:"桃花油菜花",feature:"花有蜜腺香味"},
            {type:"风媒传粉",def:"风传播花粉",example:"玉米杨树",feature:"花粉轻小量多"},
            {type:"水媒传粉",def:"水传播花粉",example:"金鱼藻",feature:"水生植物"},
            {type:"鸟媒传粉",def:"鸟类传播花粉",example:"木棉",feature:"花大色艳"},
            {type:"人工授粉",def:"人工传播花粉",example:"果树授粉",feature:"提高结实率"}
        ];
        types.forEach(t => {
            qs.push(this.makeQ(id++,"unit3","medium",`${t.type}的定义是`,t.def,["无定义","随机","不确定"],`${t.type}是${t.def}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${t.type}的例子是`,t.example,["无例子","随机","不确定"],`${t.type}如${t.example}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${t.type}的特点是`,t.feature,["无特点","随机","不确定"],`${t.type}${t.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genFlowerStructure(),...this.genPollination()]; }
};
