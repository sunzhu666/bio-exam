// 超大题库生成器128 - 遗传变异深化
const giantGen128 = {
    baseId: 805000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genGeneticsA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"遗传的物质基础是",c:"DNA",w:["蛋白质","RNA","糖类"],u:"unit11"},
            {q:"基因是",c:"有遗传效应的DNA片段",w:["染色体","蛋白质","细胞核"],u:"unit11"},
            {q:"染色体的组成是",c:"DNA和蛋白质",w:["只有DNA","只有蛋白质","RNA"],u:"unit11"},
            {q:"基因和染色体的关系是",c:"基因位于染色体上",w:["染色体位于基因上","没有关系","基因就是染色体"],u:"unit11"},
            {q:"人体细胞中染色体数目是",c:"23对46条",w:["22对44条","24对48条","46对92条"],u:"unit11"},
            {q:"生殖细胞中染色体数目是",c:"23条",w:["46条","22条","24条"],u:"unit11"},
            {q:"性染色体决定",c:"性别",w:["身高","体重","智力"],u:"unit11"},
            {q:"男性的性染色体组成是",c:"XY",w:["XX","YY","XO"],u:"unit11"},
            {q:"女性的性染色体组成是",c:"XX",w:["XY","YY","XO"],u:"unit11"},
            {q:"决定生男生女的是",c:"精子中的性染色体",w:["卵细胞","母亲","环境"],u:"unit11"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genGeneticsB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"显性基因用什么字母表示",c:"大写字母",w:["小写字母","数字","希腊字母"],u:"unit11"},
            {q:"隐性基因用什么字母表示",c:"小写字母",w:["大写字母","数字","希腊字母"],u:"unit11"},
            {q:"纯合子的基因组成是",c:"AA或aa",w:["Aa","AB","aB"],u:"unit11"},
            {q:"杂合子的基因组成是",c:"Aa",w:["AA","aa","AB"],u:"unit11"},
            {q:"Aa个体的表现型是",c:"显性性状",w:["隐性性状","中间性状","无性状"],u:"unit11"},
            {q:"两个Aa个体杂交后代基因型比例是",c:"1:2:1",w:["3:1","1:1","2:1"],u:"unit11"},
            {q:"两个Aa个体杂交后代表现型比例是",c:"3:1",w:["1:2:1","1:1","2:1"],u:"unit11"},
            {q:"变异的类型包括",c:"可遗传变异和不可遗传变异",w:["只有可遗传变异","只有不可遗传变异","没有变异"],u:"unit11"},
            {q:"可遗传变异的原因是",c:"遗传物质发生改变",w:["环境改变","营养改变","温度改变"],u:"unit11"},
            {q:"不可遗传变异的原因是",c:"环境因素引起遗传物质未改变",w:["基因突变","染色体变异","基因重组"],u:"unit11"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genGeneticsA(),...this.genGeneticsB()]; }
};
