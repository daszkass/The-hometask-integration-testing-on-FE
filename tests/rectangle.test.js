import {getRectanglePerimeter, getRectangleArea, getRectangleInfo} from "../js/rectangle.js";

test('Should properly count the rectangle perimeter', () => {
    const rectanglePerimeter = getRectanglePerimeter(15, 8);
    expect(rectanglePerimeter).toBe(46);
});

test('Should properly count the rectangle area', () => {
   const rectangleArea = getRectangleArea(7, 13);
   expect(rectangleArea).toBe(91);
});

test('Should write in console proper informations about perimeter and area of rectangle', () => {
    const logSpy = jest.spyOn(console, 'log');
    getRectangleInfo(6, 7);
    expect(logSpy).toHaveBeenCalledWith('The perimeter of a rectangle is 26 and the area is 42');
});
