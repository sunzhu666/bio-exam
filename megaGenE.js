// 大规模题库生成器E - 遗传变异综合
const megaGenE = {
    baseId: 70000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genGeneticTerms() {
        const qs = []; let id = this.baseId;
        const terms = [
            {term:"基因",def:"有遗传效应的DNA片段",location:"染色体上",func:"控制性状"},
            {term:"染色体",def:"DNA和蛋白质的复合体",location:"细胞核内",func:"携带遗传信息"},
            {term:"DNA",def:"脱氧核糖核酸",location:"染色体上",func:"储存遗传信息"},
            {term:"等位基因",def:"位于同源染色体相同位置的基因",location:"同源染色体上",func:"控制相对性状"},
            {term:"显性基因",def:"能表现出来的基因",location:"染色体上",func:"控制显性性状"},
            {term:"隐性基因",def:"被掩盖的基因",location:"染色体上",func:"控制隐性性状"},
            {term:"纯合子",def:"基因组成相同的个体",location:"体细胞中",func:"稳定遗传"},
            {term:"杂合子",def:"基因组成不同的个体",location:"体细胞中",func:"后代会分离"},
            {term:"表现型",def:"生物表现出来的性状",location:"个体水平",func:"可观察"},
            {term:"基因型",def:"生物的基因组成",location:"细胞水平",func:"决定表现型"}
        ];
        terms.forEach(t => {
            qs.push(this.makeQ(id++,"unit11","medium",`${t.term}的定义是`,t.def,["蛋白质","细胞","组织"],`${t.term}是${t.def}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${t.term}位于`,t.location,["细胞外","体外","环境中"],`${t.term}位于${t.location}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${t.term}的功能是`,t.func,["无功能","有害","随机"],`${t.term}的功能是${t.func}。`));
        });
        this.baseId = id; return qs;
    },

    genGeneticDiseases() {
        const qs = []; let id = this.baseId;
        const diseases = [
            {name:"白化病",type:"常染色体隐性",gene:"aa",feature:"皮肤毛发白色"},
            {name:"红绿色盲",type:"X染色体隐性",gene:"XbXb或XbY",feature:"不能分辨红绿色"},
            {name:"血友病",type:"X染色体隐性",gene:"XhXh或XhY",feature:"凝血功能障碍"},
            {name:"多指",type:"常染色体显性",gene:"Aa或AA",feature:"手指多于5个"},
            {name:"先天性聋哑",type:"常染色体隐性",gene:"aa",feature:"听力和语言障碍"},
            {name:"苯丙酮尿症",type:"常染色体隐性",gene:"aa",feature:"智力发育障碍"},
            {name:"镰刀型细胞贫血症",type:"常染色体隐性",gene:"aa",feature:"红细胞呈镰刀形"},
            {name:"唐氏综合征",type:"染色体数目异常",gene:"21三体",feature:"智力低下"},
            {name:"猫叫综合征",type:"染色体结构异常",gene:"5号染色体缺失",feature:"哭声似猫叫"}
        ];
        diseases.forEach(d => {
            qs.push(this.makeQ(id++,"unit11","hard",`${d.name}的遗传类型是`,d.type,["不遗传","传染病","环境病"],`${d.name}是${d.type}遗传病。`));
            qs.push(this.makeQ(id++,"unit11","hard",`${d.name}患者的基因型可能是`,d.gene,["AA","正常","无基因"],`${d.name}患者基因型为${d.gene}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${d.name}的主要特征是`,d.feature,["无症状","更健康","增强体质"],`${d.name}表现为${d.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genVariationTypes() {
        const qs = []; let id = this.baseId;
        const variations = [
            {type:"基因突变",cause:"DNA分子改变",feature:"随机性、低频性",example:"镰刀型贫血"},
            {type:"基因重组",cause:"减数分裂时基因交换",feature:"产生新组合",example:"杂交育种"},
            {type:"染色体数目变异",cause:"染色体数目改变",feature:"整倍或非整倍",example:"唐氏综合征"},
            {type:"染色体结构变异",cause:"染色体结构改变",feature:"缺失、重复、倒位、易位",example:"猫叫综合征"},
            {type:"不可遗传变异",cause:"环境因素",feature:"不能遗传给后代",example:"晒黑的皮肤"},
            {type:"可遗传变异",cause:"遗传物质改变",feature:"能遗传给后代",example:"基因突变"}
        ];
        variations.forEach(v => {
            qs.push(this.makeQ(id++,"unit11","hard",`${v.type}的原因是`,v.cause,["无原因","随机","环境"],`${v.type}由${v.cause}引起。`));
            qs.push(this.makeQ(id++,"unit11","hard",`${v.type}的特点是`,v.feature,["无特点","有害","致死"],`${v.type}的特点是${v.feature}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${v.example}属于`,v.type,["无变异","正常","健康"],`${v.example}是${v.type}的例子。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genGeneticTerms(),...this.genGeneticDiseases(),...this.genVariationTypes()]; }
};
