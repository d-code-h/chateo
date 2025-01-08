declare interface PhoneProps {
  phoneInput: RefObject<PhoneInput>;
  number: string;
  setValue: Dispatch<SetStateAction<string>>;
  setFormattedValue: Dispatch<SetStateAction<string>>;
  text: string;
}
