// 超大题库生成器89 - 无脊椎动物
const giantGen89 = {
    baseId: 610000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genInvertebrates() {
        const qs = []; let id = this.baseId;
        const groups = [
            {group:"腔肠动物",feature:"有刺细胞",example:"水螅水母珊瑚",structure:"两胚层"},
            {group:"扁形动物",feature:"身体扁平",example:"涡虫血吸虫",structure:"三胚层无体腔"},
            {group:"线形动物",feature:"身体细长",example:"蛔虫蛲虫",structure:"有假体腔"},
            {group:"环节动物",feature:"身体分节",example:"蚯蚓沙蚕水蛭",structure:"有真体腔"},
            {group:"软体动物",feature:"身体柔软有外套膜",example:"蜗牛河蚌乌贼",structure:"有贝壳或无"}
        ];
        groups.forEach(g => {
            qs.push(this.makeQ(id++,"unit1","medium",`${g.group}的特点是`,g.feature,["无特点","随机","不确定"],`${g.group}${g.feature}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${g.group}的例子是`,g.example,["无例子","随机","不确定"],`${g.group}如${g.example}。`));
        });
        this.baseId = id; return qs;
    },

    genArthropods() {
        const qs = []; let id = this.baseId;
        const features = [
            {feature:"节肢动物的特点",content:"身体分节有外骨骼",appendage:"附肢分节"},
            {feature:"昆虫的身体",parts:"头胸腹三部分",legs:"三对足"},
            {feature:"昆虫的呼吸",organ:"气管",feature2:"直接到达细胞"},
            {feature:"昆虫的发育",type:"完全变态和不完全变态",complete:"卵幼虫蛹成虫"},
            {feature:"甲壳动物",example:"虾蟹",habitat:"水生为主"},
            {feature:"蛛形动物",example:"蜘蛛蝎子",legs:"四对足"}
        ];
        features.forEach(f => {
            qs.push(this.makeQ(id++,"unit1","medium",`${f.feature}是`,f.content||f.parts||f.organ||f.type||f.example,["无答案","随机","不确定"],`${f.feature}是${f.content||f.parts||f.organ||f.type||f.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genInvertebrates(),...this.genArthropods()]; }
};
