(function(){var A=window.AU,P=document.body.dataset.p||'home',$=function(s,e){return(e||document).querySelector(s)};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})},li=function(x){return'<li>'+esc(x)+'</li>'};
window.U={has:function(k){return!!A[k]},wa:function(t){return A.wa?'https://wa.me/'+A.wa+'?text='+encodeURIComponent(t):'index.html#contacto'},q:function(k){return new URLSearchParams(location.search).get(k)},
m:function(id){id=(id||'').toLowerCase();return A.modelos.filter(function(m){return m.k===id||m.id.toLowerCase()===id})[0]},pr:function(m){return m.precio||'Precio a consultar'}};
/* ===== dibujo del módulo (SVG): hero y configurador ===== */

window.houseSVG=function(o){var n=o.id||(window._hs=(window._hs||0)+1),W=o.W||150+o.m2*3,x=300-W/2,y=250,t=164,i=0,
p=function(min,c,max){i++;return'<g class="p'+(o.sc?'':' on')+'" data-min="'+min+'"'+(max?' data-max="'+max+'"':'')+' style="--d:'+(i*.16).toFixed(2)+'s">'+c+'</g>'},
s='<svg class="hs'+(o.anim?' a':'')+(o.sc?' sc':'')+'" viewBox="30 72 540 192" role="img" aria-label="'+(o.label||'Dibujo del módulo')+'"><defs><pattern id="rb'+n+'" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" style="fill:var(--wall,#1d1d1d)"/><rect x="6" width="3" height="10" style="fill:var(--wall2,#2f2f2f)"/></pattern><pattern id="wd'+n+'" width="7" height="10" patternUnits="userSpaceOnUse"><rect width="7" height="10" fill="#9a6633"/><rect x="5" width="2" height="10" fill="#6e4723"/></pattern><linearGradient id="gl'+n+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe3a3"/><stop offset="1" stop-color="#f2a01e"/></linearGradient><linearGradient id="gk'+n+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--gk1,#1d2535)"/><stop offset="1" style="stop-color:var(--gk2,#0f141d)"/></linearGradient></defs>';
s+=o.hero?'':p(0,'<ellipse cx="300" cy="254" rx="'+(W/2+90)+'" ry="7" fill="rgba(0,0,0,.55)"/><line x1="0" x2="600" y1="250" y2="250" stroke="rgba(245,242,236,.22)" stroke-width="1.5"/>');
if(o.bp||o.sc)s+=p(1,'<rect x="'+x+'" y="'+t+'" width="'+W+'" height="86" fill="rgba(242,160,30,.06)" stroke="#C58A55" stroke-width="1.5" stroke-dasharray="6 5"/><line x1="'+x+'" x2="'+(x+W)+'" y1="'+(t-22)+'" y2="'+(t-22)+'" stroke="#C58A55"/><line x1="'+x+'" x2="'+x+'" y1="'+(t-28)+'" y2="'+(t-16)+'" stroke="#C58A55"/><line x1="'+(x+W)+'" x2="'+(x+W)+'" y1="'+(t-28)+'" y2="'+(t-16)+'" stroke="#C58A55"/><text x="300" y="'+(t-30)+'" text-anchor="middle" fill="#C58A55" font-size="13" font-family="Montserrat,sans-serif">'+(o.m2?o.m2+' m²':'Elegí un módulo')+'</text>',o.sc?3:0);
if(o.bp)return s+'</svg>';
var kk=o.k||(function(){var b='n16',d=1e9;[['n16',152],['n22',209],['n28',266],['n30',331],['n40',452]].forEach(function(a){var q=Math.abs(a[1]-W);if(q<d){d=q;b=a[0]}});return b})(),
SP={n16:{e:[.2,.82,.06,.84],f:[],dk:'e'},n22:{e:[.2,.82,.06,.84],f:[],dk:'e'},n28:{e:[.1,.86,.06,.84],f:[],dk:'e'},n30:{e:0,f:[[.32,.54,.06,.84],[.72,.85,.06,.84]],dk:'f'},n40:{e:0,f:[[.14,.24,.06,.84],[.365,.465,.06,.84],[.565,.64,.06,.84]],dk:'f'}}[kk],
ip=function(a,v){if(v<=a[0][0])return a[0][1];for(var j=1;j<a.length;j++)if(v<=a[j][0])return a[j-1][1]+(a[j][1]-a[j-1][1])*(v-a[j-1][0])/(a[j][0]-a[j-1][0]);return a[a.length-1][1]},
th=ip([[152,50],[209,45],[266,38],[331,22],[452,14]],W)*Math.PI/180,D=ip([[152,152],[266,152],[331,129],[452,129]],W),
c=Math.cos(th),sn=Math.sin(th),sf=.16,L=W,Hw=86,rh=26,ov=7,dr=rh*ov/(D/2),x0=300-(L*c+D*sn)/2+D*sn,
PA=function(l,w,h){return[x0+l*c-w*sn,250-h-sf*(l*sn+w*c)]},
P=function(l,w,h){var a=PA(l,w,h);return a[0].toFixed(1)+' '+a[1].toFixed(1)},
Q=function(a){return'M'+a.map(function(q){return P(q[0],q[1],q[2])}).join('L')+'Z'},
wd=o.wood||o.cfg,wo='style="opacity:var(--wood,1)"';
if(o.deck||o.cfg){var dd=40,e1=SP.dk==='e';
s+=p(5,'<path d="'+Q(e1?[[-dd,0,0],[0,0,0],[0,D,0],[-dd,D,0]]:[[-6,-dd,0],[L+6,-dd,0],[L+6,0,0],[-6,0,0]])+'" fill="#7a5530" style="opacity:var(--deck,1)"/><path d="'+Q(e1?[[-dd,0,0],[-dd,D,0],[-dd,D,-6],[-dd,0,-6]]:[[-6,-dd,0],[L+6,-dd,0],[L+6,-dd,-6],[-6,-dd,-6]])+'" fill="#4d3419" style="opacity:var(--deck,1)"/>')}
var Fr=Q([[0,0,0],[L,0,0],[L,0,Hw],[0,0,Hw]]),En=Q([[0,0,0],[0,D,0],[0,D,Hw],[0,0,Hw]]),Ga=Q([[0,0,Hw],[0,D,Hw],[0,D/2,Hw+rh]]),sk=' stroke="rgba(245,242,236,.38)" stroke-width="1.3" stroke-linejoin="round"';
s+=p(3,'<path d="'+Fr+'" fill="url(#rb'+n+')"'+sk+'/><path d="'+En+'" fill="url(#rb'+n+')"'+sk+'/><path d="'+Ga+'" fill="url(#rb'+n+')"'+sk+'/>'+(wd?'<path d="'+En+'" fill="url(#wd'+n+')" '+wo+'/><path d="'+Ga+'" fill="url(#wd'+n+')" '+wo+'/>':'')+'<path d="'+En+'" fill="rgba(0,0,0,.26)"/><path d="'+Ga+'" fill="rgba(0,0,0,.26)"/>');
s+=p(3,'<path d="'+Q([[-8,-ov,Hw-dr],[L+8,-ov,Hw-dr],[L+8,D/2,Hw+rh],[-8,D/2,Hw+rh]])+'" style="fill:var(--roof,#101010)" stroke="rgba(245,242,236,.32)" stroke-width="1.4" stroke-linejoin="round"/><path d="M'+P(-8,-ov,Hw-dr)+'L'+P(-8,D/2,Hw+rh)+'L'+P(-8,D+ov,Hw-dr)+'" fill="none" stroke="rgba(245,242,236,.3)" stroke-width="5.5" stroke-linejoin="round"/><path d="M'+P(-8,-ov,Hw-dr)+'L'+P(-8,D/2,Hw+rh)+'L'+P(-8,D+ov,Hw-dr)+'" fill="none" style="stroke:var(--roof,#101010)" stroke-width="4" stroke-linejoin="round"/>');
var wn=function(f){var h='',op=function(a,m){return'<path d="'+Q(a)+'" fill="'+f+'" style="stroke:var(--frame,#0b0b0b)" stroke-width="2.6" stroke-linejoin="round"/><path d="M'+P(m[0],m[1],m[2])+'L'+P(m[3],m[4],m[5])+'" style="stroke:var(--frame,#0b0b0b)" stroke-width="2.6"/>'};
if(SP.e){var q=SP.e,a=q[0]*D,b=q[1]*D,h0=q[2]*Hw,h1=q[3]*Hw,m=(a+b)/2;h+=op([[0,a,h0],[0,b,h0],[0,b,h1],[0,a,h1]],[0,m,h0,0,m,h1])}
SP.f.forEach(function(q){var a=q[0]*L,b=q[1]*L,h0=q[2]*Hw,h1=q[3]*Hw,m=(a+b)/2;h+=op([[a,0,h0],[b,0,h0],[b,0,h1],[a,0,h1]],[m,0,h0,m,0,h1])});return h},
l1=PA(L*.25,0,Hw-15),l2=PA(L*.75,0,Hw-15);
s+=p(4,'<g class="wb">'+wn('url(#gk'+n+')')+'</g><g class="gl">'+wn('url(#gl'+n+')')+'</g><g class="lm"><circle cx="'+l1[0].toFixed(1)+'" cy="'+l1[1].toFixed(1)+'" r="2.6" fill="#ffe9a8"/><circle cx="'+l2[0].toFixed(1)+'" cy="'+l2[1].toFixed(1)+'" r="2.6" fill="#ffe9a8"/></g><g class="lh"><circle cx="'+l1[0].toFixed(1)+'" cy="'+l1[1].toFixed(1)+'" r="14" fill="rgba(242,160,30,.16)"/><circle cx="'+l2[0].toFixed(1)+'" cy="'+l2[1].toFixed(1)+'" r="14" fill="rgba(242,160,30,.16)"/></g>');
return s+'</svg>'};

/* header + footer compartidos */
var WAI='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>';
var cts=function(){var h='<span>Contacto</span>';
h+=A.wa?'<a href="tel:+'+esc(A.wa)+'">'+esc(A.tel||('+'+A.wa))+'</a>':'<p class="todo">Teléfono: por completar</p>';
h+=A.mail?'<a href="mailto:'+esc(A.mail)+'">'+esc(A.mail)+'</a>':'<p class="todo">Mail: por completar</p>';
h+=A.ig?'<a href="'+esc(A.ig)+'" target="_blank" rel="noopener">Instagram</a>':'<p class="todo">Instagram: por completar</p>';
h+=A.ubic?'<p>'+esc(A.ubic)+'</p>':'<p class="todo">Ubicación: por completar</p>';return h};
var BR='<a class="brand" href="index.html" aria-label="Aura Arq Modular"><img src="img/logo.png" alt="Aura Arq Modular" width="900" height="745"></a>';
$('#hd').outerHTML='<header class="top"><div class="wrap">'+BR+'<button class="burger" aria-expanded="false" aria-controls="menu" aria-label="Abrir menú"><i></i><i></i></button><nav id="menu" aria-label="Principal"><a href="index.html#modelos">Modelos</a><a href="index.html#construccion">Construcción</a><a href="index.html#proceso">Proceso</a><a href="comparar.html">Comparar</a><a href="calculadora.html">Calculadora</a><a href="index.html#contacto">Contacto</a><a class="btn s" href="configurador.html">Configurar mi módulo</a></nav></div></header>';
$('#ft').outerHTML='<footer><div class="wrap ftg"><div class="fb">'+BR+'<p>Módulos habitacionales listos para instalar y disfrutar.</p><a class="btn s" data-ev="footer-configurar" href="configurador.html">Configurar mi módulo</a></div><div class="fc"><span>Explorá</span><a href="index.html#modelos">Modelos</a><a href="index.html#construccion">Construcción</a><a href="index.html#proceso">Proceso</a><a href="index.html#faq">Preguntas frecuentes</a><a href="comparar.html">Comparar modelos</a><a href="index.html#contacto">Contacto</a></div><div class="fc"><span>Herramientas</span><a href="configurador.html">Configurar mi módulo</a><a href="comparar.html">Comparador</a><a href="calculadora.html">Calculadora</a></div><div class="fc ct">'+cts()+'</div><div class="f-bot"><p>© 2026 Aura Arq Modular. Todos los derechos reservados.</p><a href="#">Volver arriba ↑</a></div></div></footer><a class="wa" data-ev="whatsapp" href="'+U.wa('Hola, quiero consultar por un módulo')+'" target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp">'+WAI+'</a>';

var b=$('.burger'),n=$('#menu'),setM=function(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú')};b.onclick=function(){setM(!n.classList.contains('open'))};n.onclick=function(e){if(e.target.closest('a'))setM(false)};addEventListener('click',function(e){if(n.classList.contains('open')&&!n.contains(e.target)&&!b.contains(e.target))setM(false)});addEventListener('keydown',function(e){if(e.key==='Escape')setM(false)});matchMedia('(min-width:1061px)').addEventListener('change',function(e){if(e.matches)setM(false)});
var pr=document.createElement('div');pr.className='prog';document.body.prepend(pr);var t=$('.top');addEventListener('scroll',function(){t.classList.toggle('sc',scrollY>20);pr.style.transform='scaleX('+Math.min(1,scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight))+')'},{passive:true});
window.reveal=function(){var r=document.querySelectorAll('.rv:not(.in)');if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});r.forEach(function(x){io.observe(x)})}else r.forEach(function(x){x.classList.add('in')})};
/* ===== dibujo único de los módulos (medidas reales del PDF): lo usan el hero y el configurador ===== */
window.AUH=(function(){var KX=.2,KY=.04,FL=.4,WH=2.45,EV=FL+WH,
q3=function(x,y,z){z=z||0;return(x+z*KX).toFixed(3)+' '+(-(y+z*KY)).toFixed(3)},
qp=function(a){return'M'+a.map(function(p){return q3(p[0],p[1],p[2])}).join('L')+'Z'},
fl=function(a,f,x){return'<path d="'+qp(a)+'" '+(f.indexOf('var(')===0?'style="fill:'+f+'"':'fill="'+f+'"')+(x||'')+'/>'},
ln=function(a,b,c,w){return'<path d="M'+a+'L'+b+'" fill="none" stroke="'+c+'" stroke-width="'+(w||1)+'" vector-effect="non-scaling-stroke"/>'},
SK=' stroke="rgba(245,242,236,.3)" stroke-width="1.1" stroke-linejoin="round" vector-effect="non-scaling-stroke"',
/* medidas reales de cada módulo (PDF): frente = pared de entrada. N16/N22/N28 entran por el testero (4,00 m, techo a dos aguas de frente); N30/N40 por el lado largo */
HM={n16:{W:4,D:4,g:1,wood:1,ws:1,o:[[-1.1,1.1,'b']]},
n22:{W:4,D:5.5,g:1,wood:1,ws:1,o:[[-1.1,1.1,'s']]},
n28:{W:4,D:7,g:1,o:[[-1.5,1.5,'s']]},
n30:{W:8.7,D:3.4,sx:-1.2,o:[[-2.35,.05,'s'],[2.25,3.85,'b']],sw:[[.4,1.1]]},
n40:{W:11.9,D:3.4,sx:0,o:[[-5.45,-3.45,'b'],[-1.95,.65,'s'],[3.45,5.45,'b']],sw:[[1.85,2.45]]}},
DEFS='<defs><pattern id="hrb" width=".17" height=".5" patternUnits="userSpaceOnUse"><rect width=".17" height=".5" style="fill:var(--wall,#161616)"/><rect x=".105" width=".045" height=".5" style="fill:var(--wall2,#262626)"/></pattern><pattern id="hwd" width=".13" height=".5" patternUnits="userSpaceOnUse"><rect width=".13" height=".5" style="fill:var(--w1,#8a5a2e)"/><rect x=".095" width=".035" height=".5" style="fill:var(--w2,#4d2f15)"/></pattern><pattern id="hiw" width=".12" height=".5" patternUnits="userSpaceOnUse"><rect x=".095" width=".02" height=".5" fill="#6e320a" fill-opacity=".3"/></pattern><linearGradient id="hgk" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--gk1,#1d2535)"/><stop offset="1" style="stop-color:var(--gk2,#0f141d)"/></linearGradient><linearGradient id="hgw" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe3a3"/><stop offset="1" stop-color="#f2a01e"/></linearGradient><radialGradient id="hhl"><stop offset="0" stop-color="#ffe2a0" stop-opacity=".42"/><stop offset="1" stop-color="#ffe2a0" stop-opacity="0"/></radialGradient><radialGradient id="hpool"><stop offset="0" stop-color="#ffc46e" stop-opacity=".6"/><stop offset="1" stop-color="#ffc46e" stop-opacity="0"/></radialGradient></defs>',
/* abertura vidriada: vidrio que refleja el cielo + interior encendido (cálido) con mueble y lámpara colgante */
hwin=function(a,b,y0,y1,f){var i=.06,x0=a+i,x1=b-i,v0=y0+i,v1=y1-i,w=x1-x0,mx=(a+b)/2,rc=[[x0,v0],[x1,v0],[x1,v1],[x0,v1]],r='';
r+=fl([[a,y0],[b,y0],[b,y1],[a,y1]],'var(--frame,#0b0b0b)')+fl(rc,'url(#hgk)');
r+='<g class="gl">'+fl(rc,'url(#hgw)')+fl(rc,'url(#hiw)');
if(f==='s')r+=fl([[x0+w*.1,v0],[x0+w*.62,v0],[x0+w*.62,v0+.46],[x0+w*.1,v0+.46]],'rgba(58,24,4,.58)')+fl([[x0+w*.13,v0+.46],[x0+w*.59,v0+.46],[x0+w*.59,v0+.86],[x0+w*.13,v0+.86]],'rgba(58,24,4,.58)');
if(f==='b')r+=fl([[x0+w*.14,v0],[x0+w*.9,v0],[x0+w*.9,v0+.5],[x0+w*.14,v0+.5]],'rgba(58,24,4,.58)')+fl([[x0+w*.8,v0+.5],[x0+w*.9,v0+.5],[x0+w*.9,v0+1.05],[x0+w*.8,v0+1.05]],'rgba(58,24,4,.58)');
if(f!=='w'){var lx=x0+w*(f==='b'?.34:.74);r+=ln(lx.toFixed(3)+' '+(-v1).toFixed(3),lx.toFixed(3)+' '+(-(v1-.5)).toFixed(3),'rgba(60,24,4,.5)',1)+'<circle cx="'+lx.toFixed(3)+'" cy="'+(-(v1-.55)).toFixed(3)+'" r=".5" fill="url(#hhl)"/><circle cx="'+lx.toFixed(3)+'" cy="'+(-(v1-.55)).toFixed(3)+'" r=".07" fill="#fff6dc"/>'}
r+='</g>';
r+='<g class="rf">'+fl([[x0+w*.12,v0],[x0+w*.3,v0],[x0+w*.52,v1],[x0+w*.34,v1]],'rgba(255,255,255,.1)')+fl([[x0+w*.55,v0],[x0+w*.62,v0],[x0+w*.84,v1],[x0+w*.77,v1]],'rgba(255,255,255,.07)')+'</g>';
if(f!=='w')r+=fl([[mx-.035,y0],[mx+.035,y0],[mx+.035,y1],[mx-.035,y1]],'var(--frame,#0b0b0b)');
return r+fl([[a,y0],[b,y0],[b,y1],[a,y1]],'none',' style="stroke:var(--frame,#0b0b0b)" stroke-width=".07"')},
hbuild=function(k,opt){opt=opt||{};var m=HM[k],W=m.W,D=m.D,hw=W/2,g=!!m.g,ta=.46,tb=.24,ov=.3,oz=g?.35:.4,tf=.13,AP=EV+hw*ta,RD=EV+D/2*tb,DD=g?1.5:1.6,xL=-hw-.2,xR=hw+.2,
wf=(opt.wood==null?m.wood:opt.wood)?'url(#hwd)':'url(#hrb)',s='',z,i,lamp=function(x){return'<circle class="lh" cx="'+x.toFixed(3)+'" cy="'+(-(FL+1.95)).toFixed(3)+'" r=".95" fill="url(#hhl)"/><rect x="'+(x-.05).toFixed(3)+'" y="'+(-(FL+2.05)).toFixed(3)+'" width=".1" height=".2" fill="#0b0b0b"/><circle class="lm" cx="'+x.toFixed(3)+'" cy="'+(-(FL+1.9)).toFixed(3)+'" r=".055" fill="#fff0c0"/>'};
/* zócalo */
s+=fl([[-hw+.05,0],[hw-.05,0],[hw-.05,FL],[-hw+.05,FL]],opt.zc||'#090807')+fl([[hw-.05,0,.1],[hw-.05,0,D-.1],[hw-.05,FL,D-.1],[hw-.05,FL,.1]],opt.zs||'#060505');
/* pared lateral derecha (queda en sombra) */
var sw=g?[[hw,FL,0],[hw,FL,D],[hw,EV,D],[hw,EV,0]]:[[hw,FL,0],[hw,FL,D],[hw,EV,D],[hw,RD,D/2],[hw,EV,0]];
s+=fl(sw,'url(#hrb)',SK)+fl(sw,'rgba(0,0,0,.38)');
if(m.ws){var y0=FL+1.3,y1=FL+2,z0=D-1.5,z1=D-.8,wq=[[hw,y0,z0],[hw,y0,z1],[hw,y1,z1],[hw,y1,z0]];s+=fl(wq,'url(#hgk)')+'<g class="gl">'+fl(wq,'url(#hgw)')+'</g>'+fl(wq,'none',' style="stroke:var(--frame,#0b0b0b)" stroke-width=".05"')}
/* pared de entrada, de frente */
s+=fl(g?[[-hw,FL],[hw,FL],[hw,EV],[0,AP],[-hw,EV]]:[[-hw,FL],[hw,FL],[hw,EV],[-hw,EV]],wf,SK);
m.o.forEach(function(o){s+=hwin(o[0],o[1],FL+.04,FL+2.18,o[2])});
(m.sw||[]).forEach(function(o){s+=hwin(o[0],o[1],FL+1.5,FL+2.05,'w')});
/* techo */
if(g){var yE=EV-ov*ta;
s+=fl([[0,AP,-oz],[hw+ov,yE,-oz],[hw+ov,yE,D+oz],[0,AP,D+oz]],'var(--roof,#101010)',SK);
for(z=-oz+.4;z<D+oz-.1;z+=.42)s+=ln(q3(0,AP,z),q3(hw+ov,yE,z),'rgba(245,242,236,.1)',1);
s+=fl([[hw+ov,yE,-oz],[hw+ov,yE,D+oz],[hw+ov,yE-tf,D+oz],[hw+ov,yE-tf,-oz]],'var(--roof,#101010)',SK)+ln(q3(0,AP,-oz),q3(0,AP,D+oz),'rgba(245,242,236,.45)',1.6);
s+=fl([[-hw-ov,yE,-oz],[0,AP,-oz],[hw+ov,yE,-oz],[hw+ov,yE-tf,-oz],[0,AP-tf*1.15,-oz],[-hw-ov,yE-tf,-oz]],'var(--roof,#101010)',SK)}
else{var yF=EV-oz*tb;
s+=fl([[-hw-ov,yF,-oz],[hw+ov,yF,-oz],[hw+ov,RD,D/2],[-hw-ov,RD,D/2]],'var(--roof,#101010)',SK);
for(i=-hw-ov+.4;i<hw+ov;i+=.42)s+=ln(q3(i,yF,-oz),q3(i,RD,D/2),'rgba(245,242,236,.1)',1);
s+=ln(q3(-hw-ov,RD,D/2),q3(hw+ov,RD,D/2),'rgba(245,242,236,.45)',1.6);
s+=fl([[hw+ov,yF,-oz],[hw+ov,RD,D/2],[hw+ov,RD-tf,D/2],[hw+ov,yF-tf,-oz]],'var(--roof,#101010)',SK);
s+=fl([[-hw-ov,yF-tf,-oz],[hw+ov,yF-tf,-oz],[hw+ov,yF,-oz],[-hw-ov,yF,-oz]],'url(#hwd)',SK)+fl([[-hw-ov,yF-tf,-oz],[hw+ov,yF-tf,-oz],[hw+ov,yF,-oz],[-hw-ov,yF,-oz]],'rgba(0,0,0,.3)')}
/* deck (terraza, no incluida) con escalón al frente */
if(opt.deck!==false){
[xL+.22,(xL+xR)/2,xR-.22].forEach(function(x){s+=fl([[x-.04,0,-DD+.15],[x+.04,0,-DD+.15],[x+.04,FL-.17,-DD+.15],[x-.04,FL-.17,-DD+.15]],'#090807')});
s+=fl([[xL,FL,0],[xR,FL,0],[xR,FL,-DD],[xL,FL,-DD]],'var(--deck,#7a5530)',SK);
for(z=-.2;z>-DD+.05;z-=.2)s+=ln(q3(xL,FL,z),q3(xR,FL,z),'rgba(0,0,0,.34)',1);
m.o.forEach(function(o){var cx=(o[0]+o[1])/2-DD*.5*KX,cy=-(FL-DD*.5*KY);s+='<ellipse class="gl" cx="'+cx.toFixed(3)+'" cy="'+cy.toFixed(3)+'" rx="'+((o[1]-o[0])*.8).toFixed(3)+'" ry=".42" fill="url(#hpool)"/>'});
s+=fl([[xL,FL-.17,-DD],[xR,FL-.17,-DD],[xR,FL,-DD],[xL,FL,-DD]],'var(--deck2,#4d3419)',SK)+fl([[xR,FL-.17,0],[xR,FL-.17,-DD],[xR,FL,-DD],[xR,FL,0]],'var(--deck2,#4d3419)')+fl([[xR,FL-.17,0],[xR,FL-.17,-DD],[xR,FL,-DD],[xR,FL,0]],'rgba(0,0,0,.35)');
var sx=m.sx||0;
s+=fl([[sx-.7,.21,-DD],[sx+.7,.21,-DD],[sx+.7,.21,-DD-.4],[sx-.7,.21,-DD-.4]],'var(--deck,#7a5530)',SK)+fl([[sx-.7,0,-DD-.4],[sx+.7,0,-DD-.4],[sx+.7,.21,-DD-.4],[sx-.7,.21,-DD-.4]],'var(--deck2,#4d3419)',SK);}
/* faroles a los lados de la entrada */
var o0=m.o[0],o1=m.o[m.o.length-1];
s+=g?lamp(o0[0]-.32)+lamp(o1[1]+.32):lamp(-hw+.4)+lamp(hw-.4);
var x0=Math.min(xL-DD*KX-.1,-hw-ov-oz*KX),x1=g?hw+ov+(D+oz)*KX:Math.max(hw+ov+D/2*KX,hw+D*KX),top=g?AP+(D+oz)*KY:RD+D/2*KY;
return{s:s,x0:x0,x1:x1,top:top}};return{build:hbuild,DEFS:DEFS,KX:KX,KY:KY,HM:HM}})();

/* ===== hero: módulos Aura vistos de frente (la entrada siempre mira al espectador), a escala real entre sí, al anochecer ===== */
var hr=$('#inicio');if(hr){var hsv=$('#hsv'),hp=$('#hp'),hro=$('#hro'),hsk=$('.sky',hr),hk=0,ht=0,hon=false,hvis=true,hold=false,hrm=matchMedia('(prefers-reduced-motion:reduce)').matches,
/* vista casi frontal: la fachada de entrada va a escala real; la profundidad se insinúa a la derecha (KX) y apenas hacia arriba (KY) */
KX=AUH.KX,KY=AUH.KY,DEFS=AUH.DEFS,hbuild=AUH.build,
/* paisaje: lomas y pinares (como las fotos de Aura) */
land=function(w,h,gT){var sd=11,rnd=function(){sd=sd*16807%2147483647;return sd/2147483647},
pine=function(x,b,ph,pw){var f=function(a,c){return(x+a*pw).toFixed(1)+' '+(b-c*ph).toFixed(1)};return'M'+f(0,1)+'L'+f(.16,.66)+'L'+f(.08,.66)+'L'+f(.28,.38)+'L'+f(.15,.38)+'L'+f(.42,.12)+'L'+f(.05,.12)+'L'+f(.05,0)+'L'+f(-.05,0)+'L'+f(-.05,.12)+'L'+f(-.42,.12)+'L'+f(-.15,.38)+'L'+f(-.28,.38)+'L'+f(-.08,.66)+'L'+f(-.16,.66)+'Z'},
hills=function(base,amp,ph){var d='M-20 '+(gT+2),x;for(x=-20;x<=w+20;x+=18)d+='L'+x+' '+(gT-base-amp*(.55+.3*Math.sin(x/150+ph)+.15*Math.sin(x/55+ph*2.3))).toFixed(1);return d+'L'+(w+20)+' '+(gT+2)+'Z'},
row=function(gap,h0,h1,wr){var d='',x=-12-rnd()*gap,ph;while(x<w+30){ph=h0+rnd()*(h1-h0);d+=pine(x,gT+2,ph,ph*wr);x+=gap*(.7+rnd()*.7)}return d},
ed=function(){var d='',a=[[.03,.62],[.1,.46],[.9,.52],[.97,.66]],j;for(j=0;j<4;j++)d+=pine(w*a[j][0],gT+h*.05,h*a[j][1],h*a[j][1]*.4);return d};
return'<path class="hhf" d="'+hills(h*.16,h*.07,1.3)+'"/><path class="hpf" d="'+row(20,h*.1,h*.2,.42)+'"/><path class="hpm" d="'+row(34,h*.17,h*.3,.4)+'"/><path class="hpe" d="'+ed()+'"/><rect class="gd" x="-20" y="'+gT.toFixed(1)+'" width="'+(w+40)+'" height="'+(h+40)+'"/>'},
hv,hg,hms=[],hb={},fw=0,fh=0,
fit=function(){var r=hsv.getBoundingClientRect(),w=Math.round(r.width||innerWidth),h=Math.round(r.height||340);if(w===fw&&h===fh)return;fw=w;fh=h;var gy=h*.9,gT=gy-Math.max(16,h*.06),aw=w*(w>860?.62:.9),hh=gy-10,s=1/0,k,b;
/* escala única (px por metro): la define el módulo que más ocupa, así los chicos se ven chicos y el N40 el más grande */
for(k in hb){b=hb[k];s=Math.min(s,aw/(b.x1-b.x0),hh/(b.top+.2))}
hv.setAttribute('viewBox','0 0 '+w+' '+h);$('#hld').innerHTML=land(w,h,gT);hr.style.setProperty('--gy',(hsv.offsetTop+gT)+'px');
hms.forEach(function(el){var b=hb[el.dataset.k],tx=w/2-(b.x0+b.x1)/2*s;el.setAttribute('transform','translate('+tx.toFixed(1)+' '+gy.toFixed(1)+') scale('+s.toFixed(3)+')')})};
hsv.innerHTML='<svg id="hv" class="hs" role="img" aria-label="Módulo Aura visto de frente">'+DEFS+'<g id="hld"></g><g id="hhs"></g></svg>';hv=$('#hv');hg=$('#hhs');
hg.innerHTML=A.modelos.map(function(m){var b=hbuild(m.k);hb[m.k]=b;return'<g class="hm" data-k="'+m.k+'">'+b.s+'</g>'}).join('');hms=[].slice.call(hg.children);
hp.innerHTML=A.modelos.map(function(m,k){return'<button type="button" data-k="'+k+'" aria-pressed="false"><b>'+m.id+'</b><small>'+m.m2+' m²</small><i></i></button>'}).join('');
/* anochecer fijo: cielo de crepúsculo con luces prendidas. Los colores viven en el CSS (.hero{--s1…}); acá solo las estrellas y la luna */
(function(){var s=1,r=function(){s=s*16807%2147483647;return s/2147483647},h='<div class="stars">',i,z;for(i=0;i<46;i++){z=r()<.2?2.2:1.2+r();h+='<i'+(i%4?'':' class="t"')+' style="left:'+(r()*100).toFixed(1)+'%;top:'+(r()*44).toFixed(1)+'%;width:'+z.toFixed(1)+'px;height:'+z.toFixed(1)+'px;opacity:'+(.4+r()*.5).toFixed(2)+(i%4?'':';animation-delay:-'+(r()*3).toFixed(1)+'s')+'"></i>'}
hsk.innerHTML=h+'</div><div class="moon"></div>'})();
var htick=function(){clearTimeout(ht);if(hrm||!hon||!hvis||hold||document.hidden)return;ht=setTimeout(function(){hdraw(hk+1)},6500)},
hdraw=function(k,first){var N=A.modelos.length;hk=(k+N)%N;var m=A.modelos[hk],el=hp.children[hk],bar=el.lastChild;
hms.forEach(function(g){g.classList.toggle('on',g.dataset.k===m.k)});hv.setAttribute('aria-label','Módulo '+m.id+' de '+m.m2+' m², visto de frente por la entrada');
[].forEach.call(hp.children,function(b,j){b.setAttribute('aria-pressed',j===hk)});
bar.style.animation='none';void bar.offsetWidth;bar.style.animation='';
hro.innerHTML='<b>'+m.id+'</b><span>'+m.m2+' m² · <strong>'+m.med+'</strong></span>'+(m.precio?'<em>'+esc(m.precio)+'</em>':'')+'<a data-ev="hero-ficha" href="modelo-'+m.k+'.html">Ver ficha →</a>';
hp.scrollTo({left:Math.max(0,el.offsetLeft-(hp.clientWidth-el.offsetWidth)/2),behavior:first?'auto':'smooth'});htick()},
hpause=function(o){hold=o;hr.classList.toggle('hold',o);if(o)clearTimeout(ht);else{hdraw(hk)}};
hp.onclick=function(e){var x=e.target.closest('button');if(x)hdraw(+x.dataset.k)};
var hbt=$('.hbot');hbt.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')hpause(true)});hbt.addEventListener('pointerleave',function(e){if(e.pointerType==='mouse'&&hold)hpause(false)});
var sx0=0,sy0=0;hr.addEventListener('pointerdown',function(e){sx0=e.clientX;sy0=e.clientY});hr.addEventListener('pointerup',function(e){if(e.pointerType==='mouse'||e.target.closest('a,button'))return;var dx=e.clientX-sx0,dy=e.clientY-sy0;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.4)hdraw(hk+(dx<0?1:-1))});
if('IntersectionObserver'in window)new IntersectionObserver(function(es){hvis=es[0].isIntersecting;hr.classList.toggle('off',!hvis);if(hvis)htick();else clearTimeout(ht)},{threshold:.35}).observe(hr);
document.addEventListener('visibilitychange',function(){if(document.hidden)clearTimeout(ht);else htick()});
if('ResizeObserver'in window)new ResizeObserver(fit).observe(hsv);else addEventListener('resize',fit);
fit();hdraw(0,1);window.heroGo=function(){hon=true;htick()}}

/* tarjetas de modelos (inicio) */
var g=$('#mods');if(g)g.innerHTML=A.modelos.map(function(m){return'<article class="mod rv"><a class="im" href="modelo-'+m.k+'.html" aria-label="Ver ficha del '+m.id+'"><img loading="lazy" src="img/'+m.k+'.webp" alt="Plano del módulo '+m.id+' de '+m.m2+' m²" width="800" height="640"></a><div class="t"><h3>'+m.id+'</h3><p class="m2"><strong>'+m.m2+'</strong> m² · '+m.med+'</p><ul>'+m.l.map(li).join('')+'</ul><p class="from">'+esc(U.pr(m))+'</p><div class="acts"><a class="btn s" href="configurador.html?m='+m.k+'">Configurar</a><a class="btn s g" href="modelo-'+m.k+'.html">Ver ficha</a></div></div></article>'}).join('');
/* por qué Aura / construcción / equipamiento (datos en data.js) */
var PI={"Confort": "<path d='M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z'/><path d='M12 9v7'/>", "Diseño": "<path d='M4 20h4L19 9l-4-4L4 16z'/><path d='M13 7l4 4'/>", "Calidad": "<circle cx='12' cy='9' r='5'/><path d='M9 13.5L8 21l4-2 4 2-1-7.5'/>", "Rapidez": "<circle cx='12' cy='12' r='9'/><path d='M8 12.5l3 3 5-6'/>"};var wy=$('#why');if(wy)wy.innerHTML=A.pilares.map(function(p){return'<article class="rv"><i class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">'+(PI[p[0]]||'')+'</svg></i><h3>'+esc(p[0])+'</h3><p>'+esc(p[1])+'</p></article>'}).join('');
var cn=$('#cons');if(cn){var SG=A.specGrupos,sp={};A.specs.forEach(function(s){sp[s[0]]=s[1]});
var tabs=SG.map(function(g){return{n:g[0],h:'<dl class="sg">'+g[1].map(function(k){return'<div><dt>'+esc(k)+'</dt><dd>'+esc(sp[k]||'')+'</dd></div>'}).join('')+'</dl>'}});
tabs.push({n:'Equipamiento incluido',h:'<ul class="eqp">'+A.equipo.map(function(p){return'<li><strong>'+esc(p[0])+'</strong><span>'+esc(p[1])+'</span></li>'}).join('')+'</ul>'});
cn.innerHTML='<h3 class="sub2">Qué incluye cada módulo</h3><div class="tabs" role="tablist">'+tabs.map(function(t,i){return'<button type="button" role="tab" class="tb" aria-selected="'+(i===0)+'" data-i="'+i+'">'+esc(t.n)+'</button>'}).join('')+'</div><div class="tp2" id="tp2" role="tabpanel">'+tabs[0].h+'</div>';
cn.onclick=function(e){var b=e.target.closest('.tb');if(!b)return;[].forEach.call(cn.querySelectorAll('.tb'),function(x){x.setAttribute('aria-selected',x===b)});var p=$('#tp2');p.innerHTML=tabs[+b.dataset.i].h;p.classList.remove('sw2');void p.offsetWidth;p.classList.add('sw2')}}
var eq=$('#equipo');if(eq)eq.innerHTML=A.equipo.map(function(p){return'<article class="rv"><h3>'+esc(p[0])+'</h3><p>'+esc(p[1])+'</p></article>'}).join('');
/* contadores */
document.querySelectorAll('.stats strong').forEach(function(e){var raw=e.textContent;if(!/^\d+$/.test(raw)||!('IntersectionObserver'in window)||matchMedia('(prefers-reduced-motion:reduce)').matches)return;var v=+raw;var io=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;io.disconnect();var t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/1400),e2=1-Math.pow(1-k,3);e.textContent=Math.round(v*e2).toLocaleString('es-AR');if(k<1)requestAnimationFrame(f)})(t0)},{threshold:.6});io.observe(e)});
/* contacto */
var cc=$('#cacts');if(cc)cc.innerHTML=(A.wa?'<a class="btn g" href="tel:+'+esc(A.wa)+'">'+esc(A.tel||('+'+A.wa))+'</a>':'<span class="btn g todo">Teléfono: por completar</span>')+(A.mail?'<a class="btn g" href="mailto:'+esc(A.mail)+'">'+esc(A.mail)+'</a>':'<span class="btn g todo">Mail: por completar</span>');
var cf=$('#cf');if(cf){$('#cm').innerHTML='<option value="">Todavía no lo sé</option>'+A.modelos.map(function(x){return'<option>'+x.id+' · '+x.m2+' m²</option>'}).join('');
var okc=function(){var n=cf.nombre.value.trim(),w=cf.wa.value.replace(/\D/g,'');if(!n||w.length<8){$('#ce').textContent='Completá tu nombre y un WhatsApp válido.';return 0}$('#ce').textContent='';return 1};
cf.onsubmit=function(e){e.preventDefault();if(!okc())return;if(!U.has('wa')){$('#ce').textContent='El WhatsApp de contacto todavía no está cargado.';return}var n=cf.nombre.value.trim();window.open(U.wa('Hola, soy '+n+' ('+cf.wa.value+').'+(cf.modelo.value?' Me interesa el módulo '+cf.modelo.value+'.':'')+(cf.msg.value.trim()?' '+cf.msg.value.trim():' Quiero recibir información.')),'_blank','noopener')};
$('#cmail').onclick=function(){if(!okc())return;if(!U.has('mail')){$('#ce').textContent='El mail de contacto todavía no está cargado.';return}var n=cf.nombre.value.trim();location.href='mailto:'+A.mail+'?subject='+encodeURIComponent('Consulta web'+(cf.modelo.value?' · '+cf.modelo.value:''))+'&body='+encodeURIComponent('Nombre: '+n+'\nWhatsApp: '+cf.wa.value+(cf.msg.value.trim()?'\n\n'+cf.msg.value.trim():''))}}

/* intro (inicio): camión con un módulo Aura. Una vez por sesión; con ?intro se fuerza. El script del <head> de index.html pone html.intro-on */
var de=document.documentElement,itr=$('#intro');
if(P==='home'){if(itr&&de.classList.contains('intro-on')){var iok=0,idone=function(){if(iok)return;iok=1;try{sessionStorage.setItem('au_i','1')}catch(e){}de.classList.remove('intro-on');itr.remove();if(window.heroGo)heroGo()},iskip=function(){itr.classList.add('skipping')};
itr.addEventListener('animationend',function(e){if(e.target===itr&&e.animationName==='inout')idone()});itr.addEventListener('click',iskip);addEventListener('keydown',function(e){if(!iok&&(e.key==='Escape'||e.key==='Enter'||e.key===' '))iskip()});setTimeout(idone,5500)}
else{if(itr)itr.remove();if(window.heroGo)heroGo()}}
document.addEventListener('click',function(e){var a=e.target.closest('[data-ev]');if(a)(window.dataLayer=window.dataLayer||[]).push({event:'au_click',au:a.dataset.ev})});

reveal()})();

/* ===== Código de cada página (configurador, fichas, comparador) ===== */
(function(){var A=window.AU,P=document.body.dataset.p,$=function(s,e){return(e||document).querySelector(s)},U=window.U,esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})},li=function(x){return'<li>'+esc(x)+'</li>'};
/* ===== CONFIGURADOR ===== */
if(P==='cfg'){var OP=A.opc,df=function(m){return{col:0,roof:0,frame:0,wood:(m&&AUH.HM[m.k]&&AUH.HM[m.k].wood)?1:0,deck:0}},M0=U.m(U.q('m')),S={m:M0,o:df(M0),s:0,f:{},done:''},st=['Módulo','Exterior','Detalles','Tus datos'],ck='<i class="ck" aria-hidden="true">✓</i>',
msg=function(){var f=S.f,o=S.o;return'Hola, quiero consultar por el módulo '+S.m.id+' ('+S.m.m2+' m²).\nChapa: '+OP.col[o.col].n+' · Techo: '+OP.roof[o.roof].n+' · Carpintería: '+OP.frame[o.frame].n+(o.wood?' · Con revestimiento símil madera':'')+(o.deck?' · Con deck':'')+'\nNombre: '+f.nombre.trim()+'\nWhatsApp: '+f.wa+(f.uso?'\nUso: '+f.uso:'')+(f.plazo?'\nPlazo: '+f.plazo:'')+(f.com&&f.com.trim()?'\nComentario: '+f.com.trim():'')},
pv=function(){var m=S.m;if(!m)return houseSVG({m2:0,W:260,bp:1,label:'Elegí un módulo para ver el dibujo'});var b=AUH.build(m.k,{wood:!!S.o.wood,deck:!!S.o.deck,zc:'#241d18',zs:'#18130f'}),cx=(b.x0+b.x1)/2,w=AUH.HM[m.k].W;return'<svg class="hs" viewBox="-7.4 -4.4 14.8 4.9" role="img" aria-label="Dibujo del '+m.id+', visto de frente por la entrada">'+AUH.DEFS+'<g transform="translate('+(-cx).toFixed(3)+' 0)"><ellipse cx="0" cy=".06" rx="'+(w/2+1.1).toFixed(2)+'" ry=".16" fill="rgba(0,0,0,.55)"/><line x1="-9" x2="9" y1="0" y2="0" stroke="rgba(245,242,236,.22)" stroke-width="1.2" vector-effect="non-scaling-stroke"/>'+b.s+'</g></svg>'},
go=function(k){var f=S.f,w=(f.wa||'').replace(/\D/g,''),n=(f.nombre||'').trim(),fm=$('#fm');if(!n||w.length<8){$('#err').textContent='Completá tu nombre y un WhatsApp válido.';(!n?fm.nombre:fm.wa).focus();return}$('#err').textContent='';
if(k==='mail'){if(!U.has('mail')){$('#err').textContent='El mail de contacto todavía no está cargado.';return}(window.dataLayer=window.dataLayer||[]).push({event:'au_lead',au:'configurador',modelo:S.m.id});location.href='mailto:'+A.mail+'?subject='+encodeURIComponent('Consulta '+S.m.id)+'&body='+encodeURIComponent(msg());return}
if(!U.has('wa')){$('#err').textContent='El WhatsApp de contacto todavía no está cargado.';return}
(window.dataLayer=window.dataLayer||[]).push({event:'au_lead',au:'configurador',modelo:S.m.id});S.done=U.wa(msg());window.open(S.done,'_blank','noopener');draw()};
var draw=function(){var h='';
$('#stp').innerHTML=st.map(function(s,i){return'<li class="'+(i===S.s?'on':i<S.s?'done':'')+'"><button type="button" data-s="'+i+'"'+(i>0&&!S.m?' disabled':'')+'><b>'+(i+1)+'</b><span>'+s+'</span></button></li>'}).join('');
if(S.s===0)h='<h2>Elegí un módulo</h2><div class="opts sm">'+A.modelos.map(function(m){return'<button type="button" class="opt" data-m="'+m.k+'" aria-pressed="'+(S.m===m)+'">'+ck+'<strong>'+m.id+'</strong><span>'+m.m2+' m² · '+m.med+' · '+m.dm+(m.dm==='1'?' dormitorio':' dormitorios')+'</span><small>'+esc(m.l.join(' · '))+'</small></button>'}).join('')+'</div>';
var sw=function(t,k,a){return'<div class="swg"><h3>'+t+' <span>'+a[S.o[k]].n+'</span></h3><div class="sws" role="group" aria-label="'+t+'">'+a.map(function(c,i){return'<button type="button" class="sw" data-k="'+k+'" data-i="'+i+'" aria-pressed="'+(S.o[k]===i)+'" aria-label="'+c.n+'" title="'+c.n+'" style="--c:'+c.c+'"></button>'}).join('')+'</div></div>'},
tg=function(t,d,k){return'<button type="button" class="opt tg" data-t="'+k+'" aria-pressed="'+!!S.o[k]+'">'+ck+'<strong>'+t+'</strong><small>'+d+'</small></button>'};
if(S.s===1)h='<h2>Elegí el exterior</h2><p class="lead">Mirá cómo cambia tu módulo a la derecha.</p>'+sw('Color de la chapa','col',OP.col)+sw('Techo','roof',OP.roof)+sw('Carpintería','frame',OP.frame);
if(S.s===2)h='<h2>Sumá detalles</h2><div class="opts sm">'+tg('Revestimiento símil madera','Franjas de WPC en el frente, como acento.','wood')+tg('Deck exterior','Plataforma de madera frente al módulo.','deck')+'</div><p class="note">Los adicionales se cotizan según el proyecto.</p>';
if(S.s===3&&S.done)h='<h2>¡Listo! Tu consulta está en camino</h2><p class="lead">Abrimos WhatsApp con tu consulta. Si no se abrió, tocá el botón.</p><div class="acts"><a class="btn" href="'+S.done+'" target="_blank" rel="noopener">Abrir WhatsApp</a><a class="btn g" href="index.html#modelos">Ver modelos</a></div>';
else if(S.s===3)h='<h2>¿A dónde te respondemos?</h2><form id="fm" novalidate><div class="ff2"><label>Tu nombre *<input name="nombre" autocomplete="name" required></label><label>WhatsApp *<input name="wa" type="tel" autocomplete="tel" inputmode="tel" required></label></div>'+
'<details class="more"><summary>Sumar detalles (opcional)</summary><div class="ff2"><label>Uso del módulo<select name="uso"><option value="">Seleccionar…</option><option>Vivienda</option><option>Inversión</option><option>Alquiler temporario</option><option>Otro</option></select></label><label>Plazo de compra<select name="plazo"><option value="">Seleccionar…</option><option>Inmediato (menos de 1 mes)</option><option>1-3 meses</option><option>3-6 meses</option><option>Solo evaluando</option></select></label></div><label>Comentario<textarea name="com" rows="3" placeholder="Contanos sobre tu terreno o tu idea"></textarea></label></details>'+
'<p class="err" id="err" role="alert"></p><p class="alt2">Te respondemos por WhatsApp. ¿Preferís mail? <button type="button" class="lnk" id="gm">Enviar por mail</button></p><button type="submit" hidden></button></form>';
$('#panel').innerHTML=h;var fm=$('#fm');if(fm){['nombre','wa','uso','plazo','com'].forEach(function(k){if(S.f[k])fm[k].value=S.f[k]});if(S.f.uso||S.f.plazo||S.f.com)$('.more').open=true}
$('#back').hidden=S.s===0;$('#next').hidden=!!S.done;$('#next').disabled=!S.m;$('#next').textContent=['Continuar','Continuar','Continuar','Enviar por WhatsApp'][S.s];
var k=S.m?S.m.k+'|'+(S.o.wood?1:0)+(S.o.deck?1:0):'';if($('#pvw').dataset.k!==k){$('#pvw').innerHTML=pv();$('#pvw').dataset.k=k}
var sv=$('#pvw svg');if(sv&&S.m){var o=S.o,c=OP.col[o.col].c,L=function(h){var n=parseInt(h.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;return .299*r+.587*g+.114*b},mx=function(h,t,a){var n=parseInt(h.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;return'rgb('+Math.round(r+(t-r)*a)+','+Math.round(g+(t-g)*a)+','+Math.round(b+(t-b)*a)+')'},sty=sv.style;sty.setProperty('--wall',c);sty.setProperty('--wall2',L(c)>140?mx(c,0,.1):mx(c,255,.1));sty.setProperty('--roof',OP.roof[o.roof].c);sty.setProperty('--frame',OP.frame[o.frame].c);sty.setProperty('--w1','#b0743f');sty.setProperty('--w2','#704828');sty.setProperty('--deck','#9e7044');sty.setProperty('--deck2','#62442a')}
$('#pvl').textContent=S.m?S.m.id+' · '+S.m.m2+' m²':'Elegí un módulo para empezar';
$('#pvd').innerHTML=S.m?'<dt>Módulo</dt><dd>'+S.m.id+'</dd><dt>Superficie</dt><dd>'+S.m.m2+' m²</dd><dt>Medidas</dt><dd>'+S.m.med+'</dd><dt>Dormitorios</dt><dd>'+S.m.dm+'</dd><dt>Chapa</dt><dd>'+OP.col[S.o.col].n+'</dd><dt>Techo</dt><dd>'+OP.roof[S.o.roof].n+'</dd><dt>Carpintería</dt><dd>'+OP.frame[S.o.frame].n+'</dd>'+(S.o.wood?'<dt>Acento</dt><dd>Símil madera</dd>':'')+(S.o.deck?'<dt>Deck</dt><dd>Incluido en el dibujo</dd>':''):'';
$('#bt').textContent=S.m?S.m.id+' · '+S.m.m2+' m²':'—';$('#bsm').textContent=S.m?'Módulo elegido':'Sin módulo'};
$('#stp').onclick=function(e){var b=e.target.closest('button');if(b&&!b.disabled){S.s=+b.dataset.s;S.done='';draw()}};
$('#panel').onclick=function(e){if(e.target.id==='gm'){go('mail');return}var w=e.target.closest('.sw');if(w){S.o[w.dataset.k]=+w.dataset.i;draw();return}var b=e.target.closest('.opt');if(!b)return;if(b.dataset.t){S.o[b.dataset.t]=S.o[b.dataset.t]?0:1;draw();return}if(b.dataset.m){S.m=U.m(b.dataset.m);S.o=df(S.m)}draw()};
$('#panel').addEventListener('input',function(e){if(e.target.name)S.f[e.target.name]=e.target.value});
$('#panel').addEventListener('submit',function(e){e.preventDefault();go('wa')});
$('#next').onclick=function(){if(S.s===3)go('wa');else if(S.m){S.s++;draw()}};$('#back').onclick=function(){if(S.done)S.done='';else S.s--;draw()};
if(S.m)S.s=1;draw()}
/* ===== FICHA DE MODELO ===== */
if(P==='mod'){var m=U.m(document.body.dataset.m),ix=A.modelos.indexOf(m),pv=A.modelos[(ix+A.modelos.length-1)%A.modelos.length],nx=A.modelos[(ix+1)%A.modelos.length],im=['img/'+m.k+'-p.webp','img/'+m.k+'.webp'],
dd=function(a){return'<dt>'+esc(a[0])+'</dt><dd>'+esc(a[1])+'</dd>'};
$('#md').innerHTML='<p class="crumb"><a href="index.html#modelos">Modelos</a> / '+m.id+'</p><div class="md"><div><div class="main" id="main"><img id="big" src="'+im[0]+'" alt="Módulo '+m.id+'" width="800" height="640"></div><div class="thumbs">'+im.map(function(s,j){return'<button type="button" data-i="'+j+'" aria-label="Ver imagen '+(j+1)+'"><img src="'+s+'" alt="" width="200" height="160"></button>'}).join('')+'</div></div><div><p class="eye">Módulo habitacional</p><h1>'+m.id+'</h1><p class="lead">'+esc(m.t)+'</p><ul class="pills">'+m.l.map(li).join('')+'</ul><p class="from">'+esc(U.pr(m))+'</p><div class="acts"><a class="btn" href="configurador.html?m='+m.k+'">Configurar este módulo</a><a class="btn g" href="'+U.wa('Hola, quiero la ficha técnica del módulo '+m.id)+'" target="_blank" rel="noopener">Pedir ficha por WhatsApp</a></div><p class="tl"><a href="comparar.html?m='+m.k+'">Comparar con otros modelos</a></p></div></div>'+
'<h2 class="rv">Ficha técnica</h2><div class="kf rv"><div><small>Superficie</small><strong>'+m.m2+'<i>m²</i></strong></div><div><small>Medidas</small><strong>'+m.med.replace(/ m$/,'')+'<i>m</i></strong></div><div><small>Dormitorios</small><strong>'+esc(m.dm)+'</strong></div><div><small>Baños</small><strong>'+esc(m.b)+'</strong></div></div>'+
'<section class="fz rv"><h3>Distribución</h3><ul class="chk">'+m.l.map(li).join('')+'</ul><div class="ideal"><h3>Ideal para</h3><p>'+esc(m.uso)+'</p></div></section>'+
'<h3 class="sub2 fh2 rv">Cómo está construido</h3><p class="rv">Mismos materiales y terminaciones en todos los modelos.</p><div class="fg3 rv" id="fg3">'+(A.specGrupos||[]).map(function(g){return'<details class="fgp"><summary>'+esc(g[0])+'</summary><dl>'+g[1].map(function(k){var v=A.specs.filter(function(x){return x[0]===k})[0];return'<div><dt>'+esc(k)+'</dt><dd>'+esc(v?v[1]:'')+'</dd></div>'}).join('')+'</dl></details>'}).join('')+'</div>'+
'<h2 class="rv">Equipamiento incluido</h2><div class="why" id="eqm">'+A.equipo.map(function(p){return'<article class="rv"><h3>'+esc(p[0])+'</h3><p>'+esc(p[1])+'</p></article>'}).join('')+'</div><p class="note">Imágenes y planos de referencia. Medidas en metros.</p>'+
'<div class="pn rv"><a href="modelo-'+pv.k+'.html">← '+pv.id+'</a><a href="modelo-'+nx.k+'.html">'+nx.id+' →</a></div>';
var fq=matchMedia('(min-width:861px)'),fsy=function(){[].forEach.call(document.querySelectorAll('.fgp'),function(d,i){d.open=fq.matches||i===0})};fsy();fq.addEventListener('change',fsy);
$('#md').onclick=function(e){var b=e.target.closest('[data-i]');if(b){$('#big').src=im[+b.dataset.i];return}if(e.target.closest('#main')){$('#lb').innerHTML='<img src="'+$('#big').src+'" alt="Vista ampliada"><button type="button" class="x" aria-label="Cerrar">✕</button>';$('#lb').showModal()}};
$('#lb').onclick=function(){$('#lb').close()}}
/* ===== COMPARADOR ===== */
if(P==='cmp'){var sl=(U.q('m')||'n16,n28,n40').split(',').map(function(x){return U.m(x)}).filter(Boolean).slice(0,3);if(!sl.length)sl=[A.modelos[0]];
var R=[['Superficie total',function(m){return m.m2+' m²'}],['Medidas',function(m){return m.med}],['Dormitorios',function(m){return m.dm}],['Baños',function(m){return m.b}],['Cocina',function(){return'Integrada'}],['Distribución',function(m){return m.l.join(' · ')}],['Terraza / deck',function(m){return m.ext}],['Ideal para',function(m){return m.uso}],['Precio',function(m){return U.pr(m)},1]];
var draw=function(){$('#cc').innerHTML=A.modelos.map(function(m){return'<button type="button" class="chip" data-k="'+m.k+'" aria-pressed="'+(sl.indexOf(m)>-1)+'">'+m.id+'</button>'}).join('');
$('#ct').innerHTML='<table class="cmpt"><thead><tr><th scope="col"></th>'+sl.map(function(m){return'<th scope="col"><img src="img/'+m.k+'.webp" alt="Plano del módulo '+m.id+'" width="800" height="640"><strong>'+m.id+'</strong><small>'+m.m2+' m²</small></th>'}).join('')+'</tr></thead><tbody>'+R.map(function(r){return'<tr><th scope="row">'+r[0]+'</th>'+sl.map(function(m){return'<td'+(r[2]?' class="hi"':'')+'>'+esc(r[1](m))+'</td>'}).join('')+'</tr>'}).join('')+'<tr><th scope="row"></th>'+sl.map(function(m){return'<td><a class="btn s" href="configurador.html?m='+m.k+'">Configurar</a><a class="btn s g" href="modelo-'+m.k+'.html">Ficha</a></td>'}).join('')+'</tr></tbody></table>'};
$('#cc').onclick=function(e){var b=e.target.closest('.chip');if(!b)return;var m=U.m(b.dataset.k),i=sl.indexOf(m);if(i>-1){if(sl.length>1)sl.splice(i,1)}else{sl.push(m);if(sl.length>3)sl.shift()}draw()};draw()}
window.reveal()})();


(function(){var I='<svg class="wi" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
var run=function(){document.querySelectorAll('a.btn[href*="wa.me"],button.btn[type=submit]').forEach(function(b){if(!b.querySelector('.wi')&&/whatsapp|cotizaci|ficha|an[aá]lisis|asesor|consult/i.test(b.textContent+b.getAttribute('href'))&&(b.tagName==='A'||/whatsapp/i.test(b.textContent)))b.insertAdjacentHTML('afterbegin',I)})};
run();new MutationObserver(run).observe(document.body,{childList:true,subtree:true})})();

/* ===== capa por capa, proceso y FAQ (home) ===== */
(function(){var A=window.AU,svg=document.querySelector('#sf-svg');if(!A||!A.capas||!svg)return;var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var st=document.querySelector('#steps');if(st)st.innerHTML=A.proceso.map(function(p,i){return'<li class="rv"><b>0'+(i+1)+'</b><h3>'+esc(p[0])+'</h3><p>'+esc(p[1])+'</p></li>'}).join('');
var ac=document.querySelector('#acc');if(ac)ac.innerHTML=A.faq.map(function(q){return'<details><summary>'+esc(q[0])+'</summary><p>'+esc(q[1])+'</p></details>'}).join('');
if(ac)ac.addEventListener('toggle',function(e){if(e.target.open)[].forEach.call(ac.children,function(d){if(d!==e.target)d.open=false})},true);
var list=document.querySelector('#sf-list');list.innerHTML=A.capas.map(function(c){return'<li><h3>'+esc(c[0])+'</h3><p>'+esc(c[1])+'</p></li>'}).join('');
var li=[].slice.call(list.children),NS='http://www.w3.org/2000/svg',rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var mk=function(t,a,p){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);p.appendChild(e);return e};
var X=90,Wd=360,H=50,SK=70,th=[16,8,26,12,10],Y=[20,85,150,215,285],n=th.length,run=90,off=th.map(function(t,i){var o=run-Y[i];run+=t+1;return o}),layers=[];
for(var i=n-1;i>=0;i--){(function(i){var g=mk('g',{'class':'ly'},svg),y=Y[i],t=th[i],c=A.capas[i][2];
mk('polygon',{'class':'fr',fill:c,points:X+','+(y+H)+' '+(X+Wd)+','+(y+H)+' '+(X+Wd)+','+(y+H+t)+' '+X+','+(y+H+t)},g);
mk('polygon',{'class':'sd',fill:c,points:(X+Wd)+','+(y+H)+' '+(X+Wd+SK)+','+y+' '+(X+Wd+SK)+','+(y+t)+' '+(X+Wd)+','+(y+H+t)},g);
var tp=mk('polygon',{'class':'tp',fill:c,points:(X+SK)+','+y+' '+(X+SK+Wd)+','+y+' '+(X+Wd)+','+(y+H)+' '+X+','+(y+H)},g);
if(i===0){for(var k=1;k<24;k++){var u=k*Wd/24;mk('line',{'class':'rib',x1:X+u,y1:y+H,x2:X+u,y2:y+H+t},g);mk('line',{'class':'rib',x1:X+SK+u,y1:y,x2:X+u,y2:y+H},g)}}
if(i===1){tp.setAttribute('fill-opacity','.22');for(var k2=0;k2<7;k2++){var u2=k2*Wd/6;mk('line',{'class':'stud',x1:X+SK+u2,y1:y,x2:X+u2,y2:y+H},g)}}
var R=function(){return Math.random()};var sd=7,rn=function(){sd=(sd*16807)%2147483647;return sd/2147483647},T=function(u,v){return[X+u*Wd+SK*(1-v),y+v*H]},ln=function(d,s,w,o){mk('path',{d:d,fill:'none',stroke:s,'stroke-width':w,'stroke-linecap':'round','stroke-opacity':o,'pointer-events':'none'},g)};
if(i===1){for(var a=0;a<5;a++){var p0=T(.1+a*.17,.3+(a%2)*.35),p1=T(.2+a*.17,.5);ln('M'+p0[0]+' '+p0[1]+'q14 -10 28 0t28 0','#cfe3f5',1.8,.85)}}
if(i===2){for(var a=0;a<46;a++){var q=T(.04+rn()*.92,.08+rn()*.84);ln('M'+q[0]+' '+q[1]+'q5 -6 10 0t10 0','#8a5a00',1.3,.55)}}
if(i===3){for(var a=0;a<70;a++){var q=T(.03+rn()*.94,.06+rn()*.88),l=9+rn()*12,ag=rn()*Math.PI;mk('line',{x1:q[0],y1:q[1],x2:q[0]+Math.cos(ag)*l,y2:q[1]+Math.sin(ag)*l*.45,stroke:rn()>.5?'#6b4423':'#e0b98a','stroke-width':2.4,'stroke-linecap':'round','stroke-opacity':.7,'pointer-events':'none'},g)}}
if(i===4){for(var a=0;a<6;a++)for(var b=0;b<3;b++){var q=T(.08+a*.17,.22+b*.28);mk('circle',{cx:q[0],cy:q[1],r:1.8,fill:'#a8a39a','pointer-events':'none'},g)}ln('M'+T(0,.5)[0]+' '+T(0,.5)[1]+'L'+T(1,.5)[0]+' '+T(1,.5)[1],'#bdb8ad',.8,.5)}
layers[i]=g})(i)}
var sel=-1,auto=!rm,timer=0;
var set=function(s){sel=s;layers.forEach(function(g,i){g.classList.toggle('on',i===s);g.style.opacity=s<0||i===s?1:.3});li.forEach(function(e,i){e.classList.toggle('on',i===s)})};
var explode=function(on){layers.forEach(function(g,i){g.style.transform='translateY('+(on?0:off[i])+'px)'})};
var pick=function(i){auto=false;set(i)};
layers.forEach(function(g,i){g.onclick=function(){pick(i)}});
li.forEach(function(e,i){e.tabIndex=0;e.setAttribute('role','button');e.onclick=function(){pick(i)};e.onkeydown=function(ev){if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();pick(i)}}});
explode(false);set(-1);
if('IntersectionObserver'in window)new IntersectionObserver(function(es){es.forEach(function(e){clearInterval(timer);if(e.isIntersecting){explode(true);set(rm?-1:0);if(!rm)timer=setInterval(function(){if(auto&&!document.hidden)set((sel+1)%n)},3200)}else{explode(false);set(-1);auto=!rm}})},{threshold:.35}).observe(svg);else{explode(true);set(0)}
if(window.reveal)window.reveal();
})();

/* ===== CALCULADORA DE RENTABILIDAD ===== */
(function(){var A=window.AU,U=window.U,P=document.body.dataset.p;if(P!=='calc'||!A||!A.renta)return;var RT=A.renta,g=function(i){return document.getElementById(i)},
usd=function(n){return'USD '+Math.round(n).toLocaleString('es-AR')},m0=U.m(U.q('m'))||A.modelos[1],mode='temp',
fill=function(){g('im').innerHTML=A.modelos.map(function(m){return'<option value="'+m.k+'">'+m.id+' · '+m.m2+' m²</option>'}).join('');g('im').value=m0.k;g('ip').value=RT.usdm2;g('io').value=RT.obra;g('ioc').value=RT.ocup;g('ik').value=RT.costos;setMode('temp',1)},
setMode=function(k,first){mode=k;[].forEach.call(document.querySelectorAll('.seg button'),function(b){b.setAttribute('aria-pressed',b.dataset.k===k)});var m=U.m(g('im').value);
g('lt').firstChild.textContent=k==='temp'?'Tarifa promedio por noche (USD)':'Alquiler mensual (USD)';g('lo').firstChild.textContent=k==='temp'?'Ocupación anual':'Meses alquilado al año (en %)';g('it').value=k==='temp'?RT.noche[m.k]:RT.alqMes[m.k];g('ioc').value=k==='temp'?RT.ocup:92;g('ioc').min=k==='temp'?15:50;if(!first)calc()},
calc=function(){var m=U.m(g('im').value),n=Math.max(1,Math.min(30,+g('ic').value||1)),pm=Math.max(0,+g('ip').value||0),mod=m.m2*pm,ex=0,iva=g('iv').checked?RT.iva/100:0,obra=Math.max(0,+g('io').value||0);
RT.extras.forEach(function(e,i){if(g('x'+i).checked)ex+=e[1]});
var inv=(mod+ex)*n*(1+iva)+obra*n,tar=+g('it').value||0,oc=+g('ioc').value/100,br=mode==='temp'?365*oc*tar*n:12*oc*tar*n,net=br*(1-g('ik').value/100),rec=net>0?inv/net:0;
g('oo').textContent=g('ioc').value+'%';g('ok').textContent=g('ik').value+'%';
g('kp').innerHTML='<div><small>Inversión</small><strong>'+usd(inv)+'</strong></div><div><small>Neto anual</small><strong>'+usd(net)+'</strong></div><div><small>Recupero</small><strong>'+(net>0?rec.toFixed(1).replace('.',',')+' años':'—')+'</strong></div>';
g('bd').innerHTML='<dt>Módulos ('+n+' × '+m.id+')</dt><dd>'+usd(mod*n)+'</dd><dt>Adicionales</dt><dd>'+usd(ex*n)+'</dd><dt>IVA</dt><dd>'+usd((mod+ex)*n*iva)+'</dd><dt>Obra civil</dt><dd>'+usd(obra*n)+'</dd><dt>Ingreso bruto anual</dt><dd>'+usd(br)+'</dd><dt>Retorno anual sobre inversión</dt><dd>'+(inv?(net/inv*100).toFixed(1).replace('.',','):'0')+'%</dd>';
var Y=8,v=[],i,mx=0,mn=-inv;for(i=0;i<=Y;i++){v.push(net*i-inv);mx=Math.max(mx,v[i])}var top=Math.max(mx,inv*.2),rg=top-mn||1,y=function(a){return 10+(top-a)/rg*190},s='<svg viewBox="0 0 600 240" role="img" aria-label="Flujo acumulado a 8 años">';
v.forEach(function(a,j){var x=20+j*64,y0=y(0),y1=y(a);s+='<rect x="'+x+'" y="'+Math.min(y0,y1)+'" width="44" height="'+Math.max(2,Math.abs(y1-y0))+'" rx="3" fill="'+(a>=0?'#C58A55':'rgba(245,242,236,.25)')+'"/><text x="'+(x+22)+'" y="228" text-anchor="middle" fill="rgba(245,242,236,.6)" font-size="12" font-family="Montserrat,sans-serif">'+(j?'Año '+j:'Hoy')+'</text>'});
s+='<line x1="0" x2="600" y1="'+y(0)+'" y2="'+y(0)+'" stroke="rgba(245,242,236,.5)"/></svg>';g('ch').innerHTML=s;
g('cw').href=U.wa('Hola, simulé una inversión en Aura: '+n+' × '+m.id+'. Inversión '+usd(inv)+', neto anual '+usd(net)+', recupero '+(net>0?rec.toFixed(1)+' años':'sin recupero')+' ('+(mode==='temp'?'alquiler temporario, USD '+tar+'/noche, ocupación '+g('ioc').value+'%':'alquiler mensual USD '+tar)+'). Quiero un análisis a medida.')};
fill();g('im').onchange=function(){setMode(mode)};document.querySelector('.seg').onclick=function(e){var b=e.target.closest('button');if(b&&b.dataset.k!==mode)setMode(b.dataset.k)};
['ic','ip','io','it','iv','ioc','ik','x0','x1'].forEach(function(i){g(i).oninput=calc;g(i).onchange=calc});calc()})();
