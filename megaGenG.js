// 大规模题库生成器G - 生殖发育综合
const megaGenG = {
    baseId: 80000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPlantReproduction() {
        const qs = []; let id = this.baseId;
        const methods = [
            {method:"种子繁殖",type:"有性生殖",example:"水稻播种",advantage:"后代变异大"},
            {method:"扦插",type:"无性生殖",example:"月季扦插",advantage:"保持亲本性状"},
            {method:"嫁接",type:"无性生殖",example:"果树嫁接",advantage:"保持优良性状"},
            {method:"压条",type:"无性生殖",example:"桂花压条",advantage:"成活率高"},
            {method:"分株",type:"无性生殖",example:"兰花分株",advantage:"操作简单"},
            {method:"组织培养",type:"无性生殖",example:"兰花组培",advantage:"快速大量繁殖"}
        ];
        const plants = ["月季","菊花","葡萄","柳树","杨树","桑树","无花果","石榴","苹果","梨","桃","杏","李","樱桃","柑橘","荔枝","龙眼","芒果","香蕉","菠萝"];
        methods.forEach(m => {
            qs.push(this.makeQ(id++,"unit10","medium",`${m.method}属于`,m.type,["细胞分裂","减数分裂","有丝分裂"],`${m.method}是${m.type}。`));
            qs.push(this.makeQ(id++,"unit10","medium",`${m.example}的优点是`,m.advantage,["无优点","有害","降低产量"],`${m.method}的优点是${m.advantage}。`));
        });
        plants.forEach(p => {
            qs.push(this.makeQ(id++,"unit10","easy",`${p}可以通过扦插繁殖，这属于`,`无性生殖`,["有性生殖","细胞分裂","减数分裂"],`扦插是无性生殖。`));
        });
        this.baseId = id; return qs;
    },

    genAnimalReproduction() {
        const qs = []; let id = this.baseId;
        const animals = [
            {animal:"鱼",type:"卵生",fertilization:"体外受精",development:"变态发育或直接发育"},
            {animal:"青蛙",type:"卵生",fertilization:"体外受精",development:"变态发育"},
            {animal:"蛇",type:"卵生",fertilization:"体内受精",development:"直接发育"},
            {animal:"鸡",type:"卵生",fertilization:"体内受精",development:"直接发育"},
            {animal:"鸭嘴兽",type:"卵生",fertilization:"体内受精",development:"直接发育"},
            {animal:"狗",type:"胎生",fertilization:"体内受精",development:"直接发育"},
            {animal:"猫",type:"胎生",fertilization:"体内受精",development:"直接发育"},
            {animal:"牛",type:"胎生",fertilization:"体内受精",development:"直接发育"},
            {animal:"鲸",type:"胎生",fertilization:"体内受精",development:"直接发育"},
            {animal:"袋鼠",type:"胎生",fertilization:"体内受精",development:"育儿袋发育"}
        ];
        animals.forEach(a => {
            qs.push(this.makeQ(id++,"unit10","medium",`${a.animal}的生殖方式是`,a.type,["分裂生殖","出芽生殖","孢子生殖"],`${a.animal}是${a.type}动物。`));
            qs.push(this.makeQ(id++,"unit10","medium",`${a.animal}的受精方式是`,a.fertilization,["无受精","自体受精","无性生殖"],`${a.animal}是${a.fertilization}。`));
            qs.push(this.makeQ(id++,"unit10","medium",`${a.animal}的发育方式是`,a.development,["无发育","退化","消失"],`${a.animal}是${a.development}。`));
        });
        this.baseId = id; return qs;
    },

    genInsectDevelopment() {
        const qs = []; let id = this.baseId;
        const complete = ["蝴蝶","蜜蜂","蚊子","苍蝇","蚂蚁","甲虫","蛾","瓢虫","蚕","跳蚤"];
        const incomplete = ["蝗虫","蟋蟀","螳螂","蜻蜓","蝉","蟑螂","蚱蜢","蝼蛄","椿象","蚜虫"];
        complete.forEach(i => {
            qs.push(this.makeQ(id++,"unit10","medium",`${i}的发育属于`,`完全变态发育`,["不完全变态","直接发育","无变态"],`${i}经历卵→幼虫→蛹→成虫，是完全变态发育。`));
            qs.push(this.makeQ(id++,"unit10","medium",`${i}的发育经历`,`卵→幼虫→蛹→成虫`,["卵→若虫→成虫","卵→成虫","幼虫→成虫"],`${i}是完全变态发育。`));
        });
        incomplete.forEach(i => {
            qs.push(this.makeQ(id++,"unit10","medium",`${i}的发育属于`,`不完全变态发育`,["完全变态","直接发育","无变态"],`${i}经历卵→若虫→成虫，是不完全变态发育。`));
            qs.push(this.makeQ(id++,"unit10","medium",`${i}的发育经历`,`卵→若虫→成虫`,["卵→幼虫→蛹→成虫","卵→成虫","幼虫→成虫"],`${i}是不完全变态发育。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPlantReproduction(),...this.genAnimalReproduction(),...this.genInsectDevelopment()]; }
};
