# autosequence.jsx

A Premiere Pro script that adds sequential clips from the project panel to the timeline in order with a "spacer" clip in between.

## Installation

Allow Premiere Pro to run scripts by changing to [debug mode](https://youtu.be/-QOrJgykr-4?t=238).

Download the [JSX Launcher](https://exchange.adobe.com/creativecloud.details.12096.jsx-launcher.html) add-on from the adobe extensions and [point it to the folder that holds this script](https://youtu.be/qR4YBb2K2hI?t=66).

## Usage
Add a new sequence to the project panel with your desired frame size. Add the "spacer" clip that you'd like to have in between each other clip. These two items are important to make the outer for loop work correctly. (Of course, if you don't want to add two clips then you could change the for loop in the source code.) 

Now you can dump the rest of the sequential clips that you'd like to be added in order into the project panel. Clicking the autosequence.jsx button in the JSX Launcher panel will add each of the clips in order with the "spacer" clip in between.
