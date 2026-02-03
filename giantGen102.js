// 超大题库生成器102 - 光合作用补充
const giantGen102 = {
    baseId: 675000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPhotosynthesisA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"光合作用的原料是",c:"二氧化碳和水",w:["氧气和葡萄糖","有机物","无机盐"],u:"unit3"},
            {q:"光合作用的产物是",c:"有机物和氧气",w:["二氧化碳和水","无机盐","ATP"],u:"unit3"},
            {q:"光合作用的条件是",c:"光照",w:["黑暗","高温","低温"],u:"unit3"},
            {q:"光合作用的场所是",c:"叶绿体",w:["线粒体","细胞核","核糖体"],u:"unit3"},
            {q:"光合作用的能量转变是",c:"光能转变为化学能",w:["化学能转变为光能","热能转变为化学能","化学能转变为热能"],u:"unit3"},
            {q:"光合作用释放的气体是",c:"氧气",w:["二氧化碳","氮气","水蒸气"],u:"unit3"},
            {q:"光合作用吸收的气体是",c:"二氧化碳",w:["氧气","氮气","水蒸气"],u:"unit3"},
            {q:"验证光合作用产生淀粉的试剂是",c:"碘液",w:["石灰水","酒精","盐酸"],u:"unit3"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genPhotosynthesisB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"光合作用的意义不包括",c:"分解有机物",w:["制造有机物","释放氧气","储存能量"],u:"unit3"},
            {q:"影响光合作用的因素不包括",c:"氧气浓度",w:["光照强度","二氧化碳浓度","温度"],u:"unit3"},
            {q:"提高光合作用效率的措施是",c:"增加二氧化碳浓度",w:["减少光照","降低温度","减少水分"],u:"unit3"},
            {q:"光合作用和呼吸作用的关系是",c:"相互依存相互对立",w:["完全相同","毫无关系","只有对立"],u:"unit3"},
            {q:"白天植物进行的生理活动是",c:"光合作用和呼吸作用",w:["只有光合作用","只有呼吸作用","都不进行"],u:"unit3"},
            {q:"夜晚植物进行的生理活动是",c:"只有呼吸作用",w:["只有光合作用","光合作用和呼吸作用","都不进行"],u:"unit3"},
            {q:"光合作用的实质是",c:"合成有机物储存能量",w:["分解有机物释放能量","吸收氧气","释放二氧化碳"],u:"unit3"},
            {q:"呼吸作用的实质是",c:"分解有机物释放能量",w:["合成有机物储存能量","吸收二氧化碳","释放氧气"],u:"unit3"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPhotosynthesisA(),...this.genPhotosynthesisB()]; }
};
