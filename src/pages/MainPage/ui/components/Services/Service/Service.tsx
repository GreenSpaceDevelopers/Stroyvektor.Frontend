import clsx from 'clsx';
import { forwardRef } from 'react';

import serviceLine1WhiteUrl from '../../../../assets/services/serviceLine1White.svg';
import styles from './Service.module.scss';

export type ServiceProps = {
    title: string;
    subtitle: string;
    description: string;
    isHovering: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    disableMouseHover?: boolean;
};

export const Service = forwardRef<HTMLDivElement, ServiceProps>((props, ref) => {
    return (
        <div
            ref={ref}
            className={clsx(styles.service, { [styles.hovering]: props.isHovering })}
            onMouseEnter={props.disableMouseHover ? undefined : props.onMouseEnter}
            onMouseLeave={props.disableMouseHover ? undefined : props.onMouseLeave}
        >
            <div>
                <h4 className={clsx(styles.serviceTitle, { [styles.hovering]: props.isHovering })}>
                    {props.title}
                </h4>

                <img src={serviceLine1WhiteUrl} alt="" />
                <p className={styles.serviceSubtitle}>{props.subtitle}</p>

                <span
                    className={clsx(styles.serviceDescription, {
                        [styles.hovering]: props.isHovering,
                    })}
                >
                    {props.description}
                </span>
            </div>

            <div className={styles.serviceButtons}>
                <button className={clsx(styles.serviceButton, styles.first)}>подробнее</button>
                <button
                    className={clsx(styles.serviceButton, styles.second, {
                        [styles.hovering]: props.isHovering,
                    })}
                >
                    заполнить бриф
                </button>
            </div>
        </div>
    );
});

Service.displayName = 'Service';
