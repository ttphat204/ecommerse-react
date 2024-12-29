import React from 'react';
import styles from '../styles.module.scss';

function InfoCart({ content, des, src }) {
    const { containerCard, containerContent, title, description } = styles;
    return (
        <div className={containerCard}>
            <img width={40} height={41} src={src} alt='icon' />
            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={description}>{des}</div>
            </div>
        </div>
    );
}

export default InfoCart;
