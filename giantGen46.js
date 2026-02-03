// 超大题库生成器46 - 种群与群落
const giantGen46 = {
    baseId: 395000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPopulation() {
        const qs = []; let id = this.baseId;
        const characteristics = [
            {char:"种群密度",def:"单位面积或体积内的个体数",method:"样方法标志重捕法",importance:"最基本特征"},
            {char:"出生率",def:"单位时间内出生个体数占总数比例",factor:"营养繁殖能力",effect:"增加种群数量"},
            {char:"死亡率",def:"单位时间内死亡个体数占总数比例",factor:"天敌疾病",effect:"减少种群数量"},
            {char:"迁入率",def:"单位时间内迁入个体数占总数比例",factor:"环境条件",effect:"增加种群数量"},
            {char:"迁出率",def:"单位时间内迁出个体数占总数比例",factor:"资源竞争",effect:"减少种群数量"},
            {char:"年龄结构",def:"各年龄段个体数量比例",type:"增长型稳定型衰退型",prediction:"预测种群变化"},
            {char:"性别比例",def:"雌雄个体数量比例",effect:"影响出生率",example:"人为控制害虫"}
        ];
        characteristics.forEach(c => {
            qs.push(this.makeQ(id++,"unit11","hard",`种群${c.char}的定义是`,c.def,["无定义","随机","不确定"],`${c.char}是${c.def}。`));
            if(c.method) {
                qs.push(this.makeQ(id++,"unit11","hard",`调查种群${c.char}的方法是`,c.method,["无方法","随机","不确定"],`${c.char}用${c.method}调查。`));
            }
            if(c.factor) {
                qs.push(this.makeQ(id++,"unit11","hard",`影响种群${c.char}的因素是`,c.factor,["无因素","随机","不确定"],`${c.char}受${c.factor}影响。`));
            }
            if(c.effect) {
                qs.push(this.makeQ(id++,"unit11","hard",`种群${c.char}的作用是`,c.effect,["无作用","随机","不确定"],`${c.char}${c.effect}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genCommunity() {
        const qs = []; let id = this.baseId;
        const features = [
            {feature:"物种组成",def:"群落中所有物种",importance:"区分不同群落",method:"调查统计"},
            {feature:"物种丰富度",def:"物种数目的多少",factor:"环境条件",trend:"热带>温带>寒带"},
            {feature:"垂直结构",def:"群落的分层现象",plant:"乔木灌木草本",animal:"栖息分层"},
            {feature:"水平结构",def:"群落的镶嵌分布",cause:"环境不均匀",example:"斑块状分布"},
            {feature:"群落演替",def:"群落随时间的变化",type:"初生演替次生演替",direction:"向顶极群落发展"},
            {feature:"初生演替",def:"在无生物的地方开始",example:"裸岩上的演替",time:"时间长"},
            {feature:"次生演替",def:"在有土壤的地方开始",example:"弃耕农田演替",time:"时间短"}
        ];
        features.forEach(f => {
            qs.push(this.makeQ(id++,"unit11","hard",`群落${f.feature}的定义是`,f.def,["无定义","随机","不确定"],`${f.feature}是${f.def}。`));
            if(f.importance) {
                qs.push(this.makeQ(id++,"unit11","hard",`群落${f.feature}的重要性是`,f.importance,["无重要性","随机","不确定"],`${f.feature}${f.importance}。`));
            }
            if(f.example) {
                qs.push(this.makeQ(id++,"unit11","hard",`群落${f.feature}的例子是`,f.example,["无例子","随机","不确定"],`${f.feature}如${f.example}。`));
            }
            if(f.type) {
                qs.push(this.makeQ(id++,"unit11","hard",`群落${f.feature}的类型是`,f.type,["无类型","随机","不确定"],`${f.feature}分为${f.type}。`));
            }
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPopulation(),...this.genCommunity()]; }
};
