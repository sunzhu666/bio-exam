// 超大题库生成器115 - 生物圈补充
const giantGen115 = {
    baseId: 740000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBiosphereA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"生物圈是",c:"地球上所有生物及其生存环境的总称",w:["只有生物","只有环境","只有大气"],u:"unit11"},
            {q:"生物圈的范围包括",c:"大气圈下层水圈岩石圈上层",w:["只有大气圈","只有水圈","只有岩石圈"],u:"unit11"},
            {q:"生物圈是最大的",c:"生态系统",w:["生物群落","种群","个体"],u:"unit11"},
            {q:"生物圈中生物生存的基本条件是",c:"阳光空气水适宜温度营养物质",w:["只有阳光","只有水","只有空气"],u:"unit11"},
            {q:"生物圈中的碳循环主要通过",c:"光合作用和呼吸作用",w:["只有光合作用","只有呼吸作用","蒸腾作用"],u:"unit11"},
            {q:"生物圈中的水循环主要通过",c:"蒸发降水",w:["光合作用","呼吸作用","消化作用"],u:"unit11"},
            {q:"生物圈中的氮循环需要",c:"固氮微生物",w:["所有植物","所有动物","病毒"],u:"unit11"},
            {q:"生物圈是一个",c:"统一的整体",w:["分散的个体","独立的系统","封闭的系统"],u:"unit11"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genBiosphereB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"保护生物圈的措施不包括",c:"大量砍伐森林",w:["植树造林","保护野生动物","减少污染"],u:"unit11"},
            {q:"温室效应的主要原因是",c:"二氧化碳增多",w:["氧气增多","氮气增多","水蒸气减少"],u:"unit11"},
            {q:"酸雨的主要原因是",c:"二氧化硫和氮氧化物",w:["二氧化碳","氧气","水蒸气"],u:"unit11"},
            {q:"臭氧层破坏的主要原因是",c:"氟利昂等物质",w:["二氧化碳","氧气","水蒸气"],u:"unit11"},
            {q:"水体富营养化的主要原因是",c:"氮磷等营养物质过多",w:["氧气过多","二氧化碳过多","温度过高"],u:"unit11"},
            {q:"生物入侵是指",c:"外来物种破坏当地生态",w:["本地物种增多","所有物种减少","环境改善"],u:"unit11"},
            {q:"可持续发展是指",c:"满足当代需求不损害后代",w:["只满足当代","只考虑后代","不考虑环境"],u:"unit11"},
            {q:"保护生物多样性的根本措施是",c:"保护生物的栖息环境",w:["建动物园","人工繁殖","迁地保护"],u:"unit11"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBiosphereA(),...this.genBiosphereB()]; }
};
