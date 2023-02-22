import { galleryItems } from "./gallery-items.js";
// Change code below this line
const wraperGallery = document.querySelector(".gallery");
let urlOriginalImage = ``;

// modal
const createItemGallery = (galleryItems) => {
  return galleryItems
    .map(
      (item) =>
        `<a class="gallery__item" href=${item.original}>
        <img class="gallery__image" src=${item.preview} alt='${item.description}' title='${item.description}' /></a>`
    )
    .join("");
};

const listGallery = createItemGallery(galleryItems);
wraperGallery.insertAdjacentHTML("afterbegin", listGallery);

const showModalImg = () => {
  let gallery = new SimpleLightbox(".gallery a");
  gallery.captionDelay = 250;
  gallery.on("show.simplelightbox");
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
