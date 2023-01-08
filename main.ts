input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog(datalogger.DeleteType.Full)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.clearScreen()
})
let sunis = 0
let thermis = 0
basic.showIcon(IconNames.Square)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
datalogger.setColumnTitles(
"Sun",
"therm"
)
while (0 == 0) {
    basic.clearScreen()
    basic.pause(60000)
    if (thermis != input.temperature() || sunis != Math.trunc(input.lightLevel() / 4)) {
        datalogger.log(
        datalogger.createCV("Sun", Math.trunc(input.lightLevel() / 4)),
        datalogger.createCV("therm", input.temperature())
        )
        thermis = input.temperature()
        sunis = Math.trunc(input.lightLevel() / 4)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
