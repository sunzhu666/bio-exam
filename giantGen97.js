// 超大题库生成器97 - 人体生殖发育
const giantGen97 = {
    baseId: 650000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genReproductiveOrgans() {
        const qs = []; let id = this.baseId;
        const organs = [
            {organ:"睾丸",function:"产生精子分泌雄激素",location:"阴囊内"},
            {organ:"卵巢",function:"产生卵细胞分泌雌激素",location:"盆腔内"},
            {organ:"输卵管",function:"输送卵细胞受精场所",structure:"管道"},
            {organ:"子宫",function:"胚胎发育的场所",structure:"肌肉器官"},
            {organ:"胎盘",function:"物质交换",structure:"绒毛和血管"},
            {organ:"脐带",function:"连接胎儿和胎盘",content:"血管"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit1","medium",`${o.organ}的功能是`,o.function,["无功能","随机","不确定"],`${o.organ}${o.function}。`));
            if(o.location) qs.push(this.makeQ(id++,"unit1","medium",`${o.organ}的位置是`,o.location,["无位置","随机","不确定"],`${o.organ}位于${o.location}。`));
        });
        this.baseId = id; return qs;
    },

    genHumanDevelopment() {
        const qs = []; let id = this.baseId;
        const stages = [
            {stage:"受精",location:"输卵管",result:"受精卵"},
            {stage:"着床",location:"子宫内膜",time:"受精后约一周"},
            {stage:"胚胎发育",duration:"约40周",nutrition:"通过胎盘获取"},
            {stage:"分娩",process:"子宫收缩",result:"胎儿娩出"},
            {stage:"青春期",feature:"生殖器官发育成熟",change:"第二性征出现"}
        ];
        stages.forEach(s => {
            qs.push(this.makeQ(id++,"unit1","medium",`人体${s.stage}的位置是`,s.location||s.duration||s.feature,["无位置","随机","不确定"],`${s.stage}在${s.location||s.duration||s.feature}。`));
            if(s.result) qs.push(this.makeQ(id++,"unit1","medium",`人体${s.stage}的结果是`,s.result,["无结果","随机","不确定"],`${s.stage}产生${s.result}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genReproductiveOrgans(),...this.genHumanDevelopment()]; }
};
