// 超大题库生成器54 - 生物技术
const giantGen54 = {
    baseId: 435000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genFermentation() {
        const qs = []; let id = this.baseId;
        const processes = [
            {process:"酒精发酵",organism:"酵母菌",condition:"无氧",product:"酒精和二氧化碳"},
            {process:"乳酸发酵",organism:"乳酸菌",condition:"无氧",product:"乳酸"},
            {process:"醋酸发酵",organism:"醋酸菌",condition:"有氧",product:"醋酸"},
            {process:"制作酸奶",organism:"乳酸菌",temperature:"适宜温度",time:"数小时"},
            {process:"制作泡菜",organism:"乳酸菌",condition:"密封无氧",time:"数天"},
            {process:"酿酒",organism:"酵母菌",material:"粮食",process2:"先有氧后无氧"},
            {process:"制作面包",organism:"酵母菌",principle:"产生二氧化碳",result:"面包松软"}
        ];
        processes.forEach(p => {
            qs.push(this.makeQ(id++,"unit2","medium",`${p.process}利用的微生物是`,p.organism,["无微生物","随机","不确定"],`${p.process}利用${p.organism}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`${p.process}的条件是`,p.condition||p.temperature,["无条件","随机","不确定"],`${p.process}需要${p.condition||p.temperature}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`${p.process}的产物是`,p.product||p.result,["无产物","随机","不确定"],`${p.process}产生${p.product||p.result}。`));
        });
        this.baseId = id; return qs;
    },

    genGeneticEngineering() {
        const qs = []; let id = this.baseId;
        const techs = [
            {tech:"转基因技术",definition:"将外源基因导入生物体",tool:"限制酶和DNA连接酶"},
            {tech:"克隆技术",definition:"无性繁殖产生相同个体",example:"克隆羊多莉"},
            {tech:"组织培养",principle:"细胞全能性",application:"快速繁殖植物"},
            {tech:"杂交育种",principle:"基因重组",example:"杂交水稻"},
            {tech:"诱变育种",method:"物理或化学诱变",principle:"基因突变"}
        ];
        techs.forEach(t => {
            qs.push(this.makeQ(id++,"unit10","hard",`${t.tech}的定义是`,t.definition||t.principle,["无定义","随机","不确定"],`${t.tech}是${t.definition||t.principle}。`));
            if(t.tool) qs.push(this.makeQ(id++,"unit10","hard",`${t.tech}使用的工具是`,t.tool,["无工具","随机","不确定"],`${t.tech}使用${t.tool}。`));
            if(t.example) qs.push(this.makeQ(id++,"unit10","hard",`${t.tech}的例子是`,t.example,["无例子","随机","不确定"],`${t.tech}如${t.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genFermentation(),...this.genGeneticEngineering()]; }
};
