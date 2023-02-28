export default function InfoCard(props) {
    let imgLink = "./src/anime-posters/" + props.imgName + ".jpg";
    let trailerLink = props.trailerLink;
    return (
        <div className="Contents">
            <img src={imgLink} width='280' height='400'/>
            <h2> {props.name} </h2>
            <p> Premiering on {props.date}</p>
            <a href={trailerLink}>
                <button> View Trailer </button>
            </a>
        </div>
    )
}