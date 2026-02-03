// 超大题库生成器12 - 人体运动系统
const giantGen12 = {
    baseId: 225000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBones() {
        const qs = []; let id = this.baseId;
        const bones = [
            {bone:"颅骨",func:"保护脑",type:"扁骨",location:"头部"},
            {bone:"脊柱",func:"支撑身体保护脊髓",type:"不规则骨",location:"躯干中轴"},
            {bone:"肋骨",func:"保护心肺",type:"扁骨",location:"胸腔"},
            {bone:"肱骨",func:"支撑上臂",type:"长骨",location:"上臂"},
            {bone:"股骨",func:"支撑大腿",type:"长骨",location:"大腿"},
            {bone:"胫骨",func:"支撑小腿",type:"长骨",location:"小腿"},
            {bone:"腓骨",func:"辅助支撑小腿",type:"长骨",location:"小腿外侧"},
            {bone:"尺骨",func:"支撑前臂",type:"长骨",location:"前臂内侧"},
            {bone:"桡骨",func:"支撑前臂",type:"长骨",location:"前臂外侧"},
            {bone:"髌骨",func:"保护膝关节",type:"籽骨",location:"膝盖"}
        ];
        bones.forEach(b => {
            qs.push(this.makeQ(id++,"unit1","medium",`${b.bone}的功能是`,b.func,["无功能","随机","不确定"],`${b.bone}的功能是${b.func}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${b.bone}属于`,b.type,["无类型","随机","不确定"],`${b.bone}是${b.type}。`));
            qs.push(this.makeQ(id++,"unit1","easy",`${b.bone}位于`,b.location,["无位置","随机","不确定"],`${b.bone}位于${b.location}。`));
        });
        this.baseId = id; return qs;
    },

    genMuscles() {
        const qs = []; let id = this.baseId;
        const muscles = [
            {muscle:"肱二头肌",func:"屈肘",location:"上臂前侧",antagonist:"肱三头肌"},
            {muscle:"肱三头肌",func:"伸肘",location:"上臂后侧",antagonist:"肱二头肌"},
            {muscle:"股四头肌",func:"伸膝",location:"大腿前侧",antagonist:"股二头肌"},
            {muscle:"股二头肌",func:"屈膝",location:"大腿后侧",antagonist:"股四头肌"},
            {muscle:"腓肠肌",func:"跖屈踝关节",location:"小腿后侧",antagonist:"胫骨前肌"},
            {muscle:"胸大肌",func:"使上臂内收",location:"胸部",antagonist:"背阔肌"},
            {muscle:"背阔肌",func:"使上臂后伸",location:"背部",antagonist:"胸大肌"},
            {muscle:"腹直肌",func:"使躯干前屈",location:"腹部",antagonist:"竖脊肌"},
            {muscle:"三角肌",func:"使上臂外展",location:"肩部",antagonist:"胸大肌"},
            {muscle:"臀大肌",func:"使大腿后伸",location:"臀部",antagonist:"髂腰肌"}
        ];
        muscles.forEach(m => {
            qs.push(this.makeQ(id++,"unit1","medium",`${m.muscle}的功能是`,m.func,["无功能","随机","不确定"],`${m.muscle}的功能是${m.func}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${m.muscle}位于`,m.location,["无位置","随机","不确定"],`${m.muscle}位于${m.location}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${m.muscle}的拮抗肌是`,m.antagonist,["无拮抗肌","随机","不确定"],`${m.muscle}的拮抗肌是${m.antagonist}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBones(),...this.genMuscles()]; }
};
