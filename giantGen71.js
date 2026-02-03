// 超大题库生成器71 - 细胞器功能
const giantGen71 = {
    baseId: 520000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genOrganelles() {
        const qs = []; let id = this.baseId;
        const organelles = [
            {name:"线粒体",function:"有氧呼吸主要场所",structure:"双层膜",product:"ATP"},
            {name:"叶绿体",function:"光合作用场所",structure:"双层膜",pigment:"叶绿素"},
            {name:"核糖体",function:"合成蛋白质",structure:"无膜",component:"RNA和蛋白质"},
            {name:"内质网",function:"加工运输蛋白质",type:"粗面和滑面",structure:"单层膜"},
            {name:"高尔基体",function:"加工分泌蛋白质",structure:"单层膜",shape:"扁平囊状"},
            {name:"溶酶体",function:"消化分解",content:"水解酶",structure:"单层膜"},
            {name:"液泡",function:"储存物质调节渗透压",content:"细胞液",cell:"植物细胞"},
            {name:"中心体",function:"参与细胞分裂",structure:"无膜",cell:"动物细胞"}
        ];
        organelles.forEach(o => {
            qs.push(this.makeQ(id++,"unit4","hard",`${o.name}的功能是`,o.function,["无功能","随机","不确定"],`${o.name}${o.function}。`));
            qs.push(this.makeQ(id++,"unit4","hard",`${o.name}的结构特点是`,o.structure,["无结构","随机","不确定"],`${o.name}是${o.structure}结构。`));
            if(o.product) qs.push(this.makeQ(id++,"unit4","hard",`${o.name}的产物是`,o.product,["无产物","随机","不确定"],`${o.name}产生${o.product}。`));
        });
        this.baseId = id; return qs;
    },

    genCellMembrane() {
        const qs = []; let id = this.baseId;
        const features = [
            {feature:"细胞膜的组成",content:"磷脂双分子层和蛋白质",model:"流动镶嵌模型"},
            {feature:"细胞膜的功能",content:"保护控制物质进出",property:"选择透过性"},
            {feature:"物质跨膜运输",type:"自由扩散协助扩散主动运输",factor:"浓度差载体能量"},
            {feature:"自由扩散",example:"氧气二氧化碳",condition:"高浓度到低浓度"},
            {feature:"协助扩散",example:"葡萄糖进入红细胞",need:"载体蛋白"},
            {feature:"主动运输",example:"离子吸收",need:"载体蛋白和能量"}
        ];
        features.forEach(f => {
            qs.push(this.makeQ(id++,"unit4","hard",`${f.feature}是`,f.content||f.type,["无内容","随机","不确定"],`${f.feature}是${f.content||f.type}。`));
            if(f.example) qs.push(this.makeQ(id++,"unit4","hard",`${f.feature}的例子是`,f.example,["无例子","随机","不确定"],`${f.feature}如${f.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genOrganelles(),...this.genCellMembrane()]; }
};
