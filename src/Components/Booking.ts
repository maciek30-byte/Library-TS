import IBooking from "../Interfaces/IBooking";
import Book from "./Book";
import { v4 as uuidv4 } from "uuid";
import HelpersMethod from "../Helpers/HelpersMethod";
import { PenaltyObj } from "../Interfaces/Types";
import IBook from "../Interfaces/IBook";
import IUser from "../Interfaces/IUser";
import User from "./User";

class Booking implements IBooking {
  bookingId: string;
  book:Book
  user:IUser
  loanDate: Date;
  returnedDate: Date;
  penalty: number = 0;

  constructor(book: IBook, user: IUser) {
    this.book = book
    this.user = user
    this.bookingId = uuidv4();
    this.loanDate = new Date();
    this.returnedDate = HelpersMethod.manipulateDays(this.loanDate, 7);
  }

  setReturnedDateAndPenalty():void {
    this.returnedDate = new Date();
    this.penalty = this.calculatePenalty().penalty;
  }
  calculatePenalty(): PenaltyObj {
    const daysWithoutPenalty = 7;
    const totalRentDays: number = HelpersMethod.calculateRentingTime(
      this.loanDate
    );
    let penalty: number;
    totalRentDays <= daysWithoutPenalty
      ? (penalty = 0)
      : (penalty = this.penalty * totalRentDays);

    const messageAndPenalty: PenaltyObj = {
      text: `Thx for return ${
        penalty === 0 ? "every thing is ok" : `your penalty is ${penalty}`
      }`,
      penalty,
    };

    return messageAndPenalty;
  }
}
export default Booking;
