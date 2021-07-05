import Book from "../Components/Book";
import Booking from "../Components/Booking";
import User from "../Components/User";

class HelpersMethod {
  private static tBookId: string;
  static manipulateDays(date: Date, days: number) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  static calculateRentingTime(whenWeStartTLoan: Date): number {
    const startLoan = whenWeStartTLoan.getTime();
    const endLoan = new Date().getTime();
    const rentingTime = endLoan - startLoan;
    return Math.ceil((rentingTime / 1000) * 60 * 60 * 24);
    // liczba w zaokraglebiu
  }
  static showMessage(message: string = "no message") {
    console.log(message);
  }
  static transferBetweenLists(
    fromList: Book[],
    toList: Book[],
    tBook:Book
  ): void {
    const transferredBook: Book | undefined = fromList.find(
      (book) => book.id === tBook.id
    );
    if (transferredBook === undefined) {
      console.log("book not found");
      return;
    }
    toList.push(transferredBook);
    fromList = fromList.filter((book) => book.id !== transferredBook.id);
  }

  static addToRentedList(book:Book, user: User, list:Booking[]) {
    const bookingOrder: Booking = new Booking(book, user);
    list.push(bookingOrder);
  }
}
export default HelpersMethod;
