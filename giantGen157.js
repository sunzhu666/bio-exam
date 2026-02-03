// 超大题库生成器157 - 高频考点A
const giantGen157 = {
    baseId: 950000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHighFreqA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列不具有细胞结构的生物是",c:"噬菌体",w:["草履虫","酵母菌","大肠杆菌"],u:"unit2"},
            {q:"下列属于单细胞生物的是",c:"草履虫",w:["水螅","蚯蚓","蝗虫"],u:"unit2"},
            {q:"细胞中的能量转换器是",c:"线粒体和叶绿体",w:["细胞核","核糖体","内质网"],u:"unit2"},
            {q:"遗传信息的控制中心是",c:"细胞核",w:["细胞膜","细胞质","线粒体"],u:"unit2"},
            {q:"下列属于组织的是",c:"血液",w:["心脏","皮肤","胃"],u:"unit3"},
            {q:"下列属于器官的是",c:"胃",w:["血液","肌肉","神经"],u:"unit3"},
            {q:"下列属于系统的是",c:"消化系统",w:["胃","小肠","肝脏"],u:"unit3"},
            {q:"种子的主要结构是",c:"胚",w:["种皮","胚乳","子叶"],u:"unit3"},
            {q:"胚的组成是",c:"胚芽胚轴胚根子叶",w:["种皮","胚乳","果皮"],u:"unit3"},
            {q:"种子萌发时最先突破种皮的是",c:"胚根",w:["胚芽","胚轴","子叶"],u:"unit3"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genHighFreqB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"根尖的结构从下到上依次是",c:"根冠分生区伸长区成熟区",w:["成熟区伸长区分生区根冠","分生区根冠伸长区成熟区","伸长区成熟区根冠分生区"],u:"unit4"},
            {q:"根尖吸收水分和无机盐的主要部位是",c:"成熟区",w:["根冠","分生区","伸长区"],u:"unit4"},
            {q:"根尖生长最快的部位是",c:"伸长区",w:["根冠","分生区","成熟区"],u:"unit4"},
            {q:"根尖分裂能力最强的部位是",c:"分生区",w:["根冠","伸长区","成熟区"],u:"unit4"},
            {q:"叶片的结构包括",c:"表皮叶肉叶脉",w:["只有表皮","只有叶肉","只有叶脉"],u:"unit4"},
            {q:"叶片进行光合作用的主要部位是",c:"叶肉",w:["表皮","叶脉","气孔"],u:"unit4"},
            {q:"叶片进行蒸腾作用的主要部位是",c:"气孔",w:["表皮","叶肉","叶脉"],u:"unit4"},
            {q:"气孔由什么细胞组成",c:"保卫细胞",w:["表皮细胞","叶肉细胞","导管细胞"],u:"unit4"},
            {q:"光合作用的场所是",c:"叶绿体",w:["线粒体","细胞核","液泡"],u:"unit4"},
            {q:"呼吸作用的场所是",c:"线粒体",w:["叶绿体","细胞核","液泡"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHighFreqA(),...this.genHighFreqB()]; }
};
