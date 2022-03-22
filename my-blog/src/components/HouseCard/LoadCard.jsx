import { useContext } from 'react'
import {Link} from "react-router-dom"
import MyContext from "../../context/MyContext";
import { Card } from "react-bootstrap";
import styles from "./loadCard.module.css"
import dummyPic from "../../assets/images/GAME-OF-THRONES.jpg"
const LoadCard = () => {
    const { data,setSelectedCardUrl,getImageFilter,filterRegionState ,getFilteredRegion} = useContext(MyContext);
    
    const { results } = data;

    const { reach, north, westerlands } = filterRegionState
    
    
    //  const getCardImageFunction = (house) => {
    //    return getImageFilter(house.region);
    //  };
    
    let filteredArray = []
    
    if (reach) {
       
        filteredArray.push(...getFilteredRegion("The Reach"))
        console.log(filteredArray);
    }
    if (north) {
      filteredArray.push(...getFilteredRegion("The North"));
    }
    if (westerlands) {
      filteredArray.push(...getFilteredRegion("The Westerlands"));
    }
    if (!(reach || north || westerlands)) {
        filteredArray=results.data
    }

    const handleCardClick = (house) => {
    window.scrollTo({
      top: 150,
      left: 100,
      behavior: "smooth",
    });
        setSelectedCardUrl(house.url)
    }

   
 
    
    return (<main>
        
        <div className={styles.cardContainer} >

        {filteredArray? filteredArray.map((house, i) => {
                return <div key={i} >
                    {" "}
                    <Card  className={styles.card}>
                    < Card.Img variant="top" src={ house.region?getImageFilter(house.region):dummyPic} className={styles.cardImg}/>
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
