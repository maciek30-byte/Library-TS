import Book from "../Components/Book";
import Booking from "../Components/Booking";
//@ToDo Konwencja interfejsow i typow, czy kazda funkcja ma cos zwracac !== void//
//@ToDo Czy kazda metoda z klasy powinna miec swoj interfejs, na jakim poziomie mozna to zlac??//
interface ILibrary {
  getAllBookList(): Book[];
  getRentedList(): Book[];
  getRentedBooks(): Book[];
  //@ToDo Czy da sie zamknac te 3 listy w jeden typ, bez mozliwosci wrzucenia innej??

  addToChosenList(chosenList:Book[], ...books:Book[]):void;
  deleteFromChosenList(chosenList:Book[], book:Book):void


}
export default ILibrary;
