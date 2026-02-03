// 海量题库生成器C - 人体系统综合
const massiveGenC = {
    baseId: 130000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genDigestion() {
        const qs = []; let id = this.baseId;
        const foods = [
            {food:"米饭",nutrient:"淀粉",start:"口腔",end:"葡萄糖",enzyme:"淀粉酶"},
            {food:"面包",nutrient:"淀粉",start:"口腔",end:"葡萄糖",enzyme:"淀粉酶"},
            {food:"馒头",nutrient:"淀粉",start:"口腔",end:"葡萄糖",enzyme:"淀粉酶"},
            {food:"鸡蛋",nutrient:"蛋白质",start:"胃",end:"氨基酸",enzyme:"蛋白酶"},
            {food:"牛奶",nutrient:"蛋白质",start:"胃",end:"氨基酸",enzyme:"蛋白酶"},
            {food:"瘦肉",nutrient:"蛋白质",start:"胃",end:"氨基酸",enzyme:"蛋白酶"},
            {food:"肥肉",nutrient:"脂肪",start:"小肠",end:"甘油和脂肪酸",enzyme:"脂肪酶"},
            {food:"花生油",nutrient:"脂肪",start:"小肠",end:"甘油和脂肪酸",enzyme:"脂肪酶"},
            {food:"黄油",nutrient:"脂肪",start:"小肠",end:"甘油和脂肪酸",enzyme:"脂肪酶"}
        ];
        foods.forEach(f => {
            qs.push(this.makeQ(id++,"unit5","medium",`${f.food}中主要含有`,f.nutrient,["维生素","无机盐","水"],`${f.food}主要含${f.nutrient}。`));
            qs.push(this.makeQ(id++,"unit5","medium",`${f.food}开始消化的部位是`,f.start,["大肠","食道","咽"],`${f.food}在${f.start}开始消化。`));
            qs.push(this.makeQ(id++,"unit5","medium",`${f.food}最终消化成`,f.end,["淀粉","蛋白质","脂肪"],`${f.food}最终消化成${f.end}。`));
            qs.push(this.makeQ(id++,"unit5","hard",`消化${f.food}的酶是`,f.enzyme,["纤维素酶","核酸酶","无酶"],`${f.nutrient}被${f.enzyme}消化。`));
        });
        this.baseId = id; return qs;
    },

    genBloodTypes() {
        const qs = []; let id = this.baseId;
        const types = [
            {type:"A型",antigen:"A抗原",antibody:"抗B抗体",canGive:"A型和AB型",canReceive:"A型和O型"},
            {type:"B型",antigen:"B抗原",antibody:"抗A抗体",canGive:"B型和AB型",canReceive:"B型和O型"},
            {type:"AB型",antigen:"A和B抗原",antibody:"无抗体",canGive:"AB型",canReceive:"所有血型"},
            {type:"O型",antigen:"无抗原",antibody:"抗A和抗B抗体",canGive:"所有血型",canReceive:"O型"}
        ];
        types.forEach(t => {
            qs.push(this.makeQ(id++,"unit7","hard",`${t.type}血红细胞表面有`,t.antigen,["无抗原","C抗原","D抗原"],`${t.type}血有${t.antigen}。`));
            qs.push(this.makeQ(id++,"unit7","hard",`${t.type}血血浆中有`,t.antibody,["A抗体","B抗体","无"],`${t.type}血有${t.antibody}。`));
            qs.push(this.makeQ(id++,"unit7","hard",`${t.type}血可以输给`,t.canGive,["所有人","无人","不确定"],`${t.type}血可输给${t.canGive}。`));
            qs.push(this.makeQ(id++,"unit7","hard",`${t.type}血可以接受`,t.canReceive,["所有血型","无血型","不确定"],`${t.type}血可接受${t.canReceive}。`));
        });
        this.baseId = id; return qs;
    },

    genSensoryOrgans() {
        const qs = []; let id = this.baseId;
        const organs = [
            {organ:"眼",sense:"视觉",receptor:"视网膜",center:"大脑皮层视觉中枢",stimulus:"光"},
            {organ:"耳",sense:"听觉",receptor:"耳蜗",center:"大脑皮层听觉中枢",stimulus:"声波"},
            {organ:"鼻",sense:"嗅觉",receptor:"嗅觉感受器",center:"大脑皮层嗅觉中枢",stimulus:"气味分子"},
            {organ:"舌",sense:"味觉",receptor:"味蕾",center:"大脑皮层味觉中枢",stimulus:"化学物质"},
            {organ:"皮肤",sense:"触觉",receptor:"触觉感受器",center:"大脑皮层躯体感觉中枢",stimulus:"压力"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit9","medium",`${o.organ}产生的感觉是`,o.sense,["无感觉","随机","不确定"],`${o.organ}产生${o.sense}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`${o.organ}的感受器是`,o.receptor,["无感受器","随机","不确定"],`${o.organ}的感受器是${o.receptor}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`${o.sense}形成的部位是`,o.center,["感受器","神经","效应器"],`${o.sense}在${o.center}形成。`));
            qs.push(this.makeQ(id++,"unit9","easy",`${o.organ}感受的刺激是`,o.stimulus,["无刺激","随机","不确定"],`${o.organ}感受${o.stimulus}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genDigestion(),...this.genBloodTypes(),...this.genSensoryOrgans()]; }
};
