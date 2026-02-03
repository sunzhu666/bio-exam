// 大规模题库生成器J - 综合知识题
const megaGenJ = {
    baseId: 95000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBioScientists() {
        const qs = []; let id = this.baseId;
        const scientists = [
            {name:"达尔文",contribution:"自然选择学说",field:"进化论",work:"物种起源"},
            {name:"孟德尔",contribution:"遗传定律",field:"遗传学",work:"豌豆杂交实验"},
            {name:"巴斯德",contribution:"微生物学奠基人",field:"微生物学",work:"证明微生物致病"},
            {name:"林奈",contribution:"双名法",field:"分类学",work:"生物分类系统"},
            {name:"沃森和克里克",contribution:"DNA双螺旋结构",field:"分子生物学",work:"DNA模型"},
            {name:"施莱登和施旺",contribution:"细胞学说",field:"细胞生物学",work:"细胞是生命基本单位"},
            {name:"哈维",contribution:"血液循环理论",field:"生理学",work:"心血管系统研究"},
            {name:"袁隆平",contribution:"杂交水稻",field:"农业科学",work:"杂交水稻之父"},
            {name:"屠呦呦",contribution:"青蒿素",field:"医学",work:"抗疟疾药物"}
        ];
        scientists.forEach(s => {
            qs.push(this.makeQ(id++,"unit1","easy",`${s.name}的主要贡献是`,s.contribution,["无贡献","有害","随机"],`${s.name}的贡献是${s.contribution}。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${s.name}在什么领域做出贡献`,s.field,["无领域","随机","不确定"],`${s.name}在${s.field}领域做出贡献。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${s.name}的代表性工作是`,s.work,["无工作","随机","不确定"],`${s.name}的代表工作是${s.work}。`));
        });
        this.baseId = id; return qs;
    },

    genBioTechnology() {
        const qs = []; let id = this.baseId;
        const techs = [
            {tech:"基因工程",principle:"DNA重组",application:"转基因作物",example:"抗虫棉"},
            {tech:"细胞工程",principle:"细胞培养",application:"克隆技术",example:"克隆羊多莉"},
            {tech:"发酵工程",principle:"微生物代谢",application:"食品工业",example:"酿酒制醋"},
            {tech:"酶工程",principle:"酶的应用",application:"工业生产",example:"洗衣粉加酶"},
            {tech:"组织培养",principle:"细胞全能性",application:"快速繁殖",example:"兰花组培"},
            {tech:"人工授精",principle:"体外受精",application:"畜牧业",example:"优良品种繁殖"},
            {tech:"胚胎移植",principle:"胚胎发育",application:"畜牧业",example:"优良品种扩繁"},
            {tech:"基因检测",principle:"DNA分析",application:"医学诊断",example:"遗传病筛查"}
        ];
        techs.forEach(t => {
            qs.push(this.makeQ(id++,"unit11","hard",`${t.tech}的原理是`,t.principle,["无原理","随机","有害"],`${t.tech}基于${t.principle}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`${t.tech}的应用领域是`,t.application,["无应用","有害","随机"],`${t.tech}应用于${t.application}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${t.example}是什么技术的应用`,t.tech,["无技术","随机","有害"],`${t.example}是${t.tech}的应用。`));
        });
        this.baseId = id; return qs;
    },

    genHealthKnowledge() {
        const qs = []; let id = this.baseId;
        const health = [
            {topic:"合理膳食",principle:"营养均衡",method:"多样化饮食",benefit:"保证健康"},
            {topic:"适量运动",principle:"增强体质",method:"每天运动30分钟",benefit:"预防疾病"},
            {topic:"充足睡眠",principle:"恢复体力",method:"每天睡眠8小时",benefit:"增强免疫"},
            {topic:"心理健康",principle:"情绪调节",method:"积极乐观",benefit:"身心健康"},
            {topic:"预防近视",principle:"用眼卫生",method:"控制用眼时间",benefit:"保护视力"},
            {topic:"预防传染病",principle:"切断传播途径",method:"接种疫苗",benefit:"保护健康"},
            {topic:"急救知识",principle:"及时处理",method:"学习急救技能",benefit:"挽救生命"},
            {topic:"食品安全",principle:"安全饮食",method:"注意食品卫生",benefit:"预防食物中毒"},
            {topic:"环境保护",principle:"保护生态",method:"节约资源",benefit:"可持续发展"},
            {topic:"垃圾分类",principle:"资源回收",method:"分类投放",benefit:"减少污染"}
        ];
        health.forEach(h => {
            qs.push(this.makeQ(id++,"unit1","easy",`${h.topic}的原则是`,h.principle,["无原则","随机","有害"],`${h.topic}的原则是${h.principle}。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${h.topic}的方法是`,h.method,["无方法","随机","有害"],`${h.topic}的方法是${h.method}。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${h.topic}的好处是`,h.benefit,["无好处","有害","随机"],`${h.topic}的好处是${h.benefit}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBioScientists(),...this.genBioTechnology(),...this.genHealthKnowledge()]; }
};
