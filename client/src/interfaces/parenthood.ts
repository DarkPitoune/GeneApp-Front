import { Profile } from "./profile";

export interface Parenthood {
    child: string,
    collectionId: string,
    collectionName: 'parenthoods',
    created: string,
    expand: { child: Profile },
    id: string,
    mariage: string,
    updated: string
}