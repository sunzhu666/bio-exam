// 超大题库生成器166 - 模拟试题F
const giantGen166 = {
    baseId: 995000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genSimK() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"细菌的繁殖方式是",c:"分裂生殖",w:["有性生殖","出芽生殖","孢子生殖"],u:"unit2"},
            {q:"酵母菌的繁殖方式是",c:"出芽生殖",w:["分裂生殖","有性生殖","孢子生殖"],u:"unit2"},
            {q:"霉菌的繁殖方式是",c:"孢子生殖",w:["分裂生殖","出芽生殖","有性生殖"],u:"unit2"},
            {q:"病毒的繁殖方式是",c:"在活细胞内复制增殖",w:["分裂生殖","出芽生殖","孢子生殖"],u:"unit2"},
            {q:"下列微生物中对人有益的是",c:"乳酸菌",w:["结核杆菌","痢疾杆菌","霍乱弧菌"],u:"unit2"},
            {q:"下列微生物中对人有害的是",c:"结核杆菌",w:["乳酸菌","根瘤菌","醋酸菌"],u:"unit2"},
            {q:"抗生素是由什么产生的",c:"某些真菌或细菌",w:["病毒","植物","动物"],u:"unit2"},
            {q:"青霉素是由什么产生的",c:"青霉菌",w:["酵母菌","乳酸菌","大肠杆菌"],u:"unit2"},
            {q:"发酵技术利用的生物是",c:"微生物",w:["植物","动物","病毒"],u:"unit2"},
            {q:"酿酒利用的微生物是",c:"酵母菌",w:["乳酸菌","醋酸菌","霉菌"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genSimL() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"制作酸奶利用的微生物是",c:"乳酸菌",w:["酵母菌","醋酸菌","霉菌"],u:"unit2"},
            {q:"制作醋利用的微生物是",c:"醋酸菌",w:["酵母菌","乳酸菌","霉菌"],u:"unit2"},
            {q:"制作酱油利用的微生物是",c:"霉菌",w:["酵母菌","乳酸菌","醋酸菌"],u:"unit2"},
            {q:"食品保存的原理是",c:"抑制微生物生长繁殖",w:["杀死所有微生物","增加微生物","与微生物无关"],u:"unit2"},
            {q:"冷藏保存食品的原理是",c:"低温抑制微生物繁殖",w:["杀死微生物","增加微生物","与温度无关"],u:"unit2"},
            {q:"腌制保存食品的原理是",c:"高盐抑制微生物繁殖",w:["杀死微生物","增加微生物","与盐无关"],u:"unit2"},
            {q:"真空包装保存食品的原理是",c:"缺氧抑制微生物繁殖",w:["杀死微生物","增加微生物","与氧气无关"],u:"unit2"},
            {q:"巴氏消毒法的特点是",c:"低温短时杀菌保留营养",w:["高温长时","杀死所有微生物","破坏营养"],u:"unit2"},
            {q:"转基因技术是指",c:"将外源基因导入生物体",w:["杂交育种","诱变育种","克隆技术"],u:"unit11"},
            {q:"克隆技术的特点是",c:"无性繁殖后代与亲本相同",w:["有性繁殖","后代有变异","需要两个亲本"],u:"unit10"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genSimK(),...this.genSimL()]; }
};
