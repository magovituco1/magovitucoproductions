const translations={
  es:{
    navAbout:'Quiénes somos',navVision:'Nuestra visión',navShows:'Espectáculos',navExperiences:'Experiencias',navPartners:'Trayectoria',navContact:'Contacto',
    heroEyebrow:'MAGIA Y ENTRETENIMIENTO PARA CRUCEROS',heroLine1:'Magia que viaja',heroLine2:'con tu barco.',heroText:'Espectáculos de magia, artistas invitados y experiencias memorables para pasajeros a bordo.',explore:'DESCUBRE LOS ESPECTÁCULOS',watch:'VER VÍDEO',scroll:'DESCUBRE MÁS ↓',
    aboutTag:'QUIÉNES SOMOS',aboutTitle:'MAGIA,<br/><span class="gold">CREADA PARA EL MAR.</span>',aboutP1:'Mago Vituco Productions crea espectáculos profesionales de magia y entretenimiento para cruceros, ferris y públicos internacionales. Ofrecemos grandes ilusiones, magos invitados, magia de cerca y actividades participativas.',aboutP2:'Fundada por el mago y productor Mago Vituco, nuestra actividad se apoya en más de 15 años de experiencia en entretenimiento marítimo, desde producciones residentes hasta actuaciones como artista invitado.',aboutP3:'Nuestra trayectoria incluye colaboraciones con Costa Cruises, Costa Asia, MSC Cruises, Baleària, Saga Cruises y Astro Ocean Cruises, entre otros operadores internacionales.',aboutQuote:'No vendemos trucos.<br/>Creamos experiencias inolvidables.',
    visionTag:'NUESTRA VISIÓN',visionTitle:'MÁS ALLÁ<br/>DEL TELÓN.',visionLead:'¿Por qué conformarse con un espectáculo de magia que termina cuando baja el telón?',visionP:'Del teatro principal a los espacios sociales del barco, diseñamos experiencias conectadas: espectáculos, participación del público, talleres de magia y momentos de magia de cerca que complementan el programa de entretenimiento a bordo.',vis1:'↗ Espectáculos',vis2:'↗ Actividades',vis3:'↗ Talleres',vis4:'↗ Magia de cerca',visionClose:'Más impacto. Más interacción. Más recuerdos.',
    showsTag:'MAGIA EN EL ESCENARIO PRINCIPAL',showsTitle:'GRAN IMPACTO.<br/><span class="gold">CERO COMPLICACIONES.</span>',showsIntro:'Dos formatos para navieras: producciones de grandes ilusiones para teatros de cruceros y espectáculos flexibles con magos invitados, adaptados a la operativa a bordo.',largeKicker:'01 / ESCENARIO PRINCIPAL',largeTitle:'ESPECTÁCULOS DE MAGIA',largeP:'Grandes ilusiones escénicas creadas para teatros de cruceros, con impacto visual y una puesta en escena que contempla las necesidades de backstage, montaje y almacenamiento de los equipos de entretenimiento marítimo.',largeFoot:'MÁXIMA EFICIENCIA. MÁXIMO EFECTO.',flexKicker:'02 / FORMATOS FLEXIBLES',flexTitle:'UN MAGO. INFINITAS SORPRESAS.',flexP:'Los talleres de magia y origami permiten que familias y adultos participen en el entretenimiento a bordo más allá de los espectáculos del teatro.',flexFoot:'FLY ON / FLY OFF · LISTOS PARA EMBARCAR',conceptKicker:'03 / DESARROLLO CREATIVO',conceptTitle:'DE LA IDEA A LO IMPOSIBLE.',conceptP:'Diseño conceptual, puesta en escena y desarrollo visual que transforman ideas en ilusiones memorables para públicos en el mar.',conceptFoot:'CONCEPTO · VISUALIZACIÓN · IMPACTO FINAL',
    videoTag:'DESCUBRE LA MAGIA',videoTitle:'LA EXPERIENCIA<br/><span class="gold">EN MOVIMIENTO.</span>',videoP:'Una mirada al universo de Mago Vituco. Descubre la energía, la escala y la emoción de la magia en el mar.',moreVideos:'MÁS VÍDEOS EN VIMEO ↗',
    exTag:'MAGIA INTERACTIVA',exTitle:'DE ESPECTADORES<br/><span class="gold">A PROTAGONISTAS.</span>',exP:'Experiencias que conectan. Recuerdos que viajan a casa.',ex1:'Talleres de magia para niños',ex2:'Talleres de magia para adultos',ex3:'Talleres de origami: creatividad, calma y arte en el mar',
    beyondTag:'ENTRETENIMIENTO MÁS ALLÁ DEL TEATRO',beyondTitle:'MAGIA, MOMENTOS<br/>Y RECUERDOS<br/><span class="gold">POR TODO EL BARCO.</span>',beyondP:'Llevamos la magia más allá del teatro mediante encuentros de cerca, intervenciones sorpresa y actuaciones en zonas sociales. Cada actividad complementa la experiencia del pasajero durante la travesía.',beyond1:'Momentos mágicos inesperados',beyond2:'Interacciones sorpresa en zonas sociales',beyond3:'Colaboraciones con eventos temáticos diarios',beyond4:'Apariciones mágicas en zonas de gran afluencia',beyondClose:'Más que un espectáculo: un viaje de experiencias.',
    partnersTag:'NUESTRA TRAYECTORIA',partnersTitle:'EXPERIENCIA<br/><span class="gold">INTERNACIONAL.</span>',partnersP:'Selección de navieras, ferris, resorts y marcas corporativas que forman parte de nuestra trayectoria internacional.',partnersMore:'...Y MUCHAS MÁS.',
    contactTag:'CREEMOS ALGO EXTRAORDINARIO',contactTitle:'ELEVA TU<br/>ENTRETENIMIENTO.<br/><span class="gold">SORPRENDE A TUS<br/>PASAJEROS.</span>',contactQuote:'Los pasajeros no recuerdan los horarios. Recuerdan los momentos.',contactIntro:'¿Estás organizando entretenimiento para un crucero, una producción de magia o la contratación de un artista invitado? Cuéntanos tu proyecto.',contactButton:'ENVIAR CONSULTA',formNote:'Tu consulta se enviará a nuestro equipo de producción.',floatContact:'CONTACTAR ↗',footerTag:'MAGIA CREADA PARA EL MAR.'
  }
};

const translatable=document.querySelectorAll('[data-i]');
function setLanguage(lang){
  document.documentElement.lang=lang;
  for(const el of translatable){
    if(!el.dataset.en) el.dataset.en=el.innerHTML;
    el.innerHTML = lang==='es' ? (translations.es[el.dataset.i] ?? el.dataset.en) : el.dataset.en;
  }
  const placeholders={
    en:{formName:'Your name',formEmail:'Your email',formCompany:'Company',formMessage:'Tell us about your project'},
    es:{formName:'Tu nombre',formEmail:'Tu email',formCompany:'Compañía',formMessage:'Cuéntanos tu proyecto'}
  };
  document.querySelectorAll('[data-ph]').forEach(el=>{
    const key=el.dataset.ph;
    el.placeholder=(placeholders[lang]&&placeholders[lang][key])||placeholders.en[key]||'';
  });
  const select=document.querySelector('[data-select="formType"]');
  if(select){const labels=lang==='es'?['Tipo de consulta','Entretenimiento para cruceros','Producción de espectáculos','Guest entertainers','Evento corporativo','Otra consulta']:['Type of enquiry','Cruise entertainment','Show production','Guest entertainers','Corporate event','Other'];Array.from(select.options).forEach((o,i)=>o.textContent=labels[i]||o.textContent)}
  document.querySelectorAll('[data-lang]').forEach(b=>{
    let active=b.dataset.lang===lang;
    b.classList.toggle('active',active);
    if(b.tagName==='A') b.setAttribute('aria-current',active?'page':'false'); else b.setAttribute('aria-pressed',String(active));
  });
  try{localStorage.setItem('mvp-language',lang)}catch(e){}
}


const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
// Language belongs to the URL for search engines; English is the default home page.
const pageLanguage=/\/es(?:\/index\.html)?\/?$/.test(window.location.pathname)?'es':'en';
if(pageLanguage==='es'){
  document.documentElement.lang='es';
  document.querySelectorAll('[data-lang]').forEach(b=>{const active=b.dataset.lang==='es';b.classList.toggle('active',active);if(b.tagName==='A')b.setAttribute('aria-current',active?'page':'false');else b.setAttribute('aria-pressed',String(active))});
}else{setLanguage('en')}


const topbar=document.querySelector('.topbar');
function updateTopbar(){topbar?.classList.toggle('scrolled',window.scrollY>24)}
window.addEventListener('scroll',updateTopbar,{passive:true});updateTopbar();
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target)}})},{threshold:.07,rootMargin:'0px 0px 45px 0px'});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}


// V10: Submit to Formspree without navigating away until the service confirms success.
// Uses the Mago Vituco Productions Formspree endpoint configured in index.html.
const contactForm=document.getElementById('contact-form');
if(contactForm){
  const submitButton=contactForm.querySelector('button[type="submit"]');
  const submitLabel=submitButton?.querySelector('[data-i="contactButton"]');
  const formStatus=document.getElementById('form-status');
  let sending=false;
  contactForm.addEventListener('submit',async function(event){
    event.preventDefault();
    if(sending||!contactForm.reportValidity())return;
    const lang=document.documentElement.lang==='es'?'es':'en';
    const translations={
      en:{sending:'SENDING…',failed:'We could not send your message. Please try again or email info@magovituco.com.',notConfigured:'This contact form is being configured. Please email info@magovituco.com.'},
      es:{sending:'ENVIANDO…',failed:'No hemos podido enviar tu mensaje. Inténtalo de nuevo o escribe a info@magovituco.com.',notConfigured:'Estamos configurando el formulario. Escríbenos a info@magovituco.com.'}
    };
    const copy=translations[lang];
    const endpoint=contactForm.action;
    if(!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)||endpoint.includes('YOUR_FORM_ID')){
      formStatus.textContent=copy.notConfigured;
      formStatus.hidden=false;
      formStatus.className='form-status error';
      return;
    }
    sending=true;
    if(submitButton)submitButton.disabled=true;
    if(submitLabel)submitLabel.textContent=copy.sending;
    formStatus.hidden=true;
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),20000);
    try{
      const response=await fetch(endpoint,{
        method:'POST',
        body:new FormData(contactForm),
        headers:{'Accept':'application/json'},
        signal:controller.signal
      });
      let body=null;
      try{body=await response.json()}catch(e){}
      if(!response.ok||!body||body.ok!==true){
        const details=Array.isArray(body?.errors)?body.errors.map(x=>x.message).filter(Boolean).join(' '):'';
        throw new Error(details||copy.failed);
      }
      const target=new URL(lang==='es'?'../thanks.html':'thanks.html',window.location.href);
      target.searchParams.set('lang',lang);
      window.location.assign(target.href);
    }catch(error){
      const message=error?.name==='AbortError'?copy.failed:(error?.message||copy.failed);
      formStatus.textContent=message;
      formStatus.hidden=false;
      formStatus.className='form-status error';
    }finally{
      clearTimeout(timeout);
      sending=false;
      if(submitButton)submitButton.disabled=false;
      if(submitLabel)submitLabel.textContent=lang==='es'?'ENVIAR CONSULTA':'SEND ENQUIRY';
    }
  });
}

// V13.1: load Vimeo only following explicit user activation.
document.querySelectorAll('.video-launch').forEach(button=>{
  button.addEventListener('click',()=>{
    const iframe=document.createElement('iframe');
    iframe.title=document.documentElement.lang==='es'?'Video promocional de Mago Vituco':'Mago Vituco showreel';
    iframe.allow='autoplay; fullscreen; picture-in-picture';
    iframe.allowFullscreen=true;
    iframe.referrerPolicy='strict-origin-when-cross-origin';
    iframe.src=button.dataset.videoSrc;
    button.replaceWith(iframe);
    iframe.focus();
  },{once:true});
});
