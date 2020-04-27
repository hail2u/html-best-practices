# Use numeric character references for control or invisible characters

These characters are easily mistaken for another character. And also spec does
not guarantee to define a human readable name for these characters.

Bad:

    <p>This book can read in 1 hour.</p>

Good:

    <p>This book can read in 1&#xA0;hour.</p>
