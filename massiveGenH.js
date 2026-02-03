// 海量题库生成器H - 微生物详细
const massiveGenH = {
    baseId: 155000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBacteria() {
        const qs = []; let id = this.baseId;
        const bacteria = [
            {name:"大肠杆菌",shape:"杆状",habitat:"肠道",feature:"有鞭毛",use:"基因工程"},
            {name:"乳酸菌",shape:"杆状",habitat:"乳制品",feature:"厌氧",use:"制作酸奶"},
            {name:"根瘤菌",shape:"杆状",habitat:"豆科植物根部",feature:"固氮",use:"增加土壤肥力"},
            {name:"醋酸菌",shape:"杆状",habitat:"醋中",feature:"好氧",use:"制作醋"},
            {name:"枯草杆菌",shape:"杆状",habitat:"土壤",feature:"产芽孢",use:"生产酶"},
            {name:"链球菌",shape:"球状",habitat:"口腔",feature:"链状排列",use:"致病菌"},
            {name:"葡萄球菌",shape:"球状",habitat:"皮肤",feature:"葡萄状排列",use:"致病菌"},
            {name:"肺炎双球菌",shape:"球状",habitat:"呼吸道",feature:"成对排列",use:"致病菌"}
        ];
        bacteria.forEach(b => {
            qs.push(this.makeQ(id++,"unit2","medium",`${b.name}的形态是`,b.shape,["螺旋状","无形态","随机"],`${b.name}是${b.shape}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`${b.name}的生活环境是`,b.habitat,["太空","火山","随机"],`${b.name}生活在${b.habitat}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`${b.name}的特点是`,b.feature,["无特点","随机","不确定"],`${b.name}的特点是${b.feature}。`));
            qs.push(this.makeQ(id++,"unit2","hard",`${b.name}的应用是`,b.use,["无应用","随机","不确定"],`${b.name}用于${b.use}。`));
        });
        this.baseId = id; return qs;
    },

    genFungi() {
        const qs = []; let id = this.baseId;
        const fungi = [
            {name:"酵母菌",type:"单细胞真菌",repro:"出芽生殖",use:"发酵",feature:"有细胞核"},
            {name:"青霉",type:"多细胞真菌",repro:"孢子生殖",use:"制青霉素",feature:"有隔菌丝"},
            {name:"曲霉",type:"多细胞真菌",repro:"孢子生殖",use:"制酱油",feature:"有隔菌丝"},
            {name:"蘑菇",type:"多细胞真菌",repro:"孢子生殖",use:"食用",feature:"有子实体"},
            {name:"木耳",type:"多细胞真菌",repro:"孢子生殖",use:"食用",feature:"胶质子实体"},
            {name:"灵芝",type:"多细胞真菌",repro:"孢子生殖",use:"药用",feature:"木质子实体"}
        ];
        fungi.forEach(f => {
            qs.push(this.makeQ(id++,"unit2","medium",`${f.name}属于`,f.type,["细菌","病毒","原生生物"],`${f.name}是${f.type}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`${f.name}的繁殖方式是`,f.repro,["分裂生殖","无繁殖","随机"],`${f.name}通过${f.repro}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`${f.name}的用途是`,f.use,["无用途","随机","不确定"],`${f.name}用于${f.use}。`));
            qs.push(this.makeQ(id++,"unit2","hard",`${f.name}的特点是`,f.feature,["无特点","随机","不确定"],`${f.name}的特点是${f.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBacteria(),...this.genFungi()]; }
};
