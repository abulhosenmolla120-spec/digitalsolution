document.addEventListener('DOMContentLoaded',()=>{
// [মোবাইল মেনু] নিচের অংশে মোবাইল নেভিগেশন খোলা/বন্ধ করার কোড আছে।
const menu=document.querySelector('[data-menu]'), mobile=document.querySelector('[data-mobile-nav]');
if(menu&&mobile){menu.addEventListener('click',()=>{mobile.classList.toggle('open'); menu.setAttribute('aria-expanded',mobile.classList.contains('open'))});mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')))}
// [SCROLL ANIMATION] ওয়েবসাইটের section/card scroll করলে সুন্দরভাবে দেখানোর animation এখানে নিয়ন্ত্রণ করা হয়।
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
// [BACK TO TOP] নিচের button scroll অবস্থার উপর ভিত্তি করে দেখা যাবে।
const top=document.querySelector('.to-top');window.addEventListener('scroll',()=>{if(top)top.classList.toggle('show',scrollY>700)});top?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
});