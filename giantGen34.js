// 超大题库生成器34 - 人体青春期
const giantGen34 = {
    baseId: 335000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genPubertyChanges() {
        const qs = []; let id = this.baseId;
        const changes = [
            {change:"身高突增",cause:"生长激素分泌增加",time:"青春期早期",feature:"骨骼快速生长"},
            {change:"体重增加",cause:"肌肉和脂肪增加",time:"青春期",feature:"体型变化"},
            {change:"第二性征出现",cause:"性激素分泌",time:"青春期",feature:"男女差异明显"},
            {change:"男性变声",cause:"喉结增大声带变长",time:"青春期",feature:"声音变低沉"},
            {change:"男性长胡须",cause:"雄性激素作用",time:"青春期",feature:"面部毛发生长"},
            {change:"女性乳房发育",cause:"雌性激素作用",time:"青春期",feature:"乳腺发育"},
            {change:"女性月经来潮",cause:"卵巢发育成熟",time:"青春期",feature:"周期性子宫内膜脱落"},
            {change:"男性遗精",cause:"睾丸发育成熟",time:"青春期",feature:"精子产生"},
            {change:"皮脂分泌增加",cause:"激素变化",time:"青春期",feature:"可能长痘"},
            {change:"心理变化",cause:"激素和社会因素",time:"青春期",feature:"情绪波动"}
        ];
        changes.forEach(c => {
            qs.push(this.makeQ(id++,"unit10","medium",`青春期${c.change}的原因是`,c.cause,["无原因","随机","不确定"],`${c.change}由${c.cause}引起。`));
            qs.push(this.makeQ(id++,"unit10","easy",`青春期${c.change}发生在`,c.time,["无时间","随机","不确定"],`${c.change}发生在${c.time}。`));
            qs.push(this.makeQ(id++,"unit10","medium",`青春期${c.change}的特点是`,c.feature,["无特点","随机","不确定"],`${c.change}${c.feature}。`));
        });
        this.baseId = id; return qs;
    },

    genReproductiveSystem() {
        const qs = []; let id = this.baseId;
        const organs = [
            {organ:"睾丸",sex:"男性",func:"产生精子和雄性激素",location:"阴囊内"},
            {organ:"附睾",sex:"男性",func:"储存和成熟精子",location:"睾丸后方"},
            {organ:"输精管",sex:"男性",func:"输送精子",location:"连接附睾和尿道"},
            {organ:"前列腺",sex:"男性",func:"分泌前列腺液",location:"膀胱下方"},
            {organ:"卵巢",sex:"女性",func:"产生卵细胞和雌性激素",location:"盆腔内"},
            {organ:"输卵管",sex:"女性",func:"输送卵细胞受精场所",location:"连接卵巢和子宫"},
            {organ:"子宫",sex:"女性",func:"胚胎发育场所",location:"盆腔中央"},
            {organ:"阴道",sex:"女性",func:"产道和月经排出通道",location:"子宫下方"}
        ];
        organs.forEach(o => {
            qs.push(this.makeQ(id++,"unit10","medium",`${o.organ}是${o.sex}的`,o.func,["无功能","随机","不确定"],`${o.organ}的功能是${o.func}。`));
            qs.push(this.makeQ(id++,"unit10","easy",`${o.organ}位于`,o.location,["无位置","随机","不确定"],`${o.organ}在${o.location}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genPubertyChanges(),...this.genReproductiveSystem()]; }
};
