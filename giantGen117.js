// 超大题库生成器117 - 动物类群补充
const giantGen117 = {
    baseId: 750000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genAnimalGroupsA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"无脊椎动物的特点是",c:"体内没有脊柱",w:["体内有脊柱","都生活在水中","都是卵生"],u:"unit1"},
            {q:"脊椎动物的特点是",c:"体内有脊柱",w:["体内没有脊柱","都生活在陆地","都是胎生"],u:"unit1"},
            {q:"节肢动物的特点是",c:"身体分节有外骨骼",w:["身体不分节","没有外骨骼","体内有脊柱"],u:"unit1"},
            {q:"昆虫的身体分为",c:"头胸腹三部分",w:["头和躯干","头胸和尾","只有躯干"],u:"unit1"},
            {q:"昆虫有几对足",c:"三对",w:["四对","两对","一对"],u:"unit1"},
            {q:"蜘蛛有几对足",c:"四对",w:["三对","两对","一对"],u:"unit1"},
            {q:"鱼类的呼吸器官是",c:"鳃",w:["肺","皮肤","气管"],u:"unit1"},
            {q:"两栖动物幼体的呼吸器官是",c:"鳃",w:["肺","皮肤","气管"],u:"unit1"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genAnimalGroupsB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"两栖动物成体的呼吸器官是",c:"肺和皮肤",w:["只有肺","只有鳃","气管"],u:"unit1"},
            {q:"爬行动物的呼吸器官是",c:"肺",w:["鳃","皮肤","气管"],u:"unit1"},
            {q:"鸟类的呼吸方式是",c:"双重呼吸",w:["单重呼吸","皮肤呼吸","鳃呼吸"],u:"unit1"},
            {q:"哺乳动物的特点是",c:"胎生哺乳",w:["卵生","变态发育","冬眠"],u:"unit1"},
            {q:"恒温动物包括",c:"鸟类和哺乳类",w:["鱼类","两栖类","爬行类"],u:"unit1"},
            {q:"变温动物包括",c:"鱼类两栖类爬行类",w:["鸟类","哺乳类","人类"],u:"unit1"},
            {q:"完全变态发育的昆虫是",c:"蝴蝶蜜蜂",w:["蝗虫","蟋蟀","蜻蜓"],u:"unit1"},
            {q:"不完全变态发育的昆虫是",c:"蝗虫蟋蟀",w:["蝴蝶","蜜蜂","蚊子"],u:"unit1"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genAnimalGroupsA(),...this.genAnimalGroupsB()]; }
};
