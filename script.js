let dicerollBut = document.getElementById('drButton')
let inhtmlImage = document.getElementById('images')

dicerollBut.addEventListener('click', () => {
    let inputBox = document.getElementById('inputBox').value

    if (inputBox === ""){
        alert('Enter a number of Dice!')
    }
    else{
        let values = []
        let images = []


        for(let i = 0; i < inputBox; i++){
            let randomNum = Math.floor(Math.random()* 6) + 1;
            values.push(randomNum);
            images.push(`<img src="Dice_img/${randomNum}.png">`);
        }
        inhtmlImage.innerHTML = images.join(' ')
    }
})
