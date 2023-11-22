import { Alert } from "react-native";

class InputError extends Error {
  constructor(message: string,name: string) {
    super(message);
    this.name = name;
  }

  public showAlert(msg: string): void {
    Alert.alert(msg);
  }
}

export default InputError;
