;(function(){

    /*Order*/

    let breakfast1 = document.getElementById('breakfast-1'),
        breakfast2 = document.getElementById('breakfast-2'),
        breakfast3 = document.getElementById('breakfast-3'),
        breakfast4 = document.getElementById('breakfast-4'),
        garnish1 = document.getElementById('garnish-1'),
        garnish2 = document.getElementById('garnish-2'),
        garnish3 = document.getElementById('garnish-3'),
        garnish4 = document.getElementById('garnish-4'),
        first1 = document.getElementById('first-1'),
        first2 = document.getElementById('first-2'),
        first3 = document.getElementById('first-3'),
        first4 = document.getElementById('first-4'),
        numbOrder = document.getElementById('number'),
        numbResult = 0,
        sumOrder = document.getElementById('sum'),
        sumResult = 0,
        dish1 = document.getElementById('btn-1-br'),
        dish2 = document.getElementById('btn-2-br'),
        dish3 = document.getElementById('btn-3-br'),
        dish4 = document.getElementById('btn-4-br'),
        dish5 = document.getElementById('btn-5-ga'),
        dish6 = document.getElementById('btn-6-fd'),
        dish7 = document.getElementById('btn-7-fd'),
        dish8 = document.getElementById('btn-8-fd'),
        dish9 = document.getElementById('btn-9-fd'),
        dish10 = document.getElementById('btn-10-ga'),
        dish11 = document.getElementById('btn-11-ga'),
        dish12 = document.getElementById('btn-12-ga'),
        arrayBtnDishes = [dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8, dish9, dish10, dish11, dish12],
        qty1 = document.getElementById('qty-1-br'),
        qty2 = document.getElementById('qty-2-br'),
        qty3 = document.getElementById('qty-3-br'),
        qty4 = document.getElementById('qty-4-br'),
        qty5 = document.getElementById('qty-5-ga'),
        qty6 = document.getElementById('qty-6-fd'),
        qty7 = document.getElementById('qty-7-fd'),
        qty8 = document.getElementById('qty-8-fd'),
        qty9 = document.getElementById('qty-9-fd'),
        qty10 = document.getElementById('qty-10-ga'),
        qty11 = document.getElementById('qty-11-ga'),
        qty12 = document.getElementById('qty-12-ga'),
        arrayOty = [qty1, qty2, qty3, qty4, qty5, qty6, qty7, qty8, qty9, qty10, qty11, qty12],
        sumCount = [],
        numbCount = [],
        arrayMain = [
            {name: breakfast1, price: 25},
            {name: breakfast2, price: 25},
            {name: breakfast3, price: 30},
            {name: breakfast4, price: 45},
            {name: garnish1, price: 45},
            {name: first1, price: 50},
            {name: first2, price: 85},
            {name: first3, price: 95},
            {name: first3, price: 100},
            {name: garnish2, price: 125},
            {name: garnish3, price: 135},
            {name: garnish4, price: 150}
        ];

    function CalcSum (array) {
        for (let i = 0; i < array.length; i++) {
            sumResult += sumCount[i];
        }
    }
    function CalcNumb (array) {
        for (let i = 0; i < array.length; i++) {
            numbResult += numbCount[i];
        }
    }
    for (let j = 0; j < 12; j++) {
        arrayBtnDishes[j].addEventListener('click', function (){
            sumCount.push((arrayMain[j].price)*(+arrayOty[j].value));
            CalcSum(sumCount);
            sumOrder.innerText = `${sumResult} грн`;
            sumCount = [];
            numbCount.push(+arrayOty[j].value);
            CalcNumb(numbCount);
            numbOrder.innerText = `${numbResult} шт`;
            numbCount = [];
        });
    }

    /*Filter*/

    let select1 = document.getElementById('select-category'),
        select2 = document.getElementById('select-price'),
        arrayAllDishes = [breakfast1,//0 25
            breakfast2,//1 25
            breakfast3,//2 30
            breakfast4,//3 45
            first1,    //4 50
            first2,    //5 85
            first3,    //6 95
            first4,    //7 100
            garnish1,  //8 45
            garnish2,  //9 125
            garnish3,  //10 135
            garnish4]; //11 150

        select1.addEventListener('change', function (){
                if (this.value === '0' && select2.value === '0') {
                    for (let i = 0; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                }
                if (this.value === '0' && select2.value === '30') {
                    for (let i = 0; i < 2; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 2; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '0' && select2.value === '50') {
                    arrayAllDishes[8].style.cssText = 'display: flex;';
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 4; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    for (let i = 9; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '0' && select2.value === '100') {
                    arrayAllDishes[7].style.cssText = 'display: none;';
                    arrayAllDishes[8].style.cssText = 'display: flex;';
                    for (let i = 0; i < 7; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 9; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '0' && select2.value === '150') {
                    for (let i = 0; i < 11; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                        arrayAllDishes[11].style.cssText = 'display: none;';
                }
                if (this.value === '1' && select2.value === '0') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 4; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '1' && select2.value === '30') {
                    for (let i = 0; i < 2; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 2; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '1' && select2.value === '50') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 4; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '1' && select2.value === '100') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 4; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '1' && select2.value === '150') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 4; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '2' && select2.value === '0') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    for (let i = 4; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 8; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '2' && select2.value === '30') {
                    for (let i = 0; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '2' && select2.value === '50') {
                    for (let i = 0; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '2' && select2.value === '100') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    for (let i = 4; i < 7; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 7; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '2' && select2.value === '150') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    for (let i = 4; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 8; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '3' && select2.value === '0') {
                    for (let i = 0; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    for (let i = 8; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                }
                if (this.value === '3' && select2.value === '30') {
                    for (let i = 0; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '3' && select2.value === '50') {
                    for (let i = 0; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                        arrayAllDishes[8].style.cssText = 'display: flex;';
                    for (let i = 9; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '3' && select2.value === '100') {
                    for (let i = 0; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                        arrayAllDishes[8].style.cssText = 'display: flex;';
                    for (let i = 9; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (this.value === '3' && select2.value === '150') {
                    for (let i = 0; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    arrayAllDishes[8].style.cssText = 'display: flex;';
                    for (let i = 9; i < 11; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    arrayAllDishes[11].style.cssText = 'display: none;';
                }
            });
        select2.addEventListener('change', function (){
                if (select1.value === '0' && this.value === '0') {
                    for (let i = 0; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                }
                if (select1.value === '0' && this.value === '30') {
                    for (let i = 0; i < 2; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 2; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '0' && this.value === '50') {
                    arrayAllDishes[8].style.cssText = 'display: flex;';
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 4; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    for (let i = 9; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '0' && this.value === '100') {
                    arrayAllDishes[7].style.cssText = 'display: none;';
                    arrayAllDishes[8].style.cssText = 'display: flex;';
                    for (let i = 0; i < 7; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 9; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '0' && this.value === '150') {
                    for (let i = 0; i < 11; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    arrayAllDishes[11].style.cssText = 'display: none;';
                }
                if (select1.value === '1' && this.value === '0') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 4; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '1' && this.value === '30') {
                    for (let i = 0; i < 2; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 2; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '1' && this.value === '50') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 4; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '1' && this.value === '100') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 4; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '1' && this.value === '150') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 4; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '2' && this.value === '0') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    for (let i = 4; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 8; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '2' && this.value === '30') {
                    for (let i = 0; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '2' && this.value === '50') {
                    for (let i = 0; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '2' && this.value === '100') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    for (let i = 4; i < 7; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 7; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '2' && this.value === '150') {
                    for (let i = 0; i < 4; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    for (let i = 4; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    for (let i = 8; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '3' && this.value === '0') {
                    for (let i = 0; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    for (let i = 8; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                }
                if (select1.value === '3' && this.value === '30') {
                    for (let i = 0; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '3' && this.value === '50') {
                    for (let i = 0; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    arrayAllDishes[8].style.cssText = 'display: flex;';
                    for (let i = 9; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '3' && this.value === '100') {
                    for (let i = 0; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    arrayAllDishes[8].style.cssText = 'display: flex;';
                    for (let i = 9; i < arrayAllDishes.length; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                }
                if (select1.value === '3' && this.value === '150') {
                    for (let i = 0; i < 8; i++) {
                        arrayAllDishes[i].style.cssText = 'display: none;';
                    }
                    arrayAllDishes[8].style.cssText = 'display: flex;';
                    for (let i = 9; i < 11; i++) {
                        arrayAllDishes[i].style.cssText = 'display: flex;';
                    }
                    arrayAllDishes[11].style.cssText = 'display: none;';
                }
            });













})();
