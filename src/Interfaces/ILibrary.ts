import Book from "../Book";
interface ILibrary {
    getAllBookList():Book[];
    getRentedList():any

}
export default ILibrary