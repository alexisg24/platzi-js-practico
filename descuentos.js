const calculatePriceWitDiscount = (price, disc) => {
    const totalPercent = 100 - disc;
    const finalPrice = (price * totalPercent)/100;
    return finalPrice
}

calculatePriceWitDiscount(180,62);

const printDiscount = () =>{
    const price = document.getElementById("price").value;
    const disc = document.getElementById("discount").value;
    const couponUser = document.getElementById("coupon").value;
    let discFinal = parseInt(disc);
    const coupons = [
        {
            name:"platzi",
            discount:10,
        },
        {
            name:"js",
            discount:15,
        },
        {
            name:"html",
            discount:5,
        },
    ];

    const validCoupon = coupons.find(coupon => coupon.name == couponUser);
    
    if (!validCoupon) {
        document.getElementById("cdisc").value = "Cupon Invalido"
    }else{
        document.getElementById("cdisc").value = `Cupon aplicado ${validCoupon.discount}% de dcto adicional.`;
        discFinal += parseInt(validCoupon.discount);
    }

    console.log(discFinal);

    const finalPrice = calculatePriceWitDiscount(price, discFinal);
    document.getElementById("resultP").innerText = `El precio con descuento es de $${finalPrice}`;
}

