export const API_KEY = "k_9d31z889";
export const API_URL = "https://imdb-api.com/API/Top250Movies";
export const IMAGE_URL =
  "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg";
const MOVIES_TESTE = [
  {
    id: "tt0111161",
    rank: "1",
    title: "The Shawshank Redemption",
    fullTitle: "The Shawshank Redemption (1994)",
    year: "1994",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
    imDbRating: "9.2",
    imDbRatingCount: "2639638",
  },
  {
    id: "tt0068646",
    rank: "2",
    title: "The Godfather",
    fullTitle: "The Godfather (1972)",
    year: "1972",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
    imDbRating: "9.2",
    imDbRatingCount: "1829691",
  },
  {
    id: "tt0468569",
    rank: "3",
    title: "The Dark Knight",
    fullTitle: "The Dark Knight (2008)",
    year: "2008",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
    imDbRating: "9.0",
    imDbRatingCount: "2611253",
  },
  {
    id: "tt0071562",
    rank: "4",
    title: "The Godfather Part II",
    fullTitle: "The Godfather Part II (1974)",
    year: "1974",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
    imDbRating: "9.0",
    imDbRatingCount: "1254464",
  },
  {
    id: "tt0050083",
    rank: "5",
    title: "12 Angry Men",
    fullTitle: "12 Angry Men (1957)",
    year: "1957",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
    imDbRating: "8.9",
    imDbRatingCount: "779333",
  },
  {
    id: "tt0108052",
    rank: "6",
    title: "Schindler's List",
    fullTitle: "Schindler's List (1993)",
    year: "1993",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
    imDbRating: "8.9",
    imDbRatingCount: "1338413",
  },
];
export const MOVIES_TEST = MOVIES_TESTE.map((oMovie)=>{
  return{...oMovie,status:"display"}
});
export const MOVIES = [
  {
    id: "tt0111161",
    rank: "1",
    title: "The Shawshank Redemption",
    fullTitle: "The Shawshank Redemption (1994)",
    year: "1994",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
    imDbRating: "9.2",
    imDbRatingCount: "2639638",
  },
  {
    id: "tt0068646",
    rank: "2",
    title: "The Godfather",
    fullTitle: "The Godfather (1972)",
    year: "1972",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
    imDbRating: "9.2",
    imDbRatingCount: "1829691",
  },
  {
    id: "tt0468569",
    rank: "3",
    title: "The Dark Knight",
    fullTitle: "The Dark Knight (2008)",
    year: "2008",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
    imDbRating: "9.0",
    imDbRatingCount: "2611253",
  },
  {
    id: "tt0071562",
    rank: "4",
    title: "The Godfather Part II",
    fullTitle: "The Godfather Part II (1974)",
    year: "1974",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
    imDbRating: "9.0",
    imDbRatingCount: "1254464",
  },
  {
    id: "tt0050083",
    rank: "5",
    title: "12 Angry Men",
    fullTitle: "12 Angry Men (1957)",
    year: "1957",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
    imDbRating: "8.9",
    imDbRatingCount: "779333",
  },
  {
    id: "tt0108052",
    rank: "6",
    title: "Schindler's List",
    fullTitle: "Schindler's List (1993)",
    year: "1993",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
    imDbRating: "8.9",
    imDbRatingCount: "1338413",
  },
  {
    id: "tt0167260",
    rank: "7",
    title: "The Lord of the Rings: The Return of the King",
    fullTitle: "The Lord of the Rings: The Return of the King (2003)",
    year: "2003",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Peter Jackson (dir.), Elijah Wood, Viggo Mortensen",
    imDbRating: "8.9",
    imDbRatingCount: "1815302",
  },
  {
    id: "tt0110912",
    rank: "8",
    title: "Pulp Fiction",
    fullTitle: "Pulp Fiction (1994)",
    year: "1994",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Quentin Tarantino (dir.), John Travolta, Uma Thurman",
    imDbRating: "8.8",
    imDbRatingCount: "2020120",
  },
  {
    id: "tt0120737",
    rank: "9",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    fullTitle: "The Lord of the Rings: The Fellowship of the Ring (2001)",
    year: "2001",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Peter Jackson (dir.), Elijah Wood, Ian McKellen",
    imDbRating: "8.8",
    imDbRatingCount: "1839341",
  },
  {
    id: "tt0060196",
    rank: "10",
    title: "The Good, the Bad and the Ugly",
    fullTitle: "The Good, the Bad and the Ugly (1966)",
    year: "1966",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Sergio Leone (dir.), Clint Eastwood, Eli Wallach",
    imDbRating: "8.8",
    imDbRatingCount: "753924",
  },
  {
    id: "tt0109830",
    rank: "11",
    title: "Forrest Gump",
    fullTitle: "Forrest Gump (1994)",
    year: "1994",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Robert Zemeckis (dir.), Tom Hanks, Robin Wright",
    imDbRating: "8.8",
    imDbRatingCount: "2043458",
  },
  {
    id: "tt0137523",
    rank: "12",
    title: "Fight Club",
    fullTitle: "Fight Club (1999)",
    year: "1999",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "David Fincher (dir.), Brad Pitt, Edward Norton",
    imDbRating: "8.7",
    imDbRatingCount: "2083440",
  },
  {
    id: "tt1375666",
    rank: "13",
    title: "Inception",
    fullTitle: "Inception (2010)",
    year: "2010",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Christopher Nolan (dir.), Leonardo DiCaprio, Joseph Gordon-Levitt",
    imDbRating: "8.7",
    imDbRatingCount: "2314665",
  },
  {
    id: "tt0167261",
    rank: "14",
    title: "The Lord of the Rings: The Two Towers",
    fullTitle: "The Lord of the Rings: The Two Towers (2002)",
    year: "2002",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Peter Jackson (dir.), Elijah Wood, Ian McKellen",
    imDbRating: "8.7",
    imDbRatingCount: "1639346",
  },
  {
    id: "tt0080684",
    rank: "15",
    title: "Star Wars: Episode V - The Empire Strikes Back",
    fullTitle: "Star Wars: Episode V - The Empire Strikes Back (1980)",
    year: "1980",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Irvin Kershner (dir.), Mark Hamill, Harrison Ford",
    imDbRating: "8.7",
    imDbRatingCount: "1276032",
  },
  {
    id: "tt0133093",
    rank: "16",
    title: "The Matrix",
    fullTitle: "The Matrix (1999)",
    year: "1999",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Lana Wachowski (dir.), Keanu Reeves, Laurence Fishburne",
    imDbRating: "8.7",
    imDbRatingCount: "1888633",
  },
  {
    id: "tt0099685",
    rank: "17",
    title: "Goodfellas",
    fullTitle: "Goodfellas (1990)",
    year: "1990",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Martin Scorsese (dir.), Robert De Niro, Ray Liotta",
    imDbRating: "8.7",
    imDbRatingCount: "1143597",
  },
  {
    id: "tt0073486",
    rank: "18",
    title: "One Flew Over the Cuckoo's Nest",
    fullTitle: "One Flew Over the Cuckoo's Nest (1975)",
    year: "1975",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Milos Forman (dir.), Jack Nicholson, Louise Fletcher",
    imDbRating: "8.6",
    imDbRatingCount: "997396",
  },
  {
    id: "tt0114369",
    rank: "19",
    title: "Se7en",
    fullTitle: "Se7en (1995)",
    year: "1995",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "David Fincher (dir.), Morgan Freeman, Brad Pitt",
    imDbRating: "8.6",
    imDbRatingCount: "1623500",
  },
  {
    id: "tt0047478",
    rank: "20",
    title: "Seven Samurai",
    fullTitle: "Seven Samurai (1954)",
    year: "1954",
    image:
      "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Akira Kurosawa (dir.), Toshirô Mifune, Takashi Shimura",
    imDbRating: "8.6",
    imDbRatingCount: "343560",
  },
  {
    id: "tt0038650",
    rank: "21",
    title: "It's a Wonderful Life",
    fullTitle: "It's a Wonderful Life (1946)",
    year: "1946",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Frank Capra (dir.), James Stewart, Donna Reed",
    imDbRating: "8.6",
    imDbRatingCount: "451305",
  },
  {
    id: "tt0102926",
    rank: "22",
    title: "The Silence of the Lambs",
    fullTitle: "The Silence of the Lambs (1991)",
    year: "1991",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Jonathan Demme (dir.), Jodie Foster, Anthony Hopkins",
    imDbRating: "8.6",
    imDbRatingCount: "1410770",
  },
  {
    id: "tt0317248",
    rank: "23",
    title: "City of God",
    fullTitle: "City of God (2002)",
    year: "2002",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Fernando Meirelles (dir.), Alexandre Rodrigues, Leandro Firmino",
    imDbRating: "8.6",
    imDbRatingCount: "750330",
  },
  {
    id: "tt0120815",
    rank: "24",
    title: "Saving Private Ryan",
    fullTitle: "Saving Private Ryan (1998)",
    year: "1998",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Steven Spielberg (dir.), Tom Hanks, Matt Damon",
    imDbRating: "8.6",
    imDbRatingCount: "1372188",
  },
  {
    id: "tt0118799",
    rank: "25",
    title: "Life Is Beautiful",
    fullTitle: "Life Is Beautiful (1997)",
    year: "1997",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Roberto Benigni (dir.), Roberto Benigni, Nicoletta Braschi",
    imDbRating: "8.6",
    imDbRatingCount: "687015",
  },
  {
    id: "tt0120689",
    rank: "26",
    title: "The Green Mile",
    fullTitle: "The Green Mile (1999)",
    year: "1999",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Frank Darabont (dir.), Tom Hanks, Michael Clarke Duncan",
    imDbRating: "8.6",
    imDbRatingCount: "1281820",
  },
  {
    id: "tt0816692",
    rank: "27",
    title: "Interstellar",
    fullTitle: "Interstellar (2014)",
    year: "2014",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Christopher Nolan (dir.), Matthew McConaughey, Anne Hathaway",
    imDbRating: "8.6",
    imDbRatingCount: "1782475",
  },
  {
    id: "tt0076759",
    rank: "28",
    title: "Star Wars: Episode IV - A New Hope",
    fullTitle: "Star Wars: Episode IV - A New Hope (1977)",
    year: "1977",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "George Lucas (dir.), Mark Hamill, Harrison Ford",
    imDbRating: "8.6",
    imDbRatingCount: "1348749",
  },
  {
    id: "tt0103064",
    rank: "29",
    title: "Terminator 2: Judgment Day",
    fullTitle: "Terminator 2: Judgment Day (1991)",
    year: "1991",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "James Cameron (dir.), Arnold Schwarzenegger, Linda Hamilton",
    imDbRating: "8.5",
    imDbRatingCount: "1085851",
  },
  {
    id: "tt0088763",
    rank: "30",
    title: "Back to the Future",
    fullTitle: "Back to the Future (1985)",
    year: "1985",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Robert Zemeckis (dir.), Michael J. Fox, Christopher Lloyd",
    imDbRating: "8.5",
    imDbRatingCount: "1185155",
  },
  {
    id: "tt0245429",
    rank: "31",
    title: "Spirited Away",
    fullTitle: "Spirited Away (2001)",
    year: "2001",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Hayao Miyazaki (dir.), Daveigh Chase, Suzanne Pleshette",
    imDbRating: "8.5",
    imDbRatingCount: "749969",
  },
  {
    id: "tt0054215",
    rank: "32",
    title: "Psycho",
    fullTitle: "Psycho (1960)",
    year: "1960",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Alfred Hitchcock (dir.), Anthony Perkins, Janet Leigh",
    imDbRating: "8.5",
    imDbRatingCount: "664112",
  },
  {
    id: "tt0253474",
    rank: "33",
    title: "The Pianist",
    fullTitle: "The Pianist (2002)",
    year: "2002",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Roman Polanski (dir.), Adrien Brody, Thomas Kretschmann",
    imDbRating: "8.5",
    imDbRatingCount: "820244",
  },
  {
    id: "tt0110413",
    rank: "34",
    title: "Léon: The Professional",
    fullTitle: "Léon: The Professional (1994)",
    year: "1994",
    image:
      "https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Luc Besson (dir.), Jean Reno, Gary Oldman",
    imDbRating: "8.5",
    imDbRatingCount: "1146105",
  },
  {
    id: "tt6751668",
    rank: "35",
    title: "Parasite",
    fullTitle: "Parasite (2019)",
    year: "2019",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Bong Joon Ho (dir.), Song Kang-ho, Lee Sun-kyun",
    imDbRating: "8.5",
    imDbRatingCount: "775353",
  },
  {
    id: "tt0110357",
    rank: "36",
    title: "The Lion King",
    fullTitle: "The Lion King (1994)",
    year: "1994",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Roger Allers (dir.), Matthew Broderick, Jeremy Irons",
    imDbRating: "8.5",
    imDbRatingCount: "1043986",
  },
  {
    id: "tt0172495",
    rank: "37",
    title: "Gladiator",
    fullTitle: "Gladiator (2000)",
    year: "2000",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Ridley Scott (dir.), Russell Crowe, Joaquin Phoenix",
    imDbRating: "8.5",
    imDbRatingCount: "1479712",
  },
  {
    id: "tt0120586",
    rank: "38",
    title: "American History X",
    fullTitle: "American History X (1998)",
    year: "1998",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Tony Kaye (dir.), Edward Norton, Edward Furlong",
    imDbRating: "8.5",
    imDbRatingCount: "1111173",
  },
  {
    id: "tt0407887",
    rank: "39",
    title: "The Departed",
    fullTitle: "The Departed (2006)",
    year: "2006",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Martin Scorsese (dir.), Leonardo DiCaprio, Matt Damon",
    imDbRating: "8.5",
    imDbRatingCount: "1308783",
  },
  {
    id: "tt0114814",
    rank: "40",
    title: "The Usual Suspects",
    fullTitle: "The Usual Suspects (1995)",
    year: "1995",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Bryan Singer (dir.), Kevin Spacey, Gabriel Byrne",
    imDbRating: "8.5",
    imDbRatingCount: "1074440",
  },
  {
    id: "tt0482571",
    rank: "41",
    title: "The Prestige",
    fullTitle: "The Prestige (2006)",
    year: "2006",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Christopher Nolan (dir.), Christian Bale, Hugh Jackman",
    imDbRating: "8.5",
    imDbRatingCount: "1315809",
  },
  {
    id: "tt0034583",
    rank: "42",
    title: "Casablanca",
    fullTitle: "Casablanca (1942)",
    year: "1942",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Michael Curtiz (dir.), Humphrey Bogart, Ingrid Bergman",
    imDbRating: "8.5",
    imDbRatingCount: "566935",
  },
  {
    id: "tt2582802",
    rank: "43",
    title: "Whiplash",
    fullTitle: "Whiplash (2014)",
    year: "2014",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Damien Chazelle (dir.), Miles Teller, J.K. Simmons",
    imDbRating: "8.5",
    imDbRatingCount: "837692",
  },
  {
    id: "tt1675434",
    rank: "44",
    title: "The Intouchables",
    fullTitle: "The Intouchables (2011)",
    year: "2011",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Olivier Nakache (dir.), François Cluzet, Omar Sy",
    imDbRating: "8.5",
    imDbRatingCount: "846293",
  },
  {
    id: "tt0056058",
    rank: "45",
    title: "Harakiri",
    fullTitle: "Harakiri (1962)",
    year: "1962",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Masaki Kobayashi (dir.), Tatsuya Nakadai, Akira Ishihama",
    imDbRating: "8.5",
    imDbRatingCount: "56139",
  },
  {
    id: "tt0095327",
    rank: "46",
    title: "Grave of the Fireflies",
    fullTitle: "Grave of the Fireflies (1988)",
    year: "1988",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Isao Takahata (dir.), Tsutomu Tatsumi, Ayano Shiraishi",
    imDbRating: "8.5",
    imDbRatingCount: "273496",
  },
  {
    id: "tt0027977",
    rank: "47",
    title: "Modern Times",
    fullTitle: "Modern Times (1936)",
    year: "1936",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Charles Chaplin (dir.), Charles Chaplin, Paulette Goddard",
    imDbRating: "8.4",
    imDbRatingCount: "240841",
  },
  {
    id: "tt0064116",
    rank: "48",
    title: "Once Upon a Time in the West",
    fullTitle: "Once Upon a Time in the West (1968)",
    year: "1968",
    image:
      "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Sergio Leone (dir.), Henry Fonda, Charles Bronson",
    imDbRating: "8.4",
    imDbRatingCount: "327329",
  },
  {
    id: "tt0047396",
    rank: "49",
    title: "Rear Window",
    fullTitle: "Rear Window (1954)",
    year: "1954",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Alfred Hitchcock (dir.), James Stewart, Grace Kelly",
    imDbRating: "8.4",
    imDbRatingCount: "487476",
  },
  {
    id: "tt0078748",
    rank: "50",
    title: "Alien",
    fullTitle: "Alien (1979)",
    year: "1979",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Ridley Scott (dir.), Sigourney Weaver, Tom Skerritt",
    imDbRating: "8.4",
    imDbRatingCount: "870631",
  },
  {
    id: "tt0021749",
    rank: "51",
    title: "City Lights",
    fullTitle: "City Lights (1931)",
    year: "1931",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Charles Chaplin (dir.), Charles Chaplin, Virginia Cherrill",
    imDbRating: "8.4",
    imDbRatingCount: "183868",
  },
  {
    id: "tt0095765",
    rank: "52",
    title: "Cinema Paradiso",
    fullTitle: "Cinema Paradiso (1988)",
    year: "1988",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UX128_CR0,12,128,176_AL_.jpg",
    crew: "Giuseppe Tornatore (dir.), Philippe Noiret, Enzo Cannavale",
    imDbRating: "8.4",
    imDbRatingCount: "258874",
  },
];

export const fnGetAleatorios = (iTotalRandom,iLength) => {
    var aRandoms = [];
    for (let index = 0; index < iTotalRandom; index++) {
      var iRandom = undefined;
      while(true){
        iRandom = Math.floor(Math.random()*iLength);
        let lenght = aRandoms.filter((value)=> value === iRandom ).length;
        if(lenght == 0){
          aRandoms.push(iRandom);
          break;
        }
      }
    }
    console.log("entraa");
    return aRandoms;
}