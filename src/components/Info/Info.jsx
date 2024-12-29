import React from 'react';
import Layout from '../Layout/Layout';
import { dataInfo } from '@components/Info/Constant';
import InfoCart from '@components/Info/InfoCart/InfoCart';
import styles from './styles.module.scss';

function Info() {
    const { container } = styles;
    return (
        <div>
            <Layout>
                <div className={container}>
                    {dataInfo.map((item) => {
                        return (
                            <InfoCart
                                content={item.title}
                                des={item.description}
                                src={item.src}
                            />
                        );
                    })}
                </div>
            </Layout>
        </div>
    );
}

export default Info;
