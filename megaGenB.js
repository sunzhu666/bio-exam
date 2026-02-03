// 大规模题库生成器B - 植物分类综合
const megaGenB = {
    baseId: 55000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genAngiosperms() {
        const qs = []; let id = this.baseId;
        const monocots = ["水稻","小麦","玉米","高粱","甘蔗","竹子","百合","郁金香","兰花","香蕉","椰子","棕榈","芦苇","韭菜","葱","蒜","姜","芋头"];
        const dicots = ["大豆","花生","棉花","向日葵","苹果","梨","桃","杏","李","樱桃","葡萄","西瓜","黄瓜","番茄","辣椒","茄子","白菜","萝卜","胡萝卜","土豆"];
        monocots.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","medium",`${p}属于`,`单子叶植物`,["双子叶植物","裸子植物","蕨类植物"],`${p}是单子叶植物。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${p}的叶脉是`,`平行脉`,["网状脉","羽状脉","掌状脉"],`${p}是单子叶植物，叶脉为平行脉。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${p}的根系是`,`须根系`,["直根系","不定根","气生根"],`${p}是单子叶植物，根系为须根系。`));
        });
        dicots.forEach(p => {
            qs.push(this.makeQ(id++,"unit3","medium",`${p}属于`,`双子叶植物`,["单子叶植物","裸子植物","蕨类植物"],`${p}是双子叶植物。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${p}的叶脉是`,`网状脉`,["平行脉","羽状脉","掌状脉"],`${p}是双子叶植物，叶脉为网状脉。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${p}的根系是`,`直根系`,["须根系","不定根","气生根"],`${p}是双子叶植物，根系为直根系。`));
        });
        this.baseId = id; return qs;
    },

    genGymnosperms() {
        const qs = []; let id = this.baseId;
        const gymnosperms = ["松树","柏树","杉树","银杏","苏铁","红豆杉","水杉","雪松","落叶松","云杉"];
        const features = ["种子裸露","无果实","有球果","多为常绿","木质茎"];
        gymnosperms.forEach(g => {
            features.forEach(feat => {
                qs.push(this.makeQ(id++,"unit3","medium",`${g}具有的特征是`,feat,["种子有果皮包被","有花","草本"],`${g}是裸子植物，${feat}。`));
            });
        });
        this.baseId = id; return qs;
    },

    genFernsAndMosses() {
        const qs = []; let id = this.baseId;
        const ferns = ["肾蕨","铁线蕨","蕨","桫椤","满江红","槐叶萍","卷柏","石松"];
        const mosses = ["葫芦藓","地钱","泥炭藓","金发藓","黑藓"];
        ferns.forEach(f => {
            qs.push(this.makeQ(id++,"unit3","medium",`${f}属于`,`蕨类植物`,["苔藓植物","裸子植物","被子植物"],`${f}是蕨类植物。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${f}的繁殖方式是`,`孢子繁殖`,["种子繁殖","分裂繁殖","出芽繁殖"],`${f}通过孢子繁殖。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${f}有无维管组织`,`有`,["无","不确定","部分有"],`${f}是蕨类植物，有维管组织。`));
        });
        mosses.forEach(m => {
            qs.push(this.makeQ(id++,"unit3","medium",`${m}属于`,`苔藓植物`,["蕨类植物","裸子植物","被子植物"],`${m}是苔藓植物。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${m}的繁殖方式是`,`孢子繁殖`,["种子繁殖","分裂繁殖","出芽繁殖"],`${m}通过孢子繁殖。`));
            qs.push(this.makeQ(id++,"unit3","medium",`${m}有无真正的根`,`无，只有假根`,["有真根","有须根","有直根"],`${m}是苔藓植物，只有假根。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genAngiosperms(),...this.genGymnosperms(),...this.genFernsAndMosses()]; }
};
