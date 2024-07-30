import { Link } from 'react-router-dom';


function PageHeader(props){

    const {title} = props;
    const {curPage} = props;

    return(
        <div>
            <section className="pageheader-section" style={{backgroundImage: "url(/pageheader/bg.jpg)"}}>
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <h2 className="pageheader-title">{title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{curPage}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PageHeader;