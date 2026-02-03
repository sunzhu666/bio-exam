// 超大题库生成器15 - 动物行为
const giantGen15 = {
    baseId: 240000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genInnateBehaviors() {
        const qs = []; let id = this.baseId;
        const behaviors = [
            {behavior:"觅食行为",type:"先天性行为",example:"蜘蛛结网",feature:"生来就有"},
            {behavior:"防御行为",type:"先天性行为",example:"乌贼喷墨",feature:"保护自己"},
            {behavior:"繁殖行为",type:"先天性行为",example:"孔雀开屏",feature:"繁衍后代"},
            {behavior:"迁徙行为",type:"先天性行为",example:"候鸟南飞",feature:"季节性移动"},
            {behavior:"社会行为",type:"先天性行为",example:"蜜蜂分工",feature:"群体协作"},
            {behavior:"领域行为",type:"先天性行为",example:"狗撒尿标记",feature:"占据领地"},
            {behavior:"攻击行为",type:"先天性行为",example:"公鸡打架",feature:"争夺资源"},
            {behavior:"节律行为",type:"先天性行为",example:"公鸡报晓",feature:"周期性活动"},
            {behavior:"趋性",type:"先天性行为",example:"飞蛾扑火",feature:"对刺激的定向反应"},
            {behavior:"本能",type:"先天性行为",example:"蜜蜂采蜜",feature:"复杂的先天行为"}
        ];
        behaviors.forEach(b => {
            qs.push(this.makeQ(id++,"unit1","medium",`${b.behavior}属于`,b.type,["后天性行为","无类型","随机"],`${b.behavior}是${b.type}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${b.behavior}的例子是`,b.example,["无例子","随机","不确定"],`${b.behavior}如${b.example}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${b.behavior}的特点是`,b.feature,["无特点","随机","不确定"],`${b.behavior}${b.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genLearnedBehaviors() {
        const qs = []; let id = this.baseId;
        const behaviors = [
            {behavior:"条件反射",type:"后天性行为",example:"狗听铃声分泌唾液",feature:"需要学习"},
            {behavior:"印随学习",type:"后天性行为",example:"小鸭跟随母鸭",feature:"关键期学习"},
            {behavior:"模仿学习",type:"后天性行为",example:"小猴学习使用工具",feature:"观察模仿"},
            {behavior:"试错学习",type:"后天性行为",example:"老鼠走迷宫",feature:"反复尝试"},
            {behavior:"顿悟学习",type:"后天性行为",example:"黑猩猩堆箱子取香蕉",feature:"突然领悟"},
            {behavior:"语言学习",type:"后天性行为",example:"鹦鹉学舌",feature:"模仿声音"},
            {behavior:"工具使用",type:"后天性行为",example:"乌鸦用树枝取虫",feature:"使用工具"},
            {behavior:"社会学习",type:"后天性行为",example:"猴群学习洗红薯",feature:"群体传播"}
        ];
        behaviors.forEach(b => {
            qs.push(this.makeQ(id++,"unit1","medium",`${b.behavior}属于`,b.type,["先天性行为","无类型","随机"],`${b.behavior}是${b.type}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${b.behavior}的例子是`,b.example,["无例子","随机","不确定"],`${b.behavior}如${b.example}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${b.behavior}的特点是`,b.feature,["无特点","随机","不确定"],`${b.behavior}${b.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genInnateBehaviors(),...this.genLearnedBehaviors()]; }
};
