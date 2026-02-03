// 超大题库生成器64 - 植物生理综合
const giantGen64 = {
    baseId: 485000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genWaterAbsorption() {
        const qs = []; let id = this.baseId;
        const facts = [
            {topic:"根吸水的主要部位",answer:"成熟区",reason:"有大量根毛"},
            {topic:"根毛的作用",answer:"增大吸收面积",structure:"表皮细胞突起"},
            {topic:"植物吸水的原理",answer:"渗透作用",condition:"细胞液浓度大于土壤溶液"},
            {topic:"水分运输的途径",answer:"导管",direction:"从根到茎到叶"},
            {topic:"蒸腾作用的部位",answer:"叶片气孔",structure:"保卫细胞"},
            {topic:"蒸腾作用的意义",answer:"促进水分吸收和运输",effect:"降低叶片温度"}
        ];
        facts.forEach(f => {
            qs.push(this.makeQ(id++,"unit3","medium",`${f.topic}是`,f.answer,["无答案","随机","不确定"],`${f.topic}是${f.answer}。`));
            if(f.reason) qs.push(this.makeQ(id++,"unit3","medium",`${f.topic}的原因是`,f.reason,["无原因","随机","不确定"],`因为${f.reason}。`));
        });
        this.baseId = id; return qs;
    },

    genMineralAbsorption() {
        const qs = []; let id = this.baseId;
        const minerals = [
            {mineral:"氮",function:"合成蛋白质核酸",deficiency:"叶片发黄"},
            {mineral:"磷",function:"合成ATP核酸",deficiency:"叶片暗绿"},
            {mineral:"钾",function:"促进光合作用",deficiency:"叶片边缘焦枯"},
            {mineral:"钙",function:"构成细胞壁",deficiency:"顶芽死亡"},
            {mineral:"镁",function:"构成叶绿素",deficiency:"叶脉间变黄"},
            {mineral:"铁",function:"合成叶绿素",deficiency:"幼叶变黄"}
        ];
        minerals.forEach(m => {
            qs.push(this.makeQ(id++,"unit3","hard",`${m.mineral}元素的作用是`,m.function,["无作用","随机","不确定"],`${m.mineral}${m.function}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`缺${m.mineral}的症状是`,m.deficiency,["无症状","随机","不确定"],`缺${m.mineral}会${m.deficiency}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genWaterAbsorption(),...this.genMineralAbsorption()]; }
};
