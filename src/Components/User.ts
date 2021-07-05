import Book from "./Book";
import { v4 as uuidv4 } from "uuid";
import Validator from "./Validator";
class User {
  id: string;
  name:string
  constructor( name: string) {
    Validator.stringLengthValidate(name,3)
    this.name = name
    this.id = uuidv4();
  }
}
export default User;


