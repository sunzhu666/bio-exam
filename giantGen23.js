// 超大题库生成器23 - 人体皮肤
const giantGen23 = {
    baseId: 280000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genSkinStructure() {
        const qs = []; let id = this.baseId;
        const structures = [
            {structure:"表皮",func:"保护",feature:"无血管",cells:"角质细胞"},
            {structure:"真皮",func:"支撑和营养",feature:"有血管神经",cells:"成纤维细胞"},
            {structure:"皮下组织",func:"保温和缓冲",feature:"脂肪组织",cells:"脂肪细胞"},
            {structure:"汗腺",func:"分泌汗液调节体温",feature:"管状腺体",location:"真皮和皮下"},
            {structure:"皮脂腺",func:"分泌皮脂润滑皮肤",feature:"泡状腺体",location:"真皮"},
            {structure:"毛囊",func:"产生毛发",feature:"包围毛根",location:"真皮"},
            {structure:"立毛肌",func:"使毛发竖立",feature:"平滑肌",location:"毛囊旁"},
            {structure:"感觉神经末梢",func:"感受刺激",feature:"多种类型",location:"真皮"}
        ];
        structures.forEach(s => {
            qs.push(this.makeQ(id++,"unit9","medium",`皮肤${s.structure}的功能是`,s.func,["无功能","随机","不确定"],`${s.structure}的功能是${s.func}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`皮肤${s.structure}的特点是`,s.feature,["无特点","随机","不确定"],`${s.structure}${s.feature}。`));
            if(s.cells) {
                qs.push(this.makeQ(id++,"unit9","hard",`皮肤${s.structure}的主要细胞是`,s.cells,["无细胞","随机","不确定"],`${s.structure}有${s.cells}。`));
            }
            if(s.location) {
                qs.push(this.makeQ(id++,"unit9","medium",`皮肤${s.structure}位于`,s.location,["无位置","随机","不确定"],`${s.structure}在${s.location}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genSkinFunctions() {
        const qs = []; let id = this.baseId;
        const functions = [
            {func:"保护功能",mechanism:"阻挡病原体和紫外线",structure:"表皮角质层"},
            {func:"感觉功能",mechanism:"感受触压温痛",structure:"感觉神经末梢"},
            {func:"调节体温",mechanism:"汗腺分泌和血管舒缩",structure:"汗腺和血管"},
            {func:"排泄功能",mechanism:"排出汗液",structure:"汗腺"},
            {func:"分泌功能",mechanism:"分泌皮脂",structure:"皮脂腺"},
            {func:"吸收功能",mechanism:"吸收脂溶性物质",structure:"表皮"},
            {func:"合成维生素D",mechanism:"紫外线照射",structure:"表皮"},
            {func:"免疫功能",mechanism:"朗格汉斯细胞",structure:"表皮"}
        ];
        functions.forEach(f => {
            qs.push(this.makeQ(id++,"unit9","medium",`皮肤${f.func}的机制是`,f.mechanism,["无机制","随机","不确定"],`${f.func}通过${f.mechanism}实现。`));
            qs.push(this.makeQ(id++,"unit9","medium",`皮肤${f.func}的结构基础是`,f.structure,["无结构","随机","不确定"],`${f.func}依赖${f.structure}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genSkinStructure(),...this.genSkinFunctions()]; }
};
