(()=>{
 const id='G-9XTKW91EWG', key='mvp-analytics-consent-v1';
 const es=document.documentElement.lang==='es';
 let choice=null;try{const saved=JSON.parse(localStorage.getItem(key));if(saved&&Date.now()-saved.time<15552000000)choice=saved.choice}catch(e){}
 window['ga-disable-'+id]=choice!=='yes';
 let loaded=false;
 function start(){if(loaded)return;loaded=true;window['ga-disable-'+id]=false;window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};gtag('js',new Date());gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('config',id,{allow_google_signals:false,allow_ad_personalization_signals:false,page_location:location.origin+location.pathname});const s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+id;document.head.append(s)}
 window.mvpTrack=(name,params={})=>{if(choice==='yes'&&loaded)gtag('event',name,params)};
 const panel=document.createElement('section');panel.className='mvp-consent';panel.setAttribute('aria-label',es?'Preferencias de cookies':'Cookie preferences');panel.hidden=choice==='yes'||choice==='no';
 panel.innerHTML=`<strong>${es?'Tu privacidad':'Your privacy'}</strong><p>${es?'Usamos Google Analytics, solo con tu permiso, para medir visitas y mejorar la web. Puedes rechazarlo y seguir navegando.':'With your permission, we use Google Analytics to measure visits and improve this website. You can decline and continue browsing.'} <a href="${es?'/es/privacidad.html':'/privacy.html'}">${es?'Política de privacidad y cookies':'Privacy and cookie policy'}</a></p><div><button type="button" data-choice="no">${es?'Rechazar':'Reject'}</button><button type="button" data-choice="yes">${es?'Aceptar':'Accept'}</button></div>`;
 document.body.append(panel);
 function select(value){const was=choice;choice=value;try{localStorage.setItem(key,JSON.stringify({choice,time:Date.now()}))}catch(e){}panel.hidden=true;if(value==='yes'){start()}else{window['ga-disable-'+id]=true;if(loaded)gtag('consent','update',{analytics_storage:'denied'});for(const name of document.cookie.split(';').map(x=>x.split('=')[0].trim()).filter(x=>/^_ga(?:_|$)/.test(x))){for(const domain of ['', ';domain='+location.hostname,';domain=.magovituco.com'])document.cookie=name+'=; Max-Age=0; path=/'+domain}if(was==='yes'&&loaded)location.reload()}}
 panel.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>select(b.dataset.choice)));
 document.querySelectorAll('[data-cookie-settings]').forEach(b=>b.addEventListener('click',()=>{panel.hidden=false;panel.querySelector('button').focus()}));
 document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;const href=a.getAttribute('href')||'';if(href.startsWith('mailto:'))window.mvpTrack('email_click');if(href.startsWith('tel:'))window.mvpTrack('phone_click')});
 if(choice==='yes')start();
})();
