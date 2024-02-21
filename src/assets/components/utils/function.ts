export const checkEmptyFields = (value: string) => {
    if(value) {
        return ''
    } else {
      return   "Please enter your details"
    }
}