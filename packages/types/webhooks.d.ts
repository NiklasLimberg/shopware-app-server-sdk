export interface Customer {
    id: string;
    groupId: string;
    defaultPaymentMethodId: string;
    salesChannelId: string;
    languageId: string;
    lastPaymentMethodId: string;
    defaultBillingAddressId: string;
    defaultShippingAddressId: string;
    autoIncrement: number;
    customerNumber: string;
    salutationId: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    title: string;
    vatIds: Array<unknown>;
    affiliateCode: string;
    campaignCode: string;
    active: boolean;
    doubleOptInRegistration: boolean;
    doubleOptInEmailSentDate: string;
    doubleOptInConfirmDate: string;
    hash: string;
    guest: boolean;
    firstLogin: string;
    lastLogin: string;
    newsletterSalesChannelIds: unknown;
    birthday: string;
    lastOrderDate: string;
    orderCount: number;
    orderTotalAmount: number;
    reviewCount: number;
    customFields: unknown;
    legacyPassword: string;
    legacyEncoder: string;
    remoteAddress: unknown;
    tagIds: Array<unknown>;
    requestedGroupId: string;
    boundSalesChannelId: string;
    accountType: string;
    createdById: string;
    updatedById: string;
    createdAt: string;
    updatedAt: string;
}

export interface Order {
    id: string;
    versionId: string;
    autoIncrement: number;
    orderNumber: string;
    billingAddressId: string;
    billingAddressVersionId: string;
    currencyId: string;
    languageId: string;
    salesChannelId: string;
    orderDateTime: string;
    orderDate: string;
    price: unknown;
    amountTotal: number;
    amountNet: number;
    positionPrice: number;
    taxStatus: string;
    shippingCosts: unknown;
    shippingTotal: number;
    currencyFactor: number;
    deepLinkCode: string;
    affiliateCode: string;
    campaignCode: string;
    customerComment: string;
    stateId: string;
    ruleIds: Array<unknown>;
    customFields: unknown;
    createdById: string;
    updatedById: string;
    itemRounding: unknown;
    totalRounding: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface OrderTransaction {
    id: string;
    versionId: string;
    orderId: string;
    orderVersionId: string;
    paymentMethodId: string;
    amount: unknown;
    stateId: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface CustomerGroup {
    id: string;
    name: string;
    displayGross: boolean;
    customFields: unknown;
    registrationActive: boolean;
    registrationTitle: string;
    registrationIntroduction: string;
    registrationOnlyCompanyRegistration: boolean;
    registrationSeoMetaDescription: string;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, customFields?: unknown, registrationTitle?: string, registrationIntroduction?: string, registrationOnlyCompanyRegistration?: boolean, registrationSeoMetaDescription?: string};
}

export interface CustomerRecovery {
    id: string;
    hash: string;
    customerId: string;
    createdAt: string;
    updatedAt: string;
}

export interface NewsletterRecipient {
    id: string;
    email: string;
    title: string;
    firstName: string;
    lastName: string;
    zipCode: string;
    city: string;
    street: string;
    status: string;
    hash: string;
    customFields: unknown;
    confirmedAt: string;
    salutationId: string;
    languageId: string;
    salesChannelId: string;
    createdAt: string;
    updatedAt: string;
}

export interface Product {
    id: string;
    versionId: string;
    parentId: string;
    parentVersionId: string;
    manufacturerId: string;
    productManufacturerVersionId: string;
    unitId: string;
    taxId: string;
    coverId: string;
    productMediaVersionId: string;
    deliveryTimeId: string;
    featureSetId: string;
    canonicalProductId: string;
    cmsPageId: string;
    cmsPageVersionId: string;
    price: unknown;
    productNumber: string;
    stock: number;
    restockTime: number;
    autoIncrement: number;
    active: boolean;
    availableStock: number;
    available: boolean;
    isCloseout: boolean;
    variation: Array<unknown>;
    displayGroup: string;
    variantListingConfig: unknown;
    variantRestrictions: unknown;
    manufacturerNumber: string;
    ean: string;
    purchaseSteps: number;
    maxPurchase: number;
    minPurchase: number;
    purchaseUnit: number;
    referenceUnit: number;
    shippingFree: boolean;
    purchasePrices: unknown;
    markAsTopseller: boolean;
    weight: number;
    width: number;
    height: number;
    length: number;
    releaseDate: string;
    ratingAverage: number;
    categoryTree: Array<unknown>;
    propertyIds: Array<unknown>;
    optionIds: Array<unknown>;
    streamIds: Array<unknown>;
    tagIds: Array<unknown>;
    categoryIds: Array<unknown>;
    childCount: number;
    customFieldSetSelectionActive: boolean;
    sales: number;
    states: Array<unknown>;
    metaDescription: string;
    name: string;
    keywords: string;
    description: string;
    metaTitle: string;
    packUnit: string;
    packUnitPlural: string;
    customFields: unknown;
    slotConfig: unknown;
    customSearchKeywords: Array<unknown>;
    createdAt: string;
    updatedAt: string;
    translated: {metaDescription?: string, name?: string, keywords?: string, description?: string, metaTitle?: string, packUnit?: string, packUnitPlural?: string, customFields?: unknown, slotConfig?: unknown, customSearchKeywords?: Array<unknown>};
}

export interface UserRecovery {
    id: string;
    hash: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
}

export interface CheckoutCustomerBeforeLogin {
    email: string;
}

export interface CheckoutCustomerChangedPaymentMethod {
    customer: Customer;
}

export interface CheckoutCustomerDeleted {
    customer: Customer;
}

export interface CheckoutCustomerDoubleOptInGuestOrder {
    customer: Customer;
    confirmUrl: string;
}

export interface CheckoutCustomerDoubleOptInRegistration {
    customer: Customer;
    confirmUrl: string;
}

export interface CheckoutCustomerGuestRegister {
    customer: Customer;
}

export interface CheckoutCustomerLogin {
    customer: Customer;
    contextToken: string;
}

export interface CheckoutCustomerLogout {
    customer: Customer;
}

export interface CheckoutCustomerRegister {
    customer: Customer;
}

export interface CheckoutOrderPaymentMethodChanged {
    order: Order;
    orderTransaction: OrderTransaction;
}

export interface CheckoutOrderPlaced {
    order: Order;
}

export interface ContactFormSend {
    contactFormData: unknown;
}

export interface CustomerGroupRegistrationAccepted {
    customer: Customer;
    customerGroup: CustomerGroup;
}

export interface CustomerGroupRegistrationDeclined {
    customer: Customer;
    customerGroup: CustomerGroup;
}

export interface CustomerRecoveryRequest {
    customerRecovery: CustomerRecovery;
    customer: Customer;
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
    newsletterRecipient: NewsletterRecipient;
}

export interface NewsletterRegister {
    newsletterRecipient: NewsletterRecipient;
    url: string;
}

export interface NewsletterUnsubscribe {
    newsletterRecipient: NewsletterRecipient;
}

export interface ProductExportLog {
    name: string;
}

export interface ReviewFormSend {
    reviewFormData: unknown;
    product: Product;
}

export interface StateEnterOrderStateCancelled {
    order: Order;
}

export interface StateEnterOrderStateCompleted {
    order: Order;
}

export interface StateEnterOrderStateInProgress {
    order: Order;
}

export interface StateEnterOrderStateOpen {
    order: Order;
}

export interface StateEnterOrderDeliveryStateCancelled {
    order: Order;
}

export interface StateEnterOrderDeliveryStateOpen {
    order: Order;
}

export interface StateEnterOrderDeliveryStateReturned {
    order: Order;
}

export interface StateEnterOrderDeliveryStateReturnedPartially {
    order: Order;
}

export interface StateEnterOrderDeliveryStateShipped {
    order: Order;
}

export interface StateEnterOrderDeliveryStateShippedPartially {
    order: Order;
}

export interface StateEnterOrderLineItemStateCancelled {
    order: Order;
}

export interface StateEnterOrderLineItemStateOpen {
    order: Order;
}

export interface StateEnterOrderLineItemStateReturnRequested {
    order: Order;
}

export interface StateEnterOrderLineItemStateReturned {
    order: Order;
}

export interface StateEnterOrderLineItemStateReturnedPartially {
    order: Order;
}

export interface StateEnterOrderLineItemStateShipped {
    order: Order;
}

export interface StateEnterOrderLineItemStateShippedPartially {
    order: Order;
}

export interface StateEnterOrderReturnStateCancelled {
    order: Order;
}

export interface StateEnterOrderReturnStateDone {
    order: Order;
}

export interface StateEnterOrderReturnStateInProgress {
    order: Order;
}

export interface StateEnterOrderReturnStateOpen {
    order: Order;
}

export interface StateEnterOrderTransactionStateAuthorized {
    order: Order;
}

export interface StateEnterOrderTransactionStateCancelled {
    order: Order;
}

export interface StateEnterOrderTransactionStateChargeback {
    order: Order;
}

export interface StateEnterOrderTransactionStateFailed {
    order: Order;
}

export interface StateEnterOrderTransactionStateInProgress {
    order: Order;
}

export interface StateEnterOrderTransactionStateOpen {
    order: Order;
}

export interface StateEnterOrderTransactionStatePaid {
    order: Order;
}

export interface StateEnterOrderTransactionStatePaidPartially {
    order: Order;
}

export interface StateEnterOrderTransactionStateRefunded {
    order: Order;
}

export interface StateEnterOrderTransactionStateRefundedPartially {
    order: Order;
}

export interface StateEnterOrderTransactionStateReminded {
    order: Order;
}

export interface StateEnterOrderTransactionStateUnconfirmed {
    order: Order;
}

export interface StateEnterOrderTransactionCaptureStateCompleted {
    order: Order;
}

export interface StateEnterOrderTransactionCaptureStateFailed {
    order: Order;
}

export interface StateEnterOrderTransactionCaptureStatePending {
    order: Order;
}

export interface StateEnterOrderTransactionCaptureRefundStateCancelled {
    order: Order;
}

export interface StateEnterOrderTransactionCaptureRefundStateCompleted {
    order: Order;
}

export interface StateEnterOrderTransactionCaptureRefundStateFailed {
    order: Order;
}

export interface StateEnterOrderTransactionCaptureRefundStateInProgress {
    order: Order;
}

export interface StateEnterOrderTransactionCaptureRefundStateOpen {
    order: Order;
}

export interface StateLeaveOrderStateCancelled {
    order: Order;
}

export interface StateLeaveOrderStateCompleted {
    order: Order;
}

export interface StateLeaveOrderStateInProgress {
    order: Order;
}

export interface StateLeaveOrderStateOpen {
    order: Order;
}

export interface StateLeaveOrderDeliveryStateCancelled {
    order: Order;
}

export interface StateLeaveOrderDeliveryStateOpen {
    order: Order;
}

export interface StateLeaveOrderDeliveryStateReturned {
    order: Order;
}

export interface StateLeaveOrderDeliveryStateReturnedPartially {
    order: Order;
}

export interface StateLeaveOrderDeliveryStateShipped {
    order: Order;
}

export interface StateLeaveOrderDeliveryStateShippedPartially {
    order: Order;
}

export interface StateLeaveOrderLineItemStateCancelled {
    order: Order;
}

export interface StateLeaveOrderLineItemStateOpen {
    order: Order;
}

export interface StateLeaveOrderLineItemStateReturnRequested {
    order: Order;
}

export interface StateLeaveOrderLineItemStateReturned {
    order: Order;
}

export interface StateLeaveOrderLineItemStateReturnedPartially {
    order: Order;
}

export interface StateLeaveOrderLineItemStateShipped {
    order: Order;
}

export interface StateLeaveOrderLineItemStateShippedPartially {
    order: Order;
}

export interface StateLeaveOrderReturnStateCancelled {
    order: Order;
}

export interface StateLeaveOrderReturnStateDone {
    order: Order;
}

export interface StateLeaveOrderReturnStateInProgress {
    order: Order;
}

export interface StateLeaveOrderReturnStateOpen {
    order: Order;
}

export interface StateLeaveOrderTransactionStateAuthorized {
    order: Order;
}

export interface StateLeaveOrderTransactionStateCancelled {
    order: Order;
}

export interface StateLeaveOrderTransactionStateChargeback {
    order: Order;
}

export interface StateLeaveOrderTransactionStateFailed {
    order: Order;
}

export interface StateLeaveOrderTransactionStateInProgress {
    order: Order;
}

export interface StateLeaveOrderTransactionStateOpen {
    order: Order;
}

export interface StateLeaveOrderTransactionStatePaid {
    order: Order;
}

export interface StateLeaveOrderTransactionStatePaidPartially {
    order: Order;
}

export interface StateLeaveOrderTransactionStateRefunded {
    order: Order;
}

export interface StateLeaveOrderTransactionStateRefundedPartially {
    order: Order;
}

export interface StateLeaveOrderTransactionStateReminded {
    order: Order;
}

export interface StateLeaveOrderTransactionStateUnconfirmed {
    order: Order;
}

export interface StateLeaveOrderTransactionCaptureStateCompleted {
    order: Order;
}

export interface StateLeaveOrderTransactionCaptureStateFailed {
    order: Order;
}

export interface StateLeaveOrderTransactionCaptureStatePending {
    order: Order;
}

export interface StateLeaveOrderTransactionCaptureRefundStateCancelled {
    order: Order;
}

export interface StateLeaveOrderTransactionCaptureRefundStateCompleted {
    order: Order;
}

export interface StateLeaveOrderTransactionCaptureRefundStateFailed {
    order: Order;
}

export interface StateLeaveOrderTransactionCaptureRefundStateInProgress {
    order: Order;
}

export interface StateLeaveOrderTransactionCaptureRefundStateOpen {
    order: Order;
}

export interface UserRecoveryRequest {
    userRecovery: UserRecovery;
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

