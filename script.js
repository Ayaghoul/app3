const movies = [
  {
    title: "Inception",
    description:
      "A skilled thief is offered a chance to erase his criminal history.",
    image:
      "https://m.media-amazon.com/images/I/912AErFSBHL._UF894,1000_QL80_.jpg",
  },
  {
    title: "Interstellar",
    description:
      "A team travels through a wormhole in space in an attempt to save humanity.",
    image: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
  },
  // Ajoute 4 autres films ici
];

const movieGrid = document.getElementById("movieGrid");

movies.forEach((movie) => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}" />
    <h2>${movie.title}</h2>
    <p>${movie.description}</p>
  `;
  movieGrid.appendChild(card);
});
