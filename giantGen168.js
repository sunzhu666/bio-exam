// 超大题库生成器168 - 模拟试题H
const giantGen168 = {
    baseId: 1005000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genSimO() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列关于花的叙述正确的是",c:"雄蕊和雌蕊是花的主要结构",w:["花瓣是花的主要结构","花萼是花的主要结构","花托是花的主要结构"],u:"unit3"},
            {q:"雄蕊的组成是",c:"花药和花丝",w:["柱头和花柱","子房和胚珠","花瓣和花萼"],u:"unit3"},
            {q:"雌蕊的组成是",c:"柱头花柱子房",w:["花药和花丝","花瓣和花萼","花托"],u:"unit3"},
            {q:"受精后子房发育成",c:"果实",w:["种子","花","叶"],u:"unit3"},
            {q:"受精后胚珠发育成",c:"种子",w:["果实","花","叶"],u:"unit3"},
            {q:"受精后受精卵发育成",c:"胚",w:["胚乳","种皮","果皮"],u:"unit3"},
            {q:"受精后受精极核发育成",c:"胚乳",w:["胚","种皮","果皮"],u:"unit3"},
            {q:"双受精是什么植物特有的",c:"被子植物",w:["裸子植物","蕨类植物","苔藓植物"],u:"unit10"},
            {q:"传粉的方式包括",c:"自花传粉和异花传粉",w:["只有自花传粉","只有异花传粉","无性繁殖"],u:"unit10"},
            {q:"下列属于无性生殖的是",c:"扦插",w:["种子繁殖","受精作用","传粉"],u:"unit10"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genSimP() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列属于有性生殖的是",c:"种子繁殖",w:["扦插","嫁接","压条"],u:"unit10"},
            {q:"扦插繁殖的原理是",c:"植物细胞的全能性",w:["有性生殖","受精作用","减数分裂"],u:"unit10"},
            {q:"嫁接成活的关键是",c:"接穗和砧木的形成层紧密结合",w:["品种相同","大小相同","颜色相同"],u:"unit10"},
            {q:"组织培养的原理是",c:"植物细胞的全能性",w:["有性生殖","自然选择","人工选择"],u:"unit10"},
            {q:"有性生殖的优点是",c:"后代具有双亲遗传特性变异大",w:["繁殖速度快","保持亲本性状","操作简单"],u:"unit10"},
            {q:"无性生殖的优点是",c:"繁殖速度快保持亲本优良性状",w:["后代变异大","适应性强","需要两个亲本"],u:"unit10"},
            {q:"下列关于青春期的叙述正确的是",c:"身体迅速发育性器官成熟",w:["身体停止发育","性器官不发育","与儿童期相同"],u:"unit10"},
            {q:"男性第二性征包括",c:"喉结突出声音变粗长胡须",w:["乳房发育","声音变细","骨盆变宽"],u:"unit10"},
            {q:"女性第二性征包括",c:"乳房发育声音变细骨盆变宽",w:["喉结突出","声音变粗","长胡须"],u:"unit10"},
            {q:"第二性征的出现与什么有关",c:"性激素",w:["生长激素","甲状腺激素","胰岛素"],u:"unit10"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genSimO(),...this.genSimP()]; }
};
