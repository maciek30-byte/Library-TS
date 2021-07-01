import Book from "./Book";
class User {
    rentedUList:Book[]
    constructor(public id:number, public name:string) {
        this.rentedUList = []
    }
}
export default User

//@ToDo zmienic ID NA UUID//