/*
    * Loops through the given array to find the object with the given name
    * @param    {String}                                          The name of the desired clip
    * @param    {app.project.rootItem.children} The "array" that holds all of the clips in the project explorer
    * @return      {app.project.rootItem[j]}             The desired clip
*/
function get_clip(my_name, my_array) {
    for (j = 0; j < my_array.numItems; j++) {
        if (my_array[j].name === my_name) {
            return my_array[j];
        }
    }
}

var activeSeq = app.project.activeSequence;

// "spacer clip", change this name if you'd like
var color_bars = get_clip("color_bars.mp4", app.project.rootItem.children);
var track = activeSeq.videoTracks[1];
var cb_track = activeSeq.videoTracks[2];

// outer loop
// looping through the project panel minus an added sequence and "color_bars.mp4"
for (i = 1; i < app.project.rootItem.children.numItems - 2; i++) {
    
    // sequential clip names, change this if you'd like
    var current_name = "comment" + i + ".mp4";
    var clip = get_clip(current_name, app.project.rootItem.children);
    
    if (track.clips.numItems > 0) {
        var last = cb_track.clips[(track.clips.numItems - 1)];
        
        track.insertClip(clip, last.end.seconds);
    }
    else {
        track.insertClip(clip, 0);
    }

    var last = track.clips[(track.clips.numItems-1)];
    cb_track.insertClip(color_bars, last.end.seconds);
}
