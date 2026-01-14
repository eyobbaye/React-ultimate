const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
// 1, Destructuring: A JS expression that make it possible to unpack values from arrays or properties from objects into distinct variables.
// Destructure to get the title and author of each book

const books = getBooks();
books.forEach((book)=>{
    const  {title, author}= book;
    console.log(`Tittle:${title}, Author: ${ author}`)
})
// Destructure to get the primary and secondary genres of the book with id 2
const [primaryGenre, secondaryGenre]= getBook(2).genres;
console.log(primaryGenre, secondaryGenre)
// Destructure to get the Spanish and Chinese translations of each book
books.forEach((book)=>{
    const {spanish, chinese} = book.translations;
    console.log(`Spanish: ${spanish}, Chinese: ${chinese}`)
})

// 1.1, RestSpread Operator: Gather the remaining elements into an array or object.
//  Destructure to get all genres except the primary one for each book
books.forEach((book)=>{
    const [primaryGenre, ...otherGenres]= book.genres;
    console.log(`${otherGenres}`)
})
//  Create a new array of genres for the book with id 1, adding "Drama" as an additional genre
const {genres} = getBook(1);    
const newGenres = [...genres,"Drama"]
newGenres;

// Create a new objectfor the book with id 3, changing the number of pages to 700
const book5 = getBook(5);
const updatedBook5 = {...book5, pages:700};
updatedBook5

//  Adding a new array of moviePublicationDate to the book with id 4
const book4 =getBook(2);
const updatedBook4 = {...book4, moviePublicationDate:'2026-12-25'}
updatedBook4

// 1.3 Terinary Opretator: A conditional operator that provides a shorthand way to express conditional statements.
const hasMovieAdaptation = books.map((book)=>{
    return book.hasMovieAdaptation ? `${book.title} has a movie adaptaition`: `${book.title} has NO a movie adaptation`;
})
hasMovieAdaptation
// No of movie that has a movie adaptation

const countMovieAdaptations = books.reduce((count, book)=>{
    return book.hasMovieAdaptation ? count + 1: count;
}, 0);
countMovieAdaptations

// 1,4 Arrow Functions: A concise syntax for writing functions using the "=>" syntax.
// Use arrow functions to create a function that returns the titles of all books
const getBookTitles = books.map((book)=> book.title);
getBookTitles

// 1,5 Short circuting`: A technique that uses logical operators to conditionally execute expressions based on the truthiness of values.
//  movie adaptation 
const book1 = getBook(3);
console.log(book1.hasMovieAdaptation && "This book has movie adaptation" || "No movie adaptation available");
// Review count
const reviewCount= book1.reviews.goodreads.reviewsCount || "No reviews available";
reviewCount

// 1.6 Optional  Chaining: A synax to safely access nested onjects properties, even if the proper is  undefined or null
// When ever we are unshure that the value is exist or not, we can use optional chainingto avoid errors.
// Get the number of revies for the book with ID 3 from librarything, using oprional chaining.
function getTotalReviewCount (book1){
const goodreads = book1.reviews.goodreads.reviewsCount
const librarything = book1.reviews.librarything?.reviewsCount ?? + 0
librarything
return goodreads + librarything;
}
console.log(getTotalReviewCount(book1));

function getSpanishTranslation(book1){
  return book1.translations.spanish ?? "No Spanish";

}
console.log(getSpanishTranslation(book1)); 

const getSpanishTranslation1=(book1)=> book1.translations.spanish ?? "No Spanish";
console.log(getTotalReviewCount(book1))
*/

// 2, Array Methods Practice 
// 2.1, .Map(): it loop through each element in an array and appply a function to each element, and returning a new array
const x = [1,2,3,4,5].map(el=> el*2);
console.log(x)

const books = getBooks(1);
books

const bookTitle=books.map((book)=>book.title);
console.log(bookTitle);
// Create a new array  which contains the title and author of each book.
const bookTitleAndAuthor = books.map((book)=> ` Title: ${book.title}, By ${book.author}`)
console.log(bookTitleAndAuthor)

// 2.2 Filter(): It creates a new array with all e/l that pass the filter method test.
const longPageBooks = books.filter((book)=> book.pages >= 1000).filter((book)=> book.title.startsWith("The"));
console.log(longPageBooks);
// Create a new array that contains only the books title that have more than 500 pages.
const bookOver500Pages= books.filter((book)=> book.pages > 500).map((book)=> book.title);
bookOver500Pages
// Create a new array that contains only the books title that have geners= "Action"
const actionGenreBooks = books.filter((book)=> book.genres.includes("adventure")).map((book)=> book.title);
actionGenreBooks;

// 2.3 Reduce(): it use the reducer function to each element of an array and reduce it to the a single calue.
// give us a single value as result.
// 
const numbers = [1,2,3,4,5]
const totalSum = numbers.reduce((acc, num)=> acc + num,0);
totalSum;
// totla numbers of pages of all books.
const totalPages = books.reduce((acc,book)=> acc + book.pages,0);
totalPages;
console.log(books.map((book)=> book.pages));
//  Get the book with the highest number of pages.
const bookWithMostPAges= books.reduce((maxBook, currentBook)=> {
  return currentBook.pages > maxBook.pages ? currentBook: maxBook;
})
bookWithMostPAges;
// 2.4 Sort(): sorts the elements of an array in place and returns the sorted array.
const sortedBooksByPages = books.sort((a,b)=> a.pages - b.pages);
console.log(sortedBooksByPages)

const numbers1 = [5,9,3,2,1];
console.log(numbers1.slice().sort((a,b)=> a - b))
numbers1
// Sort books by publication date
const sortedBooksByPublicationDate = books.slice().sort((a,b)=> new Date(a.publicationDate) - new Date(b.publicationDate)).map((book)=> book.title);
sortedBooksByPublicationDate
const booksWithPublicationDates = books.map((book)=> `${book.title}: ${book.publicationDate}`);
booksWithPublicationDates;

// working immutable Arrays: Working with an existing array without changing it.

// 1) Adding a new book object to the data array
          //  We use the Rested Opreator to add anew array.
          
const newBook = {
  id: 6,
  title: "The Hobbit",
  author: "J. R. R. Tokien"
}
const booksAfterAdded = [...books, newBook];
booksAfterAdded

// 2) Delete or Remove an array obect from the data array.
  //   We use the filter method.
const booksAfterDeletion = books.filter((book)=> book.id !== 4);
booksAfterDeletion

// 3) Update a book object in the data array.
    // Update id === 1 to have the pages: 1;
    // We use the map() method to delete the array and use spread opreator to update the object.
const booksAfterUpdated = books.map((book)=> 
 book.id === 1 ? {...book, pages: 1} : book
);
booksAfterUpdated;
    //  original array remains unchanged.
    books;
    