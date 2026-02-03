// 超大题库生成器152 - 易错题精选B
const giantGen152 = {
    baseId: 925000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genMistakesC() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"尿液中有葡萄糖说明什么",c:"可能患有糖尿病",w:["正常现象","肾小球有问题","肾小管正常"],u:"unit8"},
            {q:"尿液中有蛋白质说明什么",c:"可能患有肾炎",w:["正常现象","糖尿病","肾小管有问题"],u:"unit8"},
            {q:"近视眼是晶状体曲度过大还是过小",c:"曲度过大或眼球前后径过长",w:["曲度过小","眼球过短","视网膜问题"],u:"unit9"},
            {q:"远视眼是晶状体曲度过大还是过小",c:"曲度过小或眼球前后径过短",w:["曲度过大","眼球过长","视网膜问题"],u:"unit9"},
            {q:"近视眼应配戴什么透镜",c:"凹透镜",w:["凸透镜","平面镜","不需要"],u:"unit9"},
            {q:"远视眼应配戴什么透镜",c:"凸透镜",w:["凹透镜","平面镜","不需要"],u:"unit9"},
            {q:"条件反射的神经中枢在哪里",c:"大脑皮层",w:["脊髓","小脑","脑干"],u:"unit9"},
            {q:"非条件反射的神经中枢在哪里",c:"脊髓或脑干",w:["只在大脑皮层","只在小脑","没有神经中枢"],u:"unit9"},
            {q:"膝跳反射的神经中枢在哪里",c:"脊髓",w:["大脑皮层","小脑","脑干"],u:"unit9"},
            {q:"望梅止渴的神经中枢在哪里",c:"大脑皮层",w:["脊髓","小脑","脑干"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genMistakesD() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"胰岛素分泌不足会导致什么",c:"血糖升高糖尿病",w:["血糖降低","低血糖","侏儒症"],u:"unit9"},
            {q:"胰岛素分泌过多会导致什么",c:"血糖降低低血糖",w:["血糖升高","糖尿病","巨人症"],u:"unit9"},
            {q:"生长激素分泌不足会导致什么",c:"侏儒症",w:["巨人症","呆小症","糖尿病"],u:"unit9"},
            {q:"甲状腺激素分泌不足会导致什么",c:"幼年呆小症成年甲减",w:["甲亢","巨人症","糖尿病"],u:"unit9"},
            {q:"显性基因一定表现出来吗",c:"是的显性基因控制的性状会表现",w:["不一定","隐性才表现","都不表现"],u:"unit11"},
            {q:"隐性基因一定不表现吗",c:"不是纯合隐性会表现",w:["一定不表现","一定表现","与基因无关"],u:"unit11"},
            {q:"Aa个体表现什么性状",c:"显性性状",w:["隐性性状","中间性状","不表现"],u:"unit11"},
            {q:"aa个体表现什么性状",c:"隐性性状",w:["显性性状","中间性状","不表现"],u:"unit11"},
            {q:"两个Aa杂交后代有隐性个体吗",c:"有四分之一是aa",w:["没有","全是隐性","一半是隐性"],u:"unit11"},
            {q:"变异都能遗传吗",c:"不是只有遗传物质改变的才能遗传",w:["都能遗传","都不能遗传","与遗传无关"],u:"unit11"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genMistakesC(),...this.genMistakesD()]; }
};
