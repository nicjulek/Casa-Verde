import { useState } from 'react';
import styled from 'styled-components'

//utilização do styled components

const Title = styled.h2`
    font-weight: normal;
    strong{
        font-family: "Elsie Swash Caps", serif;
        font-size: 82px;
        font-weight: 900px;
    }
`;

const Newsletter = styled.div`
    margin: 100px 200px;
    width: 585px;
    height:462px;
    background-color:transparent;
`;

const Form = styled.form`
    display: flex;
    width: 585px;
    height: 75px;
    margin: 20px 0px;
    width: 100%;

    button{
        height: 75px;
        width: 194px;
        left: 751px;
        top: 597px;
        font-family: 'Montserrat', sans-serif;
        border-radius: 0px;
        color: #fff;
        background-color: #ffcb47;
        padding: 27px;
        box-shadow: 10px 10px 30px 0px #ffcb474d;
        border: 0;
    }

    input{
        height: 73px;
        width: 194px;
        flex: 1;
        padding-left: 50px;
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        background-image: url('/public/images/icon-mail.svg');
        background-repeat: no-repeat;
        background-position: 16px center;
        outline-color: #ffcb47;
        box-shadow: 10px 10px 30px 0px #0000000f;
        border: 0;
    }

`;

const Assinatura = () => {
    const [email, setEmail] = useState('');
    const [isValid, notValid] = useState('false');

    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    return (
        <Newsletter>
            <Title>Sua casa com as
                <strong> melhores plantas</strong>
            </Title>
            <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <Form>
                <input type='email' placeholder='Insira seu email'></input>
                <button>
                    Assinar newsletter
                </button>
            </Form>
        </Newsletter>
    )
}

export default Assinatura