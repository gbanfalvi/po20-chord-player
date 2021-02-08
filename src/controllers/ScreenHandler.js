
import { ChordSpec } from '../models/ChordSpec'
import { ElemFactory } from '../util/ElemFactory'

export class ScreenHandler {

    /**
     * Updates the screen to show the new chordSpec's details.
     * @param {ChordSpec} chordSpec 
     */
    setChordSpec(chordSpec) {
        const keysElement = document.getElementById('screen-chord-keys')
        keysElement.innerText = chordSpec.chordNotes.join(', ')

        const scaleNotesElement = document.getElementById('screen-chord-scale-notes')
        scaleNotesElement.innerHTML = ''

        chordSpec.playableNotes.map(n => {
            const noteSpan = ElemFactory.create('span', null, ['note'])
            noteSpan.innerText = n
            return noteSpan

        }).forEach(e => {
            scaleNotesElement.appendChild(e)
        })
    }

    static Shared = new ScreenHandler()
}