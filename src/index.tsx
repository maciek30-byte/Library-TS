import Book from "./Components/Book";
import Booking from "./Components/Booking";
import HelpersMethod from "./Helpers/HelpersMethod";

const staty = new Book('Stary Czlowiek','H','short description');
const pociag = new Book('Pociag','Dziewczyna','Long Description')
staty.setIsRented()


console.log('single book', staty)




