// 超大题库生成器67 - 遗传病详解
const giantGen67 = {
    baseId: 500000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genGeneticDiseases() {
        const qs = []; let id = this.baseId;
        const diseases = [
            {disease:"白化病",type:"常染色体隐性",symptom:"皮肤毛发白色",gene:"缺乏酪氨酸酶"},
            {disease:"苯丙酮尿症",type:"常染色体隐性",symptom:"智力低下",gene:"缺乏苯丙氨酸羟化酶"},
            {disease:"镰刀型细胞贫血症",type:"常染色体隐性",symptom:"红细胞镰刀形",gene:"血红蛋白基因突变"},
            {disease:"红绿色盲",type:"X染色体隐性",symptom:"不能分辨红绿色",feature:"男性多于女性"},
            {disease:"血友病",type:"X染色体隐性",symptom:"凝血障碍",feature:"男性多于女性"},
            {disease:"抗维生素D佝偻病",type:"X染色体显性",symptom:"骨骼发育异常",feature:"女性多于男性"},
            {disease:"21三体综合征",type:"染色体数目异常",symptom:"智力低下特殊面容",chromosome:"多一条21号染色体"}
        ];
        diseases.forEach(d => {
            qs.push(this.makeQ(id++,"unit10","hard",`${d.disease}的遗传类型是`,d.type,["无类型","随机","不确定"],`${d.disease}是${d.type}遗传病。`));
            qs.push(this.makeQ(id++,"unit10","hard",`${d.disease}的症状是`,d.symptom,["无症状","随机","不确定"],`${d.disease}表现为${d.symptom}。`));
            if(d.feature) qs.push(this.makeQ(id++,"unit10","hard",`${d.disease}的特点是`,d.feature,["无特点","随机","不确定"],`${d.disease}${d.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genGeneticCounseling() {
        const qs = []; let id = this.baseId;
        const topics = [
            {topic:"遗传咨询",purpose:"预防遗传病",method:"家系调查"},
            {topic:"产前诊断",method:"羊水检查B超",purpose:"检测胎儿异常"},
            {topic:"禁止近亲结婚",reason:"增加隐性遗传病概率",law:"婚姻法规定"},
            {topic:"遗传病预防",measure:"遗传咨询产前诊断",importance:"优生优育"},
            {topic:"基因检测",method:"DNA分析",application:"诊断遗传病"}
        ];
        topics.forEach(t => {
            qs.push(this.makeQ(id++,"unit10","medium",`${t.topic}的目的是`,t.purpose||t.reason,["无目的","随机","不确定"],`${t.topic}为了${t.purpose||t.reason}。`));
            qs.push(this.makeQ(id++,"unit10","medium",`${t.topic}的方法是`,t.method||t.measure,["无方法","随机","不确定"],`${t.topic}通过${t.method||t.measure}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genGeneticDiseases(),...this.genGeneticCounseling()]; }
};
