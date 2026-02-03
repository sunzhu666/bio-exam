// 大规模题库生成器H - 进化与分类综合
const megaGenH = {
    baseId: 85000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEvolutionTheory() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"过度繁殖",meaning:"生物产生的后代数量超过环境容纳量",example:"一对家蝇一年可繁殖数亿只"},
            {concept:"生存斗争",meaning:"生物为获取资源而进行的竞争",example:"同种植物争夺阳光"},
            {concept:"遗传变异",meaning:"生物具有遗传和变异的特性",example:"同一窝小狗毛色不同"},
            {concept:"适者生存",meaning:"适应环境的个体生存下来",example:"长颈鹿的长颈"},
            {concept:"自然选择",meaning:"自然环境对生物的选择作用",example:"抗药性细菌的产生"},
            {concept:"人工选择",meaning:"人类根据需要选择生物",example:"培育高产水稻"},
            {concept:"共同祖先",meaning:"不同生物来自同一祖先",example:"人和猿的共同祖先"},
            {concept:"适应性",meaning:"生物对环境的适应特征",example:"仙人掌的刺"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,"unit12","medium",`${c.concept}的含义是`,c.meaning,["无意义","随机","有害"],`${c.concept}是指${c.meaning}。`));
            qs.push(this.makeQ(id++,"unit12","easy",`${c.example}说明了`,c.concept,["无关系","随机","有害"],`${c.example}是${c.concept}的例子。`));
        });
        this.baseId = id; return qs;
    },

    genFossilEvidence() {
        const qs = []; let id = this.baseId;
        const fossils = [
            {fossil:"始祖鸟化石",evidence:"鸟类由爬行类进化",feature:"有羽毛但有牙齿和爪"},
            {fossil:"马的进化化石",evidence:"马由小型祖先进化",feature:"体型逐渐增大"},
            {fossil:"三叶虫化石",evidence:"古生代海洋生物",feature:"寒武纪出现"},
            {fossil:"恐龙化石",evidence:"中生代爬行动物繁盛",feature:"白垩纪灭绝"},
            {fossil:"猛犸象化石",evidence:"冰河时期哺乳动物",feature:"适应寒冷环境"},
            {fossil:"鱼石螈化石",evidence:"鱼类向两栖类过渡",feature:"有鳍也有四肢"},
            {fossil:"古人类化石",evidence:"人类进化历程",feature:"脑容量逐渐增大"},
            {fossil:"活化石银杏",evidence:"古老植物存活至今",feature:"裸子植物"}
        ];
        fossils.forEach(f => {
            qs.push(this.makeQ(id++,"unit12","medium",`${f.fossil}说明`,f.evidence,["无意义","随机","有害"],`${f.fossil}是${f.evidence}的证据。`));
            qs.push(this.makeQ(id++,"unit12","medium",`${f.fossil}的特点是`,f.feature,["无特点","随机","不确定"],`${f.fossil}的特点是${f.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genClassificationLevels() {
        const qs = []; let id = this.baseId;
        const levels = ["界","门","纲","目","科","属","种"];
        const organisms = [
            {name:"人",kingdom:"动物界",phylum:"脊索动物门",class:"哺乳纲",order:"灵长目",family:"人科",genus:"人属",species:"智人"},
            {name:"狗",kingdom:"动物界",phylum:"脊索动物门",class:"哺乳纲",order:"食肉目",family:"犬科",genus:"犬属",species:"家犬"},
            {name:"猫",kingdom:"动物界",phylum:"脊索动物门",class:"哺乳纲",order:"食肉目",family:"猫科",genus:"猫属",species:"家猫"},
            {name:"水稻",kingdom:"植物界",phylum:"被子植物门",class:"单子叶植物纲",order:"禾本目",family:"禾本科",genus:"稻属",species:"水稻"},
            {name:"小麦",kingdom:"植物界",phylum:"被子植物门",class:"单子叶植物纲",order:"禾本目",family:"禾本科",genus:"小麦属",species:"普通小麦"}
        ];
        organisms.forEach(o => {
            qs.push(this.makeQ(id++,"unit1","medium",`${o.name}属于`,o.kingdom,["植物界","真菌界","原核生物界"],`${o.name}属于${o.kingdom}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${o.name}所属的门是`,o.phylum,["节肢动物门","软体动物门","环节动物门"],`${o.name}属于${o.phylum}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${o.name}所属的纲是`,o.class,["鸟纲","爬行纲","两栖纲"],`${o.name}属于${o.class}。`));
        });
        for(let i=0; i<levels.length-1; i++) {
            qs.push(this.makeQ(id++,"unit1","medium",`分类单位从大到小，${levels[i]}的下一级是`,levels[i+1],[levels[(i+2)%7],levels[(i+3)%7],levels[(i+4)%7]],`${levels[i]}的下一级是${levels[i+1]}。`));
        }
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEvolutionTheory(),...this.genFossilEvidence(),...this.genClassificationLevels()]; }
};
