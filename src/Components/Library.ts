import ILibrary from "../Interfaces/ILibrary";
import Book from "./Book";
import Booking from "./Booking";
import { BookState } from "../Interfaces/Types";
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
  getAvailableBookList(): Book[] {
    return this.availableBooksList;
  }
  getRentedList(): Booking[] {
    return this.rentedList;
  }
  getRentedBooksList(): Book[] {
    return this.rentedBooksList;
  }
  // private addToChosenBooksList(chosenBooksList: Book[], ...books: Book[]) {
  //   // sprawdzic czy ksiazka z takim id jest juz na liscie //
  //   books.forEach((book) => {
  //     chosenBooksList.push(book);
  //   });
  // }
  //
  // deleteFromChosenBooksList(chosenBooksList: Book[], bookId: string) {
  //   //
  //   // sprawdzic czy jest na liscie, co zabeezpieczy przed undefined//
  //   if (chosenBooksList.some((book) => book.getId() === bookId)) {
  //     chosenBooksList = chosenBooksList.filter(
  //       (element) => element.getId() !== bookId
  //     );
  //   }
  // }

  private transferBetweenLists(
    fromList: Book[],
    toList: Book[],
    bookId: string
  ): void {
    const transferedBook: any = fromList.find((book) => book.getId() === bookId);
    // type guard type Book
    toList.push(transferedBook);
    fromList = fromList.filter((book) => book.getId() !== bookId);
  }

  private addToRentedList(bookId:string,userId:string, bookTitle:string){
    // zmienic nazwe na mnoznik kary multiplier
    const bookingOrder:Booking = new Booking(userId,bookId,bookTitle);
    this.rentedList.push(bookingOrder);
    //defaultowe parametry na koncu

  }

  // posluguje sie klasa booking ???
  // dodac do parametru Usera ??
  rentBook(bookId: string = "1", userId: string = "5",bookTitle='on'): void {
    // bookId, userId // obiekt z klasa user id bez koniecznosci tworzenia USER
    this.transferBetweenLists(
      this.availableBooksList,
      this.rentedBooksList,
      bookId
    );
    this.addToRentedList(bookId,userId,bookTitle );


    // const rentedBook: Booking = new Booking().choseBook(book);
    // this.addToChosenList(this.rentedList, book);
    // book.setRentedState(BookState.rented);
    // // dodaje do listy wypozyczen wypozyczenie i Id usera ?
  }

  private editRentedListOrder(bookingId:string):void{
    const editedElement = this.rentedList.find((order)=> order.getId()=== bookingId);
    editedElement?.setReturnedDateAndPenalty(); // type guard//
  }

  private showMessage(message:string ='no message'){
    console.log(message)
  }
  returnBook(bookId:string,bookingId:string): void {
    this.transferBetweenLists(this.rentedBooksList,this.availableBooksList,bookId);
    this.editRentedListOrder(bookId);
    const order = this.rentedList.find((order)=> order.getId() === bookingId);
    this.showMessage(order?.calculatePenalty().text);

    // zrobic po Id

  //   // sprawdzic czy jest na liscie do zwrotu
  //   this.addToChosenList(this.allBookList, returnedBook); // flaga z oznaczeniem wypozyczenia, nie ma informacji o tym czy ona kiedykolwiek byla jak jeste wypozyczona//
  //   const findBook: Book | undefined = this.rentedBooks.find(
  //     (bookF) => bookF.getId() === returnedBook.getId()
  //   );
  //   if (findBook === undefined)
  //     throw new Error("something is super turbo wrong");
  //   this.deleteFromChosenList(this.rentedList, findBook);
  //   return new Booking().calculatePenalty();
  //
  //   // zwrocic informacje o statusie //
  }
}
export default Library;
