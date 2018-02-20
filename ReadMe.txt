============================
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Beatboi - Beat Randomizer
JavaScript Project
Created: November 2017
Author: Gareth W. Jones
GitHub:https://github.com/gazrageous

vvvvvvvvvvvvvvvvvvvvvvvvvvvv
============================


============
Description:
============

Beatboi is a Beat Randomizer, designed to emulate a 'drumrack'
that can be found in most DAWs (Digital Audio Workstations), allowing a composer / producer
to flick switches on a grid to input beats and then playback the submitted pattern at a set tempo. 

Beatboi builds on this functionality by producing random patterns (if desired), which can
then be adjusted to the requirements of the composer or producer. This tool is intended to be
used in an experimental, compositional context, but can also be used just for fun! 

There are other functions intended to be added to this core functionality, which can be seen below in the 'Discussion' section.


============
Environment:
============

Beatboi was produced using the Atom text editor & Windows 10 OS. Beatboi also uses jQuery.


=========
Overview:
=========

Beatboi operates by creating an array of arrays, a 16 x 3 grid of individual 'switches'. 

The program then randomly generates a numeric value of switches to be turned on in each row. The kick drum and snare drum values are skewed to produce values closer to the median 
in order to avoid saturated beats that 'don't groove'.

Based on these numeric values these are then assigned to random switches in a for loop, checking if the switch is already turned on to avoid all of the values committing to one position. 

This is then followed by a function that will update the UI to indicate to the user what switches has been turned on. 

Beatboi's playback function can be adjusted to a user selected tempo. The playBeat() function then converts this into milliseconds and then prepares an appropriate interval between
calling the audio element from the DOM. It will also check to see if the audio file is already playing, and reset the file's playback if it reaches a new switch before the audio clip
has finished playback. 

Beatboi also allows users to input their own patterns with a click event, which will add the required value into the array and update the UI accordingly. 


==========
Discussion:
==========

As my first main JavaScript project, there were a few parts of constructing Beatboi that worked well for me. Working with an array of arrays, as a visual representation of the rack in
the console was a huge help. This assisted in writing the code that would update the UI. However, there was discussion with my mentor at the time about using JavaScript objects as a
cleaner means of perhaps building this software, specifically using methods and the 'this' keyword. I'd love to build a few other projects in this way and see if i can remake this project
in this way. 

Beatboi is at its core a fairly elementary program however, and i'd love to build in some more functionality that would make it a genuinely desirable free tool for musicians and composers.
Some additional features that i would like to add to Beatboi are: 


==Time Signatures:==

I would like to also include the option to use a greater set of time signatures beyond 4/4, namely 3/4 & 6/8. 
This would allow for greater experimention and value in different genres. Hopefully this will not be too difficult to build in as these time signatures are still relative to
a quaver (or quarter note) in how they are measured, meaning we can use repurpose of the same code from the playback funcition.


==Backbeat: ==

The backbeat function for beatboi locks in snare beats on positions 5 and 13 (beats 2 & 4) to emulate common genres such as rock and pop music. This function has been constructed in the
js file but does not yet update the UI properly. Hopefully this can be amended and work sometime soon!

==Mobile View==

At present Beatboye does not work well in a mobile context. I need to rethink the UI for a portrait perspective on handheld devices so they can be easily used behind a drumkit or in 
a studio setting. 

==HTML audio optimisation==

The playback of Beatboi is in instances inconsistent. I need to find a way to optimize the audio elements in the DOM to allow them to play with less latency. 


=========
License
=========

Beatboi has been created under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, 
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.