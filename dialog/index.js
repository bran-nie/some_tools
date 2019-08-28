class Dialog {
    constructor(text) {
        this.text = text || 'Dialog'

        // 记录上次translate的 x y 值
        this.lastX = 0
        this.lastY = 0

        // 点击时。存下的临时client x y 值
        this.tmpX = 0
        this.tmpY = 0

        this.isMoving = false
        this.dialog = null
    }

    open(text) {
        const model = document.createElement('div')
        model.id = 'model'
        model.style = '' +  `
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 999;
            background-color: rgba(0,0,0, 0.3);
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;`
        document.body.appendChild(model)
        model.addEventListener('click', e => {this.close(); e.stopPropagation()})

        this.dialog = document.createElement('div')
        this.dialog.style = `padding: 60px 150px;
            background-color: white;
            cursor: move;`
        this.dialog.innerText = text || this.text
        this.dialog.addEventListener('click', e => {e.stopPropagation()}) // 阻止冒泡
        this.dialog.addEventListener('mousedown', this.handleMouseDown.bind(this))   // 监听dialog上的鼠标点击事件

        model.addEventListener('mousemove', this.handleMouseMove.bind(this))
        model.addEventListener('mouseup', this.handleMouseUp.bind(this))

        model.appendChild(this.dialog)
    }
    close() {
        try {
            this.dialog.removeEventListener('mousedown', this.handleMouseDown)
            document.body.removeChild(document.getElementById('model'))

            this.init()
        } catch (e) {
            console.log(e)
        }
    }

    init() {
        this.tmpX = 0
        this.tmpY = 0
        this.lastX = 0
        this.lastY = 0
        this.dialog = null
        this.isMoving = false
    }
    handleMouseDown(e) {
        console.log(e)
        // 被按下时，开始准备移动
        this.isMoving = true
        this.tmpX = e.clientX
        this.tmpY = e.clientY
    }
    handleMouseMove(e) {
        if (!this.isMoving) return
        this.dialog.style.transform = `translate(${e.clientX  - this.tmpX + this.lastX}px, ${e.clientY - this.tmpY + this.lastY}px)`
    }
    handleMouseUp(e) {
        console.log(e)
        this.lastX = e.clientX - this.tmpX + this.lastX
        this.lastY = e.clientY - this.tmpY + this.lastY
        this.isMoving = false
    }
}
