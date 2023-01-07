sunis = 0
thermis = 0
basic.show_icon(IconNames.SQUARE)
datalogger.include_timestamp(FlashLogTimeStampFormat.MINUTES)
datalogger.set_column_titles("Sun", "therm")
while 0 == 0:
    basic.clear_screen()
    basic.pause(60000)
    if thermis != input.temperature() or sunis != input.light_level():
        datalogger.log(datalogger.create_cv("Sun", input.light_level()),
            datalogger.create_cv("therm", input.temperature()))
        thermis = input.temperature()
        sunis = input.light_level()
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)