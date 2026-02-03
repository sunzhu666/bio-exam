// 超大题库生成器33 - 细胞分裂
const giantGen33 = {
    baseId: 330000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genMitosis() {
        const qs = []; let id = this.baseId;
        const phases = [
            {phase:"间期",event:"DNA复制",chromosome:"染色质状态",feature:"细胞生长"},
            {phase:"前期",event:"染色质变成染色体",chromosome:"染色体出现",feature:"核膜核仁消失"},
            {phase:"中期",event:"染色体排列在赤道板",chromosome:"染色体最清晰",feature:"纺锤体形成"},
            {phase:"后期",event:"着丝点分裂",chromosome:"染色体数目加倍",feature:"染色体移向两极"},
            {phase:"末期",event:"细胞质分裂",chromosome:"染色体变成染色质",feature:"核膜核仁重现"}
        ];
        phases.forEach(p => {
            qs.push(this.makeQ(id++,"unit4","hard",`有丝分裂${p.phase}的主要事件是`,p.event,["无事件","随机","不确定"],`${p.phase}${p.event}。`));
            qs.push(this.makeQ(id++,"unit4","hard",`有丝分裂${p.phase}染色体的状态是`,p.chromosome,["无状态","随机","不确定"],`${p.phase}${p.chromosome}。`));
            qs.push(this.makeQ(id++,"unit4","hard",`有丝分裂${p.phase}的特点是`,p.feature,["无特点","随机","不确定"],`${p.phase}${p.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genMeiosis() {
        const qs = []; let id = this.baseId;
        const features = [
            {feature:"减数分裂的结果",content:"染色体数目减半",significance:"保证物种染色体数目稳定"},
            {feature:"减数第一次分裂",content:"同源染色体分离",result:"染色体数目减半"},
            {feature:"减数第二次分裂",content:"着丝点分裂",result:"染色单体分开"},
            {feature:"联会",content:"同源染色体配对",time:"减数第一次分裂前期"},
            {feature:"四分体",content:"一对同源染色体含四条染色单体",time:"联会后"},
            {feature:"交叉互换",content:"非姐妹染色单体交换片段",significance:"增加遗传多样性"},
            {feature:"精子形成",content:"一个精原细胞产生四个精子",location:"睾丸"},
            {feature:"卵细胞形成",content:"一个卵原细胞产生一个卵细胞",location:"卵巢"}
        ];
        features.forEach(f => {
            qs.push(this.makeQ(id++,"unit4","hard",`${f.feature}是`,f.content,["无内容","随机","不确定"],`${f.feature}是${f.content}。`));
            if(f.significance) {
                qs.push(this.makeQ(id++,"unit4","hard",`${f.feature}的意义是`,f.significance,["无意义","随机","不确定"],`${f.feature}的意义是${f.significance}。`));
            }
            if(f.result) {
                qs.push(this.makeQ(id++,"unit4","hard",`${f.feature}的结果是`,f.result,["无结果","随机","不确定"],`${f.feature}导致${f.result}。`));
            }
            if(f.time) {
                qs.push(this.makeQ(id++,"unit4","hard",`${f.feature}发生在`,f.time,["无时间","随机","不确定"],`${f.feature}发生在${f.time}。`));
            }
            if(f.location) {
                qs.push(this.makeQ(id++,"unit4","hard",`${f.feature}发生在`,f.location,["无位置","随机","不确定"],`${f.feature}发生在${f.location}。`));
            }
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genMitosis(),...this.genMeiosis()]; }
};
