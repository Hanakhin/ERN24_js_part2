console.log('hello world');

square = document.getElementById('square');

square.style.width = '100px'
square.style.height = '100px'
square.style.backgroundColor = 'crimson'
square.style.position = 'absolute'
square.style.textAlign = 'center'
square.style.lineHeight ='100px'
square.style.cursor ='pointer'
square.style.backgroundImage = 'url("/home/formatpro/ErnGithub/ERN24_js_part2/2023-11-21t120300z_2084266709_rc2oh4an26ua_rtrmadp_3_france-business-macron.jpg")'
square.style.backgroundSize = 'cover'
square.style.backgroundPosition = 'center'
square.innerText = 'Nique moi !'
square.style.color = 'red'

function RandomNumberMinMax(min,max){
    return Math.floor(Math.random() * (max - min +1 ) + min)
    
}

function MoveSquare(){
    const screenWidth = window.innerWidth - 100;
    const screenHeight = window.innerHeight - 100 
    let newLeft = RandomNumberMinMax(0, screenWidth)
    let newtop = RandomNumberMinMax(0, screenHeight)

    square.style.left = newLeft + 'px';
    square.style.top = newtop + 'px';
}

square.addEventListener('mouseover',()=>{
    setTimeout(MoveSquare,120)
})

square.addEventListener('click',()=>{
alert('bravo!')
})
