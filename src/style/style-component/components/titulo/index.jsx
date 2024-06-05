import estilo from "./style.module.css"

export default function Titulo(){
    console.log(estilo.descr)
        return(
           
            
                
            <div className={estilo.aling_all}>
                <div className={estilo.square}></div>
                <div className={estilo.square}>
                    <h1 className={estilo.titulo}>Titulo</h1>
                    <p>teste</p>
            </div>
            </div>
        );


}