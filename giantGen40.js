// 超大题库生成器40 - 综合应用
const giantGen40 = {
    baseId: 365000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genDailyLife() {
        const qs = []; let id = this.baseId;
        const applications = [
            {situation:"食物保鲜",principle:"低温抑制微生物",method:"冷藏冷冻",reason:"降低酶活性"},
            {situation:"伤口消毒",principle:"杀死病原微生物",method:"酒精碘伏",reason:"蛋白质变性"},
            {situation:"腌制食品",principle:"高盐抑制微生物",method:"盐渍",reason:"细胞失水"},
            {situation:"晒干食品",principle:"减少水分",method:"日晒风干",reason:"微生物无法生存"},
            {situation:"真空包装",principle:"隔绝氧气",method:"抽真空",reason:"抑制需氧菌"},
            {situation:"高温灭菌",principle:"杀死微生物",method:"煮沸高压",reason:"蛋白质变性"},
            {situation:"发酵食品",principle:"利用微生物代谢",method:"酵母乳酸菌",reason:"产生有益物质"},
            {situation:"堆肥",principle:"微生物分解有机物",method:"堆积发酵",reason:"产生肥料"},
            {situation:"污水处理",principle:"微生物分解有机物",method:"活性污泥法",reason:"净化水质"},
            {situation:"沼气生产",principle:"厌氧发酵",method:"沼气池",reason:"产生甲烷"}
        ];
        applications.forEach(a => {
            qs.push(this.makeQ(id++,"unit13","medium",`${a.situation}的原理是`,a.principle,["无原理","随机","不确定"],`${a.situation}利用${a.principle}。`));
            qs.push(this.makeQ(id++,"unit13","medium",`${a.situation}的方法是`,a.method,["无方法","随机","不确定"],`${a.situation}用${a.method}。`));
            qs.push(this.makeQ(id++,"unit13","hard",`${a.situation}的原因是`,a.reason,["无原因","随机","不确定"],`${a.situation}因为${a.reason}。`));
        });
        this.baseId = id; return qs;
    },

    genAgriculture() {
        const qs = []; let id = this.baseId;
        const practices = [
            {practice:"合理密植",principle:"充分利用光能",benefit:"提高产量",factor:"光合作用"},
            {practice:"间作套种",principle:"充分利用空间",benefit:"提高土地利用率",factor:"生态位"},
            {practice:"轮作",principle:"减少病虫害",benefit:"保持土壤肥力",factor:"养分平衡"},
            {practice:"施肥",principle:"补充矿质元素",benefit:"促进生长",factor:"营养需求"},
            {practice:"灌溉",principle:"补充水分",benefit:"保证生长",factor:"蒸腾作用"},
            {practice:"修剪",principle:"调节生长",benefit:"提高产量品质",factor:"顶端优势"},
            {practice:"嫁接",principle:"利用优良性状",benefit:"保持品种特性",factor:"无性繁殖"},
            {practice:"杂交育种",principle:"基因重组",benefit:"获得优良品种",factor:"遗传变异"},
            {practice:"生物防治",principle:"利用天敌",benefit:"减少农药使用",factor:"生态平衡"},
            {practice:"温室栽培",principle:"控制环境条件",benefit:"反季节生产",factor:"环境因素"}
        ];
        practices.forEach(p => {
            qs.push(this.makeQ(id++,"unit13","medium",`${p.practice}的原理是`,p.principle,["无原理","随机","不确定"],`${p.practice}利用${p.principle}。`));
            qs.push(this.makeQ(id++,"unit13","medium",`${p.practice}的好处是`,p.benefit,["无好处","随机","不确定"],`${p.practice}可以${p.benefit}。`));
            qs.push(this.makeQ(id++,"unit13","hard",`${p.practice}涉及的生物学因素是`,p.factor,["无因素","随机","不确定"],`${p.practice}涉及${p.factor}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genDailyLife(),...this.genAgriculture()]; }
};
