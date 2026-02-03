// 超大题库生成器14 - 生物与环境
const giantGen14 = {
    baseId: 235000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBiomes() {
        const qs = []; let id = this.baseId;
        const biomes = [
            {biome:"热带雨林",climate:"高温多雨",plants:"常绿阔叶树",animals:"猩猩鹦鹉",feature:"物种最丰富"},
            {biome:"温带落叶林",climate:"四季分明",plants:"落叶阔叶树",animals:"鹿松鼠",feature:"秋季落叶"},
            {biome:"针叶林",climate:"寒冷",plants:"针叶树",animals:"驼鹿狼",feature:"耐寒植物"},
            {biome:"草原",climate:"半干旱",plants:"草本植物",animals:"羚羊狮子",feature:"草食动物多"},
            {biome:"荒漠",climate:"干旱",plants:"仙人掌",animals:"骆驼蜥蜴",feature:"耐旱生物"},
            {biome:"苔原",climate:"极寒",plants:"苔藓地衣",animals:"驯鹿北极熊",feature:"永久冻土"},
            {biome:"淡水生态系统",climate:"多样",plants:"水草藻类",animals:"鱼虾",feature:"淡水环境"},
            {biome:"海洋生态系统",climate:"多样",plants:"藻类",animals:"鱼鲸",feature:"最大生态系统"},
            {biome:"湿地生态系统",climate:"潮湿",plants:"芦苇荷花",animals:"水鸟蛙",feature:"地球之肾"},
            {biome:"农田生态系统",climate:"人工控制",plants:"农作物",animals:"害虫益虫",feature:"人工生态系统"}
        ];
        biomes.forEach(b => {
            qs.push(this.makeQ(id++,"unit11","medium",`${b.biome}的气候特点是`,b.climate,["无特点","随机","不确定"],`${b.biome}气候${b.climate}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${b.biome}的典型植物是`,b.plants,["无植物","随机","不确定"],`${b.biome}有${b.plants}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${b.biome}的典型动物是`,b.animals,["无动物","随机","不确定"],`${b.biome}有${b.animals}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`${b.biome}的特点是`,b.feature,["无特点","随机","不确定"],`${b.biome}${b.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genEcologicalFactors() {
        const qs = []; let id = this.baseId;
        const factors = [
            {factor:"光照",type:"非生物因素",effect:"影响光合作用",example:"向日葵向光性"},
            {factor:"温度",type:"非生物因素",effect:"影响酶活性",example:"候鸟迁徙"},
            {factor:"水分",type:"非生物因素",effect:"影响代谢",example:"仙人掌适应干旱"},
            {factor:"空气",type:"非生物因素",effect:"提供O2和CO2",example:"高原反应"},
            {factor:"土壤",type:"非生物因素",effect:"提供矿质元素",example:"盐碱地植物"},
            {factor:"捕食者",type:"生物因素",effect:"调节种群数量",example:"狼控制鹿数量"},
            {factor:"竞争者",type:"生物因素",effect:"争夺资源",example:"杂草与作物"},
            {factor:"共生者",type:"生物因素",effect:"互利共存",example:"根瘤菌与豆科"},
            {factor:"寄生者",type:"生物因素",effect:"一方受益一方受害",example:"蛔虫寄生"},
            {factor:"分解者",type:"生物因素",effect:"分解有机物",example:"细菌真菌"}
        ];
        factors.forEach(f => {
            qs.push(this.makeQ(id++,"unit11","medium",`${f.factor}属于`,f.type,["无类型","随机","不确定"],`${f.factor}是${f.type}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${f.factor}对生物的影响是`,f.effect,["无影响","随机","不确定"],`${f.factor}${f.effect}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`${f.factor}影响的例子是`,f.example,["无例子","随机","不确定"],`${f.factor}如${f.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBiomes(),...this.genEcologicalFactors()]; }
};
