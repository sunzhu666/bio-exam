// 超大题库生成器3 - 人体循环系统
const giantGen3 = {
    baseId: 180000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHeartStructure() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"左心房",blood:"动脉血",connect:"肺静脉",wall:"壁薄"},
            {part:"左心室",blood:"动脉血",connect:"主动脉",wall:"壁最厚"},
            {part:"右心房",blood:"静脉血",connect:"上下腔静脉",wall:"壁薄"},
            {part:"右心室",blood:"静脉血",connect:"肺动脉",wall:"壁较厚"},
            {part:"房室瓣",func:"防止血液倒流",direction:"心房→心室",location:"心房心室之间"},
            {part:"动脉瓣",func:"防止血液倒流",direction:"心室→动脉",location:"心室动脉之间"},
            {part:"主动脉",blood:"动脉血",direction:"离心",wall:"壁厚弹性大"},
            {part:"肺动脉",blood:"静脉血",direction:"离心",wall:"壁厚弹性大"},
            {part:"肺静脉",blood:"动脉血",direction:"向心",wall:"壁薄弹性小"},
            {part:"上下腔静脉",blood:"静脉血",direction:"向心",wall:"壁薄弹性小"}
        ];
        parts.forEach(p => {
            if(p.blood) {
                qs.push(this.makeQ(id++,"unit7","medium",`${p.part}中流的是`,p.blood,["混合血","无血","随机"],`${p.part}流${p.blood}。`));
            }
            if(p.connect) {
                qs.push(this.makeQ(id++,"unit7","medium",`${p.part}连接的血管是`,p.connect,["无血管","随机","不确定"],`${p.part}连接${p.connect}。`));
            }
            if(p.wall) {
                qs.push(this.makeQ(id++,"unit7","hard",`${p.part}的壁的特点是`,p.wall,["无特点","随机","不确定"],`${p.part}${p.wall}。`));
            }
            if(p.func) {
                qs.push(this.makeQ(id++,"unit7","medium",`${p.part}的功能是`,p.func,["无功能","随机","不确定"],`${p.part}的功能是${p.func}。`));
            }
            if(p.direction) {
                qs.push(this.makeQ(id++,"unit7","medium",`${p.part}中血液流动方向是`,p.direction,["无方向","随机","不确定"],`${p.part}血液${p.direction}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genBloodCirculation() {
        const qs = []; let id = this.baseId;
        const paths = [
            {path:"体循环起点",location:"左心室",next:"主动脉"},
            {path:"体循环终点",location:"右心房",prev:"上下腔静脉"},
            {path:"体循环功能",func:"运送氧气和营养物质",change:"动脉血→静脉血"},
            {path:"肺循环起点",location:"右心室",next:"肺动脉"},
            {path:"肺循环终点",location:"左心房",prev:"肺静脉"},
            {path:"肺循环功能",func:"气体交换",change:"静脉血→动脉血"},
            {path:"毛细血管特点",feature:"壁薄只有一层细胞",func:"物质交换场所"},
            {path:"动脉特点",feature:"壁厚弹性大",func:"输送血液离开心脏"},
            {path:"静脉特点",feature:"壁薄弹性小有瓣膜",func:"输送血液回心脏"}
        ];
        paths.forEach(p => {
            if(p.location) {
                qs.push(this.makeQ(id++,"unit7","medium",`${p.path}是`,p.location,["无位置","随机","不确定"],`${p.path}是${p.location}。`));
            }
            if(p.next) {
                qs.push(this.makeQ(id++,"unit7","medium",`${p.path}后血液流向`,p.next,["无方向","随机","不确定"],`${p.path}后流向${p.next}。`));
            }
            if(p.func) {
                qs.push(this.makeQ(id++,"unit7","medium",`${p.path}是`,p.func,["无功能","随机","不确定"],`${p.path}是${p.func}。`));
            }
            if(p.change) {
                qs.push(this.makeQ(id++,"unit7","hard",`${p.path}中血液变化是`,p.change,["无变化","随机","不确定"],`${p.path}中${p.change}。`));
            }
            if(p.feature) {
                qs.push(this.makeQ(id++,"unit7","medium",`${p.path}是`,p.feature,["无特点","随机","不确定"],`${p.path}是${p.feature}。`));
            }
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHeartStructure(),...this.genBloodCirculation()]; }
};
