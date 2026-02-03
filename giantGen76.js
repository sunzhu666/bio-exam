// 超大题库生成器76 - 免疫系统深化
const giantGen76 = {
    baseId: 545000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genImmuneCells() {
        const qs = []; let id = this.baseId;
        const cells = [
            {cell:"吞噬细胞",function:"吞噬病原体",type:"非特异性免疫",location:"血液组织"},
            {cell:"T淋巴细胞",origin:"骨髓产生胸腺成熟",function:"细胞免疫",type:"效应T细胞"},
            {cell:"B淋巴细胞",origin:"骨髓产生成熟",function:"体液免疫",type:"浆细胞"},
            {cell:"效应T细胞",function:"攻击靶细胞",method:"释放淋巴因子"},
            {cell:"浆细胞",function:"产生抗体",origin:"B细胞分化"},
            {cell:"记忆细胞",function:"记住抗原",effect:"二次免疫更快更强"}
        ];
        cells.forEach(c => {
            qs.push(this.makeQ(id++,"unit8","hard",`${c.cell}的功能是`,c.function,["无功能","随机","不确定"],`${c.cell}${c.function}。`));
            if(c.origin) qs.push(this.makeQ(id++,"unit8","hard",`${c.cell}的来源是`,c.origin,["无来源","随机","不确定"],`${c.cell}${c.origin}。`));
        });
        this.baseId = id; return qs;
    },

    genImmuneProcess() {
        const qs = []; let id = this.baseId;
        const processes = [
            {process:"体液免疫",antibody:"抗体",target:"细胞外病原体",cell:"B淋巴细胞"},
            {process:"细胞免疫",method:"效应T细胞攻击",target:"被感染细胞",cell:"T淋巴细胞"},
            {process:"抗原识别",cell:"吞噬细胞T细胞B细胞",structure:"抗原决定簇"},
            {process:"抗体作用",effect:"与抗原结合",result:"形成沉淀被吞噬"},
            {process:"二次免疫",feature:"更快更强",reason:"记忆细胞存在"}
        ];
        processes.forEach(p => {
            qs.push(this.makeQ(id++,"unit8","hard",`${p.process}的特点是`,p.antibody||p.method||p.feature,["无特点","随机","不确定"],`${p.process}${p.antibody||p.method||p.feature}。`));
            qs.push(this.makeQ(id++,"unit8","hard",`${p.process}的目标是`,p.target||p.effect,["无目标","随机","不确定"],`${p.process}针对${p.target||p.effect}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genImmuneCells(),...this.genImmuneProcess()]; }
};
