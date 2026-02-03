// 超大题库生成器90 - 植物类群详解
const giantGen90 = {
    baseId: 615000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genLowerPlants() {
        const qs = []; let id = this.baseId;
        const plants = [
            {plant:"藻类植物",feature:"无根茎叶分化",habitat:"水中",example:"海带紫菜水绵"},
            {plant:"苔藓植物",feature:"有茎叶无根",habitat:"阴湿环境",example:"葫芦藓地钱"},
            {plant:"蕨类植物",feature:"有根茎叶有输导组织",reproduction:"孢子繁殖",example:"肾蕨卷柏"},
            {plant:"藻类的作用",role:"释放氧气提供食物",importance:"水生生态系统生产者"},
            {plant:"苔藓的作用",role:"监测空气污染",reason:"对二氧化硫敏感"}
        ];
        plants.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","medium",`${p.plant}的特点是`,p.feature||p.role,["无特点","随机","不确定"],`${p.plant}${p.feature||p.role}。`));
            if(p.example) qs.push(this.makeQ(id++,"unit3","medium",`${p.plant}的例子是`,p.example,["无例子","随机","不确定"],`${p.plant}如${p.example}。`));
        });
        this.baseId = id; return qs;
    },

    genSeedPlants() {
        const qs = []; let id = this.baseId;
        const plants = [
            {plant:"裸子植物",feature:"种子裸露无果皮包被",example:"松柏银杏苏铁",leaf:"多为针形"},
            {plant:"被子植物",feature:"种子有果皮包被",example:"小麦玫瑰苹果",flower:"有花"},
            {plant:"单子叶植物",feature:"一片子叶平行叶脉",root:"须根系",example:"小麦玉米"},
            {plant:"双子叶植物",feature:"两片子叶网状叶脉",root:"直根系",example:"大豆花生"},
            {plant:"被子植物优势",advantage:"有花果实保护种子",distribution:"分布最广种类最多"}
        ];
        plants.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","medium",`${p.plant}的特点是`,p.feature||p.advantage,["无特点","随机","不确定"],`${p.plant}${p.feature||p.advantage}。`));
            if(p.example) qs.push(this.makeQ(id++,"unit3","medium",`${p.plant}的例子是`,p.example,["无例子","随机","不确定"],`${p.plant}如${p.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genLowerPlants(),...this.genSeedPlants()]; }
};
