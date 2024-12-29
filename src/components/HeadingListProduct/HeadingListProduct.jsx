import CountDownTimer from '@components/CountDownTimer/CountDownTimer';
import Layout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';

function HeadingListProduct() {
    const { container, containerItem } = styles;
    const targetDate = new Date('2025-12-31T00:00:00');
    return (
        <Layout>
            <div className={container}>
                <CountDownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
            {/* <CountDownTimer targetDate={targetDate} /> */}
        </Layout>
    );
}

export default HeadingListProduct;
