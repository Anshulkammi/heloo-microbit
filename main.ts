let num1 = 0
let num2 = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    num1 = 34.5 * 2
    basic.showNumber(num1)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    num2 = randint(0, 10)
    basic.showNumber(num2)
})
