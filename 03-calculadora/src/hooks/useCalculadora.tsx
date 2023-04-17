import { useState, useRef } from 'react'
enum Operadores {
    sumar, restar, multiplicar, dividir
  }

export const useCalculadora = () =>{
  const [numeroAnterior, setNumeroAnterior ] = useState('0')
  const [numero, setNumero] = useState('0')

  const ultimaOperacion = useRef<Operadores>()

  const limpiar = () => {
    setNumero('0')
    setNumeroAnterior('0')
  }

  const armarNumero = ( numeroTexto: string ) => {

    //Controlamos que no se pueda hacer doble punto
    if( numero.includes('.') && numeroTexto === '.' ) return;

    if( numero.startsWith('0') || numero.startsWith('-0')){
       // Punto decimal
       if( numeroTexto === '.' ){
        setNumero( numero + numeroTexto )
       }
       // Si hay un punto y es otro 0
       else if( numeroTexto === '0' && numero.includes('.')){
        setNumero( numero + numeroTexto )
       }
       // Si es numero diferente a 0 sin punto
       else if( numeroTexto !== '0' && !numero.includes('.')){
        setNumero(numeroTexto)
       }
       // Evitar 000.0
       else if ( numeroTexto === '0' && !numero.includes('.')) {
          setNumero(numero)
       } else {
        setNumero( numero + numeroTexto )
       }
    }else{
    setNumero(numero + numeroTexto)
    }

  }

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-',''))
    } else {
      setNumero('-' + numero) 
    }
  }

  const btnDelete = () => {
    if ((numero.startsWith('-') && numero.length === 2) || numero.length === 1 ) {
      setNumero('0')
    }else{
      setNumero(numero.slice(0, -1))
    }
  }

  const cambiarNumPorAnterior = () => {
    if( numero.endsWith('.')){
      setNumeroAnterior( numero.slice(0,-1))
    } else {
      setNumeroAnterior( numero )
    }
    setNumero('0')
  }

  const btnDividir = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.dividir
  }
  const btnMultiplicar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.multiplicar
  }
  const btnRestar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.restar
  }
  const btnSumar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.sumar
  }

  const calcular = () => {
    //Controlamos que al pulsar repetidamente = no devuelva NaN
    if( numeroAnterior === '0') return

    const num1 = Number( numero )
    const num2 = Number( numeroAnterior )

    switch ( ultimaOperacion.current ) {
      case Operadores.sumar:
        setNumero( `${ num1 + num2 }`)
        break
      case Operadores.restar:
        setNumero( `${ num2 - num1 }`)
        break
      case Operadores.multiplicar:
        setNumero( `${ num1 * num2 }`)
        break
      case Operadores.dividir:
        //Controlamos que al dividir entre 0 no devuelva NaN
        if( num1 !== 0){
        setNumero( `${ num2 / num1 }`)
        }
        break
    }
    setNumeroAnterior('0')
  }
  return {
    numero, 
    numeroAnterior, 
    limpiar,
    armarNumero, 
    positivoNegativo, 
    btnDelete, 
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular
  }
}
