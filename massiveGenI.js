// 海量题库生成器I - 人体健康详细
const massiveGenI = {
    baseId: 160000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genNutrients() {
        const qs = []; let id = this.baseId;
        const nutrients = [
            {nutrient:"蛋白质",func:"构成细胞的基本物质",source:"肉蛋奶豆",deficiency:"营养不良"},
            {nutrient:"糖类",func:"提供能量",source:"米面薯类",deficiency:"低血糖"},
            {nutrient:"脂肪",func:"储能和保温",source:"油脂肥肉",deficiency:"能量不足"},
            {nutrient:"维生素A",func:"维持正常视力",source:"胡萝卜肝脏",deficiency:"夜盲症"},
            {nutrient:"维生素B1",func:"维持神经功能",source:"粗粮瘦肉",deficiency:"脚气病"},
            {nutrient:"维生素C",func:"维持结缔组织",source:"新鲜蔬果",deficiency:"坏血病"},
            {nutrient:"维生素D",func:"促进钙吸收",source:"鱼肝油蛋黄",deficiency:"佝偻病"},
            {nutrient:"钙",func:"构成骨骼牙齿",source:"奶类豆类",deficiency:"骨质疏松"},
            {nutrient:"铁",func:"构成血红蛋白",source:"瘦肉肝脏",deficiency:"贫血"},
            {nutrient:"碘",func:"合成甲状腺激素",source:"海产品碘盐",deficiency:"甲状腺肿大"}
        ];
        nutrients.forEach(n => {
            qs.push(this.makeQ(id++,"unit5","medium",`${n.nutrient}的主要功能是`,n.func,["无功能","随机","不确定"],`${n.nutrient}的功能是${n.func}。`));
            qs.push(this.makeQ(id++,"unit5","medium",`${n.nutrient}的食物来源是`,n.source,["无来源","随机","不确定"],`${n.nutrient}来自${n.source}。`));
            qs.push(this.makeQ(id++,"unit5","hard",`缺乏${n.nutrient}会导致`,n.deficiency,["无影响","随机","不确定"],`缺乏${n.nutrient}导致${n.deficiency}。`));
        });
        this.baseId = id; return qs;
    },

    genDiseases() {
        const qs = []; let id = this.baseId;
        const diseases = [
            {disease:"流感",pathogen:"流感病毒",transmission:"飞沫传播",prevention:"接种疫苗"},
            {disease:"肺结核",pathogen:"结核杆菌",transmission:"飞沫传播",prevention:"卡介苗"},
            {disease:"艾滋病",pathogen:"HIV病毒",transmission:"血液性接触母婴",prevention:"避免高危行为"},
            {disease:"乙肝",pathogen:"乙肝病毒",transmission:"血液母婴",prevention:"接种疫苗"},
            {disease:"狂犬病",pathogen:"狂犬病毒",transmission:"动物咬伤",prevention:"接种疫苗"},
            {disease:"霍乱",pathogen:"霍乱弧菌",transmission:"消化道传播",prevention:"注意饮食卫生"},
            {disease:"疟疾",pathogen:"疟原虫",transmission:"蚊虫叮咬",prevention:"防蚊灭蚊"},
            {disease:"蛔虫病",pathogen:"蛔虫",transmission:"消化道传播",prevention:"注意饮食卫生"}
        ];
        diseases.forEach(d => {
            qs.push(this.makeQ(id++,"unit8","hard",`${d.disease}的病原体是`,d.pathogen,["无病原体","随机","不确定"],`${d.disease}由${d.pathogen}引起。`));
            qs.push(this.makeQ(id++,"unit8","hard",`${d.disease}的传播途径是`,d.transmission,["无传播","随机","不确定"],`${d.disease}通过${d.transmission}传播。`));
            qs.push(this.makeQ(id++,"unit8","hard",`预防${d.disease}的方法是`,d.prevention,["无方法","随机","不确定"],`预防${d.disease}要${d.prevention}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genNutrients(),...this.genDiseases()]; }
};
