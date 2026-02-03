// 超大题库生成器158 - 高频考点B
const giantGen158 = {
    baseId: 955000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHighFreqC() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"人体消化系统的组成是",c:"消化道和消化腺",w:["只有消化道","只有消化腺","只有胃"],u:"unit5"},
            {q:"消化道的组成顺序是",c:"口腔咽食道胃小肠大肠肛门",w:["口腔胃小肠","胃小肠大肠","食道胃肠"],u:"unit5"},
            {q:"人体最大的消化腺是",c:"肝脏",w:["胰腺","唾液腺","胃腺"],u:"unit5"},
            {q:"胆汁储存在",c:"胆囊",w:["肝脏","胰腺","胃"],u:"unit5"},
            {q:"胆汁的作用是",c:"乳化脂肪",w:["消化蛋白质","消化淀粉","消化纤维素"],u:"unit5"},
            {q:"小肠适于消化吸收的特点不包括",c:"有大量细菌",w:["长度长","有绒毛","有多种消化酶"],u:"unit5"},
            {q:"呼吸系统的组成是",c:"呼吸道和肺",w:["只有肺","只有气管","只有鼻"],u:"unit6"},
            {q:"呼吸道的功能是",c:"气体进出肺的通道",w:["气体交换","产生声音","消化食物"],u:"unit6"},
            {q:"肺泡适于气体交换的特点是",c:"壁薄数量多外有毛细血管",w:["壁厚","数量少","无血管"],u:"unit6"},
            {q:"肺泡内气体交换的原理是",c:"气体扩散作用",w:["主动运输","渗透作用","吞噬作用"],u:"unit6"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genHighFreqD() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"血液的组成是",c:"血浆和血细胞",w:["只有红细胞","只有白细胞","只有血小板"],u:"unit7"},
            {q:"血细胞包括",c:"红细胞白细胞血小板",w:["只有红细胞","只有白细胞","只有血小板"],u:"unit7"},
            {q:"红细胞的功能是",c:"运输氧气",w:["吞噬病菌","止血凝血","运输营养"],u:"unit7"},
            {q:"白细胞的功能是",c:"吞噬病菌",w:["运输氧气","止血凝血","运输营养"],u:"unit7"},
            {q:"血小板的功能是",c:"止血和凝血",w:["运输氧气","吞噬病菌","运输营养"],u:"unit7"},
            {q:"心脏四个腔中壁最厚的是",c:"左心室",w:["右心室","左心房","右心房"],u:"unit7"},
            {q:"体循环的路径是",c:"左心室主动脉全身毛细血管上下腔静脉右心房",w:["右心室开始","左心房开始","右心房开始"],u:"unit7"},
            {q:"肺循环的路径是",c:"右心室肺动脉肺部毛细血管肺静脉左心房",w:["左心室开始","左心房开始","右心房开始"],u:"unit7"},
            {q:"体循环中血液变化是",c:"动脉血变为静脉血",w:["静脉血变为动脉血","不变化","全是动脉血"],u:"unit7"},
            {q:"肺循环中血液变化是",c:"静脉血变为动脉血",w:["动脉血变为静脉血","不变化","全是静脉血"],u:"unit7"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHighFreqC(),...this.genHighFreqD()]; }
};
