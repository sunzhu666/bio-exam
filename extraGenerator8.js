// 扩展题库生成器8 - 动物行为与分类
const extraGenerator8 = {
    baseId: 40000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genAnimalBehaviors() {
        const qs = []; let id = this.baseId;
        const behaviors = [
            {name:"觅食行为",example:"蜜蜂采蜜",type:"先天性行为",purpose:"获取食物"},
            {name:"防御行为",example:"乌贼喷墨",type:"先天性行为",purpose:"逃避敌害"},
            {name:"繁殖行为",example:"孔雀开屏",type:"先天性行为",purpose:"吸引配偶"},
            {name:"迁徙行为",example:"大雁南飞",type:"先天性行为",purpose:"适应环境"},
            {name:"社会行为",example:"蜜蜂分工",type:"先天性行为",purpose:"提高生存效率"},
            {name:"领域行为",example:"狗撒尿标记",type:"先天性行为",purpose:"保护领地"},
            {name:"攻击行为",example:"公鸡打架",type:"先天性行为",purpose:"争夺资源"},
            {name:"节律行为",example:"公鸡报晓",type:"先天性行为",purpose:"适应环境周期"},
            {name:"学习行为",example:"小狗算术",type:"后天学习",purpose:"适应环境"},
            {name:"印随行为",example:"小鸭跟随",type:"后天学习",purpose:"识别亲代"},
            {name:"模仿行为",example:"鹦鹉学舌",type:"后天学习",purpose:"学习技能"},
            {name:"条件反射",example:"狗听铃声分泌唾液",type:"后天学习",purpose:"预测事件"}
        ];
        behaviors.forEach(b => {
            qs.push(this.makeQ(id++,"unit1","medium",`${b.example}属于`,b.name,["无行为","随机行为","被动行为"],`${b.example}是${b.name}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${b.name}属于`,b.type,["无意义行为","有害行为","病态行为"],`${b.name}是${b.type}。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${b.name}的目的是`,b.purpose,["无目的","有害生存","消耗能量"],`${b.name}的目的是${b.purpose}。`));
        });
        this.baseId = id; return qs;
    },

    genAnimalAdaptations() {
        const qs = []; let id = this.baseId;
        const adaptations = [
            {animal:"北极熊",adaptation:"白色皮毛",environment:"北极",purpose:"保护色"},
            {animal:"骆驼",adaptation:"驼峰储脂",environment:"沙漠",purpose:"储存能量"},
            {animal:"企鹅",adaptation:"流线型身体",environment:"南极",purpose:"减少阻力"},
            {animal:"蝙蝠",adaptation:"回声定位",environment:"夜间",purpose:"探测猎物"},
            {animal:"变色龙",adaptation:"变色",environment:"多种环境",purpose:"伪装"},
            {animal:"刺猬",adaptation:"身体卷曲",environment:"遇敌时",purpose:"防御"},
            {animal:"壁虎",adaptation:"断尾",environment:"遇敌时",purpose:"逃脱"},
            {animal:"海豚",adaptation:"流线型身体",environment:"海洋",purpose:"快速游泳"},
            {animal:"猎豹",adaptation:"长腿",environment:"草原",purpose:"快速奔跑"},
            {animal:"啄木鸟",adaptation:"尖嘴",environment:"树林",purpose:"啄食昆虫"},
            {animal:"蜂鸟",adaptation:"长喙",environment:"花丛",purpose:"吸食花蜜"},
            {animal:"猫头鹰",adaptation:"大眼睛",environment:"夜间",purpose:"夜视"}
        ];
        adaptations.forEach(a => {
            qs.push(this.makeQ(id++,"unit1","easy",`${a.animal}的${a.adaptation}是对什么环境的适应`,a.environment,["无适应","有害适应","随机变化"],`${a.animal}的${a.adaptation}适应${a.environment}环境。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${a.animal}${a.adaptation}的作用是`,a.purpose,["无作用","有害","消耗能量"],`${a.animal}${a.adaptation}用于${a.purpose}。`));
        });
        this.baseId = id; return qs;
    },

    genAnimalGroups() {
        const qs = []; let id = this.baseId;
        const groups = [
            {group:"原生动物",example:"草履虫、变形虫",feature:"单细胞",habitat:"水中"},
            {group:"腔肠动物",example:"水螅、水母、珊瑚虫",feature:"有刺细胞",habitat:"水中"},
            {group:"扁形动物",example:"涡虫、血吸虫",feature:"身体扁平",habitat:"水中或寄生"},
            {group:"线形动物",example:"蛔虫、钩虫",feature:"身体细长",habitat:"寄生"},
            {group:"环节动物",example:"蚯蚓、水蛭",feature:"身体分节",habitat:"土壤或水中"},
            {group:"软体动物",example:"蜗牛、河蚌、乌贼",feature:"身体柔软有外套膜",habitat:"多种环境"},
            {group:"节肢动物",example:"昆虫、蜘蛛、虾蟹",feature:"身体分节有外骨骼",habitat:"多种环境"},
            {group:"棘皮动物",example:"海星、海参、海胆",feature:"辐射对称",habitat:"海洋"}
        ];
        groups.forEach(g => {
            qs.push(this.makeQ(id++,"unit1","medium",`${g.example}属于`,g.group,["脊椎动物","植物","真菌"],`${g.example}属于${g.group}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${g.group}的主要特征是`,g.feature,["有脊柱","恒温","胎生"],`${g.group}的特征是${g.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genAnimalBehaviors(),...this.genAnimalAdaptations(),...this.genAnimalGroups()]; }
};
