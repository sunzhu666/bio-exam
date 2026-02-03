// 超大题库生成器135 - 健康生活深化
const giantGen135 = {
    baseId: 840000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHealthA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"健康的含义是",c:"身体心理和社会适应的良好状态",w:["只是身体健康","只是心理健康","没有疾病"],u:"unit9"},
            {q:"传染病的特点是",c:"有传染性和流行性",w:["不会传染","不会流行","只有遗传性"],u:"unit9"},
            {q:"传染病流行的三个环节是",c:"传染源传播途径易感人群",w:["只有传染源","只有传播途径","只有易感人群"],u:"unit9"},
            {q:"传染源是指",c:"能散播病原体的人或动物",w:["病原体","传播途径","易感人群"],u:"unit9"},
            {q:"传播途径是指",c:"病原体离开传染源到达健康人的途径",w:["传染源","易感人群","病原体"],u:"unit9"},
            {q:"易感人群是指",c:"对某种传染病缺乏免疫力的人群",w:["传染源","传播途径","病原体"],u:"unit9"},
            {q:"预防传染病的措施包括",c:"控制传染源切断传播途径保护易感人群",w:["只控制传染源","只切断传播途径","只保护易感人群"],u:"unit9"},
            {q:"隔离病人属于",c:"控制传染源",w:["切断传播途径","保护易感人群","增强免疫力"],u:"unit9"},
            {q:"消毒杀菌属于",c:"切断传播途径",w:["控制传染源","保护易感人群","增强免疫力"],u:"unit9"},
            {q:"接种疫苗属于",c:"保护易感人群",w:["控制传染源","切断传播途径","消灭病原体"],u:"unit9"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genHealthB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"吸烟的危害包括",c:"损害呼吸系统心血管系统",w:["对身体有益","增强免疫力","促进生长"],u:"unit6"},
            {q:"酗酒的危害包括",c:"损害肝脏神经系统",w:["对身体有益","增强免疫力","促进消化"],u:"unit5"},
            {q:"毒品的危害包括",c:"损害神经系统产生依赖性",w:["对身体有益","增强免疫力","促进生长"],u:"unit9"},
            {q:"合理用药的原则是",c:"遵医嘱按说明书用药",w:["随意用药","大量用药","不用药"],u:"unit9"},
            {q:"抗生素的使用原则是",c:"不滥用遵医嘱",w:["随意使用","大量使用","预防性使用"],u:"unit9"},
            {q:"滥用抗生素的危害是",c:"产生耐药性",w:["增强免疫力","杀死所有细菌","对身体有益"],u:"unit9"},
            {q:"急救时心肺复苏的步骤是",c:"判断意识开放气道人工呼吸胸外按压",w:["只做人工呼吸","只做胸外按压","不需要急救"],u:"unit7"},
            {q:"出血时止血的方法包括",c:"指压止血加压包扎止血带止血",w:["不处理","只用水冲洗","只用酒精消毒"],u:"unit7"},
            {q:"骨折时的急救原则是",c:"固定制动及时送医",w:["随意移动","用力按摩","热敷处理"],u:"unit9"},
            {q:"食物中毒时的急救措施是",c:"催吐洗胃及时送医",w:["继续进食","不处理","只喝水"],u:"unit5"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHealthA(),...this.genHealthB()]; }
};
