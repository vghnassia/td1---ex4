input.onButtonPressed(Button.A, function () {
    if (x == 0 && y > 0) {
        x = 4
        y += -1
        led.unplot(0, y + 1)
    } else if (x > 0 && x <= 4) {
        x += -1
        led.unplot(x + 1, y)
    } else if (x == 0 && y == 0) {
        x = 0
        y = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (x == 4 && y < 4) {
        x = 0
        y += 1
        led.unplot(4, y - 1)
    } else if (x >= 0 && x < 4) {
        x += 1
        led.unplot(x - 1, y)
    } else if (x == 4 && y == 4) {
        y = 4
    }
})
let y = 0
let x = 0
x = 0
y = 0
basic.forever(function () {
    led.plot(x, y)
})
