import React from 'react';
import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytIcon from '@icons/svgs/ytIcon.svg';
function BoxIcons({ type, href }) {
    const { boxIcon } = styles;
    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return insIcon;
            case 'yt':
                return ytIcon;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type}></img>
        </div>
    );
}

export default BoxIcons;
