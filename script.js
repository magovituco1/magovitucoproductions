const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
// Language belongs to the URL for search engines; English is the default home page.
const pageLanguage=document.documentElement.lang==='es'?'es':'en';
try{localStorage.setItem('mvp-language',pageLanguage)}catch(e){}
const topbar=document.querySelector('.topbar');
let lastScrolled=null;
function updateTopbar(){const scrolled=window.scrollY>24;if(scrolled!==lastScrolled){lastScrolled=scrolled;topbar?.classList.toggle('scrolled',scrolled)}}
window.addEventListener('scroll',updateTopbar,{passive:true});
requestAnimationFrame(updateTopbar);
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 document.documentElement.classList.add('js-ready');
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
    button.parentElement.querySelector(".video-cover")?.remove();
    button.replaceWith(iframe);
    iframe.focus();
  },{once:true});
});
