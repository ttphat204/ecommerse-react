import React from 'react';
import styles from './styles.module.scss';
import CountDownTimer from '@components/CountDownTimer/CountDownTimer';
import Button from '@components/Button/Button';

function CountDownBanner() {
    const { container, containerTimer, title, boxBTN } = styles;
    const targetDate = new Date('2025-12-31T00:00:00');
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountDownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxBTN}>
                <Button content={'Buy now'} />
            </div>
        </div>
    );
}

export default CountDownBanner;
