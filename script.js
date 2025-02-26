
/*divider*/

const btnKana = document.getElementById("btnKana");

btnKana.addEventListener('click', function() {
    const rubyElements = document.querySelectorAll('ruby');
    let isHidden = btnKana.textContent === 'Show';

    btnKana.textContent = isHidden ? 'Hide' : 'Show'; // Update the button text first
    btnKana.style.backgroundColor = isHidden ? '#c3d8fa' : 'white';

    rubyElements.forEach(rubyElement => {
        const rtElements = rubyElement.querySelectorAll('rt:not(.sp)');
        rtElements.forEach(rtElement => {
            rtElement.style.visibility = isHidden ? 'visible' : 'hidden';
        });
    });
});

const btnRoma = document.getElementById("btnRoma");

btnRoma.addEventListener('click', function() {
    const rubyElements = document.querySelectorAll('ruby');
    let isHidden = btnRoma.textContent === 'Show';    

    btnRoma.textContent = isHidden ? 'Hide' : 'Show'; // Update the button text first
    btnRoma.style.backgroundColor = isHidden ? '#c3d8fa' : 'white';
    
    rubyElements.forEach(rubyElement => {
        const rtElements = rubyElement.querySelectorAll('rt.sp');
        rtElements.forEach(rtElement => {
            rtElement.style.visibility = isHidden ? 'visible' : 'hidden';
        });
    });
});

const btnColor = document.getElementById("btnColor");

btnColor.addEventListener('click', function() {
    const blueElements = document.querySelectorAll('.blue');  // Select elements with class "Blue"    
    let isHidden = btnColor.textContent === 'Show';    

    btnColor.textContent = isHidden ? 'Hide' : 'Show'; // Update the button text first
    btnColor.style.backgroundColor = isHidden ? '#c3d8fa' : 'white';
    
    // Change text color for elements with the class 'Blue'
    blueElements.forEach(element => {
        element.style.color = isHidden ? '#4b95ad' : '#474545';  // Blue for Show, Black for Hide
    });

});
