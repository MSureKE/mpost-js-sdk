import { Base } from "../base";
import { NewDeliveryRequest, DeliveryRequest } from "../models/delivery-request";
import { DistanceRequest, Distance } from "../models/distance";
export declare class DeliveryRequests extends Base {
    getDeliveryRequestById(id: number): Promise<DeliveryRequest>;
    getDeliveryRequests(): Promise<DeliveryRequest[]>;
    createDeliveryRequest(newPost: NewDeliveryRequest): Promise<DeliveryRequest>;
    calculateDistance(newPost: DistanceRequest): Promise<Distance>;
}
