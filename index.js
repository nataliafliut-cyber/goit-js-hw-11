import{a as m,S as d,i as c}from"./assets/vendor-r3xvX9o-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="56192086-83055f2d7d7b11f9b3a937a1d",g="https://pixabay.com/api/";function y(i){const r={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"};return m.get(g,{params:r}).then(o=>o.data)}const u=document.querySelector(".gallery"),a=document.querySelector(".loader");let l=null;function b(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info-container">
          <p class="info-item"><b>Likes</b><span>${t}</span></p>
          <p class="info-item"><b>Views</b><span>${n}</span></p>
          <p class="info-item"><b>Comments</b><span>${f}</span></p>
          <p class="info-item"><b>Downloads</b><span>${p}</span></p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",r),l?l.refresh():l=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){u.innerHTML=""}function S(){a&&a.classList.remove("is-hidden")}function w(){a&&a.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",$);function $(i){i.preventDefault();const r=i.currentTarget,o=r.elements["search-text"].value.trim();if(o===""){c.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}L(),S(),y(o).then(s=>{if(s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(s=>{c.error({title:"Error",message:`Something went wrong: ${s.message}`,position:"topRight"})}).finally(()=>{w(),r.reset()})}
//# sourceMappingURL=index.js.map
