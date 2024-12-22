import React from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function Banner() {
    const { container, content, title, description } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>XStore Marseille04 Demo</h1>
                <div className={description}>
                    Make yours celebrations even more special this years with
                    beautiful.
                </div>

                <Button content={'Go to shop'} />
            </div>
        </div>
    );
}

export default Banner;
