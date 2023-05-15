export interface CheckoutCustomerBeforeLogin {
    email: string;
}

export interface CheckoutCustomerChangedPaymentMethod {
    customer: unknown;
}

export interface CheckoutCustomerDeleted {
    customer: unknown;
}

export interface CheckoutCustomerDoubleOptInGuestOrder {
    customer: unknown;
    confirmUrl: string;
}

export interface CheckoutCustomerDoubleOptInRegistration {
    customer: unknown;
    confirmUrl: string;
}

export interface CheckoutCustomerGuestRegister {
    customer: unknown;
}

export interface CheckoutCustomerLogin {
    customer: unknown;
    contextToken: string;
}

export interface CheckoutCustomerLogout {
    customer: unknown;
}

export interface CheckoutCustomerRegister {
    customer: unknown;
}

export interface CheckoutOrderPaymentMethodChanged {
    order: unknown;
    orderTransaction: unknown;
}

export interface CheckoutOrderPlaced {
    order: unknown;
}

export interface ContactFormSend {
    contactFormData: unknown;
}

export interface CustomerGroupRegistrationAccepted {
    customer: unknown;
    customerGroup: unknown;
}

export interface CustomerGroupRegistrationDeclined {
    customer: unknown;
    customerGroup: unknown;
}

export interface CustomerRecoveryRequest {
    customerRecovery: unknown;
    customer: unknown;
    resetUrl: string;
    shopName: string;
}

export interface MailAfterCreateMessage {
    data: string[];
    message: unknown;
}

export interface MailBeforeSend {
    data: string[];
    templateData: string[];
}

export interface MailSent {
    subject: string;
    contents: string;
    recipients: string[];
}

export interface NewsletterConfirm {
    newsletterRecipient: unknown;
}

export interface NewsletterRegister {
    newsletterRecipient: unknown;
    url: string;
}

export interface NewsletterUnsubscribe {
    newsletterRecipient: unknown;
}

export interface ProductExportLog {
    name: string;
}

export interface ReviewFormSend {
    reviewFormData: unknown;
    product: unknown;
}

export interface StateEnterOrderStateCancelled {
    order: unknown;
}

export interface StateEnterOrderStateCompleted {
    order: unknown;
}

export interface StateEnterOrderStateInProgress {
    order: unknown;
}

export interface StateEnterOrderStateOpen {
    order: unknown;
}

export interface StateEnterOrderDeliveryStateCancelled {
    order: unknown;
}

export interface StateEnterOrderDeliveryStateOpen {
    order: unknown;
}

export interface StateEnterOrderDeliveryStateReturned {
    order: unknown;
}

export interface StateEnterOrderDeliveryStateReturnedPartially {
    order: unknown;
}

export interface StateEnterOrderDeliveryStateShipped {
    order: unknown;
}

export interface StateEnterOrderDeliveryStateShippedPartially {
    order: unknown;
}

export interface StateEnterOrderLineItemStateCancelled {
    order: unknown;
}

export interface StateEnterOrderLineItemStateOpen {
    order: unknown;
}

export interface StateEnterOrderLineItemStateReturnRequested {
    order: unknown;
}

export interface StateEnterOrderLineItemStateReturned {
    order: unknown;
}

export interface StateEnterOrderLineItemStateReturnedPartially {
    order: unknown;
}

export interface StateEnterOrderLineItemStateShipped {
    order: unknown;
}

export interface StateEnterOrderLineItemStateShippedPartially {
    order: unknown;
}

export interface StateEnterOrderReturnStateCancelled {
    order: unknown;
}

export interface StateEnterOrderReturnStateDone {
    order: unknown;
}

export interface StateEnterOrderReturnStateInProgress {
    order: unknown;
}

export interface StateEnterOrderReturnStateOpen {
    order: unknown;
}

export interface StateEnterOrderTransactionStateAuthorized {
    order: unknown;
}

export interface StateEnterOrderTransactionStateCancelled {
    order: unknown;
}

export interface StateEnterOrderTransactionStateChargeback {
    order: unknown;
}

export interface StateEnterOrderTransactionStateFailed {
    order: unknown;
}

export interface StateEnterOrderTransactionStateInProgress {
    order: unknown;
}

export interface StateEnterOrderTransactionStateOpen {
    order: unknown;
}

export interface StateEnterOrderTransactionStatePaid {
    order: unknown;
}

export interface StateEnterOrderTransactionStatePaidPartially {
    order: unknown;
}

export interface StateEnterOrderTransactionStateRefunded {
    order: unknown;
}

export interface StateEnterOrderTransactionStateRefundedPartially {
    order: unknown;
}

export interface StateEnterOrderTransactionStateReminded {
    order: unknown;
}

export interface StateEnterOrderTransactionStateUnconfirmed {
    order: unknown;
}

export interface StateEnterOrderTransactionCaptureStateCompleted {
    order: unknown;
}

export interface StateEnterOrderTransactionCaptureStateFailed {
    order: unknown;
}

export interface StateEnterOrderTransactionCaptureStatePending {
    order: unknown;
}

export interface StateEnterOrderTransactionCaptureRefundStateCancelled {
    order: unknown;
}

export interface StateEnterOrderTransactionCaptureRefundStateCompleted {
    order: unknown;
}

export interface StateEnterOrderTransactionCaptureRefundStateFailed {
    order: unknown;
}

export interface StateEnterOrderTransactionCaptureRefundStateInProgress {
    order: unknown;
}

export interface StateEnterOrderTransactionCaptureRefundStateOpen {
    order: unknown;
}

export interface StateLeaveOrderStateCancelled {
    order: unknown;
}

export interface StateLeaveOrderStateCompleted {
    order: unknown;
}

export interface StateLeaveOrderStateInProgress {
    order: unknown;
}

export interface StateLeaveOrderStateOpen {
    order: unknown;
}

export interface StateLeaveOrderDeliveryStateCancelled {
    order: unknown;
}

export interface StateLeaveOrderDeliveryStateOpen {
    order: unknown;
}

export interface StateLeaveOrderDeliveryStateReturned {
    order: unknown;
}

export interface StateLeaveOrderDeliveryStateReturnedPartially {
    order: unknown;
}

export interface StateLeaveOrderDeliveryStateShipped {
    order: unknown;
}

export interface StateLeaveOrderDeliveryStateShippedPartially {
    order: unknown;
}

export interface StateLeaveOrderLineItemStateCancelled {
    order: unknown;
}

export interface StateLeaveOrderLineItemStateOpen {
    order: unknown;
}

export interface StateLeaveOrderLineItemStateReturnRequested {
    order: unknown;
}

export interface StateLeaveOrderLineItemStateReturned {
    order: unknown;
}

export interface StateLeaveOrderLineItemStateReturnedPartially {
    order: unknown;
}

export interface StateLeaveOrderLineItemStateShipped {
    order: unknown;
}

export interface StateLeaveOrderLineItemStateShippedPartially {
    order: unknown;
}

export interface StateLeaveOrderReturnStateCancelled {
    order: unknown;
}

export interface StateLeaveOrderReturnStateDone {
    order: unknown;
}

export interface StateLeaveOrderReturnStateInProgress {
    order: unknown;
}

export interface StateLeaveOrderReturnStateOpen {
    order: unknown;
}

export interface StateLeaveOrderTransactionStateAuthorized {
    order: unknown;
}

export interface StateLeaveOrderTransactionStateCancelled {
    order: unknown;
}

export interface StateLeaveOrderTransactionStateChargeback {
    order: unknown;
}

export interface StateLeaveOrderTransactionStateFailed {
    order: unknown;
}

export interface StateLeaveOrderTransactionStateInProgress {
    order: unknown;
}

export interface StateLeaveOrderTransactionStateOpen {
    order: unknown;
}

export interface StateLeaveOrderTransactionStatePaid {
    order: unknown;
}

export interface StateLeaveOrderTransactionStatePaidPartially {
    order: unknown;
}

export interface StateLeaveOrderTransactionStateRefunded {
    order: unknown;
}

export interface StateLeaveOrderTransactionStateRefundedPartially {
    order: unknown;
}

export interface StateLeaveOrderTransactionStateReminded {
    order: unknown;
}

export interface StateLeaveOrderTransactionStateUnconfirmed {
    order: unknown;
}

export interface StateLeaveOrderTransactionCaptureStateCompleted {
    order: unknown;
}

export interface StateLeaveOrderTransactionCaptureStateFailed {
    order: unknown;
}

export interface StateLeaveOrderTransactionCaptureStatePending {
    order: unknown;
}

export interface StateLeaveOrderTransactionCaptureRefundStateCancelled {
    order: unknown;
}

export interface StateLeaveOrderTransactionCaptureRefundStateCompleted {
    order: unknown;
}

export interface StateLeaveOrderTransactionCaptureRefundStateFailed {
    order: unknown;
}

export interface StateLeaveOrderTransactionCaptureRefundStateInProgress {
    order: unknown;
}

export interface StateLeaveOrderTransactionCaptureRefundStateOpen {
    order: unknown;
}

export interface UserRecoveryRequest {
    userRecovery: unknown;
    resetUrl: string;
}

export interface Events {
    'checkout.customer.before.login': CheckoutCustomerBeforeLogin;
    'checkout.customer.changed-payment-method': CheckoutCustomerChangedPaymentMethod;
    'checkout.customer.deleted': CheckoutCustomerDeleted;
    'checkout.customer.double_opt_in_guest_order': CheckoutCustomerDoubleOptInGuestOrder;
    'checkout.customer.double_opt_in_registration': CheckoutCustomerDoubleOptInRegistration;
    'checkout.customer.guest_register': CheckoutCustomerGuestRegister;
    'checkout.customer.login': CheckoutCustomerLogin;
    'checkout.customer.logout': CheckoutCustomerLogout;
    'checkout.customer.register': CheckoutCustomerRegister;
    'checkout.order.payment_method.changed': CheckoutOrderPaymentMethodChanged;
    'checkout.order.placed': CheckoutOrderPlaced;
    'contact_form.send': ContactFormSend;
    'customer.group.registration.accepted': CustomerGroupRegistrationAccepted;
    'customer.group.registration.declined': CustomerGroupRegistrationDeclined;
    'customer.recovery.request': CustomerRecoveryRequest;
    'mail.after.create.message': MailAfterCreateMessage;
    'mail.before.send': MailBeforeSend;
    'mail.sent': MailSent;
    'newsletter.confirm': NewsletterConfirm;
    'newsletter.register': NewsletterRegister;
    'newsletter.unsubscribe': NewsletterUnsubscribe;
    'product_export.log': ProductExportLog;
    'review_form.send': ReviewFormSend;
    'state_enter.order.state.cancelled': StateEnterOrderStateCancelled;
    'state_enter.order.state.completed': StateEnterOrderStateCompleted;
    'state_enter.order.state.in_progress': StateEnterOrderStateInProgress;
    'state_enter.order.state.open': StateEnterOrderStateOpen;
    'state_enter.order_delivery.state.cancelled': StateEnterOrderDeliveryStateCancelled;
    'state_enter.order_delivery.state.open': StateEnterOrderDeliveryStateOpen;
    'state_enter.order_delivery.state.returned': StateEnterOrderDeliveryStateReturned;
    'state_enter.order_delivery.state.returned_partially': StateEnterOrderDeliveryStateReturnedPartially;
    'state_enter.order_delivery.state.shipped': StateEnterOrderDeliveryStateShipped;
    'state_enter.order_delivery.state.shipped_partially': StateEnterOrderDeliveryStateShippedPartially;
    'state_enter.order_line_item.state.cancelled': StateEnterOrderLineItemStateCancelled;
    'state_enter.order_line_item.state.open': StateEnterOrderLineItemStateOpen;
    'state_enter.order_line_item.state.return_requested': StateEnterOrderLineItemStateReturnRequested;
    'state_enter.order_line_item.state.returned': StateEnterOrderLineItemStateReturned;
    'state_enter.order_line_item.state.returned_partially': StateEnterOrderLineItemStateReturnedPartially;
    'state_enter.order_line_item.state.shipped': StateEnterOrderLineItemStateShipped;
    'state_enter.order_line_item.state.shipped_partially': StateEnterOrderLineItemStateShippedPartially;
    'state_enter.order_return.state.cancelled': StateEnterOrderReturnStateCancelled;
    'state_enter.order_return.state.done': StateEnterOrderReturnStateDone;
    'state_enter.order_return.state.in_progress': StateEnterOrderReturnStateInProgress;
    'state_enter.order_return.state.open': StateEnterOrderReturnStateOpen;
    'state_enter.order_transaction.state.authorized': StateEnterOrderTransactionStateAuthorized;
    'state_enter.order_transaction.state.cancelled': StateEnterOrderTransactionStateCancelled;
    'state_enter.order_transaction.state.chargeback': StateEnterOrderTransactionStateChargeback;
    'state_enter.order_transaction.state.failed': StateEnterOrderTransactionStateFailed;
    'state_enter.order_transaction.state.in_progress': StateEnterOrderTransactionStateInProgress;
    'state_enter.order_transaction.state.open': StateEnterOrderTransactionStateOpen;
    'state_enter.order_transaction.state.paid': StateEnterOrderTransactionStatePaid;
    'state_enter.order_transaction.state.paid_partially': StateEnterOrderTransactionStatePaidPartially;
    'state_enter.order_transaction.state.refunded': StateEnterOrderTransactionStateRefunded;
    'state_enter.order_transaction.state.refunded_partially': StateEnterOrderTransactionStateRefundedPartially;
    'state_enter.order_transaction.state.reminded': StateEnterOrderTransactionStateReminded;
    'state_enter.order_transaction.state.unconfirmed': StateEnterOrderTransactionStateUnconfirmed;
    'state_enter.order_transaction_capture.state.completed': StateEnterOrderTransactionCaptureStateCompleted;
    'state_enter.order_transaction_capture.state.failed': StateEnterOrderTransactionCaptureStateFailed;
    'state_enter.order_transaction_capture.state.pending': StateEnterOrderTransactionCaptureStatePending;
    'state_enter.order_transaction_capture_refund.state.cancelled': StateEnterOrderTransactionCaptureRefundStateCancelled;
    'state_enter.order_transaction_capture_refund.state.completed': StateEnterOrderTransactionCaptureRefundStateCompleted;
    'state_enter.order_transaction_capture_refund.state.failed': StateEnterOrderTransactionCaptureRefundStateFailed;
    'state_enter.order_transaction_capture_refund.state.in_progress': StateEnterOrderTransactionCaptureRefundStateInProgress;
    'state_enter.order_transaction_capture_refund.state.open': StateEnterOrderTransactionCaptureRefundStateOpen;
    'state_leave.order.state.cancelled': StateLeaveOrderStateCancelled;
    'state_leave.order.state.completed': StateLeaveOrderStateCompleted;
    'state_leave.order.state.in_progress': StateLeaveOrderStateInProgress;
    'state_leave.order.state.open': StateLeaveOrderStateOpen;
    'state_leave.order_delivery.state.cancelled': StateLeaveOrderDeliveryStateCancelled;
    'state_leave.order_delivery.state.open': StateLeaveOrderDeliveryStateOpen;
    'state_leave.order_delivery.state.returned': StateLeaveOrderDeliveryStateReturned;
    'state_leave.order_delivery.state.returned_partially': StateLeaveOrderDeliveryStateReturnedPartially;
    'state_leave.order_delivery.state.shipped': StateLeaveOrderDeliveryStateShipped;
    'state_leave.order_delivery.state.shipped_partially': StateLeaveOrderDeliveryStateShippedPartially;
    'state_leave.order_line_item.state.cancelled': StateLeaveOrderLineItemStateCancelled;
    'state_leave.order_line_item.state.open': StateLeaveOrderLineItemStateOpen;
    'state_leave.order_line_item.state.return_requested': StateLeaveOrderLineItemStateReturnRequested;
    'state_leave.order_line_item.state.returned': StateLeaveOrderLineItemStateReturned;
    'state_leave.order_line_item.state.returned_partially': StateLeaveOrderLineItemStateReturnedPartially;
    'state_leave.order_line_item.state.shipped': StateLeaveOrderLineItemStateShipped;
    'state_leave.order_line_item.state.shipped_partially': StateLeaveOrderLineItemStateShippedPartially;
    'state_leave.order_return.state.cancelled': StateLeaveOrderReturnStateCancelled;
    'state_leave.order_return.state.done': StateLeaveOrderReturnStateDone;
    'state_leave.order_return.state.in_progress': StateLeaveOrderReturnStateInProgress;
    'state_leave.order_return.state.open': StateLeaveOrderReturnStateOpen;
    'state_leave.order_transaction.state.authorized': StateLeaveOrderTransactionStateAuthorized;
    'state_leave.order_transaction.state.cancelled': StateLeaveOrderTransactionStateCancelled;
    'state_leave.order_transaction.state.chargeback': StateLeaveOrderTransactionStateChargeback;
    'state_leave.order_transaction.state.failed': StateLeaveOrderTransactionStateFailed;
    'state_leave.order_transaction.state.in_progress': StateLeaveOrderTransactionStateInProgress;
    'state_leave.order_transaction.state.open': StateLeaveOrderTransactionStateOpen;
    'state_leave.order_transaction.state.paid': StateLeaveOrderTransactionStatePaid;
    'state_leave.order_transaction.state.paid_partially': StateLeaveOrderTransactionStatePaidPartially;
    'state_leave.order_transaction.state.refunded': StateLeaveOrderTransactionStateRefunded;
    'state_leave.order_transaction.state.refunded_partially': StateLeaveOrderTransactionStateRefundedPartially;
    'state_leave.order_transaction.state.reminded': StateLeaveOrderTransactionStateReminded;
    'state_leave.order_transaction.state.unconfirmed': StateLeaveOrderTransactionStateUnconfirmed;
    'state_leave.order_transaction_capture.state.completed': StateLeaveOrderTransactionCaptureStateCompleted;
    'state_leave.order_transaction_capture.state.failed': StateLeaveOrderTransactionCaptureStateFailed;
    'state_leave.order_transaction_capture.state.pending': StateLeaveOrderTransactionCaptureStatePending;
    'state_leave.order_transaction_capture_refund.state.cancelled': StateLeaveOrderTransactionCaptureRefundStateCancelled;
    'state_leave.order_transaction_capture_refund.state.completed': StateLeaveOrderTransactionCaptureRefundStateCompleted;
    'state_leave.order_transaction_capture_refund.state.failed': StateLeaveOrderTransactionCaptureRefundStateFailed;
    'state_leave.order_transaction_capture_refund.state.in_progress': StateLeaveOrderTransactionCaptureRefundStateInProgress;
    'state_leave.order_transaction_capture_refund.state.open': StateLeaveOrderTransactionCaptureRefundStateOpen;
    'user.recovery.request': UserRecoveryRequest;
}

