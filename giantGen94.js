// 超大题库生成器94 - 人体泌尿系统详解
const giantGen94 = {
    baseId: 635000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genUrinaryOrgans() {
        const qs = []; let id = this.baseId;
        const organs = [
            {organ:"肾脏",function:"形成尿液",structure:"肾单位",number:"约100万个"},
            {organ:"输尿管",function:"输送尿液",structure:"肌肉管道"},
            {organ:"膀胱",function:"储存尿液",structure:"肌肉囊"},
            {organ:"尿道",function:"排出尿液",structure:"管道"},
            {organ:"肾单位",component:"肾小球肾小囊肾小管",function:"形成尿液的基本单位"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit7","medium",`${o.organ}的功能是`,o.function,["无功能","随机","不确定"],`${o.organ}${o.function}。`));
            qs.push(this.makeQ(id++,"unit7","medium",`${o.organ}的结构是`,o.structure||o.component,["无结构","随机","不确定"],`${o.organ}有${o.structure||o.component}。`));
        });
        this.baseId = id; return qs;
    },

    genUrineFormation() {
        const qs = []; let id = this.baseId;
        const processes = [
            {process:"肾小球滤过",location:"肾小球",product:"原尿",filter:"血细胞和大分子蛋白质不能滤过"},
            {process:"肾小管重吸收",location:"肾小管",reabsorb:"全部葡萄糖大部分水和无机盐",product:"尿液"},
            {process:"原尿成分",content:"水无机盐葡萄糖尿素",similar:"与血浆相似"},
            {process:"尿液成分",content:"水无机盐尿素",absent:"无葡萄糖无蛋白质"}
        ];
        processes.forEach(p => {
            qs.push(this.makeQ(id++,"unit7","hard",`${p.process}的部位是`,p.location||p.content,["无部位","随机","不确定"],`${p.process}在${p.location||p.content}。`));
            if(p.product) qs.push(this.makeQ(id++,"unit7","hard",`${p.process}的产物是`,p.product,["无产物","随机","不确定"],`${p.process}产生${p.product}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genUrinaryOrgans(),...this.genUrineFormation()]; }
};
