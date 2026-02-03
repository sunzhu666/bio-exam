// 超大题库生成器38 - 动物适应
const giantGen38 = {
    baseId: 355000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genAnimalAdaptations() {
        const qs = []; let id = this.baseId;
        const adaptations = [
            {animal:"北极熊",adaptation:"白色皮毛厚脂肪层",environment:"极地",purpose:"保温和伪装"},
            {animal:"骆驼",adaptation:"驼峰储脂长睫毛",environment:"沙漠",purpose:"储能防沙"},
            {animal:"鱼",adaptation:"流线型身体鳍鳃",environment:"水中",purpose:"游泳和呼吸"},
            {animal:"鸟",adaptation:"羽毛中空骨骼气囊",environment:"空中",purpose:"飞行"},
            {animal:"蝙蝠",adaptation:"翼膜回声定位",environment:"夜间空中",purpose:"飞行和导航"},
            {animal:"变色龙",adaptation:"变色能力长舌",environment:"树林",purpose:"伪装和捕食"},
            {animal:"穿山甲",adaptation:"鳞片覆盖",environment:"陆地",purpose:"防御"},
            {animal:"刺猬",adaptation:"身体有刺",environment:"陆地",purpose:"防御"},
            {animal:"壁虎",adaptation:"脚趾有吸盘",environment:"墙壁",purpose:"攀爬"},
            {animal:"海豚",adaptation:"流线型回声定位",environment:"海洋",purpose:"游泳和导航"},
            {animal:"企鹅",adaptation:"流线型厚脂肪层",environment:"南极",purpose:"游泳和保温"},
            {animal:"蛇",adaptation:"无四肢鳞片覆盖",environment:"多种",purpose:"爬行"}
        ];
        adaptations.forEach(a => {
            qs.push(this.makeQ(id++,"unit1","medium",`${a.animal}的适应特征是`,a.adaptation,["无特征","随机","不确定"],`${a.animal}${a.adaptation}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${a.animal}适应的环境是`,a.environment,["无环境","随机","不确定"],`${a.animal}适应${a.environment}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${a.animal}适应的目的是`,a.purpose,["无目的","随机","不确定"],`${a.animal}适应是为了${a.purpose}。`));
        });
        this.baseId = id; return qs;
    },

    genProtectiveColoration() {
        const qs = []; let id = this.baseId;
        const colorations = [
            {type:"保护色",def:"与环境颜色相似",example:"变色龙北极熊",purpose:"躲避天敌"},
            {type:"警戒色",def:"鲜艳醒目的颜色",example:"毒蛙黄蜂",purpose:"警告捕食者"},
            {type:"拟态",def:"模拟其他生物或环境",example:"竹节虫枯叶蝶",purpose:"伪装"},
            {type:"假眼斑",def:"模拟眼睛的斑纹",example:"蝴蝶翅膀",purpose:"恐吓捕食者"},
            {type:"反荫蔽",def:"腹部浅背部深",example:"鱼类",purpose:"减少立体感"}
        ];
        colorations.forEach(c => {
            qs.push(this.makeQ(id++,"unit1","hard",`${c.type}的定义是`,c.def,["无定义","随机","不确定"],`${c.type}是${c.def}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${c.type}的例子是`,c.example,["无例子","随机","不确定"],`${c.type}如${c.example}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${c.type}的目的是`,c.purpose,["无目的","随机","不确定"],`${c.type}是为了${c.purpose}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genAnimalAdaptations(),...this.genProtectiveColoration()]; }
};
