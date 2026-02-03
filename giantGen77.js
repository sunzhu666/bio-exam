// 超大题库生成器77 - 生殖发育深化
const giantGen77 = {
    baseId: 550000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPlantReproduction() {
        const qs = []; let id = this.baseId;
        const types = [
            {type:"有性生殖",feature:"有两性生殖细胞结合",example:"种子繁殖",advantage:"后代变异大"},
            {type:"无性生殖",feature:"不经过两性生殖细胞结合",example:"扦插嫁接",advantage:"保持亲本性状"},
            {type:"扦插",method:"用茎叶繁殖",example:"葡萄月季",condition:"保持湿润"},
            {type:"嫁接",method:"接穗与砧木结合",requirement:"形成层对齐",example:"果树"},
            {type:"组织培养",principle:"细胞全能性",advantage:"快速繁殖",condition:"无菌操作"},
            {type:"花粉管萌发",process:"花粉落到柱头萌发",direction:"伸向子房",content:"精子"}
        ];
        types.forEach(t => {
            qs.push(this.makeQ(id++,"unit3","medium",`${t.type}的特点是`,t.feature||t.method,["无特点","随机","不确定"],`${t.type}${t.feature||t.method}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${t.type}的例子是`,t.example,["无例子","随机","不确定"],`${t.type}如${t.example}。`));
        });
        this.baseId = id; return qs;
    },

    genAnimalDevelopment() {
        const qs = []; let id = this.baseId;
        const stages = [
            {animal:"蛙",stages:"受精卵蝌蚪幼蛙成蛙",type:"变态发育",feature:"幼体与成体差异大"},
            {animal:"蝴蝶",stages:"卵幼虫蛹成虫",type:"完全变态",feature:"有蛹期"},
            {animal:"蝗虫",stages:"卵若虫成虫",type:"不完全变态",feature:"无蛹期"},
            {animal:"鸟类",stages:"受精卵胚胎雏鸟成鸟",type:"卵生",feature:"体外发育"},
            {animal:"哺乳动物",stages:"受精卵胚胎胎儿幼体成体",type:"胎生",feature:"体内发育"}
        ];
        stages.forEach(s => {
            qs.push(this.makeQ(id++,"unit1","medium",`${s.animal}的发育阶段是`,s.stages,["无阶段","随机","不确定"],`${s.animal}经历${s.stages}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${s.animal}的发育类型是`,s.type,["无类型","随机","不确定"],`${s.animal}是${s.type}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPlantReproduction(),...this.genAnimalDevelopment()]; }
};
