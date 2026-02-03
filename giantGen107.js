// 超大题库生成器107 - 泌尿系统补充
const giantGen107 = {
    baseId: 700000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genUrinaryA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"泌尿系统的组成是",c:"肾脏输尿管膀胱尿道",w:["只有肾脏","只有膀胱","肾脏和肝脏"],u:"unit7"},
            {q:"形成尿液的器官是",c:"肾脏",w:["膀胱","输尿管","尿道"],u:"unit7"},
            {q:"储存尿液的器官是",c:"膀胱",w:["肾脏","输尿管","尿道"],u:"unit7"},
            {q:"肾脏的结构和功能单位是",c:"肾单位",w:["肾小球","肾小管","肾小囊"],u:"unit7"},
            {q:"肾单位的组成是",c:"肾小球肾小囊肾小管",w:["只有肾小球","只有肾小管","肾脏和膀胱"],u:"unit7"},
            {q:"肾小球是",c:"毛细血管球",w:["动脉","静脉","淋巴管"],u:"unit7"},
            {q:"肾小囊是",c:"肾小管盲端膨大部分",w:["毛细血管","动脉","静脉"],u:"unit7"},
            {q:"原尿形成的部位是",c:"肾小囊",w:["肾小管","膀胱","输尿管"],u:"unit7"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genUrinaryB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"原尿中有而尿液中没有的物质是",c:"葡萄糖",w:["尿素","无机盐","水"],u:"unit7"},
            {q:"尿液中尿素浓度比原尿高的原因是",c:"水被重吸收",w:["尿素被分泌","尿素被吸收","尿素被分解"],u:"unit7"},
            {q:"血液流经肾脏后成分的变化是",c:"尿素减少氧气减少",w:["尿素增多","氧气增多","葡萄糖增多"],u:"unit7"},
            {q:"排泄的途径不包括",c:"排出粪便",w:["排尿","出汗","呼气"],u:"unit7"},
            {q:"排遗是指",c:"排出粪便",w:["排尿","出汗","呼气"],u:"unit7"},
            {q:"人体排出代谢废物的主要途径是",c:"排尿",w:["排便","出汗","呼气"],u:"unit7"},
            {q:"尿液的形成过程包括",c:"滤过作用和重吸收作用",w:["只有滤过","只有重吸收","消化和吸收"],u:"unit7"},
            {q:"肾小管重吸收的物质不包括",c:"尿素",w:["葡萄糖","水","无机盐"],u:"unit7"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genUrinaryA(),...this.genUrinaryB()]; }
};
