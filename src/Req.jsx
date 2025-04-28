import { useState, useEffect } from 'react'
import style from './Req.module.css'
import { apiRick } from './api/api'
import { Card } from './components/card'
import ModalInfo from './components/modalInfo'
import Tilt from 'react-parallax-tilt'

export default function Req() {
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [searchName, setSearchName] = useState("")
    const [erro, setErro] = useState(false)
    const [modal, setModal] = useState();

    useEffect(() => {
        apiRick.get(`/character/?page=${page}&name=${searchName}`).then((response) => {
            setData(response.data.results)
        }).catch((error) => {
            if (error.response.status === 404) {
                setErro(true)
            }
            console.error(error)
        })
    }, [page, searchName])

    return (
        <>
            {modal !== undefined && <ModalInfo data={data[modal]} close={() => setModal()} />}
            <section className={style.wrapPage}>
                <h1 className={style.titleName}>Rick and Morty API</h1>
                <input
                    style={{ padding: "10px", marginRight: "10px" }}
                    type="text"
                    placeholder='Digite uma página (1/120)'
                    value={page}
                    onChange={(e) => setPage(e.target.value)} />
                <input
                    style={{ padding: "10px" }}
                    type="text"
                    placeholder='Digite um nome'
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)} />

                {erro && <p>Página não encontrada</p>}

                <div className={style.wrapCards}>
                    {data.map((item, index) => {
                        return (
                            <div key={index} style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "10px", border: "2px solid black" }}>
                                <Tilt>
                                    <Card name={item.name} image={item.image} />
                                </Tilt>
                                <button onClick={() => setModal(index)}>Info = {item.name}</button>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}