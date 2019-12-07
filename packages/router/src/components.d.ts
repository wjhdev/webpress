/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Query,
  WebpressConnection,
} from '@webpress/core';

export namespace Components {
  interface WpRouter {
    'connection': WebpressConnection;
  }
  interface WpTemplate {
    'component': string;
    'componentProps'?: { [key: string]: any };
    'menus': any[];
    'query': Query;
    'sidebars': any[];
  }
}

declare global {


  interface HTMLWpRouterElement extends Components.WpRouter, HTMLStencilElement {}
  var HTMLWpRouterElement: {
    prototype: HTMLWpRouterElement;
    new (): HTMLWpRouterElement;
  };

  interface HTMLWpTemplateElement extends Components.WpTemplate, HTMLStencilElement {}
  var HTMLWpTemplateElement: {
    prototype: HTMLWpTemplateElement;
    new (): HTMLWpTemplateElement;
  };
  interface HTMLElementTagNameMap {
    'wp-router': HTMLWpRouterElement;
    'wp-template': HTMLWpTemplateElement;
  }
}

declare namespace LocalJSX {
  interface WpRouter {
    'connection'?: WebpressConnection;
  }
  interface WpTemplate {
    'component'?: string;
    'componentProps'?: { [key: string]: any };
    'menus'?: any[];
    'query'?: Query;
    'sidebars'?: any[];
  }

  interface IntrinsicElements {
    'wp-router': WpRouter;
    'wp-template': WpTemplate;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'wp-router': LocalJSX.WpRouter & JSXBase.HTMLAttributes<HTMLWpRouterElement>;
      'wp-template': LocalJSX.WpTemplate & JSXBase.HTMLAttributes<HTMLWpTemplateElement>;
    }
  }
}


