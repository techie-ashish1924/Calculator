

const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');





for (let button of buttons)
{
    // button.addEventListener();

    button.addEventListener('click', (e) =>
    {
        // console.log(e.target);

        const buttonText = e.target.innerText;

        if (buttonText == 'C') {
            screen.value = "";
        }
        else if (buttonText == 'x')
        {
            screen.value += '*';
        }
        else if (buttonText === '=')
        {
            try {
                screen.value = eval(screen.value);
            }
            catch (e) {
                
                screen.value = 'Invalid Operator';
                setTimeout(function ()
                    {
                 
                    screen.value = '';
                    
                }, 1000)
                
                // screen.value = "";


                
            }

            }
        else {

            screen.value = screen.value + buttonText;
        }
        

    })




}