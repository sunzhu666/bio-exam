// 超大题库生成器17 - 植物激素
const giantGen17 = {
    baseId: 250000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPlantHormones() {
        const qs = []; let id = this.baseId;
        const hormones = [
            {hormone:"生长素",func:"促进细胞伸长",produce:"顶芽嫩叶",application:"促进扦插生根"},
            {hormone:"赤霉素",func:"促进茎伸长",produce:"未成熟种子",application:"打破休眠"},
            {hormone:"细胞分裂素",func:"促进细胞分裂",produce:"根尖",application:"延缓衰老"},
            {hormone:"脱落酸",func:"抑制生长促进脱落",produce:"根冠成熟叶",application:"促进休眠"},
            {hormone:"乙烯",func:"促进果实成熟",produce:"成熟果实",application:"催熟水果"}
        ];
        hormones.forEach(h => {
            qs.push(this.makeQ(id++,"unit3","hard",`${h.hormone}的主要功能是`,h.func,["无功能","随机","不确定"],`${h.hormone}${h.func}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${h.hormone}的产生部位是`,h.produce,["无部位","随机","不确定"],`${h.hormone}在${h.produce}产生。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${h.hormone}的应用是`,h.application,["无应用","随机","不确定"],`${h.hormone}可用于${h.application}。`));
        });
        this.baseId = id; return qs;
    },

    genPlantResponses() {
        const qs = []; let id = this.baseId;
        const responses = [
            {response:"向光性",stimulus:"单侧光",mechanism:"生长素分布不均",example:"向日葵向阳"},
            {response:"向地性",stimulus:"重力",mechanism:"生长素分布不均",example:"根向下生长"},
            {response:"向水性",stimulus:"水分",mechanism:"根向水生长",example:"根向湿处生长"},
            {response:"向触性",stimulus:"接触",mechanism:"接触侧生长慢",example:"豌豆卷须缠绕"},
            {response:"感夜性",stimulus:"光周期",mechanism:"叶片运动",example:"合欢叶片夜间闭合"},
            {response:"感震性",stimulus:"震动",mechanism:"叶枕细胞失水",example:"含羞草叶片闭合"},
            {response:"顶端优势",stimulus:"顶芽生长素",mechanism:"抑制侧芽生长",example:"松树主干明显"},
            {response:"根的向化性",stimulus:"化学物质",mechanism:"根向肥料生长",example:"根向肥处生长"},
            {response:"茎的背地性",stimulus:"重力",mechanism:"生长素分布不均",example:"茎向上生长"},
            {response:"叶镶嵌",stimulus:"光照",mechanism:"叶片排列不重叠",example:"叶片互不遮挡"}
        ];
        responses.forEach(r => {
            qs.push(this.makeQ(id++,"unit3","medium",`${r.response}的刺激是`,r.stimulus,["无刺激","随机","不确定"],`${r.response}的刺激是${r.stimulus}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${r.response}的机制是`,r.mechanism,["无机制","随机","不确定"],`${r.response}的机制是${r.mechanism}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${r.response}的例子是`,r.example,["无例子","随机","不确定"],`${r.response}如${r.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPlantHormones(),...this.genPlantResponses()]; }
};
