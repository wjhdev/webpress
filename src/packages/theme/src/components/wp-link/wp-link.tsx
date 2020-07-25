import { Component, Prop, Event, EventEmitter, h } from '@stencil/core'
import { Single, MenuItem } from '@webpress/core'

@Component({
    tag: 'wp-link',
})
export class WebpressTheme {
  @Prop() object : Single | MenuItem;

  @Prop() path : string;

  @Event() webpressNavigation: EventEmitter<{ url }>;

  anchor

  private clicked(e: MouseEvent) {
    console.log(e)
    e.preventDefault()
    let url = new URL(this.object ? this.object.link : "http://" +window.location.hostname + this.path)
    this.webpressNavigation.emit({url: url.pathname});
  }

  render() {
    return (
      <a ref={ref => this.anchor = ref } onClick={e => this.clicked(e)} href={this.object ? this.object.link : this.path}>
        <slot />
      </a>
    )
  }

}
