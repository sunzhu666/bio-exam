// 扩展题库生成器9 - 细胞与分子生物学
const extraGenerator9 = {
    baseId: 43000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genCellOrganelles() {
        const qs = []; let id = this.baseId;
        const organelles = [
            {name:"细胞膜",func:"控制物质进出",composition:"磷脂双分子层和蛋白质",location:"细胞最外层"},
            {name:"细胞核",func:"储存遗传信息",composition:"核膜、核仁、染色质",location:"细胞中央"},
            {name:"线粒体",func:"有氧呼吸的主要场所",composition:"双层膜结构",location:"细胞质中"},
            {name:"叶绿体",func:"光合作用的场所",composition:"双层膜和基粒",location:"植物细胞质中"},
            {name:"内质网",func:"蛋白质加工和运输",composition:"单层膜囊状结构",location:"细胞质中"},
            {name:"高尔基体",func:"蛋白质加工和分泌",composition:"扁平囊状结构",location:"细胞质中"},
            {name:"核糖体",func:"蛋白质合成场所",composition:"RNA和蛋白质",location:"细胞质或内质网上"},
            {name:"溶酶体",func:"消化细胞内物质",composition:"单层膜囊状结构",location:"细胞质中"},
            {name:"液泡",func:"储存物质调节渗透压",composition:"单层膜囊状结构",location:"植物细胞质中"},
            {name:"中心体",func:"参与细胞分裂",composition:"两个中心粒",location:"动物细胞质中"}
        ];
        organelles.forEach(o => {
            qs.push(this.makeQ(id++,"unit2","hard",`${o.name}的功能是`,o.func,["无功能","有害细胞","消耗能量"],`${o.name}的功能是${o.func}。`));
            qs.push(this.makeQ(id++,"unit2","hard",`${o.name}的组成是`,o.composition,["无结构","只有水","只有蛋白质"],`${o.name}由${o.composition}组成。`));
        });
        this.baseId = id; return qs;
    },

    genCellDivision() {
        const qs = []; let id = this.baseId;
        const phases = [
            {phase:"间期",event:"DNA复制",duration:"最长",chromosome:"染色质状态"},
            {phase:"前期",event:"染色体出现、核膜消失",duration:"较短",chromosome:"染色体散乱"},
            {phase:"中期",event:"染色体排列在赤道板",duration:"最短",chromosome:"染色体最清晰"},
            {phase:"后期",event:"着丝点分裂、染色体移向两极",duration:"较短",chromosome:"染色体数目加倍"},
            {phase:"末期",event:"核膜重建、细胞质分裂",duration:"较短",chromosome:"染色质状态"}
        ];
        phases.forEach(p => {
            qs.push(this.makeQ(id++,"unit2","hard",`有丝分裂${p.phase}的主要事件是`,p.event,["无变化","细胞死亡","DNA降解"],`${p.phase}主要发生${p.event}。`));
            qs.push(this.makeQ(id++,"unit2","hard",`有丝分裂${p.phase}染色体的状态是`,p.chromosome,["消失","降解","不存在"],`${p.phase}染色体${p.chromosome}。`));
        });
        const comparisons = [
            {type:"有丝分裂",result:"两个相同的子细胞",chromosome:"不变",purpose:"生长和修复"},
            {type:"减数分裂",result:"四个不同的生殖细胞",chromosome:"减半",purpose:"产生配子"},
            {type:"无丝分裂",result:"两个子细胞",chromosome:"不变",purpose:"某些细胞增殖"}
        ];
        comparisons.forEach(c => {
            qs.push(this.makeQ(id++,"unit2","hard",`${c.type}的结果是`,c.result,["细胞死亡","无变化","细胞融合"],`${c.type}产生${c.result}。`));
            qs.push(this.makeQ(id++,"unit2","hard",`${c.type}后染色体数目`,c.chromosome,["加倍","消失","不确定"],`${c.type}后染色体数目${c.chromosome}。`));
        });
        this.baseId = id; return qs;
    },

    genMolecularBiology() {
        const qs = []; let id = this.baseId;
        const molecules = [
            {name:"DNA",composition:"脱氧核糖核苷酸",structure:"双螺旋",func:"储存遗传信息"},
            {name:"RNA",composition:"核糖核苷酸",structure:"单链",func:"传递遗传信息"},
            {name:"蛋白质",composition:"氨基酸",structure:"多肽链",func:"生命活动的承担者"},
            {name:"糖类",composition:"单糖",structure:"多糖链",func:"储能和供能"},
            {name:"脂质",composition:"甘油和脂肪酸",structure:"酯键连接",func:"储能和构成膜"},
            {name:"ATP",composition:"腺苷和磷酸基团",structure:"高能磷酸键",func:"直接供能物质"}
        ];
        molecules.forEach(m => {
            qs.push(this.makeQ(id++,"unit2","hard",`${m.name}的基本组成单位是`,m.composition,["无机盐","水","金属离子"],`${m.name}由${m.composition}组成。`));
            qs.push(this.makeQ(id++,"unit2","hard",`${m.name}的主要功能是`,m.func,["无功能","有害生命","消耗能量"],`${m.name}的功能是${m.func}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genCellOrganelles(),...this.genCellDivision(),...this.genMolecularBiology()]; }
};
