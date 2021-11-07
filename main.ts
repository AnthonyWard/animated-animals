input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(82)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    radio.sendString("Hello")
})
basic.showIcon(IconNames.Yes)
basic.pause(100)
basic.clearScreen()
basic.showNumber(0)
basic.showIcon(IconNames.Heart)
basic.pause(5000)
basic.showArrow(ArrowNames.North)
basic.showIcon(IconNames.Heart)
basic.showString("Hello!")
basic.showIcon(IconNames.Sad)
basic.showIcon(IconNames.No)
