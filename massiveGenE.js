// 海量题库生成器E - 遗传与变异详细
const massiveGenE = {
    baseId: 140000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genGeneticTerms() {
        const qs = []; let id = this.baseId;
        const terms = [
            {term:"基因",def:"有遗传效应的DNA片段",location:"染色体上",feature:"控制性状"},
            {term:"染色体",def:"DNA和蛋白质的复合体",location:"细胞核内",feature:"成对存在"},
            {term:"DNA",def:"脱氧核糖核酸",location:"染色体上",feature:"双螺旋结构"},
            {term:"等位基因",def:"同源染色体相同位置的基因",location:"同源染色体上",feature:"控制相对性状"},
            {term:"显性基因",def:"能表现出来的基因",location:"染色体上",feature:"用大写字母表示"},
            {term:"隐性基因",def:"被掩盖的基因",location:"染色体上",feature:"用小写字母表示"},
            {term:"纯合子",def:"基因组成相同的个体",location:"体细胞中",feature:"如AA或aa"},
            {term:"杂合子",def:"基因组成不同的个体",location:"体细胞中",feature:"如Aa"}
        ];
        terms.forEach(t => {
            qs.push(this.makeQ(id++,"unit10","hard",`${t.term}的定义是`,t.def,["无定义","随机","不确定"],`${t.term}是${t.def}。`));
            qs.push(this.makeQ(id++,"unit10","hard",`${t.term}位于`,t.location,["体外","随机","不确定"],`${t.term}位于${t.location}。`));
            qs.push(this.makeQ(id++,"unit10","hard",`${t.term}的特点是`,t.feature,["无特点","随机","不确定"],`${t.term}的特点是${t.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genGeneticDiseases() {
        const qs = []; let id = this.baseId;
        const diseases = [
            {disease:"白化病",gene:"隐性遗传",chromosome:"常染色体",feature:"皮肤毛发白色"},
            {disease:"色盲",gene:"隐性遗传",chromosome:"X染色体",feature:"不能分辨颜色"},
            {disease:"血友病",gene:"隐性遗传",chromosome:"X染色体",feature:"血液不易凝固"},
            {disease:"镰刀型细胞贫血症",gene:"隐性遗传",chromosome:"常染色体",feature:"红细胞呈镰刀形"},
            {disease:"苯丙酮尿症",gene:"隐性遗传",chromosome:"常染色体",feature:"智力发育障碍"},
            {disease:"先天愚型",gene:"染色体异常",chromosome:"21号染色体多一条",feature:"智力低下"}
        ];
        diseases.forEach(d => {
            qs.push(this.makeQ(id++,"unit10","hard",`${d.disease}的遗传方式是`,d.gene,["显性遗传","无遗传","随机"],`${d.disease}是${d.gene}。`));
            qs.push(this.makeQ(id++,"unit10","hard",`${d.disease}的致病基因位于`,d.chromosome,["Y染色体","线粒体","随机"],`${d.disease}基因在${d.chromosome}。`));
            qs.push(this.makeQ(id++,"unit10","hard",`${d.disease}的特征是`,d.feature,["无特征","随机","不确定"],`${d.disease}的特征是${d.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genGeneticTerms(),...this.genGeneticDiseases()]; }
};
