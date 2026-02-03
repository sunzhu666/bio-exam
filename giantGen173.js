// 超大题库生成器173 - 专题复习C
const giantGen173 = {
    baseId: 1030000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genTopicE() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"人体消化系统由什么组成",c:"消化道和消化腺",w:["只有消化道","只有消化腺","呼吸道和消化腺"],u:"unit5"},
            {q:"消化道的组成顺序是",c:"口腔咽食道胃小肠大肠肛门",w:["口腔食道咽胃","胃小肠大肠口腔","小肠大肠胃口腔"],u:"unit5"},
            {q:"最大的消化腺是",c:"肝脏",w:["胰腺","唾液腺","胃腺"],u:"unit5"},
            {q:"肝脏分泌的消化液是",c:"胆汁",w:["胃液","肠液","胰液"],u:"unit5"},
            {q:"胆汁的作用是",c:"乳化脂肪",w:["消化蛋白质","消化淀粉","消化纤维素"],u:"unit5"},
            {q:"消化和吸收的主要场所是",c:"小肠",w:["胃","大肠","口腔"],u:"unit5"},
            {q:"小肠适于消化吸收的特点是",c:"长有皱襞和绒毛",w:["短而粗","没有绒毛","壁很厚"],u:"unit5"},
            {q:"淀粉消化的最终产物是",c:"葡萄糖",w:["麦芽糖","氨基酸","甘油和脂肪酸"],u:"unit5"},
            {q:"蛋白质消化的最终产物是",c:"氨基酸",w:["葡萄糖","甘油和脂肪酸","麦芽糖"],u:"unit5"},
            {q:"脂肪消化的最终产物是",c:"甘油和脂肪酸",w:["葡萄糖","氨基酸","麦芽糖"],u:"unit5"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"easy",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genTopicF() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"唾液中含有的消化酶是",c:"唾液淀粉酶",w:["蛋白酶","脂肪酶","麦芽糖酶"],u:"unit5"},
            {q:"胃液中含有的消化酶是",c:"胃蛋白酶",w:["唾液淀粉酶","脂肪酶","麦芽糖酶"],u:"unit5"},
            {q:"胰液中含有的消化酶种类是",c:"多种消化酶",w:["只有蛋白酶","只有淀粉酶","只有脂肪酶"],u:"unit5"},
            {q:"肠液中含有的消化酶种类是",c:"多种消化酶",w:["只有蛋白酶","只有淀粉酶","只有脂肪酶"],u:"unit5"},
            {q:"淀粉开始消化的部位是",c:"口腔",w:["胃","小肠","大肠"],u:"unit5"},
            {q:"蛋白质开始消化的部位是",c:"胃",w:["口腔","小肠","大肠"],u:"unit5"},
            {q:"脂肪开始消化的部位是",c:"小肠",w:["口腔","胃","大肠"],u:"unit5"},
            {q:"大肠的主要功能是",c:"吸收水分和无机盐形成粪便",w:["消化食物","吸收营养","分泌消化液"],u:"unit5"},
            {q:"维生素和无机盐的吸收特点是",c:"不需要消化直接吸收",w:["需要消化","不能吸收","只在胃吸收"],u:"unit5"},
            {q:"水的吸收部位是",c:"小肠和大肠",w:["只在小肠","只在大肠","只在胃"],u:"unit5"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genTopicE(),...this.genTopicF()]; }
};
