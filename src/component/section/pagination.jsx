function Pagination(){
    return(
        <div>
            <ul className="default-pagination lab-ul">
                <li>
                    <a href="#"><i className="icofont-rounded-left"></i></a>
                </li>
                <li>
                    <a href="#">01</a>
                </li>
                <li>
                    <a href="#" className="active">02</a>
                </li>
                <li>
                    <a href="#">03</a>
                </li>
                <li>
                    <a href="#"><i className="icofont-rounded-right"></i></a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
