import InputError from "./InputError";

const randomNumber = (start: number, end: number) => {
  if (start > end) {
    throw new InputError(
      "Start number should be less than end number",
      "start is bigger than end",
    );
  }
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export default randomNumber;
