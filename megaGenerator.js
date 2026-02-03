// 超大规模题库生成器 - 通过模板变体生成海量题目
const megaGenerator = {
    baseId: 5000,

    shuffle(arr) {
        const result = [...arr];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    },

    pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },

    makeChoice(id, unit, diff, content, correct, wrongs, analysis) {
        const options = this.shuffle([correct, ...wrongs.slice(0, 3)]);
        const idx = options.indexOf(correct);
        const letters = ["A", "B", "C", "D"];
        return { id, type: "choice", unit, difficulty: diff, score: 2,
            content: content + "（　　）",
            options: options.map((o, i) => `${letters[i]}. ${o}`),
            answer: letters[idx], analysis };
    },

    // 大规模生物分类题
    generateClassification() {
        const questions = [];
        let id = this.baseId;

        // 动物分类数据
        const animals = {
            fish: {name: "鱼类", items: ["鲫鱼","鲤鱼","草鱼","鲢鱼","鲨鱼","带鱼","黄鱼","鳗鱼","金鱼","鲈鱼","鳕鱼","三文鱼","比目鱼","鲶鱼","鲳鱼"], feature: "用鳃呼吸，用鳍游泳"},
            amphibian: {name: "两栖类", items: ["青蛙","蟾蜍","蝾螈","大鲵","树蛙","牛蛙","雨蛙"], feature: "幼体用鳃呼吸，成体用肺呼吸"},
            reptile: {name: "爬行类", items: ["蜥蜴","壁虎","蛇","龟","鳄鱼","变色龙","蟒蛇","眼镜蛇","乌龟","甲鱼"], feature: "体表有鳞片或甲，用肺呼吸"},
            bird: {name: "鸟类", items: ["麻雀","燕子","鸽子","鸡","鸭","鹅","老鹰","猫头鹰","啄木鸟","鹦鹉","孔雀","天鹅","丹顶鹤","企鹅","鸵鸟"], feature: "体表有羽毛，前肢变成翼"},
            mammal: {name: "哺乳类", items: ["兔","鼠","猫","狗","牛","羊","马","猪","虎","狮","象","鲸","海豚","蝙蝠","猴","熊猫","袋鼠","考拉"], feature: "体表有毛，胎生哺乳"},
            insect: {name: "昆虫", items: ["蝗虫","蜜蜂","蝴蝶","蚊子","苍蝇","蜻蜓","螳螂","蟋蟀","蚂蚁","蟑螂","甲虫","蝉","萤火虫","蚕","瓢虫"], feature: "身体分头胸腹，有三对足"}
        };

        // 为每种动物生成分类题
        Object.keys(animals).forEach(type => {
            const group = animals[type];
            group.items.forEach(animal => {
                // 获取其他类别的动物作为干扰项
                const otherTypes = Object.keys(animals).filter(t => t !== type);
                const wrongs = otherTypes.map(t => this.pick(animals[t].items));

                questions.push(this.makeChoice(id++, "unit1", "easy",
                    `下列动物中，属于${group.name}的是`,
                    animal, wrongs,
                    `${animal}${group.feature}，属于${group.name}。`
                ));
            });
        });

        // 植物分类数据
        const plants = {
            angiosperm: {name: "被子植物", items: ["小麦","水稻","玉米","大豆","苹果","桃","白菜","番茄","向日葵","玫瑰","荷花","菊花","兰花","牡丹","月季","郁金香","百合","康乃馨","梅花","樱花"], feature: "种子外有果皮包被"},
            gymnosperm: {name: "裸子植物", items: ["松树","柏树","银杏","水杉","苏铁","雪松","侧柏","红豆杉","云杉","冷杉"], feature: "种子裸露，没有果皮包被"},
            fern: {name: "蕨类植物", items: ["肾蕨","铁线蕨","卷柏","石松","桫椤","满江红","槐叶萍"], feature: "有根茎叶，用孢子繁殖"},
            moss: {name: "苔藓植物", items: ["葫芦藓","地钱","泥炭藓","金发藓"], feature: "有茎叶，无真正的根"},
            algae: {name: "藻类植物", items: ["水绵","衣藻","海带","紫菜","石莼","裙带菜","螺旋藻","小球藻"], feature: "无根茎叶分化"}
        };

        Object.keys(plants).forEach(type => {
            const group = plants[type];
            group.items.forEach(plant => {
                const otherTypes = Object.keys(plants).filter(t => t !== type);
                const wrongs = otherTypes.map(t => this.pick(plants[t].items));

                questions.push(this.makeChoice(id++, "unit4", "easy",
                    `下列植物中，属于${group.name}的是`,
                    plant, wrongs,
                    `${plant}${group.feature}，属于${group.name}。`
                ));
            });
        });

        this.baseId = id;
        return questions;
    },

    // 大规模细胞结构题
    generateCellStructure() {
        const questions = [];
        let id = this.baseId;

        const structures = [
            {name: "细胞膜", func: "控制物质进出细胞", location: "细胞最外层（植物细胞壁内侧）"},
            {name: "细胞质", func: "进行生命活动的主要场所", location: "细胞膜和细胞核之间"},
            {name: "细胞核", func: "储存遗传信息，控制细胞活动", location: "细胞中央"},
            {name: "线粒体", func: "进行呼吸作用，释放能量", location: "细胞质中"},
            {name: "叶绿体", func: "进行光合作用，合成有机物", location: "植物细胞的细胞质中"},
            {name: "液泡", func: "储存营养物质和色素", location: "植物细胞的细胞质中"},
            {name: "细胞壁", func: "保护和支持细胞", location: "植物细胞最外层"},
            {name: "核糖体", func: "合成蛋白质", location: "细胞质中"},
            {name: "内质网", func: "加工和运输蛋白质", location: "细胞质中"},
            {name: "高尔基体", func: "加工和分泌蛋白质", location: "细胞质中"}
        ];

        const allFuncs = structures.map(s => s.func);

        structures.forEach(struct => {
            const wrongs = allFuncs.filter(f => f !== struct.func);
            questions.push(this.makeChoice(id++, "unit2", "medium",
                `${struct.name}的主要功能是`,
                struct.func, this.shuffle(wrongs).slice(0, 3),
                `${struct.name}位于${struct.location}，主要功能是${struct.func}。`
            ));
        });

        // 细胞结构位置题
        structures.forEach(struct => {
            const wrongs = structures.filter(s => s.name !== struct.name).map(s => s.name);
            questions.push(this.makeChoice(id++, "unit2", "easy",
                `${struct.func}的结构是`,
                struct.name, this.shuffle(wrongs).slice(0, 3),
                `${struct.name}的功能是${struct.func}。`
            ));
        });

        this.baseId = id;
        return questions;
    },

    // 大规模人体系统题
    generateHumanBody() {
        const questions = [];
        let id = this.baseId;

        // 消化系统
        const digestiveOrgans = [
            {organ: "口腔", func: "初步消化淀粉", enzyme: "唾液淀粉酶"},
            {organ: "食道", func: "输送食物到胃", enzyme: "无"},
            {organ: "胃", func: "初步消化蛋白质", enzyme: "胃蛋白酶"},
            {organ: "小肠", func: "消化和吸收的主要场所", enzyme: "多种消化酶"},
            {organ: "大肠", func: "吸收水分和无机盐", enzyme: "无"},
            {organ: "肝脏", func: "分泌胆汁", enzyme: "无消化酶"},
            {organ: "胰腺", func: "分泌胰液", enzyme: "多种消化酶"},
            {organ: "唾液腺", func: "分泌唾液", enzyme: "唾液淀粉酶"},
            {organ: "胃腺", func: "分泌胃液", enzyme: "胃蛋白酶"}
        ];

        digestiveOrgans.forEach(item => {
            const wrongs = digestiveOrgans.filter(o => o.organ !== item.organ).map(o => o.func);
            questions.push(this.makeChoice(id++, "unit5", "medium",
                `${item.organ}的主要功能是`,
                item.func, this.shuffle(wrongs).slice(0, 3),
                `${item.organ}的主要功能是${item.func}。`
            ));
        });

        // 呼吸系统
        const respiratoryOrgans = [
            {organ: "鼻腔", func: "温暖、湿润、清洁空气"},
            {organ: "咽", func: "气体和食物的共同通道"},
            {organ: "喉", func: "发声器官"},
            {organ: "气管", func: "输送气体"},
            {organ: "支气管", func: "输送气体到肺"},
            {organ: "肺", func: "气体交换的场所"},
            {organ: "肺泡", func: "气体交换的基本单位"}
        ];

        respiratoryOrgans.forEach(item => {
            const wrongs = respiratoryOrgans.filter(o => o.organ !== item.organ).map(o => o.func);
            questions.push(this.makeChoice(id++, "unit6", "easy",
                `${item.organ}的主要功能是`,
                item.func, this.shuffle(wrongs).slice(0, 3),
                `${item.organ}的主要功能是${item.func}。`
            ));
        });

        // 循环系统
        const circulatoryParts = [
            {part: "心脏", func: "推动血液流动"},
            {part: "动脉", func: "将血液从心脏输送到全身"},
            {part: "静脉", func: "将血液从全身输送回心脏"},
            {part: "毛细血管", func: "物质交换的场所"},
            {part: "红细胞", func: "运输氧气"},
            {part: "白细胞", func: "吞噬病菌"},
            {part: "血小板", func: "止血凝血"},
            {part: "血浆", func: "运载血细胞和营养物质"}
        ];

        circulatoryParts.forEach(item => {
            const wrongs = circulatoryParts.filter(p => p.part !== item.part).map(p => p.func);
            questions.push(this.makeChoice(id++, "unit7", "medium",
                `${item.part}的主要功能是`,
                item.func, this.shuffle(wrongs).slice(0, 3),
                `${item.part}的主要功能是${item.func}。`
            ));
        });

        // 泌尿系统
        const urinaryOrgans = [
            {organ: "肾脏", func: "形成尿液"},
            {organ: "输尿管", func: "输送尿液"},
            {organ: "膀胱", func: "储存尿液"},
            {organ: "尿道", func: "排出尿液"},
            {organ: "肾小球", func: "过滤血液"},
            {organ: "肾小囊", func: "收集原尿"},
            {organ: "肾小管", func: "重吸收有用物质"}
        ];

        urinaryOrgans.forEach(item => {
            const wrongs = urinaryOrgans.filter(o => o.organ !== item.organ).map(o => o.func);
            questions.push(this.makeChoice(id++, "unit8", "medium",
                `${item.organ}的主要功能是`,
                item.func, this.shuffle(wrongs).slice(0, 3),
                `${item.organ}的主要功能是${item.func}。`
            ));
        });

        // 神经系统
        const nervousParts = [
            {part: "大脑", func: "高级神经活动中枢"},
            {part: "小脑", func: "协调运动、维持平衡"},
            {part: "脑干", func: "呼吸、心跳等生命中枢"},
            {part: "脊髓", func: "反射和传导"},
            {part: "神经元", func: "接受刺激、传导神经冲动"},
            {part: "感受器", func: "接受刺激"},
            {part: "效应器", func: "产生反应"}
        ];

        nervousParts.forEach(item => {
            const wrongs = nervousParts.filter(p => p.part !== item.part).map(p => p.func);
            questions.push(this.makeChoice(id++, "unit9", "medium",
                `${item.part}的主要功能是`,
                item.func, this.shuffle(wrongs).slice(0, 3),
                `${item.part}的主要功能是${item.func}。`
            ));
        });

        this.baseId = id;
        return questions;
    },

    // 生成所有题目
    generateAll() {
        return [
            ...this.generateClassification(),
            ...this.generateCellStructure(),
            ...this.generateHumanBody()
        ];
    }
};
