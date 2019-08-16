import * as React from 'react';

import { IImageIconProps } from './Icon.types';
import { Image } from '../Image/Image';
import { css, getNativeProps, htmlElementProperties } from '../../Utilities';
import { classNames, MS_ICON } from './Icon.styles';

export const ImageIcon: React.StatelessComponent<IImageIconProps> = props => {
  const { className, imageProps } = props;

  const nativeProps = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(props, htmlElementProperties);

  const containerProps = props['aria-label']
    ? {}
    : {
        role: 'presentation',
        'aria-hidden': imageProps.alt || imageProps['aria-labelledby'] ? false : true
      };

  return (
    <div {...containerProps} {...nativeProps} className={css(MS_ICON, classNames.root, classNames.image, className)}>
      <Image {...imageProps} />
    </div>
  );
};
