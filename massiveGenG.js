// 海量题库生成器G - 生物进化详细
const massiveGenG = {
    baseId: 150000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEvolutionEvidence() {
        const qs = []; let id = this.baseId;
        const evidences = [
            {evidence:"化石",def:"保存在地层中的古生物遗体或遗迹",support:"直接证据",example:"始祖鸟化石"},
            {evidence:"比较解剖学",def:"比较不同生物的器官结构",support:"同源器官",example:"人手和鲸鳍"},
            {evidence:"胚胎学",def:"比较不同生物的胚胎发育",support:"早期胚胎相似",example:"脊椎动物胚胎"},
            {evidence:"分子生物学",def:"比较DNA和蛋白质序列",support:"分子水平相似",example:"细胞色素C"},
            {evidence:"生物地理学",def:"研究生物的地理分布",support:"大陆漂移",example:"澳洲有袋类"}
        ];
        evidences.forEach(e => {
            qs.push(this.makeQ(id++,"unit12","hard",`${e.evidence}证据的定义是`,e.def,["无定义","随机","不确定"],`${e.evidence}是${e.def}。`));
            qs.push(this.makeQ(id++,"unit12","hard",`${e.evidence}证据支持进化的方式是`,e.support,["无支持","随机","不确定"],`${e.evidence}通过${e.support}支持进化。`));
            qs.push(this.makeQ(id++,"unit12","hard",`${e.evidence}证据的例子是`,e.example,["无例子","随机","不确定"],`${e.evidence}如${e.example}。`));
        });
        this.baseId = id; return qs;
    },

    genEvolutionTheory() {
        const qs = []; let id = this.baseId;
        const theories = [
            {theory:"自然选择",proposer:"达尔文",content:"适者生存不适者淘汰",mechanism:"环境选择"},
            {theory:"用进废退",proposer:"拉马克",content:"器官越用越发达",mechanism:"获得性遗传"},
            {theory:"人工选择",proposer:"人类",content:"人为选择有利变异",mechanism:"定向选择"},
            {theory:"隔离",proposer:"现代综合理论",content:"地理或生殖隔离",mechanism:"阻止基因交流"},
            {theory:"基因突变",proposer:"现代综合理论",content:"DNA序列改变",mechanism:"产生新基因"}
        ];
        theories.forEach(t => {
            qs.push(this.makeQ(id++,"unit12","hard",`${t.theory}学说的提出者是`,t.proposer,["无提出者","随机","不确定"],`${t.theory}由${t.proposer}提出。`));
            qs.push(this.makeQ(id++,"unit12","hard",`${t.theory}学说的内容是`,t.content,["无内容","随机","不确定"],`${t.theory}的内容是${t.content}。`));
            qs.push(this.makeQ(id++,"unit12","hard",`${t.theory}的作用机制是`,t.mechanism,["无机制","随机","不确定"],`${t.theory}通过${t.mechanism}起作用。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEvolutionEvidence(),...this.genEvolutionTheory()]; }
};
