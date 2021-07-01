import { BookState } from "./Types";
interface IBook {
  getId(): string;
  getRentedState(): BookState;
  title: string;
  author: string;
  // random photo ?? fetch ???
  description: string;

  setRentedState(): void;
}

export default IBook;
