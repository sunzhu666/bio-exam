// 海量题库生成器J - 实验技能详细
const massiveGenJ = {
    baseId: 165000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genMicroscopeSkills() {
        const qs = []; let id = this.baseId;
        const skills = [
            {skill:"对光",step:"转动转换器和遮光器",purpose:"使视野明亮",note:"用低倍镜"},
            {skill:"放置玻片",step:"将玻片放在载物台上",purpose:"观察标本",note:"标本对准通光孔"},
            {skill:"调焦",step:"先粗后细调节",purpose:"使物像清晰",note:"先下降后上升"},
            {skill:"换高倍镜",step:"转动转换器",purpose:"放大观察",note:"只用细准焦螺旋"},
            {skill:"移动玻片",step:"向相反方向移动",purpose:"找到目标",note:"物像与实物方向相反"},
            {skill:"计算放大倍数",step:"目镜×物镜",purpose:"确定放大倍数",note:"面积放大倍数的平方"}
        ];
        skills.forEach(s => {
            qs.push(this.makeQ(id++,"unit13","medium",`显微镜${s.skill}的操作是`,s.step,["无操作","随机","不确定"],`${s.skill}要${s.step}。`));
            qs.push(this.makeQ(id++,"unit13","medium",`显微镜${s.skill}的目的是`,s.purpose,["无目的","随机","不确定"],`${s.skill}是为了${s.purpose}。`));
            qs.push(this.makeQ(id++,"unit13","hard",`显微镜${s.skill}的注意事项是`,s.note,["无注意","随机","不确定"],`${s.skill}要注意${s.note}。`));
        });
        this.baseId = id; return qs;
    },

    genSlidePreparation() {
        const qs = []; let id = this.baseId;
        const slides = [
            {slide:"洋葱表皮细胞",material:"洋葱鳞片叶",dye:"碘液",observe:"细胞壁细胞核"},
            {slide:"人口腔上皮细胞",material:"口腔内壁",dye:"碘液或亚甲基蓝",observe:"细胞膜细胞核"},
            {slide:"叶片横切面",material:"植物叶片",dye:"无需染色",observe:"表皮叶肉维管束"},
            {slide:"根尖纵切面",material:"植物根尖",dye:"龙胆紫或醋酸洋红",observe:"分生区伸长区"},
            {slide:"血涂片",material:"血液",dye:"瑞氏染液",observe:"红细胞白细胞"},
            {slide:"草履虫",material:"池塘水",dye:"无需染色",observe:"纤毛食物泡"},
            {slide:"酵母菌",material:"酵母培养液",dye:"碘液",observe:"细胞核液泡"},
            {slide:"水绵",material:"池塘水绵",dye:"无需染色",observe:"带状叶绿体"}
        ];
        slides.forEach(s => {
            qs.push(this.makeQ(id++,"unit13","medium",`制作${s.slide}临时装片的材料是`,s.material,["无材料","随机","不确定"],`${s.slide}用${s.material}。`));
            qs.push(this.makeQ(id++,"unit13","medium",`制作${s.slide}临时装片的染色剂是`,s.dye,["无染色剂","随机","不确定"],`${s.slide}用${s.dye}染色。`));
            qs.push(this.makeQ(id++,"unit13","medium",`观察${s.slide}可以看到`,s.observe,["无结构","随机","不确定"],`${s.slide}可观察${s.observe}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genMicroscopeSkills(),...this.genSlidePreparation()]; }
};
