// 超大题库生成器30 - 叶片结构
const giantGen30 = {
    baseId: 315000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genLeafStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"表皮",func:"保护",feature:"透明无叶绿体",cells:"表皮细胞"},
            {part:"叶肉",func:"光合作用",feature:"含叶绿体",cells:"叶肉细胞"},
            {part:"叶脉",func:"输导和支持",feature:"含导管和筛管",cells:"维管组织"},
            {part:"气孔",func:"气体交换",feature:"由保卫细胞围成",cells:"保卫细胞"},
            {part:"保卫细胞",func:"控制气孔开闭",feature:"含叶绿体",cells:"肾形或哑铃形"},
            {part:"栅栏组织",func:"光合作用",feature:"细胞排列紧密",location:"上表皮下方"},
            {part:"海绵组织",func:"光合作用和气体交换",feature:"细胞排列疏松",location:"下表皮上方"},
            {part:"角质层",func:"减少水分蒸发",feature:"蜡质覆盖",location:"表皮外"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","medium",`叶片${p.part}的功能是`,p.func,["无功能","随机","不确定"],`${p.part}的功能是${p.func}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`叶片${p.part}的特点是`,p.feature,["无特点","随机","不确定"],`${p.part}${p.feature}。`));
            if(p.location) {
                qs.push(this.makeQ(id++,"unit3","medium",`叶片${p.part}位于`,p.location,["无位置","随机","不确定"],`${p.part}在${p.location}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genLeafAdaptations() {
        const qs = []; let id = this.baseId;
        const adaptations = [
            {plant:"仙人掌",adaptation:"叶退化成刺",environment:"干旱",purpose:"减少水分蒸发"},
            {plant:"睡莲",adaptation:"叶片漂浮",environment:"水生",purpose:"获取光照"},
            {plant:"松树",adaptation:"针形叶",environment:"寒冷干旱",purpose:"减少水分蒸发"},
            {plant:"香蕉",adaptation:"大型叶片",environment:"热带",purpose:"增大光合面积"},
            {plant:"捕蝇草",adaptation:"叶片能捕虫",environment:"贫瘠",purpose:"获取氮素"},
            {plant:"猪笼草",adaptation:"叶变成捕虫笼",environment:"贫瘠",purpose:"获取氮素"},
            {plant:"豌豆",adaptation:"叶变成卷须",environment:"攀援",purpose:"支撑植物体"},
            {plant:"洋葱",adaptation:"叶变成鳞片",environment:"储存",purpose:"储存营养"},
            {plant:"芦荟",adaptation:"肉质叶",environment:"干旱",purpose:"储存水分"},
            {plant:"落叶树",adaptation:"秋季落叶",environment:"寒冷",purpose:"减少水分蒸发"}
        ];
        adaptations.forEach(a => {
            qs.push(this.makeQ(id++,"unit3","hard",`${a.plant}的叶片适应是`,a.adaptation,["无适应","随机","不确定"],`${a.plant}${a.adaptation}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${a.plant}叶片适应的环境是`,a.environment,["无环境","随机","不确定"],`${a.plant}适应${a.environment}环境。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${a.plant}叶片适应的目的是`,a.purpose,["无目的","随机","不确定"],`${a.plant}叶片适应是为了${a.purpose}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genLeafStructure(),...this.genLeafAdaptations()]; }
};
