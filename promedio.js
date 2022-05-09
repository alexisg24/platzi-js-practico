const calculoMedia = (array) => {
    const media = array.reduce((addedValue, actualValue) => addedValue+actualValue, 0)/array.length;
    console.log(media);
}


const calculoMediana = (array) =>{

    array.sort((a,b) => a-b);
    if (array.length % 2 === 0) {
        
        const mediana1 = array[parseInt(array.length/2)-1];
        const mediana2 = array[parseInt(array.length/2)];
        return mediana = (mediana1 + mediana2)/2;
    }else{
       return mediana = array[parseInt(array.length/2)];
    }
}


const calculoModa = (array) =>{
    numberList = {};
    array.map(element => {
        if (numberList[element]) {
            numberList[element] += 1;
        }else{
            numberList[element] = 1;
        }
    })
    
    const listaModa = Object.entries(numberList).sort((a,b) =>{
        return a[1] - b[1]
    });

    console.log(listaModa[listaModa.length - 1]);
    return listaModa[listaModa.length - 1]
}
