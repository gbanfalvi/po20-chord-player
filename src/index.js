const { KeyboardHandler } = require("./controllers/KeyboardHandler");
const { ButtonHandler } = require("./controllers/ButtonHandler");
const { ChordPlayer } = require("./controllers/ChordPlayer");
const { ChordSpecs } = require("./models/ChordSpec");

const keyboardHandler = new KeyboardHandler()
const buttonHandler = new ButtonHandler()
const chordSpecs = ChordSpecs

ChordPlayer.Shared.load(() => {
    buttonHandler.setupButtons(chordSpecs)
    keyboardHandler.setupKeyboard(chordSpecs)    
})