import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-icon',
  styleUrls: ['icon.scss'],
  shadow: true,
})
export class Icon implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Color
   */
  @Prop() color: 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  render(): JSX.Element {
    const iconClass = classNames('icon', this.color, this.size, this.class);

    return (
      <span class={iconClass}>
        <slot />
      </span>
    );
  }
}
