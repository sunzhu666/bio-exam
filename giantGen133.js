// 超大题库生成器133 - 环境保护深化
const giantGen133 = {
    baseId: 830000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEnvironmentA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"温室效应的主要原因是",c:"二氧化碳等温室气体增加",w:["氧气增加","氮气增加","水蒸气减少"],u:"unit13"},
            {q:"温室效应的危害是",c:"全球气候变暖",w:["气温降低","降水减少","臭氧增加"],u:"unit13"},
            {q:"酸雨的主要成分是",c:"硫酸和硝酸",w:["盐酸","碳酸","醋酸"],u:"unit13"},
            {q:"酸雨形成的原因是",c:"二氧化硫和氮氧化物排放",w:["二氧化碳排放","氧气排放","水蒸气排放"],u:"unit13"},
            {q:"臭氧层破坏的主要原因是",c:"氟利昂等物质排放",w:["二氧化碳排放","氧气排放","水蒸气排放"],u:"unit13"},
            {q:"臭氧层的作用是",c:"吸收紫外线保护生物",w:["吸收红外线","产生氧气","调节温度"],u:"unit13"},
            {q:"水体富营养化的原因是",c:"氮磷等营养物质过多",w:["氧气过多","二氧化碳过多","重金属过多"],u:"unit13"},
            {q:"水体富营养化的危害是",c:"藻类大量繁殖水质恶化",w:["水温升高","水位下降","盐度增加"],u:"unit13"},
            {q:"生物入侵的危害是",c:"破坏当地生态平衡",w:["增加生物多样性","改善环境","提供食物"],u:"unit13"},
            {q:"可持续发展的含义是",c:"既满足当代需求又不损害后代利益",w:["只考虑当代","只考虑经济","不考虑环境"],u:"unit13"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genEnvironmentB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"减少温室效应的措施是",c:"减少化石燃料使用植树造林",w:["增加二氧化碳排放","砍伐森林","增加工业生产"],u:"unit13"},
            {q:"减少酸雨的措施是",c:"减少二氧化硫和氮氧化物排放",w:["增加煤炭使用","增加汽车尾气","减少植树"],u:"unit13"},
            {q:"保护臭氧层的措施是",c:"减少氟利昂等物质使用",w:["增加紫外线","减少氧气","增加二氧化碳"],u:"unit13"},
            {q:"防治水体富营养化的措施是",c:"减少氮磷排放",w:["增加营养物质","减少氧气","增加藻类"],u:"unit13"},
            {q:"防治生物入侵的措施是",c:"加强检疫控制引进",w:["大量引进外来物种","不加控制","增加入侵物种"],u:"unit13"},
            {q:"自然保护区的作用是",c:"保护生物多样性和生态环境",w:["开发资源","发展旅游","建设城市"],u:"unit13"},
            {q:"退耕还林还草的目的是",c:"恢复生态防止水土流失",w:["增加耕地","发展农业","建设城市"],u:"unit13"},
            {q:"垃圾分类的意义是",c:"资源回收利用减少污染",w:["增加垃圾","浪费资源","污染环境"],u:"unit13"},
            {q:"低碳生活的含义是",c:"减少二氧化碳排放的生活方式",w:["增加能源消耗","浪费资源","不考虑环境"],u:"unit13"},
            {q:"绿色出行的方式包括",c:"步行骑车公共交通",w:["开私家车","乘飞机","乘轮船"],u:"unit13"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEnvironmentA(),...this.genEnvironmentB()]; }
};
