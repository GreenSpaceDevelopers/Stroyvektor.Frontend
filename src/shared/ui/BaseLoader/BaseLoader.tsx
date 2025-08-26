import { FC } from 'react';

import styles from './BaseLoader.module.scss';

interface BaseLoaderProps {
  size?: string;
  marginVertical?: string;
  marginEdges?: string;
  border?: string;
  color?: string;
  width?: string;
  height?: string;
  animationTimingFunction?: string;
}

export const BaseLoader: FC<BaseLoaderProps> = ({
  size,
  marginVertical,
  marginEdges,
  border,
  color,
  width,
  height,
  animationTimingFunction,
}) => {
  const inlineStyles = {
    ...(size && { height: `${size}`, width: `${size}` }),
    ...(marginVertical && { marginTop: `${marginVertical}`, marginBottom: `${marginVertical}` }),
    ...(marginEdges && { marginLeft: `${marginEdges}`, marginRight: `${marginEdges}` }),
    ...(border && { borderWidth: `${border}` }),
    ...(color && { borderTopColor: `${color}` }),
    ...(color && { borderLeftColor: `${color}` }),
    ...(width && { width: `${width}` }),
    ...(height && { height: `${height}` }),
    ...(animationTimingFunction && {
      animation: `spin 1s ${animationTimingFunction || 'linear'} infinite`,
    }),
  };

  return <div className={styles.baseLoader} style={inlineStyles}></div>;
};
