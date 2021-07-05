import { v4 as uuidv4 } from "uuid";
import IBook from "../Interfaces/IBook";
import Validator from "./Validator";

class Book implements IBook {
  id: string;
  title: string;
  author: string;
  description: string;
  imageUrl: string = "https://picsum.photos/200/300";

  constructor(id: string, title: string, author: string, description: string) {
    Validator.stringLengthValidate(title, 3);
    Validator.stringLengthValidate(author, 4);
    Validator.stringLengthValidate(description, 10);
    this.id = uuidv4();
    this.title = title;
    this.author = author;
    this.description = description;
  }
}
export default Book;
