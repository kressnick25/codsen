TAP version 13
# Subtest: test/test.js
    # Subtest: 1.1 - inputs missing - returns false
        ok 1 - 1.1
        1..1
    ok 1 - 1.1 - inputs missing - returns false # time=7.371ms
    
    # Subtest: 2.1 - Array
        ok 1 - 2.1.1
        ok 2 - 2.1.2
        1..2
    ok 2 - 2.1 - Array # time=3.125ms
    
    # Subtest: 2.2 - Plain object
        ok 1 - 2.2.1
        ok 2 - 2.2.2
        1..2
    ok 3 - 2.2 - Plain object # time=2.887ms
    
    # Subtest: 2.3 - String
        ok 1 - 2.3.1
        ok 2 - 2.3.2
        1..2
    ok 4 - 2.3 - String # time=2.319ms
    
    # Subtest: 2.4 - null
        ok 1 - 2.4
        1..1
    ok 5 - 2.4 - null # time=1.809ms
    
    # Subtest: 2.5 - hardcoded "undefined" - same as missing input
        ok 1 - 2.5
        1..1
    ok 6 - 2.5 - hardcoded "undefined" - same as missing input # time=1.724ms
    
    # Subtest: 2.5 - boolean - still empty (!)
        ok 1 - 2.5.1
        ok 2 - 2.5.2
        1..2
    ok 7 - 2.5 - boolean - still empty (!) # time=5.971ms
    
    # Subtest: 2.6 - function - still empty, no matter what's returned (!)
        ok 1 - 2.6
        1..1
    ok 8 - 2.6 - function - still empty, no matter what's returned (!) # time=1.72ms
    
    # Subtest: 2.7 - Number
        ok 1 - 2.7.1
        ok 2 - 2.7.2
        1..2
    ok 9 - 2.7 - Number # time=2.146ms
    
    1..9
    # time=140.292ms
ok 1 - test/test.js # time=140.292ms

1..1
# time=2438.235ms