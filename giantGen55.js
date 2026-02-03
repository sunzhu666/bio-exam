// 超大题库生成器55 - 人体内环境
const giantGen55 = {
    baseId: 440000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genInternalEnvironment() {
        const qs = []; let id = this.baseId;
        const concepts = [
            {concept:"内环境",definition:"细胞外液",components:"血浆组织液淋巴"},
            {concept:"血浆",location:"血管内",function:"运输物质"},
            {concept:"组织液",location:"细胞间隙",function:"细胞与血液物质交换"},
            {concept:"淋巴",location:"淋巴管内",function:"回收组织液"},
            {concept:"内环境稳态",definition:"内环境理化性质相对稳定",importance:"细胞正常生活的必要条件"},
            {concept:"pH稳态",range:"7.35-7.45",mechanism:"缓冲物质调节"},
            {concept:"体温稳态",range:"36.5-37.5℃",mechanism:"产热与散热平衡"},
            {concept:"渗透压稳态",factor:"无机盐和蛋白质",mechanism:"神经体液调节"}
        ];
        concepts.forEach(c => {
            qs.push(this.makeQ(id++,"unit7","hard",`${c.concept}的定义是`,c.definition||c.components,["无定义","随机","不确定"],`${c.concept}是${c.definition||c.components}。`));
            if(c.function) qs.push(this.makeQ(id++,"unit7","hard",`${c.concept}的功能是`,c.function,["无功能","随机","不确定"],`${c.concept}${c.function}。`));
            if(c.mechanism) qs.push(this.makeQ(id++,"unit7","hard",`${c.concept}的调节机制是`,c.mechanism,["无机制","随机","不确定"],`${c.concept}通过${c.mechanism}。`));
        });
        this.baseId = id; return qs;
    },

    genHomeostasis() {
        const qs = []; let id = this.baseId;
        const regulations = [
            {regulation:"血糖调节",hormone:"胰岛素和胰高血糖素",organ:"胰岛"},
            {regulation:"水盐调节",hormone:"抗利尿激素",organ:"下丘脑和肾脏"},
            {regulation:"体温调节",center:"下丘脑",mechanism:"神经体液调节"},
            {regulation:"血压调节",mechanism:"神经调节",receptor:"压力感受器"},
            {regulation:"呼吸调节",center:"脑干",stimulus:"二氧化碳浓度"}
        ];
        regulations.forEach(r => {
            qs.push(this.makeQ(id++,"unit7","hard",`${r.regulation}的激素是`,r.hormone||r.mechanism,["无激素","随机","不确定"],`${r.regulation}涉及${r.hormone||r.mechanism}。`));
            qs.push(this.makeQ(id++,"unit7","hard",`${r.regulation}的中枢是`,r.organ||r.center,["无中枢","随机","不确定"],`${r.regulation}中枢在${r.organ||r.center}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genInternalEnvironment(),...this.genHomeostasis()]; }
};
