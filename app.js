// 初中生物组卷系统 - 主逻辑
const app = {
    paper: [],
    filteredQuestions: [],

    init() {
        // 加载生成的题目
        this.loadGeneratedQuestions();
        this.initUnitSelect();
        this.filteredQuestions = [...questionBank.questions];
        this.renderQuestions();
        this.bindEvents();
        this.showStats();
        // 显示题目总数
        document.getElementById('totalQuestions').textContent = questionBank.questions.length;
    },

    loadGeneratedQuestions() {
        // 合并所有生成器生成的题目
        if (typeof questionGenerator !== 'undefined') {
            const generated = questionGenerator.generateAll();
            questionBank.questions = [...questionBank.questions, ...generated];
        }
        if (typeof massGenerator !== 'undefined') {
            const mass = massGenerator.generateAll();
            questionBank.questions = [...questionBank.questions, ...mass];
        }
        if (typeof megaGenerator !== 'undefined') {
            const mega = megaGenerator.generateAll();
            questionBank.questions = [...questionBank.questions, ...mega];
        }
        if (typeof superGenerator !== 'undefined') {
            const superQ = superGenerator.generateAll();
            questionBank.questions = [...questionBank.questions, ...superQ];
        }
        if (typeof hugeGenerator !== 'undefined') {
            const huge = hugeGenerator.generateAll();
            questionBank.questions = [...questionBank.questions, ...huge];
        }
        if (typeof ultimateGenerator !== 'undefined') {
            const ultimate = ultimateGenerator.generateAll();
            questionBank.questions = [...questionBank.questions, ...ultimate];
        }
        if (typeof extraGenerator1 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...extraGenerator1.generateAll()];
        }
        if (typeof extraGenerator2 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...extraGenerator2.generateAll()];
        }
        if (typeof extraGenerator3 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...extraGenerator3.generateAll()];
        }
        if (typeof extraGenerator4 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...extraGenerator4.generateAll()];
        }
        if (typeof extraGenerator5 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...extraGenerator5.generateAll()];
        }
        if (typeof extraGenerator6 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...extraGenerator6.generateAll()];
        }
        if (typeof extraGenerator7 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...extraGenerator7.generateAll()];
        }
        if (typeof extraGenerator8 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...extraGenerator8.generateAll()];
        }
        if (typeof extraGenerator9 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...extraGenerator9.generateAll()];
        }
        if (typeof extraGenerator10 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...extraGenerator10.generateAll()];
        }
        if (typeof megaGenA !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...megaGenA.generateAll()];
        }
        if (typeof megaGenB !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...megaGenB.generateAll()];
        }
        if (typeof megaGenC !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...megaGenC.generateAll()];
        }
        if (typeof megaGenD !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...megaGenD.generateAll()];
        }
        if (typeof megaGenE !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...megaGenE.generateAll()];
        }
        if (typeof megaGenF !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...megaGenF.generateAll()];
        }
        if (typeof megaGenG !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...megaGenG.generateAll()];
        }
        if (typeof megaGenH !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...megaGenH.generateAll()];
        }
        if (typeof megaGenI !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...megaGenI.generateAll()];
        }
        if (typeof megaGenJ !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...megaGenJ.generateAll()];
        }
        if (typeof ultraGen1 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...ultraGen1.generateAll()];
        }
        if (typeof ultraGen2 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...ultraGen2.generateAll()];
        }
        if (typeof ultraGen3 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...ultraGen3.generateAll()];
        }
        if (typeof ultraGen4 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...ultraGen4.generateAll()];
        }
        if (typeof massiveGenA !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...massiveGenA.generateAll()];
        }
        if (typeof massiveGenB !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...massiveGenB.generateAll()];
        }
        if (typeof massiveGenC !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...massiveGenC.generateAll()];
        }
        if (typeof massiveGenD !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...massiveGenD.generateAll()];
        }
        if (typeof massiveGenE !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...massiveGenE.generateAll()];
        }
        if (typeof massiveGenF !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...massiveGenF.generateAll()];
        }
        if (typeof massiveGenG !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...massiveGenG.generateAll()];
        }
        if (typeof massiveGenH !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...massiveGenH.generateAll()];
        }
        if (typeof massiveGenI !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...massiveGenI.generateAll()];
        }
        if (typeof massiveGenJ !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...massiveGenJ.generateAll()];
        }
        if (typeof giantGen1 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen1.generateAll()];
        }
        if (typeof giantGen2 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen2.generateAll()];
        }
        if (typeof giantGen3 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen3.generateAll()];
        }
        if (typeof giantGen4 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen4.generateAll()];
        }
        if (typeof giantGen5 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen5.generateAll()];
        }
        if (typeof giantGen6 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen6.generateAll()];
        }
        if (typeof giantGen7 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen7.generateAll()];
        }
        if (typeof giantGen8 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen8.generateAll()];
        }
        if (typeof giantGen9 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen9.generateAll()];
        }
        if (typeof giantGen10 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen10.generateAll()];
        }
        if (typeof giantGen11 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen11.generateAll()];
        }
        if (typeof giantGen12 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen12.generateAll()];
        }
        if (typeof giantGen13 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen13.generateAll()];
        }
        if (typeof giantGen14 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen14.generateAll()];
        }
        if (typeof giantGen15 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen15.generateAll()];
        }
        if (typeof giantGen16 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen16.generateAll()];
        }
        if (typeof giantGen17 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen17.generateAll()];
        }
        if (typeof giantGen18 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen18.generateAll()];
        }
        if (typeof giantGen19 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen19.generateAll()];
        }
        if (typeof giantGen20 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen20.generateAll()];
        }
        if (typeof giantGen21 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen21.generateAll()];
        }
        if (typeof giantGen22 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen22.generateAll()];
        }
        if (typeof giantGen23 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen23.generateAll()];
        }
        if (typeof giantGen24 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen24.generateAll()];
        }
        if (typeof giantGen25 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen25.generateAll()];
        }
        if (typeof giantGen26 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen26.generateAll()];
        }
        if (typeof giantGen27 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen27.generateAll()];
        }
        if (typeof giantGen28 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen28.generateAll()];
        }
        if (typeof giantGen29 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen29.generateAll()];
        }
        if (typeof giantGen30 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen30.generateAll()];
        }
        if (typeof giantGen31 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen31.generateAll()];
        }
        if (typeof giantGen32 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen32.generateAll()];
        }
        if (typeof giantGen33 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen33.generateAll()];
        }
        if (typeof giantGen34 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen34.generateAll()];
        }
        if (typeof giantGen35 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen35.generateAll()];
        }
        if (typeof giantGen36 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen36.generateAll()];
        }
        if (typeof giantGen37 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen37.generateAll()];
        }
        if (typeof giantGen38 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen38.generateAll()];
        }
        if (typeof giantGen39 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen39.generateAll()];
        }
        if (typeof giantGen40 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen40.generateAll()];
        }
        if (typeof giantGen41 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen41.generateAll()];
        }
        if (typeof giantGen42 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen42.generateAll()];
        }
        if (typeof giantGen43 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen43.generateAll()];
        }
        if (typeof giantGen44 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen44.generateAll()];
        }
        if (typeof giantGen45 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen45.generateAll()];
        }
        if (typeof giantGen46 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen46.generateAll()];
        }
        if (typeof giantGen47 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen47.generateAll()];
        }
        if (typeof giantGen48 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen48.generateAll()];
        }
        if (typeof giantGen49 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen49.generateAll()];
        }
        if (typeof giantGen50 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen50.generateAll()];
        }
        if (typeof giantGen51 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen51.generateAll()];
        }
        if (typeof giantGen52 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen52.generateAll()];
        }
        if (typeof giantGen53 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen53.generateAll()];
        }
        if (typeof giantGen54 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen54.generateAll()];
        }
        if (typeof giantGen55 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen55.generateAll()];
        }
        if (typeof giantGen56 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen56.generateAll()];
        }
        if (typeof giantGen57 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen57.generateAll()];
        }
        if (typeof giantGen58 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen58.generateAll()];
        }
        if (typeof giantGen59 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen59.generateAll()];
        }
        if (typeof giantGen60 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen60.generateAll()];
        }
        if (typeof giantGen61 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen61.generateAll()];
        }
        if (typeof giantGen62 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen62.generateAll()];
        }
        if (typeof giantGen63 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen63.generateAll()];
        }
        if (typeof giantGen64 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen64.generateAll()];
        }
        if (typeof giantGen65 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen65.generateAll()];
        }
        if (typeof giantGen66 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen66.generateAll()];
        }
        if (typeof giantGen67 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen67.generateAll()];
        }
        if (typeof giantGen68 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen68.generateAll()];
        }
        if (typeof giantGen69 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen69.generateAll()];
        }
        if (typeof giantGen70 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen70.generateAll()];
        }
        if (typeof giantGen71 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen71.generateAll()];
        }
        if (typeof giantGen72 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen72.generateAll()];
        }
        if (typeof giantGen73 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen73.generateAll()];
        }
        if (typeof giantGen74 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen74.generateAll()];
        }
        if (typeof giantGen75 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen75.generateAll()];
        }
        if (typeof giantGen76 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen76.generateAll()];
        }
        if (typeof giantGen77 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen77.generateAll()];
        }
        if (typeof giantGen78 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen78.generateAll()];
        }
        if (typeof giantGen79 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen79.generateAll()];
        }
        if (typeof giantGen80 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen80.generateAll()];
        }
        if (typeof giantGen81 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen81.generateAll()];
        }
        if (typeof giantGen82 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen82.generateAll()];
        }
        if (typeof giantGen83 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen83.generateAll()];
        }
        if (typeof giantGen84 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen84.generateAll()];
        }
        if (typeof giantGen85 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen85.generateAll()];
        }
        if (typeof giantGen86 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen86.generateAll()];
        }
        if (typeof giantGen87 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen87.generateAll()];
        }
        if (typeof giantGen88 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen88.generateAll()];
        }
        if (typeof giantGen89 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen89.generateAll()];
        }
        if (typeof giantGen90 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen90.generateAll()];
        }
        if (typeof giantGen91 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen91.generateAll()];
        }
        if (typeof giantGen92 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen92.generateAll()];
        }
        if (typeof giantGen93 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen93.generateAll()];
        }
        if (typeof giantGen94 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen94.generateAll()];
        }
        if (typeof giantGen95 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen95.generateAll()];
        }
        if (typeof giantGen96 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen96.generateAll()];
        }
        if (typeof giantGen97 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen97.generateAll()];
        }
        if (typeof giantGen98 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen98.generateAll()];
        }
        if (typeof giantGen99 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen99.generateAll()];
        }
        if (typeof giantGen100 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen100.generateAll()];
        }
        if (typeof giantGen101 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen101.generateAll()];
        }
        if (typeof giantGen102 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen102.generateAll()];
        }
        if (typeof giantGen103 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen103.generateAll()];
        }
        if (typeof giantGen104 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen104.generateAll()];
        }
        if (typeof giantGen105 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen105.generateAll()];
        }
        if (typeof giantGen106 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen106.generateAll()];
        }
        if (typeof giantGen107 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen107.generateAll()];
        }
        if (typeof giantGen108 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen108.generateAll()];
        }
        if (typeof giantGen109 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen109.generateAll()];
        }
        if (typeof giantGen110 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen110.generateAll()];
        }
        if (typeof giantGen111 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen111.generateAll()];
        }
        if (typeof giantGen112 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen112.generateAll()];
        }
        if (typeof giantGen113 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen113.generateAll()];
        }
        if (typeof giantGen114 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen114.generateAll()];
        }
        if (typeof giantGen115 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen115.generateAll()];
        }
        if (typeof giantGen116 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen116.generateAll()];
        }
        if (typeof giantGen117 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen117.generateAll()];
        }
        if (typeof giantGen118 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen118.generateAll()];
        }
        if (typeof giantGen119 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen119.generateAll()];
        }
        if (typeof giantGen120 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen120.generateAll()];
        }
        if (typeof giantGen121 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen121.generateAll()];
        }
        if (typeof giantGen122 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen122.generateAll()];
        }
        if (typeof giantGen123 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen123.generateAll()];
        }
        if (typeof giantGen124 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen124.generateAll()];
        }
        if (typeof giantGen125 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen125.generateAll()];
        }
        if (typeof giantGen126 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen126.generateAll()];
        }
        if (typeof giantGen127 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen127.generateAll()];
        }
        if (typeof giantGen128 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen128.generateAll()];
        }
        if (typeof giantGen129 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen129.generateAll()];
        }
        if (typeof giantGen130 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen130.generateAll()];
        }
        if (typeof giantGen131 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen131.generateAll()];
        }
        if (typeof giantGen132 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen132.generateAll()];
        }
        if (typeof giantGen133 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen133.generateAll()];
        }
        if (typeof giantGen134 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen134.generateAll()];
        }
        if (typeof giantGen135 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen135.generateAll()];
        }
        if (typeof giantGen136 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen136.generateAll()];
        }
        if (typeof giantGen137 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen137.generateAll()];
        }
        if (typeof giantGen138 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen138.generateAll()];
        }
        if (typeof giantGen139 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen139.generateAll()];
        }
        if (typeof giantGen140 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen140.generateAll()];
        }
        if (typeof giantGen141 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen141.generateAll()];
        }
        if (typeof giantGen142 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen142.generateAll()];
        }
        if (typeof giantGen143 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen143.generateAll()];
        }
        if (typeof giantGen144 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen144.generateAll()];
        }
        if (typeof giantGen145 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen145.generateAll()];
        }
        if (typeof giantGen146 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen146.generateAll()];
        }
        if (typeof giantGen147 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen147.generateAll()];
        }
        if (typeof giantGen148 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen148.generateAll()];
        }
        if (typeof giantGen149 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen149.generateAll()];
        }
        if (typeof giantGen150 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen150.generateAll()];
        }
        if (typeof giantGen151 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen151.generateAll()];
        }
        if (typeof giantGen152 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen152.generateAll()];
        }
        if (typeof giantGen153 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen153.generateAll()];
        }
        if (typeof giantGen154 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen154.generateAll()];
        }
        if (typeof giantGen155 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen155.generateAll()];
        }
        if (typeof giantGen156 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen156.generateAll()];
        }
        if (typeof giantGen157 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen157.generateAll()];
        }
        if (typeof giantGen158 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen158.generateAll()];
        }
        if (typeof giantGen159 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen159.generateAll()];
        }
        if (typeof giantGen160 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen160.generateAll()];
        }
        if (typeof giantGen161 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen161.generateAll()];
        }
        if (typeof giantGen162 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen162.generateAll()];
        }
        if (typeof giantGen163 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen163.generateAll()];
        }
        if (typeof giantGen164 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen164.generateAll()];
        }
        if (typeof giantGen165 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen165.generateAll()];
        }
        if (typeof giantGen166 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen166.generateAll()];
        }
        if (typeof giantGen167 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen167.generateAll()];
        }
        if (typeof giantGen168 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen168.generateAll()];
        }
        if (typeof giantGen169 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen169.generateAll()];
        }
        if (typeof giantGen170 !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...giantGen170.generateAll()];
        }
        // 加载中考真题
        if (typeof examQuestions !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...examQuestions];
        }
        // 加载周练题目
        if (typeof weeklyQuestions !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...weeklyQuestions];
        }
        // 加载批量导入题目
        if (typeof newQuestions !== 'undefined') {
            questionBank.questions = [...questionBank.questions, ...newQuestions];
        }
    },

    initUnitSelect() {
        const select = document.getElementById('unitSelect');
        questionBank.units.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit.id;
            option.textContent = unit.name;
            select.appendChild(option);
        });
    },

    bindEvents() {
        document.getElementById('filterBtn').addEventListener('click', () => this.filterQuestions());
        document.getElementById('previewBtn').addEventListener('click', () => this.exportWord());
        document.getElementById('clearBtn').addEventListener('click', () => this.clearPaper());
        document.getElementById('printBtn').addEventListener('click', () => window.print());
        document.querySelector('.close').addEventListener('click', () => this.hideModal());
        document.getElementById('previewModal').addEventListener('click', (e) => {
            if (e.target.id === 'previewModal') this.hideModal();
        });
    },

    filterQuestions() {
        const unit = document.getElementById('unitSelect').value;
        const type = document.getElementById('typeSelect').value;
        const difficulty = document.getElementById('difficultySelect').value;

        this.filteredQuestions = questionBank.questions.filter(q => {
            if (unit && q.unit !== unit) return false;
            if (type && q.type !== type) return false;
            if (difficulty && q.difficulty !== difficulty) return false;
            return true;
        });
        this.renderQuestions();
    },

    renderQuestions() {
        const container = document.getElementById('questionList');
        if (this.filteredQuestions.length === 0) {
            container.innerHTML = '<div class="question-card"><p>没有找到符合条件的试题</p></div>';
            return;
        }
        container.innerHTML = this.filteredQuestions.map(q => this.createQuestionCard(q)).join('');
    },

    createQuestionCard(q) {
        const typeMap = { choice: '选择题', judge: '判断题', short: '简答题', experiment: '实验探究题' };
        const diffMap = { easy: '简单', medium: '中等', hard: '较难' };
        const unitName = questionBank.units.find(u => u.id === q.unit)?.name || '';
        const inPaper = this.paper.some(p => p.id === q.id);

        let optionsHtml = '';
        if (q.options) {
            optionsHtml = `<div class="question-options">${q.options.map(o => `<div>${o}</div>`).join('')}</div>`;
        }

        return `
            <div class="question-card">
                <div class="question-header">
                    <div class="question-tags">
                        <span class="tag-type">${typeMap[q.type]}</span>
                        <span class="tag-difficulty-${q.difficulty}">${diffMap[q.difficulty]}</span>
                        <span class="tag-score">${q.score}分</span>
                    </div>
                    <button class="btn ${inPaper ? 'btn-remove' : 'btn-add'}" onclick="app.toggleQuestion(${q.id})">
                        ${inPaper ? '移除' : '加入试卷'}
                    </button>
                </div>
                <div class="question-content">
                    <strong>[${unitName}]</strong> ${q.content.replace(/\n/g, '<br>')}
                </div>
                ${optionsHtml}
                <details class="question-answer">
                    <summary>查看答案与解析</summary>
                    <div class="answer-content">
                        <p><strong>答案：</strong>${q.answer}</p>
                        <p><strong>解析：</strong>${q.analysis}</p>
                    </div>
                </details>
            </div>
        `;
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());

// 试卷操作方法
app.toggleQuestion = function(id) {
    const question = questionBank.questions.find(q => q.id === id);
    if (!question) return;

    const index = this.paper.findIndex(p => p.id === id);
    if (index > -1) {
        this.paper.splice(index, 1);
    } else {
        this.paper.push(question);
    }
    this.updatePaperPanel();
    this.renderQuestions();
};

app.updatePaperPanel = function() {
    const countEl = document.getElementById('paperCount');
    const scoreEl = document.getElementById('totalScore');
    const listEl = document.getElementById('paperList');

    const totalScore = this.paper.reduce((sum, q) => sum + q.score, 0);
    countEl.textContent = this.paper.length;
    scoreEl.textContent = totalScore;

    const typeMap = { choice: '选择', judge: '判断', short: '简答', experiment: '实验' };
    listEl.innerHTML = this.paper.map((q, i) => `
        <div class="paper-item">
            <span>${i + 1}. ${typeMap[q.type]} (${q.score}分)</span>
            <button class="btn btn-remove" onclick="app.toggleQuestion(${q.id})">移除</button>
        </div>
    `).join('');
};

app.clearPaper = function() {
    if (this.paper.length === 0) return;
    if (confirm('确定要清空试卷吗？')) {
        this.paper = [];
        this.updatePaperPanel();
        this.renderQuestions();
    }
};

app.showPreview = function() {
    if (this.paper.length === 0) {
        alert('请先添加试题到试卷');
        return;
    }
    const preview = document.getElementById('paperPreview');
    const typeMap = { choice: '选择题', judge: '判断题', short: '简答题', experiment: '实验探究题' };
    const totalScore = this.paper.reduce((sum, q) => sum + q.score, 0);

    // 按题型分组
    const grouped = {};
    this.paper.forEach(q => {
        if (!grouped[q.type]) grouped[q.type] = [];
        grouped[q.type].push(q);
    });

    let html = `<h2>初中生物测试卷</h2><p style="text-align:center">总分：${totalScore}分</p><hr>`;
    let qNum = 1;
    const typeOrder = ['choice', 'judge', 'short', 'experiment'];

    typeOrder.forEach(type => {
        if (!grouped[type]) return;
        const typeScore = grouped[type].reduce((s, q) => s + q.score, 0);
        html += `<h3>${typeMap[type]}（共${grouped[type].length}题，${typeScore}分）</h3>`;
        grouped[type].forEach(q => {
            html += `<div class="preview-question"><p>${qNum}. ${q.content.replace(/\n/g, '<br>')}（${q.score}分）</p>`;
            if (q.options) {
                html += `<div style="padding-left:20px">${q.options.map(o => `<p>${o}</p>`).join('')}</div>`;
            }
            html += '</div>';
            qNum++;
        });
    });

    preview.innerHTML = html;
    document.getElementById('previewModal').style.display = 'block';
};

app.hideModal = function() {
    document.getElementById('previewModal').style.display = 'none';
};

app.showStats = function() {
    const total = questionBank.questions.length;
    const stats = {
        choice: questionBank.questions.filter(q => q.type === 'choice').length,
        judge: questionBank.questions.filter(q => q.type === 'judge').length,
        short: questionBank.questions.filter(q => q.type === 'short').length,
        experiment: questionBank.questions.filter(q => q.type === 'experiment').length
    };
    console.log(`题库统计：共${total}题（选择${stats.choice}、判断${stats.judge}、简答${stats.short}、实验${stats.experiment}）`);
};

// 将HTML中的相对图片路径转为base64
app.convertImagesToBase64 = async function(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const imgs = doc.querySelectorAll('img');
    const baseUrl = window.location.href.replace(/\/[^/]*$/, '/');

    for (const img of imgs) {
        const src = img.getAttribute('src');
        if (!src || src.startsWith('data:')) continue;
        const fullUrl = src.startsWith('http') ? src : baseUrl + src;
        try {
            const resp = await fetch(fullUrl);
            const blob = await resp.blob();
            const base64 = await new Promise(resolve => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(blob);
            });
            img.setAttribute('src', base64);
        } catch (e) {
            console.warn('图片转换失败:', src, e);
        }
    }
    return doc.documentElement.outerHTML;
};

// Word导出功能
app.exportWord = async function() {
    if (this.paper.length === 0) {
        alert('请先添加试题到试卷');
        return;
    }

    const typeMap = { choice: '选择题', judge: '判断题', short: '简答题', experiment: '实验探究题' };
    const totalScore = this.paper.reduce((sum, q) => sum + q.score, 0);

    // 按题型分组
    const grouped = {};
    this.paper.forEach(q => {
        if (!grouped[q.type]) grouped[q.type] = [];
        grouped[q.type].push(q);
    });

    // 生成Word文档内容
    let html = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
        <head>
            <meta charset="utf-8">
            <title>初中生物测试卷</title>
            <style>
                body { font-family: 宋体, SimSun, serif; font-size: 12pt; line-height: 1.8; }
                h1 { text-align: center; font-size: 18pt; margin-bottom: 5px; }
                h2 { text-align: center; font-size: 12pt; font-weight: normal; margin-top: 5px; }
                h3 { font-size: 14pt; margin: 20px 0 10px 0; }
                .question { margin: 15px 0; }
                .options { margin-left: 20px; }
                .option { margin: 5px 0; }
                img { max-width: 300px; max-height: 200px; vertical-align: middle; }
                .answer-area { border-bottom: 1px solid #000; height: 100px; margin: 10px 0; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                td { border: 1px solid #000; padding: 8px; text-align: center; }
            </style>
        </head>
        <body>
            <h1>初中生物测试卷</h1>
            <h2>（满分：${totalScore}分）</h2>
            <table>
                <tr><td>姓名</td><td style="width:150px"></td><td>班级</td><td style="width:150px"></td><td>得分</td><td style="width:100px"></td></tr>
            </table>
    `;

    let qNum = 1;
    const typeOrder = ['choice', 'judge', 'short', 'experiment'];

    typeOrder.forEach(type => {
        if (!grouped[type]) return;
        const typeScore = grouped[type].reduce((s, q) => s + q.score, 0);
        html += `<h3>${typeMap[type]}（共${grouped[type].length}题，${typeScore}分）</h3>`;

        grouped[type].forEach(q => {
            html += `<div class="question"><p>${qNum}. ${q.content.replace(/\n/g, '<br>')}（${q.score}分）</p>`;

            if (q.options) {
                html += '<div class="options">';
                q.options.forEach(o => {
                    html += `<div class="option">${o}</div>`;
                });
                html += '</div>';
            }

            if (q.type === 'short' || q.type === 'experiment') {
                html += '<div class="answer-area"></div>';
            }

            html += '</div>';
            qNum++;
        });
    });

    // 添加答案页
    html += `
        <div style="page-break-before: always;"></div>
        <h1>参考答案</h1>
    `;

    qNum = 1;
    typeOrder.forEach(type => {
        if (!grouped[type]) return;
        html += `<h3>${typeMap[type]}</h3><p>`;

        grouped[type].forEach((q, idx) => {
            if (q.type === 'choice' || q.type === 'judge') {
                html += `${qNum}. ${q.answer}　　`;
                if ((idx + 1) % 5 === 0) html += '<br>';
            } else {
                html += `<br>${qNum}. ${q.answer}<br>`;
            }
            qNum++;
        });
        html += '</p>';
    });

    html += '</body></html>';

    // 将图片转为base64嵌入
    html = await this.convertImagesToBase64(html);

    // 创建Blob并下载
    const blob = new Blob(['\ufeff' + html], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '初中生物测试卷.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('试卷已导出为Word文档！');
};
