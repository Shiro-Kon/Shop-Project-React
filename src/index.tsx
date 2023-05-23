import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'
import { Content } from './Content' //іменований експорт

//React Component (завжди приймає один елемент тому потрібно огорнути в div) a ще цей метот стрілкового запису
const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" num={1} />
            <Content
                textl={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ratione omnis debitis tempora repudiandae, voluptate reiciendis odit nostrum mollitia vero nobis doloremque officia magni delectus praesentium eum perspiciatis eligendi maxime.'
                }
                text2={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ratione omnis debitis tempora repudiandae, voluptate reiciendis odit nostrum mollitia vero nobis doloremque officia magni delectus praesentium eum perspiciatis eligendi maxime.'
                }
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
