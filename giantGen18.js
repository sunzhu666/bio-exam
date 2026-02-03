// 超大题库生成器18 - 遗传计算
const giantGen18 = {
    baseId: 255000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genGeneticCrosses() {
        const qs = []; let id = this.baseId;
        const crosses = [
            {cross:"AA×aa",f1:"Aa",f2:"1AA:2Aa:1aa",phenotype:"3:1"},
            {cross:"Aa×Aa",f1:"1AA:2Aa:1aa",phenotype:"3:1",recessive:"1/4"},
            {cross:"Aa×aa",f1:"1Aa:1aa",phenotype:"1:1",recessive:"1/2"},
            {cross:"AA×Aa",f1:"1AA:1Aa",phenotype:"全显性",recessive:"0"},
            {cross:"aa×aa",f1:"aa",phenotype:"全隐性",recessive:"1"},
            {cross:"AaBb×AaBb",f2:"9:3:3:1",phenotype:"9:3:3:1",double_recessive:"1/16"},
            {cross:"AaBb×aabb",f1:"1:1:1:1",phenotype:"1:1:1:1",double_recessive:"1/4"},
            {cross:"AABB×aabb",f1:"AaBb",phenotype:"全显性",double_recessive:"0"}
        ];
        crosses.forEach(c => {
            qs.push(this.makeQ(id++,"unit10","hard",`${c.cross}杂交F1基因型是`,c.f1,["无基因型","随机","不确定"],`${c.cross}的F1是${c.f1}。`));
            if(c.f2) {
                qs.push(this.makeQ(id++,"unit10","hard",`${c.cross}杂交F2基因型比例是`,c.f2,["无比例","随机","不确定"],`${c.cross}的F2是${c.f2}。`));
            }
            qs.push(this.makeQ(id++,"unit10","hard",`${c.cross}杂交后代表现型比例是`,c.phenotype,["无比例","随机","不确定"],`${c.cross}表现型比例是${c.phenotype}。`));
            if(c.recessive) {
                qs.push(this.makeQ(id++,"unit10","hard",`${c.cross}杂交后代隐性纯合子比例是`,c.recessive,["无比例","随机","不确定"],`${c.cross}隐性纯合子比例是${c.recessive}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genChromosomes() {
        const qs = []; let id = this.baseId;
        const organisms = [
            {organism:"人",diploid:"46",haploid:"23",sex:"XX或XY"},
            {organism:"果蝇",diploid:"8",haploid:"4",sex:"XX或XY"},
            {organism:"豌豆",diploid:"14",haploid:"7",sex:"无性染色体"},
            {organism:"玉米",diploid:"20",haploid:"10",sex:"无性染色体"},
            {organism:"水稻",diploid:"24",haploid:"12",sex:"无性染色体"},
            {organism:"小麦",diploid:"42",haploid:"21",sex:"无性染色体"},
            {organism:"马",diploid:"64",haploid:"32",sex:"XX或XY"},
            {organism:"驴",diploid:"62",haploid:"31",sex:"XX或XY"},
            {organism:"狗",diploid:"78",haploid:"39",sex:"XX或XY"},
            {organism:"猫",diploid:"38",haploid:"19",sex:"XX或XY"}
        ];
        organisms.forEach(o => {
            qs.push(this.makeQ(id++,"unit10","medium",`${o.organism}体细胞染色体数目是`,o.diploid,["无数目","随机","不确定"],`${o.organism}体细胞有${o.diploid}条染色体。`));
            qs.push(this.makeQ(id++,"unit10","medium",`${o.organism}生殖细胞染色体数目是`,o.haploid,["无数目","随机","不确定"],`${o.organism}生殖细胞有${o.haploid}条染色体。`));
            qs.push(this.makeQ(id++,"unit10","hard",`${o.organism}的性染色体组成是`,o.sex,["无性染色体","随机","不确定"],`${o.organism}性染色体是${o.sex}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genGeneticCrosses(),...this.genChromosomes()]; }
};
