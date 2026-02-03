// 超大题库生成器164 - 模拟试题D
const giantGen164 = {
    baseId: 985000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genSimG() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列血管中血压最高的是",c:"主动脉",w:["肺动脉","上腔静脉","毛细血管"],u:"unit7"},
            {q:"下列血管中血流速度最慢的是",c:"毛细血管",w:["主动脉","肺动脉","上腔静脉"],u:"unit7"},
            {q:"下列血管中管壁最薄的是",c:"毛细血管",w:["主动脉","肺动脉","上腔静脉"],u:"unit7"},
            {q:"下列血管中有瓣膜的是",c:"静脉",w:["动脉","毛细血管","主动脉"],u:"unit7"},
            {q:"心脏中有瓣膜的部位是",c:"心房与心室之间和心室与动脉之间",w:["只有心房","只有心室","心房与心房之间"],u:"unit7"},
            {q:"瓣膜的作用是",c:"防止血液倒流",w:["加快血流","减慢血流","储存血液"],u:"unit7"},
            {q:"下列关于ABO血型的叙述正确的是",c:"人类有A型B型AB型O型四种血型",w:["人类只有两种血型","人类只有三种血型","人类有五种血型"],u:"unit7"},
            {q:"输血时应遵循的原则是",c:"同型输血",w:["任意输血","只能输O型","只能输AB型"],u:"unit7"},
            {q:"万能供血者是",c:"O型血",w:["A型血","B型血","AB型血"],u:"unit7"},
            {q:"万能受血者是",c:"AB型血",w:["A型血","B型血","O型血"],u:"unit7"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genSimH() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列关于眼球的叙述正确的是",c:"晶状体相当于凸透镜",w:["晶状体相当于凹透镜","视网膜相当于凸透镜","角膜相当于凹透镜"],u:"unit9"},
            {q:"下列关于耳的叙述正确的是",c:"听觉感受器在耳蜗",w:["听觉感受器在鼓膜","听觉感受器在听小骨","听觉感受器在外耳道"],u:"unit9"},
            {q:"下列关于皮肤的叙述错误的是",c:"皮肤不能感受刺激",w:["皮肤是人体最大的器官","皮肤有保护作用","皮肤能调节体温"],u:"unit9"},
            {q:"下列关于骨骼的叙述正确的是",c:"骨骼肌收缩牵动骨绕关节运动",w:["骨骼肌收缩不需要骨","骨骼肌收缩不需要关节","骨能自己运动"],u:"unit1"},
            {q:"下列关于关节的叙述错误的是",c:"关节不能活动",w:["关节由关节面关节囊关节腔组成","关节面上有关节软骨","关节腔内有滑液"],u:"unit1"},
            {q:"下列关于肌肉的叙述正确的是",c:"骨骼肌只能收缩不能主动舒张",w:["骨骼肌能主动舒张","骨骼肌不能收缩","骨骼肌能自己运动"],u:"unit1"},
            {q:"屈肘时肱二头肌和肱三头肌的状态是",c:"肱二头肌收缩肱三头肌舒张",w:["都收缩","都舒张","肱二头肌舒张肱三头肌收缩"],u:"unit1"},
            {q:"伸肘时肱二头肌和肱三头肌的状态是",c:"肱二头肌舒张肱三头肌收缩",w:["都收缩","都舒张","肱二头肌收缩肱三头肌舒张"],u:"unit1"},
            {q:"下列动物中属于恒温动物的是",c:"家鸽",w:["蜥蜴","青蛙","鲤鱼"],u:"unit1"},
            {q:"下列动物中属于变温动物的是",c:"蛇",w:["家兔","家鸽","人"],u:"unit1"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genSimG(),...this.genSimH()]; }
};
