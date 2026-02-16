from calculator import add, subtract

def test_add():
    assert add(2, 3) == 6

def test_subtract():
    assert subtract(10, 5) == 5
