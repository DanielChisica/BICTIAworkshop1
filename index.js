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

function addsimbol(input){
    return (input.split('').join('-')).replace(/\s/g,"");
}
//console.log(leapYear(2018))
//console.log(numAnalyzer(509))
//console.log(inverseStr("hola mundo"))
//console.log(romansUntilM(79))

function getAge(day, month , year){
    let diff= new Date("11/07/2019").getTime()-new Date(`${day}/${month}/,${year}`).getTime();
    var oneday = 1000 * 60 * 60 * 24;
    let days = Math.floor(diff/oneday);
    let months = Math.floor(days/31);
    let years = Math.floor(months/12);
    return `Has ${years} years, ${months-years*12} months and ${days-months*31} days`
}
console.log(addsimbol('hola que tal'));
console.log(getAge(7,7,1998))
