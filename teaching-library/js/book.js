(function(){
  const token = sessionStorage.getItem('tl_token');
  if(!token){ window.location.href='index.html'; return; }

  // Download buttons
  document.querySelectorAll('.action-btn[data-file]').forEach(btn=>{
    btn.addEventListener('click',async function(){
      const file=this.dataset.file, label=this.dataset.label;
      const orig=this.textContent; this.textContent='Loading\u2026'; this.disabled=true;
      try{
        const r=await fetch('https://crowscallpress-production.up.railway.app/download',{
          method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
          body:JSON.stringify({file})
        });
        if(!r.ok) throw new Error(await r.text());
        const {url}=await r.json();
        const a=document.createElement('a'); a.href=url; a.download=label+'.pdf'; a.target='_blank';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
      }catch(e){ alert('Download failed: '+e.message); }
      this.textContent=orig; this.disabled=false;
    });
  });

  // Back to top
  const btn=document.getElementById('backToTop');
  window.addEventListener('scroll',()=>{ btn.classList.toggle('visible',window.scrollY>400); });
  btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
})();
