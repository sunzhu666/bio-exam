// 超大题库生成器2 - 光合作用与呼吸作用
const giantGen2 = {
    baseId: 175000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPhotosynthesis() {
        const qs = []; let id = this.baseId;
        const aspects = [
            {aspect:"场所",content:"叶绿体",detail:"类囊体薄膜和基质"},
            {aspect:"原料",content:"二氧化碳和水",detail:"从外界吸收"},
            {aspect:"产物",content:"有机物和氧气",detail:"葡萄糖等"},
            {aspect:"条件",content:"光照和叶绿素",detail:"光能转化为化学能"},
            {aspect:"能量转变",content:"光能→化学能",detail:"储存在有机物中"},
            {aspect:"意义",content:"制造有机物释放氧气",detail:"维持碳氧平衡"},
            {aspect:"影响因素",content:"光照温度CO2浓度",detail:"适当增加可提高效率"},
            {aspect:"反应式",content:"CO2+H2O→有机物+O2",detail:"需要光和叶绿体"}
        ];
        aspects.forEach(a => {
            qs.push(this.makeQ(id++,"unit3","medium",`光合作用的${a.aspect}是`,a.content,["无","随机","不确定"],`光合作用的${a.aspect}是${a.content}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`光合作用${a.aspect}的详细说明是`,a.detail,["无说明","随机","不确定"],`${a.content}具体是${a.detail}。`));
        });
        this.baseId = id; return qs;
    },

    genRespiration() {
        const qs = []; let id = this.baseId;
        const aspects = [
            {aspect:"有氧呼吸场所",content:"细胞质基质和线粒体",detail:"主要在线粒体"},
            {aspect:"有氧呼吸原料",content:"有机物和氧气",detail:"葡萄糖等"},
            {aspect:"有氧呼吸产物",content:"二氧化碳和水",detail:"释放大量能量"},
            {aspect:"无氧呼吸场所",content:"细胞质基质",detail:"不需要线粒体"},
            {aspect:"无氧呼吸产物",content:"酒精或乳酸",detail:"释放少量能量"},
            {aspect:"呼吸作用意义",content:"分解有机物释放能量",detail:"为生命活动提供能量"},
            {aspect:"呼吸作用影响因素",content:"温度氧气浓度",detail:"适当条件可调节"},
            {aspect:"呼吸作用与光合作用关系",content:"相互依存相互对立",detail:"物质和能量转化"}
        ];
        aspects.forEach(a => {
            qs.push(this.makeQ(id++,"unit3","medium",`${a.aspect}是`,a.content,["无","随机","不确定"],`${a.aspect}是${a.content}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${a.aspect}的详细说明是`,a.detail,["无说明","随机","不确定"],`${a.content}具体是${a.detail}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPhotosynthesis(),...this.genRespiration()]; }
};
