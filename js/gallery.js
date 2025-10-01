
const images = [
  {
    preview:
      'images/foto1.jpg',
    original:
      'images/foto1-1.jpg',
    description: 'foto 1',
  },
  {
    preview:
      'images/foto2.jpg',
    original:
      'images/foto2-1.jpg',
    description: 'foto 2',
  },
  {
    preview:
      'images/foto3.jpg',
    original:
      'images/foto3-1.jpg',
    description: 'foto 3',
  },
  {
    preview:
      'images/foto4.jpg',
    original:
      'images/foto4-4.jpg',
    description: 'foto 4',
  },
  {
    preview:
      'images/foto5.jpg',
    original:
      'images/foto5-1.jpg',
    description: 'foto 5',
  },
  {
    preview:
      'images/foto6.jpg',
    original:
      'images/foto6-1.jpg',
    description: 'foto 6',
  },
  {
    preview:
      'images/foto7.jpg',
    original:
      'images/foto7-1.jpg',
    description: 'foto 7',
  },
  {
    preview:
      'images/foto8.jpg',
    original:
      'images/foto8-1.jpg',
    description: 'foto 8',
  },
  {
    preview:
      'images/foto9.jpg',
    original:
     'images/foto9-1.jpg',
    description: 'foto 9',
  },
];

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;

  const largeImageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600">
  `);

  instance.show();
});