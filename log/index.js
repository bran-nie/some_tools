const successStyle = 'color: green;'
const warnStyle = 'color: orange;'
const errorStyle = 'color: red;'
const infoStyle = 'color: black;'


class Log {
    constructor() {

    }

    success(...v) {
        v = v.join(' ')
        console.log(`%c${v}`, successStyle)
    }

    warn(...v) {
        v = v.join(' ')
        console.log(`%c${v}`, warnStyle)
    }

    error(...v) {
        v = v.join(' ')
        console.log(`%c${v}`, errorStyle)
    }

    info(...v) {
        v = v.join(' ')
        console.log(`%c${v}`, infoStyle)
        console.log('test')
    }
}
const log = new Log()
export default log
