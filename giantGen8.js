// 超大题库生成器8 - 生殖发育详细
const giantGen8 = {
    baseId: 205000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPlantReproduction() {
        const qs = []; let id = this.baseId;
        const reproductions = [
            {type:"有性生殖",feature:"有两性生殖细胞结合",example:"种子繁殖",offspring:"后代变异大"},
            {type:"无性生殖",feature:"不经过两性生殖细胞结合",example:"扦插嫁接",offspring:"后代与亲本相同"},
            {type:"扦插",method:"用茎或叶繁殖",example:"月季葡萄",condition:"保持湿润"},
            {type:"嫁接",method:"接穗和砧木结合",example:"果树嫁接",condition:"形成层对齐"},
            {type:"压条",method:"将枝条压入土中",example:"桂花石榴",condition:"枝条生根后切断"},
            {type:"组织培养",method:"用植物组织培养",example:"兰花培养",condition:"无菌条件"},
            {type:"花粉传播",method:"风媒或虫媒",example:"玉米风媒蜜蜂虫媒",condition:"花粉落到柱头上"},
            {type:"受精过程",step:"花粉管伸入胚珠",result:"精子与卵细胞结合",product:"受精卵"}
        ];
        reproductions.forEach(r => {
            qs.push(this.makeQ(id++,"unit3","medium",`${r.type}的特点是`,r.feature || r.method,["无特点","随机","不确定"],`${r.type}${r.feature || r.method}。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${r.type}的例子是`,r.example,["无例子","随机","不确定"],`${r.type}如${r.example}。`));
            if(r.offspring) {
                qs.push(this.makeQ(id++,"unit3","hard",`${r.type}后代的特点是`,r.offspring,["无特点","随机","不确定"],`${r.type}${r.offspring}。`));
            }
            if(r.condition) {
                qs.push(this.makeQ(id++,"unit3","hard",`${r.type}的条件是`,r.condition,["无条件","随机","不确定"],`${r.type}需要${r.condition}。`));
            }
            if(r.result) {
                qs.push(this.makeQ(id++,"unit3","hard",`${r.type}的结果是`,r.result,["无结果","随机","不确定"],`${r.type}${r.result}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genAnimalDevelopment() {
        const qs = []; let id = this.baseId;
        const developments = [
            {animal:"青蛙",type:"变态发育",stages:"受精卵→蝌蚪→幼蛙→成蛙",feature:"幼体与成体差异大"},
            {animal:"蝴蝶",type:"完全变态",stages:"卵→幼虫→蛹→成虫",feature:"有蛹期"},
            {animal:"蝗虫",type:"不完全变态",stages:"卵→若虫→成虫",feature:"无蛹期"},
            {animal:"鸡",type:"卵生",stages:"受精卵→胚胎→雏鸡→成鸡",feature:"体外发育"},
            {animal:"人",type:"胎生",stages:"受精卵→胚胎→胎儿→婴儿",feature:"体内发育"},
            {animal:"鱼",type:"卵生变态",stages:"受精卵→仔鱼→幼鱼→成鱼",feature:"水中发育"},
            {animal:"蜜蜂",type:"完全变态",stages:"卵→幼虫→蛹→成虫",feature:"社会性昆虫"},
            {animal:"蚕",type:"完全变态",stages:"卵→幼虫→蛹→成虫",feature:"吐丝结茧"}
        ];
        developments.forEach(d => {
            qs.push(this.makeQ(id++,"unit1","medium",`${d.animal}的发育类型是`,d.type,["无类型","随机","不确定"],`${d.animal}是${d.type}。`));
            qs.push(this.makeQ(id++,"unit1","medium",`${d.animal}的发育过程是`,d.stages,["无过程","随机","不确定"],`${d.animal}发育过程是${d.stages}。`));
            qs.push(this.makeQ(id++,"unit1","hard",`${d.animal}发育的特点是`,d.feature,["无特点","随机","不确定"],`${d.animal}发育特点是${d.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPlantReproduction(),...this.genAnimalDevelopment()]; }
};
