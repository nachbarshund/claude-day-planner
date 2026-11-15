window.addEventListener("error",function(e){var a=document.getElementById("app");if(a)a.insertAdjacentHTML("afterbegin","<pre style=\"color:#e05555;font-size:12px;white-space:pre-wrap\">JS-Fehler: "+e.message+" (Zeile "+e.lineno+")</pre>");});
(function(){
var css='.ay{background:#e3f6e6;border:1.5px solid #2e9e4f;border-left:6px solid #2e9e4f;border-radius:14px;padding:12px 14px;margin:0 0 12px;color:#0f3d1c;font-size:15px;font-weight:600}@media(prefers-color-scheme:dark){.ay{background:#14301c;border-color:#4cc76f;color:#d8f7e0}}.ay b{display:block;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}'
+'.r{padding:14px 0;border-top:.5px solid var(--border)}.r.off{opacity:.45}.r.sub{padding:10px 0 10px 18px}'
+'.top{display:flex;gap:10px;align-items:flex-start}.top input{width:20px;height:20px;margin:4px 0 0;flex:none}'
+'.t{font-size:18px;font-weight:500;margin:0;line-height:1.35}.sub .t{font-size:16px}.d,.g{font-size:13px;color:var(--text-secondary);margin:4px 0 0;line-height:1.45}'
+'.f{display:flex;flex-direction:column;gap:8px;margin:12px 0 0 30px}.fl{display:flex;align-items:center;gap:10px}.fl span{width:28px;text-align:center;font-size:20px;flex:none}'
+'.fx{flex:1;min-width:0;width:100%;height:48px;min-height:48px;max-height:48px;box-sizing:border-box;padding:0 12px;margin:0;font-size:16px;line-height:normal;text-align:left;color:var(--text-primary,inherit);background-color:var(--bg-secondary,rgba(128,128,128,.12));border:.5px solid var(--border);border-radius:10px;-webkit-appearance:none;appearance:none;display:flex;align-items:center;overflow:hidden}'
+'select.fx{display:block;padding:0 34px 0 12px;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'16\' viewBox=\'0 0 12 16\'%3E%3Cpath d=\'M2 6l4-4 4 4M2 10l4 4 4-4\' fill=\'none\' stroke=\'%23999\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center}'
+'input.fx[type=text]{display:block}input.fx::-webkit-date-and-time-value{text-align:left;margin:0;min-height:0;line-height:normal}input.fx::-webkit-datetime-edit{padding:0;display:flex;align-items:center}'
+'.fl .dr{flex:none;width:auto;min-width:84px;text-align:left;font-size:14px;color:var(--text-secondary);white-space:nowrap}'
+'.h{font-size:12px;color:var(--text-muted);margin:8px 0 0 30px;line-height:1.45}.bt{display:flex;gap:8px;margin-top:12px}.bt button{flex:1;min-height:44px}'
+'.bg{display:inline-block;font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:3px 10px;border-radius:999px;color:var(--c);background:color-mix(in srgb,var(--c) 16%,transparent);margin:0 0 6px}.t.del{text-decoration:line-through;opacity:.6}'
+'.vn{margin:10px 0 0 30px;border:.5px solid var(--border);border-radius:12px;overflow:hidden}.vn div{display:flex;gap:10px;padding:10px 12px;font-size:15px;line-height:1.35;align-items:baseline}.vn div+div{border-top:.5px solid var(--border)}.vn i{font-style:normal;flex:none;width:66px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--text-secondary)}.vn b{font-weight:600}.vn .fr b{font-weight:400;text-decoration:line-through;opacity:.6}.vn .to b{color:#2e9e4f}.vn span{color:var(--text-secondary)}'
+'.uk{margin:10px 0 0 30px;padding:10px 12px;border-radius:12px;border:.5px solid #ba7517;border-left:4px solid #ba7517;background:#faeeda;color:#633806;font-size:14px;line-height:1.45}.uk b{display:block;font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin-bottom:2px}@media(prefers-color-scheme:dark){.uk{background:#33260f;border-color:#ef9f27;color:#fac775}.vn .to b{color:#4cc76f}}'
+'.wn{margin:12px 0 0;padding:10px 14px;border-radius:12px;border:.5px solid #ba7517;border-left:4px solid #ba7517;background:#faeeda;color:#633806;font-size:13px;line-height:1.5}.wn b{display:block;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:2px}@media(prefers-color-scheme:dark){.wn{background:#33260f;border-color:#ef9f27;color:#fac775}}';
var s=document.createElement("style");s.textContent=css;document.head.appendChild(s);
var $=function(i){return document.getElementById(i)};
var MD=window.MODE||"todo",PR=window.PRJ||(window.MODE?null:["📥 Inbox","☘️ Allgemein","🚗 Auto","🏡 Haus / Allgemein","🏊 Haus / Garten","🪣 Haushalt","💻 MacBook Pro","📱 iPhone","📲 iPad","⌚ Apple Watch","⚽️ U9 / F-Jugend","👦🏼 Mino","👦🏼 Nevio","👩🏻‍💼 Schatz","📺 Anschauen","📖 Lesen","🛍 Einkaufsliste","🛍 Einkaufsliste / DM","🛍 Einkaufsliste / Apotheke","🛍 Einkaufsliste / IKEA","🛍 Einkaufsliste / Action","🛍 Einkaufsliste / Metzger Spirkl"]),VB=window.VERB||"Anlegen",HD=window.HEAD||"Tasks prüfen und bestätigen",NA=MD=="todo"?" Tasks":" Einträge";
$("app").innerHTML='<div class="ay"><b>👉 Aktion erforderlich</b>'+HD+'</div><div id="hd" class="g"></div><div id="L"></div><div id="K"></div><div class="fl" style="margin-top:12px"><span>📝</span><input class="fx" id="gc" placeholder="Kommentar für alle"></div><div id="W"></div><p class="g" id="S"></p><div class="bt"><button onclick="go(1)">✅ '+VB+' ↗</button><button onclick="go(0)">✏️ Verbessern ↗</button></div>';
var Q=[["P1","🔴 P1"],["P2","🟠 P2"],["P3","🔵 P3"],["P4","⚪️ P4"]],U=["2m","5m","10m","15m","20m","30m","45m","1h","2h"],W=["So","Mo","Di","Mi","Do","Fr","Sa"];
var SK=window.SKIP||[],DL=window.DEL||0;
function lab(v){if(!v||v=="ohne")return "ohne Datum";var d=new Date(v+"T12:00");return W[d.getDay()]+" "+d.getDate()+"."+(d.getMonth()+1)+"."}
function sb(t){return t[0].indexOf("↳")==0}
T.forEach(function(t){if(t[4]&&U.indexOf(t[4])<0)U.push(t[4])});
function ea(x){return String(x).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}
function sel(e,id,a,v){return '<div class="fl"><span>'+e+'</span><select class="fx" id="'+id+'" onchange="calc()">'+a.map(function(o){o=typeof o=="string"?[o,o]:o;return '<option value="'+o[0]+'"'+(o[0]==v?' selected':'')+'>'+o[1]+'</option>'}).join('')+'</select></div>'}
var IB="📥 Inbox";
function pa(t){var r=[],a=[t[7]||IB].concat(t[8]||[],[IB],PR||[]);a.forEach(function(x){if(r.indexOf(x)<0)r.push(x)});return r}
function pf(t,i){return sel("📁","j"+i,pa(t),t[7]||IB)}
var on=T.map(function(){return 1});
var AC={"NEU":["🆕","Neu","#2e9e4f"],"VERSCHOBEN":["🔀","Verschoben","#378add"],"ÄNDERN":["✏️","Geändert","#ba7517"],"LÖSCHEN":["🗑️","Löschen","#e05555"]};
function uk(h){return /^unklar/i.test(h||"")}
function hn(h){if(!h)return"";return uk(h)?'<div class="uk"><b>❓ Unklar</b>'+h.replace(/^unklar:?\s*/i,"")+'</div>':'<p class="h">💡 '+h+'</p>'}
$("L").innerHTML=T.map(function(t,i){var v=t[3]=="ohne"?"":t[3],b=sb(t),fs,x=MD=="cal"&&t[7],a=x&&AC[x.a],hd='<p class="t">'+t[0]+'</p><p class="d">'+t[1]+'</p>',ex="";
if(MD=="cal"){fs=x&&(x.a=="VERSCHOBEN"||x.a=="LÖSCHEN")?'<input type="hidden" id="n'+i+'" value="'+ea(t[2])+'">':'<div class="fl"><span>✏️</span><input class="fx" type="text" id="n'+i+'" value="'+ea(t[2])+'"></div>';
if(x){hd=(a?'<span class="bg" style="--c:'+a[2]+'">'+a[0]+' '+a[1]+'</span>':'')+'<p class="t'+(x.a=="LÖSCHEN"?' del':'')+'">'+(t[0]=="Neu"?t[2]:t[0])+'</p>';
ex='<div class="vn">'+(x.von?'<div'+(x.nach?' class="fr"':'')+'><i>'+(x.nach?'Von':'Wann')+'</i><b>'+x.von+'</b></div>':'')+(x.nach?'<div class="to"><i>Nach</i><b>'+x.nach+'</b></div>':'')+(x.kal?'<div><i>Kalender</i><span>'+x.kal+'</span></div>':'')+(x.ort?'<div><i>Ort</i><span>'+x.ort+'</span></div>':'')+'</div>'}}
else if(MD=="meal")fs=sel("🍽️","n"+i,t[2],t[2][0]);else fs=(PR&&!b?pf(t,i):"")+(MD=="dur"?"":sel("🚦","q"+i,Q,t[2])+(b?"":'<div class="fl"><span>📅</span><input class="fx" type="date" id="d'+i+'" value="'+v+'" onchange="calc();rl('+i+')"><span class="dr" id="dr'+i+'"></span></div>'))+sel("⏱️","u"+i,U,t[4]);
return '<div class="r'+(b?' sub':'')+'" id="r'+i+'"><div class="top"><input type="checkbox" checked onchange="tg('+i+',this.checked)"><div>'+hd+'</div></div>'+ex+(uk(t[5])?hn(t[5]):'')+'<div class="f">'+fs+'<div class="fl"><span>💬</span><input class="fx" type="text" id="c'+i+'" placeholder="Kommentar oder Änderung"></div></div>'+(uk(t[5])?'':hn(t[5]))+'</div>'}).join("");
if(SK.length)$("K").innerHTML='<p class="g">🗑️ Nicht angelegt, Reminder wird gelöscht ('+SK.length+'): '+SK.join(" · ")+'</p>';
window.rl=function(i){var e=$("dr"+i),v=$("d"+i).value;if(!e)return;if(!v){e.textContent="";return}var n=new Date(),z=new Date(n.getFullYear(),n.getMonth(),n.getDate()),d=Math.round((new Date(v+"T12:00")-z)/864e5-.5);e.textContent="("+(d==0?"heute":d==1?"morgen":d==2?"übermorgen":d==-1?"gestern":W[new Date(v+"T12:00").getDay()])+")"};
T.forEach(function(t,i){if(MD=="todo"&&!sb(t))rl(i)});
window.tg=function(i,v){on[i]=v?1:0;$("r"+i).classList.toggle("off",!v);if(sb(T[i]))sy();calc()};
window.all=function(v){T.forEach(function(t,i){tg(i,v);$("r"+i).querySelector("input").checked=v})};
function mn(v){var m=/^(?:(\d+)h)?(?:(\d+)m)?$/.exec(v||"");return m?(+m[1]||0)*60+(+m[2]||0):0}
function fm(m){return m>=60?Math.floor(m/60)+"h"+(m%60?" "+m%60+"m":""):m+"m"}
var BG={P1:60,P2:90,P3:120,P4:90};
function fd(m){return m>=60?Math.floor(m/60)+"h"+(m%60?m%60+"m":""):m+"m"}
window.sy=function(){if(MD!="todo")return;var p=-1,s={};T.forEach(function(t,i){if(!sb(t)){p=i}else if(p>=0){s[p]=(s[p]||0)+(on[i]?mn($("u"+i).value):0)}});for(var k in s){var e=$("u"+k);if(!e)continue;var v=fd(s[k]);if(![].some.call(e.options,function(o){return o.value==v})){var o=document.createElement("option");o.value=v;o.textContent=v;e.appendChild(o)}e.value=v}};
T.forEach(function(t,i){var e=sb(t)&&$("u"+i);if(e)e.addEventListener("change",function(){sy();calc()})});
window.calc=function(){var n=0,by={},w=[];T.forEach(function(t,i){if(!on[i])return;n++;var d=$("d"+i);if(!d||!d.value)return;var q=$("q"+i).value;by[d.value]=by[d.value]||{};by[d.value][q]=(by[d.value][q]||0)+mn($("u"+i).value)});
for(var d in by)for(var q in BG)if(by[d][q]>BG[q])w.push('<br>'+lab(d)+' · '+q+': '+fm(by[d][q])+' von '+fm(BG[q]));
$("hd").innerHTML=n+NA+' · <a href="#" onclick="all(1);return false">alle</a> / <a href="#" onclick="all(0);return false">keine</a>';
$("W").innerHTML=w.length?'<div class="wn"><b>⚠️ Tagesbudget überschritten</b>Zeit pro Priorität, nur diese Tasks:'+w.join("")+'</div>':"";
$("S").textContent=DL?"🗑️ "+DL+" Reminders werden gelöscht":""};
sy();calc();
window.go=function(m){var l=T.map(function(t,i){var n=i+1+": ",id=t[6]?t[6]+" | ":"",c=$("c"+i).value.trim(),k=c?" | Kommentar: "+c:"";if(!on[i])return n+id+t[0]+" | nicht übernehmen";
if(MD=="cal"){var x=t[7];return n+id+t[0]+" → "+$("n"+i).value.trim()+(x?" | "+x.a+(x.von?": "+x.von:"")+(x.nach?" → "+x.nach:""):"")+k}if(MD=="meal")return n+id+t[0]+" → "+$("n"+i).value+k;
var j=$("j"+i);return n+id+t[0]+(MD=="dur"?"":" | "+$("q"+i).value+" | "+(sb(t)?"ohne":$("d"+i).value||"ohne"))+" | "+$("u"+i).value+(j?" | Projekt: "+j.value:"")+k}),g=$("gc").value.trim();
sendPrompt((m?VB:"Verbessern")+" mit folgenden Einstellungen:\n"+l.join("\n")+(g?"\nKommentar für alle: "+g:""))};
})();
