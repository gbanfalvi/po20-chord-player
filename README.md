# PO-20 Chord Player

This is a tiny JavaScript gadget that allows you to test (play) the 16 chords that Teenage Engineering's PO-20 supports in your browser. 

It just renders 16 buttons and you can tap them, click them or press a key on your keyboard to hear what they sound like. 

## Setup
Have a decently new-ish version of Node & NPM. Then just run:
```sh
npm install
```

## Development and Building
I'm using Parcel to develop and package the gadget.

To build and run locally on `:1234` just do: 
```
npm run watch
```

To build into `./dist` do:
```
npm run build
```

## Credits

- [Atkinson Hyperlegible Font](https://brailleinstitute.org/freefont)
- [@tonejs/Piano](https://github.com/tambien/Piano) 
- [This post by u/TheBanjoPrince](https://www.reddit.com/r/pocketoperators/comments/8ctdzv/po20_scale_guide/)
- [This design by Jack Harvatt I ripped off badly.](https://dribbble.com/shots/3639665-Pocket-Operator-20-PO-20)