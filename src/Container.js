import {useState} from "react";
import {Card} from './Card.js'

export function Container() {
    const style = {
      width: '300px'
    }
    const [cards, setCards] = useState([
        {id: 'card1', text: 'card1'},
        {id: 'card2', text: 'card2'},
        {id: 'card3', text: 'card3'},
    ])

    const moveCard = (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex]
        let cloneCard = [...cards]
        cloneCard.splice(dragIndex, 1)
        cloneCard.splice(hoverIndex, 0, dragCard)
        setCards(cloneCard)
    }

    return (
        <div style={style}>
            {
                cards.map((card, index)=> {
                    return <Card key={card.id} text={card.text} id={card.id} index={index} moveCard={moveCard}/>
                })
            }
        </div>
    );
}
