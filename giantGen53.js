// 超大题库生成器53 - 动物行为
const giantGen53 = {
    baseId: 430000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genInnateBehavior() {
        const qs = []; let id = this.baseId;
        const behaviors = [
            {behavior:"先天性行为",definition:"生来就有的行为",basis:"遗传物质决定"},
            {behavior:"本能",example:"蜜蜂采蜜蜘蛛结网",feature:"复杂的先天性行为"},
            {behavior:"趋性",example:"飞蛾扑火",feature:"对刺激的定向反应"},
            {behavior:"反射",example:"膝跳反射",basis:"神经系统"},
            {behavior:"觅食行为",example:"猫捉老鼠",purpose:"获取食物"},
            {behavior:"防御行为",example:"乌贼喷墨",purpose:"保护自己"},
            {behavior:"繁殖行为",example:"孔雀开屏",purpose:"繁衍后代"},
            {behavior:"迁徙行为",example:"候鸟南飞",purpose:"适应环境变化"}
        ];
        behaviors.forEach(b => {
            qs.push(this.makeQ(id++,"unit1","medium",`${b.behavior}的定义是`,b.definition||b.feature,["无定义","随机","不确定"],`${b.behavior}是${b.definition||b.feature}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${b.behavior}的例子是`,b.example,["无例子","随机","不确定"],`${b.behavior}如${b.example}。`));
            if(b.purpose) qs.push(this.makeQ(id++,"unit1","medium",`${b.behavior}的目的是`,b.purpose,["无目的","随机","不确定"],`${b.behavior}为了${b.purpose}。`));
        });
        this.baseId = id; return qs;
    },

    genLearnedBehavior() {
        const qs = []; let id = this.baseId;
        const behaviors = [
            {behavior:"学习行为",definition:"后天学习获得的行为",basis:"遗传因素和环境因素"},
            {behavior:"印随",example:"小鸭跟随母鸭",feature:"关键期学习"},
            {behavior:"模仿",example:"小鸟学唱歌",feature:"通过观察学习"},
            {behavior:"条件反射",example:"望梅止渴",discoverer:"巴甫洛夫"},
            {behavior:"试错学习",example:"老鼠走迷宫",feature:"通过尝试错误学习"},
            {behavior:"推理学习",example:"黑猩猩取香蕉",feature:"高等动物特有"}
        ];
        behaviors.forEach(b => {
            qs.push(this.makeQ(id++,"unit1","medium",`${b.behavior}的定义是`,b.definition||b.feature,["无定义","随机","不确定"],`${b.behavior}是${b.definition||b.feature}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${b.behavior}的例子是`,b.example,["无例子","随机","不确定"],`${b.behavior}如${b.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genInnateBehavior(),...this.genLearnedBehavior()]; }
};
