// 超大题库生成器75 - 内分泌系统深化
const giantGen75 = {
    baseId: 540000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genHormoneDetails() {
        const qs = []; let id = this.baseId;
        const hormones = [
            {hormone:"生长激素",gland:"垂体",function:"促进生长",excess:"巨人症",deficiency:"侏儒症"},
            {hormone:"甲状腺激素",gland:"甲状腺",function:"促进代谢和发育",excess:"甲亢",deficiency:"甲减"},
            {hormone:"胰岛素",gland:"胰岛B细胞",function:"降低血糖",deficiency:"糖尿病"},
            {hormone:"胰高血糖素",gland:"胰岛A细胞",function:"升高血糖",mechanism:"促进糖原分解"},
            {hormone:"肾上腺素",gland:"肾上腺髓质",function:"升高血糖加快心跳",situation:"紧急情况"},
            {hormone:"性激素",gland:"性腺",function:"促进性器官发育",type:"雄激素雌激素"}
        ];
        hormones.forEach(h => {
            qs.push(this.makeQ(id++,"unit9","hard",`${h.hormone}的分泌腺是`,h.gland,["无腺体","随机","不确定"],`${h.hormone}由${h.gland}分泌。`));
            qs.push(this.makeQ(id++,"unit9","hard",`${h.hormone}的功能是`,h.function,["无功能","随机","不确定"],`${h.hormone}${h.function}。`));
            if(h.excess) qs.push(this.makeQ(id++,"unit9","hard",`${h.hormone}过多会导致`,h.excess,["无疾病","随机","不确定"],`${h.hormone}过多导致${h.excess}。`));
            if(h.deficiency) qs.push(this.makeQ(id++,"unit9","hard",`${h.hormone}不足会导致`,h.deficiency,["无疾病","随机","不确定"],`${h.hormone}不足导致${h.deficiency}。`));
        });
        this.baseId = id; return qs;
    },

    genFeedbackRegulation() {
        const qs = []; let id = this.baseId;
        const regulations = [
            {regulation:"下丘脑-垂体-甲状腺轴",process:"下丘脑→垂体→甲状腺",feedback:"甲状腺激素抑制下丘脑和垂体"},
            {regulation:"血糖调节",升高:"胰高血糖素肾上腺素",降低:"胰岛素"},
            {regulation:"体温调节",center:"下丘脑",mechanism:"产热与散热平衡"},
            {regulation:"水盐调节",hormone:"抗利尿激素",organ:"肾脏"}
        ];
        regulations.forEach(r => {
            qs.push(this.makeQ(id++,"unit9","hard",`${r.regulation}的过程是`,r.process||r.mechanism,["无过程","随机","不确定"],`${r.regulation}${r.process||r.mechanism}。`));
            if(r.feedback) qs.push(this.makeQ(id++,"unit9","hard",`${r.regulation}的反馈是`,r.feedback,["无反馈","随机","不确定"],`${r.regulation}${r.feedback}。`));
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genHormoneDetails(),...this.genFeedbackRegulation()]; }
};
