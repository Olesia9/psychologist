import './TalkCard.sass'

function TalkCard({src, alt, description, classCard}) {
    return (
        <>
            <div className={"content__talk-woe " + classCard}>
                <img src={src} alt={alt}/>
                <span>
                    {description}
                </span>
            </div>
        </>
    )
}

export default TalkCard