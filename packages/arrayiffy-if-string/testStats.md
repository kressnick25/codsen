TAP version 13
# Subtest: test/test.js
    # Subtest: 01.01 - string input
        ok 1 - 01.01.01
        ok 2 - 01.01.02
        1..2
    ok 1 - 01.01 - string input # time=10.373ms
    
    # Subtest: 01.02 - non-string input
        ok 1 - 01.02.01
        ok 2 - 01.02.02
        ok 3 - 01.02.03
        ok 4 - 01.02.04
        ok 5 - 01.02.05
        1..5
    ok 2 - 01.02 - non-string input # time=5.321ms
    
    1..2
    # time=99.775ms
ok 1 - test/test.js # time=99.775ms

# Subtest: test/umd-test.js
    # Subtest: UMD build works fine
        ok 1 - should be equivalent
        1..1
    ok 1 - UMD build works fine # time=9.194ms
    
    1..1
    # time=82.704ms
ok 2 - test/umd-test.js # time=82.704ms

1..2
# time=4002.261ms