const translations={
  es:{
    navAbout:'Quiénes somos',navVision:'Nuestra visión',navShows:'Espectáculos',navExperiences:'Experiencias',navPartners:'Trayectoria',navContact:'Contacto',
    heroEyebrow:'PRODUCCIÓN INTERNACIONAL DE ENTRETENIMIENTO',heroLine1:'Magia que viaja',heroLine2:'con tu barco.',heroText:'Entretenimiento diseñado para la vida en el mar.',explore:'DESCUBRE LOS ESPECTÁCULOS',watch:'VER VÍDEO',scroll:'DESCUBRE MÁS ↓',
    aboutTag:'QUIÉNES SOMOS',aboutTitle:'MAGIA,<br/><span class="gold">CREADA PARA EL MAR.</span>',aboutP1:'Somos una empresa internacional especializada en entretenimiento mágico de alta calidad para cruceros y ferris.',aboutP2:'Fundada por el mago y productor Mago Vituco, la compañía nace de más de 15 años de experiencia directa en el mar, creando espectáculos capaces de funcionar noche tras noche en cualquier lugar del mundo.',aboutP3:'Hemos colaborado con Costa Cruises, Costa Asia, MSC Cruises, Baleària, Saga Cruises y Astro Ocean Cruises, entre otros operadores internacionales.',aboutQuote:'No vendemos trucos.<br/>Creamos experiencias inolvidables.',
    visionTag:'NUESTRA VISIÓN',visionTitle:'MÁS ALLÁ<br/>DEL TELÓN.',visionLead:'¿Por qué conformarse con un espectáculo de magia que termina cuando baja el telón?',visionP:'Diseñamos experiencias que van más allá del escenario y conectan con los pasajeros durante toda la travesía.',vis1:'↗ Espectáculos',vis2:'↗ Actividades',vis3:'↗ Talleres',vis4:'↗ Magia de cerca',visionClose:'Más impacto. Más interacción. Más recuerdos.',
    showsTag:'MAGIA EN EL ESCENARIO PRINCIPAL',showsTitle:'GRAN IMPACTO.<br/><span class="gold">CERO COMPLICACIONES.</span>',showsIntro:'Espectáculos visuales diseñados para grandes audiencias y creados específicamente para teatros de cruceros.',largeKicker:'01 / ESCENARIO PRINCIPAL',largeTitle:'ESPECTÁCULOS DE MAGIA',largeP:'Grandes ilusiones. Escenografías adaptadas a la operativa de backstage. Equipamiento almacenado a bordo. Rotación de artistas con espectáculos siempre renovados.',largeFoot:'MÁXIMA EFICIENCIA. MÁXIMO EFECTO.',flexKicker:'02 / FORMATOS FLEXIBLES',flexTitle:'UN MAGO. INFINITAS SORPRESAS.',flexP:'Una red internacional de Guest Entertainers profesionales, cada uno con un espectáculo de magia completo y autónomo, adaptable a cualquier barco, itinerario o necesidad operativa.',flexFoot:'FLY ON / FLY OFF · LISTOS PARA EMBARCAR',conceptKicker:'03 / DESARROLLO CREATIVO',conceptTitle:'DE LA IDEA A LO IMPOSIBLE.',conceptP:'Diseño conceptual, puesta en escena y desarrollo visual que transforman ideas en ilusiones memorables para públicos en el mar.',conceptFoot:'CONCEPTO · VISUALIZACIÓN · IMPACTO FINAL',
    videoTag:'DESCUBRE LA MAGIA',videoTitle:'LA EXPERIENCIA<br/><span class="gold">EN MOVIMIENTO.</span>',videoP:'Una mirada al universo de Mago Vituco. Descubre la energía, la escala y la emoción de la magia en el mar.',moreVideos:'MÁS VÍDEOS EN VIMEO ↗',
    exTag:'MAGIA INTERACTIVA',exTitle:'DE ESPECTADORES<br/><span class="gold">A PROTAGONISTAS.</span>',exP:'Experiencias que conectan. Recuerdos que viajan a casa.',ex1:'Talleres de magia para niños',ex2:'Talleres de magia para adultos',ex3:'Talleres de origami: creatividad, calma y arte en el mar',
    beyondTag:'ENTRETENIMIENTO MÁS ALLÁ DEL TEATRO',beyondTitle:'MAGIA, MOMENTOS<br/>Y RECUERDOS<br/><span class="gold">POR TODO EL BARCO.</span>',beyondP:'El entretenimiento ya no se limita al teatro principal. Llevamos experiencias artísticas y emocionales a todos los rincones del barco.',beyond1:'Momentos mágicos inesperados',beyond2:'Interacciones sorpresa en zonas sociales',beyond3:'Colaboraciones con eventos temáticos diarios',beyond4:'Apariciones mágicas en zonas de gran afluencia',beyondClose:'Más que un espectáculo: un viaje de experiencias.',
    partnersTag:'NUESTRA TRAYECTORIA',partnersTitle:'EXPERIENCIA<br/><span class="gold">INTERNACIONAL.</span>',partnersP:'Una selección de compañías de cruceros, hotelería y marcas con las que hemos trabajado.',partnersMore:'...Y MUCHAS MÁS.',
    contactTag:'CREEMOS ALGO EXTRAORDINARIO',contactTitle:'ELEVA TU<br/>ENTRETENIMIENTO.<br/><span class="gold">SORPRENDE A TUS<br/>PASAJEROS.</span>',contactQuote:'Los pasajeros no recuerdan los horarios. Recuerdan los momentos.',contactIntro:'Hablemos de tu próxima temporada.',contactButton:'ENVIAR CONSULTA',formNote:'Tu consulta se enviará a nuestro equipo de producción.',floatContact:'CONTACTAR ↗',footerTag:'MAGIA CREADA PARA EL MAR.'
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
    en:{formName:'Your name',formEmail:'Your email',formCompany:'Company / Cruise line',formMessage:'Tell us about your project'},
    es:{formName:'Tu nombre',formEmail:'Tu email',formCompany:'Empresa / naviera',formMessage:'Cuéntanos tu proyecto'}
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
    b.setAttribute('aria-pressed',String(active));
  });
  try{localStorage.setItem('mvp-language',lang)}catch(e){}
}

document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
try{if(localStorage.getItem('mvp-language')==='es')setLanguage('es'); else setLanguage('en')}catch(e){setLanguage('en')}

const topbar=document.querySelector('.topbar');
function updateTopbar(){topbar?.classList.toggle('scrolled',window.scrollY>24)}
window.addEventListener('scroll',updateTopbar,{passive:true});updateTopbar();
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target)}})},{threshold:.07,rootMargin:'0px 0px 45px 0px'});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
