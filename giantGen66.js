// 超大题库生成器66 - 微生物综合
const giantGen66 = {
    baseId: 495000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBacteriaDetails() {
        const qs = []; let id = this.baseId;
        const bacteria = [
            {name:"大肠杆菌",shape:"杆状",habitat:"人肠道",feature:"有些致病有些有益"},
            {name:"乳酸菌",shape:"杆状",habitat:"乳制品",application:"制作酸奶"},
            {name:"醋酸菌",shape:"杆状",habitat:"醋中",application:"酿醋"},
            {name:"根瘤菌",shape:"杆状",habitat:"豆科植物根部",function:"固氮"},
            {name:"枯草杆菌",shape:"杆状",habitat:"土壤",function:"分解有机物"},
            {name:"链球菌",shape:"球状",feature:"链状排列",disease:"咽喉炎"},
            {name:"葡萄球菌",shape:"球状",feature:"葡萄状排列",disease:"皮肤感染"}
        ];
        bacteria.forEach(b => {
            qs.push(this.makeQ(id++,"unit2","medium",`${b.name}的形态是`,b.shape,["无形态","随机","不确定"],`${b.name}是${b.shape}。`));
            qs.push(this.makeQ(id++,"unit2","medium",`${b.name}的生活环境是`,b.habitat,["无环境","随机","不确定"],`${b.name}生活在${b.habitat}。`));
            if(b.application) qs.push(this.makeQ(id++,"unit2","medium",`${b.name}的应用是`,b.application,["无应用","随机","不确定"],`${b.name}用于${b.application}。`));
        });
        this.baseId = id; return qs;
    },

    genFungiDetails() {
        const qs = []; let id = this.baseId;
        const fungi = [
            {name:"酵母菌",type:"单细胞",reproduction:"出芽生殖",application:"发酵"},
            {name:"青霉",type:"多细胞",structure:"菌丝",application:"提取青霉素"},
            {name:"曲霉",type:"多细胞",structure:"菌丝",application:"酿酒制酱"},
            {name:"蘑菇",type:"多细胞",structure:"菌盖菌柄",nutrition:"腐生"},
            {name:"木耳",type:"多细胞",habitat:"枯木上",nutrition:"腐生"},
            {name:"灵芝",type:"多细胞",value:"药用",habitat:"树木上"}
        ];
        fungi.forEach(f => {
            qs.push(this.makeQ(id++,"unit2","medium",`${f.name}的类型是`,f.type,["无类型","随机","不确定"],`${f.name}是${f.type}真菌。`));
            if(f.structure) qs.push(this.makeQ(id++,"unit2","medium",`${f.name}的结构是`,f.structure,["无结构","随机","不确定"],`${f.name}有${f.structure}。`));
            if(f.application) qs.push(this.makeQ(id++,"unit2","medium",`${f.name}的应用是`,f.application,["无应用","随机","不确定"],`${f.name}用于${f.application}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBacteriaDetails(),...this.genFungiDetails()]; }
};
