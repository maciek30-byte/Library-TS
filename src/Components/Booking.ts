import IBooking from "../Interfaces/IBooking";
import Book from "./Book";
import { v4 as uuidv4 } from "uuid";
import HelpersMethod from "../Helpers/HelpersMethod";

class Booking implements IBooking {
  private id: string;
  private loanDate: Date;
  private returnedDate: Date;
  rentedBook: Book | any;

  constructor(public penalty: number = 2) {
    this.id = uuidv4();
    this.loanDate = new Date();
    this.returnedDate = HelpersMethod.manipulateDays(this.loanDate, 7);
    this.rentedBook = "";
  }

  getId(): string {
    return this.id;
  }

  getLoanDate(): Date {
    return this.loanDate;
  }

  getReturnedDate(): Date {
    return this.returnedDate;
  }
  choseBook(bookObj: Book):Booking {
    this.rentedBook = bookObj;
    return this
  }
  calculatePenalty(): string {
    const totalRentDays: number = HelpersMethod.calculateRentingTime(
      this.loanDate
    );
    let penalty;
    totalRentDays <= 7
      ? (penalty = 0)
      : (penalty = this.penalty * totalRentDays);

    return `Thx for return ${
      penalty === 0 ? "every thing is ok" : `your penalty is ${penalty}`
    }`;
  }
}
export default Booking;
