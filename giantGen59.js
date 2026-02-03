// 超大题库生成器59 - 科学探究方法
const giantGen59 = {
    baseId: 460000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genScientificMethods() {
        const qs = []; let id = this.baseId;
        const methods = [
            {method:"观察法",definition:"用感官或仪器观察",example:"观察细胞结构"},
            {method:"实验法",definition:"人为控制条件进行研究",example:"探究光合作用"},
            {method:"调查法",definition:"实地调查收集资料",example:"调查校园植物"},
            {method:"比较法",definition:"比较异同找规律",example:"比较动植物细胞"},
            {method:"分类法",definition:"按特征分门别类",example:"生物分类"},
            {method:"模型法",definition:"用模型代替研究对象",example:"DNA双螺旋模型"},
            {method:"假说演绎法",definition:"提出假说进行验证",example:"孟德尔遗传实验"}
        ];
        methods.forEach(m => {
            qs.push(this.makeQ(id++,"unit1","medium",`${m.method}的定义是`,m.definition,["无定义","随机","不确定"],`${m.method}是${m.definition}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${m.method}的例子是`,m.example,["无例子","随机","不确定"],`${m.method}如${m.example}。`));
        });
        this.baseId = id; return qs;
    },

    genInquirySteps() {
        const qs = []; let id = this.baseId;
        const steps = [
            {step:"提出问题",content:"发现并提出要研究的问题",requirement:"问题要明确具体"},
            {step:"作出假设",content:"对问题的可能答案",requirement:"假设要合理可验证"},
            {step:"制定计划",content:"设计实验方案",requirement:"方案要科学可行"},
            {step:"实施计划",content:"按计划进行实验",requirement:"操作要规范准确"},
            {step:"得出结论",content:"分析数据得出结论",requirement:"结论要客观准确"},
            {step:"表达交流",content:"分享实验结果",requirement:"表达要清晰准确"}
        ];
        steps.forEach(s => {
            qs.push(this.makeQ(id++,"unit1","medium",`科学探究${s.step}的内容是`,s.content,["无内容","随机","不确定"],`${s.step}是${s.content}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`科学探究${s.step}的要求是`,s.requirement,["无要求","随机","不确定"],`${s.step}要求${s.requirement}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genScientificMethods(),...this.genInquirySteps()]; }
};
