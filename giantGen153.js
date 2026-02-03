// 超大题库生成器153 - 中考真题精选A
const giantGen153 = {
    baseId: 930000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genExamQuestionsA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列关于生物特征的叙述正确的是",c:"生物都能对外界刺激作出反应",w:["生物都能运动","生物都由细胞构成","生物都能进行光合作用"],u:"unit1"},
            {q:"使用显微镜观察时发现视野较暗应该",c:"调大光圈或使用凹面镜",w:["调小光圈","使用平面镜","换高倍镜"],u:"unit2"},
            {q:"制作洋葱表皮细胞临时装片时滴加的液体是",c:"清水",w:["生理盐水","碘液","酒精"],u:"unit2"},
            {q:"制作人口腔上皮细胞临时装片时滴加的液体是",c:"生理盐水",w:["清水","碘液","酒精"],u:"unit2"},
            {q:"下列结构中植物细胞有而动物细胞没有的是",c:"细胞壁叶绿体液泡",w:["细胞膜","细胞核","线粒体"],u:"unit2"},
            {q:"细胞分裂时染色体的变化是",c:"先复制后平均分配到两个子细胞",w:["不复制直接分配","复制后不分配","随机分配"],u:"unit2"},
            {q:"下列关于组织的叙述正确的是",c:"组织是由形态相似功能相同的细胞群构成",w:["组织由一个细胞构成","组织就是器官","组织不需要细胞"],u:"unit3"},
            {q:"人体的结构层次从小到大依次是",c:"细胞组织器官系统人体",w:["细胞器官组织系统","组织细胞器官系统","器官组织细胞系统"],u:"unit3"},
            {q:"下列属于器官的是",c:"心脏",w:["血液","心肌组织","循环系统"],u:"unit3"},
            {q:"绿色植物的结构层次是",c:"细胞组织器官植物体",w:["细胞组织系统植物体","细胞器官植物体","组织器官植物体"],u:"unit3"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genExamQuestionsB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"种子萌发的外界条件是",c:"适宜的温度一定的水分充足的空气",w:["只需要水分","只需要温度","需要光照"],u:"unit3"},
            {q:"种子萌发的自身条件是",c:"胚是完整的活的度过休眠期",w:["只需要胚完整","只需要活的","不需要条件"],u:"unit3"},
            {q:"根尖吸收水分的主要部位是",c:"成熟区",w:["根冠","分生区","伸长区"],u:"unit4"},
            {q:"茎中运输水分和无机盐的结构是",c:"导管",w:["筛管","形成层","表皮"],u:"unit4"},
            {q:"茎中运输有机物的结构是",c:"筛管",w:["导管","形成层","表皮"],u:"unit4"},
            {q:"叶片进行光合作用的主要部位是",c:"叶肉",w:["表皮","叶脉","气孔"],u:"unit4"},
            {q:"气孔的开闭由什么细胞控制",c:"保卫细胞",w:["表皮细胞","叶肉细胞","导管细胞"],u:"unit4"},
            {q:"光合作用的实质是",c:"合成有机物储存能量",w:["分解有机物","释放能量","吸收氧气"],u:"unit4"},
            {q:"呼吸作用的实质是",c:"分解有机物释放能量",w:["合成有机物","储存能量","释放氧气"],u:"unit4"},
            {q:"蒸腾作用的主要器官是",c:"叶",w:["根","茎","花"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genExamQuestionsA(),...this.genExamQuestionsB()]; }
};
