
export const formatCurrencyToNumber = (number) =>{
    if(typeof number != "string" ){
        return number;
    }    
    return number.replaceAll(/[^\d,]/gi, '').replaceAll(',','.');
}

export const formatNumberToReal = (number) =>{
    return number?.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
}

export const formatDate = (d) => {

    const formatedDate = new Date(d);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = formatedDate.getDate();
    const month = months[formatedDate.getMonth()];
    const year = formatedDate.getFullYear();

    return `${day} ${month} ${year}`;
}