// 超大题库生成器51 - 细胞分裂深化
const giantGen51 = {
    baseId: 420000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genMitosis() {
        const qs = []; let id = this.baseId;
        const phases = [
            {phase:"间期",feature:"DNA复制",chromosome:"染色质状态",duration:"最长"},
            {phase:"前期",feature:"染色质变染色体",structure:"纺锤体形成",membrane:"核膜消失"},
            {phase:"中期",feature:"染色体排列赤道板",observe:"观察染色体最佳时期",shape:"染色体最短"},
            {phase:"后期",feature:"着丝点分裂",movement:"染色体移向两极",number:"染色体数目加倍"},
            {phase:"末期",feature:"染色体变染色质",structure:"核膜重建",result:"形成两个子细胞"}
        ];
        phases.forEach(p => {
            qs.push(this.makeQ(id++,"unit4","hard",`有丝分裂${p.phase}的特点是`,p.feature,["无特点","随机","不确定"],`${p.phase}${p.feature}。`));
            if(p.structure) qs.push(this.makeQ(id++,"unit4","hard",`有丝分裂${p.phase}的结构变化是`,p.structure,["无变化","随机","不确定"],`${p.phase}${p.structure}。`));
            if(p.observe) qs.push(this.makeQ(id++,"unit4","hard",`有丝分裂${p.phase}是`,p.observe,["无意义","随机","不确定"],`${p.phase}是${p.observe}。`));
        });
        this.baseId = id; return qs;
    },

    genMeiosis() {
        const qs = []; let id = this.baseId;
        const features = [
            {stage:"减数第一次分裂",event:"同源染色体分离",result:"染色体数目减半"},
            {stage:"减数第二次分裂",event:"着丝点分裂",result:"姐妹染色单体分开"},
            {stage:"联会",content:"同源染色体配对",time:"减数第一次分裂前期"},
            {stage:"四分体",content:"一对同源染色体含四条染色单体",exchange:"交叉互换"},
            {stage:"精子形成",cell:"精原细胞",number:"一个精原细胞产生四个精子"},
            {stage:"卵细胞形成",cell:"卵原细胞",number:"一个卵原细胞产生一个卵细胞"}
        ];
        features.forEach(f => {
            qs.push(this.makeQ(id++,"unit10","hard",`${f.stage}的特点是`,f.event||f.content,["无特点","随机","不确定"],`${f.stage}${f.event||f.content}。`));
            qs.push(this.makeQ(id++,"unit10","hard",`${f.stage}的结果是`,f.result||f.number,["无结果","随机","不确定"],`${f.stage}${f.result||f.number}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genMitosis(),...this.genMeiosis()]; }
};
