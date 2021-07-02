import Book from "./Book";
import { v4 as uuidv4 } from "uuid";
class User {
  id: string;
  constructor(public name: string) {
    this.id = uuidv4();
  }
}
export default User;


