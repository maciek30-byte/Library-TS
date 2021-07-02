import { v4 as uuidv4 } from "uuid";
import IBook from "../Interfaces/IBook";
import { BookState } from "../Interfaces/Types";
class Book implements IBook {
  imageUrl: string = "https://picsum.photos/200/300";

  constructor(
    private id: string,
    public title: string,
    public author: string,
    public description: string
  ) {
    this.id = uuidv4();
  }
  getId(): string {
    return this.id;
  }

  getBookTitle(): string {
    return this.title;
  }
}
export default Book;

