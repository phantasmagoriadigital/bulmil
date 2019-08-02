import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-checkbox',
})
export class Checkbox {
  @Prop() class: string = '';
  @Prop() labelClass: string = '';
  @Prop() checked: boolean = false;
  @Prop() disabled: boolean = false;

  render(): JSX.Element {
    const labelClass = classNames('checkbox', this.labelClass);
    const checkboxClass = classNames(this.class);

    return (
      <label class={labelClass}>
        <input
          type="checkbox"
          class={checkboxClass}
          disabled={this.disabled}
          checked={this.checked}
        />
      </label>
    );
  }
}
