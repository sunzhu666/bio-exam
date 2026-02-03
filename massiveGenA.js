// 海量题库生成器A - 动物特征详细
const massiveGenA = {
    baseId: 120000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genVertebrates() {
        const qs = []; let id = this.baseId;
        const verts = [
            {animal:"鲫鱼",class:"鱼类",breath:"鳃",temp:"变温",repro:"卵生",habitat:"水中"},
            {animal:"鲤鱼",class:"鱼类",breath:"鳃",temp:"变温",repro:"卵生",habitat:"水中"},
            {animal:"鲨鱼",class:"鱼类",breath:"鳃",temp:"变温",repro:"卵生",habitat:"海洋"},
            {animal:"青蛙",class:"两栖类",breath:"肺和皮肤",temp:"变温",repro:"卵生",habitat:"水陆两栖"},
            {animal:"蟾蜍",class:"两栖类",breath:"肺和皮肤",temp:"变温",repro:"卵生",habitat:"水陆两栖"},
            {animal:"大鲵",class:"两栖类",breath:"肺和皮肤",temp:"变温",repro:"卵生",habitat:"水陆两栖"},
            {animal:"蜥蜴",class:"爬行类",breath:"肺",temp:"变温",repro:"卵生",habitat:"陆地"},
            {animal:"蛇",class:"爬行类",breath:"肺",temp:"变温",repro:"卵生",habitat:"陆地"},
            {animal:"龟",class:"爬行类",breath:"肺",temp:"变温",repro:"卵生",habitat:"水陆"},
            {animal:"鳄鱼",class:"爬行类",breath:"肺",temp:"变温",repro:"卵生",habitat:"水陆"},
            {animal:"麻雀",class:"鸟类",breath:"肺和气囊",temp:"恒温",repro:"卵生",habitat:"陆地"},
            {animal:"鸽子",class:"鸟类",breath:"肺和气囊",temp:"恒温",repro:"卵生",habitat:"陆地"},
            {animal:"老鹰",class:"鸟类",breath:"肺和气囊",temp:"恒温",repro:"卵生",habitat:"陆地"},
            {animal:"企鹅",class:"鸟类",breath:"肺和气囊",temp:"恒温",repro:"卵生",habitat:"南极"},
            {animal:"狗",class:"哺乳类",breath:"肺",temp:"恒温",repro:"胎生哺乳",habitat:"陆地"},
            {animal:"猫",class:"哺乳类",breath:"肺",temp:"恒温",repro:"胎生哺乳",habitat:"陆地"},
            {animal:"牛",class:"哺乳类",breath:"肺",temp:"恒温",repro:"胎生哺乳",habitat:"陆地"},
            {animal:"鲸",class:"哺乳类",breath:"肺",temp:"恒温",repro:"胎生哺乳",habitat:"海洋"},
            {animal:"蝙蝠",class:"哺乳类",breath:"肺",temp:"恒温",repro:"胎生哺乳",habitat:"陆地"},
            {animal:"海豚",class:"哺乳类",breath:"肺",temp:"恒温",repro:"胎生哺乳",habitat:"海洋"}
        ];
        verts.forEach(v => {
            qs.push(this.makeQ(id++,"unit1","easy",`${v.animal}属于`,v.class,["无脊椎动物","植物","真菌"],`${v.animal}是${v.class}。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${v.animal}的呼吸器官是`,v.breath,["皮肤","体表","无呼吸器官"],`${v.animal}用${v.breath}呼吸。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${v.animal}的体温是`,v.temp,["不确定","无体温","随机"],`${v.animal}是${v.temp}动物。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${v.animal}的生殖方式是`,v.repro,["分裂生殖","出芽生殖","孢子生殖"],`${v.animal}是${v.repro}。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${v.animal}的生活环境是`,v.habitat,["太空","地下","火山"],`${v.animal}生活在${v.habitat}。`));
        });
        this.baseId = id; return qs;
    },

    genInvertebrates() {
        const qs = []; let id = this.baseId;
        const inverts = [
            {animal:"蚯蚓",class:"环节动物",feature:"身体分节",breath:"体壁",habitat:"土壤"},
            {animal:"水蛭",class:"环节动物",feature:"有吸盘",breath:"体壁",habitat:"水中"},
            {animal:"蜗牛",class:"软体动物",feature:"有贝壳",breath:"肺",habitat:"陆地"},
            {animal:"河蚌",class:"软体动物",feature:"有双壳",breath:"鳃",habitat:"淡水"},
            {animal:"乌贼",class:"软体动物",feature:"有墨囊",breath:"鳃",habitat:"海洋"},
            {animal:"蝗虫",class:"节肢动物",feature:"有外骨骼",breath:"气管",habitat:"陆地"},
            {animal:"蜜蜂",class:"节肢动物",feature:"有外骨骼",breath:"气管",habitat:"陆地"},
            {animal:"蜘蛛",class:"节肢动物",feature:"八条腿",breath:"书肺",habitat:"陆地"},
            {animal:"虾",class:"节肢动物",feature:"有外骨骼",breath:"鳃",habitat:"水中"},
            {animal:"蟹",class:"节肢动物",feature:"有外骨骼",breath:"鳃",habitat:"水中"},
            {animal:"水母",class:"腔肠动物",feature:"有刺细胞",breath:"体表",habitat:"海洋"},
            {animal:"珊瑚虫",class:"腔肠动物",feature:"有刺细胞",breath:"体表",habitat:"海洋"},
            {animal:"海星",class:"棘皮动物",feature:"辐射对称",breath:"皮鳃",habitat:"海洋"},
            {animal:"海参",class:"棘皮动物",feature:"身体柔软",breath:"呼吸树",habitat:"海洋"}
        ];
        inverts.forEach(i => {
            qs.push(this.makeQ(id++,"unit1","medium",`${i.animal}属于`,i.class,["脊椎动物","植物","真菌"],`${i.animal}是${i.class}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${i.animal}的主要特征是`,i.feature,["有脊柱","恒温","胎生"],`${i.animal}的特征是${i.feature}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${i.animal}的呼吸方式是`,i.breath,["肺","鳃","气囊"],`${i.animal}用${i.breath}呼吸。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${i.animal}的生活环境是`,i.habitat,["太空","火山","沙漠"],`${i.animal}生活在${i.habitat}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genVertebrates(),...this.genInvertebrates()]; }
};
