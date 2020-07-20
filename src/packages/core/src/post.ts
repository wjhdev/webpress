import WPAPI from 'wpapi'
import { WebpressObject } from './object'

export interface Single extends WebpressObject {
    readonly title: string 
    readonly subhead: string 
    readonly featuredMedia: number 
    readonly content: string 
    readonly id: number
    readonly author : number
    readonly excerpt: string
}

export class Post implements Single {
    constructor(private wpapiPost?: any) { }
    
    static fromList(posts : WPAPI.WPRequest[]) {
        return posts.map(post => {return new Post(post)})
    }

    get title() : string {
        return this.wpapiPost.title.rendered
    }

    get excerpt() : string {
        return this.wpapiPost.excerpt.rendered
    }

    get subhead() : string {
        return this.wpapiPost.subhead
    }

    get featuredMedia() : number {
        return this.wpapiPost.featured_media
    }

    get url() : string {
        return this.wpapiPost.link
    } 
    
    get author() : number {
        return this.wpapiPost.author
    }    

    get id() : number {
        return parseInt(this.wpapiPost.ID,10)
    }

    get content() : string {
        return this.wpapiPost.content.rendered
    }
}

export class Page implements Single {
    constructor(private wpapiPage?: any) { }
    
    static fromList(posts : WPAPI.WPRequest[]) {
        return posts.map(post => {return new Post(post)})
    }

    get title() : string {
        return this.wpapiPage.title.rendered
    }

    get excerpt() : string {
        return this.wpapiPage.excerpt.rendered
    }

    get subhead() : string {
        return this.wpapiPage.subhead
    }

    get featuredMedia() : number {
        return this.wpapiPage.featured_media
    }

    get url() : string {
        return this.wpapiPage.link
    } 
    
    get author() : number {
        return this.wpapiPage.author
    }    

    get id() : number {
        return parseInt(this.wpapiPage.ID,10)
    }

    get content() : string {
        return this.wpapiPage.content.rendered
    }
}

export class WebMedia {
    readonly author: string ;
    
    constructor(private wpmedia?: any) { }

    get url() {
        return this.wpmedia.source_url
    }

    size() {

    }
}
