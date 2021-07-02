import ILibrary from "../Interfaces/ILibrary";
import Book from "./Book";
import Booking from "./Booking";
import HelpersMethod from "../Helpers/HelpersMethod";
import User from "./User";
const mockupList = [
  new Book("1", "stary czlowiek", "maciej Opozda", "desc"),
  new Book("2", "tomcio", "maciej Opozda", "desc"),
  new Book("3", "pepsi", "maciej Opozda", "desc"),
  new Book("4", "watacha", "maciej Opozda", "desc"),
  new Book("5", "mozliwr", "maciej Opozda", "desc"),
];

class Library implements ILibrary {
  private availableBooksList: Book[] = mockupList;
  private rentedList: Booking[];
  private rentedBooksList: Book[];
  constructor() {
    this.availableBooksList = [];
    this.rentedList = [];
    this.rentedBooksList = [];
  }
  getAvailableBooksList(): Book[] {
    return this.availableBooksList;
  }
  getRentedList(): Booking[] {
    return this.rentedList;
  }
  getRentedBooksLists(): Book[] {
    return this.rentedBooksList;
  }

  private transferBetweenLists(
    fromList: Book[],
    toList: Book[],
    bookId: string
  ): void {
    const transferredBook: Book | undefined = fromList.find(
      (book) => book.getId() === bookId
    );
    if (transferredBook === undefined) {
      console.log("book not found");
      return;
    } else {
    }
    toList.push(transferredBook);
    fromList = fromList.filter((book) => book.getId() !== bookId);
  }

  private addToRentedList(bookId: string, userId: string, bookTitle: string) {
    const bookingOrder: Booking = new Booking(userId, bookId, bookTitle);
    this.rentedList.push(bookingOrder);
  }

  rentBookForUser(bookId: string, userId: string, bookTitle: string): void {
    this.transferBetweenLists(
      this.availableBooksList,
      this.rentedBooksList,
      bookId
    );
    this.addToRentedList(bookId, userId, bookTitle);
  }

  private setReturnDataForOrder(bookingId: string): void {
    const orderElement = this.rentedList.find(
      (order) => order.getBookingId() === bookingId
    );
    orderElement?.setReturnedDateAndPenalty(); // type guard//
    //@ToDo Czy w takim przypadku musi byc type guard, czy wystarczy optional chaining z es6
  }

  returnBook(bookId: string, bookingId: string): void {
    this.transferBetweenLists(
      this.rentedBooksList,
      this.availableBooksList,
      bookId
    );
    this.setReturnDataForOrder(bookId);
    const order: Booking | undefined = this.rentedList.find(
      (order) => order.getBookingId() === bookingId
    );
    if (order === undefined) {
      console.log("something went wrong, order is undefined");
      return;
    }
    HelpersMethod.showMessage(order?.calculatePenalty().text);
  }
}
export default Library;
