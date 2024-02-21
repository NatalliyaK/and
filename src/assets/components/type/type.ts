export type DataInput = {
    name: string
    label: string
    value: string
    placeholder: string
    maxLength: number
    errorMessage: string,
    type: 'text' | 'number' | 'email' | 'password'
    validationFn: (value: string) => string
}