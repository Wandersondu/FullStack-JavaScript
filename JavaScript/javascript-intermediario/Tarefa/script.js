
let msg = document.getElementById("#msg")
let btn = document.getElementById("#btn")

btn.onClick = function(){
        msg.classList.add('visible')

        setTimeout(function() {
                msg.classList.remove('visible')
        }, 4000)
}

