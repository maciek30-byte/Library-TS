import { v4 as uuidv4 } from "uuid";
import IBook from "../Interfaces/IBook";
import { BookState } from "../Interfaces/Types";
class Book implements IBook {
  id: string;
  rentedState: BookState;

  constructor(
    public title: string,
    public author: string,
    public description: string
  ) {
    this.id = uuidv4();
    this.rentedState = BookState.a;
  }
  getId(): string {
    return this.id;
  }
  getRentedState(): BookState {
    return this.rentedState;
  }
  setIsRented(flag: BookState): void {
    this.rentedState = flag;
  }
}
export default Book;
