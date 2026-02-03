// 超大题库生成器105 - 循环系统补充
const giantGen105 = {
    baseId: 690000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genCirculationA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"血液的组成是",c:"血浆和血细胞",w:["只有红细胞","只有白细胞","只有血小板"],u:"unit7"},
            {q:"血细胞包括",c:"红细胞白细胞血小板",w:["只有红细胞","只有白细胞","红细胞和白细胞"],u:"unit7"},
            {q:"运输氧气的血细胞是",c:"红细胞",w:["白细胞","血小板","血浆"],u:"unit7"},
            {q:"吞噬病菌的血细胞是",c:"白细胞",w:["红细胞","血小板","血浆"],u:"unit7"},
            {q:"促进止血的血细胞是",c:"血小板",w:["红细胞","白细胞","血浆"],u:"unit7"},
            {q:"血浆的主要功能是",c:"运载血细胞运输营养和废物",w:["运输氧气","吞噬病菌","促进止血"],u:"unit7"},
            {q:"红细胞中含有的蛋白质是",c:"血红蛋白",w:["白蛋白","球蛋白","纤维蛋白"],u:"unit7"},
            {q:"血红蛋白的特性是",c:"易与氧结合也易与氧分离",w:["只能结合氧","只能释放氧","不能运输氧"],u:"unit7"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genCirculationB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"动脉血的特点是",c:"含氧丰富颜色鲜红",w:["含氧少颜色暗红","含二氧化碳多","无色透明"],u:"unit7"},
            {q:"静脉血的特点是",c:"含氧少颜色暗红",w:["含氧丰富颜色鲜红","含二氧化碳少","无色透明"],u:"unit7"},
            {q:"肺动脉中流的是",c:"静脉血",w:["动脉血","混合血","淋巴"],u:"unit7"},
            {q:"肺静脉中流的是",c:"动脉血",w:["静脉血","混合血","淋巴"],u:"unit7"},
            {q:"体循环中血液变化是",c:"动脉血变静脉血",w:["静脉血变动脉血","不变化","混合"],u:"unit7"},
            {q:"肺循环中血液变化是",c:"静脉血变动脉血",w:["动脉血变静脉血","不变化","混合"],u:"unit7"},
            {q:"心脏壁最厚的腔是",c:"左心室",w:["右心室","左心房","右心房"],u:"unit7"},
            {q:"心脏中有瓣膜的作用是",c:"防止血液倒流",w:["加速血流","减慢血流","过滤血液"],u:"unit7"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genCirculationA(),...this.genCirculationB()]; }
};
