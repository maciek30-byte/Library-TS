import IBooking from "../Interfaces/IBooking";
import Book from "./Book";
import { v4 as uuidv4 } from "uuid";
import HelpersMethod from "../Helpers/HelpersMethod";
import { PenaltyObj } from "../Interfaces/Types";

class Booking implements IBooking {
  private bookingId: string;
  private loanDate: Date;
  private returnedDate: Date;
  public penalty: number = 0;

  constructor(
    public userId: string,
    private bookId: string,
    public bookTitle: string
  ) {
    this.loanDate = new Date();
    this.returnedDate = HelpersMethod.manipulateDays(this.loanDate, 7);
    this.bookingId = uuidv4();
  }

  getBookingId(): string {
    return this.bookingId;
  }

  getLoanDate(): Date {
    return this.loanDate;
  }

  getReturnedDate(): Date {
    return this.returnedDate;
  }
  // choseBook(bookId: string): Booking {
  //   this.rentedBookId = bookId;
  //   return this;
  // }
  setReturnedDateAndPenalty() {
    this.returnedDate = new Date();
    this.penalty = this.calculatePenalty().penalty;
  }
  calculatePenalty(): PenaltyObj {
    const totalRentDays: number = HelpersMethod.calculateRentingTime(
      this.loanDate
    );
    let penalty: number;
    totalRentDays <= 7
      ? (penalty = 0)
      : (penalty = this.penalty * totalRentDays);

    const messageAndPenalty:PenaltyObj = {
      text: `Thx for return ${
        penalty === 0 ? "every thing is ok" : `your penalty is ${penalty}`
      }`,
      penalty,
    };

    return messageAndPenalty;
  }
}
export default Booking;
