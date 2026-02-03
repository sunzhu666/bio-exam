// 超大题库生成器19 - 人体血液
const giantGen19 = {
    baseId: 260000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBloodComponents() {
        const qs = []; let id = this.baseId;
        const components = [
            {component:"红细胞",func:"运输氧气",feature:"无细胞核双凹圆盘形",count:"男500万女420万/mm³"},
            {component:"白细胞",func:"吞噬病菌",feature:"有细胞核能变形",count:"5000-10000/mm³"},
            {component:"血小板",func:"止血凝血",feature:"无细胞核最小",count:"10-30万/mm³"},
            {component:"血浆",func:"运载血细胞和营养物质",feature:"淡黄色液体",content:"90%水"},
            {component:"血红蛋白",func:"与氧结合运输氧",feature:"含铁的蛋白质",location:"红细胞内"},
            {component:"抗体",func:"特异性免疫",feature:"蛋白质",location:"血浆中"},
            {component:"纤维蛋白原",func:"参与凝血",feature:"可溶性蛋白",location:"血浆中"},
            {component:"血清",func:"不含纤维蛋白原的血浆",feature:"血液凝固后析出",use:"制备抗体"}
        ];
        components.forEach(c => {
            qs.push(this.makeQ(id++,"unit7","medium",`${c.component}的功能是`,c.func,["无功能","随机","不确定"],`${c.component}的功能是${c.func}。`));
            qs.push(this.makeQ(id++,"unit7","medium",`${c.component}的特点是`,c.feature,["无特点","随机","不确定"],`${c.component}${c.feature}。`));
            if(c.count) {
                qs.push(this.makeQ(id++,"unit7","hard",`${c.component}的正常数量是`,c.count,["无数量","随机","不确定"],`${c.component}数量是${c.count}。`));
            }
            if(c.location) {
                qs.push(this.makeQ(id++,"unit7","medium",`${c.component}位于`,c.location,["无位置","随机","不确定"],`${c.component}在${c.location}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genBloodDiseases() {
        const qs = []; let id = this.baseId;
        const diseases = [
            {disease:"贫血",cause:"红细胞或血红蛋白减少",symptom:"头晕乏力",treatment:"补充铁和蛋白质"},
            {disease:"白血病",cause:"白细胞异常增多",symptom:"发热出血感染",treatment:"化疗骨髓移植"},
            {disease:"血友病",cause:"缺乏凝血因子",symptom:"出血不止",treatment:"补充凝血因子"},
            {disease:"镰刀型细胞贫血症",cause:"血红蛋白异常",symptom:"贫血疼痛",treatment:"对症治疗"},
            {disease:"地中海贫血",cause:"血红蛋白合成障碍",symptom:"贫血黄疸",treatment:"输血"},
            {disease:"血小板减少症",cause:"血小板减少",symptom:"出血点瘀斑",treatment:"补充血小板"},
            {disease:"高血压",cause:"血压持续升高",symptom:"头痛头晕",treatment:"降压药"},
            {disease:"动脉硬化",cause:"血管壁增厚变硬",symptom:"血流不畅",treatment:"控制饮食运动"}
        ];
        diseases.forEach(d => {
            qs.push(this.makeQ(id++,"unit7","hard",`${d.disease}的原因是`,d.cause,["无原因","随机","不确定"],`${d.disease}由${d.cause}引起。`));
            qs.push(this.makeQ(id++,"unit7","hard",`${d.disease}的症状是`,d.symptom,["无症状","随机","不确定"],`${d.disease}表现为${d.symptom}。`));
            qs.push(this.makeQ(id++,"unit7","hard",`${d.disease}的治疗方法是`,d.treatment,["无治疗","随机","不确定"],`${d.disease}治疗方法是${d.treatment}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBloodComponents(),...this.genBloodDiseases()]; }
};
