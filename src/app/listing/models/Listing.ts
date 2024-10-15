export interface Listing {
    // identifier in route and in html
    slug: string;
    // title "Marketplace Studio"
    // slug "marketplace-studio"
    title: string;
    subtitle: string;
    summary: string;
    description: string;
    link: string;
    pictures: string[];
    tags: string[];
    tagColor: string;
    cardColor: string;
}