input.onButtonPressed(Button.A, function () {
    basic.showString("" + input.temperature() + " Grad")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(0, 9))
})
basic.showString("HALLO!")
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
}
basic.showString("?")
