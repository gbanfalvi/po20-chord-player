const { KeyboardHandler } = require("./src/controllers/KeyboardHandler");
const { ButtonHandler } = require("./src/controllers/ButtonHandler");
const { ChordPlayer } = require("./src/controllers/ChordPlayer");
const { ChordSpecs } = require("./src/models/ChordSpec");

const keyboardHandler = new KeyboardHandler()
const buttonHandler = new ButtonHandler()
const chordSpecs = ChordSpecs

ChordPlayer.Shared.load(() => {
    buttonHandler.setupButtons(chordSpecs)
    keyboardHandler.setupKeyboard(chordSpecs)    
})