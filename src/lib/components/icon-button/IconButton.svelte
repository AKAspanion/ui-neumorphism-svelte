<script lang="ts">
	import Button from '../button/Button.svelte';
	import type { IconButtonProps } from './IconButton.types.ts';

	type $$Props = IconButtonProps;
</script>

<Button
	{...$$restProps}
	on:click
	on:focus
	on:mouseup
	on:mousedown
	on:mousemove
	on:mouseover
	on:mouseenter
	on:mouseleave
	text
	type="icon"
	block={false}
	depressed={false}
>
	<slot />
</Button>

<!-- import React from 'react'

import { Button } from '../index'

import { BUTTON_PROP_TYPES, DEFAULT_PROPS } from '../../assets/index'
class IconButton extends React.Component {
  static displayName = 'NuIconButton'

  static defaultProps = {
    text: true,
    ...DEFAULT_PROPS
  }

  static propTypes = BUTTON_PROP_TYPES

  render() {
    const { children, ...otherProps } = this.props
    return (
      <Button {...otherProps} type='icon' block={false} depressed={false}>
        {children}
      </Button>
    )
  }
}

export default IconButton -->
