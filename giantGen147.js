// 超大题库生成器147 - 人体发育深化
const giantGen147 = {
    baseId: 900000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHumanDevelopmentA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"人体发育的起点是",c:"受精卵",w:["精子","卵细胞","胚胎"],u:"unit10"},
            {q:"受精的场所是",c:"输卵管",w:["子宫","卵巢","阴道"],u:"unit10"},
            {q:"胚胎发育的场所是",c:"子宫",w:["输卵管","卵巢","阴道"],u:"unit10"},
            {q:"胎儿与母体进行物质交换的结构是",c:"胎盘和脐带",w:["子宫壁","卵巢","输卵管"],u:"unit10"},
            {q:"胎儿获得氧气和营养的途径是",c:"通过胎盘从母体血液获得",w:["自己呼吸","自己消化","从羊水获得"],u:"unit10"},
            {q:"胎儿排出代谢废物的途径是",c:"通过胎盘进入母体血液",w:["自己排出","进入羊水","不排出"],u:"unit10"},
            {q:"人体胚胎发育的时间约为",c:"280天",w:["180天","380天","100天"],u:"unit10"},
            {q:"青春期的特点是",c:"身体迅速发育性器官成熟",w:["身体停止发育","性器官不发育","与儿童期相同"],u:"unit10"},
            {q:"青春期开始的标志是",c:"性器官开始发育",w:["身高停止增长","体重不再增加","智力停止发育"],u:"unit10"},
            {q:"男性第二性征包括",c:"喉结突出声音变粗长胡须",w:["乳房发育","声音变细","骨盆变宽"],u:"unit10"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genHumanDevelopmentB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"女性第二性征包括",c:"乳房发育声音变细骨盆变宽",w:["喉结突出","声音变粗","长胡须"],u:"unit10"},
            {q:"第二性征的出现与什么有关",c:"性激素",w:["生长激素","甲状腺激素","胰岛素"],u:"unit10"},
            {q:"男性主要的性激素是",c:"雄性激素",w:["雌性激素","孕激素","生长激素"],u:"unit10"},
            {q:"女性主要的性激素是",c:"雌性激素和孕激素",w:["雄性激素","生长激素","甲状腺激素"],u:"unit10"},
            {q:"产生精子的器官是",c:"睾丸",w:["附睾","前列腺","精囊腺"],u:"unit10"},
            {q:"产生卵细胞的器官是",c:"卵巢",w:["子宫","输卵管","阴道"],u:"unit10"},
            {q:"分泌雄性激素的器官是",c:"睾丸",w:["附睾","前列腺","精囊腺"],u:"unit10"},
            {q:"分泌雌性激素的器官是",c:"卵巢",w:["子宫","输卵管","阴道"],u:"unit10"},
            {q:"月经形成的原因是",c:"子宫内膜周期性脱落出血",w:["卵巢出血","输卵管出血","阴道出血"],u:"unit10"},
            {q:"遗精是指",c:"精液不自主排出体外",w:["尿液排出","汗液排出","血液排出"],u:"unit10"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHumanDevelopmentA(),...this.genHumanDevelopmentB()]; }
};
