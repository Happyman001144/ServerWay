const _0x80ec=['invite_logging_channels','enable_invite_logging','log','setTitle','code','type','Invite\x20Logging\x20Info:','\x27,\x20\x270\x27,\x20\x270\x27,\x20\x270\x27,\x20\x270\x27)','MessageEmbed','get','channels','setColor','useUserCount','guildMemberRemove','filter','------\x20CONSOLE\x20LOGGING\x20BEGINS\x20BELOW\x20------','debugmode','copyright','size','uses','useMemberCount','members','serverstats_config','26398JlOaTn','New\x20Member:','Users:\x20','user','main_config','query','setThumbnail','Bots:\x20','forEach','53IbRaJs','createdAt','One\x20of\x20the\x20channels\x20entered\x20in\x20the\x20config.json\x20file\x20is\x20not\x20properly\x20configured.\x20Please\x20make\x20sure\x20you\x20use\x20Channel\x20ID\x27s.\x20Not\x20Names.','catch','37895Rmwrmw','1mvKmjD','send','489532fOiirZ','SELECT\x20*\x20FROM\x20users\x20WHERE\x20userid=\x27','ping','name','users','Highest\x20Role:','addFields','then','228876GBoDJW','usercountchannelid','yourserverid','logging_config','25m','guildMemberAdd','setFooter','setTimestamp','status','bot','9pwrrnK','tag','membercountchannelid','presence_config','297153bmhdUY','Invited\x20By:','util','memberCount','string','chalk','guild','setName','length','1809WVTzTx','displayAvatarURL','fetchInvites','11vwKFQb','inviter','INSERT\x20INTO\x20users\x20(userid,\x20warns,\x20kicks,\x20bans,\x20mutes)\x20VALUES\x20(\x27','\x20\x0a\x20','useBotCount','highest','599174kUGknH','cache','guilds','toLocaleString'];const _0x33e5=function(_0x51efa1,_0x2ce204){_0x51efa1=_0x51efa1-0x11d;let _0x80ecdf=_0x80ec[_0x51efa1];return _0x80ecdf;};const _0xf1744b=_0x33e5;(function(_0x34b353,_0x53c82a){const _0x248e5c=_0x33e5;while(!![]){try{const _0x4699be=parseInt(_0x248e5c(0x148))+parseInt(_0x248e5c(0x15a))*-parseInt(_0x248e5c(0x138))+parseInt(_0x248e5c(0x15e))*parseInt(_0x248e5c(0x146))+parseInt(_0x248e5c(0x16a))*-parseInt(_0x248e5c(0x145))+parseInt(_0x248e5c(0x11d))+-parseInt(_0x248e5c(0x150))+parseInt(_0x248e5c(0x141))*-parseInt(_0x248e5c(0x167));if(_0x4699be===_0x53c82a)break;else _0x34b353['push'](_0x34b353['shift']());}catch(_0xa0432d){_0x34b353['push'](_0x34b353['shift']());}}}(_0x80ec,0x63497));const fs=require('fs'),ms=require('ms'),chalk=require(_0xf1744b(0x163)),invites={},wait=require(_0xf1744b(0x160))['promisify'](setTimeout),{startupScreen}=require('../../util/boot.js');let i=0x0;module['exports']=async(_0x30ccd5,_0x47a0f5,_0x82ded8,_0x1cdd6c)=>{const _0x2b21b8=_0xf1744b;try{try{setInterval(function(){const _0x175ad6=_0x33e5;_0x1cdd6c[_0x175ad6(0x14a)]();},ms(_0x2b21b8(0x154))),_0x30ccd5[_0x2b21b8(0x14c)]['cache'][_0x2b21b8(0x140)](_0x498168=>{const _0x508373=_0x2b21b8;if(_0x498168[_0x508373(0x159)]){}else _0x1cdd6c[_0x508373(0x13d)](_0x508373(0x149)+_0x498168['id']+'\x27',async(_0x57203c,_0x6c7e8b)=>{const _0x19878f=_0x508373;!_0x6c7e8b[0x0]&&await _0x1cdd6c[_0x19878f(0x13d)](_0x19878f(0x16c)+_0x498168['id']+_0x19878f(0x128),async(_0x3a7db5,_0xe5463d)=>{});});});}catch(_0x253be4){console[_0x2b21b8(0x123)](_0x253be4);}let _0x12f216=_0x82ded8[_0x2b21b8(0x13c)]['port'];const _0x32ab3e=require('express'),_0x47fde9=_0x32ab3e();_0x47fde9['listen'](_0x12f216);if(_0x82ded8[_0x2b21b8(0x153)][_0x2b21b8(0x122)]){await wait(0x3e8);const _0x49e259=_0x30ccd5[_0x2b21b8(0x11f)][_0x2b21b8(0x11e)][_0x2b21b8(0x12a)](''+_0x82ded8[_0x2b21b8(0x13c)][_0x2b21b8(0x152)]);_0x49e259[_0x2b21b8(0x169)]()['then'](_0x455eab=>{invites[_0x49e259['id']]=_0x455eab;}),_0x30ccd5['on']('guildMemberAdd',_0x5ebaf7=>{const _0xa3c2fe=_0x2b21b8;if(_0x5ebaf7['guild']['id']===''+_0x82ded8[_0xa3c2fe(0x13c)][_0xa3c2fe(0x152)]){let _0x16446a=_0x5ebaf7;_0x16446a[_0xa3c2fe(0x164)][_0xa3c2fe(0x169)]()[_0xa3c2fe(0x14f)](_0x529b20=>{const _0x42f7a3=_0xa3c2fe,_0x4db076=invites[_0x16446a['guild']['id']];invites[_0x16446a[_0x42f7a3(0x164)]['id']]=_0x529b20;const _0x5ecf71=_0x529b20['find'](_0x50c54d=>_0x4db076[_0x42f7a3(0x12a)](_0x50c54d[_0x42f7a3(0x125)])[_0x42f7a3(0x134)]<_0x50c54d[_0x42f7a3(0x134)]),_0x345a5d=_0x30ccd5[_0x42f7a3(0x14c)]['cache'][_0x42f7a3(0x12a)](_0x5ecf71[_0x42f7a3(0x16b)]['id']),_0x2fcc47=new _0x47a0f5[(_0x42f7a3(0x129))]()[_0x42f7a3(0x12c)](''+_0x82ded8[_0x42f7a3(0x13c)]['colorhex'])[_0x42f7a3(0x124)](_0x42f7a3(0x127))[_0x42f7a3(0x13e)](''+_0x5ebaf7[_0x42f7a3(0x13b)][_0x42f7a3(0x168)]({'dynamic':!![]}))[_0x42f7a3(0x14e)]({'name':_0x42f7a3(0x139),'value':''+_0x16446a[_0x42f7a3(0x13b)][_0x42f7a3(0x15b)],'inline':!![]},{'name':_0x42f7a3(0x15f),'value':'<@'+_0x345a5d+'>','inline':!![]},{'name':'Invite\x20Code:','value':''+_0x5ecf71[_0x42f7a3(0x125)],'inline':!![]},{'name':'Invite\x20Uses:','value':''+_0x5ecf71[_0x42f7a3(0x134)],'inline':!![]},{'name':_0x42f7a3(0x14d),'value':'<@&'+_0x16446a['roles'][_0x42f7a3(0x16f)]+'>','inline':!![]},{'name':'Joined\x20Discord:','value':''+_0x16446a['user'][_0x42f7a3(0x142)]['toLocaleString'](),'inline':!![]})[_0x42f7a3(0x157)]()[_0x42f7a3(0x156)](''+_0x82ded8[_0x42f7a3(0x13c)][_0x42f7a3(0x132)]);_0x82ded8[_0x42f7a3(0x153)][_0x42f7a3(0x121)][_0x42f7a3(0x140)](_0xec20b=>{const _0x18f0df=_0x42f7a3,_0x1b6fc1=_0x30ccd5[_0x18f0df(0x12b)]['cache'][_0x18f0df(0x12a)](_0xec20b);!_0x1b6fc1?console[_0x18f0df(0x123)](_0x18f0df(0x143)):_0x1b6fc1[_0x18f0df(0x147)](_0x2fcc47)[_0x18f0df(0x144)](_0x51c6ce=>{const _0x1632dd=_0x18f0df;if(_0x82ded8[_0x1632dd(0x13c)]['debugmode'])return console[_0x1632dd(0x123)](_0x51c6ce);});});});}});}startupScreen(_0x30ccd5),changeStatus(_0x30ccd5,_0x82ded8);if(_0x82ded8[_0x2b21b8(0x137)]['enabled']){const _0x120b76=_0x82ded8[_0x2b21b8(0x137)][_0x2b21b8(0x15c)],_0x36ef28=_0x82ded8[_0x2b21b8(0x137)][_0x2b21b8(0x151)],_0x4d199d=_0x82ded8[_0x2b21b8(0x137)]['botcountchannelid'];if(_0x82ded8['serverstats_config'][_0x2b21b8(0x135)]){const _0x16da51=_0x581a48=>{const _0x3ab246=_0x2b21b8,_0x59e614=_0x581a48[_0x3ab246(0x12b)]['cache'][_0x3ab246(0x12a)](_0x120b76);_0x59e614[_0x3ab246(0x165)]('Members:\x20'+_0x581a48[_0x3ab246(0x161)][_0x3ab246(0x120)]());};_0x30ccd5['on'](_0x2b21b8(0x155),_0xd547d0=>_0x16da51(_0xd547d0[_0x2b21b8(0x164)])),_0x30ccd5['on']('guildMemberRemove',_0x11d90f=>_0x16da51(_0x11d90f['guild']));const _0x2cea4f=_0x30ccd5[_0x2b21b8(0x11f)]['cache'][_0x2b21b8(0x12a)](_0x82ded8[_0x2b21b8(0x13c)]['yourserverid']);_0x16da51(_0x2cea4f),typeof aliases===_0x2b21b8(0x162)&&(aliases=[aliases]);}if(_0x82ded8[_0x2b21b8(0x137)][_0x2b21b8(0x12d)]){const _0x2484da=_0x282196=>{const _0x49ce6c=_0x2b21b8,_0xfd41af=_0x282196[_0x49ce6c(0x12b)][_0x49ce6c(0x11e)][_0x49ce6c(0x12a)](_0x36ef28);_0xfd41af['setName'](_0x49ce6c(0x13a)+_0x282196[_0x49ce6c(0x136)]['cache'][_0x49ce6c(0x12f)](_0x1c9fff=>!_0x1c9fff[_0x49ce6c(0x13b)][_0x49ce6c(0x159)])[_0x49ce6c(0x133)]);};_0x30ccd5['on'](_0x2b21b8(0x155),_0x9d0dfc=>_0x2484da(_0x9d0dfc[_0x2b21b8(0x164)])),_0x30ccd5['on'](_0x2b21b8(0x12e),_0x4bc94e=>_0x2484da(_0x4bc94e['guild']));const _0x432b60=_0x30ccd5[_0x2b21b8(0x11f)][_0x2b21b8(0x11e)][_0x2b21b8(0x12a)](_0x82ded8[_0x2b21b8(0x13c)][_0x2b21b8(0x152)]);_0x2484da(_0x432b60),typeof aliases===_0x2b21b8(0x162)&&(aliases=[aliases]);}if(_0x82ded8[_0x2b21b8(0x137)][_0x2b21b8(0x16e)]){const _0x2ed2bc=_0x3d62a2=>{const _0x319be0=_0x2b21b8,_0x2f88a7=_0x3d62a2[_0x319be0(0x12b)][_0x319be0(0x11e)][_0x319be0(0x12a)](_0x4d199d);_0x2f88a7[_0x319be0(0x165)](_0x319be0(0x13f)+_0x3d62a2[_0x319be0(0x136)][_0x319be0(0x11e)][_0x319be0(0x12f)](_0x227987=>_0x227987[_0x319be0(0x13b)]['bot'])[_0x319be0(0x133)]);};_0x30ccd5['on'](_0x2b21b8(0x155),_0x12976f=>_0x2ed2bc(_0x12976f[_0x2b21b8(0x164)])),_0x30ccd5['on'](_0x2b21b8(0x12e),_0x26234d=>_0x2ed2bc(_0x26234d[_0x2b21b8(0x164)]));const _0x2928f3=_0x30ccd5['guilds'][_0x2b21b8(0x11e)]['get'](_0x82ded8['main_config']['yourserverid']);_0x2ed2bc(_0x2928f3),typeof aliases===_0x2b21b8(0x162)&&(aliases=[aliases]);}}console[_0x2b21b8(0x123)](_0x2b21b8(0x16d)),console['log'](_0x2b21b8(0x130)),console['log'](_0x2b21b8(0x16d));}catch(_0x1a782c){if(_0x82ded8[_0x2b21b8(0x13c)][_0x2b21b8(0x131)])return console[_0x2b21b8(0x123)](_0x1a782c);}};async function changeStatus(_0x388aad,_0x53ffc2){const _0x115960=_0xf1744b;if(i>=_0x53ffc2['presence_config'][_0x115960(0x166)])i=0x0;await _0x388aad[_0x115960(0x13b)]['setPresence']({'activity':{'name':_0x53ffc2[_0x115960(0x15d)][i][_0x115960(0x14b)],'type':_0x53ffc2[_0x115960(0x15d)][i][_0x115960(0x126)]},'status':_0x53ffc2['presence_config'][i][_0x115960(0x158)]}),i++,setTimeout(()=>{changeStatus(_0x388aad,_0x53ffc2);},0x2710);};