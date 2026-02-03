// 超大题库生成器9 - 免疫系统详细
const giantGen9 = {
    baseId: 210000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genImmunityTypes() {
        const qs = []; let id = this.baseId;
        const types = [
            {type:"非特异性免疫",feature:"生来就有",example:"皮肤屏障吞噬细胞",target:"多种病原体"},
            {type:"特异性免疫",feature:"后天获得",example:"抗体免疫",target:"特定病原体"},
            {type:"体液免疫",cell:"B淋巴细胞",product:"抗体",target:"细胞外病原体"},
            {type:"细胞免疫",cell:"T淋巴细胞",product:"效应T细胞",target:"细胞内病原体"},
            {type:"自然免疫",source:"自然感染或母体获得",duration:"持久或短暂",example:"患病后获得"},
            {type:"人工免疫",source:"接种疫苗或注射抗体",duration:"持久或短暂",example:"接种疫苗"}
        ];
        types.forEach(t => {
            qs.push(this.makeQ(id++,"unit8","hard",`${t.type}的特点是`,t.feature || t.source,["无特点","随机","不确定"],`${t.type}${t.feature || t.source}。`));
            if(t.example) {
                qs.push(this.makeQ(id++,"unit8","hard",`${t.type}的例子是`,t.example,["无例子","随机","不确定"],`${t.type}如${t.example}。`));
            }
            if(t.target) {
                qs.push(this.makeQ(id++,"unit8","hard",`${t.type}针对的是`,t.target,["无目标","随机","不确定"],`${t.type}针对${t.target}。`));
            }
            if(t.cell) {
                qs.push(this.makeQ(id++,"unit8","hard",`${t.type}的主要细胞是`,t.cell,["无细胞","随机","不确定"],`${t.type}由${t.cell}参与。`));
            }
            if(t.product) {
                qs.push(this.makeQ(id++,"unit8","hard",`${t.type}产生的是`,t.product,["无产物","随机","不确定"],`${t.type}产生${t.product}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genImmuneCells() {
        const qs = []; let id = this.baseId;
        const cells = [
            {cell:"吞噬细胞",func:"吞噬病原体",type:"非特异性免疫",location:"血液和组织"},
            {cell:"B淋巴细胞",func:"产生抗体",type:"体液免疫",location:"骨髓成熟"},
            {cell:"T淋巴细胞",func:"细胞免疫",type:"细胞免疫",location:"胸腺成熟"},
            {cell:"效应B细胞",func:"分泌抗体",type:"体液免疫",location:"淋巴结"},
            {cell:"效应T细胞",func:"攻击靶细胞",type:"细胞免疫",location:"淋巴结"},
            {cell:"记忆细胞",func:"记忆抗原快速反应",type:"特异性免疫",location:"淋巴组织"},
            {cell:"自然杀伤细胞",func:"杀伤肿瘤和病毒感染细胞",type:"非特异性免疫",location:"血液"},
            {cell:"树突状细胞",func:"呈递抗原",type:"特异性免疫",location:"组织"}
        ];
        cells.forEach(c => {
            qs.push(this.makeQ(id++,"unit8","hard",`${c.cell}的功能是`,c.func,["无功能","随机","不确定"],`${c.cell}的功能是${c.func}。`));
            qs.push(this.makeQ(id++,"unit8","hard",`${c.cell}参与的免疫类型是`,c.type,["无类型","随机","不确定"],`${c.cell}参与${c.type}。`));
            qs.push(this.makeQ(id++,"unit8","hard",`${c.cell}的位置是`,c.location,["无位置","随机","不确定"],`${c.cell}在${c.location}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genImmunityTypes(),...this.genImmuneCells()]; }
};
