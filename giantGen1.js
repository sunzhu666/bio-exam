// 超大题库生成器1 - 细胞结构与功能
const giantGen1 = {
    baseId: 170000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genCellOrganelles() {
        const qs = []; let id = this.baseId;
        const organelles = [
            {name:"细胞膜",func:"控制物质进出",feature:"选择透过性",composition:"磷脂双分子层"},
            {name:"细胞壁",func:"保护和支持",feature:"全透性",composition:"纤维素和果胶"},
            {name:"细胞核",func:"遗传信息库",feature:"有核膜核仁",composition:"DNA和蛋白质"},
            {name:"线粒体",func:"有氧呼吸场所",feature:"双层膜",composition:"有自己的DNA"},
            {name:"叶绿体",func:"光合作用场所",feature:"双层膜",composition:"有自己的DNA"},
            {name:"内质网",func:"蛋白质加工运输",feature:"单层膜",composition:"膜性管道系统"},
            {name:"高尔基体",func:"分泌物加工",feature:"单层膜",composition:"扁平囊泡"},
            {name:"核糖体",func:"合成蛋白质",feature:"无膜",composition:"RNA和蛋白质"},
            {name:"液泡",func:"储存物质调节渗透压",feature:"单层膜",composition:"细胞液"},
            {name:"中心体",func:"参与细胞分裂",feature:"无膜",composition:"两个中心粒"}
        ];
        organelles.forEach(o => {
            qs.push(this.makeQ(id++,"unit4","medium",`${o.name}的主要功能是`,o.func,["无功能","随机","不确定"],`${o.name}的功能是${o.func}。`));
            qs.push(this.makeQ(id++,"unit4","medium",`${o.name}的结构特点是`,o.feature,["无特点","随机","不确定"],`${o.name}的特点是${o.feature}。`));
            qs.push(this.makeQ(id++,"unit4","hard",`${o.name}的组成是`,o.composition,["无组成","随机","不确定"],`${o.name}由${o.composition}组成。`));
        });
        this.baseId = id; return qs;
    },

    genCellTypes() {
        const qs = []; let id = this.baseId;
        const types = [
            {type:"原核细胞",example:"细菌蓝藻",feature:"无核膜",organelle:"只有核糖体"},
            {type:"真核细胞",example:"动植物真菌",feature:"有核膜",organelle:"有多种细胞器"},
            {type:"植物细胞",example:"叶肉细胞",feature:"有细胞壁叶绿体液泡",organelle:"有叶绿体"},
            {type:"动物细胞",example:"肌肉细胞",feature:"无细胞壁叶绿体液泡",organelle:"有中心体"},
            {type:"红细胞",example:"人红细胞",feature:"无细胞核",organelle:"无细胞器"},
            {type:"神经细胞",example:"神经元",feature:"有轴突树突",organelle:"有尼氏体"}
        ];
        types.forEach(t => {
            qs.push(this.makeQ(id++,"unit4","medium",`${t.type}的例子是`,t.example,["无例子","随机","不确定"],`${t.type}如${t.example}。`));
            qs.push(this.makeQ(id++,"unit4","medium",`${t.type}的特点是`,t.feature,["无特点","随机","不确定"],`${t.type}的特点是${t.feature}。`));
            qs.push(this.makeQ(id++,"unit4","hard",`${t.type}的细胞器特点是`,t.organelle,["无细胞器","随机","不确定"],`${t.type}${t.organelle}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genCellOrganelles(),...this.genCellTypes()]; }
};
