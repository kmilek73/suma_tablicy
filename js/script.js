let numbers = [1,2,3,4,5,6];



function sumaWszystkich(numbers){
let dlugoscTablicy = numbers.length;
let suma=0;
let iloczyn=1;
for (let i=0; i<dlugoscTablicy; i++){
    suma = suma + numbers[i] ;
    iloczyn = iloczyn * numbers[i];
    }
    console.log(suma);
    console.log(iloczyn);
}

sumaWszystkich(numbers);