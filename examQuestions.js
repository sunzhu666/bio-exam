// 中考真题汇编
// 共 1019 道题目

const examQuestions = [
  {
    "id": 70733,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小明游峨眉山时发现景区植被的分布特点为：山脚多为常绿阔叶林，山腰则是落叶阔叶林，而到山顶大多是针叶林。影响植被这种分布的主要因素是（    ）",
    "province": "河北",
    "options": [
      "A. 温度",
      "B. 水分",
      "C. 阳光",
      "D. 空气"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 70734,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是某同学学习了动、植物细胞后画的模式图，下列分析错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 若要表示人的口腔上皮细胞，则用甲表示",
      "B. 若乙为洋葱鳞片叶内表皮细胞，则多画了③",
      "C. 若乙为苦瓜的果皮细胞，则苦味存在于⑤",
      "D. 决定甲乙细胞结构不同的物质存在于⑦"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 70735,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某镇为振兴乡村旅游经济，每年举办“三月桃花节”、“六月摘桃节”，吸引市民纷至沓来赏花摘桃。下图为小红观察到的桃花和桃子的基本结构，叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 桃花的主要结构是③和⑥",
      "B. ①中的花粉落到④上的过程叫做受精",
      "C. 图甲中的⑥将来发育成图乙中的⑨",
      "D. 开花季节如遇阴雨连绵的天气，可通过人工辅助授粉提高桃子产量"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 70736,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年5月20日是第35个中国学生营养日，今年的主题是“奶豆添营养，少油更健康”。下图为中国居民的“平衡膳食宝塔”，以下相关分析错误的是（    ）",
    "province": "河北",
    "options": [
      "A. Ⅰ层食物富含糖类，每日需要量最多",
      "B. 有牙龈出血现象的人可适当增加Ⅱ层食物摄入量",
      "C. Ⅲ层食物能提供丰富的蛋白质，是主要的能量来源",
      "D. 根据今年的主题要求应增加Ⅳ层，减少Ⅴ层食物的摄入"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 70737,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "血液是人体健康的“晴雨表”。右表为某成年男子的血常规报告单，下列判断错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 该男子可能有炎症",
      "B. 抽血后，针眼处血液能正常凝固",
      "C. 该男子应多吃含钙和蛋白质丰富的食物",
      "D. 红细胞有运输作用，白细胞和血小板有防御和保护作用"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 70738,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为人体血液循环简图，其中A~D表示心脏的四个腔，①~④表示血管。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 心脏的四个腔中，肌肉最发达的是C",
      "B. 手背静脉输液，药物最先到达B",
      "C. ④中有瓣膜，能防止血液倒流",
      "D. ①为肺静脉，内流动脉血"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 70739,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生活中微生物可使食物变质或引起疾病，但也可用于食品制作或疾病防治。下列关于微生物与人类的关系，叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 大肠杆菌可污染水源，也可转入基因生产胰岛素",
      "B. 青霉可使面包发霉，也可以提取青霉素治疗疾病",
      "C. 乙肝病毒可使人患乙肝，也可利用它们生产疫苗",
      "D. 有些曲霉可产生致癌物，有些曲霉可以制作食品"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 70740,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物通过生殖和发育世代相续，生生不息。下列相关叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 青蛙的生殖和幼体发育必须在水中进行",
      "B. 嫁接时应当使接穗与砧木的形成层紧密结合",
      "C. 菜豆种子萌发的过程中胚芽最先突破种皮形成茎和叶",
      "D. 人的生殖过程中含X的精子与卵细胞结合形成的受精卵将发育为女孩"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 70741,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于下图四种动物的描述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 甲的体表有贝壳，可分泌产生外套膜",
      "B. 乙体表有外骨骼，可防止水分散失",
      "C. 丙的气体交换发生在肺和气囊",
      "D. 丁在四种动物中结构最复杂"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 70743,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小王上学途中偶遇车祸，发现伤者小腿受伤，鲜红色的血液一股一股地涌出，他应该采取的救助措施是（    ）",
    "province": "河北",
    "options": [
      "A. 迅速拨打120，说明位置、伤情和联系方式",
      "B. 用医用酒精处理伤口即可",
      "C. 受伤血管贴创可贴即可止血",
      "D. 压迫伤口远心端一侧 <img src=\"images/河北_0a14fd_b86b18b9.wmf\"> 血管止血"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 65885,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体的四种基本组织中，具有保护、吸收和分泌功能的是（    ）",
    "province": "河北",
    "options": [
      "A. 肌肉组织",
      "B. 神经组织",
      "C. 上皮组织",
      "D. 结缔组织"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 65886,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "用显微镜观察时，应将所要观察的材料处理成薄而透明的原因是（　　）",
    "province": "河北",
    "options": [
      "A. 易于染色",
      "B. 能让光线透过",
      "C. 防止污染物镜",
      "D. 便于放置在载物台上"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 65887,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列器官中，属于同一个系统的是（    ）",
    "province": "河北",
    "options": [
      "A. ③④",
      "B. ②④",
      "C. ②③",
      "D. ①④"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 65888,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列属于人体内环境的是（    ）",
    "province": "河北",
    "options": [
      "A. 胃液",
      "B. 血浆",
      "C. 唾液",
      "D. 尿液"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 65889,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为显微镜视野中人血涂片（局部），其中对人体有免疫防御功能的血细胞是（　　）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ②",
      "C. ③",
      "D. ④"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 65890,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在神经系统中，组成中枢神经系统的是",
    "province": "河北",
    "options": [
      "A. 脑和脊髓",
      "B. 脑和脑神经",
      "C. 脊髓和脊神经",
      "D. 脑神经和脊神经"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 65891,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为膝跳反射过程示意图，下列叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 接受刺激，产生兴奋的是①",
      "B. 该反射的传出神经是②",
      "C. 该反射的神经中枢在⑤",
      "D. 若事先提醒，膝跳反射的阳性率可能会下降"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 65892,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "正常人用餐后，体内血糖会先上升再下降最后趋于平稳，使血糖浓度下降的激素是（　　）",
    "province": "河北",
    "options": [
      "A. 生长激素",
      "B. 肾上腺素",
      "C. 甲状腺素",
      "D. 胰岛素"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 65893,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于青春期生理变化的叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 肺活量显著增大",
      "B. 心脏收缩能力大大提高",
      "C. 脑的体积迅速增大",
      "D. 第二性征发育显著"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 65894,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学探究酒精对水蚤心率的影响，实验结果如下。下列分析正确的是(    )",
    "province": "河北",
    "options": [
      "A. 水蚤心率随酒精浓度升高而升高",
      "B. 酒精浓度对水蚤心率没有影响",
      "C. 酒精浓度太高会导致水蚤死亡",
      "D. 水蚤心率随酒精浓度降低而降低"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 65895,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于家庭药箱的叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 家庭药箱中的药物要定期清理",
      "B. 家庭药箱应根据家庭的实际情况按需配置",
      "C. 家庭药箱除个别长期服用的品种外，备量不宜过多",
      "D. 家庭药箱中的内服药和外用药最好放在一起，以便于使用"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 65896,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "以下各项中，不属于心肺复苏主要内容 <img src=\"images/河北_84140d_60be1434.wmf\"> 是（　　）",
    "province": "河北",
    "options": [
      "A. 开放气道",
      "B. 口对口人工呼吸",
      "C. 测量血压",
      "D. 胸外按压"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 65897,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于微生物的叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 微生物一定会导致人类患病",
      "B. 人类的免疫系统可以防御所有微生物",
      "C. 微生物对人类既有益处也有害处",
      "D. 人类已完成了对所有微生物的开发和利用"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 65898,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于入侵物种的叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 总会提高当地生物的种类数",
      "B. 往往不会对当地生态系统造成任何影响",
      "C. 可能会与当地生物竞争资源",
      "D. 增强了当地生态系统的稳定性"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 65899,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "穿山甲的主要特征为全身有鳞甲，体温恒定，胎生哺乳等，则它属于（　　）",
    "province": "河北",
    "options": [
      "A. 棘皮动物",
      "B. 两栖类",
      "C. 爬行类",
      "D. 哺乳类"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 65900,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列是水产市场常见的动物，其中属于软体动物的是（    ）",
    "province": "河北",
    "options": [
      "A. 海蜇",
      "B. 海参",
      "C. 沼虾",
      "D. 乌贼"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 65901,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "观察青霉实验中能看到的物像是（　　）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_84140d_88dbeef7.png\">",
      "B. <img src=\"images/河北_84140d_08897d36.png\">",
      "C. <img src=\"images/河北_84140d_c3ec0361.png\">",
      "D. <img src=\"images/河北_84140d_502126a8.png\">"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 65902,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列选项中能表示种群的是（　　）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_84140d_50f7957a.png\">",
      "B. <img src=\"images/河北_84140d_06c8377b.png\">",
      "C. <img src=\"images/河北_84140d_557d523d.png\">",
      "D. <img src=\"images/河北_84140d_1d2820a0.png\">"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 65903,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在生态系统中，下列属于非生物因素的是（　　）",
    "province": "河北",
    "options": [
      "A. 水分和阳光",
      "B. 土壤微生物",
      "C. 食肉动物",
      "D. 绿色植物"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 65904,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列各种做法中，有利于生态环境改善的是（　　）",
    "province": "河北",
    "options": [
      "A. 草原进行轮换放牧",
      "B. 农业生产大量施用杀虫剂和除草剂",
      "C. 长期使用含磷洗衣粉",
      "D. 垃圾混合丢弃"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 41460,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "绚丽多彩的生物让世界充满了生机与活力。下列不能体现生命现象的是（　　）",
    "province": "河北",
    "options": [
      "A. 枝繁叶茂",
      "B. 碧水蓝天",
      "C. 鸟语花香",
      "D. 硕果累累"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 41461,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "用显微镜观察洋葱鳞片叶内表皮细胞，同一目镜下，观察到清晰物像时，视野范围最大的是（　　）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_6b4aa4_f4d0acdb.png\">",
      "B. <img src=\"images/河北_6b4aa4_21bae502.png\">",
      "C. <img src=\"images/河北_6b4aa4_71045f13.png\">",
      "D. <img src=\"images/河北_6b4aa4_af49fa11.png\">"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 41462,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "云南双柏县近期发现了国家一级保护动物绿孔雀。绿孔雀的细胞中不具有的结构是（　　）",
    "province": "河北",
    "options": [
      "A. 细胞壁",
      "B. 细胞膜",
      "C. 细胞质",
      "D. 细胞核"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 41463,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在人体的组织中，具有收缩和舒张功能的是（　　）",
    "province": "河北",
    "options": [
      "A. 上皮组织",
      "B. 结缔组织",
      "C. 神经组织",
      "D. 肌肉组织"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 41464,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "浒苔营养十分丰富，结构简单，无根、茎、叶的分化，能进行光合作用。浒苔属于（　　）",
    "province": "河北",
    "options": [
      "A. 藻类植物",
      "B. 苔藓植物",
      "C. 蕨类植物",
      "D. 种子植物"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 41465,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "稻螟虫是啃食水稻 <img src=\"images/河北_6b4aa4_e5ffc790.wmf\"> 害虫，青蛙是稻螟虫的天敌，稻田中放养适量青蛙，可以减少农药的使用，青蛙在稻田中也会遭到蛇的捕食。下图表示上述生物构成的食物链中各生物（用甲~丁表示）体内农药的相对含量。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. ①③",
      "B. ①④",
      "C. ②③",
      "D. ②④"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 41467,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列与生产生活有关的措施中，没有利用呼吸作用原理的是（　　）",
    "province": "河北",
    "options": [
      "A. 栽花或种庄稼需适时松土",
      "B. 农田遇到涝害时及时排水",
      "C. 贮藏蔬菜需适当降低温度",
      "D. 种植农作物时合理密植"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 41468,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "学习了光合作用后，某同学设计了下图三组气密性良好的装置（氢氧化钠溶液可吸收环境中的二氧化碳，碳酸氢钠溶液可向环境中释放二氧化碳）进行相关实验。下列叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 上图装置可验证二氧化碳是光合作用的原料",
      "B. 预测实验现象为：丙组枝条生长最好，乙组其次，甲组最差",
      "C. 植物黑暗处理一昼夜，再置于上图装置一段时间，用碘液检测到叶片含淀粉的有两组",
      "D. 要验证光合作用需要光照，可增设将丙组透明玻璃罩改为黑色的丁组与丙组对照"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 41470,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "山茶是云南八大名花之一，它的花具有极高的药用价值。下列关于山茶花的叙述，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 主要结构是雄蕊和雌蕊",
      "B. 成熟雄蕊的花药里有花粉",
      "C. 受精发生在胚珠里",
      "D. 子房发育成种子"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 41471,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“过桥米线”起源于滇南地区，被评为“中国金牌旅游小吃”。米线的营养物质主要来自水稻（单子叶植物）种子的（　　）",
    "province": "河北",
    "options": [
      "A. 子叶",
      "B. 胚乳",
      "C. 胚芽",
      "D. 胚轴"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 41472,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国于2020年提出“双碳”目标，至今已取得初步成效，2022年我国二氧化碳排放强度比2005年下降超过51%。下列做法中，不利于达成该目标的是（　　）",
    "province": "河北",
    "options": [
      "A. 提倡使用新能源交通工具",
      "B. 增加风电和太阳能发电量",
      "C. 频繁使用一次性餐具",
      "D. 植树造林以增加人工林面积"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 41473,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于从猿到人进化过程的叙述，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 由四肢着地逐渐发展为直立行走",
      "B. 在群体生活中产生了语言",
      "C. 制造的工具越来越复杂",
      "D. 骨骼形态始终不变"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 41474,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "青春期是人生中重要的生长发育时期，下列不属于其特点的是（　　）",
    "province": "河北",
    "options": [
      "A. 身高突增",
      "B. 大脑开始发育",
      "C. 出现第二性征",
      "D. 生殖器官迅速发育"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 41475,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "食盐加碘是防治“大脖子病”的有效措施，原因是碘可参与合成（　　）",
    "province": "河北",
    "options": [
      "A. 甲状腺激素",
      "B. 生长激素",
      "C. 胰岛素",
      "D. 性激素"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 41476,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学的早餐是牛奶和鸡蛋，下列有关叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 搭配水果蔬菜可补充维生素",
      "B. 牛奶和鸡蛋可以补充蛋白质",
      "C. 搭配馒头等主食可补充能量",
      "D. 消化牛奶的主要场所是口腔"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 41477,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人饮入的水和吸入的空气都会经过（　　）",
    "province": "河北",
    "options": [
      "A. 咽",
      "B. 喉",
      "C. 气管",
      "D. 食道"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 41478,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "慢性肺气肿主要是长期吸烟所致。由于肺受损害，肺内血管阻力显著增加，导致心脏负担过重而衰竭。慢性肺气肿直接导致心脏收缩压力增大的腔室为（　　）",
    "province": "河北",
    "options": [
      "A. 左心房",
      "B. 左心室",
      "C. 右心房",
      "D. 右心室"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 41479,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "尿液的形成是连续的，排出是间歇的，这是因为人体有暂时贮存尿液的（　　）",
    "province": "河北",
    "options": [
      "A. 肾脏",
      "B. 肾小管",
      "C. 膀胱",
      "D. 肾小球"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 41480,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "远处声音微弱时，用手掌托在耳后，听到的声音会变大，此时手掌发挥的功能类似于（　　）",
    "province": "河北",
    "options": [
      "A. 耳郭（廓）",
      "B. 鼓膜",
      "C. 听小骨",
      "D. 耳蜗"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 41481,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是神经元的结构示意图，其中细胞体（胞体）是（　　）",
    "province": "河北",
    "options": [
      "A. a",
      "B. b",
      "C. c",
      "D. d"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 41482,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列词语中提到的动物不属于节肢动物的是（　　）",
    "province": "河北",
    "options": [
      "A. 金蝉脱壳",
      "B. 庄周梦蝶",
      "C. 乌贼喷墨",
      "D. 虾兵蟹将"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 41483,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "草鱼和扬子鳄具有的共同特征是（　　）",
    "province": "河北",
    "options": [
      "A. 体内有脊柱",
      "B. 用鳃呼吸",
      "C. 水中产卵",
      "D. 体温恒定"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 41484,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "黄胸织布鸟的雄鸟在建巢时会留下洞口用于日后喂食幼鸟。上述行为属于（　　）",
    "province": "河北",
    "options": [
      "A. 取食（觅食）行为",
      "B. 防御行为",
      "C. 社会（社群）行为",
      "D. 繁殖（生殖）行为"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 41485,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于酵母菌的叙述，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 细胞内有细胞核",
      "B. 依靠现成有机物生活",
      "C. 是多细胞真菌",
      "D. 可进行出芽生殖"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 41486,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "根据生物在形态结构和生理功能上的相似度进行分类，狼这一物种不会被划入（　　）",
    "province": "河北",
    "options": [
      "A. 食肉目",
      "B. 猫科",
      "C. 哺乳纲",
      "D. 犬属"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 41487,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "受精的鸡卵中能发育成雏鸡的结构是（　　）",
    "province": "河北",
    "options": [
      "A. 系带（卵带）",
      "B. 卵白",
      "C. 胚盘",
      "D. 卵黄膜"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 41488,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "基因是有遗传效应的DNA片段，下列关于基因的叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 生殖细胞是基因在亲子代间传递的“桥梁”",
      "B. 基因在细胞中成对存在",
      "C. 每条染色体上有多个基因",
      "D. 基因控制生物的遗传特征（性状）"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 41489,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为某女孩家庭的性别遗传示意图，如果女孩的一条X染色体来自奶奶，另一条X染色体来自外公的可能性为（　　）",
    "province": "河北",
    "options": [
      "A. 1/2",
      "B. 1/4",
      "C. 1/8",
      "D. 0"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 41490,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "海南角螳是海南特有的一种螳螂，经过长期的进化，其体色和苔藓的颜色相似，有助于它们生活在长满苔藓的岩壁或者树干上。下列叙述符合自然选择学说的是（　　）",
    "province": "河北",
    "options": [
      "A. 海南角螳为适应环境发生了变异",
      "B. 海南角螳可以随环境改变体色",
      "C. 与苔藓颜色相似的海南角螳更易存活",
      "D. 海南角螳与其他螳螂之间不存在生存斗争"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 41491,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "安全用药与急救常识在日常生活中非常重要。下列叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 使用药品前，应仔细阅读说明书",
      "B. 价格越贵的药，副作用越小",
      "C. 药物刚过期，也不能再使用",
      "D. 大静脉出血时，可用止血带压迫止血"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 12055,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "青头潜鸭是全球仅存1000余只的迁徙鸟类，对栖息地环境要求苛刻。随着生态保护项目的实施，内蒙古黄河湿地生物多样性增加，自2023年起陆续观测到一些青头潜鸭，它们的到来说明该地区（　　）",
    "province": "河北",
    "options": [
      "A. ①②",
      "B. ②③",
      "C. ③④",
      "D. ①④"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 12056,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学做了一组对照实验，实验处理如下表。一段时间后，实验现象如图。他探究的是（　　）",
    "province": "河北",
    "options": [
      "A. 两种酵母菌的发酵速度",
      "B. 温度对发酵的影响",
      "C. 面粉发酵时酵母粉用量",
      "D. 酵母菌发酵的产物"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 12057,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "梭梭是沙漠地区生态保护的“有功之臣”，根向地生长超过9米，叶呈鳞片状。干旱炎热的夏季，部分嫩枝会自动脱落以减少水分散失。下列相关叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 根的向地生长离不开细胞的生长、分裂和分化",
      "B. 叶肉细胞核内遗传物质与根毛细胞核内的不同",
      "C. 部分嫩枝自动脱落可降低蒸腾作用面积",
      "D. 梭梭 <img src=\"images/河北_5b9587_6fbc5e46.wmf\"> 发达根系有利于适应干旱的环境"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 12058,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "达尔文提出生物进化是逐渐发生的，如图示意了生物类群1和类群2的形成过程，下列分析错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 形态特征是两类群生物分类的依据之一",
      "B. 两类群生物形态差异是自然选择的结果",
      "C. 类群1比类群2进化的更高等",
      "D. 类群1和类群2来自共同祖先"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 12059,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某兴趣小组探究光照、取材部位对某种月季扦插成活率的影响，结果如图所示，下列分析错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 扦插属于无性生殖",
      "B. 芽成活率低于嫩枝",
      "C. 光照强度对嫩枝扦插成活率的影响要小于芽",
      "D. 此月季更适宜在半遮阴条件下用芽扦插繁殖"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 63045,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "吉林省查干湖是我国东北地区重要的淡水湖泊。为了解查干湖地区植物资源组成及数量，主要采用的科学方法是（    ）",
    "province": "河北",
    "options": [
      "A. 调查法",
      "B. 比较法",
      "C. 实验法",
      "D. 推测法"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 63046,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "吉林省特产苹果梨甜脆多汁，表面的“皮”破损后易腐烂。构成苹果梨“皮”的主要组织是（    ）",
    "province": "河北",
    "options": [
      "A. 结缔组织",
      "B. 营养组织",
      "C. 分生组织",
      "D. 保护组织"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 63047,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下表是某同学血常规化验单的部分结果，他可能患有（    ）",
    "province": "河北",
    "options": [
      "A. 贫血",
      "B. 炎症",
      "C. 坏血病",
      "D. 夜盲症"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 63048,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "进入青春期后，男生、女生会出现第二性征，与此有关的是（    ）",
    "province": "河北",
    "options": [
      "A. 肺活量增加",
      "B. 神经系统功能逐渐完善",
      "C. 心脏功能增强",
      "D. 睾丸、卵巢迅速发育"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 63049,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是桃花结构示意图，将来能发育成果皮的是（　　）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ②",
      "C. ③",
      "D. ④"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 63050,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "制作酱油和腐乳过程中用到的微生物是（    ）",
    "province": "河北",
    "options": [
      "A. 霉菌",
      "B. 醋酸菌",
      "C. 甲烷菌",
      "D. 根瘤菌"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 63051,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列器官中不属于呼吸道的是（    ）",
    "province": "河北",
    "options": [
      "A. 鼻、咽",
      "B. 口腔、肺",
      "C. 咽、喉",
      "D. 气管、支气管"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 63052,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是两种生物的结构示意图，下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 甲能独立生活",
      "B. 乙没有细胞结构",
      "C. 内部都有遗传物质",
      "D. 都是生态系统中的消费者"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 63053,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于人类和现代类人猿，下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 都以直立行走为主",
      "B. 都能制造复杂工具",
      "C. 都起源于森林古猿",
      "D. 都用语言文字交流"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 63054,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列属于可遗传变异的是（    ）",
    "province": "河北",
    "options": [
      "A. 修剪后的树冠呈球状",
      "B. 暗处培养的韭菜叶片发黄",
      "C. 染色体加倍的甜菜含糖量高",
      "D. 某人单眼皮手术后变成双眼皮"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 63055,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年6月6日是第29个全国“爱眼日”，今年的主题是“关注普遍的眼健康”。下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 物像形成的部位是视网膜",
      "B. 视觉形成的部位是晶状体",
      "C. 近视眼可配戴凸透镜进行矫正",
      "D. 含铁丰富的食物可防治干眼症"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 63056,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是一块小麦田示意图，下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 甲生活在陆地上，用肺呼吸",
      "B. 乙和丙 <img src=\"images/河北_fe1af5_a6628998.wmf\"> 身体和附肢都分节",
      "C. 三种动物与小麦共同构成农田生态系统",
      "D. 若麦田被重金属污染，有毒物质在小麦体内积累最多"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 63057,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物技术广泛用于生产实践，下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 杂交技术培育太空椒",
      "B. 克隆技术培育草莓脱毒苗",
      "C. 组织培养技术培育小羊“多莉”",
      "D. 转基因技术使大肠杆菌生产胰岛素"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 63058,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "巨人症患者过分生长，身材过高，与此有关的激素是（    ）",
    "province": "河北",
    "options": [
      "A. 胰岛素",
      "B. 生长激素",
      "C. 胸腺素",
      "D. 肾上腺素"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 63059,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是利用气球和注射器等材料制作的植物气孔模型，下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. ①模拟保卫细胞，控制②开闭",
      "B. ②模拟气孔，是植物蒸腾作用的“门户”",
      "C. ③模拟导管，运输水和无机盐",
      "D. 在夜幕降临时，大多数②呈图示状态"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 63060,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "能卷舌（A）与不能卷舌（a）是一对相对性状。小刚不能卷舌，其体细胞的基因组成是（    ）",
    "province": "河北",
    "options": [
      "A. A",
      "B. a",
      "C. Aa",
      "D. aa"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 63061,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小刚收集到四种“鱼”的图片，依据它们的主要特征拼出脊椎动物进化大致历程，如图所示，其中摆放正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 鲫鱼",
      "B. 鲸鱼",
      "C. 娃娃鱼",
      "D. 鳄鱼"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 63062,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "据统计：2024年1～3月我国百日咳累计发病人数近6万。百日咳主要通过飞沫传播，接种疫苗是最有效的预防措施。接种的疫苗及该预防措施分别属于（    ）",
    "province": "河北",
    "options": [
      "A. 抗原、切断传播途径",
      "B. 抗体、控制传染源",
      "C. 抗原、保护易感人群",
      "D. 抗体、消灭病原体"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 63063,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小刚通过实验探究光照对种子萌发的影响（其他环境条件均适宜），根据实验结果绘制了统计图，分析可知（    ）",
    "province": "河北",
    "options": [
      "A. 光照抑制苋菜种子的萌发",
      "B. 光照是蚕豆种子萌发的必要条件",
      "C. 两种植物种子萌发都需要光照",
      "D. 未萌发的种子一定处于休眠期"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 63064,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于急救和安全用药叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 动脉出血时，应在伤口的远心端止血",
      "B. 发现触电的人，应立即对其进行心肺复苏",
      "C. 药物有一定的毒性或副作用，应合理使用",
      "D. 生病时，为早日康复应大量服用抗生素"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 90841,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "要了解鸡卵的结构，主要采用的科学方法是（　　）",
    "province": "河北",
    "options": [
      "A. 调查",
      "B. 观察",
      "C. 比较",
      "D. 推测"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 90842,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "自然界中的每一种生物都会受到其他生物的影响。下列生物之间具有竞争关系的是（　　）",
    "province": "河北",
    "options": [
      "A. 水稻和杂草",
      "B. 七星瓢虫和蚜虫",
      "C. 狗和狂犬病病毒",
      "D. 豆科植物和根瘤菌"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 90843,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "一粒种子能长成参天大树，离不开细胞的生长、分裂和分化。下列相关叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 细胞的生活不需要物质和能量",
      "B. 细胞能无限制地长大",
      "C. 细胞分裂时细胞质先分成两份",
      "D. 细胞分化形成不同的组织"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 90844,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "水族箱是小型生态系统，其组成如图所示。下列相关叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. ①代表非生物部分",
      "B. 植物是该生态系统的生产者",
      "C. ②包含细菌和真菌",
      "D. 其中存在食物链：阳光→植物→动物"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 90845,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某生物小组研究温度对小麦种子萌发的影响，将实验结果绘制成折线图。据图分析，以下温度最适宜小麦种子萌发的是（　　）",
    "province": "河北",
    "options": [
      "A. 15℃",
      "B. 20℃",
      "C. 25℃",
      "D. 30℃"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 90846,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "同学们在课外实践活动中用桑叶饲养家蚕，关于家蚕和桑树的叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 它们的细胞都具有叶绿体",
      "B. 桑树的叶属于营养器官",
      "C. 它们的结构层次完全相同",
      "D. 家蚕取食桑叶属于学习行为"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 90847,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“返景入深林，复照青苔上”中的“青苔”主要是指苔藓植物。下列关于苔藓植物的叙述，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 有根、茎、叶分化",
      "B. 做监测空气污染程度的指示植物",
      "C. 能开花和结果",
      "D. 植株高大，都生活在干旱的地方"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 90848,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于人的生殖和发育的叙述，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 人的性别由X染色体决定",
      "B. 男性产生精子的器官是输精管",
      "C. 女性的子宫是胚胎发育的场所",
      "D. 进入青春期性器官开始发育"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 90849,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是探究“馒头在口腔中的变化”的实验过程。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. ①和②试管中馒头碎屑的量不同",
      "B. 图中“？”应该为37℃",
      "C. 滴加碘液后，①试管不变蓝",
      "D. 实验结果说明唾液能将馒头中的淀粉分解为葡萄糖"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 90850,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物体的结构和功能是相适应的，下表中对应关系不相符的是（　　）",
    "province": "河北",
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 90851,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "甲、乙分别为用显微镜观察人血的永久涂片和小鱼尾鳍内血液的流动视野图。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 甲中①体积最大，数量最多",
      "B. 甲中②呈红色，都有细胞核",
      "C. 乙中③在血管④中单行通过",
      "D. 根据血流方向判断⑤是小静脉"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 90852,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "若选项中的内容依次对应图中的甲、乙、丙、丁，则对应关系正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 雌蕊、花药、花柱、子房",
      "B. 有机物、糖类、脂肪、蛋白质"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 90853,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年4月，北京人形机器人创新中心发布名为“天工”的机器人（图甲），图乙是机器人下肢部分结构的简易模型。下列关于机器人跑步小腿向后抬起时的叙述，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. ①②模拟骨，③④模拟肌肉",
      "B. ②在④牵动下绕⑤活动",
      "C. ③④都处于舒张状态",
      "D. 机器人的运动由模拟“神经系统”控制"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 90854,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于动物特征的叙述，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 水螅体表有刺细胞，有口有肛门",
      "B. 蛔虫体表有角质层，消化器官发达",
      "C. 青蛙体表湿润，只用皮肤呼吸",
      "D. 家兔体表被毛，胎生哺乳"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 90855,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于细菌和病毒的叙述，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 病毒没有细胞结构",
      "B. 噬菌体是植物病毒",
      "C. 细菌靠芽孢进行生殖",
      "D. 醋酸菌可用于制酸奶"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 90856,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列植物的繁殖方式中属于有性生殖的是（　　）",
    "province": "河北",
    "options": [
      "A. 玉米用种子繁殖",
      "B. 月季的扦插繁殖",
      "C. 椒草用叶片繁殖",
      "D. 柿树的嫁接繁殖"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 90857,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列保护东北虎、东北豹等濒危物种的措施中，不合理的是（　　）",
    "province": "河北",
    "options": [
      "A. 加强执法力度，保护生物多样性",
      "B. 建立种质库，保护遗传资源",
      "C. 大力引进外来物种，丰富食物来源",
      "D. 建立自然保护区，保护栖息环境"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 90858,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是不同地层生物化石模式图。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 化石是研究生物进化的唯一证据",
      "B. 越古老的地层中，形成化石的生物结构越复杂",
      "C. 生物进化的总体趋势是体型由小到大",
      "D. 生物通过遗传、变异和自然选择，不断进化"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 90859,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "探究“花生果实大小的变异”实验中，老师提供了大、小两个品种的花生果实。以下四个实验小组提出的取样方法，最科学的是（　　）",
    "province": "河北",
    "options": [
      "A. 选取大、小花生中最大的各1枚",
      "B. 选取大、小花生中最小的各1枚",
      "C. 随机抽取大、小花生各5枚",
      "D. 随机抽取大、小花生各30枚"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 90860,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "健康是幸福生活的基石。下列关于健康生活的做法，不合理的是（　　）",
    "province": "河北",
    "options": [
      "A. 遇到挫折，自暴自弃",
      "B. 远离烟酒，拒绝毒品",
      "C. 规律作息，坚持锻炼",
      "D. 按时进餐，合理营养"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 107212,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是一种枯叶蝶，其形态、颜色都与周围落叶基本一致，使它不容易被敌害发现，从而增加了生存机会。下列体现生物与环境关系的句子中，与此现象相同的是（　　）",
    "province": "河北",
    "options": [
      "A. 柳杉吸收有毒气体",
      "B. 森林提高空气湿度",
      "C. 海豹皮下脂肪很厚",
      "D. 蚯蚓活动疏松土壤"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 107213,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是某农田生态系统的食物网，下列关于该食物网叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 能量的最终来源是甲",
      "B. 戊体内积累毒素最多",
      "C. 戊与丁只有捕食关系",
      "D. 总共包含4条食物链"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 107214,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "显微镜已经成为人类探索微观世界不可缺少的工具。在练习使用显微镜时，下列操作正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 在光线不足时，用小光圈对光",
      "B. 一边注视目镜，一边下降镜筒",
      "C. 转动细准焦螺旋使物像更清晰",
      "D. 用洁净的纱布擦拭目镜和物镜"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 107215,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "炎炎夏日来临，同学们经常把水果挤压成果汁，冰镇后作为消暑饮品，这些汁液主要来自细胞的（　　）",
    "province": "河北",
    "options": [
      "A. 细胞核",
      "B. 细胞壁",
      "C. 线粒体",
      "D. 液泡"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 107216,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "近年来，在果树栽培和树木移栽过程中，常给植物打针输液，以促进植物的生长。输入的液体中，除水外，最可能含（　　）",
    "province": "河北",
    "options": [
      "A. 无机盐",
      "B. 二氧化碳",
      "C. 脂质",
      "D. 核酸"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 107217,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "茶叶是乐山的经济作物之一，为了提高茶叶产量，下列做法不合理的是（　　）",
    "province": "河北",
    "options": [
      "A. 合理密植，充分利用光照",
      "B. 及时排涝，保证根的呼吸",
      "C. 搭建大棚，提高夜间温度",
      "D. 适时除草，避免杂草竞争"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 107218,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图1是绿色植物叶片中部分生理过程示意图，图2是气孔的两种状态示意图，下列相关叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 若图1表示光合作用，则序号②代表的是氧气",
      "B. 若图1表示呼吸作用，则序号①代表二氧化碳",
      "C. 图2气孔处于甲状态时可能促进①、②的进出",
      "D. 图2气孔处于乙状态时可能降低③、④的运输"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 107219,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "你和同龄人都在步入一个重要的发育时期——青春期，这是一个身体上和心理上发生重要变化的时期。对于这些变化，下列说法正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 认为自己已经长大，强烈反对父母约束",
      "B. 女孩开始身高突增的年龄一般早于男孩",
      "C. 对异性会产生朦胧依恋，应该禁止交往",
      "D. 进入青春期，男女的性器官才开始发育"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 107220,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "有氧运动是一项时尚而又科学有效的健身方式，如散步、慢跑、做操等。有氧运动可使身体的肌肉细胞在运动中不致缺氧，从而起到增进健康的作用。在氧气从外界吸入，再进入肌肉细胞供其利用这一过程中，下列说法错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 肋骨间的肌肉和膈肌舒张时，吸入氧气",
      "B. 吸入的氧需透过两层上皮细胞进入血液",
      "C. 进入血液中的氧由血液循环输送到细胞",
      "D. 氧进入细胞后在细胞的线粒体中被利用"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 107221,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图所示，当迅速叩击一下膝盖下的韧带，小腿会以膝盖为轴，突然地跳起来。对于小腿的这种反应，下列判断错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 属于简单的反射",
      "B. 不会受大脑控制",
      "C. 神经中枢在脊髓",
      "D. 没有反射弧参与"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 107222,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "同学们在上课时，能看清课桌上的书和黑板上的字。这是因为较近或较远物体的物像都能落在视网膜上，其中起主要作用的是睫状体调节（　　）",
    "province": "河北",
    "options": [
      "A. 瞳孔的大小",
      "B. 晶状体曲度",
      "C. 视网膜位置",
      "D. 眼球前后径"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 107223,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "苏云金杆菌生活在昆虫体内，会产生一种毒性蛋白杀死昆虫，因此农业上利用苏云金杆菌作为生物杀虫剂。下列关于苏云金杆菌的特点及其与昆虫之间的关系，叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 自己制造有机物，共生",
      "B. 自己制造有机物，寄生",
      "C. 无成形的细胞核，共生",
      "D. 无成形的细胞核，寄生"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 107225,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "脱水法通过降低水的含量，抑制细菌和真菌的生长繁殖，达到保存食品的目的。下列不属于脱水法保存食品的是（　　）",
    "province": "河北",
    "options": [
      "A. 袋装肉肠",
      "B. 冻干蔬菜",
      "C. 烟熏腊肉",
      "D. 果脯蜜饯"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 107226,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国是裸子植物最丰富的国家，也是动物种类最多的国家之一，这是生物多样性的体现。下列对生物多样性内涵的理解不合理的是（　　）",
    "province": "河北",
    "options": [
      "A. 基因的多样性",
      "B. 生物数量的多样性",
      "C. 生物种类的多样性",
      "D. 生态系统的多样性"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 107227,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "同一品种的结球甘蓝（圆白菜），在北京栽培，长成的叶球重1~3千克；引种到西藏后，叶球的重量普遍增加，最大的竞达到6.5千克。这说明对结球甘蓝性状表现起作用的是（　　）",
    "province": "河北",
    "options": [
      "A. 环境",
      "B. 基因",
      "C. 海拔高度",
      "D. 基因和环境"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 107228,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "马的体细胞染色体数是32对，其产生的精子、卵细胞、受精卵的染色体数分别是（　　）",
    "province": "河北",
    "options": [
      "A. 32对、32对、32对",
      "B. 32条、32条、32条",
      "C. 32条、32条、32对",
      "D. 32对、32对、32条"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 107229,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "一对能卷舌的夫妇，生下了一个不能卷舌的孩子，这对夫妇再生一个孩子，这个孩子能卷舌的概率是",
    "province": "河北",
    "options": [
      "A. 100%",
      "B. 75%",
      "C. 50%",
      "D. 25%"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 107230,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "计划免疫是指有计划地给儿童接种疫苗，以达到预防、控制和消灭相应传染病的目的。下列关于计划免疫的认识错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 计划免疫接种的疫苗属于抗体",
      "B. 这种免疫类型属于特异性免疫",
      "C. 实施计划免疫是保护易感人群",
      "D. 对于提高人口素质有重要意义"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 21865,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“西塞山前白鹭飞，桃花流水鳜鱼肥”诗中的白鹭、桃花、鳜鱼，它们结构和功能的基本单位是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞",
      "B. 组织",
      "C. 器官",
      "D. 系统"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 21866,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "从2023年8月24日开始，日本不顾国际社会的质疑和反对，多次将福岛第一核电站核污染日水排入海洋，会对海洋环境造成污染。经过一段时间后，在“藻类→草食鱼→肉食鱼→鲨鱼”食物链中，体内放射性物质含量最多的生物是（    ）",
    "province": "河北",
    "options": [
      "A. 藻类",
      "B. 草食鱼",
      "C. 肉食鱼",
      "D. 鲨鱼"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 21867,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "石榴是凉山州会理市的特产之一，在中国传统文化中石榴被视为吉祥物，寓意多子多福、红红火火。一粒一粒的石榴籽是由下列哪个结构发育而来（    ）",
    "province": "河北",
    "options": [
      "A. 子房",
      "B. 花柱",
      "C. 珠被",
      "D. 胚珠"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 21868,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某中学举办的“生物诗词大会”上，要求选手说出“有茎、叶的植物”的诗词。下列哪位选手会被淘汰？（　　）",
    "province": "河北",
    "options": [
      "A. 暮色苍茫看劲松，乱云飞渡仍从容",
      "B. 西湖春色归，春水绿如染",
      "C. 应怜屐齿印苍苔，小扣柴扉久不开",
      "D. 箭茁脆甘欺雪菌，蕨芽珍嫩压春蔬"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 21869,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于人体的生殖和发育，以下说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 人体的发育是从卵细胞开始的",
      "B. 胚泡是在母体的子宫内形成的",
      "C. 胎儿和母体之间的物质交换是通过胎盘进行的",
      "D. 青春期人体最显著的特点是神经系统功能明显增强"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 21870,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图，ICL晶体植入手术可以矫正近视，植入的ICL晶体相当于是__；骨传导耳机可以减小声音对鼓膜的损伤，戴上耳机听音乐时，感受声音刺激并产生神经冲动的部位是__。（    ）",
    "province": "河北",
    "options": [
      "A. 凸透镜；大脑皮层",
      "B. 凸透镜；耳蜗",
      "C. 凹透镜；大脑皮层",
      "D. 凹透镜；耳蜗"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 21871,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "近年来，我州中小学定期开展防震减灾疏散演练，预警声响起师生迅速来到操场等开阔地带，模拟紧急避险。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 在听到防震减灾演练警报声时，撤离行为是通过反射弧来完成的",
      "B. 听到口令，学生一系列的撤离行为，都属于简单反射",
      "C. 快速奔跑到操场需要运动系统和其他系统的协调配合",
      "D. 中学生应具备一定的急救知识，以应对突发事件中的紧急情况"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 21872,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为了证实饮酒的危害，小勇和爸爸一起做了“测定反应速度”的实验。爸爸将拇指和食指对准长30cm的直尺下端“0”刻度线，不要碰尺，小勇松手，爸爸尽快夹住直尺，记录夹住部位的刻度值。三种状态下的测试各重复三次，结果如下表，得出结论是（    ）",
    "province": "河北",
    "options": [
      "A. 饮酒越多，反应越迟钝",
      "B. 酗酒会增加患癌的风险",
      "C. 酗酒会严重损害人的肝脏",
      "D. 酗酒会导致心脑血管疾病"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 21873,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "凉山“达体舞”的各种动作由走、跑、跳组合，要通过头、颈、躯干等多个关节的屈伸和转动来完成。下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 只要运动系统完好，就能完成“达体舞”动作",
      "B. 关节在运动中起支点的作用",
      "C. 做屈肘动作时，肱二头肌和肱三头肌都舒张",
      "D. 一块骨骼肌只附着在同一块骨上"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 21874,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为正常人饭后一段时间内血糖含量的变化曲线，下列分析不正确的是（）",
    "province": "河北",
    "options": [
      "A. AB段上升是因为消化道吸收了大量葡萄糖",
      "B. BC段下降是因为胰岛素可以降低血糖含量",
      "C. CD段下降是因为人体运动消耗部分葡萄糖",
      "D. E点后血糖相对稳定，不需要激素参与调节"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 21875,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列能分泌大量珍珠质把异物层层包裹起来，最后形成珍珠的生物是（    ）",
    "province": "河北",
    "options": [
      "A. 螃蟹",
      "B. 河蚌",
      "C. 石鳖",
      "D. 蜗牛"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 21876,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关生物学常识，说法不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 生物学家施莱登和施旺共同创建了“细胞学说”",
      "B. 被誉为“微生物学之父”的科学家是巴斯德",
      "C. 生物进化论的建立者是达尔文",
      "D. 正式提出科学的生物命名法——双名法的科学家是孟德尔"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 21877,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某兴趣小组在探究“光对鼠妇分布的影响”时，使用了10只鼠妇，并设计了如图所示有缺陷的实验装置，小萱同学对该实验设计提出了下列修正意见，其中正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 纸盒上面全都用玻璃板盖住",
      "B. 将纸盒放在冰箱-2℃的冷冻室内",
      "C. 纸盒的底部全都铺上细湿土",
      "D. 10只鼠妇太多，改成2只"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 21878,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列实验材料与使用目的不匹配的是（    ）",
    "province": "河北",
    "options": [
      "A. 碘液——检验玉米胚乳是否含有淀粉",
      "B. 澄清石灰水——验证种子呼吸消耗氧气",
      "C. 酒精——溶解叶片中的叶绿素",
      "D. 生理盐水——维持口腔上皮细胞正常形态"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 21879,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2015年5月，西昌邛海湿地迎来3只新成员——彩鹮！《中国濒危动物红皮书》曾宣布彩鹮在中国绝迹，在中国消失近70年，它被列入《世界自然保护联盟濒危物种红色名录》，其数量比朱鹮还少。下列关于彩鹮特征的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 肺和气囊都能进行气体交换",
      "B. 骨骼轻、薄、坚固，长骨中空，减轻体重",
      "C. 两翼肌肉发达，能完成飞行动作",
      "D. 体外受精，陆地产卵，卵外有坚硬的卵壳"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 21880,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物学知识与我们的生活息息相关，下列说法你认为错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 萝卜储存久了会空心，原因是水分大量散失",
      "B. 与豆科植物共生的根瘤菌可以固氮，提高土壤肥力",
      "C. 为避免食物进入气管引起剧烈咳嗽，吃饭时不要大声说笑",
      "D. 白糖拌番茄时会产生许多番茄汁，汁液来自于番茄细胞的细胞液"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 21883,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "花椒凤蝶发育过程的四个阶段如图所示，下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. C表现为不食不动",
      "B. B可以发生蜕皮现象",
      "C. 生殖方式为无性生殖",
      "D. 发育过程为完全变态"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 21884,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "科学探究是学习生物学的重要方法之一。下列有关探究实验的说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. “探究蚂蚁的通讯”实验中，最好让蚂蚁处于饥饿状态",
      "B. 观察小鱼尾鳍内血液的流动时，依据红细胞单行通过来判断血管为毛细血管",
      "C. 为了阻碍草履虫运动以便于观察，盖盖玻片前可以在液滴上放几丝棉花纤维",
      "D. 模拟“精子和卵细胞随机结合”实验中，黑、白围棋子分别代表含X、Y染色体的生殖细胞，则各用20枚分别代表精子和卵细胞"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 21885,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "地球上“第一只鸟起飞，第一朵花绽放的地方”在我国辽宁，辽宁古生物博物馆是我国最大的古生物博物馆，馆中的“中华龙鸟”和“辽宁古果”等众多化石让人震撼不已。下列说法不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 化石是研究生物进化的直接证据",
      "B. 生物总是从体型小的进化到体型大的",
      "C. 生物通过遗传、变异和自然选择不断进化",
      "D. 越复杂、越高等的生物化石出现在越晚近形成的地层里"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 21886,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "女性发病率最高的癌症是乳腺癌，其次是宫颈癌。成都市已按照“知情同意、自主选择、自愿接种”的原则，对全市13-14岁在校女生免费接种HPV疫苗，该惠民项目可以有效预防女性宫颈癌的发生。接种的HPV疫苗相当于（    ）",
    "province": "河北",
    "options": [
      "A. 抗原",
      "B. 抗体",
      "C. 溶菌酶",
      "D. 淋巴细胞"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 21887,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "请根据下图提示，运用生物学分类知识，分析判断与梅亲缘关系最近的植物是（    ）",
    "province": "河北",
    "options": [
      "A. 松",
      "B. 菊",
      "C. 竹",
      "D. 兰"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 21888,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列应用与生物技术对应错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 以菌治虫——生物防治技术",
      "B. 蝇眼照相机——仿生技术",
      "C. 酿酒——乳酸菌发酵技术",
      "D. 转基因超级鼠——转基因技术"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 21889,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在抗生素市场中，头孢类抗生素占据着较大的份额。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 由病毒引起的流感，可以服用头孢类抗生素来治疗",
      "B. “超级细菌”是抗生素诱导了细菌产生抗药性变异",
      "C. “超级细菌”经过抗生素的选择，抗药性在逐渐增强",
      "D. 扁桃体炎，坚决不用抗生素，只服用中药"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 21890,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "火带来温暖与光明，但一簇小火苗也可毁万亩林，护林防火，人人有责。在森林草原防火区下列行为正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 在林区吸烟",
      "B. 野外祭祀用火",
      "C. 违规农事用火",
      "D. 发现火情及时报警"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 21891,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "日常生活中可能会遇到触电、溺水、煤气中毒等意外伤害，下列所采取的急救措施错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 图1中胸外心脏按压的正确部位是①",
      "B. 图2是触摸颈动脉搏动的情况，可以判定心跳是否存在",
      "C. 图3表示对病人进行急救前的做法，是为了畅通呼吸道",
      "D. 图4是心肺复苏，乙先做30次心脏按压，甲再做2次人工呼吸，交替反复进行"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 95901,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学对校园生物进行调查，他将芦荟、榕树、蜈蚣归为一类；将锦鲤、荷花、蝌蚪归为另一类。他的归类方法是（    ）",
    "province": "河北",
    "options": [
      "A. 按生物生活环境",
      "B. 按生物用途",
      "C. 按生物个体大小",
      "D. 按生物形态结构"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 95902,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为“稻虾共作”农田生态系统的部分食物网示意图。",
    "province": "河北",
    "options": [
      "A. 图中共有4条食物链，鸟类与害虫有捕食和竞争的关系",
      "B. 能量储存在有机物中，会沿着食物链的传递而逐渐增多",
      "C. 若该食物网中小龙虾过度繁殖，害虫和青蛙数量会减少",
      "D. 该农田生态系统中有机物来源主要是作为生产者的水稻"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 95903,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "同学们制作并观察洋葱鳞片叶内表皮细胞临时装片，观察效果不理想，对其原因分析有错的是（    ）",
    "province": "河北",
    "options": [
      "A. 物像模糊可能是粗准焦螺旋和细准焦螺旋未调到位",
      "B. 视野中出现污点可能是实验过程中反光镜未擦干净",
      "C. 视野中出现了明亮的气泡可能是盖盖玻片操作不当",
      "D. 视野中内表皮的细胞核不明显可能是未用碘液染色"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 95904,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人们经常吃腌制食品、烧烤食品、高脂肪食物或长期接触大量紫外线辐射等可能患癌症。下列关于癌细胞的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 正常细胞发生癌变的实质是细胞生活环境发生了改变",
      "B. 癌细胞分裂过程中，细胞膜先向内凹陷，细胞核再分裂",
      "C. 癌细胞分裂后，新细胞的染色体数目是原细胞的一半",
      "D. 癌细胞的分裂速度非常快，还可侵入邻近的正常组织"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 95905,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "塞罕坝地区曾经是植被稀少，黄沙漫天的地方，经过人工治理后，现在是郁郁葱葱的林场。下列关于塞罕坝的叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 塞罕坝地区的变化体现人类活动对环境的影响",
      "B. 塞罕坝林场有利于维持生物圈中的碳—氧平衡",
      "C. 林场植被的蒸腾作用增加了塞罕坝地区降水量",
      "D. 为了科学化管理林场，禁止开发利用林木资源"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 95906,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "处于青春期的男生和女生，身体和心理都发生着变化，在生活中常出现较多的心理矛盾。下列行为不利于缓解心理矛盾的是（    ）",
    "province": "河北",
    "options": [
      "A. 经常找父母倾诉烦恼",
      "B. 把握与异性交往尺度",
      "C. 拒绝他人意见和建议",
      "D. 集中精力专注于学习"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 95907,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "宜宾不仅有美景、美酒还有美食。某外地游客来宜宾品尝特色美食，午餐选择了宜宾燃面、李庄白肉、沙河豆腐。从合理膳食角度分析，该游客还应添加的食物是（    ）",
    "province": "河北",
    "options": [
      "A. 红糖凉糕",
      "B. 酥肉",
      "C. 菠菜汤",
      "D. 椒麻鸡"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 95908,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国实行无偿献血制度，下图为某志愿者的献血证（部分），下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 18~55周岁的所有公民均可献血",
      "B. 献血时采血针扎入的是静脉血管",
      "C. 一次献血300mL能较快恢复血量",
      "D. 该血样可少量缓慢输给B型血患者"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 95909,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "科研团队为了探究蛙褪黑色素的来源和作用，将若干只生长状况一致的健康蛙分成三组，编号为甲组、乙组、丙组，做了如下三个实验：",
    "province": "河北",
    "options": [
      "A. 甲组实验中存在对照实验，变量是光照",
      "B. 由甲、乙组可知，褪黑色素可以影响蛙的体色",
      "C. 由实验可知，褪黑色素的分泌可能与垂体有关",
      "D. 若向切除垂体的丙组蛙注射褪黑色素，体色将不变"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 95910,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "地球上生存的动物是经过长期进化而来的。各种动物都有与其生活环境相适应的结构，不同结构可能实现相同的功能。下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 河蚌的鳃和鸟的气囊，都能进行气体交换",
      "B. 蛔虫身体分节和蜥蜴的颈，都能让运动更灵活",
      "C. 虾的外骨骼和蛇的角质鳞，都能减少水分蒸发",
      "D. 涡虫的咽和蝗虫的触角，都能进行捕食"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 95911,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年5月19日，宜宾市南溪区举行了全国“村跑”比赛。某选手跑完全程后出现了膝关节（如下图所示）疼痛的症状。下列关于运动的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 关节腔分泌的滑液使得关节的运动更灵活",
      "B. 仅需骨、关节、肌肉的配合即可完成跑步",
      "C. 图中标号①所示的结构是膝关节的关节窝",
      "D. 图中标号②所示结构磨损会导致关节疼痛"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 95912,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为探究幽门螺旋杆菌、乳酸菌与胃黏膜炎症的关系，生物兴趣小组将若干只实验小鼠平均分为三组，并进行相应处理。一段时间后，检测三组小鼠胃黏膜炎症因子水平的相对值并计算出平均值（炎症因子相对值越高，炎症越严重）。处理方式及实验结果如下图。",
    "province": "河北",
    "options": [
      "A. 幽门螺旋杆菌和乳酸菌都具有细胞壁、细胞膜、细胞质等结构",
      "B. 除幽门螺旋杆菌外，其它因素也会引起胃黏膜炎症因子的产生",
      "C. 由1、2组实验可知幽门螺旋杆菌能提高胃黏膜炎症因子水平",
      "D. 由该实验结果推测出向胃内灌入乳酸菌无法减轻胃黏膜炎症"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 95913,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学将番茄切一半放置于培养皿中，几天后发现番茄表面长出了白色的“细丝”。他想知道这些“细丝”是哪类生物，做了进一步的探究。下列说法不成立的是（    ）",
    "province": "河北",
    "options": [
      "A. 用显微镜观察“细丝”装片，发现有成形的细胞核，推测“细丝”为真核生物",
      "B. 肉眼观察到长了“细丝” <img src=\"images/河北_c7accd_d397fa91.wmf\"> 番茄腐烂，推测“细丝”可能从番茄中获得有机物",
      "C. 用放大镜观察“细丝”，发现其项端有类似孢子的结构，推测其可能为真菌",
      "D. 挑取少量“细丝”培养，菌落 <img src=\"images/河北_c7accd_3d730765.wmf\"> 白色绒毛状，有灰色孢子，推测其为青霉菌"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 95914,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "埃博拉病毒是一种致命的病毒，严重危害人体健康，结构如图所示，下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 图中结构①是埃博拉病毒的遗传物质",
      "B. 图中结构②的主要成分是纤维素和糖类",
      "C. 按其寄生生物划分，该病毒属于噬菌体",
      "D. 该病毒为单细胞生物，通过分裂繁殖后代"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 95915,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "同学们参加果树栽培实践活动时，认为苹果和梨是不同的物种，但亲缘关系较近。下列证据对这一观点支持力度最弱的是（    ）",
    "province": "河北",
    "options": [
      "A. 苹果和梨都在日照充足、气候暖和的地方生长",
      "B. 检索植物分类表，发现苹果和梨同属于蔷薇科",
      "C. 苹果和梨的种子都有两片子叶，叶脉均为网状脉",
      "D. 苹果花和梨花都是两性花，萼片和花瓣都是5片"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 95916,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年4月22日是第55个世界地球日，今年的主题为“珍爱地球，人与自然和谐共生”。爱护环境，保护生物多样性是人与自然和谐发展的必然选择。下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 地球是最大的生态系统，包括水圈、大气圈和岩石圈",
      "B. “自然”是指直接影响人类的生物因素和非生物因素",
      "C. 人与自然和谐共生需减少人类活动对生物圈的负面影响",
      "D. 保护生物多样性最有效的措施是人工繁育濒危物种"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 95917,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "白化病是一种遗传病，下图是小明（9号）家族白化病（基因用A、a表示）的系谱图",
    "province": "河北",
    "options": [
      "A. 图中既体现了生物遗传又体现了生物变异的特性",
      "B. 图中每代都有患者，说明白化病是显性遗传病",
      "C. 第一代3、4号和第二代5、6号基因组成均为Aa",
      "D. 第二代8号携带致病基因的基因组成概率为2/3"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 95918,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "叶海龙全身覆盖的叶状附肢并非用来游泳，而是使自身隐藏于周围的大型海藻中，以避免被天敌发现。下列关于叶状附肢形成的原因最合理的解释是（    ）",
    "province": "河北",
    "options": [
      "A. 地质变化的结果",
      "B. 自然选择的结果",
      "C. 经常使用的结果",
      "D. 主动变异的结果"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 95919,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "学校为了防止流感病毒的传播来取了多项措施。下列措施和作用对应关系最恰当的是（    ）",
    "province": "河北",
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 95920,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体健康是生活质量的重要保障，良好的行为习惯对健康至关重要。下列行为符合健康理念的是（    ）",
    "province": "河北",
    "options": [
      "A. 坚持作息规律，保持充足睡眠",
      "B. 尽量不喝水，减少上厕所次数",
      "C. 经常不吃早餐，增加学习时间",
      "D. 病情稍有好转，自行停止用药"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 48553,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "近日，科学家在贵州省发现新物种马岭河小苦荬（mǎi），该物种叶柄长30—55毫米，黄色花朵，头状花序，含6—7枚舌状花，果实呈棕色。请推测这种植物的类型（    ）",
    "province": "河北",
    "options": [
      "A. 藻类植物",
      "B. 苔藓植物",
      "C. 蕨类植物",
      "D. 被子植物"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 48554,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "中华民族有很多脍炙人口的诗句。下列诗句能体现生物因素影响生物生活的是（    ）",
    "province": "河北",
    "options": [
      "A. 种豆南山下，草盛豆苗稀",
      "B. 人间四月芳菲尽，山寺桃花始盛开",
      "C. 随风潜入夜，润物细无声",
      "D. 竹外桃花三两枝，春江水暖鸭先知"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 48555,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "蜜蜂擅长“舞蹈通讯”，当蜜源在一段距离之外时，蜜蜂一面迅速摆动尾部，一面跳“8”字形舞，代表蜜源在太阳左方110°的位置。从行为的获得途径来看，下列与“蜜蜂跳舞”行为相同的是（    ）",
    "province": "河北",
    "options": [
      "A. 孔雀开屏",
      "B. 老马识途",
      "C. 鹦鹉学舌",
      "D. 小狗算数"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 48557,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "神农架山脉是全球中纬度地区唯一保持完好的亚热带森林生态系统。这里生长有银杏、珙桐等植物3700多种，生活有金丝猴等野生动物1050多种，它已被列入世界自然遗产名录。以上资料主要体现了生物多样性的（    ）",
    "province": "河北",
    "options": [
      "A. 基因多样性",
      "B. 物种多样性",
      "C. 生态系统多样性",
      "D. 环境多样性"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 48558,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "许多绿色开花植物不仅能进行有性生殖，也能进行无性生殖。下列属于有性生殖的是（    ）",
    "province": "河北",
    "options": [
      "A. 柳枝的扦插",
      "B. 胡萝卜的组织培养",
      "C. 水稻的播种",
      "D. 马铃薯的块茎繁殖"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 48559,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "以下是人类生殖和发育过程示意图，相关描述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. a是卵巢，能够分泌雄性激素",
      "B. 精子、卵细胞的染色体数目比体细胞少一半",
      "C. 新生命发育的起点是c，形成部位是子宫",
      "D. 胎儿通过胚盘从母体中获得营养物质"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 48560,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关动物的生殖和发育的说法，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 蝴蝶的发育过程属于不完全变态",
      "B. 蝗虫的发育过程中有蜕皮现象",
      "C. 青蛙的受精方式是体内受精",
      "D. 鸟胚胎的发育只由卵黄提供营养物质"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 48561,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学制作并观察了洋葱鳞片叶内表皮细胞临时装片，下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 观察时，镜筒下降，从侧面注视目镜",
      "B. 制作装片时，在载玻片上滴加生理盐水",
      "C. 盖盖玻片时，让其一侧先接触液滴，再缓缓放下",
      "D. 用高倍镜可观察到线粒体、叶绿体等结构"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 48562,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "以下是猕猴个体的结构层次图，相关说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 由a到b经过了细胞的分裂和分化",
      "B. 猕猴结构和功能的基本单位是b",
      "C. 猕猴皮肤的结构层次属于b",
      "D. 该图也能表示猕猴桃的结构层次"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 48563,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物体的结构与功能是相适应的，下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 小肠绒毛壁薄，有利于营养物质的消化",
      "B. 肺泡周围的毛细血管壁厚，有利于气体交换",
      "C. 人 <img src=\"images/河北_e26b19_4782abe5.wmf\"> 心脏四腔中左心房壁最厚，有利于血液泵出",
      "D. 皮肤角质层细胞排列紧密，可防止体内水分过度散失"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 48564,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "将生物学原理用于大棚蔬菜的种植可促进农民增收。下列说法不恰当的是（    ）",
    "province": "河北",
    "options": [
      "A. 施气肥可提高氧气浓度，促进呼吸作用",
      "B. 夜间降低大棚内温度，可抑制呼吸作用",
      "C. 合理密植可提高光能利用率",
      "D. 适当增加光照可促进光合作用"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 48566,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "有这样一个描述花生的谜语：“麻屋子，红帐子，里面住着白胖子。”下列有关描述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. “麻屋子”指的是种皮",
      "B. “白胖子”是由胚珠发育而来",
      "C. 花生的营养物质主要储存在胚乳",
      "D. 种子的数目由胚珠的数目决定"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 48567,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "微生物在我们生活中无处不在，①—④是几种微生物的示意图。下列描述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. ①的细胞结构有细胞膜、细胞核等",
      "B. ②的细胞结构简单，由蛋白质和遗传物质组成",
      "C. ③主要依靠孢子进行繁殖",
      "D. 以上微生物都可以充当分解者"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 48569,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小林家的午餐有红烧肉、米饭、凉拌时蔬、西瓜。如图是人体消化系统结构示意图，下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 米饭最终在④中被分解成葡萄糖",
      "B. ③分泌的消化酶能消化红烧肉",
      "C. 误食的西瓜籽经过了①②③④⑥⑦⑧",
      "D. 营养物质主要在⑦中被吸收进入血液"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 48570,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "百日咳是由百日咳鲍特菌引起的呼吸道传染病，预防百日咳的主要途径是注射百日咳疫苗。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 百日咳疫苗属于抗原，疫苗在体内能引起非特异性免疫",
      "B. 百日咳疫苗属于抗体，疫苗在体内能引起特异性免疫",
      "C. 百日咳患者应居家隔离，这属于保护易感人群",
      "D. 百日咳爆发期间，戴口罩是为了切断病菌的传播途径"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 48573,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小明在打篮球时突然受伤晕倒，送往医院处理伤口并进行血样检测，发现其晕倒原因是贫血。如图是显微镜下的人血涂片。有关说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 贫血的主要原因可能是图中②过少",
      "B. 伤口的止血、结痂主要依靠图中③",
      "C. 若伤口化脓，脓液的主要成分是①",
      "D. 图中④只有运输营养物质的功能"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 48575,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物技术与人类文明息息相关，常见的生物技术有发酵技术、食品保存技术、基因工程技术、克隆技术等。下列相关阐述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 冷藏蔬菜可抑制微生物的生长繁殖",
      "B. 酸奶 <img src=\"images/河北_e26b19_4782abe5.wmf\"> 制作主要与酵母菌的发酵有关",
      "C. 克隆羊“多莉”的遗传物质来自孕育它的母体",
      "D. 转基因食品非常安全，可以放心食用"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 48577,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "现代马的进化过程有比较完整的化石证据。下图是马及其前肢的进化过程示意图，相关分析正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 化石是研究生物进化的唯一证据",
      "B. 现代马是经过漫长的地质年代逐渐进化来的",
      "C. 现代马的形态、前肢特征是主动适应环境的结果",
      "D. 从始祖马到现代马是人工选择的结果"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 48578,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生活中常常会遇到各种突发情况，掌握一些急救措施是非常必要的。下列急救措施错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 遇静脉出血者，压迫其伤口的远心端止血",
      "B. 遇煤气中毒者，迅速将其移动到空气流通的地方",
      "C. 遇突发脑溢血者，立即将其搬动到床上，再拨打急救电话",
      "D. 遇溺水者，先清除其口鼻内的异物，再进行人工呼吸"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 48579,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学设计了如下装置，用来模拟肺与外界的气体交换，a、b、c模拟呼吸系统的相应结构，橡皮膜模拟膈。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 图中a、b、c分别模拟支气管、气管、肺",
      "B. 向上推橡皮膜，模拟吸气过程，液面A下降",
      "C. 向下拉橡皮膜，c内气压减小，液面B上升",
      "D. 向下拉橡皮膜，模拟膈肌收缩，液面B下降"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 40548,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "自然界中的生物形形色色。种类繁多，它们都具有一些共同特征。下列不属于生物共同特征的是（    ）",
    "province": "河北",
    "options": [
      "A. 都具有神经系统",
      "B. 都需要物质和能量",
      "C. 都有遗传变异现象",
      "D. 都能对环境产生影响"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 40549,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "大熊猫是我国特有珍稀动物，主要以竹类为食。大熊猫细胞和竹子细胞中都具有的结构是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞壁、细胞膜、细胞核",
      "B. 细胞壁、线粒体、细胞核",
      "C. 细胞膜、线粒体、细胞核",
      "D. 细胞膜、叶绿体、细胞核"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 40550,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "初夏时节。成都市的蓝花楹陆续盛开，蓝紫色的花朵令人赏心悦目。蓝花楹细胞进行分裂时，最先一分为二的结构是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞壁",
      "B. 细胞膜",
      "C. 细胞质",
      "D. 细胞核"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 40551,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某绿色开花植物的叶及其部分结构如图所示。下列对图中①②③所属结构层次的判断。正确的是（    ）",
    "province": "河北",
    "options": [
      "A. ①细胞、②组织、③器官",
      "B. ①器官、②组织、③组织",
      "C. ①组织、②组织、③器官",
      "D. ①器官、②器官、③细胞"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40552,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "将两个大小相同的萝卜条分别浸泡于甲、乙两种不同浓度的蔗糖溶液中，一段时间后。观察到浸泡在甲溶液中的萝卜条变硬增大，浸泡在乙溶液中的萝卜条变软缩小。对实验前甲、乙两种溶液浓度大小关系的判断，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 甲>乙",
      "B. 甲<乙",
      "C. 甲=乙",
      "D. 无法判断"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40553,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在量筒中插入一支正常生长的带叶枝条，将其置于适宜光照条件下，如图所示。24小时后，观察到整个装置重量明显减少。该装置重量减少的主要原因是（    ）",
    "province": "河北",
    "options": [
      "A. 光合作用释放氧气",
      "B. 呼吸作用释放二氧化碳",
      "C. 蒸发作用散失水分",
      "D. 运输作用运走有机物"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 40554,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在适宜光照条件下、某植物体内与光合作用有关的过程如图所示。图中①②③代表的物质依次是（    ）",
    "province": "河北",
    "options": [
      "A. 二氧化碳、水、氧气",
      "B. 二氧化碳、氧气、水",
      "C. 氧气、二氧化碳、水",
      "D. 氧气、水、二氧化碳"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40555,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小明利用如图所示的实验装置，燃烧食物并观察水温的变化。该实验不能用于验证（    ）",
    "province": "河北",
    "options": [
      "A. 食物中的能量通过燃烧可释放出来",
      "B. 谷类、豆类等食物中贮存有能量",
      "C. 不同食物中贮存的能量有差异",
      "D. 糖类是生命活动的主要能源物质"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 40556,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "夏季是溺水高发季节，同学们应注意安全，防止溺水。若遇到有人意外溺水导致呼吸暂停，可采用人工呼吸的方法实施急救。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 溺水首先影响的是肺与血液的气体交换过程",
      "B. 人工呼吸前应先清除溺水者呼吸道内的异物",
      "C. 口对口吹气法是人工呼吸常用的一种方法",
      "D. 实施急救的同时应及时拨打“120”急救电话"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 40557,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "健康人形成尿液的过程中，某物质在肾单位不同部位的浓度变化如图所示。据图推测，该物质可能是（    ）",
    "province": "河北",
    "options": [
      "A. 蛋白质",
      "B. 尿素",
      "C. 葡萄糖",
      "D. 无机盐"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 40558,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "成都大熊猫繁育研究基地的熊猫“花花”。听到饲养员谭爷爷喊“花花，过来！”，就会摇摇晃晃跑过来。“花花”的这一反应（    ）",
    "province": "河北",
    "options": [
      "A. 属于非条件反射",
      "B. 需要大脑皮层的参与",
      "C. 一旦建立就不会消失",
      "D. 不需要完整的反射弧参与"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40559,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "同学们在学习和生活中应养成良好的用眼习惯，如果长时间看手机、打游戏等，易导致眼睛近视。患近视眼后可能（    ）",
    "province": "河北",
    "options": [
      "A. 晶状体曲度过大",
      "B. 眼球前后径过短",
      "C. 物像成于视网膜后方",
      "D. 佩戴凸透镜矫正"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 40560,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某青年在体检中检测出了尿糖，进一步多次测定尿糖和血糖，均比正常值高。据此推测，该青年体内分泌不足的激素最可能是（    ）",
    "province": "河北",
    "options": [
      "A. 甲状腺激素",
      "B. 性激素",
      "C. 生长激素",
      "D. 胰岛素"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 40561,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "扦插玫瑰的枝条能长出新的植株，下列植物的生殖方式与此不同的是（    ）",
    "province": "河北",
    "options": [
      "A. 柑橘的嫁接繁殖",
      "B. 桂花的压条繁殖",
      "C. 玉米的种子繁殖",
      "D. 马铃薯的块茎繁殖"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 40562,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "染色体是细胞核中的重要结构，它与蛋白质、DNA、基因的关系如图所示。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 染色体的主要成分是DNA和蛋白质",
      "B. 每条染色体上都含有多个DNA分子",
      "C. 基因是包含遗传信息 <img src=\"images/河北_2cb774_c7bd37b8.wmf\"> DNA分子片段",
      "D. 细胞中每个DNA分子上含有多个基因"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40563,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人的生殖细胞含有常染色体和性染色体。正常精子和卵细胞中都可能出现的染色体组成是（    ）",
    "province": "河北",
    "options": [
      "B. 22对常染色体+XY",
      "C. 22条常染色体+Y",
      "D. 22条常染色体+X"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 40564,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物的变异分为可遗传的变异和不可遗传的变异。下列属于可遗传变异的是（    ）",
    "province": "河北",
    "options": [
      "A. 通过近视矫正手术使视力恢复正常",
      "C. 经常打乒乓球使手眼协调能力提高",
      "D. 一对右利手夫妻生出了左利手孩子"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 40565,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年4月26日，成都世界园艺博览会盛大开幕。世园会的会徽和吉祥物涉及黄金竹、芙蓉、银杏和珙桐等植物元素（如图）。这四种植物中，属于裸子植物的是（    ）",
    "province": "河北",
    "options": [
      "A. 黄金竹",
      "B. 芙蓉",
      "C. 银杏",
      "D. 珙桐"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 40566,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "脊椎动物种类繁多。形态结构和生理功能有明显差异。下列脊椎动物中，属于变温动物且进行体内受精的是（    ）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_2cb774_130f172c.png\">",
      "B. <img src=\"images/河北_2cb774_cce23dfd.png\">",
      "C. <img src=\"images/河北_2cb774_61e6ade1.png\">",
      "D. <img src=\"images/河北_2cb774_360a9ddd.png\">"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40567,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国相继发现了中华龙鸟、孔子鸟等大量古鸟化石。这些古鸟化石既保留了古代爬行动物的某些特征，又出现了鸟类的一些特征。这些化石证据支持（    ）",
    "province": "河北",
    "options": [
      "A. 鸟类起源于古代爬行类动物",
      "B. 爬行类动物起源于古代鸟类",
      "C. 哺乳类动物起源于古代鸟类",
      "D. 爬行类动物起源于古代鱼类"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 40628,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "珊瑚虫常与藻类植物生活在一起，互相受益。由大量珊瑚形成的珊瑚礁和珊瑚岛，能够给鱼类创造良好的生存环境，加固海边堤岸，有利于维持海洋生态系统的稳定。下列相关叙述中错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 珊瑚能不断长大，因此珊瑚是生物",
      "B. 藻类植物可为珊瑚虫提供所需氧气",
      "C. 珊瑚虫可为藻类植物提供营养物质",
      "D. 珊瑚虫一般生长在温暖的浅水区域"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 40629,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在自然界中，一方面生物的生活和分布受很多生态因素的影响，另一方面生物在适应环境的同时也影响和改变着环境。下列相关叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 生物的环境是指生物的生存地点",
      "B. 非生物因素只有阳光、温度和水",
      "C. 生物既受环境影响，也能影响环境",
      "D. 同种生物的个体之间只有竞争关系"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 40630,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "保护生物多样性是实现人类社会可持续发展的基础。下列对生物多样性的理解，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 生物多样性是指生态系统的多样性",
      "B. 物种多样性比较高的生态系统相对稳定",
      "C. 基因多样性较低的物种适应环境能力更强",
      "D. 大量引进外来物种可丰富我国的生物多样性"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40631,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在用显微镜观察黄瓜表层果肉细胞临时装片时，下列有关说法正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 在显微镜下可观察到细胞内的叶绿体",
      "B. 低倍镜换成高倍镜后会导致视野变亮",
      "C. 换用高倍镜后，应使用粗准焦螺旋调节",
      "D. 观察装片，镜筒下降时眼睛应注视目镜"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 40632,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "细胞 <img src=\"images/河北_4b3c44_ca5a225f.png\"> 生活靠细胞各结构的分工合作。下列对于细胞膜功能的叙述，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 细胞的控制中心",
      "B. 保护和支持的作用",
      "C. 控制物质的进出",
      "D. 储存细胞液的场所"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 40633,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关细胞分裂、分化的叙述，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 分裂产生的新细胞其遗传物质不会改变",
      "B. 细胞分裂各个时期染色体的形态无变化",
      "C. 细胞分化将导致细胞形态结构发生变化",
      "D. 细胞分化将导致细胞功能发生相应变化"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40634,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "取同一植物相同大小的两个枝条，分别标记为A、B，枝条A保留叶片，枝条B摘除叶片，然后，将它们分别插入两个相同大小盛有等量清水的量筒中。在量筒中滴加油滴，让油滴铺满水面。将这两个装置放在相同的环境条件下24小时。下列有关叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 该实验的变量是有无叶片",
      "B. 量筒中滴加油滴的目的是防止水分蒸发",
      "C. 实验结束后，A所在量筒比B所在量筒液面低 <img src=\"images/河北_4b3c44_ff274479.png\">",
      "D. 两量筒中液面差异的原因是枝条A进行了光合作用"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 40635,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "夏季末，农民从田间刚收获的新鲜稻谷，由于下雨不能晾晒而堆积到屋内形成谷堆，一段时间后谷堆内出现发热发烫的现象。这是由于新鲜稻谷有较为旺盛的（　　）",
    "province": "河北",
    "options": [
      "A. 蒸腾作用",
      "B. 呼吸作用",
      "C. 光合作用",
      "D. 吸收作用"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40636,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图中的X、Y、Z三条曲线表示食物中的淀粉、脂肪、蛋白质在消化道各部位（A~E）被消化的程度。下列相关分析错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 曲线X代表淀粉在消化道中的含量变化",
      "B. 曲线Y代表的物质在C中被胃蛋白酶部分分解",
      "C. 曲线Z代表的物质在D中被分解成氨基酸",
      "D. 三条曲线的变化表明D是主要的消化场所"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 40637,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "科学合理的营养有助于身体健康。下表列出了甲、乙、丙、丁、戊5种食物（各100克）中除水和无机盐以外的主要成分含量，下列分析错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 儿童、青少年的膳食中应适量增加丙的比例",
      "B. 膳食中适量补充戊有助于我们预防坏血病",
      "C. 膳食中适量补充乙有助于我们预防夜盲症",
      "D. 为满足机体能量的需求膳食中应以甲为主"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 40638,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "血液不仅具有运输作用，而且还具有防御和保护作用。下列不能体现血液具有防御和保护作用的是（　　）",
    "province": "河北",
    "options": [
      "A. 白细胞能吞噬伤口感染的细菌",
      "B. 红细胞能运输氧气",
      "C. 血浆中含有能抵御病原体的抗体",
      "D. 身体有了炎症白细胞会增多"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40639,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在“观察小鱼尾鳍内血液的流动”实验中，寻找毛细血管的最佳方法是（　　）",
    "province": "河北",
    "options": [
      "A. 血流速度很慢的血管",
      "B. 血管壁非常薄的血管",
      "C. 血液从主干流向分支的血管",
      "D. 红细胞单行通过的血管"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 40640,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图中甲、乙两条曲线表示肾单位形成尿液的过程中，肾小球中的血浆、肾小囊中的原尿、肾小管中的尿液中两种物质含量的变化情况，曲线乙代表的物质是（　　）",
    "province": "河北",
    "options": [
      "A. 血浆蛋白",
      "B. 葡萄糖",
      "C. 无机盐",
      "D. 尿素"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40641,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列反射中，属于人所特有的是（　　）",
    "province": "河北",
    "options": [
      "A. 排尿反射",
      "B. 眨眼反射",
      "C. 膝跳反射",
      "D. 谈虎色变"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 40642,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体的生命活动主要受神经系统的调节，但也受到激素调节的影响。下列相关叙述中正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 胰腺和胰岛都是内分泌腺",
      "B. 人体内的腺体都能分泌激素",
      "C. 激素调节不受神经调节的控制",
      "D. 激素调节能对神经调节产生影响"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 40643,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "基因在细胞里存在于遗传物质——DNA分子上，而DNA又大多集中在染色体上。下列关于基因、DNA和染色体关系的叙述，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 每条染色体上只含有1个基因",
      "B. 每条染色体上会有多个DNA分子",
      "C. 每条染色体上只有1个蛋白质分子",
      "D. 每个DNA分子上含有多个基因"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 40644,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "除草剂等化学产品的广泛使用，不仅对生物产生直接作用，也会带来一些未知的长期影响。科研人员研究发现，随着草甘膦（一种除草剂）的长期使用，牵牛花对草甘膦的抗性逐渐增强。运用达尔文的自然选择学说进行分析，下列说法正确的是（　　） <img src=\"images/河北_4b3c44_ff274479.png\">",
    "province": "河北",
    "options": [
      "A. 草甘膦使牵牛花产生了抗性变异",
      "B. 牵牛花与草甘膦之间进行着生存斗争",
      "C. 牵牛花抗性增强是由于产生了定向变异",
      "D. 牵牛花对草甘膦的抗性永远有利于自身生存"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40645,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "环境条件适宜时，细菌、真菌的繁殖速度都比较快。下列关于细菌、真菌生殖的叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 自然界中，细菌一般都是靠分裂进行生殖的",
      "B. 芽孢是细菌在恶劣环境中产生的特殊生殖细胞",
      "C. 单细胞的酵母菌主要通过出芽生殖来繁殖后代",
      "D. 多细胞的食用菌主要通过孢子生殖来繁殖后代"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 40646,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "很多细菌和真菌对人类是有益的，我们的祖先很早就发现并利用一些微生物来制作传统发酵食品，以此改善了生活。下列食品的制作过程中没有利用发酵技术的是（　　）",
    "province": "河北",
    "options": [
      "A. 豆浆",
      "B. 泡菜",
      "C. 酸奶",
      "D. 果酒"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 40647,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "季节更替之际，气温起伏较大，容易导致传染病的流行。下列有关人体免疫的叙述，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 机体存在抵御外来病原体入侵的三道防线",
      "B. 机体的第三道防线是经抗原刺激而建立的",
      "C. 机体的三道防线都是针对某一特定的病原体",
      "D. 接种疫苗主要是刺激机体建立起第三道防线"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 27251,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "豆豆养了两只小仓鼠，每天定时给它们投喂食物，一个月后小仓鼠长大了不少，从一开始看到人就躲，到现在和豆豆成为了好朋友。以上描述体现了生物的哪些特征（　　）",
    "province": "河北",
    "options": [
      "A. ①②③",
      "B. ①②④",
      "C. ②③④",
      "D. ①③④"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 27252,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "显微镜能够帮助我们观察到用肉眼无法看清楚的生物体及其细微结构。下列有关实验操作及现象分析错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 要将图1中的甲细胞移动到视野中央，应向右上方移动玻片标本",
      "B. 要想观察到的细胞数量最多，应选择的镜头组合是图2中的②③",
      "C. 图1中洋葱鳞片叶内表皮细胞所具有的能量转换器是叶绿体和线粒体",
      "D. 若视野中出现一黑色污点，转动目镜和移动玻片污点均不动，则污点在物镜上"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 27253,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物体的一切生命活动都在一定的结构层次中有序的进行着。如图表示植物体的不同结构层次，下列说法正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 图中a过程产生的新细胞染色体数量减半",
      "B. “藕断丝连”中的丝来自植物体的营养组织",
      "C. 同图中所示植物体相比，熊猫特有的结构层次是系统",
      "D. 水绵 <img src=\"images/河北_44ed83_d0ab75e5.wmf\"> 多细胞植物，同戊一样由根茎叶等器官组成"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 27254,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物个体生长发育到一定阶段，就会通过一定的方式产生自己的后代，维持种族的延续。下列有关说法错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 鸟和爬行动物均通过产卵繁殖后代",
      "B. 在饲养家蚕的过程中，养殖户常通过延长家蚕的幼虫期来提高蚕丝的产量",
      "C. 用嫁接的方式可以实现一株杜鹃植株上开出不同颜色的杜鹃花",
      "D. 木贼是孢子植物，不开花也不结果，孢子是一种生殖器官，落到温暖潮湿的环境，就会萌发和生长"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 27255,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "被子植物的一生，要经历种子的萌发，植株的生长、发育、繁殖、衰老和死亡的过程。请据图分析，下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 图甲中的③发育成图乙中的B",
      "B. 种子萌发时，最先突破种皮的结构是图丙中的3，最终发育为图丁中的d",
      "C. 图丙中种子的萌发需要一定的水分、适宜的温度和充足的光照",
      "D. 图丁植株生长所需的水和有机物，是由d吸收并运输到整个植株"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 27256,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生命的起源和生物的进化问题，很久以来就吸引着人们去探求，人们对生物进化过程的认识将越来越接近历史原貌。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 加拉帕戈斯群岛上不同环境对地雀的形态特征起选择作用",
      "B. 新近形成的地层里只能找到复杂、高等的生物化石",
      "C. 米勒实验证明，原始地球上能产生蛋白质等有机物",
      "D. 由于滥用抗生素，细菌出现了抗药性变异"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 27257,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "秋冬季节流行性感冒高发，请根据所学知识判断下列说法正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 从传染病的角度分析，流感患者属于病原体",
      "B. 所有的传染病都可以通过接种疫苗来预防",
      "D. 流感流行时对教室消杀等措施属于切断传播途径"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 27258,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "健康是人们追求的美好愿望，是人生永恒的话题。下列关于健康的说法正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 青春期是学知识、长才干、树立远大理想、塑造美好心灵的关键时期",
      "B. 对于因溺水而窒息者，我们应该直接进行人工呼吸",
      "C. 健康就是无伤无病，一个人生理上没有疾病就说明这个人是健康的",
      "D. 病情稍有好转就自行停止用药，可以避免药物的副作用加剧"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 103811,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "复旦大学开发的对话式大型语言模型MOSS能自主学习和理解人类语言。它模拟了大脑皮层中的什么功能区？（    ）",
    "province": "河北",
    "options": [
      "A. 运动中枢",
      "B. 听觉中枢",
      "C. 语言中枢",
      "D. 视觉中枢"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 103812,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "长期感染幽门螺杆菌可导致局部胃腺萎缩，让人患萎缩性胃炎，影响消化功能。据此可推测萎缩性胃炎患者（    ）",
    "province": "河北",
    "options": [
      "A. 胃液分泌量明显增多",
      "B. 不能消化脂肪类食物",
      "C. 不能消化淀粉类食物",
      "D. 蛋白质消化功能减弱"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 103813,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某患者肺泡内充满了大量积液，部分肺泡塌陷，表现出胸闷气喘、呼吸急促等症状。据此可推测该患者（    ）",
    "province": "河北",
    "options": [
      "A. 呼吸的频率比正常人低",
      "B. 肺通气和肺换气均受阻",
      "C. 血液中白细胞含量偏低",
      "D. 血液中的氧气含量偏高"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 103814,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图为人体内某结构中的血液流动示意图，其中②表示器官或结构、①③表示血管、箭头表示血流方向，下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. ②表示肺时，③中氧气丰富，血液颜色暗红",
      "B. ②表示小肠时，③中营养物质可能比①丰富",
      "C. ②表示肾小球时，①和③所代表的都是动脉",
      "D. ②表示心脏时，①中流动的不一定是动脉血"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 103815,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某男子近日身体不适，医生结合症状开单，为他作了尿液化验，部分化验数据如表。据此判断，该男子发生病变的部位是（    ）",
    "province": "河北",
    "options": [
      "A. 肾小管",
      "B. 肾小球",
      "C. 肾小囊",
      "D. 集合管"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 103816,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年5月17日，安徽医科大学第一附属医院全球首创，将转基因猪肝脏成功移植到肝癌重症患者身上，开辟了肝癌治疗新路径。从免疫概念分析，该转基因猪肝脏相当于（    ）",
    "province": "河北",
    "options": [
      "A. 抗体",
      "B. 病原体",
      "C. 抗原",
      "D. 疫苗"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 103817,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "航天员叶光富在“天宫课堂”的太空细胞学实验中，刺激导入了荧光蛋白基因的心肌细胞，发现它会收缩并发荧光。下列关于该心肌细胞的说法，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 它的出现主要运用了克隆技术",
      "B. 它的出现主要用了转基因技术",
      "C. 它是传统生物技术运用的产物",
      "D. 它在受刺激时收缩是反射过程"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 103818,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学用洋葱鳞片叶内表皮制作临时装片观察细胞结构，在高倍镜下获得如图所示视野（未按实际大小呈现）。下列相关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 要将图中完整的细胞移到视野中央，应向左移动装片",
      "B. 制作装片时不能用碘液染色，否则影响结构b的观察",
      "C. 结构a是细胞质，含有叶绿体、线粒体和液泡等结构",
      "D. 细胞最外层的结构c是细胞膜，具有保护和支持作用"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 103819,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "当下，我国果蔬主产区普遍使用大型封闭式气调冷藏库（充入氮气替换部分空气）储藏果蔬，以延长果蔬的保鲜时间，增加农民收益。下列相关叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 充入氮气替换部分空气降低了气调冷藏库中氧气的含量",
      "B. 气调冷藏库空气流通小，果蔬水分散失少，有利于保鲜",
      "C. 气调冷藏库中温度低，细菌繁殖受抑制，果蔬不易腐烂",
      "D. 气调冷藏库中温度低、氧气少，果蔬不能进行呼吸作用"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 103820,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“瑞雪兆丰年”描述了雪对作物的积极影响。关于影响原理，有人提出了“①雪中含有某些物质，这些物质促进作物生长”“②雪冷冻作物，冷刺激促进作物生长”两种观点。某同学以麦苗为材料，设计了如下实验对此进行探究。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 上述实验在设计上不合理，违背了单一变量原则",
      "B. 增加上述实验的重复次数，能提高结果的可靠性",
      "C. 分析甲、乙两组麦苗长势，能判断观点①的正误",
      "D. 分析甲、丙两组麦苗长势，能判断观点②的正误"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 92268,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "显微镜下观察洋葱鳞片叶表皮细胞临时装片时，发现视野较暗，应该调节（    ）",
    "province": "河北",
    "options": [
      "A. 粗准焦螺旋",
      "B. 反光镜",
      "C. 细准焦螺旋",
      "D. 物镜"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 92269,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "葡萄酒产业是宁夏六种特色产业之一。葡萄中酸甜可口的汁液主要来自细胞的（    ）",
    "province": "河北",
    "options": [
      "A. 细胞膜",
      "B. 细胞质",
      "C. 液泡",
      "D. 细胞核"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 92270,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "从一个小小的细胞到呱呱坠地的婴儿，生命给了我们太多的惊奇和感动。下列叙述不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 甲表示受精卵，是在子宫内形成的",
      "B. 甲到乙表示细胞分裂",
      "C. 乙到丙表示细胞分化",
      "D. 胎儿和母体通过胎盘进行物质交换"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 92271,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“辣椒炒鸡肉”是一道营养丰富的家常菜。与鸡相比，辣椒植株没有的结构层次是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞",
      "B. 组织",
      "C. 器官",
      "D. 系统"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 92272,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人的性别是由性染色体决定的。男孩体细胞内的Y染色体一定来自（    ）",
    "province": "河北",
    "options": [
      "A. 父亲",
      "B. 母亲",
      "C. 外祖母",
      "D. 外祖父"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 92273,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "青春期的男孩女孩在身体和心理上会发生显著变化。下列有关青春期的叙述不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 身高和体重迅速增长",
      "B. 喉结突出属于男性的第二性征",
      "C. 生殖器官完全发育成熟",
      "D. 内心世界变得复杂，性意识开始萌动"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 92274,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学比较了消化系统和呼吸系统的组成，绘制了下图，图中Ⅰ所指的器官是（    ）",
    "province": "河北",
    "options": [
      "A. 胃",
      "B. 咽",
      "C. 口腔",
      "D. 气管"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 92275,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "动物的行为有利于自身的生存和种族的延续。下列属于学习行为的是（    ）",
    "province": "河北",
    "options": [
      "A. 刚出生的小猫吮吸母乳",
      "B. 大山雀偷喝瓶中牛奶",
      "C. 雄孔雀开屏吸引雌孔雀",
      "D. 秋天大雁飞到南方越冬"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 92276,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年5月12日是我国第16个防震减灾日，学校组织了防震演练，同学们听到警报声后立即作出避震反应。人耳中接收警报声的听觉感受器位于（    ）",
    "province": "河北",
    "options": [
      "A. 鼓膜",
      "B. 听小骨",
      "C. 半规管",
      "D. 耳蜗"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 92277,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "《诗经》中“折柳樊圃”的诗句描述了古代劳动人民把柳枝折断，插在菜园周围长成篱笆的情景。与柳枝的繁殖方式不同的是（    ）",
    "province": "河北",
    "options": [
      "A. 月季用枝条扦插",
      "B. 草莓用匍匐茎繁殖",
      "C. 对桃树进行嫁接",
      "D. 大豆用种子繁殖"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 92278,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国是动物种类最多的国家之一。以下是我们学过的几种动物，其体内有脊椎骨的是（    ）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_9ce51c_6dac35e4.png\">",
      "B. <img src=\"images/河北_9ce51c_d1d890fa.png\">",
      "C. <img src=\"images/河北_9ce51c_42e0efef.png\">",
      "D. <img src=\"images/河北_9ce51c_900d5ec2.png\">"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 92279,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物的生存依赖一定的环境，下列有关生物与环境关系的叙述，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 沙漠中植物稀少——环境影响生物",
      "B. 大树底下好乘凉——生物影响环境",
      "C. 蚯蚓疏松土壤——环境影响生物",
      "D. 北极熊皮下脂肪厚——生物适应环境"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 92280,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列食品与酵母菌有关的是（   ）",
    "province": "河北",
    "options": [
      "A. 酸奶",
      "B. 醋",
      "C. 馒头",
      "D. 酱油"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 92281,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "八年级学生到博物馆研学，他们参观了恐龙等生物化石并听取了解说员的讲解，对生物的进化有了更深的认识。以下说法不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 恐龙以卵生的方式繁殖后代",
      "B. 生物进化是自然选择的结果",
      "C. 化石是生物进化的唯一证据",
      "D. 越古老的地层中成为化石的生物越低等"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 92282,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列植物中没有根、茎、叶分化的是（    ）",
    "province": "河北",
    "options": [
      "A. 凤尾蕨",
      "B. 水绵",
      "C. 葫芦藓",
      "D. 银杏"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 92283,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "用高茎豌豆作为亲本进行杂交，子代豌豆性状的表现及数量如下图所示。如果用A表示显性基因，a表示隐性基因，以下叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 高茎与矮茎是一对相对性状",
      "B. 亲代高茎豌豆的基因型都是Aa",
      "C. 子代矮茎植株的基因型是aa",
      "D. 子代高茎植株的基因型都是AA"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 92284,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "由于口服疫苗的普遍使用，我国已经实现无脊髓灰质炎的目标。从传染病的预防措施分析，接种脊髓灰质炎疫苗属于（    ）",
    "province": "河北",
    "options": [
      "A. 保护易感人群",
      "B. 控制传染源",
      "C. 切断传播途径",
      "D. 消灭病原体"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 92285,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "安全用药和急救对保障身体健康、挽救生命有重要意义。下列做法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 燃气泄漏时应关闭阀门，开窗通风",
      "B. 服用新药、贵药、进口药效果更好",
      "C. 有人晕倒应及时拨打120急救电话",
      "D. 对溺水者进行人工呼吸前，要先清除口、鼻内的污物"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 92286,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“蜻蜓点水”描述的是蜻蜓产卵的现象。蜻蜓的发育经过受精卵→若虫→成虫三个时期。下列与蜻蜓的发育过程相同的生物是（    ）",
    "province": "河北",
    "options": [
      "A. 蝗虫",
      "B. 苍蝇",
      "C. 家蚕",
      "D. 蚊子"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 92287,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国政府提出2030年前实现碳达峰，实现这一目标要从自我做起。下列做法不可取的是（    ）",
    "province": "河北",
    "options": [
      "A. 骑自行车或步行上下学",
      "B. 回收利用废旧家电",
      "C. 经常使用一次性餐具",
      "D. 积极参加植树活动"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 67493,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "显微镜下观察洋葱鳞片叶表皮细胞临时装片时，发现视野较暗，应该调节（    ）",
    "province": "河北",
    "options": [
      "A. 粗准焦螺旋",
      "B. 反光镜",
      "C. 细准焦螺旋",
      "D. 物镜"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 67494,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "葡萄酒产业是宁夏六种特色产业之一。葡萄中酸甜可口的汁液主要来自细胞的（    ）",
    "province": "河北",
    "options": [
      "A. 细胞膜",
      "B. 细胞质",
      "C. 液泡",
      "D. 细胞核"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 67495,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "从一个小小的细胞到呱呱坠地的婴儿，生命给了我们太多的惊奇和感动。下列叙述不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 甲表示受精卵，是在子宫内形成的",
      "B. 甲到乙表示细胞分裂",
      "C. 乙到丙表示细胞分化",
      "D. 胎儿和母体通过胎盘进行物质交换"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 67496,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“辣椒炒鸡肉”是一道营养丰富的家常菜。与鸡相比，辣椒植株没有的结构层次是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞",
      "B. 组织",
      "C. 器官",
      "D. 系统"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 67497,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人的性别是由性染色体决定的。男孩体细胞内的Y染色体一定来自（    ）",
    "province": "河北",
    "options": [
      "A. 父亲",
      "B. 母亲",
      "C. 外祖母",
      "D. 外祖父"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 67498,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "青春期的男孩女孩在身体和心理上会发生显著变化。下列有关青春期的叙述不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 身高和体重迅速增长",
      "B. 喉结突出属于男性的第二性征",
      "C. 生殖器官完全发育成熟",
      "D. 内心世界变得复杂，性意识开始萌动"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 67499,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学比较了消化系统和呼吸系统的组成，绘制了下图，图中Ⅰ所指的器官是（    ）",
    "province": "河北",
    "options": [
      "A. 胃",
      "B. 咽",
      "C. 口腔",
      "D. 气管"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 67500,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "动物的行为有利于自身的生存和种族的延续。下列属于学习行为的是（    ）",
    "province": "河北",
    "options": [
      "A. 刚出生的小猫吮吸母乳",
      "B. 大山雀偷喝瓶中牛奶",
      "C. 雄孔雀开屏吸引雌孔雀",
      "D. 秋天大雁飞到南方越冬"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 67501,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年5月12日是我国第16个防震减灾日，学校组织了防震演练，同学们听到警报声后立即作出避震反应。人耳中接收警报声的听觉感受器位于（    ）",
    "province": "河北",
    "options": [
      "A. 鼓膜",
      "B. 听小骨",
      "C. 半规管",
      "D. 耳蜗"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 67502,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "《诗经》中“折柳樊圃”的诗句描述了古代劳动人民把柳枝折断，插在菜园周围长成篱笆的情景。与柳枝的繁殖方式不同的是（    ）",
    "province": "河北",
    "options": [
      "A. 月季用枝条扦插",
      "B. 草莓用匍匐茎繁殖",
      "C. 对桃树进行嫁接",
      "D. 大豆用种子繁殖"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 67503,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国是动物种类最多的国家之一。以下是我们学过的几种动物，其体内有脊椎骨的是（    ）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_7c7935_c6dbabf9.png\">",
      "B. <img src=\"images/河北_7c7935_557e315e.png\">",
      "C. <img src=\"images/河北_7c7935_f5ebcc2b.png\">",
      "D. <img src=\"images/河北_7c7935_749ca6ff.png\">"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 67504,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物的生存依赖一定的环境，下列有关生物与环境关系的叙述，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 沙漠中植物稀少——环境影响生物",
      "B. 大树底下好乘凉——生物影响环境",
      "C. 蚯蚓疏松土壤——环境影响生物",
      "D. 北极熊皮下脂肪厚——生物适应环境"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 67505,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列食品与酵母菌有关的是（   ）",
    "province": "河北",
    "options": [
      "A. 酸奶",
      "B. 醋",
      "C. 馒头",
      "D. 酱油"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 67506,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "八年级学生到博物馆研学，他们参观了恐龙等生物化石并听取了解说员的讲解，对生物的进化有了更深的认识。以下说法不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 恐龙以卵生的方式繁殖后代",
      "B. 生物进化是自然选择的结果",
      "C. 化石是生物进化的唯一证据",
      "D. 越古老的地层中成为化石的生物越低等"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 67507,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列植物中没有根、茎、叶分化的是（    ）",
    "province": "河北",
    "options": [
      "A. 凤尾蕨",
      "B. 水绵",
      "C. 葫芦藓",
      "D. 银杏"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 67508,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "用高茎豌豆作为亲本进行杂交，子代豌豆性状的表现及数量如下图所示。如果用A表示显性基因，a表示隐性基因，以下叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 高茎与矮茎是一对相对性状",
      "B. 亲代高茎豌豆的基因型都是Aa",
      "C. 子代矮茎植株的基因型是aa",
      "D. 子代高茎植株的基因型都是AA"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 67509,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "由于口服疫苗 <img src=\"images/河北_7c7935_cad44a76.wmf\"> 普遍使用，我国已经实现无脊髓灰质炎的目标。从传染病的预防措施分析，接种脊髓灰质炎疫苗属于（    ）",
    "province": "河北",
    "options": [
      "A. 保护易感人群",
      "B. 控制传染源",
      "C. 切断传播途径",
      "D. 消灭病原体"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 67510,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "安全用药和急救对保障身体健康、挽救生命有重要意义。下列做法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 燃气泄漏时应关闭阀门，开窗通风",
      "C. 有人晕倒应及时拨打120急救电话",
      "D. 对溺水者进行人工呼吸前，要先清除口、鼻内的污物"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 67511,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“蜻蜓点水”描述的是蜻蜓产卵的现象。蜻蜓的发育经过受精卵→若虫→成虫三个时期。下列与蜻蜓的发育过程相同的生物是（    ）",
    "province": "河北",
    "options": [
      "A. 蝗虫",
      "B. 苍蝇",
      "C. 家蚕",
      "D. 蚊子"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 67512,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国政府提出2030年前实现碳达峰，实现这一目标要从自我做起。下列做法不可取的是（    ）",
    "province": "河北",
    "options": [
      "A. 骑自行车或步行上下学",
      "B. 回收利用废旧家电",
      "C. 经常使用一次性餐具",
      "D. 积极参加植树活动"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 56791,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人类的生存和发展离不开环境，人类的活动既能改善环境，也会破坏环境。下列人类活动中属于破坏环境的是（    ）",
    "province": "河北",
    "options": [
      "A. 发展生态农业",
      "B. 开展植树造林",
      "C. 建立自然保护区",
      "D. 排放高辐射核污水"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 56792,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是某同学制作的植物细胞模型，①～④表示的结构中，能控制生物生长发育和遗传的是（    ）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ②",
      "C. ③",
      "D. ④"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 56793,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某蔬菜工厂计划采取适当增大昼夜温差的措施来提高蔬菜的产量。下列对白天和夜间温度的处理，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 白天和夜间都升温",
      "B. 白天升温，夜间降温",
      "C. 白天和夜间都降温",
      "D. 白天降温，夜间升温"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 56794,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学在“发豆芽” <img src=\"images/河北_f66165_f6db7c49.wmf\"> 实践活动中，先将大豆种子浸泡一段时间，再放到合适的装置中，此后的正确操作是（    ）",
    "province": "河北",
    "options": [
      "A. 定期洒水，保持湿度",
      "B. 装置始终充满水，保证水分供应",
      "C. 定时光照，保持温度",
      "D. 装置始终密封，防止微生物侵入"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 56795,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "将清洗干净、换水后的鱼缸放在温暖有阳光的地方，一段时间后，缸壁和水中出现了一些丝状的水绵。下列关于水绵的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 属于单细胞生物",
      "B. 细胞内没有叶绿体",
      "C. 体内有输导组织",
      "D. 产生的氧气利于鱼生长"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 56796,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "跳绳是一项青少年喜爱的健身运动，也是我国学生体质健康标准测试的内容之一。下列关于跳绳运动的分析，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 骨骼肌收缩牵引骨绕关节活动产生运动",
      "B. 心跳加快及呼吸加强增加了氧气的供应",
      "C. 消耗的能量主要来自肌细胞的无氧呼吸",
      "D. 身体及动作的协调依赖神经系统的调节"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 56797,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“试管婴儿”技术是解决不孕和实现优生的一项有效措施，与正常生育相比，该技术中的受精过程和受精卵发育成早期胚胎均在体外进行。正常生育时，这些过程主要发生在母体的（    ）",
    "province": "河北",
    "options": [
      "A. 输卵管中",
      "B. 胎盘中",
      "C. 子宫中",
      "D. 卵巢中"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 56799,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "医生在抢救呼吸衰竭的急危重症患者时，使用某种体外膜氧合器（俗称“人工肺”）的急救设备，其工作原理如下图（血液泵将患者的血液泵入氧合器，再输回到上腔静脉中）。下列相关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 氧合器为血液的流动提供动力",
      "B. 输回的血液先流入心脏的右心房",
      "C. 血液泵替代肺的气体交换功能",
      "D. 输回的血液中二氧化碳含量增加"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 56801,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "混养不同食性的鱼类，能增加鱼的产量，提高经济效益。下图是某鱼塘中部分生物构成的食物网，相关叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 浮游植物是该生态系统中的生产者",
      "B. 鲢鱼、鳙鱼和鲤鱼之间是互利共生关系",
      "C. 鱼类的混养提高了鱼塘中资源的利用率",
      "D. 能量可沿“浮游植物→浮游动物→鲤鱼”流动"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 56803,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "将两组大小和发育状况相近的健壮薄荷苗、分别培养在加土壤的雨水和未加土壤的雨水中，在相同条件下培养一段时间后，发现它们的长势差别很大，实验前后植株称重的结果如下表。下列相关叙述，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 上述实验中的变量为培养液里是否添加了土壤",
      "B. 光合作用产物的积累是植株质量增加的因素之一",
      "C. 组①植株质量显著增加是因为吸收了土壤中的有机物",
      "D. 此实验结果能为植物的生长需要无机盐提供证据支持"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 59178,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年国际生物多样性日的主题是：生物多样性，你我共参与。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 生物多样性是指生物种类的多样性",
      "B. 生物种类的多样性实质上是基因的多样性",
      "C. 每个生物都是一个丰富的基因库",
      "D. 保护生物多样性的根本措施是建立自然保护区"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 59179,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列农业生产中的做法和目的不相符的是（　　）",
    "province": "河北",
    "options": [
      "A. 对庄稼进行及时的排涝、松士——促进植物根的呼吸作用",
      "B. 合理密植——植物充分接受光照，提高光能利用率",
      "C. 晴朗的中午，给塑料大棚通风——增加氧气浓度，提高光合作用强度",
      "D. 阴天或傍晚移栽植物——降低植物的蒸腾作用"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 59180,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "图1是模拟人体膈肌与呼吸关系示意图，图2示肺内气压与外界气压差随时间的变化。下列叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 甲过程膈肌舒张，呼气",
      "B. 甲过程对应图2曲线的bd段",
      "C. 乙过程膈肌收缩，吸气",
      "D. 乙过程结束的瞬间对应图2曲线的c点"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 66843,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "提出一个问题往往比解决一个问题更重要。能够提出有研究价值的问题，是科学探究成功的前提。下列不属于科学问题的是（    ）",
    "province": "河北",
    "options": [
      "A. 滕州红荷湿地内哪种荷花的花期最长?",
      "B. 峄城万亩石榴园内哪种石榴花最美?",
      "C. 抱犊崮山上哪种植物自然生长速度最快?",
      "D. 台儿庄运河中哪种鱼的蛋白质含量最高?"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 66844,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在洁净的载玻片中央滴一滴草履虫培养液，在A处滴一滴质量分数为5%的食盐水溶液，B处滴一滴质量分数为5%的葡萄糖溶液，用牙签分别划通草履虫培养液与A、B两处溶液，形成连桥，如图所示。用放大镜观察，发现草履虫最终都向B运动。该实验不能证明的是（    ）",
    "province": "河北",
    "options": [
      "A. 草履虫是单细胞生物",
      "B. 草履虫能够运动",
      "C. 草履虫具有应激性",
      "D. 环境能够影响生物"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 66845,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国是动植物种类比较丰富的国家，下表中的动植物与所属种类对应不一致的是（    ）",
    "province": "河北",
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66846,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "微生物大都个体微小、结构简单。下列关于几种微生物的叙述，不符合事实的是（    ）",
    "province": "河北",
    "options": [
      "A. 大肠杆菌的DNA存在于细胞核中",
      "B. 蘑菇可利用孢子繁殖后代",
      "C. 酵母菌可以用来酿酒、做面包",
      "D. 艾滋病病毒营寄生生活"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 66847,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在二氧化碳、水分等条件适宜且不变的条件下，测定某种绿色植物在不同光照强度下氧气的释放量，结果如图所示。下列有关分析错误的是（    ）",
    "province": "河北",
    "options": [
      "A. a点光照强度为0，此时植物只进行呼吸作用",
      "B. 光照强度由0到b，植物光合作用强度不断增强",
      "C. c点以后，光照强度不再是限制光合作用强度的因素",
      "D. 若长时间白天光照强度为b，则植物仍可以正常生长"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 66848,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关绿色植物蒸腾作用的叙述，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 气孔是植物蒸腾作用散失水分的通道",
      "B. 蒸腾作用散失的水分是通过筛管运输的",
      "C. 移栽植物时剪去部分枝叶可降低蒸腾作用",
      "D. 蒸腾作用可促进无机盐在植物体内的运输"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 66849,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“海阔凭鱼跃，天高任鸟飞。”下列关于鱼类和鸟类的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 它们都属于恒温动物",
      "B. 体内都有由脊椎骨组成的脊柱",
      "C. 鱼的呼吸器官是鳃和皮肤",
      "D. 鸟类进行气体交换的结构是肺和气囊"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 66850,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是心脏结构及某时刻工作示意图，下列叙述错误的是（      ）",
    "province": "河北",
    "options": [
      "A. 图示为心室收缩状态",
      "B. 图中房室瓣处于关闭状态",
      "C. 图中③为左心室",
      "D. 与④相连的血管内流静脉血"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 66851,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于“鸟宿池边树，僧敲月下门。”中蕴含的生物问题，下列说法错误的是（       ）",
    "province": "河北",
    "options": [
      "A. 鸟类筑巢属于先天性行为",
      "B. 植物的根有向水生长的特性",
      "C. 敲门动作不需要神经系统的支配",
      "D. 肘关节在敲门动作中起支点作用"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66852,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "无偿献血是每个公民应尽的义务。献血后，针眼处起凝血作用的是（    ）",
    "province": "河北",
    "options": [
      "A. 血小板",
      "B. 白细胞",
      "C. 红细胞",
      "D. 吞噬细胞"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 66853,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "模型构建是学习生物学的一种有效策略，某生物兴趣小组的同学用橡皮泥做了一个肾单位结构模型，如下图所示。该模型中结构名称标注有误的是（    ）",
    "province": "河北",
    "options": [
      "A. 肾小管",
      "B. 肾小囊",
      "C. 肾小球",
      "D. 出球小动脉"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 66854,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "每年冬季都是流感的高发期，疾控部门建议人们要勤洗手、带口罩、及时接种流感疫苗。下列有关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 流感疫苗是抗体",
      "B. 注射流感疫苗获得的是非特异性免疫",
      "C. 患流感带口罩属于控制传染源",
      "D. 注射流感疫苗属于保护易感人群"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 66855,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“笋有多大，竹有多粗。”竹子的茎不能长粗，原因是茎内没有（    ）",
    "province": "河北",
    "options": [
      "A. 表皮",
      "B. 韧皮部",
      "C. 形成层",
      "D. 木质部"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66856,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "五一假期，小张同学一家去了青檀寺 <img src=\"images/河北_51bd2b_f6d09542.wmf\"> 蝴蝶谷游玩。他发现一只褐色带斑纹的“虫子”垂挂在一种植物叶片背面的叶柄处，一动不动，用手摸一下感觉光滑且硬硬的，如图所示。学生物学的爸爸告诉他，这“虫子\"是蝴蝶发育过程中的（    ）",
    "province": "河北",
    "options": [
      "A. 成虫",
      "B. 蛹",
      "C. 幼虫",
      "D. 卵"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 66857,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "母亲克服“十月怀胎”增重8~12kg 的艰辛，历经“一朝分娩”时的10级阵痛，才给了我们生命。出生前，母亲为我们提供的温暖、舒适、营养、安全的生长发育场所是（    ）",
    "province": "河北",
    "options": [
      "A. 卵巢",
      "B. 输卵管",
      "C. 子宫",
      "D. 胎盘"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66858,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "科研机构调查某地区一种兔时发现，20 世纪50 年代该种兔各种毛色个体的数量如图甲所示，20世纪90年代的数量如图乙所示，有关叙述不合理的是（    ）",
    "province": "河北",
    "options": [
      "A. 白色兔最容易被天敌发现",
      "B. 该种兔的毛色差异属于可遗传变异",
      "C. 浅色兔为适应环境变化发生深色变异",
      "D. 不同毛色兔的数量变化是自然选择的结果"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66859,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "习总书记在二十大报告中提出“实施生物多样性保护重大工程”。下列不属于保护生物多样性措施的是（    ）",
    "province": "河北",
    "options": [
      "A. 建立自然保护区实施就地保护",
      "B. 建立濒危动物繁育中心实施迁地保护",
      "C. 加强教育和法制管理",
      "D. 禁止开发和利用一切野生动植物资源"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 66860,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人类和现代类人猿的共同祖先是（    ）",
    "province": "河北",
    "options": [
      "A. 黑猩猩",
      "B. 露西",
      "C. 北京猿人",
      "D. 森林古猿"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 66861,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物学是一门实验学科，良好的实验操作技能对于学好生物学尤为重要。下列实验操作不科学的是（    ）",
    "province": "河北",
    "options": [
      "A. 观察到物像后转动粗准焦螺旋升高镜筒，然后转换高倍物镜",
      "B. 将叶片放入盛有酒精的小烧杯中隔水加热，脱去叶绿素",
      "C. 边滴加果蔬提取液边震荡，可准确记录果蔬提取液的用量",
      "D. 制作酸奶时密封好广口瓶的瓶盖，可形成无氧环境"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 66862,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国科研人员将乳酸菌的乳酸脱氢酶基因导人酿酒酵母，获得能产生乳酸的酿酒酵母菌株。该过程利用的生物技术是（      ）",
    "province": "河北",
    "options": [
      "A. 克隆技术",
      "B. 转基因技术",
      "C. 发酵技术",
      "D. 组织培养技术"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 79451,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于生物实验和探究活动的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 观察酵母菌时，使用显微镜的低倍物镜可以清晰地看到明显的液泡",
      "B. 探究叶片呼吸作用产生二氧化碳时，需要使用黑色不透光容器盛放叶片",
      "C. 探究牙齿的咀嚼和舌的搅拌对馒头的消化时，设置的对照组不用滴加唾液",
      "D. 用显微镜观察草履虫运动时，玻片移动方向要与视野中草履虫运动方向相反"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 79452,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "入侵生物豚草常与本地植物鬼针草混生在一起。某研究小组模拟不同酸雨环境对豚草和鬼针草生长的影响，实验结果如图所示。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 混生的豚草与鬼针草会争夺阳光、水分、有机物和生存空间等，存在竞争关系",
      "B. 酸雨pH值越小，对鬼针草株高的影响越显著，体现环境能影响生物",
      "C. 酸雨pH值越小，豚草与鬼针草的株高差距越明显，说明豚草更适应酸性环境",
      "D. 豚草进一步扩散会影响当地的生物多样性，可能破坏生态平衡"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 79453,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是人体结构层次示意图。下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 过程①中，细胞质先复制，然后平均分配到两个新细胞中",
      "B. 过程④形成组织，不同组织的细胞形态、结构和遗传物质各不相同",
      "C. 心脏属于器官，主要由肌肉组织构成，能将血液泵至全身各处",
      "D. 血液循环系统由心脏、血管和血液等器官构成，具有运输功能"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 79454,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是山椒藻，学名叫槐叶萍，是一种漂浮在水面上的水生植物。它的茎细长，叶舒展于水面上，具有叶脉，叶脉中有输导组织，在沉水叶的基部着生孢子果。这种植物属于（    ）",
    "province": "河北",
    "options": [
      "A. 藻类植物",
      "B. 苔藓植物",
      "C. 蕨类植物",
      "D. 种子植物"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 79455,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某研究小组利用如图装置进行无土栽培的实践探索。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 用充气泵向培养液中通入空气，有利于植株根的呼吸滴水同舟教育",
      "B. 在泡沫板上按合理的间距固定植株，有利于植株充分接受光照",
      "C. 幼苗移栽定植初期，给植株适当遮阴可抑制其蒸腾作用防止萎蔫",
      "D. 同种植物在不同生长发育期，定期更换的培养液成分及比例不变"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 79456,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "饮食直接影响着人体健康。研究人员抽样调查人们的饮食偏好，确定了四种饮食类型，并进行了一系列身心指标评估，分析饮食偏好与健康之间的关系，结果如表。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 用蛋白质类和脂肪类替代淀粉类提供能量不影响身心健康",
      "B. 类型2缺乏蛋白质，会影响身体生长发育及细胞修复更新",
      "C. 类型3缺乏维生素C，会导致身体抵抗力下降，易患坏血病",
      "D. 良好的饮食结构有助于维持人体正常生理功能和心理健康"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 79457,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某研究小组用大小、生理状况等均相同的健康大鼠进行实验，探究桑叶提取液对糖尿病大鼠的降血糖效果，实验方法和结果如表。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 甲组大鼠血糖值正常，是因为其胰岛能分泌正常水平的胰岛素",
      "B. 实验中灌喂蒸馏水、桑叶提取液的量应相同，避免结果具有偶然性",
      "C. 乙、丙两组实验说明桑叶提取液对糖尿病大鼠具有明显降血糖效果",
      "D. 根据实验数据可以推测，桑叶提取液对治疗糖尿病具有一定作用"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 79458,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "褪黑素是一种激素，可以调节人体昼夜节律。当人在黑暗环境中一段时间，光暗信号会引起反射活动，使松果体分泌褪黑素，如图所示。可见光中的蓝光对褪黑素分泌有较强的抑制作用。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 引起分泌褪黑素的反射是生来就有的，属于非条件反射",
      "B. 分泌褪黑素反射的反射弧由①②③④⑤构成，视网膜是感受器",
      "C. 光线依次穿过角膜、瞳孔、玻璃体、晶状体到达视网膜",
      "D. 睡前长时间看手机，手机蓝光会抑制褪黑素分泌影响睡眠"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 79459,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体感染乙型肝炎病毒后可能患乙型肝炎（简称乙肝）。乙肝病毒广泛存在于患者的体液中，主要通过血液、性接触、母婴等方式传播。下列叙述错误的是。（    ）",
    "province": "河北",
    "options": [
      "A. 乙肝病毒属于乙肝的病原体，乙肝患者属于乙肝的传染源",
      "B. 没有患过乙肝的健康人群属于乙肝传染病的易感人群",
      "C. 乙肝病毒侵入人体后被吞噬细胞吞噬消化属于非特异性免疫",
      "D. 注射时使用一次性注射用具属于预防乙肝措施中的切断传播途径"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 79460,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "图1示科研人员在内蒙古宁城县发现的距今1.65亿年且保存完整的蜻蜓化石，图2示蜻蜓的生活史。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 蜻蜓化石为研究生物进化提供重要证据，有助于追溯生物进化的历程",
      "B. 蜻蜓体表被有外骨骼，可保护和支持内部结构，防止体内水分大量蒸发",
      "C. 蜻蜓胸部有三对足、两对翅，有利于扩大其活动和分布的范围",
      "D. 蜻蜓的发育经历卵、幼虫、蛹、成虫四个时期，属于完全变态发育"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 79461,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“小时不识月，呼作白玉盘。又疑瑶台镜，飞在青云端。仙人垂两足，桂树何团团。白兔捣药成，问言与谁餐。蟾蜍蚀圆影，大明夜已残。羿昔落九乌，天人清且安……”——唐·李白《古朗月行》。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. “桂树”是高大乔木，花呈绿白色，果实呈卵球形，属于绿色开花植物",
      "B. “白兔”体表被毛；胎生哺乳；具有门齿、犬齿、臼齿的分化，适于食草",
      "C. “蟾蜍”幼体生活在水中，用鳃呼吸；成体主要用肺呼吸；变态发育",
      "D. “九乌”中的“乌”是指鸟类，飞行时气囊辅助肺进行双重呼吸"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 79462,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "甲图表示投篮动作，乙图是骨骼肌牵拉骨运动的模型。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 甲图中动作①到动作②的过程，肱二头肌收缩、肱三头肌舒张",
      "B. 乙图中⑤模拟关节，关节既牢固又灵活，适于完成各种动作",
      "C. 乙图中④舒张，③收缩牵引①②绕着⑤运动，可模拟完成屈肘动作",
      "D. 甲图中投篮动作不仅靠运动系统完成，还需要其它多个系统的配合"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 79463,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于健康生活的叙述，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 烟草燃烧产生的有害物质进入人体会引发心脑血管等多种疾病",
      "B. 受伤后当鲜红的血液从伤口喷涌而出时，应及时在伤口近心端按压止血",
      "C. 遇到挫折时可采取转移注意力、宣泄烦恼和自我安慰等方法调节情绪",
      "D. 在病情稍微好转时可以自行停止用药，尽量避免药物副作用的累加"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 79464,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是与生殖有关的结构示意图。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 甲图中a是生殖细胞，在适宜条件下能发育成一个新个体",
      "B. 乙图所示繁殖方式的优势是能保持结构Ⅰ原来的优良性状",
      "C. 丙图中2、3、4、5合称胚，胚和胚乳都是由受精卵发育而来的",
      "D. 丁图中①能产生卵细胞、分泌雌性激素，②是胚胎发育的场所"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 79465,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于生命起源和生物进化的叙述，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 米勒的实验说明原始地球上能形成构成生物体的有机物",
      "B. 生物在进化过程中形成各自适应环境的形态结构和生活习性",
      "C. 生物要生存下去，就得为获取足够食物、空间等进行生存斗争",
      "D. 在进化过程中生物趋向产生有利变异，并通过遗传逐代积累"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 35644,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "许多脍炙人口的诗词蕴含着丰富的生物学知识。下列语句中没有体现生命现象的是（　　）",
    "province": "河北",
    "options": [
      "A. 稻花香里说丰年",
      "B. 横看成岭侧成峰",
      "C. 草长莺飞二月天",
      "D. 一枝红杏出墙来"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 35645,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "甲、乙分别是动植物细胞结构示意图。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. ①和a都具有控制物质进出细胞的功能",
      "B. 为生命活动提供能量的主要场所是③和d",
      "C. ②和c是遗传的控制中心",
      "D. 绿色植物体的所有细胞中都有e"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 35646,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为观察人体口腔上皮细胞的实验器具和物像。图甲为显微镜的结构示意图，图乙为目镜和物镜，图丙为人体口腔上皮细胞的物像。下列叙述不正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 当环境光线较弱时，应调节③和④",
      "B. 可用碘液给口腔上皮细胞染色",
      "C. 选用镜头b、c组合可使观察到的物像最大",
      "D. 向右上方移动装片可使图丙中的细胞物像移至视野中央"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 35647,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列生产措施与生物学原理对应错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 移栽植物时去掉部分枝叶——降低光合作用",
      "B. 夜间适当降低大棚内的温度——抑制呼吸作用",
      "C. 水淹的农田及时排涝——保障农作物根部的氧气供应",
      "D. 作物种植时“正其行，通其风”——使作物周围有充足的二氧化碳"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 35648,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "将在黑暗处放置一昼夜的银边天竺葵进行如图处理后，移到光下照射3小时左右，摘下叶片甲和乙，经脱色、漂洗后滴加碘液，观察实验现象。该实验不能验证（　　）",
    "province": "河北",
    "options": [
      "A. 光是光合作用的条件",
      "B. 叶绿体是光合作用的场所",
      "C. 二氧化碳是光合作用的原料",
      "D. 氧气是光合作用的产物"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 35649,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "袁隆平培育的超级杂交稻最高产量达每亩1139千克，为世界粮食生产做出了突出贡献。下列关于超级杂交稻的叙述中，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 培育过程存在对杂交后代的不断选择",
      "B. 杂交稻的高产属于不可遗传的变异",
      "C. 杂交稻基因的改变是经人工诱导发生的",
      "D. 大米主要是水稻种子的子叶"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 35650,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "甲图示玉米种子萌发过程，乙图是在这一过程中的鲜重和干重（有机物）变化曲线。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 玉米种子萌发初期、胚芽首先突破种皮",
      "B. 玉米种子的子叶发育成甲图中的R部分",
      "C. ab段上升的主要原因是种子吸收水分",
      "D. ef段的幼苗只进行光合作用"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 35651,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于植物无性生殖的叙述，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 将马铃薯块茎切成小块种植，每块都能长成新个体",
      "B. 进行无性生殖的植物不能进行有性生殖",
      "C. 利用组织培养技术可产生植物新品种",
      "D. 利用嫁接技术可使酸枣树结出冬枣"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 35652,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "图甲、乙表示人体呼吸时的不同状态，图丙是肺容量随时间的变化曲线。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 甲状态时，肋间肌和膈肌都舒张",
      "B. 由甲到乙，对应曲线ab、cd段",
      "C. c点时肺内气压大于外界大气压",
      "D. b→c→d表示完成了两次完整的呼吸运动"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 35653,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图中，①和③表示血管；②表示某结构，箭头表示血液流动方向。下列分析正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 若②为肾小球，则①、③中分别流动脉血、静脉血",
      "B. 若②为心脏，则输液时针刺血管的类型与③相同",
      "C. 若②为下肢骨骼肌，③受伤出血，则应在近心端按压止血",
      "D. 若②为皮肤，则与①相比，③内血液中的尿素含量可能减少"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 35654,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列叙述与事实相符的是（　　）",
    "province": "河北",
    "options": [
      "A. 中医切脉时，手指按压的是上肢肱动脉",
      "B. 血常规化验结果显示红细胞数量偏多，说明体内有炎症",
      "C. 不加抗凝剂的新鲜血液，静置一段时间后会出现分层现象",
      "D. 如果视野中没有观察到白细胞，可移动血涂片继续寻找"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 35655,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "课间活动，豆豆同学突然掷来一个沙包，你不假思索地一把抓住了。豆豆同学说：“厉害，反应真快！”下列说法正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 完成“沙包飞来一抓住沙包”的结构基础是反射弧",
      "B. 你在注视沙包运动的过程中，②的曲度变小",
      "C. 你能听到豆豆的夸奖，接收声波刺激的感受器位于A",
      "D. 你对夸奖的反应与看见山楂分泌唾液同属人类特有的条件反射"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 35656,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "实验室里有一个标签脱落的小瓶，已知瓶内装的是甲状腺激素或胰岛素。某实验小组为确定瓶内激素种类，将20只生理状态相同且健康的小白鼠平均分为甲、乙两组，甲组饲喂添加该激素的饲料，乙组饲喂不添加该激素的等量同种饲料，置于相同且适宜的环境中，观察实验现象。下列分析不正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 该实验的变量是激素，乙组是对照组",
      "B. 如果该激素是胰岛素，那么甲组小白鼠会出现低血糖症状",
      "C. 如果甲组小白鼠的心率和呼吸频率高于乙组，那么该激素是甲状腺激素",
      "D. 如果甲乙两组小白鼠表现相同，可注射适量该激素进一步实验"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 35657,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "进入初中以来，同学们陆续进入了青春期。男生会长胡须、声音变粗；女生会声音变细、脂肪积累增多。下列与青春期相关的说法不正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 上述变化与生殖器官的发育与成熟有关",
      "B. 神经系统的调节功能明显增强",
      "C. 适当参加体育运动可促进身体发育",
      "D. 独立意识逐渐增强、情绪稳定，遇事可自作主张"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 35658,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "校园内的“阳光体育”活动促进了青少年的健康成长。甲、乙两图分别是关节和骨骼肌的结构示意图。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 关节的基本结构包括3、4、5、6",
      "B. 关节的灵活性只与6有关",
      "C. 能够收缩为运动提供动力的是骨骼肌",
      "D. 一块骨骼肌由7和9固定在同一块骨上"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 35659,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "心肌梗死是一种严重的突发性心血管疾病，发病时胸骨后有持久的剧烈疼痛，多伴有呕吐、大汗淋漓等症状。如果遇此突发情况，下列急救方式中，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 迅速将病人搬到空气流通的地方",
      "B. 让病人半卧位靠在被子上，足稍抬高",
      "C. 给病人服用硝酸甘油片等药物缓解疼痛",
      "D. 拨打“120”急救电话，尽快将病人送至医院救治"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 35660,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "晓丽放学回家，看到妈妈有点感冒，并有头痛、发热、流涕等症状。她从家庭小药箱中找到了一盒药，如图是药物说明书。下列说法正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 此药已过期，不能服用",
      "B. 晓丽妈妈可以服用此药",
      "C. 服用此药后不影响安全驾驶",
      "D. 这是处方药，需要凭处方才能购买"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 35661,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于生物体结构和功能相适应的叙述中，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 小肠绒毛壁只由一层上皮细胞构成，有利于食物的消化",
      "B. 肺泡数目很多，外面缠绕丰富的毛细血管，有利于气体的交换",
      "C. 心房与心室、心室与动脉之间有瓣膜，保证血液向一个方向流动",
      "D. 神经元有很多突起，有利于信息的接收和传递"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 35662,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是一只果蝇体细胞内的染色体组成示意图。下列说法错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 该果蝇为雄性",
      "B. 其雌性子代一定遗传了它的X染色体",
      "C. Y染色体内包含两个盘旋在一起的DNA分子",
      "D. 红眼果蝇群体内偶然产生了一只白眼个体的现象属于变异"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 35663,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "自然界中的生物既能适应环境，也能影响环境。下列实例，不属于生物对环境影响的是（　　）",
    "province": "河北",
    "options": [
      "A. 树叶在秋冬季节纷纷飘落",
      "B. 过度放牧会使草场逐渐沙漠化",
      "C. 在农场中饲养蚯蚓可改善土质",
      "D. 在沙漠地区植树造林能防风固沙"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 35664,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物图中的微生物种类繁多、数量庞大、分布极广。以下有关微生物的说法正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 某些细菌在恶劣环境中利用芽孢进行繁殖",
      "B. 流感病毒可在细菌细胞内完成自我复制",
      "C. 蘑菇属于多细胞真核生物，靠菌丝吸收有机物营腐生生活",
      "D. 所有真菌在有氧和无氧的条件下，均能分解有机物获得能量"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 35665,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列探究活动中，操作方法与目的不相符的是（　　）",
    "province": "河北",
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 35666,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在棉田中长期使用同种杀虫剂后，发现防治农业害虫的效果越来越差。我国科学家将细菌中产生杀虫毒素的基因转移到棉花体内，培育出一系列抗虫棉品种，减少了杀虫剂的使用。下列说法正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 为适应有杀虫剂的环境，害虫出现了抗药性变异",
      "B. 害虫抗药性的出现是害虫对杀虫剂进行选择的结果",
      "C. 转移到棉花体内的产生杀虫毒素基因仍具有遗传效应",
      "D. 利用转基因技术培育出的作物无需论证即可投入农业生产"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 35667,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "酸奶酸甜可口，营养丰富，是利用乳酸菌发酵制成的一种乳酸饮品。某兴趣小组开展了制作酸奶的实践活动，步骤如下：",
    "province": "河北",
    "options": [
      "A. 该活动探究了温度对乳酸发酵的影响",
      "B. 用保鲜膜密封的主要目的是防止杂菌进入",
      "C. 加入酸奶的目的是接种乳酸菌",
      "D. 可将记录的数据绘制成曲线图以便分析"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 35668,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在生物学实践活动中，小明通过饲养家蚕，了解了家蚕的生殖与发育过程，对观察到的现象进行了总结与思考。下列说法错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 部分蚕种没有孵化出幼虫；可能是卵未受精",
      "B. 幼虫期有蜕皮现象，说明外骨骼不随身体的长大而生长",
      "C. 蛹期不食不动，说明虫体内部不进行生命活动",
      "D. 幼虫和成虫有明显差别，说明蚕的发育过程属于完全变态"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 24521,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "疟原虫是一种单细胞动物，寄生在人体内会使人感染疟疾。下列对疟原虫的推测，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 与小球藻细胞结构完全相同",
      "B. 没有核膜包被的细胞核",
      "C. 不能独立完成各项生命活动",
      "D. 在生态系统中属于消费者"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 24522,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学以紫色洋葱鳞片叶为实验材料，观察植物细胞的结构。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 撕取的洋葱鳞片叶内表皮应放在生理盐水中，保持其生物活性",
      "B. 需用滴管在载玻片的中央滴加碘液进行染色后，再盖上盖玻片",
      "C. 若只观察液泡，以洋葱鳞片叶的外表皮为材料观察效果更明显",
      "D. 在高倍镜下可清晰地观察到洋葱鳞片叶细胞的细胞膜和细胞壁"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 24523,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "不定芽是指从植物的叶、根等不定位置长出的芽，在适宜的环境下，不定芽落地即可生根长成新植株。落地生根的叶边缘可长出许多不定芽（如图）。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 以不定芽的方式繁殖属于无性生殖",
      "B. 组成不定芽的细胞体积小，细胞核大",
      "C. 不定芽的形成主要是靠细胞的分裂和分化",
      "D. 不定芽在植物体的结构层次上应属于个体"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 24524,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于生物学原理的应用，说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 为避免土壤溶液浓度过高引起“烧苗”，一次施肥不能太多",
      "B. 为避免伤口感染，包扎伤口时应选用密封，不透气的材料",
      "C. 为提高作物的光合作用效率，栽种时应“正其行，通其风”",
      "D. 为利用作物对无机盐吸收的差异，可采取“轮作”方式种植"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 24525,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "植物生长易受非生物因素的影响，如图甲、乙为栎树在不同光照环境中叶片的横切面，相关推测错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 甲可能处于阳光充足的环境中",
      "B. 乙的气孔数量多，更利于水分散失",
      "C. 若在同一环境条件下，甲制造有机物效率更高",
      "D. 甲、乙两种叶片的结构都与其所处环境相适应"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 24526,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为研究性格形成的机制，研究人员选取“负责任”母鼠（善于舔舐和清洁幼崽）和“不负责任”母鼠（不善于舔舐和清洁幼崽）进行亲子抚养实验，观察幼崽成年后的性格特点，实验过程及结果如表所示。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 本实验的变量是母鼠的抚养方式",
      "B. 组别4的抚养方式是“负责任”母鼠抚养",
      "C. 实验结果说明幼崽成年后的性格特点与其生母无关",
      "D. 实验启示家长给予孩子足够的关爱利于其形成良好的性格"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 24527,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "微生物与人类的生产．生活密切相关。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 郁金香碎色病毒需在葡萄糖溶液中培养",
      "B. 大肠杆菌能帮助人体抵御病菌的侵入，对人类没有危害",
      "C. 黑根霉依靠蔓延到营养物质内部的菌丝直接吸收有机物",
      "D. 酵母菌在适宜的温度和无氧条件下直接将淀粉分解成酒精"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 24528,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学设计的“消化和吸收”流程图如图（a、．b、c代表器官），相关分析错误的是（    ）",
    "province": "河北",
    "options": [
      "A. a代表口腔，此处消化淀粉的关键是含有唾液淀粉酶",
      "B. b代表胃﹐胃腺分泌的消化液呈酸性，可消化蛋白质",
      "C. c代表小肠，此外发生的物理消化是指小肠的蠕动",
      "D. 大部分营养物质在c处被吸收后进入循环系统"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 24529,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某项对肺癌患者和健康人中吸烟人数的调查数据如图所示，可以得出的合理结论是（    ）",
    "province": "河北",
    "options": [
      "A. 因吸烟而得肺癌的人数更多",
      "B. 吸烟可能导致健康人得肺癌",
      "C. 吸烟开始年龄越早，肺癌发生率越高",
      "D. 香烟中的尼古丁是导致肺癌的主要因素"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 24530,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "结构与功能观是生物学生命观念之一。下列说法正确的是（       ）",
    "province": "河北",
    "options": [
      "A. 肺泡壁由单层细胞构成，利于气体交换",
      "B. 成熟的红细胞没有细胞核，利于透过毛细血管壁",
      "C. 心脏的四个腔中充满血液，利于心肌细胞与血液物质交换",
      "D. 心室与动脉之间的动脉瓣朝心室方向打开，防止血液倒流"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 24531,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "欲观察小鼠甲状腺功能亢进（甲亢）引起的症状，合理的实验方法是（    ）",
    "province": "河北",
    "options": [
      "A. 手术摘除正常小鼠的垂体",
      "B. 手术摘除正常小鼠的甲状腺",
      "C. 给正常小鼠饲喂含碘丰富的食物",
      "D. 给正常小鼠饲喂甲状腺激素制剂饲料"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 24532,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“癌症免疫疗法”是指通过自身免疫功能来抗击癌细胞的疗法。最初是因癌症患者术后意外感染酿脓链球菌，导致其免疫功能增强、存活时间延长而被发现。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 酿脓链球菌侵入癌细胞使其破裂死亡",
      "B. 癌症免疫疗法改变了癌细胞 <img src=\"images/河北_98cf39_9d6a1f2d.wmf\"> 遗传物质",
      "C. 酿脓链球菌主要激活患者的非特异性免疫",
      "D. 癌症免疫疗法体现了人体免疫的防御功能"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 24533,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "当高烧不退时，下列辅助降低体温的措施中，不合理的是（    ）",
    "province": "河北",
    "options": [
      "A. 酒精擦拭四肢",
      "B. 适当减少衣物",
      "C. 加盖棉被排汗",
      "D. 用冷毛巾敷额头"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 24534,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "牵牛花有蓝色、粉色、紫色等不同花色，具有自花和异花两种传粉方式。研究发现，同一种牵牛花柱头与花药的距离不同。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 决定不同花色的花青素储存在液泡中",
      "B. 据图判断，牵牛花属于雌雄同株植物",
      "C. 距离越大，其传粉方式越可能为自花传粉",
      "D. 距离越小，后代越会产生更多的变异类型"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 24535,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "经过初中生物学的学习，我们对自己已有了清晰的认识。下列认识不合理的是（    ）",
    "province": "河北",
    "options": [
      "A. 父母的基因都会随着精子、卵细胞传递给我们",
      "B. 当受精卵形成的时候，我们的性别就已经确定了",
      "C. 刚出生的我们可以靠母乳抵抗外界的多种传染病",
      "D. 生殖器官的发育和成熟是青春期发育最突出的特征"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 24536,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某学习小组对图中动物按照一定的生物学依据进行了分类，相关说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. ①可能是体温是否恒定",
      "B. ②可能是呼吸器官不同",
      "C. ③可能是生殖发育特点不同",
      "D. ④可能是有无变态发育"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 24537,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "镰状细胞贫血是一种遗传病，患者的红细胞呈弯曲的镰刀状，易破裂。研究发现，在氧含量正常的情况下，具有一个镰状细胞贫血基因的人并不表现出该病的症状，具有一对该基因的人才会发病。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 镰状细胞贫血基因是显性基因，可能控制血红蛋白的合成",
      "B. 镰状细胞贫血患者父母正常，再生一个孩子患病的概率是25%",
      "C. 通过显微镜观察红细胞的形态可诊断是否为镰状细胞贫血患者",
      "D. 通过基因工程将正常基因导入造血干细胞可治疗镰状细胞贫血"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 24541,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国水稻有多个品种具有花色，如花壳、麻壳、紫米、红米等，都是由野生水稻选择培育而来。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 丰富的水稻品种资源体现了遗传的多样性",
      "B. 生物多样性的形成是指新的物种不断形成的过程",
      "C. 紫米、红米等多个品种的培育，是长期人工选择的结果",
      "D. 由野生水稻培育出新品种，体现了生物多样性的直接使用价值"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 24542,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "荒漠空气干燥，高度缺雨、昼夜温差大。下列关于荒漠生物的适应性推测，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 一年生植物大多在雨季生命力旺盛，迅速完成生命周期",
      "B. 仙人掌等植物具肥厚的肉质茎，以储存水适应荒漠环境",
      "C. 植物大多数气孔白天张开，夜间关闭，有利于光合作用",
      "D. 爬行动物蜥蜴和蛇的表皮外有角质鳞片，减少水分蒸发"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 24543,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "天然森林很少发生的松毛虫虫害，却经常发生在人工马尾松林中。下列相关分析错误的是（        ）",
    "province": "河北",
    "options": [
      "A. 人工马尾松林成分单一，营养结构简单",
      "B. 可利用性外激素诱捕松毛虫成虫，进行化学防治",
      "C. 松毛虫在天然森林中位于多条食物链，天敌相对较多",
      "D. 可把人工马尾松林改造为混交林，提升自我调节能力"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44947,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“不知细叶谁裁出，二月春风似剪刀。”诗中体现的生物特征是（    ）",
    "province": "河北",
    "options": [
      "A. 能生长",
      "B. 需要营养",
      "C. 能排出体内废物",
      "D. 能繁殖"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 44948,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "菠菜焯水时，水会变成绿色，绿色成分来自细胞的（    ）",
    "province": "河北",
    "options": [
      "A. 液泡",
      "B. 叶绿体",
      "C. 线粒体",
      "D. 细胞核"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44949,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列谚语能体现生物影响环境的是（    ）",
    "province": "河北",
    "options": [
      "A. 大雪纷纷落，明年吃馍馍",
      "B. 山上多种树，胜似修水库",
      "C. 肥是庄稼宝，施足又施巧",
      "D. 白露天气晴，谷子如白银"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44950,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小强在月季园里发现一株月季上开出多种颜色的花，培育这株月季的技术是（    ）",
    "province": "河北",
    "options": [
      "A. 扦插",
      "B. 压条",
      "C. 嫁接",
      "D. 组织培养"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44954,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "动物的外骨骼能防止体内水分的大量蒸发。以下动物具有外骨骼的是（    ）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_6fec23_5ed1255b.png\">",
      "B. <img src=\"images/河北_6fec23_67ed6529.png\">",
      "C. <img src=\"images/河北_6fec23_f9e61319.png\">",
      "D. <img src=\"images/河北_6fec23_c06dbe10.png\">"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44955,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“花褪残红青杏小”，又到了杏子成熟的季节。杏与银杏的主要区别是（    ）",
    "province": "河北",
    "options": [
      "A. 有根、茎、叶的分化",
      "B. 有输导组织",
      "C. 能产生种子",
      "D. 能形成果实"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44957,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小艾用显微镜观察水绵，发现水绵（    ）",
    "province": "河北",
    "options": [
      "A. 由单个细胞构成",
      "B. 有带状叶绿体",
      "C. 没有细胞核",
      "D. 叶片呈长条状"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44958,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "香椿是一种乔木，香椿芽有“树上佳蔬”的美誉。有关香椿的叙述不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 香椿芽是由叶芽发育成的",
      "B. 香椿的茎能逐年加粗是因为茎中有形成层",
      "C. 制作家具的香椿木取材于茎中的韧皮部",
      "D. 香椿依靠根毛从土壤中吸收水分"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44959,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "烟台市滨海景区海鸥成群飞舞，鸣叫嬉戏，吸引了游人驻足观赏。关于海鸥适于飞行的特点叙述不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 胸肌发达",
      "B. 在肺和气囊内进行气体交换",
      "C. 长骨中空",
      "D. 前肢变成翼"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44960,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "上完体育课回到教室，小刚拿起水杯大口喝水。完成下图动作时（    ）",
    "province": "河北",
    "options": [
      "A. ①舒张，②收缩",
      "B. ②两端附着在肱骨上",
      "C. 需要肌肉和骨骼的协调配合",
      "D. 只需要运动系统和神经系统的参与"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44961,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "塑料制品便利了人们的生活，但其中含有的一些塑化剂会对人体的生殖系统产生影响。塑化剂能引发性早熟吗？科研人员用小鼠设计了如下实验，相关步骤或结论正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 随机选择20只幼龄雌鼠",
      "B. 实验的变量是饲料",
      "C. 记录每只小鼠初次发情时间，分别计算每组的平均值",
      "D. 若甲组的初次发情时间早于乙组，则说明塑化剂能引发性早熟"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44962,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "维生素B2是人体必需的一种维生素，在人体内的储存是有限的，需要每天由饮食补充。当摄入量较大时，会通过泌尿系统排出体外。结合如图分析，维生素B2排出的途径不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 维生素B2由①进入③",
      "B. 维生素B2能过滤到④中",
      "C. 维生素B2在⑤处全部重吸收进入血液",
      "D. ⑥中的维生素B2会通过输尿管进入膀胱"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44964,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "春天去烟台长岛游玩，有时会看到国家一级保护动物斑海豹，它们从渤海辽东湾游至长岛海域休养生息，然后继续向西北太平洋迁徙。下列对斑海豹的叙述不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 用肺呼吸",
      "B. 皮下脂肪厚，有助于维持体温恒定",
      "C. 胎生、哺乳",
      "D. 既可以在水中又可以在陆地上生活，属于两栖动物"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44965,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "卷叶象甲（如图）是一类农业害虫，发育过程经过卵、幼虫、蛹和成虫四个时期。雌虫在植物叶片上产卵后，将整个叶片加工成卷筒状并切下，作为幼虫的食物来源和栖息场所。关于卷叶象甲的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 属于节肢动物中的甲壳类",
      "B. 卷叶象甲加工叶片属于先天性行为",
      "C. 发育过程为不完全变态",
      "D. 在蛹期喷洒农药防治最有效"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44967,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小华早上起床后，感到头疼、咽喉疼，浑身酸痛，且有流鼻涕、打喷嚏等症状。以下几种做法最可取的是（    ）",
    "province": "河北",
    "options": [
      "A. 找到以前吃过的感冒药，按照说明书剂量服用",
      "B. 自行购买抗病毒类药物服用",
      "C. 喝一杯热水，吃好早餐，坚持去上学",
      "D. 去医院就诊，遵医嘱治疗"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44968,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“民以食为天”，食物中的营养物质需要经过消化系统的消化、吸收才能被人体利用。结合如图，叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. ①分泌的消化液含有消化酶",
      "B. 蛋白质在③内消化成氨基酸",
      "C. ④分泌的消化液通过导管进入②",
      "D. ⑤是消化和吸收的主要场所"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44969,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "疟疾是目前全球发病率最高的传染病之一，幼儿发病率高于成年人。人被按蚊叮咬或输入带疟原虫的血液都可能感染疟原虫而患病。下列叙述不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 疟原虫是引起疟疾的病原体",
      "B. 严格检疫输入的血液制品目的是控制传染源",
      "C. 消灭蚊虫可以切断传播途径",
      "D. 为幼儿接种疟疾疫苗属于保护易感人群"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44970,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "建立模型是学习生物学知识的有效策略。图示模型能表示（    ）",
    "province": "河北",
    "options": [
      "A. ①②",
      "B. ②③",
      "C. ③④",
      "D. ①②③"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44971,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "雨后的校园里，常常会在靠近花坛的甬道上看到蚯蚓。关于蚯蚓的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 蚯蚓喜欢雨后爬到地面觅食",
      "B. 靠身体腹面的刚毛收缩爬行",
      "C. 蚯蚓和沙蚕、马陆都属于环节动物",
      "D. 能疏松土壤、提高肥力，还是优良的蛋白质饲料"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44972,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "研究者测量了一棵灰树18小时内水分的运输速率和水分的吸收速率，并绘制曲线（如图），分析正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 水分的运输速率大于吸收速率",
      "B. 水分的运输和吸收速率都与蒸腾作用无关",
      "C. 水分运输和吸收的最高速率相同",
      "D. 水分的运输速率和吸收速率存在相关性"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44974,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年4月，古生物研究人员在山东莱阳出土的恐龙蛋化石中发现了一个“变形蛋”，经研究推测“变形蛋”可能是鸭嘴龙的蛋。相关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 恐龙蛋是保存在地层中的恐龙的遗体",
      "B. 恐龙蛋是研究恐龙的唯一证据",
      "C. “‘变形蛋’可能是鸭嘴龙的蛋”是一种假说",
      "D. 恐龙蛋出现的地层比鱼类化石的古老"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44975,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "鮟鱇鱼（如图）是一种栖息在海底的鱼类，能借助第一背鳍向上延伸形成的肉状突起——“小灯笼”诱捕食物。从进化与适应角度分析，叙述不合理的是（    ）",
    "province": "河北",
    "options": [
      "A. 鮟鱇鱼的“小灯笼”与深海环境相适应",
      "B. 为了诱捕食物，鮟鱇鱼产生了“小灯笼”",
      "C. 鮟鱇鱼的“小灯笼”是长期自然选择的结果",
      "D. 鮟鱇鱼的牙齿与虎鲸的牙齿功能不同"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44978,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年国际生物多样性日主题为“生物多样性你我共参与”。下面关于保护生物多样性的认识和做法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 保护生物多样性就是保护物种的多样性",
      "B. 禁止个人将活的动物、新鲜的果蔬等由国外携带入境",
      "C. 建立自然保护区是保护生物多样性最有效的措施",
      "D. 收集和宣传有关生物资源保护的法律法规"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 44979,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "研究发现，疫苗具有预防和治疗癌症的潜力。下图表示利用癌细胞制备纳米疫苗引发小鼠免疫反应的过程。相关分析错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 纳米疫苗就是癌细胞",
      "B. 小鼠体内的淋巴细胞参与了免疫反应",
      "C. 该免疫类型属于特异性免疫",
      "D. 小鼠体内检测到死亡的癌细胞说明纳米疫苗有效"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 59515,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "蚯蚓能疏松土壤，产生的粪便还可以提高土壤肥力。从生物与环境的关系分析，下列与之相同的是（    ）",
    "province": "河北",
    "options": [
      "A. 沙漠中的植物根系发达",
      "B. 海豹的皮下脂肪非常厚",
      "C. 野兔随季节换毛",
      "D. 绿色植物能够净化空气"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 59516,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图为某草原生态系统中的食物网，下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 图中增加非生物部分即构成一个完整的生态系统",
      "B. 图中包含4条食物链",
      "C. 物质和能量在此食物网中都是循环流动的",
      "D. 若该生态系统被重金属污染，图中重金属积累最多的是鹰"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 59517,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“小糖丸”是我国培育的西瓜新品种，个头小，皮薄，含糖量高，其果肉部分主要含有（    ）",
    "province": "河北",
    "options": [
      "A. 保护组织",
      "B. 输导组织",
      "C. 营养组织",
      "D. 分生组织"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 59518,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "了解植物光合作用和呼吸作用的情况，可以帮助提高作物产量。关于玉米一天中生理过程变化的曲线（如图），下列分析合理的是（    ）",
    "province": "河北",
    "options": [
      "A. 曲线Ⅰ为光合作用，Ⅱ为呼吸作用",
      "B. 玉米在a、c点既不进行光合作用，也不进行呼吸作用",
      "C. 比较a、p、c三点，p点有机物积累最多",
      "D. 在b点玉米停止进行光合作用"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 59519,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "输卵管堵塞造成女性不孕症的原因是（    ）",
    "province": "河北",
    "options": [
      "A. 不能产生卵细胞",
      "B. 不能产生雌性激素",
      "C. 精子和卵细胞不能结合",
      "D. 不能形成胎盘"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 59520,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "学生餐饮应该按照“五谷、粗细、荤素、多样”的原则合理搭配，关于营养物质的说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 常吃海带、紫菜可以防治地方性甲状腺肿",
      "B. 婴幼儿缺乏钙或维生素D易患佝偻病",
      "C. 每天摄取含维生素丰富的食物，可以为生命活动补充能量",
      "D. 儿童、青少年应多吃一些含蛋白质丰富的食物"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 59521,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图为人体的消化系统结构示意图，下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 8分泌的消化液中含有胰岛素",
      "B. 有吸收功能的器官是图中的4、5、7、9",
      "C. 4中含有多种消化液，它们都含有消化酶",
      "D. 能消化蛋白质的酶来自于图中的4、7、8"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 59522,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“每天锻炼一小时，健康生活一辈子”，经常参加体育锻炼可以增强呼吸肌的功能，在吸气时，呼吸肌的状态是（    ）",
    "province": "河北",
    "options": [
      "A. 肋间肌和膈肌都舒张",
      "B. 肋间肌和膈肌都收缩",
      "C. 肋间肌舒张，膈肌收缩",
      "D. 肋间肌收缩，膈肌舒张"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 59523,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "近期，小丽同学经常精神不振，感觉疲劳、头晕，她去医院进行了血常规化验，化验单显示白细胞数值是7×109个/L（4~10×109个/L）、红细胞数值是2.8×1012个/L（3.5~5.0×1012个/L）、血红蛋白数值是90g/L（110~150g/L），括号内为正常参考值，已知小丽的血型为A型。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 红细胞数量偏低，小丽可能患有贫血症",
      "B. 没有同型血的紧急情况下，可以大量输入O型血",
      "C. 白细胞数量正常，小丽不患有炎症",
      "D. 血红蛋白数量偏低，建议小丽同学多吃一些富含铁和蛋白质的食物"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 59524,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图为人体某结构（器官）的血液流动情况示意图，甲代表某结构或器官，①②代表血管，箭头代表血流方向，下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 若①②都流动脉血，则甲可能代表肺",
      "B. 若甲为组织细胞，则②比①血液中二氧化碳含量低",
      "C. 若①为上腔静脉，②为肺动脉，则甲中有防止血液倒流的瓣膜",
      "D. 若血管①中营养物质含量高，血管②中营养物质含量低，则甲可能代表小肠"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 59525,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为了研究肾脏的功能，科学家利用微穿刺法将显微操纵仪插入肾小囊腔中，用微细玻璃管抽取囊腔中的液体（下称囊内液）进行微量化学分析（如图）。下列分析错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 囊内液中含有水、无机盐、尿素、葡萄糖",
      "B. 若发现某人尿液中含有葡萄糖，可能是⑤出现病变",
      "C. 正常情况下，囊内液不含血细胞和大分子蛋白质",
      "D. 等量的尿液与囊内液比较，尿素含量增加"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 59526,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“共享单车”已经遍布我市各县区，绿色出行成为一种时尚。骑车时需要你“眼观六路，耳听八方”，下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 鼓膜接受汽笛声产生神经冲动，传到听觉中枢形成听觉",
      "B. 骑车时听到提示音“倒车，请注意”及时躲避，属于简单反射",
      "C. 当你骑车遇到红灯紧急刹车时，肾上腺素分泌会增加",
      "D. 在骑行中维持身体平衡的神经中枢位于大脑"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 59529,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "走进水族馆，可以观赏到形态各异的动物，它们有各自的特征，下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 水母生活在海水中，身体柔软，属于软体动物",
      "B. 鲸鱼用鳃呼吸，用鳍游泳，属于鱼类",
      "C. 海龟既能在水中生活，也能在陆上爬行，属于两栖动物",
      "D. 海豚用肺呼吸，胎生哺乳，属于哺乳动物"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 59530,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "来自同一亲本的碰锋幼虫，有的发育成了蜂王，而有的发育成了工蜂（如图），蜂王与工蜂在个体大小和繁殖能力等方面都存在显著差异。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 蜜蜂成员之间分工明确，具有社会行为",
      "B. 蜂王与工蜂的发育过程说明生物的性状受环境的影响",
      "C. 蜂王与工蜂的发育不受遗传物质的控制",
      "D. 蜜蜂属于节肢动物"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 59533,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“天高任鸟飞”，各种姿态的鸟在蓝天中翱翔，形成一幅美丽的画卷，关于鸟类适于飞行的结构特征，叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 身体呈流线型，减少飞行中空气的阻力",
      "B. 气囊可以扩大气体交换的面积",
      "C. 骨骼轻、薄，有的骨中空，可以减轻体重",
      "D. 胸肌特别发达，为飞行提供足够的动力"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 59534,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "跳绳是一项有氧运动，青春期经常跳绳有助于生长发育。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 摇绳时，骨骼肌收缩需要的能量来自于肌肉细胞的呼吸作用",
      "B. 与跳绳有关的运动系统主要是由神经、关节和肌肉组成",
      "C. 跳绳时需要手脚协调，离不开神经系统的调节",
      "D. 跳绳之前做一做热身活动，可以预防关节脱臼和肌肉拉伤"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 59535,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "动物与生物圈中的其他生物一起构成了绚丽多彩的生物世界，有关动物在生物圈中的作用，下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 没有动物，生态系统的物质循环就无法进行",
      "B. 随意引进外来物种，可能会影响生态平衡",
      "C. 松鼠将收获的松子埋在地下，可以帮助植物传播种子",
      "D. 蜜蜂在汲取花蜜的同时，能够帮助植物传粉"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 59536,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某校师生在劳动实践基地种植了多种植物。下列植物的生殖方式属于有性生殖的是（    ）",
    "province": "河北",
    "options": [
      "A. 用蒜瓣繁殖大蒜",
      "B. 利用甘薯的茎繁殖新个体",
      "C. 在同一株月季上嫁接多个品种的月季枝条",
      "D. 移栽通过种子繁殖的辣椒幼苗"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 59537,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图表示人的生殖过程中染色体的变化，下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 子代体细胞的染色体一半来自于父方",
      "B. 子代细胞的染色体都是成对存在的",
      "C. 子代体细胞核中的DNA一半来自于父方",
      "D. 男孩体细胞的性染色体一半来自于父方"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 59538,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "圣女果又称小西红柿，具有生津止渴、健胃消食的功效。圣女果的果实有红果和黄果两种，显性、隐性基因分别用A、a表示，科研人员为了研究这两种性状的遗传规律进行了杂交实验（如右表），下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. B组子代出现红果和黄果属于可遗传变异",
      "B. 根据A组和B组可以判断红果为显性性状",
      "C. C组亲代和子代的红果基因组成都是Aa",
      "D. C组子代中黄果占25%"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 59539,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "据材料记载，我国的家鸡与云南等地的野鸡（原红鸡）都是由古代原红鸡进化而来的。古代原红鸡经过祖先的长期驯化，形成了现在野性退化的家鸡，而现存的野鸡比家鸡更敏捷、更善飞。下列说法不符合达尔文进化论观点的是（    ）",
    "province": "河北",
    "options": [
      "A. 家鸡产生了定向的变异",
      "B. 野鸡和家鸡的变异并不都是有利的",
      "C. 家鸡是人工选择的结果，加快了生物向着人类意愿的方向演化",
      "D. 野鸡善于飞行是遗传变异和环境因素共同作用的结果"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 59540,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "自去年以来，各种呼吸道传染病颇有“你方唱罢我登场”的态势，人们饱受感冒咳嗽的困扰。呼吸道传染病一般通过空气飞沫传播，从传染病的基本环节来看，患者、患者的飞沫分别属于（    ）",
    "province": "河北",
    "options": [
      "A. 传染源、传播途径",
      "B. 病原体、传播途径",
      "C. 易感人群、传播途径",
      "D. 病原体、传染源"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 59541,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "研究表明，人乳头瘤病毒（简称HPV）是女性患宫颈癌的主要诱因，目前我国已经研制出了预防该疾病的疫苗，下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 人乳头瘤病毒属于动物病毒",
      "B. 接种人乳头瘤病毒疫苗属于非特异性免疫",
      "C. 人乳头瘤病毒疫苗属于抗原",
      "D. 人乳头瘤病毒没有细胞结构"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 59544,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "健康和安全永远是青少年的第一课题。下列说法不合理的是（    ）",
    "province": "河北",
    "options": [
      "A. 合理利用手机，不沉迷手机游戏",
      "B. 遇到身体不舒适及时就医，不乱用药物",
      "C. 坚持锻炼身体，按时休息，不熬夜",
      "D. 经常外出与朋友聚餐，锻炼社会交际能力"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 59545,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "党的二十大报告提出“必须牢固树立和践行绿水青山就是金山银山的理念，站在人与自然和谐共生的高度谋划发展。”下列说法符合这一主题的是（    ）",
    "province": "河北",
    "options": [
      "A. 合理使用化肥农药，提高粮食产量",
      "B. 大自然的财富取之不尽、用之不竭",
      "C. 焚烧生活垃圾，减少处理费用",
      "D. 吃野味去，野生动物营养价值很高"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 53880,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“小荷才露尖尖角，早有蜻蜓立上头。”亭亭玉立 <img src=\"images/河北_b63fc8_94efd813.wmf\"> 荷花，振翅欲飞的蜻蜓，生动展现了初夏美景。下列有关荷花和蜻蜓的说法，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 荷花植株的根状茎和叶柄内部有发达的气腔，体现生物适应并影响环境",
      "B. 蜻蜓点水的现象，体现生物生活需要营养",
      "C. 荷花与蜻蜓的细胞结构都有细胞壁、细胞膜、细胞质和细胞核",
      "D. 蜻蜓与荷花的细胞分裂时，二者细胞质分成两部分的方式不同"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 53881,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "斑马鱼早期幼鱼很小且通体透明。某小组利用2mm斑马鱼幼鱼制成临时装片（见图甲），用显微镜观察其全身血管和血流情况，并绘制血液流动示意图（见图乙），①②③代表血管，箭头代表血流方向。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 斑马鱼早期幼鱼做实验材料的优点是体型很小且通体透明，便于在显微镜下观察",
      "B. 低倍镜观察时，转动粗准焦螺旋找到物像，再调节细准焦螺旋至更清晰",
      "C. 视野中血管内血流速度由快到慢依次是①③②",
      "D. 视野中③内血液从右向左流动，实际血流方向也是从右向左"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 53882,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "近期，兰科调查队在西藏墨脱县发现一种绿色开花的植物，被鉴定为单子叶植物纲兰科异型兰属新种，命名为墨脱异型兰。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 墨脱异型兰的结构层次是：细胞→组织→器官→系统→植物体",
      "B. 墨脱异型兰有真正的花和果实，种子外面有果皮包被",
      "C. 题干中涉及到的分类单位，由大到小依次是：门、纲、目、科、属、种",
      "D. 兰科植物具有较高的观赏价值，体现生物多样性的间接使用价值"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 53883,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关鲫鱼的说法，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 体内具有由脊椎骨组成的脊柱，属于脊椎动物",
      "B. 体表覆盖鳞片，用鳃呼吸，用鳍游泳，体温恒定",
      "C. 身体呈梭形，减少运动时的阻力，适于水中生活",
      "D. 侧线具有感知水流方向和水压的作用"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 53884,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某小组设计甲、乙、丙三套装置，并实施有关植物三大生理作用的实验。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 甲装置可用于验证绿叶在光下制造淀粉",
      "B. 乙装置收集到的气体能使带火星的细木条复燃",
      "C. 丙装置光照时透明袋内壁出现小水珠，即可证明蒸腾作用的强弱与叶片面积有关",
      "D. 将丙装置放在黑暗环境一昼夜，打开阀门，挤压透明袋，澄清石灰水变浑浊"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 53885,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图为心脏结构示意图，A~D表示心脏四腔，1~5表示血管。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 流静脉血的结构有",
      "B. 4、5",
      "B. 若扎紧2处，从1处注入水，则水会从4处流出",
      "C. 在A和B之间、C和D之间都有防止血液倒流的房室瓣",
      "D. 当",
      "B. D同时收缩时，B和4之间、D和3之间的动脉瓣都打开"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 53886,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为人体大脑皮层控制排尿反射的示意图。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 排尿反射属于非条件反射",
      "B. 尿意在人体的大脑皮层产生",
      "C. a、b分别代表反射弧中的传入神经纤维和传出神经纤维",
      "D. 若M处受损阻断，人体仍能排尿，但不能产生尿意"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 53887,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“眼观六路，耳听八方”。下列有关眼和耳的说法，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 看着汽车由远及近，晶状体的曲度变化是由大到小",
      "B. 视觉的形成：光线→角膜→瞳孔→玻璃体→晶状体→视网膜→视神经→视觉中枢",
      "C. 耳蜗内的听觉感受器，能感受振动刺激，产生神经冲动",
      "D. 听觉的形成：声波→外耳道→鼓膜→耳蜗→听小骨→听神经→听觉中枢"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 53888,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "儿童初次感染VZV（全称：水痘-带状疱疹病毒）引起水痘，恢复后该病毒潜伏在体内，少数病人在成年后病毒再次发作，引起带状疱疹。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. VZV结构简单，无细胞结构",
      "B. VZV必须寄生在活细胞内才能进行生命活动",
      "C. 接种水痘疫苗在传染病预防措施中，属于保护易感人群",
      "D. 水痘疫苗接种后，会刺激吞噬细胞产生相应抗体，这种免疫属于特异性免疫"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 53889,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "激素分泌异常会引发相应的人体疾病。下列对应关系错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 幼年时期生长激素分泌过少——呆小症",
      "B. 成年时期生长激素分泌过多——肢端肥大症",
      "C. 缺碘导致甲状腺激素合成不足——大脖子病",
      "D. 胰岛素分泌不足——糖尿病"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 53890,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关人体健康、急救与用药的说法，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 干炸鸡块、椒盐大虾和清蒸鲤鱼，这个食谱是按合理膳食的要求设计的",
      "B. 当有人受伤，血液从伤口喷涌而出，应及时在伤口的近心端止血",
      "C. 长期酗酒，过量的酒精能使脂类物质沉淀到血管内壁上，易导致血压降低",
      "D. 具有“OTC”标识的药物是处方药，需经医生开具处方才能购买和使用"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 53891,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "菜豆是一种双子叶植物，两性花。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 菜豆种子的胚包括胚芽、胚轴、胚根和子叶，种子萌发时需要光照",
      "B. 菜豆的根尖从其顶端到根毛，依次是根冠、伸长区、分生区、成熟区",
      "C. 菜豆花的主要结构是雄蕊和雌蕊，雌蕊的子房可发育成果实",
      "D. 形成5粒菜豆种子，至少需要5个精子参与受精过程"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 53892,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是枝芽及其发育成的枝条结构示意图，图中1~9代表相应结构。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 1是生长点，2是芽原基",
      "B. 3是幼叶，可发育成7",
      "C. 4可发育成9，9中有导管和筛管",
      "D. 5可发育成8，摘除6可促进8的生长"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 53893,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在丰富多彩的动物世界里，各种动物都能以一定方式繁衍后代。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 果蝇的发育经历卵、幼虫、成虫三个阶段，属于不完全变态",
      "B. 乌龟的生殖和发育真正摆脱了对水的依赖",
      "C. 鸡蛋卵黄上的小白点是胚盘",
      "D. 海豚体内受精，胎生、哺乳，可以提高后代的成活率"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 53894,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于人体生殖发育的说法，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 睾丸是男性的性腺，能产生精子和分泌雄性激素",
      "B. 受精卵在输卵管中形成，其发育初期所需要的营养物质来自卵黄",
      "C. 子宫是胚胎发育的主要场所；胎盘是胎儿与母体进行物质交换的场所",
      "D. 同卵双胞胎由于遗传物质完全相同，因此性状也完全相同"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 53895,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为人类某种遗传病的家族遗传系谱图，基因用D、d表示。据图分析，下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 该遗传病是隐性遗传病",
      "B. 5号个体的基因组成是DD或Dd",
      "C. 6号和7号再生一个正常男孩的概率是1/4",
      "D. 10号的X染色体一定来自1号"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 53896,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国积极统筹推进碳达峰与碳中和。从生态系统物质循环的角度分析，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 碳在生物和无机环境之间主要以二氧化碳的形式进行传递",
      "B. 生态系统中物质循环和能量流动是两个相对独立的过程",
      "C. 绿色植物进行光合作用有助于维持生物圈中的碳-氧平衡",
      "D. 积极推进植树造林，有利于早日实现碳达峰与碳中和"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 53897,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为生物进化树中的植物进化历程。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 甲、乙代表的植物类群分别是蕨类植物和裸子植物",
      "B. 植物进化历程：原始藻类植物→原始苔藓植物→甲→乙→原始被子植物",
      "C. 自然选择决定原始生命进化成不同种类原始植物的方向",
      "D. 从生活环境看，植物进化的趋势是由水生到陆生"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 53898,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人们利用微生物发酵制作出多种食品，例如泡菜、酸奶、酒等。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 为加快泡菜发酵速度，制作过程中要经常开盖搅拌",
      "B. 制作酸奶时，先将加入适量蔗糖的牛奶加热煮沸，目的是为了杀死杂菌",
      "C. 白酒的酿造过程依次经过制曲、发酵、糖化、蒸馏",
      "D. 酿酒过程中，酵母菌在适宜温度和有氧条件下将葡萄糖转化成酒精"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 53899,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "科学家在东太平洋发现几处深海热泉，在这些热泉里生活着众多的生物，如管栖蠕虫、蛤类和硫细菌等，其中硫细菌利用氧化硫化氢获得的能量，将CO2合成有机物。下列关于硫细菌的说法，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 热泉中的热能是硫细菌获取能量的最直接来源",
      "B. 硫细菌的遗传物质主要存在于细胞核中",
      "C. 硫细菌与青霉的繁殖方式相同",
      "D. 硫细菌属于生态系统中的生产者"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 57484,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "一个博物馆就是一所大学校。下列是我国不同博物馆的藏品，所涉及生物原型的细胞中含有叶绿体的是（　　）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_4870dc_43e1223b.png\"> 四羊方尊，中国国家博物馆藏",
      "B. <img src=\"images/河北_4870dc_6c061444.png\"> 铜鸟，四川省三星堆博物馆藏",
      "C. <img src=\"images/河北_4870dc_9e83eb9b.png\"> 白玉折枝牡丹，湖北省博物馆藏",
      "D. <img src=\"images/河北_4870dc_a4276d78.png\"> 素胎金丝猫，广东省博物馆藏"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 57485,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "推进深远海养殖是“打造海上新广东”的重要举措之一，养殖的鱼类在海洋生态系统中属于（　　）",
    "province": "河北",
    "options": [
      "A. 生产者",
      "B. 消费者",
      "C. 分解者",
      "D. 非生物部分"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 57487,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "玉米与大豆复合种植助丰收，玉米种子和大豆种子都有的结构不包括（　　）",
    "province": "河北",
    "options": [
      "A. 种皮",
      "B. 胚轴",
      "C. 胚乳",
      "D. 子叶"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 57488,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为获得更多蚕丝，应给家蚕增加营养的发育阶段是（　　）",
    "province": "河北",
    "options": [
      "A. 受精卵",
      "B. 幼虫",
      "C. 蛹",
      "D. 成虫"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 57489,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "三黄鸡因嘴黄、脚黄、皮黄而得名。鸡的皮肤在结构层次上属于（　　）",
    "province": "河北",
    "options": [
      "A. 细胞",
      "B. 组织",
      "C. 器官",
      "D. 系统"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 57490,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是显微镜下的番茄果肉细胞。下列叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. ①起保护作用",
      "B. ②中存在遗传物质",
      "C. 物镜倍数越大，看到细胞越多",
      "D. 要观察左下方细胞，玻片向左下方移动"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 57491,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列繁殖方式属于有性生殖的是（　　）",
    "province": "河北",
    "options": [
      "A. 荔枝嫁接繁育",
      "B. 蒜瓣生根发芽",
      "C. 草莓组织培养",
      "D. 水稻种子繁殖"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 57492,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在丹霞山发现的国达铁角蕨有根、茎、叶的分化，叶背有孢子囊。在分类上，与它属于同一类群的是（　　）",
    "province": "河北",
    "options": [
      "A. 满江红",
      "B. 海带",
      "C. 葫芦藓",
      "D. 苏铁"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 57493,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "非洲大蜗牛（下图）携带多种寄生虫。下列关于非洲大蜗牛的叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 具有外套膜",
      "B. 属于软体动物",
      "C. 是病原体",
      "D. 易使人感染寄生虫"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 57494,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "同学们参加百香果种植活动，播种前松土的目的是为种子萌发提供（　　）",
    "province": "河北",
    "options": [
      "A. 空气条件",
      "B. 温度条件",
      "C. 水分条件",
      "D. 光照条件"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 57495,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "特异性免疫是免疫疗法的基础，下列结构或物质参与特异性免疫的是（　　）",
    "province": "河北",
    "options": [
      "A. 皮肤",
      "B. 黏膜",
      "C. 溶菌酶",
      "D. 抗体"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 57496,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图甲是甲骨文“鱼”字，乙是约4700万年前的鱼化石。下列分析错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 甲中的①表示鱼的鳃",
      "B. 乙是研究生物进化的直接证据",
      "C. 甲乙均能看出鱼具有脊柱",
      "D. 甲出现的时间比乙形成的时间晚"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 57497,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "草鱼（即鲩鱼）摄食蚕豆120天左右，肉质变得爽脆，称为脆肉鲩。下列叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 脆肉鲩可提供蛋白质营养",
      "B. 肉质改变是受到环境影响",
      "C. 脆肉性状可遗传给下一代",
      "D. 鲩鱼和脆肉鲩是同种生物"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 57498,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小天制作酸奶所用的微生物也能用于制作（　　）",
    "province": "河北",
    "options": [
      "A. 酱油",
      "B. 泡菜",
      "C. 馒头",
      "D. 米酒"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 83336,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小王用显微镜观察某生物玻片标本，发现标本的细胞结构中有大液泡。该标本最可能来自（　　）",
    "province": "河北",
    "options": [
      "A. 植物",
      "B. 动物",
      "C. 细菌",
      "D. 病毒"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 83337,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "金花茶是广西特有珍稀植物，是世界名贵观赏植物。其花瓣金黄，种子外面有果皮包被。金花茶在分类中属于（　　）",
    "province": "河北",
    "options": [
      "A. 藻类植物",
      "B. 苔藓植物",
      "C. 蕨类植物",
      "D. 被子植物"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 83338,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小明用显微镜观察人的口腔上皮细胞临时装片时，为了使看到的物像更清晰，他应该（　　）",
    "province": "河北",
    "options": [
      "A. 转动目镜",
      "B. 调节光圈",
      "C. 挪动压片夹",
      "D. 调节细准焦螺旋"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 83339,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“青蛙开口早，早禾一定好。”青蛙从幼体到成体的发育过程属于变态发育。下图中表示该过程的是（　　）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ②",
      "C. ③",
      "D. ④"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 83340,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "北极熊嗅觉灵敏，若发现冰面下有海豹，它会在冰面上等候，一旦海豹露头，就发动突然袭击。这种行为属于（　　）",
    "province": "河北",
    "options": [
      "A. 迁徙行为",
      "B. 繁殖行为",
      "C. 取食行为",
      "D. 社会（社群）行为"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 83341,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "男孩进入青春期后会出现遗精现象，排出精子。产生精子的器官是（　　）",
    "province": "河北",
    "options": [
      "A. 尿道",
      "B. 睾丸",
      "C. 前列腺",
      "D. 阴茎"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 83342,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为大熊猫的结构层次示意图，甲、乙、丙分别代表不同的层次。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 甲是器官，乙是组织",
      "B. 甲经过分裂形成乙",
      "C. 甲是组织，丙是系统",
      "D. 乙经过分化形成丙"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 83343,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是家庭常用药碘酊的说明书的部分内容。下列用药方式不安全的是（　　）",
    "province": "河北",
    "options": [
      "A. 用于皮肤感染和消毒",
      "B. 既可以外用也可口服",
      "C. 不用于口腔黏膜的消毒",
      "D. 用棉签蘸取少量药物涂搽"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 83344,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列措施不符合“绿水青山就是金山银山”理念的是（　　）",
    "province": "河北",
    "options": [
      "A. 建设湿地公园",
      "B. 大力植草种树",
      "C. 退耕还林还草",
      "D. 大量引入外来物种"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 83345,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "青春期 <img src=\"images/河北_306bd8_2ad4379b.wmf\"> 男孩和女孩，生理和心理都会发生明显的变化。下列做法不利于青少年健康度过青春期的是（　　）",
    "province": "河北",
    "options": [
      "A. 主动学习青春期有关知识",
      "B. 挑食、厌食或暴饮暴食",
      "C. 积极参加各种文体活动",
      "D. 人际交往中做到自尊、自爱"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 83346,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "叶䗛（又叫叶子虫）善于伪装，成虫的翅有叶脉一样精致的纹路，可以“模拟”出叶子被啃食后的模样（如图所示）。叶䗛这种体态形成的原因不包括（　　）",
    "province": "河北",
    "options": [
      "A. 人工选择",
      "B. 自然选择",
      "C. 遗传变异",
      "D. 生物适应环境"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 83347,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年，我国科学家在国际上首次成功培育出体细胞克隆恒河猴。与克隆恒河猴采用相同技术的实例是（　　）",
    "province": "河北",
    "options": [
      "A. 克隆羊多莉",
      "B. 杂交水稻",
      "C. 转基因大豆",
      "D. 发酵酸奶"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 83348,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某生物兴趣小组利用硬纸板（代表骨）、适当长度的松紧带（代表肌肉）和几个工字钉（代表关节），制作肌肉牵动骨运动的模型，箭头表示前臂运动的方向。下列能正确模拟屈肘动作的是（　　）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_306bd8_0dd11f1c.png\">",
      "B. <img src=\"images/河北_306bd8_ddbee3d2.png\">",
      "C. <img src=\"images/河北_306bd8_6050e80d.png\">",
      "D. <img src=\"images/河北_306bd8_2290e630.png\">"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 83349,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "根据尿常规化验结果，医生初步判断张某肾脏可能出现病变。判断的依据是其尿液成分中出现含量异常的（　　）",
    "province": "河北",
    "options": [
      "A. 水",
      "B. 无机盐",
      "C. 尿素",
      "D. 红细胞"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 83350,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "南瓜果实由子房发育形成，果皮的白色和黄色是一对相对性状，由一对基因（E、e）控制，果皮白色（E）对黄色（e）为显性。下图表示把甲植株（EE）的花粉人工授粉到乙植株（ee）的雌蕊柱头上，用乙植株果实的种子培育出子一代丙植株的过程。下列叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 种子中的胚由受精卵发育而来",
      "B. 甲的遗传信息通过花粉传递给丙",
      "C. 丙植株可结出白色果皮南瓜（EE）",
      "D. 若种子经太空辐射，则丙可能出现可遗传的变异"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44534,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "那拉提草原上与羊为竞争关系的是（　　）",
    "province": "河北",
    "options": [
      "A. 草",
      "B. 兔",
      "C. 狐",
      "D. 鹰"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44535,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列现象能说明生物的生活需要营养的是（　　）",
    "province": "河北",
    "options": [
      "A. 鸟吃虫",
      "B. 花传粉",
      "C. 蛇冬眠",
      "D. 人排汗"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 44536,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "一只草履虫每天大约能吞食43000个细菌，有净化污水的作用。与吞食细菌相关的生命活动主要是（　　）",
    "province": "河北",
    "options": [
      "A. 呼吸",
      "B. 运动",
      "C. 消化",
      "D. 生殖"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44537,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "使用显微镜观察临时装片时，要使物像由图甲转为图乙（如下图）。下列操作正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 调节遮光器",
      "B. 调节细准焦螺旋",
      "C. 转动转换器",
      "D. 移动玻片标本"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44538,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "煮菠菜时汤汁变绿，是因为破坏了菠菜细胞的（　　）",
    "province": "河北",
    "options": [
      "A. 细胞壁",
      "B. 细胞膜",
      "C. 细胞质",
      "D. 细胞核"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44539,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "向日葵是新疆常见的油料作物，其结构层次由微观到宏观依次为（　　）",
    "province": "河北",
    "options": [
      "A. ①→②→④→③",
      "B. ②→①→③→④",
      "C. ③→④→②→①",
      "D. ④→③→①→②"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44540,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学制作了生态瓶，瓶内放置的材料如下图所示。下列关于该生态瓶的叙述不正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 瓶中的食物链为：阳光→水草→鱼",
      "B. 水草为生产者，鱼为消费者",
      "C. 水中的细菌可以分解鱼的粪便",
      "D. 水是影响鱼生活的非生物因素"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 44541,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某兴趣小组在调查花卉市场的植物种类时，发现了一株植物，有根、茎、叶的分化，叶片背面有孢子囊群。该植物最可能是（　　）",
    "province": "河北",
    "options": [
      "A. 金鱼藻",
      "B. 葫芦藓",
      "C. 肾蕨",
      "D. 菊花"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44542,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "黄豆种子萌发的过程如下图所示。下列相关叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 不需要吸收水分",
      "B. ②先突破种皮",
      "C. 所需的营养与③无关",
      "D. ①发育成④"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44543,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为美化校园环境，同学们移栽了一些树木。下列叙述不正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 根部带土坨保护根毛",
      "B. 给树木“挂吊瓶”补充水和无机盐",
      "C. 剪去部分枝叶增强蒸腾作用",
      "D. 选择阴天移栽减少水分散失"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44544,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "新疆野苹果是我国特有的渐危种，研究不同遮阴程度对其幼苗光合作用强度的影响，结果如下图。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 四组幼苗应置于不同温度下",
      "B. 遮阴程度影响光合作用强度",
      "C. 全光照时幼苗释放的氧气最多",
      "D. 中度遮阴条件最适宜培育幼苗"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44545,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某小组在做“绿叶在光下制造有机物”的实验时，尝试在天竺葵叶片上做出恐龙剪影（如下图）。下列叙述不正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 实验前将天竺葵置于黑暗处一昼夜",
      "B. 用黑色剪影纸将叶片双面遮光置于光下",
      "C. 用酒精隔水加热使叶片脱色",
      "D. 漂洗后滴加碘液，只有遮光处变蓝"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44546,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "温室大棚里增施“气肥”可提高植物光合作用的强度，下图中表示“气肥”的是（　　）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ②",
      "C. ③",
      "D. ④"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 44547,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为减少沙尘带来的不良影响，下列做法不正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 提高植物覆盖率",
      "B. 合理利用林业资源",
      "C. 退耕还林还草",
      "D. 在草原上过度放牧"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44548,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图表示男女生殖系统。能产生生殖细胞并分泌性激素的结构是（　　）",
    "province": "河北",
    "options": [
      "A. ①③",
      "B. ①④",
      "C. ②③",
      "D. ②④"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 44549,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图表示人体消化系统的组成。下列相关叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 淀粉可在①和②中被分解",
      "B. ②所示的消化腺分泌胆汁",
      "C. ③分泌的消化液含脂肪酶",
      "D. 蛋白质可在④中初步分解"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44550,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在“合理营养和食品安全”主题班会上，相关讨论正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 可以随时吃，吃饱了就行",
      "B. 选喜欢吃的，搭配不重要",
      "C. 野外的蘑菇，可随意食用",
      "D. 购买食品时，关注保质期"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44551,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为眼球结构。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. ①可以调节瞳孔大小",
      "B. ②的曲度不发生变化",
      "C. ③是物像形成的部位",
      "D. ④能感受光线的刺激"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44552,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某人近来感到身体不适，到医院检查。下表是就医后尿液检查报告的部分结果，由此推测该病人发生病变的部位可能是（　　）",
    "province": "河北",
    "options": [
      "A. 肾小体",
      "B. 肾小球",
      "C. 肾小囊",
      "D. 肾小管"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44553,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图表示显微镜下观察到的小鱼尾鳍内血液的流动情况。图中①是（　　）",
    "province": "河北",
    "options": [
      "A. 毛细血管",
      "B. 动脉",
      "C. 静脉",
      "D. 静脉瓣"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 44554,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是对3种动物相同点的归纳。下列相关叙述不正确的是（　　）",
    "province": "河北",
    "options": [
      "A. ①是变态发育",
      "B. ②是体内受精",
      "C. ③是能飞行",
      "D. ④是有性生殖"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44555,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "艾力西尔·吾买尔在2024年亚洲青年田径锦标赛以45秒53的成绩获得男子400米冠军。下列关于跑步的叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 由一组肌肉参与完成",
      "B. 肌肉牵引骨完成运动",
      "C. 关节使运动更加灵活",
      "D. 靠运动系统就能完成"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44556,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列实验现象能说明细胞既含有机物，又含无机物的是（　　）",
    "province": "河北",
    "options": [
      "A. 纵切的玉米种子剖面，滴加碘酒变蓝色",
      "B. 在白纸上用力按压炒熟的花生种子有油斑",
      "C. 烘干试管中的小麦种子，试管壁上有水珠",
      "D. 点燃花生种子，充分燃烧后留下灰烬"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44557,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "做酸奶时，向煮沸并放至温热的牛奶中倒入酸奶，“倒入酸奶”这一步骤相当于“培养细菌、真菌一般方法”中的（　　）",
    "province": "河北",
    "options": [
      "A. 配制培养基",
      "B. 高温灭菌",
      "C. 接种",
      "D. 恒温培养"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44558,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“油菜花父子”——沈克泉和沈昌健利用野生油菜与本地油菜杂交培育出了高产油菜品种，造福当地百姓。这种培育方法利用了（    ）",
    "province": "河北",
    "options": [
      "A. 基因的多样性",
      "B. 生物种类的多样性",
      "C. 环境的多样性",
      "D. 生态系统的多样性"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 44559,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于生命起源和生物进化的叙述，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 原始生命起源于原始大气",
      "B. 生物进化的趋势是体型由小到大",
      "C. 越古老 <img src=\"images/河北_d00be4_2fe39c54.wmf\"> 地层形成化石的生物结构越复杂",
      "D. 生物进化最直接的证据是化石"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 44560,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为变形虫细胞分裂不同阶段的示意图。下列排序正确的是（　　）",
    "province": "河北",
    "options": [
      "A. ①→②→③→④",
      "B. ②→④→①→③",
      "C. ③→①→④→②",
      "D. ④→③→②→①"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 44561,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "科学家把控制合成胰岛素的基因转入大肠杆菌内，对大肠杆菌进行培养，使之生产治疗糖尿病的药物——胰岛素。科学家所利用的这种生物技术是（    ）",
    "province": "河北",
    "options": [
      "A. 组织培养",
      "B. 转基因",
      "C. 克隆",
      "D. 嫁接"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44562,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "青少年应掌握必要的急救常识，下列急救措施中正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 发现有人触电时，赶紧上前拉一把",
      "B. 遇到煤气中毒的意外事故，先开窗通风",
      "C. 对溺水者急救时，立即进行人工呼吸",
      "D. 受伤时血液缓慢流出，在近心端包扎"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 44563,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "不良的生活习惯会危害人体健康。下列行为与危害不对应的是（　　）",
    "province": "河北",
    "options": [
      "A. 随地吐痰——传播疾病",
      "B. 吃饭时说笑——食物误入气管",
      "C. 吸烟——易患肺癌",
      "D. 滥用青霉素——造成肥胖"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 52076,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "诗句“稻花香里说丰年，听取蛙声一片”描写了乡村田野的优美景色。水稻、青蛙等都是生物，生物具有区别于非生物的一些基本特征。下列描述属于生物基本特征的是（    ）",
    "province": "河北",
    "options": [
      "A. 生物都有系统",
      "B. 生物都有遗传变异现象",
      "C. 生物都能运动",
      "D. 生物都能适应任何环境"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 52077,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "显微镜是我们观察奇妙微观世界不可缺少的工具。下图是实验室常用的显微镜以及显微镜视野中的蚕豆叶表皮细胞。相关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 此显微镜的最大放大倍数是50倍",
      "B. 制作该临时装片时需要滴加生理盐水",
      "C. 若视野中物像不清晰，可以调节②",
      "D. 欲将气孔移至视野中央，应向右上方移动装片"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 52078,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "煮红苋菜时，汤汁会变红，若将红苋菜放入清水中浸泡，水不会变红，这是因为活细胞中的某种结构阻止了物质的外流。这种结构是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞膜",
      "B. 细胞壁",
      "C. 细胞核",
      "D. 液泡"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 52079,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“一夜海潮河水满，鲈鱼清晓入池塘”鲈鱼游泳时，控制游泳方向的部位主要是（   ）",
    "province": "河北",
    "options": [
      "A. 胸鳍",
      "B. 背鳍",
      "C. 臀鳍",
      "D. 尾鳍"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 52080,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在生态系统中，各种生物之间因食物关系形成不同的食物链。下列各项中，表示一条食物链的是（    ）",
    "province": "河北",
    "options": [
      "A. 草→鹿→野兔→狼",
      "B. 昆虫→食虫鸟→蛇→猫头鹰",
      "C. 草→昆虫→食虫鸟→蛇",
      "D. 阳光→草→昆虫→食虫鸟"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 52081,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小明同学细嚼馒头时感觉有甜味，他想通过实验来探究这个问题，设计了如下实验方案。相关说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 2号试管应加入2ml唾液",
      "B. 两支试管中加入清水和唾液后要充分搅拌",
      "C. 放在37℃的水浴中保温是为了模拟人体口腔温度",
      "D. 2号试管不变蓝的原因是唾液使淀粉分解成葡萄糖"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 52082,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学把自制的标本分成两类：一类是贯众、葫芦藓、紫菜、地钱；另一类是马尾松、银杏、侧柏、小麦。他这样分类的主要依据是（    ）",
    "province": "河北",
    "options": [
      "A. 叶的有无",
      "B. 根的有无",
      "C. 茎的有无",
      "D. 种子的有无"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 52083,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "青春期是人体发育的重要时期，做好青春期的健康保健很重要。下列关于处于青春期少年做法与想法的叙述中，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 遇到烦心事闷在心里不与父母交流",
      "B. 对异性产生好感是不正常的心理变化",
      "C. 积极参加体育活动，提高身体素质",
      "D. 心理已经发育成熟，任何事情都自己做主"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 52086,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某生物兴趣小组通过制作生态瓶来探究生态系统的组成及其稳定性。实验装置如图所示（甲、乙瓶置于有光的条件下，丙瓶用不透光的盒子罩住）。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 为探究“光对生态系统的影响”，应选择甲、丙两瓶进行对照",
      "B. 在甲、乙、丙三个生态瓶中，维持时间最长的是丙瓶",
      "C. 在乙生态瓶中，通过食物链传递的能量最终来自太阳能",
      "D. 要想使甲瓶更加完善，还需要补充的成分是空气"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 52087,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列描述属于相对性状的是（    ）",
    "province": "河北",
    "options": [
      "A. 猫的白毛与蓝眼",
      "B. 紫色豌豆花与白色梨花",
      "C. 人的卷发与黑发",
      "D. 豌豆的高茎与矮茎"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 52088,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "幼年的黑猩猩能模仿成年黑猩猩，用一根蘸水的树枝取白蚁作为食物。成年黑猩猩会利用经验来解决问题，当香蕉被挂在高处时，黑猩猩会把几个木箱堆叠起来，然后爬到木箱顶上去摘香蕉。对黑猩猩的这些行为解释正确的是（    ）",
    "province": "河北",
    "options": [
      "A. ①③",
      "B. ②③",
      "C. ①④",
      "D. ②④"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 52089,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是“探究阳光在植物生长中的作用”实验的部分步骤。有关说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. ①③",
      "B. ①④",
      "C. ②③",
      "D. ②④"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 52090,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某小组的同学在讨论鸟类适于飞行的特点时，提出下列看法，其中错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 食量大，消化能力强",
      "B. 体温恒定，适应性强",
      "C. 直肠很短，不存粪便",
      "D. 前肢变成翼，骨骼薄而轻"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 52091,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如果某人验尿发现其中有血细胞和蛋白质，你估计发生病变的部位可能是（    ）",
    "province": "河北",
    "options": [
      "A. 肾小囊",
      "B. 肾盂",
      "C. 肾小管",
      "D. 肾小球"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 52092,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列疾病中，可能由不良的生活方式引起的是（   ）",
    "province": "河北",
    "options": [
      "A. 色盲和坏血病",
      "B. 高血压和心脏病",
      "C. 肺结核和侏儒症",
      "D. 血友病和脚癣"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 52093,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国林业专家张锦梅及其团队经过多年攻关，利用植物组织培养技术成功获得国家濒危植物——羽叶丁香的“试管苗”，解决了其在自然状态下繁殖率低下的问题。下列繁殖方式与其培育方式不相同的是（    ）",
    "province": "河北",
    "options": [
      "A. 葡萄通过扦插保持优良性状",
      "B. 花生的种子种下去长出新植株",
      "C. 秋海棠的叶落地生根",
      "D. 草莓的匍匐茎上生根发芽"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 52094,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "桃是果园里常见的一种多年生木本被子植物。观察桃花的结构示意图，判断下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. ①②合称为雄蕊，④⑤⑥合称为雌蕊",
      "B. 产生花粉的结构是①花药",
      "C. 桃的果实是由③胚珠发育而来",
      "D. 花经历传粉和受精能结出果实"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 52095,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "鲸是生活在海洋中的哺乳动物， 其前肢和尾变成了鳍，后肢完全退化，适应海洋生活。在下列特征中，最能说明鲸属于哺乳动物的是（  ）",
    "province": "河北",
    "options": [
      "A. 食物主要为小型集群性鱼类和乌贼",
      "B. 体温总是保持在36℃左右",
      "C. 通常每胎产一仔，以乳汁哺育幼鲸",
      "D. 心率一般为9～10次/分"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 52096,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "一种新上市的杀虫剂在使用初期，对某种害虫的杀灭效果显著，但随着这种杀虫剂使用次数的增加，该种害虫的抗药性逐渐增强，数量也逐渐增多。下列选项中，能够完整解释这一现象的是（   ）",
    "province": "河北",
    "options": [
      "A. 人工选择",
      "B. 自然选择",
      "C. 遗传变异",
      "D. 生存竞争"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 52097,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "张华的父亲因感到身体不适到医院就诊，经医生检查，心率为90次/分，血压为16/10.7千帕，血常规化验结果如下。根据测量和化验的结果，推断该人测定值不正常的项目及可能患有的疾病分别是（    ）",
    "province": "河北",
    "options": [
      "A. 血压、高血压",
      "B. 白细胞总数、急性炎症",
      "C. 红细胞计数、贫血",
      "D. 血红蛋白、贫血"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 52098,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体的免疫系统可抵抗能引起疾病的微生物、异己物质等，对防御疾病、维护健康具有十分重要的作用。人体对病原体侵害的防御共设置了“三道防线”，下列属于人体免疫第三道防线的是（    ）",
    "province": "河北",
    "options": [
      "A. 皮肤和腔道黏膜",
      "B. 体液中的杀菌物质",
      "C. 体液中的吞噬细胞",
      "D. 免疫器官和免疫细胞"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 52101,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "从森林古猿进化到人，具有决定意义的姿态改变是（    ）",
    "province": "河北",
    "options": [
      "A. 使用天然工具",
      "B. 直立行走",
      "C. 制造复杂工具",
      "D. 产生语言和意识"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 52102,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在古代，中国就有种植桑树，养蚕并制造丝绸的传统。家蚕的发育共经历四个时期，若想要提高蚕丝产量，可适当延长的发育时期为（    ）",
    "province": "河北",
    "options": [
      "A. 受精卵",
      "B. 幼虫",
      "C. 蛹",
      "D. 成虫"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 52103,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "模型制作是学习生物学的一种有效方法。图甲是某同学利用木板、松紧带、螺丝等材料制作的一个肌肉牵拉骨运动的模型，图乙是人体屈肘动作示意图。图甲中的木板、松紧带、螺丝分别相当于图乙中的（    ）",
    "province": "河北",
    "options": [
      "A. 木板—②、松紧带—①、螺丝—③",
      "B. 木板—②、松紧带—③、螺丝—①",
      "C. 木板—①、松紧带—②、螺丝—③",
      "D. 木板--①、松紧带—③、螺丝—②"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 52104,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "打乒乓球时，随着球由远及近的移动，运动员始终能看清球的位置，主要是因为（    ）",
    "province": "河北",
    "options": [
      "A. 晶状体的凸度可以调节",
      "B. 视网膜可以前后调节",
      "C. 玻璃体的大小可以调节",
      "D. 瞳孔的大小可以调节"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 52105,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "破伤风是由破伤风杆菌引起的一种急性传染病，不及时治疗会危及生命。没有经百白破疫苗全程强化预防接种的人，被生锈的铁钉扎伤后容易感染破伤风。医学上对破伤风的预防或治疗的有效措施是注射破伤风抗毒素（一种动物血清蛋白），从人体免疫角度分析，注射的物质及采取的措施分别是（    ）",
    "province": "河北",
    "options": [
      "A. 抗原、控制传染源",
      "B. 抗原、保护易感人群",
      "C. 抗体、控制传染源",
      "D. 抗体、保护易感人群"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 52106,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "猴面包树是非洲草原特有的树种，树干高20米左右，胸径达15米以上，树冠直径可达50米，当地居民又称猴面包树为“大胖子树”。猴面包树虽然外形奇特，但果实汁多微甜，是猴、猩猩十分喜爱的食物。由此可推断它可能属于下列哪类植物（    ）",
    "province": "河北",
    "options": [
      "A. 蕨类植物",
      "B. 苔藓植物",
      "C. 裸子植物",
      "D. 被子植物"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 52107,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图表示细胞核、染色体、DNA之间的关系。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "B. ②表示DNA，是决定生物性状的基本单位",
      "C. ①表示染色体，1条染色体中一般只含有1个DNA分子",
      "D. ③表示细胞核，是生命活动的控制中心"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 52108,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "通常都说“睡眠充足的孩子长的高”，这是经过验证的科学事实。若青少年长期睡眠不足，会导致发育迟缓，身材矮小。请分析，睡眠能促进生长与下列哪种激素有关（    ）",
    "province": "河北",
    "options": [
      "A. 生长激素",
      "B. 胰岛素",
      "C. 性激素",
      "D. 胸腺激素"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 52109,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如果一个性状总是从父亲传给儿子，又从儿子传给孙子，那么你可以推测控制这一性状的基因可能存在（　　）",
    "province": "河北",
    "options": [
      "A. 常染色体",
      "B. X染色体上",
      "C. 性染色体上",
      "D. Y染色体上"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 52110,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是某感冒药说明书的部分内容，请你依据说明书的信息，判断下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 该药是非处方药，不需要凭医生处方购买",
      "B. 用药前需关注该药的生产日期及有效期",
      "C. 该药可用于治疗外感风寒引起的头痛发热",
      "D. 感冒后想快点好，一次可服用6粒"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 52111,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为避免药物对胃产生刺激，制药厂常把药物封装在淀粉制成的胶囊中给人服用。根据淀粉在消化道内的消化情况分析，其原理是（    ）",
    "province": "河北",
    "options": [
      "A. 胃能消化淀粉，药物慢慢渗出",
      "B. 淀粉在口腔初步消化，便于吞咽",
      "C. 胃不能消化淀粉，胶囊经胃进入小肠",
      "D. 淀粉在胃里消化，便于药物快速吸收"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 52112,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在自然界中，生物的变异现象是普遍存在的。下列属于可遗传变异的是（    ）",
    "province": "河北",
    "options": [
      "A. 长跑运动员的心率比一般人低",
      "B. 一对肤色正常夫妇生育白化病女儿",
      "C. 无光条件下的韭菜长成黄白色",
      "D. 笼中养大的老虎不善于抓捕猎物"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 52113,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "健康的生活方式不仅有利于预防各种疾病，而且有利于提高人们的健康水平。下列关于人体健康生活知识的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. ①②⑤",
      "B. ②③④",
      "C. ②④⑤",
      "D. ①②③"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 52114,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "科学家从永冻土中分离出了几万年前的生物样本，它们没有细胞结构，由蛋白质外壳和核酸组成，它们不能独立生活，必须在其他生物的活细胞里才能生存。以下生物在结构上与上述生物样本最相似的是（    ）",
    "province": "河北",
    "options": [
      "A. 酵母菌",
      "B. 青霉",
      "C. 流感病毒",
      "D. 细菌"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 52115,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年5月22日，国际生物多样性日宣传活动在海南省五指山市举行。今年生物多样性日的主题是“生物多样性，你我共参与”。下列关于保护生物多样性做法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 用人工养殖、栽培和繁殖的方法抢救濒危物种",
      "B. 大力开展植树造林活动，增加绿化面积",
      "C. 为丰富本地区生物多样性，随意引入外来物种",
      "D. 建立自然保护区，保护野生动植物"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 26328,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "使用显微镜的过程中，一般不会改变视野亮度的操作是（    ）",
    "province": "河北",
    "options": [
      "A. 更换物镜",
      "B. 移动玻片",
      "C. 翻转反光镜",
      "D. 调节光圈大小"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 26329,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "动物细胞中与能量转换有关的细胞器是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞核",
      "B. 线粒体",
      "C. 液泡",
      "D. 叶绿体"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 26330,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "科学家在坦桑尼亚国家公园长期从事野生黑猩猩行为特征的研究，主要采取的科学方法是（    ）",
    "province": "河北",
    "options": [
      "A. 观察法",
      "B. 实验法",
      "C. 模型法",
      "D. 调查法"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 26331,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "播种大多在春季进行，这是因为种子的萌发需要（    ）",
    "province": "河北",
    "options": [
      "A. 充足的空气",
      "B. 一定的水分",
      "C. 适宜的温度",
      "D. 适宜的光照"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 26332,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列选项中，实验材料与使用目的不相符的是（    ）",
    "province": "河北",
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 26333,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "新鲜的蔬菜和水果中含有丰富的维生素C，多吃可以预防（    ）",
    "province": "河北",
    "options": [
      "A. 坏血病",
      "B. 佝偻病",
      "C. 脚气病",
      "D. 夜盲症"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 26334,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于消化和吸收的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 胆汁具有消化酶，能消化脂肪",
      "B. 蛋白质在胃内被彻底消化",
      "C. 胃和大肠没有吸收功能",
      "D. 大部分甘油和脂肪酸被毛细淋巴管吸收"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 26335,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "一位AB型血的人大量失血后，应给他输入（    ）",
    "province": "河北",
    "options": [
      "A. A型血",
      "B. B型血",
      "C. AB型血",
      "D. O型血"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 26336,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "高原训练有利于运动员提高运动成绩，主要是增加了血液中的（    ）",
    "province": "河北",
    "options": [
      "A. 血浆",
      "B. 红细胞",
      "C. 白细胞",
      "D. 血小板"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 26337,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人类特有的条件反射是（    ）",
    "province": "河北",
    "options": [
      "A. 吮吸",
      "B. 眨眼",
      "C. 膝跳反射",
      "D. 谈虎色变"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 26338,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是部分蝶形花科植物分类，不正确的叙述是（    ）",
    "province": "河北",
    "options": [
      "A. 菜豆和紫檀没有亲缘关系",
      "B. 图中所示最大的分类单位是科",
      "C. 蝶形花科所包含的植物种类比紫檀属多",
      "D. 紫檀、绿豆和菜豆属于同一个分类等级"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 26339,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "制作米酒步骤中不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 糯米提前浸泡一昼夜",
      "B. 蒸熟的糯米迅速与酒曲搅拌均匀",
      "C. 制作器具需高温灭菌",
      "D. 密封好的容器需放在温度适宜的地方"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 26340,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "金黄色葡萄球菌可导致肺炎，关于金黄色葡萄球菌的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 多细胞生物",
      "B. 有叶绿体",
      "C. 没有细胞壁",
      "D. 没有成形的细胞核"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 26341,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列动物中属于鱼类的是（    ）",
    "province": "河北",
    "options": [
      "A. 鲸鱼",
      "B. 章鱼",
      "C. 鳕鱼",
      "D. 鳄鱼"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 26342,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列保护生物多样性的措施中，不合理的是（    ）",
    "province": "河北",
    "options": [
      "A. 濒危动物迁地保护",
      "B. 大量引进外来生物",
      "C. 建立自然保护区",
      "D. 颁布保护生物的法律法规"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 26343,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是一农田长期使用一种农药后，害虫群体数量变化曲线，下列叙述不符合达尔文进化观点的是（    ）",
    "province": "河北",
    "options": [
      "A. 使用农药后，害虫产生变异",
      "B. 害虫群体中原来就存在抗药性个体",
      "C. 随着农药的使用害虫的抗药性逐渐增强",
      "D. 害虫抗药性越来越强是自然选择的结果"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 26344,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "将人凝血因子基因导入山羊的受精卵中，主要应用的生物技术是（    ）",
    "province": "河北",
    "options": [
      "A. 克隆",
      "B. 杂交",
      "C. 组织培养",
      "D. 转基因技术"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 26345,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "长喙天蛾常被误认为蜂鸟，长喙天蛾的主要特征是（    ）",
    "province": "河北",
    "options": [
      "A. 体表被覆羽毛",
      "B. 体温恒定",
      "C. 身体分节",
      "D. 具有坚硬的卵壳"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 26346,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "秋海棠叶片上会长出幼苗，这种生殖方式属于（    ）",
    "province": "河北",
    "options": [
      "A. 营养生殖",
      "B. 出芽生殖",
      "C. 植物组织培养",
      "D. 分裂生殖"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 26347,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "被重金属污染的池塘中，体内重金属积累最多的生物是（    ）",
    "province": "河北",
    "options": [
      "A. 黑鱼",
      "B. 虾",
      "C. 剑水蚤",
      "D. 浮萍"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 26348,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列四种细胞中，不可能存在Y染色体的是",
    "province": "河北",
    "options": [
      "A. 精子",
      "B. 受精卵",
      "C. 卵细胞",
      "D. 肌肉细胞"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 26349,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列属于可遗传变异的是（    ）",
    "province": "河北",
    "options": [
      "A. 整容手术后的双眼皮",
      "B. 接受核辐射后而变异的老鼠",
      "C. 经常锻炼后肌肉发达",
      "D. 因水肥充足而颗粒饱满的水稻"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 26350,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "可能诱发癌症的生活方式是（    ）",
    "province": "河北",
    "options": [
      "A. 按时吃早餐",
      "B. 不吸烟不喝酒"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 26351,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于抗生素的叙述中，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 服用抗生素不需要医生的指导",
      "B. 滥用抗生素可能会导致细菌的抗药性增强",
      "C. 抗生素对细菌性、病毒性疾病都有效",
      "D. 服用抗生素对体内的有益细菌没有影响"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 26352,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "不符合环保理念的行为是（    ）",
    "province": "河北",
    "options": [
      "A. 实行垃圾分类",
      "B. 倡导无纸化办公",
      "C. 使用一次性筷子",
      "D. 推广新能源汽车"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 100117,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "使用显微镜的过程中，一般不会改变视野亮度的操作是（    ）",
    "province": "河北",
    "options": [
      "A. 更换物镜",
      "B. 移动玻片",
      "C. 翻转反光镜",
      "D. 调节光圈大小"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 100118,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "动物细胞中与能量转换有关的细胞器是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞核",
      "B. 线粒体",
      "C. 液泡",
      "D. 叶绿体"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 100119,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "科学家在坦桑尼亚国家公园长期从事野生黑猩猩行为特征的研究，主要采取的科学方法是（    ）",
    "province": "河北",
    "options": [
      "A. 观察法",
      "B. 实验法",
      "C. 模型法",
      "D. 调查法"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 100120,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "播种大多在春季进行，这是因为种子的萌发需要（    ）",
    "province": "河北",
    "options": [
      "A. 充足的空气",
      "B. 一定的水分",
      "C. 适宜的温度",
      "D. 适宜的光照"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 100121,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列选项中，实验材料与使用目的不相符的是（    ）",
    "province": "河北",
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 100122,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "新鲜的蔬菜和水果中含有丰富的维生素C，多吃可以预防（    ）",
    "province": "河北",
    "options": [
      "A. 坏血病",
      "B. 佝偻病",
      "C. 脚气病",
      "D. 夜盲症"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 100123,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于消化和吸收的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 胆汁具有消化酶，能消化脂肪",
      "B. 蛋白质在胃内被彻底消化",
      "C. 胃和大肠没有吸收功能",
      "D. 大部分甘油和脂肪酸被毛细淋巴管吸收"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 100124,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "一位AB型血的人大量失血后，应给他输入（    ）",
    "province": "河北",
    "options": [
      "A. A型血",
      "B. B型血",
      "C. AB型血",
      "D. O型血"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 100125,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "高原训练有利于运动员提高运动成绩，主要是增加了血液中的（    ）",
    "province": "河北",
    "options": [
      "A. 血浆",
      "B. 红细胞",
      "C. 白细胞",
      "D. 血小板"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 100126,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人类特有的条件反射是（    ）",
    "province": "河北",
    "options": [
      "A. 吮吸",
      "B. 眨眼",
      "C. 膝跳反射",
      "D. 谈虎色变"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 100127,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是部分蝶形花科植物分类，不正确的叙述是（    ）",
    "province": "河北",
    "options": [
      "A. 菜豆和紫檀没有亲缘关系",
      "B. 图中所示最大的分类单位是科",
      "C. 蝶形花科所包含的植物种类比紫檀属多",
      "D. 紫檀、绿豆和菜豆属于同一个分类等级"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 100128,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "制作米酒步骤中不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 糯米提前浸泡一昼夜",
      "B. 蒸熟的糯米迅速与酒曲搅拌均匀",
      "C. 制作器具需高温灭菌",
      "D. 密封好的容器需放在温度适宜的地方"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 100129,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "金黄色葡萄球菌可导致肺炎，关于金黄色葡萄球菌的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 多细胞生物",
      "B. 有叶绿体",
      "C. 没有细胞壁",
      "D. 没有成形的细胞核"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 100131,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列保护生物多样性的措施中，不合理的是（    ）",
    "province": "河北",
    "options": [
      "A. 濒危动物迁地保护",
      "B. 大量引进外来生物",
      "C. 建立自然保护区",
      "D. 颁布保护生物的法律法规"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 100132,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是一农田长期使用一种农药后，害虫群体数量变化曲线，下列叙述不符合达尔文进化观点的是（    ）",
    "province": "河北",
    "options": [
      "A. 使用农药后，害虫产生变异",
      "B. 害虫群体中原来就存在抗药性个体",
      "C. 随着农药的使用害虫的抗药性逐渐增强",
      "D. 害虫抗药性越来越强是自然选择的结果"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 100133,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "将人凝血因子基因导入山羊的受精卵中，主要应用的生物技术是（    ）",
    "province": "河北",
    "options": [
      "A. 克隆",
      "B. 杂交",
      "C. 组织培养",
      "D. 转基因技术"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 100134,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "长喙天蛾常被误认为蜂鸟，长喙天蛾的主要特征是（    ）",
    "province": "河北",
    "options": [
      "A. 体表被覆羽毛",
      "B. 体温恒定",
      "C. 身体分节",
      "D. 具有坚硬的卵壳"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 100135,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "秋海棠叶片上会长出幼苗，这种生殖方式属于（    ）",
    "province": "河北",
    "options": [
      "A. 营养生殖",
      "B. 出芽生殖",
      "C. 植物组织培养",
      "D. 分裂生殖"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 100136,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "被重金属污染的池塘中，体内重金属积累最多的生物是（    ）",
    "province": "河北",
    "options": [
      "A. 黑鱼",
      "B. 虾",
      "C. 剑水蚤",
      "D. 浮萍"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 100137,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列四种细胞中，不可能存在Y染色体的是",
    "province": "河北",
    "options": [
      "A. 精子",
      "B. 受精卵",
      "C. 卵细胞",
      "D. 肌肉细胞"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 100138,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列属于可遗传变异的是（    ）",
    "province": "河北",
    "options": [
      "A. 整容手术后的双眼皮",
      "B. 接受核辐射后而变异的老鼠",
      "C. 经常锻炼后肌肉发达",
      "D. 因水肥充足而颗粒饱满的水稻"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 100139,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "可能诱发癌症的生活方式是（    ）",
    "province": "河北",
    "options": [
      "A. 按时吃早餐",
      "B. 不吸烟不喝酒",
      "C. 保持心情愉快",
      "D. 经常吃腌制和烟熏食物"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 100140,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于抗生素的叙述中，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 服用抗生素不需要医生的指导",
      "B. 滥用抗生素可能会导致细菌的抗药性增强",
      "C. 抗生素对细菌性、病毒性疾病都有效",
      "D. 服用抗生素对体内的有益细菌没有影响"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 100141,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "不符合环保理念的行为是（    ）",
    "province": "河北",
    "options": [
      "A. 实行垃圾分类",
      "B. 倡导无纸化办公",
      "C. 使用一次性筷子",
      "D. 推广新能源汽车"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 69668,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "端午佳节，粽叶飘香。下列粽子的食材中糖类含量较高的是（    ）",
    "province": "河北",
    "options": [
      "A. 糯米",
      "B. 咸蛋黄",
      "C. 花生种子",
      "D. 腊肉"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 69669,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“春种一粒粟，秋收万颗子。”体现的生物基本特征是（    ）",
    "province": "河北",
    "options": [
      "C. 需要营养",
      "D. 排出废物"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 69670,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "移栽植物最好在阴天或傍晚，必要时还要去掉部分枝叶，这是为了降低植物的（   ）",
    "province": "河北",
    "options": [
      "A. 光合作用",
      "B. 呼吸作用",
      "C. 蒸腾作用",
      "D. 吸收作用"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 69671,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年4月25日，神舟十八号载人飞船发射成功。神舟十八号实施国内首次在轨水生生态研究项目，以斑马鱼和金鱼藻为研究对象，在轨建立稳定运行的空间自循环水生生态系统。斑马鱼和金鱼藻在该生态系统中分别属于（    ）",
    "province": "河北",
    "options": [
      "A. 消费者生产者",
      "B. 生产者消费者",
      "C. 分解者消费者",
      "D. 分解者生产者"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 69672,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图所示为某同学在光学显微镜下观察到 <img src=\"images/河北_f1ffd4_01e56224.wmf\"> 天竺葵叶横切片的视野。欲将物像①移至视野中央，应将载玻片向（    ）移动。",
    "province": "河北",
    "options": [
      "A. 左上方",
      "B. 左下方",
      "C. 右上方",
      "D. 右下方"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 69673,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "微生物一般指个体微小，结构简单的生物，主要包括病毒、细菌和真菌。细菌与真菌相比，没有的细胞结构是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞壁",
      "B. 细胞膜",
      "C. 细胞质",
      "D. 成形的细胞核"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 69674,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "枯叶蝶的体形和体色酷似枯叶，用达尔文的生物进化观点分析，这是（    ）的结果",
    "province": "河北",
    "options": [
      "A. 新陈代谢",
      "B. 过度繁殖",
      "C. 自然选择",
      "D. 人工选择"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 69675,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为油菜的结构层次示意图。下列相关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. a表示细胞分化过程",
      "B. b表示细胞分裂过程",
      "C. c表示组织构成器官",
      "D. d表示系统构成个体"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 69676,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物圈中的植物种类繁多，形态各异。下列相关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 被子植物能开花并结出果实和种子",
      "B. 苔藓植物已有了根、茎、叶的分化",
      "C. 雪松、马尾松的种子有果皮包被着",
      "D. 贯众属于裸子植物，能够产生孢子"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 69677,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "绿色开花植物的生命周期包括种子萌发、生长、开花、结果与死亡等阶段。下列相关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 光照是蚕豆种子萌发的必要条件",
      "B. 根尖 <img src=\"images/河北_f1ffd4_01e56224.wmf\"> 根冠是吸收水的主要部位",
      "C. 花药和花丝是桃花最主要的结构",
      "D. 受精后，子房里胚珠发育成种子"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 69678,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "健康人体一昼夜产生的原尿可达150L，但人每天排出的尿液约为1.5L。在尿液的形成过程中起重要作用的结构是下图中的（    ）",
    "province": "河北",
    "options": [
      "A. ①③④",
      "B. ②③⑤",
      "C. ②④⑤",
      "D. ③④⑤"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 69679,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图中的甲、乙分别是植物细胞和动物细胞结构模式图。下列相关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 与图甲相比，图乙不具有的结构是①③",
      "B. ②是细胞壁，对细胞起保护和支持作用",
      "C. ③是叶绿体，是细胞进行呼吸作用场所",
      "D. ④是细胞核，是细胞生命活动控制中心"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 69680,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "健康地生活是人类共同追求的目标。下列相关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 感冒症状严重可自行同时服用两种感冒药增强疗效",
      "B. 吸烟、酗酒和吸毒是严重威胁生命健康的不良行为",
      "C. 青春期是生长重要阶段，高蛋白食物摄入越多越好",
      "D. 勤洗手、戴口罩可以防止外界一切病原体侵入人体"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 69682,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物学的结构与功能观是重要的生命观念之一。下列相关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 小肠内表面具有皱襞和绒毛，可增加消化和吸收的表面积",
      "B. 鲫鱼的身体有胸鳍和腹鳍各一对，可感知水流和测定方位",
      "C. 心房与心室之间、心室与动脉之间的瓣膜能加速血液流动",
      "D. 绿色开花植物的花粉萌发形成花粉管，有利于植物的传粉"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 69683,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "观察、实验是科学探究最基本的方法。下列实验中，相关操作与实验目的相匹配的是（    ）",
    "province": "河北",
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 103998,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "草履虫在水中游动时，遇到阻碍会改变方向，避开阻挡物。这体现草履虫具有的生物特征是（    ）",
    "province": "河北",
    "options": [
      "A. 能进行呼吸",
      "B. 能生长和繁殖",
      "C. 有遗传和变异的特性",
      "D. 能对外界刺激作出反应"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 103999,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "诗句“竹外桃花三两枝，春江水暖鸭先知”中，桃花叶肉细胞具有不同于鸭肌肉细胞 <img src=\"images/河北_4492ae_ca5a225f.png\"> 结构是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞壁",
      "B. 细胞膜",
      "C. 细胞质",
      "D. 细胞核"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 104000,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "一科普动画视频中，某器官自述：“我能清除废物、毒物、参与水和无机盐的调节，形成尿液”。你觉得这一器官最可能是（    ）",
    "province": "河北",
    "options": [
      "A. 肺",
      "B. 肾脏",
      "C. 皮肤",
      "D. 大肠"
    ],
    "answer": "B",
    "analysis": "<img src=\"images/河北_4492ae_ff274479.png\">"
  },
  {
    "id": 104003,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是某同学制作的细菌模型，其中明显缺失的是（    ）",
    "province": "河北",
    "options": [
      "A. 液泡",
      "B. 叶绿体",
      "C. 细胞核",
      "D. DNA（拟核）"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 104004,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "制作人体口腔上皮细胞临时装片的过程中，能维持细胞正常形态的操作是（    ）",
    "province": "河北",
    "options": [
      "A. 滴生理盐水",
      "B. 刮口腔内壁",
      "C. 盖盖玻片",
      "D. 滴加碘液"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 104005,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人类与传染病的斗争由来已久，我国早在宋朝就有将轻症天花患者脓包中的浆液接种到健康人身体上预防天花的做法。从预防传染病的角度判断，上述做法属于（    ）",
    "province": "河北",
    "options": [
      "A. 控制传染源",
      "B. 切断传播途径",
      "C. 保护易感人群",
      "D. 清除病原体"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 104006,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "近期，我国某科考团队正式对外发布，在江西境内发现的短芒复叶耳蕨是一个新物种。该物种叶背部着生的孢子囊集中分布在叶脉中脉附近。据此判断，该物种适合收录在（    ）",
    "province": "河北",
    "options": [
      "A. 《藻类学》",
      "B. 《中国苔藓志》",
      "C. 《蕨类植物学》",
      "D. 《中国裸子植物志》"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 104007,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "新质生产力本身就是绿色生产力。发展新质生产力需坚定不移走生态优先、绿色发展之路。下列不利于发展新质生产力的是（    ）",
    "province": "河北",
    "options": [
      "A. 垃圾分类变废为宝",
      "B. 毁林开荒围湖造田",
      "C. 植树造林绿化荒漠",
      "D. 生态农业减污增产"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 104008,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“小燕子，穿花衣，年年春天来这里”儿歌中的小燕子每年飞回繁殖地产卵，产出的受精鸟卵（下图）能孵化成雏燕的部位是（    ）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ②",
      "C. ③",
      "D. ④"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 104009,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物体结构与功能相适应。下列结构与功能对应关系不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 蚯蚓的刚毛——辅助运动",
      "B. 涡虫的眼点——感受光线",
      "C. 水螅的刺细胞——攻击防御",
      "D. 河蚌的外套膜——气体交换"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 104010,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "桔小实蝇是一种严重影响我国果蔬产量的外来物种，它的幼虫以果肉为食，生长发育到一定阶段入土化蛹，再羽化成蝇。下列昆虫与其发育方式不同的是（    ）",
    "province": "河北",
    "options": [
      "A. 蝗虫",
      "B. 蝴蝶",
      "C. 家蚕",
      "D. 蜜蜂"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 104011,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "剪纸是我国古老的民间艺术之一。下面是同学们在劳技课上以十二生肖为主题创作的剪纸作品，其中的动物不属于哺乳类的是（    ）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_4492ae_9eb60523.png\">",
      "B. <img src=\"images/河北_4492ae_a4505eb0.png\">",
      "C. <img src=\"images/河北_4492ae_f4deca5b.png\">",
      "D. <img src=\"images/河北_4492ae_1d41b53c.png\">"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 104012,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "虹膜通过改变瞳孔大小控制进入眼球内光线的强弱。下列显微镜操作中，能起类似作用的是（    ）",
    "province": "河北",
    "options": [
      "A. 旋转目镜",
      "B. 移动玻片",
      "C. 调遮光器",
      "D. 升降镜筒"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 104013,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学发现父母都能卷舌，自己却不能。经学习得知，能卷舌和不能卷舌是由一对基因（H和h）控制的相对性状。据此推测，她和她母亲的基因组成分别是（    ）",
    "province": "河北",
    "options": [
      "A. hh、HH",
      "B. hh、Hh",
      "C. HH、hh",
      "D. Hh、hh"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 104014,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人工种子是一种人工制造的代替自然种子的颗粒体，其结构（下图）与自然种子相似，具有种子的功能。图中能发育成新植株的是（    ） <img src=\"images/河北_4492ae_ff274479.png\">",
    "province": "河北",
    "options": [
      "A. 外部薄膜",
      "B. 褐藻酸明胶",
      "C. 营养物质",
      "D. 胚状体"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 104015,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "江西米粉火热出圈，米粉与下列食物搭配，营养更合理的是（    ）",
    "province": "河北",
    "options": [
      "A. ①④",
      "B. ②③",
      "C. ①②③",
      "D. ①②④"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 104016,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "《落花生》一文中描述了落花生的特点——地上开花、入地结荚。“荚”是落花生的茧状果实，下列结构能发育成“荚”的是（    ）",
    "province": "河北",
    "options": [
      "A. 子房",
      "B. 胚珠",
      "C. 子房壁",
      "D. 受精卵"
    ],
    "answer": "A",
    "analysis": "<img src=\"images/河北_4492ae_ff274479.png\">"
  },
  {
    "id": 104017,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在特定的情况下，一些急救方法能减少伤害或挽救生命。下列不属于急救方法的是（    ）",
    "province": "河北",
    "options": [
      "A. 人工呼吸",
      "B. 心肺复苏",
      "C. 止血包扎",
      "D. 定期体检"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 62299,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "细胞是生命起源的标志和生物进化的起点。所有细胞均具有的结构是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞壁",
      "B. 成形的细胞核",
      "C. 叶绿体",
      "D. 细胞膜"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 62300,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关细胞分裂和细胞分化的说法，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 一个草履虫通过细胞分化形成两个草履虫 <img src=\"images/河北_14a26b_ff274479.png\">",
      "B. 幼苗生长时，细胞分裂和细胞分化旺盛",
      "C. 受精卵形成新个体离不开细胞分裂和细胞分化",
      "D. 此时我们身体内有些细胞正在进行分裂或分化"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 62301,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "河北武强木版年画是国家级非物质文化遗产。下列年画作品表示的四种动物中，体温不恒定的是（    ）",
    "province": "河北",
    "options": [
      "A. 牛 <img src=\"images/河北_14a26b_86e61cb1.png\">",
      "B. 虎 <img src=\"images/河北_14a26b_a9fe2917.png\">",
      "C. 蛇 <img src=\"images/河北_14a26b_09283cc0.png\">",
      "D. 鸡 <img src=\"images/河北_14a26b_9d9a853f.png\">"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 62302,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为天竺葵叶及其内部结构示意图。图中没有包含的植物体结构层次是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞",
      "B. 组织",
      "C. 器官",
      "D. 个体"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 62303,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "用我们所学生物学知识分析，下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 煤主要是由古代蕨类植物的遗体形成的",
      "B. 葫芦藓有根、茎、叶的分化，适于陆地生活",
      "C. 种子植物的繁殖过程摆脱了对水环境的依赖 <img src=\"images/河北_14a26b_ff274479.png\">",
      "D. 青藏铁路设置的野生动物通道，减少了对藏羚迁徙的干扰"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 62304,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "萝卜、白菜是常见的蔬菜，这两种植物在生物学上的分类地位如下图所示。图中包含植物种类最多的分类等级是（    ）",
    "province": "河北",
    "options": [
      "A. 植物界",
      "B. 白花菜目",
      "C. 十字花科",
      "D. 萝卜属 <img src=\"images/河北_14a26b_ff274479.png\">"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 62305,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2023年，河北省对72个县域开展生物多样性调查，发现了水杉、银杉、白鹈鹕、黑嘴鸥、细鳞鲑、松江鲈等60余种国家重点保护动植物，丰富了我省野生动植物资源数据库。下列不属于野生动植物资源保护措施的是（    ）",
    "province": "河北",
    "options": [
      "A. 就地保护",
      "B. 国家颁布实施相关法律法规",
      "C. 异地保护",
      "D. 完全禁止利用"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 62306,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "同学们在路边发现了一种生长异常茂盛的植物。查阅资料获知，该植物中文名为喜旱莲（如下图所示），属于外来入侵植物。下列做法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 将喜旱莲子草移栽到校园",
      "B. 向有关部门报告喜旱莲子草的情况",
      "C. 积极参与清除喜旱莲子草的行动",
      "D. 向周围人群宣讲外来物种入侵的危害"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 62307,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "馒头是中国传统发酵食品。制作馒头用到的微生物主要是（    ）",
    "province": "河北",
    "options": [
      "A. 青霉",
      "B. 噬菌体",
      "C. 酵母菌",
      "D. 醋酸菌"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 62308,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学早晨冲了一杯浓香的黑芝麻糊，其主要原料是黑芝麻种子。黑芝麻种子的营养物质主要贮存在（    ）",
    "province": "河北",
    "options": [
      "A. 胚芽",
      "B. 胚根",
      "C. 胚轴",
      "D. 子叶"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 62309,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "野生大豆（如下图所示）在我国分布广，种类多。从野生大豆中筛选出的高蛋白、低脂肪等优质基因，可转入普通大豆体内培育新品种。下列关于野生大豆的说法，错误的是（    ） <img src=\"images/河北_14a26b_ff274479.png\">",
    "province": "河北",
    "options": [
      "A. 属于被子植物",
      "B. 根瘤中的根瘤菌能固氮",
      "C. 豆荚由花中的胚珠发育而来",
      "D. 是大豆育种的基因资源库"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 62310,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为研究施肥深度对干旱条件下小麦光合作用的影响，研究人员在相同条件下，选择符合实验标准的三个地块施肥、播种，长出植株后进行检测，实验数据（单位已省略）如下表所示。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 本实验控制的变量是施肥深度",
      "B. 随着施肥深度增加，小麦蒸腾作用减弱",
      "C. 小麦的光合作用速率与气孔开放程度、叶绿素含量有关",
      "D. 干旱条件下深施肥提高了小麦的光合作用速率"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 62311,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“曲曲折折的荷塘上面，弥望的是田田的叶子”描写了池塘中荷叶相连的景色，下列能直接发育成荷叶的是（    ）",
    "province": "河北",
    "options": [
      "A. 花芽",
      "B. 芽轴",
      "C. 幼叶",
      "D. 芽原基"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 62312,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为肺循环示意图，箭头表示血流方向，①②③④表示结构。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. ①可防止血液倒流",
      "B. ②表示右心室",
      "C. ③表示肺泡",
      "D. ④内的血液为静脉血"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 62313,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学在窗前远眺时，一只昆虫突然飞到眼前；经眼的一系列调节后，他看清了眼前的昆虫。能表示该过程的正确顺序是（    ）",
    "province": "河北",
    "options": [
      "A. ①②③",
      "B. ①③②",
      "C. ②①③",
      "D. ③②①"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 62314,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为某人左脚的踝关节射线透视图像，①②表示踝关节内的结构。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. ①是关节头，②是关节窝",
      "B. ①②表面覆盖着关节软骨 <img src=\"images/河北_14a26b_ff274479.png\">",
      "C. 关节腔内有滑液，使关节灵活",
      "D. 踝关节在运动中起枢纽（支点）作用"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 62315,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "结核杆菌通过呼吸道侵犯人体时，机体调动免疫系统进行防御。下列过程一定属于特异性免疫的是（    ）",
    "province": "河北",
    "options": [
      "A. 黏膜阻挡结核杆菌",
      "B. 某些细胞吞噬结核杆菌",
      "C. 溶菌酶杀灭结核杆菌",
      "D. 结核杆菌刺激免疫系统产生抗体"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 62316,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2023年，全国无偿献血的人次和献血总量均创历史新高。下列有关无偿献血的说法，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 献血前应鉴定血型",
      "B. 献血时从手臂动脉取血",
      "C. 献血后应适当多摄入蛋、奶等食物",
      "D. 献血后体内血液成分短期内可恢复正常"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 62317,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "飘飞的杨絮来自杨的雌株。用杨的雄株枝条扦插繁育新植株，逐渐替换雌株，是解决杨絮飘飞的一种方法。下列实例中，与杨的扦插不属于同一种生殖方式的是（    ）",
    "province": "河北",
    "options": [
      "A. 玉米杂交育种",
      "B. 人参组织培养",
      "C. 桃的嫁接",
      "D. 体细胞克隆牛"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 62318,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "同学们用3D打印技术制作了表示细胞核、染色体、DNA和基因关系的模型，如下图所示。其中a表示的是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞核",
      "B. 染色体",
      "C. DNA",
      "D. 基因"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 62319,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某人出现食量大、消瘦、心跳快、情绪易激动等症状。经化验，发现他的体内某种激素水平偏高，医生诊断其患甲亢。该激素是（    ）",
    "province": "河北",
    "options": [
      "A. 胰岛素",
      "B. 性激素",
      "C. 甲状腺激素",
      "D. 生长激素"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 62320,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "狗由古代狼经长期驯化而来。科研人员对比狗和狼的面部肌肉，发现大多数狗的眼周围多了两块肌肉，如下图所示。这两块肌肉相互配合使狗能表现出“可怜巴巴”的表情，但哈士奇（狗的品种）没有旁侧眼睑牵拉肌。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 推测有的古代狼眼周围有这两块肌肉",
      "B. 控制这两块肌肉的基因可遗传给后代 <img src=\"images/河北_14a26b_ff274479.png\">",
      "C. 狗“可怜巴巴”的表情是自然选择的结果",
      "D. 哈士奇与其他品种狗的表情可能不同"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 62321,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我们吃的食物进入消化道会发生各种变化。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 部分淀粉在口腔内分解为麦芽糖",
      "B. 蛋白质在胃内全部分解为氨基酸",
      "C. 脂肪经胆汁作用形成脂肪微滴",
      "D. 脂肪在小肠内分解为甘油和脂肪酸"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 62322,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "蝇子草有雌株和雄株之分，其性别决定方式与人类相同。蝇子草体细胞中含有22条常染色体和2条性染色体。正常情况下，蝇子草卵细胞中染色体组成是（    ）",
    "province": "河北",
    "options": [
      "A. 11条常染色体+X染色体",
      "B. 11条常染色体+Y染色体",
      "C. 22条常染色体+X染色体",
      "D. 22条常染色体+Y染色体"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 62323,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2022年，在河北围场早白垩纪地层中发现了完整的古七鳃鳗化石（如下图所示）。对该化石研究得知，古七鳃鳗具有鳃孔、背鳍和尾鳍等结构特征，与现存的七鳃鳗相似。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 围场在早白垩纪时期有古七鳃鳗分布",
      "B. 古七鳃鳗具有鳃孔和鳍，适于陆地生活",
      "C. 现存的七鳃鳗可能由古七鳃鳗进化而来 <img src=\"images/河北_14a26b_ff274479.png\">",
      "D. 古七鳃鳗化石是研究七鳃鳗进化的直接证据"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 94017,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "黄河落天走东海，万里写入胸怀间。今日黄河，岸高林密，鱼跃鸟鸣，岁岁安澜。下列选项中，属于生命现象的是（    ）",
    "province": "河北",
    "options": [
      "A. 鲤鱼戏水",
      "B. 波光鄰鄰",
      "C. 层峦叠嶂",
      "D. 云蒸霞蔚"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 94018,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人们对微观世界的认识离不开显微镜。光学显微镜的结构如图甲所示，植物细胞的结构如图乙所示。下列相关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 光线暗时可用①的平面镜",
      "B. 具有放大功能的结构是③",
      "C. ⑤具有支持和保护的作用",
      "D. 营养物质主要储存在⑦中"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 94019,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "水杉和镇海林蛙都是我国的特有物种。下列选项不属于两者共有的结构层次是（    ）",
    "province": "河北",
    "options": [
      "A. 系统",
      "B. 器官",
      "C. 组织",
      "D. 细胞"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 94020,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物的生长发育离不开细胞的分裂和分化。在细胞分化过程中，不发生改变的是（    ）",
    "province": "河北",
    "options": [
      "A. 形态",
      "B. 结构",
      "C. 遗传物质",
      "D. 生理功能"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 94021,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "郑州市西流湖公园已建设成为集生态文明、休闲游憩、历史文化传承于一体的城市公园。园内生物种类众多，形成了多条食物链。下列选项中，正确表示食物链的是（    ）",
    "province": "河北",
    "options": [
      "A. 昆虫→青蛙→蛇",
      "B. 草→昆虫→食虫鸟",
      "C. 鲫鱼→水蚤→藻类",
      "D. 阳光→藻类→鲢鱼"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 94022,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "绿化祖国要扩绿、兴绿、护绿并举。下列关于绿色植物在生物圈中作用的叙述，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 制造有机物",
      "B. 降低大气湿度",
      "C. 参与水循环",
      "D. 养育其他生物"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 94023,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "孟德尔通过豌豆杂交实验，为我们揭示了遗传的奥秘。豌豆花的结构如图所示，下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 杂交时需将花粉涂在①上",
      "B. ②是能够产生花粉的花药",
      "C. ③能够发育成豌豆的种皮",
      "D. ④能够发育成豌豆的种子"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 94024,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "养料由母体运给胎儿的途径是：母体子宫内膜→P→脐带→胎儿。P代表的结构是（    ）",
    "province": "河北",
    "options": [
      "A. 胎盘",
      "B. 卵巢",
      "C. 腹腔",
      "D. 输卵管"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 94025,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "河南省实施中小学食育工程，开启了“知”食“慧”吃的健康生活新模式。人体的部分消化腺及其功能如下表。下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. ①和⑤都能分泌激素",
      "B. ②和③含有相同的消化酶",
      "C. ④为初步消化蛋白质",
      "D. ⑥代表的是甘油和氨基酸"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 94026,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "琴声悠远，笔健墨香，音乐、书法给人带来美的感受。下列相关叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 接受琴声的感受器在耳蜗内",
      "B. 产生听觉的中枢在大脑皮层",
      "C. 挥笔写字需要神经系统调节",
      "D. 形成视觉的部位在视网膜上"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 94027,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人大量食用红肉火龙果后尿液会变红，原因是火龙果中的甜菜红素难以被分解，随尿液排出。尿的形成过程如图所示，在甜菜红素排出过程中，不经过的结构是（    ）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ②",
      "C. ③",
      "D. ④"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 94028,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "一群非洲狮遇到猎物时，最有战斗力的雄狮负责指挥，其他个体负责驱赶和捕捉。下列叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 非洲狮的运动系统由骨、关节和肌肉组成",
      "B. 非洲狮群体捕猎的行为与其遗传物质无关",
      "C. 非洲狮捕捉猎物的过程有分工合作的特点",
      "D. 胎生、哺乳能够提高非洲狮后代的成活率"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 94029,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "笔筒树高大挺拔，有根、茎、叶的分化，叶片背面有孢子囊群。推测其属于（    ）",
    "province": "河北",
    "options": [
      "A. 苔藓植物",
      "B. 蕨类植物",
      "C. 裸子植物",
      "D. 被子植物"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 94030,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "比较各种生物的同一种蛋白质（如细胞色素c）的氨基酸组成，可判断它们之间的亲缘关系。几种生物的细胞色素c与人类的相比，存在差异的氨基酸数目如图所示，其中与人类亲缘关系最近的是（    ）",
    "province": "河北",
    "options": [
      "A. 猕猴",
      "B. 果蝇",
      "C. 小麦",
      "D. 向日葵"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 94031,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "身体分节是无脊椎动物在进化过程中的一个重要标志。下列动物中，身体分节的是（    ）",
    "province": "河北",
    "options": [
      "A. 水螅",
      "B. 涡虫",
      "C. 蛔虫",
      "D. 蚯蚓"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 94033,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "单细胞生物只有一个细胞，能完成各项生命活动。下列单细胞生物中，无成形细胞核的是（    ）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_446bb1_a5f1c309.png\">",
      "B. <img src=\"images/河北_446bb1_7ffee27e.png\">",
      "C. <img src=\"images/河北_446bb1_abba1bdd.png\">",
      "D. <img src=\"images/河北_446bb1_9ad0b8f2.png\">"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 94034,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "康康尝试在家自制酸奶，将容器高温消毒后，依次加入1000mL鲜牛奶、适量白糖、100mL酸奶，搅拌均匀，密封发酵。下列相关分析错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 鲜牛奶可为发酵提供有机物",
      "B. 加入白糖可以调节酸奶口味",
      "C. 加酸奶的目的是接种醋酸菌",
      "D. 密封的目的是提供无氧环境"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 94035,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "登革热是由伊蚊叮咬传播的病毒性传染病。科学家将S基因转入伊蚊的基因组中，使其产生S蛋白，该蛋白可抑制伊蚊体内登革热病毒的繁殖。下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 伊蚊是登革热的病原体之一",
      "B. 病毒可以刺激人体产生抗原",
      "C. 登革热病毒靠分裂进行繁殖",
      "D. S蛋白是转基因技术的产物"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 94036,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "健康的生活方式有利于预防疾病，提高生活质量。下列做法不合理的是（    ）",
    "province": "河北",
    "options": [
      "A. 控制饮食，注重营养均衡",
      "B. 独来独往，拒绝他人帮助",
      "C. 安全用药，学习急救常识",
      "D. 强身健体，保持心情愉悦"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 94037,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "保护生态环境就是保护生产力。人们在生活中常有以下做法：①使用一次性餐具；②乘坐公共交通工具；③分类投放生活垃圾；④将电器长期处于待机状态。这些做法中有利于保护生态环境的是（    ）",
    "province": "河北",
    "options": [
      "A. ①②",
      "B. ①③",
      "C. ②③",
      "D. ②④"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 89848,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国科学家发明了一款新型植物茎流传感器（如图），可直接贴附在茎秆、叶片等表面，监测植物体内水分的运输及分配情况。由此推测，该传感器可监测的植物组织是（　　）",
    "province": "河北",
    "options": [
      "A. 保护组织",
      "B. 输导组织",
      "C. 分生组织",
      "D. 营养组织"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 89849,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某校生物社团为给校园植物挂牌，查阅了部分植物的分类等级，记录如下表。其中亲缘关系最近的两种植物是（　　）",
    "province": "河北",
    "options": [
      "A. 腊梅和樟",
      "B. 月季和樱花",
      "C. 樟和月季",
      "D. 腊梅和樱花"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 89850,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "宋代杨万里在《闲居初夏午睡起》中写道：“梅子留酸软齿牙，芭蕉分绿与窗纱”。品读这句诗顿时让人有一种酸酸的感觉。图中能产生“酸酸的”感觉的部位是（　　）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ②",
      "C. ③",
      "D. ④"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 89855,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "虹鳚（wèi）是生活在某地溪流中的一种鱼，在溪流上游群体中，体色鲜艳个体的比例大于下游群体。经调查发现：①该溪流下游的水比上游深，聚集了更多虹鳚的捕食者；②捕食者更容易发现并捕食体色鲜艳的虹鳚；③雌性虹鳚更喜欢与体色鲜艳的雄性虹鳚繁殖后代。根据上述调查，关于上下游虹鳚群体中体色形成的原因，下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 虹鳚体色与基因没有关系",
      "B. 虹鳚体色只由溪流深浅决定",
      "C. 体色鲜艳的虹鳚生存机会更大",
      "D. 捕食者对虹鳚的体色进行了选择"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 91034,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "窗台上的小绿植渐渐向窗外有阳光的方向生长。这主要体现了生物（    ）",
    "province": "河北",
    "options": [
      "A. 能对外界刺激作出反应",
      "B. 能进行呼吸",
      "C. 有遗传和变异的特性",
      "D. 能排出体内产生的废物"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 91035,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国是茶文化的发源地。茶树能通过光合作用制造有机物，其属于生态系统中的（    ）",
    "province": "河北",
    "options": [
      "A. 非生物部分",
      "B. 生产者",
      "C. 消费者",
      "D. 分解者"
    ],
    "answer": "B",
    "analysis": "<img src=\"images/河北_02c328_ff274479.png\">"
  },
  {
    "id": 91036,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生态系统多种多样，以下生态系统中最大的是（    ）",
    "province": "河北",
    "options": [
      "A. 生物圈",
      "B. 湘江",
      "C. 洞庭湖",
      "D. 衡山"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 91037,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "《齐民要术》中记载了用蓝草做染料的方法。蓝草的色素主要来自细胞结构中的（    ）",
    "province": "河北",
    "options": [
      "A. 液泡",
      "B. 细胞壁",
      "C. 线粒体",
      "D. 细胞核"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 91038,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "老树虽有空心现象，但营养物质的运输仍能正常进行。这是依靠（    ）",
    "province": "河北",
    "options": [
      "A. 保护组织",
      "B. 输导组织",
      "C. 分生组织",
      "D. 机械组织"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 91039,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "丝瓜的花有雄花和雌花之分。雄花不能结果的原因是没有（    ）",
    "province": "河北",
    "options": [
      "A. 花瓣",
      "B. 花丝",
      "C. 花药",
      "D. 子房"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 91040,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "一株玉米一生需要消耗超过200千克的水，绝大部分水通过叶片散失的生理过程是（    ）",
    "province": "河北",
    "options": [
      "A. 分解作用",
      "B. 呼吸作用",
      "C. 蒸腾作用",
      "D. 光合作用"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 91041,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "优美的环境和良好的生态是人类社会可持续发展的保证。下列做法不利于保护生态环境的是（    ）",
    "province": "河北",
    "options": [
      "A. 垃圾分类回收",
      "B. 绿色出行",
      "C. 使用一次性筷子",
      "D. 节约用水"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 91042,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "湖南多地盛产鲜美多汁的柑橘。食用柑橘可补充维生素C，从而预防（    ）",
    "province": "河北",
    "options": [
      "A. 夜盲症",
      "B. 坏血病",
      "C. 地方性甲状腺肿",
      "D. 佝偻病"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 91043,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "鼻腔内的鼻毛和黏液可以阻挡或黏住空气中的灰尘，说明鼻腔能（    ）",
    "province": "河北",
    "options": [
      "A. 温暖空气",
      "B. 湿润空气",
      "C. 清洁空气",
      "D. 顺畅通气"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 91044,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学用胶管和漏斗制作了如图所示的肾单位结构模型，其中模拟肾小管的是（    ）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ②",
      "C. ③",
      "D. ④"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 91045,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "现代医学研究认为，青少年保证充足的睡眠，有助于垂体分泌更多生长激素。该激素的主要作用是 <img src=\"images/河北_02c328_ff274479.png\">",
    "province": "河北",
    "options": [
      "A. 调节血糖",
      "B. 促进生长发育",
      "C. 维持第二性征",
      "D. 提高神经系统兴奋性"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 91046,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为保护视力，需要养成良好 <img src=\"images/河北_02c328_ca5a225f.png\"> 用眼习惯。以下用眼习惯科学的是（    ）",
    "province": "河北",
    "options": [
      "A. 躺卧看书",
      "B. 长时间看电子屏幕",
      "C. 边走路边看书",
      "D. 保持正确的读写姿势"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 91047,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "运动员在训练过程中扭伤脚踝。医生对其伤情进行诊断时一般不需要检查的是（    ）",
    "province": "河北",
    "options": [
      "A. 骨",
      "B. 关节",
      "C. 肌肉",
      "D. 血型"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 91048,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "章鱼为了保护自己，会利用空的海螺壳做“铠甲”。这种行为属于（    ）",
    "province": "河北",
    "options": [
      "A. 防御行为",
      "B. 繁殖行为",
      "C. 迁徙行为",
      "D. 社会行为"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 91049,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“儿童疾走追黄蝶，飞入菜花无处寻。”黄蝶在花丛中穿梭时，身上沾满的花粉会掉落下来，这能（    ）",
    "province": "河北",
    "options": [
      "A. 帮助植物传粉",
      "B. 促进物质循环",
      "C. 维持生态平衡",
      "D. 帮助植物传播种子"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 91050,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "自东汉以来，我国民间就有立夏后制醋的习惯，这说明利用醋酸菌制醋需要（    ）",
    "province": "河北",
    "options": [
      "A. 充足的空气",
      "B. 适宜的温度",
      "C. 一定的水分",
      "D. 充足的光照"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 91051,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在20世纪初，科学家首次观察到烟草花叶病毒是一种杆状颗粒。下列有关病毒的正确叙述是（    ）",
    "province": "河北",
    "options": [
      "A. 没有细胞结构",
      "B. 能分裂生殖",
      "C. 在光学显微镜下可见",
      "D. 能独立生活"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 91052,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国是世界上生物多样性最丰富的国家之一。2022年发布的《中国生物物种名录》收录了125034个物种，这直接体现了（    ）",
    "province": "河北",
    "options": [
      "A. 基因的多样性",
      "B. 生物种类的多样性",
      "C. 结构的多样性",
      "D. 生态系统的多样性"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 91053,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下面是染色体和DNA的关系示意图。据图分析，以下说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. DNA分子呈螺旋状",
      "B. 染色体是遗传物质的载体",
      "C. 染色体的组成有DNA和蛋白质",
      "D. 每条染色体上有很多个DNA分子"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 91054,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "民谚曰：“不打春日三月鸟。”下列有关鸟类生殖和发育的正确叙述是（    ）",
    "province": "河北",
    "options": [
      "A. 生殖方式为胎生",
      "B. 体外受精",
      "C. 发育摆脱了对水环境的依赖",
      "D. 变态发育"
    ],
    "answer": "C",
    "analysis": "<img src=\"images/河北_02c328_ff274479.png\">"
  },
  {
    "id": 91055,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某种比目鱼可以通过调节体色和花纹来融入不同的环境。这种生存技巧（    ）",
    "province": "河北",
    "options": [
      "A. 是自然选择的结果",
      "B. 不利于躲避敌害",
      "C. 不利于捕食",
      "D. 是主动变异形成的"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 91056,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体内的溶菌酶能破坏细菌的细胞壁，这说明溶菌酶可以（    ）",
    "province": "河北",
    "options": [
      "A. 产生抗体",
      "B. 识别肿瘤细胞",
      "C. 杀灭细菌",
      "D. 吞噬衰老细胞 <img src=\"images/河北_02c328_ff274479.png\">"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 91057,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "皮肤轻微擦伤，血液从伤口渗出。此时可以采取的最佳措施是（    ）",
    "province": "河北",
    "options": [
      "A. 止血带压迫止血",
      "B. 拨打急救电话",
      "C. 人工呼吸",
      "D. 清洁伤口，贴创可贴"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 91058,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为探究植被类型对空气湿度的影响，某兴趣小组选取校园内面积相等的三个区域进行了空气湿度测量，结果如下表。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 该实验的变量为植被类型",
      "B. 裸地可作为该实验的对照组",
      "C. 灌木丛的空气湿度高于草地的空气湿度",
      "D. 测量时，不需要考虑三个区域的光照强度"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 20419,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "观察是科学探究中的一种基本方法，下列需借助显微镜观察的是（　　）",
    "province": "河北",
    "options": [
      "A. 桃花的雌蕊和雄蕊",
      "B. 鱼尾鳍内血液的流动",
      "C. 鸡卵的卵黄和胚盘",
      "D. 蚯蚓的外部形态和运动"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 20420,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列植物中无法观察到根、茎、叶的是（　　）",
    "province": "河北",
    "options": [
      "A. 水绵",
      "B. 油菜",
      "C. 肾蕨",
      "D. 油松"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 20421,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "葡萄被鸟兽吞食后，种子可不受消化液的侵蚀并随粪便排出体外进行传播。葡萄种子不被消化液侵蚀的原因是（　　）",
    "province": "河北",
    "options": [
      "A. 胚能分裂和分化",
      "B. 果肉富含营养",
      "C. 种皮有保护作用",
      "D. 子叶富含营养"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 20422,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "杂交育种需要进行人工辅助授粉，收集的花粉来自（　　）",
    "province": "河北",
    "options": [
      "A. 花瓣",
      "B. 柱头",
      "C. 花药",
      "D. 子房"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 20425,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "科学家发现距今175万年前的古人类遗物—石器（如下图所示）。该遗物表明当时的古人类能（　　）",
    "province": "河北",
    "options": [
      "A. 直立行走",
      "B. 烧烤食物",
      "C. 使用工具",
      "D. 使用语言"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 20426,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "胆囊切除后不宜吃红烧肉等富含脂肪的食物，是因为消化食物时缺少（　　）",
    "province": "河北",
    "options": [
      "A. 唾液",
      "B. 胃液",
      "C. 胆汁",
      "D. 肠液"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 20427,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列生物体结构中不具有吸收功能的是（　　）",
    "province": "河北",
    "options": [
      "A. 根毛",
      "B. 小肠绒毛",
      "C. 营养菌丝",
      "D. 呼吸道纤毛"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 20428,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某人摔伤腰部造成下肢失去运动能力、大小便失禁，形成截瘫。推测该病人损伤的是（　　）",
    "province": "河北",
    "options": [
      "A. 脊髓",
      "B. 小脑",
      "C. 脑干",
      "D. 大脑"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 20429,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "常吃海带、紫菜等含碘丰富的海产品可以防治（    ）",
    "province": "河北",
    "options": [
      "A. 侏儒症",
      "B. 巨人症",
      "C. 大脖子病",
      "D. 糖尿病"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 20434,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "蜈蚣属于节肢动物而非环节动物，判断依据是（　　）",
    "province": "河北",
    "options": [
      "A. 两侧对称",
      "B. 身体分节",
      "C. 有外骨骼",
      "D. 有口有肛门"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 20435,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列鸟类的形态结构特征中，能减少飞行中空气阻力的是（　　）",
    "province": "河北",
    "options": [
      "A. 有龙骨突",
      "B. 胸肌发达",
      "C. 前肢变成翼",
      "D. 身体呈流线型"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 20436,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某研究团队观察到一只野生猩猩使用药用植物治疗伤口。对此叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 这是一种学习行为",
      "B. 这与猩猩的遗传物质无关",
      "C. 猩猩大脑比较发达",
      "D. 这有利于适应环境的变化"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 20437,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "破伤风杆菌感染人体后大量繁殖会使人患破伤风，当伤口较深时（如被铁钉扎伤）容易得破伤风，而伤口较浅时（如皮肤表面划破）一般不会得破伤风。据此推测合理的是（　　）",
    "province": "河北",
    "options": [
      "A. 破伤风杆菌只在有光条件下繁殖",
      "B. 破伤风杆菌只在低温条件下繁殖",
      "C. 破伤风杆菌只在有氧条件下繁殖",
      "D. 破伤风杆菌只在无氧条件下繁殖"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 20439,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列发酵食品中，利用酵母菌产生的二氧化碳气体使其松软可口的是（　　）",
    "province": "河北",
    "options": [
      "A. 面包",
      "B. 酸奶",
      "C. 泡菜",
      "D. 米醋"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 20440,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“几处早莺争暖树，谁家新燕啄春泥。”描述的是鸟类繁殖行为中的",
    "province": "河北",
    "options": [
      "A. 求偶",
      "B. 育雏",
      "C. 孵卵",
      "D. 筑巢"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 20441,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "肤色正常和白化病是一对相对性状（由基因A、a控制）。一个白化病患者（其父母肤色正常）和一个肤色正常的人婚配，下列推测正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 白化病是由显性基因A控制",
      "B. 该患者的子女一定患白化病",
      "C. 患者父亲的基因组成为AA或Aa",
      "D. 该患者的子女一定含a基因"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 20442,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "研究表明被子植物是由原始的裸子植物进化而来，这体现了生物进化的趋势是（　　）",
    "province": "河北",
    "options": [
      "A. 由水生到陆生",
      "B. 由单细胞到多细胞",
      "C. 由简单到复杂",
      "D. 由体积小到体积大"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 20443,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "据记载，我国在宋朝就已采用接种人痘的方法来预防天花。这一预防措施属于（　　）",
    "province": "河北",
    "options": [
      "A. 消灭病原体",
      "B. 控制传染源",
      "C. 切断传播途径",
      "D. 保护易感人群"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 20444,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "当遇到挫折或不顺心的事情时，下列做法不恰当的是（　　）",
    "province": "河北",
    "options": [
      "A. 找朋友诉说，寻求帮助",
      "B. 担心被责骂，不与家长沟通",
      "C. 寻找合适理由，安慰自己",
      "D. 和朋友一起运动，转移注意力"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 53276,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "软儿梨是兰州冬季的特色水果，需要冷冻保存。解冻后的软儿梨会流出甘甜的汁液，这些汁液主要来自（    ）",
    "province": "河北",
    "options": [
      "A. 细胞膜",
      "B. 细胞核",
      "C. 液泡",
      "D. 叶绿体"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 53277,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国幅员辽阔，有不少珍稀动植物。与“中国鸽子树”珙桐相比，“国宝”大熊猫特有的结构层次是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞",
      "B. 组织",
      "C. 器官",
      "D. 系统"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 53278,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "女性整个孕期约需280天，故有“十月怀胎”的说法。胚胎在发育过程中，与母体进行物质交换的结构是（    ）",
    "province": "河北",
    "options": [
      "A. 卵巢",
      "B. 胎盘",
      "C. 脐带",
      "D. 输卵管"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 53279,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列器官中，既能消化食物又能吸收营养的是（    ）",
    "province": "河北",
    "options": [
      "A. 口腔",
      "B. 小肠",
      "C. 大肠",
      "D. 肛门"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 53280,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体内控制膝跳反射的神经中枢位于（    ）",
    "province": "河北",
    "options": [
      "A. 大脑",
      "B. 小脑",
      "C. 脑干",
      "D. 脊髓"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 53281,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "各种动物都有其自身的形态结构和生理功能。下列动物与其特征匹配错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 草履虫——依靠纤毛运动",
      "B. 螃蟹——体表有坚硬的外骨骼",
      "C. 大黄鱼——用肺呼吸",
      "D. 家鸽——身体呈流线型"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 53282,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小麦种子可加工成面粉，其贮藏营养的结构是（    ）",
    "province": "河北",
    "options": [
      "A. 胚芽",
      "B. 胚根",
      "C. 胚乳",
      "D. 子叶"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 53283,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“桃之夭夭，灼灼其华”，第41届兰州桃花会于4月16日启动，全市人民同心协力续写“强省会”战略新篇章。下方桃花的结构模式图中，传粉、受精后发育成种子的是（    ）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ②",
      "C. ③",
      "D. ④"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 53284,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“甜酪甜，老人娃娃口水咽，一碗两碗能开胃，三碗四碗顶顿饭。”甜酪子是利用酵母菌发酵的产物，下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 甜酪子发酵过程需保持一定的温度",
      "B. 酵母菌属于细菌",
      "C. 利用酵母菌还可制作馒头",
      "D. 酵母菌能通过出芽生殖产生后代"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 53285,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为部分动物分类等级示意图，图中与亚洲黑熊亲缘关系最近的是（    ）",
    "province": "河北",
    "options": [
      "A. 北极熊",
      "B. 大熊猫",
      "C. 荒漠猫",
      "D. 兔狲"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 53286,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "呼吸作用是绿色植物的重要生理过程。一般情况下，呼吸作用的原料、场所分别是（    ）",
    "province": "河北",
    "options": [
      "A. 二氧化碳和水、叶绿体",
      "B. 二氧化碳和水、线粒体",
      "C. 有机物和氧气、叶绿体"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 53287,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "对二氧化硫等有毒气体十分敏感，可作为监测空气污染程度指示植物的是（　　）",
    "province": "河北",
    "options": [
      "A. 藻类植物",
      "B. 苔藓植物",
      "C. 蕨类植物",
      "D. 裸子植物"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 53288,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于心脏、血管和血液说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 中医常用“切脉”的方式来诊断疾病，这里的“脉”是指动脉",
      "B. 与左心房相连的血管是主动脉",
      "C. 失血过多的B型血病人，可大量输入O型血",
      "D. 受伤流血时，促进止血并加速血液凝固的是红细胞"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 53290,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "维生素是一类重要的营养物质，所以青少年每天都应食用一定量的（    ）",
    "province": "河北",
    "options": [
      "A. 蛋糕、油条",
      "B. 海带、带鱼",
      "C. 酿皮、手擀粉",
      "D. 新鲜蔬菜、水果"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 53291,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列都是由于激素分泌异常引起的一组疾病是（    ）",
    "province": "河北",
    "options": [
      "B. 蛔虫病、地方性甲状腺肿",
      "C. 呆小症、糖尿病",
      "D. 色盲、白血病"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 53292,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在探索生命奥秘的过程中，下列学习活动及相关叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 验证绿叶在光下产生淀粉——暗处理的目的是消耗掉叶片中原有的淀粉",
      "B. 探究小型生态系统的稳定性——生态系统的自我调节能力是有限的",
      "C. 讨论尿液的组成成分——正常人尿液中含有大量的水、尿素和葡萄糖",
      "D. 纸片游戏揭示“生男生女的奥秘”——人的性别由性染色体的组成决定"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 53293,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "天水大樱桃以其果大、色鲜、味美等特点吸引了众多游客前去采摘。有游客发现同一株樱桃树上结着不同品种的果实，这里采用的技术是（    ）",
    "province": "河北",
    "options": [
      "A. 扦插",
      "B. 压条",
      "C. 嫁接",
      "D. 植物组织培养"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 53294,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是蝴蝶的生殖与发育过程示意图，其发育类型与发育过程分别为（    ）",
    "province": "河北",
    "options": [
      "A. 完全变态发育、③→④→①→②",
      "B. 完全变态发育、②→③→④→①",
      "C. 不完全变态发育、③→④→①→②",
      "D. 不完全变态发育、②→③→④→①"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 53295,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于生命起源和生物进化的叙述中，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 原始大气中含有甲烷、氨、氧气和水蒸气等",
      "B. 化石是保存在地层中的古生物的遗体、遗物和遗迹",
      "C. 达尔文提出了生物进化的自然选择学说",
      "D. 脑容量的逐渐增加是人类进化过程中最显著的变化之一"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 53296,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "健康是青少年生活和学习的重要保障，下列描述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 艾滋病病毒只通过血液途径传播",
      "B. 青少年要珍爱生命，拒绝毒品",
      "C. 吸烟只会对人体的呼吸系统造成损伤",
      "D. 健康指身体没有疾病"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 14830,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "健康人骨髓中的造血干细胞能产生正常血细胞。这一过程称为（　　）",
    "province": "河北",
    "options": [
      "A. 细胞分裂",
      "B. 细胞分化",
      "C. 细胞生长",
      "D. 细胞癌变"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 14831,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "槐树、杨树等木本植物的茎能够逐年加粗，原因是茎具有（    ）",
    "province": "河北",
    "options": [
      "A. 树皮",
      "B. 导管",
      "C. 筛管",
      "D. 形成层"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 14832,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "无土栽培脱离了土壤的限制，扩展了农业生产的空间。配制无土栽培营养液时，需要添加的物质是（    ）",
    "province": "河北",
    "options": [
      "A. 淀粉",
      "B. 蛋白质",
      "C. 无机盐",
      "D. 维生素"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 14833,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下表为人体吸入、呼出的气体成分含量变化，呼出气体中的二氧化碳含量明显增加，这些二氧化碳根本来自于（    ）",
    "province": "河北",
    "options": [
      "A. 肺泡",
      "B. 血浆",
      "C. 呼吸道",
      "D. 组织细胞"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 14834,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "用显微镜观察人血永久涂片时，可以观察到的现象是（    ）",
    "province": "河北",
    "options": [
      "A. 成熟红细胞无细胞核",
      "B. 血小板具有细胞核",
      "C. 数量最多的是白细胞",
      "D. 体积最大的是红细胞"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 14835,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列各器官中，不属于人体排泄器官的是      (      )",
    "province": "河北",
    "options": [
      "A. 皮肤",
      "B. 肺",
      "C. 肾",
      "D. 肛门"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 14836,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "近年来由于手机、电脑等电子产品的普及，导致青少年近视率居高不下、不断攀升。下列关于近视及预防的叙述中，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 一边走路一边看书不会引起近视",
      "B. 近视的原因是物像落在视网膜前方",
      "C. 可以通过配戴凹透镜矫正近视眼",
      "D. 适时远眺有利于晶状体曲度恢复原状"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 14837,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国科学家采用体细胞克隆技术，在世界上首次成功克隆出灵长类动物——猕猴“中中”“华华”。这种生殖方式属于（    ）",
    "province": "河北",
    "options": [
      "A. 有性生殖",
      "B. 无性生殖",
      "C. 营养生殖",
      "D. 出芽生殖"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 14838,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国科学家在辽宁省发现了孔子鸟化石，其翼端有爪，由此推断鸟类的祖先可能是古代的（    ）",
    "province": "河北",
    "options": [
      "A. 鱼类",
      "B. 两栖类",
      "C. 爬行类",
      "D. 哺乳类"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 14839,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“牛奶鸡蛋醪糟”是风靡金城兰州的一道美食，其原料之一——醪糟，在发酵过程中所利用的微生物主要是（    ）",
    "province": "河北",
    "options": [
      "A. 乳酸菌",
      "B. 醋酸菌",
      "C. 大肠杆菌",
      "D. 酵母菌"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 87214,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "松鼠具有而松树没有的结构层次是（   ）",
    "province": "河北",
    "options": [
      "A. 细胞",
      "B. 组织",
      "C. 器官",
      "D. 系统"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 87215,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在玉米种子中，能够发育成根系的结构是（    ）",
    "province": "河北",
    "options": [
      "A. 胚芽",
      "B. 胚乳",
      "C. 胚根",
      "D. 子叶"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 87216,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "一个靖远蜜瓜中有很多枚种子，这说明雌蕊中有很多个（    ）",
    "province": "河北",
    "options": [
      "A. 子房",
      "B. 胚珠",
      "C. 花药",
      "D. 花粉"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 87217,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "进入青春期，男生长出胡须、声音变粗，女生乳房增大、声调较高。这种身体发育方面的变化，主要与哪种激素有关（    ）",
    "province": "河北",
    "options": [
      "A. 性激素",
      "B. 生长激素",
      "C. 甲状腺激素",
      "D. 胰岛素"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 87218,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "男性精子中的性染色体组成是（    ）",
    "province": "河北",
    "options": [
      "A. X",
      "B. Y",
      "C. X或Y",
      "D. X和Y"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 87219,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小李同学不慎感染流感，从传染病角度分析，他的同学和家人属于（    ）",
    "province": "河北",
    "options": [
      "A. 病原体",
      "B. 传染源",
      "C. 传播途径",
      "D. 易感人群"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 64584,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在学校的劳动基地，同学们开展西瓜幼苗移栽和田间管理活动，下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 阴天移栽，有利于进行光合作用",
      "B. 及时松土，促进根部的呼吸作用",
      "C. 定期拔草，避免杂草争夺有机物",
      "D. 过量施肥，有利于生根开花结果"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 64585,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是黄豆种子结构示意图，种子萌发时首先突破种皮的是（　　）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ②",
      "C. ③",
      "D. ④"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 64586,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "对预防牙龈出血起主要作用的维生素是（　　）",
    "province": "河北",
    "options": [
      "A. 维生素A",
      "B. 维生素B1",
      "C. 维生素C",
      "D. 维生素D"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 64587,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关人体激素的叙述，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 性激素与第二性征相关",
      "B. 甲状腺激素能够抑制代谢",
      "C. 生长激素是垂体分泌的",
      "D. 胰岛素能够调节血糖浓度"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 64588,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列营养较均衡的食谱是（　　）",
    "province": "河北",
    "options": [
      "A. 米饭、炒青菜、清蒸鲈鱼、苹果",
      "B. 米饭、红烧肉、排骨汤、冰激凌",
      "C. 牛排、奶油蛋糕、炸鸡腿、牛奶",
      "D. 炸鸡、香辣鸡翅、炸薯条、可乐"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 64589,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“眼睛是心灵的窗户”。下列行为有利于预防近视的是（　　）",
    "province": "河北",
    "options": [
      "A. 躺在床上看书",
      "B. 趴在桌上写字",
      "C. 长时间刷视频",
      "D. 做好眼保健操"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 64592,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列人的生殖器官与功能的对应关系，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 输卵管——提供营养",
      "B. 阴道——分娩通道",
      "C. 卵巢——产生卵细胞",
      "D. 睾丸——产生精子"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 64593,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关人的生殖与遗传的叙述，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 母亲的卵细胞类型决定孩子性别",
      "B. 男孩的X染色体一定来自于母亲",
      "C. 形成的生殖细胞染色体数目加倍",
      "D. 女孩体细胞染色体组成是44+XY"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 64594,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "朵朵遇到挫折感到烦恼时，下列做法错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 适当运动",
      "B. 调节情绪",
      "C. 沉迷手机",
      "D. 转移注意"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 64595,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在泌尿系统的结构中，具有暂时贮存尿液作用的器官是（　　）",
    "province": "河北",
    "options": [
      "A. 肾脏",
      "B. 输尿管",
      "C. 膀胱",
      "D. 尿道"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 64596,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "太阳升起，草原上野兔正在吃苜蓿，一只鹰从天而降，野兔成为它的美食，残骸最终被细菌分解。下列食物链正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 阳光→野兔→鹰",
      "B. 苜蓿→野兔→鹰",
      "C. 野兔→鹰→细菌",
      "D. 苜蓿→野兔→细菌"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 64597,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列植物属于蕨类的是（　　）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_7df472_9a79fef3.png\">",
      "B. <img src=\"images/河北_7df472_1be9786c.png\">",
      "C. <img src=\"images/河北_7df472_afc265d3.png\">",
      "D. <img src=\"images/河北_7df472_309b431c.png\">"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 64598,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "微生物与人类生产、生活关系密切，下列对应关系正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 乳酸菌——腌制腊肉",
      "B. 大肠杆菌——生产沼气",
      "C. 酵母菌——酿造米酒",
      "D. 醋酸杆菌——制作酸奶"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 64599,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关实验的分析，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. ①装有煮熟种子的装置中温度更高",
      "B. ②说明植物的呼吸作用能产生氧气",
      "C. ③收集的气体能使澄清石灰水变浑浊",
      "D. ④滴加碘液后叶片的遮光部分不变蓝"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 64600,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关疫苗的叙述，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 可通过注射或口服进入人体",
      "B. 能刺激人体产生抗体",
      "C. 乙肝疫苗能预防流行性感冒",
      "D. 可以应用于计划免疫"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 64601,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关微生物的叙述，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 噬菌体是细菌病毒，有细胞结构",
      "B. 酵母菌有液泡，是植物细胞",
      "C. 细菌都有叶绿体，能合成有机物",
      "D. 曲霉是真菌，利用孢子繁殖"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 64602,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "化石证据显示，200万年前大熊猫的食性从杂食进化成几乎以竹子为食。相比其他动物的食物，竹子坚硬难以咀嚼和消化，供能更少。科学家研究大熊猫时发现：①下颌结构及咀嚼肌发达②肠道远短于其他植食性动物③参与消化的肠道菌群与杂食性动物黑熊的更相似④日均移动距离小于500米⑤与其他动物相比，睡眠时间更长，以上支持大熊猫适于以竹子为食的事实是（　　）",
    "province": "河北",
    "options": [
      "A. ①②③",
      "B. ①③④",
      "C. ①④⑤",
      "D. ②④⑤"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 49594,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "金鱼和眼镜蛇的主要运动方式分别是（    ）",
    "province": "河北",
    "options": [
      "A. 游泳、爬行",
      "B. 奔跑、飞行",
      "C. 爬行、跳跃",
      "D. 行走、奔跑"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 49595,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列营养物质中，在口腔内能被分解为麦芽糖的是（    ）",
    "province": "河北",
    "options": [
      "A. 水",
      "B. 脂肪",
      "C. 蛋白质",
      "D. 淀粉"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 49596,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体血液的组成（成分）中，能吞噬病菌的是（    ）",
    "province": "河北",
    "options": [
      "A. 血浆",
      "B. 白细胞",
      "C. 红细胞",
      "D. 血小板"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 49597,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是眼球的结构示意图。图中表示晶状体的是（    ）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ②",
      "C. ③",
      "D. ④"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 49598,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体内受精卵形成的场所是（    ）",
    "province": "河北",
    "options": [
      "A. 卵巢",
      "B. 输卵管",
      "C. 子宫",
      "D. 阴道"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 49599,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列内分泌腺中，能分泌生长激素的是（    ）",
    "province": "河北",
    "options": [
      "A. 垂体",
      "B. 甲状腺",
      "C. 胰岛",
      "D. 睾丸"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 49600,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列生物中，属于单细胞生物的是（    ）",
    "province": "河北",
    "options": [
      "A. 青蛙",
      "B. 蝴蝶",
      "C. 变形虫",
      "D. 葫芦藓"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 49601,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "涡虫身体（背腹）扁平，有口无肛门。涡虫属于（    ）",
    "province": "河北",
    "options": [
      "A. 腔肠动物",
      "B. 扁形动物",
      "C. 环节动物",
      "D. 节肢动物"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 49602,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是受精的鸡卵结构示意图。含有细胞核，将来能发育成雏鸡的结构是（    ）",
    "province": "河北",
    "options": [
      "A. ①卵壳",
      "B. ②胚盘",
      "C. ③气室",
      "D. ④卵白"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 49603,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "接种疫苗能够提高人体对特定传染病的免疫力。接种卡介苗可以预防的传染病是（    ）",
    "province": "河北",
    "options": [
      "A. 结核病",
      "B. 百日咳",
      "C. 白喉",
      "D. 破伤风"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 49604,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "墨脱报春是我国科研人员发现的植物新物种。它在5月至6月开花，在7月结出果实，种子外有果皮包被。据此推断，墨脱报春属于（    ）",
    "province": "河北",
    "options": [
      "A. 苔藓植物",
      "B. 蕨类植物",
      "C. 裸子植物",
      "D. 被子植物"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 49605,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于细菌、真菌、病毒与人类生活关系的说法，不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 利用乳酸菌可制作酸奶",
      "B. 木耳可供人食用",
      "C. 利用酵母菌可制作面包",
      "D. 烟草花叶病毒可使人患麻疹"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 80602,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "组成人体结构和功能的基本单位是（　　）",
    "province": "河北",
    "options": [
      "A. 细胞",
      "B. 组织",
      "C. 器官",
      "D. 系统"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 80608,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "《中国生物物种名录2024版》中写道：“本年度收录的动物部分隶属于18门、52纲、246目、1884科、14194属、69407种。”其中最基本的分类单位是（　　）",
    "province": "河北",
    "options": [
      "A. 门",
      "B. 目",
      "C. 属",
      "D. 种"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 80609,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "今年“中国学生营养日”的主题是“奶豆添营养，少油更健康”，呼吁青少年多食用牛奶、大豆及奶制品，以获取大量优质的（　　）",
    "province": "河北",
    "options": [
      "A. 蛋白质",
      "B. 脂肪",
      "C. 糖类",
      "D. 维生素"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 80610,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "随着眼保健操音乐的响起，小军做起了眼保健操，该反射属于（　　）",
    "province": "河北",
    "options": [
      "A. 简单（非条件）反射",
      "B. 复杂（条件）反射",
      "C. 眨眼反射",
      "D. 缩手反射"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 80611,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“从哪里来”是我们从小就追问的问题，“我”是从受精卵开始发育的，受精卵形成的部位是（　　）",
    "province": "河北",
    "options": [
      "A. 卵巢",
      "B. 输卵管",
      "C. 子宫",
      "D. 阴道"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 80612,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年我国科学家将基因编辑猪的肾脏移植到一位患有终期肾衰的病人体内，猪肾在人体内很快就正常工作。“正常工作”主要是指（　　）",
    "province": "河北",
    "options": [
      "A. 形成尿液",
      "B. 输送尿液",
      "C. 储存尿液",
      "D. 排出尿液"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 80613,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "进入青春期后会面临较多的心理矛盾和冲突，错误的解决方式是（　　）",
    "province": "河北",
    "options": [
      "A. 与父母同伴交流",
      "B. 参加文体活动",
      "C. 寻求心理咨询",
      "D. 沉迷网络游戏"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 80614,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "研究人员在缙云山发现了一种两栖类新物种，命名为缙云掌突蟾。下列有关它的说法错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 幼体用鳃呼吸",
      "B. 皮肤裸露",
      "C. 在水中产卵",
      "D. 体温恒定"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 80618,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "动物的运动方式和运动能力千差万别，下列动物的运动需要关节参与的是（　　）",
    "province": "河北",
    "options": [
      "A. 水螅的捕食",
      "B. 蜗牛的爬行",
      "C. 蚯蚓的蠕动",
      "D. 马的奔跑"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 80619,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "《刑法》第344条规定“非法引进、释放或丢弃外来入侵物种，情节严重的，会被判处3年以下有期徒刑……”，外来入侵物种产生的影响，不包括（　　）",
    "province": "河北",
    "options": [
      "A. 与本地物种争夺营养",
      "B. 与本地物种竞争空间",
      "C. 威胁本地生态安全",
      "D. 维持本地生态平衡"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 80620,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "对刚出生的婴儿接种卡介苗可预防结核病，卡介苗属于（　　）",
    "province": "河北",
    "options": [
      "A. 传染源",
      "B. 传播途径",
      "C. 抗原",
      "D. 抗体"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 80621,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在酸奶中添加醪糟（米酒）制成的醪糟酸奶，给味蕾带来全新的体验。下列说法错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 醪糟的制作需要酵母菌",
      "B. 酸奶的制作需要醋酸菌",
      "C. 醪糟的发酵需要无氧条件",
      "D. 酸奶的发酵需要适宜温度"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 80622,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列不属于健康生活方式的是（　　）",
    "province": "河北",
    "options": [
      "A. 合理音乐，平衡器官",
      "B. 观察旋神，喝酒交友",
      "C. 按时作息，坚持锻炼",
      "D. 拒绝毒品，防止网疫"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 80623,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "以下实验及相关的操作，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 制作人体口腔上皮细胞临时装片——在载玻片上滴加清水",
      "B. 验证绿叶在光下制造有机物——滴加碘液检验淀粉",
      "C. 探究绿豆种子萌发 <img src=\"images/河北_7691ea_c62a680c.wmf\"> 环境条件——选取多粒种子以避免偶然性",
      "D. 观察草履虫的外形及运动——放几丝棉花纤维限制其运动"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13667,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "草履虫、酵母菌和大肠杆菌等都是单细胞生物。关于单细胞生物的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 都是植物",
      "B. 都是寄生生活",
      "C. 都是一个生物体",
      "D. 都对人类无影响"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13668,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小秦整理纸张时手被划破，感到疼痛。这是因为小秦皮肤内有能够感受刺激、传导神经冲动的组织，该组织是（    ）",
    "province": "河北",
    "options": [
      "A. 分生组织",
      "B. 神经组织",
      "C. 肌肉组织",
      "D. 营养组织"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13669,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图①~③是根尖结构的不同区域。下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. ①中根毛的形成是细胞生长的结果",
      "B. ②细胞由小变大是细胞分化的结果",
      "C. ③细胞数量增多是细胞分裂的结果",
      "D. ①②③中的细胞均来源于根冠细胞"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13670,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“稻—鱼—鸭”立体生态种养模式是在传统种稻模式下，利用稻田养鱼、养鸭。鱼、鸭可为稻田除草、治虫，其粪便也能肥田。以下关于“生态模式”的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. ①④",
      "B. ②③",
      "C. ①②",
      "D. ③④"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13672,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "花生在地上开花、传粉、受精后，图中①若被推入土中，则继续发育成②；否则不能正常发育。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. ①由胚根发育而来",
      "B. ②是种子",
      "C. 影响①正常发育的因素一定是水",
      "D. 形成②所需的有机物来自叶"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 13674,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2023年5月底，科研人员在西藏林芝发现了裸子植物藏南柏木，它被誉为亚洲第一高树。下列与它亲缘关系最近的植物是（    ）",
    "province": "河北",
    "options": [
      "A. 银杏",
      "B. 葫芦藓",
      "C. 海带",
      "D. 肾蕨"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13675,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图①②是葡萄叶 <img src=\"images/河北_10d733_5fab1d1a.wmf\"> 不同结构。下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 由②进入的二氧化碳是呼吸作用的原料",
      "B. 葡萄进行蒸腾作用，少量水分经②散失参与水循环",
      "C. 葡萄贮存的糖类物质由①细胞中的细胞核制造",
      "D. ①细胞通过光合作用维持碳氧平衡"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 13676,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2024年5月18日，据央视新闻报道，陕西旬邑石门山自然保护区拍摄到国家一级保护动物华北豹行走的清晰影像。有关华北豹运动的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 关节由关节头和关节窝组成",
      "B. 行走主要靠四肢",
      "C. 骨收缩牵拉肌肉完成行走",
      "D. 不利于觅食和繁殖后代"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13677,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小秦今天的早餐是牛奶和面包。有关小秦所食早餐的消化，说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 食物流经胃时，面包开始被消化",
      "B. 早餐中食物消化的主要场所是小肠",
      "C. 肝脏分泌的蛋白酶，可以消化牛奶",
      "D. 早餐中的淀粉最终被分解为氨基酸"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13678,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列实验操作的目的，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13680,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "黄鼬俗称“黄鼠狼”，遇到危险本能地排出臭气来麻痹敌人。它常捕食的鼠类闻到臭气往往选择逃离。下列关于“排出臭气”这一行为的说法，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 只对黄鼬有利",
      "B. 有利于躲避敌害",
      "C. 是学习行为",
      "D. 可以诱杀鼠类"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13681,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "以下是健康人正常尿液形成过程示意图。其中在①②部位发生了重要生理作用，“•”表示某种成分。能模拟尿素排出过程的是（    ）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_10d733_1089992d.png\">",
      "B. <img src=\"images/河北_10d733_c32f9e69.png\">",
      "C. <img src=\"images/河北_10d733_077f37a2.png\">",
      "D. <img src=\"images/河北_10d733_9304518d.png\">"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 13682,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小秦将“羚牛、大鲵和朱鹮”归为一类的原因是（    ）",
    "province": "河北",
    "options": [
      "A. 都是脊椎动物",
      "B. 都会飞行",
      "C. 都是胎生",
      "D. 都用鳃呼吸"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13683,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图①~④是女性生殖系统的不同器官。有关人的生殖，叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 卵细胞在④与精子结合",
      "B. 胎儿正常生活的场所是①",
      "C. ②与维持第二性征有关",
      "D. ③是女性的主要生殖器官"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13684,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "研究表明，与人类学习说话相关的神经中枢在5岁左右发育完成。5岁前因耳蜗病变造成耳聋的患者，若在相关神经中枢发育完成后再植入人工耳蜗，仅能听到声音，无法正常说话。下列关于耳蜗和“5岁前耳聋患者”的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 植入人工耳蜗越早越好",
      "B. 耳蜗位于中耳",
      "C. 失去听觉不会影响说话",
      "D. 耳蜗形成听觉"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13686,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图表示人工种子的结构。胚状体类似于种子中的胚，是通过植物组织培养技术培育的。有关人工种子的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 培育技术可以实现快速繁殖",
      "B. 萌发时所需营养来自胚状体",
      "C. 能保持双亲的优良性状",
      "D. 繁殖方式属于有性生殖"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13687,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小秦发现酸奶胀袋了。关于酸奶及其胀袋的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 酸奶制作不灭杂菌",
      "B. 胀袋是杂菌光合作用所致",
      "C. 胀袋后不可以食用",
      "D. 酸奶可放在冰箱永久保存"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13689,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "显微镜配置的物镜放大倍数为10×、40×。下图①②是目镜，③④是物镜，物镜镜头上⑤的直径越大，通过光线越多，视野越亮。显微镜放大倍数越大，观察到的视野越暗。视野中，细胞数量最多的组合是（    ）",
    "province": "河北",
    "options": [
      "A. ①③",
      "B. ②④",
      "C. ②③",
      "D. ①④"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 13690,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "霍乱是由不洁食物和饮水中的霍乱弧菌引起的急性腹泻传染病。下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 霍乱弧菌没有细胞结构",
      "B. 防止水源污染是预防霍乱的有效措施",
      "C. 霍乱通过空气传播",
      "D. 不洁食物和饮水是霍乱的传染源"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13691,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "烟草燃烧时会产生尼古丁、焦油和一氧化碳等物质。为探究吸烟对肺的影响，小秦在老师的帮助下，利用如图装置进行实验（注：一氧化碳与血红蛋白的结合能力比氧更强，导致血液中的氧含量降低）。下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 上推注射器，可使烟雾进入锥形瓶",
      "B. 实验后，鸡血和棉絮颜色保持不变",
      "C. 下抽注射器，模拟人体的呼气过程",
      "D. 吸烟对肺有影响，对人体健康不利"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 13693,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "依据以下①～④动物的自述，小蝌蚪的妈妈最可能是（    ）",
    "province": "河北",
    "options": [
      "A. ①",
      "B. ③",
      "C. ②",
      "D. ④"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13694,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图是学校主题交流活动留言板部分内容。你认同的想法是（    ）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_10d733_b587671e.png\">",
      "B. <img src=\"images/河北_10d733_1b551d04.png\">",
      "C. <img src=\"images/河北_10d733_6a857010.png\">",
      "D. <img src=\"images/河北_10d733_54b662f1.png\">"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13695,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国科学家袁隆平利用杂交技术培育出“超级水稻”，童第周采用克隆技术培育成“克隆鱼”，有关说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 培育“超级水稻”的生殖方式为有性生殖",
      "B. “超级水稻”的性状可以遗传",
      "C. “克隆鱼”的性状与提供细胞核的个体相似",
      "D. 培育“克隆鱼”的生殖方式为有性生殖"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 13696,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图①②是蝗虫发育过程的不同时期。有关叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. ①表示成虫，②表示若虫",
      "B. ①②的形态结构、生活习性完全相同",
      "C. 据图可知，蝗虫的发育过程是不完全变态发育",
      "D. ①对农作物的危害最大"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66875,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "世界因生命而精彩。以下描述中属于生命现象的是（    ）",
    "province": "河北",
    "options": [
      "A. 汽车行驶",
      "B. 火山喷发",
      "C. 鲸鱼呼吸",
      "D. 高山流水"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66876,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "用显微镜观察玻片标本时使物像更清晰的结构是（    ）",
    "province": "河北",
    "options": [
      "A. 转换器",
      "B. 遮光器",
      "C. 粗准焦螺旋",
      "D. 细准焦螺旋"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 66878,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "细胞分化形成不同的组织，以下属于植物组织的是（    ）",
    "province": "河北",
    "options": [
      "A. 输导组织",
      "B. 神经组织",
      "C. 结缔组织",
      "D. 肌肉组织"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 66879,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "煤是重要的能源，远古时期与煤的形成有关的植物类群是（    ）",
    "province": "河北",
    "options": [
      "A. 藻类植物",
      "B. 苔藓植物",
      "C. 蕨类植物",
      "D. 种子植物"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66880,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "美丽的花朵为我们的生活增添了色彩。花的主要结构是（    ）",
    "province": "河北",
    "options": [
      "A. 花瓣",
      "B. 雄蕊和雌蕊",
      "C. 花托",
      "D. 花柱"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 66881,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在叶片的结构中，既是植物蒸腾作用的“门户”，也是气体交换“窗口”的是（    ）",
    "province": "河北",
    "options": [
      "A. 表皮",
      "B. 气孔",
      "C. 叶脉",
      "D. 叶肉"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 66882,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "绿色植物光合作用的产物是（    ）",
    "province": "河北",
    "options": [
      "A. 二氧化碳和水",
      "B. 有机物和水",
      "C. 有机物和氧气",
      "D. 有机物和二氧化碳"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66883,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于青春期的做法中不可取的是（    ）",
    "province": "河北",
    "options": [
      "A. 集中精力，努力学习",
      "B. 积极参加各种文体活动",
      "C. 同学之间相互帮助",
      "D. 沉迷游戏，不与他人交流"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 66884,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "食物中含有人体所需要的各种营养物质，其中作为建造和修复身体的重要原料的是（　　）",
    "province": "河北",
    "options": [
      "A. 脂肪",
      "B. 糖类",
      "C. 蛋白质",
      "D. 维生素"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66885,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "消化腺能分泌消化液消化食物，以下属于人体消化腺的一组是（    ）",
    "province": "河北",
    "options": [
      "A. 唾液腺、肝脏、胰腺",
      "B. 唾液腺、垂体、甲状腺",
      "C. 肝脏、汗腺、甲状腺",
      "D. 胰腺、垂体、性腺"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 66886,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "食物在口腔经过初步消化，食物中的部分淀粉被分解成（    ）",
    "province": "河北",
    "options": [
      "A. 葡萄糖",
      "B. 氨基酸",
      "C. 水",
      "D. 麦芽糖"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 66887,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我们吃进去的食物和吸入的空气都要经过（　　）",
    "province": "河北",
    "options": [
      "A. 鼻",
      "B. 咽",
      "C. 喉",
      "D. 气管"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 66888,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人呼出的气体与吸入的气体比较（　　）",
    "province": "河北",
    "options": [
      "A. 氧气含量减少，二氧化碳含量增加",
      "B. 氧气含量增加，二氧化碳含量减少",
      "C. 氧气含量减少，二氧化碳含量也减少",
      "D. 氧气含量增加，二氧化碳含量也增加"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 66889,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在视觉形成的过程中，形成物像的部位是（    ）",
    "province": "河北",
    "options": [
      "A. 脉络膜",
      "B. 角膜",
      "C. 视网膜",
      "D. 虹膜"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66890,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列选项中，属于通过长期经验积累而形成的复杂反射是（    ）",
    "province": "河北",
    "options": [
      "A. 望梅止渴",
      "B. 缩手反射",
      "C. 眨眼反射",
      "D. 膝跳反射"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 66891,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为了治疗糖尿病，患者可以注射的激素是（    ）",
    "province": "河北",
    "options": [
      "A. 生长激素",
      "B. 甲状腺激素",
      "C. 肾上腺素",
      "D. 胰岛素"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 66892,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "身体呈圆筒形，由许多彼此相似的体节组成：靠刚毛或疣足辅助运动。这类动物是（    ）",
    "province": "河北",
    "options": [
      "A. 腔肠动物",
      "B. 软体动物",
      "C. 环节动物",
      "D. 扁形动物"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66894,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "节肢动物起保护自己和防止水分蒸发作用的体表结构是（    ）",
    "province": "河北",
    "options": [
      "A. 外骨骼",
      "B. 角质层",
      "C. 鳞片",
      "D. 外套膜"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 66895,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "鱼终生生活在水中，属于鱼运动器官的是（    ）",
    "province": "河北",
    "options": [
      "A. 足",
      "B. 鳍",
      "C. 翼",
      "D. 四肢"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 66896,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列动物中属于鸟的是（    ）",
    "province": "河北",
    "options": [
      "A. 蝙蝠",
      "B. 蜻蜓",
      "C. 麻雀",
      "D. 蝴蝶"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66897,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "绝大多数哺乳动物的生殖方式是（    ）",
    "province": "河北",
    "options": [
      "A. 卵生",
      "B. 胎生",
      "C. 出芽生殖",
      "D. 孢子生殖"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 66898,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人在屈肘时，肱二头肌和肱三头肌所处的状态分别是（    ）",
    "province": "河北",
    "options": [
      "A. 收缩、舒张",
      "B. 收缩、收缩",
      "C. 舒张、收缩",
      "D. 舒张、舒张"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 66899,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "由蛋白质外壳和内部的遗传物质组成，没有细胞结构的生物是（    ）",
    "province": "河北",
    "options": [
      "A. 真菌",
      "B. 寄生虫",
      "C. 细菌",
      "D. 病毒"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 66900,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物分类单位中，同____生物的亲缘关系最密切。（    ）",
    "province": "河北",
    "options": [
      "A. 种",
      "B. 科",
      "C. 属",
      "D. 目"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 66901,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列植物生殖方式属于有性生殖的是（    ）",
    "province": "河北",
    "options": [
      "A. 椒草用叶生殖",
      "B. 竹用地下茎生殖",
      "C. 水稻杂交育种",
      "D. 马铃薯用块茎生殖"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66902,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "有一对夫妇，第一胎生了一个男孩，他们想再生一个女孩几率是多大（    ）",
    "province": "河北",
    "options": [
      "A. 25%",
      "B. 50%",
      "C. 75%",
      "D. 100%"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 66903,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于生物进化总体趋势的叙述，错误的是（ ）",
    "province": "河北",
    "options": [
      "A. 由简单到复杂",
      "B. 由低等到高等",
      "C. 由水生到陆生",
      "D. 由体型小到体型大"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 66904,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "传染病具有传染性和流行性，下列疾病中不属于传染病的是（    ）",
    "province": "河北",
    "options": [
      "A. 新冠肺炎",
      "B. 艾滋病",
      "C. 近视眼",
      "D. 肺结核"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66905,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体具有保卫自身的三道防线，其中第二道防线指的是",
    "province": "河北",
    "options": [
      "A. 皮肤和黏膜",
      "B. 免疫器官",
      "C. 体液中的杀菌物质和吞噬细胞",
      "D. 免疫细胞"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 66906,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "安全用药事关人体健康，下列做法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 使用前仔细阅读药品说明书",
      "B. 只要一感冒就服用抗生素",
      "C. 超剂量服用药物",
      "D. 服用超过有效期的药物"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 99616,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物圈中由于不同地域的环境差别很大，形成了多种多样的生态系统。其中有“绿色水库”、“地球之肺”之称的是（    ）",
    "province": "河北",
    "options": [
      "A. 湿地生态系统",
      "B. 森林生态系统",
      "C. 草原生态系统",
      "D. 淡水生态系统"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 99617,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“稻花香里说丰年，听取蛙声一片。”关于诗句中水稻和青蛙的结构层次的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 水稻的结构层次：细胞→组织→器官→植物体（水稻）",
      "B. 青蛙的受精卵不断分裂形成各种组织",
      "C. 水稻的花、果实、种子为营养器官",
      "D. 青蛙体内有保护组织、结缔组织、肌肉组织和神经组织"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 99618,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在“观察种子的结构”实验中，发现玉米种子和菜豆种子大小、形状、颜色各不一样，但玉米种子和菜豆种子的结构具有相同点，它们都具有（    ）",
    "province": "河北",
    "options": [
      "A. 果皮和子叶",
      "B. 种皮和胚",
      "C. 胚和胚乳",
      "D. 种皮和胚乳"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 99619,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "被子植物的一生，要经历种子的萌发，植株的生长、发育、繁殖、衰老和死亡的过程。关于被子植物的一生描述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 适宜的温度、一定的水分和充足的空气都是种子萌发所需要的环境条件",
      "B. 幼根的生长主要与分生区和成熟区有关",
      "C. 植株的生长只需要含氮的、含磷的和含钾的无机盐",
      "D. 受精完成后，子房发育成果实，受精卵发育成种子"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 99620,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于绿色植物光合作用的叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 光是绿色植物进行光合作用不可缺少 <img src=\"images/河北_1226f0_0ea7d618.wmf\"> 条件",
      "B. 光合作用制造的有机物通过筛管运输到植物体的各个部分",
      "C. 绿色植物的所有器官都能进行光合作用",
      "D. 种植农作物时，合理密植可以充分利用光照，提高产量"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 99621,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于绿色植物蒸腾作用的叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 植物的蒸腾作用可以拉动水分与无机盐在体内的运输",
      "B. 气孔是植物蒸腾作用的“门户”，也是气体交换的“窗口”",
      "C. 绿色植物的蒸腾作用能够提高大气湿度，增加降水",
      "D. 植物吸收的水分，通过蒸腾作用大量地散失掉了，这对植物来说是一种浪费"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 99622,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人类生命的延续离不开生殖和发育，下列叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 胎儿与母体进行物质交换的器官是脐带",
      "B. 精子和卵细胞在子宫内形成受精卵",
      "C. 卵巢的功能是产生卵细胞，并且分泌雌性激素",
      "D. 体重突增是青春期的显著特点"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 99623,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关消化和吸收的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 口腔中的唾液淀粉酶将淀粉彻底分解成葡萄糖",
      "B. 小肠是消化和吸收的主要场所",
      "C. 无机盐和维生素只能在小肠中被吸收",
      "D. 胆汁能够将脂肪分解成甘油和脂肪酸"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 99624,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“民以食为天，食以安为先。”下列关于合理营养和食品安全的叙述，科学合理的是（    ）",
    "province": "河北",
    "options": [
      "A. 青少年正处于生长发育的旺盛时期，需要多吃一些含蛋白质丰富的食物",
      "B. 每日早、中、晚餐摄入食物能量的比例是3：3：4",
      "C. 用饮料代替水以增加营养",
      "D. 过期但没有霉变的袋装食品仍可食用"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 99625,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "兴趣小组的同学利用模拟膈肌运动的装置探究呼吸运动，下图中能正确展示呼气时肺和膈肌状态的是（    ）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_1226f0_20f79bad.png\">",
      "B. <img src=\"images/河北_1226f0_91140087.png\">",
      "C. <img src=\"images/河北_1226f0_53019802.png\">",
      "D. <img src=\"images/河北_1226f0_07451a96.png\">"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 99627,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "血液是由血浆和血细胞组成的，关于血液的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 血浆的主要作用是运载血细胞，运输维持人体生命活动所需的物质和体内产生的废物",
      "B. 血红蛋白在含氧量低的地方容易与氧结合，在含氧量高的地方容易与氧分离",
      "C. 白细胞的数量低于正常值，很可能是身体有了炎症",
      "D. 血小板是最小的血细胞，有细胞核，形状不规则"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 99628,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "心脏是输送血液的泵，下列关于心脏的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 心脏有四个腔，腔壁最厚的是右心室",
      "B. 肺动脉与左心房内流动的是动脉血",
      "C. 心脏内血液流动的方向：心房→心室→动脉",
      "D. 体循环的起点是右心室，肺循环的终点是左心房"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 99629,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体生命活动中会产生许多废物，这些废物必须及时排出体外。下列不属于排泄途径的是（    ）",
    "province": "河北",
    "options": [
      "A. 皮肤的汗腺分泌汗液",
      "B. 呼吸系统排出二氧化碳",
      "C. 泌尿系统排出尿液",
      "D. 食物残渣以粪便的形式排出"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 99630,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为健康人尿液形成过程示意图，下列说法正确的是（    ）",
    "province": "河北",
    "options": [
      "A. ①中的液体含有尿素和血细胞",
      "B. ②中的液体含有大分子蛋白质和无机盐",
      "C. ③中的液体含有无机盐和葡萄糖",
      "D. ④中的液体含有尿素和葡萄糖"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 99631,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "眼和耳是人体从外界接受信息的主要器官，关于眼和耳的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 进入黑暗环境时，瞳孔会由大变小",
      "B. 听觉是在耳蜗内形成的",
      "C. 近视眼可以通过佩戴凸透镜加以矫正",
      "D. 遇到巨大声响时迅速张开口或闭嘴、堵耳"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 99632,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体的生命活动主要受到神经系统的调节，关于神经系统的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 神经系统结构和功能的基本单位是神经元",
      "B. 膝跳反射的神经中枢位于大脑皮层",
      "C. 脑干是调节人体生理活动的最高级中枢",
      "D. 神经系统是由大脑、脊髓和它们发出的神经组成的"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 99633,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "细菌、真菌是生物圈中广泛分布的生物，有关细菌、真菌的叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 细菌和真菌都没有成形的细胞核",
      "B. 大多数细菌和真菌是生态系统中的分解者",
      "C. 细菌菌落比真菌菌落大",
      "D. 细菌都是单细胞的，真菌都是多细胞的"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 99634,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "随着科学技术的进步，在20世纪初，科学家用电子显微镜观察到了病毒，下列关于病毒的叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 病毒比细菌小得多",
      "B. 病毒没有细胞结构",
      "C. 病毒必须寄生在活细胞内",
      "D. 病毒一旦侵入人体，就会使人患病"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 99635,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "今年5月22日是第24个国际生物多样性日，主题为“生物多样性你我共参与”。下列有关生物多样性的叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 生物多样性就是指生物种类的多样性",
      "B. 建立自然保护区是保护生物多样性最为有效的措施",
      "C. 长江十年禁渔是为了保护长江的生态系统",
      "D. 我国是裸子植物最丰富的国家，被称为“裸子植物的故乡”"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 99636,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于家蚕、蝗虫和青蛙生殖发育的叙述，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 青蛙是体内受精，水中发育",
      "B. 蝗虫的发育经过蛹期",
      "C. 它们的生殖方式都是有性生殖",
      "D. 家蚕和青蛙的发育过程属于完全变态发育"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 99639,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列各组性状，属于相对性状的是（    ）",
    "province": "河北",
    "options": [
      "A. 猫的短毛与狗的长毛",
      "B. 棉花的细绒和长绒",
      "C. 小刚的A型血和小明的A型血",
      "D. 番茄的红果和黄果"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 99640,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "白化病是由隐性基因（a）控制的遗传病，一对肤色表现正常的夫妇生了一个白化病的孩子。如果这对夫妇再生一个孩子肤色表现正常，孩子的基因组成是（    ）",
    "province": "河北",
    "options": [
      "A. Aa或aa",
      "B. AA或Aa",
      "C. AA",
      "D. aa"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 99641,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "依据达尔文的自然选择学说判断，以下叙述正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 抗生素的使用导致细菌产生抗药性的变异",
      "B. 长颈鹿经常努力伸长颈去吃高处的树叶，因此颈变得很长",
      "C. 生物产生的变异一定都有利于适应环境",
      "D. 雷鸟保护色的形成是自然选择的结果"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 99642,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "每年春秋两季是传染病高发季节，下列预防传染病的具体做法与预防措施对应错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 患病的学生居家隔离——控制传染源",
      "B. 加强体育锻炼——保护易感人群",
      "C. 每天对教室消毒处理——切断传播途径",
      "D. 勤洗手、勤换衣，搞好个人卫生——保护易感人群"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 99643,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "健康是人们永远追求的美好愿望。下列有关健康、安全用药与急救的叙述错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 合理安排上网、看电视时间",
      "B. 使用药物之前应仔细阅读药品说明书，确保用药安全",
      "C. A型血的人失血严重时，可大量输入O型血",
      "D. 不吸烟、不喝酒、拒绝毒品"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42280,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "自然界中的各种生物就像一座座神秘的宝库，吸引着人们去探究和发现。下列属于生物的是（　　）",
    "province": "河北",
    "options": [
      "A. 机器人",
      "B. 钟乳石",
      "C. 珊瑚",
      "D. 生石花"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42281,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“工欲善其事，必先利其器。”人们对细胞的认识，离不开观察工具——显微镜。淘淘在使用显微镜观察洋葱鳞片叶内表皮细胞临时装片时，想要使视野中的物像更加清晰应调节的结构是（　　）",
    "province": "河北",
    "options": [
      "A. 粗准焦螺旋",
      "B. 细准焦螺旋",
      "C. 反光镜",
      "D. 遮光器"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 42282,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生活在淡水中的草履虫，靠_____的摆动在水中旋转前进。（　　）",
    "province": "河北",
    "options": [
      "A. 表膜",
      "B. 口沟",
      "C. 纤毛",
      "D. 胞肛"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42283,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "皮肤是人体最大的器官，构成皮肤的组织不包括（　　）",
    "province": "河北",
    "options": [
      "A. 上皮组织",
      "B. 结缔组织",
      "C. 输导组织",
      "D. 神经组织"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42284,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“西湖春色归，春水绿于染。”春天来了，清澈的湖水泛起绿色，这是_____大量繁殖的结果。（　　）",
    "province": "河北",
    "options": [
      "A. 藻类植物",
      "B. 苔藓植物",
      "C. 蕨类植物",
      "D. 种子植物"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 42285,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "农谚“有收无收在于水，收多收少在于肥”，肥料的作用主要是给农作物的生长提供（　　）",
    "province": "河北",
    "options": [
      "A. 有机物",
      "B. 水",
      "C. 氧气",
      "D. 无机盐"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42286,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "用显微镜观察人血 <img src=\"images/河北_1a6eb7_ec8c5af8.wmf\"> 永久涂片时，视野中数量最多的细胞是（　　）",
    "province": "河北",
    "options": [
      "A. 白细胞",
      "B. 红细胞",
      "C. 血小板",
      "D. 血浆"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 42287,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "中国是裸子植物的故乡，以下属于裸子植物的是（　　）",
    "province": "河北",
    "options": [
      "A. ①②③",
      "B. ④⑤",
      "C. ③⑤",
      "D. ②③④"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42288,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "食品的制作细菌或真菌，酸奶和泡菜的制作利用的是（　　）",
    "province": "河北",
    "options": [
      "A. 酵母菌",
      "B. 乳酸菌",
      "C. 醋酸菌",
      "D. 枯草杆菌"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 42290,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "气体交换对于动物的生存具有重要的意义，每种动物都有专门进行气体交换的结构。以下动物及其气体交换的结构匹配正确的一组是（　　）",
    "province": "河北",
    "options": [
      "A. 青蛙——鳃",
      "B. 鸟——气囊",
      "C. 鳄鱼——皮肤",
      "D. 蚯蚓——湿润的体壁"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42291,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "木瓜果实中有许多种子，这是因为花的结构中有多个（　　）",
    "province": "河北",
    "options": [
      "A. 子房",
      "B. 子房壁",
      "C. 花柱",
      "D. 胚珠"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42292,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "病毒最早是由俄国科学家伊万诺夫斯基发现的。下列疾病由病毒引起的是（　　）",
    "province": "河北",
    "options": [
      "A. 肺结核",
      "B. 夜盲症",
      "C. 艾滋病",
      "D. 白化病"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42293,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2025年将在哈尔滨举办第九届亚洲冬季运动会。下列成语中的动物，与本届亚冬会吉祥物——东北虎“滨滨”和“妮妮”一样，都能维持体温恒定的是（　　）",
    "province": "河北",
    "options": [
      "A. 鹬蚌相争",
      "B. 鹤立鸡群",
      "C. 蛛丝马迹",
      "D. 螳螂捕蝉"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 42294,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“春种一粒粟，秋收万颗子。”种子结构中，被称为新植株幼体的是（　　）",
    "province": "河北",
    "options": [
      "A. 胚根",
      "B. 胚芽",
      "C. 胚轴",
      "D. 胚"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42295,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在进行乒乓球运动时，眼球中能折射光线，让远近不同的乒乓球在视网膜上清晰成像的主要结构是（　　）",
    "province": "河北",
    "options": [
      "A. 角膜",
      "B. 瞳孔",
      "C. 晶状体",
      "D. 玻璃体"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42296,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "黑长尾猴发现蛇、豹、鹰时，会发出不同的叫声来警示同伴，这是依靠_____来通讯的（　　）",
    "province": "河北",
    "options": [
      "A. 声音",
      "B. 动作",
      "C. 气味",
      "D. 文字"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 42297,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "有些动物名称里虽有“鱼”字，但不是鱼。下列真正属于鱼类的是（　　）",
    "province": "河北",
    "options": [
      "A. 章鱼",
      "B. 娃娃鱼",
      "C. 青鱼",
      "D. 鲸鱼"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42298,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "对于植物繁殖后代来说，一朵花中最重要的结构是",
    "province": "河北",
    "options": [
      "A. 雄蕊和雌蕊",
      "B. 花瓣",
      "C. 花托",
      "D. 萼片"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 42299,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人体因创伤出血时，暗红色血液缓慢而连续地从伤口流出，损伤的血管是（　　）",
    "province": "河北",
    "options": [
      "A. 静脉",
      "B. 动脉",
      "C. 毛细血管",
      "D. 主动脉"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 42300,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关生物与环境关系的实例中，与其它三项所描述的关系不同的是（　　）",
    "province": "河北",
    "options": [
      "A. 地衣能够加速岩石的风化",
      "B. 仙人掌的叶特化为刺",
      "C. 企鹅皮下脂肪很厚",
      "D. 雷鸟的保护色"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 42301,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "水稻是我国的主要农作物之一，储存水稻种子的条件最好是（　　）",
    "province": "河北",
    "options": [
      "A. 高温、干燥",
      "B. 低温、潮湿",
      "C. 低温、干燥",
      "D. 高温、潮湿"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42302,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“留连戏蝶时时舞，自在娇莺恰恰啼。”在唐代诗人杜甫 <img src=\"images/河北_1a6eb7_ec8c5af8.wmf\"> 笔下，动物使大自然充满生机。下列不是动物在生物圈中的作用的是（　　）",
    "province": "河北",
    "options": [
      "A. 在维持生态平衡中起重要作用",
      "B. 促进生态系统物质循环",
      "C. 帮助植物传粉、传播种子",
      "D. 作为分解者参与物质循环"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42303,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "蛋白质在小肠内最终被分解成可以被细胞直接吸收的物质，这种物质是（　　）",
    "province": "河北",
    "options": [
      "A. 脂肪酸",
      "B. 氨基酸",
      "C. 葡萄糖",
      "D. 麦芽糖"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 42304,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "青霉素可以杀死或抑制某些致病细菌。青霉素是由_____产生的。（　　）",
    "province": "河北",
    "options": [
      "A. 青霉",
      "B. 大肠杆菌",
      "C. 病毒",
      "D. 酵母菌"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 42305,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "鸟类适于飞行的特点有许多，下列特点与飞行无关的是（　　）",
    "province": "河北",
    "options": [
      "A. 身体呈流线型",
      "B. 前肢变成翼",
      "C. 胸肌发达",
      "D. 卵外有坚硬的卵壳保护"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42306,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "植物通过_____可以拉动水和无机盐在体内的运输，保证各组织器官对水和无机盐的需求。（　　）",
    "province": "河北",
    "options": [
      "A. 光合作用",
      "B. 呼吸作用",
      "C. 蒸腾作用",
      "D. 吸收作用"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42307,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "受精卵是新生命发育的起点，其形成部位是（　　）",
    "province": "河北",
    "options": [
      "A. 子宫",
      "B. 输卵管",
      "C. 卵巢",
      "D. 阴道"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 42308,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“草尽狐免愁”的谚语中蕴含着食物链，其中书写正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 阳光→草→兔→狐",
      "B. 草→免→狐→细菌",
      "C. 狐→草→兔",
      "D. 草→兔→狐"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42309,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "栽花或种庄稼，都要经常松土，其目的是（　　）",
    "province": "河北",
    "options": [
      "A. 促进根的呼吸作用",
      "B. 抑制叶的蒸腾作用",
      "C. 促进叶的光合作用",
      "D. 抑制根对水的吸收"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 42310,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列现象中，属于人类特有的复杂反射的是（　　）",
    "province": "河北",
    "options": [
      "A. 一朝被蛇咬，十年怕井绳",
      "B. 谈虎色变",
      "C. 寒冷使人打哆嗦",
      "D. 学生听到铃声进教室"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 42311,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "明明在生物课堂上学习了膳食指南的相关知识，回家后为妈妈设计了一份午餐食谱：馒头、红烧肉、清蒸鱼。要使这份食谱更合理，还需添加（　　）",
    "province": "河北",
    "options": [
      "A. 小米粥",
      "B. 鸡汤",
      "C. 素炒白菜",
      "D. 锅包肉"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42312,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列科学家被誉为“微生物学之父”的是 （　　）",
    "province": "河北",
    "options": [
      "A. 巴斯德",
      "B. 达尔文",
      "C. 林奈",
      "D. 袁隆平"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 42313,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "取一段带叶的茎，把它放入滴有几滴红墨水的水里，并在阳光下照射几小时，被染红的部分是（　　）",
    "province": "河北",
    "options": [
      "A. 木质部中的筛管",
      "B. 木质部中的导管",
      "C. 韧皮部中的筛管",
      "D. 韧皮部中的导管"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 42314,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物的结构与功能相适应。肺泡适于与血液进行气体交换的结构不包括（　　）",
    "province": "河北",
    "options": [
      "A. 肺泡虽小，数目很多",
      "B. 肺泡外包绕着毛细血管",
      "C. 肺泡壁由一层上皮细胞构成",
      "D. 肺泡位于支气管末端"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42315,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "侏儒症患者生长迟缓，身材矮小，病因是患者幼年时_____分泌不足。（　　）",
    "province": "河北",
    "options": [
      "A. 生长激素",
      "B. 甲状腺激素",
      "C. 胰岛素",
      "D. 肾上腺素"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 42316,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "绵羊的皮毛白色（A）对黑色（a）为显性性状。如果一对白羊交配后生下一只黑色小羊，那么这对白羊的基因组成可能是（  ）",
    "province": "河北",
    "options": [
      "A. Aa×Aa",
      "B. Aa×aa",
      "C. AA×Aa",
      "D. AA×AA"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 42317,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "非洲猪瘟是由ASFV病毒引起的传染病。发现疫情时，按国际惯例会封锁疫区并对感染的猪进行捕杀、焚毁、深埋等无害化处理。这种预防传染病的措施属于（　　）",
    "province": "河北",
    "options": [
      "A. 切断传播途径",
      "B. 控制传染源",
      "C. 保护易感人群",
      "D. 消灭病原体"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 42318,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "呼吸道是气体进出肺的通道，下列关于呼吸道的描述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 痰的形成部位是气管、支气管",
      "B. 呼吸道有骨或软骨做支架能保证气体顺畅通过",
      "C. 呼吸道是气体交换的主要场所",
      "D. 呼吸道能使到达肺部的气体温暖、湿润、清洁"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42319,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "耳包括外耳、中耳和内耳三部分，其中内耳的结构包括（　　）",
    "province": "河北",
    "options": [
      "A. 耳郭、外耳道、鼓膜",
      "B. 鼓膜、听小骨、鼓室",
      "C. 耳蜗、听小骨、咽鼓管",
      "D. 半规管、前庭、耳蜗"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42320,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "植物人的神经系统由于受到过严重的损伤，他们虽有心跳、有呼吸，但不能自主活动、没有意识或意识朦胧。据此判断，植物人的神经系统中没有受到损伤的部位是",
    "province": "河北",
    "options": [
      "A. 大脑",
      "B. 脑干",
      "C. 小脑",
      "D. 脊髓"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 42321,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于生物进化的总体趋势，叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 由水生到陆生",
      "B. 由简单到复杂",
      "C. 由低等到高等",
      "D. 由矮小到高大"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42322,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "开窗通风是预防传染病的重要措施。丽丽在屈肘开窗时，肱二头肌_____，肱三头肌_____。（　　）",
    "province": "河北",
    "options": [
      "A. 收缩   舒张",
      "B. 收缩   收缩",
      "C. 舒张   舒张",
      "D. 舒张   收缩"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 42323,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生殖细胞是基因在亲子代间传递的“桥梁”。男性生殖细胞的染色体组成为（　　）",
    "province": "河北",
    "options": [
      "A. 22对+X",
      "B. 22条+X或22条+Y",
      "C. 22条+XY",
      "D. 44条+XY"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 42324,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人与自然和谐共生必须保护生物的多样性。保护生物多样性的根本措施是（　　）",
    "province": "河北",
    "options": [
      "A. 加强法制管理",
      "B. 大力引进外来物种",
      "C. 保护生物的栖息环境，保护生态系统的多样性",
      "D. 迁地保护"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42325,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "接种疫苗可以提高对特定传染病的抵抗力。从免疫学角度分析，注射的疫苗相当于_____，这种免疫类型属于_____。（　　）",
    "province": "河北",
    "options": [
      "A. 抗体  非特异性免疫",
      "B. 抗原  非特异性免疫",
      "C. 抗体  特异性免疫",
      "D. 抗原  特异性免疫"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42326,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于实验的叙述中，不正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 制作人的口腔上皮细胞临时装片时，载玻片中央滴的是清水",
      "B. 探究唾液对淀粉的分解作用时，用碘液检验淀粉是否被消化",
      "C. 使用显微镜观察小鱼尾鳍内血液流动情况时，红细胞呈单行通过的血管是毛细血管",
      "D. 探究呼吸作用的产物是二氧化碳时，观察澄清石灰水是否变浑浊"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 42327,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“空中死神”——酸雨对环境有极大危害，下列现象不是由酸雨造成的是（　　）",
    "province": "河北",
    "options": [
      "A. 森林枯萎",
      "B. 鱼虾死亡",
      "C. 水源酸化",
      "D. 赤潮"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 42328,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "第76届世界卫生大会于2023年5月21日在瑞士日内瓦开幕，本届大会主题是“拯救生命，推动人人健康”。下列生活方式不健康的是（　　）",
    "province": "河北",
    "options": [
      "A. 坚持体育锻炼",
      "B. 按时作息",
      "C. 熬夜上网、长时间玩手机",
      "D. 不吸烟、不喝酒"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 42329,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物技术在现代社会中具有重要作用。下列有关叙述不正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 利用克隆技术培育出小羊多莉",
      "B. 用腌制法保存鸭蛋的原理是杀死细菌和真菌",
      "C. 利用转基因技术培养大肠杆菌，使之生产胰岛素",
      "D. 利用仿生技术研发设备，如模仿蝙蝠的回声定位系统研制雷达"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 77147,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“仓充鼠雀喜，草尽狐兔愁”诗句中的鼠与雀、狐与兔之间的关系分别是（　　）",
    "province": "河北",
    "options": [
      "A. 仅捕食",
      "B. 仅竞争",
      "C. 合作和捕食",
      "D. 竞争和捕食"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77148,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学为制作生态瓶准备了玻璃瓶、池塘水、螺蛳、小鱼、小虾，他还必须补充的材料是（　　）",
    "province": "河北",
    "options": [
      "A. 金鱼藻",
      "B. 泥鳅",
      "C. 河沙",
      "D. 增氧泵"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 77149,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "天竺葵进行光合作用的必要条件和场所分别是（　　）",
    "province": "河北",
    "options": [
      "A. 光、叶绿体",
      "B. 无光、叶绿体",
      "C. 光、线粒体",
      "D. 无光、线粒体"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 77150,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "若农田中一次施肥过多引起部分作物出现萎蔫现象，急救的措施是",
    "province": "河北",
    "options": [
      "A. 移栽作物",
      "B. 大量浇水",
      "C. 减少光照",
      "D. 疏松土壤"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 77151,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我们吃的米饭和面包中的营养物质主要是（　　）",
    "province": "河北",
    "options": [
      "A. 淀粉",
      "B. 脂肪",
      "C. 蛋白质",
      "D. 维生素"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 77152,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "一个人在每天摄入800克食物和1200毫升水的情况下，体内各种消化液的分泌量如下表所示。下列有关叙述中正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 唾液中的相关酶能把食物中的淀粉全部分解为麦芽糖",
      "B. 胃液中的相关酶能把食物中的蛋白质彻底加以分解",
      "C. 肠液和胰液中都含有消化糖类、蛋白质和脂肪的酶",
      "D. 胆汁中含有能把脂肪分解为甘油和脂肪酸的相关酶"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 77153,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列哪个选项能正确表示食物链（　　）",
    "province": "河北",
    "options": [
      "A. 阳光→草→鼠→鹰",
      "B. 草→鼠→蛇→鹰",
      "C. 虫→青蛙→蛇→鹰",
      "D. 草→蝗虫→青蛙→细菌"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 77154,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列农业生产措施与所依据的生物学原理，对应错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 幼苗带土移栽是为了保护幼根和根毛，与降低蒸腾作用没有直接关系",
      "B. 储藏甘薯、白菜的窖必须留有通风孔，主要是为了增加氧气促进呼吸作用",
      "C. 合理密植可充分利用光照，提高作物产量",
      "D. 春季早播前松土和覆盖地膜，是为了给种子的萌发提供充足的空气和适宜的温度"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 77155,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "制作人口腔上皮细胞的临时装片时，用于漱口的液体、载玻片上滴加的液体、染色用的液体分别为",
    "province": "河北",
    "options": [
      "A. 碘液、生理盐水、自来水",
      "B. 碘液、生理盐水、凉开水",
      "C. 碘液、自来水、生理盐水",
      "D. 凉开水、生理盐水、碘液"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77156,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生活在叶上的蚜虫一般都分布在叶脉处，其口器刺入叶脉中的结构是（　　）",
    "province": "河北",
    "options": [
      "A. 机械组织",
      "B. 分生组织",
      "C. 保护组织",
      "D. 输导组织"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77157,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "苏州太湖特产中的“三白”白鱼、白虾、银鱼分别属于（　　）",
    "province": "河北",
    "options": [
      "A. 鱼类、软体动物、环节动物",
      "B. 鱼类、节肢动物、软体动物",
      "C. 鱼类、环节动物、软体动物",
      "D. 鱼类、节肢动物、鱼类"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77159,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列国家重点保护植物中，不能用种质库保存种子的方式进行保护的是（　　）",
    "province": "河北",
    "options": [
      "A. 银杉",
      "B. 玉龙蕨",
      "C. 水松",
      "D. 藤枣"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 77160,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "深圳湾公园可以观察到白鹭，白鹭独特的喙非常适合捕食浅水中的鱼类和甲壳类。下列图片中，白鹭是（    ）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_411c81_c46decd6.png\">",
      "B. <img src=\"images/河北_411c81_e9a2e87d.png\">",
      "C. <img src=\"images/河北_411c81_81806cb5.png\">",
      "D. <img src=\"images/河北_411c81_65d556a9.png\">"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77161,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“切脉”是我国传统医学诊断疾病的常用方法之一，中医“切脉”的部位一般在（　　）",
    "province": "河北",
    "options": [
      "A. 颈动脉",
      "B. 腕动脉",
      "C. 桡动脉",
      "D. 肱动脉"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 77162,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "脑卒中又称中风，是一种急性脑血管疾病，20%-30%的脑卒中是由脑出血引起的。某病人因脑出血导致呼吸和心跳骤停，凝血块可能压迫的部位是（　　）",
    "province": "河北",
    "options": [
      "A. 大脑",
      "B. 小脑",
      "C. 神经元",
      "D. 脑干"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77163,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某生物兴趣小组在探究“小鼠走迷宫获取食物是否为学习行为”时，获得了下表中的实验数据。下列分析错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 小鼠走迷宫获取食物的行为属于学习行为，与遗传因素有一定的关系",
      "B. 为了避免偶然性，应该做重复实验",
      "C. 小鼠走迷宫获取食物，这个反射一旦建立就不会消失",
      "D. 小鼠获取食物用时越来越少，说明其走错的次数越来越少"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 77164,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是人体的三种血管结构示意图，下列叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 血管①管壁厚，弹性大，是动脉",
      "B. 血管②管腔大，管壁薄，是静脉",
      "C. 血管③管壁最薄，管腔最细，是毛细血管",
      "D. 在意外受伤的情况下，血管②破裂最危险"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77165,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国政府提出2060年前实现碳中和，即二氧化碳的排放速率和吸收速率达到平衡。下列叙述正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 碳中和即意味着禁止工厂排放二氧化碳",
      "B. 实现碳中和离不开绿色植物的光合作用",
      "C. 绿色植物只消耗二氧化碳，不产生二氧化碳",
      "D. 碳排放速率和鱼类、鸟类等动物无关"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 77166,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "猕猴桃果实中有很多籽，其结构基础是在猕猴桃的一朵雌花中有许多（　　）",
    "province": "河北",
    "options": [
      "A. 花粉",
      "B. 子房",
      "C. 胚珠",
      "D. 雌蕊"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 77167,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在某个相对封闭的草原生态系统中，狼的数量大量减少，下列最符合较长时间内野兔数量变化的曲线是（  ）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_411c81_cd4b9682.png\">",
      "B. <img src=\"images/河北_411c81_11eef2ab.png\">",
      "C. <img src=\"images/河北_411c81_fb7776fa.png\">",
      "D. <img src=\"images/河北_411c81_15580b26.png\">"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 77168,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列图示中，表示植物嫁接的是（　　）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_411c81_81801613.png\">",
      "B. <img src=\"images/河北_411c81_27492fd3.png\">",
      "C. <img src=\"images/河北_411c81_3a053026.png\">",
      "D. <img src=\"images/河北_411c81_d51559dc.png\">"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77169,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“辛勤三十日，母瘦雏渐肥”，该诗句形象生动地描述了燕子生殖和发育过程中的（　　）",
    "province": "河北",
    "options": [
      "A. 求偶",
      "B. 筑巢",
      "C. 哺育",
      "D. 产卵"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 77170,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于胎儿获得营养物质和氧的途径，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 母体→脐带→胎盘→胎儿",
      "B. 脐带→母体→胎盘→胎儿",
      "C. 胎盘→母体→脐带→胎儿",
      "D. 母体→胎盘→脐带→胎儿"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77171,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为洋葱根尖细胞分裂某阶段示意图，其中___的①表示（　　）",
    "province": "河北",
    "options": [
      "A. 细胞核",
      "B. 基因",
      "C. DNA",
      "D. 染色体"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77172,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列能够说明生物进化的证据中，属于直接证据的是（    ）",
    "province": "河北",
    "options": [
      "A. 古代生物的化石",
      "B. 形态解剖学上的证据",
      "C. 胚胎学上的证据",
      "D. 分子生物学上的证据"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 77173,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "病毒感染后治愈者的血清，输入同一病毒感染的患者体内，有一定的治疗效果，血清中发挥作用的物质是（　　）",
    "province": "河北",
    "options": [
      "A. 疫苗",
      "B. 外毒素",
      "C. 抗体",
      "D. 抗原"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 77174,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "器官移植成功后还要长期使用免疫抑制药物，说法不正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 移植的器官属于抗原",
      "B. 免疫功能越强越好",
      "C. 免疫不总是对人有益",
      "D. 免疫本质是识别自己排除异己"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 77175,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "外出聚餐提倡使用公筷，做到“一菜一筷”。使用公筷属于预防传染病措施中的",
    "province": "河北",
    "options": [
      "A. 消灭病原体",
      "B. 控制传染源",
      "C. 切断传播途径",
      "D. 保护易感人群"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 77176,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人工呼吸是一种急救措施，在于帮助呼吸停止的患者进行被动呼吸时，正确的操作顺序是（　　）",
    "province": "河北",
    "options": [
      "A. ①②③",
      "B. ②①③",
      "C. ②③①",
      "D. ③②①"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77177,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列各项中，属于“清洁能源”的是（　　）",
    "province": "河北",
    "options": [
      "A. 风能",
      "B. 汽油",
      "C. 煤炭",
      "D. 石油"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 77178,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“金蝉脱壳”中的“壳”指的是蝉的（      ）",
    "province": "河北",
    "options": [
      "A. 内骨骼",
      "B. 外骨骼",
      "C. 表皮",
      "D. 皮肤"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 77179,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列血液的成分和结构中，在人体出现急性炎症后，数量明显增多的是（　　）",
    "province": "河北",
    "options": [
      "A. 红细胞",
      "B. 白细胞",
      "C. 血小板",
      "D. 血红蛋白"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 77180,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下面几种植物中，宜选作植物蒸腾作用实验材料的是（    ）",
    "province": "河北",
    "options": [
      "A. 雪松",
      "B. 仙人掌    <img src=\"images/河北_411c81_a444e049.png\">",
      "C. 天竺葵",
      "D. 睡莲"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 77181,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关色盲 <img src=\"images/河北_411c81_15ec85ab.wmf\"> 叙述，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 色盲是一种遗传病",
      "B. 色盲基因位于X染色体上",
      "C. 色盲基因是隐性基因",
      "D. 儿子的色盲基因来自其父亲"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77182,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图是反射弧结构模式图，其中标号③所指的结构是（　　）",
    "province": "河北",
    "options": [
      "A. 感受器",
      "B. 传入神经",
      "C. 神经中枢",
      "D. 效应器"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 77184,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在绿色开花植物中，属于营养器官的是（　　）",
    "province": "河北",
    "options": [
      "A. 叶",
      "B. 果实",
      "C. 花",
      "D. 种子"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 77185,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列人体激素中，与血糖调节有直接关系的是（　　）",
    "province": "河北",
    "options": [
      "A. 甲状腺激素",
      "B. 胰岛素",
      "C. 生长激素",
      "D. 雄性激素"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 77186,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "狼与兔属于哺乳纲，狼与虎属于食肉目，狼与狐属于犬科，狼与狗属于犬属，则与狼亲缘关系最近的是（　　）",
    "province": "河北",
    "options": [
      "A. 兔",
      "B. 虎",
      "C. 狐",
      "D. 狗"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 77187,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "如图为某同学探究“馒头在口腔中的变化”的实验设计。下列对实验过程及现象的分析，正确的是（    ）",
    "province": "河北",
    "options": [
      "A. 本实验的对照组是①号试管",
      "B. ①号和②号试管对照，可以探究唾液对馒头的消化作用",
      "C. 放在37℃温水中是模拟人体口腔的温度",
      "D. 滴加碘液后，③号试管变蓝，①号和②号试管不变蓝"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 77188,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "关于用显微镜观察口腔上皮细胞临时装片的叙述，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. ①③",
      "B. ②③",
      "C. ②④",
      "D. ③④"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13198,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "科学探究是研究生物学的重要方法。如果某生物小组想探究“光照对鼠妇生活的影响”，应选择下列哪组条件作为对照（　　）",
    "province": "河北",
    "options": [
      "A. 干燥与阴暗",
      "B. 低温与潮湿",
      "C. 干燥与潮湿",
      "D. 明亮与阴暗"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 13199,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在观察物像时，将显微镜的低倍镜换成高倍镜后，这个视野的变化情况是（  ）",
    "province": "河北",
    "options": [
      "A. 细胞数目增多，视野变暗",
      "B. 细胞数目减少、视野变暗",
      "C. 细胞数目增多，视野变亮",
      "D. 细胞数目减少，视野变亮"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13200,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "选对材料和器材是实验成功的关键。以下四组选择中，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 用放大镜观察叶片表皮上的气孔",
      "B. 用显微镜观察梨花的结构",
      "C. 用碘液检验淀粉的存在",
      "D. 用口腔上皮细胞观察叶绿体"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13201,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "神舟十三号空间站的航天员在人体外培养心肌细胞。这种情况下，水和其他营养物质进入心肌细胞要经过的细胞边界是（　　）",
    "province": "河北",
    "options": [
      "A. 细胞壁",
      "B. 细胞膜",
      "C. 细胞质",
      "D. 细胞核"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13202,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "图示植物体两种细胞的形成过程，图中的数字序号①、②、③均表示细胞不同的生理活动。下列与之有关的叙述中，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. ①表示细胞生长，②表示细胞分化",
      "B. ②过程可以产生新细胞",
      "C. ③过程的结果是形成了不同组织",
      "D. ③过程形成的不同细胞中细胞核遗传物质相同"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13203,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列示意图所示的四种不同生物中，没有细胞壁的是（　　）",
    "province": "河北",
    "options": [
      "A. <img src=\"images/河北_98a2fe_e02c92f2.png\">",
      "B. <img src=\"images/河北_98a2fe_63ba1280.png\">",
      "C. <img src=\"images/河北_98a2fe_e541046e.png\">",
      "D. <img src=\"images/河北_98a2fe_f35b90a3.png\">"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13204,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "生物体具有一定的结构层次，下列有关说法中，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 多细胞生物体内的细胞形态结构都是相同的",
      "B. 血液是人体内一种可流动的上皮组织",
      "C. 从结构层次上分析，苹果果肉属于组织",
      "D. 月季和喜鹊的结构层次完全相同"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13205,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在学习生物分类时，有同学将柳树、田鼠、喜鹊、月季归为一类，将鲤鱼、水草、荷花、河虾归为了另一类。他的归类依据是（　　）",
    "province": "河北",
    "options": [
      "A. 生物生活环境的不同",
      "B. 生物形态结构的不同",
      "C. 生物现存数量的不同",
      "D. 生物应用价值的不同"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13206,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "青少年正处于身体快速生长的时期，适当多喝牛奶可以较好满足生长发育的需要。喝牛奶主要是为了补充（　　）",
    "province": "河北",
    "options": [
      "A. 纤维素",
      "B. 维生素",
      "C. 无机盐",
      "D. 蛋白质"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 13207,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "大家都知道吸烟、酗酒有害健康，下列相关说法中，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 吸烟容易引起呼吸道疾病",
      "B. 吸烟产生的烟雾对别人没有影响",
      "C. 吸烟会导致记忆力降低、注意力分散",
      "D. 酗酒对肝的伤害很大"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13208,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列关于人体泌尿系统 <img src=\"images/河北_98a2fe_8fa2d37f.wmf\"> 叙述，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 尿液的形成和排出都是间歇的",
      "B. 膀胱是形成和储存尿液的器官",
      "C. 左右两侧的输尿管直通体外",
      "D. 肾脏的肾小球具有滤过功能"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 13209,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "今年 2 月，中国成功举办了一届举世瞩目的冬季奥运会。在冬奥会的速滑项目中，运动员们听到发令枪声之后会迅速起滑，下列相关叙述错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 运动员们在耳蜗产生听觉",
      "B. 滑冰过程中小脑参与维持身体平衡",
      "C. 大脑皮层对发令信号进行分析",
      "D. 滑冰过程中激素发挥调节作用"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13210,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "小林沉迷于玩手机游戏，致使其眼球的某一结构曲度过大，且不易恢复原大小而造成近视。这一结构是指下图中的",
    "province": "河北",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13211,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "图示某人不小心被针刺到手发生缩手反射的反射弧。下列有关叙述中，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. ①是感受器，④是传出神经",
      "B. ③是神经中枢，但不能产生感觉",
      "C. 该反射活动属于条件反射",
      "D. 若⑤受损，可能无法完成该反射"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13212,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "激素分泌异常会引起人体出现相应的病症，如果幼年时期甲状腺激素分泌过少，将会引起（　　）",
    "province": "河北",
    "options": [
      "A. 侏儒症",
      "B. 呆小症",
      "C. 巨人症",
      "D. 肢端肥大症"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13213,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "大面积烧伤病人因为极易发生感染而死亡，其主要原因是（　　）",
    "province": "河北",
    "options": [
      "A. 患者免疫的第一道防线受到破坏",
      "B. 患者免疫的第二道防线受到破坏",
      "C. 患者免疫的第三道防线受到破坏",
      "D. 患者免疫的三道防线均受到破坏"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13214,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "艾滋病是一种死亡率极高的传染病，科学认识艾滋病对个人健康和社会稳定都有重要意义。下列有关说法正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 艾滋病由人类免疫缺陷病毒引起，该病毒是传染源",
      "B. 交谈、握手、拥抱和不安全的性行为可传播艾滋病",
      "C. 人类免疫缺陷病毒主要侵犯并瓦解人体的免疫系统",
      "D. 预防艾滋病的主要措施是提前注射艾滋病疫苗"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13215,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "很多人在春天的时候喜欢吃一道应季家常菜——香椿炒蛋。炒菜用的香椿是香椿树幼嫩的枝条，它来自（　　）",
    "province": "河北",
    "options": [
      "A. 叶芽",
      "B. 花芽",
      "C. 芽轴",
      "D. 叶原基"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13216,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "陆地上的植物可以从土壤中吸收水分并最终散发到大气中。那么植物体吸收水分的主要器官以及水分散失的“门户”依次是（　　）",
    "province": "河北",
    "options": [
      "A. 叶、导管",
      "B. 根、导管",
      "C. 叶、气孔",
      "D. 根、气孔"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 13217,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "在农业生产和作物储存的过程中，通常要采取适当措施影响植物细胞的呼吸作用强度，从而满足生产或储存的需要。下列措施中属于降低呼吸作用强度的是（　　）",
    "province": "河北",
    "options": [
      "A. 对小麦进行“中耕松土”",
      "B. 稻田适时进行排水",
      "C. 粮仓内保持干燥和低温",
      "D. 给果蔬贮藏库内增加氧气"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13218,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "很多人爱吃水煮玉米，但买回来的玉米往往存在缺粒现象（如图），最可能原因是（　　）",
    "province": "河北",
    "options": [
      "A. 水肥不足",
      "B. 光照不足",
      "C. 病虫害多",
      "D. 传粉不足"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 13219,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“麻屋子，红帐子，里面住着一个白胖子”这是从小就常听到的一则谜语，谜底是花生。“麻屋子”、“红帐子”、“白胖子”依次属于（　　）",
    "province": "河北",
    "options": [
      "A. 子房、子房壁、胚珠",
      "B. 子房、珠被、受精卵",
      "C. 果皮、种皮、胚",
      "D. 种皮、果皮、胚乳"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13220,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "人的生长发育的起点是（ ）",
    "province": "河北",
    "options": [
      "A. 受精卵",
      "B. 胚胎",
      "C. 胎儿",
      "D. 婴儿"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13221,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "研究遗传现象往往需要观察生物的相对性状，下列属于相对性状的是（　　）",
    "province": "河北",
    "options": [
      "A. 人的黑发与人的卷发",
      "B. 果蝇的有翅与果蝇的白眼",
      "C. 玉米的高茎与大豆的矮茎",
      "D. 豌豆的红花与豌豆的白花"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 13222,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "学习遗传变异知识时，经常会听到基因、染色体和 DNA，它们三者之间的关系如下图所示。下列有关叙述中，正确的是（　　）",
    "province": "河北",
    "options": [
      "A. 一条①上只有一个基因",
      "B. ①在正常体细胞中是成对存在的",
      "C. ②是染色体",
      "D. ③是 DNA 分子"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13223,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "变异分为可遗传变异和不可遗传变异，下列属于可遗传变异的是（　　）",
    "province": "河北",
    "options": [
      "A. 一对正常夫妇的儿子患白化病",
      "B. 游客在海边几天后皮肤被晒成古铜色",
      "C. 单眼皮经过手术后变成双眼皮",
      "D. 水肥充足条件下生长的玉米籽粒饱满"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 13224,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我国婚姻法明确规定禁止近亲结婚，其科学依据是（　　）",
    "province": "河北",
    "options": [
      "A. 近亲结婚违反伦理道德",
      "B. 后代一定会患遗传病",
      "C. 后代患遗传病的机会增多",
      "D. 后代患传染病的机会增多"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 13225,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "达尔文发现，在远离大陆的印度洋南部的克伦岛中，昆虫一般呈两种类型，许多昆虫不能飞，其无翅或小翅；少数昆虫能飞，其翅膀非常发达。造成这种结果的原因是（　　）",
    "province": "河北",
    "options": [
      "A. 定向变异",
      "B. 自然选择",
      "C. 种内斗争",
      "D. 种间竞争"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 13226,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "科学家把人的胰岛素基因转入大肠杆菌内，对大肠杆菌进行培养，使之生产胰岛素。关于这项技术的叙述，错误的是（　　）",
    "province": "河北",
    "options": [
      "A. 科学家应用了转基因技术",
      "B. 培养大肠杆菌需要营养物质",
      "C. 基因被转入大肠杆菌的细胞核中",
      "D. 该技术属于基因工程的范畴"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 55600,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "细胞是生命起源的标志和生物进化的起点。所有细胞均具有的结构是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞壁",
      "B. 成形的细胞核",
      "C. 叶绿体",
      "D. 细胞膜"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 55601,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下列有关细胞分裂和细胞分化的说法，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 一个草履虫通过细胞分化形成两个草履虫 <img src=\"images/河北_0e6dc0_ff274479.png\">",
      "B. 幼苗生长时，细胞分裂和细胞分化旺盛",
      "C. 受精卵形成新个体离不开细胞分裂和细胞分化",
      "D. 此时我们身体内有些细胞正在进行分裂或分化"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 55602,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "河北武强木版年画是国家级非物质文化遗产。下列年画作品表示的四种动物中，体温不恒定的是（    ）",
    "province": "河北",
    "options": [
      "A. 牛 <img src=\"images/河北_0e6dc0_86e61cb1.png\">",
      "B. 虎 <img src=\"images/河北_0e6dc0_a9fe2917.png\">",
      "C. 蛇 <img src=\"images/河北_0e6dc0_09283cc0.png\">",
      "D. 鸡 <img src=\"images/河北_0e6dc0_9d9a853f.png\">"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 55603,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为天竺葵叶及其内部结构示意图。图中没有包含的植物体结构层次是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞",
      "B. 组织",
      "C. 器官",
      "D. 个体"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 55604,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "用我们所学生物学知识分析，下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 煤主要是由古代蕨类植物的遗体形成的",
      "B. 葫芦藓有根、茎、叶的分化，适于陆地生活",
      "C. 种子植物的繁殖过程摆脱了对水环境的依赖 <img src=\"images/河北_0e6dc0_ff274479.png\">",
      "D. 青藏铁路设置的野生动物通道，减少了对藏羚迁徙的干扰"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 55605,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "萝卜、白菜是常见的蔬菜，这两种植物在生物学上的分类地位如下图所示。图中包含植物种类最多的分类等级是（    ）",
    "province": "河北",
    "options": [
      "A. 植物界",
      "B. 白花菜目",
      "C. 十字花科",
      "D. 萝卜属 <img src=\"images/河北_0e6dc0_ff274479.png\">"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 55606,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2023年，河北省对72个县域开展生物多样性调查，发现了水杉、银杉、白鹈鹕、黑嘴鸥、细鳞鲑、松江鲈等60余种国家重点保护动植物，丰富了我省野生动植物资源数据库。下列不属于野生动植物资源保护措施的是（    ）",
    "province": "河北",
    "options": [
      "A. 就地保护",
      "B. 国家颁布实施相关法律法规",
      "C. 异地保护",
      "D. 完全禁止利用"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 55607,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "同学们在路边发现了一种生长异常茂盛的植物。查阅资料获知，该植物中文名为喜旱莲（如下图所示），属于外来入侵植物。下列做法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 将喜旱莲子草移栽到校园",
      "B. 向有关部门报告喜旱莲子草的情况",
      "C. 积极参与清除喜旱莲子草的行动",
      "D. 向周围人群宣讲外来物种入侵的危害"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 55608,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "馒头是中国传统发酵食品。制作馒头用到的微生物主要是（    ）",
    "province": "河北",
    "options": [
      "A. 青霉",
      "B. 噬菌体",
      "C. 酵母菌",
      "D. 醋酸菌"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 55609,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学早晨冲了一杯浓香的黑芝麻糊，其主要原料是黑芝麻种子。黑芝麻种子的营养物质主要贮存在（    ）",
    "province": "河北",
    "options": [
      "A. 胚芽",
      "B. 胚根",
      "C. 胚轴",
      "D. 子叶"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 55610,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "野生大豆（如下图所示）在我国分布广，种类多。从野生大豆中筛选出的高蛋白、低脂肪等优质基因，可转入普通大豆体内培育新品种。下列关于野生大豆的说法，错误的是（    ） <img src=\"images/河北_0e6dc0_ff274479.png\">",
    "province": "河北",
    "options": [
      "A. 属于被子植物",
      "B. 根瘤中的根瘤菌能固氮",
      "C. 豆荚由花中的胚珠发育而来",
      "D. 是大豆育种的基因资源库"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 55611,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "为研究施肥深度对干旱条件下小麦光合作用的影响，研究人员在相同条件下，选择符合实验标准的三个地块施肥、播种，长出植株后进行检测，实验数据（单位已省略）如下表所示。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 本实验控制的变量是施肥深度",
      "B. 随着施肥深度增加，小麦蒸腾作用减弱",
      "C. 小麦的光合作用速率与气孔开放程度、叶绿素含量有关",
      "D. 干旱条件下深施肥提高了小麦的光合作用速率"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 55612,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "“曲曲折折的荷塘上面，弥望的是田田的叶子”描写了池塘中荷叶相连的景色，下列能直接发育成荷叶的是（    ）",
    "province": "河北",
    "options": [
      "A. 花芽",
      "B. 芽轴",
      "C. 幼叶",
      "D. 芽原基"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 55613,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为肺循环示意图，箭头表示血流方向，①②③④表示结构。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. ①可防止血液倒流",
      "B. ②表示右心室",
      "C. ③表示肺泡",
      "D. ④内的血液为静脉血"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 55614,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某同学在窗前远眺时，一只昆虫突然飞到眼前；经眼的一系列调节后，他看清了眼前的昆虫。能表示该过程的正确顺序是（    ）",
    "province": "河北",
    "options": [
      "A. ①②③",
      "B. ①③②",
      "C. ②①③",
      "D. ③②①"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 55615,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "下图为某人左脚的踝关节射线透视图像，①②表示踝关节内的结构。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. ①是关节头，②是关节窝",
      "B. ①②表面覆盖着关节软骨 <img src=\"images/河北_0e6dc0_ff274479.png\">",
      "C. 关节腔内有滑液，使关节灵活",
      "D. 踝关节在运动中起枢纽（支点）作用"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 55616,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "结核杆菌通过呼吸道侵犯人体时，机体调动免疫系统进行防御。下列过程一定属于特异性免疫的是（    ）",
    "province": "河北",
    "options": [
      "A. 黏膜阻挡结核杆菌",
      "B. 某些细胞吞噬结核杆菌",
      "C. 溶菌酶杀灭结核杆菌",
      "D. 结核杆菌刺激免疫系统产生抗体"
    ],
    "answer": "D",
    "analysis": ""
  },
  {
    "id": 55617,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2023年，全国无偿献血的人次和献血总量均创历史新高。下列有关无偿献血的说法，错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 献血前应鉴定血型",
      "B. 献血时从手臂动脉取血",
      "C. 献血后应适当多摄入蛋、奶等食物",
      "D. 献血后体内血液成分短期内可恢复正常"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 55618,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "飘飞的杨絮来自杨的雌株。用杨的雄株枝条扦插繁育新植株，逐渐替换雌株，是解决杨絮飘飞的一种方法。下列实例中，与杨的扦插不属于同一种生殖方式的是（    ）",
    "province": "河北",
    "options": [
      "A. 玉米杂交育种",
      "B. 人参组织培养",
      "C. 桃的嫁接",
      "D. 体细胞克隆牛"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 55619,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "同学们用3D打印技术制作了表示细胞核、染色体、DNA和基因关系的模型，如下图所示。其中a表示的是（    ）",
    "province": "河北",
    "options": [
      "A. 细胞核",
      "B. 染色体",
      "C. DNA",
      "D. 基因"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 55620,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "某人出现食量大、消瘦、心跳快、情绪易激动等症状。经化验，发现他的体内某种激素水平偏高，医生诊断其患甲亢。该激素是（    ）",
    "province": "河北",
    "options": [
      "A. 胰岛素",
      "B. 性激素",
      "C. 甲状腺激素",
      "D. 生长激素"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 55621,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "狗由古代狼经长期驯化而来。科研人员对比狗和狼的面部肌肉，发现大多数狗的眼周围多了两块肌肉，如下图所示。这两块肌肉相互配合使狗能表现出“可怜巴巴”的表情，但哈士奇（狗的品种）没有旁侧眼睑牵拉肌。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 推测有的古代狼眼周围有这两块肌肉",
      "B. 控制这两块肌肉的基因可遗传给后代 <img src=\"images/河北_0e6dc0_ff274479.png\">",
      "C. 狗“可怜巴巴”的表情是自然选择的结果",
      "D. 哈士奇与其他品种狗的表情可能不同"
    ],
    "answer": "C",
    "analysis": ""
  },
  {
    "id": 55622,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "我们吃的食物进入消化道会发生各种变化。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 部分淀粉在口腔内分解为麦芽糖",
      "B. 蛋白质在胃内全部分解为氨基酸",
      "C. 脂肪经胆汁作用形成脂肪微滴",
      "D. 脂肪在小肠内分解为甘油和脂肪酸"
    ],
    "answer": "B",
    "analysis": ""
  },
  {
    "id": 55623,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "蝇子草有雌株和雄株之分，其性别决定方式与人类相同。蝇子草体细胞中含有22条常染色体和2条性染色体。正常情况下，蝇子草卵细胞中染色体组成是（    ）",
    "province": "河北",
    "options": [
      "A. 11条常染色体+X染色体",
      "B. 11条常染色体+Y染色体",
      "C. 22条常染色体+X染色体",
      "D. 22条常染色体+Y染色体"
    ],
    "answer": "A",
    "analysis": ""
  },
  {
    "id": 55624,
    "type": "choice",
    "unit": "exam",
    "difficulty": "medium",
    "score": 2,
    "content": "2022年，在河北围场早白垩纪地层中发现了完整的古七鳃鳗化石（如下图所示）。对该化石研究得知，古七鳃鳗具有鳃孔、背鳍和尾鳍等结构特征，与现存的七鳃鳗相似。下列说法错误的是（    ）",
    "province": "河北",
    "options": [
      "A. 围场在早白垩纪时期有古七鳃鳗分布",
      "B. 古七鳃鳗具有鳃孔和鳍，适于陆地生活",
      "C. 现存的七鳃鳗可能由古七鳃鳗进化而来 <img src=\"images/河北_0e6dc0_ff274479.png\">",
      "D. 古七鳃鳗化石是研究七鳃鳗进化的直接证据"
    ],
    "answer": "B",
    "analysis": ""
  }
];
