// 超大题库生成器35 - 人体胚胎发育
const giantGen35 = {
    baseId: 340000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genEmbryoDevelopment() {
        const qs = []; let id = this.baseId;
        const stages = [
            {stage:"受精",location:"输卵管",event:"精子与卵细胞结合",result:"受精卵"},
            {stage:"卵裂",location:"输卵管",event:"受精卵分裂",result:"囊胚"},
            {stage:"着床",location:"子宫",event:"囊胚植入子宫内膜",result:"开始发育"},
            {stage:"胚胎期",time:"受精后2-8周",event:"器官形成",feature:"对有害因素敏感"},
            {stage:"胎儿期",time:"受精后9周到出生",event:"器官发育完善",feature:"快速生长"},
            {stage:"胎盘形成",location:"子宫",func:"物质交换",feature:"母体与胎儿的联系"},
            {stage:"脐带形成",location:"胎儿与胎盘之间",func:"运输物质",feature:"含脐动脉和脐静脉"},
            {stage:"羊水形成",location:"羊膜腔",func:"保护胎儿",feature:"缓冲和保温"}
        ];
        stages.forEach(s => {
            if(s.location) {
                qs.push(this.makeQ(id++,"unit10","medium",`${s.stage}发生在`,s.location,["无位置","随机","不确定"],`${s.stage}在${s.location}。`));
            }
            if(s.event) {
                qs.push(this.makeQ(id++,"unit10","medium",`${s.stage}的主要事件是`,s.event,["无事件","随机","不确定"],`${s.stage}${s.event}。`));
            }
            if(s.result) {
                qs.push(this.makeQ(id++,"unit10","medium",`${s.stage}的结果是`,s.result,["无结果","随机","不确定"],`${s.stage}形成${s.result}。`));
            }
            if(s.time) {
                qs.push(this.makeQ(id++,"unit10","medium",`${s.stage}的时间是`,s.time,["无时间","随机","不确定"],`${s.stage}是${s.time}。`));
            }
            if(s.func) {
                qs.push(this.makeQ(id++,"unit10","medium",`${s.stage}的功能是`,s.func,["无功能","随机","不确定"],`${s.stage}的功能是${s.func}。`));
            }
            if(s.feature) {
                qs.push(this.makeQ(id++,"unit10","hard",`${s.stage}的特点是`,s.feature,["无特点","随机","不确定"],`${s.stage}${s.feature}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genBirth() {
        const qs = []; let id = this.baseId;
        const aspects = [
            {aspect:"分娩过程",content:"子宫收缩胎儿娩出",duration:"数小时到十几小时"},
            {aspect:"分娩信号",content:"规律宫缩破水见红",meaning:"即将分娩"},
            {aspect:"新生儿特征",content:"体重约3kg身长约50cm",feature:"能呼吸吮吸"},
            {aspect:"母乳喂养优点",content:"营养丰富含抗体",benefit:"增强免疫力"},
            {aspect:"初乳",content:"产后最初几天的乳汁",feature:"含大量抗体"},
            {aspect:"脐带处理",content:"剪断结扎",result:"形成肚脐"},
            {aspect:"新生儿呼吸",content:"出生后开始肺呼吸",trigger:"第一声啼哭"},
            {aspect:"新生儿循环",content:"肺循环开始",change:"卵圆孔关闭"}
        ];
        aspects.forEach(a => {
            qs.push(this.makeQ(id++,"unit10","medium",`${a.aspect}是`,a.content,["无内容","随机","不确定"],`${a.aspect}是${a.content}。`));
            if(a.duration) {
                qs.push(this.makeQ(id++,"unit10","medium",`${a.aspect}的时间是`,a.duration,["无时间","随机","不确定"],`${a.aspect}持续${a.duration}。`));
            }
            if(a.feature) {
                qs.push(this.makeQ(id++,"unit10","medium",`${a.aspect}的特点是`,a.feature,["无特点","随机","不确定"],`${a.aspect}${a.feature}。`));
            }
            if(a.benefit) {
                qs.push(this.makeQ(id++,"unit10","medium",`${a.aspect}的好处是`,a.benefit,["无好处","随机","不确定"],`${a.aspect}可以${a.benefit}。`));
            }
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genEmbryoDevelopment(),...this.genBirth()]; }
};
