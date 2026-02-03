// 大规模题库生成器C - 人体器官与系统
const megaGenC = {
    baseId: 60000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genDigestiveOrgans() {
        const qs = []; let id = this.baseId;
        const organs = [
            {name:"口腔",system:"消化系统",func:"初步消化淀粉",related:"唾液腺"},
            {name:"食道",system:"消化系统",func:"输送食物",related:"蠕动"},
            {name:"胃",system:"消化系统",func:"初步消化蛋白质",related:"胃液"},
            {name:"小肠",system:"消化系统",func:"消化吸收主要场所",related:"绒毛"},
            {name:"大肠",system:"消化系统",func:"吸收水分",related:"粪便形成"},
            {name:"肝脏",system:"消化系统",func:"分泌胆汁",related:"最大消化腺"},
            {name:"胰腺",system:"消化系统",func:"分泌胰液",related:"多种消化酶"},
            {name:"唾液腺",system:"消化系统",func:"分泌唾液",related:"淀粉酶"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit5","medium",`${o.name}属于`,o.system,["呼吸系统","循环系统","泌尿系统"],`${o.name}属于${o.system}。`));
            qs.push(this.makeQ(id++,"unit5","medium",`${o.name}的主要功能是`,o.func,["气体交换","血液循环","排出废物"],`${o.name}的功能是${o.func}。`));
            qs.push(this.makeQ(id++,"unit5","medium",`${o.name}与什么有关`,o.related,["呼吸","心跳","排尿"],`${o.name}与${o.related}有关。`));
        });
        this.baseId = id; return qs;
    },

    genRespiratoryOrgans() {
        const qs = []; let id = this.baseId;
        const organs = [
            {name:"鼻腔",system:"呼吸系统",func:"温暖湿润清洁空气",related:"鼻毛黏膜"},
            {name:"咽",system:"呼吸系统",func:"气体食物通道",related:"吞咽反射"},
            {name:"喉",system:"呼吸系统",func:"发声",related:"声带"},
            {name:"气管",system:"呼吸系统",func:"输送气体",related:"C形软骨"},
            {name:"支气管",system:"呼吸系统",func:"分支输送气体",related:"进入肺"},
            {name:"肺",system:"呼吸系统",func:"气体交换",related:"肺泡"},
            {name:"肺泡",system:"呼吸系统",func:"气体交换单位",related:"毛细血管"},
            {name:"膈肌",system:"呼吸系统",func:"呼吸运动",related:"收缩舒张"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit6","medium",`${o.name}属于`,o.system,["消化系统","循环系统","泌尿系统"],`${o.name}属于${o.system}。`));
            qs.push(this.makeQ(id++,"unit6","medium",`${o.name}的主要功能是`,o.func,["消化食物","血液循环","排出废物"],`${o.name}的功能是${o.func}。`));
        });
        this.baseId = id; return qs;
    },

    genCirculatoryOrgans() {
        const qs = []; let id = this.baseId;
        const organs = [
            {name:"心脏",system:"循环系统",func:"泵血",related:"四个腔"},
            {name:"动脉",system:"循环系统",func:"输送血液离开心脏",related:"壁厚弹性大"},
            {name:"静脉",system:"循环系统",func:"输送血液回心脏",related:"有瓣膜"},
            {name:"毛细血管",system:"循环系统",func:"物质交换",related:"壁薄一层细胞"},
            {name:"左心房",system:"循环系统",func:"接收肺静脉血液",related:"肺循环终点"},
            {name:"左心室",system:"循环系统",func:"泵血到全身",related:"壁最厚"},
            {name:"右心房",system:"循环系统",func:"接收全身静脉血",related:"体循环终点"},
            {name:"右心室",system:"循环系统",func:"泵血到肺",related:"肺循环起点"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit7","medium",`${o.name}属于`,o.system,["消化系统","呼吸系统","泌尿系统"],`${o.name}属于${o.system}。`));
            qs.push(this.makeQ(id++,"unit7","medium",`${o.name}的主要功能是`,o.func,["消化食物","气体交换","排出废物"],`${o.name}的功能是${o.func}。`));
            qs.push(this.makeQ(id++,"unit7","hard",`${o.name}的特点是`,o.related,["无特点","随机","不确定"],`${o.name}的特点是${o.related}。`));
        });
        this.baseId = id; return qs;
    },

    genUrinaryOrgans() {
        const qs = []; let id = this.baseId;
        const organs = [
            {name:"肾脏",system:"泌尿系统",func:"形成尿液",related:"肾单位"},
            {name:"输尿管",system:"泌尿系统",func:"输送尿液",related:"蠕动"},
            {name:"膀胱",system:"泌尿系统",func:"储存尿液",related:"括约肌"},
            {name:"尿道",system:"泌尿系统",func:"排出尿液",related:"排尿反射"},
            {name:"肾小球",system:"泌尿系统",func:"过滤血液",related:"毛细血管球"},
            {name:"肾小囊",system:"泌尿系统",func:"收集原尿",related:"双层囊"},
            {name:"肾小管",system:"泌尿系统",func:"重吸收",related:"形成尿液"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit8","medium",`${o.name}属于`,o.system,["消化系统","呼吸系统","循环系统"],`${o.name}属于${o.system}。`));
            qs.push(this.makeQ(id++,"unit8","medium",`${o.name}的主要功能是`,o.func,["消化食物","气体交换","血液循环"],`${o.name}的功能是${o.func}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genDigestiveOrgans(),...this.genRespiratoryOrgans(),...this.genCirculatoryOrgans(),...this.genUrinaryOrgans()]; }
};
