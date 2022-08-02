import { Base } from "./base";
import { DeliveryRequests } from "./deliveryRequests";
import { applyMixins } from "./utils";

class Mpost extends Base {}
interface Mpost extends DeliveryRequests {}

applyMixins(Mpost, [DeliveryRequests]);

export default Mpost;