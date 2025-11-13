import type { Bucket } from "./bucket";
import type { TypeOfStorage } from "./storageType";
import type { StoreType } from "./storeType";
import type { Water } from "./water";

export interface Brief {
    id: number;
    storeType: StoreType;
    name: string;
    image: string;
    buckets: number;
    yellowKeychain: boolean;
    typeOfStorage: TypeOfStorage;
    water: Water;
    typeOfBucket: Bucket;
    bouquets: number;
    colors: number,
    length: number,
    addInfo: string | null;
}
