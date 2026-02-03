// 超大题库生成器137 - 人体结构深化
const giantGen137 = {
    baseId: 850000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHumanBodyA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"人体的基本组织包括",c:"上皮组织结缔组织肌肉组织神经组织",w:["只有肌肉组织","只有神经组织","只有上皮组织"],u:"unit3"},
            {q:"上皮组织的功能是",c:"保护分泌",w:["收缩运动","传导兴奋","支持连接"],u:"unit3"},
            {q:"结缔组织的功能是",c:"支持连接保护营养",w:["收缩运动","传导兴奋","保护分泌"],u:"unit3"},
            {q:"肌肉组织的功能是",c:"收缩运动",w:["传导兴奋","支持连接","保护分泌"],u:"unit3"},
            {q:"神经组织的功能是",c:"接受刺激传导兴奋",w:["收缩运动","支持连接","保护分泌"],u:"unit3"},
            {q:"血液属于什么组织",c:"结缔组织",w:["上皮组织","肌肉组织","神经组织"],u:"unit3"},
            {q:"骨骼属于什么组织",c:"结缔组织",w:["上皮组织","肌肉组织","神经组织"],u:"unit3"},
            {q:"皮肤的表皮属于什么组织",c:"上皮组织",w:["结缔组织","肌肉组织","神经组织"],u:"unit3"},
            {q:"心肌属于什么组织",c:"肌肉组织",w:["上皮组织","结缔组织","神经组织"],u:"unit3"},
            {q:"脑属于什么组织",c:"神经组织",w:["上皮组织","结缔组织","肌肉组织"],u:"unit3"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genHumanBodyB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"人体最大的器官是",c:"皮肤",w:["肝脏","心脏","肺"],u:"unit3"},
            {q:"人体最大的消化腺是",c:"肝脏",w:["胰腺","唾液腺","胃腺"],u:"unit5"},
            {q:"人体最大的淋巴器官是",c:"脾脏",w:["胸腺","淋巴结","扁桃体"],u:"unit7"},
            {q:"人体最长的骨是",c:"股骨",w:["肱骨","胫骨","腓骨"],u:"unit3"},
            {q:"人体最小的骨是",c:"镫骨",w:["锤骨","砧骨","舌骨"],u:"unit3"},
            {q:"人体含水量最多的器官是",c:"眼球",w:["肝脏","肾脏","心脏"],u:"unit3"},
            {q:"人体再生能力最强的器官是",c:"肝脏",w:["心脏","脑","肾脏"],u:"unit3"},
            {q:"人体消耗能量最多的器官是",c:"大脑",w:["心脏","肝脏","肌肉"],u:"unit9"},
            {q:"人体产热最多的器官是",c:"骨骼肌",w:["心脏","肝脏","大脑"],u:"unit3"},
            {q:"人体调节体温的主要方式是",c:"皮肤散热和产热调节",w:["只有出汗","只有发抖","只有血管收缩"],u:"unit8"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHumanBodyA(),...this.genHumanBodyB()]; }
};
