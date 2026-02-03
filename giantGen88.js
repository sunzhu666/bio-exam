// 超大题库生成器88 - 爬行鸟类哺乳
const giantGen88 = {
    baseId: 605000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genReptiles() {
        const qs = []; let id = this.baseId;
        const features = [
            {feature:"爬行动物的皮肤",character:"干燥有鳞片",function:"防止水分蒸发"},
            {feature:"爬行动物的呼吸",organ:"肺",efficiency:"比两栖动物高"},
            {feature:"爬行动物的生殖",type:"卵生体内受精",egg:"有坚韧卵壳"},
            {feature:"爬行动物的体温",type:"变温动物",reason:"体温随环境变化"},
            {feature:"爬行动物的例子",example:"蛇蜥蜴龟鳄鱼",habitat:"陆地为主"}
        ];
        features.forEach(f => {
            qs.push(this.makeQ(id++,"unit1","medium",`${f.feature}是`,f.character||f.organ||f.type||f.example,["无答案","随机","不确定"],`${f.feature}是${f.character||f.organ||f.type||f.example}。`));
            if(f.function) qs.push(this.makeQ(id++,"unit1","medium",`${f.feature}的功能是`,f.function,["无功能","随机","不确定"],`${f.feature}${f.function}。`));
        });
        this.baseId = id; return qs;
    },

    genBirdsAndMammals() {
        const qs = []; let id = this.baseId;
        const animals = [
            {animal:"鸟类",feature:"有羽毛前肢变翼",respiration:"双重呼吸",temperature:"恒温"},
            {animal:"鸟类骨骼",feature:"中空减轻体重",adaptation:"适应飞行"},
            {animal:"哺乳动物",feature:"胎生哺乳",body:"有毛发",temperature:"恒温"},
            {animal:"哺乳动物牙齿",type:"门齿犬齿臼齿",function:"切断撕裂研磨"},
            {animal:"哺乳动物大脑",feature:"发达",function:"学习记忆能力强"}
        ];
        animals.forEach(a => {
            qs.push(this.makeQ(id++,"unit1","medium",`${a.animal}的特点是`,a.feature,["无特点","随机","不确定"],`${a.animal}${a.feature}。`));
            if(a.function) qs.push(this.makeQ(id++,"unit1","medium",`${a.animal}的功能是`,a.function,["无功能","随机","不确定"],`${a.animal}${a.function}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genReptiles(),...this.genBirdsAndMammals()]; }
};
