const _0x2a50=['1215219pVwhjp','startsWith','A\x20command.','yourserverid','log','guild','close','then','member','Please\x20confirm\x20that\x20you\x20wish\x20to\x20close\x20this\x20ticket.','complete','1385758yrKhFB','debugmode','includes','569322ljypHw','send','bot','1838428DolpAx','ticket-','enabled','ticketclose','1306314Dxwnqg','first','cache','1347854yAytWX','25m','react','delete','permissions_config','This\x20command\x20can\x20only\x20be\x20ran\x20inside\x20of\x20the\x20main\x20server.','main_config','599813cvZmEk','catch','channel','emoji','ticketmanagers','This\x20channel\x20is\x20not\x20a\x20ticket.','name','This\x20module\x20is\x20disabled,\x20please\x20ask\x20the\x20owner\x20to\x20enable\x20it!','You\x20don\x27t\x20have\x20permission\x20to\x20run\x20this\x20command...','some'];const _0x2d8c=function(_0x4513bb,_0x1e0290){_0x4513bb=_0x4513bb-0x17c;let _0x2a50f8=_0x2a50[_0x4513bb];return _0x2a50f8;};const _0x4a1925=_0x2d8c;(function(_0x439d67,_0x3c8482){const _0x1ce39f=_0x2d8c;while(!![]){try{const _0x39a176=parseInt(_0x1ce39f(0x197))+parseInt(_0x1ce39f(0x1a4))+-parseInt(_0x1ce39f(0x19a))+-parseInt(_0x1ce39f(0x18c))+-parseInt(_0x1ce39f(0x1a1))+-parseInt(_0x1ce39f(0x182))+parseInt(_0x1ce39f(0x19d));if(_0x39a176===_0x3c8482)break;else _0x439d67['push'](_0x439d67['shift']());}catch(_0x5c791e){_0x439d67['push'](_0x439d67['shift']());}}}(_0x2a50,0xd72dc));const ms=require('ms');module['exports']={'name':_0x4a1925(0x1a0),'description':_0x4a1925(0x18e),'aliases':[_0x4a1925(0x196),_0x4a1925(0x17e),_0x4a1925(0x192)],async 'execute'(_0xe1472e,_0xfb2587,_0x180acf,_0x5067f9,_0x3988e5,_0x116308){const _0x447ef2=_0x4a1925;if(_0xfb2587[_0x447ef2(0x191)]['id']===_0x3988e5[_0x447ef2(0x181)][_0x447ef2(0x18f)]){if(_0x3988e5['tickets_config'][_0x447ef2(0x19f)]){const _0x9c9aec=_0x3988e5[_0x447ef2(0x17f)][_0x447ef2(0x186)];if(_0xfb2587[_0x447ef2(0x194)]['roles'][_0x447ef2(0x1a3)][_0x447ef2(0x18b)](_0x1a0429=>_0x9c9aec[_0x447ef2(0x199)](_0x1a0429['id']))){if(!_0xfb2587[_0x447ef2(0x184)][_0x447ef2(0x188)][_0x447ef2(0x18d)](_0x447ef2(0x19e)))return _0xfb2587[_0x447ef2(0x184)][_0x447ef2(0x19b)](_0x447ef2(0x187))[_0x447ef2(0x193)](_0x21a5aa=>_0x21a5aa['delete']({'timeout':0x2710}))[_0x447ef2(0x183)](_0xcfc54e=>{const _0x2acaee=_0x447ef2;if(_0x3988e5[_0x2acaee(0x181)][_0x2acaee(0x198)])return console['log'](_0xcfc54e);});_0xfb2587[_0x447ef2(0x184)]['send'](_0x447ef2(0x195))[_0x447ef2(0x193)](_0x6364c8=>{const _0x266b48=_0x447ef2;_0x6364c8[_0x266b48(0x17d)]('✅')[_0x266b48(0x193)](()=>_0x6364c8[_0x266b48(0x17d)]('❌'));const _0x5132ea=(_0x1cfb02,_0x2f9dcd)=>{const _0x3eacbf=_0x266b48;return['✅','❌'][_0x3eacbf(0x199)](_0x1cfb02['emoji'][_0x3eacbf(0x188)])&&_0x2f9dcd[_0x3eacbf(0x19c)]==![];};_0x6364c8['awaitReactions'](_0x5132ea,{'max':0x1,'time':ms(_0x266b48(0x17c))})[_0x266b48(0x193)](_0x3b5743=>{const _0x3d74d0=_0x266b48,_0x29e6bf=_0x3b5743[_0x3d74d0(0x1a2)]();_0x29e6bf[_0x3d74d0(0x185)][_0x3d74d0(0x188)]==='✅'&&(_0xfb2587['channel']['send']('Ticket\x20successfully\x20closed!\x20(Please\x20wait)'),setTimeout(()=>{const _0x1d30bd=_0x3d74d0;_0xfb2587['channel'][_0x1d30bd(0x17e)]();},0x1f40));if(_0x29e6bf[_0x3d74d0(0x185)][_0x3d74d0(0x188)]==='❌')return _0xfb2587[_0x3d74d0(0x184)][_0x3d74d0(0x19b)]('Cancelling\x20ticket\x20close\x20process.')[_0x3d74d0(0x193)](_0x41d82e=>_0x41d82e[_0x3d74d0(0x17e)]({'timeout':0x2710}))['catch'](_0x5e53f3=>{const _0x3967f8=_0x3d74d0;if(_0x3988e5[_0x3967f8(0x181)]['debugmode'])return console[_0x3967f8(0x190)](_0x5e53f3);});});})[_0x447ef2(0x183)](_0x54ff4f=>{const _0x44a1ed=_0x447ef2;if(_0x3988e5[_0x44a1ed(0x181)][_0x44a1ed(0x198)])return console[_0x44a1ed(0x190)](_0x54ff4f);});}else _0xfb2587[_0x447ef2(0x184)][_0x447ef2(0x19b)](_0x447ef2(0x18a))[_0x447ef2(0x193)](_0x146443=>_0x146443[_0x447ef2(0x17e)]({'timeout':0x2328}))[_0x447ef2(0x183)](_0x30438b=>{const _0x2cf76c=_0x447ef2;if(_0x3988e5[_0x2cf76c(0x181)][_0x2cf76c(0x198)])return console[_0x2cf76c(0x190)](_0x30438b);}),_0xfb2587[_0x447ef2(0x17e)]()[_0x447ef2(0x183)](_0x496268=>{const _0x718d9f=_0x447ef2;if(_0x3988e5['main_config'][_0x718d9f(0x198)])return console[_0x718d9f(0x190)](_0x496268);});}else _0xfb2587[_0x447ef2(0x184)]['send'](_0x447ef2(0x189))[_0x447ef2(0x193)](_0x1ebd93=>_0x1ebd93[_0x447ef2(0x17e)]({'timeout':0x2328}))[_0x447ef2(0x183)](_0x4efd64=>{const _0x500850=_0x447ef2;if(_0x3988e5[_0x500850(0x181)][_0x500850(0x198)])return console[_0x500850(0x190)](_0x4efd64);}),_0xfb2587['delete']()[_0x447ef2(0x183)](_0x10df54=>{const _0x552ad4=_0x447ef2;if(_0x3988e5[_0x552ad4(0x181)][_0x552ad4(0x198)])return console[_0x552ad4(0x190)](_0x10df54);});}else _0xfb2587[_0x447ef2(0x184)][_0x447ef2(0x19b)](_0x447ef2(0x180))['then'](_0x2de42a=>_0x2de42a['delete']({'timeout':0x2328}))[_0x447ef2(0x183)](_0x5a5ab0=>{const _0x39fd2c=_0x447ef2;if(_0x3988e5[_0x39fd2c(0x181)][_0x39fd2c(0x198)])return console[_0x39fd2c(0x190)](_0x5a5ab0);}),_0xfb2587['delete']()['catch'](_0x4b854c=>{const _0x7e275e=_0x447ef2;if(_0x3988e5[_0x7e275e(0x181)][_0x7e275e(0x198)])return console['log'](_0x4b854c);});}};