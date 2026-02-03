// 海量题库生成器F - 生态系统详细
const massiveGenF = {
    baseId: 145000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEcosystemComponents() {
        const qs = []; let id = this.baseId;
        const components = [
            {comp:"生产者",role:"制造有机物",example:"绿色植物",energy:"固定太阳能"},
            {comp:"消费者",role:"消耗有机物",example:"动物",energy:"获取化学能"},
            {comp:"分解者",role:"分解有机物",example:"细菌真菌",energy:"释放能量"},
            {comp:"非生物环境",role:"提供物质和能量",example:"阳光水空气",energy:"能量来源"},
            {comp:"食物链",role:"能量传递途径",example:"草→兔→狐",energy:"单向流动"},
            {comp:"食物网",role:"复杂能量传递",example:"多条食物链交织",energy:"多途径传递"}
        ];
        components.forEach(c => {
            qs.push(this.makeQ(id++,"unit11","medium",`${c.comp}在生态系统中的作用是`,c.role,["无作用","随机","不确定"],`${c.comp}的作用是${c.role}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${c.comp}的例子是`,c.example,["无例子","随机","不确定"],`${c.comp}如${c.example}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`${c.comp}与能量的关系是`,c.energy,["无关系","随机","不确定"],`${c.comp}${c.energy}。`));
        });
        this.baseId = id; return qs;
    },

    genEcologicalRelations() {
        const qs = []; let id = this.baseId;
        const relations = [
            {relation:"捕食",def:"一种生物以另一种为食",example:"狼吃羊",effect:"调节种群数量"},
            {relation:"竞争",def:"争夺相同资源",example:"水稻和杂草",effect:"优胜劣汰"},
            {relation:"共生",def:"互利共存",example:"根瘤菌和豆科植物",effect:"互惠互利"},
            {relation:"寄生",def:"一方受益一方受害",example:"蛔虫和人",effect:"寄生者获益"},
            {relation:"腐生",def:"分解死亡有机物",example:"蘑菇分解枯叶",effect:"物质循环"}
        ];
        relations.forEach(r => {
            qs.push(this.makeQ(id++,"unit11","medium",`${r.relation}关系的定义是`,r.def,["无定义","随机","不确定"],`${r.relation}是${r.def}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${r.relation}关系的例子是`,r.example,["无例子","随机","不确定"],`${r.relation}如${r.example}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`${r.relation}关系的生态效应是`,r.effect,["无效应","随机","不确定"],`${r.relation}的效应是${r.effect}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEcosystemComponents(),...this.genEcologicalRelations()]; }
};
