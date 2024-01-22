<script lang="ts">
	import { styleToString } from '@lib/utils/style';
	import { classes } from '@lib/utils/cs';
	import { getTheme } from '@lib';
	import { uid } from '@lib/utils/fn';
	import './Progress.css';

	const theme = getTheme();

	export let value = 0;
	export let height = 9;
	export let color = '';
	export let dark = false;
	export let active = true;
	export let striped = false;
	export let disabled = false;
	export let bordered = false;
	export let fillHeight = false;
	export let indeterminate = false;

	$: darkProp = $theme.dark || dark;
	$: normalizedValue = value > 100 ? 100 : value < 0 ? 0 : value;

	let id = uid();

	const getClasses = (classType: string, isDark: boolean) => {
		switch (classType) {
			case 'progress':
				return classes(`
                    nu-progress-linear
                    nu-progress-linear--${isDark ? 'dark' : 'light'}
                    ${bordered ? 'nu-progress-linear--bordered' : ''}
                `);
			case 'bg':
				return classes(`
                    nu-progress-linear--bg
                    ${striped ? 'nu-progress-linear--striped' : ''}
                    ${indeterminate ? 'nu-progress-linear--indeterminate' : ''}
                `);
			case 'bg-wrapper':
				return classes(`
                    nu-progress-linear--bg-wrapper
                    ${fillHeight ? 'nu-progress-linear--bg-filled' : ''}
                `);
		}
	};

	const getHeightStyle = (h: number) => {
		return {
			height: `${active ? h : 0}px`,
			borderRadius: `${h * 2}px`
		};
	};
	const getStyles = () => {
		const bgStyle = !disabled && color ? `--selector-bg: ${color || ''};` : '';
		return `${bgStyle}`;
	};
</script>

<div
	aria-valuemin="0"
	role="progressbar"
	aria-valuemax="100"
	aria-valuenow={normalizedValue}
	class={getClasses('progress', darkProp)}
	style={getStyles() + styleToString(getHeightStyle(height))}
>
	<div
		style={styleToString({ borderRadius: `${height * 2}px` })}
		class={getClasses('bg-wrapper', darkProp)}
	>
		<div
			{id}
			class={getClasses('bg', darkProp)}
			style={styleToString({
				width: `${indeterminate ? 100 : normalizedValue}%`,
				...getHeightStyle(fillHeight ? height : height - 5)
			})}
		/>
	</div>
</div>

<!-- import React from 'react'

import styles from './Progress.module.css'
import { classes, uid, setCSSVariable } from '../../util'
import {
  PROGRESS_LINEAR_PROP_TYPES,
  PROGRESS_LINEAR_DEFAULT_PROPS
} from '../../assets/index'

class ProgressLinear extends React.Component {
  static displayName = 'NuProgressLinear'

  static defaultProps = PROGRESS_LINEAR_DEFAULT_PROPS

  static propTypes = PROGRESS_LINEAR_PROP_TYPES

  constructor(props) {
    super(props)
    this.state = { id: uid() }
  }

  get value() {
    const { value } = this.props
    return value > 100 ? 100 : value < 0 ? 0 : value
  }

  getClasses(classType) {
    const { dark, striped, bordered, indeterminate, fillHeight } = this.props
    switch (classType) {
      case 'progress':
        return getModuleClasses(
          styles,
          `
            nu-progress-linear
            nu-progress-linear--${dark ? 'dark' : 'light'}
            ${bordered ? 'nu-progress-linear--bordered' : ''}
          `
        )
      case 'bg':
        return getModuleClasses(
          styles,
          `
            nu-progress-linear--bg
            ${striped ? 'nu-progress-linear--striped' : ''}
            ${indeterminate ? 'nu-progress-linear--indeterminate' : ''}
          `
        )
      case 'bg-wrapper':
        return getModuleClasses(
          styles,
          `
            nu-progress-linear--bg-wrapper
            ${fillHeight ? 'nu-progress-linear--bg-filled' : ''}
          `
        )
    }
  }

  getHeightStyle(height) {
    const { active } = this.props
    return {
      height: `${active ? height : 0}px`,
      borderRadius: `${height * 2}px`
    }
  }

  componentDidMount() {
    const { color, disabled } = this.props
    const elem = document.getElementById(this.state.id)
    if (!disabled) {
      setCSSVariable(elem, '--selector-bg', color)
    }
  }

  render() {
    const { style, height, className, fillHeight, indeterminate } = this.props
    return (
      <div
        aria-valuemin='0'
        role='progressbar'
        aria-valuemax='100'
        aria-valuenow={this.value}
        style={{ ...style, ...this.getHeightStyle(height) }}
        className={`${this.getClasses('progress')} ${className}`}
      >
        <div
          style={{ borderRadius: `${height * 2}px` }}
          className={`${this.getClasses('bg-wrapper')}`}
        >
          <div
            id={this.state.id}
            className={`${this.getClasses('bg')}`}
            style={{
              width: `${indeterminate ? 100 : this.value}%`,
              ...this.getHeightStyle(fillHeight ? height : height - 5)
            }}
          />
        </div>
      </div>
    )
  }
}

export default ProgressLinear -->
