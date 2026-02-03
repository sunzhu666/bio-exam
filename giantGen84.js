// 超大题库生成器84 - 物种形成
const giantGen84 = {
    baseId: 585000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genSpeciation() {
        const qs = []; let id = this.baseId;
        const processes = [
            {process:"地理隔离",definition:"地理障碍阻止基因交流",example:"山脉河流海洋"},
            {process:"生殖隔离",definition:"不能交配或产生可育后代",type:"形成新物种的标志"},
            {process:"渐变式物种形成",process2:"地理隔离→基因频率改变→生殖隔离",time:"漫长"},
            {process:"骤变式物种形成",method:"染色体数目变化",example:"多倍体植物"},
            {process:"物种形成三环节",content:"突变和基因重组自然选择隔离",relationship:"相互作用"}
        ];
        processes.forEach(p => {
            qs.push(this.makeQ(id++,"unit12","hard",`${p.process}的定义是`,p.definition||p.content,["无定义","随机","不确定"],`${p.process}是${p.definition||p.content}。`));
            if(p.example) qs.push(this.makeQ(id++,"unit12","hard",`${p.process}的例子是`,p.example,["无例子","随机","不确定"],`${p.process}如${p.example}。`));
        });
        this.baseId = id; return qs;
    },

    genAdaptation() {
        const qs = []; let id = this.baseId;
        const adaptations = [
            {adaptation:"保护色",definition:"与环境颜色相似",example:"变色龙北极熊",purpose:"躲避天敌"},
            {adaptation:"警戒色",definition:"鲜艳的颜色",example:"毒蛙黄蜂",purpose:"警告捕食者"},
            {adaptation:"拟态",definition:"模拟其他生物或环境",example:"竹节虫枯叶蝶",purpose:"保护自己"},
            {adaptation:"适应的相对性",content:"适应是相对的有限的",reason:"环境会变化"},
            {adaptation:"共同进化",definition:"不同物种相互影响共同进化",example:"花与传粉昆虫"}
        ];
        adaptations.forEach(a => {
            qs.push(this.makeQ(id++,"unit12","medium",`${a.adaptation}的定义是`,a.definition||a.content,["无定义","随机","不确定"],`${a.adaptation}是${a.definition||a.content}。`));
            if(a.example) qs.push(this.makeQ(id++,"unit12","medium",`${a.adaptation}的例子是`,a.example,["无例子","随机","不确定"],`${a.adaptation}如${a.example}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genSpeciation(),...this.genAdaptation()]; }
};
