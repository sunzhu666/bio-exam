// 超大题库生成器91 - 人体消化系统详解
const giantGen91 = {
    baseId: 620000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genDigestiveOrgans() {
        const qs = []; let id = this.baseId;
        const organs = [
            {organ:"口腔",function:"咀嚼食物初步消化淀粉",enzyme:"唾液淀粉酶"},
            {organ:"食道",function:"输送食物",structure:"肌肉管道"},
            {organ:"胃",function:"储存食物初步消化蛋白质",enzyme:"胃蛋白酶",environment:"酸性"},
            {organ:"小肠",function:"消化吸收的主要场所",structure:"绒毛皱襞",length:"约6米"},
            {organ:"大肠",function:"吸收水分形成粪便",bacteria:"有益菌群"},
            {organ:"肝脏",function:"分泌胆汁",bile:"乳化脂肪",location:"腹腔右上部"},
            {organ:"胰腺",function:"分泌胰液",enzyme:"多种消化酶"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit5","medium",`${o.organ}的功能是`,o.function,["无功能","随机","不确定"],`${o.organ}${o.function}。`));
            if(o.enzyme) qs.push(this.makeQ(id++,"unit5","medium",`${o.organ}分泌的酶是`,o.enzyme,["无酶","随机","不确定"],`${o.organ}分泌${o.enzyme}。`));
        });
        this.baseId = id; return qs;
    },

    genDigestiveProcess() {
        const qs = []; let id = this.baseId;
        const processes = [
            {nutrient:"淀粉",start:"口腔",enzyme:"唾液淀粉酶胰淀粉酶",product:"葡萄糖"},
            {nutrient:"蛋白质",start:"胃",enzyme:"胃蛋白酶胰蛋白酶",product:"氨基酸"},
            {nutrient:"脂肪",start:"小肠",helper:"胆汁乳化",enzyme:"脂肪酶",product:"甘油脂肪酸"}
        ];
        processes.forEach(p => {
            qs.push(this.makeQ(id++,"unit5","hard",`${p.nutrient}消化开始的部位是`,p.start,["无部位","随机","不确定"],`${p.nutrient}在${p.start}开始消化。`));
            qs.push(this.makeQ(id++,"unit5","hard",`${p.nutrient}消化的最终产物是`,p.product,["无产物","随机","不确定"],`${p.nutrient}消化为${p.product}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genDigestiveOrgans(),...this.genDigestiveProcess()]; }
};
