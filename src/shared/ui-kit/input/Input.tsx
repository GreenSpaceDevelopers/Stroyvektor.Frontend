import clsx from 'clsx';
import { FC } from 'react';

import { TextInput as TextInputBase, TextInputProps } from '@mantine/core';

import styles from './styles.module.css';

type InputProps = TextInputProps & {
    variant?: TextInputProps['variant'] | 'outlineBottom' | 'floatingLabel';
};

const TextInput: FC<InputProps> = ({ variant = 'default', className, ...props }) => (
    <TextInputBase
        className={clsx(styles[variant], className)}
        classNames={styles}
        variant={variant}
        {...props}
    />
);

export default TextInput;
