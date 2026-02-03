// 大规模题库生成器A - 生物分类综合
const megaGenA = {
    baseId: 50000,
    shuffle(arr) { const r=[...arr]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; },
    makeQ(id,unit,diff,q,c,w,a) { const opts=this.shuffle([c,...w.slice(0,3)]); const idx=opts.indexOf(c); const L=["A","B","C","D"];
        return {id,type:"choice",unit,difficulty:diff,score:2,content:q+"（　　）",options:opts.map((o,i)=>`${L[i]}. ${o}`),answer:L[idx],analysis:a}; },

    genFishTypes() {
        const qs = []; let id = this.baseId;
        const fish = ["鲫鱼","鲤鱼","草鱼","青鱼","鲢鱼","鳙鱼","鲈鱼","黄鱼","带鱼","鲳鱼","鳗鱼","鲨鱼","鳐鱼","金枪鱼","三文鱼","比目鱼","河豚","鲶鱼","泥鳅","黄鳝"];
        const features = ["用鳃呼吸","体表有鳞片","用鳍游泳","体温不恒定","卵生","水生","有侧线"];
        fish.forEach(f => {
            features.forEach(feat => {
                qs.push(this.makeQ(id++,"unit1","easy",`${f}具有的特征是`,feat,["用肺呼吸","体温恒定","胎生"],`${f}是鱼类，${feat}。`));
            });
        });
        this.baseId = id; return qs;
    },

    genAmphibianTypes() {
        const qs = []; let id = this.baseId;
        const amphibians = ["青蛙","蟾蜍","蝾螈","大鲵","树蛙","牛蛙","雨蛙","姬蛙"];
        const features = ["幼体用鳃呼吸","成体用肺和皮肤呼吸","变态发育","体温不恒定","卵生","皮肤裸露"];
        amphibians.forEach(a => {
            features.forEach(feat => {
                qs.push(this.makeQ(id++,"unit1","easy",`${a}具有的特征是`,feat,["用鳃呼吸","体温恒定","胎生"],`${a}是两栖动物，${feat}。`));
            });
        });
        this.baseId = id; return qs;
    },

    genReptileTypes() {
        const qs = []; let id = this.baseId;
        const reptiles = ["蜥蜴","壁虎","蛇","龟","鳖","鳄鱼","变色龙","蟒蛇","眼镜蛇","响尾蛇"];
        const features = ["用肺呼吸","体表有鳞片或甲","体温不恒定","卵生","陆生为主"];
        reptiles.forEach(r => {
            features.forEach(feat => {
                qs.push(this.makeQ(id++,"unit1","easy",`${r}具有的特征是`,feat,["用鳃呼吸","体温恒定","胎生"],`${r}是爬行动物，${feat}。`));
            });
        });
        this.baseId = id; return qs;
    },

    genBirdTypes() {
        const qs = []; let id = this.baseId;
        const birds = ["麻雀","燕子","鸽子","鹦鹉","老鹰","猫头鹰","啄木鸟","孔雀","天鹅","鸭子","鸡","鹅","企鹅","鸵鸟","蜂鸟","乌鸦","喜鹊","杜鹃","黄鹂","画眉"];
        const features = ["用肺呼吸","体表有羽毛","体温恒定","卵生","前肢变成翼","有喙无齿"];
        birds.forEach(b => {
            features.forEach(feat => {
                qs.push(this.makeQ(id++,"unit1","easy",`${b}具有的特征是`,feat,["用鳃呼吸","体温不恒定","胎生"],`${b}是鸟类，${feat}。`));
            });
        });
        this.baseId = id; return qs;
    },

    genMammalTypes() {
        const qs = []; let id = this.baseId;
        const mammals = ["狗","猫","牛","羊","马","猪","兔","鼠","虎","狮","象","鲸","海豚","蝙蝠","猴","猩猩","熊猫","袋鼠","刺猬","穿山甲"];
        const features = ["用肺呼吸","体表有毛","体温恒定","胎生哺乳","有牙齿分化"];
        mammals.forEach(m => {
            features.forEach(feat => {
                qs.push(this.makeQ(id++,"unit1","easy",`${m}具有的特征是`,feat,["用鳃呼吸","体温不恒定","卵生"],`${m}是哺乳动物，${feat}。`));
            });
        });
        this.baseId = id; return qs;
    },

    generateAll() { return [...this.genFishTypes(),...this.genAmphibianTypes(),...this.genReptileTypes(),...this.genBirdTypes(),...this.genMammalTypes()]; }
};
