// 超级题库生成器 - 生成数千道经典题目
const superGenerator = {
    baseId: 8000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    pick(arr) { return arr[Math.floor(Math.random()*arr.length)]; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    // 营养物质题库
    genNutrients() {
        const qs = []; let id = this.baseId;
        const nutrients = [
            {n:"糖类",f:"最重要的供能物质",s:"米饭、面包、馒头"},{n:"蛋白质",f:"构成细胞的基本物质",s:"鸡蛋、牛奶、瘦肉"},
            {n:"脂肪",f:"储能物质",s:"肥肉、花生油、黄油"},{n:"维生素A",f:"维持正常视觉",s:"胡萝卜、动物肝脏"},
            {n:"维生素B1",f:"维持神经系统正常功能",s:"粗粮、瘦肉"},{n:"维生素C",f:"维持正常代谢",s:"新鲜蔬菜水果"},
            {n:"维生素D",f:"促进钙吸收",s:"鱼肝油、蛋黄"},{n:"钙",f:"构成骨骼和牙齿",s:"牛奶、豆制品"},
            {n:"铁",f:"构成血红蛋白",s:"动物肝脏、瘦肉"},{n:"碘",f:"合成甲状腺激素",s:"海带、紫菜"},
            {n:"水",f:"参与各种生理活动",s:"饮用水、食物"},{n:"无机盐",f:"维持正常生理功能",s:"各种食物"}
        ];
        const diseases = [{n:"维生素A",d:"夜盲症"},{n:"维生素B1",d:"脚气病"},{n:"维生素C",d:"坏血病"},{n:"维生素D",d:"佝偻病"},{n:"钙",d:"骨质疏松"},{n:"铁",d:"贫血"},{n:"碘",d:"甲状腺肿大"}];

        nutrients.forEach(item => {
            const wrongs = nutrients.filter(x=>x.n!==item.n).map(x=>x.f);
            qs.push(this.makeQ(id++,"unit5","easy",`${item.n}的主要功能是`,item.f,wrongs,`${item.n}的主要功能是${item.f}，富含于${item.s}。`));
        });
        diseases.forEach(item => {
            const wrongs = diseases.filter(x=>x.n!==item.n).map(x=>x.d);
            qs.push(this.makeQ(id++,"unit5","easy",`缺乏${item.n}会导致`,item.d,wrongs,`缺乏${item.n}会导致${item.d}。`));
        });
        this.baseId = id; return qs;
    },

    // 激素题库
    genHormones() {
        const qs = []; let id = this.baseId;
        const hormones = [
            {h:"生长激素",g:"垂体",f:"促进生长",lack:"侏儒症",excess:"巨人症"},
            {h:"甲状腺激素",g:"甲状腺",f:"促进新陈代谢和发育",lack:"呆小症",excess:"甲亢"},
            {h:"胰岛素",g:"胰岛",f:"降低血糖浓度",lack:"糖尿病",excess:"低血糖"},
            {h:"肾上腺素",g:"肾上腺",f:"加快心跳、升高血压",lack:"",excess:""},
            {h:"性激素",g:"性腺",f:"促进第二性征发育",lack:"",excess:""}
        ];
        hormones.forEach(item => {
            const wrongs = hormones.filter(x=>x.h!==item.h).map(x=>x.g);
            qs.push(this.makeQ(id++,"unit9","medium",`${item.h}由什么分泌`,item.g,wrongs,`${item.h}由${item.g}分泌。`));
            const wrongs2 = hormones.filter(x=>x.h!==item.h).map(x=>x.f);
            qs.push(this.makeQ(id++,"unit9","medium",`${item.h}的主要功能是`,item.f,wrongs2,`${item.h}的主要功能是${item.f}。`));
            if(item.lack) {
                const wrongs3 = hormones.filter(x=>x.lack&&x.h!==item.h).map(x=>x.lack);
                qs.push(this.makeQ(id++,"unit9","medium",`幼年${item.h}分泌不足会导致`,item.lack,wrongs3,`幼年${item.h}分泌不足会导致${item.lack}。`));
            }
        });
        this.baseId = id; return qs;
    },

    // 遗传题库
    genGenetics() {
        const qs = []; let id = this.baseId;
        const crosses = [
            {p:"AA×AA",g:"全部AA",ph:"全部显性"},{p:"AA×Aa",g:"AA:Aa=1:1",ph:"全部显性"},{p:"AA×aa",g:"全部Aa",ph:"全部显性"},
            {p:"Aa×Aa",g:"AA:Aa:aa=1:2:1",ph:"显性:隐性=3:1"},{p:"Aa×aa",g:"Aa:aa=1:1",ph:"显性:隐性=1:1"},{p:"aa×aa",g:"全部aa",ph:"全部隐性"}
        ];
        crosses.forEach(item => {
            const wrongs = crosses.filter(x=>x.p!==item.p).map(x=>x.g);
            qs.push(this.makeQ(id++,"unit11","hard",`${item.p}杂交，后代基因型是`,item.g,wrongs,`${item.p}杂交，后代基因型是${item.g}。`));
            const wrongs2 = crosses.filter(x=>x.p!==item.p).map(x=>x.ph);
            qs.push(this.makeQ(id++,"unit11","hard",`${item.p}杂交，后代表现型是`,item.ph,wrongs2,`${item.p}杂交，后代表现型是${item.ph}。`));
        });

        // 遗传病题
        const diseases = [
            {d:"白化病",t:"常染色体隐性遗传"},{d:"红绿色盲",t:"X染色体隐性遗传"},{d:"血友病",t:"X染色体隐性遗传"},
            {d:"多指",t:"常染色体显性遗传"},{d:"先天性聋哑",t:"常染色体隐性遗传"}
        ];
        diseases.forEach(item => {
            const wrongs = diseases.filter(x=>x.d!==item.d).map(x=>x.t);
            qs.push(this.makeQ(id++,"unit11","hard",`${item.d}的遗传方式是`,item.t,wrongs,`${item.d}属于${item.t}。`));
        });
        this.baseId = id; return qs;
    },

    // 生态系统题库
    genEcology() {
        const qs = []; let id = this.baseId;
        const ecosystems = ["森林","草原","湿地","海洋","农田","池塘","沙漠","城市","河流","湖泊"];
        const components = [{c:"生产者",e:"绿色植物",f:"制造有机物"},{c:"消费者",e:"动物",f:"直接或间接以植物为食"},{c:"分解者",e:"细菌和真菌",f:"分解有机物"}];

        ecosystems.forEach(eco => {
            qs.push(this.makeQ(id++,"unit13","easy",`${eco}生态系统中，能量流动的起点是`,"生产者",["消费者","分解者","阳光"],`在${eco}生态系统中，生产者通过光合作用固定太阳能，是能量流动的起点。`));
            qs.push(this.makeQ(id++,"unit13","easy",`${eco}生态系统中，物质循环和能量流动的渠道是`,"食物链和食物网",["生产者","消费者","分解者"],`食物链和食物网是生态系统中物质循环和能量流动的渠道。`));
        });

        components.forEach(item => {
            const wrongs = components.filter(x=>x.c!==item.c).map(x=>x.e);
            qs.push(this.makeQ(id++,"unit13","easy",`生态系统中的${item.c}主要是`,item.e,wrongs,`${item.c}主要是${item.e}，功能是${item.f}。`));
        });

        // 食物链题
        const chains = [
            {chain:"草→兔→狐",levels:3,producer:"草",top:"狐"},
            {chain:"草→蝗虫→青蛙→蛇",levels:4,producer:"草",top:"蛇"},
            {chain:"草→蝗虫→青蛙→蛇→鹰",levels:5,producer:"草",top:"鹰"},
            {chain:"浮游植物→小鱼→大鱼",levels:3,producer:"浮游植物",top:"大鱼"},
            {chain:"树叶→毛毛虫→麻雀→鹰",levels:4,producer:"树叶",top:"鹰"},
            {chain:"藻类→虾→小鱼→大鱼→鲨鱼",levels:5,producer:"藻类",top:"鲨鱼"}
        ];
        chains.forEach(item => {
            qs.push(this.makeQ(id++,"unit13","medium",`在食物链"${item.chain}"中，生产者是`,item.producer,["消费者","分解者","阳光"],`在这条食物链中，${item.producer}是生产者。`));
            qs.push(this.makeQ(id++,"unit13","medium",`在食物链"${item.chain}"中，共有几个营养级`,`${item.levels}个`,["2个","6个","7个"],`这条食物链有${item.levels}个营养级。`));
        });
        this.baseId = id; return qs;
    },

    // 实验题库
    genExperiments() {
        const qs = []; let id = this.baseId;
        const exps = [
            {name:"光合作用产生淀粉",var:"光",reagent:"碘液",result:"见光部分变蓝"},
            {name:"光合作用需要二氧化碳",var:"二氧化碳",reagent:"碘液",result:"有CO2组变蓝"},
            {name:"光合作用产生氧气",var:"光",reagent:"带火星木条",result:"木条复燃"},
            {name:"呼吸作用产生二氧化碳",var:"种子",reagent:"澄清石灰水",result:"石灰水变浑浊"},
            {name:"唾液消化淀粉",var:"唾液",reagent:"碘液",result:"有唾液组不变蓝"},
            {name:"种子萌发需要水",var:"水分",reagent:"观察",result:"有水组萌发"},
            {name:"种子萌发需要适宜温度",var:"温度",reagent:"观察",result:"常温组萌发最好"},
            {name:"种子萌发需要空气",var:"空气",reagent:"观察",result:"有空气组萌发"}
        ];
        exps.forEach(item => {
            const wrongs = exps.filter(x=>x.name!==item.name).map(x=>x.var);
            qs.push(this.makeQ(id++,"unit4","medium",`"${item.name}"实验的变量是`,item.var,wrongs,`该实验的变量是${item.var}。`));
            const wrongs2 = exps.filter(x=>x.name!==item.name).map(x=>x.reagent);
            qs.push(this.makeQ(id++,"unit4","medium",`"${item.name}"实验使用的检验试剂是`,item.reagent,wrongs2,`该实验使用${item.reagent}检验。`));
        });
        this.baseId = id; return qs;
    },

    // 判断题库
    genJudge() {
        const qs = []; let id = this.baseId;
        const judges = [
            {c:"所有生物都由细胞构成",a:"错误",r:"病毒没有细胞结构"},
            {c:"植物细胞都有叶绿体",a:"错误",r:"根细胞没有叶绿体"},
            {c:"动物细胞没有细胞壁",a:"正确",r:"细胞壁是植物细胞特有的"},
            {c:"所有动物都用肺呼吸",a:"错误",r:"鱼用鳃呼吸"},
            {c:"鲸是鱼类",a:"错误",r:"鲸是哺乳动物"},
            {c:"蝙蝠是鸟类",a:"错误",r:"蝙蝠是哺乳动物"},
            {c:"蜘蛛是昆虫",a:"错误",r:"蜘蛛有8条腿，不是昆虫"},
            {c:"光合作用只在白天进行",a:"正确",r:"光合作用需要光"},
            {c:"呼吸作用只在夜间进行",a:"错误",r:"呼吸作用时刻进行"},
            {c:"动脉中流动的都是动脉血",a:"错误",r:"肺动脉中是静脉血"},
            {c:"静脉中流动的都是静脉血",a:"错误",r:"肺静脉中是动脉血"},
            {c:"胆汁中含有消化酶",a:"错误",r:"胆汁不含消化酶"},
            {c:"尿液在膀胱中形成",a:"错误",r:"尿液在肾脏中形成"},
            {c:"所有反射都需要大脑参与",a:"错误",r:"非条件反射不需要大脑"},
            {c:"基因都位于染色体上",a:"错误",r:"线粒体和叶绿体中也有基因"},
            {c:"生男生女由母亲决定",a:"错误",r:"由父亲的精子类型决定"},
            {c:"能量在生态系统中可以循环",a:"错误",r:"能量单向流动不能循环"},
            {c:"物质在生态系统中可以循环",a:"正确",r:"物质可以循环利用"},
            {c:"食物链的起点是生产者",a:"正确",r:"食物链从生产者开始"},
            {c:"人体最大的器官是皮肤",a:"正确",r:"皮肤是最大的器官"},
            {c:"人体最大的消化腺是肝脏",a:"正确",r:"肝脏是最大的消化腺"},
            {c:"小肠是消化吸收的主要场所",a:"正确",r:"小肠有多种消化液和绒毛"},
            {c:"红细胞有细胞核",a:"错误",r:"成熟红细胞没有细胞核"},
            {c:"白细胞能吞噬病菌",a:"正确",r:"白细胞有防御功能"},
            {c:"血小板能运输氧气",a:"错误",r:"红细胞运输氧气"},
            {c:"近视眼应戴凹透镜",a:"正确",r:"凹透镜可以矫正近视"},
            {c:"远视眼应戴凸透镜",a:"正确",r:"凸透镜可以矫正远视"},
            {c:"条件反射是先天就有的",a:"错误",r:"条件反射是后天学习获得的"},
            {c:"膝跳反射是条件反射",a:"错误",r:"膝跳反射是非条件反射"},
            {c:"克隆是有性生殖",a:"错误",r:"克隆是无性生殖"}
        ];
        judges.forEach(item => {
            qs.push({id:id++,type:"judge",unit:this.pick(["unit1","unit2","unit3","unit4","unit5","unit6","unit7","unit8","unit9","unit10","unit11","unit12","unit13"]),
                difficulty:this.pick(["easy","medium"]),score:2,content:item.c,answer:item.a,analysis:item.r});
        });
        this.baseId = id; return qs;
    },

    generateAll() {
        return [...this.genNutrients(),...this.genHormones(),...this.genGenetics(),...this.genEcology(),...this.genExperiments(),...this.genJudge()];
    }
};
