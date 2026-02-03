// 超大题库生成器119 - 营养物质补充
const giantGen119 = {
    baseId: 760000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genNutrientsA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"人体需要的营养物质包括",c:"糖类脂肪蛋白质维生素无机盐水",w:["只有糖类","只有蛋白质","只有维生素"],u:"unit5"},
            {q:"人体主要的供能物质是",c:"糖类",w:["蛋白质","脂肪","维生素"],u:"unit5"},
            {q:"人体的储能物质是",c:"脂肪",w:["糖类","蛋白质","维生素"],u:"unit5"},
            {q:"构成人体细胞的基本物质是",c:"蛋白质",w:["糖类","脂肪","维生素"],u:"unit5"},
            {q:"维生素的特点是",c:"需要量少但不可缺少",w:["需要量大","可以缺少","能提供能量"],u:"unit5"},
            {q:"缺乏维生素A会导致",c:"夜盲症",w:["坏血病","佝偻病","脚气病"],u:"unit5"},
            {q:"缺乏维生素C会导致",c:"坏血病",w:["夜盲症","佝偻病","脚气病"],u:"unit5"},
            {q:"缺乏维生素D会导致",c:"佝偻病",w:["夜盲症","坏血病","脚气病"],u:"unit5"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genNutrientsB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"缺乏维生素B1会导致",c:"脚气病",w:["夜盲症","坏血病","佝偻病"],u:"unit5"},
            {q:"缺钙会导致",c:"骨质疏松",w:["贫血","甲状腺肿大","夜盲症"],u:"unit5"},
            {q:"缺铁会导致",c:"贫血",w:["骨质疏松","甲状腺肿大","夜盲症"],u:"unit5"},
            {q:"缺碘会导致",c:"甲状腺肿大",w:["贫血","骨质疏松","夜盲症"],u:"unit5"},
            {q:"水在人体中的作用不包括",c:"提供能量",w:["参与代谢","运输物质","调节体温"],u:"unit5"},
            {q:"膳食纤维的作用是",c:"促进肠道蠕动",w:["提供能量","构成细胞","调节代谢"],u:"unit5"},
            {q:"合理膳食的原则是",c:"营养均衡荤素搭配",w:["只吃肉类","只吃蔬菜","只吃主食"],u:"unit5"},
            {q:"青少年应多吃的食物是",c:"富含蛋白质和钙的食物",w:["只吃糖类","只吃脂肪","只吃维生素"],u:"unit5"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genNutrientsA(),...this.genNutrientsB()]; }
};
