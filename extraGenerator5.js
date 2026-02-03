// 扩展题库生成器5 - 实验与探究
const extraGenerator5 = {
    baseId: 31000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genExperimentMethods() {
        const qs = []; let id = this.baseId;
        const methods = [
            {name:"对照实验",desc:"设置实验组和对照组",purpose:"排除无关变量干扰",example:"光合作用实验"},
            {name:"单一变量原则",desc:"只改变一个变量",purpose:"确定变量与结果的关系",example:"种子萌发实验"},
            {name:"重复实验",desc:"多次重复实验",purpose:"减少偶然误差",example:"测量脉搏"},
            {name:"随机取样",desc:"随机选取样本",purpose:"保证样本代表性",example:"调查种群密度"},
            {name:"样方法",desc:"在样方内计数",purpose:"估算种群密度",example:"调查草地植物"},
            {name:"标志重捕法",desc:"标记后再捕捉",purpose:"估算动物种群数量",example:"调查鱼类数量"},
            {name:"模拟实验",desc:"用模型代替实际",purpose:"研究难以直接观察的现象",example:"模拟血液循环"}
        ];
        methods.forEach(m => {
            qs.push(this.makeQ(id++,"unit1","medium",`${m.name}的含义是`,m.desc,["不设对照","改变多个变量","只做一次"],`${m.name}是指${m.desc}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${m.name}的目的是`,m.purpose,["增加误差","减少工作量","简化实验"],`${m.name}的目的是${m.purpose}。`));
        });
        this.baseId = id; return qs;
    },

    genLabEquipment() {
        const qs = []; let id = this.baseId;
        const equipment = [
            {name:"显微镜",use:"观察微小结构",care:"镜头用擦镜纸擦拭"},
            {name:"载玻片",use:"放置观察材料",care:"使用前清洗干净"},
            {name:"盖玻片",use:"覆盖观察材料",care:"从一侧缓慢放下"},
            {name:"滴管",use:"滴加液体",care:"不要接触其他物品"},
            {name:"镊子",use:"夹取材料",care:"使用后清洗"},
            {name:"解剖针",use:"挑取材料",care:"注意安全"},
            {name:"培养皿",use:"培养微生物",care:"使用前灭菌"},
            {name:"试管",use:"盛放液体",care:"加热时管口不对人"},
            {name:"烧杯",use:"盛放液体",care:"加热时垫石棉网"},
            {name:"酒精灯",use:"加热",care:"用灯帽盖灭"},
            {name:"量筒",use:"量取液体体积",care:"读数时视线与液面平齐"},
            {name:"天平",use:"称量质量",care:"先调零再称量"}
        ];
        equipment.forEach(e => {
            qs.push(this.makeQ(id++,"unit2","easy",`${e.name}的用途是`,e.use,["装饰","储存","运输"],`${e.name}用于${e.use}。`));
            qs.push(this.makeQ(id++,"unit2","easy",`使用${e.name}时应注意`,e.care,["随意使用","不需清洗","可以混用"],`使用${e.name}应${e.care}。`));
        });
        this.baseId = id; return qs;
    },

    genClassicExperiments() {
        const qs = []; let id = this.baseId;
        const experiments = [
            {name:"观察洋葱表皮细胞",material:"洋葱鳞片叶",reagent:"碘液",observe:"细胞壁、细胞核"},
            {name:"观察人口腔上皮细胞",material:"口腔上皮",reagent:"碘液和生理盐水",observe:"细胞膜、细胞核"},
            {name:"观察叶片结构",material:"菠菜叶",reagent:"清水",observe:"表皮、叶肉、叶脉"},
            {name:"观察根尖结构",material:"洋葱根尖",reagent:"碘液",observe:"根冠、分生区、伸长区、成熟区"},
            {name:"观察种子结构",material:"菜豆种子",reagent:"碘液",observe:"种皮、胚"},
            {name:"观察花的结构",material:"桃花",reagent:"无",observe:"花萼、花瓣、雄蕊、雌蕊"},
            {name:"观察血液",material:"人血涂片",reagent:"瑞氏染液",observe:"红细胞、白细胞、血小板"},
            {name:"观察小鱼尾鳍血液流动",material:"小鱼",reagent:"清水",observe:"动脉、静脉、毛细血管"},
            {name:"探究光合作用产生淀粉",material:"天竺葵叶",reagent:"碘液和酒精",observe:"见光部分变蓝"},
            {name:"探究光合作用产生氧气",material:"金鱼藻",reagent:"带火星木条",observe:"木条复燃"},
            {name:"探究呼吸作用产生CO2",material:"萌发种子",reagent:"澄清石灰水",observe:"石灰水变浑浊"},
            {name:"探究唾液消化淀粉",material:"淀粉糊",reagent:"碘液",observe:"有唾液组不变蓝"}
        ];
        experiments.forEach(e => {
            qs.push(this.makeQ(id++,"unit2","medium",`"${e.name}"实验的材料是`,e.material,["石头","金属","塑料"],`该实验使用${e.material}作为材料。`));
            qs.push(this.makeQ(id++,"unit2","medium",`"${e.name}"实验使用的试剂是`,e.reagent,["盐酸","硫酸","氢氧化钠"],`该实验使用${e.reagent}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`"${e.name}"实验观察到的现象是`,e.observe,["无变化","全部变黑","全部消失"],`该实验可观察到${e.observe}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genExperimentMethods(),...this.genLabEquipment(),...this.genClassicExperiments()]; }
};
