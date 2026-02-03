// 大规模题库生成器F - 生态环境综合
const megaGenF = {
    baseId: 75000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBiomes() {
        const qs = []; let id = this.baseId;
        const biomes = [
            {name:"热带雨林",climate:"高温多雨",plants:"常绿阔叶树",animals:"猴、鹦鹉、蟒蛇",feature:"物种最丰富"},
            {name:"热带草原",climate:"干湿季分明",plants:"草本植物",animals:"狮、斑马、长颈鹿",feature:"大型食草动物多"},
            {name:"温带落叶林",climate:"四季分明",plants:"落叶阔叶树",animals:"鹿、松鼠、啄木鸟",feature:"秋季落叶"},
            {name:"温带草原",climate:"半干旱",plants:"草本植物",animals:"野马、黄羊、狼",feature:"草原广阔"},
            {name:"针叶林",climate:"寒冷",plants:"针叶树",animals:"驯鹿、熊、狼",feature:"耐寒树种"},
            {name:"苔原",climate:"极寒",plants:"苔藓地衣",animals:"北极熊、驯鹿",feature:"永久冻土"},
            {name:"荒漠",climate:"极度干旱",plants:"仙人掌",animals:"骆驼、蜥蜴",feature:"植被稀少"},
            {name:"淡水湿地",climate:"多样",plants:"芦苇、荷花",animals:"鱼、蛙、水鸟",feature:"水陆过渡"},
            {name:"海洋",climate:"稳定",plants:"藻类",animals:"鱼、鲸、海豚",feature:"面积最大"},
            {name:"珊瑚礁",climate:"热带海洋",plants:"藻类",animals:"珊瑚虫、热带鱼",feature:"海洋中物种最丰富"}
        ];
        biomes.forEach(b => {
            qs.push(this.makeQ(id++,"unit13","medium",`${b.name}的气候特点是`,b.climate,["寒冷干燥","温暖湿润","四季如春"],`${b.name}气候${b.climate}。`));
            qs.push(this.makeQ(id++,"unit13","medium",`${b.name}的主要植物是`,b.plants,["热带植物","沙漠植物","水生植物"],`${b.name}主要植物是${b.plants}。`));
            qs.push(this.makeQ(id++,"unit13","medium",`${b.name}的代表动物是`,b.animals,["企鹅","北极熊","骆驼"],`${b.name}代表动物有${b.animals}。`));
            qs.push(this.makeQ(id++,"unit13","easy",`${b.name}的特点是`,b.feature,["无特点","物种单一","无生物"],`${b.name}的特点是${b.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genEcologicalRelations() {
        const qs = []; let id = this.baseId;
        const relations = [
            {type:"捕食关系",example:"狼吃羊",feature:"一方获益一方受害",effect:"调节种群数量"},
            {type:"竞争关系",example:"水稻和杂草",feature:"争夺资源",effect:"优胜劣汰"},
            {type:"寄生关系",example:"蛔虫和人",feature:"一方获益一方受害",effect:"寄生者依赖宿主"},
            {type:"共生关系",example:"根瘤菌和豆科植物",feature:"双方互利",effect:"共同生存"},
            {type:"腐生关系",example:"蘑菇分解落叶",feature:"分解有机物",effect:"物质循环"},
            {type:"种内互助",example:"蜜蜂群居",feature:"同种个体合作",effect:"提高生存率"},
            {type:"种内斗争",example:"公鸡争斗",feature:"同种个体竞争",effect:"优胜劣汰"}
        ];
        const examples = [
            {ex:"狮子捕食斑马",rel:"捕食关系"},{ex:"猫头鹰捕食老鼠",rel:"捕食关系"},
            {ex:"青蛙捕食昆虫",rel:"捕食关系"},{ex:"蛇捕食青蛙",rel:"捕食关系"},
            {ex:"大豆和杂草争夺阳光",rel:"竞争关系"},{ex:"两只公鸡争斗",rel:"种内斗争"},
            {ex:"蚂蚁群居生活",rel:"种内互助"},{ex:"狼群合作捕猎",rel:"种内互助"},
            {ex:"跳蚤寄生在狗身上",rel:"寄生关系"},{ex:"菟丝子寄生在大豆上",rel:"寄生关系"},
            {ex:"地衣中藻类和真菌",rel:"共生关系"},{ex:"牛和瘤胃微生物",rel:"共生关系"}
        ];
        relations.forEach(r => {
            qs.push(this.makeQ(id++,"unit13","medium",`${r.type}的特点是`,r.feature,["无关系","随机","有害"],`${r.type}的特点是${r.feature}。`));
            qs.push(this.makeQ(id++,"unit13","medium",`${r.example}属于`,r.type,["无关系","随机","有害"],`${r.example}是${r.type}。`));
        });
        examples.forEach(e => {
            qs.push(this.makeQ(id++,"unit13","easy",`${e.ex}属于`,e.rel,["无关系","随机关系","有害关系"],`${e.ex}是${e.rel}。`));
        });
        this.baseId = id; return qs;
    },

    genEnvironmentalFactors() {
        const qs = []; let id = this.baseId;
        const factors = [
            {factor:"光照",effect:"影响光合作用",example:"向日葵向阳生长"},
            {factor:"温度",effect:"影响酶活性",example:"候鸟迁徙"},
            {factor:"水分",effect:"影响生物分布",example:"沙漠植物耐旱"},
            {factor:"空气",effect:"提供氧气和二氧化碳",example:"高山植物矮小"},
            {factor:"土壤",effect:"提供矿质元素",example:"盐碱地植物特殊"},
            {factor:"pH值",effect:"影响酶活性",example:"胃酸杀菌"},
            {factor:"盐度",effect:"影响渗透压",example:"海水鱼和淡水鱼"},
            {factor:"氧气浓度",effect:"影响呼吸作用",example:"高原反应"}
        ];
        factors.forEach(f => {
            qs.push(this.makeQ(id++,"unit13","medium",`${f.factor}对生物的影响是`,f.effect,["无影响","有害","致死"],`${f.factor}${f.effect}。`));
            qs.push(this.makeQ(id++,"unit13","easy",`${f.example}说明什么因素影响生物`,f.factor,["无因素","随机","不确定"],`${f.example}说明${f.factor}影响生物。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBiomes(),...this.genEcologicalRelations(),...this.genEnvironmentalFactors()]; }
};
