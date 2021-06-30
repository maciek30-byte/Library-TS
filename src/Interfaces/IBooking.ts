import Book from "../Components/Book";
interface IBooking {
    getId():string;
    getLoanDate():Date;
    getReturnedDate():Date;
    rentedBook: Book;
    penalty:number

    calculatePenalty():string



}
export default IBooking