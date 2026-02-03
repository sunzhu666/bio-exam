// 超大题库生成器159 - 高频考点C
const giantGen159 = {
    baseId: 960000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHighFreqE() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"泌尿系统的组成是",c:"肾脏输尿管膀胱尿道",w:["只有肾脏","只有膀胱","只有尿道"],u:"unit8"},
            {q:"形成尿液的器官是",c:"肾脏",w:["膀胱","输尿管","尿道"],u:"unit8"},
            {q:"肾脏的结构和功能单位是",c:"肾单位",w:["肾小球","肾小管","肾小囊"],u:"unit8"},
            {q:"肾单位的组成是",c:"肾小球肾小囊肾小管",w:["只有肾小球","只有肾小管","只有肾小囊"],u:"unit8"},
            {q:"尿液形成的两个过程是",c:"滤过作用和重吸收作用",w:["只有滤过","只有重吸收","分泌作用"],u:"unit8"},
            {q:"神经系统的组成是",c:"中枢神经系统和周围神经系统",w:["只有大脑","只有脊髓","只有神经"],u:"unit9"},
            {q:"中枢神经系统包括",c:"脑和脊髓",w:["只有大脑","只有神经","只有脊髓"],u:"unit9"},
            {q:"神经系统的结构和功能单位是",c:"神经元",w:["神经","大脑","脊髓"],u:"unit9"},
            {q:"神经元的结构包括",c:"细胞体树突轴突",w:["只有细胞体","只有轴突","只有树突"],u:"unit9"},
            {q:"反射的结构基础是",c:"反射弧",w:["神经元","大脑","脊髓"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genHighFreqF() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"反射弧的组成是",c:"感受器传入神经神经中枢传出神经效应器",w:["只有神经中枢","只有感受器","只有效应器"],u:"unit9"},
            {q:"非条件反射的特点是",c:"生来就有不学而能",w:["后天学习获得","可以消退","需要大脑皮层"],u:"unit9"},
            {q:"条件反射的特点是",c:"后天学习获得可以消退",w:["生来就有","不学而能","不需要大脑皮层"],u:"unit9"},
            {q:"内分泌腺的特点是",c:"没有导管激素直接进入血液",w:["有导管","激素进入消化道","激素进入体外"],u:"unit9"},
            {q:"人体最重要的内分泌腺是",c:"垂体",w:["甲状腺","肾上腺","胰岛"],u:"unit9"},
            {q:"调节血糖的激素是",c:"胰岛素和胰高血糖素",w:["生长激素","甲状腺激素","肾上腺素"],u:"unit9"},
            {q:"人体发育的起点是",c:"受精卵",w:["精子","卵细胞","胚胎"],u:"unit10"},
            {q:"受精的场所是",c:"输卵管",w:["子宫","卵巢","阴道"],u:"unit10"},
            {q:"胚胎发育的场所是",c:"子宫",w:["输卵管","卵巢","阴道"],u:"unit10"},
            {q:"胎儿与母体进行物质交换的结构是",c:"胎盘",w:["子宫壁","卵巢","输卵管"],u:"unit10"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHighFreqE(),...this.genHighFreqF()]; }
};
