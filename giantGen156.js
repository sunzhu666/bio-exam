// 超大题库生成器156 - 中考真题精选D
const giantGen156 = {
    baseId: 945000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genExamQuestionsG() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"生态系统的组成是",c:"生物部分和非生物部分",w:["只有生物","只有环境","只有生产者"],u:"unit13"},
            {q:"生态系统中的生产者主要是",c:"绿色植物",w:["动物","细菌","真菌"],u:"unit13"},
            {q:"生态系统中的分解者主要是",c:"细菌和真菌",w:["植物","动物","病毒"],u:"unit13"},
            {q:"食物链的起点是",c:"生产者",w:["消费者","分解者","阳光"],u:"unit13"},
            {q:"食物链中不包括",c:"分解者",w:["生产者","消费者","植物"],u:"unit13"},
            {q:"能量流动的特点是",c:"单向流动逐级递减",w:["循环流动","逐级增加","双向流动"],u:"unit13"},
            {q:"物质循环的特点是",c:"循环往复",w:["单向流动","逐级递减","不能循环"],u:"unit13"},
            {q:"生态系统具有一定的什么能力",c:"自动调节能力",w:["无限调节能力","不能调节","只能增加"],u:"unit13"},
            {q:"保护生物多样性的根本措施是",c:"保护生物的栖息环境",w:["建立动物园","人工繁殖","迁地保护"],u:"unit13"},
            {q:"温室效应的主要原因是",c:"二氧化碳等温室气体增加",w:["氧气增加","氮气增加","水蒸气减少"],u:"unit13"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genExamQuestionsH() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列关于传染病的叙述正确的是",c:"传染病具有传染性和流行性",w:["传染病不会传染","传染病不会流行","传染病都是遗传病"],u:"unit9"},
            {q:"传染病流行的三个环节是",c:"传染源传播途径易感人群",w:["只有传染源","只有传播途径","只有易感人群"],u:"unit9"},
            {q:"下列属于控制传染源的措施是",c:"隔离病人",w:["消毒杀菌","接种疫苗","锻炼身体"],u:"unit9"},
            {q:"下列属于切断传播途径的措施是",c:"消毒杀菌",w:["隔离病人","接种疫苗","锻炼身体"],u:"unit9"},
            {q:"下列属于保护易感人群的措施是",c:"接种疫苗",w:["隔离病人","消毒杀菌","杀灭病原体"],u:"unit9"},
            {q:"人体的第一道防线是",c:"皮肤和黏膜",w:["吞噬细胞","淋巴细胞","抗体"],u:"unit9"},
            {q:"人体的第三道防线是",c:"免疫器官和免疫细胞",w:["皮肤","黏膜","吞噬细胞"],u:"unit9"},
            {q:"抗体的化学本质是",c:"蛋白质",w:["糖类","脂肪","核酸"],u:"unit9"},
            {q:"疫苗的成分是",c:"灭活或减毒的病原体",w:["抗体","抗生素","维生素"],u:"unit9"},
            {q:"接种疫苗后机体产生的是",c:"抗体和记忆细胞",w:["抗原","病原体","红细胞"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genExamQuestionsG(),...this.genExamQuestionsH()]; }
};
