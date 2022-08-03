import { Base } from "../base";
import { NewDeliveryRequest, DeliveryRequest } from "../models/delivery-request";
import { DistanceRequest, Distance } from "../models/distance";

const resourceName = "delivery-requests";

export class DeliveryRequests extends Base {
    /**
    * Get a list of delivary requests
    * @param {number} id - The user_id of the user.
    * @return {Promise<DeliveryRequest>}
    */
    getDeliveryRequestById(id: number): Promise<DeliveryRequest> {
        return this.request(`/${resourceName}/${id}`);
    }

    /**
    * Get a list of delivary requests
    * @return {PromPromise<DeliveryRequest[]>}
    */
    getDeliveryRequests(): Promise<DeliveryRequest[]> {
        return this.request(`/${resourceName}`);
    }

    /**
    * Create new Delivery Request
    * @return {Promise<DeliveryRequest>}
    */
    createDeliveryRequest(newPost: NewDeliveryRequest): Promise<DeliveryRequest> {
        return this.request(`/${resourceName}`, {
            method: "POST",
            body: JSON.stringify(newPost),
        });
    }

    /**
     * Get Distance and Delivery Cost
     * @param {DistanceRequest} newPost - The pickup and delivery address.
     * @return {Promise<Distance>}
     */
    calculateDistance(newPost: DistanceRequest): Promise<Distance> {
        return this.request(`/${resourceName}/distance`, {
            method: "POST",
            body: JSON.stringify(newPost),
        });
    }
}