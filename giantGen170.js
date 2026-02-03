// 超大题库生成器170 - 模拟试题J
const giantGen170 = {
    baseId: 1015000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genSimS() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列关于进化的叙述正确的是",c:"生物进化是由简单到复杂由低等到高等",w:["生物不会进化","进化是由复杂到简单","进化是随机的"],u:"unit12"},
            {q:"生物进化的直接证据是",c:"化石",w:["比较解剖学","胚胎学","分子生物学"],u:"unit12"},
            {q:"越古老的地层中化石生物",c:"越简单越低等",w:["越复杂越高等","与现代相同","没有规律"],u:"unit12"},
            {q:"同源器官说明生物之间",c:"有共同的祖先",w:["没有关系","是同一物种","功能相同"],u:"unit12"},
            {q:"达尔文进化论的核心是",c:"自然选择学说",w:["用进废退","获得性遗传","突变论"],u:"unit12"},
            {q:"自然选择的基础是",c:"遗传和变异",w:["环境变化","人工选择","基因突变"],u:"unit12"},
            {q:"自然选择的动力是",c:"生存斗争",w:["遗传","变异","繁殖"],u:"unit12"},
            {q:"自然选择的结果是",c:"适者生存不适者淘汰",w:["所有生物都生存","所有生物都淘汰","随机生存"],u:"unit12"},
            {q:"自然选择的方向是",c:"有利变异被保留",w:["所有变异被保留","不利变异被保留","没有方向"],u:"unit12"},
            {q:"生物进化的实质是",c:"种群基因频率的改变",w:["个体基因改变","环境改变","形态改变"],u:"unit12"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genSimT() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"物种形成的必要条件是",c:"隔离",w:["变异","选择","遗传"],u:"unit12"},
            {q:"地理隔离的作用是",c:"阻止基因交流",w:["促进基因交流","增加变异","减少变异"],u:"unit12"},
            {q:"生殖隔离的标志是",c:"不能产生可育后代",w:["不能交配","形态不同","生活环境不同"],u:"unit12"},
            {q:"共同进化是指",c:"不同物种相互影响共同发展",w:["同一物种进化","只有捕食者进化","只有被捕食者进化"],u:"unit12"},
            {q:"生物多样性的层次包括",c:"基因多样性物种多样性生态系统多样性",w:["只有物种多样性","只有基因多样性","只有生态系统多样性"],u:"unit12"},
            {q:"保护生物多样性的根本措施是",c:"保护生物的栖息环境",w:["建立动物园","人工繁殖","迁地保护"],u:"unit12"},
            {q:"人类进化的顺序是",c:"南方古猿能人直立人智人",w:["智人直立人能人","能人智人直立人","直立人能人智人"],u:"unit12"},
            {q:"人类与类人猿的共同祖先是",c:"森林古猿",w:["南方古猿","能人","直立人"],u:"unit12"},
            {q:"人类进化的主要特征变化是",c:"脑容量增大直立行走",w:["体型变大","毛发增多","尾巴变长"],u:"unit12"},
            {q:"下列属于人类特有的特征是",c:"语言和思维",w:["直立行走","使用工具","群居生活"],u:"unit12"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genSimS(),...this.genSimT()]; }
};
