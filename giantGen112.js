// 超大题库生成器112 - 传染病补充
const giantGen112 = {
    baseId: 725000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genInfectiousA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"传染病的特点是",c:"有传染性和流行性",w:["不能传染","不能流行","只能遗传"],u:"unit8"},
            {q:"传染病流行的三个环节是",c:"传染源传播途径易感人群",w:["只有传染源","只有传播途径","只有易感人群"],u:"unit8"},
            {q:"传染源是指",c:"能散播病原体的人或动物",w:["病原体","传播途径","易感人群"],u:"unit8"},
            {q:"传播途径是指",c:"病原体离开传染源到达健康人的途径",w:["传染源","病原体","易感人群"],u:"unit8"},
            {q:"易感人群是指",c:"对某种传染病缺乏免疫力的人群",w:["传染源","病原体","传播途径"],u:"unit8"},
            {q:"呼吸道传染病的传播途径是",c:"飞沫空气",w:["饮食","接触","血液"],u:"unit8"},
            {q:"消化道传染病的传播途径是",c:"饮食饮水",w:["飞沫","接触","血液"],u:"unit8"},
            {q:"血液传染病的传播途径是",c:"血液体液",w:["飞沫","饮食","空气"],u:"unit8"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genInfectiousB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"预防传染病的措施不包括",c:"增加传染源",w:["控制传染源","切断传播途径","保护易感人群"],u:"unit8"},
            {q:"隔离病人属于",c:"控制传染源",w:["切断传播途径","保护易感人群","增强免疫力"],u:"unit8"},
            {q:"消毒属于",c:"切断传播途径",w:["控制传染源","保护易感人群","增强免疫力"],u:"unit8"},
            {q:"接种疫苗属于",c:"保护易感人群",w:["控制传染源","切断传播途径","消灭病原体"],u:"unit8"},
            {q:"流感的病原体是",c:"流感病毒",w:["细菌","真菌","寄生虫"],u:"unit8"},
            {q:"肺结核的病原体是",c:"结核杆菌",w:["病毒","真菌","寄生虫"],u:"unit8"},
            {q:"蛔虫病的病原体是",c:"蛔虫",w:["病毒","细菌","真菌"],u:"unit8"},
            {q:"艾滋病的病原体是",c:"HIV病毒",w:["细菌","真菌","寄生虫"],u:"unit8"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genInfectiousA(),...this.genInfectiousB()]; }
};
