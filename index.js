import{a as d,S as f,i}from"./assets/vendor-BLPZKqeQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="50661011-0ce0d2a716009781924e103de",y="https://pixabay.com/api/";async function p(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(y,{params:o})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img 
          class="gallery-image"
          src="${e.webformatURL}" 
          alt="${e.tags}" 
        />
      </a>
      <ul class="meta">
        <li>Likes: ${e.likes}</li>
        <li>Views: ${e.views}</li>
        <li>Comments: ${e.comments}</li>
        <li>Downloads: ${e.downloads}</li>
      </ul>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){l.innerHTML=""}function w(){c.classList.add("is-visible")}function b(){c.classList.remove("is-visible")}const u=document.querySelector(".form"),q=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const o=q.value.trim();if(!o){i.warning({message:"Please enter a search query!"});return}L(),w();try{const e=await p(o);e.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):h(e.hits)}catch(e){i.error({message:"An error occurred while fetching data."}),console.error(e)}finally{b()}});
//# sourceMappingURL=index.js.map
