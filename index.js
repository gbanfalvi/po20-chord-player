
import { Piano } from '@tonejs/piano'

// Utility

function isIos() {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

const useTouch = isIos()

// Set up piano component

const piano = new Piano({
    velocities: 1,
    minNote: 59,
    maxNote: 80
})

piano.toDestination()

// Configuration

const chordSpecs = [
    { id: 'chord-dm', notes: ['D4', 'F4', 'A4'], key: '1' },
    { id: 'chord-em', notes: ['E4', 'G4', 'B4'], key: '2' },
    { id: 'chord-Esus', notes: ['E4', 'A4', 'B4'], key: '3' },
    { id: 'chord-E', notes: ['E4', 'G#4', 'B4'], key: '4' },

    { id: 'chord-F', notes: ['F4', 'A4', 'C5'], key: 'q' },
    { id: 'chord-G', notes: ['G4', 'B4', 'D5'], key: 'w' },
    { id: 'chord-C_G', notes: ['G4', 'C5', 'E5'], key: 'e' },
    { id: 'chord-E_Gsh', notes: ['G#4', 'B4', 'E5'], key: 'r' },

    { id: 'chord-am', notes: ['A4', 'C5', 'E5'], key: 'a' },
    { id: 'chord-C_A', notes: ['A4', 'C5', 'G5'], key: 's' },
    { id: 'chord-dm_A', notes: ['A4', 'D5', 'F5'], key: 'd' },
    { id: 'chord-D_A', notes: ['A4', 'D5', 'F#5'], key: 'f' },

    { id: 'chord-A', notes: ['A4', 'C#5', 'E5'], key: 'z' },
    { id: 'chord-B_A', notes: ['A4', 'B4', 'D#5'], key: 'x' },
    { id: 'chord-C', notes: ['C4', 'E4', 'G4'], key: 'c' },
    { id: 'chord-D', notes: ['D4', 'F#4', 'A4'], key: 'v' }
]

// IDs for chord specs being pressed.
let downKeys = []

piano.load().then(() => {

    // Press keys a chord spec. Ignore if already being played.
    function keyDown(chordSpec) {
        if (downKeys.includes(chordSpec.id)) {
            return
        }

        downKeys.push(chordSpec.id)
        for (let note of chordSpec.notes) {
            piano.keyDown({ note: note })
        }
    }

    // Release keys for a chord spec.
    function keyUp(chordSpec) {
        downKeys = downKeys.filter(chordId => { chordId == chordSpec.id })
        for (let note of chordSpec.notes) {
            piano.keyUp({ note: note })
        }
    }

    // Add listeners to all the buttons.
    for (let chordSpec of chordSpecs) {
        let button = document.getElementById(chordSpec.id)

        if (useTouch) {

            button.addEventListener('touchstart', () => {
                keyDown(chordSpec)
            })
    
            button.addEventListener('touchend', () => {
                keyUp(chordSpec)
            })
        } else {
            button.addEventListener('mousedown', () => {
                keyDown(chordSpec)
            })
    
            button.addEventListener('mouseup', () => {
                keyUp(chordSpec)
            })
        }

    }

    // Add key down listener for keyboard shortcuts.
    document.addEventListener('keydown', event => {
        const chordSpec = chordSpecs.filter(cs => { return event.key == cs.key })[0]

        if (chordSpec != null) {
            let button = document.getElementById(chordSpec.id)
            button.classList.add('clicked')
            keyDown(chordSpec)
        }
    })

    // Add key up listener for keybord shortcuts.
    document.addEventListener('keyup', event => {
        const chordSpec = chordSpecs.filter(cs => { return event.key == cs.key })[0]

        if (chordSpec != null) {
            let button = document.getElementById(chordSpec.id)
            button.classList.remove('clicked')
            keyUp(chordSpec)
        }
    })
}) 