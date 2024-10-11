import { useState } from 'react';

interface OrderStatusProps {
 
  initialDeliveryStatus: string;
}

const OrderStatus: React.FC<OrderStatusProps> = ({
 
  initialDeliveryStatus,
}) => {
 
  const [deliveryStatus, setDeliveryStatus] = useState(initialDeliveryStatus);

  

  const handleDeliveryStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDeliveryStatus(e.target.value);
  };

  return (
   
     
      <div className="col-lg-4 col-sm-6">
        <div className="form-group">
          <select
            className="form-control form-control-sm"
            id="update_delivery_status"
            value={deliveryStatus}
            onChange={handleDeliveryStatusChange}
          >
            <option value="cancelled">Cancelled</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="picked_up">Picked Up</option>
            <option value="on_the_way">On The Way</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
   
  );
};

export default OrderStatus;