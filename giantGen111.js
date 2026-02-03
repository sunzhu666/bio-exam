// 超大题库生成器111 - 进化论补充
const giantGen111 = {
    baseId: 720000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEvolutionA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"自然选择学说的提出者是",c:"达尔文",w:["孟德尔","拉马克","林奈"],u:"unit12"},
            {q:"自然选择的结果是",c:"适者生存不适者淘汰",w:["所有生物都生存","所有生物都淘汰","随机生存"],u:"unit12"},
            {q:"生物进化的内因是",c:"遗传和变异",w:["自然选择","环境变化","人工选择"],u:"unit12"},
            {q:"生物进化的外因是",c:"自然选择",w:["遗传变异","基因突变","染色体变异"],u:"unit12"},
            {q:"生物进化的方向是",c:"由自然选择决定",w:["由生物自己决定","随机的","由人决定"],u:"unit12"},
            {q:"生物进化的原材料是",c:"变异",w:["遗传","自然选择","环境"],u:"unit12"},
            {q:"有利变异是指",c:"适应环境的变异",w:["所有变异","不适应环境的变异","人为变异"],u:"unit12"},
            {q:"不利变异是指",c:"不适应环境的变异",w:["所有变异","适应环境的变异","人为变异"],u:"unit12"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genEvolutionB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"长颈鹿脖子长的原因是",c:"自然选择的结果",w:["经常伸脖子","吃高处树叶","遗传获得"],u:"unit12"},
            {q:"抗药性细菌产生的原因是",c:"自然选择保留了抗药性变异",w:["药物诱导产生","细菌主动变异","人为培养"],u:"unit12"},
            {q:"人工选择和自然选择的区别是",c:"选择者不同",w:["结果不同","原理不同","没有区别"],u:"unit12"},
            {q:"人工选择的目的是",c:"满足人类需要",w:["适应自然环境","增加变异","减少变异"],u:"unit12"},
            {q:"生物进化的证据不包括",c:"神话传说",w:["化石","比较解剖学","胚胎学"],u:"unit12"},
            {q:"化石是",c:"保存在地层中的古生物遗体遗迹",w:["现代生物","人工制品","矿物"],u:"unit12"},
            {q:"越古老的地层中",c:"生物越简单越低等",w:["生物越复杂","生物越高等","没有生物"],u:"unit12"},
            {q:"生物进化的总趋势是",c:"由简单到复杂由低等到高等由水生到陆生",w:["由复杂到简单","由高等到低等","由陆生到水生"],u:"unit12"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEvolutionA(),...this.genEvolutionB()]; }
};
