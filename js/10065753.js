




















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
var id ='',ids='0123456789abcdef';
for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16));  }  return id;
};
var doyoo={
env:{
secure:false,
mon:'http://m2423.talk99.cn/monitor',
chat:'http://chat2431.talk99.cn/chat',
file:'http://yun-static.soperson.com/131221',
compId:10039888,
confId:10065753,
vId:d_genId(),
lang:'',
fixFlash:1,
fixMobileScale:0,
subComp:14307,
_mark:'b2162a86972358544f10b97e68d408611e648d9346a81ec4b77d2b5b5909f54483200318780b99e8'
},
chat:{
    mobileColor:'',
    mobileHeight:80,
    mobileChatHintBottom:0,
    mobileChatHintMode:0,
    mobileChatHintColor:'',
    mobileChatHintSize:0
}

, monParam:{
index:-1,
preferConfig:0,

style:{mbg:'http://www.lemonedu.cn/commonImages/jsutck02.jpg',mh:360,mw:704,
elepos:'0 0 0 0 0 0 0 0 126 20 460 30 662 328 20 20 0 0 0 0',
mbabg:'',
mbdbg:'',
mbpbg:''},

title:'\u5728\u7ebf\u5ba2\u670d',
text:'\u5c0a\u656c\u7684\u5ba2\u6237\u60a8\u597d\uff0c\u6b22\u8fce\u5149\u4e34\u672c\u516c\u53f8\u7f51\u7ad9\uff01\u6211\u662f\u4eca\u5929\u7684\u5728\u7ebf\u503c\u73ed\u5ba2\u670d\uff0c\u70b9\u51fb\u201c\u5f00\u59cb\u4ea4\u8c08\u201d\u5373\u53ef\u4e0e\u6211\u5bf9\u8bdd\u3002',
auto:8,
group:'10065392',
start:'00:00',
end:'24:00',
mask:false,
status:true,
fx:0,
mini:1,
pos:0,
offShow:0,
loop:15,
autoHide:0,
hidePanel:0,
miniStyle:'#0680b2',
miniWidth:'340',
miniHeight:'490',
showPhone:0,
monHideStatus:[3,3,3],
monShowOnly:'',
autoDirectChat:-1,
allowMobileDirect:0,
minBallon:1,
chatFollow:1
}


, panelParam:{
mobileIcon:'null',
mobileIconWidth:0,
mobileIconHeight:0,
category:'icon',
preferConfig:0,
position:0,
vertical:10,
horizon:5


,mode:1,
target:'10065392',
online:'http://www.lemonedu.cn/commonImages/online02.png',
offline:'http://www.lemonedu.cn/commonImages/online02.png',
width:200,
height:600,
status:1,
closable:0,
regions:[],
collapse:0



}



,sniffer:{
ids:'sh_01,sh_02,sh_03,sh_04,sh_05,sh_06,sh_07,sh_08,sh_09,sh_10,sh_11,sh_12,sh_13,sh_14,sh_15,sh_16,sh_17,sh_18,sh_19,sh_20,sh_21,sh_22,sh_23,sh_24,sh_25,sh_26,sh_27,sh_28,sh_29,sh_30,sh_31,sh_32,sh_33,sh_34,sh_35,sh_36,sh_37,sh_38,sh_39,sh_40,sh_41,sh_42,sh_43,sh_44,sh_45,sh_46,sh_47,sh_48,sh_49,sh1_01,sh1_02,sh1_03,sh1_04,sh1_05,sh1_06,sh1_07,sh1_08,sh1_09,sh1_10,sh1_11,sh1_12,sh1_13,sh1_14,sh1_15,sh1_16,sh1_17,sh1_18,sh1_19,sh1_20,sh1_21,sh1_22,sh1_23,sh1_24,sh1_25,sh1_26,sh1_27,sh1_28,sh1_29,sh1_30,sh1_31,sh1_32,sh1_33,sh1_34,sh1_35,sh1_36,sh1_37,sh1_38,sh1_39,sh1_40,sh1_41,sh1_42,sh1_43,sh1_44,sh1_45,sh1_46,sh1_47,sh1_48,sh1_49',
gids:'10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392,10065392'
}

};

if(typeof talk99Init == 'function'){
talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){
var supportJquery=typeof jQuery!='undefined';
var doyooWrite=function(html){
document.writeln(html);
}

doyooWrite('<div id="doyoo_panel"></div>');


doyooWrite('<div id="doyoo_monitor"></div>');


doyooWrite('<div id="talk99_message"></div>')

doyooWrite('<div id="doyoo_share" style="display:none;"></div>');
doyooWrite('<lin'+'k rel="stylesheet" type="text/css" href="http://yun-static.soperson.com/131221/oms.css?170728"></li'+'nk>');
doyooWrite('<scr'+'ipt type="text/javascript" src="http://yun-static.soperson.com/131221/oms.js?17072505" charset="utf-8"></scr'+'ipt>');
}
}
