import ILibrary from "../Interfaces/ILibrary";
import Book from "./Book";
import Booking from "./Booking";

class Library implements ILibrary {
  private allBookList: Book[];
  private rentedList: Book[]; //{idksiazki, userID}[]
  private rentedBooks: Book[]; //{idUser, rentedBook[]}[]
  constructor() {
    this.allBookList = [];
    this.rentedList = [];
    this.rentedBooks = [];
  }
  getAllBookList(): Book[] {
    return this.allBookList;
  }
  getRentedList(): Book[] {
    return this.rentedList;
  }
  getRentedBooks(): Book[] {
    return this.rentedBooks;
  }
  addToChosenList(chosenList: Book[], ...books: Book[]) {
    // walidacja//
    books.forEach((book) => {
      chosenList.push(book);
    });
  }
  deleteFromChosenList(chosenList: Book[], book: Book) {
    // walidacja
    if (chosenList.some((bookS) => bookS.getId() === book.getId())) {
      chosenList = chosenList.filter(
        (element) => element.getId() !== book.getId()
      );
    }
  }
  // posluguje sie klasa booking ???
  rentBook(book: Book): void { // bookId, userId // obiekt z klasa user id bez koniecznosci tworzenia USER
    const rentedBook: Booking = new Booking().choseBook(book);
    this.addToChosenList(this.rentedList, book);
    book.setIsRented()
    const bookToRemove: Book | undefined = this.allBookList.find(
      (bookF) => bookF.getId() === book.getId()
    );
    if (bookToRemove === undefined) {
      console.log("We can find your element");
      return;
    }

    this.deleteFromChosenList(this.allBookList, bookToRemove);
  }
  returnBook(returnedBook: Book): string | void { // zrobic po Id

    // sprawdzic czy jest na liscie do zwrotu
    this.addToChosenList(this.allBookList, returnedBook); // flaga z oznaczeniem wypozyczenia, nie ma informacji o tym czy ona kiedykolwiek byla jak jeste wypozyczona//
    const findBook: Book | undefined = this.rentedBooks.find(
      (bookF) => bookF.getId() === returnedBook.getId()
    );
    if (findBook === undefined)
      throw new Error("something is super turbo wrong");
    this.deleteFromChosenList(this.rentedList, findBook);
    return new Booking().calculatePenalty();

    // zwrocic informacje o statusie //
  }
}
