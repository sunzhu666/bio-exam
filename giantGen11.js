// 超大题库生成器11 - 生物技术详细
const giantGen11 = {
    baseId: 220000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBiotechnology() {
        const qs = []; let id = this.baseId;
        const techs = [
            {tech:"发酵技术",principle:"微生物代谢",example:"酿酒制醋",organism:"酵母菌醋酸菌"},
            {tech:"基因工程",principle:"DNA重组",example:"转基因作物",tool:"限制酶DNA连接酶"},
            {tech:"细胞工程",principle:"细胞培养融合",example:"克隆羊多莉",method:"体细胞核移植"},
            {tech:"酶工程",principle:"酶的应用",example:"加酶洗衣粉",feature:"高效专一"},
            {tech:"组织培养",principle:"细胞全能性",example:"快速繁殖植物",condition:"无菌培养基"},
            {tech:"杂交育种",principle:"基因重组",example:"杂交水稻",method:"人工杂交"},
            {tech:"诱变育种",principle:"基因突变",example:"太空育种",method:"辐射或化学诱变"},
            {tech:"单倍体育种",principle:"染色体数目变化",example:"花药培养",method:"秋水仙素处理"},
            {tech:"多倍体育种",principle:"染色体数目加倍",example:"无籽西瓜",method:"秋水仙素处理"},
            {tech:"PCR技术",principle:"DNA复制",example:"基因扩增",tool:"DNA聚合酶"}
        ];
        techs.forEach(t => {
            qs.push(this.makeQ(id++,"unit13","hard",`${t.tech}的原理是`,t.principle,["无原理","随机","不确定"],`${t.tech}原理是${t.principle}。`));
            qs.push(this.makeQ(id++,"unit13","hard",`${t.tech}的例子是`,t.example,["无例子","随机","不确定"],`${t.tech}如${t.example}。`));
            if(t.organism) {
                qs.push(this.makeQ(id++,"unit13","hard",`${t.tech}使用的生物是`,t.organism,["无生物","随机","不确定"],`${t.tech}用${t.organism}。`));
            }
            if(t.tool) {
                qs.push(this.makeQ(id++,"unit13","hard",`${t.tech}使用的工具是`,t.tool,["无工具","随机","不确定"],`${t.tech}用${t.tool}。`));
            }
            if(t.method) {
                qs.push(this.makeQ(id++,"unit13","hard",`${t.tech}的方法是`,t.method,["无方法","随机","不确定"],`${t.tech}方法是${t.method}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genFermentation() {
        const qs = []; let id = this.baseId;
        const fermentations = [
            {product:"酒",organism:"酵母菌",condition:"无氧",material:"粮食",equation:"葡萄糖→酒精+CO2"},
            {product:"醋",organism:"醋酸菌",condition:"有氧",material:"酒精",equation:"酒精→醋酸"},
            {product:"酸奶",organism:"乳酸菌",condition:"无氧",material:"牛奶",equation:"葡萄糖→乳酸"},
            {product:"泡菜",organism:"乳酸菌",condition:"无氧",material:"蔬菜",equation:"葡萄糖→乳酸"},
            {product:"酱油",organism:"曲霉",condition:"有氧",material:"大豆",equation:"蛋白质→氨基酸"},
            {product:"面包",organism:"酵母菌",condition:"有氧无氧",material:"面粉",equation:"产生CO2使面包膨松"},
            {product:"味精",organism:"谷氨酸棒状杆菌",condition:"有氧",material:"淀粉",equation:"产生谷氨酸"},
            {product:"抗生素",organism:"放线菌或真菌",condition:"有氧",material:"培养基",equation:"产生抗生素"}
        ];
        fermentations.forEach(f => {
            qs.push(this.makeQ(id++,"unit2","medium",`制作${f.product}的微生物是`,f.organism,["无微生物","随机","不确定"],`${f.product}用${f.organism}制作。`));
            qs.push(this.makeQ(id++,"unit2","medium",`制作${f.product}的条件是`,f.condition,["无条件","随机","不确定"],`${f.product}需要${f.condition}条件。`));
            qs.push(this.makeQ(id++,"unit2","medium",`制作${f.product}的原料是`,f.material,["无原料","随机","不确定"],`${f.product}用${f.material}制作。`));
            qs.push(this.makeQ(id++,"unit2","hard",`制作${f.product}的反应是`,f.equation,["无反应","随机","不确定"],`${f.product}的反应是${f.equation}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBiotechnology(),...this.genFermentation()]; }
};
