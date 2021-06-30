import Book from "../Book";
interface IBooking {
    getId():string;
    getLoanDate():Date;
    getReturnedDate():Date;
    rentedBook: Book;
    penalty:number

    rentBook(chosenBook:Book):void | Book | undefined
    returnBook(returnedBook:Book):void | string | number

}
export default IBooking