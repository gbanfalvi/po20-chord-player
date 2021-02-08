import { ChordSpec } from '../models/ChordSpec'
import { ElemFactory } from "../util/ElemFactory";
import { OsDetect } from "../util/OsDetect";
import { ChordPlayer } from "./ChordPlayer";

/**
 * Creates buttons and sets up touch & click event handling.
 */
export class ButtonHandler {
    
    /**
     * Sets up all the buttons in the HTML.
     * @param {ChordSpec[]} chordSpecs 
     */
    setupButtons(chordSpecs) {
        for (const chordSpec of chordSpecs) {
            this._setupButton(chordSpec)
        }
    }

    /**
     * Creates each button's content and sets up click & tap listening events in the HTML.
     * @param {ChordSpec} chordSpec 
     */
    _setupButton(chordSpec) {

        const keyContainer = document.getElementById(`chord-${chordSpec.buttonNo}`)

        // Button top
        // const notesElem = ElemFactory.create('div', null, ['button-notes'])
        // notesElem.innerText = chordSpec.chordNotes.join(', ')
        
        const chordElem = ElemFactory.create('div', null, ['button-chord'])
        chordElem.innerText = chordSpec.chord

        const buttonTopElem = ElemFactory.create('div', null, ['button-top'])
        // buttonTopElem.appendChild(notesElem)
        buttonTopElem.appendChild(chordElem)

        // Button bottom
        const numberElem = ElemFactory.create('div', null, ['button-number'])
        numberElem.innerText = chordSpec.buttonNo
        
        const keyElem = ElemFactory.create('div', null, ['button-key'])
        keyElem.innerText = chordSpec.keyboardKey
        
        const buttonBottomElem = ElemFactory.create('div', null, ['button-bottom'])
        buttonBottomElem.appendChild(numberElem)
        buttonBottomElem.appendChild(keyElem)

        // Put everything together
        keyContainer.appendChild(buttonTopElem)
        keyContainer.appendChild(buttonBottomElem)

        // Touch & mouse events
        const useTouch = OsDetect.isIos() 

        if (useTouch) {
            keyContainer.addEventListener('touchstart', ()=> {
                ChordPlayer.Shared.chordDown(chordSpec)
            })

            keyContainer.addEventListener('touchend', () => {
                ChordPlayer.Shared.chordUp(chordSpec)
            })
        
        } else {
            keyContainer.addEventListener('mousedown', ()=> {
                ChordPlayer.Shared.chordDown(chordSpec)
            })

            keyContainer.addEventListener('mouseup', () => {
                ChordPlayer.Shared.chordUp(chordSpec)
            })
            
        }
    }
}