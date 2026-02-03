// 超大题库生成器172 - 专题复习B
const giantGen172 = {
    baseId: 1025000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genTopicC() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"光合作用的场所是",c:"叶绿体",w:["线粒体","细胞核","液泡"],u:"unit4"},
            {q:"光合作用的原料是",c:"二氧化碳和水",w:["氧气和葡萄糖","有机物","无机盐"],u:"unit4"},
            {q:"光合作用的产物是",c:"有机物和氧气",w:["二氧化碳和水","无机盐","蛋白质"],u:"unit4"},
            {q:"光合作用的条件是",c:"光",w:["黑暗","高温","低温"],u:"unit4"},
            {q:"光合作用的能量转变是",c:"光能转变为化学能",w:["化学能转变为光能","热能转变为化学能","化学能转变为热能"],u:"unit4"},
            {q:"呼吸作用的场所是",c:"线粒体",w:["叶绿体","细胞核","液泡"],u:"unit4"},
            {q:"呼吸作用的原料是",c:"有机物和氧气",w:["二氧化碳和水","无机盐","光能"],u:"unit4"},
            {q:"呼吸作用的产物是",c:"二氧化碳和水",w:["有机物和氧气","无机盐","蛋白质"],u:"unit4"},
            {q:"呼吸作用的能量转变是",c:"化学能转变为其他形式能量",w:["光能转变为化学能","热能转变为化学能","机械能转变为化学能"],u:"unit4"},
            {q:"光合作用和呼吸作用的关系是",c:"相互依存相互对立",w:["完全相同","完全无关","只有对立"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"easy",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genTopicD() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"蒸腾作用的主要器官是",c:"叶",w:["根","茎","花"],u:"unit4"},
            {q:"蒸腾作用的主要部位是",c:"气孔",w:["叶肉","叶脉","表皮"],u:"unit4"},
            {q:"气孔由什么细胞组成",c:"保卫细胞",w:["表皮细胞","叶肉细胞","导管细胞"],u:"unit4"},
            {q:"蒸腾作用的意义是",c:"促进水分吸收和运输降低叶片温度",w:["制造有机物","释放能量","吸收二氧化碳"],u:"unit4"},
            {q:"植物吸收水分的主要部位是",c:"根尖的成熟区",w:["根尖的分生区","根尖的伸长区","根尖的根冠"],u:"unit4"},
            {q:"根尖吸水的结构是",c:"根毛",w:["导管","筛管","形成层"],u:"unit4"},
            {q:"水分在植物体内运输的结构是",c:"导管",w:["筛管","形成层","根毛"],u:"unit4"},
            {q:"有机物在植物体内运输的结构是",c:"筛管",w:["导管","形成层","根毛"],u:"unit4"},
            {q:"导管和筛管的区别是",c:"导管运输水和无机盐筛管运输有机物",w:["功能相同","结构相同","位置相同"],u:"unit4"},
            {q:"植物生长需要最多的无机盐是",c:"氮磷钾",w:["铁锌铜","钙镁硫","硼锰钼"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genTopicC(),...this.genTopicD()]; }
};
