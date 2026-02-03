// 超大题库生成器123 - 呼吸作用深化
const giantGen123 = {
    baseId: 780000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genRespirationA() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"呼吸作用的场所是",c:"线粒体",w:["叶绿体","细胞核","液泡"],u:"unit4"},
            {q:"呼吸作用的原料是",c:"有机物和氧气",w:["二氧化碳和水","无机盐","蛋白质"],u:"unit4"},
            {q:"呼吸作用的产物是",c:"二氧化碳和水",w:["有机物和氧气","无机盐","蛋白质"],u:"unit4"},
            {q:"呼吸作用的能量转变是",c:"化学能转变为其他形式能量",w:["光能转变为化学能","热能转变为光能","机械能转变为化学能"],u:"unit4"},
            {q:"呼吸作用的意义是",c:"分解有机物释放能量",w:["合成有机物","储存能量","吸收光能"],u:"unit4"},
            {q:"有氧呼吸的特点是",c:"需要氧气彻底分解有机物",w:["不需要氧气","不产生二氧化碳","不释放能量"],u:"unit4"},
            {q:"无氧呼吸的特点是",c:"不需要氧气不彻底分解有机物",w:["需要氧气","彻底分解有机物","释放大量能量"],u:"unit4"},
            {q:"酵母菌无氧呼吸的产物是",c:"酒精和二氧化碳",w:["乳酸","水","氧气"],u:"unit4"},
            {q:"人体无氧呼吸的产物是",c:"乳酸",w:["酒精","二氧化碳","水"],u:"unit4"},
            {q:"验证呼吸作用产生二氧化碳的试剂是",c:"澄清石灰水",w:["碘液","酒精","盐酸"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"medium",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    genRespirationB() {
        const qs = []; let id = this.baseId;
        const items = [
            {q:"验证呼吸作用消耗氧气的方法是",c:"燃烧的蜡烛熄灭",w:["石灰水变浑浊","碘液变蓝","酒精褪色"],u:"unit4"},
            {q:"验证呼吸作用释放热量的方法是",c:"温度计测量温度升高",w:["石灰水变浑浊","碘液变蓝","蜡烛熄灭"],u:"unit4"},
            {q:"储存粮食时应保持",c:"低温干燥缺氧",w:["高温潮湿","充足氧气","光照充足"],u:"unit4"},
            {q:"储存水果蔬菜时应保持",c:"低温低氧",w:["高温高氧","光照充足","潮湿环境"],u:"unit4"},
            {q:"松土的作用是",c:"促进根的呼吸作用",w:["减少水分蒸发","增加光照","防止病虫害"],u:"unit4"},
            {q:"涝害导致植物死亡的原因是",c:"根无法进行呼吸作用",w:["光合作用停止","蒸腾作用过强","吸收水分过多"],u:"unit4"},
            {q:"呼吸作用与光合作用的共同点是",c:"都需要酶的催化",w:["都需要光","都在叶绿体进行","都释放氧气"],u:"unit4"},
            {q:"呼吸作用强度与温度的关系是",c:"一定范围内温度越高呼吸越强",w:["温度越低呼吸越强","温度无影响","只有高温才呼吸"],u:"unit4"},
            {q:"种子萌发时呼吸作用",c:"明显增强",w:["明显减弱","保持不变","完全停止"],u:"unit4"},
            {q:"休眠种子的呼吸作用",c:"非常微弱",w:["非常旺盛","完全停止","与萌发时相同"],u:"unit4"}
        ];
        items.forEach(i => {
            qs.push(this.makeQ(id++,i.u,"hard",i.q,i.c,i.w,`${i.q}${i.c}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genRespirationA(),...this.genRespirationB()]; }
};
