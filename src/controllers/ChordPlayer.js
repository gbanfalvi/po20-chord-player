

import { Piano } from '@tonejs/piano'
import { ChordSpec } from '../models/ChordSpec'

/**
 * Plays chords with `@tonejs/piano`.
 */
export class ChordPlayer {

    /** @type {Piano} _piano - actual piano instrument. */
    _piano = new Piano({
        velocities: 1,
        minNote: 59,
        maxNote: 80
    })

    /** @type {ChordSpec[]} _downChords - Chords being pressed down. */
    _downChords = []
    
    /**
     * Initializes the instrument player. Callback is called when all assets
     * are loaded.
     * @param {onLoadedCallback} onLoaded 
     */
    load(onLoaded) {
        this._piano.toDestination()
        this._piano.load().then(onLoaded)
    }

    /**
     * Play a chord. 
     * 
     * If another chord is being played, only play the notes that aren't already
     * being played.
     * 
     * @param {ChordSpec} chordSpec 
     */
    chordDown(chordSpec) {
        if (this._downChords.includes(chordSpec)) {
            return
        }

        const newNotes = this._missingNotes(chordSpec)
        console.log(`Adding ${newNotes}`)
        for (const newNote of newNotes) {
            this._piano.keyDown({note: newNote})
        }

        this._downChords.push(chordSpec)
    }

    /**
     * Stop playing a chord.
     * @param {ChordSpec} chordSpec 
     */
    chordUp(chordSpec) {
        if (!this._downChords.includes(chordSpec)) {
            return
        }

        const removedNotes = this._spareNotes(chordSpec)
        console.log(`Removing ${removedNotes}`)

        for (const removedNote of removedNotes) {
            this._piano.keyUp({note: removedNote})
        }

        this._downChords = this._downChords.filter(c => { return c != chordSpec })
    }

    /**
     * Returns the notes that are not being played in our current downChords in
     * this new chordSpec.
     * 
     * @param {ChordSpec} chordSpec 
     */
    _missingNotes(chordSpec) {
        const activeNotes = this._downChords.flatMap(c => {return c.chordNotes})
        const newNotes = chordSpec.chordNotes.filter(n => { return !activeNotes.includes(n)})
        console.log(activeNotes, newNotes)
        return newNotes
    }

    /**
     * Returns the notes that should stop being played if we removed this 
     * chordSpec from our current downChords.
     * 
     * @param {ChordSpec} chordSpec 
     */
    _spareNotes(chordSpec) {
        const allActiveNotes = this._downChords.flatMap(c => {return c.chordNotes})
        const remainingNotes = this._downChords.filter(c => {return c != chordSpec}).flatMap(c => {return c.chordNotes})
        return allActiveNotes.filter(n => { return !remainingNotes.includes(n)} )
    }

    /** Shared instance called by keyboard, touch and mouse click handlers. 
     * I love singletons, I'm an iOS developer. Sue me.
     */
    static Shared = new ChordPlayer()
}


/**
 * Called when the player's assets are loaded.
 * @callback onLoadedCallback
 * @returns {Void}
 */
