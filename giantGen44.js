// 超大题库生成器44 - 生物实验方法
const giantGen44 = {
    baseId: 385000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genExperimentMethods() {
        const qs = []; let id = this.baseId;
        const methods = [
            {method:"对照实验",def:"设置对照组和实验组",principle:"控制单一变量",example:"光合作用实验"},
            {method:"观察法",def:"直接观察记录",principle:"不干预对象",example:"观察动物行为"},
            {method:"调查法",def:"收集数据分析",principle:"抽样调查",example:"人口调查"},
            {method:"实验法",def:"人为控制条件",principle:"验证假设",example:"酶活性实验"},
            {method:"模拟实验",def:"模拟自然过程",principle:"简化复杂系统",example:"生态瓶"},
            {method:"同位素标记法",def:"用放射性同位素追踪",principle:"追踪物质去向",example:"光合作用产物"},
            {method:"样方法",def:"在样方内计数",principle:"随机取样",example:"植物种群密度"},
            {method:"标志重捕法",def:"标记后再捕捉",principle:"比例计算",example:"动物种群密度"}
        ];
        methods.forEach(m => {
            qs.push(this.makeQ(id++,"unit13","hard",`${m.method}的定义是`,m.def,["无定义","随机","不确定"],`${m.method}是${m.def}。`));
            qs.push(this.makeQ(id++,"unit13","hard",`${m.method}的原理是`,m.principle,["无原理","随机","不确定"],`${m.method}的原理是${m.principle}。`));
            qs.push(this.makeQ(id++,"unit13","hard",`${m.method}的例子是`,m.example,["无例子","随机","不确定"],`${m.method}如${m.example}。`));
        });
        this.baseId = id; return qs;
    },

    genExperimentDesign() {
        const qs = []; let id = this.baseId;
        const elements = [
            {element:"自变量",def:"人为改变的变量",example:"光照强度",role:"实验因素"},
            {element:"因变量",def:"随自变量变化的变量",example:"光合作用速率",role:"观测指标"},
            {element:"无关变量",def:"需要控制的其他变量",example:"温度湿度",role:"保持相同"},
            {element:"对照组",def:"不做处理的组",purpose:"作为比较标准",feature:"排除其他因素"},
            {element:"实验组",def:"接受处理的组",purpose:"观察实验效果",feature:"改变自变量"},
            {element:"重复实验",def:"多次重复实验",purpose:"减少误差",feature:"提高可靠性"},
            {element:"假设",def:"对问题的推测",feature:"可验证",basis:"已有知识"},
            {element:"结论",def:"实验结果的总结",feature:"基于数据",requirement:"客观准确"}
        ];
        elements.forEach(e => {
            qs.push(this.makeQ(id++,"unit13","hard",`实验设计中${e.element}的定义是`,e.def,["无定义","随机","不确定"],`${e.element}是${e.def}。`));
            if(e.example) {
                qs.push(this.makeQ(id++,"unit13","hard",`实验设计中${e.element}的例子是`,e.example,["无例子","随机","不确定"],`${e.element}如${e.example}。`));
            }
            if(e.purpose) {
                qs.push(this.makeQ(id++,"unit13","hard",`实验设计中${e.element}的目的是`,e.purpose,["无目的","随机","不确定"],`${e.element}是为了${e.purpose}。`));
            }
            if(e.role) {
                qs.push(this.makeQ(id++,"unit13","hard",`实验设计中${e.element}的作用是`,e.role,["无作用","随机","不确定"],`${e.element}的作用是${e.role}。`));
            }
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genExperimentMethods(),...this.genExperimentDesign()]; }
};
