// 超大题库生成器149 - 综合应用题B
const giantGen149 = {
    baseId: 910000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genComprehensiveAppC() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"光合作用的场所是",c:"叶绿体",w:["线粒体","细胞核","液泡"],u:"unit4"},
            {q:"呼吸作用的场所是",c:"线粒体",w:["叶绿体","细胞核","液泡"],u:"unit4"},
            {q:"光合作用的原料是",c:"二氧化碳和水",w:["氧气和有机物","无机盐","蛋白质"],u:"unit4"},
            {q:"呼吸作用的原料是",c:"有机物和氧气",w:["二氧化碳和水","无机盐","蛋白质"],u:"unit4"},
            {q:"光合作用的产物是",c:"有机物和氧气",w:["二氧化碳和水","无机盐","蛋白质"],u:"unit4"},
            {q:"呼吸作用的产物是",c:"二氧化碳和水",w:["有机物和氧气","无机盐","蛋白质"],u:"unit4"},
            {q:"光合作用的能量转变是",c:"光能转变为化学能",w:["化学能转变为光能","热能转变为化学能","化学能转变为热能"],u:"unit4"},
            {q:"呼吸作用的能量转变是",c:"化学能转变为其他形式能量",w:["光能转变为化学能","热能转变为光能","机械能转变为化学能"],u:"unit4"},
            {q:"植物白天进行的生理活动是",c:"光合作用和呼吸作用",w:["只有光合作用","只有呼吸作用","都不进行"],u:"unit4"},
            {q:"植物夜间进行的生理活动是",c:"只有呼吸作用",w:["只有光合作用","光合作用和呼吸作用","都不进行"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genComprehensiveAppD() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"人体消化和吸收的主要场所是",c:"小肠",w:["胃","大肠","口腔"],u:"unit5"},
            {q:"人体最大的消化腺是",c:"肝脏",w:["胰腺","唾液腺","胃腺"],u:"unit5"},
            {q:"胆汁的作用是",c:"乳化脂肪",w:["消化蛋白质","消化淀粉","消化纤维素"],u:"unit5"},
            {q:"人体气体交换的场所是",c:"肺泡",w:["气管","支气管","鼻腔"],u:"unit6"},
            {q:"血液循环的动力器官是",c:"心脏",w:["肺","肝脏","肾脏"],u:"unit7"},
            {q:"形成尿液的器官是",c:"肾脏",w:["膀胱","输尿管","尿道"],u:"unit8"},
            {q:"神经系统的基本单位是",c:"神经元",w:["神经","大脑","脊髓"],u:"unit9"},
            {q:"反射的结构基础是",c:"反射弧",w:["神经元","大脑","脊髓"],u:"unit9"},
            {q:"人体最高级的神经中枢是",c:"大脑皮层",w:["脊髓","小脑","脑干"],u:"unit9"},
            {q:"调节血糖浓度的激素是",c:"胰岛素",w:["生长激素","甲状腺激素","肾上腺素"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genComprehensiveAppC(),...this.genComprehensiveAppD()]; }
};
