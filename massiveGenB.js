// 海量题库生成器B - 植物特征详细
const massiveGenB = {
    baseId: 125000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genFloweringPlants() {
        const qs = []; let id = this.baseId;
        const plants = [
            {plant:"水稻",type:"单子叶",root:"须根",vein:"平行脉",seed:"1片子叶",flower:"有花"},
            {plant:"小麦",type:"单子叶",root:"须根",vein:"平行脉",seed:"1片子叶",flower:"有花"},
            {plant:"玉米",type:"单子叶",root:"须根",vein:"平行脉",seed:"1片子叶",flower:"有花"},
            {plant:"竹子",type:"单子叶",root:"须根",vein:"平行脉",seed:"1片子叶",flower:"有花"},
            {plant:"百合",type:"单子叶",root:"须根",vein:"平行脉",seed:"1片子叶",flower:"有花"},
            {plant:"葱",type:"单子叶",root:"须根",vein:"平行脉",seed:"1片子叶",flower:"有花"},
            {plant:"大豆",type:"双子叶",root:"直根",vein:"网状脉",seed:"2片子叶",flower:"有花"},
            {plant:"花生",type:"双子叶",root:"直根",vein:"网状脉",seed:"2片子叶",flower:"有花"},
            {plant:"向日葵",type:"双子叶",root:"直根",vein:"网状脉",seed:"2片子叶",flower:"有花"},
            {plant:"苹果",type:"双子叶",root:"直根",vein:"网状脉",seed:"2片子叶",flower:"有花"},
            {plant:"番茄",type:"双子叶",root:"直根",vein:"网状脉",seed:"2片子叶",flower:"有花"},
            {plant:"黄瓜",type:"双子叶",root:"直根",vein:"网状脉",seed:"2片子叶",flower:"有花"},
            {plant:"白菜",type:"双子叶",root:"直根",vein:"网状脉",seed:"2片子叶",flower:"有花"},
            {plant:"萝卜",type:"双子叶",root:"直根",vein:"网状脉",seed:"2片子叶",flower:"有花"}
        ];
        plants.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","medium",`${p.plant}属于`,`${p.type}植物`,["裸子植物","蕨类植物","苔藓植物"],`${p.plant}是${p.type}植物。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${p.plant}的根系是`,p.root,["气生根","寄生根","无根"],`${p.plant}的根系是${p.root}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${p.plant}的叶脉是`,p.vein,["羽状脉","掌状脉","无叶脉"],`${p.plant}的叶脉是${p.vein}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${p.plant}的种子有`,p.seed,["无子叶","3片子叶","多片子叶"],`${p.plant}的种子有${p.seed}。`));
        });
        this.baseId = id; return qs;
    },

    genNonFloweringPlants() {
        const qs = []; let id = this.baseId;
        const plants = [
            {plant:"松树",type:"裸子植物",seed:"种子裸露",repro:"种子繁殖",feature:"有球果"},
            {plant:"柏树",type:"裸子植物",seed:"种子裸露",repro:"种子繁殖",feature:"有球果"},
            {plant:"银杏",type:"裸子植物",seed:"种子裸露",repro:"种子繁殖",feature:"扇形叶"},
            {plant:"苏铁",type:"裸子植物",seed:"种子裸露",repro:"种子繁殖",feature:"羽状叶"},
            {plant:"肾蕨",type:"蕨类植物",seed:"无种子",repro:"孢子繁殖",feature:"有维管组织"},
            {plant:"铁线蕨",type:"蕨类植物",seed:"无种子",repro:"孢子繁殖",feature:"有维管组织"},
            {plant:"桫椤",type:"蕨类植物",seed:"无种子",repro:"孢子繁殖",feature:"树状蕨类"},
            {plant:"葫芦藓",type:"苔藓植物",seed:"无种子",repro:"孢子繁殖",feature:"有假根"},
            {plant:"地钱",type:"苔藓植物",seed:"无种子",repro:"孢子繁殖",feature:"叶状体"},
            {plant:"水绵",type:"藻类植物",seed:"无种子",repro:"孢子繁殖",feature:"无根茎叶分化"},
            {plant:"海带",type:"藻类植物",seed:"无种子",repro:"孢子繁殖",feature:"褐藻"},
            {plant:"紫菜",type:"藻类植物",seed:"无种子",repro:"孢子繁殖",feature:"红藻"}
        ];
        plants.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","medium",`${p.plant}属于`,p.type,["被子植物","动物","真菌"],`${p.plant}是${p.type}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${p.plant}的种子特点是`,p.seed,["种子有果皮","有花","有果实"],`${p.plant}${p.seed}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${p.plant}的繁殖方式是`,p.repro,["分裂繁殖","出芽繁殖","营养繁殖"],`${p.plant}通过${p.repro}。`));
            qs.push(this.makeQ(id++,"unit3","easy",`${p.plant}的特点是`,p.feature,["无特点","有花","有果实"],`${p.plant}的特点是${p.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genFloweringPlants(),...this.genNonFloweringPlants()]; }
};
