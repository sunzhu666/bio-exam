// 超大题库生成器140 - 泌尿系统深化
const giantGen140 = {
    baseId: 865000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genUrinaryA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"泌尿系统由什么组成",c:"肾脏输尿管膀胱尿道",w:["只有肾脏","只有膀胱","只有尿道"],u:"unit8"},
            {q:"形成尿液的器官是",c:"肾脏",w:["膀胱","输尿管","尿道"],u:"unit8"},
            {q:"暂时储存尿液的器官是",c:"膀胱",w:["肾脏","输尿管","尿道"],u:"unit8"},
            {q:"输送尿液的器官是",c:"输尿管",w:["肾脏","膀胱","尿道"],u:"unit8"},
            {q:"排出尿液的器官是",c:"尿道",w:["肾脏","输尿管","膀胱"],u:"unit8"},
            {q:"肾脏的结构单位是",c:"肾单位",w:["肾小球","肾小管","肾小囊"],u:"unit8"},
            {q:"肾单位由什么组成",c:"肾小球肾小囊肾小管",w:["只有肾小球","只有肾小管","只有肾小囊"],u:"unit8"},
            {q:"肾小球是什么结构",c:"毛细血管球",w:["动脉","静脉","淋巴管"],u:"unit8"},
            {q:"肾小囊是什么结构",c:"双层囊状结构",w:["单层结构","管状结构","球状结构"],u:"unit8"},
            {q:"肾小管是什么结构",c:"细长弯曲的管道",w:["球状结构","囊状结构","直管结构"],u:"unit8"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genUrinaryB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"尿液形成的第一步是",c:"肾小球的滤过作用",w:["肾小管的重吸收","膀胱的储存","尿道的排出"],u:"unit8"},
            {q:"尿液形成的第二步是",c:"肾小管的重吸收作用",w:["肾小球的滤过","膀胱的储存","尿道的排出"],u:"unit8"},
            {q:"肾小球滤过形成的液体是",c:"原尿",w:["尿液","血浆","组织液"],u:"unit8"},
            {q:"原尿中含有的成分是",c:"水无机盐葡萄糖尿素",w:["血细胞","大分子蛋白质","脂肪"],u:"unit8"},
            {q:"原尿中不含有的成分是",c:"血细胞和大分子蛋白质",w:["水","无机盐","葡萄糖"],u:"unit8"},
            {q:"肾小管重吸收的物质包括",c:"全部葡萄糖大部分水和无机盐",w:["尿素","血细胞","蛋白质"],u:"unit8"},
            {q:"尿液中含有的成分是",c:"水无机盐尿素",w:["葡萄糖","蛋白质","血细胞"],u:"unit8"},
            {q:"尿液中不含有葡萄糖说明",c:"肾小管重吸收了全部葡萄糖",w:["肾小球没有滤过葡萄糖","葡萄糖被分解了","葡萄糖变成了尿素"],u:"unit8"},
            {q:"尿液中出现葡萄糖可能是",c:"糖尿病",w:["肾炎","膀胱炎","尿道炎"],u:"unit8"},
            {q:"尿液中出现蛋白质可能是",c:"肾炎",w:["糖尿病","膀胱炎","尿道炎"],u:"unit8"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genUrinaryA(),...this.genUrinaryB()]; }
};
