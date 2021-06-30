import ILibrary from "../Interfaces/ILibrary";
import Book from "./Book";
import Booking from "./Booking";

class Library implements ILibrary {
  private allBookList: Book[];
  private rentedList: Book[];
  private rentedBooks: Book[];
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
  rentBook(book: Book): void {
    const rentedBook: Booking = new Booking().choseBook(book);
    this.addToChosenList(this.rentedList, book);
    const bookToRemove: Book | undefined = this.allBookList.find(
      (bookF) => bookF.getId() === book.getId()
    );
    if (bookToRemove === undefined) {
      console.log("We can find your element");
      return;
    }

    this.deleteFromChosenList(this.allBookList, bookToRemove);
  }
  returnBook(returnedBook: Book): void {
    // sprawdzic czy jest na liscie do zwrotu
    this.addToChosenList(this.allBookList, returnedBook);
    const findBook: Book | undefined = this.rentedBooks.find(
      (bookF) => bookF.getId() === returnedBook.getId()
    );
    if (findBook === undefined)
      throw new Error("something is super turbo wrong");
    this.deleteFromChosenList(this.rentedList, findBook);
  }
}
