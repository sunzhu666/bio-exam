// 超大题库生成器174 - 专题复习D
const giantGen174 = {
    baseId: 1035000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genTopicG() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"呼吸系统由什么组成",c:"呼吸道和肺",w:["只有肺","只有呼吸道","消化道和肺"],u:"unit6"},
            {q:"呼吸道的组成顺序是",c:"鼻咽喉气管支气管",w:["鼻气管咽喉","咽鼻喉气管","气管鼻咽喉"],u:"unit6"},
            {q:"呼吸道的功能是",c:"气体进出的通道温暖湿润清洁空气",w:["进行气体交换","消化食物","运输血液"],u:"unit6"},
            {q:"气体交换的场所是",c:"肺泡",w:["气管","支气管","鼻腔"],u:"unit6"},
            {q:"肺泡适于气体交换的特点是",c:"数量多壁薄外有毛细血管",w:["数量少壁厚","没有毛细血管","体积大"],u:"unit6"},
            {q:"呼吸运动包括",c:"吸气和呼气",w:["只有吸气","只有呼气","气体交换"],u:"unit6"},
            {q:"吸气时膈肌的状态是",c:"收缩下降",w:["舒张上升","不变","先收缩后舒张"],u:"unit6"},
            {q:"呼气时膈肌的状态是",c:"舒张上升",w:["收缩下降","不变","先舒张后收缩"],u:"unit6"},
            {q:"吸气时胸廓的变化是",c:"扩大",w:["缩小","不变","先扩大后缩小"],u:"unit6"},
            {q:"呼气时胸廓的变化是",c:"缩小",w:["扩大","不变","先缩小后扩大"],u:"unit6"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"easy",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genTopicH() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"肺泡内气体交换的原理是",c:"气体扩散作用",w:["主动运输","渗透作用","呼吸运动"],u:"unit6"},
            {q:"组织细胞内气体交换的原理是",c:"气体扩散作用",w:["主动运输","渗透作用","呼吸运动"],u:"unit6"},
            {q:"吸入气体中氧气含量约为",c:"21%",w:["16%","4%","78%"],u:"unit6"},
            {q:"呼出气体中氧气含量约为",c:"16%",w:["21%","4%","78%"],u:"unit6"},
            {q:"吸入气体中二氧化碳含量约为",c:"0.03%",w:["4%","16%","21%"],u:"unit6"},
            {q:"呼出气体中二氧化碳含量约为",c:"4%",w:["0.03%","16%","21%"],u:"unit6"},
            {q:"呼吸作用的意义是",c:"分解有机物释放能量供生命活动",w:["合成有机物","储存能量","吸收氧气"],u:"unit6"},
            {q:"人体呼吸作用最旺盛的器官是",c:"肝脏",w:["心脏","肺","肾脏"],u:"unit6"},
            {q:"剧烈运动时呼吸加快的原因是",c:"需要更多氧气分解有机物",w:["需要更多二氧化碳","减少能量消耗","降低体温"],u:"unit6"},
            {q:"人工呼吸的原理是",c:"模拟呼吸运动",w:["直接供氧","心脏按压","药物刺激"],u:"unit6"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genTopicG(),...this.genTopicH()]; }
};
