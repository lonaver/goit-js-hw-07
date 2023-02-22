import { galleryItems } from "./gallery-items.js";

// Change code below this line
const wraperGallery = document.querySelector(".gallery");
let urlOriginalImage;
let instance;

const handlerKeyEsc = (e) => {
  e = e || window.event;

  let isEscape = false;
  if ("key" in e) {
    isEscape = e.key === "Escape" || e.key === "Esc";
  } else {
    isEscape = e.keyCode === 27;
  }
  if (isEscape) {
    instance.close();
    window.removeEventListener("keydown", handlerKeyEsc);
  }
};

const createItemGallery = (galleryItems) => {
  return galleryItems
    .map(
      (item) =>
        `<div class="gallery__item"><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} data-source=${item.original} alt='${item.description}'/></a></div>`
    )
    .join("");
};

const listGallery = createItemGallery(galleryItems);
wraperGallery.insertAdjacentHTML("afterbegin", listGallery);

const showModalImg = () => {
  instance = basicLightbox.create(
    `<img src=${urlOriginalImage} width="1200" height="800">`
  );

  instance.show();
  window.addEventListener("keydown", handlerKeyEsc);
};

const handlerClickGalleryByImage = (e) => {
  e.preventDefault();
  const isActiveImage = e.target.classList.contains("gallery__image");
  if (!isActiveImage) {
    return;
  }
  urlOriginalImage = e.target.dataset.source;
  showModalImg();
};

wraperGallery.addEventListener("click", handlerClickGalleryByImage);

console.log(galleryItems);
