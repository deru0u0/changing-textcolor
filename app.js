'use strict';
{
    document.addEventListener('DOMContentLoaded', function(e) {
        const SWITCH = {
            isSwitch: true,
            buttonText: 'switch',
            buttonText: 'count',
            count: 0,
            isUpdateCount: function() {
                let h1Element = document.querySelector('h1');
                h1Element.textContent = this.count;

            },
            isChangeTextColor: function() {
                let h1Element = document.querySelector('h1');
                let pElement = document.querySelector('p');
                    pElement.classList.add('switch-color-one');
                    h1Element.classList.add('switch-color-one');
    
            },
            isRevertChangeTextColor: function() {
                let h1Element = document.querySelector('h1');
                let pElement = document.querySelector('p');
                pElement.classList.remove('switch-color-one');
                h1Element.classList.remove('switch-color-one');
            },
        
            isCountUp: function() {
                let h1Element = document.querySelector('h1');
                ++this.count;
                h1Element.textContent = this.count;
                this.isUpdateCount();
            }
        }
        SWITCH.isUpdateCount();
        let pElement = document.querySelector('p');
        pElement.textContent = 'switch:OFF';
        pElement.addEventListener('click', function() {
            if ( SWITCH.isSwitch ) {
                this.textContent = `${SWITCH.buttonText}:ON`;
                SWITCH.isChangeTextColor();
            } else {
                this.textContent = `${SWITCH.buttonText}:OFF`;
                SWITCH.isRevertChangeTextColor();
            }
            SWITCH.isSwitch = !SWITCH.isSwitch;
        },false);

        const btn = document.getElementById('countButton');
        btn.textContent = SWITCH.buttonText;
        btn.addEventListener('click', function(){
            SWITCH.isCountUp();
        },false);
    
    },false);
}