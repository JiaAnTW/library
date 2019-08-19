var nowAt=0;
const title=[
    '【喝咖啡到底好不好？】最新研究：一天3到4杯咖啡利大於弊',
    '強大的繁育能力，女子一胎竟然生下11個寶寶，生產過程艱難',
    '新研究顛覆印象，魚油不會提高兒童閱讀技能或記憶力',
    'LINE訊息：陽明醫院公衛所張武修教授傳給大家的消息：7-11統一超商宣布重大事件。旗下飲品全都用越南茶葉。含劇毒戴奧辛。',
    '找到牛奶致癌的確實證據',
    '搭雲霄飛車可預防腎結石？嚇得我「石頭都噴出來」拉～',
    '臉書訊息：中研院有身體健康檢查、500塊錢的車馬費',
    '神秘怪病捲土重來！印度東北部上百名幼童急性腦炎猝死 研究人員建議：別空腹大啖荔枝！',
    'RICE倡導者推翻自己的理論：冰敷對運動傷害無益！',
    '你的體質，不可能是酸的！戳破鹼性水、蚊子愛叮酸性人的五大迷思'
]

const source=[
    '鏡周刊 2017/12/2',
    '每日頭條 2018/10/2',
    '科技新報 2018/03/10',
    '無',
    '個人部落格',
    '<ETtoday新聞雲>鍵盤大檸檬 2016/09/28',
    '無',
    '風傳媒 2019/6/20',
    '運動星球 2018/1/8',
    '天下雜誌 2019/3/18'
];

const detail=[
    '此則新聞以中性角度報導飲用咖啡的各種利弊，不致產生誤導，其中仔細說明南安普頓大學所執行的<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5696634/?myncbishare=nckulib&otool=itwxtailib" target="_blank">原始研究</a>確實刊登於英國醫學期刊(BMJ)，新聞報導內容與原始研究相符，英國醫學期刊為經同儕審查(peer review)的期刊且被Journal Citation Report (JCR)收錄，2018年期刊影響係數(Journal Impact Factor)為27.604，醫學領域期刊中位居第5名，每年7,000至8,000件投稿文章中只刊登7%的文章。',
    '此則新聞內容明顯異於常理，當中照片為順應上下文拼湊的照片，當中的第二張照片中的婦女正準備接受腹部巨大腫瘤切除手術，腹中並非嬰兒，第三張照片中的11名嬰兒其實為印度試管嬰兒中心的11對夫婦希望在2011年11月11日分娩所拍下的紀念照片<a href="https://www.mygopen.com/2019/06/Birth-11-Baby.html" target="_blank">(MyGoPen澄清謠言網站)</a>',
    '此則新聞提供的原文連結為世界排名前百大的英國伯明罕大學首頁新聞，當中所提供的研究連結與新聞內容相符，PLoS One期刊為經同儕審查(peer review)的期刊且被Journal Citation Report (JCR)收錄，2018年期刊影響係數(Journal Impact Factor)為2.776，在跨領域科學期刊中排名第24名，該期刊官方網站中對於文章審核與刊登的資訊透明化程度高，此篇文章類型為證據等級第二級的RCT研究(CEBM)',
    '此則LINE訊息經證實為謠言，根據統一企業聲明，謠言所描述內容完全虛構，不僅沒有茶廠因茶品含有戴奧辛而遭到查封，且目前統一並未在龍潭設廠。另外學術界確實有位張武修教授，但張教授專精於輻射生物學領域，不僅從未發表上述謠言內容，且已不在陽明大學任教多年',
    '此篇部落格文章內容在其他個人網站上所刊登的內容如出一轍，根據專門破解網路謠言的<a href="https://www.rumtoast.com/7707/萬年老梗！謠言傳到爛的-牛奶致癌-是真的嗎？" target="_blank">蘭姆酒吐司網站的說明</a>，柯林坎貝爾的確以老鼠為實驗對象做過酪蛋白與癌症相關性研究，但坎貝爾博士回應酪蛋白和癌症雖有相關，但並不能以動物實驗結果直接斷定食用牛奶與人類罹癌之間有因果關係；瑞典卡洛林斯卡的研究經BBC的報導也說明該研究團隊並無法對研究結果做出解釋，無法因此斷言牛奶會致癌；牛奶的IGF-1含量為0.6ng/ml，遠低於母乳的IGF-1含量2.2 ng/ml，所以因為牛奶含IGF-1會致癌的謠言便不攻自破<a href="https://www.rumtoast.com/7707/萬年老梗！謠言傳到爛的-牛奶致癌-是真的嗎？" target="_blank">(蘭姆酒吐司，2018年4月19日)。</a>',
    '此則新聞以預防角度為標題，不致產生誤導，內容提及的<a href="https://jaoa.org/article.aspx?articleid=2557373" target="_blank">研究</a>確實刊登於美國骨科學會期刊，報導內容與原始研究相符，美國骨科學會期刊(The Journal of the American Osteopathic Association)為經同儕審查(peer review)的期刊，期刊官方網站中對於文章審核與刊登的資訊透明化，而本篇研究獲選2018年搞笑諾貝爾醫學獎，該獎項表彰之成就令人發笑後發人省思，且為有用的研究及知識',
    '中央研究院所建置的「臺灣人體生物資料庫」的確會蒐集臺灣民眾的生物資料，但參與該研究採預約制且參與者不會獲得任何報酬，但可提供交通接駁，若自行前往才會補助交通費用禮券500元；該研究所蒐集的資料無法取代醫院所做的正式檢查，更不會主動提供，官方說明請參考「臺灣人體生物資料庫」於108年4月19日所做的<a href="https://www.twbiobank.org.tw/new_web/news.php" target="_blank">聲明</a>',
    '此則新聞提到2017年印度國家疾病控制中心與美國疾病管制暨預防中心（CDC）合作的<a href="https://www.thelancet.com/pdfs/journals/langlo/PIIS2214-109X(17)30035-9.pdf" target="_blank">研究</a>，確實刊登於Lancet Global Health的一項個案對照研究(Case-control study)，後繼也有8篇文章針對此研究做了評論與回應，可以參考<a href="https://www.ncbi.nlm.nih.gov/pubmed/28153514" target="_blank">PubMed: Comment in連結</a>。另外圖書館訂購的<a href="https://reurl.cc/OxMdR" target="_blank">UpToDate資料庫</a>亦有引用此篇研究，簡短地提到空腹食用荔枝與低血糖及腦炎的爆發是有相關的，在2/3的受害者尿液樣本都驗出荔枝毒素hypoglycin A和methylenecyclopropylglycine (MCPG)的代謝物',
    'MirKin博士的個人網站的確發表過<a href="http://www.drmirkin.com/fitness/why-ice-delays-recovery.html" target="_blank">Why Ice Delays Recovery</a>這篇文章，也在該篇文章中提出相關的研究，以及對運動傷害的新處理建議',
    '理論提出者Robert O. Young已於2018年11月被法院判決詐欺罪成立，人體本身有酸鹼平衡機制，鹼性水及鹼性飲食並無法調整人體酸鹼環境；酸性體質導致癌症之說其實是倒果為因；蚊子則是偵測溫度及二氧化碳濃度來覓食。行之有年的酸鹼體質理論，產生多種曲解酸鹼原理的謠言版本'
]
const link=[
    'https://www.mirrormedia.mg/story/20171127int001/',
    'https://kknews.cc/zh-tw/world/yebgmyn.html',
    'http://technews.tw/2018/03/10/omega-3-supplement-fish-oil/',
    null,
    'https://www.hantang.com/chinese/ch_Articles/milk38.htm',
    'https://www.ettoday.net/dalemon/post/20099',
    null,
    'https://www.storm.mg/article/1403103?srcid=7777772e73746f726d2e6d675f64613063653639303534613232396135_1562642731',
    'https://www.sportsplanetmag.com/article/desc/18010819242719482',
    'https://www.cw.com.tw/article/article.action?id=5094367'
];

const question=[
    '<p>英國醫學期刊》22日刊出一項大型研究的成果報告，南安普頓大學科學家蒐集200多份歷年來有關咖啡的研究數據，從宏觀的角度來解讀「咖啡到底對身體是好是壞？」，結果發現：整體而言，喝咖啡對人體健康是利大於弊，而最適當的攝取量，是每天3～4杯。</p><p> 研究人員發現，在調查期間，喝咖啡的受試者的死亡機率，比不喝咖啡的受試者少了17%。若以疾病區分，喝咖啡的人死於心血管疾病的 機率，比不喝咖啡的人少了19%，死於癌症的機率也減少18%。</p><p>而在過去的研究裡，咖啡曾被發現有助於降低黑色素瘤、心臟病、 多發性硬化症、第二型糖尿病、肝病、攝護腺癌、阿茲海默症，以及使用電腦引起的背痛等疾病和症狀。</p><p>咖啡對身體的益處，主 要是來自於咖啡裡頭某些成分含有抗氧化劑和幫助消炎的化合物，前者能對抗癌症，後者則是可以抵擋慢性疾病，像是心臟疾病，或阿茲海默症這類神經退化性疾病。</p><p>不過喝咖啡當然也有潛在的健康疑慮，和要注意的地方，尤其是對於女性而言。過去咖啡研究顯示 女性在懷孕期間喝大量咖啡，可能導致早產、新生兒體重過輕，甚至流產。患有骨質疏鬆症的女性也可能因為經常喝咖啡，而增加骨折的風險。</p><p>不過要提醒的是，這篇報告中所寫的「一杯」咖啡，指的是240毫升或8盎司的份量，而非一般人常點的「大杯」份量。通 常市售的大杯拿鐵，至少都是480毫升或16盎司，相當於「兩杯」咖啡的份量。</p><p>這份報告的研究人員強調，此一結論是根據過去的觀察紀錄，而非針對咖啡成分的研究，因此無法確認因果關係，也不代表本來不喝咖啡的人應該從現在開始喝咖啡，好讓自己更健康。基本上，這份研究只是化解了咖啡愛好者的罪惡感，因為資料證明從喝咖啡的人的身上可以發現不少健康效益。</p><p>另外，根據其他的 研究，咖啡的沖泡方式也是關鍵。現今最流行的濾泡式咖啡會將咖啡裡頭的抗癌成分，也就是咖啡醇（cafestol）給過濾掉，等於是扼殺了咖啡的正面效益，因此並不建議喝濾泡式咖啡。相對而言，採用法式濾壓壺，或是土耳其咖啡的煮滾方式，就比較能夠將咖啡醇完整保留下來。</p>',
    '<p>懷孕是一件很幸福的事情，如果能懷上雙胞胎就已經讓人覺得很幸運的了。今天小編要說的是有一位外國孕婦一次產下了十一胞胎，你敢相信嗎？</p><p>據外國媒體稱，在印度有一名肚子超級大的孕婦一次產下了十一名嬰兒，很多人都表示特別驚訝。不過也有 網友認為這並不是真實的，照片中的十一個嬰兒只是同一天生出，不過女子確實生產了八胞胎，而其他三個寶寶是在那個醫院同一天出生的而已，真是嚇死人了。</p><p>即使是這樣金氏世界紀錄排行榜還是收錄了醫院的這十一胞胎的記錄。</p><p>該名女子在懷多胞胎之前就已經有六個孩子了，再加上現在出生的八胞胎，總共有4個小孩了，這強大的繁育能力真是震驚到小編了，人丁興旺，網友紛紛表示： 組個足球隊簡直是綽綽有餘嘛。</p>',
    '<p>網路上搜尋「魚油」兩字，各種保健品廣告排山倒海而來，也有研究指出兒童在連續服用魚油保健品一段時間後閱讀能力明顯提升， 或是孕婦服用魚油保健品可降低孩子出生後的食物過敏風險。但英國伯明罕大學新研究發現，其實沒有證據可以證明魚油能提升學齡兒童的閱讀能力或記憶力，而這也與同團隊的前份研究結果相悖離。</p><p>發表在《PLOS-ONE》的研究試驗，研究人員發現了與2012年一項早期研究完全不同的結果，在第一份研究中，魚油保健品對一些學齡兒童的閱讀力及記憶力（包括注意力不足過動症者） 產生益處。</p><p>但在第二項研究中，伯明罕大學與牛津大學的研究人員測試了376名閱讀能力最弱的孩子（百分比最後25%），發現魚油保健品對孩子的閱讀能力或記憶力提升沒有產生任何影響，或說影響極小。</p><p>在16週實驗 中，一半孩子每天服用Omega-3魚油補充劑，其餘孩子服用安慰劑（placebo），閱讀力與記憶力由父母事前測試、在校老師事後測試，結果發現並沒有什麼差異。</p><p>領導研究的伯明罕大學教授Paul Montgomery表示，在資源有限的時代裡，雖然魚油會對少數孩子產生好處，但顯然對多數來說並非必要，他認為，資金應該花在更有希望的措施上。</p><p>牛津大學研 究人員Theres Spreckelsen則說，雖然魚油或Omega-3脂肪酸普遍認為是有益食品，但對兒童學習 行為的益處顯然沒有以前想像的那麼大。</p>',
    '<img class="content-pic" src="./lineMsg.jpg" alt="lineMsg"/>',
    '<p>最近在網上看到一段並不新鮮的新聞：科學家終於找到牛奶致癌的確實證據。美國國家癌症研究所最近的研究發現雌性激素、雄性激 素和胰島素的生長因數就是牛奶內的主要致癌物質。</p><p>加拿大的腫瘤專家建議：除了那些發展中國家的兒童和營養不良的成人，一 般人並不需要喝太多牛奶。</p><p>我把該新聞轉發給一些朋友看。</p><p>我想測試一下人們對牛奶的認識，遂問："你知道奶牛為什麼 會一直產奶？"她的回答很典型："不常產奶能叫奶牛嗎？"我問："請問你是否常產奶呢？""怎麼可能？"我笑了，說："人是只有懷了小孩才會產奶的。但牛跟人一樣都是哺乳動物。哺乳的意思就是為了哺育下一代才有乳汁。所以奶牛一直產奶只有一個原因……"</p><p>"不 停地懷孕生小牛？"她吐吐舌頭，說："怎麼可能呢？"我說："確實是這樣的。但並不是所有奶牛在任何時候都能懷上孕。現代農場的解決方法是給奶牛打高劑量的荷爾蒙，讓其不自然泌乳--那段新聞所說的</p><p>"各種激素"就是這樣來的!</p><p>現代奶牛從兩歲開始就有九個月的時間用於懷孕。小牛出生後就會被關進小木箱並餵以毫無營養的飼料，不能動彈，以保證人們餐桌上小牛肉的精瘦嫩滑。而牛媽媽就被千方百計擠出一頭小牛所需的十倍以上的奶量。所以超過三分之一的奶牛都患有乳腺炎。</p><p>我常想起BBC製作的一個畜牧業的專輯：奶牛在鏡頭前走過，一步三跛，好像所有關節插了一根針。我想，人們即使是心如鐵石，認為那些動物如何受苦跟自己毫無關係，但希望自己能從這些病態的牛只體內吸收到什麼營養和健康，那已非緣木求魚，而是飲鳩止渴了。當然，在商業廣告中，你會被告知飲鳩的各種好處。</p><p>許多人認為牛奶能補鈣，但眾多實驗和資料顯示，牛奶內含有鈣，但人體是很難吸收的。喝牛奶，往往還會 讓體內的鈣質流失得更快。其實許多蔬菜的鈣含量比牛奶高得多，如黃花菜、蘿蔔纓、莧菜、雪裡紅、薺菜、香菜（芫荽）。不必等春暖花開，就從現在開始，讓我們更關心蔬菜和糧食吧！</p><p>牛奶的謊言在中國還要維持多久???</p><p>資訊技術已非常發達的今天，中 國人得悉事實的真相是並不困難的，但真相一旦傷及勢力強大的利益集團，問題則絕非簡單。</p><p>T.柯林.坎貝爾博士：美國康奈爾大學終身教授、被譽為"世界營養學界愛因斯坦。</p><p>牛奶致乳腺癌、卵巢癌、前列腺癌、大腸癌等系列癌症</p><p>近三十年來，營養 學有突破性進展，關於牛奶的研究已累積大量文獻，下面我信手拈幾則關於牛奶致癌的研究報告。</p><p>2004年，瑞典卡洛林斯卡研究 完成了一項牛奶與癌症的研究，研究證明，大量飲用牛奶導致婦女患卵巢癌。他們對61084名年齡在38歲至76歲的婦女跟蹤13年調查，確 診愛喝牛奶的266名婦女患卵巢癌，125名尚未確診。每天飲用4次以上乳製品的婦女，卵巢癌的發病率比每天喝2次的婦女高出一倍。</p><p>哈佛大學醫學院、牛津大學和臺灣醫科大學的科學家聯合研究發現，牛奶中的激素物質IGF-I加速和加強了氯化鉀離子在細胞壁之間的交換，導致人類卵巢癌細胞的繁殖和子宮頸癌細胞的加速生長。</p><p>2004年10月《新英格蘭醫學雜誌》發表一篇牛奶致女性乳腺癌的 研究報告。丹麥的研究人員對117000名婦女調查發現，牛奶對乳腺癌的促發有很大影響。研究人員認為，近50年來全世界乳腺癌發病率的大幅提高與人們飲食結構中牛奶及乳製品消費增加密切相關。研究人員認為，大量飲用牛奶會增加人體中類胰島素一號增長因數(IGF-I) 的水準，已經有多項研究表明，幾乎每一種癌症都與IGF－I有關聯，IGF-I是一種促使癌細胞生長和繁殖的關鍵性因素。</p><p>美國費城的研究人員通過近10年的流行病學調查證實，乳製品會增加男性患前列腺癌的危險。</p><p>美國波士頓一研究小組對20885例美國男性醫師進行了長達11年的隨訪調查，食用乳製品的男性，有1012例男性患前列腺癌。統計分析發現，每天從乳製品攝入600毫克鈣的男性血漿中維生素D3濃度顯著降低，發生前列腺癌的危險大幅上升。</p><p>日本厚生勞動省近日發佈的流行病學調查結果顯示，與幾乎不 食用乳製品的男性相比，經常食用牛奶、優酪乳等乳製品的男性患前列腺癌風險會高出60%左右。研究結果表明，飲用牛奶最多的調查物 件患前列腺癌的風險是幾乎不飲用牛奶的調查對象的1.53倍，而且飲用量越多，患癌風險越高；食用優酪乳最多的調查對象患前列腺癌風險是幾乎不食用優酪乳的調查對象的人.52倍。</p><p>在此，我很樂意講一個牛奶致癌的有趣故事與讀者分享。</p><p>英國地質化學家 簡 普蘭特五十歲的時候患乳腺癌，雖然經過無數次治療，十年間癌症總是不斷回來與她作伴。當第五次復發的時候，一個半個雞蛋大小 的硬塊長在她的脖子上，醫生說她只有幾個月的生命了。絕望而又堅強的普蘭特教授不再相信醫生，相信醫生也沒有用，人家已判了她的死刑。</p><p>她靠自己拯救自己，她閱讀最新的醫學論文，得知素食可以抗癌。她回想起三十年前到過中國，那時中國農村婦女不喝牛 奶而幾乎沒有人患乳腺癌，從而得到啟發，戒掉每天必吃的兩盒優酪乳，出乎她的意料之外，脖子上的腫瘤在六個星期之後奇跡般的消失了。</p><p>普蘭特教授是英國地質局的首席科學家，同事們目睹了她反復患病到痊癒的曲折過程。當同事們的親朋好友患了癌症的時候 ，都紛紛來向她求援。普蘭特教授通過改變患者的飲食和生活方式，使六十多位癌症患者得到了痊癒。</p><p>為什麼素食和戒掉牛奶就 能夠治癒癌症？普蘭特教授下功夫進行研究，她得出結論牛奶中的IGF-1（類胰島素一號增長因數）導致女性易患乳腺癌，男性易患前列 腺癌。IGF-1是牛奶中本身含有的致癌激素，但是在以前自然產出的牛奶中含量較低。自從人們用激素催發母牛大量產奶，牛奶中的IGF1 含量就增加了數倍至數十倍，牛奶致癌的危險當然就很厲害了。她認為牛奶的危害比香煙還嚴重。</p><p>善良而樂於助人的普蘭特教授 為了幫助更多的人遠離牛奶的危害，放下自己的研究課題，特意寫了兩本書《健康掌握在你自己手中》、《牛奶與乳腺癌教程》，還創辦了宣傳網站，網址是：www.janeplant.com，懂英文而興趣的朋友可以上網流覽。</p><p>美國著名醫學教授新谷宏實（美籍日本人）經過四十多年的行醫實踐，以醫療實證為依據，充分證明牛奶會導致婦女乳腺癌。他發現每一例乳腺癌患者都是愛喝牛奶的女人。新谷宏實教授在當代醫學史上有突出貢獻，他創造了醫治無數癌症，而沒有一例復發的醫療奇跡。他有什麼法寶能夠使每一個接受治療的患者不再復發呢？他在《不生病的生活》中告訴人們，他的法寶就是在患者作了腫瘤切除術之後，至少五年禁食牛奶和肉魚蛋。</p><p>牛奶為何會 導致多種腫瘤病變？美國康奈爾大學終身教授坎貝爾是癌病學的研究權威，特別在致癌學研究領域有非常突出的貢獻，曾被美國 癌症研究所授予"終生研究成就獎"。他的研究給人們找到了答案。坎貝爾證實牛奶中的蛋白質是一種非常強的促癌劑，其致癌能力甚至超過化學物質。他說："在控制癌症發病方面，營養比化學致癌物甚至比極強的致癌物的影響更大。……哪些蛋白質有比較強的促癌效果呢 ？</p><p>一個是酪蛋白，這種蛋白質占牛奶蛋白組成的87％。這種蛋白質促進各階段的癌症。"</p><p>"高酪蛋白（牛奶中的主要蛋白質）膳食使更多的致癌物進入細胞，使更多危險的致癌物衍生物結合在DNA上，引起更多的突變反應，使得細胞突變為原癌細胞的可能性增 大，這些細胞一旦啟動，就會形成更多的腫瘤。"</p><p>牛奶致少年兒童I型糖尿病</p><p>牛奶不但能使成年人患II型糖尿病，還可能使孩子患I型糖尿病。限於篇幅本來不想談這個問題，但喝牛奶的孩子太多，I型糖尿病終身難治，一個孩子一旦變成I型糖尿病人，在他以 後的生命中，不得不依賴外源的胰島素注射，太可怕了。因此不能不談。牛奶是如何使兒童患I型糖尿病的？坎貝爾在《中國健康調查報 告》中作過論述，我把論述摘錄如下：</p><p>"在I型糖尿病中，免疫系統攻擊產生胰島素的胰腺細胞。這種破壞性的、無法治癒的疾病 主要發生在兒童之中。它給年輕的父母帶來了巨大的痛苦和艱難的經歷。但大多數人並不知道，這種疾病和我們的膳食有關係，特別是我們每天攝入的乳製品。牛奶中的蛋白質誘導I型糖尿病的發生，很早就見著於文獻。其過程很可能是這樣的：</p><p>嬰兒接受母乳餵養的時間不長就開始喂以牛奶蛋白質，很有可能是嬰兒配方奶中的牛奶蛋白質。牛奶進入小腸後，被分解成氨基酸碎片。對於某些嬰兒來講，牛奶不能完全被消化，於是這種原初蛋白質的氨基酸小鏈或片斷就存留在小腸當中。這種沒有完全被消化的蛋白質片段被吸收進了血液。免疫系統識別了這些片段，將它們作為外來的入侵者，並開始破壞它們。不幸的是，這些蛋白質片段和產生胰島素的胰腺細胞完全相同。免疫系統喪失了識別牛奶蛋白質片段和胰腺細胞的能力，並開始攻擊兩者，導致兒童的胰島素生成功能的破壞。在12個國家的14歲以下兒童中，牛奶攝入量與I型糖尿病發病關係的調查發現，兩者之間存在非常好的線性關係。從中我們可以看到，牛奶攝入量越多，I型糖尿病患病率越高，在芬蘭，I型糖尿病的發病率是日本的36倍。同時，牛奶的平均攝入量芬蘭也是最高的，但在日本這一數值是非常低的。"針對牛奶危害兒童健康問題，1994年美國兒科協會強烈建議：如果家族成員糖尿病比較常見的話，那麼這個家庭中出生的嬰兒最好兩年內不要服用任何牛奶。在此我要特別強調指出，牛奶除了導致癌症和糖尿病外，還會導致其他一系列慢性疾病。坎貝爾說："科學證據確鑿無 疑，研究結論令人震驚：動物蛋白，尤其是占牛奶蛋白87％的酪蛋白，能顯著增加癌症、心臟病、糖尿病、多發性硬化病、腎結石、骨質疏鬆症、高血壓，自內障和老年癡呆症等的患病幾率。"</p><p>牛奶危害健康是許多人難以接受的事實。奶農，奶場主，乳製品企業的員工，牛奶是他們的飯碗；奶品製造商，奶品銷售商，奶品包裝商，牛奶是他們的搖錢樹。他們又怎麼能面對這樣的現實呢。我也不希望這是事實。可是令人沮喪得很，迄今為止，世界上沒有一例科研成果能夠證明牛奶沒有危害。</p><p>談到牛奶的無情現實，坎貝爾說："我本人是在奶牛場長大的，是喝牛奶、吃牛肉長大的，我很不願意看到這樣一個事實：否定牛奶牛肉。但是我必須要告訴大家，這是事實。"</p><p>牛奶越喝越缺鈣</p><p>這個問題可以講兩點。</p><p>（一）牛奶含鈣並不高。100克牛奶之中含鈣110毫克，而</p><p>100克海帶鈣含高達1177毫克，鈣含量比牛奶高出11倍。許多蔬菜的鈣含量遠遠高於牛奶。例如，芝麻的含鈣量比牛奶高過9倍，蕨菜的鈣含量比 牛奶高8倍，豆腐、大頭菜、小白菜、油萊、莧菜的含鈣量比牛奶高1.5至3倍。在蔬菜中，紅蘿蔔的含鈣量算是比較低的了，但100克紅蘿蔔也有33毫克鈣，比牛奶的鈣少不了多少。隨便挑一種綠葉蔬菜，鈣含量都不會低於牛奶。只要吃蔬菜就不會缺鈣。</p><p>如果小孩面 前有西瓜和芝麻，小孩肯定挑西瓜，因為西瓜比芝麻大。人們選食物補鈣，假如面前有海帶、豆腐、牛奶，人們很可能徑直選牛奶，而不知道選擇價廉物美、含鈣豐富的豆腐海帶。是人們智商不如孩子嗎？不是，是人們誤信一句每天都在重複的謊言"牛奶補鈣"。</p><p>（ 二）喝牛奶反而會缺鈣。例如，人均喝牛奶最多的四個國家--美國、芬蘭、丹麥、瑞典，缺鈣最嚴重。在這些國家發生骨折的人比比皆是。喝牛奶最厲害的美國婦女平均三人之中就有一人患骨質疏鬆症。</p><p>不喝牛奶的民族反而不缺鈣。西方科學家在非洲調查，發現非 洲斑圖婦女從來不喝牛奶，鈣質的獲取完全來自蔬菜。斑圖婦女一生當中平均生育10個子女，每個孩子都哺乳一年以上，母親們以乳汁哺育小孩，每天消耗大量的鈣，但斑圖婦女並沒有缺鈣。</p><p>三十年前中國人很少喝牛奶，特別是農村人口從來不喝牛奶，而缺鈣的情 況聞所未聞。八十歲的老農民能挑很重的擔子，腰膀硬朗，骨硬牙堅。</p><p>從上述事實可知，正常飲食五穀蔬菜的人根本不會缺鈣， 但是，一旦喝牛奶或吃肉食，就可能出現缺鈣。因為喝牛奶或吃肉食，人的體液、血液變酸性，呈鹼性的鈣元素便從骨頭中被釋放出來，以中和酸性，鈣完成使命後，變成廢物從尿道排出來。鈣這樣流失了。牛奶喝得越多，酸性體質越嚴重，鈣流失就越厲害。可見，越喝牛奶越缺鈣。</p><p>牛奶連牛都不能喝</p><p>牛奶連牛都不能喝，這句話似乎說得太過分。但是在中國而言，這句話絕對不會錯。在西方國家的市場上有大量鮮奶，乳汁濃郁，沒有摻水，走近牛奶就能聞到飄逸的天然奶香。如果說這樣鮮奶牛不能喝，肯定是不對的。然而，中國的奶品市場哪里有這樣的鮮奶呢？中國市場的奶全部都是加工奶，而加工奶品確實牛都不能喝，甚至會把牛毒死。</p><p>愛丁堡的 約翰 湯姆森曾用孿生小牛作試驗，一隻喂鮮奶，另一隻喂加過工的奶，吃鮮奶的小牛生長健康，吃加工奶的小牛在60天內死亡。試驗重 複了很多次，都是同一樣的結果。</p><p>國際知名營養學家雷蒙德 弗郎西斯在《選擇健康》中說："用生牛奶喂的小牛犢會保持健康， 但是，用加熱殺菌過的牛奶餵養的小牛犢通常在八個星期之內就會死掉"。</p><p>著名醫學家新穀弘實在《不生病的活法》中指出："如 果用市面上銷售的牛奶代替母牛的乳汁來哺育小牛，那麼小牛四五十天就有可能死掉"。科學家研究認為，加工奶經過均質化工藝和高溫 滅菌處理，乳脂和生物？被破壞，並變成了有害物質。這樣的奶實際是一種"變質物"。牛吃了吸收不到營養，並會慢性中毒，不久就會死亡。</p><p>科學研究一再證明，任何食品加工越深，危害就越嚴重。例如大米、小麥、甘蔗原本是很好的營養食品，但經過多道工藝加 工成精大米、精麵粉、精白糖之後，就對人體健康非常不利了，甚至會致人糖尿病。又如，植物種子（如花生、大豆）的脂肪是人體非常需要的營養，但如果將植物種子中的脂肪用壓榨法榨出來，脂肪就變成嚴重有害健康的食物了。因此各國政府建議人們每天吃加工油不得超過25克，無論是從動物、植物加工出來的油都是一樣。</p><p>食物保持天然狀態越完整，營養就越豐富，而對食物作 任何加工都是對營養的破壞，甚至會把好的食物變為毒物。最好的牛奶無疑是那種加工少、沒有摻入飲用水和化學物質、保持天然原狀態、溢出天然奶香的製品。</p><p>中國奶業的乳製品的加工已嚴重背離食品應盡力保持天然營養的原則。乳製品的加工程度實在令人不安 。走進超市就會明白一切。"蒙牛純牛奶"含蛋白質2.9克，是市場上含蛋白質最高的唯一品種。蒙牛牌其他品種的乳製品含蛋白質一般只有1克，其他品牌的乳製品含量恐怕更低。我不得不為之稱奇，歷來被人們視為含蛋白質高因而營 養高的牛奶，其營養價值竟然低於白菜。白菜含蛋白質1.5克，比含蛋白質只有1克的牛奶高50%的營養， 並且白菜的鈣含量也比牛奶高。喝牛奶不如吃菜。</p><p>再看看奶品中的化學物質。據廠商在包裝上赫然明示的就有二十多種：阿斯巴 甜、氨賽蜜、庫拉索凝膠、FOS|、IMO、卡拉膠、檸檬酸、檸檬酸鈉、羧甲基纖維素鈉、單硬脂酸甘油酯、三聚磷酸鈉、紐紅、紅麴紅、 苯丙氨酸、活性益生元、低聚糖、乳化劑、水分保持劑、增稠劑、酸度調節劑、日落黃、香精等等。如此之多的人造化學物質，真的能吃嗎？</p><p>現在據奶品廠商宣稱他們的牛奶經過1100道工序。難怪市場上乳製品五花八門：高維高鋅奶，高纖高鐵奶，高鐵高鈣奶，高 鈣高鋅奶，高鋅高纖奶，"特侖蘇奶"，"雙蛋白奶"、"舒化奶"，"雙核奶"，"兒童奶"，"老人奶"，"女人高鈣奶"。即使是能吃的好東西，經過如此折騰，還能吃嗎？！</p><p>2006年6月蒙牛乳業與中國奶業協會、中國教育發展基金會、國家學生飲用奶計畫部際協調小組辦公室、國家公眾營養與發展中心、中央電視臺、人民日報共同發起公益一個行動："每天一斤奶，強壯中國人"。</p><p>即便牛奶沒有危害 ，喝一斤市場出售的牛奶，僅能獲取5克蛋白質，豈不把人餓死，真是一個莫大的諷刺。</p><p>違抗自然遭天譴</p><p> 大自然創造萬物與生命。每一種有生命的物種都有天然的生存法則，如果違反，必然衰亡。</p><p>各種天然動物都按照自然律進行飲食 和生活，所以能夠精力充沛地活著，活到自然死亡。人的自然生命可以活到120至180歲，但是，人總是自作聰明違反自然規則，因而人總是過早死亡,沒有活到自然天年。</p><p>所有的哺乳動物都產奶。每種動物的乳汁都是專門用於哺育自己的新生後代，沒有一種動物過了哺乳期之後繼續飲食乳汁，更沒有一種成年動物要喝另外一種動物的奶。</p><p>人類嬰兒長到兩三歲時就應當徹底斷奶。母親停止分泌 乳汁和嬰兒體內的乳？徹底消失的生理變化，精確地發生在同一時期，足見這是大自然的安排，是不可抗拒的自然法則。然而，不少人偏偏要違抗自然，並荒唐地要喝另外一種動物（牛或羊）的奶。因而這些人遭到天譴。</p><p>由於人的腸胃缺乏某種酵素，喝下牛奶之後 的結果是：不能消化，牛奶的蛋白質殘留在人的器官內，成為病菌絕佳的繁殖場所，由這個原因所引起的消化不良症狀，嚴重的話甚至會剝奪嬰幼兒的生命。牛奶蛋白質在人體內的代謝紊亂，常常引起濕疹、哮喘等過敏性的疾病。更為嚴重的是，引發可怕的癌症、糖尿病、心血管病。</p><p>牛奶中存在的一種天然激素IGF-1，是大自然賜給小牛崽的特殊禮物，很利於小牛崽快速成長而又不影響小牛崽的健康，但是人吃到這種激素就會貽害無窮：早熟，笨腦，短壽，促發各種癌症。請看下面的分述：</p><p>（一）性早熟。喝奶越嚴重，孩子 越早熟。小女孩五六歲就來月經，小男孩的雞雞卻很小很小。據重慶晚報報導：市兒童醫院性早熟門診1990年代初，每年收治性早熟患兒二三十例，到1998年約300例，2004年達到1000多例，2007年將接近2000例。</p><p>（二）笨腦。國際著名腦開發專家七田真先生在《從胎內開始的育兒》中說：牛奶不僅會對身體，並且還會對大腦起到壞的影響。生下來的孩子，或是弱智，或是自閉，或是不會說話，大部分來自於這樣的原因：懷孕中的母親自以為是為了孩子好，而拼命地喝牛奶。</p><p>美國鮑爾曼博士1980年發表論文《牛奶與 思維障礙》，介紹了牛奶對5位精神病人的損害案例。患者多年來意識錯亂，情感冷漠，記憶減退，心理效率低，思維偏執，體力下降， 易疲勞，其中兩人被迫住院治療。但一旦停食牛奶後，四人痊癒，一人病情好轉。</p><p>（三）縮短生命。天然激素IGF-1刺激細胞分裂繁殖，無疑將使細胞提前衰老死亡。雖然天然激素IGF-1可以使孩子長得高一點，高2至3釐米，但是，這是用生命作出的交換。</p><p>（四）激發癌細胞。牛奶的天然激素IGF-1</p><p>可以刺激所有癌細胞活躍生長與繁殖，幾乎與每一種癌症都有關聯。科學家研究認為，人類直接由牛奶中吸入激素IGF-1後，從此體內各種細胞自行生產IGF-1激素，這對人類來說是一個可怕的後果。</p><p>牛奶中的乳糖也有 力證明牛奶不適宜人類。人類的體內有五千多種不同的活性，幾乎可以消化所有食物中的糖分，但是，人體卻唯獨缺少乳糖?，不能消化 牛奶中的乳糖。許多人一喝牛奶就嘔吐，腹瀉，消化道發病。我的一位朋友的女兒長期患腸道疾病，糞便連綿，到幾個大醫院求診無效，但停食牛奶之後，很快痊癒。</p>',
    '<p>每個人身上多多少少都有腎結石，尤其對於那些愛吃菠菜配豆腐的人來說更是如此。如果生成的結石太大顆的話，很容易使腎結石堵 住輸尿管，讓排尿的時會非常痛。但最近的一項科學研究卻顯示，那些常玩雲霄飛車的人，特別不容易有腎結石的毛病，這到底是怎麼回事呢？</p><p>研究主導者，泌尿科醫師大衛（David D.Wartinger）與密西根大學的同事，找到搭雲霄飛車能夠幫助人體 排出細小結石的證據，他們把這項研究刊登在《美國骨科學會》期刊上。</p><p>腎結石是尿液中的化學物質與鹽的結晶，而排出腎結石 多少都是一個痛苦的經驗，尤其是對那些有著超大腎結石的人來說。如果能在結石長大之前就能將他們排出體外，如此就可以大幅減少腎結石帶來的健康風險。</p><p>泌尿科醫師知道一些特定的情況能幫助排出腎結石，像是孕婦常常排出細小石頭，因為他們攝取的維他命 比平常人要多；還有做勞動、跳彈簧床、騎越野車、打噴嚏等等可以讓尿道變鬆，有利排出石頭等等。但科學家一直以來都無法完整分析出「幫助排出石頭的」單一因素，但這次搭雲霄飛車的影響之大，卻讓科學家跌破眼鏡。</p><p>「許多病人玩過迪士尼的巨雷山雲霄飛 車，都表示他們之後就排出了腎結石。讓我懷疑雲霄飛車能否幫助我的病患更好。有一次，我的學生與一名熟識的病患一起玩了雲霄飛車三次，結果他每次都排出了腎結石，這讓我們不得不正視這種治療方法的可信度。」</p><p>大衛與研究共同作者馬克（Marc Mitchell）拿著3D列印的精細矽膠腎臟模型去做了一次雲霄飛車，這個模型不但裝滿了尿液，還卡了很多結石。在得到遊樂園的特別許可下，研究人員將模型裝入了背包，他們便開始玩起了雲霄飛車，他們把模型放在了靠近腎臟的位置，為的就是要能近乎100%的模擬出真實的情況。最後他們重複了20次，還去了不同設計雲霄飛車，總共玩了60次之多。</p><p>「老實說，剛開始玩的時候，我們覺得很棒。但我們 當實驗進行到一半的時候，我們覺得很累很想吐，希望實驗可以趕快結束。」大衛這麼說。</p><p>數據顯示坐在雲霄飛車最後面排出結 石的機率為64%，而在最前面的機率只有17%。研究人員表示，雲霄飛車強大加速度G力有助於將石頭弄鬆，並引導它們排出體外。「腎臟 內部就像一棵長滿樹枝的大樹一樣，G力讓許多分枝上的蘋果石頭，順著樹枝向中滾動，最後從主幹中掉落下來。」</p><p>但並不是對每個人來說，搭雲霄飛車都是有效的，跟你的指紋一樣，每個人的腎臟內部結構都是獨一無二的，也許對某些人來說，搭一次就可以讓石頭全部「傾洩而出」，但對一些人來說，可能只會排出部分的碎石，但多少有點用處。</p><p>研究員認為搭雲霄飛車具有醫學上預防性功 能，「如果你的結石直徑小於0.4公分，那麼搭一趟雲霄飛車能夠輕易將它們排出，這可以預防大結石的疼痛。」許多人認為，結石卡在 輸尿管的疼痛並不亞於生小孩，這發現讓許多人可以同時兼顧娛樂以及健康。</p><p>研究人員將繼續投入這個研究，將在部分的遊樂園 中設立超音波檢查裝置，好讓志願的民眾可以貢獻出他們的實驗數據。有趣的是，腎結石的排出與重力有很大的關係，這也許能夠解釋為什麼腎結石是讓太空人痛苦的原因，也許在不久的將來，玩雲霄飛車將變成太空人升空的例行事務也說不定。</p>',
    '<img class="content-pic" src="./FB.jpg" alt="FB"/>',
    '<p>20多年來，每到夏天，印度東北部比哈爾邦穆扎夫法爾普爾就會出現一種病因不明的腦部疾病，患者大多是幼童，並導致他們猝死。 當地近年死於這種疾病的案例大幅減少，但這種神秘疾病本月再度肆虐，近100名兒童死於這種疾病，是2014年以來最嚴重的一次，而先 前的一篇研究指出這種病可能與荔枝的天然毒素有關，這些孩童可能空腹吃了大量荔枝，進而誘發急性腦炎症候群（AES）而猝死。</p><p>病因未明的急性腦炎</p><p>易造成兒童猝死</p><p>從1995年以來，印度比哈爾邦（Bihar）穆扎夫法爾普爾（Muzaffarpur）數百名貧困的兒童出現病因不明的急性腦炎症候群（AES），這種病因不明的神經疾病症狀是急性發燒併發無定向感（disorientation）與癲癇， 此外還會出現低血糖的狀況，病發時間通常在早晨，其中許多人很快就喪命。這種情況每年發生在5月到7月之間，等到天氣比較涼爽，這種怪病肆虐的情況就會平靜下來。</p><p>2014年，當地醫院收治了390名病童，其中122人死亡。近幾年，這種怪病在當地釀成的猝死案 例減少，死亡人數少於20人，但今年這種神秘疾病再度捲土重來，當地6月已有103名幼童死亡，當地官員戈許（Alok Ranjan Ghosh）說，這些喪生的孩童大多未滿7歲，約有100多名兒童住院接受治療。</p><p>當地罹患這種怪病的兒童大多送到克里希納醫學院與醫院（SKMCH）接受治療，該醫院的院長沙喜（Sunil Kumar Shahi）表示，所有患者均未滿9歲，他說：「你可以想像我 的精神狀況，這種情況很可怕，想想那些孩子住院的父母。」</p><p>該醫院的兒科部主任沙尼（Gopal Shankar Sahni）表示，醫院大廳擠滿了難過哭泣的父母：「他們請我們治療他們的孩子，但我們請他們相信神。」</p><p>研究人員懷疑空腹吃大量荔枝可 能是罹病原因</p><p>2017年印度國家疾病控制中心（National Center for Disease Control）與美國疾病管制暨預防中心（Centers for Disease Control and Prevention）合作的研究指出，荔枝的毒素可能是導致這種疾病的原因。</p><p>穆扎夫法爾普爾盛產荔枝，而這種疾病從5月中旬開始爆發，至6月達到高峰，荔枝產季也約莫在這段期間 。研究人員到當地醫院向病童的父母詢問孩子的生活方式與飲食習慣，這些病童的父母告訴研究人員，在荔枝盛產的季節，孩子會整天在附近的果園吃荔枝，回家後就不吃晚餐。</p><p>結果顯示，與那些沒有發病的孩童相比，那些生了這種怪病的孩子吃荔枝的機率高了9.6倍，去過荔枝果園的機率高了6倍，前一晚沒吃晚餐的機率高了2.2倍，此外，這些病童也比較有可能吃了未成熟或腐爛的荔枝。</p><p> 研究人員指出，荔枝的2種天然化學物質次甘氨酸A</p><p>（hypoglycin A）及甲基環丙基甘氨酸（MCPG），這2種物質在未成熟荔枝的濃度較高，而且會抑制人體合成葡萄糖，加上這些孩童通常吃了荔枝就不吃晚餐，讓低血糖的狀況更加惡化，導致抽搐昏迷，甚至死亡。研究人員分析當地醫院病童的73份尿液樣本，約莫一半驗出確實含有次甘氨酸A甲基環丙基甘氨酸，建議父母不要讓孩子空腹吃下太 多荔枝。</p>',
    '<p>一項發表在美國實驗生物學聯合會研討會的研究佐證了上面的理論。研究作者使用了兩組小鼠，其中一組遺傳性徵被改變，無法產生 對身體損傷產生正常的發炎反應，而另一組則保持正常身體機能。接著從事研究的科學家注射氯化鋇到實驗小鼠的身體中來對牠們產生肌肉損害。第一組對損傷無法產生先天免疫反應小鼠的肌肉一如預期無法癒合，而具有正常免疫力的小鼠則迅速癒合。後者在其受損的肌肉中含有非常大量的IGF-1，而身體自癒能力消失的小鼠則幾乎沒有IGF-1。</p><p>冰敷阻止癒合細胞進入受傷組織</p><p>2014年一篇線上發表在《膝蓋手術、運動創傷學和內視鏡</p><p>(Knee Surg Sports Traumatol Arthrosc)》期刊的研究表明，在受傷組織上冰敷會使創傷附近的血管收縮並阻止血液輸送炎症癒合細胞。研究並指出，冰敷後數小時血管才會再次打開，血流量減少會導致部分組織由於血液供給不足而死亡，甚至會造成永久性神經損傷。</p><p>延緩身體發炎的事物也會延遲療癒</p><p>Mirkin博士指出，任何減少身體發炎反應的事物，通常會阻礙肌肉癒合，例如："cortisone可的松"一類的藥物，這是一種具礦物皮質固醇活性的短效糖皮質固醇所有的止痛藥物，例如非類固醇類抗炎藥如布洛芬（Pharmaceuticals）治療關節炎、癌症或牛皮癬的免疫抑制劑冰敷其他任何阻礙免疫系統對於身體受傷產生反應 的事物等等。</p><p>冰處理還會降低運動時身體的力量、速度、耐力和協調性</p><p>據Sports Med網站發表於2011年的 一篇文章指出，冰敷或冰浴處理通常被用作短期治療，幫助受傷的運動員重返比賽。冷卻可能有助於減輕疼痛，但它會干擾運動員的力量、速度、耐力和協調性。在這篇論述中，作者研究了35份關於冰敷或冰浴對於身體表現影響的醫學文獻，大多數研究使用這些冷卻方式超過20分鐘。作者發現，大多數報告說，冷卻後立即降低了身體的肌力、速度以及在爆發性和靈活性跑步上的運動表現。而這些受試者藉由短暫的暖身才恢復了力量、速度和協調性。作者建議，如果需要冰敷以限制腫脹，則應該在不到五分鐘的時間內完成，然後在返回運動之前逐漸讓身體回溫。</p><p>運動傷害發生的急救處理</p><p>最後，Mirkin博士建議，如果一旦受傷，請立即停止運動。如果感到非常疼痛、身體無法動彈，或者如果你感到困惑或甚至感覺快要失去意識，那麼就應該確認你是否需要緊急醫療。開放性傷口應該立即清洗乾淨並檢查是否有更深的傷害。如果可能的話，提高受傷部位以利用重力來幫助減輕腫脹。最好請有經驗的運動防護員來確認是否有骨頭碎裂，並且移動患者不會增加損傷。如果受傷僅限於肌肉或其他軟組織，醫生或教練可以使用壓縮性繃帶。由於在創傷部位使用冰塊可以減輕疼痛，因此在運動傷害發生後不久可以短時間冷卻受傷部位。您可以冰敷患部10分鐘，將其移開靜候20分鐘，再重複一到兩次10分鐘的冰敷施作程序。受傷六小時之後就沒有任何理由再使用冰塊了。</p><p>Mirkin博士建議，如果受傷嚴重，請按照醫生的建議進行治療。如 果是輕傷，通常可以在第二天逐漸康復。只要不會增加疼痛和不適感，就可以移動和使用受傷部位，只要不再感到疼痛，就可以儘快恢復運動。</p>',
    '<p>別再被「酸鹼體質」騙了！倡導「酸鹼體質」理論的「始作俑者」，已在美國被證明是騙子，去年11月還被法院重判32億台幣。經過 半年，為什麼鹼性水在超商還是熱賣商品？「多喝鹼性水調整體質」、「身體太酸容易得癌症」這些謬論，還在網路上瘋傳？內容到底有哪些是真、是假？</p><p>2019年大甲媽祖遶境進香活動，台鹽在3月13日宣布捐贈3萬多瓶「台鹽海洋鹼性離子水」作為活動用水。</p><p>這新聞一看不免令人傻眼。</p><p>顯眼的包裝寫著「有助於調整體質」，鹼性水比一般的瓶裝水動輒貴上一倍。在去年倡導「酸鹼體 質」理論始祖，已在美國被證明是騙子之後，許多人以為，諸多的「偽科學」相關產品、療法，應該跟著從市面上退卻，但事實卻非如此。</p><p>「酸鹼體質」理論創始人，被重罰32億台幣</p><p>2018年11月，加州法院判決酸鹼體質的「始作俑者」楊恩（Robert O.Young）詐欺罪成立，被重罰1.05億美元（32億台幣）。他因說服病人放棄化療，改以「鹼性飲食法」治療癌症，導致患者病情 惡化，一狀告上法院。</p><p>2002年，楊恩出版《酸鹼值奇蹟》（The pH Miracle：Balance Your Diet, Reclaim Your Health）暢銷書。他在書中先強調正確資訊，「身體是鹼性的，但代謝的物質是酸的」（the body is alkaline and acidic by function）；但以錯誤方式做為解方，即奉行「鹼性食物飲食法」：多吃蔬菜、水果，來讓身體不那麼「酸」。</p><p>而後，他以同一套理論，針對糖尿病及減重，出書宣揚鹼性食物，多年來產生許 多似是而非的錯誤資訊。在台灣，對於酸鹼體質的迷思也有不少，而且早已深植人心。</p><p>儘管十幾年來，不斷有文獻、醫生出面「 打臉」這些坊間說法，認為鹼性水、鹼性食物根本無法調整體質；而且「身體太酸」對一般人來說，根本不可能發生。但網路上真假訊息參雜，大眾難有判斷能力。</p><p>問題一：飲食可以調整體質的酸鹼？</p><p>答案是無法。</p><p>人體的血液酸鹼值維持在PH值7.35 到7.45之間，台北市立聯合醫院仁愛院區泌尿科主治醫師黃建榮解釋，低於7.35就是酸中毒，會發生心肌缺血、敗血症、休克等；高於7.45為鹼中毒，出現四肢麻木、刺痛、心律失常等。</p><p>專門破除醫藥保健迷思的新媒體「美的好朋友」（MedPartner），自2016年陸 續發表好幾篇酸鹼體質的闢謠文章。創辦人醫師柳林瑋強調，不管從外界吃任何的酸、鹼食物，對正常人而言，身體都能透過呼吸、腎臟等將廢物排出，很快讓酸鹼調節在7.35到7.45之間。「多喘幾口氣，酸鹼就平衡了！」</p><p>若酸鹼值真如一般大眾想像的，時而太酸 時而太鹼，那其實都是「病危」狀況了！</p><p>中醫也同樣沒有任何酸鹼體質的說法，林口長庚紀念醫院中醫內兒科主治醫師陳星諭表 示。</p><p>但他補充，除非本身代謝有問題，例如糖尿病酮症酸中毒、慢性腎衰竭的病患，身體的確會呈酸性。此時除了治療疾病本身 ，也會適時補充鹼幫助平衡。「但這都是重病的時候了，一般人很少見！」</p><p>問題二：鹼性水能不能調整體質？</p><p>答案也是否定的。</p><p>鼓吹多喝水當然是好的。但既然從飲食下手，無法改變身體的酸鹼值，吃進去就會被身體平衡，鹼性水當然也沒有能讓體 質「由酸變鹼」的神奇療效，陳星諭說。</p><p>柳林瑋認為，市面上的「鹼性水」、「微鹼水」所謂的調整體質，並沒有明確定義「何 謂體質」。廣告中宣稱可以快速補充水分及礦物質、促進新陳代謝、對身體無負擔。但喝白開水大多能達到相同效果，目前也沒有證據認為鹼性水略勝一籌。</p><p>這點《紐約時報》所見略同，指出目前沒有任何證據證實，鹼性水可以改變身體的PH值，以及鹼性水比白開 水還要好。文中更批評，「這其實就是一種行銷手法！」</p><p>也有出鹼性水相關產品的統一企業，經理?忠正在聽聞「飲食改變酸鹼體質無用說」後，僅表示任何產品在台灣市場，都要符合法律的規範，鹼性水的上市亦在規定內。</p><p>問題三：酸性體質容易被蚊子叮 ？</p><p>被蚊子叮時，總有人叮嚀你少吃點肉、多吃些蔬菜水果，身體才不會那麼「酸」。</p><p>酸性體質真的容易被蚊子叮嗎？</p><p>答案是：毫無關係！</p><p>主要的原因仍然是：根本沒有酸性體質這回事！容易被蚊子叮的原因，跟坊間流傳的胖瘦、酸鹼、血型都沒有關聯。</p><p>柳林瑋強調，蚊子主要偵測溫度及二氧化碳濃度。呼吸會吐出二氧化碳，因此臉部附近常是蚊子的「一級覓食區」； 體溫較高的人如小孩、孕婦也是首要目標；除此之外，較會流汗、體味重、擦香水的人也得小心。</p><p>「蚊子在叮到你之前，就知道 你是酸的（你也不可能是酸的），也太厲害了吧！」柳林瑋說。</p><p>問題四：酸性體質容易致癌？</p><p>「這完全是倒果為因的說法！」黃建榮說。癌細胞的附近確實會生成酸性物質，但這是「先得了癌症才產生酸」，而非「酸性體質容易致癌」。</p><p>美國癌症研 究機構（American Institute for Cancer Research）及國民健康署都曾出面闢謠，指出癌細胞耐酸，可在酸性環境下茁壯。但在人體中，不可能發生體質太酸導致癌症、多吃鹼性食物調整成鹼性體質，就能預防甚至治療癌症，這些都是迷思。</p><p>問題五：鹼性食物飲食法真的對身體好嗎？</p><p>台大醫院北護分院營養師簡妙凌解釋，食物確實有酸鹼之分，判定方法是將食物燃燒或消化吸收，最終代謝後產生的陰陽離子比例。</p><p>簡單來說，五穀雜糧、蛋豆魚肉類、汽水等屬於酸性食物；奶類、蔬菜、水 果等植物性食品都是鹼性食物。</p><p>國外曾有文獻歸納，鹼性食物飲食法對健康的好處，例如可以改善鉀和鈉的比例，有助於骨骼健 康、減少肌肉萎縮等，還能預防慢性疾病如高血壓、中風的發生。目前，行政院衛生福利部也在推行「天天五蔬果」，希望民眾一天至少要吃進3份蔬菜、2份水果，補充多數人不足的維生素、礦物質及膳食纖維。</p><p>不過黃建榮與簡妙凌都說，一般並不會用「酸鹼食物 」，來建議病患調整飲食。但均衡飲食、多吃蔬菜、水果，對身體當然是好的。</p>'
];

const ans=[1,0,1,0,0,1,0,1,1,1]
var order=[0,1,2,3,4,5,6,7,8,9]
function shuffle(a,b) {
    var num = Math.random() > 0.5 ? -1:1;
    return num;
  }
order = order.sort(shuffle);
var score=0;

const start=()=>{
    score=0;
    document.getElementById("title").innerHTML=title[order[nowAt]];
    document.getElementById("question").innerHTML=question[order[nowAt]];
    document.getElementById("counter").innerHTML="答對 "+score+" 題";
    document.getElementById("source-bar").innerHTML=source[order[nowAt]];
    $(".btn-info").hide();
    $(".btn-success").show();
    $("#counter").show();
    $(".btn-danger").show();
    $("#link-bar").show();
}

const changeNowAt=()=>{
    $("#ans-bar").hide();
    $("#next").hide();
    $(".btn-info").hide();
    $(".btn-success").show();
    $("#counter").show();
    $(".btn-danger").show();
    $("#link-bar").show();
    nowAt++;
    document.getElementById("title").innerHTML=title[order[nowAt]];
    document.getElementById("question").innerHTML=question[order[nowAt]];
    document.getElementById("source-bar").innerHTML=source[order[nowAt]];
    if(nowAt>=10 || score>=3){
        //document.getElementById("second").style.display="none";
        //document.getElementById("third").style.display="block";
        nowAt=10;
        document.getElementById("title").innerHTML="你答對的題數為";
        document.getElementById("question").innerHTML=score;
        $("#counter").hide();
        $(".btn-success").hide();
        $(".btn-danger").hide();
        $("#again").show();
        $("#link-bar").hide();
        if(score>=3){
            $("#contact").show();
            $(".btn-area").hide();
        }
    }
}


const check=(input)=>{
    $("#link-bar").hide();
    $("#ans-bar").show();
    $("#next").show();
    if(input==ans[order[nowAt]]){
        score++;
        document.getElementById("ans-btn").innerHTML='✓';
        document.getElementById("ans-circle").style.border="3px solid #28a745";
        document.getElementById("ans-btn").style.backgroundColor="#28a745";
        document.getElementById("msg-bar").style.color="#28a745";
        if(ans[order[nowAt]]==0){
            document.getElementById("msg-bar").innerHTML='恭喜您答對了!<br/>沒有錯這是一則假新聞!';
        }
        else{
    
            document.getElementById("msg-bar").innerHTML='恭喜您答對了!<br/>沒有錯這是一則真新聞!';
        }
    }
    else{
        document.getElementById("ans-btn").innerHTML='X';
        document.getElementById("ans-circle").style.border="3px solid #dc3545";
        document.getElementById("ans-btn").style.backgroundColor="#dc3545";
        document.getElementById("msg-bar").style.color="#dc3545";
        if(ans[order[nowAt]]==0){
            document.getElementById("msg-bar").innerHTML='真可惜答錯了!<br/>這是一則假新聞!';
        }
        else{
            document.getElementById("msg-bar").innerHTML='真可惜答錯了!<br/>這是一則真新聞!';
        }
    }
    document.getElementById("counter").innerHTML="答對 "+score+" 題";
    document.getElementById("title").innerHTML='';
    document.getElementById("question").innerHTML=detail[order[nowAt]];
    $(".btn-success").hide();
    $(".btn-danger").hide();
    $("#counter").hide();
}

const send=()=>{
    var email = $('#email');
    var name = $('#name')
    var identity = $('#identity')
    var department = $('#department')
    var phone = $('#phone');
    var parameter = {};
    $("#contact").hide();
    $('.loading').show();
    document.getElementById("title").innerHTML="";
    document.getElementById("question").innerHTML="";
    parameter = {
      email: email.val(),
      name: name.val(),
      identity: identity.val(),
      department: department.val(),
      phone : phone.val()
    };
    $.get('https://script.google.com/macros/s/AKfycbxNPD8xVmraw0OLc0Pi_qPBeiWKppRUxTbUjyj8hEjKn-b3O3g/exec', parameter, function(data) {
        console.log(data);
        $('.loading').hide();
        document.getElementById("title").innerHTML="";
        document.getElementById("question").innerHTML="感謝您的填寫!";
        $(".btn-area").show();
    });
    nowAt++;

}

const replay=()=>{
    $(".btn-dark").hide();
    $(".btn-info").show();
    $("#contact").hide();
    nowAt=0;
    score=0;
    document.getElementById("title").innerHTML="找出假新聞- 「真假新聞線上猜」";
    document.getElementById("question").innerHTML="知道如何辨識醫學新聞的真偽嗎? 只要成功答對三題即可參加抽獎，每位讀者最多可參加三次抽獎(題目隨機發送)";
}

const linkTo=()=>{
    window.open(link[order[nowAt]], '_blank');
}