// 超大题库生成器148 - 综合应用题A
const giantGen148 = {
    baseId: 905000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genComprehensiveAppA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列不属于生命现象的是",c:"铁生锈",w:["种子萌发","蝌蚪变青蛙","人体出汗"],u:"unit1"},
            {q:"下列属于生物的是",c:"蘑菇",w:["珊瑚","钟乳石","机器人"],u:"unit1"},
            {q:"生物体结构和功能的基本单位是",c:"细胞",w:["组织","器官","系统"],u:"unit2"},
            {q:"下列生物中没有细胞结构的是",c:"流感病毒",w:["草履虫","酵母菌","大肠杆菌"],u:"unit2"},
            {q:"植物细胞特有的结构是",c:"细胞壁叶绿体液泡",w:["细胞膜","细胞核","线粒体"],u:"unit2"},
            {q:"控制物质进出细胞的结构是",c:"细胞膜",w:["细胞壁","细胞核","液泡"],u:"unit2"},
            {q:"遗传信息的载体是",c:"DNA",w:["蛋白质","糖类","脂肪"],u:"unit11"},
            {q:"基因位于",c:"染色体上",w:["细胞膜上","细胞质中","液泡中"],u:"unit11"},
            {q:"人体细胞中染色体数目是",c:"46条",w:["23条","92条","48条"],u:"unit11"},
            {q:"决定生物性状的基本单位是",c:"基因",w:["染色体","DNA","蛋白质"],u:"unit11"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genComprehensiveAppB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列属于相对性状的是",c:"豌豆的高茎和矮茎",w:["人的身高和体重","狗的长毛和黑毛","玉米的高茎和黄粒"],u:"unit11"},
            {q:"生物进化的直接证据是",c:"化石",w:["比较解剖学","胚胎学","分子生物学"],u:"unit12"},
            {q:"自然选择的结果是",c:"适者生存",w:["所有生物都生存","随机生存","强者生存"],u:"unit12"},
            {q:"生态系统中能量流动的特点是",c:"单向流动逐级递减",w:["循环流动","逐级增加","双向流动"],u:"unit13"},
            {q:"食物链的起点是",c:"生产者",w:["消费者","分解者","阳光"],u:"unit13"},
            {q:"下列属于生产者的是",c:"水稻",w:["蝗虫","青蛙","蛇"],u:"unit13"},
            {q:"下列属于分解者的是",c:"蘑菇",w:["水稻","蝗虫","青蛙"],u:"unit13"},
            {q:"维持生态平衡的关键是",c:"保护生物多样性",w:["消灭害虫","增加人口","开发资源"],u:"unit13"},
            {q:"温室效应的主要原因是",c:"二氧化碳增加",w:["氧气增加","氮气增加","水蒸气减少"],u:"unit13"},
            {q:"保护生物多样性的根本措施是",c:"保护生物的栖息环境",w:["建立动物园","人工繁殖","迁地保护"],u:"unit13"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genComprehensiveAppA(),...this.genComprehensiveAppB()]; }
};
