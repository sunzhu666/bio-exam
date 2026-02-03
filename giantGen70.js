// 超大题库生成器70 - 综合应用题
const giantGen70 = {
    baseId: 515000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genApplicationA() {
        const qs = []; let id = this.baseId;
        const applications = [
            {scenario:"温室大棚种植",measure:"增加二氧化碳浓度",principle:"促进光合作用",effect:"提高产量"},
            {scenario:"移栽植物",measure:"去掉部分叶片",principle:"减少蒸腾作用",effect:"提高成活率"},
            {scenario:"储存水果",measure:"低温低氧",principle:"抑制呼吸作用",effect:"延长保鲜期"},
            {scenario:"酿酒",measure:"先通气后密封",principle:"先繁殖后发酵",effect:"产生酒精"},
            {scenario:"制作泡菜",measure:"密封",principle:"无氧发酵",effect:"产生乳酸"},
            {scenario:"种子萌发",condition:"适宜温度水分空气",principle:"呼吸作用需要",effect:"提供能量"},
            {scenario:"嫁接",requirement:"形成层对齐",principle:"形成层能分裂",effect:"愈合成活"}
        ];
        applications.forEach(a => {
            qs.push(this.makeQ(id++,"unit3","hard",`${a.scenario}采取的措施是`,a.measure,["无措施","随机","不确定"],`${a.scenario}要${a.measure}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${a.scenario}的原理是`,a.principle,["无原理","随机","不确定"],`${a.scenario}原理是${a.principle}。`));
            qs.push(this.makeQ(id++,"unit3","hard",`${a.scenario}的效果是`,a.effect,["无效果","随机","不确定"],`${a.scenario}可以${a.effect}。`));
        });
        this.baseId = id; return qs;
    },

    genApplicationB() {
        const qs = []; let id = this.baseId;
        const applications = [
            {scenario:"输血",principle:"血型相同",risk:"凝集反应",safe:"O型可少量给任何人"},
            {scenario:"器官移植",difficulty:"免疫排斥",solution:"使用免疫抑制剂",principle:"免疫系统识别异物"},
            {scenario:"疫苗接种",principle:"产生抗体和记忆细胞",type:"特异性免疫",effect:"预防传染病"},
            {scenario:"抗生素使用",target:"细菌",principle:"抑制细菌生长",注意:"不能滥用"},
            {scenario:"人工呼吸",method:"口对口吹气",principle:"帮助气体交换",situation:"呼吸停止"}
        ];
        applications.forEach(a => {
            qs.push(this.makeQ(id++,"unit8","hard",`${a.scenario}的原理是`,a.principle,["无原理","随机","不确定"],`${a.scenario}原理是${a.principle}。`));
            if(a.risk) qs.push(this.makeQ(id++,"unit8","hard",`${a.scenario}的风险是`,a.risk||a.difficulty,["无风险","随机","不确定"],`${a.scenario}风险是${a.risk||a.difficulty}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genApplicationA(),...this.genApplicationB()]; }
};
