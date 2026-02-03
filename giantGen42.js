// 超大题库生成器42 - 植物组织
const giantGen42 = {
    baseId: 375000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPlantTissues() {
        const qs = []; let id = this.baseId;
        const tissues = [
            {tissue:"分生组织",func:"细胞分裂",feature:"细胞小核大",location:"根尖茎尖形成层"},
            {tissue:"保护组织",func:"保护",feature:"细胞排列紧密",location:"表皮"},
            {tissue:"营养组织",func:"储存和光合作用",feature:"薄壁细胞",location:"叶肉果肉"},
            {tissue:"输导组织",func:"运输物质",feature:"管状细胞",location:"维管束"},
            {tissue:"机械组织",func:"支撑",feature:"细胞壁加厚",location:"茎的皮层"},
            {tissue:"分泌组织",func:"分泌物质",feature:"能分泌",location:"蜜腺树脂道"}
        ];
        tissues.forEach(t => {
            qs.push(this.makeQ(id++,"unit4","medium",`植物${t.tissue}的功能是`,t.func,["无功能","随机","不确定"],`${t.tissue}的功能是${t.func}。`));
            qs.push(this.makeQ(id++,"unit4","medium",`植物${t.tissue}的特点是`,t.feature,["无特点","随机","不确定"],`${t.tissue}${t.feature}。`));
            qs.push(this.makeQ(id++,"unit4","medium",`植物${t.tissue}位于`,t.location,["无位置","随机","不确定"],`${t.tissue}在${t.location}。`));
        });
        this.baseId = id; return qs;
    },

    genAnimalTissues() {
        const qs = []; let id = this.baseId;
        const tissues = [
            {tissue:"上皮组织",func:"保护分泌吸收",feature:"细胞排列紧密",location:"皮肤内脏表面"},
            {tissue:"结缔组织",func:"连接支持保护",feature:"细胞间质多",example:"血液骨软骨"},
            {tissue:"肌肉组织",func:"收缩运动",feature:"有收缩能力",example:"骨骼肌心肌平滑肌"},
            {tissue:"神经组织",func:"接受刺激传导冲动",feature:"有神经元",location:"脑脊髓神经"}
        ];
        tissues.forEach(t => {
            qs.push(this.makeQ(id++,"unit4","medium",`动物${t.tissue}的功能是`,t.func,["无功能","随机","不确定"],`${t.tissue}的功能是${t.func}。`));
            qs.push(this.makeQ(id++,"unit4","medium",`动物${t.tissue}的特点是`,t.feature,["无特点","随机","不确定"],`${t.tissue}${t.feature}。`));
            qs.push(this.makeQ(id++,"unit4","medium",`动物${t.tissue}的例子或位置是`,t.example || t.location,["无例子","随机","不确定"],`${t.tissue}如${t.example || t.location}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPlantTissues(),...this.genAnimalTissues()]; }
};
