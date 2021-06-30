import { v4 as uuidv4 } from "uuid";
import IBook from "../Interfaces/IBook";
class Book implements IBook {
  id: string;

  constructor(
    public title: string,
    public author: string,
    public description: string
  ) {
    this.id = uuidv4();
  }
  getId(): string {
    return this.id;
  }
}
export default Book;
