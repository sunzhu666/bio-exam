// 超大题库生成器142 - 植物生理深化
const giantGen142 = {
    baseId: 875000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPlantPhysiologyA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"蒸腾作用的主要器官是",c:"叶",w:["根","茎","花"],u:"unit4"},
            {q:"蒸腾作用的主要部位是",c:"气孔",w:["叶肉","叶脉","表皮"],u:"unit4"},
            {q:"蒸腾作用的意义是",c:"促进水分吸收和运输降低叶片温度",w:["合成有机物","分解有机物","吸收二氧化碳"],u:"unit4"},
            {q:"气孔由什么细胞组成",c:"保卫细胞",w:["表皮细胞","叶肉细胞","导管细胞"],u:"unit4"},
            {q:"气孔开闭的原理是",c:"保卫细胞吸水膨胀或失水收缩",w:["温度变化","光照变化","风力变化"],u:"unit4"},
            {q:"白天气孔一般",c:"开放",w:["关闭","半开","不变"],u:"unit4"},
            {q:"夜间气孔一般",c:"关闭",w:["开放","半开","不变"],u:"unit4"},
            {q:"植物吸收水分的主要部位是",c:"根尖成熟区",w:["根冠","分生区","伸长区"],u:"unit4"},
            {q:"根毛细胞吸水的原理是",c:"渗透作用",w:["主动运输","扩散作用","吞噬作用"],u:"unit4"},
            {q:"植物吸水的条件是",c:"细胞液浓度大于土壤溶液浓度",w:["细胞液浓度小于土壤溶液","浓度相等","与浓度无关"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genPlantPhysiologyB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"植物失水的条件是",c:"细胞液浓度小于土壤溶液浓度",w:["细胞液浓度大于土壤溶液","浓度相等","与浓度无关"],u:"unit4"},
            {q:"施肥过多导致烧苗的原因是",c:"土壤溶液浓度过高植物失水",w:["肥料有毒","温度过高","光照过强"],u:"unit4"},
            {q:"水分在植物体内运输的途径是",c:"导管",w:["筛管","形成层","表皮"],u:"unit4"},
            {q:"有机物在植物体内运输的途径是",c:"筛管",w:["导管","形成层","表皮"],u:"unit4"},
            {q:"导管位于",c:"木质部",w:["韧皮部","形成层","表皮"],u:"unit4"},
            {q:"筛管位于",c:"韧皮部",w:["木质部","形成层","表皮"],u:"unit4"},
            {q:"树皮环割后树木死亡的原因是",c:"有机物无法向下运输根部饿死",w:["水分无法运输","无机盐无法运输","光合作用停止"],u:"unit4"},
            {q:"植物生长需要的无机盐主要是",c:"氮磷钾",w:["只需要氮","只需要磷","只需要钾"],u:"unit4"},
            {q:"氮肥的作用是",c:"促进茎叶生长",w:["促进开花结果","促进根系发达","促进果实成熟"],u:"unit4"},
            {q:"磷肥的作用是",c:"促进开花结果",w:["促进茎叶生长","促进根系发达","促进果实成熟"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPlantPhysiologyA(),...this.genPlantPhysiologyB()]; }
};
