import { useContext } from 'react'
import {Link} from "react-router-dom"
import MyContext from "../../context/MyContext";
import { Card } from "react-bootstrap";
import styles from "./loadCard.module.css"
const LoadCard = () => {
    const { data,setSelectedCardUrl,getImageFilter } = useContext(MyContext);
    
    const { results } = data;

    const handleCardClick = (house) => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
        setSelectedCardUrl(house.url)
    }

    const getCardImageFunction = (house) => {
        return getImageFilter(house.region)
    }
 
    
    return (<main>
        
        <div className={styles.cardContainer} >

        {results? results.data.map((house, i) => {
                return <div key={i} >
                    {" "}
                    <Card style={{ width: "8rem" }} className={styles.card}>
                    <Card.Img variant="top" src={ getCardImageFunction(house)}className={styles.cardImg}/>
                    <Card.Body>
                     <Card.Title className={styles.height}><span>House : </span>{house.name}</Card.Title>
                     <Card.Text className={styles.height}><span>Region : </span>{house.region}
                    </Card.Text>
                    <Link className={styles.knowMoreLink} to={`/${house.name}`} onClick={()=>handleCardClick(house)}>Know more >>></Link>
                    </Card.Body>{" "}
                    </Card>
       
                </div>
            }):null} 
        </div></main>       
    )
}

export default LoadCard
