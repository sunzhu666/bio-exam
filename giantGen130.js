// 超大题库生成器130 - 生殖发育深化
const giantGen130 = {
    baseId: 815000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genReproductionA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"有性生殖的特点是",c:"由两性生殖细胞结合形成受精卵",w:["不需要生殖细胞","只需要一个亲本","无性繁殖"],u:"unit10"},
            {q:"无性生殖的特点是",c:"不经过两性生殖细胞结合",w:["需要受精","需要两个亲本","后代有变异"],u:"unit10"},
            {q:"有性生殖的优点是",c:"后代具有双亲遗传特性变异大",w:["繁殖速度快","保持亲本性状","操作简单"],u:"unit10"},
            {q:"无性生殖的优点是",c:"繁殖速度快保持亲本优良性状",w:["后代变异大","适应性强","需要两个亲本"],u:"unit10"},
            {q:"植物的无性生殖方式包括",c:"扦插嫁接压条组织培养",w:["种子繁殖","花粉传播","受精作用"],u:"unit10"},
            {q:"扦插繁殖的原理是",c:"植物细胞的全能性",w:["有性生殖","受精作用","减数分裂"],u:"unit10"},
            {q:"嫁接成活的关键是",c:"接穗和砧木的形成层紧密结合",w:["品种相同","大小相同","颜色相同"],u:"unit10"},
            {q:"组织培养的原理是",c:"植物细胞的全能性",w:["有性生殖","自然选择","人工选择"],u:"unit10"},
            {q:"被子植物的有性生殖过程包括",c:"开花传粉受精",w:["只有开花","只有传粉","只有受精"],u:"unit10"},
            {q:"传粉的方式包括",c:"自花传粉和异花传粉",w:["只有自花传粉","只有异花传粉","无性繁殖"],u:"unit10"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genReproductionB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"双受精是什么植物特有的",c:"被子植物",w:["裸子植物","蕨类植物","苔藓植物"],u:"unit10"},
            {q:"双受精的过程是",c:"两个精子分别与卵细胞和极核结合",w:["一个精子与卵细胞结合","不需要精子","只有一次受精"],u:"unit10"},
            {q:"受精卵发育成",c:"胚",w:["胚乳","种皮","果皮"],u:"unit10"},
            {q:"受精极核发育成",c:"胚乳",w:["胚","种皮","果皮"],u:"unit10"},
            {q:"昆虫的发育方式包括",c:"完全变态和不完全变态",w:["只有完全变态","只有不完全变态","无变态"],u:"unit10"},
            {q:"完全变态发育的阶段是",c:"卵幼虫蛹成虫",w:["卵若虫成虫","卵成虫","幼虫成虫"],u:"unit10"},
            {q:"不完全变态发育的阶段是",c:"卵若虫成虫",w:["卵幼虫蛹成虫","卵成虫","幼虫蛹成虫"],u:"unit10"},
            {q:"两栖动物的发育特点是",c:"变态发育",w:["直接发育","完全变态","不完全变态"],u:"unit10"},
            {q:"青蛙的发育过程是",c:"受精卵蝌蚪幼蛙成蛙",w:["受精卵成蛙","卵幼虫蛹成虫","卵若虫成虫"],u:"unit10"},
            {q:"鸟类的生殖特点是",c:"卵生体内受精",w:["胎生","体外受精","无性生殖"],u:"unit10"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genReproductionA(),...this.genReproductionB()]; }
};
