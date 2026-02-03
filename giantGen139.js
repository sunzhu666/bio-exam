// 超大题库生成器139 - 运动系统深化
const giantGen139 = {
    baseId: 860000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genMovementA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"运动系统由什么组成",c:"骨骨连结骨骼肌",w:["只有骨","只有肌肉","只有关节"],u:"unit1"},
            {q:"骨的基本结构包括",c:"骨膜骨质骨髓",w:["只有骨质","只有骨髓","只有骨膜"],u:"unit1"},
            {q:"骨膜的功能是",c:"营养骨骼参与骨的生长和修复",w:["储存脂肪","产生血细胞","支撑身体"],u:"unit1"},
            {q:"骨质分为",c:"骨密质和骨松质",w:["只有骨密质","只有骨松质","骨膜和骨髓"],u:"unit1"},
            {q:"骨髓分为",c:"红骨髓和黄骨髓",w:["只有红骨髓","只有黄骨髓","骨密质和骨松质"],u:"unit1"},
            {q:"红骨髓的功能是",c:"造血",w:["储存脂肪","营养骨骼","支撑身体"],u:"unit1"},
            {q:"关节的基本结构包括",c:"关节面关节囊关节腔",w:["只有关节面","只有关节囊","只有关节腔"],u:"unit1"},
            {q:"关节面上覆盖的结构是",c:"关节软骨",w:["骨膜","肌肉","韧带"],u:"unit1"},
            {q:"关节软骨的作用是",c:"减少摩擦缓冲震动",w:["产生滑液","连接骨骼","收缩运动"],u:"unit1"},
            {q:"关节囊的作用是",c:"连接骨骼分泌滑液",w:["减少摩擦","收缩运动","传导兴奋"],u:"unit1"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genMovementB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"关节腔内的液体是",c:"滑液",w:["血液","淋巴","组织液"],u:"unit1"},
            {q:"滑液的作用是",c:"润滑关节减少摩擦",w:["营养骨骼","产生血细胞","传导兴奋"],u:"unit1"},
            {q:"骨骼肌的结构包括",c:"肌腱和肌腹",w:["只有肌腱","只有肌腹","骨膜和骨髓"],u:"unit1"},
            {q:"肌腱的作用是",c:"连接骨骼",w:["收缩运动","产生力量","储存能量"],u:"unit1"},
            {q:"肌腹的作用是",c:"收缩产生力量",w:["连接骨骼","储存脂肪","传导兴奋"],u:"unit1"},
            {q:"骨骼肌的特性是",c:"受刺激收缩",w:["自动收缩","不能收缩","持续收缩"],u:"unit1"},
            {q:"屈肘时肱二头肌",c:"收缩",w:["舒张","不变","先收缩后舒张"],u:"unit1"},
            {q:"屈肘时肱三头肌",c:"舒张",w:["收缩","不变","先舒张后收缩"],u:"unit1"},
            {q:"伸肘时肱二头肌",c:"舒张",w:["收缩","不变","先收缩后舒张"],u:"unit1"},
            {q:"伸肘时肱三头肌",c:"收缩",w:["舒张","不变","先舒张后收缩"],u:"unit1"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genMovementA(),...this.genMovementB()]; }
};
