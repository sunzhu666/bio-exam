// 超大题库生成器22 - 物质循环
const giantGen22 = {
    baseId: 275000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genCarbonCycle() {
        const qs = []; let id = this.baseId;
        const processes = [
            {process:"光合作用",direction:"大气→生物",form:"CO2→有机物",organism:"生产者"},
            {process:"呼吸作用",direction:"生物→大气",form:"有机物→CO2",organism:"所有生物"},
            {process:"分解作用",direction:"生物→大气",form:"有机物→CO2",organism:"分解者"},
            {process:"燃烧",direction:"化石燃料→大气",form:"有机物→CO2",cause:"人类活动"},
            {process:"摄食",direction:"生产者→消费者",form:"有机物传递",organism:"消费者"},
            {process:"碳酸盐沉积",direction:"大气→岩石",form:"CO2→�ite",location:"海洋"},
            {process:"火山喷发",direction:"岩石→大气",form:"碳酸盐→CO2",location:"火山"},
            {process:"化石燃料形成",direction:"生物→岩石",form:"有机物→煤石油",time:"数百万年"}
        ];
        processes.forEach(p => {
            qs.push(this.makeQ(id++,"unit11","hard",`碳循环中${p.process}的方向是`,p.direction,["无方向","随机","不确定"],`${p.process}使碳从${p.direction}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`碳循环中${p.process}的形式变化是`,p.form,["无变化","随机","不确定"],`${p.process}中${p.form}。`));
            if(p.organism) {
                qs.push(this.makeQ(id++,"unit11","hard",`碳循环中${p.process}的生物是`,p.organism,["无生物","随机","不确定"],`${p.process}由${p.organism}完成。`));
            }
        });
        this.baseId = id; return qs;
    },

    genNitrogenCycle() {
        const qs = []; let id = this.baseId;
        const processes = [
            {process:"固氮作用",direction:"大气→土壤",form:"N2→NH3",organism:"固氮菌根瘤菌"},
            {process:"硝化作用",direction:"土壤中",form:"NH3→NO3-",organism:"硝化细菌"},
            {process:"反硝化作用",direction:"土壤→大气",form:"NO3-→N2",organism:"反硝化细菌"},
            {process:"氨化作用",direction:"有机物→无机物",form:"有机氮→NH3",organism:"氨化细菌"},
            {process:"植物吸收",direction:"土壤→植物",form:"NO3-或NH4+",organism:"植物根"},
            {process:"动物摄食",direction:"植物→动物",form:"有机氮传递",organism:"动物"},
            {process:"排泄和死亡",direction:"生物→土壤",form:"有机氮→土壤",organism:"所有生物"},
            {process:"闪电固氮",direction:"大气→土壤",form:"N2→NO3-",cause:"闪电"}
        ];
        processes.forEach(p => {
            qs.push(this.makeQ(id++,"unit11","hard",`氮循环中${p.process}的方向是`,p.direction,["无方向","随机","不确定"],`${p.process}使氮${p.direction}。`));
            qs.push(this.makeQ(id++,"unit11","hard",`氮循环中${p.process}的形式变化是`,p.form,["无变化","随机","不确定"],`${p.process}中${p.form}。`));
            if(p.organism) {
                qs.push(this.makeQ(id++,"unit11","hard",`氮循环中${p.process}的生物是`,p.organism,["无生物","随机","不确定"],`${p.process}由${p.organism}完成。`));
            }
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genCarbonCycle(),...this.genNitrogenCycle()]; }
};
