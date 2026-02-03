// 超大题库生成器10 - 环境保护详细
const giantGen10 = {
    baseId: 215000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPollution() {
        const qs = []; let id = this.baseId;
        const pollutions = [
            {type:"水污染",source:"工业废水生活污水",harm:"破坏水生态系统",measure:"污水处理"},
            {type:"大气污染",source:"工业废气汽车尾气",harm:"酸雨温室效应",measure:"减少排放"},
            {type:"土壤污染",source:"农药化肥重金属",harm:"影响农作物生长",measure:"减少使用"},
            {type:"噪声污染",source:"交通工业建筑",harm:"影响听力和健康",measure:"隔音降噪"},
            {type:"光污染",source:"过度照明",harm:"影响生物节律",measure:"合理照明"},
            {type:"固体废弃物污染",source:"生活垃圾工业废料",harm:"占用土地污染环境",measure:"分类回收"},
            {type:"温室效应",cause:"CO2等温室气体增加",harm:"全球变暖",measure:"减少碳排放"},
            {type:"酸雨",cause:"SO2和NOx排放",harm:"腐蚀建筑伤害植物",measure:"减少排放"},
            {type:"臭氧层破坏",cause:"氟利昂等物质",harm:"紫外线增强",measure:"禁用氟利昂"},
            {type:"生物入侵",cause:"外来物种引入",harm:"破坏本地生态",measure:"严格检疫"}
        ];
        pollutions.forEach(p => {
            qs.push(this.makeQ(id++,"unit11","medium",`${p.type}的来源或原因是`,p.source || p.cause,["无来源","随机","不确定"],`${p.type}由${p.source || p.cause}引起。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${p.type}的危害是`,p.harm,["无危害","随机","不确定"],`${p.type}会${p.harm}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`防治${p.type}的措施是`,p.measure,["无措施","随机","不确定"],`防治${p.type}要${p.measure}。`));
        });
        this.baseId = id; return qs;
    },

    genConservation() {
        const qs = []; let id = this.baseId;
        const conservations = [
            {method:"建立自然保护区",purpose:"保护珍稀物种和生态系统",example:"卧龙自然保护区"},
            {method:"人工繁殖",purpose:"增加濒危物种数量",example:"大熊猫人工繁殖"},
            {method:"迁地保护",purpose:"在新环境中保护物种",example:"动物园植物园"},
            {method:"就地保护",purpose:"在原生境中保护物种",example:"自然保护区"},
            {method:"退耕还林",purpose:"恢复森林生态系统",example:"长江上游退耕还林"},
            {method:"退牧还草",purpose:"恢复草原生态系统",example:"内蒙古退牧还草"},
            {method:"禁止捕猎",purpose:"保护野生动物",example:"禁止捕杀藏羚羊"},
            {method:"植树造林",purpose:"增加森林覆盖率",example:"三北防护林"},
            {method:"垃圾分类",purpose:"资源回收减少污染",example:"可回收物分类"},
            {method:"节约用水",purpose:"保护水资源",example:"一水多用"}
        ];
        conservations.forEach(c => {
            qs.push(this.makeQ(id++,"unit11","medium",`${c.method}的目的是`,c.purpose,["无目的","随机","不确定"],`${c.method}是为了${c.purpose}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${c.method}的例子是`,c.example,["无例子","随机","不确定"],`${c.method}如${c.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPollution(),...this.genConservation()]; }
};
