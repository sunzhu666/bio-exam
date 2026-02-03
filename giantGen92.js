// 超大题库生成器92 - 人体呼吸系统详解
const giantGen92 = {
    baseId: 625000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genRespiratoryOrgans() {
        const qs = []; let id = this.baseId;
        const organs = [
            {organ:"鼻腔",function:"温暖湿润清洁空气",structure:"鼻毛黏膜"},
            {organ:"咽",function:"空气和食物的共同通道",connection:"连接口腔鼻腔"},
            {organ:"喉",function:"发声器官",structure:"声带"},
            {organ:"气管",function:"输送空气",structure:"C形软骨",lining:"纤毛黏膜"},
            {organ:"支气管",function:"分支进入肺",structure:"逐渐变细"},
            {organ:"肺",function:"气体交换的场所",structure:"肺泡",number:"约3亿个"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit6","medium",`${o.organ}的功能是`,o.function,["无功能","随机","不确定"],`${o.organ}${o.function}。`));
            qs.push(this.makeQ(id++,"unit6","medium",`${o.organ}的结构是`,o.structure,["无结构","随机","不确定"],`${o.organ}有${o.structure}。`));
        });
        this.baseId = id; return qs;
    },

    genGasExchange() {
        const qs = []; let id = this.baseId;
        const processes = [
            {process:"肺泡与血液气体交换",O2:"从肺泡进入血液",CO2:"从血液进入肺泡"},
            {process:"组织细胞与血液气体交换",O2:"从血液进入细胞",CO2:"从细胞进入血液"},
            {process:"呼吸运动",吸气:"膈肌收缩胸廓扩大",呼气:"膈肌舒张胸廓缩小"},
            {process:"气体交换原理",principle:"气体扩散",direction:"高浓度到低浓度"}
        ];
        processes.forEach(p => {
            qs.push(this.makeQ(id++,"unit6","hard",`${p.process}中氧气的方向是`,p.O2||p.吸气||p.principle,["无方向","随机","不确定"],`${p.process}${p.O2||p.吸气||p.principle}。`));
            if(p.CO2) qs.push(this.makeQ(id++,"unit6","hard",`${p.process}中二氧化碳的方向是`,p.CO2,["无方向","随机","不确定"],`${p.process}${p.CO2}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genRespiratoryOrgans(),...this.genGasExchange()]; }
};
