// 超大题库生成器165 - 模拟试题E
const giantGen165 = {
    baseId: 990000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genSimI() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列动物中用鳃呼吸的是",c:"鲫鱼",w:["青蛙","蜥蜴","家鸽"],u:"unit1"},
            {q:"下列动物中用肺呼吸的是",c:"蜥蜴",w:["鲫鱼","蝌蚪","蚯蚓"],u:"unit1"},
            {q:"下列动物中用皮肤辅助呼吸的是",c:"青蛙",w:["鲫鱼","蜥蜴","家鸽"],u:"unit1"},
            {q:"下列动物中进行双重呼吸的是",c:"家鸽",w:["鲫鱼","青蛙","蜥蜴"],u:"unit1"},
            {q:"下列动物中体内受精的是",c:"蜥蜴",w:["鲫鱼","青蛙","蝌蚪"],u:"unit1"},
            {q:"下列动物中体外受精的是",c:"青蛙",w:["蜥蜴","家鸽","家兔"],u:"unit1"},
            {q:"下列动物中卵生的是",c:"家鸽",w:["家兔","人","鲸"],u:"unit1"},
            {q:"下列动物中胎生哺乳的是",c:"家兔",w:["家鸽","蜥蜴","青蛙"],u:"unit1"},
            {q:"下列昆虫中完全变态发育的是",c:"蝴蝶",w:["蝗虫","蟋蟀","蜻蜓"],u:"unit1"},
            {q:"下列昆虫中不完全变态发育的是",c:"蝗虫",w:["蝴蝶","蜜蜂","蚊子"],u:"unit1"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genSimJ() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"完全变态发育的阶段是",c:"卵幼虫蛹成虫",w:["卵若虫成虫","卵成虫","幼虫成虫"],u:"unit1"},
            {q:"不完全变态发育的阶段是",c:"卵若虫成虫",w:["卵幼虫蛹成虫","卵成虫","幼虫蛹成虫"],u:"unit1"},
            {q:"下列植物中属于被子植物的是",c:"桃树",w:["松树","银杏","苏铁"],u:"unit1"},
            {q:"下列植物中属于裸子植物的是",c:"松树",w:["桃树","苹果树","梨树"],u:"unit1"},
            {q:"下列植物中属于蕨类植物的是",c:"肾蕨",w:["葫芦藓","海带","松树"],u:"unit1"},
            {q:"下列植物中属于苔藓植物的是",c:"葫芦藓",w:["肾蕨","海带","松树"],u:"unit1"},
            {q:"下列植物中属于藻类植物的是",c:"海带",w:["葫芦藓","肾蕨","松树"],u:"unit1"},
            {q:"下列生物中属于真菌的是",c:"蘑菇",w:["细菌","病毒","蓝藻"],u:"unit2"},
            {q:"下列生物中属于细菌的是",c:"大肠杆菌",w:["酵母菌","蘑菇","病毒"],u:"unit2"},
            {q:"下列生物中没有细胞结构的是",c:"流感病毒",w:["大肠杆菌","酵母菌","草履虫"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genSimI(),...this.genSimJ()]; }
};
