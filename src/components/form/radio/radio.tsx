import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-radio',
  styleUrls: ['radio.scss'],
})
export class Radio implements ComponentInterface {
  @Prop() class = '';
  @Prop() labelClass = '';
  @Prop() name: string;
  @Prop() checked = false;

  render(): JSX.Element {
    const labelClass = classNames('radio', this.labelClass);
    const radioClass = classNames(this.class);

    return (
      <label class={labelClass}>
        <input class={radioClass} type="radio" name={this.name} checked={this.checked} /> <slot />
      </label>
    );
  }
}
