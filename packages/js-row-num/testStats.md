TAP version 13
# Subtest: test/test.js
    # Subtest: 01.01 - wrong input is just being returned
        ok 1 - expected to not throw
        ok 2 - expected to not throw
        ok 3 - expected to not throw
        ok 4 - expected to not throw
        ok 5 - expected to not throw
        ok 6 - expected to not throw
        ok 7 - expected to not throw
        1..7
    ok 1 - 01.01 - wrong input is just being returned # time=13.563ms
    
    # Subtest: 02.01 - single straight quotes - no whitespace
        ok 1 - should be equal
        1..1
    ok 2 - 02.01 - single straight quotes - no whitespace # time=6.355ms
    
    # Subtest: 02.02 - single straight quotes - with whitespace
        ok 1 - should be equal
        1..1
    ok 3 - 02.02 - single straight quotes - with whitespace # time=3.193ms
    
    # Subtest: 02.03 - single straight quotes - tight, no semicolon
        ok 1 - should be equal
        1..1
    ok 4 - 02.03 - single straight quotes - tight, no semicolon # time=4.209ms
    
    # Subtest: 02.04 - double quotes - tight
        ok 1 - should be equal
        1..1
    ok 5 - 02.04 - double quotes - tight # time=6.927ms
    
    # Subtest: 02.05 - double quotes - newlines
        ok 1 - should be equal
        1..1
    ok 6 - 02.05 - double quotes - newlines # time=3.386ms
    
    # Subtest: 02.06 - double quotes - with whitespace
        ok 1 - should be equal
        1..1
    ok 7 - 02.06 - double quotes - with whitespace # time=3.007ms
    
    # Subtest: 02.07 - backticks - tight
        ok 1 - should be equal
        1..1
    ok 8 - 02.07 - backticks - tight # time=3.417ms
    
    # Subtest: 02.08 - console log with ANSI escapes - one ANSI escape chunk in front
        ok 1 - should be equal
        1..1
    ok 9 - 02.08 - console log with ANSI escapes - one ANSI escape chunk in front # time=2.84ms
    
    # Subtest: 02.09 - synthetic test where colour is put in deeper curlies for easier visual grepping
        ok 1 - should be equal
        1..1
    ok 10 - 02.09 - synthetic test where colour is put in deeper curlies for easier visual grepping # time=3.367ms
    
    # Subtest: 02.10 - synthetic test where colour code is put raw
        ok 1 - should be equal
        1..1
    ok 11 - 02.10 - synthetic test where colour code is put raw # time=10.561ms
    
    # Subtest: 02.11 - bunch of whitespace 1
        ok 1 - 02.04.04 - synthetic test where colour is put in deeper curlies for easier visual grepping
        1..1
    ok 12 - 02.11 - bunch of whitespace 1 # time=1.305ms
    
    # Subtest: 02.12 - bunch of whitespace 2
        ok 1 - 02.04.05 - synthetic test where colour code is put raw
        1..1
    ok 13 - 02.12 - bunch of whitespace 2 # time=2.762ms
    
    # Subtest: 02.13 - updates console.logs within comment blocks
        ok 1 - should be equal
        1..1
    ok 14 - 02.13 - updates console.logs within comment blocks # time=2.523ms
    
    # Subtest: 02.14 - \n in front
        ok 1 - should be equal
        1..1
    ok 15 - 02.14 - \n in front # time=2.5ms
    
    # Subtest: 02.15 - automatic 4 digit padding on >45K chars
        ok 1 - should be equal
        1..1
    ok 16 - 02.15 - automatic 4 digit padding on >45K chars # time=213.336ms
    
    # Subtest: 03.01 - [36mfalse positives[39m - text that mentions console.log
        ok 1 - 03.01
        1..1
    ok 17 - 03.01 - [36mfalse positives[39m - text that mentions console.log # time=175.338ms
    
    # Subtest: 03.02 - [36mfalse positives[39m - no digits at all
        ok 1 - 03.02
        1..1
    ok 18 - 03.02 - [36mfalse positives[39m - no digits at all # time=6.288ms
    
    # Subtest: 03.03 - [36mfalse positives[39m - no opening bracket after console.log
        ok 1 - 03.03
        1..1
    ok 19 - 03.03 - [36mfalse positives[39m - no opening bracket after console.log # time=12.661ms
    
    # Subtest: 03.04 - [36mfalse positives[39m - all ASCII symbols
        ok 1 - 03.04
        1..1
    ok 20 - 03.04 - [36mfalse positives[39m - all ASCII symbols # time=2.009ms
    
    # Subtest: 04.01 - [33mopts.padStart[39m - padding is set to numbers
        ok 1 - 04.01.01 - control - default is three
        ok 2 - 04.01.02
        ok 3 - 04.01.03
        ok 4 - 04.01.04
        ok 5 - 04.01.05
        ok 6 - 04.01.05
        ok 7 - 04.01.06
        ok 8 - 04.01.07 - negative numbers are ignored, default (3) is used
        1..8
    ok 21 - 04.01 - [33mopts.padStart[39m - padding is set to numbers # time=11.58ms
    
    # Subtest: 04.02 - [33mopts.padStart[39m - padding is set to be falsey
        ok 1 - 04.02.01
        ok 2 - 04.02.02
        ok 3 - 04.02.03
        1..3
    ok 22 - 04.02 - [33mopts.padStart[39m - padding is set to be falsey # time=5.322ms
    
    # Subtest: 05.01 - [35mad-hoc[39m - text that uses \r only as EOL characters
        ok 1 - 05.01.01
        ok 2 - 05.01.02
        ok 3 - 05.01.03
        1..3
    ok 23 - 05.01 - [35mad-hoc[39m - text that uses \r only as EOL characters # time=4.006ms
    
    # Subtest: 05.02 - [35mad-hoc[39m - broken ANSI - will not update
        ok 1 - 05.02 - ANSI opening sequence's m is missing
        1..1
    ok 24 - 05.02 - [35mad-hoc[39m - broken ANSI - will not update # time=2.386ms
    
    # Subtest: 06.01 - [34mopts.triggerKeywords[39m - baseline
        ok 1 - should be equal
        1..1
    ok 25 - 06.01 - [34mopts.triggerKeywords[39m - baseline # time=2.117ms
    
    # Subtest: 06.02 - [34mopts.triggerKeywords[39m - works on custom function
        ok 1 - should be equal
        1..1
    ok 26 - 06.02 - [34mopts.triggerKeywords[39m - works on custom function # time=2.467ms
    
    # Subtest: 06.03 - [34mopts.triggerKeywords[39m - non-existing log function
        ok 1 - should be equal
        ok 2 - should be equal
        ok 3 - should be equal
        ok 4 - should be equal
        1..4
    ok 27 - 06.03 - [34mopts.triggerKeywords[39m - non-existing log function # time=5.639ms
    
    1..27
    # time=684.523ms
ok 1 - test/test.js # time=684.523ms

1..1
# time=3793.609ms