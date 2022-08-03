export declare type Distance = {
    actual_distance: number;
    calculated_distance: number;
    duration: string;
    delivery_cost: {
        base_rate: number;
        per_km: number;
    };
    total_delivery_cost: number;
};
export declare type DistanceRequest = {
    pickup_address: {
        latitude: string;
        longitude: string;
    };
    delivery_address: {
        latitude: string;
        longitude: string;
    };
};
