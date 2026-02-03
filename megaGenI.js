// 大规模题库生成器I - 实验技能综合
const megaGenI = {
    baseId: 90000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genMicroscopeSkills() {
        const qs = []; let id = this.baseId;
        const skills = [
            {skill:"对光",step:"转动转换器和遮光器",purpose:"使视野明亮",note:"用低倍镜对光"},
            {skill:"放置装片",step:"将装片放在载物台上",purpose:"观察标本",note:"标本对准通光孔"},
            {skill:"调焦",step:"先粗后细调节",purpose:"使物像清晰",note:"眼睛看物镜下降"},
            {skill:"换高倍镜",step:"转动转换器",purpose:"放大观察",note:"只用细准焦螺旋"},
            {skill:"移动装片",step:"向相反方向移动",purpose:"找到目标",note:"物像移动方向相反"},
            {skill:"清洁镜头",step:"用擦镜纸擦拭",purpose:"保持清洁",note:"不能用手或布"},
            {skill:"收镜",step:"取下装片、转低倍镜",purpose:"保护显微镜",note:"镜筒下降到最低"}
        ];
        skills.forEach(s => {
            qs.push(this.makeQ(id++,"unit2","medium",`显微镜${s.skill}的操作是`,s.step,["随意操作","不需操作","跳过此步"],`${s.skill}需要${s.step}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`显微镜${s.skill}的目的是`,s.purpose,["无目的","有害","降低效果"],`${s.skill}的目的是${s.purpose}。`));
            qs.push(this.makeQ(id++,"unit2","easy",`显微镜${s.skill}时应注意`,s.note,["无需注意","随意","不重要"],`${s.skill}时注意${s.note}。`));
        });
        this.baseId = id; return qs;
    },

    genSlidePreparation() {
        const qs = []; let id = this.baseId;
        const slides = [
            {name:"洋葱表皮细胞",material:"洋葱鳞片叶内表皮",liquid:"清水",stain:"碘液",observe:"细胞壁、细胞核、液泡"},
            {name:"人口腔上皮细胞",material:"口腔内壁",liquid:"生理盐水",stain:"碘液",observe:"细胞膜、细胞核、细胞质"},
            {name:"叶片下表皮",material:"蚕豆叶下表皮",liquid:"清水",stain:"不染色",observe:"气孔、保卫细胞"},
            {name:"根尖细胞",material:"洋葱根尖",liquid:"清水",stain:"碘液",observe:"根冠、分生区、伸长区"},
            {name:"草履虫",material:"草履虫培养液",liquid:"培养液",stain:"不染色",observe:"纤毛、食物泡、伸缩泡"},
            {name:"血涂片",material:"人血",liquid:"无",stain:"瑞氏染液",observe:"红细胞、白细胞、血小板"},
            {name:"花粉",material:"花粉",liquid:"清水",stain:"不染色",observe:"花粉粒形态"}
        ];
        slides.forEach(s => {
            qs.push(this.makeQ(id++,"unit2","medium",`制作${s.name}装片的材料是`,s.material,["石头","金属","塑料"],`${s.name}装片用${s.material}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`制作${s.name}装片时滴加的液体是`,s.liquid,["酒精","盐酸","硫酸"],`${s.name}装片滴加${s.liquid}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`${s.name}装片染色用`,s.stain,["盐酸","硫酸","氢氧化钠"],`${s.name}装片用${s.stain}染色。`));
            qs.push(this.makeQ(id++,"unit2","easy",`观察${s.name}装片可以看到`,s.observe,["无结构","随机","不确定"],`${s.name}装片可观察${s.observe}。`));
        });
        this.baseId = id; return qs;
    },

    genExperimentDesign() {
        const qs = []; let id = this.baseId;
        const designs = [
            {exp:"探究光对种子萌发的影响",variable:"光照",control:"其他条件相同",result:"光照不影响种子萌发"},
            {exp:"探究温度对种子萌发的影响",variable:"温度",control:"其他条件相同",result:"适宜温度促进萌发"},
            {exp:"探究水分对种子萌发的影响",variable:"水分",control:"其他条件相同",result:"适量水分促进萌发"},
            {exp:"探究空气对种子萌发的影响",variable:"空气",control:"其他条件相同",result:"空气促进萌发"},
            {exp:"探究光对光合作用的影响",variable:"光照",control:"其他条件相同",result:"光是光合作用的条件"},
            {exp:"探究二氧化碳对光合作用的影响",variable:"二氧化碳",control:"其他条件相同",result:"二氧化碳是原料"},
            {exp:"探究唾液对淀粉的消化作用",variable:"唾液",control:"其他条件相同",result:"唾液能消化淀粉"},
            {exp:"探究pH对酶活性的影响",variable:"pH值",control:"其他条件相同",result:"酶有最适pH"}
        ];
        designs.forEach(d => {
            qs.push(this.makeQ(id++,"unit4","hard",`"${d.exp}"的变量是`,d.variable,["无变量","随机","不确定"],`该实验的变量是${d.variable}。`));
            qs.push(this.makeQ(id++,"unit4","hard",`"${d.exp}"的对照设置是`,d.control,["无对照","随机对照","不需对照"],`该实验需要${d.control}。`));
            qs.push(this.makeQ(id++,"unit4","medium",`"${d.exp}"的预期结果是`,d.result,["无结果","随机","不确定"],`该实验结果是${d.result}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genMicroscopeSkills(),...this.genSlidePreparation(),...this.genExperimentDesign()]; }
};
