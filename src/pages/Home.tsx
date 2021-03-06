import { useHistory } from "react-router-dom"

import { useAuth } from "../hooks/useAuth"
import { Button } from "../components/Button"

import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"
import illustrationImg from "../assets/images/illustration.svg"

import "../styles/auth.scss"

export function Home() {
    const history = useHistory()
    const { user, signInWithGoogle } = useAuth()

    // signin de criação da sala
    async function hamdleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        history.push("/rooms/new")
    }

    return (
        <div id='page-auth'>
            <aside>
                <img
                    src={illustrationImg}
                    alt='Ilustração simbolizando perguntas e respostas'
                />
                <b>Crie salas de Q&amp;A ao-vivo</b>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt='Let me ask' />
                    <button className='create-room' onClick={hamdleCreateRoom}>
                        <img src={googleIconImg} alt='Logo do Google' />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form action=''>
                        <input
                            type='text'
                            placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
