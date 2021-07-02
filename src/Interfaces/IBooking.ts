import Book from "../Components/Book";
import { PenaltyObj } from "./Types";
interface IBooking {
  getBookingId(): string;
  getLoanDate(): Date;
  getReturnedDate(): Date;

  penalty: number;

  setReturnedDateAndPenalty(): void;
  calculatePenalty(): PenaltyObj;
}
export default IBooking;
