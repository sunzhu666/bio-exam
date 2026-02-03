// 超大题库生成器47 - DNA与基因
const giantGen47 = {
    baseId: 400000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genDNAStructure() {
        const qs = []; let id = this.baseId;
        const features = [
            {feature:"DNA的组成",content:"脱氧核苷酸",element:"C H O N P"},
            {feature:"脱氧核苷酸组成",content:"磷酸脱氧核糖含氮碱基",number:"四种"},
            {feature:"DNA的碱基",content:"A T G C",pairing:"A-T G-C"},
            {feature:"DNA的结构",content:"双螺旋结构",discoverer:"沃森和克里克"},
            {feature:"碱基互补配对",content:"A与T配对G与C配对",bond:"氢键"},
            {feature:"DNA复制",content:"半保留复制",time:"细胞分裂间期"},
            {feature:"DNA复制特点",content:"边解旋边复制",direction:"双向复制"},
            {feature:"DNA复制意义",content:"保证遗传信息传递",result:"两个相同的DNA"}
        ];
        features.forEach(f => {
            qs.push(this.makeQ(id++,"unit10","hard",`${f.feature}是`,f.content,["无内容","随机","不确定"],`${f.feature}是${f.content}。`));
            if(f.element) {
                qs.push(this.makeQ(id++,"unit10","hard",`${f.feature}含有的元素是`,f.element,["无元素","随机","不确定"],`${f.feature}含${f.element}。`));
            }
            if(f.pairing) {
                qs.push(this.makeQ(id++,"unit10","hard",`${f.feature}的配对规则是`,f.pairing,["无规则","随机","不确定"],`${f.feature}${f.pairing}。`));
            }
            if(f.discoverer) {
                qs.push(this.makeQ(id++,"unit10","hard",`${f.feature}的发现者是`,f.discoverer,["无发现者","随机","不确定"],`${f.feature}由${f.discoverer}发现。`));
            }
        });
        this.baseId = id; return qs;
    },

    genGeneExpression() {
        const qs = []; let id = this.baseId;
        const processes = [
            {process:"转录",location:"细胞核",template:"DNA",product:"mRNA"},
            {process:"翻译",location:"核糖体",template:"mRNA",product:"蛋白质"},
            {process:"密码子",content:"mRNA上三个相邻碱基",number:"64种",function:"决定氨基酸"},
            {process:"反密码子",content:"tRNA上三个碱基",function:"识别密码子",location:"tRNA"},
            {process:"中心法则",content:"DNA→RNA→蛋白质",proposer:"克里克",meaning:"遗传信息流动"},
            {process:"基因突变",content:"DNA碱基序列改变",type:"点突变",result:"可能改变性状"},
            {process:"基因重组",content:"基因的重新组合",time:"减数分裂",result:"产生新基因型"}
        ];
        processes.forEach(p => {
            qs.push(this.makeQ(id++,"unit10","hard",`${p.process}的内容是`,p.content || p.location,["无内容","随机","不确定"],`${p.process}是${p.content || p.location}。`));
            if(p.template) {
                qs.push(this.makeQ(id++,"unit10","hard",`${p.process}的模板是`,p.template,["无模板","随机","不确定"],`${p.process}以${p.template}为模板。`));
            }
            if(p.product) {
                qs.push(this.makeQ(id++,"unit10","hard",`${p.process}的产物是`,p.product,["无产物","随机","不确定"],`${p.process}产生${p.product}。`));
            }
            if(p.function) {
                qs.push(this.makeQ(id++,"unit10","hard",`${p.process}的功能是`,p.function,["无功能","随机","不确定"],`${p.process}的功能是${p.function}。`));
            }
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genDNAStructure(),...this.genGeneExpression()]; }
};
