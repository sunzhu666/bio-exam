// 超大题库生成器60 - 生物学史
const giantGen60 = {
    baseId: 465000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genScientists() {
        const qs = []; let id = this.baseId;
        const scientists = [
            {scientist:"罗伯特·虎克",contribution:"发现细胞",year:"1665年",tool:"显微镜"},
            {scientist:"施莱登和施旺",contribution:"提出细胞学说",content:"细胞是生物结构和功能的基本单位"},
            {scientist:"达尔文",contribution:"提出自然选择学说",book:"物种起源"},
            {scientist:"孟德尔",contribution:"发现遗传规律",material:"豌豆"},
            {scientist:"沃森和克里克",contribution:"发现DNA双螺旋结构",year:"1953年"},
            {scientist:"巴斯德",contribution:"证明微生物致病",experiment:"鹅颈瓶实验"},
            {scientist:"弗莱明",contribution:"发现青霉素",significance:"抗生素时代开始"},
            {scientist:"袁隆平",contribution:"杂交水稻之父",significance:"解决粮食问题"}
        ];
        scientists.forEach(s => {
            qs.push(this.makeQ(id++,"unit1","medium",`${s.scientist}的贡献是`,s.contribution,["无贡献","随机","不确定"],`${s.scientist}${s.contribution}。`));
            if(s.year) qs.push(this.makeQ(id++,"unit1","medium",`${s.scientist}的发现时间是`,s.year,["无时间","随机","不确定"],`${s.scientist}在${s.year}。`));
            if(s.material) qs.push(this.makeQ(id++,"unit1","medium",`${s.scientist}使用的实验材料是`,s.material,["无材料","随机","不确定"],`${s.scientist}用${s.material}。`));
        });
        this.baseId = id; return qs;
    },

    genMilestones() {
        const qs = []; let id = this.baseId;
        const milestones = [
            {event:"细胞学说建立",significance:"统一了动植物研究",founder:"施莱登施旺"},
            {event:"进化论提出",significance:"解释物种起源",founder:"达尔文"},
            {event:"遗传规律发现",significance:"奠定遗传学基础",founder:"孟德尔"},
            {event:"DNA结构发现",significance:"分子生物学诞生",founder:"沃森克里克"},
            {event:"人类基因组计划",significance:"破译人类遗传密码",year:"2003年完成"},
            {event:"克隆羊多莉诞生",significance:"证明体细胞克隆可行",year:"1996年"}
        ];
        milestones.forEach(m => {
            qs.push(this.makeQ(id++,"unit1","hard",`${m.event}的意义是`,m.significance,["无意义","随机","不确定"],`${m.event}${m.significance}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${m.event}的创立者是`,m.founder||m.year,["无创立者","随机","不确定"],`${m.event}由${m.founder||m.year}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genScientists(),...this.genMilestones()]; }
};
