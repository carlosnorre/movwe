// Beispiel-Filmdaten
const movies = [
    { titel: "Inception", genre: ["Sci-Fi", "Action"], jahr: 2010, bewertung: 8.8, poster: "https://via.placeholder.com/200x300?text=Inception" },
    { titel: "The Shawshank Redemption", genre: ["Drama"], jahr: 1994, bewertung: 9.3, poster: "https://via.placeholder.com/200x300?text=Shawshank" }
  ];
  
  // Filmkarten erstellen
  const movieGrid = document.getElementById('movieGrid');
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.titel}">
      <h3>${movie.titel}</h3>
      <p>${movie.genre.join(', ')} • ${movie.jahr}</p>
      <p>⭐ ${movie.bewertung}</p>
    `;
    movieGrid.appendChild(card);
  });
  
  // Suchfunktion
  document.querySelector('.search-bar').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie =>
      movie.titel.toLowerCase().includes(searchTerm)
    );
    // Hier könntest du die Anzeige aktualisieren (für später)
  });
  