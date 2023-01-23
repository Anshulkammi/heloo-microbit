let num1 = 0
let num2 = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # # # # #
        # . . # .
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("HI EVERYONE HOPE YOU LIKE THIS BYE!!!!!!!")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    num1 += 1 + 1
    basic.showNumber(num1)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    num2 = randint(0, 10)
    basic.showNumber(num2)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    led.plotBarGraph(
    7,
    200
    )
})
