// 超大题库生成器61 - 植物组织
const giantGen61 = {
    baseId: 470000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPlantTissues() {
        const qs = []; let id = this.baseId;
        const tissues = [
            {tissue:"分生组织",feature:"细胞小分裂能力强",location:"根尖茎尖",function:"使植物生长"},
            {tissue:"保护组织",feature:"细胞排列紧密",location:"表皮",function:"保护内部组织"},
            {tissue:"营养组织",feature:"细胞壁薄液泡大",location:"叶肉果肉",function:"储存营养物质"},
            {tissue:"输导组织",feature:"细胞呈管状",type:"导管和筛管",function:"运输物质"},
            {tissue:"机械组织",feature:"细胞壁厚",location:"茎的外围",function:"支持作用"}
        ];
        tissues.forEach(t => {
            qs.push(this.makeQ(id++,"unit3","medium",`${t.tissue}的特点是`,t.feature,["无特点","随机","不确定"],`${t.tissue}${t.feature}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${t.tissue}的分布是`,t.location||t.type,["无分布","随机","不确定"],`${t.tissue}分布在${t.location||t.type}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${t.tissue}的功能是`,t.function,["无功能","随机","不确定"],`${t.tissue}${t.function}。`));
        });
        this.baseId = id; return qs;
    },

    genVascularBundle() {
        const qs = []; let id = this.baseId;
        const structures = [
            {structure:"导管",function:"运输水和无机盐",direction:"从下往上",cell:"死细胞"},
            {structure:"筛管",function:"运输有机物",direction:"从上往下",cell:"活细胞"},
            {structure:"木质部",component:"导管和木纤维",position:"内侧",function:"运输和支持"},
            {structure:"韧皮部",component:"筛管和韧皮纤维",position:"外侧",function:"运输和支持"},
            {structure:"形成层",feature:"具有分裂能力",result:"使茎加粗",type:"分生组织"}
        ];
        structures.forEach(s => {
            qs.push(this.makeQ(id++,"unit3","hard",`${s.structure}的功能是`,s.function,["无功能","随机","不确定"],`${s.structure}${s.function}。`));
            if(s.direction) qs.push(this.makeQ(id++,"unit3","hard",`${s.structure}运输方向是`,s.direction,["无方向","随机","不确定"],`${s.structure}${s.direction}运输。`));
            if(s.cell) qs.push(this.makeQ(id++,"unit3","hard",`${s.structure}由什么细胞组成`,s.cell,["无细胞","随机","不确定"],`${s.structure}由${s.cell}组成。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPlantTissues(),...this.genVascularBundle()]; }
};
