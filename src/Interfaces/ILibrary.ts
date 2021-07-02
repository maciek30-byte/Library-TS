import Book from "../Components/Book";
import Booking from "../Components/Booking";
//@ToDo Konwencja interfejsow i typow, czy kazda funkcja ma cos zwracac !== void//
//@ToDo Czy kazda metoda z klasy powinna miec swoj interfejs, na jakim poziomie mozna to zlac??//
//@ToDo jakis sposob na ustawianie wartosci za pomoca get,set ?????//
interface ILibrary {
  getAvailableBooksList(): Book[];
  getRentedList(): Booking[];
  getRentedBooksLists(): Book[];
  //@ToDo Czy da sie zamknac te 3 listy w jeden typ, bez mozliwosci wrzucenia innej??

  rentBookForUser(bookId: string, userId: string, bookTitle: string): void;
  returnBook(bookId: string, bookingId: string): void;
}
export default ILibrary;
