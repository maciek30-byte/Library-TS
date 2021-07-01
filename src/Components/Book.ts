import { v4 as uuidv4 } from "uuid";
import IBook from "../Interfaces/IBook";
import { BookState } from "../Interfaces/Types";
class Book implements IBook {

  rentedState: BookState;
  imageUrl: string = 'https://picsum.photos/200/300'

  constructor(
      private id:string,
    public title: string,
    public author: string,
    public description: string
  ) {

    this.rentedState = BookState.available;
  }
  getId(): string  {
    return this.id;
  }
  getRentedState(): BookState {
    return this.rentedState;
  }
  setRentedState(flag: BookState): void {
    this.rentedState = flag;
  }
  getBookTitle():string{
    return this.title

  }
}
export default Book;
//@Todo PAMIETAJ O ZMIANIE UUID