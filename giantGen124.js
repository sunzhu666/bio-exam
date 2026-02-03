// 超大题库生成器124 - 血液循环深化
const giantGen124 = {
    baseId: 785000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genCirculationA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"血液的组成是",c:"血浆和血细胞",w:["只有红细胞","只有白细胞","只有血小板"],u:"unit7"},
            {q:"血浆的主要成分是",c:"水蛋白质葡萄糖无机盐",w:["只有水","只有蛋白质","只有红细胞"],u:"unit7"},
            {q:"红细胞的功能是",c:"运输氧气",w:["运输二氧化碳","吞噬病菌","止血凝血"],u:"unit7"},
            {q:"白细胞的功能是",c:"吞噬病菌防御疾病",w:["运输氧气","止血凝血","运输营养"],u:"unit7"},
            {q:"血小板的功能是",c:"止血和凝血",w:["运输氧气","吞噬病菌","运输营养"],u:"unit7"},
            {q:"红细胞中含有的蛋白质是",c:"血红蛋白",w:["白蛋白","球蛋白","纤维蛋白"],u:"unit7"},
            {q:"血红蛋白的特性是",c:"氧多时结合氧少时释放",w:["始终结合氧","始终释放氧","不与氧结合"],u:"unit7"},
            {q:"动脉血的特点是",c:"含氧丰富颜色鲜红",w:["含氧少颜色暗红","不含氧","含二氧化碳多"],u:"unit7"},
            {q:"静脉血的特点是",c:"含氧少颜色暗红",w:["含氧丰富颜色鲜红","不含氧","含二氧化碳少"],u:"unit7"},
            {q:"心脏的四个腔是",c:"左心房左心室右心房右心室",w:["只有两个腔","只有三个腔","只有一个腔"],u:"unit7"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genCirculationB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"体循环的起点是",c:"左心室",w:["右心室","左心房","右心房"],u:"unit7"},
            {q:"体循环的终点是",c:"右心房",w:["左心房","左心室","右心室"],u:"unit7"},
            {q:"肺循环的起点是",c:"右心室",w:["左心室","左心房","右心房"],u:"unit7"},
            {q:"肺循环的终点是",c:"左心房",w:["右心房","左心室","右心室"],u:"unit7"},
            {q:"体循环中血液变化是",c:"动脉血变为静脉血",w:["静脉血变为动脉血","不变化","全是动脉血"],u:"unit7"},
            {q:"肺循环中血液变化是",c:"静脉血变为动脉血",w:["动脉血变为静脉血","不变化","全是静脉血"],u:"unit7"},
            {q:"主动脉中流的是",c:"动脉血",w:["静脉血","混合血","淋巴"],u:"unit7"},
            {q:"肺动脉中流的是",c:"静脉血",w:["动脉血","混合血","淋巴"],u:"unit7"},
            {q:"肺静脉中流的是",c:"动脉血",w:["静脉血","混合血","淋巴"],u:"unit7"},
            {q:"上下腔静脉中流的是",c:"静脉血",w:["动脉血","混合血","淋巴"],u:"unit7"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genCirculationA(),...this.genCirculationB()]; }
};
