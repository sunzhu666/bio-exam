// 超大题库生成器150 - 综合应用题C
const giantGen150 = {
    baseId: 915000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genComprehensiveAppE() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列属于先天性行为的是",c:"蜜蜂采蜜",w:["小狗算术","鹦鹉学舌","猴子骑车"],u:"unit1"},
            {q:"下列属于学习行为的是",c:"黑猩猩钓白蚁",w:["蜘蛛结网","蜜蜂采蜜","鸟类迁徙"],u:"unit1"},
            {q:"下列属于社会行为的是",c:"蚂蚁分工合作",w:["蜘蛛结网","青蛙冬眠","蝴蝶采蜜"],u:"unit1"},
            {q:"下列不属于传染病的是",c:"糖尿病",w:["流感","肺结核","艾滋病"],u:"unit9"},
            {q:"传染病流行的三个环节是",c:"传染源传播途径易感人群",w:["病原体传染源传播途径","传染源病原体易感人群","传播途径易感人群病原体"],u:"unit9"},
            {q:"接种疫苗属于",c:"保护易感人群",w:["控制传染源","切断传播途径","消灭病原体"],u:"unit9"},
            {q:"下列属于非特异性免疫的是",c:"皮肤的屏障作用",w:["接种疫苗","患过麻疹不再患","注射抗体"],u:"unit9"},
            {q:"下列属于特异性免疫的是",c:"接种疫苗后产生抗体",w:["皮肤屏障","吞噬细胞吞噬病菌","溶菌酶杀菌"],u:"unit9"},
            {q:"抗体的化学本质是",c:"蛋白质",w:["糖类","脂肪","核酸"],u:"unit9"},
            {q:"产生抗体的细胞是",c:"淋巴细胞",w:["红细胞","血小板","吞噬细胞"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genComprehensiveAppF() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"下列关于显微镜使用正确的是",c:"先用低倍镜观察",w:["先用高倍镜","直接用油镜","不需要调焦"],u:"unit2"},
            {q:"制作临时装片时盖盖玻片应该",c:"一边先接触水滴缓慢放下",w:["直接盖上","快速放下","不用盖"],u:"unit2"},
            {q:"探究实验中设置对照组的目的是",c:"作为比较的标准",w:["增加变量","减少材料","节省时间"],u:"unit2"},
            {q:"探究实验中控制变量的原则是",c:"只改变一个变量其他相同",w:["改变所有变量","不控制变量","随意改变"],u:"unit2"},
            {q:"验证光合作用产生淀粉的试剂是",c:"碘液",w:["酒精","石灰水","盐酸"],u:"unit4"},
            {q:"验证呼吸作用产生二氧化碳的试剂是",c:"澄清石灰水",w:["碘液","酒精","盐酸"],u:"unit4"},
            {q:"探究唾液消化淀粉的水浴温度是",c:"37度",w:["0度","100度","50度"],u:"unit5"},
            {q:"科学探究的一般步骤是",c:"提出问题作出假设制定计划实施计划得出结论",w:["只有实验","只有观察","随意进行"],u:"unit2"},
            {q:"探究实验重复多次的目的是",c:"减少误差提高可靠性",w:["浪费时间","增加变量","减少材料"],u:"unit2"},
            {q:"下列不属于科学探究方法的是",c:"凭空想象",w:["观察法","实验法","调查法"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genComprehensiveAppE(),...this.genComprehensiveAppF()]; }
};
