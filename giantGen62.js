// 超大题库生成器62 - 动物组织
const giantGen62 = {
    baseId: 475000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genAnimalTissues() {
        const qs = []; let id = this.baseId;
        const tissues = [
            {tissue:"上皮组织",feature:"细胞排列紧密",location:"皮肤内脏表面",function:"保护分泌"},
            {tissue:"结缔组织",feature:"细胞间隙大基质多",type:"血液骨软骨脂肪",function:"连接支持保护"},
            {tissue:"肌肉组织",feature:"细胞呈纤维状",type:"骨骼肌心肌平滑肌",function:"收缩运动"},
            {tissue:"神经组织",feature:"由神经细胞组成",location:"脑脊髓神经",function:"接受刺激传导兴奋"}
        ];
        tissues.forEach(t => {
            qs.push(this.makeQ(id++,"unit1","medium",`${t.tissue}的特点是`,t.feature,["无特点","随机","不确定"],`${t.tissue}${t.feature}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${t.tissue}的类型是`,t.type||t.location,["无类型","随机","不确定"],`${t.tissue}包括${t.type||t.location}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${t.tissue}的功能是`,t.function,["无功能","随机","不确定"],`${t.tissue}${t.function}。`));
        });
        this.baseId = id; return qs;
    },

    genMuscleTypes() {
        const qs = []; let id = this.baseId;
        const muscles = [
            {muscle:"骨骼肌",feature:"有横纹多核",control:"受意识控制",location:"附着在骨骼上"},
            {muscle:"心肌",feature:"有横纹单核",control:"不受意识控制",location:"心脏壁"},
            {muscle:"平滑肌",feature:"无横纹梭形",control:"不受意识控制",location:"内脏壁血管壁"}
        ];
        muscles.forEach(m => {
            qs.push(this.makeQ(id++,"unit1","hard",`${m.muscle}的特点是`,m.feature,["无特点","随机","不确定"],`${m.muscle}${m.feature}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${m.muscle}的控制方式是`,m.control,["无控制","随机","不确定"],`${m.muscle}${m.control}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${m.muscle}的分布是`,m.location,["无分布","随机","不确定"],`${m.muscle}分布在${m.location}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genAnimalTissues(),...this.genMuscleTypes()]; }
};
