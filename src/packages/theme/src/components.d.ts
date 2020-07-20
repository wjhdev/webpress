/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Author,
  Media,
  Menu,
  MenuItem,
  Single,
  TemplateQuery,
  WebpressContext,
} from '@webpress/core';
import {
  WebpressMenuOptions,
} from './components/wp-menu/wp-menu';

export namespace Components {
  interface WebpressTheme {
    'context': WebpressContext;
  }
  interface WpAuthor {
    'author': Author;
    'permalink': boolean;
  }
  interface WpExcerptCopy {
    'post': Single;
  }
  interface WpLink {
    'object': Single | MenuItem;
    'path': string;
  }
  interface WpMedia {
    'media': Media;
  }
  interface WpMenu {
    'menu': Menu;
    'options': WebpressMenuOptions;
    'query': TemplateQuery;
  }
  interface WpRunningCopy {
    'content': string;
    'post': Single;
  }
  interface WpTitle {
    'permalink': boolean;
    'post': Single;
  }
}

declare global {


  interface HTMLWebpressThemeElement extends Components.WebpressTheme, HTMLStencilElement {}
  var HTMLWebpressThemeElement: {
    prototype: HTMLWebpressThemeElement;
    new (): HTMLWebpressThemeElement;
  };

  interface HTMLWpAuthorElement extends Components.WpAuthor, HTMLStencilElement {}
  var HTMLWpAuthorElement: {
    prototype: HTMLWpAuthorElement;
    new (): HTMLWpAuthorElement;
  };

  interface HTMLWpExcerptCopyElement extends Components.WpExcerptCopy, HTMLStencilElement {}
  var HTMLWpExcerptCopyElement: {
    prototype: HTMLWpExcerptCopyElement;
    new (): HTMLWpExcerptCopyElement;
  };

  interface HTMLWpLinkElement extends Components.WpLink, HTMLStencilElement {}
  var HTMLWpLinkElement: {
    prototype: HTMLWpLinkElement;
    new (): HTMLWpLinkElement;
  };

  interface HTMLWpMediaElement extends Components.WpMedia, HTMLStencilElement {}
  var HTMLWpMediaElement: {
    prototype: HTMLWpMediaElement;
    new (): HTMLWpMediaElement;
  };

  interface HTMLWpMenuElement extends Components.WpMenu, HTMLStencilElement {}
  var HTMLWpMenuElement: {
    prototype: HTMLWpMenuElement;
    new (): HTMLWpMenuElement;
  };

  interface HTMLWpRunningCopyElement extends Components.WpRunningCopy, HTMLStencilElement {}
  var HTMLWpRunningCopyElement: {
    prototype: HTMLWpRunningCopyElement;
    new (): HTMLWpRunningCopyElement;
  };

  interface HTMLWpTitleElement extends Components.WpTitle, HTMLStencilElement {}
  var HTMLWpTitleElement: {
    prototype: HTMLWpTitleElement;
    new (): HTMLWpTitleElement;
  };
  interface HTMLElementTagNameMap {
    'webpress-theme': HTMLWebpressThemeElement;
    'wp-author': HTMLWpAuthorElement;
    'wp-excerpt-copy': HTMLWpExcerptCopyElement;
    'wp-link': HTMLWpLinkElement;
    'wp-media': HTMLWpMediaElement;
    'wp-menu': HTMLWpMenuElement;
    'wp-running-copy': HTMLWpRunningCopyElement;
    'wp-title': HTMLWpTitleElement;
  }
}

declare namespace LocalJSX {
  interface WebpressTheme {
    'context'?: WebpressContext;
  }
  interface WpAuthor {
    'author'?: Author;
    'permalink'?: boolean;
  }
  interface WpExcerptCopy {
    'post'?: Single;
  }
  interface WpLink {
    'object'?: Single | MenuItem;
    'onWebpressNavigation'?: (event: CustomEvent<{ url }>) => void;
    'path'?: string;
  }
  interface WpMedia {
    'media'?: Media;
  }
  interface WpMenu {
    'menu'?: Menu;
    'options'?: WebpressMenuOptions;
    'query'?: TemplateQuery;
  }
  interface WpRunningCopy {
    'content'?: string;
    'post'?: Single;
  }
  interface WpTitle {
    'permalink'?: boolean;
    'post'?: Single;
  }

  interface IntrinsicElements {
    'webpress-theme': WebpressTheme;
    'wp-author': WpAuthor;
    'wp-excerpt-copy': WpExcerptCopy;
    'wp-link': WpLink;
    'wp-media': WpMedia;
    'wp-menu': WpMenu;
    'wp-running-copy': WpRunningCopy;
    'wp-title': WpTitle;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'webpress-theme': LocalJSX.WebpressTheme & JSXBase.HTMLAttributes<HTMLWebpressThemeElement>;
      'wp-author': LocalJSX.WpAuthor & JSXBase.HTMLAttributes<HTMLWpAuthorElement>;
      'wp-excerpt-copy': LocalJSX.WpExcerptCopy & JSXBase.HTMLAttributes<HTMLWpExcerptCopyElement>;
      'wp-link': LocalJSX.WpLink & JSXBase.HTMLAttributes<HTMLWpLinkElement>;
      'wp-media': LocalJSX.WpMedia & JSXBase.HTMLAttributes<HTMLWpMediaElement>;
      'wp-menu': LocalJSX.WpMenu & JSXBase.HTMLAttributes<HTMLWpMenuElement>;
      'wp-running-copy': LocalJSX.WpRunningCopy & JSXBase.HTMLAttributes<HTMLWpRunningCopyElement>;
      'wp-title': LocalJSX.WpTitle & JSXBase.HTMLAttributes<HTMLWpTitleElement>;
    }
  }
}


