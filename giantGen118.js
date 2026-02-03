// 超大题库生成器118 - 植物器官补充
const giantGen118 = {
    baseId: 755000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPlantOrgansA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"根的主要功能是",c:"吸收水分和无机盐固定植物",w:["光合作用","蒸腾作用","繁殖"],u:"unit3"},
            {q:"根吸收水分的主要部位是",c:"成熟区",w:["根冠","分生区","伸长区"],u:"unit3"},
            {q:"根毛的作用是",c:"增大吸收面积",w:["保护根尖","分裂产生新细胞","使根伸长"],u:"unit3"},
            {q:"茎的主要功能是",c:"输导水分和有机物支持",w:["吸收水分","光合作用","繁殖"],u:"unit3"},
            {q:"导管的功能是",c:"运输水分和无机盐",w:["运输有机物","光合作用","呼吸作用"],u:"unit3"},
            {q:"筛管的功能是",c:"运输有机物",w:["运输水分","光合作用","呼吸作用"],u:"unit3"},
            {q:"叶的主要功能是",c:"光合作用和蒸腾作用",w:["吸收水分","运输物质","繁殖"],u:"unit3"},
            {q:"气孔的功能是",c:"气体交换和蒸腾作用",w:["光合作用","吸收水分","运输物质"],u:"unit3"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genPlantOrgansB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"花的主要结构是",c:"雄蕊和雌蕊",w:["花瓣","花萼","花托"],u:"unit3"},
            {q:"雄蕊的组成是",c:"花药和花丝",w:["柱头和花柱","子房和胚珠","花瓣和花萼"],u:"unit3"},
            {q:"雌蕊的组成是",c:"柱头花柱子房",w:["花药和花丝","花瓣和花萼","花托"],u:"unit3"},
            {q:"受精后子房发育成",c:"果实",w:["种子","花","叶"],u:"unit3"},
            {q:"受精后胚珠发育成",c:"种子",w:["果实","花","叶"],u:"unit3"},
            {q:"种子的主要结构是",c:"种皮和胚",w:["果皮","花瓣","叶"],u:"unit3"},
            {q:"胚的组成是",c:"胚芽胚轴胚根子叶",w:["种皮","果皮","花瓣"],u:"unit3"},
            {q:"种子萌发时最先突破种皮的是",c:"胚根",w:["胚芽","胚轴","子叶"],u:"unit3"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPlantOrgansA(),...this.genPlantOrgansB()]; }
};
