let Trigger = 0
if (true) {
    radio.sendNumber(1)
    radio.sendString("" + (Trigger))
    Trigger = 1
    pins.servoWritePin(AnalogPin.P0, 360)
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(1000)
    basic.showIcon(IconNames.Diamond)
    pins.servoWritePin(AnalogPin.P0, 360)
    Trigger += 1
    music.playTone(262, music.beat(BeatFraction.Whole))
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.showIcon(IconNames.SmallDiamond)
}
basic.pause(100)
