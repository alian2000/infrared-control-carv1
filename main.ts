Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
})
Mbit_IR.onPressEvent(RemoteButton.NUM8, function () {
    basic.showIcon(IconNames.Tortoise)
})
Mbit_IR.onPressEvent(RemoteButton.TRight, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 255)
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 255)
})
Mbit_IR.onPressEvent(RemoteButton.NUM9, function () {
    basic.showIcon(IconNames.Rabbit)
})
Mbit_IR.onPressEvent(RemoteButton.NUM0, function () {
    basic.showIcon(IconNames.Heart)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 255)
})
Mbit_IR.onPressEvent(RemoteButton.NUM7, function () {
    basic.showIcon(IconNames.Butterfly)
})
Mbit_IR.onPressEvent(RemoteButton.Minus, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
})
Mbit_IR.onPressEvent(RemoteButton.Light, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 255)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 255)
})
Mbit_IR.onPressEvent(RemoteButton.TLeft, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 255)
})
Mbit_IR.onPressEvent(RemoteButton.NUM3, function () {
    basic.showIcon(IconNames.No)
})
Mbit_IR.onPressEvent(RemoteButton.NUM5, function () {
    basic.showIcon(IconNames.House)
})
Mbit_IR.onPressEvent(RemoteButton.NUM2, function () {
    basic.showIcon(IconNames.Rollerskate)
})
Mbit_IR.onPressEvent(RemoteButton.BEEP, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
})
Mbit_IR.onPressEvent(RemoteButton.NUM1, function () {
    basic.showIcon(IconNames.Sad)
})
Mbit_IR.onPressEvent(RemoteButton.NUM6, function () {
    basic.showIcon(IconNames.Pitchfork)
})
Mbit_IR.onPressEvent(RemoteButton.Plus, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
})
Mbit_IR.onPressEvent(RemoteButton.NUM4, function () {
    basic.showIcon(IconNames.EighthNote)
})
Mbit_IR.init(Pins.P8)
