
/** Specifications for a chord that the PO-20 can play. */
export class ChordSpec {

    /** @type {string} chord - Name of the chord */
    chord;

    /** @type {string[]} chordNotes - Notes to be played for the chord. */
    chordNotes;

    /** @type {string[]} playableNotes - Note scale that the PO-20's instruments can play on this chord.  */
    playableNotes;

    /** @type {number} buttonNo - Button number on the PO-20. */
    buttonNo;

    /** @type {string} keyboardKey - Keyboard shortcut key. */
    keyboardKey;

    constructor(chord, chordNotes, playableNotes, buttonNo, keyboardKey) {
        this.chord = chord
        this.chordNotes = chordNotes
        this.playableNotes = playableNotes
        this.buttonNo = buttonNo
        this.keyboardKey = keyboardKey
    }
}

// Playable note sets

const NoteSetA = ['A', 'B', 'C', 'D', 'E', 'F', 'G'] 
const NoteSetB = ['A', 'B', 'C', 'D', 'E', 'F', 'G#']
const NoteSetC = ['A', 'B', 'C', 'D', 'E', 'F#', 'G']
const NoteSetD = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G']
const NoteSetE = ['A', 'B', 'C#', 'D#', 'E', 'F#', 'G#']

// PO-20 Chord Specs

const Chord_dm = new ChordSpec('dm', ['D4', 'F4', 'A4'], NoteSetA, 1, '1') // A
const Chord_em = new ChordSpec('em', ['E4', 'G4', 'B4'], NoteSetA, 2, '2') // A
const Chord_Esus = new ChordSpec('Esus', ['E4', 'A4', 'B4'], NoteSetA, 3, '3') // A
const Chord_E = new ChordSpec('E', ['E4', 'G#4', 'B4'], NoteSetB, 4, '4') // B

const Chord_F = new ChordSpec('F', ['F4', 'A4', 'C5'], NoteSetA, 5, 'q') // A
const Chord_G = new ChordSpec('G', ['G4', 'B4', 'D5'], NoteSetA, 6, 'w') // A
const Chord_C_G = new ChordSpec('C/G', ['G4', 'C5', 'E5'], NoteSetA, 7, 'e') // A
const Chord_E_Gsh = new ChordSpec('E/G#', ['G#4', 'B4', 'E5'], NoteSetB, 8, 'r') // B

const Chord_am = new ChordSpec('am', ['A4', 'C5', 'E5'], NoteSetA, 9, 'a') // A
const Chord_C_A = new ChordSpec('C/A', ['A4', 'C5', 'G5'], NoteSetA, 10, 's') // A
const Chord_dm_A = new ChordSpec('dm/A', ['A4', 'D5', 'F5'], NoteSetA, 11, 'd') // A
const Chord_D_A = new ChordSpec('D/A', ['A4', 'D5', 'F#5'], NoteSetC, 12, 'f') // C

const Chord_A = new ChordSpec('A', ['A4', 'C#5', 'E5'], NoteSetD, 13, 'z') // D
const Chord_B_A = new ChordSpec('B/A', ['A4', 'B4', 'D#5'], NoteSetE, 14, 'x') // E
const Chord_C = new ChordSpec('C', ['C4', 'E4', 'G4'], NoteSetA, 15, 'c') // A
const Chord_D = new ChordSpec('D', ['D4', 'F#4', 'A4'], NoteSetC, 16, 'v') // C

/** Specifications for all the chords the PO-20 can play in an array. */
export const ChordSpecs = [
    Chord_dm, Chord_em, Chord_Esus, Chord_E, Chord_F, Chord_G, Chord_C_G, Chord_E_Gsh,
    Chord_am, Chord_C_A, Chord_dm_A, Chord_D_A, Chord_A, Chord_B_A, Chord_C, Chord_D
]