TAP version 13
# Subtest: test/test.js
    # Subtest: 01.01 - called upon a single file which is healthy
        ok 1 - should match pattern provided
        1..1
    ok 1 - 01.01 - called upon a single file which is healthy # time=1432.497ms
    
    # Subtest: 01.02 - called upon a single file which contains non-ASCII symbol
        ok 1 - expect rejected Promise
        1..1
    ok 2 - 01.02 - called upon a single file which contains non-ASCII symbol # time=926.78ms
    
    # Subtest: 01.03 - version output mode
        ok 1 - should match pattern provided
        ok 2 - should match pattern provided
        1..2
    ok 3 - 01.03 - version output mode # time=1767.853ms
    
    # Subtest: 01.04 - help output mode
        ok 1 - should match pattern provided
        ok 2 - should match pattern provided
        ok 3 - should match pattern provided
        ok 4 - should match pattern provided
        ok 5 - should match pattern provided
        ok 6 - should match pattern provided
        1..6
    ok 4 - 01.04 - help output mode # time=1823.63ms
    
    # Subtest: 01.05 - no files found in the given directory
        ok 1 - expect rejected Promise
        1..1
    ok 5 - 01.05 - no files found in the given directory # time=861.815ms
    
    1..5
    # time=6825.8ms
ok 1 - test/test.js # time=6825.8ms

1..1
# time=8898.806ms