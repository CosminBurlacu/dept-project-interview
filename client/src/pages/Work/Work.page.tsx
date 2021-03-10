import React, { CSSProperties, Suspense } from 'react'
import Posts from '../../components/Posts/Posts.component'
import { ViewProvider } from '../../contexts/view.context'
import { BannerWrapper, ButtonBanner, TitleBanner, WorkWrapper } from './work.style'
import background from "../../assets/background.jpg";
const Filters = React.lazy(() => import('../../components/Filters/Filters.component'));
const Footer = React.lazy(() => import('../../components/Footer/Footer.component'));
const Contact = React.lazy(() => import('../../components/Contact/Contact.component'));

const Banner: React.FC = () => {
    const styles: CSSProperties | any = {
        bg: { backgroundImage: `url(${background})` }
    }
    return (
        <BannerWrapper style={styles.bg}>
            <TitleBanner>Work</TitleBanner>
            <ButtonBanner>View Case</ButtonBanner>
        </BannerWrapper>
    )
}

const Work: React.FC = () => {
    return (
        <WorkWrapper>
            <Banner />
            <Suspense fallback={<h5>Loading content...</h5>}>
                <ViewProvider>
                    <Filters />
                    <Posts />
                </ViewProvider>
                <Contact />
                <Footer />
            </Suspense>
        </WorkWrapper>
    )
}

export default Work;
