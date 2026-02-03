// 超大题库生成器155 - 中考真题精选C
const giantGen155 = {
    baseId: 940000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genExamQuestionsE() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"神经系统的结构和功能单位是",c:"神经元",w:["神经","大脑","脊髓"],u:"unit9"},
            {q:"反射的结构基础是",c:"反射弧",w:["神经元","神经","大脑"],u:"unit9"},
            {q:"反射弧的组成是",c:"感受器传入神经神经中枢传出神经效应器",w:["只有神经中枢","只有感受器","只有效应器"],u:"unit9"},
            {q:"下列属于非条件反射的是",c:"膝跳反射",w:["望梅止渴","谈虎色变","画饼充饥"],u:"unit9"},
            {q:"下列属于条件反射的是",c:"望梅止渴",w:["膝跳反射","眨眼反射","缩手反射"],u:"unit9"},
            {q:"人体最重要的内分泌腺是",c:"垂体",w:["甲状腺","肾上腺","胰岛"],u:"unit9"},
            {q:"调节血糖浓度的激素是",c:"胰岛素和胰高血糖素",w:["生长激素","甲状腺激素","肾上腺素"],u:"unit9"},
            {q:"幼年时生长激素分泌不足会导致",c:"侏儒症",w:["巨人症","呆小症","糖尿病"],u:"unit9"},
            {q:"幼年时甲状腺激素分泌不足会导致",c:"呆小症",w:["侏儒症","巨人症","糖尿病"],u:"unit9"},
            {q:"胰岛素分泌不足会导致",c:"糖尿病",w:["侏儒症","巨人症","呆小症"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genExamQuestionsF() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"人体发育的起点是",c:"受精卵",w:["精子","卵细胞","胚胎"],u:"unit10"},
            {q:"胚胎发育的场所是",c:"子宫",w:["输卵管","卵巢","阴道"],u:"unit10"},
            {q:"青春期的主要特点是",c:"身体迅速发育性器官成熟",w:["身体停止发育","性器官不发育","与儿童期相同"],u:"unit10"},
            {q:"遗传信息的载体是",c:"DNA",w:["蛋白质","RNA","糖类"],u:"unit11"},
            {q:"基因是",c:"有遗传效应的DNA片段",w:["染色体","蛋白质","细胞核"],u:"unit11"},
            {q:"人体细胞中染色体数目是",c:"23对",w:["22对","24对","46对"],u:"unit11"},
            {q:"男性的性染色体组成是",c:"XY",w:["XX","YY","XO"],u:"unit11"},
            {q:"女性的性染色体组成是",c:"XX",w:["XY","YY","XO"],u:"unit11"},
            {q:"生物进化的直接证据是",c:"化石",w:["比较解剖学","胚胎学","分子生物学"],u:"unit12"},
            {q:"自然选择学说的提出者是",c:"达尔文",w:["孟德尔","拉马克","林奈"],u:"unit12"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genExamQuestionsE(),...this.genExamQuestionsF()]; }
};
