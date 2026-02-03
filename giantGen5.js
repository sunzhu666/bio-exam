// 超大题库生成器5 - 人体泌尿系统
const giantGen5 = {
    baseId: 190000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genUrinaryOrgans() {
        const qs = []; let id = this.baseId;
        const organs = [
            {organ:"肾脏",func:"形成尿液",feature:"蚕豆形",position:"腹腔后壁脊柱两侧"},
            {organ:"输尿管",func:"输送尿液",feature:"细长管道",position:"肾脏到膀胱"},
            {organ:"膀胱",func:"暂时储存尿液",feature:"囊状器官",position:"盆腔内"},
            {organ:"尿道",func:"排出尿液",feature:"管状结构",position:"膀胱下方"},
            {organ:"肾单位",func:"形成尿液的基本单位",feature:"由肾小球和肾小管组成",position:"肾脏内"},
            {organ:"肾小球",func:"过滤血液",feature:"毛细血管球",position:"肾小囊内"},
            {organ:"肾小囊",func:"收集滤液",feature:"双层囊状",position:"包围肾小球"},
            {organ:"肾小管",func:"重吸收",feature:"细长弯曲",position:"肾小囊后方"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit7","medium",`${o.organ}的主要功能是`,o.func,["无功能","随机","不确定"],`${o.organ}的功能是${o.func}。`));
            qs.push(this.makeQ(id++,"unit7","medium",`${o.organ}的结构特点是`,o.feature,["无特点","随机","不确定"],`${o.organ}的特点是${o.feature}。`));
            qs.push(this.makeQ(id++,"unit7","easy",`${o.organ}位于`,o.position,["体外","随机","不确定"],`${o.organ}位于${o.position}。`));
        });
        this.baseId = id; return qs;
    },

    genUrineFormation() {
        const qs = []; let id = this.baseId;
        const steps = [
            {step:"肾小球滤过",process:"血液中的小分子物质滤出",result:"形成原尿",location:"肾小球"},
            {step:"原尿成分",content:"水无机盐葡萄糖尿素",feature:"与血浆相似但无蛋白质",amount:"约180升/天"},
            {step:"肾小管重吸收",process:"全部葡萄糖大部分水和无机盐被吸收",result:"形成尿液",location:"肾小管"},
            {step:"尿液成分",content:"水无机盐尿素",feature:"不含葡萄糖和蛋白质",amount:"约1.5升/天"},
            {step:"尿液排出途径",path:"肾脏→输尿管→膀胱→尿道",feature:"单向流动",control:"受神经控制"},
            {step:"排尿意义",func:"排出代谢废物",feature:"调节水盐平衡",importance:"维持内环境稳定"}
        ];
        steps.forEach(s => {
            if(s.process) {
                qs.push(this.makeQ(id++,"unit7","hard",`${s.step}的过程是`,s.process,["无过程","随机","不确定"],`${s.step}是${s.process}。`));
            }
            if(s.result) {
                qs.push(this.makeQ(id++,"unit7","hard",`${s.step}的结果是`,s.result,["无结果","随机","不确定"],`${s.step}${s.result}。`));
            }
            if(s.content) {
                qs.push(this.makeQ(id++,"unit7","medium",`${s.step}包括`,s.content,["无成分","随机","不确定"],`${s.step}有${s.content}。`));
            }
            if(s.feature) {
                qs.push(this.makeQ(id++,"unit7","medium",`${s.step}的特点是`,s.feature,["无特点","随机","不确定"],`${s.step}${s.feature}。`));
            }
            if(s.path) {
                qs.push(this.makeQ(id++,"unit7","medium",`${s.step}是`,s.path,["无途径","随机","不确定"],`${s.step}是${s.path}。`));
            }
            if(s.func) {
                qs.push(this.makeQ(id++,"unit7","medium",`${s.step}是`,s.func,["无意义","随机","不确定"],`${s.step}是${s.func}。`));
            }
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genUrinaryOrgans(),...this.genUrineFormation()]; }
};
