const calculatePriceWitDiscount = (price, disc) => {
    const totalPercent = 100 - disc;
    const finalPrice = (price * totalPercent)/100;
    return finalPrice
}

calculatePriceWitDiscount(180,62);
