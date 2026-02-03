// 超大题库生成器49 - 人体生殖系统疾病
const giantGen49 = {
    baseId: 410000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHealthyLifestyle() {
        const qs = []; let id = this.baseId;
        const habits = [
            {habit:"合理膳食",content:"营养均衡",benefit:"保证营养需求",principle:"食物多样化"},
            {habit:"适量运动",content:"每天运动30分钟以上",benefit:"增强体质",principle:"循序渐进"},
            {habit:"充足睡眠",content:"青少年8-10小时",benefit:"恢复体力",principle:"规律作息"},
            {habit:"心理健康",content:"保持乐观心态",benefit:"减少压力",principle:"积极面对"},
            {habit:"不吸烟",content:"远离烟草",benefit:"保护呼吸系统",harm:"肺癌心血管病"},
            {habit:"不酗酒",content:"限制饮酒",benefit:"保护肝脏",harm:"肝硬化"},
            {habit:"拒绝毒品",content:"远离毒品",benefit:"保护神经系统",harm:"成瘾死亡"},
            {habit:"个人卫生",content:"勤洗手洗澡",benefit:"预防疾病",principle:"养成习惯"}
        ];
        habits.forEach(h => {
            qs.push(this.makeQ(id++,"unit8","medium",`${h.habit}的内容是`,h.content,["无内容","随机","不确定"],`${h.habit}是${h.content}。`));
            qs.push(this.makeQ(id++,"unit8","medium",`${h.habit}的好处是`,h.benefit,["无好处","随机","不确定"],`${h.habit}可以${h.benefit}。`));
            if(h.principle) {
                qs.push(this.makeQ(id++,"unit8","medium",`${h.habit}的原则是`,h.principle,["无原则","随机","不确定"],`${h.habit}要${h.principle}。`));
            }
            if(h.harm) {
                qs.push(this.makeQ(id++,"unit8","hard",`不${h.habit}的危害是`,h.harm,["无危害","随机","不确定"],`不${h.habit}会导致${h.harm}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genDrugKnowledge() {
        const qs = []; let id = this.baseId;
        const drugs = [
            {drug:"抗生素",use:"杀灭细菌",misuse:"滥用导致耐药性",example:"青霉素"},
            {drug:"疫苗",use:"预防传染病",principle:"刺激产生抗体",example:"乙肝疫苗"},
            {drug:"退烧药",use:"降低体温",misuse:"掩盖病情",example:"布洛芬"},
            {drug:"止痛药",use:"缓解疼痛",misuse:"成瘾",example:"阿司匹林"},
            {drug:"维生素",use:"补充营养",misuse:"过量有害",example:"维生素C"},
            {drug:"激素类药物",use:"调节生理功能",misuse:"副作用大",example:"糖皮质激素"}
        ];
        drugs.forEach(d => {
            qs.push(this.makeQ(id++,"unit8","medium",`${d.drug}的用途是`,d.use,["无用途","随机","不确定"],`${d.drug}用于${d.use}。`));
            qs.push(this.makeQ(id++,"unit8","hard",`${d.drug}滥用的危害是`,d.misuse,["无危害","随机","不确定"],`${d.drug}滥用会${d.misuse}。`));
            qs.push(this.makeQ(id++,"unit8","medium",`${d.drug}的例子是`,d.example,["无例子","随机","不确定"],`${d.drug}如${d.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHealthyLifestyle(),...this.genDrugKnowledge()]; }
};
