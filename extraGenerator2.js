// 扩展题库生成器2 - 人体系统详细题
const extraGenerator2 = {
    baseId: 22000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genDigestiveDetails() {
        const qs = []; let id = this.baseId;
        const organs = [
            {name:"口腔",func:"初步消化淀粉",enzyme:"唾液淀粉酶",time:"食物停留时间短"},
            {name:"咽",func:"食物和气体的共同通道",enzyme:"无消化酶",time:"食物快速通过"},
            {name:"食道",func:"输送食物到胃",enzyme:"无消化酶",time:"食物快速通过"},
            {name:"胃",func:"初步消化蛋白质",enzyme:"胃蛋白酶",time:"食物停留2-4小时"},
            {name:"小肠",func:"消化吸收的主要场所",enzyme:"多种消化酶",time:"食物停留3-8小时"},
            {name:"大肠",func:"吸收水分和无机盐",enzyme:"无消化酶",time:"食物停留10小时以上"},
            {name:"肝脏",func:"分泌胆汁",enzyme:"胆汁无消化酶",time:"最大的消化腺"},
            {name:"胰腺",func:"分泌胰液",enzyme:"多种消化酶",time:"第二大消化腺"},
            {name:"唾液腺",func:"分泌唾液",enzyme:"唾液淀粉酶",time:"三对唾液腺"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit5","medium",`${o.name}的主要功能是`,o.func,["储存食物","吸收营养","排出废物"],`${o.name}的功能是${o.func}。`));
        });
        const enzymes = [
            {name:"唾液淀粉酶",substrate:"淀粉",product:"麦芽糖",location:"口腔"},
            {name:"胃蛋白酶",substrate:"蛋白质",product:"多肽",location:"胃"},
            {name:"胰淀粉酶",substrate:"淀粉",product:"麦芽糖",location:"小肠"},
            {name:"胰蛋白酶",substrate:"蛋白质",product:"多肽和氨基酸",location:"小肠"},
            {name:"胰脂肪酶",substrate:"脂肪",product:"甘油和脂肪酸",location:"小肠"},
            {name:"肠淀粉酶",substrate:"淀粉",product:"葡萄糖",location:"小肠"},
            {name:"肠麦芽糖酶",substrate:"麦芽糖",product:"葡萄糖",location:"小肠"},
            {name:"肠肽酶",substrate:"多肽",product:"氨基酸",location:"小肠"},
            {name:"肠脂肪酶",substrate:"脂肪",product:"甘油和脂肪酸",location:"小肠"}
        ];
        enzymes.forEach(e => {
            qs.push(this.makeQ(id++,"unit5","hard",`${e.name}能消化`,e.substrate,["纤维素","维生素","无机盐"],`${e.name}能将${e.substrate}分解为${e.product}。`));
        });
        this.baseId = id; return qs;
    },

    genRespiratoryDetails() {
        const qs = []; let id = this.baseId;
        const parts = [
            {name:"鼻腔",func:"温暖、湿润、清洁空气",feature:"有鼻毛和黏膜"},
            {name:"咽",func:"气体和食物的共同通道",feature:"连接口腔和喉"},
            {name:"喉",func:"发声器官",feature:"有声带"},
            {name:"气管",func:"输送气体",feature:"有C形软骨"},
            {name:"支气管",func:"输送气体到肺",feature:"分支进入肺"},
            {name:"肺",func:"气体交换的场所",feature:"由肺泡组成"},
            {name:"肺泡",func:"气体交换的基本单位",feature:"壁薄、数量多"},
            {name:"膈肌",func:"参与呼吸运动",feature:"收缩时膈顶下降"},
            {name:"肋间肌",func:"参与呼吸运动",feature:"收缩时肋骨上升"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit6","medium",`${p.name}的功能是`,p.func,["消化食物","吸收营养","排出废物"],`${p.name}的功能是${p.func}。`));
            qs.push(this.makeQ(id++,"unit6","medium",`${p.name}的特点是`,p.feature,["有消化酶","能吸收营养","能储存食物"],`${p.name}的特点是${p.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genCirculatoryDetails() {
        const qs = []; let id = this.baseId;
        const vessels = [
            {name:"主动脉",blood:"动脉血",direction:"从心脏到全身",wall:"壁厚弹性大"},
            {name:"肺动脉",blood:"静脉血",direction:"从心脏到肺",wall:"壁厚弹性大"},
            {name:"上腔静脉",blood:"静脉血",direction:"从上半身到心脏",wall:"壁薄弹性小"},
            {name:"下腔静脉",blood:"静脉血",direction:"从下半身到心脏",wall:"壁薄弹性小"},
            {name:"肺静脉",blood:"动脉血",direction:"从肺到心脏",wall:"壁薄弹性小"},
            {name:"冠状动脉",blood:"动脉血",direction:"供应心肌",wall:"壁厚弹性大"},
            {name:"颈动脉",blood:"动脉血",direction:"供应头部",wall:"壁厚弹性大"},
            {name:"股动脉",blood:"动脉血",direction:"供应下肢",wall:"壁厚弹性大"}
        ];
        vessels.forEach(v => {
            qs.push(this.makeQ(id++,"unit7","hard",`${v.name}中流动的是`,v.blood,["混合血","淋巴","组织液"],`${v.name}中流动的是${v.blood}。`));
        });
        const cells = [
            {name:"红细胞",func:"运输氧气",feature:"无细胞核，含血红蛋白",count:"男性500万/mm³"},
            {name:"白细胞",func:"吞噬病菌",feature:"有细胞核，能变形",count:"5000-10000/mm³"},
            {name:"血小板",func:"止血凝血",feature:"无细胞核，体积最小",count:"10-30万/mm³"}
        ];
        cells.forEach(c => {
            qs.push(this.makeQ(id++,"unit7","medium",`${c.name}的功能是`,c.func,["运输营养","调节体温","传递信息"],`${c.name}的功能是${c.func}。`));
            qs.push(this.makeQ(id++,"unit7","medium",`${c.name}的特点是`,c.feature,["有叶绿体","能光合作用","能分裂"],`${c.name}的特点是${c.feature}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genDigestiveDetails(),...this.genRespiratoryDetails(),...this.genCirculatoryDetails()]; }
};
