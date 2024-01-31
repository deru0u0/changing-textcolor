'use strict';
{
    document.addEventListener('DOMContentLoaded', function(e) {
        const SWITCH = {
            isSwitch: true,
            switchText: 'switch',
            isChangeTextColor: function() {
                let pElement = document.querySelector('p');
                let header = document.querySelector('header');
                pElement.classList.add('on-switch');
                header.classList.add('on-switch');
            },
            isRevertChangeTextColor: function() {
                let pElement = document.querySelector('p');
                let header = document.querySelector('header');
                pElement.classList.remove('on-switch');
                header.classList.remove('on-switch');
            }
        }

        let pElement = document.querySelector('p');
        pElement.textContent = 'switch:OFF';
        pElement.addEventListener('click', function() {
            if ( SWITCH.isSwitch ) {
                this.textContent = `${SWITCH.switchText}:ON`;
                SWITCH.isChangeTextColor();
            } else {
                this.textContent = `${SWITCH.switchText}:OFF`;
                SWITCH.isRevertChangeTextColor();
                
                
            }
            SWITCH.isSwitch = !SWITCH.isSwitch;
        },false);
    },false);
}