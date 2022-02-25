basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.setLedColor(0xff0000)
    music.playMelody("C5 B A G F E D C ", 120)
    basic.clearScreen()
    basic.turnRgbLedOff()
    basic.pause(5000)
    basic.setLedColor(0xffff00)
})
