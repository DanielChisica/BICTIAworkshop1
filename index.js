var names=[];

/**
 * Open index.html to execute the method which sorts names alphabetically
 */
function sortNames(){
    let flag=true;
    if(document.getElementById("names").value!='' ||
        document.getElementById("names").value!=' '){
        for(i=0;i<names.length;i++){
         if(names[i]==document.getElementById("names").value){
             alert('You cannot use previous names on the list');
             flag=false;
         }
        }
        if (flag){
            names.push(document.getElementById("names").value)
        }
        document.getElementById("list").innerHTML=names.sort().join();
        flag=true;
    } else {
        location.reload();
    }
}

/**
 * Simulates 10 cashiers in a supermarket
 * @returns {string} simulation results
 */
function cashflow(){
    let cashiers=[]
    for(i=0;i<10;i++){
        let days=[]
        for (j=0;j<180;j++){
            days.push(Math.floor(Math.random() * (+2000 - +1000) + +1000))
        }
        cashiers.push(days)
    }

    let totalsales=0;
    let salesPerCashier=[];

    for(i=0;i<cashiers.length;i++){
        let cashierSales=0;
        for (j=0;j<cashiers[i].length;j++){
            totalsales=totalsales+cashiers[i][j]
            cashierSales=cashierSales+cashiers[i][j]
        }
        salesPerCashier.push(cashierSales);
    }

    let highestSales=[]

    for(i=0;i<10;i++){
        highestSales[i]=[]
        highestSales[i].push(Math.max(...cashiers[i]),cashiers[i].indexOf(Math.max(...cashiers[i])))
    }

    let Salesday100=[]
    let Salesday50=[]
    console.log(highestSales)
    console.log(salesPerCashier)

    for(i=0;i<10;i++){
        Salesday100.push(cashiers[i][100])
        Salesday50.push(cashiers[i][50])
    }

    console.log(Salesday100)
    console.log(Salesday50)

    return `The total sales in the supermarket are $${totalsales} the cashier with the highest sales was 
     ${salesPerCashier.indexOf(Math.max(...salesPerCashier))-1} with $${Math.max(...salesPerCashier)}, also the greatest 
     sale in a day was received by the cashier ${highestSales.map(x => x[0]).indexOf(Math.max(...highestSales.map(x => x[0])))-1} 
     was received in the day ${highestSales[highestSales.map(x => x[0]).indexOf(Math.max(...highestSales.map(x => x[0])))][1]-1}
     Finally the cashier with worst sales in the day 100 was ${Salesday100.indexOf(Math.min(...Salesday100))-1}, and in the
     day 50, the best sale was made by the cashier ${Salesday50.indexOf(Math.max(...Salesday50))-1} and the worst by the
     cashier ${Salesday50.indexOf(Math.min(...Salesday50))}`
}

/**
 * Determines if a given year is leap
 * @param year The input year
 * @returns {string} Sentence showing if this is a leap-year
 */
function leapYear(year) {
    return (year%4==0) ? (year%100==0) ? (year%400==0) ? year + ' is a leap-year' : year + ' is not a leap-year' :
        year + ' is a leap-year' : year + ' is not a leap-year';
}

/**
 * This script will help Pepe to determine if a number is even or odd, and at the same time indicate if is prime or not
 * @param number The input number to be analyzed
 * @returns {string} Analysis sentence of the input number
 */
function numAnalyzer(number){
    let prime = (number<=1) ? false : true;
    for (i=2; i<number; i++) {if (number%i==0) {prime=false}};
    return (number%2==0) ?  (prime) ? number + ' is even and prime' :  number + ' is even but not prime'  :
        (prime) ? number + ' is odd and prime' : number + ' is odd but not prime';
}

/**
 * Inverts a given string
 * @param phrase
 * @returns {string} Inverted phrase
 */
function inverseStr(phrase){
    let phrase1=phrase.split("");
    for(i=0;i<Math.floor(phrase.length/2);i++) {
        phrase1[i]=phrase[phrase.length-(i+1)];
        phrase1[phrase.length-(i+1)]=phrase[i];
    }
    let spaces=0;
    for (x of phrase){
        if(x==' '){spaces=spaces+1}
    }
    return "Your inverse phrase is:" + "\n" +
        phrase1.join().replace(/,/gi,"") + "\n" +
        "Has " + phrase.length + " letters and " + spaces + " spaces";
}

function romansUntilM(decimal,roman=''){
    if (decimal<1000){
        if(decimal==500){
            return roman + 'D';
        } else if (decimal<500){
            if(decimal>100){
                roman=runNumber(roman,decimal,100,5);
                return romansUntilM(decimal-(Math.floor(decimal/100)*100),roman);
            } else if (decimal<100){
                if (decimal>50){
                    roman=runNumber(roman,decimal,10,3);
                    return romansUntilM(decimal-(Math.floor(decimal/10)*10),roman);
                } else if (decimal<50){
                    if(decimal>10){
                        roman=runNumber(roman,decimal,10,3);
                        return romansUntilM(decimal-(Math.floor(decimal/10)*10),roman);
                    } else if (decimal<10){
                        if (decimal>5){
                            return runNumber(roman,decimal,1,1);
                        } else if(decimal<5){
                            if(decimal>1){
                                return runNumber(roman,decimal,1,1);
                            } else if (decimal==1){
                                return roman + 'I';
                            } else if(decimal==0){
                                return roman + '';
                            }
                            else {
                                return 'Negative numbers are not supported';
                            }
                        }
                        else {
                            return roman +'V'
                        }
                    } else {
                        return roman + "X";
                    }
                } else {
                    return roman + "L";
                }
            } else {
                return roman + "C";
            }
        }
        else {
            roman=runNumber(roman,decimal,100,5);
            return romansUntilM(decimal-(Math.floor(decimal/100)*100),roman);
        }
    } else if(decimal==1000) {
        return roman + "M"
    }
    else {
        return "Your number is greater than 1000"
    }
}

/**
 * Converts an decimal digit into a roman number
 * @param roman number used in the iteration of the recursive method
 * @param decimal digit to be transformed
 * @param keyvalue number of reference used in iterations
 * @param char character of reference
 * @returns {string}
 */
function runNumber(roman, decimal, keyvalue,char){
    let romansA=['I','V','X','L','C','D','M'];
    let n = Math.floor(decimal/keyvalue);
    if(n==4){
        roman=roman+romansA[char-1]+romansA[char];
    } else if(n==9){
        roman=roman+romansA[char-1]+romansA[char+1];
    } else {
        if(n<5){
            for (i=0;i<n;i++){
                roman=roman+romansA[char-1];
            }
        }
        else {
            let right=''
            for (i=5;i<n;i++){
                right=right+romansA[char-1];
            }
            roman=roman+romansA[char]+right
        }
    }
    return roman;
}

/**
 * Adds this symbol - between the spaces of the string
 * @param input string to be modified
 * @returns {string} modified string
 */
function addsymbol(input){
    return (input.split('').join('-')).replace(/\s/g,"");
}

/**
 * Returns the age of a person, based on his birthday
 * @param day
 * @param month
 * @param year
 * @returns {string} Age of the person
 */
function getAge(day, month , year){
    let diff= new Date("11/07/2019").getTime()-new Date(`${day}/${month}/,${year}`).getTime();
    var oneday = 1000 * 60 * 60 * 24;
    let days = Math.floor(diff/oneday);
    let months = Math.floor(days/31);
    let years = Math.floor(months/12);
    return `Has ${years} years, ${months-years*12} months and ${days-months*31} days`
}

/**
 * Draws three patterns, one of those based in a user input
 * @param input Pattern to be draw
 */
function drawPatterns(input){
    console.log("Figure a")
    let figureA=''
    for (i=1;i<9;i+=2){
        for(j=0;j<i;j++){figureA=figureA+'*'}
        figureA=figureA+'\n'
    }
    for (i=9;i>=0;i-=2){
        for(j=0;j<i;j++){figureA=figureA+'*'}
        figureA=figureA+'\n'
    }
    console.log(figureA)
    console.log("Figure b")
    let figureB=''
    for (i=9;i>=0;i-=2){
        for(j=0;j<i;j++){figureB=figureB+'*'}
        figureB=figureB+'\n'
    }
    for (i=3;i<10;i+=2){
        for(j=0;j<i;j++){figureB=figureB+'*'}
        figureB=figureB+'\n'
    }
    console.log(figureB)
    console.log("Figure c")
    console.log("User input: "+ input)
    console.log("Your figure")
    let figureC=''
    for(i=input;i>=0;i--){
        for(j=0;j<i;j++){figureC=figureC+'*'}
        figureC=figureC+'\n'
    }
    console.log(figureC)
}

/**
 * Open index.html to execute the method which checks if a string is palindrome
 */
function isPalindrome() {
    let lettersArray = [...document.getElementById("palindrome").value.toLowerCase()];
    let flag = true
    for (let letter of lettersArray) {
        if (letter !== lettersArray.pop()) {flag=false}
    }
    flag ? alert(document.getElementById("palindrome").value + ' is Palindrome') :
        alert(document.getElementById("palindrome").value + ' is not palindrome')
}

/**
 * Deletes tbe zeros of a user numbers input
 * @param numbers array of whose a user introduced
 * @returns {[]} array of numbers without the zero digits
 */
function deleteZero(numbers){
    let output=[]
    for(i=0;i<numbers.length;i++){
        console.log(numbers[i])
        if(numbers[i]!=0){output.push(numbers[i])}
    }
    return output
}

console.log(leapYear(2018))
console.log(numAnalyzer(509))
console.log(inverseStr("hola mundo"))
console.log(romansUntilM(79))
console.log(addsymbol('hola que tal'));
console.log(getAge(7,7,1998));
console.log(cashflow());
drawPatterns(5)
console.log(deleteZer([1,0,4,0,6,8,0]))
