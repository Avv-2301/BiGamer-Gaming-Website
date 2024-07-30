import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from '../component/layout/pageheader';
import GallerySection from '../component/section/gallery';

const GalleryPage = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'OUR PHOTO GALLERY'} curPage={'Gallery'} />
            <GallerySection />
            <Footer />
        </Fragment>
    );
}

export default GalleryPage;
