class Validator {
    static stringLengthValidate(stringToValidate:string, minChar:number){
        if(stringToValidate.length < minChar) throw new Error('value is too short')
    }

}
export default Validator