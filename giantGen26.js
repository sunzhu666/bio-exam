// 超大题库生成器26 - 反射弧
const giantGen26 = {
    baseId: 295000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genReflexArc() {
        const qs = []; let id = this.baseId;
        const parts = [
            {part:"感受器",func:"感受刺激产生神经冲动",example:"皮肤感觉神经末梢",order:"第一"},
            {part:"传入神经",func:"传导神经冲动到神经中枢",example:"感觉神经",order:"第二"},
            {part:"神经中枢",func:"分析综合产生指令",example:"脊髓灰质",order:"第三"},
            {part:"传出神经",func:"传导神经冲动到效应器",example:"运动神经",order:"第四"},
            {part:"效应器",func:"执行反应",example:"肌肉或腺体",order:"第五"}
        ];
        parts.forEach(p => {
            qs.push(this.makeQ(id++,"unit9","medium",`反射弧中${p.part}的功能是`,p.func,["无功能","随机","不确定"],`${p.part}的功能是${p.func}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`反射弧中${p.part}的例子是`,p.example,["无例子","随机","不确定"],`${p.part}如${p.example}。`));
            qs.push(this.makeQ(id++,"unit9","easy",`反射弧中${p.part}是第几个环节`,p.order,["无顺序","随机","不确定"],`${p.part}是${p.order}个环节。`));
        });
        this.baseId = id; return qs;
    },

    genReflexTypes() {
        const qs = []; let id = this.baseId;
        const reflexes = [
            {reflex:"膝跳反射",type:"非条件反射",center:"脊髓",stimulus:"叩击膝盖下方"},
            {reflex:"眨眼反射",type:"非条件反射",center:"脑干",stimulus:"异物接近眼睛"},
            {reflex:"吮吸反射",type:"非条件反射",center:"脑干",stimulus:"触碰婴儿嘴唇"},
            {reflex:"缩手反射",type:"非条件反射",center:"脊髓",stimulus:"手触碰热物"},
            {reflex:"排尿反射",type:"非条件反射",center:"脊髓",stimulus:"膀胱充盈"},
            {reflex:"望梅止渴",type:"条件反射",center:"大脑皮层",stimulus:"看到或想到梅子"},
            {reflex:"谈虎色变",type:"条件反射",center:"大脑皮层",stimulus:"听到老虎"},
            {reflex:"听铃声分泌唾液",type:"条件反射",center:"大脑皮层",stimulus:"铃声"},
            {reflex:"红灯停绿灯行",type:"条件反射",center:"大脑皮层",stimulus:"交通信号灯"},
            {reflex:"听到上课铃进教室",type:"条件反射",center:"大脑皮层",stimulus:"上课铃声"}
        ];
        reflexes.forEach(r => {
            qs.push(this.makeQ(id++,"unit9","medium",`${r.reflex}属于`,r.type,["无类型","随机","不确定"],`${r.reflex}是${r.type}。`));
            qs.push(this.makeQ(id++,"unit9","medium",`${r.reflex}的神经中枢在`,r.center,["无中枢","随机","不确定"],`${r.reflex}中枢在${r.center}。`));
            qs.push(this.makeQ(id++,"unit9","hard",`${r.reflex}的刺激是`,r.stimulus,["无刺激","随机","不确定"],`${r.reflex}的刺激是${r.stimulus}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genReflexArc(),...this.genReflexTypes()]; }
};
