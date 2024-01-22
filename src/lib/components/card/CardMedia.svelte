<script lang="ts">
	import { getTheme } from '@lib';
	import { classes } from '@lib/utils/cs';
	import { normalize } from '@lib/utils/fn';
	import { styleToString } from '@lib/utils/style';
	import './Card.css';

	export let src = '';
	export let dark = false;
	export let rounded = false;
	export let disabled = false;
	export let height: number = 160;

	const theme = getTheme();

	$: darkProp = dark || $theme?.dark || false;
	$: roundedProp = rounded || false;
	$: disabledProp = disabled || false;
	$: heightProp = typeof height === 'number' ? `${height}px` : '';

	const getClass = (classType: string, isDark: boolean) => {
		switch (classType) {
			case 'media':
				return classes(`
                    nu-card-media
                    nu-card-media--${isDark ? 'dark' : 'light'}
                    ${roundedProp ? 'nu-card-media--rounded' : ''}
                    ${disabledProp ? 'nu-card-media--disabled' : ''}
                    ${normalize($$restProps.class)}
                `);
			case 'title':
				return classes('nu-card-media-title');
		}
	};
</script>

<div
	{...$$restProps}
	class={getClass('media', darkProp)}
	style={styleToString({ height: `${heightProp}`, backgroundImage: `url(${src})` })}
>
	{#if $$slots.title}
		<div class={getClass('title', darkProp)}>
			<slot dark={darkProp} name="title" />
		</div>
	{/if}
</div>

<!-- import React from 'react'

import { H6 } from '../../index'
import styles from './Card.module.css'
import { getModuleClasses } from '../../util'
import {
  DEFAULT_PROPS_TYPE,
  DEFAULT_PROPS,
  G_STRING,
  G_BOOL,
  G_NUM
} from '../../assets/index'

class CardMedia extends React.Component {
  static displayName = 'NuCardMedia'

  static defaultProps = {
    height: 160,
    ...DEFAULT_PROPS
  }

  static propTypes = {
    height: G_NUM,
    src: G_STRING,
    title: G_STRING,
    rounded: G_BOOL,
    disabled: G_BOOL,
    ...DEFAULT_PROPS_TYPE
  }

  getClass(classType) {
    const { dark, rounded, disabled } = this.props
    switch (classType) {
      case 'media':
        return getModuleClasses(
          styles,
          `
            nu-card-media
            nu-card-media--${dark ? 'dark' : 'light'}
            ${rounded ? 'nu-card-media--rounded' : ''}
            ${disabled ? 'nu-card-media--disabled' : ''}
          `
        )
      case 'title':
        return getModuleClasses(styles, 'nu-card-media-title')
    }
  }

  render() {
    const { src, dark, title, height, style, className } = this.props
    return (
      <div
        title={title}
        style={{
          ...style,
          height: `${height}px`,
          backgroundImage: `url(${src})`
        }}
        className={`${this.getClass('media')} ${className}`}
      >
        {title ? (
          <H6 dark={dark} className={`${this.getClass('title')}`}>
            {title}
          </H6>
        ) : null}
      </div>
    )
  }
}

export default CardMedia -->
