// 超大题库生成器81 - 信息传递
const giantGen81 = {
    baseId: 570000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genInfoTypes() {
        const qs = []; let id = this.baseId;
        const types = [
            {type:"物理信息",example:"光声温度",source:"无机环境或生物"},
            {type:"化学信息",example:"信息素",source:"生物代谢产物"},
            {type:"行为信息",example:"蜜蜂舞蹈",source:"动物行为"},
            {type:"营养信息",example:"食物分布",effect:"影响觅食"},
            {type:"信息传递作用",effect:"调节生物种间关系",importance:"维持生态平衡"}
        ];
        types.forEach(t => {
            qs.push(this.makeQ(id++,"unit11","medium",`${t.type}的例子是`,t.example,["无例子","随机","不确定"],`${t.type}如${t.example}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${t.type}的来源是`,t.source||t.effect,["无来源","随机","不确定"],`${t.type}来自${t.source||t.effect}。`));
        });
        this.baseId = id; return qs;
    },

    genInfoApplication() {
        const qs = []; let id = this.baseId;
        const apps = [
            {application:"利用性信息素",method:"诱捕害虫",principle:"干扰交配"},
            {application:"利用声音驱虫",method:"播放天敌声音",effect:"驱赶害虫"},
            {application:"利用光诱虫",method:"灯光诱捕",principle:"趋光性"},
            {application:"生物防治",method:"引入天敌",advantage:"环保无污染"}
        ];
        apps.forEach(a => {
            qs.push(this.makeQ(id++,"unit11","medium",`${a.application}的方法是`,a.method,["无方法","随机","不确定"],`${a.application}通过${a.method}。`));
            qs.push(this.makeQ(id++,"unit11","medium",`${a.application}的原理是`,a.principle||a.advantage,["无原理","随机","不确定"],`${a.application}原理是${a.principle||a.advantage}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genInfoTypes(),...this.genInfoApplication()]; }
};
