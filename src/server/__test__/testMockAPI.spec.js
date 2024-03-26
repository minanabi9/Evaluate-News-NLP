import json from "../mockAPI"

describe("Testing the MockAPI", () => {
    test("Testing the json", () => {
        expect(json).toMatchObject({
            'title': 'test json response',
            'message': 'this is a message',
            'time': 'now'
        });
    })
});