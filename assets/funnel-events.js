/* Manifestation pixel 1181909070199516 (ACC 1). Isolated PageView; keep existing pixels untouched. */
(function(w,d){
  'use strict';
  var id='1181909070199516';
  if(w.__tryTheScriptManifestation516Loaded)return;
  w.__tryTheScriptManifestation516Loaded=true;
  if(typeof w.fbq!=='function'){
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(w,d,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
  }
  w.fbq('init',id);
  w.fbq('trackSingle',id,'PageView');
})(window,document);


(()=>{'use strict';const cfg=document.querySelector('meta[name="funnel-id"]');if(!cfg)return;const funnel=cfg.content;const key='sean-funnel-attribution-v1';let ctx={};const q=new URLSearchParams(location.search);try{ctx=JSON.parse(sessionStorage.getItem(key)||'{}')}catch(e){}if(!ctx[funnel])ctx[funnel]={funnel,cohort:new Intl.DateTimeFormat('en-CA',{timeZone:'America/Panama',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())};const current=ctx[funnel];for(const k of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']){const v=q.get(k);if(v)current[k]=v.slice(0,150)}try{sessionStorage.setItem(key,JSON.stringify(ctx))}catch(e){}function emit(event,extra){window.dataLayer=window.dataLayer||[];window.dataLayer.push(Object.assign({},current,extra||{},{event,funnel}));}window.FunnelEvents={emit,attribution:current};emit('funnel_page_view',{page:location.pathname});
function decorate(a){try{const u=new URL(a.href,location.href);if(!['https:','http:'].includes(u.protocol))return;const own=['trythescript.com','hypnoticmeditations.ai'].includes(u.hostname);const checkout=['buy.hypnoticmeditations.ai','pay.hotmart.com','www.checkout-ds24.com','www.digistore24.com'].includes(u.hostname);if(!own&&!checkout)return;for(const k of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'])if(current[k]&&!u.searchParams.has(k))u.searchParams.set(k,current[k]);if(checkout){u.searchParams.set('utm_campaign',current.utm_campaign||funnel+'-'+current.cohort);const cohortKey=funnel+'-'+current.cohort;if(u.hostname==='pay.hotmart.com'&&!u.searchParams.has('sck'))u.searchParams.set('sck',cohortKey);if(['www.checkout-ds24.com','www.digistore24.com'].includes(u.hostname)&&!u.searchParams.has('ds24tr'))u.searchParams.set('ds24tr',cohortKey);}a.href=u.toString()}catch(e){}}
document.querySelectorAll('a[href]').forEach(decorate);document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a)return;decorate(a);const u=new URL(a.href,location.href);if(['buy.hypnoticmeditations.ai','pay.hotmart.com','www.checkout-ds24.com','www.digistore24.com'].includes(u.hostname))emit('checkout_click',{checkout_host:u.hostname,page:location.pathname});});document.querySelectorAll('form[action*="aweber.com"]').forEach(f=>{for(const name of ['redirect','meta_redirect_onlist']){const i=f.querySelector('[name="'+name+'"]');if(i){try{const u=new URL(i.value);for(const k of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'])if(current[k])u.searchParams.set(k,current[k]);i.value=u.toString()}catch(e){}}}f.addEventListener('submit',()=>emit('lead_form_submit',{page:location.pathname}));});document.querySelectorAll('audio').forEach((a,i)=>{let started=false;a.addEventListener('play',()=>{if(!started){emit('audio_start',{audio_index:i+1,page:location.pathname});started=true}});a.addEventListener('ended',()=>emit('audio_complete',{audio_index:i+1,page:location.pathname}));});
})();
