import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Button, Title } from "../../components";
import { getAllComents, PostDetailsProps } from "../../services/api";


const Details: React.FC = () => {
    const [data, setData] = useState<Array<PostDetailsProps | undefined>>(
        []
    );
    const [searchparams] = useSearchParams()
    const title = searchparams.get('title')
    const body = searchparams.get('body')
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            const data = getAllComents(searchparams.get('id'))
            if (data) {
                setData(await data)
            }
        }
        getData()
    }, [])

    const backToHome = () => {
        navigate('/home')
    }
    console.log(data)

    return (
        <>
            <Title
                text={title}
                customSyles={{
                    marginTop: 24,
                    marginBottom: 24,
                    color: "#00AFBC",
                    fontFamily: 'UnifrakturCook',
                    fontStyle: 'Regular',
                    fontSize: 100,
                    fontWeight: 700,
                    textAlign: 'center'
                }}
            />
            <Title
                text={body}
                customSyles={{
                    marginTop: 24,
                    marginBottom: 24,
                    color: "#5B5D52",
                    fontFamily: 'UnifrakturCook',
                    fontStyle: 'Regular',
                    fontSize: 35,
                    fontWeight: 700,
                    textAlign: 'center'
                }}
            />
            {
                data.map((row, index) => (
                    <div>
                        <h3>Usuário: {row?.email}</h3>
                        <h4>Comentario: {row?.body}</h4>
                    </div>
                ))
            }
            <Button text="Voltar" handleEvent={backToHome} customStyles={{
                backgroundColor: '#5B5D52',
                color: '#F6F0E7',
                width: 200,
                height: 44,
                borderRadius: 4,
                textAlign: 'center',
                border: 'transparent 0 none'
            }} />
        </>
    )
}

export default Details 
