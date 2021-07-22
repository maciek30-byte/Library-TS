import Book from "../Components/Book";
import { PenaltyObj } from "./Types";
interface IBooking {
  bookingId: string;
  loanDate: Date;
  returnedDate: Date;
  penalty: number;

  setReturnedDateAndPenalty(): void;
  calculatePenalty(): PenaltyObj;
}
export default IBooking;
