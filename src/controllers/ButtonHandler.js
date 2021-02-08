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

        const numberElem = ElemFactory.create('div', null, ['key-number'])
        numberElem.innerText = chordSpec.buttonNo

        const buttonElem = ElemFactory.create('div', null, ['key-button'])
        buttonElem.innerText = chordSpec.keyboardKey

        const chordElem = ElemFactory.create('div', null, ['key-chord'])
        chordElem.innerText = chordSpec.chord

        const notesElem = ElemFactory.create('div', null, ['key-notes'])
        notesElem.innerText = chordSpec.chordNotes.join(', ')

        keyContainer.appendChild(numberElem)
        keyContainer.appendChild(buttonElem)
        keyContainer.appendChild(chordElem)
        keyContainer.appendChild(notesElem)

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