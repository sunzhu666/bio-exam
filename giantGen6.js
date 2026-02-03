// 超大题库生成器6 - 植物生理详细
const giantGen6 = {
    baseId: 195000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPlantTransport() {
        const qs = []; let id = this.baseId;
        const transports = [
            {type:"水分运输",path:"根→茎→叶",tissue:"导管",direction:"向上"},
            {type:"无机盐运输",path:"根→茎→叶",tissue:"导管",direction:"向上"},
            {type:"有机物运输",path:"叶→茎→根",tissue:"筛管",direction:"向下"},
            {type:"蒸腾作用",location:"叶片气孔",func:"拉动水分上升",factor:"温度湿度光照"},
            {type:"气孔开闭",control:"保卫细胞",open:"吸水膨胀",close:"失水收缩"},
            {type:"根的吸水",condition:"细胞液浓度>土壤溶液浓度",method:"渗透作用",structure:"根毛"},
            {type:"根的失水",condition:"细胞液浓度<土壤溶液浓度",result:"植物萎蔫",example:"施肥过多"}
        ];
        transports.forEach(t => {
            if(t.path) {
                qs.push(this.makeQ(id++,"unit3","medium",`${t.type}的路径是`,t.path,["无路径","随机","不确定"],`${t.type}路径是${t.path}。`));
            }
            if(t.tissue) {
                qs.push(this.makeQ(id++,"unit3","medium",`${t.type}的组织是`,t.tissue,["无组织","随机","不确定"],`${t.type}通过${t.tissue}。`));
            }
            if(t.direction) {
                qs.push(this.makeQ(id++,"unit3","easy",`${t.type}的方向是`,t.direction,["无方向","随机","不确定"],`${t.type}方向${t.direction}。`));
            }
            if(t.location) {
                qs.push(this.makeQ(id++,"unit3","medium",`${t.type}的部位是`,t.location,["无部位","随机","不确定"],`${t.type}在${t.location}。`));
            }
            if(t.func) {
                qs.push(this.makeQ(id++,"unit3","medium",`${t.type}的功能是`,t.func,["无功能","随机","不确定"],`${t.type}${t.func}。`));
            }
            if(t.control) {
                qs.push(this.makeQ(id++,"unit3","hard",`${t.type}由什么控制`,t.control,["无控制","随机","不确定"],`${t.type}由${t.control}控制。`));
            }
            if(t.condition) {
                qs.push(this.makeQ(id++,"unit3","hard",`${t.type}的条件是`,t.condition,["无条件","随机","不确定"],`${t.type}条件是${t.condition}。`));
            }
        });
        this.baseId = id; return qs;
    },

    genPlantGrowth() {
        const qs = []; let id = this.baseId;
        const growths = [
            {type:"种子萌发条件",external:"适宜温度充足水分充足空气",internal:"完整有活力的胚和足够营养"},
            {type:"种子萌发过程",first:"吸水膨胀",then:"胚根先突破种皮",finally:"发育成幼苗"},
            {type:"根的生长",zone:"分生区和伸长区",feature:"分生区细胞分裂伸长区细胞伸长"},
            {type:"茎的生长",tissue:"顶端分生组织",feature:"使茎伸长",lateral:"形成层使茎加粗"},
            {type:"叶的生长",tissue:"叶原基",feature:"发育成叶片",function:"光合作用"},
            {type:"花的发育",origin:"花芽",structure:"花萼花瓣雄蕊雌蕊",function:"繁殖"},
            {type:"果实发育",origin:"子房",structure:"果皮和种子",condition:"受精后"},
            {type:"种子发育",origin:"胚珠",structure:"种皮胚胚乳",condition:"受精后"}
        ];
        growths.forEach(g => {
            if(g.external) {
                qs.push(this.makeQ(id++,"unit3","medium",`${g.type}的外界条件是`,g.external,["无条件","随机","不确定"],`${g.type}外界条件是${g.external}。`));
            }
            if(g.internal) {
                qs.push(this.makeQ(id++,"unit3","medium",`${g.type}的自身条件是`,g.internal,["无条件","随机","不确定"],`${g.type}自身条件是${g.internal}。`));
            }
            if(g.first) {
                qs.push(this.makeQ(id++,"unit3","medium",`${g.type}首先`,g.first,["无过程","随机","不确定"],`${g.type}首先${g.first}。`));
            }
            if(g.zone) {
                qs.push(this.makeQ(id++,"unit3","medium",`${g.type}的部位是`,g.zone,["无部位","随机","不确定"],`${g.type}在${g.zone}。`));
            }
            if(g.tissue) {
                qs.push(this.makeQ(id++,"unit3","medium",`${g.type}的组织是`,g.tissue,["无组织","随机","不确定"],`${g.type}由${g.tissue}。`));
            }
            if(g.origin) {
                qs.push(this.makeQ(id++,"unit3","medium",`${g.type}由什么发育而来`,g.origin,["无来源","随机","不确定"],`${g.type}由${g.origin}发育。`));
            }
            if(g.structure) {
                qs.push(this.makeQ(id++,"unit3","medium",`${g.type}的结构包括`,g.structure,["无结构","随机","不确定"],`${g.type}包括${g.structure}。`));
            }
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPlantTransport(),...this.genPlantGrowth()]; }
};
