
(() => {
 const button=document.querySelector('[data-theme-toggle]');
 let saved;try{saved=localStorage.getItem('portfolio-theme')}catch{}
 if(saved==='dark')document.documentElement.dataset.theme='dark';
 const sync=()=>{if(button){const dark=document.documentElement.dataset.theme==='dark';button.setAttribute('aria-pressed',String(dark));button.textContent=dark?'Light':'Dark';button.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme')}};
 sync();if(button)button.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('portfolio-theme',next)}catch{}sync()});
 const filters=document.querySelectorAll('[data-filter]');const cards=document.querySelectorAll('[data-area]');
 filters.forEach(b=>b.addEventListener('click',()=>{filters.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));let count=0;cards.forEach(c=>{const visible=b.dataset.filter==='all'||c.dataset.area===b.dataset.filter;c.hidden=!visible;if(visible)count++});const status=document.querySelector('[data-filter-status]');if(status)status.textContent=count+' research projects shown'}));
})();
