
/*divider*/

const btnKana = document.getElementById("btnKana");

btnKana.addEventListener('click', function() {
    const rubyElements = document.querySelectorAll('ruby');
    let isHidden = btnKana.textContent === 'Show';

    btnKana.textContent = isHidden ? 'Hide' : 'Show'; // Update the button text first

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

    rubyElements.forEach(rubyElement => {
        const rtElements = rubyElement.querySelectorAll('rt.sp');
        rtElements.forEach(rtElement => {
            rtElement.style.visibility = isHidden ? 'visible' : 'hidden';
        });
    });
});
