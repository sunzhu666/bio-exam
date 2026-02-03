// 超大题库生成器141 - 呼吸系统深化
const giantGen141 = {
    baseId: 870000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genRespiratoryA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"呼吸系统由什么组成",c:"呼吸道和肺",w:["只有肺","只有气管","只有鼻"],u:"unit6"},
            {q:"呼吸道包括",c:"鼻咽喉气管支气管",w:["只有鼻","只有气管","只有肺"],u:"unit6"},
            {q:"呼吸道的功能是",c:"气体进出肺的通道",w:["气体交换","产生声音","消化食物"],u:"unit6"},
            {q:"鼻腔的功能是",c:"温暖湿润清洁空气",w:["气体交换","产生声音","消化食物"],u:"unit6"},
            {q:"鼻腔内有什么结构能清洁空气",c:"鼻毛和黏膜",w:["肺泡","支气管","声带"],u:"unit6"},
            {q:"喉的功能是",c:"发声和呼吸通道",w:["气体交换","消化食物","吸收营养"],u:"unit6"},
            {q:"气管和支气管内壁有什么结构",c:"纤毛和黏液",w:["肺泡","声带","鼻毛"],u:"unit6"},
            {q:"气管内壁纤毛的作用是",c:"清除异物和灰尘",w:["气体交换","产生声音","吸收营养"],u:"unit6"},
            {q:"肺是什么器官",c:"气体交换的器官",w:["消化器官","排泄器官","循环器官"],u:"unit6"},
            {q:"肺的基本结构单位是",c:"肺泡",w:["支气管","气管","鼻腔"],u:"unit6"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genRespiratoryB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"肺泡适于气体交换的特点是",c:"壁薄数量多外有毛细血管",w:["壁厚","数量少","无血管"],u:"unit6"},
            {q:"肺泡壁由什么细胞构成",c:"一层上皮细胞",w:["多层细胞","肌肉细胞","神经细胞"],u:"unit6"},
            {q:"呼吸运动是指",c:"胸廓有节律的扩大和缩小",w:["气体交换","细胞呼吸","肺泡扩张"],u:"unit6"},
            {q:"吸气时胸廓",c:"扩大",w:["缩小","不变","先大后小"],u:"unit6"},
            {q:"呼气时胸廓",c:"缩小",w:["扩大","不变","先小后大"],u:"unit6"},
            {q:"吸气时膈肌",c:"收缩下降",w:["舒张上升","不变","先收缩后舒张"],u:"unit6"},
            {q:"呼气时膈肌",c:"舒张上升",w:["收缩下降","不变","先舒张后收缩"],u:"unit6"},
            {q:"吸气时肋间肌",c:"收缩",w:["舒张","不变","先收缩后舒张"],u:"unit6"},
            {q:"呼气时肋间肌",c:"舒张",w:["收缩","不变","先舒张后收缩"],u:"unit6"},
            {q:"肺泡内气体交换的原理是",c:"气体扩散作用",w:["主动运输","渗透作用","吞噬作用"],u:"unit6"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genRespiratoryA(),...this.genRespiratoryB()]; }
};
