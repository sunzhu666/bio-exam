// 超大题库生成器63 - 人体器官系统
const giantGen63 = {
    baseId: 480000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genOrganSystems() {
        const qs = []; let id = this.baseId;
        const systems = [
            {system:"运动系统",organs:"骨骼肌肉关节",function:"运动和支持"},
            {system:"消化系统",organs:"消化道和消化腺",function:"消化食物吸收营养"},
            {system:"呼吸系统",organs:"呼吸道和肺",function:"气体交换"},
            {system:"循环系统",organs:"心脏血管血液",function:"运输物质"},
            {system:"泌尿系统",organs:"肾脏输尿管膀胱尿道",function:"排出代谢废物"},
            {system:"神经系统",organs:"脑脊髓神经",function:"调节生命活动"},
            {system:"内分泌系统",organs:"各种内分泌腺",function:"分泌激素调节"},
            {system:"生殖系统",organs:"生殖器官",function:"繁殖后代"}
        ];
        systems.forEach(s => {
            qs.push(this.makeQ(id++,"unit1","easy",`${s.system}包括的器官是`,s.organs,["无器官","随机","不确定"],`${s.system}包括${s.organs}。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${s.system}的功能是`,s.function,["无功能","随机","不确定"],`${s.system}${s.function}。`));
        });
        this.baseId = id; return qs;
    },

    genOrganStructure() {
        const qs = []; let id = this.baseId;
        const organs = [
            {organ:"心脏",structure:"四个腔",function:"泵血",location:"胸腔中部偏左"},
            {organ:"肺",structure:"肺泡",function:"气体交换",location:"胸腔"},
            {organ:"肝脏",structure:"肝小叶",function:"分泌胆汁解毒",location:"腹腔右上部"},
            {organ:"肾脏",structure:"肾单位",function:"形成尿液",location:"腹腔后壁"},
            {organ:"胃",structure:"胃壁三层",function:"初步消化蛋白质",location:"腹腔左上部"},
            {organ:"小肠",structure:"绒毛皱襞",function:"消化吸收",location:"腹腔"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit1","medium",`${o.organ}的结构特点是`,o.structure,["无结构","随机","不确定"],`${o.organ}有${o.structure}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${o.organ}的功能是`,o.function,["无功能","随机","不确定"],`${o.organ}${o.function}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${o.organ}的位置是`,o.location,["无位置","随机","不确定"],`${o.organ}位于${o.location}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genOrganSystems(),...this.genOrganStructure()]; }
};
