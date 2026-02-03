// 超大题库生成器116 - 微生物补充
const giantGen116 = {
    baseId: 745000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genMicroorganismA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"细菌的基本结构包括",c:"细胞壁细胞膜细胞质DNA",w:["细胞核","叶绿体","线粒体"],u:"unit2"},
            {q:"细菌没有的结构是",c:"成形的细胞核",w:["细胞壁","细胞膜","DNA"],u:"unit2"},
            {q:"细菌的繁殖方式是",c:"分裂生殖",w:["有性生殖","出芽生殖","孢子生殖"],u:"unit2"},
            {q:"细菌的营养方式是",c:"异养",w:["自养","光合作用","化能合成"],u:"unit2"},
            {q:"真菌的基本结构包括",c:"细胞壁细胞膜细胞质细胞核",w:["叶绿体","拟核","鞭毛"],u:"unit2"},
            {q:"真菌的繁殖方式主要是",c:"孢子生殖",w:["分裂生殖","有性生殖","出芽生殖"],u:"unit2"},
            {q:"酵母菌的繁殖方式是",c:"出芽生殖",w:["分裂生殖","孢子生殖","有性生殖"],u:"unit2"},
            {q:"病毒的结构是",c:"蛋白质外壳和核酸",w:["细胞壁","细胞膜","细胞核"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genMicroorganismB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"病毒的生活方式是",c:"寄生",w:["腐生","自养","共生"],u:"unit2"},
            {q:"病毒离开活细胞后",c:"不能独立生活",w:["能独立生活","能繁殖","能生长"],u:"unit2"},
            {q:"细菌和真菌在生态系统中的作用是",c:"分解者",w:["生产者","消费者","无作用"],u:"unit2"},
            {q:"有益细菌的例子是",c:"乳酸菌根瘤菌",w:["结核杆菌","痢疾杆菌","霍乱弧菌"],u:"unit2"},
            {q:"有害细菌的例子是",c:"结核杆菌痢疾杆菌",w:["乳酸菌","根瘤菌","醋酸菌"],u:"unit2"},
            {q:"抗生素是由什么产生的",c:"某些真菌或细菌",w:["病毒","植物","动物"],u:"unit2"},
            {q:"青霉素是由什么产生的",c:"青霉菌",w:["酵母菌","乳酸菌","大肠杆菌"],u:"unit2"},
            {q:"食品腐败的主要原因是",c:"微生物的繁殖",w:["温度过高","水分过多","空气过多"],u:"unit2"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genMicroorganismA(),...this.genMicroorganismB()]; }
};
