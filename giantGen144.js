// 超大题库生成器144 - 生物技术深化
const giantGen144 = {
    baseId: 885000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genBiotechA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"发酵技术利用的生物是",c:"微生物",w:["植物","动物","病毒"],u:"unit2"},
            {q:"酿酒利用的微生物是",c:"酵母菌",w:["乳酸菌","醋酸菌","霉菌"],u:"unit2"},
            {q:"制作酸奶利用的微生物是",c:"乳酸菌",w:["酵母菌","醋酸菌","霉菌"],u:"unit2"},
            {q:"制作醋利用的微生物是",c:"醋酸菌",w:["酵母菌","乳酸菌","霉菌"],u:"unit2"},
            {q:"制作酱油利用的微生物是",c:"霉菌",w:["酵母菌","乳酸菌","醋酸菌"],u:"unit2"},
            {q:"酵母菌发酵的条件是",c:"无氧或有氧",w:["只能有氧","只能无氧","不需要条件"],u:"unit2"},
            {q:"乳酸菌发酵的条件是",c:"无氧",w:["有氧","有氧或无氧","不需要条件"],u:"unit2"},
            {q:"醋酸菌发酵的条件是",c:"有氧",w:["无氧","有氧或无氧","不需要条件"],u:"unit2"},
            {q:"酵母菌有氧呼吸的产物是",c:"二氧化碳和水",w:["酒精","乳酸","醋酸"],u:"unit2"},
            {q:"酵母菌无氧呼吸的产物是",c:"酒精和二氧化碳",w:["乳酸","醋酸","水"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genBiotechB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"乳酸菌发酵的产物是",c:"乳酸",w:["酒精","醋酸","二氧化碳"],u:"unit2"},
            {q:"醋酸菌发酵的产物是",c:"醋酸",w:["酒精","乳酸","二氧化碳"],u:"unit2"},
            {q:"食品保存的原理是",c:"抑制微生物生长繁殖",w:["杀死所有微生物","增加微生物","与微生物无关"],u:"unit2"},
            {q:"冷藏保存食品的原理是",c:"低温抑制微生物繁殖",w:["杀死微生物","增加微生物","与温度无关"],u:"unit2"},
            {q:"腌制保存食品的原理是",c:"高盐抑制微生物繁殖",w:["杀死微生物","增加微生物","与盐无关"],u:"unit2"},
            {q:"真空包装保存食品的原理是",c:"缺氧抑制微生物繁殖",w:["杀死微生物","增加微生物","与氧气无关"],u:"unit2"},
            {q:"巴氏消毒法的特点是",c:"低温短时杀菌保留营养",w:["高温长时","杀死所有微生物","破坏营养"],u:"unit2"},
            {q:"转基因技术是指",c:"将外源基因导入生物体",w:["杂交育种","诱变育种","克隆技术"],u:"unit11"},
            {q:"克隆技术的特点是",c:"无性繁殖后代与亲本相同",w:["有性繁殖","后代有变异","需要两个亲本"],u:"unit10"},
            {q:"试管婴儿技术属于",c:"体外受精技术",w:["克隆技术","转基因技术","无性繁殖"],u:"unit10"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genBiotechA(),...this.genBiotechB()]; }
};
