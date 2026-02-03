// 超大题库生成器98 - 实验技能综合
const giantGen98 = {
    baseId: 655000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genLabSkills() {
        const qs = []; let id = this.baseId;
        const skills = [
            {skill:"显微镜使用",step:"对光→放片→调焦→观察",note:"先低倍后高倍"},
            {skill:"临时装片制作",step:"擦→滴→取→展→盖→染",liquid:"生理盐水或清水"},
            {skill:"染色",dye:"碘液染细胞核",effect:"使结构更清晰"},
            {skill:"解剖",tool:"解剖刀解剖针镊子",note:"从背面剪开"},
            {skill:"测量",tool:"直尺量筒天平",note:"读数时视线与刻度平齐"}
        ];
        skills.forEach(s => {
            qs.push(this.makeQ(id++,"unit1","medium",`${s.skill}的步骤是`,s.step||s.dye||s.tool,["无步骤","随机","不确定"],`${s.skill}${s.step||s.dye||s.tool}。`));
            if(s.note) qs.push(this.makeQ(id++,"unit1","medium",`${s.skill}的注意事项是`,s.note,["无注意","随机","不确定"],`${s.skill}要${s.note}。`));
        });
        this.baseId = id; return qs;
    },

    genClassicExperiments() {
        const qs = []; let id = this.baseId;
        const experiments = [
            {experiment:"观察洋葱表皮细胞",material:"洋葱鳞片叶",dye:"碘液",observe:"细胞壁细胞核"},
            {experiment:"观察人口腔上皮细胞",material:"口腔内壁",liquid:"生理盐水",dye:"碘液"},
            {experiment:"观察叶片结构",method:"徒手切片",observe:"表皮叶肉叶脉"},
            {experiment:"探究光合作用",variable:"光照",indicator:"碘液检验淀粉"},
            {experiment:"探究种子萌发条件",variable:"水分温度空气",control:"单一变量"}
        ];
        experiments.forEach(e => {
            qs.push(this.makeQ(id++,"unit1","hard",`${e.experiment}的材料是`,e.material||e.variable,["无材料","随机","不确定"],`${e.experiment}用${e.material||e.variable}。`));
            if(e.dye) qs.push(this.makeQ(id++,"unit1","hard",`${e.experiment}的染色剂是`,e.dye,["无染色剂","随机","不确定"],`${e.experiment}用${e.dye}染色。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genLabSkills(),...this.genClassicExperiments()]; }
};
