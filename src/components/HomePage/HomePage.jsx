import Header from '@/components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';

function HomePage() {
    const { containerHeader, container } = styles;
    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProduct />
            </div>
        </div>
    );
}

export default HomePage;
