import { Base } from "../base";
import { NewDeliveryRequest, DeliveryRequest } from "../models/delivery-request";
import { DistanceRequest, Distance } from "../models/distance";

const resourceName = "posts";

export class DeliveryRequests extends Base {
    getDeliveryRequestById(id: number): Promise<DeliveryRequest> {
        return this.request(`/${resourceName}/${id}`);
    }

    getDeliveryRequests(): Promise<DeliveryRequest[]> {
        return this.request(`/${resourceName}`);
    }

    createDeliveryRequest(newPost: NewDeliveryRequest): Promise<DeliveryRequest> {
        return this.request(`/${resourceName}`, {
            method: "POST",
            body: JSON.stringify(newPost),
        });
    }

    calculateDistance(newPost: DistanceRequest): Promise<Distance> {
        return this.request(`/${resourceName}/distance`, {
            method: "POST",
            body: JSON.stringify(newPost),
        });
    }
}