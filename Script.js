
let steric = document.getElementById('steric')
steric.addEventListener('click',(x)=>{
    x.target.innerHTML = '*'
})
let string= ""
let buttons = document.querySelectorAll('.btn')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '=')

        {
            try{

                string = eval(string)
                document.querySelector('.screen').value = string;
            }
            catch(screen){
                document.querySelector('.screen').innerHTML = nil
            }
        }
        else if(e.target.innerHTML == 'C')
        {
            string = ""
            document.querySelector('.screen').value = string;
        }
        else{

            console.log(e.target);
            string = string + e.target.innerHTML
            document.querySelector('.screen').value = string;
        }
        
    })
})
