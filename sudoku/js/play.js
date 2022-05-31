const HIGHLIGHT_CLASS = "highlight";

const data = {
    'highlighted': null,
    'squareHighlighted': null,
    'board': '',
    'answer': '',
    'history': [],
    'game': '',
    'timer': 0,
    'note': false,
    'won': false,
    'difficulty': 'easy',
};

const settings = {
    'keyboard_input': true,
    'keyboard_notes': true,
    'arrow_nav': true,
    'quick_nav': false,
    'show_errors': true,
};

document.addEventListener('DOMContentLoaded', function() {
    initStorage();
    loadSettings();
    createGrid();
    if (localStorage.getItem('currentGame') === '') {
        createGame();
    } else {
        loadGame();
    }
});

document.addEventListener('keydown', function(event) {
    key(event);
});

function key(event) {
    console.log(event.key);
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (numbers.includes(event.key)) {
        if (!settings.keyboard_input) return;
        numberClicked(parseInt(event.key));
    }
    switch(event.key) {
        case ' ':
            if (settings.keyboard_notes) notesToggle();
            break;
        case 'ArrowRight':
            arrowKey(1);
            break;
        case 'ArrowLeft':
            arrowKey(-1);
            break;
        case 'ArrowDown':
            arrowKey(9);
            break;
        case 'ArrowUp':
            arrowKey(-9);
            break;
        case 'Escape':
            if (data.highlighted !== null) boxClicked(data.highlighted);
            if (data.squareHighlighted !== null) {
                document.getElementById(data.squareHighlighted).classList.remove('highlight');
                data.squareHighlighted = null;
            }
            break;
    }
}

/**
 * Creates default values for all required local storage items
 * if they don't already exist
 */
function initStorage() {
    if (localStorage.getItem('firstTime') !== '1') {
        localStorage.setItem('firstTime', 1);
        localStorage.setItem('lastPlayed', '');
        localStorage.setItem('currentGame', '');
        localStorage.setItem('currentBoard', '');
        localStorage.setItem('currentTime', 0);
        localStorage.setItem('previousGames', '');
        localStorage.setItem('difficulty', '');

        let stats = [
            "easy_games_played;0",
            "easy_best_time;0:00",
            "easy_average_time;0:00",
            "medium_games_played;0",
            "medium_best_time;0:00",
            "medium_average_time;0:00",
            "hard_games_played;0",
            "hard_best_time;0:00",
            "hard_average_time;0:00",
            "extreme_games_played;0",
            "extreme_best_time;0:00",
            "extreme_average_time;0:00",
            "hardest_games_played;0",
            "hardest_best_time;0:00",
            "hardest_average_time;0:00",
        ];
        localStorage.setItem('stats', stats.toString());
    }
}

/**
 * Loads the users settings
 */
function loadSettings() {
    let input = localStorage.getItem('keyboard_input');
    settings.keyboard_input = (input === null) ? true : input === 'true';
    let notes = localStorage.getItem('keyboard_notes');
    settings.keyboard_notes = (notes === null) ? true : notes === 'true';
    let arrowNav = localStorage.getItem('arrow_nav');
    settings.arrow_nav = (arrowNav === null) ? true : arrowNav === 'true';
    let quickNav = localStorage.getItem('quick_nav');
    settings.quick_nav = (quickNav === null) ? false : quickNav === 'true';
    let errors = localStorage.getItem('show_errors');
    settings.show_errors = (errors === null) ? true : errors === 'true';
    let removeNotes = localStorage.getItem('auto_remove_notes');
    settings.auto_remove_notes = (removeNotes === null) ? true : removeNotes === 'true';
}

/**
 * Creates the HTML grid used to play sudoku
 */
function createGrid() {
    let game = document.getElementById('game');

    // Creates the squares
    for (let i = 1; i <= 9; i++) {
        let square = document.createElement('div');
        square.id = 's' + i;
        square.className = 'container square item';
        game.appendChild(square);
        
        // Creates the boxes within the squares
        for (let j = 1; j <= 9; j++) {
            let box = document.createElement('div');
            box.id = 's' + i + 'b' + j;
            box.className = 'container box item';
            box.onclick = boxClicked;
            square.appendChild(box);

            // Container for the text
            let c = document.createElement('div');
            c.className = 'pCont';
            box.appendChild(c);

            // Text for the box
            let b = document.createElement('p');
            b.id = 's' + i + 'b' + j + 'p';
            b.className = 'boxP';
            c.appendChild(b);

            // Creates the note boxes within the boxes
            for (let k = 1; k <= 9; k++) {
                let note = document.createElement('div');
                note.id = 's' + i + 'b' + j + 'n' + k;
                note.className = 'item';
                box.appendChild(note);

                // Text for the note
                let n = document.createElement('p');
                n.id = 's' + i + 'b' + j + 'n' + k + 'p';
                n.className = 'noteP';
                note.appendChild(n);
            }
        }
    }
}

/**
 * Gets the current puzzle difficulty
 */
function getPuzzle() {
    let dificulties = ['easy', 'medium', 'hard', 'extreme', 'hardest'];
    let puzzles = [easy, medium, hard, extreme, hardest];
    let i = dificulties.indexOf(data.difficulty);
    return (data.difficulty === 'hardest') ? puzzles[i][data.game]: hardest[0];
}

/**
 * Creates a new game
 */
function createGame() {
    let param = new URLSearchParams(document.location.search);
    data.difficulty = param.get('difficulty');
    if (data.difficulty === null) { // no url param set
        data.difficulty = 'easy'; // default to easy
    }
    localStorage.setItem('difficulty', data.difficulty);

    // select a puzzle that hasn't been played in the last 10 games
    let lastPlayed = localStorage.getItem('lastPlayed');
    lastPlayed = (lastPlayed === '') ? [] : lastPlayed.split(',');
    let num = null;
    do {
        num = Math.floor(Math.random() * easy.length);
    } while (lastPlayed.includes(num) && lastPlayed.length < easy.length);

    localStorage.setItem('currentGame', num);
    localStorage.setItem('currentBoard', easy[num].split(':')[0]);
    writeBoard();
    saveGame();
    loadData();
}

/**
 * Loads the current game
 */
function loadGame() {
    writeBoard();
    loadData();
}

/**
 * Loads the data for the current game
 */
function loadData() {
    data.game = parseInt(localStorage.getItem('currentGame'));
    data.board = readBoard();
    data.answer = easy[data.game].split(':')[1];
    data.timer = parseInt(localStorage.getItem('currentTime')) - 1;
    data.difficulty = localStorage.getItem('difficulty');
    document.getElementById('difficulty').innerHTML = data.difficulty;
    timer();
}

/**
 * Writes all the numbers to the board
 */
function writeBoard() {
    let puzzle = easy[parseInt(localStorage.getItem('currentGame'))].split(':')[0];
    let board = localStorage.getItem('currentBoard');
    let actualI = 0;
    for (let i = 0; i < board.length; i++) {
        let box = document.getElementById(i2b(actualI) + 'p');

        if (board[i] === '[') { // handle notes
            let offset = 1;
            while (board[i + offset] !== ']') {
                document.getElementById(box.id.substring(0, 4) + 'n' + board[i + offset] + 'p').innerHTML = board[i + offset];
                offset++;
            }
            i += offset;
            actualI++;
            box.classList.add('editable');
            continue;
        }

        if (puzzle[actualI] === '0') { 
            box.classList.add('editable');
        }
        box.innerHTML = (board[i] === '0') ? '' : board[i];
        actualI++;
    }
}

/**
 * Reads all the values from the board into a string
 */
function readBoard() {
    let puzzle = easy[parseInt(localStorage.getItem('currentGame'))].split(':')[0];
    let board = "";
    for (let i = 0; i < puzzle.length; i++) {
        let id = i2b(i);
        let box = document.getElementById(id + 'p');
        let notes = getNotes(id);
        if (notes === '') {
            board += (box.innerHTML === '') ? '0' : box.innerHTML;
        } else {
            board += '[' + notes + ']';
        }
    }
    return board;
}

/**
 * Returns all the notes that have been set in a particular box
 */
function getNotes(id) {
    let notes = '';
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById(id + 'n' + i + 'p').innerHTML !== '') {
            notes += i;
        }
    }
    return notes;
}

// convert an index into a square and box number
function i2b(i) {
    let hor = i % 9;
    let ver = Math.floor(i / 9);
    let square = 3 * (Math.floor(ver / 3)) + (Math.floor(hor / 3)) + 1;
    let box = 3 * (ver % 3) + (hor % 3) + 1;
    return 's' + square + 'b' + box;
}

// convert a square and box number into an index
function b2i(box) {
    let s = parseInt(box[1]);
    let b = parseInt(box[3]);
    return (27*(Math.floor((s-1)/3))) + (9*(Math.floor((b-1)/3))) + (3*((s-1)%3)) + ((b-1)%3);
}

/**
 * Convert the location of a number in the numberpad into its 
 * corresponding square number location. e.g. 7 is in the top left of
 * the numberpad, and square 1 is in the top left of the grid
 */
function k2s(k) {
    switch (k) {
        case 1:
            return 7;
        case 2:
            return 8;
        case 3:
            return 9;
        case 7:
            return 1;
        case 8:
            return 2;
        case 9:
            return 3;
        default:
            return k;
    }
}

/**
 * Selects the next box in the direction of the arrow key pressed
 */
function arrowKey(direction) {
    if (data.highlighted === null || !settings.arrow_nav) return;
    let index = b2i(data.highlighted);
    let sb = null;
    do {
        index += direction;
        if (index < 0) index += 81;
        index %= 81;
        sb = i2b(index);
    } while (!document.getElementById(sb + 'p').classList.contains('editable'));
    boxClicked(sb);
}

/**
 * Selects a box. Called when a box is clicked.
 */
function boxClicked(event) {
    let target = (typeof(event) === "string") ? event : event.target.id.substring(0, 4);
    let box = document.getElementById(target);
    if (!isEditable(box)) {
        return;
    }
    if (data.highlighted === box.id) {
        box.classList.remove(HIGHLIGHT_CLASS);
        data.highlighted = null;
    } else { 
        if (data.highlighted !== null) {
            document.getElementById(data.highlighted).classList.remove(HIGHLIGHT_CLASS);
        }
        box.classList.add(HIGHLIGHT_CLASS);
        data.highlighted = box.id;
    }
}

/**
 * Puts a number into the highlited box
 */
function numberClicked(num) {
    if (data.highlighted !== null) { // a box has been highlighted
        if (data.note && num !== 0) { // the number is to be a note
            let p = document.getElementById(data.highlighted + 'n' + num + 'p');
            data.history.push(p.id + ':' + p.innerHTML);
            p.innerHTML = (num == p.innerHTML) ? '' : num;
        } else { // the number is not a note
            let history = '';
            let notes = getNotes(data.highlighted);
            if (notes !== '') {
                for (let i = 0; i < notes.length; i++) {
                    let p = document.getElementById(data.highlighted + 'n' + notes[i] + 'p');
                    history += p.id + ':' + notes[i] + ':';
                    p.innerHTML = '';
                }
            }

            let p = document.getElementById(data.highlighted + 'p');
            if (p.innerHTML == num) { // remove number if it is the same
                numberClicked(0); // zero removes the current number
                return;
            }
            history += p.id + ':' + p.innerHTML + ':';
            p.innerHTML = (num === 0) ? '' : num;
            if (settings.show_errors) checkError();
            if (settings.auto_remove_notes) history += removeAdjacentNotes();
            if (settings.quick_nav) boxClicked(data.highlighted); // deselect the current box if quick nav is enabled
            data.history.push(history.substring(0, history.length - 1));
        }
        saveGame();
        checkWin();
    } else if (data.squareHighlighted !== null) { // a box hasn't been highlighted, but a square has (only possible if quck navigation is enabled)
        document.getElementById(data.squareHighlighted).classList.remove('highlight');
        if (num !== 0) boxClicked(data.squareHighlighted + 'b' + k2s(num));
        data.squareHighlighted = null;
    } else if (settings.quick_nav) { // if quick navigation is enabled, highlight a square
        if (num === 0) return;
        data.squareHighlighted = 's' + k2s(num);
        document.getElementById(data.squareHighlighted).classList.add('highlight');
    }
    console.log(data.history);
}

/**
 * Checks if the value just enetered is supposed to be there
 */
function checkError() {
    let i = b2i(data.highlighted);
    let p = document.getElementById(data.highlighted + 'p');
    if (p.innerHTML !== '' && data.answer[i] !== p.innerHTML) {
        p.classList.add('error');
    } else {
        p.classList.remove('error');
    }
}

/**
 * Removes notes from any box if the same number has been placed
 * in a contractidory box. e.g. if a 6 is placed in a box, any boxes
 * in the same row, column or square with a 6 as a note will remove the 6
 */
function removeAdjacentNotes() {
    let box = data.highlighted;
    let boxI = b2i(box);
    let num = document.getElementById(box + 'p').innerHTML;
    if (num === "") return; // removing a number shouldn't remove notes
    let square = box[1];

    let history = "";
    for (let i = 0; i < data.answer.length; i++) {
        if (Math.floor(boxI / 9) === Math.floor(i / 9) || // if in row
                boxI % 9 === i % 9 || // if in column
                square === i2b(i)[1]) { // if in square
            
            let np = document.getElementById(i2b(i) + 'n' + num + 'p');
            if (np.innerHTML !== '') {
                history += i2b(i) + 'n' + num + 'p' + ':' + num + ':';
                np.innerHTML = '';

            }
        }
    }
    return history;
}

/**
 * Undo the previous move
 */
function undo() {
    if (data.history.length === 0) return;
    let history = data.history.pop().split(':');
    for (let i = 0; i < history.length; i += 2) {
        let box = document.getElementById(history[i]);
        box.innerHTML = history[i+1];
    }
    // TODO: error highlighting on undo
    saveGame();
}

/**
 * Creates a new game
 */
function newGame() {
    resetGame();
    window.location = window.location.href;
}

/**
 * Saves the state of the current game
 */
function saveGame() {
    localStorage.setItem('currentBoard', readBoard());
}

/**
 * Checks if the solution is correct and ends the game
 */
function checkWin() {
    let board = localStorage.getItem('currentBoard');
    if (board === data.answer) {
        let played = localStorage.getItem('lastPlayed');
        if (played === '') {
            localStorage.setItem('lastPlayed', localStorage.getItem('currentGame'));
        } else {
            played = played.split(',');
            if (played.length >= 10) {
                played.shift();
            }
            played.push(localStorage.getItem('currentGame'));
        }
        updateStatistics();
        resetGame();
        data.won = true;
        alert('You Win!');
    }
}

/**
 * Updates the statistics after a game has been finished
 */
function updateStatistics() {
    let played = null;
    let best = null;
    let average = null;

    if (localStorage.getItem('stats') === null) return;
    let stats = localStorage.getItem('stats').split(',');
    for (let i = 0; i < stats.length; i++) {
        let stat = stats[i].split(';');
        if (stat[0].includes(data.difficulty)) {
            if (stat[0].includes('played')) {
                played = parseInt(stat[1]) + 1;
            } else if (stat[0].includes('best')) {
                best = stat[1];
            } else if (stat[0].includes('average')) {
                average = stat[1];
            }
        }
    }

    if (time2Int(best) > data.timer || best === '0:00') {
        best = int2Time(data.timer);
    }

    if (played === 1) {
        average = int2Time(data.timer);
    } else {
        average = time2Int(average);
        let sum = average * (played - 1);
        sum += data.timer;
        average = Math.floor(sum / played);
        average = int2Time(average);
    }

    for (let i = 0; i < stats.length; i++) {
        let stat = stats[i].split(';');
        if (stat[0].includes(data.difficulty)) {
            if (stat[0].includes('played')) {
                stats[i] = stat[0] + ';' + played;
            } else if (stat[0].includes('best')) {
                stats[i] = stat[0] + ';' + best;
            } else if (stat[0].includes('average')) {
                stats[i] = stat[0] + ';' + average;
            }
        }
    }

    localStorage.setItem('stats', stats.toString());
}

/**
 * Converts a time value of the format min:sec into an
 * integer representing seconds
 */
function time2Int(time) {
    let t = time.split(':');
    return 60 * parseInt(t[0]) + parseInt(t[1]);
}

/**
 * Converts an integer representing seconds into
 * a string of the format min:sec
 */
function int2Time(int) {
    let minutes = Math.floor(int / 60);
    let seconds = int % 60;
    let zero = (seconds < 10) ? '0' : '';
    return minutes + ':' + zero + seconds;
}

/**
 * Resets the board and game
 */
function resetGame() {
    localStorage.setItem('currentBoard', '');
    localStorage.setItem('currentGame', '');
    localStorage.setItem('currentTime', 0);
}

/**
 * Checks if the box can be edited
 */
function isEditable(box) {
    return document.getElementById(box.id + 'p').classList.contains('editable');
}

/**
 * Increments the timer and saves the value to localStorage
 */
function timer() {
    if (data.won) return;
    data.timer++;
    localStorage.setItem('currentTime', data.timer);
    let seconds = data.timer % 60;
    if (seconds < 10) seconds = '0' + seconds;
    let minutes = Math.floor(data.timer / 60);
    document.getElementById('timer').innerHTML = 'Time: ' + minutes + ':' + seconds;
    setTimeout(timer, 1000);
}

/**
 * Toggles the note functionality
 */
function notesToggle() {
    if (data.note) {
        data.note = false;
        document.getElementById('notes').classList.remove('highlight');
    } else {
        data.note = true;
        document.getElementById('notes').classList.add('highlight')
    }
}

const easy = [
    '004300209005009001070060043006002087190007400050083000600000105003508690042910300:864371259325849761971265843436192587198657432257483916689734125713528694542916378',
    '040100050107003960520008000000000017000906800803050620090060543600080700250097100:346179258187523964529648371965832417472916835813754629798261543631485792254397186',
    "800000000003600000070090200050007000000045700000100030001000068008500010090000400:812753649943682175675491283154237896369845721287169534521974368438526917796318452"
];

const medium = [
    '600120384008459072000006005000264030070080006940003000310000050089700000502000190:695127384138459672724836915851264739273981546946573821317692458489715263562348197',
    '497200000100400005000016098620300040300900000001072600002005870000600004530097061:497258316186439725253716498629381547375964182841572639962145873718623954534897261',
];

const hard = [
    '005910308009403060027500100030000201000820007006007004000080000640150700890000420:465912378189473562327568149738645291954821637216397854573284916642159783891736425',
    '100005007380900000600000480820001075040760020069002001005039004000020100000046352:194685237382974516657213489823491675541768923769352841215839764436527198978146352',
];

const extreme = [
    '009065430007000800600108020003090002501403960804000100030509007056080000070240090:289765431317924856645138729763891542521473968894652173432519687956387214178246395',
    '000000657702400100350006000500020009210300500047109008008760090900502030030018206:894231657762495183351876942583624719219387564647159328128763495976542831435918276'
];

const hardest = [
    "800000000003600000070090200050007000000045700000100030001000068008500010090000400:812753649943682175675491283154237896369845721287169534521974368438526917796318452"
];