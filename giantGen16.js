// 超大题库生成器16 - 人体消化系统详细
const giantGen16 = {
    baseId: 245000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genDigestiveOrgans() {
        const qs = []; let id = this.baseId;
        const organs = [
            {organ:"口腔",func:"咀嚼和初步消化淀粉",enzyme:"唾液淀粉酶",feature:"有牙齿和舌"},
            {organ:"咽",func:"食物和气体通道",enzyme:"无消化酶",feature:"吞咽时会厌软骨盖住喉"},
            {organ:"食道",func:"输送食物",enzyme:"无消化酶",feature:"蠕动推进食物"},
            {organ:"胃",func:"储存和初步消化蛋白质",enzyme:"胃蛋白酶",feature:"有胃酸"},
            {organ:"小肠",func:"消化和吸收的主要场所",enzyme:"多种消化酶",feature:"有绒毛增大表面积"},
            {organ:"大肠",func:"吸收水分形成粪便",enzyme:"无消化酶",feature:"有大量细菌"},
            {organ:"肝脏",func:"分泌胆汁",enzyme:"无消化酶",feature:"最大的消化腺"},
            {organ:"胰腺",func:"分泌胰液",enzyme:"多种消化酶",feature:"外分泌和内分泌"},
            {organ:"唾液腺",func:"分泌唾液",enzyme:"唾液淀粉酶",feature:"有三对"},
            {organ:"胆囊",func:"储存和浓缩胆汁",enzyme:"无消化酶",feature:"胆汁乳化脂肪"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit5","medium",`${o.organ}的主要功能是`,o.func,["无功能","随机","不确定"],`${o.organ}的功能是${o.func}。`));
            qs.push(this.makeQ(id++,"unit5","medium",`${o.organ}分泌的消化酶是`,o.enzyme,["蛋白酶","脂肪酶","随机"],`${o.organ}分泌${o.enzyme}。`));
            qs.push(this.makeQ(id++,"unit5","hard",`${o.organ}的结构特点是`,o.feature,["无特点","随机","不确定"],`${o.organ}${o.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genDigestionProcess() {
        const qs = []; let id = this.baseId;
        const processes = [
            {nutrient:"淀粉",start:"口腔",enzyme:"唾液淀粉酶和胰淀粉酶",product:"葡萄糖"},
            {nutrient:"蛋白质",start:"胃",enzyme:"胃蛋白酶和胰蛋白酶",product:"氨基酸"},
            {nutrient:"脂肪",start:"小肠",enzyme:"胰脂肪酶",product:"甘油和脂肪酸"},
            {nutrient:"麦芽糖",start:"小肠",enzyme:"麦芽糖酶",product:"葡萄糖"},
            {nutrient:"蔗糖",start:"小肠",enzyme:"蔗糖酶",product:"葡萄糖和果糖"},
            {nutrient:"乳糖",start:"小肠",enzyme:"乳糖酶",product:"葡萄糖和半乳糖"},
            {nutrient:"核酸",start:"小肠",enzyme:"核酸酶",product:"核苷酸"},
            {nutrient:"多肽",start:"小肠",enzyme:"肽酶",product:"氨基酸"}
        ];
        processes.forEach(p => {
            qs.push(this.makeQ(id++,"unit5","medium",`${p.nutrient}开始消化的部位是`,p.start,["大肠","食道","咽"],`${p.nutrient}在${p.start}开始消化。`));
            qs.push(this.makeQ(id++,"unit5","hard",`消化${p.nutrient}的酶是`,p.enzyme,["无酶","随机酶","不确定"],`${p.nutrient}被${p.enzyme}消化。`));
            qs.push(this.makeQ(id++,"unit5","medium",`${p.nutrient}最终消化成`,p.product,["淀粉","蛋白质","脂肪"],`${p.nutrient}消化成${p.product}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genDigestiveOrgans(),...this.genDigestionProcess()]; }
};
