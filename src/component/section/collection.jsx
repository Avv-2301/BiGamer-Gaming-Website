import { Link } from "react-router-dom";
import Rating from "./rating";


const subtitle = "today's";
const title = "Our Game Collection";
const btnText = "Browse All games";


let CollectionListContent = [
    {
        imgUrl: 'game/red_dead.jpg',
        imgAlt: 'collect thumb',
        title: 'Red Dead Redemption 2',
    },
    {
        imgUrl: 'game/last_of_us.jpg',
        imgAlt: 'collect thumb',
        title: 'Last of us part 1',
    },
    {
        imgUrl: 'game/need_for_speed.jpg',
        imgAlt: 'collect thumb',
        title: 'Need for Speed Unbound',
    },
    {
        imgUrl: 'game/gta_5.jpg',
        imgAlt: 'collect thumb',
        title: 'Gta 5',
    },
]

function CollectionSection(){
    return(
        <div>
            <section className="collection-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center CollectionStyle">
                            {CollectionListContent.map((val, i) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={i}>
                                    <div className="game-item item-layer">
                                        <div className="game-item-inner">
                                            <div className="game-thumb">
                                                <img 
                                                    src={`${val.imgUrl}`} 
                                                    alt={`${val.imgAlt}`} 
                                                />
                                            </div>
                                            { <div className="game-overlay">
                                                <h4><Link to="/team-single">{val.title}</Link> </h4>
                                                <Rating />
                                            </div> }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="button-wrapper text-center mt-5">
                            <Link to="/game-list" className="default-button"><span>{btnText} <i className="icofont-circled-right"></i></span> </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CollectionSection;
