// 超大题库生成器143 - 动物行为深化
const giantGen143 = {
    baseId: 880000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genAnimalBehaviorA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"动物行为按获得方式分为",c:"先天性行为和学习行为",w:["只有先天性行为","只有学习行为","本能行为"],u:"unit1"},
            {q:"先天性行为的特点是",c:"生来就有由遗传物质决定",w:["后天学习获得","可以改变","需要训练"],u:"unit1"},
            {q:"学习行为的特点是",c:"后天学习获得可以改变",w:["生来就有","由遗传决定","不能改变"],u:"unit1"},
            {q:"蜜蜂采蜜属于",c:"先天性行为",w:["学习行为","条件反射","社会行为"],u:"unit1"},
            {q:"小狗算算术属于",c:"学习行为",w:["先天性行为","本能行为","遗传行为"],u:"unit1"},
            {q:"蜘蛛结网属于",c:"先天性行为",w:["学习行为","条件反射","社会行为"],u:"unit1"},
            {q:"黑猩猩钓白蚁属于",c:"学习行为",w:["先天性行为","本能行为","遗传行为"],u:"unit1"},
            {q:"动物越高等学习行为",c:"越复杂",w:["越简单","不变","消失"],u:"unit1"},
            {q:"动物越低等先天性行为",c:"占比越大",w:["占比越小","消失","不变"],u:"unit1"},
            {q:"学习行为的意义是",c:"适应复杂多变的环境",w:["节省能量","减少活动","保持不变"],u:"unit1"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genAnimalBehaviorB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"社会行为的特点是",c:"群体内有分工有等级",w:["独居生活","没有分工","没有等级"],u:"unit1"},
            {q:"具有社会行为的动物是",c:"蜜蜂蚂蚁狒狒",w:["蜘蛛","蝴蝶","青蛙"],u:"unit1"},
            {q:"蜂群中的分工是",c:"蜂王产卵工蜂采蜜雄蜂交配",w:["都产卵","都采蜜","没有分工"],u:"unit1"},
            {q:"动物群体中的信息交流方式包括",c:"动作声音气味",w:["只有声音","只有动作","只有气味"],u:"unit1"},
            {q:"蜜蜂跳舞传递的信息是",c:"蜜源的方向和距离",w:["危险信号","求偶信号","领地信号"],u:"unit1"},
            {q:"觅食行为的意义是",c:"获取食物维持生存",w:["繁殖后代","防御敌害","建立领地"],u:"unit1"},
            {q:"防御行为的意义是",c:"保护自己躲避敌害",w:["获取食物","繁殖后代","建立领地"],u:"unit1"},
            {q:"繁殖行为的意义是",c:"繁衍后代延续种族",w:["获取食物","防御敌害","建立领地"],u:"unit1"},
            {q:"迁徙行为的意义是",c:"寻找适宜的生存环境",w:["获取食物","防御敌害","繁殖后代"],u:"unit1"},
            {q:"领域行为的意义是",c:"保护食物来源和繁殖场所",w:["获取食物","防御敌害","迁徙"],u:"unit1"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genAnimalBehaviorA(),...this.genAnimalBehaviorB()]; }
};
