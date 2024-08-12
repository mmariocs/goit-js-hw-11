import{i as c,S as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function d(a){const r="45407925-ce6a1b403a4faf3a2586351fb",s=`https://pixabay.com/api/?${new URLSearchParams({key:r,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function m(a,r,l){const s=a.hits;if(s.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",progressBarColor:"#b51b1b"});return}const e=s.slice(0,9);r.innerHTML=g(e),l.refresh()}function g(a){return a.map(({webformatURL:r,largeImageURL:l,tags:s,likes:e,views:t,comments:i,downloads:u})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${l}">
          <img class="gallery-image" src="${r}" alt="${s}" />
        </a>
        <div class="gallery-info">
          <ul class="gallery-details">
            ${h(e,t,i,u)}
          </ul>
        </div>
      </li>
    `).join("")}function h(a,r,l,s){return`
    <li class="detail-item">
      <h3 class="detail-label">Likes</h3>
      <p class="detail-value">${a}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Views</h3>
      <p class="detail-value">${r}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Comments</h3>
      <p class="detail-value">${l}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Downloads</h3>
      <p class="detail-value">${s}</p>
    </li>
  `}const p=document.querySelector(".form"),o=document.querySelector(".gallery"),n=document.querySelector(".loader"),y=new f(".gallery a",{});p.addEventListener("submit",b);function b(a){a.preventDefault();const r=a.currentTarget[0].value.trim();r&&(o.innerHTML="",n.style.display="block",d(r).then(l=>m(l,o,y)).catch(()=>{c.error({message:"An error occurred while fetching data. Please try again later.",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",progressBarColor:"#b51b1b"})}).finally(()=>{n.style.display="none"}))}
//# sourceMappingURL=commonHelpers.js.map
