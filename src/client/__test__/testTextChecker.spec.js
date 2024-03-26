import { checkForText } from "../js/textChecker"

describe("Testing the TextChecker", () => {
    test("Testing the checkForText() function if the textbox is empty", () => {
        jest.spyOn(window, 'alert').mockImplementation(jest.fn);
    })
});