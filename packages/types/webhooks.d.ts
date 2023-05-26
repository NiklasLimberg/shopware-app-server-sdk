export interface CheckoutCustomerBeforeLogin {
    data: {
        payload: unknown;
        event: "checkout.customer.before.login";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CheckoutCustomerChangedPaymentMethod {
    data: {
        payload: unknown;
        event: "checkout.customer.changed-payment-method";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CheckoutCustomerDeleted {
    data: {
        payload: unknown;
        event: "checkout.customer.deleted";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CheckoutCustomerDoubleOptInGuestOrder {
    data: {
        payload: unknown;
        event: "checkout.customer.double_opt_in_guest_order";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CheckoutCustomerDoubleOptInRegistration {
    data: {
        payload: unknown;
        event: "checkout.customer.double_opt_in_registration";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CheckoutCustomerGuestRegister {
    data: {
        payload: unknown;
        event: "checkout.customer.guest_register";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CheckoutCustomerLogin {
    data: {
        payload: unknown;
        event: "checkout.customer.login";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CheckoutCustomerLogout {
    data: {
        payload: unknown;
        event: "checkout.customer.logout";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CheckoutCustomerRegister {
    data: {
        payload: unknown;
        event: "checkout.customer.register";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CheckoutOrderPaymentMethodChanged {
    data: {
        payload: unknown;
        event: "checkout.order.payment_method.changed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CheckoutOrderPlaced {
    data: {
        payload: unknown;
        event: "checkout.order.placed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface ContactFormSend {
    data: {
        payload: unknown;
        event: "contact_form.send";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CustomerGroupRegistrationAccepted {
    data: {
        payload: unknown;
        event: "customer.group.registration.accepted";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CustomerGroupRegistrationDeclined {
    data: {
        payload: unknown;
        event: "customer.group.registration.declined";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface CustomerRecoveryRequest {
    data: {
        payload: unknown;
        event: "customer.recovery.request";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface MailAfterCreateMessage {
    data: {
        payload: unknown;
        event: "mail.after.create.message";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface MailBeforeSend {
    data: {
        payload: unknown;
        event: "mail.before.send";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface MailSent {
    data: {
        payload: unknown;
        event: "mail.sent";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface NewsletterConfirm {
    data: {
        payload: unknown;
        event: "newsletter.confirm";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface NewsletterRegister {
    data: {
        payload: unknown;
        event: "newsletter.register";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface NewsletterUnsubscribe {
    data: {
        payload: unknown;
        event: "newsletter.unsubscribe";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface ProductExportLog {
    data: {
        payload: unknown;
        event: "product_export.log";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface ReviewFormSend {
    data: {
        payload: unknown;
        event: "review_form.send";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderStateCancelled {
    data: {
        payload: unknown;
        event: "state_enter.order.state.cancelled";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderStateCompleted {
    data: {
        payload: unknown;
        event: "state_enter.order.state.completed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderStateInProgress {
    data: {
        payload: unknown;
        event: "state_enter.order.state.in_progress";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderStateOpen {
    data: {
        payload: unknown;
        event: "state_enter.order.state.open";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderDeliveryStateCancelled {
    data: {
        payload: unknown;
        event: "state_enter.order_delivery.state.cancelled";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderDeliveryStateOpen {
    data: {
        payload: unknown;
        event: "state_enter.order_delivery.state.open";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderDeliveryStateReturned {
    data: {
        payload: unknown;
        event: "state_enter.order_delivery.state.returned";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderDeliveryStateReturnedPartially {
    data: {
        payload: unknown;
        event: "state_enter.order_delivery.state.returned_partially";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderDeliveryStateShipped {
    data: {
        payload: unknown;
        event: "state_enter.order_delivery.state.shipped";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderDeliveryStateShippedPartially {
    data: {
        payload: unknown;
        event: "state_enter.order_delivery.state.shipped_partially";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderLineItemStateCancelled {
    data: {
        payload: unknown;
        event: "state_enter.order_line_item.state.cancelled";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderLineItemStateOpen {
    data: {
        payload: unknown;
        event: "state_enter.order_line_item.state.open";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderLineItemStateReturnRequested {
    data: {
        payload: unknown;
        event: "state_enter.order_line_item.state.return_requested";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderLineItemStateReturned {
    data: {
        payload: unknown;
        event: "state_enter.order_line_item.state.returned";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderLineItemStateReturnedPartially {
    data: {
        payload: unknown;
        event: "state_enter.order_line_item.state.returned_partially";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderLineItemStateShipped {
    data: {
        payload: unknown;
        event: "state_enter.order_line_item.state.shipped";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderLineItemStateShippedPartially {
    data: {
        payload: unknown;
        event: "state_enter.order_line_item.state.shipped_partially";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderReturnStateCancelled {
    data: {
        payload: unknown;
        event: "state_enter.order_return.state.cancelled";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderReturnStateDone {
    data: {
        payload: unknown;
        event: "state_enter.order_return.state.done";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderReturnStateInProgress {
    data: {
        payload: unknown;
        event: "state_enter.order_return.state.in_progress";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderReturnStateOpen {
    data: {
        payload: unknown;
        event: "state_enter.order_return.state.open";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionStateAuthorized {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction.state.authorized";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionStateCancelled {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction.state.cancelled";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionStateChargeback {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction.state.chargeback";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionStateFailed {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction.state.failed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionStateInProgress {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction.state.in_progress";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionStateOpen {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction.state.open";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionStatePaid {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction.state.paid";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionStatePaidPartially {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction.state.paid_partially";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionStateRefunded {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction.state.refunded";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionStateRefundedPartially {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction.state.refunded_partially";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionStateReminded {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction.state.reminded";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionStateUnconfirmed {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction.state.unconfirmed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionCaptureStateCompleted {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction_capture.state.completed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionCaptureStateFailed {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction_capture.state.failed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionCaptureStatePending {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction_capture.state.pending";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionCaptureRefundStateCancelled {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction_capture_refund.state.cancelled";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionCaptureRefundStateCompleted {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction_capture_refund.state.completed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionCaptureRefundStateFailed {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction_capture_refund.state.failed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionCaptureRefundStateInProgress {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction_capture_refund.state.in_progress";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateEnterOrderTransactionCaptureRefundStateOpen {
    data: {
        payload: unknown;
        event: "state_enter.order_transaction_capture_refund.state.open";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderStateCancelled {
    data: {
        payload: unknown;
        event: "state_leave.order.state.cancelled";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderStateCompleted {
    data: {
        payload: unknown;
        event: "state_leave.order.state.completed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderStateInProgress {
    data: {
        payload: unknown;
        event: "state_leave.order.state.in_progress";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderStateOpen {
    data: {
        payload: unknown;
        event: "state_leave.order.state.open";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderDeliveryStateCancelled {
    data: {
        payload: unknown;
        event: "state_leave.order_delivery.state.cancelled";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderDeliveryStateOpen {
    data: {
        payload: unknown;
        event: "state_leave.order_delivery.state.open";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderDeliveryStateReturned {
    data: {
        payload: unknown;
        event: "state_leave.order_delivery.state.returned";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderDeliveryStateReturnedPartially {
    data: {
        payload: unknown;
        event: "state_leave.order_delivery.state.returned_partially";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderDeliveryStateShipped {
    data: {
        payload: unknown;
        event: "state_leave.order_delivery.state.shipped";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderDeliveryStateShippedPartially {
    data: {
        payload: unknown;
        event: "state_leave.order_delivery.state.shipped_partially";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderLineItemStateCancelled {
    data: {
        payload: unknown;
        event: "state_leave.order_line_item.state.cancelled";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderLineItemStateOpen {
    data: {
        payload: unknown;
        event: "state_leave.order_line_item.state.open";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderLineItemStateReturnRequested {
    data: {
        payload: unknown;
        event: "state_leave.order_line_item.state.return_requested";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderLineItemStateReturned {
    data: {
        payload: unknown;
        event: "state_leave.order_line_item.state.returned";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderLineItemStateReturnedPartially {
    data: {
        payload: unknown;
        event: "state_leave.order_line_item.state.returned_partially";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderLineItemStateShipped {
    data: {
        payload: unknown;
        event: "state_leave.order_line_item.state.shipped";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderLineItemStateShippedPartially {
    data: {
        payload: unknown;
        event: "state_leave.order_line_item.state.shipped_partially";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderReturnStateCancelled {
    data: {
        payload: unknown;
        event: "state_leave.order_return.state.cancelled";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderReturnStateDone {
    data: {
        payload: unknown;
        event: "state_leave.order_return.state.done";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderReturnStateInProgress {
    data: {
        payload: unknown;
        event: "state_leave.order_return.state.in_progress";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderReturnStateOpen {
    data: {
        payload: unknown;
        event: "state_leave.order_return.state.open";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionStateAuthorized {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction.state.authorized";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionStateCancelled {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction.state.cancelled";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionStateChargeback {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction.state.chargeback";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionStateFailed {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction.state.failed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionStateInProgress {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction.state.in_progress";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionStateOpen {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction.state.open";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionStatePaid {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction.state.paid";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionStatePaidPartially {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction.state.paid_partially";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionStateRefunded {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction.state.refunded";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionStateRefundedPartially {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction.state.refunded_partially";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionStateReminded {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction.state.reminded";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionStateUnconfirmed {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction.state.unconfirmed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionCaptureStateCompleted {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction_capture.state.completed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionCaptureStateFailed {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction_capture.state.failed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionCaptureStatePending {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction_capture.state.pending";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionCaptureRefundStateCancelled {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction_capture_refund.state.cancelled";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionCaptureRefundStateCompleted {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction_capture_refund.state.completed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionCaptureRefundStateFailed {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction_capture_refund.state.failed";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionCaptureRefundStateInProgress {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction_capture_refund.state.in_progress";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface StateLeaveOrderTransactionCaptureRefundStateOpen {
    data: {
        payload: unknown;
        event: "state_leave.order_transaction_capture_refund.state.open";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface UserRecoveryRequest {
    data: {
        payload: unknown;
        event: "user.recovery.request";
    };
    source: {
        url: string;
        eventId: string;
        appVersion: string;
        shopId: string;
    };
    timestamp: number;
}

export interface Events {
    "checkout.customer.before.login": CheckoutCustomerBeforeLogin;
    "checkout.customer.changed-payment-method": CheckoutCustomerChangedPaymentMethod;
    "checkout.customer.deleted": CheckoutCustomerDeleted;
    "checkout.customer.double_opt_in_guest_order": CheckoutCustomerDoubleOptInGuestOrder;
    "checkout.customer.double_opt_in_registration": CheckoutCustomerDoubleOptInRegistration;
    "checkout.customer.guest_register": CheckoutCustomerGuestRegister;
    "checkout.customer.login": CheckoutCustomerLogin;
    "checkout.customer.logout": CheckoutCustomerLogout;
    "checkout.customer.register": CheckoutCustomerRegister;
    "checkout.order.payment_method.changed": CheckoutOrderPaymentMethodChanged;
    "checkout.order.placed": CheckoutOrderPlaced;
    "contact_form.send": ContactFormSend;
    "customer.group.registration.accepted": CustomerGroupRegistrationAccepted;
    "customer.group.registration.declined": CustomerGroupRegistrationDeclined;
    "customer.recovery.request": CustomerRecoveryRequest;
    "mail.after.create.message": MailAfterCreateMessage;
    "mail.before.send": MailBeforeSend;
    "mail.sent": MailSent;
    "newsletter.confirm": NewsletterConfirm;
    "newsletter.register": NewsletterRegister;
    "newsletter.unsubscribe": NewsletterUnsubscribe;
    "product_export.log": ProductExportLog;
    "review_form.send": ReviewFormSend;
    "state_enter.order.state.cancelled": StateEnterOrderStateCancelled;
    "state_enter.order.state.completed": StateEnterOrderStateCompleted;
    "state_enter.order.state.in_progress": StateEnterOrderStateInProgress;
    "state_enter.order.state.open": StateEnterOrderStateOpen;
    "state_enter.order_delivery.state.cancelled": StateEnterOrderDeliveryStateCancelled;
    "state_enter.order_delivery.state.open": StateEnterOrderDeliveryStateOpen;
    "state_enter.order_delivery.state.returned": StateEnterOrderDeliveryStateReturned;
    "state_enter.order_delivery.state.returned_partially": StateEnterOrderDeliveryStateReturnedPartially;
    "state_enter.order_delivery.state.shipped": StateEnterOrderDeliveryStateShipped;
    "state_enter.order_delivery.state.shipped_partially": StateEnterOrderDeliveryStateShippedPartially;
    "state_enter.order_line_item.state.cancelled": StateEnterOrderLineItemStateCancelled;
    "state_enter.order_line_item.state.open": StateEnterOrderLineItemStateOpen;
    "state_enter.order_line_item.state.return_requested": StateEnterOrderLineItemStateReturnRequested;
    "state_enter.order_line_item.state.returned": StateEnterOrderLineItemStateReturned;
    "state_enter.order_line_item.state.returned_partially": StateEnterOrderLineItemStateReturnedPartially;
    "state_enter.order_line_item.state.shipped": StateEnterOrderLineItemStateShipped;
    "state_enter.order_line_item.state.shipped_partially": StateEnterOrderLineItemStateShippedPartially;
    "state_enter.order_return.state.cancelled": StateEnterOrderReturnStateCancelled;
    "state_enter.order_return.state.done": StateEnterOrderReturnStateDone;
    "state_enter.order_return.state.in_progress": StateEnterOrderReturnStateInProgress;
    "state_enter.order_return.state.open": StateEnterOrderReturnStateOpen;
    "state_enter.order_transaction.state.authorized": StateEnterOrderTransactionStateAuthorized;
    "state_enter.order_transaction.state.cancelled": StateEnterOrderTransactionStateCancelled;
    "state_enter.order_transaction.state.chargeback": StateEnterOrderTransactionStateChargeback;
    "state_enter.order_transaction.state.failed": StateEnterOrderTransactionStateFailed;
    "state_enter.order_transaction.state.in_progress": StateEnterOrderTransactionStateInProgress;
    "state_enter.order_transaction.state.open": StateEnterOrderTransactionStateOpen;
    "state_enter.order_transaction.state.paid": StateEnterOrderTransactionStatePaid;
    "state_enter.order_transaction.state.paid_partially": StateEnterOrderTransactionStatePaidPartially;
    "state_enter.order_transaction.state.refunded": StateEnterOrderTransactionStateRefunded;
    "state_enter.order_transaction.state.refunded_partially": StateEnterOrderTransactionStateRefundedPartially;
    "state_enter.order_transaction.state.reminded": StateEnterOrderTransactionStateReminded;
    "state_enter.order_transaction.state.unconfirmed": StateEnterOrderTransactionStateUnconfirmed;
    "state_enter.order_transaction_capture.state.completed": StateEnterOrderTransactionCaptureStateCompleted;
    "state_enter.order_transaction_capture.state.failed": StateEnterOrderTransactionCaptureStateFailed;
    "state_enter.order_transaction_capture.state.pending": StateEnterOrderTransactionCaptureStatePending;
    "state_enter.order_transaction_capture_refund.state.cancelled": StateEnterOrderTransactionCaptureRefundStateCancelled;
    "state_enter.order_transaction_capture_refund.state.completed": StateEnterOrderTransactionCaptureRefundStateCompleted;
    "state_enter.order_transaction_capture_refund.state.failed": StateEnterOrderTransactionCaptureRefundStateFailed;
    "state_enter.order_transaction_capture_refund.state.in_progress": StateEnterOrderTransactionCaptureRefundStateInProgress;
    "state_enter.order_transaction_capture_refund.state.open": StateEnterOrderTransactionCaptureRefundStateOpen;
    "state_leave.order.state.cancelled": StateLeaveOrderStateCancelled;
    "state_leave.order.state.completed": StateLeaveOrderStateCompleted;
    "state_leave.order.state.in_progress": StateLeaveOrderStateInProgress;
    "state_leave.order.state.open": StateLeaveOrderStateOpen;
    "state_leave.order_delivery.state.cancelled": StateLeaveOrderDeliveryStateCancelled;
    "state_leave.order_delivery.state.open": StateLeaveOrderDeliveryStateOpen;
    "state_leave.order_delivery.state.returned": StateLeaveOrderDeliveryStateReturned;
    "state_leave.order_delivery.state.returned_partially": StateLeaveOrderDeliveryStateReturnedPartially;
    "state_leave.order_delivery.state.shipped": StateLeaveOrderDeliveryStateShipped;
    "state_leave.order_delivery.state.shipped_partially": StateLeaveOrderDeliveryStateShippedPartially;
    "state_leave.order_line_item.state.cancelled": StateLeaveOrderLineItemStateCancelled;
    "state_leave.order_line_item.state.open": StateLeaveOrderLineItemStateOpen;
    "state_leave.order_line_item.state.return_requested": StateLeaveOrderLineItemStateReturnRequested;
    "state_leave.order_line_item.state.returned": StateLeaveOrderLineItemStateReturned;
    "state_leave.order_line_item.state.returned_partially": StateLeaveOrderLineItemStateReturnedPartially;
    "state_leave.order_line_item.state.shipped": StateLeaveOrderLineItemStateShipped;
    "state_leave.order_line_item.state.shipped_partially": StateLeaveOrderLineItemStateShippedPartially;
    "state_leave.order_return.state.cancelled": StateLeaveOrderReturnStateCancelled;
    "state_leave.order_return.state.done": StateLeaveOrderReturnStateDone;
    "state_leave.order_return.state.in_progress": StateLeaveOrderReturnStateInProgress;
    "state_leave.order_return.state.open": StateLeaveOrderReturnStateOpen;
    "state_leave.order_transaction.state.authorized": StateLeaveOrderTransactionStateAuthorized;
    "state_leave.order_transaction.state.cancelled": StateLeaveOrderTransactionStateCancelled;
    "state_leave.order_transaction.state.chargeback": StateLeaveOrderTransactionStateChargeback;
    "state_leave.order_transaction.state.failed": StateLeaveOrderTransactionStateFailed;
    "state_leave.order_transaction.state.in_progress": StateLeaveOrderTransactionStateInProgress;
    "state_leave.order_transaction.state.open": StateLeaveOrderTransactionStateOpen;
    "state_leave.order_transaction.state.paid": StateLeaveOrderTransactionStatePaid;
    "state_leave.order_transaction.state.paid_partially": StateLeaveOrderTransactionStatePaidPartially;
    "state_leave.order_transaction.state.refunded": StateLeaveOrderTransactionStateRefunded;
    "state_leave.order_transaction.state.refunded_partially": StateLeaveOrderTransactionStateRefundedPartially;
    "state_leave.order_transaction.state.reminded": StateLeaveOrderTransactionStateReminded;
    "state_leave.order_transaction.state.unconfirmed": StateLeaveOrderTransactionStateUnconfirmed;
    "state_leave.order_transaction_capture.state.completed": StateLeaveOrderTransactionCaptureStateCompleted;
    "state_leave.order_transaction_capture.state.failed": StateLeaveOrderTransactionCaptureStateFailed;
    "state_leave.order_transaction_capture.state.pending": StateLeaveOrderTransactionCaptureStatePending;
    "state_leave.order_transaction_capture_refund.state.cancelled": StateLeaveOrderTransactionCaptureRefundStateCancelled;
    "state_leave.order_transaction_capture_refund.state.completed": StateLeaveOrderTransactionCaptureRefundStateCompleted;
    "state_leave.order_transaction_capture_refund.state.failed": StateLeaveOrderTransactionCaptureRefundStateFailed;
    "state_leave.order_transaction_capture_refund.state.in_progress": StateLeaveOrderTransactionCaptureRefundStateInProgress;
    "state_leave.order_transaction_capture_refund.state.open": StateLeaveOrderTransactionCaptureRefundStateOpen;
    "user.recovery.request": UserRecoveryRequest;
}

