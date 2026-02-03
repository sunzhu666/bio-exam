// 题库生成器 - 通过模板生成海量试题
const questionGenerator = {
    baseId: 200,

    // 随机工具函数
    shuffle(arr) {
        const result = [...arr];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    },

    pick(arr, n = 1) {
        const shuffled = this.shuffle(arr);
        return n === 1 ? shuffled[0] : shuffled.slice(0, n);
    },

    // 生物名称库
    organisms: ["草履虫", "变形虫", "酵母菌", "大肠杆菌", "乳酸菌", "青霉", "蘑菇", "水绵", "衣藻", "海带", "紫菜", "葫芦藓", "肾蕨", "银杏", "水杉", "苏铁", "松树", "柏树", "小麦", "水稻", "玉米", "大豆", "花生", "向日葵", "白菜", "萝卜", "番茄", "黄瓜", "苹果", "桃", "梨", "葡萄", "草莓", "西瓜", "蚯蚓", "水蛭", "蜗牛", "河蚌", "乌贼", "蝗虫", "蜜蜂", "蝴蝶", "蚊子", "苍蝇", "蜻蜓", "螳螂", "蟋蟀", "蜘蛛", "蜈蚣", "虾", "蟹", "鲫鱼", "鲤鱼", "草鱼", "鲢鱼", "青蛙", "蟾蜍", "蝾螈", "大鲵", "蜥蜴", "壁虎", "蛇", "龟", "鳄鱼", "麻雀", "燕子", "鸽子", "鸡", "鸭", "鹅", "老鹰", "猫头鹰", "啄木鸟", "鹦鹉", "兔", "鼠", "猫", "狗", "牛", "羊", "马", "猪", "虎", "狮", "象", "鲸", "海豚", "蝙蝠", "猴", "猩猩"],

    // 器官结构库
    plantParts: ["根", "茎", "叶", "花", "果实", "种子", "根尖", "茎尖", "叶脉", "气孔", "表皮", "叶肉", "维管束"],
    animalParts: ["心脏", "肝脏", "肺", "肾脏", "胃", "小肠", "大肠", "脑", "脊髓", "眼", "耳", "皮肤", "骨骼", "肌肉", "血管"],
    cellParts: ["细胞膜", "细胞质", "细胞核", "线粒体", "叶绿体", "液泡", "细胞壁", "核糖体", "内质网", "高尔基体"],

    // 生理过程库
    processes: ["光合作用", "呼吸作用", "蒸腾作用", "吸收作用", "消化", "吸收", "呼吸", "循环", "排泄", "调节", "生殖", "发育", "遗传", "变异", "进化"],

    // 物质库
    substances: ["水", "无机盐", "糖类", "蛋白质", "脂肪", "维生素", "氧气", "二氧化碳", "葡萄糖", "淀粉", "纤维素", "氨基酸", "核酸", "DNA", "RNA", "ATP"],

    // 生成选择题
    generateChoiceQuestions() {
        const questions = [];
        let id = this.baseId;

        // 模板1: 生物分类题
        const categories = [
            {name: "植物", examples: ["小麦", "水稻", "玉米", "白菜", "番茄"], wrong: ["蘑菇", "草履虫", "细菌"]},
            {name: "动物", examples: ["蚯蚓", "蝗虫", "鲫鱼", "青蛙", "兔"], wrong: ["蘑菇", "水绵", "细菌"]},
            {name: "真菌", examples: ["蘑菇", "酵母菌", "青霉", "木耳", "灵芝"], wrong: ["细菌", "病毒", "藻类"]},
            {name: "细菌", examples: ["大肠杆菌", "乳酸菌", "醋酸菌", "根瘤菌", "肺炎双球菌"], wrong: ["酵母菌", "草履虫", "病毒"]},
            {name: "脊椎动物", examples: ["鲫鱼", "青蛙", "蛇", "麻雀", "兔"], wrong: ["蚯蚓", "蝗虫", "蜗牛"]},
            {name: "无脊椎动物", examples: ["蚯蚓", "蝗虫", "蜗牛", "水母", "蜘蛛"], wrong: ["鱼", "青蛙", "鸟"]},
            {name: "被子植物", examples: ["小麦", "玉米", "苹果", "桃", "白菜"], wrong: ["松树", "银杏", "苏铁"]},
            {name: "裸子植物", examples: ["松树", "柏树", "银杏", "水杉", "苏铁"], wrong: ["小麦", "苹果", "玉米"]}
        ];

        categories.forEach(cat => {
            for(let i = 0; i < cat.examples.length; i++) {
                const correct = cat.examples[i];
                const wrongOptions = [...cat.wrong].sort(() => Math.random() - 0.5).slice(0, 3);
                const options = [correct, ...wrongOptions].sort(() => Math.random() - 0.5);
                const correctIndex = options.indexOf(correct);
                const letters = ["A", "B", "C", "D"];

                questions.push({
                    id: id++,
                    type: "choice",
                    unit: "unit1",
                    difficulty: "easy",
                    score: 2,
                    content: `下列生物中，属于${cat.name}的是（　　）`,
                    options: options.map((o, idx) => `${letters[idx]}. ${o}`),
                    answer: letters[correctIndex],
                    analysis: `${correct}属于${cat.name}。`
                });
            }
        });

        // 模板2: 细胞结构功能题
        const cellStructures = [
            {structure: "细胞膜", function: "控制物质进出", wrong: ["储存遗传信息", "进行光合作用", "储存营养物质"]},
            {structure: "细胞核", function: "储存遗传信息", wrong: ["控制物质进出", "进行光合作用", "进行呼吸作用"]},
            {structure: "叶绿体", function: "进行光合作用", wrong: ["进行呼吸作用", "储存遗传信息", "控制物质进出"]},
            {structure: "线粒体", function: "进行呼吸作用", wrong: ["进行光合作用", "储存遗传信息", "控制物质进出"]},
            {structure: "液泡", function: "储存营养物质", wrong: ["进行光合作用", "进行呼吸作用", "储存遗传信息"]},
            {structure: "细胞壁", function: "保护和支持细胞", wrong: ["控制物质进出", "进行光合作用", "储存遗传信息"]}
        ];

        cellStructures.forEach(item => {
            const options = [item.function, ...item.wrong].sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(item.function);
            const letters = ["A", "B", "C", "D"];

            questions.push({
                id: id++,
                type: "choice",
                unit: "unit2",
                difficulty: "medium",
                score: 2,
                content: `${item.structure}的主要功能是（　　）`,
                options: options.map((o, idx) => `${letters[idx]}. ${o}`),
                answer: letters[correctIndex],
                analysis: `${item.structure}的主要功能是${item.function}。`
            });
        });

        return questions;
    },

    // 生成更多选择题模板
    generateMoreChoiceQuestions() {
        const questions = [];
        let id = 300;

        // 模板3: 人体器官功能题
        const organs = [
            {organ: "心脏", function: "推动血液流动", system: "循环系统", wrong: ["消化食物", "过滤血液", "气体交换"]},
            {organ: "肺", function: "气体交换", system: "呼吸系统", wrong: ["推动血液", "消化食物", "过滤血液"]},
            {organ: "胃", function: "初步消化蛋白质", system: "消化系统", wrong: ["气体交换", "过滤血液", "推动血液"]},
            {organ: "小肠", function: "消化和吸收的主要场所", system: "消化系统", wrong: ["气体交换", "过滤血液", "储存食物"]},
            {organ: "肝脏", function: "分泌胆汁", system: "消化系统", wrong: ["分泌胃液", "分泌肠液", "分泌唾液"]},
            {organ: "肾脏", function: "形成尿液", system: "泌尿系统", wrong: ["储存尿液", "输送尿液", "排出尿液"]},
            {organ: "大脑", function: "高级神经活动中枢", system: "神经系统", wrong: ["反射中枢", "呼吸中枢", "心跳中枢"]},
            {organ: "脊髓", function: "反射和传导", system: "神经系统", wrong: ["思维中枢", "记忆中枢", "语言中枢"]}
        ];

        organs.forEach(item => {
            const options = [item.function, ...item.wrong].sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(item.function);
            const letters = ["A", "B", "C", "D"];

            questions.push({
                id: id++,
                type: "choice",
                unit: "unit5",
                difficulty: "medium",
                score: 2,
                content: `${item.organ}的主要功能是（　　）`,
                options: options.map((o, idx) => `${letters[idx]}. ${o}`),
                answer: letters[correctIndex],
                analysis: `${item.organ}属于${item.system}，主要功能是${item.function}。`
            });
        });

        // 模板4: 维生素缺乏症题
        const vitamins = [
            {vitamin: "维生素A", disease: "夜盲症", source: "胡萝卜、动物肝脏"},
            {vitamin: "维生素B1", disease: "脚气病", source: "粗粮、瘦肉"},
            {vitamin: "维生素C", disease: "坏血病", source: "新鲜蔬菜水果"},
            {vitamin: "维生素D", disease: "佝偻病", source: "鱼肝油、蛋黄"}
        ];

        const allDiseases = vitamins.map(v => v.disease);
        vitamins.forEach(item => {
            const wrongDiseases = allDiseases.filter(d => d !== item.disease);
            const options = [item.disease, ...wrongDiseases].sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(item.disease);
            const letters = ["A", "B", "C", "D"];

            questions.push({
                id: id++,
                type: "choice",
                unit: "unit5",
                difficulty: "easy",
                score: 2,
                content: `缺乏${item.vitamin}会导致（　　）`,
                options: options.map((o, idx) => `${letters[idx]}. ${o}`),
                answer: letters[correctIndex],
                analysis: `缺乏${item.vitamin}会导致${item.disease}，可以多吃${item.source}来补充。`
            });
        });

        // 模板5: 血液成分功能题
        const bloodComponents = [
            {component: "红细胞", function: "运输氧气", feature: "含血红蛋白"},
            {component: "白细胞", function: "吞噬病菌", feature: "有细胞核"},
            {component: "血小板", function: "止血凝血", feature: "最小的血细胞"},
            {component: "血浆", function: "运载血细胞和营养物质", feature: "淡黄色液体"}
        ];

        const allFunctions = bloodComponents.map(b => b.function);
        bloodComponents.forEach(item => {
            const wrongFunctions = allFunctions.filter(f => f !== item.function);
            wrongFunctions.push("储存能量");
            const options = [item.function, ...wrongFunctions.slice(0, 3)].sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(item.function);
            const letters = ["A", "B", "C", "D"];

            questions.push({
                id: id++,
                type: "choice",
                unit: "unit7",
                difficulty: "easy",
                score: 2,
                content: `${item.component}的主要功能是（　　）`,
                options: options.map((o, idx) => `${letters[idx]}. ${o}`),
                answer: letters[correctIndex],
                analysis: `${item.component}${item.feature}，主要功能是${item.function}。`
            });
        });

        // 模板6: 遗传学基础题
        const genetics = [
            {term: "基因", definition: "有遗传效应的DNA片段", wrong: ["染色体的一部分", "蛋白质分子", "细胞核"]},
            {term: "染色体", definition: "DNA和蛋白质组成的结构", wrong: ["只由DNA组成", "只由蛋白质组成", "细胞器"]},
            {term: "DNA", definition: "主要的遗传物质", wrong: ["蛋白质", "糖类", "脂肪"]},
            {term: "性状", definition: "生物体的形态、结构和生理特征", wrong: ["基因的表现", "染色体的结构", "DNA的序列"]}
        ];

        genetics.forEach(item => {
            const options = [item.definition, ...item.wrong].sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(item.definition);
            const letters = ["A", "B", "C", "D"];

            questions.push({
                id: id++,
                type: "choice",
                unit: "unit11",
                difficulty: "medium",
                score: 2,
                content: `${item.term}是指（　　）`,
                options: options.map((o, idx) => `${letters[idx]}. ${o}`),
                answer: letters[correctIndex],
                analysis: `${item.term}是指${item.definition}。`
            });
        });

        return questions;
    },

    // 生成生态系统相关题目
    generateEcologyQuestions() {
        const questions = [];
        let id = 400;

        // 食物链题目
        const foodChains = [
            {chain: "草→兔→狐", producer: "草", consumer1: "兔", consumer2: "狐"},
            {chain: "草→蝗虫→青蛙→蛇", producer: "草", consumer1: "蝗虫", consumer2: "青蛙"},
            {chain: "浮游植物→小鱼→大鱼", producer: "浮游植物", consumer1: "小鱼", consumer2: "大鱼"},
            {chain: "树叶→毛毛虫→麻雀→鹰", producer: "树叶", consumer1: "毛毛虫", consumer2: "麻雀"}
        ];

        foodChains.forEach(fc => {
            questions.push({
                id: id++,
                type: "choice",
                unit: "unit13",
                difficulty: "easy",
                score: 2,
                content: `在食物链"${fc.chain}"中，生产者是（　　）`,
                options: [`A. ${fc.producer}`, `B. ${fc.consumer1}`, `C. ${fc.consumer2}`, "D. 阳光"],
                answer: "A",
                analysis: `在这条食物链中，${fc.producer}是生产者，能进行光合作用制造有机物。`
            });

            questions.push({
                id: id++,
                type: "choice",
                unit: "unit13",
                difficulty: "medium",
                score: 2,
                content: `在食物链"${fc.chain}"中，${fc.consumer2}属于（　　）`,
                options: ["A. 生产者", "B. 初级消费者", "C. 次级消费者", "D. 分解者"],
                answer: "C",
                analysis: `${fc.consumer2}以${fc.consumer1}为食，属于次级消费者（二级消费者）。`
            });
        });

        // 生态系统组成题
        const ecosystems = ["森林", "草原", "湿地", "海洋", "农田", "池塘", "沙漠"];
        ecosystems.forEach(eco => {
            questions.push({
                id: id++,
                type: "choice",
                unit: "unit13",
                difficulty: "easy",
                score: 2,
                content: `${eco}生态系统中，能量流动的起点是（　　）`,
                options: ["A. 生产者", "B. 消费者", "C. 分解者", "D. 阳光"],
                answer: "A",
                analysis: `在${eco}生态系统中，生产者通过光合作用固定太阳能，是能量流动的起点。`
            });
        });

        return questions;
    },

    // 生成人体生理题目
    generatePhysiologyQuestions() {
        const questions = [];
        let id = 500;

        // 消化系统题目
        const digestion = [
            {nutrient: "淀粉", startOrgan: "口腔", enzyme: "唾液淀粉酶", product: "麦芽糖"},
            {nutrient: "蛋白质", startOrgan: "胃", enzyme: "胃蛋白酶", product: "多肽"},
            {nutrient: "脂肪", startOrgan: "小肠", enzyme: "脂肪酶", product: "甘油和脂肪酸"}
        ];

        digestion.forEach(item => {
            questions.push({
                id: id++,
                type: "choice",
                unit: "unit5",
                difficulty: "medium",
                score: 2,
                content: `${item.nutrient}开始消化的部位是（　　）`,
                options: ["A. 口腔", "B. 胃", "C. 小肠", "D. 大肠"],
                answer: item.startOrgan === "口腔" ? "A" : (item.startOrgan === "胃" ? "B" : "C"),
                analysis: `${item.nutrient}在${item.startOrgan}开始被${item.enzyme}消化，初步分解为${item.product}。`
            });
        });

        // 呼吸系统题目
        const breathing = [
            {process: "吸气", diaphragm: "收缩", ribs: "上升", chest: "扩大", lung: "扩张"},
            {process: "呼气", diaphragm: "舒张", ribs: "下降", chest: "缩小", lung: "回缩"}
        ];

        breathing.forEach(item => {
            questions.push({
                id: id++,
                type: "choice",
                unit: "unit6",
                difficulty: "medium",
                score: 2,
                content: `${item.process}时，膈肌的状态是（　　）`,
                options: ["A. 收缩", "B. 舒张", "C. 先收缩后舒张", "D. 不变"],
                answer: item.diaphragm === "收缩" ? "A" : "B",
                analysis: `${item.process}时，膈肌${item.diaphragm}，肋骨${item.ribs}，胸廓${item.chest}，肺${item.lung}。`
            });
        });

        // 循环系统题目
        const circulation = [
            {vessel: "主动脉", blood: "动脉血", direction: "从心脏流出"},
            {vessel: "肺动脉", blood: "静脉血", direction: "从心脏流出"},
            {vessel: "肺静脉", blood: "动脉血", direction: "流回心脏"},
            {vessel: "上腔静脉", blood: "静脉血", direction: "流回心脏"}
        ];

        circulation.forEach(item => {
            questions.push({
                id: id++,
                type: "choice",
                unit: "unit7",
                difficulty: "hard",
                score: 2,
                content: `${item.vessel}中流动的血液是（　　）`,
                options: ["A. 动脉血", "B. 静脉血", "C. 混合血", "D. 不确定"],
                answer: item.blood === "动脉血" ? "A" : "B",
                analysis: `${item.vessel}${item.direction}，其中流动的是${item.blood}。`
            });
        });

        return questions;
    },

    // 生成遗传变异题目
    generateGeneticsQuestions() {
        const questions = [];
        let id = 600;

        // 遗传图解题
        const crosses = [
            {parents: "AA×aa", f1Genotype: "Aa", f1Phenotype: "显性", ratio: "全部"},
            {parents: "Aa×Aa", f1Genotype: "AA:Aa:aa=1:2:1", f1Phenotype: "显性:隐性=3:1", ratio: "3:1"},
            {parents: "Aa×aa", f1Genotype: "Aa:aa=1:1", f1Phenotype: "显性:隐性=1:1", ratio: "1:1"}
        ];

        crosses.forEach(item => {
            questions.push({
                id: id++,
                type: "choice",
                unit: "unit11",
                difficulty: "hard",
                score: 2,
                content: `${item.parents}杂交，后代的表现型比例是（　　）`,
                options: ["A. 全部显性", "B. 3:1", "C. 1:1", "D. 1:2:1"],
                answer: item.ratio === "全部" ? "A" : (item.ratio === "3:1" ? "B" : "C"),
                analysis: `${item.parents}杂交，后代基因型为${item.f1Genotype}，表现型比例为${item.f1Phenotype}。`
            });
        });

        // 性别决定题
        const sexDetermination = [
            {parent: "父亲", chromosome: "XY", gamete: "X或Y"},
            {parent: "母亲", chromosome: "XX", gamete: "X"}
        ];

        questions.push({
            id: id++,
            type: "choice",
            unit: "unit11",
            difficulty: "medium",
            score: 2,
            content: "人类生男生女主要取决于（　　）",
            options: ["A. 母亲的卵细胞", "B. 父亲的精子", "C. 受精时的环境", "D. 胚胎发育过程"],
            answer: "B",
            analysis: "母亲只能产生含X染色体的卵细胞，父亲能产生含X或Y染色体的精子，所以生男生女取决于父亲的精子类型。"
        });

        return questions;
    },

    // 生成大量分类题
    generateMassClassificationQuestions() {
        const questions = [];
        let id = 700;

        // 动物分类详细题库
        const animalGroups = [
            {group: "鱼类", examples: ["鲫鱼", "鲤鱼", "草鱼", "鲢鱼", "鲨鱼", "带鱼", "黄鱼", "鳗鱼"], features: "用鳃呼吸，用鳍游泳，体表有鳞片", wrong: ["青蛙", "蝌蚪", "海豚", "鲸"]},
            {group: "两栖类", examples: ["青蛙", "蟾蜍", "蝾螈", "大鲵"], features: "幼体用鳃呼吸，成体用肺呼吸，皮肤辅助呼吸", wrong: ["蜥蜴", "鳄鱼", "龟", "蛇"]},
            {group: "爬行类", examples: ["蜥蜴", "壁虎", "蛇", "龟", "鳄鱼"], features: "体表有角质鳞片或甲，用肺呼吸，卵生", wrong: ["青蛙", "蝾螈", "鲸", "海豚"]},
            {group: "鸟类", examples: ["麻雀", "燕子", "鸽子", "鸡", "鸭", "鹅", "老鹰", "猫头鹰"], features: "体表有羽毛，前肢变成翼，卵生", wrong: ["蝙蝠", "蜻蜓", "蝴蝶", "蜜蜂"]},
            {group: "哺乳类", examples: ["兔", "鼠", "猫", "狗", "牛", "羊", "马", "猪", "虎", "狮", "象", "鲸", "海豚", "蝙蝠"], features: "体表有毛，胎生哺乳", wrong: ["鸡", "鸭", "蛇", "龟"]},
            {group: "昆虫", examples: ["蝗虫", "蜜蜂", "蝴蝶", "蚊子", "苍蝇", "蜻蜓", "螳螂", "蟋蟀", "蚂蚁", "蟑螂"], features: "身体分头胸腹三部分，有三对足两对翅", wrong: ["蜘蛛", "蜈蚣", "虾", "蟹"]},
            {group: "节肢动物", examples: ["蝗虫", "蜘蛛", "蜈蚣", "虾", "蟹", "蜜蜂"], features: "身体分节，有外骨骼，足分节", wrong: ["蚯蚓", "蜗牛", "水蛭", "河蚌"]},
            {group: "软体动物", examples: ["蜗牛", "河蚌", "乌贼", "章鱼", "牡蛎", "扇贝"], features: "身体柔软，有外套膜，多数有贝壳", wrong: ["蚯蚓", "水蛭", "虾", "蟹"]}
        ];

        animalGroups.forEach(ag => {
            ag.examples.forEach(animal => {
                const wrongOptions = this.shuffle(ag.wrong).slice(0, 3);
                const options = this.shuffle([animal, ...wrongOptions]);
                const correctIndex = options.indexOf(animal);
                const letters = ["A", "B", "C", "D"];

                questions.push({
                    id: id++,
                    type: "choice",
                    unit: "unit1",
                    difficulty: this.pick(["easy", "medium"]),
                    score: 2,
                    content: `下列动物中，属于${ag.group}的是（　　）`,
                    options: options.map((o, idx) => `${letters[idx]}. ${o}`),
                    answer: letters[correctIndex],
                    analysis: `${animal}${ag.features}，属于${ag.group}。`
                });
            });
        });

        // 植物分类题库
        const plantGroups = [
            {group: "被子植物", examples: ["小麦", "水稻", "玉米", "大豆", "苹果", "桃", "白菜", "番茄", "向日葵", "玫瑰"], features: "种子外有果皮包被", wrong: ["松树", "银杏", "苏铁", "水杉"]},
            {group: "裸子植物", examples: ["松树", "柏树", "银杏", "水杉", "苏铁", "雪松", "侧柏"], features: "种子裸露，没有果皮包被", wrong: ["小麦", "苹果", "玉米", "桃"]},
            {group: "蕨类植物", examples: ["肾蕨", "铁线蕨", "卷柏", "石松"], features: "有根茎叶分化，用孢子繁殖", wrong: ["葫芦藓", "地钱", "水绵", "海带"]},
            {group: "苔藓植物", examples: ["葫芦藓", "地钱", "泥炭藓"], features: "有茎叶分化，无真正的根", wrong: ["肾蕨", "水绵", "海带", "紫菜"]},
            {group: "藻类植物", examples: ["水绵", "衣藻", "海带", "紫菜", "石莼"], features: "无根茎叶分化，生活在水中", wrong: ["葫芦藓", "肾蕨", "松树", "小麦"]}
        ];

        plantGroups.forEach(pg => {
            pg.examples.forEach(plant => {
                const wrongOptions = this.shuffle(pg.wrong).slice(0, 3);
                const options = this.shuffle([plant, ...wrongOptions]);
                const correctIndex = options.indexOf(plant);
                const letters = ["A", "B", "C", "D"];

                questions.push({
                    id: id++,
                    type: "choice",
                    unit: "unit4",
                    difficulty: this.pick(["easy", "medium"]),
                    score: 2,
                    content: `下列植物中，属于${pg.group}的是（　　）`,
                    options: options.map((o, idx) => `${letters[idx]}. ${o}`),
                    answer: letters[correctIndex],
                    analysis: `${plant}${pg.features}，属于${pg.group}。`
                });
            });
        });

        return questions;
    },

    // 生成大量人体系统题
    generateMassHumanBodyQuestions() {
        const questions = [];
        let id = 900;

        // 消化系统详细题
        const digestiveOrgans = [
            {organ: "口腔", function: "初步消化淀粉", enzyme: "唾液淀粉酶", product: "麦芽糖"},
            {organ: "食道", function: "输送食物", enzyme: "无", product: "无"},
            {organ: "胃", function: "初步消化蛋白质", enzyme: "胃蛋白酶", product: "多肽"},
            {organ: "小肠", function: "消化和吸收的主要场所", enzyme: "多种消化酶", product: "葡萄糖、氨基酸、甘油和脂肪酸"},
            {organ: "大肠", function: "吸收水分和无机盐", enzyme: "无", product: "无"},
            {organ: "肝脏", function: "分泌胆汁", enzyme: "无消化酶", product: "乳化脂肪"},
            {organ: "胰腺", function: "分泌胰液", enzyme: "多种消化酶", product: "消化三大营养物质"}
        ];

        digestiveOrgans.forEach(item => {
            questions.push({
                id: id++,
                type: "choice",
                unit: "unit5",
                difficulty: "medium",
                score: 2,
                content: `${item.organ}的主要功能是（　　）`,
                options: this.shuffle([`A. ${item.function}`, "B. 吸收营养物质", "C. 储存食物", "D. 排出废物"]),
                answer: "A",
                analysis: `${item.organ}的主要功能是${item.function}。`
            });
        });

        // 呼吸系统详细题
        const respiratoryParts = [
            {part: "鼻腔", function: "温暖、湿润、清洁空气", feature: "有鼻毛和黏膜"},
            {part: "咽", function: "气体和食物的共同通道", feature: "连接口腔和食道、喉"},
            {part: "喉", function: "发声器官", feature: "有声带"},
            {part: "气管", function: "输送气体", feature: "有C形软骨支撑"},
            {part: "支气管", function: "输送气体到肺", feature: "分支进入肺"},
            {part: "肺", function: "气体交换的场所", feature: "由大量肺泡组成"},
            {part: "肺泡", function: "气体交换的基本单位", feature: "壁薄，外有毛细血管"}
        ];

        respiratoryParts.forEach(item => {
            questions.push({
                id: id++,
                type: "choice",
                unit: "unit6",
                difficulty: "easy",
                score: 2,
                content: `${item.part}的主要功能是（　　）`,
                options: this.shuffle([`A. ${item.function}`, "B. 气体交换", "C. 过滤空气", "D. 产生声音"]),
                answer: "A",
                analysis: `${item.part}${item.feature}，主要功能是${item.function}。`
            });
        });

        // 循环系统详细题
        const circulatoryParts = [
            {part: "心脏", function: "推动血液流动的泵", chambers: "四个腔"},
            {part: "动脉", function: "将血液从心脏输送到全身", feature: "管壁厚，弹性大"},
            {part: "静脉", function: "将血液从全身输送回心脏", feature: "管壁薄，有瓣膜"},
            {part: "毛细血管", function: "物质交换的场所", feature: "管壁最薄，只有一层细胞"},
            {part: "左心室", function: "将血液泵入主动脉", feature: "壁最厚"},
            {part: "右心室", function: "将血液泵入肺动脉", feature: "壁较厚"},
            {part: "左心房", function: "接收肺静脉的血液", feature: "壁较薄"},
            {part: "右心房", function: "接收上下腔静脉的血液", feature: "壁最薄"}
        ];

        circulatoryParts.forEach(item => {
            questions.push({
                id: id++,
                type: "choice",
                unit: "unit7",
                difficulty: "medium",
                score: 2,
                content: `${item.part}的主要功能是（　　）`,
                options: this.shuffle([`A. ${item.function}`, "B. 储存血液", "C. 产生血细胞", "D. 过滤血液"]),
                answer: "A",
                analysis: `${item.part}${item.feature || ""}，主要功能是${item.function}。`
            });
        });

        return questions;
    },

    // 生成大量判断题
    generateMassJudgeQuestions() {
        const questions = [];
        let id = 1100;

        const judgeItems = [
            {content: "所有的细胞都有细胞核", answer: "错误", analysis: "成熟的红细胞和血小板没有细胞核"},
            {content: "植物细胞都有叶绿体", answer: "错误", analysis: "根细胞、表皮细胞等没有叶绿体"},
            {content: "动物细胞没有细胞壁", answer: "正确", analysis: "细胞壁是植物细胞特有的结构"},
            {content: "所有的动物都用肺呼吸", answer: "错误", analysis: "鱼用鳃呼吸，蚯蚓用皮肤呼吸"},
            {content: "哺乳动物都是胎生的", answer: "错误", analysis: "鸭嘴兽是卵生的哺乳动物"},
            {content: "鲸是鱼类", answer: "错误", analysis: "鲸是哺乳动物，用肺呼吸，胎生哺乳"},
            {content: "蝙蝠是鸟类", answer: "错误", analysis: "蝙蝠是哺乳动物，有毛，胎生哺乳"},
            {content: "蜘蛛是昆虫", answer: "错误", analysis: "蜘蛛有8条腿，属于蛛形纲，不是昆虫"},
            {content: "所有的植物都能进行光合作用", answer: "错误", analysis: "菟丝子等寄生植物不能进行光合作用"},
            {content: "光合作用只在白天进行", answer: "正确", analysis: "光合作用需要光，只在有光时进行"},
            {content: "呼吸作用只在夜间进行", answer: "错误", analysis: "呼吸作用时刻都在进行"},
            {content: "动脉中流动的都是动脉血", answer: "错误", analysis: "肺动脉中流动的是静脉血"},
            {content: "静脉中流动的都是静脉血", answer: "错误", analysis: "肺静脉中流动的是动脉血"},
            {content: "人体最大的器官是皮肤", answer: "正确", analysis: "皮肤是人体最大的器官"},
            {content: "人体最大的消化腺是肝脏", answer: "正确", analysis: "肝脏是人体最大的消化腺"},
            {content: "小肠是消化和吸收的主要场所", answer: "正确", analysis: "小肠有多种消化液和绒毛结构"},
            {content: "胆汁中含有消化酶", answer: "错误", analysis: "胆汁不含消化酶，只能乳化脂肪"},
            {content: "尿液是在膀胱中形成的", answer: "错误", analysis: "尿液在肾脏中形成，膀胱只储存尿液"},
            {content: "所有的反射都需要大脑参与", answer: "错误", analysis: "非条件反射的中枢在脊髓或脑干"},
            {content: "条件反射是后天学习获得的", answer: "正确", analysis: "条件反射是在非条件反射基础上建立的"},
            {content: "基因都位于染色体上", answer: "错误", analysis: "线粒体和叶绿体中也有少量基因"},
            {content: "DNA是唯一的遗传物质", answer: "错误", analysis: "RNA病毒的遗传物质是RNA"},
            {content: "生男生女由母亲决定", answer: "错误", analysis: "生男生女由父亲的精子类型决定"},
            {content: "近亲结婚后代一定患遗传病", answer: "错误", analysis: "近亲结婚增加患遗传病的概率，但不是一定"},
            {content: "生物进化的方向是由自然选择决定的", answer: "正确", analysis: "自然选择决定生物进化的方向"},
            {content: "变异都是有利的", answer: "错误", analysis: "变异有有利变异和不利变异"},
            {content: "生态系统中能量可以循环利用", answer: "错误", analysis: "能量单向流动，不能循环利用"},
            {content: "物质在生态系统中可以循环利用", answer: "正确", analysis: "物质可以在生态系统中循环"},
            {content: "食物链的起点是生产者", answer: "正确", analysis: "食物链从生产者开始"},
            {content: "分解者是生态系统中不可缺少的成分", answer: "正确", analysis: "分解者分解有机物，促进物质循环"}
        ];

        judgeItems.forEach(item => {
            questions.push({
                id: id++,
                type: "judge",
                unit: this.pick(["unit1", "unit2", "unit3", "unit4", "unit5", "unit6", "unit7", "unit8", "unit9", "unit10", "unit11", "unit12", "unit13"]),
                difficulty: this.pick(["easy", "medium"]),
                score: 2,
                content: item.content,
                answer: item.answer,
                analysis: item.analysis
            });
        });

        return questions;
    },

    // 生成大量填空题
    generateMassBlankQuestions() {
        const questions = [];
        let id = 1200;

        const blankItems = [
            {content: "细胞是生物体______和______的基本单位。", answer: "结构、功能", unit: "unit2"},
            {content: "植物细胞特有的结构有______、______和______。", answer: "细胞壁、叶绿体、液泡", unit: "unit2"},
            {content: "动物细胞的基本结构包括______、______和______。", answer: "细胞膜、细胞质、细胞核", unit: "unit2"},
            {content: "细胞分裂时，______先分裂，然后______分裂。", answer: "细胞核、细胞质", unit: "unit2"},
            {content: "人体的四种基本组织是______、______、______和______。", answer: "上皮组织、肌肉组织、结缔组织、神经组织", unit: "unit3"},
            {content: "植物的六大器官是______、______、______、______、______和______。", answer: "根、茎、叶、花、果实、种子", unit: "unit3"},
            {content: "光合作用的场所是______，条件是______。", answer: "叶绿体、光", unit: "unit4"},
            {content: "呼吸作用的场所是______，实质是分解______释放______。", answer: "线粒体、有机物、能量", unit: "unit4"},
            {content: "蒸腾作用的主要器官是______，主要部位是______。", answer: "叶、气孔", unit: "unit4"},
            {content: "人体需要的六大营养物质是______、______、______、______、______和______。", answer: "糖类、蛋白质、脂肪、维生素、无机盐、水", unit: "unit5"},
            {content: "消化系统由______和______组成。", answer: "消化道、消化腺", unit: "unit5"},
            {content: "呼吸系统由______和______组成。", answer: "呼吸道、肺", unit: "unit6"},
            {content: "血液由______和______组成，血细胞包括______、______和______。", answer: "血浆、血细胞、红细胞、白细胞、血小板", unit: "unit7"},
            {content: "心脏有______个腔，分别是______、______、______和______。", answer: "四、左心房、左心室、右心房、右心室", unit: "unit7"},
            {content: "泌尿系统由______、______、______和______组成。", answer: "肾脏、输尿管、膀胱、尿道", unit: "unit8"},
            {content: "尿液形成包括______和______两个过程。", answer: "肾小球的过滤作用、肾小管的重吸收作用", unit: "unit8"},
            {content: "神经系统由______和______组成。", answer: "中枢神经系统、周围神经系统", unit: "unit9"},
            {content: "反射弧由______、______、______、______和______五部分组成。", answer: "感受器、传入神经、神经中枢、传出神经、效应器", unit: "unit9"},
            {content: "人体内主要的内分泌腺有______、______、______、______等。", answer: "垂体、甲状腺、胰岛、肾上腺", unit: "unit9"},
            {content: "有性生殖的特点是经过______的结合。", answer: "两性生殖细胞", unit: "unit10"},
            {content: "完全变态发育经历______、______、______、______四个时期。", answer: "卵、幼虫、蛹、成虫", unit: "unit10"},
            {content: "人体细胞中有______对染色体，其中______对常染色体，______对性染色体。", answer: "23、22、1", unit: "unit11"},
            {content: "基因是有______的______片段。", answer: "遗传效应、DNA", unit: "unit11"},
            {content: "生物进化的证据有______、______、______等。", answer: "化石、比较解剖学、胚胎学", unit: "unit12"},
            {content: "自然选择学说的提出者是______。", answer: "达尔文", unit: "unit12"},
            {content: "生态系统的组成包括______和______两部分。", answer: "生物部分、非生物部分", unit: "unit13"},
            {content: "生态系统中的生物部分包括______、______和______。", answer: "生产者、消费者、分解者", unit: "unit13"},
            {content: "能量流动的特点是______和______。", answer: "单向流动、逐级递减", unit: "unit13"}
        ];

        blankItems.forEach(item => {
            questions.push({
                id: id++,
                type: "blank",
                unit: item.unit,
                difficulty: this.pick(["easy", "medium", "hard"]),
                score: 3,
                content: item.content,
                answer: item.answer,
                analysis: `答案是${item.answer}。`
            });
        });

        return questions;
    },

    // 生成更多变体选择题
    generateVariantChoiceQuestions() {
        const questions = [];
        let id = 1300;

        // 生物特征判断题
        const featureQuestions = [
            {q: "下列哪项不是生物的基本特征", correct: "能运动", wrong: ["能呼吸", "能生长繁殖", "能对刺激作出反应"]},
            {q: "下列哪项是所有生物都具有的特征", correct: "能进行新陈代谢", wrong: ["能运动", "有细胞结构", "能进行光合作用"]},
            {q: "下列哪种生物没有细胞结构", correct: "病毒", wrong: ["细菌", "真菌", "原生动物"]},
            {q: "下列哪种生物是单细胞生物", correct: "草履虫", wrong: ["水螅", "蚯蚓", "水母"]},
            {q: "下列哪种生物是多细胞生物", correct: "水螅", wrong: ["草履虫", "变形虫", "酵母菌"]}
        ];

        featureQuestions.forEach(item => {
            const options = this.shuffle([item.correct, ...item.wrong]);
            const correctIndex = options.indexOf(item.correct);
            const letters = ["A", "B", "C", "D"];
            questions.push({
                id: id++, type: "choice", unit: "unit1", difficulty: "medium", score: 2,
                content: `${item.q}（　　）`,
                options: options.map((o, idx) => `${letters[idx]}. ${o}`),
                answer: letters[correctIndex],
                analysis: `正确答案是${item.correct}。`
            });
        });

        // 显微镜操作题
        const microscopeQuestions = [
            {q: "使用显微镜时，要使视野变亮应该", correct: "使用大光圈和凹面镜", wrong: ["使用小光圈和平面镜", "调节细准焦螺旋", "更换高倍物镜"]},
            {q: "显微镜的放大倍数等于", correct: "目镜放大倍数×物镜放大倍数", wrong: ["目镜放大倍数+物镜放大倍数", "目镜放大倍数-物镜放大倍数", "目镜放大倍数÷物镜放大倍数"]},
            {q: "使用高倍镜观察时，应先用", correct: "低倍镜找到目标", wrong: ["高倍镜直接观察", "粗准焦螺旋调焦", "最大光圈"]},
            {q: "显微镜下看到的物像是", correct: "倒像", wrong: ["正像", "放大的正像", "缩小的倒像"]},
            {q: "要使视野中的物像从左上方移到中央，应将玻片向", correct: "左上方移动", wrong: ["右下方移动", "左下方移动", "右上方移动"]}
        ];

        microscopeQuestions.forEach(item => {
            const options = this.shuffle([item.correct, ...item.wrong]);
            const correctIndex = options.indexOf(item.correct);
            const letters = ["A", "B", "C", "D"];
            questions.push({
                id: id++, type: "choice", unit: "unit2", difficulty: "medium", score: 2,
                content: `${item.q}（　　）`,
                options: options.map((o, idx) => `${letters[idx]}. ${o}`),
                answer: letters[correctIndex],
                analysis: `正确答案是${item.correct}。`
            });
        });

        // 光合作用与呼吸作用对比题
        const processQuestions = [
            {q: "光合作用和呼吸作用都需要的物质是", correct: "水", wrong: ["氧气", "二氧化碳", "光"]},
            {q: "光合作用的产物是", correct: "有机物和氧气", wrong: ["二氧化碳和水", "有机物和二氧化碳", "氧气和水"]},
            {q: "呼吸作用的产物是", correct: "二氧化碳和水", wrong: ["有机物和氧气", "有机物和二氧化碳", "氧气和水"]},
            {q: "光合作用进行的条件是", correct: "光", wrong: ["氧气", "二氧化碳", "温度"]},
            {q: "呼吸作用进行的时间是", correct: "时刻都在进行", wrong: ["只在白天", "只在夜间", "只在有光时"]}
        ];

        processQuestions.forEach(item => {
            const options = this.shuffle([item.correct, ...item.wrong]);
            const correctIndex = options.indexOf(item.correct);
            const letters = ["A", "B", "C", "D"];
            questions.push({
                id: id++, type: "choice", unit: "unit4", difficulty: "medium", score: 2,
                content: `${item.q}（　　）`,
                options: options.map((o, idx) => `${letters[idx]}. ${o}`),
                answer: letters[correctIndex],
                analysis: `正确答案是${item.correct}。`
            });
        });

        return questions;
    },

    // 生成实验探究题
    generateExperimentQuestions() {
        const questions = [];
        let id = 1400;

        const experiments = [
            {
                title: "探究光合作用需要二氧化碳",
                steps: "①将植物放在黑暗处一昼夜②将两片叶子分别放入装有氢氧化钠溶液和清水的密闭容器中③光照数小时④脱色后滴加碘液",
                variable: "二氧化碳",
                result: "清水组叶片变蓝，氢氧化钠组不变蓝",
                conclusion: "光合作用需要二氧化碳"
            },
            {
                title: "探究种子萌发需要水分",
                steps: "①取两组相同的种子②一组加适量水，一组不加水③放在相同温度下④观察萌发情况",
                variable: "水分",
                result: "加水组萌发，不加水组不萌发",
                conclusion: "种子萌发需要水分"
            },
            {
                title: "探究种子萌发需要适宜温度",
                steps: "①取三组相同的种子②分别放在低温、常温、高温环境③保持水分充足④观察萌发情况",
                variable: "温度",
                result: "常温组萌发最好",
                conclusion: "种子萌发需要适宜的温度"
            }
        ];

        experiments.forEach(exp => {
            questions.push({
                id: id++,
                type: "experiment",
                unit: "unit4",
                difficulty: "hard",
                score: 8,
                content: `${exp.title}实验：\n实验步骤：${exp.steps}\n请回答：\n(1) 该实验的变量是什么？\n(2) 预期实验结果是什么？\n(3) 实验结论是什么？`,
                answer: `(1) 变量是${exp.variable}。\n(2) ${exp.result}。\n(3) ${exp.conclusion}。`,
                analysis: `这是一个对照实验，通过控制变量来验证${exp.conclusion}。`
            });
        });

        return questions;
    },

    // 生成简答题
    generateShortAnswerQuestions() {
        const questions = [];
        let id = 1500;

        const shortAnswers = [
            {q: "简述细胞膜的功能。", a: "细胞膜的功能：①保护细胞内部结构；②控制物质进出细胞，使有用的物质进入细胞，有害的物质和废物排出细胞。", unit: "unit2"},
            {q: "简述叶绿体和线粒体的功能。", a: "叶绿体：进行光合作用，将光能转化为化学能，合成有机物。线粒体：进行呼吸作用，分解有机物，释放能量。", unit: "unit2"},
            {q: "简述植物根尖的结构和功能。", a: "根尖从下到上分为：①根冠：保护作用；②分生区：细胞分裂；③伸长区：细胞伸长；④成熟区：吸收水分和无机盐。", unit: "unit4"},
            {q: "简述小肠适于消化和吸收的结构特点。", a: "①小肠很长（约5-6米）；②内壁有环形皱襞和绒毛，增大表面积；③绒毛内有毛细血管和毛细淋巴管；④有多种消化液。", unit: "unit5"},
            {q: "简述肺泡适于气体交换的结构特点。", a: "①肺泡数量多（约3亿个）；②肺泡壁很薄，只有一层上皮细胞；③肺泡外包绕着丰富的毛细血管；④毛细血管壁也很薄。", unit: "unit6"},
            {q: "简述动脉、静脉、毛细血管的特点。", a: "动脉：管壁厚，弹性大，血流速度快。静脉：管壁薄，弹性小，有瓣膜，血流速度慢。毛细血管：管壁最薄，只有一层细胞，血流速度最慢，是物质交换的场所。", unit: "unit7"},
            {q: "简述尿液的形成过程。", a: "①肾小球的过滤作用：血液流经肾小球时，除血细胞和大分子蛋白质外，其他物质过滤到肾小囊形成原尿。②肾小管的重吸收作用：原尿流经肾小管时，全部葡萄糖、大部分水和部分无机盐被重吸收，剩余物质形成尿液。", unit: "unit8"},
            {q: "简述条件反射和非条件反射的区别。", a: "非条件反射：先天就有的，不需要学习，反射中枢在脊髓或脑干。条件反射：后天学习获得的，需要在非条件反射基础上建立，反射中枢在大脑皮层。", unit: "unit9"},
            {q: "简述有性生殖和无性生殖的区别。", a: "有性生殖：经过两性生殖细胞的结合，后代具有双亲的遗传特性，变异性大。无性生殖：不经过两性生殖细胞的结合，后代只具有一个亲本的遗传特性，能保持亲本的优良性状。", unit: "unit10"},
            {q: "简述基因、DNA、染色体的关系。", a: "染色体由DNA和蛋白质组成，DNA是主要的遗传物质，基因是有遗传效应的DNA片段。一条染色体上有一个DNA分子，一个DNA分子上有多个基因。", unit: "unit11"}
        ];

        shortAnswers.forEach(item => {
            questions.push({
                id: id++,
                type: "short",
                unit: item.unit,
                difficulty: "medium",
                score: 5,
                content: item.q,
                answer: item.a,
                analysis: "这是一道基础知识简答题。"
            });
        });

        return questions;
    },

    // 生成所有题目
    generateAll() {
        return [
            ...this.generateChoiceQuestions(),
            ...this.generateMoreChoiceQuestions(),
            ...this.generateEcologyQuestions(),
            ...this.generatePhysiologyQuestions(),
            ...this.generateGeneticsQuestions(),
            ...this.generateMassClassificationQuestions(),
            ...this.generateMassHumanBodyQuestions(),
            ...this.generateMassJudgeQuestions(),
            ...this.generateMassBlankQuestions(),
            ...this.generateVariantChoiceQuestions(),
            ...this.generateExperimentQuestions(),
            ...this.generateShortAnswerQuestions()
        ];
    }
};
