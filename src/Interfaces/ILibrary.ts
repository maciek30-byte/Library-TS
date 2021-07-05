import Book from "../Components/Book";
import Booking from "../Components/Booking";
import User from "../Components/User";
//@ToDo Konwencja interfejsow i typow, czy kazda funkcja ma cos zwracac !== void//
//@ToDo Czy kazda metoda z klasy powinna miec swoj interfejs, na jakim poziomie mozna to zlac??//
//@ToDo jakis sposob na ustawianie wartosci za pomoca get,set ?????//
interface ILibrary {
  availableBooksList: Book[];
  rentedList: Booking[];
  rentedBooksLists: Book[];


  rentBookForUser(user:User, book:Book): void;
  returnBook(book:Book,booking:Booking): void;
}
export default ILibrary;
