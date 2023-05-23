type ContentType = {
    textl: string
    text2: string
}

export const Content = ({ textl, text2 }: ContentType) => {
    return (
        <>
            <p className="red">{textl}</p>
            <p>{text2} </p>
        </>
    )
}
