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
    data: {
        payload: {
            email: string;
        };
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
        payload: {
            customer: Customer;
        };
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
        payload: {
            customer: Customer;
        };
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
        payload: {
            customer: Customer;
            confirmUrl: string;
        };
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
        payload: {
            customer: Customer;
            confirmUrl: string;
        };
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
        payload: {
            customer: Customer;
        };
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
        payload: {
            customer: Customer;
            contextToken: string;
        };
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
        payload: {
            customer: Customer;
        };
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
        payload: {
            customer: Customer;
        };
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
        payload: {
            order: Order;
            orderTransaction: OrderTransaction;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            contactFormData: unknown;
        };
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
        payload: {
            customer: Customer;
            customerGroup: CustomerGroup;
        };
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
        payload: {
            customer: Customer;
            customerGroup: CustomerGroup;
        };
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
        payload: {
            customerRecovery: CustomerRecovery;
            customer: Customer;
            resetUrl: string;
            shopName: string;
        };
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
        payload: {
            data: string[];
            message: unknown;
        };
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
        payload: {
            data: string[];
            templateData: string[];
        };
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
        payload: {
            subject: string;
            contents: string;
            recipients: string[];
        };
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
        payload: {
            newsletterRecipient: NewsletterRecipient;
        };
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
        payload: {
            newsletterRecipient: NewsletterRecipient;
            url: string;
        };
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
        payload: {
            newsletterRecipient: NewsletterRecipient;
        };
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
        payload: {
            name: string;
        };
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
        payload: {
            reviewFormData: unknown;
            product: Product;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            order: Order;
        };
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
        payload: {
            userRecovery: UserRecovery;
            resetUrl: string;
        };
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

