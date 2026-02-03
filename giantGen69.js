// 超大题库生成器69 - 人体健康
const giantGen69 = {
    baseId: 510000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHealthyLifestyle() {
        const qs = []; let id = this.baseId;
        const habits = [
            {habit:"合理膳食",principle:"营养均衡",content:"荤素搭配粗细搭配"},
            {habit:"适量运动",benefit:"增强体质",frequency:"每天运动一小时"},
            {habit:"充足睡眠",benefit:"恢复体力",time:"青少年8-10小时"},
            {habit:"心理健康",importance:"身心健康",method:"调节情绪"},
            {habit:"不吸烟",harm:"损害呼吸系统",disease:"肺癌"},
            {habit:"不酗酒",harm:"损害肝脏",disease:"肝硬化"},
            {habit:"拒绝毒品",harm:"损害神经系统",consequence:"成瘾"}
        ];
        habits.forEach(h => {
            qs.push(this.makeQ(id++,"unit8","easy",`${h.habit}的原则是`,h.principle||h.benefit||h.importance,["无原则","随机","不确定"],`${h.habit}要${h.principle||h.benefit||h.importance}。`));
            if(h.harm) qs.push(this.makeQ(id++,"unit8","easy",`${h.habit}的危害是`,h.harm,["无危害","随机","不确定"],`不${h.habit}会${h.harm}。`));
        });
        this.baseId = id; return qs;
    },

    genCommonDiseases() {
        const qs = []; let id = this.baseId;
        const diseases = [
            {disease:"近视",cause:"用眼不当",prevention:"注意用眼卫生",symptom:"看远处模糊"},
            {disease:"龋齿",cause:"细菌腐蚀牙齿",prevention:"刷牙漱口",symptom:"牙痛"},
            {disease:"肥胖症",cause:"营养过剩运动不足",prevention:"合理饮食适量运动",harm:"心血管疾病"},
            {disease:"贫血",cause:"缺铁或蛋白质",prevention:"补充铁和蛋白质",symptom:"头晕乏力"},
            {disease:"佝偻病",cause:"缺钙或维生素D",prevention:"补钙晒太阳",symptom:"骨骼发育异常"},
            {disease:"夜盲症",cause:"缺维生素A",prevention:"补充维生素A",symptom:"夜间视力下降"}
        ];
        diseases.forEach(d => {
            qs.push(this.makeQ(id++,"unit8","medium",`${d.disease}的原因是`,d.cause,["无原因","随机","不确定"],`${d.disease}由${d.cause}引起。`));
            qs.push(this.makeQ(id++,"unit8","medium",`${d.disease}的预防方法是`,d.prevention,["无方法","随机","不确定"],`${d.disease}可通过${d.prevention}预防。`));
            qs.push(this.makeQ(id++,"unit8","medium",`${d.disease}的症状是`,d.symptom||d.harm,["无症状","随机","不确定"],`${d.disease}表现为${d.symptom||d.harm}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHealthyLifestyle(),...this.genCommonDiseases()]; }
};
