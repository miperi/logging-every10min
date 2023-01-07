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
    if (thermis != input.temperature() || sunis != input.lightLevel()) {
        datalogger.log(
        datalogger.createCV("Sun", input.lightLevel()),
        datalogger.createCV("therm", input.temperature())
        )
        thermis = input.temperature()
        sunis = input.lightLevel()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
