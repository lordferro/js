while (num > 5) {
    console.log(num);
    num++;
}

while show nothing if num =5, then we can use do:

do {
    console.log(num);
    num++;
}

_______________________

for (let num = 0; num < 5; num++) {
    console.log(num);
}

_________________________

Директивы - if (num == 2) break - остановка цикла, continue - пропуск этой итерации.

_________________________
метка
firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            breake/continue firstFor
        }
    console.log(size)
    }
}
__________________________
