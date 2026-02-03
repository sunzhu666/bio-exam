// 超大题库生成器31 - 根的结构
const giantGen31 = {
    baseId: 320000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genRootStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"根冠",func:"保护分生区",feature:"细胞排列不整齐",location:"根尖最前端"},
            {part:"分生区",func:"细胞分裂",feature:"细胞小核大",location:"根冠上方"},
            {part:"伸长区",func:"细胞伸长",feature:"细胞迅速伸长",location:"分生区上方"},
            {part:"成熟区",func:"吸收水分和无机盐",feature:"有根毛",location:"伸长区上方"},
            {part:"根毛",func:"增大吸收面积",feature:"表皮细胞突起",location:"成熟区"},
            {part:"表皮",func:"保护和吸收",feature:"最外层",location:"根的外层"},
            {part:"皮层",func:"储存和运输",feature:"薄壁细胞",location:"表皮内侧"},
            {part:"维管柱",func:"输导",feature:"含导管和筛管",location:"根的中央"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","medium",`根的${p.part}的功能是`,p.func,["无功能","随机","不确定"],`${p.part}的功能是${p.func}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`根的${p.part}的特点是`,p.feature,["无特点","随机","不确定"],`${p.part}${p.feature}。`));
            qs.push(this.makeQ(id++,"unit3","easy",`根的${p.part}位于`,p.location,["无位置","随机","不确定"],`${p.part}在${p.location}。`));
        });
        this.baseId = id; return qs;
    },

    genRootTypes() {
        const qs = []; let id = this.baseId;
        const types = [
            {type:"直根系",feature:"主根明显",example:"大豆萝卜",plant:"双子叶植物"},
            {type:"须根系",feature:"主根不明显",example:"小麦玉米",plant:"单子叶植物"},
            {type:"气生根",feature:"暴露在空气中",example:"榕树",func:"吸收水分支撑"},
            {type:"支柱根",feature:"从茎上长出支撑",example:"玉米",func:"支撑植物体"},
            {type:"呼吸根",feature:"向上生长",example:"红树",func:"呼吸"},
            {type:"贮藏根",feature:"储存营养物质",example:"萝卜红薯",func:"储存营养"},
            {type:"攀援根",feature:"附着在物体上",example:"常春藤",func:"攀援"},
            {type:"寄生根",feature:"吸取寄主营养",example:"菟丝子",func:"寄生"}
        ];
        types.forEach(t => {
            qs.push(this.makeQ(id++,"unit3","medium",`${t.type}的特点是`,t.feature,["无特点","随机","不确定"],`${t.type}${t.feature}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${t.type}的例子是`,t.example,["无例子","随机","不确定"],`${t.type}如${t.example}。`));
            if(t.plant) {
                qs.push(this.makeQ(id++,"unit3","medium",`${t.type}常见于`,t.plant,["无植物","随机","不确定"],`${t.type}常见于${t.plant}。`));
            }
            if(t.func) {
                qs.push(this.makeQ(id++,"unit3","hard",`${t.type}的功能是`,t.func,["无功能","随机","不确定"],`${t.type}的功能是${t.func}。`));
            }
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genRootStructure(),...this.genRootTypes()]; }
};
