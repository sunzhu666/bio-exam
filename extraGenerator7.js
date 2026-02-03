// 扩展题库生成器7 - 植物生理详细题
const extraGenerator7 = {
    baseId: 37000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPlantStructures() {
        const qs = []; let id = this.baseId;
        const roots = [
            {part:"根冠",func:"保护分生区",feature:"细胞排列不整齐"},
            {part:"分生区",func:"细胞分裂产生新细胞",feature:"细胞小、排列紧密"},
            {part:"伸长区",func:"细胞伸长使根生长",feature:"细胞逐渐变长"},
            {part:"成熟区",func:"吸收水分和无机盐",feature:"有根毛"}
        ];
        roots.forEach(r => {
            qs.push(this.makeQ(id++,"unit3","medium",`根尖${r.part}的功能是`,r.func,["光合作用","储存营养","运输有机物"],`${r.part}的功能是${r.func}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`根尖${r.part}的特点是`,r.feature,["有叶绿体","能光合作用","有导管"],`${r.part}的特点是${r.feature}。`));
        });
        const stems = [
            {part:"表皮",func:"保护",feature:"细胞排列紧密"},
            {part:"皮层",func:"储存营养",feature:"有薄壁细胞"},
            {part:"维管束",func:"运输水分和有机物",feature:"有导管和筛管"},
            {part:"髓",func:"储存营养",feature:"位于茎中央"}
        ];
        stems.forEach(s => {
            qs.push(this.makeQ(id++,"unit3","medium",`茎的${s.part}的功能是`,s.func,["光合作用","吸收水分","繁殖"],`茎的${s.part}功能是${s.func}。`));
        });
        const leaves = [
            {part:"表皮",func:"保护",feature:"有气孔"},
            {part:"叶肉",func:"光合作用",feature:"有叶绿体"},
            {part:"叶脉",func:"运输和支持",feature:"有导管和筛管"},
            {part:"气孔",func:"气体交换",feature:"由保卫细胞构成"}
        ];
        leaves.forEach(l => {
            qs.push(this.makeQ(id++,"unit3","medium",`叶片${l.part}的功能是`,l.func,["吸收水分","储存营养","繁殖"],`叶片${l.part}的功能是${l.func}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`叶片${l.part}的特点是`,l.feature,["无细胞结构","有根毛","能分裂"],`叶片${l.part}的特点是${l.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genPlantHormones() {
        const qs = []; let id = this.baseId;
        const hormones = [
            {name:"生长素",func:"促进生长",application:"促进扦插生根",feature:"向光性"},
            {name:"赤霉素",func:"促进茎伸长",application:"促进种子萌发",feature:"打破休眠"},
            {name:"细胞分裂素",func:"促进细胞分裂",application:"延缓衰老",feature:"保鲜"},
            {name:"脱落酸",func:"抑制生长",application:"促进休眠",feature:"促进脱落"},
            {name:"乙烯",func:"促进果实成熟",application:"催熟水果",feature:"气体激素"}
        ];
        hormones.forEach(h => {
            qs.push(this.makeQ(id++,"unit4","hard",`${h.name}的主要作用是`,h.func,["抑制所有生长","无作用","促进光合作用"],`${h.name}的作用是${h.func}。`));
            qs.push(this.makeQ(id++,"unit4","hard",`${h.name}在农业上的应用是`,h.application,["无应用","有害农业","减少产量"],`${h.name}可用于${h.application}。`));
        });
        this.baseId = id; return qs;
    },

    genPlantMovements() {
        const qs = []; let id = this.baseId;
        const movements = [
            {name:"向光性",stimulus:"光",response:"茎向光弯曲",example:"向日葵向阳"},
            {name:"向地性",stimulus:"重力",response:"根向下生长",example:"根向地生长"},
            {name:"向水性",stimulus:"水分",response:"根向水生长",example:"根向湿处生长"},
            {name:"向触性",stimulus:"接触",response:"卷须缠绕",example:"豌豆卷须"},
            {name:"感夜性",stimulus:"光暗变化",response:"叶片开合",example:"合欢叶片"},
            {name:"感震性",stimulus:"触碰",response:"叶片下垂",example:"含羞草"}
        ];
        movements.forEach(m => {
            qs.push(this.makeQ(id++,"unit4","medium",`${m.name}的刺激因素是`,m.stimulus,["温度","声音","电流"],`${m.name}的刺激是${m.stimulus}。`));
            qs.push(this.makeQ(id++,"unit4","medium",`${m.name}的反应是`,m.response,["不反应","向相反方向","随机运动"],`${m.name}表现为${m.response}。`));
            qs.push(this.makeQ(id++,"unit4","easy",`${m.example}属于`,m.name,["无运动","随机运动","被动运动"],`${m.example}是${m.name}的例子。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPlantStructures(),...this.genPlantHormones(),...this.genPlantMovements()]; }
};
