// 超大题库生成器99 - 生物与环境关系
const giantGen99 = {
    baseId: 660000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEcologicalFactors() {
        const qs = []; let id = this.baseId;
        const factors = [
            {factor:"光照",effect:"影响光合作用",example:"向日葵向光生长"},
            {factor:"温度",effect:"影响酶活性",example:"候鸟迁徙"},
            {factor:"水分",effect:"影响生物分布",example:"沙漠植物耐旱"},
            {factor:"空气",effect:"提供氧气二氧化碳",example:"高山植物矮小"},
            {factor:"土壤",effect:"提供矿物质水分",example:"盐碱地植物特殊"},
            {factor:"生物因素",type:"种内关系种间关系",example:"竞争捕食共生"}
        ];
        factors.forEach(f => {
            qs.push(this.makeQ(id++,"unit11","medium",`${f.factor}对生物的影响是`,f.effect,["无影响","随机","不确定"],`${f.factor}${f.effect}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${f.factor}影响的例子是`,f.example,["无例子","随机","不确定"],`${f.factor}如${f.example}。`));
        });
        this.baseId = id; return qs;
    },

    genBiologicalRelations() {
        const qs = []; let id = this.baseId;
        const relations = [
            {relation:"捕食",definition:"一种生物以另一种为食",example:"狼吃羊"},
            {relation:"竞争",definition:"争夺相同资源",example:"水稻和杂草"},
            {relation:"共生",definition:"相互依存互利共生",example:"根瘤菌和豆科植物"},
            {relation:"寄生",definition:"一方获利一方受害",example:"蛔虫寄生人体"},
            {relation:"种内互助",definition:"同种生物相互帮助",example:"蜜蜂群居"},
            {relation:"种内斗争",definition:"同种生物争夺资源",example:"雄性争夺配偶"}
        ];
        relations.forEach(r => {
            qs.push(this.makeQ(id++,"unit11","medium",`${r.relation}的定义是`,r.definition,["无定义","随机","不确定"],`${r.relation}是${r.definition}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${r.relation}的例子是`,r.example,["无例子","随机","不确定"],`${r.relation}如${r.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEcologicalFactors(),...this.genBiologicalRelations()]; }
};
