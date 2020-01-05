document.addEventListener('keydown', function (event) {
    key(event);
});

function key(event) {
    switch (event.key) {
        case '-':
            window.location = '..';
            break;
        case '/':
            window.location = '.';
            break;
    }
}