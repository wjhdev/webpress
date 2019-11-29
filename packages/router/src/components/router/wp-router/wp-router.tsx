import { Component, State, Element, h } from '@stencil/core';
import { Template, TemplateContextual } from '../../../global/index';
import WPAPI from 'wpapi';

declare const exa : any 

@Component({
  tag: 'wp-router',
})
export class Router {
  @State() path : string = ""
  @State() template : Template

  @Element() el!: HTMLElement;

  async componentWillLoad() {
    var wp = new WPAPI({endpoint: exa.api_url})
    WPAPI.prototype['template'] = wp.registerRoute( 'webpress/v1', '/template/(?P<url>)' );

    var templateLoader = wp.template()
    templateLoader.param("url", window.location.pathname)

    this.template = await templateLoader.then( response => new Template(response) )

    console.log(this.template)

    return
  }

  render() {
    var templateComponents = Array.from(this.el.children as unknown as TemplateContextual[])
    
    var highestScoredTemplateValue = Math.max.apply(Math, templateComponents.map( template => this.template.matchScore(template.match)))
    
    templateComponents.map( templateComponent => {
      if(this.template.matchScore(templateComponent.match) == highestScoredTemplateValue) {
        templateComponent.hidden = false;
        templateComponent.query = this.template.query
      } else {
        templateComponent.hidden = true;
      }
    })

	  return <slot />
  }
}