

const TiposBasicos = () => {

    let nombre: string = 'Fernando';
    const edad: number = 35; 
    const estaActivo: boolean = true; 

    const poderes: string[] = ['velocidad', 'volar', 'respirar en el agua']



  return (
    <>
      <h3>Tipos basicos</h3>
      { nombre } , { edad }, { estaActivo  ?  'esta activo' : 'no esta activo'}
      <br/>
      {poderes.join(', ')}
    </>
  )
}

export default TiposBasicos
