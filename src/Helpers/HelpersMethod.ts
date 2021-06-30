class HelpersMethod {
    static manipulateDays(date:Date, days:number) {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    static calculateRentingTime(whenWeStartTLoan:Date):number {
        const startLoan = whenWeStartTLoan.getTime();
        const endLoan = new Date().getTime();
        const rentingTime = endLoan - startLoan;
        return Math.ceil((rentingTime / 1000) * 60 * 60 * 24);

        // liczba dni ww zaokragleniu
    }
}
export default HelpersMethod