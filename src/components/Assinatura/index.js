import './Assinatura.css'

const Assinatura = () => {
    return (
        <div className='assinatura'>
            <h2>Sua casa com as
                <strong> melhores plantas</strong>
            </h2>
            <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <form>
                <div className='input'>
                <input type='email' placeholder='Insira seu email'></input>
                <button>
                    Assinar newsletter
                </button>
                </div>
            </form>
        </div>
    )
}

export default Assinatura