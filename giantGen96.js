// 超大题库生成器96 - 人体运动系统
const giantGen96 = {
    baseId: 645000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBoneStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"骨膜",function:"保护营养骨骼",content:"血管神经成骨细胞"},
            {part:"骨质",type:"骨密质和骨松质",function:"支撑保护"},
            {part:"骨髓",type:"红骨髓和黄骨髓",function:"造血储存脂肪"},
            {part:"关节面",feature:"覆盖关节软骨",function:"减少摩擦"},
            {part:"关节囊",feature:"结缔组织",function:"连接骨骼分泌滑液"},
            {part:"关节腔",content:"滑液",function:"润滑减少摩擦"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit1","medium",`${p.part}的功能是`,p.function,["无功能","随机","不确定"],`${p.part}${p.function}。`));
            if(p.content) qs.push(this.makeQ(id++,"unit1","medium",`${p.part}的内容是`,p.content,["无内容","随机","不确定"],`${p.part}含有${p.content}。`));
        });
        this.baseId = id; return qs;
    },

    genMuscleMovement() {
        const qs = []; let id = this.baseId;
        const facts = [
            {fact:"肌肉的附着",attach:"骨骼",structure:"肌腱"},
            {fact:"肌肉的收缩",result:"牵动骨骼运动",energy:"ATP"},
            {fact:"屈肘动作",biceps:"收缩",triceps:"舒张"},
            {fact:"伸肘动作",biceps:"舒张",triceps:"收缩"},
            {fact:"运动的产生",need:"骨骼肌肉关节神经",coordination:"协调配合"}
        ];
        facts.forEach(f => {
            qs.push(this.makeQ(id++,"unit1","medium",`${f.fact}是`,f.attach||f.result||f.biceps||f.need,["无答案","随机","不确定"],`${f.fact}${f.attach||f.result||f.biceps||f.need}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBoneStructure(),...this.genMuscleMovement()]; }
};
