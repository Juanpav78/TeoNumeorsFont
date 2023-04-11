const calcular = (number=0, decimales=0)=>{
    const res1 = calcularTop(number);
    const res2 = calcularBottom(number);
    const res3 = calcularTrunc(number);
    const res4 = calcularIsDivisible11(number)
    const res5 = calcularIsDivisible7(number)
    const res61 = truncar(number,decimales)
    const res62 = redondear(number,decimales)
    return [res1 , res2, res3, res4, res5, res61, res62]
}


const calcularTop = (number=0)=>{
    const res = Math.ceil(number)
    return number + " ==> " + res
}

const calcularBottom = (number=0)=>{
    const res = Math.floor(number)

    return number + " ==> " + res
}

const calcularTrunc = (number=0)=>{
    const res = Math.trunc(number)

    return number + " ==> " + res
}

const calcularIsDivisible11 = (number=0)=>{
    let res
    if (number % 1 != 0){
        res = "Para Calcular si es divisible entre 11 debe ser un numero entero"
        return res
    }

    if(number < 100 && number > -100){
        if(number % 11 == 0){
            res = "Si es divisible entre 11 "
        }else{
            res = "No es divisible entre 11 "
        }
    }else{
        const numberLength = ~~(Math.log(number) / Math.LN10 + 1)
        const str= number.toString()
        let sumImpar=0
        let sumPar=0
        for(let i =0; i <numberLength; i++){
            if((i+1) % 2 == 0){
                sumPar += parseInt(str[i]) 
            }else{
                sumImpar += parseInt(str[i]) 
            }
            
        }

        if((sumPar - sumImpar) == 0 || (sumPar - sumImpar) % 11 ==0){
            res="Si es divisible entre 11 y tiene mas de 3 cifras"
        }else{
            res="No es divisible entre 11 y tiene mas de 3 cifras"
        }
    }

    return number + " : " + res
    
}

const calcularIsDivisible7 = (number=0)=>{
    let res
    if (number % 1 != 0){
        res = "Para Calcular si es divisible entre 7 debe ser un numero entero"
        return res
    }

    if(number < 100 && number > -100){
        if(number % 7 == 0){
            res = "Si es divisible entre 7 "
        }else{
            res = "No es divisible entre 7 "
        }
    }else{
        const numberLength = ~~(Math.log(number) / Math.LN10 + 1)
        const str= number.toString()
        let restoStr =""
        let resto =0
        let unidad=0
        for(let i =0; i <numberLength; i++){
            if(i+1 == numberLength){
                unidad= parseInt(str[i]) 
            }else{
                restoStr += str[i]
            }
            
        }
        resto = parseInt(restoStr)
        if((resto-2*unidad) == 0 || (resto-2*unidad) % 7 ==0){
            res="Si es divisible entre 7 y tiene mas de 3 cifras"
        }else{
            res="No es divisible entre 7 y tiene mas de 3 cifras"
        }
    }

    return number + " : " + res
}

const truncar =(number=0, decimales=0)=>{
    const exp =Math.pow(10, decimales) 
    const res = ( Math.trunc(exp * number))/exp
    return number+" truncado a "+decimales+" decimales = " +res 
}

const redondear=(number=0, decimales=0)=>{
    const exp =Math.pow(10, decimales) 
    let coeficiente = 0.5
    if(number < 0){
        coeficiente = -0.5
    }
    const res = ( Math.trunc((exp * number) + coeficiente))/exp
    return number+" redondeado a "+decimales+" decimales = " +res 
}
export default calcular