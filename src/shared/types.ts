export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
}

export interface BenefitCardType {
    id : number;
    icon: JSX.Element;
    title : string;
    description : string;
    link : {
        title : string;
        to : SelectedPage
    }
}

export interface ClassType{
    id: number;
    name: string;
    description?: string;
    image: string;
}