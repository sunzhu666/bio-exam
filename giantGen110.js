// 超大题库生成器110 - 遗传变异补充
const giantGen110 = {
    baseId: 715000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genGeneticsA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"遗传的物质基础是",c:"DNA",w:["蛋白质","RNA","糖类"],u:"unit10"},
            {q:"DNA的载体是",c:"染色体",w:["细胞膜","细胞质","核糖体"],u:"unit10"},
            {q:"基因是",c:"有遗传效应的DNA片段",w:["染色体","蛋白质","细胞核"],u:"unit10"},
            {q:"染色体的组成是",c:"DNA和蛋白质",w:["只有DNA","只有蛋白质","糖类和脂肪"],u:"unit10"},
            {q:"人体细胞中染色体的数目是",c:"23对46条",w:["22对44条","24对48条","46对92条"],u:"unit10"},
            {q:"决定性别的染色体是",c:"性染色体",w:["常染色体","所有染色体","细胞核"],u:"unit10"},
            {q:"男性的性染色体组成是",c:"XY",w:["XX","YY","XO"],u:"unit10"},
            {q:"女性的性染色体组成是",c:"XX",w:["XY","YY","XO"],u:"unit10"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genGeneticsB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"生男生女的概率是",c:"各50%",w:["男多女少","女多男少","不确定"],u:"unit10"},
            {q:"决定生男生女的是",c:"精子中的性染色体",w:["卵细胞","母亲","环境"],u:"unit10"},
            {q:"显性基因用什么字母表示",c:"大写字母",w:["小写字母","数字","符号"],u:"unit10"},
            {q:"隐性基因用什么字母表示",c:"小写字母",w:["大写字母","数字","符号"],u:"unit10"},
            {q:"纯合子的基因组成是",c:"AA或aa",w:["Aa","AB","aB"],u:"unit10"},
            {q:"杂合子的基因组成是",c:"Aa",w:["AA","aa","AB"],u:"unit10"},
            {q:"Aa个体产生的配子类型是",c:"A和a两种",w:["只有A","只有a","AA和aa"],u:"unit10"},
            {q:"Aa×Aa后代的基因型比例是",c:"1:2:1",w:["3:1","1:1","2:1"],u:"unit10"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genGeneticsA(),...this.genGeneticsB()]; }
};
