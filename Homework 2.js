// Varjutyun 1
let a = 306;
let s = 0;
while (a != 0)
    {
        let b = (a % 10);
        s = s + b;
        a = Math.floor(a / 10);
    }
console.log(s);

// Varjutyun 2
let a = 2;
let b = 3;
let c = 5;
if (a + b <= c || b + c <= a || a + c <= b)
    console.log("no");
else
    console.log("yes");

// Varjutyun 3
let a = -122;
if (a < 0)
    a = a * -1;
if (a === 0)
    a = 1;
let s = 0;
while(a != 0)
    {
        let b = (a % 10);
        s = s + 1;
        a = Math.floor(a / 10);
    }
console.log(s);

// Varjutyun 4
let a = 929;
if (a < 0)
    a = a * -1;
let s = 0;
while(a != 0)
    {
        let b = (a % 10);
        if (b === 9)
            s = s + 1;
        a = Math.floor(a / 10);
    }
console.log(s);

// Varjutyun 5
let a = 122;
let s = 0;
while(a != 0)
    {
        let b = (a % 10);
        s = s*10 + b;
        a = Math.floor(a / 10);
    }
console.log(s);