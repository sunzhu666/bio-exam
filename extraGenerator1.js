// 扩展题库生成器1 - 生物分类与特征
const extraGenerator1 = {
    baseId: 20000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    pick(arr) { return arr[Math.floor(Math.random()*arr.length)]; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genAnimalDetails() {
        const qs = []; let id = this.baseId;
        const animals = [
            {name:"蚯蚓",type:"环节动物",feature:"身体分节",habitat:"土壤",food:"腐殖质"},
            {name:"水蛭",type:"环节动物",feature:"身体分节有吸盘",habitat:"水中",food:"血液"},
            {name:"蜗牛",type:"软体动物",feature:"有贝壳",habitat:"陆地潮湿处",food:"植物"},
            {name:"河蚌",type:"软体动物",feature:"有双壳",habitat:"淡水",food:"浮游生物"},
            {name:"乌贼",type:"软体动物",feature:"有墨囊",habitat:"海洋",food:"小鱼虾"},
            {name:"章鱼",type:"软体动物",feature:"八条腕足",habitat:"海洋",food:"贝类"},
            {name:"海星",type:"棘皮动物",feature:"辐射对称",habitat:"海洋",food:"贝类"},
            {name:"海参",type:"棘皮动物",feature:"身体柔软",habitat:"海洋",food:"有机碎屑"},
            {name:"水母",type:"腔肠动物",feature:"有刺细胞",habitat:"海洋",food:"浮游生物"},
            {name:"珊瑚虫",type:"腔肠动物",feature:"有刺细胞",habitat:"海洋",food:"浮游生物"},
            {name:"涡虫",type:"扁形动物",feature:"身体扁平",habitat:"淡水",food:"小动物"},
            {name:"血吸虫",type:"扁形动物",feature:"寄生生活",habitat:"人体血管",food:"血液"},
            {name:"蛔虫",type:"线形动物",feature:"身体细长",habitat:"人体小肠",food:"半消化食物"},
            {name:"钩虫",type:"线形动物",feature:"有钩齿",habitat:"人体小肠",food:"血液"}
        ];
        animals.forEach(a => {
            qs.push(this.makeQ(id++,"unit1","easy",`${a.name}属于`,a.type,["脊椎动物","节肢动物","鱼类"],`${a.name}属于${a.type}。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${a.name}的主要特征是`,a.feature,["有脊柱","体温恒定","胎生哺乳"],`${a.name}的特征是${a.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genPlantDetails() {
        const qs = []; let id = this.baseId;
        const plants = [
            {name:"水稻",type:"被子植物",root:"须根",stem:"直立茎",leaf:"平行脉",flower:"有花"},
            {name:"小麦",type:"被子植物",root:"须根",stem:"直立茎",leaf:"平行脉",flower:"有花"},
            {name:"玉米",type:"被子植物",root:"须根",stem:"直立茎",leaf:"平行脉",flower:"有花"},
            {name:"大豆",type:"被子植物",root:"直根",stem:"直立茎",leaf:"网状脉",flower:"有花"},
            {name:"花生",type:"被子植物",root:"直根",stem:"直立茎",leaf:"网状脉",flower:"有花"},
            {name:"向日葵",type:"被子植物",root:"直根",stem:"直立茎",leaf:"网状脉",flower:"有花"},
            {name:"松树",type:"裸子植物",root:"直根",stem:"木质茎",leaf:"针形叶",flower:"无花有球果"},
            {name:"银杏",type:"裸子植物",root:"直根",stem:"木质茎",leaf:"扇形叶",flower:"无花有球果"},
            {name:"铁树",type:"裸子植物",root:"直根",stem:"木质茎",leaf:"羽状叶",flower:"无花有球果"},
            {name:"肾蕨",type:"蕨类植物",root:"不定根",stem:"根状茎",leaf:"羽状复叶",flower:"无花有孢子"},
            {name:"葫芦藓",type:"苔藓植物",root:"假根",stem:"茎叶分化",leaf:"小叶",flower:"无花有孢子"},
            {name:"地钱",type:"苔藓植物",root:"假根",stem:"叶状体",leaf:"无真叶",flower:"无花有孢子"}
        ];
        plants.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","easy",`${p.name}属于`,p.type,["藻类植物","真菌","细菌"],`${p.name}属于${p.type}。`));
            qs.push(this.makeQ(id++,"unit3","easy",`${p.name}的根系类型是`,p.root,["气生根","寄生根","无根"],`${p.name}的根系是${p.root}。`));
        });
        this.baseId = id; return qs;
    },

    genMicroorganisms() {
        const qs = []; let id = this.baseId;
        const microbes = [
            {name:"大肠杆菌",type:"细菌",shape:"杆状",nutrition:"异养",reproduce:"分裂生殖"},
            {name:"乳酸菌",type:"细菌",shape:"杆状",nutrition:"异养",reproduce:"分裂生殖"},
            {name:"醋酸菌",type:"细菌",shape:"杆状",nutrition:"异养",reproduce:"分裂生殖"},
            {name:"根瘤菌",type:"细菌",shape:"杆状",nutrition:"异养",reproduce:"分裂生殖"},
            {name:"链球菌",type:"细菌",shape:"球状",nutrition:"异养",reproduce:"分裂生殖"},
            {name:"葡萄球菌",type:"细菌",shape:"球状",nutrition:"异养",reproduce:"分裂生殖"},
            {name:"破伤风杆菌",type:"细菌",shape:"杆状",nutrition:"异养",reproduce:"分裂生殖"},
            {name:"酵母菌",type:"真菌",shape:"卵圆形",nutrition:"异养",reproduce:"出芽生殖"},
            {name:"青霉",type:"真菌",shape:"丝状",nutrition:"异养",reproduce:"孢子生殖"},
            {name:"曲霉",type:"真菌",shape:"丝状",nutrition:"异养",reproduce:"孢子生殖"},
            {name:"蘑菇",type:"真菌",shape:"伞状",nutrition:"异养",reproduce:"孢子生殖"},
            {name:"木耳",type:"真菌",shape:"耳状",nutrition:"异养",reproduce:"孢子生殖"},
            {name:"流感病毒",type:"病毒",shape:"球状",nutrition:"寄生",reproduce:"复制"},
            {name:"噬菌体",type:"病毒",shape:"蝌蚪状",nutrition:"寄生",reproduce:"复制"},
            {name:"烟草花叶病毒",type:"病毒",shape:"杆状",nutrition:"寄生",reproduce:"复制"},
            {name:"艾滋病病毒",type:"病毒",shape:"球状",nutrition:"寄生",reproduce:"复制"}
        ];
        microbes.forEach(m => {
            qs.push(this.makeQ(id++,"unit1","medium",`${m.name}属于`,m.type,["植物","动物","原生生物"],`${m.name}属于${m.type}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${m.name}的繁殖方式是`,m.reproduce,["有性生殖","卵生","胎生"],`${m.name}通过${m.reproduce}繁殖。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genAnimalDetails(),...this.genPlantDetails(),...this.genMicroorganisms()]; }
};
