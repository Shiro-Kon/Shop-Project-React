import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

interface TitleProps {
    title: string
}

const Title = (props: TitleProps) => {
    return <h1>Hello {props.title} component</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p className="red">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                ducimus officia neque porro eveniet eligendi, delectus et sequi
                inventore dolor eius rem quasi quo, ex maiores iure laudantium!
                Error, iste?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                quos officiis, impedit consequatur architecto nostrum
                dignissimos quaerat doloribus est soluta dolorum iusto, dicta ex
                tempore delectus illum totam aspernatur blanditiis.
            </p>
        </React.Fragment>
    )
}

//React Component (завжди приймає один елемент тому потрібно огорнути в div) a ще цей метот стрілкового запису
const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" />
            <Content />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
