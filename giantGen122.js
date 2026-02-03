// 超大题库生成器122 - 光合作用深化
const giantGen122 = {
    baseId: 775000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPhotosynthesisA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"光合作用的场所是",c:"叶绿体",w:["线粒体","细胞核","液泡"],u:"unit4"},
            {q:"光合作用的原料是",c:"二氧化碳和水",w:["氧气和葡萄糖","有机物","无机盐"],u:"unit4"},
            {q:"光合作用的产物是",c:"有机物和氧气",w:["二氧化碳和水","无机盐","蛋白质"],u:"unit4"},
            {q:"光合作用的条件是",c:"光照",w:["黑暗","高温","低温"],u:"unit4"},
            {q:"光合作用的能量转变是",c:"光能转变为化学能",w:["化学能转变为光能","热能转变为化学能","化学能转变为热能"],u:"unit4"},
            {q:"光合作用的意义是",c:"制造有机物释放氧气",w:["分解有机物","吸收氧气","释放二氧化碳"],u:"unit4"},
            {q:"影响光合作用的因素不包括",c:"土壤酸碱度",w:["光照强度","二氧化碳浓度","温度"],u:"unit4"},
            {q:"光合作用强度最大的时间是",c:"中午前后",w:["清晨","傍晚","夜间"],u:"unit4"},
            {q:"验证光合作用产生氧气的实验材料是",c:"水草",w:["种子","根","茎"],u:"unit4"},
            {q:"验证光合作用需要光的方法是",c:"遮光对照实验",w:["加热实验","染色实验","解剖实验"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genPhotosynthesisB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"验证光合作用产生淀粉的试剂是",c:"碘液",w:["酒精","石灰水","盐酸"],u:"unit4"},
            {q:"光合作用中水的分解发生在",c:"叶绿体类囊体膜上",w:["线粒体","细胞质","细胞核"],u:"unit4"},
            {q:"光合作用中二氧化碳的固定发生在",c:"叶绿体基质",w:["线粒体","细胞核","液泡"],u:"unit4"},
            {q:"提高大棚蔬菜产量的方法是",c:"增加二氧化碳浓度",w:["减少光照","降低温度","减少浇水"],u:"unit4"},
            {q:"光合作用和呼吸作用的关系是",c:"相互依存相互对立",w:["完全相同","毫无关系","只有对立"],u:"unit4"},
            {q:"白天植物进行的生理活动是",c:"光合作用和呼吸作用",w:["只有光合作用","只有呼吸作用","都不进行"],u:"unit4"},
            {q:"夜间植物进行的生理活动是",c:"只有呼吸作用",w:["只有光合作用","光合作用和呼吸作用","都不进行"],u:"unit4"},
            {q:"光合作用释放的氧气来自",c:"水",w:["二氧化碳","有机物","无机盐"],u:"unit4"},
            {q:"光合作用合成的有机物中碳来自",c:"二氧化碳",w:["水","无机盐","土壤"],u:"unit4"},
            {q:"叶片进行光合作用的主要部位是",c:"叶肉细胞",w:["表皮细胞","叶脉","气孔"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPhotosynthesisA(),...this.genPhotosynthesisB()]; }
};
