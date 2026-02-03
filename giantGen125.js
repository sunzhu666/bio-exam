// 超大题库生成器125 - 消化吸收深化
const giantGen125 = {
    baseId: 790000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genDigestionA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"消化系统由什么组成",c:"消化道和消化腺",w:["只有消化道","只有消化腺","只有胃"],u:"unit5"},
            {q:"消化道的组成顺序是",c:"口腔咽食道胃小肠大肠肛门",w:["口腔胃小肠","胃小肠大肠","食道胃肠"],u:"unit5"},
            {q:"消化腺包括",c:"唾液腺胃腺肠腺肝脏胰腺",w:["只有胃腺","只有肝脏","只有胰腺"],u:"unit5"},
            {q:"唾液腺分泌的消化液是",c:"唾液",w:["胃液","胆汁","胰液"],u:"unit5"},
            {q:"唾液中含有的消化酶是",c:"唾液淀粉酶",w:["蛋白酶","脂肪酶","麦芽糖酶"],u:"unit5"},
            {q:"唾液淀粉酶能消化",c:"淀粉",w:["蛋白质","脂肪","纤维素"],u:"unit5"},
            {q:"胃液中含有的消化酶是",c:"胃蛋白酶",w:["唾液淀粉酶","脂肪酶","麦芽糖酶"],u:"unit5"},
            {q:"胃蛋白酶能消化",c:"蛋白质",w:["淀粉","脂肪","纤维素"],u:"unit5"},
            {q:"胆汁的作用是",c:"乳化脂肪",w:["消化蛋白质","消化淀粉","消化纤维素"],u:"unit5"},
            {q:"胆汁由什么器官分泌",c:"肝脏",w:["胆囊","胰腺","胃"],u:"unit5"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genDigestionB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"胆汁储存在",c:"胆囊",w:["肝脏","胰腺","胃"],u:"unit5"},
            {q:"胰液中含有的消化酶种类是",c:"多种消化酶",w:["只有蛋白酶","只有脂肪酶","只有淀粉酶"],u:"unit5"},
            {q:"小肠液中含有的消化酶种类是",c:"多种消化酶",w:["只有蛋白酶","只有脂肪酶","只有淀粉酶"],u:"unit5"},
            {q:"消化和吸收的主要场所是",c:"小肠",w:["胃","大肠","口腔"],u:"unit5"},
            {q:"小肠适于消化吸收的特点不包括",c:"有大量细菌",w:["长度长","有绒毛","有多种消化酶"],u:"unit5"},
            {q:"小肠绒毛的作用是",c:"增大吸收面积",w:["分泌消化酶","储存食物","杀灭细菌"],u:"unit5"},
            {q:"淀粉最终被消化成",c:"葡萄糖",w:["氨基酸","甘油和脂肪酸","麦芽糖"],u:"unit5"},
            {q:"蛋白质最终被消化成",c:"氨基酸",w:["葡萄糖","甘油和脂肪酸","多肽"],u:"unit5"},
            {q:"脂肪最终被消化成",c:"甘油和脂肪酸",w:["葡萄糖","氨基酸","胆固醇"],u:"unit5"},
            {q:"大肠的主要功能是",c:"吸收水分和无机盐形成粪便",w:["消化食物","吸收营养","分泌消化酶"],u:"unit5"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genDigestionA(),...this.genDigestionB()]; }
};
