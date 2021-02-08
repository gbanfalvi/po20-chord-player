import { ChordSpec } from "../models/ChordSpec";
import { ChordPlayer } from "./ChordPlayer";

/**
 * Just configures keyboard events for the gadget.
 */
export class KeyboardHandler {

    /**
     * Sets up keyboard keydown and keyup events so we can use keyboard shortcuts.
     * 
     * @param {ChordSpec[]} chordSpecs 
     */
    setupKeyboard(chordSpecs) {
        document.addEventListener('keydown', event => {
            const chordSpec = chordSpecs.filter(cs => {return event.key == cs.keyboardKey})[0]

            if (chordSpec != null) {
                ChordPlayer.Shared.chordDown(chordSpec)   
            }
        })

        document.addEventListener('keyup', event => {
            const chordSpec = chordSpecs.filter(cs => {return event.key == cs.keyboardKey})[0]

            if (chordSpec != null) {
                ChordPlayer.Shared.chordUp(chordSpec)   
            }
        })
    }
}