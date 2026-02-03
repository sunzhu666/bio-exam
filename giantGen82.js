// 超大题库生成器82 - 生物进化证据
const giantGen82 = {
    baseId: 575000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genFossilEvidence() {
        const qs = []; let id = this.baseId;
        const fossils = [
            {fossil:"化石",definition:"保存在地层中的古生物遗体遗迹",importance:"直接证据"},
            {fossil:"始祖鸟化石",feature:"既有鸟类特征又有爬行类特征",证明:"鸟类由爬行类进化"},
            {fossil:"马的进化化石",series:"从始祖马到现代马",change:"体型增大趾数减少"},
            {fossil:"三叶虫化石",age:"古生代",environment:"海洋"},
            {fossil:"恐龙化石",age:"中生代",extinction:"白垩纪末期"}
        ];
        fossils.forEach(f => {
            qs.push(this.makeQ(id++,"unit12","medium",`${f.fossil}的定义是`,f.definition||f.feature,["无定义","随机","不确定"],`${f.fossil}是${f.definition||f.feature}。`));
            if(f.证明) qs.push(this.makeQ(id++,"unit12","medium",`${f.fossil}证明了`,f.证明,["无证明","随机","不确定"],`${f.fossil}证明${f.证明}。`));
        });
        this.baseId = id; return qs;
    },

    genComparativeEvidence() {
        const qs = []; let id = this.baseId;
        const evidences = [
            {evidence:"同源器官",definition:"起源相同功能不同",example:"人的手鲸的鳍蝙蝠的翼"},
            {evidence:"同功器官",definition:"起源不同功能相同",example:"鸟的翅膀昆虫的翅"},
            {evidence:"痕迹器官",definition:"退化的器官",example:"人的阑尾尾骨"},
            {evidence:"胚胎学证据",content:"胚胎发育相似",example:"脊椎动物早期胚胎相似"},
            {evidence:"分子生物学证据",content:"DNA和蛋白质相似性",method:"比较基因序列"}
        ];
        evidences.forEach(e => {
            qs.push(this.makeQ(id++,"unit12","hard",`${e.evidence}的定义是`,e.definition||e.content,["无定义","随机","不确定"],`${e.evidence}是${e.definition||e.content}。`));
            qs.push(this.makeQ(id++,"unit12","hard",`${e.evidence}的例子是`,e.example||e.method,["无例子","随机","不确定"],`${e.evidence}如${e.example||e.method}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genFossilEvidence(),...this.genComparativeEvidence()]; }
};
