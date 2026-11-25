const root=document.documentElement;
const themeToggle=document.getElementById('themeToggle');
const themeIcon=document.getElementById('themeIcon');
function setTheme(theme){root.dataset.theme=theme;localStorage.setItem('sws-theme',theme);themeIcon.textContent=theme==='dark'?'☼':'☾';themeToggle.setAttribute('aria-label',theme==='dark'?'Switch to light theme':'Switch to dark theme')}
setTheme(root.dataset.theme||'dark');
themeToggle.addEventListener('click',()=>setTheme(root.dataset.theme==='dark'?'light':'dark'));
const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.nav-link')];
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id))}})},{rootMargin:'-35% 0px -55% 0px'});sections.forEach(section=>observer.observe(section))}