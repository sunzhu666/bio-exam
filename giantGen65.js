// 超大题库生成器65 - 动物生理综合
const giantGen65 = {
    baseId: 490000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genAnimalPhysiology() {
        const qs = []; let id = this.baseId;
        const processes = [
            {process:"鱼的呼吸",organ:"鳃",medium:"水",feature:"逆流交换"},
            {process:"两栖动物呼吸",organ:"肺和皮肤",feature:"皮肤辅助呼吸"},
            {process:"昆虫呼吸",organ:"气管",feature:"直接到达细胞"},
            {process:"鸟类呼吸",organ:"肺和气囊",feature:"双重呼吸"},
            {process:"哺乳动物呼吸",organ:"肺",feature:"肺泡气体交换"},
            {process:"变温动物",feature:"体温随环境变化",example:"鱼两栖爬行"},
            {process:"恒温动物",feature:"体温恒定",example:"鸟类哺乳类"}
        ];
        processes.forEach(p => {
            qs.push(this.makeQ(id++,"unit1","medium",`${p.process}的器官是`,p.organ||p.feature,["无器官","随机","不确定"],`${p.process}通过${p.organ||p.feature}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${p.process}的特点是`,p.feature,["无特点","随机","不确定"],`${p.process}${p.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genAnimalReproduction() {
        const qs = []; let id = this.baseId;
        const types = [
            {type:"卵生",feature:"体外发育",example:"鱼两栖爬行鸟"},
            {type:"胎生",feature:"体内发育",example:"大多数哺乳动物"},
            {type:"卵胎生",feature:"卵在体内孵化",example:"某些鲨鱼蛇"},
            {type:"体外受精",feature:"精卵在体外结合",example:"鱼两栖动物"},
            {type:"体内受精",feature:"精卵在体内结合",example:"爬行鸟哺乳"},
            {type:"变态发育",feature:"幼体与成体差异大",example:"蛙蝴蝶"}
        ];
        types.forEach(t => {
            qs.push(this.makeQ(id++,"unit1","medium",`${t.type}的特点是`,t.feature,["无特点","随机","不确定"],`${t.type}${t.feature}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${t.type}的例子是`,t.example,["无例子","随机","不确定"],`${t.type}如${t.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genAnimalPhysiology(),...this.genAnimalReproduction()]; }
};
