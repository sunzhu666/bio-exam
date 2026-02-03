// 超大题库生成器169 - 模拟试题I
const giantGen169 = {
    baseId: 1010000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genSimQ() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列关于遗传的叙述错误的是",c:"所有性状都由一对基因控制",w:["基因位于染色体上","基因是有遗传效应的DNA片段","染色体由DNA和蛋白质组成"],u:"unit11"},
            {q:"下列关于性别决定的叙述正确的是",c:"人的性别由性染色体决定",w:["人的性别由常染色体决定","人的性别由环境决定","人的性别由营养决定"],u:"unit11"},
            {q:"下列关于相对性状的叙述正确的是",c:"同种生物同一性状的不同表现形式",w:["不同生物的相同性状","同种生物的不同性状","任意两个性状"],u:"unit11"},
            {q:"下列属于相对性状的是",c:"豌豆的高茎和矮茎",w:["人的身高和体重","狗的长毛和黑毛","玉米的高茎和黄粒"],u:"unit11"},
            {q:"下列关于显性性状的叙述正确的是",c:"杂合子表现出的性状",w:["纯合子表现出的性状","隐性基因控制的性状","不能表现的性状"],u:"unit11"},
            {q:"下列关于隐性性状的叙述正确的是",c:"只有纯合子才能表现的性状",w:["杂合子表现的性状","显性基因控制的性状","一定能表现的性状"],u:"unit11"},
            {q:"Aa个体产生的配子类型是",c:"A和a两种",w:["只有A","只有a","AA和aa"],u:"unit11"},
            {q:"AA个体产生的配子类型是",c:"只有A一种",w:["A和a两种","只有a","AA"],u:"unit11"},
            {q:"aa个体产生的配子类型是",c:"只有a一种",w:["A和a两种","只有A","aa"],u:"unit11"},
            {q:"两个Aa个体杂交后代基因型比例是",c:"1:2:1",w:["3:1","1:1","2:1"],u:"unit11"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genSimR() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"两个Aa个体杂交后代表现型比例是",c:"3:1",w:["1:2:1","1:1","2:1"],u:"unit11"},
            {q:"Aa和aa杂交后代基因型比例是",c:"1:1",w:["3:1","1:2:1","2:1"],u:"unit11"},
            {q:"Aa和aa杂交后代表现型比例是",c:"1:1",w:["3:1","1:2:1","2:1"],u:"unit11"},
            {q:"下列关于变异的叙述正确的是",c:"变异分为可遗传变异和不可遗传变异",w:["所有变异都能遗传","所有变异都不能遗传","变异与遗传无关"],u:"unit11"},
            {q:"可遗传变异的原因是",c:"遗传物质发生改变",w:["环境改变","营养改变","温度改变"],u:"unit11"},
            {q:"不可遗传变异的原因是",c:"环境因素引起遗传物质未改变",w:["基因突变","染色体变异","基因重组"],u:"unit11"},
            {q:"下列属于可遗传变异的是",c:"基因突变引起的变异",w:["晒黑的皮肤","营养不良导致的矮小","水肥充足导致的高大"],u:"unit11"},
            {q:"下列属于不可遗传变异的是",c:"营养不良导致的矮小",w:["基因突变","染色体变异","基因重组"],u:"unit11"},
            {q:"人工选择的特点是",c:"按照人的需求选择有利变异",w:["自然进行","淘汰有利变异","保留不利变异"],u:"unit12"},
            {q:"自然选择的特点是",c:"自然进行保留有利变异淘汰不利变异",w:["人工进行","保留所有变异","淘汰有利变异"],u:"unit12"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genSimQ(),...this.genSimR()]; }
};
