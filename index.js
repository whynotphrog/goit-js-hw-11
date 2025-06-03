import{a as d,S as f,i as n}from"./assets/vendor-BLPZKqeQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const p="50661011-0ce0d2a716009781924e103de",m="https://pixabay.com/api/";async function y(o){const s={key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:s})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const s=o.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img 
          class="gallery-image"
          src="${e.webformatURL}" 
          alt="${e.tags}" 
        />
      </a>
      <ul class="meta">
        <li>Likes: <span>${e.likes}</span></li>
        <li>Views: <span>${e.views}</span></li>
        <li>Comments: <span>${e.comments}</span></li>
        <li>Downloads: <span>${e.downloads}</span></li>
      </ul>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",s),g.refresh()}function L(){l.innerHTML=""}function b(){c.classList.add("is-visible")}function w(){c.classList.remove("is-visible")}const u=document.querySelector(".form"),q=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async o=>{o.preventDefault();const s=q.value.trim();if(!s){n.warning({message:"Please enter a search query!"});return}L(),b();try{const e=await y(s);e.hits.length===0?n.error({message:"Sorry, there are no images matching your search query.<br>Please try again!",position:"topRight",backgroundColor:"#ef4040"}):h(e.hits)}catch(e){n.error({message:"An error occurred while fetching data."}),console.error(e)}finally{w()}});
//# sourceMappingURL=index.js.map
