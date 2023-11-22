import { Alert } from "react-native";

class InputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InputError";
  }

  public showAlert(msg: string): void {
    Alert.alert(msg);
  }
}

export default InputError;
