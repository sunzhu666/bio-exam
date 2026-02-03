// 超大题库生成器45 - 人体内环境
const giantGen45 = {
    baseId: 390000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genInternalEnvironment() {
        const qs = []; let id = this.baseId;
        const components = [
            {component:"血浆",location:"血管内",function:"运输物质",feature:"含蛋白质"},
            {component:"组织液",location:"细胞间隙",function:"细胞与血液物质交换",feature:"与血浆相似"},
            {component:"淋巴",location:"淋巴管内",function:"回收组织液",feature:"含淋巴细胞"},
            {component:"细胞内液",location:"细胞内",function:"代谢场所",feature:"占体液2/3"},
            {component:"细胞外液",location:"细胞外",function:"内环境",feature:"占体液1/3"}
        ];
        components.forEach(c => {
            qs.push(this.makeQ(id++,"unit7","hard",`${c.component}位于`,c.location,["无位置","随机","不确定"],`${c.component}在${c.location}。`));
            qs.push(this.makeQ(id++,"unit7","hard",`${c.component}的功能是`,c.function,["无功能","随机","不确定"],`${c.component}的功能是${c.function}。`));
            qs.push(this.makeQ(id++,"unit7","hard",`${c.component}的特点是`,c.feature,["无特点","随机","不确定"],`${c.component}${c.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genHomeostasis() {
        const qs = []; let id = this.baseId;
        const regulations = [
            {regulation:"体温调节",normal:"37°C左右",mechanism:"产热与散热平衡",center:"下丘脑"},
            {regulation:"血糖调节",normal:"0.8-1.2g/L",mechanism:"胰岛素和胰高血糖素",center:"胰岛"},
            {regulation:"水盐调节",normal:"渗透压稳定",mechanism:"抗利尿激素和醛固酮",center:"下丘脑和肾"},
            {regulation:"pH调节",normal:"7.35-7.45",mechanism:"缓冲物质",system:"血液缓冲系统"},
            {regulation:"血压调节",normal:"收缩压90-140mmHg",mechanism:"神经和体液调节",center:"心血管中枢"}
        ];
        regulations.forEach(r => {
            qs.push(this.makeQ(id++,"unit9","hard",`${r.regulation}的正常值是`,r.normal,["无正常值","随机","不确定"],`${r.regulation}正常是${r.normal}。`));
            qs.push(this.makeQ(id++,"unit9","hard",`${r.regulation}的机制是`,r.mechanism,["无机制","随机","不确定"],`${r.regulation}通过${r.mechanism}。`));
            qs.push(this.makeQ(id++,"unit9","hard",`${r.regulation}的调节中枢是`,r.center || r.system,["无中枢","随机","不确定"],`${r.regulation}由${r.center || r.system}调节。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genInternalEnvironment(),...this.genHomeostasis()]; }
};
