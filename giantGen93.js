// 超大题库生成器93 - 人体循环系统详解
const giantGen93 = {
    baseId: 630000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHeartStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"左心房",receive:"肺静脉血",blood:"动脉血"},
            {part:"左心室",pump:"主动脉",wall:"最厚",blood:"动脉血"},
            {part:"右心房",receive:"上下腔静脉血",blood:"静脉血"},
            {part:"右心室",pump:"肺动脉",blood:"静脉血"},
            {part:"房室瓣",function:"防止血液倒流",direction:"心房到心室"},
            {part:"动脉瓣",function:"防止血液倒流",direction:"心室到动脉"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit7","hard",`心脏${p.part}接收或泵出的血管是`,p.receive||p.pump,["无血管","随机","不确定"],`${p.part}${p.receive||p.pump}。`));
            qs.push(this.makeQ(id++,"unit7","hard",`心脏${p.part}中的血液是`,p.blood||p.function,["无血液","随机","不确定"],`${p.part}含${p.blood||p.function}。`));
        });
        this.baseId = id; return qs;
    },

    genBloodCirculation() {
        const qs = []; let id = this.baseId;
        const circuits = [
            {circuit:"体循环",path:"左心室→主动脉→全身→上下腔静脉→右心房",change:"动脉血变静脉血"},
            {circuit:"肺循环",path:"右心室→肺动脉→肺→肺静脉→左心房",change:"静脉血变动脉血"},
            {circuit:"动脉",feature:"管壁厚弹性大",blood:"从心脏流出"},
            {circuit:"静脉",feature:"管壁薄有瓣膜",blood:"流回心脏"},
            {circuit:"毛细血管",feature:"管壁薄只有一层细胞",function:"物质交换"}
        ];
        circuits.forEach(c => {
            qs.push(this.makeQ(id++,"unit7","hard",`${c.circuit}的路径是`,c.path||c.feature,["无路径","随机","不确定"],`${c.circuit}${c.path||c.feature}。`));
            if(c.change) qs.push(this.makeQ(id++,"unit7","hard",`${c.circuit}中血液的变化是`,c.change,["无变化","随机","不确定"],`${c.circuit}${c.change}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHeartStructure(),...this.genBloodCirculation()]; }
};
