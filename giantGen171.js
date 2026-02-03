// 超大题库生成器171 - 专题复习A
const giantGen171 = {
    baseId: 1020000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genTopicA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"显微镜放大倍数等于",c:"目镜倍数乘以物镜倍数",w:["目镜倍数加物镜倍数","目镜倍数减物镜倍数","目镜倍数除以物镜倍数"],u:"unit2"},
            {q:"使用显微镜时先用低倍镜的原因是",c:"视野大容易找到目标",w:["放大倍数大","看得更清楚","光线更强"],u:"unit2"},
            {q:"显微镜下物像移动方向与实际移动方向",c:"相反",w:["相同","垂直","无关"],u:"unit2"},
            {q:"制作临时装片时滴加清水的目的是",c:"保持细胞正常形态",w:["杀死细胞","染色","固定"],u:"unit2"},
            {q:"盖盖玻片时从一侧缓慢放下是为了",c:"避免产生气泡",w:["便于观察","固定标本","增加光线"],u:"unit2"},
            {q:"染色的目的是",c:"使细胞结构更清晰",w:["杀死细胞","保持活性","增加水分"],u:"unit2"},
            {q:"碘液染色后细胞核呈",c:"深色",w:["浅色","无色","红色"],u:"unit2"},
            {q:"观察植物细胞时常用的材料是",c:"洋葱鳞片叶表皮",w:["动物血液","细菌","病毒"],u:"unit2"},
            {q:"观察人口腔上皮细胞时滴加的液体是",c:"生理盐水",w:["清水","碘液","酒精"],u:"unit2"},
            {q:"生理盐水的浓度是",c:"0.9%",w:["0.1%","9%","90%"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"easy",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genTopicB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"植物细胞特有的结构是",c:"细胞壁叶绿体液泡",w:["细胞膜","细胞核","线粒体"],u:"unit2"},
            {q:"动物细胞特有的结构是",c:"中心体",w:["细胞壁","叶绿体","液泡"],u:"unit2"},
            {q:"细胞膜的功能是",c:"控制物质进出",w:["进行光合作用","储存遗传信息","提供能量"],u:"unit2"},
            {q:"细胞核的功能是",c:"储存遗传信息控制生命活动",w:["进行光合作用","控制物质进出","提供能量"],u:"unit2"},
            {q:"线粒体的功能是",c:"进行呼吸作用释放能量",w:["进行光合作用","储存遗传信息","控制物质进出"],u:"unit2"},
            {q:"叶绿体的功能是",c:"进行光合作用制造有机物",w:["进行呼吸作用","储存遗传信息","控制物质进出"],u:"unit2"},
            {q:"液泡中含有",c:"细胞液",w:["叶绿素","DNA","蛋白质"],u:"unit2"},
            {q:"细胞壁的功能是",c:"保护和支持细胞",w:["控制物质进出","进行光合作用","储存遗传信息"],u:"unit2"},
            {q:"核糖体的功能是",c:"合成蛋白质",w:["合成脂肪","合成糖类","分解蛋白质"],u:"unit2"},
            {q:"内质网的功能是",c:"加工和运输蛋白质",w:["合成DNA","分解有机物","储存能量"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genTopicA(),...this.genTopicB()]; }
};
