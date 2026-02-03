// 超大题库生成器106 - 呼吸系统补充
const giantGen106 = {
    baseId: 695000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genRespiratoryA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"呼吸系统的组成是",c:"呼吸道和肺",w:["只有肺","只有气管","心脏和血管"],u:"unit6"},
            {q:"呼吸道的组成顺序是",c:"鼻咽喉气管支气管",w:["鼻肺","口腔食道","胃肠"],u:"unit6"},
            {q:"气体交换的场所是",c:"肺泡",w:["气管","支气管","鼻腔"],u:"unit6"},
            {q:"肺泡适于气体交换的特点不包括",c:"有大量肌肉",w:["数量多","壁薄","有毛细血管"],u:"unit6"},
            {q:"吸气时膈肌的状态是",c:"收缩下降",w:["舒张上升","不变","先收缩后舒张"],u:"unit6"},
            {q:"呼气时胸廓的变化是",c:"缩小",w:["扩大","不变","先扩大后缩小"],u:"unit6"},
            {q:"呼吸运动的动力来自",c:"呼吸肌的收缩和舒张",w:["肺的收缩","心脏跳动","血液流动"],u:"unit6"},
            {q:"人工呼吸的原理是",c:"改变胸廓容积",w:["直接给肺充气","按压心脏","输血"],u:"unit6"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genRespiratoryB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"呼出气体中增多的成分是",c:"二氧化碳和水蒸气",w:["氧气","氮气","一氧化碳"],u:"unit6"},
            {q:"呼出气体中减少的成分是",c:"氧气",w:["二氧化碳","氮气","水蒸气"],u:"unit6"},
            {q:"检验呼出气体含二氧化碳的方法是",c:"使澄清石灰水变浑浊",w:["使碘液变蓝","使酒精燃烧","使水变色"],u:"unit6"},
            {q:"肺泡与血液气体交换的原理是",c:"气体扩散",w:["主动运输","渗透作用","吞噬作用"],u:"unit6"},
            {q:"组织细胞与血液气体交换的原理是",c:"气体扩散",w:["主动运输","渗透作用","吞噬作用"],u:"unit6"},
            {q:"呼吸的全过程包括",c:"肺通气肺换气气体运输组织换气",w:["只有肺通气","只有肺换气","只有气体运输"],u:"unit6"},
            {q:"痰的形成部位是",c:"气管和支气管",w:["鼻腔","咽","肺泡"],u:"unit6"},
            {q:"声音的产生部位是",c:"喉",w:["鼻腔","咽","气管"],u:"unit6"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genRespiratoryA(),...this.genRespiratoryB()]; }
};
