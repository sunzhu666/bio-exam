// 大规模题库生成器D - 神经与内分泌
const megaGenD = {
    baseId: 65000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genNervousSystem() {
        const qs = []; let id = this.baseId;
        const parts = [
            {name:"大脑",func:"高级神经活动中枢",location:"颅腔",feature:"有沟回"},
            {name:"小脑",func:"协调运动维持平衡",location:"颅腔后下方",feature:"表面有沟回"},
            {name:"脑干",func:"生命中枢",location:"大脑和脊髓之间",feature:"控制呼吸心跳"},
            {name:"脊髓",func:"反射和传导",location:"椎管内",feature:"灰质在内白质在外"},
            {name:"脑神经",func:"支配头面部",location:"从脑发出",feature:"12对"},
            {name:"脊神经",func:"支配躯干四肢",location:"从脊髓发出",feature:"31对"},
            {name:"神经元",func:"传导神经冲动",location:"神经系统",feature:"有细胞体和突起"},
            {name:"树突",func:"接受刺激",location:"神经元",feature:"短而多"},
            {name:"轴突",func:"传出冲动",location:"神经元",feature:"长而少"},
            {name:"突触",func:"神经元之间传递",location:"神经元连接处",feature:"单向传递"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit9","medium",`${p.name}的功能是`,p.func,["消化","呼吸","循环"],`${p.name}的功能是${p.func}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`${p.name}位于`,p.location,["腹腔","胸腔","盆腔"],`${p.name}位于${p.location}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`${p.name}的特点是`,p.feature,["无特点","随机","不确定"],`${p.name}的特点是${p.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genReflexes() {
        const qs = []; let id = this.baseId;
        const reflexes = [
            {name:"膝跳反射",type:"非条件反射",center:"脊髓",stimulus:"叩击膝盖"},
            {name:"眨眼反射",type:"非条件反射",center:"脑干",stimulus:"异物接近眼睛"},
            {name:"缩手反射",type:"非条件反射",center:"脊髓",stimulus:"手触热物"},
            {name:"吮吸反射",type:"非条件反射",center:"脑干",stimulus:"触碰嘴唇"},
            {name:"排尿反射",type:"非条件反射",center:"脊髓",stimulus:"膀胱充盈"},
            {name:"望梅止渴",type:"条件反射",center:"大脑皮层",stimulus:"看到或想到梅子"},
            {name:"谈虎色变",type:"条件反射",center:"大脑皮层",stimulus:"听到老虎"},
            {name:"画饼充饥",type:"条件反射",center:"大脑皮层",stimulus:"看到饼的图画"},
            {name:"狗听铃声分泌唾液",type:"条件反射",center:"大脑皮层",stimulus:"铃声"},
            {name:"红灯停绿灯行",type:"条件反射",center:"大脑皮层",stimulus:"交通信号灯"},
            {name:"听到上课铃进教室",type:"条件反射",center:"大脑皮层",stimulus:"上课铃声"},
            {name:"看到酸梅流口水",type:"条件反射",center:"大脑皮层",stimulus:"看到酸梅"}
        ];
        reflexes.forEach(r => {
            qs.push(this.makeQ(id++,"unit9","medium",`${r.name}属于`,r.type,["无反射","随机反应","被动反应"],`${r.name}是${r.type}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`${r.name}的神经中枢在`,r.center,["心脏","肝脏","肾脏"],`${r.name}的神经中枢在${r.center}。`));
            qs.push(this.makeQ(id++,"unit9","easy",`${r.name}的刺激是`,r.stimulus,["无刺激","随机","不确定"],`${r.name}由${r.stimulus}引起。`));
        });
        this.baseId = id; return qs;
    },

    genEndocrineGlands() {
        const qs = []; let id = this.baseId;
        const glands = [
            {name:"垂体",hormone:"生长激素",func:"促进生长",disease:"侏儒症/巨人症"},
            {name:"甲状腺",hormone:"甲状腺激素",func:"促进新陈代谢",disease:"呆小症/甲亢"},
            {name:"胰岛",hormone:"胰岛素",func:"降低血糖",disease:"糖尿病"},
            {name:"肾上腺",hormone:"肾上腺素",func:"加快心跳",disease:"应激反应异常"},
            {name:"性腺",hormone:"性激素",func:"促进第二性征",disease:"性发育异常"},
            {name:"胸腺",hormone:"胸腺激素",func:"促进T细胞发育",disease:"免疫功能低下"},
            {name:"松果体",hormone:"褪黑素",func:"调节生物节律",disease:"睡眠障碍"}
        ];
        glands.forEach(g => {
            qs.push(this.makeQ(id++,"unit9","medium",`${g.name}分泌的激素是`,g.hormone,["唾液","胃液","胆汁"],`${g.name}分泌${g.hormone}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`${g.hormone}的功能是`,g.func,["消化食物","气体交换","排出废物"],`${g.hormone}的功能是${g.func}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`${g.hormone}分泌异常可能导致`,g.disease,["无影响","更健康","增强免疫"],`${g.hormone}异常可导致${g.disease}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genNervousSystem(),...this.genReflexes(),...this.genEndocrineGlands()]; }
};
