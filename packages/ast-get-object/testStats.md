TAP version 13
# Subtest: test/test.js
    # Subtest: 01.01 - get - one plain object as result
        ok 1 - 01.01
        1..1
    ok 1 - 01.01 - get - one plain object as result # time=16.835ms
    
    # Subtest: 01.02 - get - two plain object as result
        ok 1 - 01.02
        1..1
    ok 2 - 01.02 - get - two plain object as result # time=5.049ms
    
    # Subtest: 01.03 - get - topmost level container is object
        ok 1 - 01.03
        1..1
    ok 3 - 01.03 - get - topmost level container is object # time=3.704ms
    
    # Subtest: 01.04 - get - search value is object
        ok 1 - 01.04
        1..1
    ok 4 - 01.04 - get - search value is object # time=24.764ms
    
    # Subtest: 01.05 - get - search value is array
        ok 1 - 01.05
        1..1
    ok 5 - 01.05 - get - search value is array # time=7.428ms
    
    # Subtest: 01.06 - get - search value is nested array
        ok 1 - 01.06
        1..1
    ok 6 - 01.06 - get - search value is nested array # time=4.292ms
    
    # Subtest: 01.07 - get - search value is nested object
        ok 1 - 01.07
        1..1
    ok 7 - 01.07 - get - search value is nested object # time=3.162ms
    
    # Subtest: 01.08 - get - numerous everything
        ok 1 - 01.08
        1..1
    ok 8 - 01.08 - get - numerous everything # time=4.808ms
    
    # Subtest: 02.01 - set - one plain object
        ok 1 - 02.01
        1..1
    ok 9 - 02.01 - set - one plain object # time=3.984ms
    
    # Subtest: 02.02 - set - two plain object
        ok 1 - 02.02
        1..1
    ok 10 - 02.02 - set - two plain object # time=3.69ms
    
    # Subtest: 02.03 - set - topmost level object, one value deleted, one changed
        ok 1 - 02.03
        1..1
    ok 11 - 02.03 - set - topmost level object, one value deleted, one changed # time=2.048ms
    
    # Subtest: 02.04 - set - search val object, updated val from plain obj to nested arr
        ok 1 - 02.04
        1..1
    ok 12 - 02.04 - set - search val object, updated val from plain obj to nested arr # time=2.876ms
    
    # Subtest: 02.05 - set - search value is array - updated value array
        ok 1 - 02.05
        1..1
    ok 13 - 02.05 - set - search value is array - updated value array # time=3.11ms
    
    # Subtest: 02.06 - set - search value is nested array - deleted finding
        ok 1 - 02.06
        1..1
    ok 14 - 02.06 - set - search value is nested array - deleted finding # time=3.092ms
    
    # Subtest: 02.07 - set - edit skipping similar, false search result
        ok 1 - 02.07
        1..1
    ok 15 - 02.07 - set - edit skipping similar, false search result # time=3.407ms
    
    # Subtest: 02.08 - set - numerous everything, wrong order
        ok 1 - 02.08
        1..1
    ok 16 - 02.08 - set - numerous everything, wrong order # time=3.318ms
    
    # Subtest: 03.01 - missing inputs - throws
        ok 1 - expected to throw
        1..1
    ok 17 - 03.01 - missing inputs - throws # time=5.576ms
    
    # Subtest: 03.02 - missing keyValPair
        ok 1 - expected to throw
        1..1
    ok 18 - 03.02 - missing keyValPair # time=2.515ms
    
    1..18
    # time=340.264ms
ok 1 - test/test.js # time=340.264ms

# Subtest: test/umd-test.js
    # Subtest: UMD build works fine
        ok 1 - should be equivalent
        1..1
    ok 1 - UMD build works fine # time=13.275ms
    
    1..1
    # time=21.113ms
ok 2 - test/umd-test.js # time=21.113ms

1..2
# time=6341.54ms