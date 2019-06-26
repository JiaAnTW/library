
var nowAt=0;
const title=[
    '長榮一口氣公布到7/7取消航班 總計917班次',
    '貪玩？把隊友褲子「全脫下來」 他害國家隊被逐出選手村',
    '我交到女朋友了',
    '二刀流就快回歸！ 大谷翔平將上丘練投'
]

const question=[
    '長榮航空空服員罷工今天進入第7天，雙方協商仍未有結論，長榮官網公布今天取消106班次，且一連公布13天的航班異動，從今天起至7/7累計停飛達917班次，若再加上罷工前6天所取消的523班次，此次罷工取消的航班合計已達1440班次。',
    '目前南韓短道競速滑冰國家隊，正於鎮江選手村進行集訓，不料23歲的奧運金牌選手林孝俊(Lim Hyo-jun)，竟在攀岩訓練時，扯下同為平昌冬奧金牌得主的黃大憲(Hwang Dae-heon)的內褲，讓他在多名女選手面前出洋相。對此，南韓奧委會認為此舉已構成「性騷擾、霸凌」，決定將整個短道競速滑冰隊逐出選手村1個月。',
    '我交到女朋友了',
    '效力洛杉磯天使隊的日籍「二刀流」大谷翔平，本季擔任打者繳出優異表現，如今再傳好消息，他將在明(27)日上投手丘練投，而這正是他去年動完 Tommy John手術之後的第一次。',
    '天使球團今天對外宣布這項消息，拿下去年美聯最佳新人的大谷，去年10月2日動刀，經過復健休養，他在本季5月8日重返天使打線，目前繳出9轟、30分打點、OPS為.834。天使球團先前一再強調大谷得到2020年才能再上場投球，不過他的復原進度似乎比預期快。'
]

const ans=[1,1,0,1]
var score=0;

const start=()=>{
    document.getElementById("title").innerHTML=title[nowAt];
    document.getElementById("question").innerHTML=question[nowAt];
    $(".btn-info").hide();
    $(".btn-success").show();
    $(".btn-danger").show();
}

const changeNowAt=(input)=>{
    if(input==ans[nowAt])
        score++;
    nowAt++;
    document.getElementById("title").innerHTML=title[nowAt];
    document.getElementById("question").innerHTML=question[nowAt];
    if(nowAt>=4){

        //document.getElementById("second").style.display="none";
        //document.getElementById("third").style.display="block";
        document.getElementById("title").innerHTML="你答對的題數為";
        document.getElementById("question").innerHTML=score;
        
        $(".btn-success").hide();
        $(".btn-danger").hide();
        $(".btn-dark").show();
        if(score>=3){
            $("#contact").show();
            $(".btn-area").hide();
        }
    }
}

const send=()=>{
    nowAt++;
    document.getElementById("title").innerHTML="";
    document.getElementById("question").innerHTML="感謝您的填寫!";
    $("#contact").hide();
    $(".btn-area").show();
}

const replay=()=>{
    $(".btn-dark").hide();
    $(".btn-info").show();
    $("#contact").hide();
    nowAt=0;
    score=0;
    document.getElementById("title").innerHTML="判斷假新聞";
    document.getElementById("question").innerHTML="判斷以下內容是否為真!";
}