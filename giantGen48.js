// 超大题库生成器48 - 人类进化
const giantGen48 = {
    baseId: 405000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHumanEvolution() {
        const qs = []; let id = this.baseId;
        const stages = [
            {stage:"南方古猿",time:"400-200万年前",feature:"能直立行走",brain:"脑容量小"},
            {stage:"能人",time:"200-150万年前",feature:"能制造工具",brain:"脑容量增大"},
            {stage:"直立人",time:"150-20万年前",feature:"能用火",brain:"脑容量继续增大"},
            {stage:"智人",time:"20万年前至今",feature:"有语言和文化",brain:"脑容量最大"},
            {stage:"北京猿人",time:"约70万年前",feature:"能用火",location:"北京周口店"},
            {stage:"山顶洞人",time:"约3万年前",feature:"有装饰品",location:"北京周口店"}
        ];
        stages.forEach(s => {
            qs.push(this.makeQ(id++,"unit12","hard",`${s.stage}生活的时间是`,s.time,["无时间","随机","不确定"],`${s.stage}生活在${s.time}。`));
            qs.push(this.makeQ(id++,"unit12","hard",`${s.stage}的特点是`,s.feature,["无特点","随机","不确定"],`${s.stage}${s.feature}。`));
            if(s.brain) {
                qs.push(this.makeQ(id++,"unit12","hard",`${s.stage}的脑容量特点是`,s.brain,["无特点","随机","不确定"],`${s.stage}${s.brain}。`));
            }
            if(s.location) {
                qs.push(this.makeQ(id++,"unit12","hard",`${s.stage}的发现地点是`,s.location,["无地点","随机","不确定"],`${s.stage}发现于${s.location}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genHumanFeatures() {
        const qs = []; let id = this.baseId;
        const features = [
            {feature:"直立行走",advantage:"解放双手",change:"脊柱弯曲骨盆变宽"},
            {feature:"脑容量增大",advantage:"智力提高",change:"颅骨增大"},
            {feature:"手的进化",advantage:"能制造工具",change:"拇指能对握"},
            {feature:"语言产生",advantage:"交流和传承",change:"喉部结构改变"},
            {feature:"使用工具",advantage:"获取食物",change:"牙齿变小"},
            {feature:"用火",advantage:"熟食和取暖",change:"消化系统改变"},
            {feature:"社会性",advantage:"合作生存",change:"大脑发达"}
        ];
        features.forEach(f => {
            qs.push(this.makeQ(id++,"unit12","hard",`人类${f.feature}的优势是`,f.advantage,["无优势","随机","不确定"],`${f.feature}使人类${f.advantage}。`));
            qs.push(this.makeQ(id++,"unit12","hard",`人类${f.feature}带来的身体变化是`,f.change,["无变化","随机","不确定"],`${f.feature}导致${f.change}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHumanEvolution(),...this.genHumanFeatures()]; }
};
