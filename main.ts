OLED.init(128, 64)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        OLED.clear()
        OLED.writeString("raining")
    } else {
        OLED.clear()
        OLED.writeString("not raining")
    }
})
