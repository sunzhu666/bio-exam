// 超大题库生成器87 - 脊椎动物详解
const giantGen87 = {
    baseId: 600000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genFishClass() {
        const qs = []; let id = this.baseId;
        const features = [
            {feature:"鱼类的呼吸器官",organ:"鳃",structure:"鳃丝鳃弓"},
            {feature:"鱼类的运动器官",organ:"鳍",type:"胸鳍腹鳍背鳍尾鳍"},
            {feature:"鱼类的体温",type:"变温动物",reason:"体温随环境变化"},
            {feature:"鱼类的生殖",type:"卵生体外受精",location:"水中"},
            {feature:"鱼类的侧线",function:"感知水流",location:"身体两侧"}
        ];
        features.forEach(f => {
            qs.push(this.makeQ(id++,"unit1","medium",`${f.feature}是`,f.organ||f.type,["无答案","随机","不确定"],`${f.feature}是${f.organ||f.type}。`));
            if(f.structure) qs.push(this.makeQ(id++,"unit1","medium",`${f.feature}的结构是`,f.structure,["无结构","随机","不确定"],`${f.feature}包括${f.structure}。`));
        });
        this.baseId = id; return qs;
    },

    genAmphibians() {
        const qs = []; let id = this.baseId;
        const features = [
            {feature:"两栖动物的呼吸",adult:"肺和皮肤",larva:"鳃"},
            {feature:"两栖动物的皮肤",character:"裸露湿润",function:"辅助呼吸"},
            {feature:"两栖动物的发育",type:"变态发育",stages:"卵蝌蚪幼蛙成蛙"},
            {feature:"两栖动物的生殖",type:"卵生体外受精",location:"水中"},
            {feature:"两栖动物的例子",example:"青蛙蟾蜍蝾螈",habitat:"水陆两栖"}
        ];
        features.forEach(f => {
            qs.push(this.makeQ(id++,"unit1","medium",`${f.feature}是`,f.adult||f.character||f.type||f.example,["无答案","随机","不确定"],`${f.feature}是${f.adult||f.character||f.type||f.example}。`));
            if(f.function) qs.push(this.makeQ(id++,"unit1","medium",`${f.feature}的功能是`,f.function,["无功能","随机","不确定"],`${f.feature}${f.function}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genFishClass(),...this.genAmphibians()]; }
};
