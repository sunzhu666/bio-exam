// 超大题库生成器163 - 模拟试题C
const giantGen163 = {
    baseId: 980000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genSimE() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列生物中属于真核生物的是",c:"酵母菌",w:["细菌","蓝藻","病毒"],u:"unit2"},
            {q:"下列生物中属于原核生物的是",c:"大肠杆菌",w:["酵母菌","草履虫","变形虫"],u:"unit2"},
            {q:"下列结构中能进行光合作用的是",c:"叶绿体",w:["线粒体","核糖体","内质网"],u:"unit2"},
            {q:"下列结构中能进行呼吸作用的是",c:"线粒体",w:["叶绿体","核糖体","液泡"],u:"unit2"},
            {q:"下列物质中属于有机物的是",c:"葡萄糖",w:["水","无机盐","二氧化碳"],u:"unit5"},
            {q:"下列物质中属于无机物的是",c:"水",w:["蛋白质","脂肪","糖类"],u:"unit5"},
            {q:"下列营养物质中能提供能量的是",c:"糖类脂肪蛋白质",w:["只有糖类","只有脂肪","维生素"],u:"unit5"},
            {q:"下列营养物质中不能提供能量的是",c:"维生素和无机盐",w:["糖类","脂肪","蛋白质"],u:"unit5"},
            {q:"人体主要的供能物质是",c:"糖类",w:["脂肪","蛋白质","维生素"],u:"unit5"},
            {q:"人体的储能物质是",c:"脂肪",w:["糖类","蛋白质","维生素"],u:"unit5"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genSimF() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"构成人体细胞的基本物质是",c:"蛋白质",w:["糖类","脂肪","维生素"],u:"unit5"},
            {q:"缺乏维生素A会导致",c:"夜盲症",w:["坏血病","佝偻病","脚气病"],u:"unit5"},
            {q:"缺乏维生素C会导致",c:"坏血病",w:["夜盲症","佝偻病","脚气病"],u:"unit5"},
            {q:"缺乏维生素D会导致",c:"佝偻病",w:["夜盲症","坏血病","脚气病"],u:"unit5"},
            {q:"缺钙会导致",c:"骨质疏松",w:["贫血","甲状腺肿大","夜盲症"],u:"unit5"},
            {q:"缺铁会导致",c:"贫血",w:["骨质疏松","甲状腺肿大","夜盲症"],u:"unit5"},
            {q:"缺碘会导致",c:"甲状腺肿大",w:["贫血","骨质疏松","夜盲症"],u:"unit5"},
            {q:"下列食物中富含蛋白质的是",c:"鸡蛋牛奶",w:["米饭馒头","蔬菜水果","食用油"],u:"unit5"},
            {q:"下列食物中富含糖类的是",c:"米饭馒头",w:["鸡蛋牛奶","蔬菜水果","食用油"],u:"unit5"},
            {q:"下列食物中富含维生素的是",c:"蔬菜水果",w:["米饭馒头","鸡蛋牛奶","食用油"],u:"unit5"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genSimE(),...this.genSimF()]; }
};
