// 超大题库生成器127 - 激素调节深化
const giantGen127 = {
    baseId: 800000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHormoneA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"内分泌腺的特点是",c:"没有导管激素直接进入血液",w:["有导管","激素进入消化道","激素进入体外"],u:"unit9"},
            {q:"外分泌腺的特点是",c:"有导管分泌物通过导管排出",w:["没有导管","分泌物进入血液","分泌激素"],u:"unit9"},
            {q:"人体最大的内分泌腺是",c:"甲状腺",w:["垂体","肾上腺","胰岛"],u:"unit9"},
            {q:"垂体分泌的激素是",c:"生长激素等多种激素",w:["甲状腺激素","胰岛素","肾上腺素"],u:"unit9"},
            {q:"甲状腺分泌的激素是",c:"甲状腺激素",w:["生长激素","胰岛素","肾上腺素"],u:"unit9"},
            {q:"胰岛分泌的激素是",c:"胰岛素和胰高血糖素",w:["甲状腺激素","生长激素","肾上腺素"],u:"unit9"},
            {q:"肾上腺分泌的激素是",c:"肾上腺素",w:["甲状腺激素","胰岛素","生长激素"],u:"unit9"},
            {q:"生长激素的作用是",c:"促进生长发育",w:["促进新陈代谢","调节血糖","应激反应"],u:"unit9"},
            {q:"甲状腺激素的作用是",c:"促进新陈代谢和生长发育",w:["只促进生长","调节血糖","应激反应"],u:"unit9"},
            {q:"胰岛素的作用是",c:"降低血糖浓度",w:["升高血糖","促进生长","促进代谢"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genHormoneB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"胰高血糖素的作用是",c:"升高血糖浓度",w:["降低血糖","促进生长","促进代谢"],u:"unit9"},
            {q:"幼年生长激素分泌不足会导致",c:"侏儒症",w:["巨人症","呆小症","糖尿病"],u:"unit9"},
            {q:"幼年生长激素分泌过多会导致",c:"巨人症",w:["侏儒症","呆小症","糖尿病"],u:"unit9"},
            {q:"成年生长激素分泌过多会导致",c:"肢端肥大症",w:["侏儒症","巨人症","糖尿病"],u:"unit9"},
            {q:"幼年甲状腺激素分泌不足会导致",c:"呆小症",w:["侏儒症","巨人症","糖尿病"],u:"unit9"},
            {q:"成年甲状腺激素分泌不足会导致",c:"甲状腺功能减退",w:["甲亢","糖尿病","侏儒症"],u:"unit9"},
            {q:"甲状腺激素分泌过多会导致",c:"甲亢",w:["呆小症","侏儒症","糖尿病"],u:"unit9"},
            {q:"胰岛素分泌不足会导致",c:"糖尿病",w:["低血糖","侏儒症","甲亢"],u:"unit9"},
            {q:"神经调节和激素调节的关系是",c:"相互协调共同调节",w:["互不相关","只有神经调节","只有激素调节"],u:"unit9"},
            {q:"激素调节的特点是",c:"通过血液运输作用缓慢持久",w:["作用迅速短暂","不需要血液","只作用于神经"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHormoneA(),...this.genHormoneB()]; }
};
