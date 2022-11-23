import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Title } from '../../components';


const Login: React.FC = () => {

    const navigate = useNavigate();
    const sendToHome = () => {
        navigate('/home')
    }

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Title
                text="Seja Bem Vindo !!!!"
                customSyles={{
                    marginTop: 14,
                    marginBottom: 14,
                    color: "#00AFBC",
                    fontFamily: 'UnifrakturCook',
                    fontStyle: 'Regular',
                    fontSize: 100,
                    fontWeight: 700,
                    textAlign: 'center'
                }}
            />
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <Button text="Entrar"
                    handleEvent={sendToHome}
                    customStyles={{
                        backgroundColor: '#5B5D52',
                        color: '#F6F0E7',
                        width: 300,
                        height: 50,
                        borderRadius: 4,
                        fontSize: 30,
                        textAlign: 'center',
                        border: 'transparent 0 none'

                    }} />
            </div>
        </div>

    )
}


export default Login