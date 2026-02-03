// 扩展题库生成器10 - 综合应用题
const extraGenerator10 = {
    baseId: 46000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genDailyLifeApplications() {
        const qs = []; let id = this.baseId;
        const applications = [
            {scenario:"腌制咸菜时蔬菜变软",principle:"细胞失水",related:"渗透作用"},
            {scenario:"盐碱地植物难以生长",principle:"土壤溶液浓度高导致植物失水",related:"渗透作用"},
            {scenario:"给农作物施肥过多导致烧苗",principle:"土壤溶液浓度过高",related:"渗透作用"},
            {scenario:"新鲜蔬菜放入清水中变脆",principle:"细胞吸水",related:"渗透作用"},
            {scenario:"糖拌西红柿出水",principle:"细胞失水",related:"渗透作用"},
            {scenario:"移栽植物时剪去部分枝叶",principle:"减少蒸腾作用",related:"水分代谢"},
            {scenario:"大棚种植增加二氧化碳浓度",principle:"促进光合作用",related:"光合作用"},
            {scenario:"合理密植",principle:"充分利用光能",related:"光合作用"},
            {scenario:"储存粮食保持干燥低温",principle:"抑制呼吸作用",related:"呼吸作用"},
            {scenario:"水果保鲜用低温",principle:"抑制呼吸作用",related:"呼吸作用"},
            {scenario:"松土有利于植物生长",principle:"促进根的呼吸作用",related:"呼吸作用"},
            {scenario:"酿酒时密封发酵",principle:"无氧呼吸产生酒精",related:"呼吸作用"},
            {scenario:"做馒头时加酵母",principle:"酵母菌发酵产生二氧化碳",related:"呼吸作用"},
            {scenario:"制作酸奶",principle:"乳酸菌发酵",related:"呼吸作用"},
            {scenario:"制作泡菜",principle:"乳酸菌发酵",related:"呼吸作用"},
            {scenario:"制作醋",principle:"醋酸菌发酵",related:"呼吸作用"}
        ];
        applications.forEach(a => {
            qs.push(this.makeQ(id++,"unit4","medium",`"${a.scenario}"的原理是`,a.principle,["无原理","随机现象","化学反应"],`${a.scenario}是因为${a.principle}。`));
            qs.push(this.makeQ(id++,"unit4","medium",`"${a.scenario}"与什么生理过程有关`,a.related,["无关","有害过程","随机过程"],`${a.scenario}与${a.related}有关。`));
        });
        this.baseId = id; return qs;
    },

    genAgricultureApplications() {
        const qs = []; let id = this.baseId;
        const agri = [
            {tech:"嫁接",principle:"无性繁殖",advantage:"保持优良性状",example:"果树嫁接"},
            {tech:"扦插",principle:"无性繁殖",advantage:"快速繁殖",example:"月季扦插"},
            {tech:"组织培养",principle:"细胞全能性",advantage:"快速大量繁殖",example:"兰花组培"},
            {tech:"杂交育种",principle:"基因重组",advantage:"获得优良性状组合",example:"杂交水稻"},
            {tech:"诱变育种",principle:"基因突变",advantage:"获得新性状",example:"太空育种"},
            {tech:"转基因技术",principle:"基因工程",advantage:"定向改良性状",example:"抗虫棉"},
            {tech:"人工授粉",principle:"有性生殖",advantage:"提高结实率",example:"玉米人工授粉"},
            {tech:"温室栽培",principle:"控制环境条件",advantage:"延长生长期",example:"反季节蔬菜"},
            {tech:"无土栽培",principle:"营养液培养",advantage:"节约土地",example:"水培蔬菜"},
            {tech:"滴灌技术",principle:"精准供水",advantage:"节约水资源",example:"沙漠农业"}
        ];
        agri.forEach(a => {
            qs.push(this.makeQ(id++,"unit10","medium",`${a.tech}的原理是`,a.principle,["无原理","随机","有害"],`${a.tech}利用${a.principle}原理。`));
            qs.push(this.makeQ(id++,"unit10","medium",`${a.tech}的优点是`,a.advantage,["无优点","有害","降低产量"],`${a.tech}的优点是${a.advantage}。`));
            qs.push(this.makeQ(id++,"unit10","easy",`${a.example}属于`,a.tech,["无技术","有害技术","淘汰技术"],`${a.example}是${a.tech}的应用。`));
        });
        this.baseId = id; return qs;
    },

    genMedicalApplications() {
        const qs = []; let id = this.baseId;
        const medical = [
            {tech:"输血",principle:"血型匹配",precaution:"同型输血",risk:"溶血反应"},
            {tech:"器官移植",principle:"免疫排斥",precaution:"配型和免疫抑制",risk:"排斥反应"},
            {tech:"疫苗接种",principle:"特异性免疫",precaution:"按时接种",risk:"过敏反应"},
            {tech:"抗生素使用",principle:"抑制细菌",precaution:"合理使用",risk:"耐药性"},
            {tech:"基因检测",principle:"DNA分析",precaution:"知情同意",risk:"隐私泄露"},
            {tech:"试管婴儿",principle:"体外受精",precaution:"医学指征",risk:"多胎妊娠"},
            {tech:"骨髓移植",principle:"造血干细胞",precaution:"配型",risk:"排斥反应"},
            {tech:"血液透析",principle:"半透膜原理",precaution:"定期进行",risk:"感染"}
        ];
        medical.forEach(m => {
            qs.push(this.makeQ(id++,"unit7","hard",`${m.tech}的原理是`,m.principle,["无原理","随机","有害"],`${m.tech}基于${m.principle}。`));
            qs.push(this.makeQ(id++,"unit7","hard",`${m.tech}的注意事项是`,m.precaution,["无需注意","随意进行","不需医生"],`${m.tech}需要${m.precaution}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genDailyLifeApplications(),...this.genAgricultureApplications(),...this.genMedicalApplications()]; }
};
