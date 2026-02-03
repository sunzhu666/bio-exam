// 超大题库生成器134 - 实验技能深化
const giantGen134 = {
    baseId: 835000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genExperimentA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"显微镜使用时先用什么物镜观察",c:"低倍物镜",w:["高倍物镜","油镜","目镜"],u:"unit2"},
            {q:"显微镜调焦时先用什么准焦螺旋",c:"粗准焦螺旋",w:["细准焦螺旋","反光镜","光圈"],u:"unit2"},
            {q:"显微镜下物像移动方向与实际",c:"相反",w:["相同","垂直","无关"],u:"unit2"},
            {q:"制作临时装片时滴加的液体是",c:"清水或生理盐水",w:["酒精","碘液","盐酸"],u:"unit2"},
            {q:"盖盖玻片时应该",c:"一边先接触水滴缓慢放下",w:["直接盖上","快速放下","不用盖"],u:"unit2"},
            {q:"染色时常用的染色剂是",c:"碘液或亚甲基蓝",w:["酒精","盐酸","清水"],u:"unit2"},
            {q:"观察植物细胞时常用的材料是",c:"洋葱表皮",w:["血液","肌肉","骨骼"],u:"unit2"},
            {q:"观察动物细胞时常用的材料是",c:"口腔上皮细胞",w:["洋葱表皮","叶片","根尖"],u:"unit2"},
            {q:"探究实验中对照组的作用是",c:"作为比较的标准",w:["增加变量","减少误差","节省材料"],u:"unit2"},
            {q:"探究实验中变量控制的原则是",c:"只改变一个变量其他相同",w:["改变所有变量","不控制变量","随意改变"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genExperimentB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"探究光合作用需要光的实验中遮光处理的目的是",c:"设置对照",w:["增加光照","减少蒸腾","保护叶片"],u:"unit4"},
            {q:"探究光合作用产生淀粉前要将植物",c:"放在黑暗处一昼夜",w:["放在阳光下","浸泡在水中","加热处理"],u:"unit4"},
            {q:"检验淀粉前要用酒精处理叶片的目的是",c:"脱去叶绿素",w:["杀死细胞","软化叶片","增加颜色"],u:"unit4"},
            {q:"探究种子萌发条件时设置多组实验的目的是",c:"控制单一变量",w:["增加种子数量","节省时间","减少误差"],u:"unit3"},
            {q:"探究唾液对淀粉消化作用时水浴温度是",c:"37度",w:["0度","100度","50度"],u:"unit5"},
            {q:"探究唾液消化淀粉的检验试剂是",c:"碘液",w:["酒精","盐酸","石灰水"],u:"unit5"},
            {q:"测定种子呼吸作用产生二氧化碳的试剂是",c:"澄清石灰水",w:["碘液","酒精","盐酸"],u:"unit4"},
            {q:"测定种子呼吸作用消耗氧气的方法是",c:"燃烧的蜡烛熄灭",w:["石灰水变浑浊","碘液变蓝","温度升高"],u:"unit4"},
            {q:"探究实验重复多次的目的是",c:"减少误差提高可靠性",w:["浪费时间","增加变量","减少材料"],u:"unit2"},
            {q:"科学探究的一般步骤是",c:"提出问题作出假设制定计划实施计划得出结论",w:["只有实验","只有观察","随意进行"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genExperimentA(),...this.genExperimentB()]; }
};
