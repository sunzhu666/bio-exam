// 超大题库生成器52 - 植物激素
const giantGen52 = {
    baseId: 425000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genAuxin() {
        const qs = []; let id = this.baseId;
        const facts = [
            {topic:"生长素的发现",scientist:"达尔文",experiment:"向光性实验"},
            {topic:"生长素的化学本质",content:"吲哚乙酸",abbreviation:"IAA"},
            {topic:"生长素的产生部位",location:"芽尖叶原基幼嫩叶片",transport:"极性运输"},
            {topic:"生长素的作用",effect:"促进细胞伸长",feature:"两重性"},
            {topic:"生长素两重性",content:"低浓度促进高浓度抑制",example:"顶端优势"},
            {topic:"顶端优势",cause:"顶芽生长素浓度适宜侧芽浓度过高",application:"摘心打顶"},
            {topic:"向光性原因",cause:"生长素分布不均匀",result:"背光侧生长快"},
            {topic:"根的向地性",cause:"根对生长素敏感",result:"近地侧生长素多生长慢"}
        ];
        facts.forEach(f => {
            qs.push(this.makeQ(id++,"unit3","hard",`${f.topic}是`,f.content||f.scientist||f.location,["无内容","随机","不确定"],`${f.topic}是${f.content||f.scientist||f.location}。`));
            if(f.effect) qs.push(this.makeQ(id++,"unit3","hard",`${f.topic}的效果是`,f.effect,["无效果","随机","不确定"],`${f.topic}${f.effect}。`));
            if(f.cause) qs.push(this.makeQ(id++,"unit3","hard",`${f.topic}的原因是`,f.cause,["无原因","随机","不确定"],`${f.topic}因为${f.cause}。`));
        });
        this.baseId = id; return qs;
    },

    genOtherHormones() {
        const qs = []; let id = this.baseId;
        const hormones = [
            {name:"赤霉素",effect:"促进茎秆伸长",application:"促进种子萌发"},
            {name:"细胞分裂素",effect:"促进细胞分裂",location:"根尖合成"},
            {name:"脱落酸",effect:"抑制生长促进衰老",application:"促进果实脱落"},
            {name:"乙烯",effect:"促进果实成熟",feature:"气体激素"},
            {name:"油菜素内酯",effect:"促进细胞伸长分裂",feature:"新型植物激素"}
        ];
        hormones.forEach(h => {
            qs.push(this.makeQ(id++,"unit3","hard",`${h.name}的作用是`,h.effect,["无作用","随机","不确定"],`${h.name}${h.effect}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${h.name}的应用是`,h.application||h.feature,["无应用","随机","不确定"],`${h.name}${h.application||h.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genAuxin(),...this.genOtherHormones()]; }
};
