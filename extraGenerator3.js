// 扩展题库生成器3 - 生态与环境
const extraGenerator3 = {
    baseId: 25000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEcosystemTypes() {
        const qs = []; let id = this.baseId;
        const ecosystems = [
            {name:"热带雨林",feature:"物种最丰富",climate:"高温多雨",producer:"乔木为主"},
            {name:"温带落叶阔叶林",feature:"四季分明",climate:"温和湿润",producer:"落叶树为主"},
            {name:"针叶林",feature:"耐寒树种",climate:"寒冷",producer:"针叶树为主"},
            {name:"热带草原",feature:"干湿季分明",climate:"热带",producer:"草本植物为主"},
            {name:"温带草原",feature:"降水较少",climate:"温带大陆性",producer:"草本植物为主"},
            {name:"荒漠",feature:"极度干旱",climate:"干旱",producer:"仙人掌等耐旱植物"},
            {name:"苔原",feature:"永久冻土",climate:"极寒",producer:"苔藓地衣为主"},
            {name:"淡水湿地",feature:"水陆过渡",climate:"多样",producer:"水生植物为主"},
            {name:"红树林",feature:"海陆过渡",climate:"热带亚热带",producer:"红树为主"},
            {name:"珊瑚礁",feature:"物种丰富",climate:"热带海洋",producer:"藻类为主"},
            {name:"深海",feature:"无光高压",climate:"低温",producer:"化能细菌为主"},
            {name:"农田",feature:"人工生态系统",climate:"多样",producer:"农作物为主"},
            {name:"城市",feature:"人工生态系统",climate:"热岛效应",producer:"绿化植物为主"}
        ];
        ecosystems.forEach(e => {
            qs.push(this.makeQ(id++,"unit13","medium",`${e.name}生态系统的特点是`,e.feature,["物种单一","无生产者","无消费者"],`${e.name}生态系统的特点是${e.feature}。`));
            qs.push(this.makeQ(id++,"unit13","medium",`${e.name}生态系统的主要生产者是`,e.producer,["动物","细菌","真菌"],`${e.name}生态系统的主要生产者是${e.producer}。`));
        });
        this.baseId = id; return qs;
    },

    genFoodChains() {
        const qs = []; let id = this.baseId;
        const chains = [
            {chain:"草→蚱蜢→青蛙→蛇→鹰",levels:5,energy:"草",top:"鹰"},
            {chain:"浮游植物→浮游动物→小鱼→大鱼→鲨鱼",levels:5,energy:"浮游植物",top:"鲨鱼"},
            {chain:"树叶→蚜虫→瓢虫→麻雀→猫头鹰",levels:5,energy:"树叶",top:"猫头鹰"},
            {chain:"草→田鼠→蛇→鹰",levels:4,energy:"草",top:"鹰"},
            {chain:"藻类→草鱼→黑鱼→人",levels:4,energy:"藻类",top:"人"},
            {chain:"玉米→鸡→人",levels:3,energy:"玉米",top:"人"},
            {chain:"草→牛→人",levels:3,energy:"草",top:"人"},
            {chain:"水稻→蝗虫→青蛙",levels:3,energy:"水稻",top:"青蛙"},
            {chain:"白菜→菜青虫→麻雀",levels:3,energy:"白菜",top:"麻雀"},
            {chain:"小麦→田鼠→猫头鹰",levels:3,energy:"小麦",top:"猫头鹰"},
            {chain:"草→兔→狐→狼",levels:4,energy:"草",top:"狼"},
            {chain:"树→松毛虫→杜鹃→鹰",levels:4,energy:"树",top:"鹰"}
        ];
        chains.forEach(c => {
            qs.push(this.makeQ(id++,"unit13","medium",`食物链"${c.chain}"中，能量最多的是`,c.energy,["消费者","分解者","最高营养级"],`在食物链中，生产者${c.energy}含能量最多。`));
            qs.push(this.makeQ(id++,"unit13","medium",`食物链"${c.chain}"中，有毒物质积累最多的是`,c.top,["生产者","分解者","第一营养级"],`有毒物质沿食物链富集，${c.top}积累最多。`));
            qs.push(this.makeQ(id++,"unit13","easy",`食物链"${c.chain}"共有几个营养级`,`${c.levels}个`,["2个","6个","7个"],`该食物链有${c.levels}个营养级。`));
        });
        this.baseId = id; return qs;
    },

    genEnvironmentalProblems() {
        const qs = []; let id = this.baseId;
        const problems = [
            {name:"温室效应",cause:"二氧化碳增多",effect:"全球变暖",solution:"减少化石燃料使用"},
            {name:"酸雨",cause:"二氧化硫和氮氧化物",effect:"腐蚀建筑和植物",solution:"减少工业废气排放"},
            {name:"臭氧层破坏",cause:"氟利昂等物质",effect:"紫外线增强",solution:"禁用氟利昂"},
            {name:"水体富营养化",cause:"氮磷等营养物质过多",effect:"藻类大量繁殖",solution:"减少化肥农药使用"},
            {name:"土壤污染",cause:"重金属和农药",effect:"影响农作物生长",solution:"减少农药使用"},
            {name:"噪声污染",cause:"交通和工业噪声",effect:"影响听力和健康",solution:"隔音和降噪"},
            {name:"光污染",cause:"过度照明",effect:"影响生物节律",solution:"合理使用照明"},
            {name:"生物入侵",cause:"外来物种引入",effect:"破坏本地生态",solution:"加强检疫"},
            {name:"森林砍伐",cause:"过度开发",effect:"水土流失",solution:"植树造林"},
            {name:"过度捕捞",cause:"渔业过度开发",effect:"鱼类资源减少",solution:"休渔期制度"}
        ];
        problems.forEach(p => {
            qs.push(this.makeQ(id++,"unit13","medium",`${p.name}的主要原因是`,p.cause,["自然灾害","地壳运动","火山喷发"],`${p.name}主要由${p.cause}引起。`));
            qs.push(this.makeQ(id++,"unit13","medium",`${p.name}的主要危害是`,p.effect,["无危害","促进生长","增加产量"],`${p.name}会导致${p.effect}。`));
            qs.push(this.makeQ(id++,"unit13","easy",`防治${p.name}的措施是`,p.solution,["增加排放","扩大开发","引入外来种"],`防治${p.name}应${p.solution}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEcosystemTypes(),...this.genFoodChains(),...this.genEnvironmentalProblems()]; }
};
