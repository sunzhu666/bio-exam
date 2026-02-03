// 超大题库生成器13 - 生物科学家
const giantGen13 = {
    baseId: 230000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genScientists() {
        const qs = []; let id = this.baseId;
        const scientists = [
            {name:"达尔文",contribution:"自然选择学说",work:"物种起源",country:"英国"},
            {name:"孟德尔",contribution:"遗传定律",work:"豌豆杂交实验",country:"奥地利"},
            {name:"巴斯德",contribution:"微生物学奠基人",work:"证明微生物致病",country:"法国"},
            {name:"林奈",contribution:"生物分类系统",work:"双名法",country:"瑞典"},
            {name:"沃森和克里克",contribution:"DNA双螺旋结构",work:"DNA模型",country:"美国英国"},
            {name:"袁隆平",contribution:"杂交水稻之父",work:"杂交水稻",country:"中国"},
            {name:"屠呦呦",contribution:"发现青蒿素",work:"抗疟疾药物",country:"中国"},
            {name:"施莱登和施旺",contribution:"细胞学说",work:"细胞是生命基本单位",country:"德国"},
            {name:"虎克",contribution:"发现细胞",work:"显微镜观察软木",country:"英国"},
            {name:"列文虎克",contribution:"微生物学先驱",work:"改进显微镜",country:"荷兰"},
            {name:"哈维",contribution:"血液循环理论",work:"心血运动论",country:"英国"},
            {name:"弗莱明",contribution:"发现青霉素",work:"抗生素",country:"英国"},
            {name:"摩尔根",contribution:"基因在染色体上",work:"果蝇实验",country:"美国"},
            {name:"拉马克",contribution:"用进废退学说",work:"获得性遗传",country:"法国"},
            {name:"米勒",contribution:"原始生命起源实验",work:"模拟原始大气",country:"美国"}
        ];
        scientists.forEach(s => {
            qs.push(this.makeQ(id++,"unit12","hard",`${s.name}的主要贡献是`,s.contribution,["无贡献","随机","不确定"],`${s.name}的贡献是${s.contribution}。`));
            qs.push(this.makeQ(id++,"unit12","hard",`${s.name}的代表性工作是`,s.work,["无工作","随机","不确定"],`${s.name}的工作是${s.work}。`));
            qs.push(this.makeQ(id++,"unit12","medium",`${s.name}来自`,s.country,["无国家","随机","不确定"],`${s.name}来自${s.country}。`));
        });
        this.baseId = id; return qs;
    },

    genExperiments() {
        const qs = []; let id = this.baseId;
        const experiments = [
            {exp:"豌豆杂交实验",scientist:"孟德尔",conclusion:"遗传定律",material:"豌豆"},
            {exp:"肺炎双球菌转化实验",scientist:"格里菲思",conclusion:"转化因子存在",material:"肺炎双球菌"},
            {exp:"噬菌体侵染实验",scientist:"赫尔希和蔡斯",conclusion:"DNA是遗传物质",material:"噬菌体"},
            {exp:"DNA双螺旋模型",scientist:"沃森和克里克",conclusion:"DNA结构",material:"X射线衍射数据"},
            {exp:"光合作用实验",scientist:"恩格尔曼",conclusion:"叶绿体是光合作用场所",material:"水绵"},
            {exp:"酶的发现",scientist:"巴斯德和李比希",conclusion:"酶是生物催化剂",material:"酵母"},
            {exp:"血液循环实验",scientist:"哈维",conclusion:"血液循环理论",material:"动物解剖"},
            {exp:"原始生命起源实验",scientist:"米勒",conclusion:"有机物可自然产生",material:"模拟原始大气"},
            {exp:"果蝇遗传实验",scientist:"摩尔根",conclusion:"基因在染色体上",material:"果蝇"},
            {exp:"细胞学说建立",scientist:"施莱登施旺",conclusion:"细胞是生命基本单位",material:"显微镜观察"}
        ];
        experiments.forEach(e => {
            qs.push(this.makeQ(id++,"unit13","hard",`${e.exp}的科学家是`,e.scientist,["无科学家","随机","不确定"],`${e.exp}由${e.scientist}完成。`));
            qs.push(this.makeQ(id++,"unit13","hard",`${e.exp}的结论是`,e.conclusion,["无结论","随机","不确定"],`${e.exp}证明了${e.conclusion}。`));
            qs.push(this.makeQ(id++,"unit13","hard",`${e.exp}使用的材料是`,e.material,["无材料","随机","不确定"],`${e.exp}用${e.material}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genScientists(),...this.genExperiments()]; }
};
