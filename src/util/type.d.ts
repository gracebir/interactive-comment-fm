export type TextFieldProps = {
    name: string
    value: string
    errorMsg: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement> ) => void
    placeholder: string
    onBlur: (event: React.FocusEvent<HTMLTextAreaElement, Element>) => void
}