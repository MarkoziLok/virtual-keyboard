document.body.innerHTML = `<div class="wrapper"><input type="text" class="input-text"><div class="wrapper-keyboard"><div class="line first-line"><button class="little-btn dark-btn" id="yo">\`~</button><button class="little-btn" id="oneBtn">1</button><button class="little-btn" id="twoBtn">2</button><button class="little-btn" id="threeBtn">3</button><button class="little-btn" id="fourBtn">4</button><button class="little-btn" id="fiveBtn">5</button><button class="little-btn" id="sixBtn">6</button><button class="little-btn" id="sevenBtn">7</button><button class="little-btn" id="eightBtn">8</button><button class="little-btn" id="nineBtn">9</button><button class="little-btn" id="nullBtn">0</button><button class="little-btn" id="minusBtn">-</button><button class="little-btn" id="plusBtn">=</button><button class="dark-btn backspace-btn">Backspace</button></div><div class="line two-line"><button class="dark-btn tab-btn">Tab</button><button class="little-btn" id="qBtn">Q</button><button class="little-btn" id="wBtn">W</button><button class="little-btn" id="eBtn">E</button><button class="little-btn" id="rBtn">R</button><button class="little-btn" id="tBtn">T</button><button class="little-btn" id="yBtn">Y</button><button class="little-btn" id="uBtn">U</button><button class="little-btn" id="iBtn">I</button><button class="little-btn" id="oBtn">O</button><button class="little-btn" id="pBtn">P</button><button class="little-btn" id="heBtn">[</button><button class="little-btn" id="twBtn">]</button><button class="little-btn">&#92</button><button class="dark-btn del-btn">Delete</button></div><div class="line three-line"><button class="dark-btn caps-btn">Caps Lock</button><button class="little-btn" id="aBtn">A</button><button class="little-btn" id="sBtn">S</button><button class="little-btn" id="dBtn">D</button><button class="little-btn" id="fBtn">F</button><button class="little-btn" id="gBtn">G</button><button class="little-btn" id="hBtn">H</button><button class="little-btn" id="jBtn">J</button><button class="little-btn" id="kBtn">K</button><button class="little-btn" id="lBtn">L</button><button class="little-btn" id="jeBtn">;</button><button class="little-btn" id="eaBtn">'</button><button class="dark-btn ent-btn">Enter</button><button class="little-btn" id="lang">LANG</button></div><div class="line four-line"><button class="dark-btn left-shift-btn">Shift ᐃ</button><button class="little-btn" id="zBtn">Z</button><button class="little-btn" id="xBtn">X</button><button class="little-btn" id="cBtn">C</button><button class="little-btn" id="vBtn">V</button><button class="little-btn" id="bBtn">B</button><button class="little-btn" id="nBtn">N</button><button class="little-btn" id="mBtn">M</button><button class="little-btn" id="brBtn">,</button><button class="little-btn" id="youBtn">.</button><button class="little-btn" id="vopBtn">/</button><button class="dark-btn arrow-btn" id="arrTop">ᐃ</button><button class="dark-btn right-shift-btn">Shift ᐃ</button></div><div class="line five-line"><button class="dark-btn ctrl-btn">Ctrl</button><button class="dark-btn win-btn">Win</button><button class="dark-btn alt-btn">Alt</button><button class="dark-btn space-btn"></button><button class="dark-btn alt-btn">Alt</button><button class="dark-btn arrow-btn" id="arrLeft">ᐊ</button><button class="dark-btn arrow-btn" id="arrBott">ᐁ</button><button class="dark-btn arrow-btn" id="arrRight">ᐅ</button><button class="dark-btn ctrl-btn">Ctrl</button></div></div></div>`;

let langBtn = document.getElementById('lang');
let langScore = 0;

let oneBtn = document.getElementById('oneBtn');
let twoBtn = document.getElementById('twoBtn');
let threeBtn = document.getElementById('threeBtn');
let fourBtn = document.getElementById('fourBtn');
let fiveBtn = document.getElementById('fiveBtn');
let sixBtn = document.getElementById('sixBtn');
let sevenBtn = document.getElementById('sevenBtn');
let eightBtn = document.getElementById('eightBtn');
let nineBtn = document.getElementById('nineBtn');
let nullBtn = document.getElementById('nullBtn');
let minusBtn = document.getElementById('minusBtn');
let plusBtn = document.getElementById('plusBtn');

let qBtn = document.getElementById('qBtn');
let wBtn = document.getElementById('wBtn');
let eBtn = document.getElementById('eBtn');
let rBtn = document.getElementById('rBtn');
let tBtn = document.getElementById('tBtn');
let yBtn = document.getElementById('yBtn');
let uBtn = document.getElementById('uBtn');
let iBtn = document.getElementById('iBtn');
let oBtn = document.getElementById('oBtn');
let pBtn = document.getElementById('pBtn');
let heBtn = document.getElementById('heBtn');
let twBtn = document.getElementById('twBtn');

let aBtn = document.getElementById('aBtn');
let sBtn = document.getElementById('sBtn');
let dBtn = document.getElementById('dBtn');
let fBtn = document.getElementById('fBtn');
let gBtn = document.getElementById('gBtn');
let hBtn = document.getElementById('hBtn');
let jBtn = document.getElementById('jBtn');
let kBtn = document.getElementById('kBtn');
let lBtn = document.getElementById('lBtn');
let jeBtn = document.getElementById('jeBtn');
let eaBtn = document.getElementById('eaBtn');

let zBtn = document.getElementById('zBtn');
let xBtn = document.getElementById('xBtn');
let cBtn = document.getElementById('cBtn');
let vBtn = document.getElementById('vBtn');
let bBtn = document.getElementById('bBtn');
let nBtn = document.getElementById('nBtn');
let mBtn = document.getElementById('mBtn');
let brBtn = document.getElementById('brBtn');
let youBtn = document.getElementById('youBtn');
let vopBtn = document.getElementById('vopBtn');
let yo = document.getElementById('yo');


langBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        langScore = 1;
        console.log(langScore);
    } else if (langScore === 1){
        langScore = 0;
        console.log(langScore);
    };
    if (langScore === 0){
        oneBtn.textContent = '1'
        twoBtn.textContent = '2'
        threeBtn.textContent = '3'
        fourBtn.textContent = '4'
        fiveBtn.textContent = '5'
        sixBtn.textContent = '6'
        sevenBtn.textContent = '7'
        eightBtn.textContent = '8'
        nineBtn.textContent = '9'
        nullBtn.textContent = '0'
        minusBtn.textContent = '-'
        plusBtn.textContent = '='
        qBtn.textContent = 'Q'
        wBtn.textContent = 'W'
        eBtn.textContent = 'E'
        rBtn.textContent = 'R'
        tBtn.textContent = 'T'
        yBtn.textContent = 'Y'
        uBtn.textContent = 'U'
        iBtn.textContent = 'I'
        oBtn.textContent = 'O'
        pBtn.textContent = 'P'
        heBtn.textContent = '['
        twBtn.textContent = ']'
        aBtn.textContent = 'A'
        sBtn.textContent = 'S'
        dBtn.textContent = 'D'
        fBtn.textContent = 'F'
        gBtn.textContent = 'G'
        hBtn.textContent = 'H'
        jBtn.textContent = 'J'
        kBtn.textContent = 'K'
        lBtn.textContent = 'L'
        jeBtn.textContent = ';'
        eaBtn.textContent = '\''
        zBtn.textContent = 'Z'
        xBtn.textContent = 'X'
        cBtn.textContent = 'C'
        vBtn.textContent = 'V'
        bBtn.textContent = 'B'
        nBtn.textContent = 'N'
        mBtn.textContent = 'M'
        brBtn.textContent = ','
        youBtn.textContent = '.'
        vopBtn.textContent = '/'
        yo.textContent = '`~'
    } else {
        oneBtn.textContent = '!'
        twoBtn.textContent = '@'
        threeBtn.textContent = '#'
        fourBtn.textContent = '$'
        fiveBtn.textContent = '%'
        sixBtn.textContent = '^'
        sevenBtn.textContent = '&'
        eightBtn.textContent = '*'
        nineBtn.textContent = '('
        nullBtn.textContent = ')'
        minusBtn.textContent = '_'
        plusBtn.textContent = '+'
        qBtn.textContent = 'Й'
        wBtn.textContent = 'Ц'
        eBtn.textContent = 'У'
        rBtn.textContent = 'К'
        tBtn.textContent = 'Е'
        yBtn.textContent = 'Н'
        uBtn.textContent = 'Г'
        iBtn.textContent = 'Ш'
        oBtn.textContent = 'Щ'
        pBtn.textContent = 'З'
        heBtn.textContent = 'Х'
        twBtn.textContent = 'Ъ'
        aBtn.textContent = 'Ф'
        sBtn.textContent = 'Ы'
        dBtn.textContent = 'В'
        fBtn.textContent = 'А'
        gBtn.textContent = 'П'
        hBtn.textContent = 'Р'
        jBtn.textContent = 'О'
        kBtn.textContent = 'Л'
        lBtn.textContent = 'Д'
        jeBtn.textContent = 'Ж'
        eaBtn.textContent = 'Э'
        zBtn.textContent = 'Я'
        xBtn.textContent = 'Ч'
        cBtn.textContent = 'С'
        vBtn.textContent = 'М'
        bBtn.textContent = 'И'
        nBtn.textContent = 'Т'
        mBtn.textContent = 'Ь'
        brBtn.textContent = 'Б'
        youBtn.textContent = 'Ю'
        vopBtn.textContent = '.'
        yo.textContent = 'Ё'
    }
});

let input = document.querySelector('.input-text');

input.value = 'PRESS LANG TO CHANGE LANGUAGE'

yo.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '`';
    } else {
        input.value = input.value + 'Ё';
    };
});

oneBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '1';
    } else {
        input.value = input.value + '!';
    };
});

twoBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '2';
    } else {
        input.value = input.value + '@';
    };
});

threeBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '3';
    } else {
        input.value = input.value + '#';
    };
});

fourBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '4';
    } else {
        input.value = input.value + '$';
    };
});

fiveBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '5';
    } else {
        input.value = input.value + '%';
    };
});

sixBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '6';
    } else {
        input.value = input.value + '^';
    };
});

sevenBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '7';
    } else {
        input.value = input.value + '&';
    };
});

eightBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '8';
    } else {
        input.value = input.value + '*';
    };
});

nineBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '9';
    } else {
        input.value = input.value + '(';
    };
});

nullBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '0';
    } else {
        input.value = input.value + ')';
    };
});

minusBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '-';
    } else {
        input.value = input.value + '_';
    };
});

plusBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '=';
    } else {
        input.value = input.value + '+';
    };
});

qBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'Q';
    } else {
        input.value = input.value + 'Й';
    };
});

wBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'W';
    } else {
        input.value = input.value + 'Ц';
    };
});

eBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'E';
    } else {
        input.value = input.value + 'У';
    };
});

rBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'R';
    } else {
        input.value = input.value + 'К';
    };
});

tBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'T';
    } else {
        input.value = input.value + 'Е';
    };
});

yBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'Y';
    } else {
        input.value = input.value + 'Н';
    };
});

uBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'U';
    } else {
        input.value = input.value + 'Г';
    };
});

iBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'I';
    } else {
        input.value = input.value + 'Щ';
    };
});

oBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'O';
    } else {
        input.value = input.value + 'Щ';
    };
});

pBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'P';
    } else {
        input.value = input.value + 'З';
    };
});

heBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '{';
    } else {
        input.value = input.value + 'Х';
    };
});

twBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '}';
    } else {
        input.value = input.value + 'Ъ';
    };
});

aBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'A';
    } else {
        input.value = input.value + 'Ф';
    };
});

sBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'S';
    } else {
        input.value = input.value + 'Ы';
    };
});

dBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'D';
    } else {
        input.value = input.value + 'В';
    };
});

fBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'F';
    } else {
        input.value = input.value + 'А';
    };
});

gBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'G';
    } else {
        input.value = input.value + 'П';
    };
});

hBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'H';
    } else {
        input.value = input.value + 'Р';
    };
});

jBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'J';
    } else {
        input.value = input.value + 'О';
    };
});

kBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'K';
    } else {
        input.value = input.value + 'Л';
    };
});

lBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'L';
    } else {
        input.value = input.value + 'Д';
    };
});

jeBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + ';';
    } else {
        input.value = input.value + 'Ж';
    };
});

eaBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '\'';
    } else {
        input.value = input.value + 'Э';
    };
});

zBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'Z';
    } else {
        input.value = input.value + 'Я';
    };
});

xBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'X';
    } else {
        input.value = input.value + 'Ч';
    };
});

cBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'С';
    } else {
        input.value = input.value + 'C';
    };
});

vBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'V';
    } else {
        input.value = input.value + 'М';
    };
});

bBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'B';
    } else {
        input.value = input.value + 'И';
    };
});

nBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'N';
    } else {
        input.value = input.value + 'Т';
    };
});

mBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + 'M';
    } else {
        input.value = input.value + 'Ь';
    };
});

brBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + ',';
    } else {
        input.value = input.value + 'Б';
    };
});

youBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '.';
    } else {
        input.value = input.value + 'Ю';
    };
});

vopBtn.addEventListener('click', (event) => {
    if (langScore === 0){
        input.value = input.value + '/';
    } else {
        input.value = input.value + '.';
    };
});

let arrTop = document.getElementById('arrTop');
let arrBott = document.getElementById('arrBott');
let arrLeft = document.getElementById('arrLeft');
let arrRight = document.getElementById('arrRight');

arrTop.addEventListener('click', (event) => {
    input.value = input.value + 'ᐃ';
});

arrBott.addEventListener('click', (event) => {
    input.value = input.value + 'ᐁ';
});

arrLeft.addEventListener('click', (event) => {
    input.value = input.value + 'ᐊ';
});

arrRight.addEventListener('click', (event) => {
    input.value = input.value + 'ᐅ';
});

let backspace = document.querySelector('.backspace-btn');

backspace.addEventListener('click', (event) => {
    let sliceStr = input.value;
    input.value = sliceStr.slice(0, -1);
})