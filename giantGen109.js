// 超大题库生成器109 - 内分泌系统补充
const giantGen109 = {
    baseId: 710000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEndocrineA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"内分泌腺的特点是",c:"没有导管激素直接进入血液",w:["有导管","分泌消化液","分泌汗液"],u:"unit9"},
            {q:"外分泌腺的特点是",c:"有导管分泌物经导管排出",w:["没有导管","分泌激素","直接进入血液"],u:"unit9"},
            {q:"人体最大的内分泌腺是",c:"甲状腺",w:["垂体","肾上腺","胰岛"],u:"unit9"},
            {q:"分泌生长激素的腺体是",c:"垂体",w:["甲状腺","肾上腺","胰岛"],u:"unit9"},
            {q:"分泌甲状腺激素的腺体是",c:"甲状腺",w:["垂体","肾上腺","胰岛"],u:"unit9"},
            {q:"分泌胰岛素的结构是",c:"胰岛",w:["胰腺","垂体","甲状腺"],u:"unit9"},
            {q:"胰岛素的作用是",c:"降低血糖",w:["升高血糖","促进生长","促进代谢"],u:"unit9"},
            {q:"糖尿病的原因是",c:"胰岛素分泌不足",w:["生长激素不足","甲状腺激素不足","肾上腺素不足"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genEndocrineB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"幼年生长激素分泌不足会导致",c:"侏儒症",w:["巨人症","甲亢","糖尿病"],u:"unit9"},
            {q:"幼年生长激素分泌过多会导致",c:"巨人症",w:["侏儒症","甲亢","糖尿病"],u:"unit9"},
            {q:"成年生长激素分泌过多会导致",c:"肢端肥大症",w:["侏儒症","巨人症","糖尿病"],u:"unit9"},
            {q:"甲状腺激素分泌过多会导致",c:"甲亢",w:["甲减","侏儒症","糖尿病"],u:"unit9"},
            {q:"甲状腺激素分泌不足会导致",c:"甲减或呆小症",w:["甲亢","巨人症","糖尿病"],u:"unit9"},
            {q:"缺碘会导致",c:"甲状腺肿大",w:["糖尿病","侏儒症","巨人症"],u:"unit9"},
            {q:"激素调节的特点是",c:"微量高效通过体液运输",w:["大量低效","通过神经传导","只作用于一种器官"],u:"unit9"},
            {q:"神经调节和激素调节的关系是",c:"相互协调共同调节",w:["互不相关","只有神经调节","只有激素调节"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEndocrineA(),...this.genEndocrineB()]; }
};
