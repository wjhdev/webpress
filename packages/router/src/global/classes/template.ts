import { Query } from "@webpress/core"

export interface QueryContextual {
    query: Query
}

export interface TemplateContextual {
    args: TemplateArgs
    query: Query
    hidden: boolean
}

export enum TemplateType {
    FrontPage = 1,
    Search = 2,
    Archive = 3,
    Blog = 4,
    Single = 5,
    PageNotFound = 0
}

export enum TemplateSingleType {
    Page = 1,
    Post = 2,
    Attachment = 3,
    Custom = 4,
    None = 0,
}

export enum TemplateFrontPageType {
    Home = 1,
    Page = 2,
    None = 0,
}

export enum TemplateArchiveType {
    Author,
    Category,
    CustomPostType,
    Date,
    Tag
}

export enum TemplateArchiveDateType {
    None,
    Year,
    Month,
    Day
}

export interface TemplateArgs {
    type: TemplateType
    singleType?: TemplateSingleType
    frontPageType?: TemplateFrontPageType
    archiveType?: TemplateArchiveType 
    archiveDateType?: TemplateArchiveDateType 

    slug?: string
    postType?: string
    nicename?: string
    id?: string
    taxonomy?: string 
    taxonomyTerm?: string
}
export class TemplateArgs implements TemplateArgs { 
    frontPageType? = TemplateFrontPageType.None
    singleType? = TemplateSingleType.None

    constructor(json) {
        this.type = json.type;
        this.singleType = json.singleType ? json.singleType : TemplateSingleType.None;
        this.frontPageType = json.frontPageType ? json.frontPageType : TemplateFrontPageType.None;
        console.log("created",this,json)
    }

    matchScore(template: TemplateArgs) {
        if(!template) {
            return -1
        }

        let score = 0;
        
        switch (this.type) {
            case TemplateType.FrontPage: {
                if (this.frontPageType == TemplateFrontPageType.Home) {
                    if(template.type != TemplateType.FrontPage) {
                        score = -999
                    } else if(template.frontPageType && template.frontPageType == this.frontPageType) {
                        score = 40;
                    }
                } else if(this.frontPageType == TemplateFrontPageType.Page) {
                    if(template.type == TemplateType.Single && template.singleType && template.singleType == TemplateSingleType.Page) {
                        score = 40;
                    }
                    else if(template.frontPageType && template.frontPageType == TemplateFrontPageType.Page) {
                        score = 60;
                    }
                }
            }
            break;
            case TemplateType.Single: {
                if(template.type != TemplateType.Single) {
                    return -999;
                }
                if(template.singleType && template.singleType !== this.singleType) {
                    score = -99
                } else if(template.singleType != TemplateSingleType.None && template.singleType === this.singleType) {
                    score = 20
                } else {
                    score = 10
                }
            }
        
            break;

            default:
                score = -99
            break;
        }

  
        console.log("this", this, "template", template, "score", score)

        return score;
    }
}

export class Template {
    query : Query
    args : TemplateArgs

    constructor(json) {
        this.query = json.query
        this.args = new TemplateArgs(json.args)
    }
}
