// 超大题库生成器36 - 病毒
const giantGen36 = {
    baseId: 345000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genVirusStructure() {
        const qs = []; let id = this.baseId;
        const features = [
            {feature:"病毒的结构",content:"蛋白质外壳和核酸",detail:"无细胞结构"},
            {feature:"病毒的大小",content:"比细菌小得多",detail:"需电子显微镜观察"},
            {feature:"病毒的生活方式",content:"寄生在活细胞内",detail:"不能独立生活"},
            {feature:"病毒的繁殖",content:"利用宿主细胞复制",detail:"自我复制"},
            {feature:"病毒的核酸类型",content:"DNA或RNA",detail:"只含一种核酸"},
            {feature:"病毒的分类依据",content:"宿主类型",detail:"动物病毒植物病毒噬菌体"},
            {feature:"噬菌体",content:"侵染细菌的病毒",detail:"用于基因工程"},
            {feature:"病毒的发现",content:"伊万诺夫斯基发现",detail:"烟草花叶病毒"}
        ];
        features.forEach(f => {
            qs.push(this.makeQ(id++,"unit2","hard",`${f.feature}是`,f.content,["无内容","随机","不确定"],`${f.feature}是${f.content}。`));
            qs.push(this.makeQ(id++,"unit2","hard",`${f.feature}的详细说明是`,f.detail,["无说明","随机","不确定"],`${f.feature}${f.detail}。`));
        });
        this.baseId = id; return qs;
    },

    genVirusTypes() {
        const qs = []; let id = this.baseId;
        const viruses = [
            {virus:"流感病毒",host:"人和动物",disease:"流感",feature:"易变异"},
            {virus:"HIV",host:"人",disease:"艾滋病",feature:"攻击免疫系统"},
            {virus:"乙肝病毒",host:"人",disease:"乙型肝炎",feature:"可通过疫苗预防"},
            {virus:"狂犬病毒",host:"哺乳动物",disease:"狂犬病",feature:"通过咬伤传播"},
            {virus:"烟草花叶病毒",host:"烟草",disease:"花叶病",feature:"第一个发现的病毒"},
            {virus:"噬菌体T2",host:"大肠杆菌",disease:"无",feature:"用于证明DNA是遗传物质"},
            {virus:"新冠病毒",host:"人",disease:"新冠肺炎",feature:"RNA病毒"},
            {virus:"天花病毒",host:"人",disease:"天花",feature:"已被消灭"},
            {virus:"脊髓灰质炎病毒",host:"人",disease:"小儿麻痹症",feature:"可通过疫苗预防"},
            {virus:"轮状病毒",host:"人",disease:"腹泻",feature:"婴幼儿常见"}
        ];
        viruses.forEach(v => {
            qs.push(this.makeQ(id++,"unit2","hard",`${v.virus}的宿主是`,v.host,["无宿主","随机","不确定"],`${v.virus}寄生在${v.host}。`));
            qs.push(this.makeQ(id++,"unit2","hard",`${v.virus}引起的疾病是`,v.disease,["无疾病","随机","不确定"],`${v.virus}引起${v.disease}。`));
            qs.push(this.makeQ(id++,"unit2","hard",`${v.virus}的特点是`,v.feature,["无特点","随机","不确定"],`${v.virus}${v.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genVirusStructure(),...this.genVirusTypes()]; }
};
