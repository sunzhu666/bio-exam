// 初中生物试题库 - 符合教育部《义务教育生物学课程标准(2022年版)》
const questionBank = {
    units: [
        { id: "unit1", name: "生物与生物圈" },
        { id: "unit2", name: "细胞是生命活动的基本单位" },
        { id: "unit3", name: "生物体的结构层次" },
        { id: "unit4", name: "绿色植物" },
        { id: "unit5", name: "人体的营养" },
        { id: "unit6", name: "人体的呼吸" },
        { id: "unit7", name: "人体内物质的运输" },
        { id: "unit8", name: "人体的排泄" },
        { id: "unit9", name: "人体生命活动的调节" },
        { id: "unit10", name: "生物的生殖和发育" },
        { id: "unit11", name: "生物的遗传和变异" },
        { id: "unit12", name: "生物的进化" },
        { id: "unit13", name: "生物与环境" },
        { id: "exam", name: "中考真题" }
    ],
    questions: []
};

// 选择题
questionBank.questions.push(
    {
        id: 1, type: "choice", unit: "unit1", difficulty: "easy", score: 2,
        content: "下列属于生物的是（　　）",
        options: ["A. 机器人", "B. 珊瑚", "C. 珊瑚虫", "D. 钟乳石"],
        answer: "C",
        analysis: "生物具有生命特征，能进行新陈代谢、生长繁殖等。珊瑚虫是动物，属于生物；珊瑚是珊瑚虫分泌的外骨骼，不是生物。"
    },
    {
        id: 2, type: "choice", unit: "unit1", difficulty: "easy", score: 2,
        content: "\"螳螂捕蝉，黄雀在后\"描述的是生物之间的（　　）",
        options: ["A. 合作关系", "B. 竞争关系", "C. 捕食关系", "D. 共生关系"],
        answer: "C",
        analysis: "螳螂捕食蝉，黄雀捕食螳螂，体现的是生物之间的捕食关系。"
    },
    {
        id: 3, type: "choice", unit: "unit2", difficulty: "medium", score: 2,
        content: "使用显微镜观察时，若要使视野中的物像从左上方移到中央，应将玻片标本向哪个方向移动（　　）",
        options: ["A. 右下方", "B. 左上方", "C. 右上方", "D. 左下方"],
        answer: "B",
        analysis: "显微镜成倒像，物像移动方向与玻片移动方向相反。要使物像从左上方移到中央，需将玻片向左上方移动。"
    },
    {
        id: 4, type: "choice", unit: "unit2", difficulty: "medium", score: 2,
        content: "植物细胞和动物细胞都具有的结构是（　　）",
        options: ["A. 细胞壁、细胞膜、细胞质", "B. 细胞膜、细胞质、细胞核", "C. 细胞壁、叶绿体、液泡", "D. 细胞膜、叶绿体、细胞核"],
        answer: "B",
        analysis: "植物细胞特有细胞壁、叶绿体和液泡，动物细胞没有。两者都有细胞膜、细胞质和细胞核。"
    },
    {
        id: 5, type: "choice", unit: "unit3", difficulty: "easy", score: 2,
        content: "人体结构和功能的基本单位是（　　）",
        options: ["A. 细胞", "B. 组织", "C. 器官", "D. 系统"],
        answer: "A",
        analysis: "细胞是生物体结构和功能的基本单位，人体也不例外。"
    },
    {
        id: 6, type: "choice", unit: "unit4", difficulty: "medium", score: 2,
        content: "光合作用的场所是（　　）",
        options: ["A. 线粒体", "B. 叶绿体", "C. 细胞核", "D. 液泡"],
        answer: "B",
        analysis: "叶绿体是光合作用的场所，能将光能转化为化学能，合成有机物。"
    },
    {
        id: 7, type: "choice", unit: "unit5", difficulty: "medium", score: 2,
        content: "人体消化和吸收的主要场所是（　　）",
        options: ["A. 胃", "B. 小肠", "C. 大肠", "D. 口腔"],
        answer: "B",
        analysis: "小肠是消化和吸收的主要场所，有多种消化液，且有绒毛结构增大吸收面积。"
    },
    {
        id: 8, type: "choice", unit: "unit6", difficulty: "easy", score: 2,
        content: "人体进行呼吸作用的主要场所是（　　）",
        options: ["A. 肺", "B. 气管", "C. 鼻腔", "D. 细胞"],
        answer: "D",
        analysis: "呼吸作用在细胞内进行，肺只是气体交换的场所。"
    },
    {
        id: 9, type: "choice", unit: "unit7", difficulty: "hard", score: 2,
        content: "血液流经肺部毛细血管后，血液成分的变化是（　　）",
        options: ["A. 动脉血变成静脉血", "B. 静脉血变成动脉血", "C. 养料增多", "D. 废物增多"],
        answer: "B",
        analysis: "血液流经肺部时进行气体交换，二氧化碳排出，氧气进入，静脉血变成动脉血。"
    },
    {
        id: 10, type: "choice", unit: "unit11", difficulty: "medium", score: 2,
        content: "下列属于相对性状的是（　　）",
        options: ["A. 人的身高和体重", "B. 兔的长毛和白毛", "C. 豌豆的高茎和矮茎", "D. 番茄的红果和圆果"],
        answer: "C",
        analysis: "相对性状是指同种生物同一性状的不同表现形式。豌豆的高茎和矮茎是茎高度这一性状的不同表现。"
    }
);

// 判断题
questionBank.questions.push(
    {
        id: 14, type: "judge", unit: "unit1", difficulty: "easy", score: 2,
        content: "病毒没有细胞结构，所以病毒不是生物。",
        answer: "错误",
        analysis: "病毒虽然没有细胞结构，但能繁殖后代，具有遗传和变异的特性，属于生物。"
    },
    {
        id: 15, type: "judge", unit: "unit6", difficulty: "easy", score: 2,
        content: "呼吸作用只在夜间进行。",
        answer: "错误",
        analysis: "呼吸作用是生物的基本生命活动，无论白天黑夜都在进行。"
    }
);

// 简答题
questionBank.questions.push(
    {
        id: 16, type: "short", unit: "unit4", difficulty: "medium", score: 5,
        content: "请简述光合作用的概念，并写出光合作用的反应式。",
        answer: "光合作用是指绿色植物通过叶绿体，利用光能，把二氧化碳和水转化成储存能量的有机物（如淀粉），并释放出氧气的过程。\n反应式：二氧化碳 + 水 →(光能/叶绿体) 有机物（储存能量）+ 氧气",
        analysis: "光合作用的场所是叶绿体，条件是光，原料是二氧化碳和水，产物是有机物和氧气。"
    },
    {
        id: 17, type: "short", unit: "unit11", difficulty: "hard", score: 5,
        content: "某对夫妇均为双眼皮（Aa），请用遗传图解分析他们生出单眼皮孩子的概率。",
        answer: "遗传图解：\n亲代：Aa × Aa\n配子：A、a × A、a\n子代：AA、Aa、Aa、aa\n子代基因型比例：AA:Aa:aa = 1:2:1\n子代表现型比例：双眼皮:单眼皮 = 3:1\n生出单眼皮孩子的概率为1/4（25%）",
        analysis: "双眼皮是显性性状（A），单眼皮是隐性性状（a）。Aa×Aa的后代中，aa的概率为1/4。"
    }
);

// 实验探究题
questionBank.questions.push(
    {
        id: 18, type: "experiment", unit: "unit4", difficulty: "hard", score: 8,
        content: "为验证\"光合作用需要光\"，某同学设计了如下实验：\n①将一盆天竺葵放在黑暗处一昼夜\n②用黑纸片将叶片的一部分从上下两面遮盖\n③将植物移到阳光下照射数小时\n④摘下叶片，去掉黑纸片\n⑤将叶片放入酒精中隔水加热\n⑥用清水漂洗后，滴加碘液\n请回答：\n(1) 步骤①的目的是什么？\n(2) 步骤⑤中为什么要用酒精？为什么要隔水加热？\n(3) 预期实验结果是什么？",
        answer: "(1) 将叶片中原有的淀粉运走耗尽，排除原有淀粉对实验的干扰。\n(2) 酒精能溶解叶绿素，使叶片脱色；酒精易燃，隔水加热可以控制温度，防止酒精燃烧。\n(3) 遮光部分不变蓝，见光部分变蓝。说明光合作用需要光，产物是淀粉。",
        analysis: "这是经典的光合作用验证实验，采用对照实验的方法，变量是光照。"
    },
    {
        id: 19, type: "experiment", unit: "unit5", difficulty: "medium", score: 6,
        content: "探究\"唾液对淀粉的消化作用\"实验中：\n甲试管：淀粉糊 + 唾液，37℃水浴10分钟\n乙试管：淀粉糊 + 清水，37℃水浴10分钟\n请回答：\n(1) 该实验的变量是什么？\n(2) 为什么要在37℃条件下进行？\n(3) 加碘液后，预期甲、乙试管的现象分别是什么？",
        answer: "(1) 变量是唾液（唾液淀粉酶）。\n(2) 37℃接近人体体温，是唾液淀粉酶发挥作用的最适温度。\n(3) 甲试管不变蓝（淀粉被分解），乙试管变蓝（淀粉未被分解）。",
        analysis: "唾液中含有唾液淀粉酶，能将淀粉分解为麦芽糖。酶的活性受温度影响，37℃是最适温度。"
    }
);

// 更多选择题
questionBank.questions.push(
    {
        id: 20, type: "choice", unit: "unit8", difficulty: "medium", score: 2,
        content: "人体形成尿液的器官是（　　）",
        options: ["A. 肾脏", "B. 输尿管", "C. 膀胱", "D. 尿道"],
        answer: "A",
        analysis: "肾脏是形成尿液的器官，输尿管输送尿液，膀胱储存尿液，尿道排出尿液。"
    },
    {
        id: 21, type: "choice", unit: "unit9", difficulty: "medium", score: 2,
        content: "神经系统结构和功能的基本单位是（　　）",
        options: ["A. 反射弧", "B. 神经元", "C. 神经", "D. 脑"],
        answer: "B",
        analysis: "神经元（神经细胞）是神经系统结构和功能的基本单位，能接受刺激产生并传导神经冲动。"
    },
    {
        id: 22, type: "choice", unit: "unit10", difficulty: "easy", score: 2,
        content: "青蛙的发育属于（　　）",
        options: ["A. 完全变态发育", "B. 不完全变态发育", "C. 变态发育", "D. 直接发育"],
        answer: "C",
        analysis: "青蛙的发育经历受精卵→蝌蚪→幼蛙→成蛙，幼体和成体差异很大，属于变态发育。"
    },
    {
        id: 23, type: "choice", unit: "unit12", difficulty: "medium", score: 2,
        content: "生物进化的内因是（　　）",
        options: ["A. 自然选择", "B. 遗传和变异", "C. 生存斗争", "D. 适者生存"],
        answer: "B",
        analysis: "遗传和变异是生物进化的内因，自然选择是外因。变异提供原材料，遗传使有利变异积累。"
    },
    {
        id: 24, type: "choice", unit: "unit13", difficulty: "easy", score: 2,
        content: "在生态系统中，能量流动的起点是（　　）",
        options: ["A. 分解者", "B. 消费者", "C. 生产者", "D. 阳光"],
        answer: "C",
        analysis: "生产者通过光合作用固定太阳能，是生态系统能量流动的起点。"
    },
    {
        id: 25, type: "choice", unit: "unit3", difficulty: "medium", score: 2,
        content: "下列属于器官的是（　　）",
        options: ["A. 血液", "B. 心肌", "C. 心脏", "D. 循环系统"],
        answer: "C",
        analysis: "血液是结缔组织，心肌是肌肉组织，心脏由多种组织构成是器官，循环系统是系统。"
    }
);

// 更多判断题
questionBank.questions.push(
    {
        id: 28, type: "judge", unit: "unit13", difficulty: "medium", score: 2,
        content: "在食物链中，营养级越高的生物，体内积累的有毒物质越少。",
        answer: "错误",
        analysis: "有毒物质沿食物链富集，营养级越高，体内积累的有毒物质越多，这叫生物富集作用。"
    },
    {
        id: 29, type: "judge", unit: "unit11", difficulty: "easy", score: 2,
        content: "DNA是主要的遗传物质，位于细胞核的染色体上。",
        answer: "正确",
        analysis: "DNA主要存在于细胞核的染色体上，是主要的遗传物质，携带遗传信息。"
    }
);

// ========== 第一单元：生物与生物圈 ==========
questionBank.questions.push(
    {
        id: 30, type: "choice", unit: "unit1", difficulty: "easy", score: 2,
        content: "下列不属于生物基本特征的是（　　）",
        options: ["A. 能进行呼吸", "B. 能生长和繁殖", "C. 能运动", "D. 能对外界刺激作出反应"],
        answer: "C",
        analysis: "运动不是生物的基本特征，植物不能运动但仍是生物。生物的基本特征包括新陈代谢、生长繁殖、应激性等。"
    },
    {
        id: 31, type: "choice", unit: "unit1", difficulty: "medium", score: 2,
        content: "\"大鱼吃小鱼，小鱼吃虾米\"这句话体现了生物之间的（　　）",
        options: ["A. 合作关系", "B. 竞争关系", "C. 捕食关系", "D. 寄生关系"],
        answer: "C",
        analysis: "大鱼捕食小鱼，小鱼捕食虾米，体现的是生物之间的捕食关系。"
    },
    {
        id: 32, type: "choice", unit: "unit1", difficulty: "medium", score: 2,
        content: "下列属于生物影响环境的实例是（　　）",
        options: ["A. 沙漠中的骆驼刺根系发达", "B. 蚯蚓使土壤疏松", "C. 海豹皮下脂肪很厚", "D. 秋天大雁南飞"],
        answer: "B",
        analysis: "蚯蚓在土壤中活动使土壤疏松，是生物影响环境的例子。其他选项都是生物适应环境的例子。"
    },
    {
        id: 33, type: "choice", unit: "unit1", difficulty: "hard", score: 2,
        content: "在一个生态系统中，草→兔→狐这条食物链中，如果狐的数量大量减少，短期内兔的数量变化是（　　）",
        options: ["A. 增多", "B. 减少", "C. 不变", "D. 先增后减"],
        answer: "D",
        analysis: "狐减少后，兔因天敌减少而数量增加；但兔增多后草被大量消耗，食物不足导致兔数量下降。"
    },
    {
        id: 34, type: "choice", unit: "unit1", difficulty: "easy", score: 2,
        content: "生物圈的范围包括（　　）",
        options: ["A. 大气圈、水圈、岩石圈", "B. 大气圈的底部、水圈的大部、岩石圈的表面", "C. 大气圈的全部、水圈、岩石圈", "D. 大气圈、水圈的表面、岩石圈"],
        answer: "B",
        analysis: "生物圈包括大气圈的底部、水圈的大部和岩石圈的表面，是地球上所有生物与其环境的总和。"
    }
);

// ========== 第二单元：细胞 ==========
questionBank.questions.push(
    {
        id: 35, type: "choice", unit: "unit2", difficulty: "easy", score: 2,
        content: "制作洋葱表皮细胞临时装片时，滴加的液体是（　　）",
        options: ["A. 生理盐水", "B. 清水", "C. 碘液", "D. 酒精"],
        answer: "B",
        analysis: "制作植物细胞临时装片时滴加清水，制作动物细胞临时装片时滴加生理盐水以维持细胞正常形态。"
    },
    {
        id: 36, type: "choice", unit: "unit2", difficulty: "medium", score: 2,
        content: "细胞分裂时，最先分裂的结构是（　　）",
        options: ["A. 细胞质", "B. 细胞膜", "C. 细胞核", "D. 细胞壁"],
        answer: "C",
        analysis: "细胞分裂时，细胞核先分裂，然后细胞质分裂，最后形成新的细胞膜（植物细胞还形成细胞壁）。"
    },
    {
        id: 37, type: "choice", unit: "unit2", difficulty: "hard", score: 2,
        content: "用显微镜观察时，目镜为10×，物镜为40×，则物像放大倍数是（　　）",
        options: ["A. 50倍", "B. 400倍", "C. 4倍", "D. 30倍"],
        answer: "B",
        analysis: "显微镜的放大倍数=目镜放大倍数×物镜放大倍数=10×40=400倍。"
    },
    {
        id: 38, type: "choice", unit: "unit2", difficulty: "medium", score: 2,
        content: "控制物质进出细胞的结构是（　　）",
        options: ["A. 细胞壁", "B. 细胞膜", "C. 细胞质", "D. 细胞核"],
        answer: "B",
        analysis: "细胞膜具有选择透过性，能控制物质进出细胞，保护细胞内部结构。"
    },
    {
        id: 39, type: "choice", unit: "unit2", difficulty: "easy", score: 2,
        content: "西瓜甘甜可口，糖分主要存在于细胞的（　　）",
        options: ["A. 细胞壁", "B. 细胞膜", "C. 液泡", "D. 叶绿体"],
        answer: "C",
        analysis: "液泡中含有细胞液，细胞液中溶解有多种物质，如糖分、色素等。"
    },
    {
        id: 40, type: "choice", unit: "unit2", difficulty: "medium", score: 2,
        content: "遗传信息的载体是（　　）",
        options: ["A. 蛋白质", "B. DNA", "C. 染色体", "D. 细胞核"],
        answer: "B",
        analysis: "DNA是遗传信息的载体，染色体由DNA和蛋白质组成，细胞核是遗传信息库。"
    }
);

// ========== 第三单元：生物体的结构层次 ==========
questionBank.questions.push(
    {
        id: 41, type: "choice", unit: "unit3", difficulty: "easy", score: 2,
        content: "人体的四种基本组织不包括（　　）",
        options: ["A. 上皮组织", "B. 肌肉组织", "C. 分生组织", "D. 神经组织"],
        answer: "C",
        analysis: "人体的四种基本组织是上皮组织、肌肉组织、结缔组织和神经组织。分生组织是植物特有的。"
    },
    {
        id: 42, type: "choice", unit: "unit3", difficulty: "medium", score: 2,
        content: "下列结构层次中，植物体没有的是（　　）",
        options: ["A. 细胞", "B. 组织", "C. 器官", "D. 系统"],
        answer: "D",
        analysis: "植物体的结构层次是：细胞→组织→器官→植物体，没有系统这一层次。"
    },
    {
        id: 43, type: "choice", unit: "unit3", difficulty: "easy", score: 2,
        content: "番茄果肉属于（　　）",
        options: ["A. 保护组织", "B. 营养组织", "C. 输导组织", "D. 分生组织"],
        answer: "B",
        analysis: "番茄果肉细胞壁薄，液泡大，储存营养物质，属于营养组织。"
    },
    {
        id: 44, type: "choice", unit: "unit3", difficulty: "medium", score: 2,
        content: "血液属于（　　）",
        options: ["A. 上皮组织", "B. 肌肉组织", "C. 结缔组织", "D. 神经组织"],
        answer: "C",
        analysis: "血液由血浆和血细胞组成，细胞间隙大，有大量细胞间质，属于结缔组织。"
    }
);

// ========== 第四单元：绿色植物 ==========
questionBank.questions.push(
    {
        id: 45, type: "choice", unit: "unit4", difficulty: "easy", score: 2,
        content: "种子萌发时最先突破种皮的结构是（　　）",
        options: ["A. 胚芽", "B. 胚轴", "C. 胚根", "D. 子叶"],
        answer: "C",
        analysis: "种子萌发时，胚根最先突破种皮发育成根，然后胚芽发育成茎和叶。"
    },
    {
        id: 46, type: "choice", unit: "unit4", difficulty: "medium", score: 2,
        content: "植物体内运输水分和无机盐的结构是（　　）",
        options: ["A. 导管", "B. 筛管", "C. 气孔", "D. 表皮"],
        answer: "A",
        analysis: "导管运输水分和无机盐，方向是从下往上；筛管运输有机物，方向是从上往下。"
    },
    {
        id: 47, type: "choice", unit: "unit4", difficulty: "hard", score: 2,
        content: "将一株植物放在密闭的玻璃罩内，在黑暗中放置一昼夜后，玻璃罩内气体成分的变化是（　　）",
        options: ["A. 氧气增多，二氧化碳减少", "B. 氧气减少，二氧化碳增多", "C. 氧气和二氧化碳都增多", "D. 氧气和二氧化碳都减少"],
        answer: "B",
        analysis: "黑暗中植物只进行呼吸作用，消耗氧气，产生二氧化碳，所以氧气减少，二氧化碳增多。"
    },
    {
        id: 48, type: "choice", unit: "unit4", difficulty: "medium", score: 2,
        content: "蒸腾作用的主要器官是（　　）",
        options: ["A. 根", "B. 茎", "C. 叶", "D. 花"],
        answer: "C",
        analysis: "叶是蒸腾作用的主要器官，叶片上的气孔是水分散失的门户。"
    },
    {
        id: 49, type: "choice", unit: "unit4", difficulty: "easy", score: 2,
        content: "下列属于裸子植物的是（　　）",
        options: ["A. 水稻", "B. 松树", "C. 桃树", "D. 玉米"],
        answer: "B",
        analysis: "松树的种子裸露，没有果皮包被，属于裸子植物。水稻、桃树、玉米都是被子植物。"
    },
    {
        id: 50, type: "choice", unit: "unit4", difficulty: "medium", score: 2,
        content: "根尖吸收水分和无机盐的主要部位是（　　）",
        options: ["A. 根冠", "B. 分生区", "C. 伸长区", "D. 成熟区"],
        answer: "D",
        analysis: "成熟区有大量根毛，增大了吸收面积，是吸收水分和无机盐的主要部位。"
    }
);

// ========== 第五单元：人体的营养 ==========
questionBank.questions.push(
    {
        id: 51, type: "choice", unit: "unit5", difficulty: "easy", score: 2,
        content: "人体最重要的供能物质是（　　）",
        options: ["A. 蛋白质", "B. 糖类", "C. 脂肪", "D. 维生素"],
        answer: "B",
        analysis: "糖类是人体最重要的供能物质，脂肪是储能物质，蛋白质主要是构成细胞的基本物质。"
    },
    {
        id: 52, type: "choice", unit: "unit5", difficulty: "medium", score: 2,
        content: "蛋白质消化的起始部位是（　　）",
        options: ["A. 口腔", "B. 胃", "C. 小肠", "D. 大肠"],
        answer: "B",
        analysis: "蛋白质在胃中开始被胃蛋白酶初步消化，在小肠中被彻底消化成氨基酸。"
    },
    {
        id: 53, type: "choice", unit: "unit5", difficulty: "easy", score: 2,
        content: "缺乏维生素A会导致（　　）",
        options: ["A. 坏血病", "B. 夜盲症", "C. 脚气病", "D. 佝偻病"],
        answer: "B",
        analysis: "缺乏维生素A导致夜盲症，缺乏维生素C导致坏血病，缺乏维生素B1导致脚气病，缺乏维生素D导致佝偻病。"
    },
    {
        id: 54, type: "choice", unit: "unit5", difficulty: "hard", score: 2,
        content: "下列消化液中，不含消化酶的是（　　）",
        options: ["A. 唾液", "B. 胃液", "C. 胆汁", "D. 肠液"],
        answer: "C",
        analysis: "胆汁由肝脏分泌，不含消化酶，但能乳化脂肪，促进脂肪的消化。"
    },
    {
        id: 55, type: "choice", unit: "unit5", difficulty: "medium", score: 2,
        content: "小肠绒毛的作用是（　　）",
        options: ["A. 增大消化面积", "B. 增大吸收面积", "C. 分泌消化液", "D. 蠕动推进食物"],
        answer: "B",
        analysis: "小肠绒毛大大增加了小肠内壁的表面积，有利于营养物质的吸收。"
    }
);

// ========== 第六单元：人体的呼吸 ==========
questionBank.questions.push(
    {
        id: 56, type: "choice", unit: "unit6", difficulty: "easy", score: 2,
        content: "人体呼吸系统的主要器官是（　　）",
        options: ["A. 鼻腔", "B. 咽", "C. 气管", "D. 肺"],
        answer: "D",
        analysis: "肺是呼吸系统的主要器官，是气体交换的场所。鼻腔、咽、喉、气管、支气管是呼吸道。"
    },
    {
        id: 57, type: "choice", unit: "unit6", difficulty: "medium", score: 2,
        content: "吸气时，膈肌和肋间肌的状态是（　　）",
        options: ["A. 都收缩", "B. 都舒张", "C. 膈肌收缩，肋间肌舒张", "D. 膈肌舒张，肋间肌收缩"],
        answer: "A",
        analysis: "吸气时，膈肌和肋间肌都收缩，胸廓扩大，肺扩张，气体进入肺。"
    },
    {
        id: 58, type: "choice", unit: "unit6", difficulty: "hard", score: 2,
        content: "人体呼出的气体与吸入的气体相比（　　）",
        options: ["A. 氧气增多，二氧化碳减少", "B. 氧气减少，二氧化碳增多", "C. 氧气和二氧化碳都增多", "D. 氧气和二氧化碳含量不变"],
        answer: "B",
        analysis: "呼出气体中氧气含量约16%，二氧化碳约4%；吸入气体中氧气约21%，二氧化碳约0.03%。"
    },
    {
        id: 59, type: "choice", unit: "unit6", difficulty: "medium", score: 2,
        content: "肺泡适于气体交换的特点不包括（　　）",
        options: ["A. 肺泡数量多", "B. 肺泡壁很薄", "C. 肺泡外包绕毛细血管", "D. 肺泡内有纤毛"],
        answer: "D",
        analysis: "肺泡数量多、壁薄、外有毛细血管都有利于气体交换。肺泡内没有纤毛，纤毛在气管内壁。"
    }
);

// ========== 第七单元：人体内物质的运输 ==========
questionBank.questions.push(
    {
        id: 60, type: "choice", unit: "unit7", difficulty: "easy", score: 2,
        content: "血液的组成包括（　　）",
        options: ["A. 血浆和血细胞", "B. 红细胞和白细胞", "C. 血小板和血浆", "D. 红细胞和血小板"],
        answer: "A",
        analysis: "血液由血浆和血细胞组成，血细胞包括红细胞、白细胞和血小板。"
    },
    {
        id: 61, type: "choice", unit: "unit7", difficulty: "medium", score: 2,
        content: "具有运输氧气功能的血细胞是（　　）",
        options: ["A. 红细胞", "B. 白细胞", "C. 血小板", "D. 血浆"],
        answer: "A",
        analysis: "红细胞含有血红蛋白，能与氧结合运输氧气。白细胞有防御功能，血小板有止血凝血功能。"
    },
    {
        id: 62, type: "choice", unit: "unit7", difficulty: "hard", score: 2,
        content: "心脏四个腔中，壁最厚的是（　　）",
        options: ["A. 左心房", "B. 右心房", "C. 左心室", "D. 右心室"],
        answer: "C",
        analysis: "左心室壁最厚，因为它要将血液泵到全身各处，需要较大的收缩力。"
    },
    {
        id: 63, type: "choice", unit: "unit7", difficulty: "medium", score: 2,
        content: "动脉血是指（　　）",
        options: ["A. 动脉中流动的血液", "B. 含氧丰富、颜色鲜红的血液", "C. 静脉中流动的血液", "D. 含二氧化碳多的血液"],
        answer: "B",
        analysis: "动脉血是含氧丰富、颜色鲜红的血液，不一定在动脉中流动（如肺静脉中流动脉血）。"
    },
    {
        id: 64, type: "choice", unit: "unit7", difficulty: "easy", score: 2,
        content: "输血时应以输入同型血为原则，紧急情况下O型血可以少量输给（　　）",
        options: ["A. A型血的人", "B. B型血的人", "C. AB型血的人", "D. 任何血型的人"],
        answer: "D",
        analysis: "O型血是万能输血者，紧急情况下可以少量输给任何血型的人。AB型是万能受血者。"
    }
);

// ========== 第八单元：人体的排泄 ==========
questionBank.questions.push(
    {
        id: 65, type: "choice", unit: "unit8", difficulty: "easy", score: 2,
        content: "肾脏的结构和功能单位是（　　）",
        options: ["A. 肾小球", "B. 肾小囊", "C. 肾小管", "D. 肾单位"],
        answer: "D",
        analysis: "肾单位是肾脏的结构和功能单位，由肾小球、肾小囊和肾小管组成。"
    },
    {
        id: 66, type: "choice", unit: "unit8", difficulty: "medium", score: 2,
        content: "尿液形成的两个过程是（　　）",
        options: ["A. 过滤和吸收", "B. 过滤和重吸收", "C. 分泌和吸收", "D. 分泌和重吸收"],
        answer: "B",
        analysis: "尿液形成包括肾小球的过滤作用和肾小管的重吸收作用两个过程。"
    },
    {
        id: 67, type: "choice", unit: "unit8", difficulty: "hard", score: 2,
        content: "正常情况下，原尿中有而尿液中没有的物质是（　　）",
        options: ["A. 水", "B. 无机盐", "C. 葡萄糖", "D. 尿素"],
        answer: "C",
        analysis: "葡萄糖在肾小管处被全部重吸收，所以正常尿液中没有葡萄糖。"
    },
    {
        id: 68, type: "choice", unit: "unit8", difficulty: "medium", score: 2,
        content: "人体排泄的途径不包括（　　）",
        options: ["A. 排尿", "B. 排汗", "C. 呼气", "D. 排便"],
        answer: "D",
        analysis: "排便是排出食物残渣，属于排遗，不是排泄。排泄是排出代谢废物。"
    }
);

// ========== 第九单元：人体生命活动的调节 ==========
questionBank.questions.push(
    {
        id: 69, type: "choice", unit: "unit9", difficulty: "easy", score: 2,
        content: "人体神经系统的中枢部分包括（　　）",
        options: ["A. 脑和脊髓", "B. 脑神经和脊神经", "C. 大脑和小脑", "D. 脑干和脊髓"],
        answer: "A",
        analysis: "神经系统由中枢神经系统和周围神经系统组成。中枢神经系统包括脑和脊髓。"
    },
    {
        id: 70, type: "choice", unit: "unit9", difficulty: "medium", score: 2,
        content: "下列反射中，属于条件反射的是（　　）",
        options: ["A. 眨眼反射", "B. 膝跳反射", "C. 望梅止渴", "D. 缩手反射"],
        answer: "C",
        analysis: "望梅止渴是后天学习获得的条件反射。眨眼、膝跳、缩手都是先天的非条件反射。"
    },
    {
        id: 71, type: "choice", unit: "unit9", difficulty: "hard", score: 2,
        content: "人体内分泌腺分泌的激素直接进入（　　）",
        options: ["A. 消化道", "B. 体腔", "C. 血液", "D. 组织液"],
        answer: "C",
        analysis: "内分泌腺没有导管，分泌的激素直接进入血液，随血液循环运送到全身。"
    },
    {
        id: 72, type: "choice", unit: "unit9", difficulty: "medium", score: 2,
        content: "幼年时期生长激素分泌不足会导致（　　）",
        options: ["A. 巨人症", "B. 侏儒症", "C. 呆小症", "D. 糖尿病"],
        answer: "B",
        analysis: "幼年生长激素不足导致侏儒症，过多导致巨人症。甲状腺激素不足导致呆小症。"
    },
    {
        id: 73, type: "choice", unit: "unit9", difficulty: "easy", score: 2,
        content: "眼球中能调节进入眼内光线多少的结构是（　　）",
        options: ["A. 角膜", "B. 瞳孔", "C. 晶状体", "D. 视网膜"],
        answer: "B",
        analysis: "瞳孔能调节进入眼内光线的多少，光线强时瞳孔缩小，光线弱时瞳孔放大。"
    },
    {
        id: 74, type: "choice", unit: "unit9", difficulty: "medium", score: 2,
        content: "近视眼的成因是（　　）",
        options: ["A. 晶状体曲度过大或眼球前后径过长", "B. 晶状体曲度过小或眼球前后径过短", "C. 角膜曲度过大", "D. 视网膜感光能力下降"],
        answer: "A",
        analysis: "近视眼是晶状体曲度过大或眼球前后径过长，导致物像落在视网膜前方。"
    }
);

// ========== 第十单元：生物的生殖和发育 ==========
questionBank.questions.push(
    {
        id: 75, type: "choice", unit: "unit10", difficulty: "easy", score: 2,
        content: "人体发育的起点是（　　）",
        options: ["A. 卵细胞", "B. 精子", "C. 受精卵", "D. 胚胎"],
        answer: "C",
        analysis: "受精卵是新生命的起点，由精子和卵细胞结合形成。"
    },
    {
        id: 76, type: "choice", unit: "unit10", difficulty: "medium", score: 2,
        content: "胎儿与母体进行物质交换的结构是（　　）",
        options: ["A. 子宫", "B. 胎盘", "C. 脐带", "D. 羊水"],
        answer: "B",
        analysis: "胎盘是胎儿与母体进行物质交换的器官，通过脐带与胎儿相连。"
    },
    {
        id: 77, type: "choice", unit: "unit10", difficulty: "easy", score: 2,
        content: "下列属于无性生殖的是（　　）",
        options: ["A. 种子繁殖", "B. 扦插", "C. 试管婴儿", "D. 人工授粉"],
        answer: "B",
        analysis: "扦插是无性生殖，不经过两性生殖细胞的结合。种子繁殖、试管婴儿、人工授粉都是有性生殖。"
    },
    {
        id: 78, type: "choice", unit: "unit10", difficulty: "hard", score: 2,
        content: "家蚕的发育过程是（　　）",
        options: ["A. 卵→幼虫→成虫", "B. 卵→幼虫→蛹→成虫", "C. 卵→蛹→幼虫→成虫", "D. 卵→若虫→成虫"],
        answer: "B",
        analysis: "家蚕属于完全变态发育，经历卵、幼虫、蛹、成虫四个时期。"
    },
    {
        id: 79, type: "choice", unit: "unit10", difficulty: "medium", score: 2,
        content: "鸟卵中将来发育成雏鸟的结构是（　　）",
        options: ["A. 卵黄", "B. 卵白", "C. 胚盘", "D. 卵壳"],
        answer: "C",
        analysis: "胚盘是鸟卵中含有细胞核的部分，是胚胎发育的部位，将来发育成雏鸟。"
    }
);

// ========== 第十一单元：生物的遗传和变异 ==========
questionBank.questions.push(
    {
        id: 80, type: "choice", unit: "unit11", difficulty: "easy", score: 2,
        content: "人体细胞中染色体的数目是（　　）",
        options: ["A. 23条", "B. 46条", "C. 23对", "D. B和C都对"],
        answer: "D",
        analysis: "人体细胞中有23对（46条）染色体，其中22对常染色体，1对性染色体。"
    },
    {
        id: 81, type: "choice", unit: "unit11", difficulty: "medium", score: 2,
        content: "基因是（　　）",
        options: ["A. DNA分子", "B. 染色体", "C. 有遗传效应的DNA片段", "D. 蛋白质"],
        answer: "C",
        analysis: "基因是有遗传效应的DNA片段，是控制生物性状的基本单位。"
    },
    {
        id: 82, type: "choice", unit: "unit11", difficulty: "hard", score: 2,
        content: "一对正常夫妇生了一个患白化病的孩子，则这对夫妇的基因型是（　　）",
        options: ["A. AA和AA", "B. AA和Aa", "C. Aa和Aa", "D. aa和aa"],
        answer: "C",
        analysis: "白化病是隐性遗传病，患者基因型为aa。正常父母能生出患病孩子，说明都是Aa。"
    },
    {
        id: 83, type: "choice", unit: "unit11", difficulty: "medium", score: 2,
        content: "男性的性染色体组成是（　　）",
        options: ["A. XX", "B. XY", "C. YY", "D. XO"],
        answer: "B",
        analysis: "男性性染色体为XY，女性为XX。Y染色体决定男性性别。"
    },
    {
        id: 84, type: "choice", unit: "unit11", difficulty: "easy", score: 2,
        content: "下列属于可遗传变异的是（　　）",
        options: ["A. 晒黑的皮肤", "B. 锻炼后发达的肌肉", "C. 基因突变", "D. 整容后的双眼皮"],
        answer: "C",
        analysis: "可遗传变异是由遗传物质改变引起的，包括基因突变、基因重组、染色体变异。"
    }
);

// ========== 第十二单元：生物的进化 ==========
questionBank.questions.push(
    {
        id: 85, type: "choice", unit: "unit12", difficulty: "easy", score: 2,
        content: "地球上最早出现的生物是（　　）",
        options: ["A. 原始的单细胞生物", "B. 原始的多细胞生物", "C. 原始的藻类", "D. 原始的鱼类"],
        answer: "A",
        analysis: "地球上最早出现的生物是原始的单细胞生物，大约在35亿年前出现。"
    },
    {
        id: 86, type: "choice", unit: "unit12", difficulty: "medium", score: 2,
        content: "生物进化的证据中，最直接的证据是（　　）",
        options: ["A. 比较解剖学证据", "B. 胚胎学证据", "C. 化石", "D. 分子生物学证据"],
        answer: "C",
        analysis: "化石是保存在地层中的古生物遗体、遗物或遗迹，是研究生物进化最直接的证据。"
    },
    {
        id: 87, type: "choice", unit: "unit12", difficulty: "hard", score: 2,
        content: "自然选择学说的提出者是（　　）",
        options: ["A. 孟德尔", "B. 达尔文", "C. 拉马克", "D. 林奈"],
        answer: "B",
        analysis: "达尔文提出了自然选择学说，认为自然选择是生物进化的主要动力。"
    },
    {
        id: 88, type: "choice", unit: "unit12", difficulty: "medium", score: 2,
        content: "长颈鹿的长颈形成的原因是（　　）",
        options: ["A. 经常伸长脖子吃树叶", "B. 自然选择的结果", "C. 人工选择的结果", "D. 定向变异的结果"],
        answer: "B",
        analysis: "长颈鹿的长颈是自然选择的结果，颈长的个体更容易获得食物而存活繁殖。"
    }
);

// ========== 第十三单元：生物与环境 ==========
questionBank.questions.push(
    {
        id: 89, type: "choice", unit: "unit13", difficulty: "easy", score: 2,
        content: "生态系统中的生产者主要是（　　）",
        options: ["A. 动物", "B. 绿色植物", "C. 细菌", "D. 真菌"],
        answer: "B",
        analysis: "绿色植物能进行光合作用制造有机物，是生态系统中的生产者。"
    },
    {
        id: 90, type: "choice", unit: "unit13", difficulty: "medium", score: 2,
        content: "在生态系统中，物质循环和能量流动的渠道是（　　）",
        options: ["A. 食物链和食物网", "B. 生产者", "C. 消费者", "D. 分解者"],
        answer: "A",
        analysis: "食物链和食物网是生态系统中物质循环和能量流动的渠道。"
    },
    {
        id: 91, type: "choice", unit: "unit13", difficulty: "hard", score: 2,
        content: "下列关于生态系统能量流动的叙述，正确的是（　　）",
        options: ["A. 能量可以循环利用", "B. 能量沿食物链单向流动、逐级递减", "C. 能量在各营养级间传递效率为100%", "D. 消费者获得的能量最多"],
        answer: "B",
        analysis: "能量沿食物链单向流动、逐级递减，传递效率约为10%-20%，不能循环利用。"
    },
    {
        id: 92, type: "choice", unit: "unit13", difficulty: "medium", score: 2,
        content: "下列属于生态系统的是（　　）",
        options: ["A. 一片森林中的所有树木", "B. 一个池塘", "C. 草原上的所有动物", "D. 一条河流中的所有鱼"],
        answer: "B",
        analysis: "生态系统包括生物群落和非生物环境。一个池塘包含了生物和非生物环境，是生态系统。"
    },
    {
        id: 93, type: "choice", unit: "unit13", difficulty: "easy", score: 2,
        content: "地球上最大的生态系统是（　　）",
        options: ["A. 海洋生态系统", "B. 森林生态系统", "C. 生物圈", "D. 草原生态系统"],
        answer: "C",
        analysis: "生物圈是地球上最大的生态系统，包括地球上所有的生物和它们生活的环境。"
    }
);

// ========== 更多判断题 ==========
questionBank.questions.push(
    {
        id: 99, type: "judge", unit: "unit2", difficulty: "easy", score: 2,
        content: "所有的生物都是由细胞构成的。",
        answer: "错误",
        analysis: "病毒没有细胞结构，但病毒是生物。所以不是所有生物都由细胞构成。"
    },
    {
        id: 100, type: "judge", unit: "unit4", difficulty: "medium", score: 2,
        content: "植物的所有细胞都能进行光合作用。",
        answer: "错误",
        analysis: "只有含叶绿体的细胞才能进行光合作用，如根细胞没有叶绿体，不能进行光合作用。"
    },
    {
        id: 101, type: "judge", unit: "unit7", difficulty: "medium", score: 2,
        content: "动脉中流动的一定是动脉血。",
        answer: "错误",
        analysis: "肺动脉中流动的是静脉血。动脉血和静脉血是按含氧量区分的，不是按血管类型。"
    },
    {
        id: 102, type: "judge", unit: "unit9", difficulty: "easy", score: 2,
        content: "人体的一切生命活动都受神经系统的调节。",
        answer: "错误",
        analysis: "人体生命活动主要受神经系统调节，同时也受激素调节，是神经调节和体液调节共同作用。"
    },
    {
        id: 103, type: "judge", unit: "unit10", difficulty: "easy", score: 2,
        content: "克隆羊多莉是有性生殖的产物。",
        answer: "错误",
        analysis: "克隆是无性生殖，没有经过两性生殖细胞的结合。"
    },
    {
        id: 104, type: "judge", unit: "unit12", difficulty: "medium", score: 2,
        content: "生物进化的方向是由低等到高等、由简单到复杂、由水生到陆生。",
        answer: "正确",
        analysis: "这是生物进化的总体趋势，但不是所有生物都遵循这个规律。"
    }
);

// ========== 更多简答题 ==========
questionBank.questions.push(
    {
        id: 105, type: "short", unit: "unit2", difficulty: "medium", score: 5,
        content: "请说明细胞分裂的过程和意义。",
        answer: "过程：①细胞核先分裂，染色体复制后平均分配到两个新细胞核中；②细胞质分裂；③形成新的细胞膜（植物细胞还形成细胞壁）。\n意义：①使单细胞生物个体数目增多；②使多细胞生物体内细胞数目增多，是生物体生长、发育、繁殖的基础。",
        analysis: "细胞分裂保证了遗传物质的稳定传递。"
    },
    {
        id: 106, type: "short", unit: "unit7", difficulty: "hard", score: 5,
        content: "请描述体循环的路径，并说明血液成分的变化。",
        answer: "路径：左心室→主动脉→全身各级动脉→全身毛细血管网→全身各级静脉→上、下腔静脉→右心房。\n血液变化：在全身毛细血管处，血液中的氧气和营养物质进入组织细胞，组织细胞产生的二氧化碳和废物进入血液，动脉血变成静脉血。",
        analysis: "体循环为全身组织细胞运送氧气和营养物质，带走代谢废物。"
    },
    {
        id: 107, type: "short", unit: "unit13", difficulty: "medium", score: 5,
        content: "什么是生态平衡？生态系统为什么具有一定的自我调节能力？",
        answer: "生态平衡：生态系统中各种生物的数量和所占比例总是维持在相对稳定的状态。\n自我调节能力的原因：生态系统中的生物种类越多，营养结构越复杂，自我调节能力就越强。食物链和食物网中的生物相互制约、相互依存，使各种生物的数量保持相对稳定。",
        analysis: "生态系统的自我调节能力是有限的，超过限度会导致生态平衡被破坏。"
    }
);

// ========== 更多实验探究题 ==========
questionBank.questions.push(
    {
        id: 108, type: "experiment", unit: "unit2", difficulty: "medium", score: 6,
        content: "观察洋葱表皮细胞实验：\n(1) 制作临时装片的步骤是什么？\n(2) 为什么要用碘液染色？\n(3) 在显微镜下能观察到哪些结构？",
        answer: "(1) 擦→滴→撕→展→盖→染。即：擦拭载玻片和盖玻片→滴清水→撕取洋葱表皮→展平→盖上盖玻片→滴加碘液染色。\n(2) 碘液能使细胞核着色，便于观察。\n(3) 能观察到细胞壁、细胞膜、细胞质、细胞核、液泡。叶绿体在洋葱表皮细胞中没有。",
        analysis: "这是观察植物细胞的经典实验，掌握临时装片的制作方法很重要。"
    },
    {
        id: 109, type: "experiment", unit: "unit6", difficulty: "hard", score: 8,
        content: "验证人体呼出气体中二氧化碳含量增多的实验：\n准备两个锥形瓶，分别装入等量澄清石灰水，用玻璃管向甲瓶吹气，用打气筒向乙瓶打入空气。\n(1) 实验现象是什么？\n(2) 该实验的变量是什么？\n(3) 为什么要设置乙瓶？\n(4) 实验结论是什么？",
        answer: "(1) 甲瓶石灰水变浑浊，乙瓶石灰水不变浑浊（或变化不明显）。\n(2) 变量是气体中二氧化碳的含量。\n(3) 乙瓶是对照组，用于与甲瓶进行对比，排除其他因素的干扰。\n(4) 人体呼出的气体中二氧化碳含量比吸入的空气中多。",
        analysis: "二氧化碳能使澄清石灰水变浑浊，这是检验二氧化碳的常用方法。"
    },
    {
        id: 110, type: "experiment", unit: "unit9", difficulty: "medium", score: 6,
        content: "膝跳反射实验：\n(1) 实验时被测者应处于什么状态？\n(2) 叩击的部位是哪里？\n(3) 实验现象是什么？\n(4) 膝跳反射属于什么类型的反射？",
        answer: "(1) 被测者坐在椅子上，一条腿自然搭在另一条腿上，全身放松，不要注意自己的腿。\n(2) 叩击膝盖下方的韧带（髌韧带）。\n(3) 小腿突然向前跳起。\n(4) 膝跳反射是非条件反射（先天性反射），反射中枢在脊髓。",
        analysis: "膝跳反射是最简单的反射之一，用于检查神经系统功能。"
    }
);

// ========== 更多选择题补充 ==========
questionBank.questions.push(
    {
        id: 111, type: "choice", unit: "unit1", difficulty: "hard", score: 2,
        content: "在\"草→蝗虫→青蛙→蛇→鹰\"这条食物链中，若鹰的体重增加1kg，至少需要消耗草（　　）",
        options: ["A. 10kg", "B. 100kg", "C. 1000kg", "D. 10000kg"],
        answer: "C",
        analysis: "能量传递效率按最高20%计算，鹰是第五营养级，需要草：1÷0.2÷0.2÷0.2÷0.2=625kg，按10%计算需要10000kg，所以至少需要625kg，选C最接近。"
    },
    {
        id: 112, type: "choice", unit: "unit2", difficulty: "hard", score: 2,
        content: "某细胞有8条染色体，经过一次分裂后，形成的新细胞中染色体数目是（　　）",
        options: ["A. 4条", "B. 8条", "C. 16条", "D. 不确定"],
        answer: "B",
        analysis: "细胞分裂时染色体先复制后平均分配，所以新细胞染色体数目与原细胞相同。"
    },
    {
        id: 113, type: "choice", unit: "unit4", difficulty: "medium", score: 2,
        content: "移栽植物时常在阴天或傍晚进行，并剪去部分枝叶，这样做的目的是（　　）",
        options: ["A. 减少光合作用", "B. 减少呼吸作用", "C. 减少蒸腾作用", "D. 减少水分吸收"],
        answer: "C",
        analysis: "阴天或傍晚光照弱、温度低，剪去枝叶减少蒸腾面积，都是为了减少蒸腾作用，提高成活率。"
    },
    {
        id: 114, type: "choice", unit: "unit5", difficulty: "hard", score: 2,
        content: "某人因车祸大量失血，需要输血。该人血型为B型，应输入（　　）",
        options: ["A. A型血", "B. B型血", "C. O型血", "D. AB型血"],
        answer: "B",
        analysis: "输血原则是输同型血。B型血的人应输入B型血，紧急情况下可少量输入O型血。"
    },
    {
        id: 115, type: "choice", unit: "unit11", difficulty: "hard", score: 2,
        content: "一对夫妇，父亲色盲，母亲正常但其父亲是色盲患者。他们生一个色盲男孩的概率是（　　）",
        options: ["A. 1/2", "B. 1/4", "C. 1/8", "D. 0"],
        answer: "B",
        analysis: "色盲是X染色体隐性遗传。父亲XbY，母亲XBXb（携带者）。儿子基因型：XBY或XbY各1/2，色盲男孩概率=1/2×1/2=1/4。"
    }
);

// ========== 综合题库扩充 ==========
questionBank.questions.push(
    {
        id: 116, type: "choice", unit: "unit1", difficulty: "medium", score: 2,
        content: "下列不属于生态系统的是（　　）",
        options: ["A. 一片农田", "B. 一条河流", "C. 一群羊", "D. 一个池塘"],
        answer: "C",
        analysis: "生态系统包括生物群落和非生物环境。一群羊只是生物的一部分，不是生态系统。"
    },
    {
        id: 117, type: "choice", unit: "unit2", difficulty: "easy", score: 2,
        content: "细胞核中储存遗传信息的物质是（　　）",
        options: ["A. 蛋白质", "B. 糖类", "C. DNA", "D. 脂肪"],
        answer: "C",
        analysis: "DNA是遗传物质，储存着遗传信息，主要存在于细胞核的染色体上。"
    },
    {
        id: 118, type: "choice", unit: "unit3", difficulty: "medium", score: 2,
        content: "下列属于植物营养器官的是（　　）",
        options: ["A. 花", "B. 果实", "C. 种子", "D. 根"],
        answer: "D",
        analysis: "植物的营养器官包括根、茎、叶；生殖器官包括花、果实、种子。"
    },
    {
        id: 119, type: "choice", unit: "unit4", difficulty: "hard", score: 2,
        content: "将金鱼藻放在盛有清水的烧杯中，用漏斗罩住，再用试管收集气体。该实验验证的是（　　）",
        options: ["A. 光合作用产生氧气", "B. 光合作用需要二氧化碳", "C. 呼吸作用产生二氧化碳", "D. 蒸腾作用散失水分"],
        answer: "A",
        analysis: "金鱼藻在光下进行光合作用，产生的氧气以气泡形式释放，可用试管收集。"
    },
    {
        id: 120, type: "choice", unit: "unit5", difficulty: "medium", score: 2,
        content: "人体内最大的消化腺是（　　）",
        options: ["A. 唾液腺", "B. 胃腺", "C. 肝脏", "D. 胰腺"],
        answer: "C",
        analysis: "肝脏是人体最大的消化腺，分泌胆汁，储存在胆囊中。"
    },
    {
        id: 121, type: "choice", unit: "unit6", difficulty: "easy", score: 2,
        content: "呼吸道不具有的功能是（　　）",
        options: ["A. 温暖空气", "B. 湿润空气", "C. 清洁空气", "D. 气体交换"],
        answer: "D",
        analysis: "呼吸道的功能是温暖、湿润、清洁空气，气体交换在肺泡进行。"
    },
    {
        id: 122, type: "choice", unit: "unit7", difficulty: "medium", score: 2,
        content: "下列血管中，流动着动脉血的是（　　）",
        options: ["A. 肺动脉", "B. 上腔静脉", "C. 肺静脉", "D. 下腔静脉"],
        answer: "C",
        analysis: "肺静脉中流动的是经过肺部气体交换后的动脉血。"
    },
    {
        id: 123, type: "choice", unit: "unit8", difficulty: "easy", score: 2,
        content: "人体内产生尿素的器官是（　　）",
        options: ["A. 肾脏", "B. 肝脏", "C. 大肠", "D. 皮肤"],
        answer: "B",
        analysis: "尿素是蛋白质代谢的产物，在肝脏中产生，通过肾脏排出体外。"
    },
    {
        id: 124, type: "choice", unit: "unit9", difficulty: "hard", score: 2,
        content: "下列腺体中，既是内分泌腺又是外分泌腺的是（　　）",
        options: ["A. 甲状腺", "B. 垂体", "C. 胰腺", "D. 肾上腺"],
        answer: "C",
        analysis: "胰腺既能分泌胰液（外分泌），又能分泌胰岛素（内分泌），是混合腺。"
    },
    {
        id: 125, type: "choice", unit: "unit10", difficulty: "medium", score: 2,
        content: "下列属于不完全变态发育的昆虫是（　　）",
        options: ["A. 蜜蜂", "B. 蝴蝶", "C. 蝗虫", "D. 蚊子"],
        answer: "C",
        analysis: "蝗虫发育经历卵、若虫、成虫三个阶段，属于不完全变态发育。"
    }
);

// 更多选择题
questionBank.questions.push(
    {
        id: 126, type: "choice", unit: "unit11", difficulty: "medium", score: 2,
        content: "下列性状中，属于显性性状的判断依据是（　　）",
        options: ["A. 在后代中出现频率高", "B. 在子一代中表现出来的性状", "C. 在自然界中常见的性状", "D. 对生物生存有利的性状"],
        answer: "B",
        analysis: "杂交后代子一代中表现出来的性状是显性性状，被掩盖的是隐性性状。"
    },
    {
        id: 127, type: "choice", unit: "unit12", difficulty: "easy", score: 2,
        content: "下列动物中，最早出现在地球上的是（　　）",
        options: ["A. 鱼类", "B. 两栖类", "C. 爬行类", "D. 哺乳类"],
        answer: "A",
        analysis: "动物进化顺序：鱼类→两栖类→爬行类→鸟类和哺乳类。"
    },
    {
        id: 128, type: "choice", unit: "unit13", difficulty: "hard", score: 2,
        content: "在一个由草、兔、狐组成的食物链中，兔获得的能量最终来自（　　）",
        options: ["A. 草", "B. 太阳", "C. 狐", "D. 土壤"],
        answer: "B",
        analysis: "生态系统中能量的最终来源是太阳能，通过生产者的光合作用进入生态系统。"
    },
    {
        id: 129, type: "choice", unit: "unit1", difficulty: "easy", score: 2,
        content: "影响生物生活的非生物因素不包括（　　）",
        options: ["A. 阳光", "B. 温度", "C. 水", "D. 天敌"],
        answer: "D",
        analysis: "非生物因素包括阳光、温度、水、空气等。天敌是生物因素。"
    },
    {
        id: 130, type: "choice", unit: "unit2", difficulty: "medium", score: 2,
        content: "下列关于细胞分化的叙述，正确的是（　　）",
        options: ["A. 细胞分化导致细胞数目增多", "B. 细胞分化导致细胞体积增大", "C. 细胞分化形成不同的组织", "D. 细胞分化改变了遗传物质"],
        answer: "C",
        analysis: "细胞分化是细胞在形态、结构和功能上发生差异的过程，形成不同的组织。"
    }
);

// 更多简答题
questionBank.questions.push(
    {
        id: 134, type: "short", unit: "unit1", difficulty: "medium", score: 5,
        content: "请举例说明生物对环境的适应和生物对环境的影响。",
        answer: "生物对环境的适应：①沙漠中的骆驼刺根系发达，适应干旱环境；②北极熊的白色皮毛，适应冰雪环境；③仙人掌的叶变成刺，减少水分蒸发。\n生物对环境的影响：①蚯蚓使土壤疏松；②植物的蒸腾作用增加空气湿度；③森林能净化空气、调节气候。",
        analysis: "生物与环境相互影响、相互依存。"
    },
    {
        id: 135, type: "short", unit: "unit9", difficulty: "hard", score: 6,
        content: "请比较神经调节和激素调节的特点。",
        answer: "神经调节：①反应速度快；②作用范围准确、局限；③作用时间短暂。\n激素调节：①反应速度较慢；②作用范围较广泛；③作用时间较长。\n两者关系：神经调节和激素调节相互协调、共同调节人体的生命活动。神经系统可以调节内分泌腺的活动，激素也可以影响神经系统的功能。",
        analysis: "人体生命活动主要受神经系统调节，同时也受激素调节。"
    }
);

// 更多实验题
questionBank.questions.push(
    {
        id: 136, type: "experiment", unit: "unit4", difficulty: "hard", score: 8,
        content: "探究\"绿叶在光下制造有机物\"实验：\n材料：天竺葵、黑纸片、酒精、碘液、烧杯、酒精灯等\n(1) 实验前为什么要将植物放在黑暗处一昼夜？\n(2) 用黑纸片遮住叶片一部分的目的是什么？\n(3) 用酒精脱色的目的是什么？为什么要隔水加热？\n(4) 滴加碘液后，叶片遮光部分和见光部分分别呈什么颜色？\n(5) 该实验的结论是什么？",
        answer: "(1) 将叶片中原有的淀粉运走耗尽，排除干扰。\n(2) 设置对照实验，使同一叶片的遮光部分和见光部分形成对照。\n(3) 溶解叶绿素，使叶片脱色，便于观察颜色变化。酒精易燃，隔水加热安全且温度均匀。\n(4) 遮光部分不变蓝（黄白色），见光部分变蓝。\n(5) 绿叶在光下能制造淀粉（有机物），光是光合作用的必要条件。",
        analysis: "这是验证光合作用的经典实验，体现了对照实验的设计原则。"
    },
    {
        id: 137, type: "experiment", unit: "unit7", difficulty: "medium", score: 6,
        content: "观察小鱼尾鳍内血液流动实验：\n(1) 为什么要用尾鳍颜色浅、生命力强的小鱼？\n(2) 用湿棉絮包住小鱼头部和躯干的目的是什么？\n(3) 如何区分动脉、静脉和毛细血管？",
        answer: "(1) 尾鳍颜色浅便于观察血液流动；生命力强的小鱼活动时间长，便于观察。\n(2) 保持小鱼正常呼吸，维持其生命活动，同时限制其活动。\n(3) 动脉：血液由主干流向分支，血流速度快；静脉：血液由分支流向主干，血流速度慢；毛细血管：红细胞单行通过，血流速度最慢。",
        analysis: "这是观察血液循环的经典实验，注意爱护小动物。"
    }
);

// 继续补充选择题
questionBank.questions.push(
    {
        id: 138, type: "choice", unit: "unit3", difficulty: "hard", score: 2,
        content: "下列关于细胞、组织、器官、系统的叙述，正确的是（　　）",
        options: ["A. 细胞是所有生物结构和功能的基本单位", "B. 组织是由形态相似、功能相同的细胞构成", "C. 器官是由不同组织按一定次序构成的", "D. 所有生物都具有系统这一结构层次"],
        answer: "C",
        analysis: "A错，病毒没有细胞结构；B错，应是形态相似、结构和功能相同；D错，植物没有系统。"
    },
    {
        id: 139, type: "choice", unit: "unit5", difficulty: "medium", score: 2,
        content: "下列营养物质中，不能为人体提供能量的是（　　）",
        options: ["A. 糖类", "B. 脂肪", "C. 蛋白质", "D. 无机盐"],
        answer: "D",
        analysis: "糖类、脂肪、蛋白质都能为人体提供能量。无机盐和维生素不能提供能量。"
    },
    {
        id: 140, type: "choice", unit: "unit6", difficulty: "hard", score: 2,
        content: "人在剧烈运动后，呼吸频率加快的原因是（　　）",
        options: ["A. 血液中氧气含量增加", "B. 血液中二氧化碳含量增加", "C. 血液中养料含量减少", "D. 血液中废物含量减少"],
        answer: "B",
        analysis: "剧烈运动时呼吸作用加强，产生大量二氧化碳，刺激呼吸中枢，使呼吸加快。"
    },
    {
        id: 141, type: "choice", unit: "unit7", difficulty: "easy", score: 2,
        content: "成熟的红细胞没有细胞核，这有利于（　　）",
        options: ["A. 携带更多的氧气", "B. 携带更多的养料", "C. 吞噬病菌", "D. 加速凝血"],
        answer: "A",
        analysis: "红细胞没有细胞核，可以容纳更多的血红蛋白，有利于携带更多的氧气。"
    },
    {
        id: 142, type: "choice", unit: "unit8", difficulty: "hard", score: 2,
        content: "某人尿液中出现了葡萄糖，最可能的原因是（　　）",
        options: ["A. 肾小球发生病变", "B. 肾小管发生病变", "C. 输尿管发生病变", "D. 膀胱发生病变"],
        answer: "B",
        analysis: "正常情况下葡萄糖在肾小管被全部重吸收。尿糖说明肾小管重吸收功能障碍。"
    },
    {
        id: 143, type: "choice", unit: "unit9", difficulty: "medium", score: 2,
        content: "下列反射活动中，神经中枢位于大脑皮层的是（　　）",
        options: ["A. 眨眼反射", "B. 膝跳反射", "C. 排尿反射", "D. 听到铃声进教室"],
        answer: "D",
        analysis: "听到铃声进教室是条件反射，神经中枢在大脑皮层。其他都是非条件反射，中枢在脊髓或脑干。"
    },
    {
        id: 144, type: "choice", unit: "unit10", difficulty: "easy", score: 2,
        content: "试管婴儿技术属于（　　）",
        options: ["A. 无性生殖", "B. 有性生殖", "C. 克隆技术", "D. 组织培养"],
        answer: "B",
        analysis: "试管婴儿是体外受精，仍然经过精子和卵细胞的结合，属于有性生殖。"
    },
    {
        id: 145, type: "choice", unit: "unit12", difficulty: "medium", score: 2,
        content: "下列关于自然选择的叙述，错误的是（　　）",
        options: ["A. 自然选择是通过生存斗争实现的", "B. 自然选择保留有利变异，淘汰不利变异", "C. 自然选择决定生物进化的方向", "D. 自然选择使生物产生新的变异"],
        answer: "D",
        analysis: "变异是随机产生的，自然选择只是对已有变异进行选择，不能使生物产生新变异。"
    },
    {
        id: 146, type: "choice", unit: "unit13", difficulty: "medium", score: 2,
        content: "下列措施中，有利于保护生态环境的是（　　）",
        options: ["A. 大量使用农药杀虫", "B. 围湖造田增加耕地", "C. 建立自然保护区", "D. 大量捕杀野生动物"],
        answer: "C",
        analysis: "建立自然保护区是保护生物多样性最有效的措施。"
    },
    {
        id: 147, type: "choice", unit: "unit1", difficulty: "hard", score: 2,
        content: "在一个草原生态系统中，如果过度放牧，最终会导致（　　）",
        options: ["A. 草原生态系统更加稳定", "B. 草原生态系统崩溃", "C. 牧草生长更加旺盛", "D. 食草动物数量增加"],
        answer: "B",
        analysis: "过度放牧超过了生态系统的自我调节能力，会导致草原退化甚至沙漠化。"
    },
    {
        id: 148, type: "choice", unit: "unit2", difficulty: "medium", score: 2,
        content: "下列关于染色体、DNA、基因关系的叙述，正确的是（　　）",
        options: ["A. 染色体就是DNA", "B. 基因就是染色体", "C. 基因是DNA上有遗传效应的片段", "D. 一条染色体上只有一个基因"],
        answer: "C",
        analysis: "染色体由DNA和蛋白质组成，基因是DNA上有遗传效应的片段，一条染色体上有多个基因。"
    },
    {
        id: 149, type: "choice", unit: "unit4", difficulty: "easy", score: 2,
        content: "下列植物中，属于被子植物的是（　　）",
        options: ["A. 银杏", "B. 水杉", "C. 苏铁", "D. 小麦"],
        answer: "D",
        analysis: "小麦的种子外有果皮包被，属于被子植物。银杏、水杉、苏铁都是裸子植物。"
    },
    {
        id: 150, type: "choice", unit: "unit11", difficulty: "hard", score: 2,
        content: "豌豆的高茎（D）对矮茎（d）为显性。杂合高茎豌豆自交，后代中高茎和矮茎的比例是（　　）",
        options: ["A. 1:1", "B. 3:1", "C. 1:3", "D. 2:1"],
        answer: "B",
        analysis: "Dd×Dd→DD:Dd:dd=1:2:1，表现型高茎:矮茎=3:1。"
    }
);
