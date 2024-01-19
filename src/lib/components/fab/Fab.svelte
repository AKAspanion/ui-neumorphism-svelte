<script lang="ts">
	import { classes } from '@lib/utils/cs';
	import { Button } from '../button';
	import type { FABProps } from './Fab.types';
	import './Fab.css';

	type $$Props = FABProps;

	export let top = false;
	export let bottom = false;
	export let left = false;
	export let right = false;
	export let fixed = false;
	export let absolute = false;
	export let animation = false;

	const getClasses = () => {
		return classes(`
            nu-fab
            ${top ? 'nu-fab--top' : ''}
            ${left ? 'nu-fab--left' : ''}
            ${right ? 'nu-fab--right' : ''}
            ${bottom ? 'nu-fab--bottom' : ''}
            ${fixed ? 'nu-fab--fixed' : ''}
            ${absolute ? 'nu-fab--absolute' : ''}
            ${animation ? 'nu-fab--animation' : ''}
            ${$$restProps.class || ''}
      `);
	};
</script>

<Button
	{...$$restProps}
	rounded
	type="fab"
	text={false}
	block={false}
	outlined={false}
	depressed={false}
	class={getClasses()}
	on:click
	on:focus
	on:mouseup
	on:mousedown
	on:mousemove
	on:mouseover
	on:mouseenter
	on:mouseleave
>
	<slot />
</Button>
<!-- import React from 'react'

import { Button } from '../index'

import styles from './Fab.module.css'
import { getModuleClasses } from '../../util'
import { FAB_BUTTON_PROP_TYPES, DEFAULT_PROPS } from '../../assets/index'

class Fab extends React.Component {
  static displayName = 'NuFab'

  static defaultProps = {
    animation: true,
    ...DEFAULT_PROPS
  }

  static propTypes = FAB_BUTTON_PROP_TYPES

  getClasses() {
    const { fixed, top, right, bottom, left, absolute, animation } = this.props
    return getModuleClasses(
      styles,
      `
        nu-fab
        ${top ? 'nu-fab--top' : ''}
        ${left ? 'nu-fab--left' : ''}
        ${right ? 'nu-fab--right' : ''}
        ${bottom ? 'nu-fab--bottom' : ''}
        ${fixed ? 'nu-fab--fixed' : ''}
        ${absolute ? 'nu-fab--absolute' : ''}
        ${animation ? 'nu-fab--animation' : ''}
      `
    )
  }

  render() {
    const { children, style, className, ...otherProps } = this.props
    return (
      <div style={style} className={`${this.getClasses()} ${className}`}>
        <Button
          {...otherProps}
          rounded
          type='fab'
          text={false}
          block={false}
          outlined={false}
          depressed={false}
        >
          {children}
        </Button>
      </div>
    )
  }
}

export default Fab -->
