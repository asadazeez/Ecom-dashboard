import { useState } from 'react';

interface OrderStatusProps {
  initialPaymentType: string;
  initialPaymentStatus: string;
  initialDeliveryStatus: string;
}

const OrderStatus: React.FC<OrderStatusProps> = ({
  initialPaymentType,
  initialPaymentStatus,
  initialDeliveryStatus,
}) => {
  const [paymentType] = useState(initialPaymentType);
  const [paymentStatus, setPaymentStatus] = useState(initialPaymentStatus);
  const [deliveryStatus, setDeliveryStatus] = useState(initialDeliveryStatus);

  const handlePaymentStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentStatus(e.target.value);
  };

  const handleDeliveryStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDeliveryStatus(e.target.value);
  };

  return (
    <div className="row mt-5">
      {paymentType === 'cash_on_delivery' && (
        <div className="offset-lg-2 col-lg-4 col-sm-6">
          <div className="form-group">
            <select
              className="form-control form-control-sm"
              id="update_payment_status"
              value={paymentStatus}
              onChange={handlePaymentStatusChange}
            >
              <option value="unpaid">Unpaid</option>
              <option value="paid">Paid</option>
            </select>
            <label>Payment Status</label>
          </div>
        </div>
      )}
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
    </div>  
  );
};

export default OrderStatus;