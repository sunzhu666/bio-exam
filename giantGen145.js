// 超大题库生成器145 - 生物与环境关系深化
const giantGen145 = {
    baseId: 890000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBioEnvironmentA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"影响生物生活的环境因素包括",c:"非生物因素和生物因素",w:["只有非生物因素","只有生物因素","只有温度"],u:"unit13"},
            {q:"非生物因素包括",c:"阳光温度水空气土壤",w:["只有阳光","只有温度","只有水"],u:"unit13"},
            {q:"生物因素包括",c:"同种生物和不同种生物",w:["只有同种生物","只有不同种生物","只有捕食"],u:"unit13"},
            {q:"生物之间的关系包括",c:"捕食竞争共生寄生",w:["只有捕食","只有竞争","只有共生"],u:"unit13"},
            {q:"捕食关系是指",c:"一种生物以另一种生物为食",w:["相互争夺资源","相互有利","一方有利一方有害"],u:"unit13"},
            {q:"竞争关系是指",c:"生物之间争夺资源和空间",w:["一种生物吃另一种","相互有利","一方有利一方有害"],u:"unit13"},
            {q:"共生关系是指",c:"两种生物生活在一起相互有利",w:["一种生物吃另一种","相互争夺资源","一方有利一方有害"],u:"unit13"},
            {q:"寄生关系是指",c:"一种生物寄生在另一种生物体内或体表",w:["相互有利","相互争夺资源","一种生物吃另一种"],u:"unit13"},
            {q:"狼和羊的关系是",c:"捕食",w:["竞争","共生","寄生"],u:"unit13"},
            {q:"水稻和稗草的关系是",c:"竞争",w:["捕食","共生","寄生"],u:"unit13"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genBioEnvironmentB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"根瘤菌和豆科植物的关系是",c:"共生",w:["捕食","竞争","寄生"],u:"unit13"},
            {q:"蛔虫和人的关系是",c:"寄生",w:["捕食","竞争","共生"],u:"unit13"},
            {q:"生物对环境的适应表现为",c:"形态结构和生理功能与环境相适应",w:["不适应环境","改变环境","与环境无关"],u:"unit13"},
            {q:"仙人掌叶变成刺是适应",c:"干旱环境",w:["潮湿环境","寒冷环境","高温环境"],u:"unit13"},
            {q:"北极熊毛色白是适应",c:"冰雪环境",w:["沙漠环境","森林环境","草原环境"],u:"unit13"},
            {q:"变色龙变色是适应",c:"躲避敌害",w:["获取食物","繁殖后代","调节体温"],u:"unit13"},
            {q:"生物对环境的影响表现为",c:"生物能改变环境",w:["生物不能改变环境","环境决定生物","生物与环境无关"],u:"unit13"},
            {q:"蚯蚓对环境的影响是",c:"疏松土壤增加肥力",w:["破坏土壤","污染环境","没有影响"],u:"unit13"},
            {q:"植物对环境的影响是",c:"净化空气调节气候",w:["污染空气","破坏气候","没有影响"],u:"unit13"},
            {q:"生物与环境的关系是",c:"相互影响相互作用",w:["生物决定环境","环境决定生物","没有关系"],u:"unit13"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBioEnvironmentA(),...this.genBioEnvironmentB()]; }
};
