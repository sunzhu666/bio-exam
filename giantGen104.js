// 超大题库生成器104 - 消化系统补充
const giantGen104 = {
    baseId: 685000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genDigestionA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"消化道的组成顺序是",c:"口腔咽食道胃小肠大肠肛门",w:["口腔胃小肠","胃小肠大肠","食道胃肠"],u:"unit5"},
            {q:"消化腺包括",c:"唾液腺胃腺肠腺肝脏胰腺",w:["只有胃腺","只有肝脏","只有胰腺"],u:"unit5"},
            {q:"最大的消化腺是",c:"肝脏",w:["胃腺","胰腺","唾液腺"],u:"unit5"},
            {q:"消化和吸收的主要场所是",c:"小肠",w:["胃","大肠","口腔"],u:"unit5"},
            {q:"小肠适于消化吸收的特点不包括",c:"有大量细菌",w:["长约6米","有绒毛","有多种消化液"],u:"unit5"},
            {q:"胆汁的作用是",c:"乳化脂肪",w:["消化蛋白质","消化淀粉","吸收营养"],u:"unit5"},
            {q:"胆汁储存在",c:"胆囊",w:["肝脏","胰腺","胃"],u:"unit5"},
            {q:"不含消化酶的消化液是",c:"胆汁",w:["唾液","胃液","肠液"],u:"unit5"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genDigestionB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"淀粉在口腔中被分解为",c:"麦芽糖",w:["葡萄糖","氨基酸","脂肪酸"],u:"unit5"},
            {q:"蛋白质最终被分解为",c:"氨基酸",w:["葡萄糖","脂肪酸","麦芽糖"],u:"unit5"},
            {q:"脂肪最终被分解为",c:"甘油和脂肪酸",w:["葡萄糖","氨基酸","麦芽糖"],u:"unit5"},
            {q:"能被直接吸收的物质是",c:"葡萄糖氨基酸甘油脂肪酸",w:["淀粉","蛋白质","脂肪"],u:"unit5"},
            {q:"维生素和无机盐",c:"不需要消化可直接吸收",w:["需要消化","不能吸收","在胃中消化"],u:"unit5"},
            {q:"水在消化道中",c:"不需要消化可直接吸收",w:["需要消化","不能吸收","在胃中消化"],u:"unit5"},
            {q:"大肠的主要功能是",c:"吸收水分形成粪便",w:["消化食物","吸收营养","分泌消化液"],u:"unit5"},
            {q:"肛门的功能是",c:"排出粪便",w:["消化食物","吸收营养","分泌消化液"],u:"unit5"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genDigestionA(),...this.genDigestionB()]; }
};
