/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface BBox {
    'class': string;
  }
  interface BBreadcrumb {
    'class': string;
    'isCentered': boolean;
    'isRight': boolean;
    'separator': | 'has-arrow-separator'
    | 'has-bullet-separator'
    | 'has-dot-separator'
    | 'has-succeeds-separator';
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BButton {
    'class': string;
    'color': | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-danger'
    | 'is-warning'
    | 'is-white'
    | 'is-light'
    | 'is-dark'
    | 'is-black'
    | 'is-text';
    'disabled': boolean;
    'fullWidth': boolean;
    'isActive': boolean;
    'isFocused': boolean;
    'isHovered': boolean;
    'isInverted': boolean;
    'isLoading': boolean;
    'isOutlined': boolean;
    'isRounded': boolean;
    'isStatic': boolean;
    'size': 'is-small' | 'is-medium' | 'is-large' | 'is-normal';
  }
  interface BButtons {
    'class': string;
    'size': 'are-small' | 'are-medium' | 'are-large';
  }
  interface BCheckbox {
    'checked': boolean;
    'class': string;
    'disabled': boolean;
    'labelClass': string;
  }
  interface BContent {
    'class': string;
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BField {
    'class': string;
    'fieldSize': 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    'hasAddons': boolean;
    'isGrouped': boolean;
    'isGroupedMultiline': boolean;
    'isHorizontal': boolean;
    'label': string;
  }
  interface BIcon {
    'class': string;
    'color': 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';
    'size': 'is-small' | 'is-medium' | 'is-large';
  }
  interface BImage {
    'class': string;
    'size': | 'is-16x16'
    | 'is-24x24'
    | 'is-32x32'
    | 'is-48x48'
    | 'is-64x64'
    | 'is-96x96'
    | 'is-128x128';
  }
  interface BInput {
    'class': string;
    'color': 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    'controlClass': string;
    'disabled': boolean;
    'isLoading': boolean;
    'isRounded': boolean;
    'isStatic': boolean;
    'name': string;
    'readonly': boolean;
    'required': boolean;
    'size': 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    'state': 'is-hovered' | 'is-focused';
    'type': 'text' | 'number' | 'email' | 'password';
    'value': string | number;
  }
  interface BNotification {
    'class': string;
    'color': 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    'dismissable': boolean;
  }
  interface BProgress {
    'class': string;
    'color': 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    'max': number;
    'size': 'is-small' | 'is-medium' | 'is-large';
    'value': number;
  }
  interface BSelect {
    'class': string;
    'color': 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    'controlClass': string;
    'isLoading': boolean;
    'isMultiple': boolean;
    'isRounded': boolean;
    'size': 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    'state': 'is-hovered' | 'is-focused';
    'value': string | number;
  }
  interface BTable {
    'class': string;
    'isBordered': boolean;
    'isFullwidth': boolean;
    'isHoverable': boolean;
    'isNarrow': boolean;
    'isStriped': boolean;
  }
  interface BTag {
    'class': string;
    'color': | 'is-black'
    | 'is-dark'
    | 'is-light'
    | 'is-white'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    'modifier': 'is-rounded' | 'is-delete';
    'size': 'is-normal' | 'is-medium' | 'is-large';
  }
  interface BTags {
    'class': string;
    'hasAddons': boolean;
  }
  interface BTextarea {
    'class': string;
    'color': 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    'controlClass': string;
    'disabled': boolean;
    'hasFixedSize': boolean;
    'isLoading': boolean;
    'readonly': boolean;
    'rows': number;
    'size': 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    'state': 'is-hovered' | 'is-focused';
    'value': string | number;
  }
}

declare global {


  interface HTMLBBoxElement extends Components.BBox, HTMLStencilElement {}
  var HTMLBBoxElement: {
    prototype: HTMLBBoxElement;
    new (): HTMLBBoxElement;
  };

  interface HTMLBBreadcrumbElement extends Components.BBreadcrumb, HTMLStencilElement {}
  var HTMLBBreadcrumbElement: {
    prototype: HTMLBBreadcrumbElement;
    new (): HTMLBBreadcrumbElement;
  };

  interface HTMLBButtonElement extends Components.BButton, HTMLStencilElement {}
  var HTMLBButtonElement: {
    prototype: HTMLBButtonElement;
    new (): HTMLBButtonElement;
  };

  interface HTMLBButtonsElement extends Components.BButtons, HTMLStencilElement {}
  var HTMLBButtonsElement: {
    prototype: HTMLBButtonsElement;
    new (): HTMLBButtonsElement;
  };

  interface HTMLBCheckboxElement extends Components.BCheckbox, HTMLStencilElement {}
  var HTMLBCheckboxElement: {
    prototype: HTMLBCheckboxElement;
    new (): HTMLBCheckboxElement;
  };

  interface HTMLBContentElement extends Components.BContent, HTMLStencilElement {}
  var HTMLBContentElement: {
    prototype: HTMLBContentElement;
    new (): HTMLBContentElement;
  };

  interface HTMLBFieldElement extends Components.BField, HTMLStencilElement {}
  var HTMLBFieldElement: {
    prototype: HTMLBFieldElement;
    new (): HTMLBFieldElement;
  };

  interface HTMLBIconElement extends Components.BIcon, HTMLStencilElement {}
  var HTMLBIconElement: {
    prototype: HTMLBIconElement;
    new (): HTMLBIconElement;
  };

  interface HTMLBImageElement extends Components.BImage, HTMLStencilElement {}
  var HTMLBImageElement: {
    prototype: HTMLBImageElement;
    new (): HTMLBImageElement;
  };

  interface HTMLBInputElement extends Components.BInput, HTMLStencilElement {}
  var HTMLBInputElement: {
    prototype: HTMLBInputElement;
    new (): HTMLBInputElement;
  };

  interface HTMLBNotificationElement extends Components.BNotification, HTMLStencilElement {}
  var HTMLBNotificationElement: {
    prototype: HTMLBNotificationElement;
    new (): HTMLBNotificationElement;
  };

  interface HTMLBProgressElement extends Components.BProgress, HTMLStencilElement {}
  var HTMLBProgressElement: {
    prototype: HTMLBProgressElement;
    new (): HTMLBProgressElement;
  };

  interface HTMLBSelectElement extends Components.BSelect, HTMLStencilElement {}
  var HTMLBSelectElement: {
    prototype: HTMLBSelectElement;
    new (): HTMLBSelectElement;
  };

  interface HTMLBTableElement extends Components.BTable, HTMLStencilElement {}
  var HTMLBTableElement: {
    prototype: HTMLBTableElement;
    new (): HTMLBTableElement;
  };

  interface HTMLBTagElement extends Components.BTag, HTMLStencilElement {}
  var HTMLBTagElement: {
    prototype: HTMLBTagElement;
    new (): HTMLBTagElement;
  };

  interface HTMLBTagsElement extends Components.BTags, HTMLStencilElement {}
  var HTMLBTagsElement: {
    prototype: HTMLBTagsElement;
    new (): HTMLBTagsElement;
  };

  interface HTMLBTextareaElement extends Components.BTextarea, HTMLStencilElement {}
  var HTMLBTextareaElement: {
    prototype: HTMLBTextareaElement;
    new (): HTMLBTextareaElement;
  };
  interface HTMLElementTagNameMap {
    'b-box': HTMLBBoxElement;
    'b-breadcrumb': HTMLBBreadcrumbElement;
    'b-button': HTMLBButtonElement;
    'b-buttons': HTMLBButtonsElement;
    'b-checkbox': HTMLBCheckboxElement;
    'b-content': HTMLBContentElement;
    'b-field': HTMLBFieldElement;
    'b-icon': HTMLBIconElement;
    'b-image': HTMLBImageElement;
    'b-input': HTMLBInputElement;
    'b-notification': HTMLBNotificationElement;
    'b-progress': HTMLBProgressElement;
    'b-select': HTMLBSelectElement;
    'b-table': HTMLBTableElement;
    'b-tag': HTMLBTagElement;
    'b-tags': HTMLBTagsElement;
    'b-textarea': HTMLBTextareaElement;
  }
}

declare namespace LocalJSX {
  interface BBox extends JSXBase.HTMLAttributes<HTMLBBoxElement> {
    'class'?: string;
  }
  interface BBreadcrumb extends JSXBase.HTMLAttributes<HTMLBBreadcrumbElement> {
    'class'?: string;
    'isCentered'?: boolean;
    'isRight'?: boolean;
    'separator'?: | 'has-arrow-separator'
    | 'has-bullet-separator'
    | 'has-dot-separator'
    | 'has-succeeds-separator';
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BButton extends JSXBase.HTMLAttributes<HTMLBButtonElement> {
    'class'?: string;
    'color'?: | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-danger'
    | 'is-warning'
    | 'is-white'
    | 'is-light'
    | 'is-dark'
    | 'is-black'
    | 'is-text';
    'disabled'?: boolean;
    'fullWidth'?: boolean;
    'isActive'?: boolean;
    'isFocused'?: boolean;
    'isHovered'?: boolean;
    'isInverted'?: boolean;
    'isLoading'?: boolean;
    'isOutlined'?: boolean;
    'isRounded'?: boolean;
    'isStatic'?: boolean;
    'onClicked'?: (event: CustomEvent<any>) => void;
    'size'?: 'is-small' | 'is-medium' | 'is-large' | 'is-normal';
  }
  interface BButtons extends JSXBase.HTMLAttributes<HTMLBButtonsElement> {
    'class'?: string;
    'size'?: 'are-small' | 'are-medium' | 'are-large';
  }
  interface BCheckbox extends JSXBase.HTMLAttributes<HTMLBCheckboxElement> {
    'checked'?: boolean;
    'class'?: string;
    'disabled'?: boolean;
    'labelClass'?: string;
  }
  interface BContent extends JSXBase.HTMLAttributes<HTMLBContentElement> {
    'class'?: string;
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BField extends JSXBase.HTMLAttributes<HTMLBFieldElement> {
    'class'?: string;
    'fieldSize'?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    'hasAddons'?: boolean;
    'isGrouped'?: boolean;
    'isGroupedMultiline'?: boolean;
    'isHorizontal'?: boolean;
    'label'?: string;
  }
  interface BIcon extends JSXBase.HTMLAttributes<HTMLBIconElement> {
    'class'?: string;
    'color'?: 'has-text-info' | 'has-text-success' | 'has-text-warning' | 'has-text-danger';
    'size'?: 'is-small' | 'is-medium' | 'is-large';
  }
  interface BImage extends JSXBase.HTMLAttributes<HTMLBImageElement> {
    'class'?: string;
    'size'?: | 'is-16x16'
    | 'is-24x24'
    | 'is-32x32'
    | 'is-48x48'
    | 'is-64x64'
    | 'is-96x96'
    | 'is-128x128';
  }
  interface BInput extends JSXBase.HTMLAttributes<HTMLBInputElement> {
    'class'?: string;
    'color'?: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    'controlClass'?: string;
    'disabled'?: boolean;
    'isLoading'?: boolean;
    'isRounded'?: boolean;
    'isStatic'?: boolean;
    'name'?: string;
    'readonly'?: boolean;
    'required'?: boolean;
    'size'?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    'state'?: 'is-hovered' | 'is-focused';
    'type'?: 'text' | 'number' | 'email' | 'password';
    'value'?: string | number;
  }
  interface BNotification extends JSXBase.HTMLAttributes<HTMLBNotificationElement> {
    'class'?: string;
    'color'?: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    'dismissable'?: boolean;
  }
  interface BProgress extends JSXBase.HTMLAttributes<HTMLBProgressElement> {
    'class'?: string;
    'color'?: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    'max'?: number;
    'size'?: 'is-small' | 'is-medium' | 'is-large';
    'value'?: number;
  }
  interface BSelect extends JSXBase.HTMLAttributes<HTMLBSelectElement> {
    'class'?: string;
    'color'?: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    'controlClass'?: string;
    'isLoading'?: boolean;
    'isMultiple'?: boolean;
    'isRounded'?: boolean;
    'size'?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    'state'?: 'is-hovered' | 'is-focused';
    'value'?: string | number;
  }
  interface BTable extends JSXBase.HTMLAttributes<HTMLBTableElement> {
    'class'?: string;
    'isBordered'?: boolean;
    'isFullwidth'?: boolean;
    'isHoverable'?: boolean;
    'isNarrow'?: boolean;
    'isStriped'?: boolean;
  }
  interface BTag extends JSXBase.HTMLAttributes<HTMLBTagElement> {
    'class'?: string;
    'color'?: | 'is-black'
    | 'is-dark'
    | 'is-light'
    | 'is-white'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';
    'modifier'?: 'is-rounded' | 'is-delete';
    'size'?: 'is-normal' | 'is-medium' | 'is-large';
  }
  interface BTags extends JSXBase.HTMLAttributes<HTMLBTagsElement> {
    'class'?: string;
    'hasAddons'?: boolean;
  }
  interface BTextarea extends JSXBase.HTMLAttributes<HTMLBTextareaElement> {
    'class'?: string;
    'color'?: 'is-primary' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
    'controlClass'?: string;
    'disabled'?: boolean;
    'hasFixedSize'?: boolean;
    'isLoading'?: boolean;
    'readonly'?: boolean;
    'rows'?: number;
    'size'?: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';
    'state'?: 'is-hovered' | 'is-focused';
    'value'?: string | number;
  }

  interface IntrinsicElements {
    'b-box': BBox;
    'b-breadcrumb': BBreadcrumb;
    'b-button': BButton;
    'b-buttons': BButtons;
    'b-checkbox': BCheckbox;
    'b-content': BContent;
    'b-field': BField;
    'b-icon': BIcon;
    'b-image': BImage;
    'b-input': BInput;
    'b-notification': BNotification;
    'b-progress': BProgress;
    'b-select': BSelect;
    'b-table': BTable;
    'b-tag': BTag;
    'b-tags': BTags;
    'b-textarea': BTextarea;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


