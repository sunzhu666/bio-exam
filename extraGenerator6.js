// 扩展题库生成器6 - 健康与疾病
const extraGenerator6 = {
    baseId: 34000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genInfectiousDiseases() {
        const qs = []; let id = this.baseId;
        const diseases = [
            {name:"流行性感冒",pathogen:"流感病毒",route:"飞沫传播",prevent:"接种疫苗"},
            {name:"肺结核",pathogen:"结核杆菌",route:"飞沫传播",prevent:"接种卡介苗"},
            {name:"艾滋病",pathogen:"HIV病毒",route:"血液、性接触、母婴",prevent:"避免高危行为"},
            {name:"乙型肝炎",pathogen:"乙肝病毒",route:"血液、母婴",prevent:"接种乙肝疫苗"},
            {name:"狂犬病",pathogen:"狂犬病毒",route:"动物咬伤",prevent:"接种狂犬疫苗"},
            {name:"破伤风",pathogen:"破伤风杆菌",route:"伤口感染",prevent:"清洁伤口、接种疫苗"},
            {name:"霍乱",pathogen:"霍乱弧菌",route:"消化道传播",prevent:"注意饮食卫生"},
            {name:"痢疾",pathogen:"痢疾杆菌",route:"消化道传播",prevent:"注意饮食卫生"},
            {name:"疟疾",pathogen:"疟原虫",route:"蚊虫叮咬",prevent:"防蚊灭蚊"},
            {name:"血吸虫病",pathogen:"血吸虫",route:"接触疫水",prevent:"避免接触疫水"},
            {name:"蛔虫病",pathogen:"蛔虫",route:"消化道传播",prevent:"注意饮食卫生"},
            {name:"手足口病",pathogen:"肠道病毒",route:"接触传播",prevent:"注意卫生"}
        ];
        diseases.forEach(d => {
            qs.push(this.makeQ(id++,"unit1","medium",`${d.name}的病原体是`,d.pathogen,["细胞","组织","器官"],`${d.name}由${d.pathogen}引起。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${d.name}的传播途径是`,d.route,["遗传","自然发生","空气中自动产生"],`${d.name}通过${d.route}传播。`));
            qs.push(this.makeQ(id++,"unit1","easy",`预防${d.name}的措施是`,d.prevent,["不采取措施","增加接触","传播病原体"],`预防${d.name}应${d.prevent}。`));
        });
        this.baseId = id; return qs;
    },

    genImmunity() {
        const qs = []; let id = this.baseId;
        const immunity = [
            {type:"非特异性免疫",example:"皮肤屏障",feature:"先天具有",target:"多种病原体"},
            {type:"非特异性免疫",example:"溶菌酶",feature:"先天具有",target:"多种细菌"},
            {type:"非特异性免疫",example:"吞噬细胞",feature:"先天具有",target:"多种病原体"},
            {type:"特异性免疫",example:"抗体",feature:"后天获得",target:"特定病原体"},
            {type:"特异性免疫",example:"淋巴细胞",feature:"后天获得",target:"特定病原体"},
            {type:"特异性免疫",example:"接种疫苗",feature:"后天获得",target:"特定病原体"},
            {type:"自然免疫",example:"患病后获得免疫",feature:"自然获得",target:"特定病原体"},
            {type:"人工免疫",example:"接种疫苗",feature:"人工获得",target:"特定病原体"}
        ];
        immunity.forEach(i => {
            qs.push(this.makeQ(id++,"unit1","medium",`${i.example}属于`,i.type,["过敏反应","自身免疫病","免疫缺陷"],`${i.example}属于${i.type}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${i.type}的特点是`,i.feature,["后天丧失","不能遗传","只针对一种"],`${i.type}${i.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genHealthyLifestyle() {
        const qs = []; let id = this.baseId;
        const habits = [
            {habit:"合理膳食",benefit:"保证营养均衡",harm:"营养不良或肥胖"},
            {habit:"适量运动",benefit:"增强体质",harm:"肥胖、心血管疾病"},
            {habit:"充足睡眠",benefit:"恢复体力",harm:"免疫力下降"},
            {habit:"戒烟限酒",benefit:"保护呼吸系统和肝脏",harm:"肺癌、肝硬化"},
            {habit:"心理平衡",benefit:"保持心理健康",harm:"心理疾病"},
            {habit:"个人卫生",benefit:"预防传染病",harm:"感染疾病"},
            {habit:"用眼卫生",benefit:"保护视力",harm:"近视"},
            {habit:"正确坐姿",benefit:"保护脊柱",harm:"脊柱弯曲"},
            {habit:"远离毒品",benefit:"保护神经系统",harm:"成瘾、器官损伤"},
            {habit:"安全用药",benefit:"治疗疾病",harm:"药物中毒"}
        ];
        habits.forEach(h => {
            qs.push(this.makeQ(id++,"unit1","easy",`${h.habit}的好处是`,h.benefit,["无好处","有害健康","增加疾病"],`${h.habit}可以${h.benefit}。`));
            qs.push(this.makeQ(id++,"unit1","easy",`不${h.habit}可能导致`,h.harm,["更健康","无影响","增强免疫"],`不${h.habit}可能导致${h.harm}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genInfectiousDiseases(),...this.genImmunity(),...this.genHealthyLifestyle()]; }
};
