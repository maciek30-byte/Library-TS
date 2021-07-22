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
  availableBooksList: Book[] = mockupList;
  rentedList: Booking[];
  rentedBooksLists: Book[];
  constructor() {
    this.availableBooksList = [];
    this.rentedList = [];
    this.rentedBooksLists = [];
  }

  rentBookForUser(user: User, book: Book): void {
    HelpersMethod.transferBetweenLists(
      this.availableBooksList,
      this.rentedBooksLists,
      book
    );
    HelpersMethod.addToRentedList(book, user, this.rentedList);
  }

  setReturnDataForOrder(booking: Booking): void {
    const orderElement = this.rentedList.find(
      (order) => order.bookingId === booking.bookingId
    );
    orderElement?.setReturnedDateAndPenalty(); // type guard//
    //@ToDo Czy w takim przypadku musi byc type guard, czy wystarczy optional chaining z es6
  }

  returnBook(book: Book, booking: Booking): void {
    HelpersMethod.transferBetweenLists(
      this.rentedBooksLists,
      this.availableBooksList,
      book
    );
    this.setReturnDataForOrder(booking);
    const order: Booking | undefined = this.rentedList.find(
      (order) => order.bookingId === booking.bookingId
    );
    if (order === undefined) {
      console.log("something went wrong, order is undefined");
      return;
    }
    HelpersMethod.showMessage(order?.calculatePenalty().text);
  }
}
export default Library;
