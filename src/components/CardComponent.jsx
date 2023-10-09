/* eslint-disable react/prop-types */


export default function CardComponent({cards}){

    return(
        <>
        {cards.map((card)=>(
            <div key={card.id} className="card">
                <span className="card-name">{card.name}</span>
            </div>
        ))}
        </>
    )
}