// 超大题库生成器160 - 高频考点D
const giantGen160 = {
    baseId: 965000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHighFreqG() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"遗传的物质基础是",c:"DNA",w:["蛋白质","RNA","糖类"],u:"unit11"},
            {q:"基因是",c:"有遗传效应的DNA片段",w:["染色体","蛋白质","细胞核"],u:"unit11"},
            {q:"染色体的组成是",c:"DNA和蛋白质",w:["只有DNA","只有蛋白质","RNA"],u:"unit11"},
            {q:"人体细胞中染色体数目是",c:"23对46条",w:["22对44条","24对48条","46对92条"],u:"unit11"},
            {q:"生殖细胞中染色体数目是",c:"23条",w:["46条","22条","24条"],u:"unit11"},
            {q:"男性的性染色体组成是",c:"XY",w:["XX","YY","XO"],u:"unit11"},
            {q:"女性的性染色体组成是",c:"XX",w:["XY","YY","XO"],u:"unit11"},
            {q:"决定生男生女的是",c:"精子中的性染色体",w:["卵细胞","母亲","环境"],u:"unit11"},
            {q:"显性基因用什么字母表示",c:"大写字母",w:["小写字母","数字","希腊字母"],u:"unit11"},
            {q:"隐性基因用什么字母表示",c:"小写字母",w:["大写字母","数字","希腊字母"],u:"unit11"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genHighFreqH() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"生物进化的直接证据是",c:"化石",w:["比较解剖学","胚胎学","分子生物学"],u:"unit12"},
            {q:"自然选择学说的提出者是",c:"达尔文",w:["孟德尔","拉马克","林奈"],u:"unit12"},
            {q:"自然选择的基础是",c:"遗传和变异",w:["环境变化","人工选择","基因突变"],u:"unit12"},
            {q:"自然选择的结果是",c:"适者生存",w:["所有生物都生存","随机生存","强者生存"],u:"unit12"},
            {q:"生态系统的组成是",c:"生物部分和非生物部分",w:["只有生物","只有环境","只有生产者"],u:"unit13"},
            {q:"生态系统中的生产者是",c:"绿色植物",w:["动物","细菌","真菌"],u:"unit13"},
            {q:"生态系统中的分解者是",c:"细菌和真菌",w:["植物","动物","病毒"],u:"unit13"},
            {q:"食物链的起点是",c:"生产者",w:["消费者","分解者","阳光"],u:"unit13"},
            {q:"能量流动的特点是",c:"单向流动逐级递减",w:["循环流动","逐级增加","双向流动"],u:"unit13"},
            {q:"物质循环的特点是",c:"循环往复",w:["单向流动","逐级递减","不能循环"],u:"unit13"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHighFreqG(),...this.genHighFreqH()]; }
};
