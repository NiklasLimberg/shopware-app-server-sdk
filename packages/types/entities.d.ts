/* THIS FILE IS AUTO GENERATED AND SHOULDN'T BE MODIFIED MANUALLY */

export interface AclRole {
    id: string;
    name: string;
    description: string;
    privileges: Array<unknown>;
    deletedAt: string;
    users: Entities['user'][] | undefined;
    app: Entities['app'] | undefined;
    integrations: Entities['integration'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface AclUserRole {
    userId: string;
    aclRoleId: string;
    createdAt: string;
    updatedAt: string;
    user: Entities['user'] | undefined;
    aclRole: Entities['acl_role'] | undefined;
}

export interface App {
    id: string;
    name: string;
    path: string;
    author: string;
    copyright: string;
    license: string;
    active: boolean;
    configurable: boolean;
    privacy: string;
    version: string;
    iconRaw: string;
    icon: string;
    appSecret: string;
    modules: Array<unknown>;
    mainModule: unknown;
    cookies: Array<unknown>;
    allowDisable: boolean;
    baseAppUrl: string;
    allowedHosts: Array<unknown>;
    templateLoadPriority: number;
    translations: Entities['app_translation'][] | undefined;
    label: string;
    description: string;
    privacyPolicyExtensions: string;
    customFields: unknown;
    integrationId: string;
    integration: Entities['integration'] | undefined;
    aclRoleId: string;
    aclRole: Entities['acl_role'] | undefined;
    customFieldSets: Entities['custom_field_set'][] | undefined;
    actionButtons: Entities['app_action_button'][] | undefined;
    templates: Entities['app_template'][] | undefined;
    scripts: Entities['script'][] | undefined;
    webhooks: Entities['webhook'][] | undefined;
    paymentMethods: Entities['app_payment_method'][] | undefined;
    taxProviders: Entities['tax_provider'][] | undefined;
    scriptConditions: Entities['app_script_condition'][] | undefined;
    cmsBlocks: Entities['app_cms_block'][] | undefined;
    flowActions: Entities['app_flow_action'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {label?: string, description?: string, privacyPolicyExtensions?: string, customFields?: unknown};
}

export interface AppActionButton {
    id: string;
    entity: string;
    view: string;
    url: string;
    action: string;
    label: string;
    translations: Entities['app_action_button_translation'][] | undefined;
    appId: string;
    app: Entities['app'] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {label?: string};
}

export interface AppActionButtonTranslation {
    label: string;
    createdAt: string;
    updatedAt: string;
    appActionButtonId: string;
    languageId: string;
    appActionButton: Entities['app_action_button'] | undefined;
    language: Entities['language'] | undefined;
}

export interface AppAdministrationSnippet {
    id: string;
    value: string;
    appId: string;
    localeId: string;
    createdAt: string;
    updatedAt: string;
}

export interface AppCmsBlock {
    id: string;
    name: string;
    block: unknown;
    template: string;
    styles: string;
    label: string;
    translations: Entities['app_cms_block_translation'][] | undefined;
    appId: string;
    app: Entities['app'] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {label?: string};
}

export interface AppCmsBlockTranslation {
    label: string;
    createdAt: string;
    updatedAt: string;
    appCmsBlockId: string;
    languageId: string;
    appCmsBlock: Entities['app_cms_block'] | undefined;
    language: Entities['language'] | undefined;
}

export interface AppFlowAction {
    id: string;
    appId: string;
    name: string;
    badge: string;
    parameters: unknown;
    config: unknown;
    headers: unknown;
    requirements: Array<unknown>;
    iconRaw: string;
    icon: string;
    swIcon: string;
    url: string;
    delayable: boolean;
    label: string;
    description: string;
    headline: string;
    customFields: unknown;
    translations: Entities['app_flow_action_translation'][] | undefined;
    app: Entities['app'] | undefined;
    flowSequences: Entities['flow_sequence'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {label?: string, description?: string, headline?: string, customFields?: unknown};
}

export interface AppFlowActionTranslation {
    label: string;
    description: string;
    headline: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    appFlowActionId: string;
    languageId: string;
    appFlowAction: Entities['app_flow_action'] | undefined;
    language: Entities['language'] | undefined;
}

export interface AppPaymentMethod {
    id: string;
    appName: string;
    identifier: string;
    payUrl: string;
    finalizeUrl: string;
    validateUrl: string;
    captureUrl: string;
    refundUrl: string;
    appId: string;
    app: Entities['app'] | undefined;
    originalMediaId: string;
    originalMedia: Entities['media'] | undefined;
    paymentMethodId: string;
    paymentMethod: Entities['payment_method'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface AppScriptCondition {
    id: string;
    identifier: string;
    name: string;
    active: boolean;
    group: string;
    script: string;
    constraints: string;
    config: unknown;
    appId: string;
    app: Entities['app'] | undefined;
    ruleConditions: Entities['rule_condition'][] | undefined;
    translations: Entities['app_script_condition_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string};
}

export interface AppScriptConditionTranslation {
    name: string;
    createdAt: string;
    updatedAt: string;
    appScriptConditionId: string;
    languageId: string;
    appScriptCondition: Entities['app_script_condition'] | undefined;
    language: Entities['language'] | undefined;
}

export interface AppTemplate {
    id: string;
    template: string;
    path: string;
    active: boolean;
    appId: string;
    app: Entities['app'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface AppTranslation {
    label: string;
    description: string;
    privacyPolicyExtensions: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    appId: string;
    languageId: string;
    app: Entities['app'] | undefined;
    language: Entities['language'] | undefined;
}

export interface Category {
    id: string;
    versionId: string;
    parentId: string;
    parentVersionId: string;
    afterCategoryId: string;
    afterCategoryVersionId: string;
    mediaId: string;
    displayNestedProducts: boolean;
    autoIncrement: number;
    breadcrumb: Array<unknown>;
    level: number;
    path: string;
    childCount: number;
    type: string;
    productAssignmentType: string;
    visible: boolean;
    active: boolean;
    cmsPageIdSwitched: boolean;
    visibleChildCount: number;
    name: string;
    customFields: unknown;
    slotConfig: unknown;
    linkType: string;
    internalLink: string;
    externalLink: string;
    linkNewTab: boolean;
    description: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    parent: Entities['category'] | undefined;
    children: Entities['category'][] | undefined;
    media: Entities['media'] | undefined;
    translations: Entities['category_translation'][] | undefined;
    products: Entities['product'][] | undefined;
    nestedProducts: Entities['product'][] | undefined;
    tags: Entities['tag'][] | undefined;
    cmsPageId: string;
    cmsPageVersionId: string;
    cmsPage: Entities['cms_page'] | undefined;
    productStreamId: string;
    productStream: Entities['product_stream'] | undefined;
    customEntityTypeId: string;
    navigationSalesChannels: Entities['sales_channel'][] | undefined;
    footerSalesChannels: Entities['sales_channel'][] | undefined;
    serviceSalesChannels: Entities['sales_channel'][] | undefined;
    mainCategories: Entities['main_category'][] | undefined;
    seoUrls: Entities['seo_url'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {breadcrumb?: Array<unknown>, name?: string, customFields?: unknown, slotConfig?: unknown, linkType?: string, internalLink?: string, externalLink?: string, linkNewTab?: boolean, description?: string, metaTitle?: string, metaDescription?: string, keywords?: string};
}

export interface CategoryTag {
    categoryId: string;
    categoryVersionId: string;
    tagId: string;
    category: Entities['category'] | undefined;
    tag: Entities['tag'] | undefined;
}

export interface CategoryTranslation {
    name: string;
    breadcrumb: Array<unknown>;
    slotConfig: unknown;
    linkType: string;
    internalLink: string;
    externalLink: string;
    linkNewTab: boolean;
    description: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    categoryId: string;
    languageId: string;
    category: Entities['category'] | undefined;
    language: Entities['language'] | undefined;
    categoryVersionId: string;
}

export interface CmsBlock {
    id: string;
    position: number;
    type: string;
    locked: boolean;
    name: string;
    sectionPosition: string;
    marginTop: string;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    backgroundColor: string;
    backgroundMediaId: string;
    backgroundMediaMode: string;
    cssClass: string;
    visibility: unknown;
    sectionId: string;
    section: Entities['cms_section'] | undefined;
    backgroundMedia: Entities['media'] | undefined;
    slots: Entities['cms_slot'][] | undefined;
    customFields: unknown;
    versionId: string;
    cmsSectionVersionId: string;
    createdAt: string;
    updatedAt: string;
    swagCmsExtensionsQuickview: Entities['swag_cms_extensions_quickview'] | undefined;
    swagCmsExtensionsBlockRule: Entities['swag_cms_extensions_block_rule'] | undefined;
}

export interface CmsPage {
    id: string;
    versionId: string;
    name: string;
    type: string;
    entity: string;
    cssClass: string;
    config: unknown;
    previewMediaId: string;
    customFields: unknown;
    locked: boolean;
    sections: Entities['cms_section'][] | undefined;
    translations: Entities['cms_page_translation'][] | undefined;
    previewMedia: Entities['media'] | undefined;
    categories: Entities['category'][] | undefined;
    landingPages: Entities['landing_page'][] | undefined;
    homeSalesChannels: Entities['sales_channel'][] | undefined;
    products: Entities['product'][] | undefined;
    createdAt: string;
    updatedAt: string;
    swagCmsExtensionsScrollNavigationPageSettings: Entities['swag_cms_extensions_scroll_navigation_page_settings'] | undefined;
    translated: {name?: string, customFields?: unknown};
}

export interface CmsPageTranslation {
    name: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    cmsPageId: string;
    languageId: string;
    cmsPage: Entities['cms_page'] | undefined;
    language: Entities['language'] | undefined;
    cmsPageVersionId: string;
}

export interface CmsSection {
    id: string;
    position: number;
    type: string;
    locked: boolean;
    name: string;
    sizingMode: string;
    mobileBehavior: string;
    backgroundColor: string;
    backgroundMediaId: string;
    backgroundMediaMode: string;
    cssClass: string;
    pageId: string;
    visibility: unknown;
    page: Entities['cms_page'] | undefined;
    backgroundMedia: Entities['media'] | undefined;
    blocks: Entities['cms_block'][] | undefined;
    customFields: unknown;
    versionId: string;
    cmsPageVersionId: string;
    createdAt: string;
    updatedAt: string;
    swagCmsExtensionsScrollNavigation: Entities['swag_cms_extensions_scroll_navigation'] | undefined;
}

export interface CmsSlot {
    id: string;
    versionId: string;
    type: string;
    slot: string;
    locked: boolean;
    config: unknown;
    customFields: unknown;
    data: unknown;
    blockId: string;
    block: Entities['cms_block'] | undefined;
    translations: Entities['cms_slot_translation'][] | undefined;
    fieldConfig: unknown;
    cmsBlockVersionId: string;
    createdAt: string;
    updatedAt: string;
    swagCmsExtensionsForm: Entities['swag_cms_extensions_form'] | undefined;
    translated: {config?: unknown, customFields?: unknown};
}

export interface CmsSlotTranslation {
    config: unknown;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    cmsSlotId: string;
    languageId: string;
    cmsSlot: Entities['cms_slot'] | undefined;
    language: Entities['language'] | undefined;
    cmsSlotVersionId: string;
}

export interface Country {
    id: string;
    name: string;
    iso: string;
    position: number;
    active: boolean;
    shippingAvailable: boolean;
    iso3: string;
    displayStateInRegistration: boolean;
    forceStateInRegistration: boolean;
    checkVatIdPattern: boolean;
    vatIdRequired: boolean;
    vatIdPattern: string;
    customFields: unknown;
    customerTax: unknown;
    companyTax: unknown;
    postalCodeRequired: boolean;
    checkPostalCodePattern: boolean;
    checkAdvancedPostalCodePattern: boolean;
    advancedPostalCodePattern: string;
    addressFormat: unknown;
    defaultPostalCodePattern: string;
    states: Entities['country_state'][] | undefined;
    translations: Entities['country_translation'][] | undefined;
    customerAddresses: Entities['customer_address'][] | undefined;
    orderAddresses: Entities['order_address'][] | undefined;
    salesChannelDefaultAssignments: Entities['sales_channel'][] | undefined;
    salesChannels: Entities['sales_channel'][] | undefined;
    taxRules: Entities['tax_rule'][] | undefined;
    currencyCountryRoundings: Entities['currency_country_rounding'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, customFields?: unknown, addressFormat?: unknown};
}

export interface CountryState {
    id: string;
    countryId: string;
    shortCode: string;
    name: string;
    position: number;
    active: boolean;
    customFields: unknown;
    country: Entities['country'] | undefined;
    translations: Entities['country_state_translation'][] | undefined;
    customerAddresses: Entities['customer_address'][] | undefined;
    orderAddresses: Entities['order_address'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, customFields?: unknown};
}

export interface CountryStateTranslation {
    name: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    countryStateId: string;
    languageId: string;
    countryState: Entities['country_state'] | undefined;
    language: Entities['language'] | undefined;
}

export interface CountryTranslation {
    name: string;
    addressFormat: unknown;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    countryId: string;
    languageId: string;
    country: Entities['country'] | undefined;
    language: Entities['language'] | undefined;
}

export interface Currency {
    id: string;
    factor: number;
    symbol: string;
    isoCode: string;
    shortName: string;
    name: string;
    position: number;
    isSystemDefault: boolean;
    taxFreeFrom: number;
    customFields: unknown;
    translations: Entities['currency_translation'][] | undefined;
    salesChannelDefaultAssignments: Entities['sales_channel'][] | undefined;
    orders: Entities['order'][] | undefined;
    salesChannels: Entities['sales_channel'][] | undefined;
    salesChannelDomains: Entities['sales_channel_domain'][] | undefined;
    promotionDiscountPrices: Entities['promotion_discount_prices'][] | undefined;
    productExports: Entities['product_export'][] | undefined;
    itemRounding: unknown;
    totalRounding: unknown;
    countryRoundings: Entities['currency_country_rounding'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {shortName?: string, name?: string, customFields?: unknown};
}

export interface CurrencyCountryRounding {
    id: string;
    currencyId: string;
    countryId: string;
    itemRounding: unknown;
    totalRounding: unknown;
    currency: Entities['currency'] | undefined;
    country: Entities['country'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface CurrencyTranslation {
    shortName: string;
    name: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    currencyId: string;
    languageId: string;
    currency: Entities['currency'] | undefined;
    language: Entities['language'] | undefined;
}

export interface CustomEntity {
    id: string;
    name: string;
    fields: unknown;
    flags: unknown;
    appId: string;
    pluginId: string;
    cmsAware: boolean;
    storeApiAware: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CustomField {
    id: string;
    name: string;
    type: string;
    config: unknown;
    active: boolean;
    customFieldSetId: string;
    allowCustomerWrite: boolean;
    customFieldSet: Entities['custom_field_set'] | undefined;
    productSearchConfigFields: Entities['product_search_config_field'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface CustomFieldSet {
    id: string;
    name: string;
    config: unknown;
    active: boolean;
    global: boolean;
    position: number;
    appId: string;
    customFields: Entities['custom_field'][] | undefined;
    relations: Entities['custom_field_set_relation'][] | undefined;
    products: Entities['product'][] | undefined;
    app: Entities['app'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface CustomFieldSetRelation {
    id: string;
    customFieldSetId: string;
    entityName: string;
    customFieldSet: Entities['custom_field_set'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface CustomPrice {
    id: string;
    productId: string;
    productVersionId: string;
    customerId: string;
    customerGroupId: string;
    price: unknown;
    customer: Entities['customer'] | undefined;
    customerGroup: Entities['customer_group'] | undefined;
    product: Entities['product'] | undefined;
    createdAt: string;
    updatedAt: string;
}

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
    company: Entities['swag_b2b_company'] | undefined;
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
    group: Entities['customer_group'] | undefined;
    defaultPaymentMethod: Entities['payment_method'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
    language: Entities['language'] | undefined;
    lastPaymentMethod: Entities['payment_method'] | undefined;
    defaultBillingAddress: Entities['customer_address'] | undefined;
    defaultShippingAddress: Entities['customer_address'] | undefined;
    salutation: Entities['salutation'] | undefined;
    addresses: Entities['customer_address'][] | undefined;
    orderCustomers: Entities['order_customer'][] | undefined;
    tags: Entities['tag'][] | undefined;
    promotions: Entities['promotion'][] | undefined;
    productReviews: Entities['product_review'][] | undefined;
    recoveryCustomer: Entities['customer_recovery'] | undefined;
    remoteAddress: unknown;
    tagIds: Array<unknown>;
    requestedGroupId: string;
    requestedGroup: Entities['customer_group'] | undefined;
    boundSalesChannelId: string;
    accountType: string;
    boundSalesChannel: Entities['sales_channel'] | undefined;
    wishlists: Entities['customer_wishlist'][] | undefined;
    createdById: string;
    updatedById: string;
    createdBy: Entities['user'] | undefined;
    updatedBy: Entities['user'] | undefined;
    createdAt: string;
    updatedAt: string;
    customPrice: Entities['custom_price'][] | undefined;
    delayActions: Entities['swag_delay_action'][] | undefined;
    employees: Entities['swag_b2b_employee'][] | undefined;
}

export interface CustomerAddress {
    id: string;
    customerId: string;
    countryId: string;
    countryStateId: string;
    salutationId: string;
    firstName: string;
    lastName: string;
    zipcode: string;
    city: string;
    company: string;
    street: string;
    department: string;
    title: string;
    phoneNumber: string;
    additionalAddressLine1: string;
    additionalAddressLine2: string;
    customFields: unknown;
    customer: Entities['customer'] | undefined;
    country: Entities['country'] | undefined;
    countryState: Entities['country_state'] | undefined;
    salutation: Entities['salutation'] | undefined;
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
    customers: Entities['customer'][] | undefined;
    salesChannels: Entities['sales_channel'][] | undefined;
    translations: Entities['customer_group_translation'][] | undefined;
    registrationSalesChannels: Entities['sales_channel'][] | undefined;
    createdAt: string;
    updatedAt: string;
    customPrice: Entities['custom_price'][] | undefined;
    translated: {name?: string, customFields?: unknown, registrationTitle?: string, registrationIntroduction?: string, registrationOnlyCompanyRegistration?: boolean, registrationSeoMetaDescription?: string};
}

export interface CustomerGroupRegistrationSalesChannels {
    customerGroupId: string;
    salesChannelId: string;
    customerGroup: Entities['customer_group'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
    createdAt: string;
}

export interface CustomerGroupTranslation {
    name: string;
    registrationTitle: string;
    registrationIntroduction: string;
    registrationOnlyCompanyRegistration: boolean;
    registrationSeoMetaDescription: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    customerGroupId: string;
    languageId: string;
    customerGroup: Entities['customer_group'] | undefined;
    language: Entities['language'] | undefined;
}

export interface CustomerRecovery {
    id: string;
    hash: string;
    customerId: string;
    customer: Entities['customer'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface CustomerTag {
    customerId: string;
    tagId: string;
    customer: Entities['customer'] | undefined;
    tag: Entities['tag'] | undefined;
}

export interface CustomerWishlist {
    id: string;
    customerId: string;
    salesChannelId: string;
    customFields: unknown;
    products: Entities['customer_wishlist_product'][] | undefined;
    customer: Entities['customer'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface CustomerWishlistProduct {
    id: string;
    productId: string;
    productVersionId: string;
    wishlistId: string;
    wishlist: Entities['customer_wishlist'] | undefined;
    product: Entities['product'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface DeliveryTime {
    id: string;
    name: string;
    min: number;
    max: number;
    unit: string;
    customFields: unknown;
    shippingMethods: Entities['shipping_method'][] | undefined;
    products: Entities['product'][] | undefined;
    translations: Entities['delivery_time_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, customFields?: unknown};
}

export interface DeliveryTimeTranslation {
    name: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    deliveryTimeId: string;
    languageId: string;
    deliveryTime: Entities['delivery_time'] | undefined;
    language: Entities['language'] | undefined;
}

export interface Document {
    id: string;
    documentTypeId: string;
    fileType: string;
    referencedDocumentId: string;
    orderId: string;
    documentMediaFileId: string;
    orderVersionId: string;
    config: unknown;
    sent: boolean;
    static: boolean;
    deepLinkCode: string;
    customFields: unknown;
    documentType: Entities['document_type'] | undefined;
    order: Entities['order'] | undefined;
    referencedDocument: Entities['document'] | undefined;
    dependentDocuments: Entities['document'][] | undefined;
    documentMediaFile: Entities['media'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface DocumentBaseConfig {
    id: string;
    documentTypeId: string;
    logoId: string;
    name: string;
    filenamePrefix: string;
    filenameSuffix: string;
    global: boolean;
    documentNumber: string;
    config: unknown;
    createdAt: string;
    customFields: unknown;
    documentType: Entities['document_type'] | undefined;
    logo: Entities['media'] | undefined;
    salesChannels: Entities['document_base_config_sales_channel'][] | undefined;
    updatedAt: string;
}

export interface DocumentBaseConfigSalesChannel {
    id: string;
    documentBaseConfigId: string;
    salesChannelId: string;
    documentTypeId: string;
    documentType: Entities['document_type'] | undefined;
    documentBaseConfig: Entities['document_base_config'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface DocumentType {
    id: string;
    name: string;
    technicalName: string;
    createdAt: string;
    updatedAt: string;
    customFields: unknown;
    translations: Entities['document_type_translation'][] | undefined;
    documents: Entities['document'][] | undefined;
    documentBaseConfigs: Entities['document_base_config'][] | undefined;
    documentBaseConfigSalesChannels: Entities['document_base_config_sales_channel'][] | undefined;
    translated: {name?: string, customFields?: unknown};
}

export interface DocumentTypeTranslation {
    name: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    documentTypeId: string;
    languageId: string;
    documentType: Entities['document_type'] | undefined;
    language: Entities['language'] | undefined;
}

export interface Flow {
    id: string;
    name: string;
    eventName: string;
    priority: number;
    payload: string;
    invalid: boolean;
    active: boolean;
    description: string;
    sequences: Entities['flow_sequence'][] | undefined;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    delayActions: Entities['swag_delay_action'][] | undefined;
}

export interface FlowSequence {
    id: string;
    flowId: string;
    ruleId: string;
    actionName: string;
    config: unknown;
    position: number;
    displayGroup: number;
    trueCase: boolean;
    flow: Entities['flow'] | undefined;
    rule: Entities['rule'] | undefined;
    parent: Entities['flow_sequence'] | undefined;
    children: Entities['flow_sequence'][] | undefined;
    parentId: string;
    customFields: unknown;
    appFlowActionId: string;
    appFlowAction: Entities['app_flow_action'] | undefined;
    createdAt: string;
    updatedAt: string;
    delayActions: Entities['swag_delay_action'][] | undefined;
    webhookEventLogs: Entities['webhook_event_log'][] | undefined;
}

export interface FlowTemplate {
    id: string;
    name: string;
    config: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface ImportExportFile {
    id: string;
    originalName: string;
    path: string;
    expireDate: string;
    size: number;
    log: Entities['import_export_log'] | undefined;
    accessToken: string;
    createdAt: string;
    updatedAt: string;
}

export interface ImportExportLog {
    id: string;
    activity: string;
    state: string;
    records: number;
    userId: string;
    profileId: string;
    fileId: string;
    invalidRecordsLogId: string;
    username: string;
    profileName: string;
    config: unknown;
    result: unknown;
    user: Entities['user'] | undefined;
    profile: Entities['import_export_profile'] | undefined;
    file: Entities['import_export_file'] | undefined;
    invalidRecordsLog: Entities['import_export_log'] | undefined;
    failedImportLog: Entities['import_export_log'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface ImportExportProfile {
    id: string;
    name: string;
    label: string;
    type: string;
    systemDefault: boolean;
    sourceEntity: string;
    fileType: string;
    delimiter: string;
    enclosure: string;
    mapping: unknown;
    updateBy: unknown;
    config: unknown;
    importExportLogs: Entities['import_export_log'][] | undefined;
    translations: Entities['import_export_profile_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {label?: string};
}

export interface ImportExportProfileTranslation {
    label: string;
    createdAt: string;
    updatedAt: string;
    importExportProfileId: string;
    languageId: string;
    importExportProfile: Entities['import_export_profile'] | undefined;
    language: Entities['language'] | undefined;
}

export interface Integration {
    id: string;
    label: string;
    accessKey: string;
    secretAccessKey: string;
    lastUsageAt: string;
    admin: boolean;
    customFields: unknown;
    deletedAt: string;
    app: Entities['app'] | undefined;
    aclRoles: Entities['acl_role'][] | undefined;
    writeAccess: boolean;
    createdAt: string;
    updatedAt: string;
    createdNotifications: unknown;
}

export interface IntegrationRole {
    integrationId: string;
    aclRoleId: string;
    integration: Entities['integration'] | undefined;
    role: Entities['acl_role'] | undefined;
}

export interface LandingPage {
    id: string;
    versionId: string;
    active: boolean;
    name: string;
    customFields: unknown;
    slotConfig: unknown;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    url: string;
    translations: Entities['landing_page_translation'][] | undefined;
    tags: Entities['tag'][] | undefined;
    cmsPageId: string;
    cmsPage: Entities['cms_page'] | undefined;
    salesChannels: Entities['sales_channel'][] | undefined;
    seoUrls: Entities['seo_url'][] | undefined;
    cmsPageVersionId: string;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, customFields?: unknown, slotConfig?: unknown, metaTitle?: string, metaDescription?: string, keywords?: string, url?: string};
}

export interface LandingPageSalesChannel {
    landingPageId: string;
    landingPageVersionId: string;
    salesChannelId: string;
    landingPage: Entities['landing_page'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
}

export interface LandingPageTag {
    landingPageId: string;
    landingPageVersionId: string;
    tagId: string;
    landingPage: Entities['landing_page'] | undefined;
    tag: Entities['tag'] | undefined;
}

export interface LandingPageTranslation {
    name: string;
    url: string;
    slotConfig: unknown;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    landingPageId: string;
    languageId: string;
    landingPage: Entities['landing_page'] | undefined;
    language: Entities['language'] | undefined;
    landingPageVersionId: string;
}

export interface Language {
    id: string;
    parentId: string;
    localeId: string;
    translationCodeId: string;
    name: string;
    customFields: unknown;
    parent: Entities['language'] | undefined;
    locale: Entities['locale'] | undefined;
    translationCode: Entities['locale'] | undefined;
    children: Entities['language'][] | undefined;
    salesChannels: Entities['sales_channel'][] | undefined;
    salesChannelDefaultAssignments: Entities['sales_channel'][] | undefined;
    salesChannelDomains: Entities['sales_channel_domain'][] | undefined;
    customers: Entities['customer'][] | undefined;
    newsletterRecipients: Entities['newsletter_recipient'][] | undefined;
    orders: Entities['order'][] | undefined;
    categoryTranslations: Entities['category_translation'][] | undefined;
    countryStateTranslations: Entities['country_state_translation'][] | undefined;
    countryTranslations: Entities['country_translation'][] | undefined;
    currencyTranslations: Entities['currency_translation'][] | undefined;
    customerGroupTranslations: Entities['customer_group_translation'][] | undefined;
    localeTranslations: Entities['locale_translation'][] | undefined;
    mediaTranslations: Entities['media_translation'][] | undefined;
    paymentMethodTranslations: Entities['payment_method_translation'][] | undefined;
    productManufacturerTranslations: Entities['product_manufacturer_translation'][] | undefined;
    productTranslations: Entities['product_translation'][] | undefined;
    shippingMethodTranslations: Entities['shipping_method_translation'][] | undefined;
    unitTranslations: Entities['unit_translation'][] | undefined;
    propertyGroupTranslations: Entities['property_group_translation'][] | undefined;
    propertyGroupOptionTranslations: Entities['property_group_option_translation'][] | undefined;
    salesChannelTranslations: Entities['sales_channel_translation'][] | undefined;
    salesChannelTypeTranslations: Entities['sales_channel_type_translation'][] | undefined;
    salutationTranslations: Entities['salutation_translation'][] | undefined;
    pluginTranslations: Entities['plugin_translation'][] | undefined;
    productStreamTranslations: Entities['product_stream_translation'][] | undefined;
    stateMachineTranslations: Entities['state_machine_translation'][] | undefined;
    stateMachineStateTranslations: Entities['state_machine_state_translation'][] | undefined;
    cmsPageTranslations: Entities['cms_page_translation'][] | undefined;
    cmsSlotTranslations: Entities['cms_slot_translation'][] | undefined;
    mailTemplateTranslations: Entities['mail_template_translation'][] | undefined;
    mailHeaderFooterTranslations: Entities['mail_header_footer_translation'][] | undefined;
    documentTypeTranslations: Entities['document_type_translation'][] | undefined;
    numberRangeTypeTranslations: Entities['number_range_type_translation'][] | undefined;
    deliveryTimeTranslations: Entities['delivery_time_translation'][] | undefined;
    productSearchKeywords: Entities['product_search_keyword'][] | undefined;
    productKeywordDictionaries: Entities['product_keyword_dictionary'][] | undefined;
    mailTemplateTypeTranslations: Entities['mail_template_type_translation'][] | undefined;
    promotionTranslations: Entities['promotion_translation'][] | undefined;
    numberRangeTranslations: Entities['number_range_translation'][] | undefined;
    productReviews: Entities['product_review'][] | undefined;
    seoUrlTranslations: Entities['seo_url'][] | undefined;
    taxRuleTypeTranslations: Entities['tax_rule_type_translation'][] | undefined;
    productCrossSellingTranslations: Entities['product_cross_selling_translation'][] | undefined;
    importExportProfileTranslations: Entities['import_export_profile_translation'][] | undefined;
    productSortingTranslations: Entities['product_sorting_translation'][] | undefined;
    productFeatureSetTranslations: Entities['product_feature_set_translation'][] | undefined;
    appTranslations: Entities['app_translation'][] | undefined;
    actionButtonTranslations: Entities['app_action_button_translation'][] | undefined;
    landingPageTranslations: Entities['landing_page_translation'][] | undefined;
    appCmsBlockTranslations: Entities['app_cms_block_translation'][] | undefined;
    appScriptConditionTranslations: Entities['app_script_condition_translation'][] | undefined;
    productSearchConfig: Entities['product_search_config'] | undefined;
    appFlowActionTranslations: Entities['app_flow_action_translation'][] | undefined;
    taxProviderTranslations: Entities['tax_provider_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    themeTranslations: Entities['theme_translation'][] | undefined;
    cmsExtensionsFormTranslations: Entities['swag_cms_extensions_form_translation'][] | undefined;
    cmsExtensionsFormGroupTranslations: Entities['swag_cms_extensions_form_group_translation'][] | undefined;
    cmsExtensionsFormGroupFieldTranslations: Entities['swag_cms_extensions_form_group_field_translation'][] | undefined;
    cmsExtensionsScrollNavigationTranslations: Entities['swag_cms_extensions_scroll_navigation_translation'][] | undefined;
    orderReturnLineItemReasonTranslations: Entities['order_return_line_item_reason_translation'][] | undefined;
}

export interface Locale {
    id: string;
    code: string;
    name: string;
    territory: string;
    customFields: unknown;
    languages: Entities['language'][] | undefined;
    translations: Entities['locale_translation'][] | undefined;
    users: Entities['user'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, territory?: string, customFields?: unknown};
}

export interface LocaleTranslation {
    name: string;
    territory: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    localeId: string;
    languageId: string;
    locale: Entities['locale'] | undefined;
    language: Entities['language'] | undefined;
}

export interface LogEntry {
    id: string;
    message: string;
    level: number;
    channel: string;
    context: unknown;
    extra: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface MailHeaderFooter {
    id: string;
    systemDefault: boolean;
    name: string;
    description: string;
    headerHtml: string;
    headerPlain: string;
    footerHtml: string;
    footerPlain: string;
    translations: Entities['mail_header_footer_translation'][] | undefined;
    salesChannels: Entities['sales_channel'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, description?: string, headerHtml?: string, headerPlain?: string, footerHtml?: string, footerPlain?: string};
}

export interface MailHeaderFooterTranslation {
    name: string;
    description: string;
    headerHtml: string;
    headerPlain: string;
    footerHtml: string;
    footerPlain: string;
    createdAt: string;
    updatedAt: string;
    mailHeaderFooterId: string;
    languageId: string;
    mailHeaderFooter: Entities['mail_header_footer'] | undefined;
    language: Entities['language'] | undefined;
}

export interface MailTemplate {
    id: string;
    mailTemplateTypeId: string;
    systemDefault: boolean;
    senderName: string;
    description: string;
    subject: string;
    contentHtml: string;
    contentPlain: string;
    customFields: unknown;
    translations: Entities['mail_template_translation'][] | undefined;
    mailTemplateType: Entities['mail_template_type'] | undefined;
    media: Entities['mail_template_media'][] | undefined;
    createdAt: string;
    updatedAt: string;
    swagCmsExtensionsForms: Entities['swag_cms_extensions_form'][] | undefined;
    translated: {senderName?: string, description?: string, subject?: string, contentHtml?: string, contentPlain?: string, customFields?: unknown};
}

export interface MailTemplateMedia {
    id: string;
    mailTemplateId: string;
    languageId: string;
    mediaId: string;
    position: number;
    mailTemplate: Entities['mail_template'] | undefined;
    media: Entities['media'] | undefined;
}

export interface MailTemplateTranslation {
    senderName: string;
    description: string;
    subject: string;
    contentHtml: string;
    contentPlain: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    mailTemplateId: string;
    languageId: string;
    mailTemplate: Entities['mail_template'] | undefined;
    language: Entities['language'] | undefined;
}

export interface MailTemplateType {
    id: string;
    name: string;
    technicalName: string;
    availableEntities: unknown;
    customFields: unknown;
    translations: Entities['mail_template_type_translation'][] | undefined;
    mailTemplates: Entities['mail_template'][] | undefined;
    templateData: unknown;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, customFields?: unknown};
}

export interface MailTemplateTypeTranslation {
    name: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    mailTemplateTypeId: string;
    languageId: string;
    mailTemplateType: Entities['mail_template_type'] | undefined;
    language: Entities['language'] | undefined;
}

export interface MainCategory {
    id: string;
    productId: string;
    productVersionId: string;
    categoryId: string;
    categoryVersionId: string;
    salesChannelId: string;
    product: Entities['product'] | undefined;
    category: Entities['category'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface Media {
    id: string;
    userId: string;
    mediaFolderId: string;
    mimeType: string;
    fileExtension: string;
    uploadedAt: string;
    fileName: string;
    fileSize: number;
    mediaTypeRaw: string;
    metaData: unknown;
    mediaType: unknown;
    alt: string;
    title: string;
    url: string;
    hasFile: boolean;
    private: boolean;
    customFields: unknown;
    thumbnailsRo: string;
    translations: Entities['media_translation'][] | undefined;
    tags: Entities['tag'][] | undefined;
    thumbnails: Entities['media_thumbnail'][] | undefined;
    user: Entities['user'] | undefined;
    categories: Entities['category'][] | undefined;
    productManufacturers: Entities['product_manufacturer'][] | undefined;
    productMedia: Entities['product_media'][] | undefined;
    productDownloads: Entities['product_download'][] | undefined;
    orderLineItemDownloads: Entities['order_line_item_download'][] | undefined;
    avatarUsers: Entities['user'][] | undefined;
    mediaFolder: Entities['media_folder'] | undefined;
    propertyGroupOptions: Entities['property_group_option'][] | undefined;
    mailTemplateMedia: Entities['mail_template_media'][] | undefined;
    documentBaseConfigs: Entities['document_base_config'][] | undefined;
    shippingMethods: Entities['shipping_method'][] | undefined;
    paymentMethods: Entities['payment_method'][] | undefined;
    productConfiguratorSettings: Entities['product_configurator_setting'][] | undefined;
    orderLineItems: Entities['order_line_item'][] | undefined;
    cmsBlocks: Entities['cms_block'][] | undefined;
    cmsSections: Entities['cms_section'][] | undefined;
    cmsPages: Entities['cms_page'][] | undefined;
    documents: Entities['document'][] | undefined;
    appPaymentMethods: Entities['app_payment_method'][] | undefined;
    createdAt: string;
    updatedAt: string;
    themes: Entities['theme'][] | undefined;
    themeMedia: Entities['theme'][] | undefined;
    translated: {alt?: string, title?: string, customFields?: unknown};
}

export interface MediaDefaultFolder {
    id: string;
    entity: string;
    folder: Entities['media_folder'] | undefined;
    customFields: unknown;
    associationFields: Array<unknown>;
    createdAt: string;
    updatedAt: string;
}

export interface MediaFolder {
    id: string;
    useParentConfiguration: boolean;
    configurationId: string;
    defaultFolderId: string;
    parentId: string;
    parent: Entities['media_folder'] | undefined;
    children: Entities['media_folder'][] | undefined;
    childCount: number;
    path: string;
    media: Entities['media'][] | undefined;
    defaultFolder: Entities['media_default_folder'] | undefined;
    configuration: Entities['media_folder_configuration'] | undefined;
    name: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface MediaFolderConfiguration {
    id: string;
    createThumbnails: boolean;
    keepAspectRatio: boolean;
    thumbnailQuality: number;
    private: boolean;
    noAssociation: boolean;
    mediaFolders: Entities['media_folder'][] | undefined;
    mediaThumbnailSizes: Entities['media_thumbnail_size'][] | undefined;
    mediaThumbnailSizesRo: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface MediaFolderConfigurationMediaThumbnailSize {
    mediaFolderConfigurationId: string;
    mediaThumbnailSizeId: string;
    mediaFolderConfiguration: Entities['media_folder_configuration'] | undefined;
    mediaThumbnailSize: Entities['media_thumbnail_size'] | undefined;
}

export interface MediaTag {
    mediaId: string;
    tagId: string;
    media: Entities['media'] | undefined;
    tag: Entities['tag'] | undefined;
}

export interface MediaThumbnail {
    id: string;
    mediaId: string;
    width: number;
    height: number;
    url: string;
    media: Entities['media'] | undefined;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface MediaThumbnailSize {
    id: string;
    width: number;
    height: number;
    mediaFolderConfigurations: Entities['media_folder_configuration'][] | undefined;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface MediaTranslation {
    title: string;
    alt: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    mediaId: string;
    languageId: string;
    media: Entities['media'] | undefined;
    language: Entities['language'] | undefined;
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
    tags: Entities['tag'][] | undefined;
    salutationId: string;
    salutation: Entities['salutation'] | undefined;
    languageId: string;
    language: Entities['language'] | undefined;
    salesChannelId: string;
    salesChannel: Entities['sales_channel'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface NewsletterRecipientTag {
    newsletterRecipientId: string;
    tagId: string;
    newsletterRecipient: Entities['newsletter_recipient'] | undefined;
    tag: Entities['tag'] | undefined;
}

export interface NumberRange {
    id: string;
    typeId: string;
    global: boolean;
    name: string;
    description: string;
    pattern: string;
    start: number;
    customFields: unknown;
    type: Entities['number_range_type'] | undefined;
    numberRangeSalesChannels: Entities['number_range_sales_channel'][] | undefined;
    state: Entities['number_range_state'] | undefined;
    translations: Entities['number_range_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, description?: string, customFields?: unknown};
}

export interface NumberRangeSalesChannel {
    id: string;
    numberRangeId: string;
    salesChannelId: string;
    numberRangeTypeId: string;
    numberRange: Entities['number_range'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
    numberRangeType: Entities['number_range_type'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface NumberRangeState {
    id: string;
    numberRangeId: string;
    lastValue: number;
    numberRange: Entities['number_range'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface NumberRangeTranslation {
    name: string;
    description: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    numberRangeId: string;
    languageId: string;
    numberRange: Entities['number_range'] | undefined;
    language: Entities['language'] | undefined;
}

export interface NumberRangeType {
    id: string;
    technicalName: string;
    typeName: string;
    global: boolean;
    customFields: unknown;
    numberRanges: Entities['number_range'][] | undefined;
    numberRangeSalesChannels: Entities['number_range_sales_channel'][] | undefined;
    translations: Entities['number_range_type_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {typeName?: string, customFields?: unknown};
}

export interface NumberRangeTypeTranslation {
    typeName: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    numberRangeTypeId: string;
    languageId: string;
    numberRangeType: Entities['number_range_type'] | undefined;
    language: Entities['language'] | undefined;
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
    stateMachineState: Entities['state_machine_state'] | undefined;
    ruleIds: Array<unknown>;
    customFields: unknown;
    createdById: string;
    updatedById: string;
    orderCustomer: Entities['order_customer'] | undefined;
    currency: Entities['currency'] | undefined;
    language: Entities['language'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
    addresses: Entities['order_address'][] | undefined;
    billingAddress: Entities['order_address'] | undefined;
    deliveries: Entities['order_delivery'][] | undefined;
    lineItems: Entities['order_line_item'][] | undefined;
    transactions: Entities['order_transaction'][] | undefined;
    documents: Entities['document'][] | undefined;
    tags: Entities['tag'][] | undefined;
    createdBy: Entities['user'] | undefined;
    updatedBy: Entities['user'] | undefined;
    itemRounding: unknown;
    totalRounding: unknown;
    createdAt: string;
    updatedAt: string;
    delayActions: Entities['swag_delay_action'][] | undefined;
    warehouseGroups: Entities['order_warehouse_group'][] | undefined;
    warehouseProducts: Entities['order_product_warehouse'][] | undefined;
    returns: Entities['order_return'][] | undefined;
}

export interface OrderAddress {
    id: string;
    versionId: string;
    countryId: string;
    countryStateId: string;
    orderId: string;
    orderVersionId: string;
    salutationId: string;
    firstName: string;
    lastName: string;
    street: string;
    zipcode: string;
    city: string;
    company: string;
    department: string;
    title: string;
    vatId: string;
    phoneNumber: string;
    additionalAddressLine1: string;
    additionalAddressLine2: string;
    customFields: unknown;
    country: Entities['country'] | undefined;
    countryState: Entities['country_state'] | undefined;
    order: Entities['order'] | undefined;
    orderDeliveries: Entities['order_delivery'][] | undefined;
    salutation: Entities['salutation'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface OrderCustomer {
    id: string;
    versionId: string;
    customerId: string;
    orderId: string;
    orderVersionId: string;
    email: string;
    salutationId: string;
    firstName: string;
    lastName: string;
    company: string;
    title: string;
    vatIds: Array<unknown>;
    customerNumber: string;
    customFields: unknown;
    order: Entities['order'] | undefined;
    customer: Entities['customer'] | undefined;
    salutation: Entities['salutation'] | undefined;
    remoteAddress: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface OrderDelivery {
    id: string;
    versionId: string;
    orderId: string;
    orderVersionId: string;
    shippingOrderAddressId: string;
    shippingOrderAddressVersionId: string;
    shippingMethodId: string;
    stateId: string;
    stateMachineState: Entities['state_machine_state'] | undefined;
    trackingCodes: Array<unknown>;
    shippingDateEarliest: string;
    shippingDateLatest: string;
    shippingCosts: unknown;
    customFields: unknown;
    order: Entities['order'] | undefined;
    shippingOrderAddress: Entities['order_address'] | undefined;
    shippingMethod: Entities['shipping_method'] | undefined;
    positions: Entities['order_delivery_position'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface OrderDeliveryPosition {
    id: string;
    versionId: string;
    orderDeliveryId: string;
    orderDeliveryVersionId: string;
    orderLineItemId: string;
    orderLineItemVersionId: string;
    price: unknown;
    unitPrice: number;
    totalPrice: number;
    quantity: number;
    customFields: unknown;
    orderDelivery: Entities['order_delivery'] | undefined;
    orderLineItem: Entities['order_line_item'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface OrderLineItem {
    id: string;
    versionId: string;
    orderId: string;
    orderVersionId: string;
    productId: string;
    productVersionId: string;
    promotionId: string;
    parentId: string;
    parentVersionId: string;
    coverId: string;
    cover: Entities['media'] | undefined;
    identifier: string;
    referencedId: string;
    quantity: number;
    label: string;
    payload: unknown;
    good: boolean;
    removable: boolean;
    stackable: boolean;
    position: number;
    states: Array<unknown>;
    price: unknown;
    priceDefinition: unknown;
    unitPrice: number;
    totalPrice: number;
    description: string;
    type: string;
    customFields: unknown;
    order: Entities['order'] | undefined;
    product: Entities['product'] | undefined;
    promotion: Entities['promotion'] | undefined;
    orderDeliveryPositions: Entities['order_delivery_position'][] | undefined;
    orderTransactionCaptureRefundPositions: Entities['order_transaction_capture_refund_position'][] | undefined;
    downloads: Entities['order_line_item_download'][] | undefined;
    parent: Entities['order_line_item'] | undefined;
    children: Entities['order_line_item'][] | undefined;
    createdAt: string;
    updatedAt: string;
    returns: Entities['order_return_line_item'][] | undefined;
    stateId: string;
    state: Entities['state_machine_state'] | undefined;
}

export interface OrderLineItemDownload {
    id: string;
    versionId: string;
    orderLineItemId: string;
    orderLineItemVersionId: string;
    mediaId: string;
    position: number;
    accessGranted: boolean;
    orderLineItem: Entities['order_line_item'] | undefined;
    media: Entities['media'] | undefined;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface OrderProductWarehouse {
    id: string;
    versionId: string;
    orderId: string;
    orderVersionId: string;
    productId: string;
    productVersionId: string;
    warehouseId: string;
    quantity: number;
    order: Entities['order'] | undefined;
    product: Entities['product'] | undefined;
    warehouses: Entities['warehouse'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface OrderReturn {
    id: string;
    versionId: string;
    orderId: string;
    orderVersionId: string;
    order: Entities['order'] | undefined;
    price: unknown;
    shippingCosts: unknown;
    stateId: string;
    state: Entities['state_machine_state'] | undefined;
    returnNumber: string;
    requestedAt: string;
    amountTotal: number;
    amountNet: number;
    internalComment: string;
    createdById: string;
    updatedById: string;
    createdBy: Entities['user'] | undefined;
    updatedBy: Entities['user'] | undefined;
    lineItems: Entities['order_return_line_item'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface OrderReturnLineItem {
    id: string;
    versionId: string;
    orderReturnId: string;
    orderReturnVersionId: string;
    orderLineItemId: string;
    orderLineItemVersionId: string;
    reasonId: string;
    reason: Entities['order_return_line_item_reason'] | undefined;
    quantity: number;
    price: unknown;
    refundAmount: number;
    restockQuantity: number;
    internalComment: string;
    customFields: unknown;
    stateId: string;
    state: Entities['state_machine_state'] | undefined;
    return: Entities['order_return'] | undefined;
    lineItem: Entities['order_line_item'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface OrderReturnLineItemReason {
    id: string;
    reasonKey: string;
    content: string;
    translations: Entities['order_return_line_item_reason_translation'][] | undefined;
    lineItems: Entities['order_return_line_item'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {content?: string};
}

export interface OrderReturnLineItemReasonTranslation {
    content: string;
    createdAt: string;
    updatedAt: string;
    orderReturnLineItemReasonId: string;
    languageId: string;
    orderReturnLineItemReason: Entities['order_return_line_item_reason'] | undefined;
    language: Entities['language'] | undefined;
}

export interface OrderTag {
    orderId: string;
    orderVersionId: string;
    tagId: string;
    order: Entities['order'] | undefined;
    tag: Entities['tag'] | undefined;
}

export interface OrderTransaction {
    id: string;
    versionId: string;
    orderId: string;
    orderVersionId: string;
    paymentMethodId: string;
    amount: unknown;
    stateId: string;
    stateMachineState: Entities['state_machine_state'] | undefined;
    customFields: unknown;
    order: Entities['order'] | undefined;
    paymentMethod: Entities['payment_method'] | undefined;
    captures: Entities['order_transaction_capture'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface OrderTransactionCapture {
    id: string;
    orderTransactionId: string;
    orderTransactionVersionId: string;
    stateId: string;
    stateMachineState: Entities['state_machine_state'] | undefined;
    transaction: Entities['order_transaction'] | undefined;
    refunds: Entities['order_transaction_capture_refund'][] | undefined;
    externalReference: string;
    amount: unknown;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface OrderTransactionCaptureRefund {
    id: string;
    captureId: string;
    stateId: string;
    stateMachineState: Entities['state_machine_state'] | undefined;
    transactionCapture: Entities['order_transaction_capture'] | undefined;
    positions: Entities['order_transaction_capture_refund_position'][] | undefined;
    externalReference: string;
    reason: string;
    amount: unknown;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface OrderTransactionCaptureRefundPosition {
    id: string;
    refundId: string;
    orderLineItemId: string;
    orderLineItemVersionId: string;
    orderLineItem: Entities['order_line_item'] | undefined;
    orderTransactionCaptureRefund: Entities['order_transaction_capture_refund'] | undefined;
    externalReference: string;
    reason: string;
    quantity: number;
    amount: unknown;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface OrderWarehouseGroup {
    id: string;
    versionId: string;
    orderId: string;
    orderVersionId: string;
    warehouseGroupId: string;
    order: Entities['order'] | undefined;
    warehouseGroup: Entities['warehouse_group'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface PaymentMethod {
    id: string;
    pluginId: string;
    handlerIdentifier: string;
    name: string;
    distinguishableName: string;
    description: string;
    position: number;
    active: boolean;
    afterOrderEnabled: boolean;
    customFields: unknown;
    availabilityRuleId: string;
    mediaId: string;
    formattedHandlerIdentifier: string;
    synchronous: boolean;
    asynchronous: boolean;
    prepared: boolean;
    refundable: boolean;
    translations: Entities['payment_method_translation'][] | undefined;
    media: Entities['media'] | undefined;
    availabilityRule: Entities['rule'] | undefined;
    salesChannelDefaultAssignments: Entities['sales_channel'][] | undefined;
    plugin: Entities['plugin'] | undefined;
    customers: Entities['customer'][] | undefined;
    orderTransactions: Entities['order_transaction'][] | undefined;
    salesChannels: Entities['sales_channel'][] | undefined;
    appPaymentMethod: Entities['app_payment_method'] | undefined;
    shortName: string;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, distinguishableName?: string, description?: string, customFields?: unknown};
}

export interface PaymentMethodTranslation {
    name: string;
    distinguishableName: string;
    description: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    paymentMethodId: string;
    languageId: string;
    paymentMethod: Entities['payment_method'] | undefined;
    language: Entities['language'] | undefined;
}

export interface Plugin {
    id: string;
    baseClass: string;
    name: string;
    composerName: string;
    autoload: unknown;
    active: boolean;
    managedByComposer: boolean;
    path: string;
    author: string;
    copyright: string;
    license: string;
    version: string;
    upgradeVersion: string;
    installedAt: string;
    upgradedAt: string;
    iconRaw: string;
    icon: string;
    label: string;
    description: string;
    manufacturerLink: string;
    supportLink: string;
    changelog: unknown;
    customFields: unknown;
    translations: Entities['plugin_translation'][] | undefined;
    paymentMethods: Entities['payment_method'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {label?: string, description?: string, manufacturerLink?: string, supportLink?: string, changelog?: unknown, customFields?: unknown};
}

export interface PluginTranslation {
    label: string;
    description: string;
    manufacturerLink: string;
    supportLink: string;
    changelog: unknown;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    pluginId: string;
    languageId: string;
    plugin: Entities['plugin'] | undefined;
    language: Entities['language'] | undefined;
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
    downloads: Entities['product_download'][] | undefined;
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
    parent: Entities['product'] | undefined;
    children: Entities['product'][] | undefined;
    deliveryTime: Entities['delivery_time'] | undefined;
    tax: Entities['tax'] | undefined;
    manufacturer: Entities['product_manufacturer'] | undefined;
    unit: Entities['unit'] | undefined;
    cover: Entities['product_media'] | undefined;
    featureSet: Entities['product_feature_set'] | undefined;
    cmsPage: Entities['cms_page'] | undefined;
    canonicalProduct: Entities['product'] | undefined;
    prices: Entities['product_price'][] | undefined;
    media: Entities['product_media'][] | undefined;
    crossSellings: Entities['product_cross_selling'][] | undefined;
    crossSellingAssignedProducts: Entities['product_cross_selling_assigned_products'][] | undefined;
    configuratorSettings: Entities['product_configurator_setting'][] | undefined;
    visibilities: Entities['product_visibility'][] | undefined;
    searchKeywords: Entities['product_search_keyword'][] | undefined;
    productReviews: Entities['product_review'][] | undefined;
    mainCategories: Entities['main_category'][] | undefined;
    seoUrls: Entities['seo_url'][] | undefined;
    orderLineItems: Entities['order_line_item'][] | undefined;
    wishlists: Entities['customer_wishlist_product'][] | undefined;
    options: Entities['property_group_option'][] | undefined;
    properties: Entities['property_group_option'][] | undefined;
    categories: Entities['category'][] | undefined;
    streams: Entities['product_stream'][] | undefined;
    categoriesRo: Entities['category'][] | undefined;
    tags: Entities['tag'][] | undefined;
    customFieldSets: Entities['custom_field_set'][] | undefined;
    translations: Entities['product_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    customPrice: Entities['custom_price'][] | undefined;
    warehouseGroups: Entities['warehouse_group'][] | undefined;
    warehouses: Entities['product_warehouse'][] | undefined;
    orderWarehouses: Entities['order_product_warehouse'][] | undefined;
    translated: {metaDescription?: string, name?: string, keywords?: string, description?: string, metaTitle?: string, packUnit?: string, packUnitPlural?: string, customFields?: unknown, slotConfig?: unknown, customSearchKeywords?: Array<unknown>};
}

export interface ProductCategory {
    productId: string;
    productVersionId: string;
    categoryId: string;
    categoryVersionId: string;
    product: Entities['product'] | undefined;
    category: Entities['category'] | undefined;
}

export interface ProductCategoryTree {
    productId: string;
    productVersionId: string;
    categoryId: string;
    categoryVersionId: string;
    product: Entities['product'] | undefined;
    category: Entities['category'] | undefined;
}

export interface ProductConfiguratorSetting {
    id: string;
    versionId: string;
    productId: string;
    productVersionId: string;
    mediaId: string;
    optionId: string;
    price: unknown;
    position: number;
    product: Entities['product'] | undefined;
    media: Entities['media'] | undefined;
    option: Entities['property_group_option'] | undefined;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface ProductCrossSelling {
    id: string;
    name: string;
    position: number;
    sortBy: string;
    sortDirection: string;
    type: string;
    active: boolean;
    limit: number;
    productId: string;
    productVersionId: string;
    product: Entities['product'] | undefined;
    productStreamId: string;
    productStream: Entities['product_stream'] | undefined;
    assignedProducts: Entities['product_cross_selling_assigned_products'][] | undefined;
    translations: Entities['product_cross_selling_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string};
}

export interface ProductCrossSellingAssignedProducts {
    id: string;
    crossSellingId: string;
    productId: string;
    productVersionId: string;
    product: Entities['product'] | undefined;
    crossSelling: Entities['product_cross_selling'] | undefined;
    position: number;
    createdAt: string;
    updatedAt: string;
}

export interface ProductCrossSellingTranslation {
    name: string;
    createdAt: string;
    updatedAt: string;
    productCrossSellingId: string;
    languageId: string;
    productCrossSelling: Entities['product_cross_selling'] | undefined;
    language: Entities['language'] | undefined;
}

export interface ProductCustomFieldSet {
    productId: string;
    customFieldSetId: string;
    productVersionId: string;
    product: Entities['product'] | undefined;
    customFieldSet: Entities['custom_field_set'] | undefined;
}

export interface ProductDownload {
    id: string;
    versionId: string;
    productId: string;
    productVersionId: string;
    mediaId: string;
    position: number;
    product: Entities['product'] | undefined;
    media: Entities['media'] | undefined;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface ProductExport {
    id: string;
    productStreamId: string;
    storefrontSalesChannelId: string;
    salesChannelId: string;
    salesChannelDomainId: string;
    currencyId: string;
    fileName: string;
    accessKey: string;
    encoding: string;
    fileFormat: string;
    includeVariants: boolean;
    generateByCronjob: boolean;
    generatedAt: string;
    interval: number;
    headerTemplate: string;
    bodyTemplate: string;
    footerTemplate: string;
    pausedSchedule: boolean;
    isRunning: boolean;
    productStream: Entities['product_stream'] | undefined;
    storefrontSalesChannel: Entities['sales_channel'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
    salesChannelDomain: Entities['sales_channel_domain'] | undefined;
    currency: Entities['currency'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface ProductFeatureSet {
    id: string;
    name: string;
    description: string;
    features: unknown;
    products: Entities['product'][] | undefined;
    translations: Entities['product_feature_set_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, description?: string};
}

export interface ProductFeatureSetTranslation {
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    productFeatureSetId: string;
    languageId: string;
    productFeatureSet: Entities['product_feature_set'] | undefined;
    language: Entities['language'] | undefined;
}

export interface ProductKeywordDictionary {
    id: string;
    languageId: string;
    keyword: string;
    reversed: string;
    language: Entities['language'] | undefined;
}

export interface ProductManufacturer {
    id: string;
    versionId: string;
    mediaId: string;
    link: string;
    name: string;
    description: string;
    customFields: unknown;
    media: Entities['media'] | undefined;
    products: Entities['product'][] | undefined;
    translations: Entities['product_manufacturer_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, description?: string, customFields?: unknown};
}

export interface ProductManufacturerTranslation {
    name: string;
    description: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    productManufacturerId: string;
    languageId: string;
    productManufacturer: Entities['product_manufacturer'] | undefined;
    language: Entities['language'] | undefined;
    productManufacturerVersionId: string;
}

export interface ProductMedia {
    id: string;
    versionId: string;
    productId: string;
    productVersionId: string;
    mediaId: string;
    position: number;
    product: Entities['product'] | undefined;
    media: Entities['media'] | undefined;
    coverProducts: Entities['product'][] | undefined;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface ProductOption {
    productId: string;
    productVersionId: string;
    optionId: string;
    product: Entities['product'] | undefined;
    option: Entities['property_group_option'] | undefined;
}

export interface ProductPrice {
    id: string;
    versionId: string;
    productId: string;
    productVersionId: string;
    ruleId: string;
    price: unknown;
    quantityStart: number;
    quantityEnd: number;
    product: Entities['product'] | undefined;
    rule: Entities['rule'] | undefined;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface ProductProperty {
    productId: string;
    productVersionId: string;
    optionId: string;
    product: Entities['product'] | undefined;
    option: Entities['property_group_option'] | undefined;
}

export interface ProductReview {
    id: string;
    productId: string;
    productVersionId: string;
    customerId: string;
    salesChannelId: string;
    languageId: string;
    externalUser: string;
    externalEmail: string;
    title: string;
    content: string;
    points: number;
    status: boolean;
    comment: string;
    product: Entities['product'] | undefined;
    customer: Entities['customer'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
    language: Entities['language'] | undefined;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface ProductSearchConfig {
    id: string;
    languageId: string;
    andLogic: boolean;
    minSearchLength: number;
    excludedTerms: Array<unknown>;
    language: Entities['language'] | undefined;
    configFields: Entities['product_search_config_field'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface ProductSearchConfigField {
    id: string;
    searchConfigId: string;
    customFieldId: string;
    field: string;
    tokenize: boolean;
    searchable: boolean;
    ranking: number;
    searchConfig: Entities['product_search_config'] | undefined;
    customField: Entities['custom_field'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface ProductSearchKeyword {
    id: string;
    versionId: string;
    languageId: string;
    productId: string;
    productVersionId: string;
    keyword: string;
    ranking: number;
    product: Entities['product'] | undefined;
    language: Entities['language'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface ProductSorting {
    id: string;
    locked: boolean;
    key: string;
    priority: number;
    active: boolean;
    fields: unknown;
    label: string;
    translations: Entities['product_sorting_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {label?: string};
}

export interface ProductSortingTranslation {
    label: string;
    createdAt: string;
    updatedAt: string;
    productSortingId: string;
    languageId: string;
    productSorting: Entities['product_sorting'] | undefined;
    language: Entities['language'] | undefined;
}

export interface ProductStream {
    id: string;
    apiFilter: unknown;
    invalid: boolean;
    name: string;
    description: string;
    customFields: unknown;
    translations: Entities['product_stream_translation'][] | undefined;
    filters: Entities['product_stream_filter'][] | undefined;
    productCrossSellings: Entities['product_cross_selling'][] | undefined;
    productExports: Entities['product_export'][] | undefined;
    categories: Entities['category'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, description?: string, customFields?: unknown};
}

export interface ProductStreamFilter {
    id: string;
    productStreamId: string;
    parentId: string;
    type: string;
    field: string;
    operator: string;
    value: string;
    parameters: unknown;
    position: number;
    productStream: Entities['product_stream'] | undefined;
    parent: Entities['product_stream_filter'] | undefined;
    queries: Entities['product_stream_filter'][] | undefined;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface ProductStreamMapping {
    productId: string;
    productVersionId: string;
    productStreamId: string;
    product: Entities['product'] | undefined;
    productStream: Entities['product_stream'] | undefined;
}

export interface ProductStreamTranslation {
    name: string;
    description: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    productStreamId: string;
    languageId: string;
    productStream: Entities['product_stream'] | undefined;
    language: Entities['language'] | undefined;
}

export interface ProductTag {
    productId: string;
    productVersionId: string;
    tagId: string;
    product: Entities['product'] | undefined;
    tag: Entities['tag'] | undefined;
}

export interface ProductTranslation {
    metaDescription: string;
    name: string;
    keywords: string;
    description: string;
    metaTitle: string;
    packUnit: string;
    packUnitPlural: string;
    customSearchKeywords: Array<unknown>;
    slotConfig: unknown;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    productId: string;
    languageId: string;
    product: Entities['product'] | undefined;
    language: Entities['language'] | undefined;
    productVersionId: string;
}

export interface ProductVisibility {
    id: string;
    productId: string;
    productVersionId: string;
    salesChannelId: string;
    visibility: number;
    salesChannel: Entities['sales_channel'] | undefined;
    product: Entities['product'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface ProductWarehouse {
    id: string;
    productId: string;
    productVersionId: string;
    warehouseId: string;
    stock: number;
    product: Entities['product'] | undefined;
    warehouse: Entities['warehouse'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface ProductWarehouseGroup {
    productId: string;
    productVersionId: string;
    warehouseGroupId: string;
    product: Entities['product'] | undefined;
    warehouseGroup: Entities['warehouse_group'] | undefined;
}

export interface Promotion {
    id: string;
    name: string;
    active: boolean;
    validFrom: string;
    validUntil: string;
    maxRedemptionsGlobal: number;
    maxRedemptionsPerCustomer: number;
    priority: number;
    exclusive: boolean;
    code: string;
    useCodes: boolean;
    useIndividualCodes: boolean;
    individualCodePattern: string;
    useSetGroups: boolean;
    customerRestriction: boolean;
    preventCombination: boolean;
    orderCount: number;
    ordersPerCustomerCount: unknown;
    setgroups: Entities['promotion_setgroup'][] | undefined;
    salesChannels: Entities['promotion_sales_channel'][] | undefined;
    discounts: Entities['promotion_discount'][] | undefined;
    individualCodes: Entities['promotion_individual_code'][] | undefined;
    personaRules: Entities['rule'][] | undefined;
    personaCustomers: Entities['customer'][] | undefined;
    orderRules: Entities['rule'][] | undefined;
    cartRules: Entities['rule'][] | undefined;
    orderLineItems: Entities['order_line_item'][] | undefined;
    translations: Entities['promotion_translation'][] | undefined;
    exclusionIds: Array<unknown>;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, customFields?: unknown};
}

export interface PromotionCartRule {
    promotionId: string;
    ruleId: string;
    promotion: Entities['promotion'] | undefined;
    rule: Entities['rule'] | undefined;
}

export interface PromotionDiscount {
    id: string;
    promotionId: string;
    scope: string;
    type: string;
    value: number;
    considerAdvancedRules: boolean;
    maxValue: number;
    sorterKey: string;
    applierKey: string;
    usageKey: string;
    pickerKey: string;
    promotion: Entities['promotion'] | undefined;
    discountRules: Entities['rule'][] | undefined;
    promotionDiscountPrices: Entities['promotion_discount_prices'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface PromotionDiscountPrices {
    id: string;
    discountId: string;
    currencyId: string;
    price: number;
    promotionDiscount: Entities['promotion_discount'] | undefined;
    currency: Entities['currency'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface PromotionDiscountRule {
    discountId: string;
    ruleId: string;
    discount: Entities['promotion_discount'] | undefined;
    rule: Entities['rule'] | undefined;
}

export interface PromotionIndividualCode {
    id: string;
    promotionId: string;
    code: string;
    payload: unknown;
    promotion: Entities['promotion'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface PromotionOrderRule {
    promotionId: string;
    ruleId: string;
    promotion: Entities['promotion'] | undefined;
    rule: Entities['rule'] | undefined;
}

export interface PromotionPersonaCustomer {
    promotionId: string;
    customerId: string;
    promotion: Entities['promotion'] | undefined;
    customer: Entities['customer'] | undefined;
}

export interface PromotionPersonaRule {
    promotionId: string;
    ruleId: string;
    promotion: Entities['promotion'] | undefined;
    rule: Entities['rule'] | undefined;
}

export interface PromotionSalesChannel {
    id: string;
    promotionId: string;
    salesChannelId: string;
    priority: number;
    promotion: Entities['promotion'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface PromotionSetgroup {
    id: string;
    promotionId: string;
    packagerKey: string;
    sorterKey: string;
    value: number;
    promotion: Entities['promotion'] | undefined;
    setGroupRules: Entities['rule'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface PromotionSetgroupRule {
    setgroupId: string;
    ruleId: string;
    setgroup: Entities['promotion_setgroup'] | undefined;
    rule: Entities['rule'] | undefined;
}

export interface PromotionTranslation {
    name: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    promotionId: string;
    languageId: string;
    promotion: Entities['promotion'] | undefined;
    language: Entities['language'] | undefined;
}

export interface PropertyGroup {
    id: string;
    name: string;
    description: string;
    displayType: string;
    sortingType: string;
    filterable: boolean;
    visibleOnProductDetailPage: boolean;
    position: number;
    customFields: unknown;
    options: Entities['property_group_option'][] | undefined;
    translations: Entities['property_group_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, description?: string, position?: number, customFields?: unknown};
}

export interface PropertyGroupOption {
    id: string;
    groupId: string;
    name: string;
    position: number;
    colorHexCode: string;
    mediaId: string;
    customFields: unknown;
    media: Entities['media'] | undefined;
    group: Entities['property_group'] | undefined;
    translations: Entities['property_group_option_translation'][] | undefined;
    productConfiguratorSettings: Entities['product_configurator_setting'][] | undefined;
    productProperties: Entities['product'][] | undefined;
    productOptions: Entities['product'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, position?: number, customFields?: unknown};
}

export interface PropertyGroupOptionTranslation {
    name: string;
    position: number;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    propertyGroupOptionId: string;
    languageId: string;
    propertyGroupOption: Entities['property_group_option'] | undefined;
    language: Entities['language'] | undefined;
}

export interface PropertyGroupTranslation {
    name: string;
    description: string;
    position: number;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    propertyGroupId: string;
    languageId: string;
    propertyGroup: Entities['property_group'] | undefined;
    language: Entities['language'] | undefined;
}

export interface Rule {
    id: string;
    name: string;
    priority: number;
    description: string;
    payload: string;
    invalid: boolean;
    areas: Array<unknown>;
    customFields: unknown;
    moduleTypes: unknown;
    conditions: Entities['rule_condition'][] | undefined;
    productPrices: Entities['product_price'][] | undefined;
    shippingMethodPrices: Entities['shipping_method_price'][] | undefined;
    shippingMethodPriceCalculations: Entities['shipping_method_price'][] | undefined;
    shippingMethods: Entities['shipping_method'][] | undefined;
    paymentMethods: Entities['payment_method'][] | undefined;
    personaPromotions: Entities['promotion'][] | undefined;
    flowSequences: Entities['flow_sequence'][] | undefined;
    taxProviders: Entities['tax_provider'][] | undefined;
    tags: Entities['tag'][] | undefined;
    orderPromotions: Entities['promotion'][] | undefined;
    cartPromotions: Entities['promotion'][] | undefined;
    promotionDiscounts: Entities['promotion_discount'][] | undefined;
    promotionSetGroups: Entities['promotion_setgroup'][] | undefined;
    createdAt: string;
    updatedAt: string;
    swagCmsExtensionsBlockRules: Entities['swag_cms_extensions_block_rule'][] | undefined;
    warehouseGroup: Entities['warehouse_group'][] | undefined;
}

export interface RuleCondition {
    id: string;
    type: string;
    ruleId: string;
    scriptId: string;
    parentId: string;
    value: unknown;
    position: number;
    rule: Entities['rule'] | undefined;
    appScriptCondition: Entities['app_script_condition'] | undefined;
    parent: Entities['rule_condition'] | undefined;
    children: Entities['rule_condition'][] | undefined;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface RuleTag {
    ruleId: string;
    tagId: string;
    rule: Entities['rule'] | undefined;
    tag: Entities['tag'] | undefined;
}

export interface SalesChannel {
    id: string;
    typeId: string;
    languageId: string;
    customerGroupId: string;
    currencyId: string;
    paymentMethodId: string;
    shippingMethodId: string;
    countryId: string;
    analyticsId: string;
    navigationCategoryId: string;
    navigationCategoryVersionId: string;
    navigationCategoryDepth: number;
    footerCategoryId: string;
    footerCategoryVersionId: string;
    serviceCategoryId: string;
    serviceCategoryVersionId: string;
    mailHeaderFooterId: string;
    hreflangDefaultDomainId: string;
    name: string;
    shortName: string;
    taxCalculationType: string;
    accessKey: string;
    configuration: unknown;
    active: boolean;
    hreflangActive: boolean;
    maintenance: boolean;
    maintenanceIpWhitelist: Array<unknown>;
    customFields: unknown;
    translations: Entities['sales_channel_translation'][] | undefined;
    currencies: Entities['currency'][] | undefined;
    languages: Entities['language'][] | undefined;
    countries: Entities['country'][] | undefined;
    paymentMethods: Entities['payment_method'][] | undefined;
    paymentMethodIds: Array<unknown>;
    shippingMethods: Entities['shipping_method'][] | undefined;
    type: Entities['sales_channel_type'] | undefined;
    language: Entities['language'] | undefined;
    customerGroup: Entities['customer_group'] | undefined;
    currency: Entities['currency'] | undefined;
    paymentMethod: Entities['payment_method'] | undefined;
    shippingMethod: Entities['shipping_method'] | undefined;
    country: Entities['country'] | undefined;
    orders: Entities['order'][] | undefined;
    customers: Entities['customer'][] | undefined;
    homeCmsPageId: string;
    homeCmsPageVersionId: string;
    homeCmsPage: Entities['cms_page'] | undefined;
    homeSlotConfig: unknown;
    homeEnabled: boolean;
    homeName: string;
    homeMetaTitle: string;
    homeMetaDescription: string;
    homeKeywords: string;
    domains: Entities['sales_channel_domain'][] | undefined;
    systemConfigs: Entities['system_config'][] | undefined;
    navigationCategory: Entities['category'] | undefined;
    footerCategory: Entities['category'] | undefined;
    serviceCategory: Entities['category'] | undefined;
    productVisibilities: Entities['product_visibility'][] | undefined;
    hreflangDefaultDomain: Entities['sales_channel_domain'] | undefined;
    mailHeaderFooter: Entities['mail_header_footer'] | undefined;
    newsletterRecipients: Entities['newsletter_recipient'][] | undefined;
    numberRangeSalesChannels: Entities['number_range_sales_channel'][] | undefined;
    promotionSalesChannels: Entities['promotion_sales_channel'][] | undefined;
    documentBaseConfigSalesChannels: Entities['document_base_config_sales_channel'][] | undefined;
    productReviews: Entities['product_review'][] | undefined;
    seoUrls: Entities['seo_url'][] | undefined;
    seoUrlTemplates: Entities['seo_url_template'][] | undefined;
    mainCategories: Entities['main_category'][] | undefined;
    productExports: Entities['product_export'][] | undefined;
    analytics: Entities['sales_channel_analytics'] | undefined;
    customerGroupsRegistrations: Entities['customer_group'][] | undefined;
    landingPages: Entities['landing_page'][] | undefined;
    boundCustomers: Entities['customer'][] | undefined;
    wishlists: Entities['customer_wishlist'][] | undefined;
    createdAt: string;
    updatedAt: string;
    themes: Entities['theme'][] | undefined;
    translated: {name?: string, customFields?: unknown, homeSlotConfig?: unknown, homeEnabled?: boolean, homeName?: string, homeMetaTitle?: string, homeMetaDescription?: string, homeKeywords?: string};
}

export interface SalesChannelAnalytics {
    id: string;
    trackingId: string;
    active: boolean;
    trackOrders: boolean;
    anonymizeIp: boolean;
    salesChannel: Entities['sales_channel'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface SalesChannelCountry {
    salesChannelId: string;
    countryId: string;
    salesChannel: Entities['sales_channel'] | undefined;
    country: Entities['country'] | undefined;
}

export interface SalesChannelCurrency {
    salesChannelId: string;
    currencyId: string;
    salesChannel: Entities['sales_channel'] | undefined;
    currency: Entities['currency'] | undefined;
}

export interface SalesChannelDomain {
    id: string;
    url: string;
    salesChannelId: string;
    languageId: string;
    currencyId: string;
    snippetSetId: string;
    salesChannel: Entities['sales_channel'] | undefined;
    language: Entities['language'] | undefined;
    currency: Entities['currency'] | undefined;
    snippetSet: Entities['snippet_set'] | undefined;
    salesChannelDefaultHreflang: Entities['sales_channel'] | undefined;
    productExports: Entities['product_export'][] | undefined;
    hreflangUseOnlyLocale: boolean;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface SalesChannelLanguage {
    salesChannelId: string;
    languageId: string;
    salesChannel: Entities['sales_channel'] | undefined;
    language: Entities['language'] | undefined;
}

export interface SalesChannelPaymentMethod {
    salesChannelId: string;
    paymentMethodId: string;
    salesChannel: Entities['sales_channel'] | undefined;
    paymentMethod: Entities['payment_method'] | undefined;
}

export interface SalesChannelShippingMethod {
    salesChannelId: string;
    shippingMethodId: string;
    salesChannel: Entities['sales_channel'] | undefined;
    shippingMethod: Entities['shipping_method'] | undefined;
}

export interface SalesChannelTranslation {
    name: string;
    homeSlotConfig: unknown;
    homeEnabled: boolean;
    homeName: string;
    homeMetaTitle: string;
    homeMetaDescription: string;
    homeKeywords: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    salesChannelId: string;
    languageId: string;
    salesChannel: Entities['sales_channel'] | undefined;
    language: Entities['language'] | undefined;
}

export interface SalesChannelType {
    id: string;
    coverUrl: string;
    iconName: string;
    screenshotUrls: Array<unknown>;
    name: string;
    manufacturer: string;
    description: string;
    descriptionLong: string;
    customFields: unknown;
    translations: Entities['sales_channel_type_translation'][] | undefined;
    salesChannels: Entities['sales_channel'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, manufacturer?: string, description?: string, descriptionLong?: string, customFields?: unknown};
}

export interface SalesChannelTypeTranslation {
    name: string;
    manufacturer: string;
    description: string;
    descriptionLong: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    salesChannelTypeId: string;
    languageId: string;
    salesChannelType: Entities['sales_channel_type'] | undefined;
    language: Entities['language'] | undefined;
}

export interface Salutation {
    id: string;
    salutationKey: string;
    displayName: string;
    letterName: string;
    customFields: unknown;
    translations: Entities['salutation_translation'][] | undefined;
    customers: Entities['customer'][] | undefined;
    customerAddresses: Entities['customer_address'][] | undefined;
    orderCustomers: Entities['order_customer'][] | undefined;
    orderAddresses: Entities['order_address'][] | undefined;
    newsletterRecipients: Entities['newsletter_recipient'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {displayName?: string, letterName?: string, customFields?: unknown};
}

export interface SalutationTranslation {
    displayName: string;
    letterName: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    salutationId: string;
    languageId: string;
    salutation: Entities['salutation'] | undefined;
    language: Entities['language'] | undefined;
}

export interface ScheduledTask {
    id: string;
    name: string;
    scheduledTaskClass: string;
    runInterval: number;
    status: string;
    lastExecutionTime: string;
    nextExecutionTime: string;
    defaultRunInterval: number;
    createdAt: string;
    updatedAt: string;
}

export interface Script {
    id: string;
    script: string;
    hook: string;
    name: string;
    active: boolean;
    appId: string;
    app: Entities['app'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface SeoUrl {
    id: string;
    salesChannelId: string;
    languageId: string;
    foreignKey: string;
    routeName: string;
    pathInfo: string;
    seoPathInfo: string;
    isCanonical: boolean;
    isModified: boolean;
    isDeleted: boolean;
    url: string;
    customFields: unknown;
    language: Entities['language'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
    isValid: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface SeoUrlTemplate {
    id: string;
    salesChannelId: string;
    entityName: string;
    routeName: string;
    template: string;
    isValid: boolean;
    customFields: unknown;
    salesChannel: Entities['sales_channel'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface ShippingMethod {
    id: string;
    name: string;
    active: boolean;
    position: number;
    customFields: unknown;
    availabilityRuleId: string;
    mediaId: string;
    deliveryTimeId: string;
    taxType: string;
    taxId: string;
    deliveryTime: Entities['delivery_time'] | undefined;
    description: string;
    trackingUrl: string;
    translations: Entities['shipping_method_translation'][] | undefined;
    availabilityRule: Entities['rule'] | undefined;
    prices: Entities['shipping_method_price'][] | undefined;
    media: Entities['media'] | undefined;
    tags: Entities['tag'][] | undefined;
    orderDeliveries: Entities['order_delivery'][] | undefined;
    salesChannels: Entities['sales_channel'][] | undefined;
    salesChannelDefaultAssignments: Entities['sales_channel'][] | undefined;
    tax: Entities['tax'] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, customFields?: unknown, description?: string, trackingUrl?: string};
}

export interface ShippingMethodPrice {
    id: string;
    shippingMethodId: string;
    ruleId: string;
    calculation: number;
    calculationRuleId: string;
    quantityStart: number;
    quantityEnd: number;
    currencyPrice: unknown;
    customFields: unknown;
    shippingMethod: Entities['shipping_method'] | undefined;
    rule: Entities['rule'] | undefined;
    calculationRule: Entities['rule'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface ShippingMethodTag {
    shippingMethodId: string;
    tagId: string;
    shippingMethod: Entities['shipping_method'] | undefined;
    tag: Entities['tag'] | undefined;
}

export interface ShippingMethodTranslation {
    name: string;
    description: string;
    trackingUrl: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    shippingMethodId: string;
    languageId: string;
    shippingMethod: Entities['shipping_method'] | undefined;
    language: Entities['language'] | undefined;
}

export interface Snippet {
    id: string;
    setId: string;
    translationKey: string;
    value: string;
    author: string;
    customFields: unknown;
    set: Entities['snippet_set'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface SnippetSet {
    id: string;
    name: string;
    baseFile: string;
    iso: string;
    customFields: unknown;
    snippets: Entities['snippet'][] | undefined;
    salesChannelDomains: Entities['sales_channel_domain'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface StateMachine {
    id: string;
    technicalName: string;
    name: string;
    customFields: unknown;
    states: Entities['state_machine_state'][] | undefined;
    transitions: Entities['state_machine_transition'][] | undefined;
    initialStateId: string;
    translations: Entities['state_machine_translation'][] | undefined;
    historyEntries: Entities['state_machine_history'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, customFields?: unknown};
}

export interface StateMachineHistory {
    id: string;
    stateMachineId: string;
    stateMachine: Entities['state_machine'] | undefined;
    entityName: string;
    fromStateId: string;
    fromStateMachineState: Entities['state_machine_state'] | undefined;
    toStateId: string;
    toStateMachineState: Entities['state_machine_state'] | undefined;
    transitionActionName: string;
    userId: string;
    user: Entities['user'] | undefined;
    entityId: unknown;
    referencedId: string;
    referencedVersionId: string;
    createdAt: string;
    updatedAt: string;
}

export interface StateMachineState {
    id: string;
    technicalName: string;
    name: string;
    stateMachineId: string;
    stateMachine: Entities['state_machine'] | undefined;
    fromStateMachineTransitions: Entities['state_machine_transition'][] | undefined;
    toStateMachineTransitions: Entities['state_machine_transition'][] | undefined;
    translations: Entities['state_machine_state_translation'][] | undefined;
    orderTransactions: Entities['order_transaction'][] | undefined;
    orderDeliveries: Entities['order_delivery'][] | undefined;
    orders: Entities['order'][] | undefined;
    orderTransactionCaptures: Entities['order_transaction_capture'][] | undefined;
    orderTransactionCaptureRefunds: Entities['order_transaction_capture_refund'][] | undefined;
    customFields: unknown;
    toStateMachineHistoryEntries: Entities['state_machine_history'][] | undefined;
    fromStateMachineHistoryEntries: Entities['state_machine_history'][] | undefined;
    createdAt: string;
    updatedAt: string;
    orderReturns: Entities['order_return'][] | undefined;
    orderReturnLineItems: Entities['order_return_line_item'][] | undefined;
    orderLineItems: Entities['order_line_item'][] | undefined;
    translated: {name?: string, customFields?: unknown};
}

export interface StateMachineStateTranslation {
    name: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    stateMachineStateId: string;
    languageId: string;
    stateMachineState: Entities['state_machine_state'] | undefined;
    language: Entities['language'] | undefined;
}

export interface StateMachineTransition {
    id: string;
    actionName: string;
    stateMachineId: string;
    stateMachine: Entities['state_machine'] | undefined;
    fromStateId: string;
    fromStateMachineState: Entities['state_machine_state'] | undefined;
    toStateId: string;
    toStateMachineState: Entities['state_machine_state'] | undefined;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface StateMachineTranslation {
    name: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    stateMachineId: string;
    languageId: string;
    stateMachine: Entities['state_machine'] | undefined;
    language: Entities['language'] | undefined;
}

export interface SwagB2bCompany {
    id: string;
    companyCustomerId: string;
    companyCustomer: Entities['customer'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface SwagB2bEmployee {
    id: string;
    email: string;
    password: string;
    companyCustomerId: string;
    companyCustomer: Entities['customer'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface SwagCmsExtensionsBlockRule {
    id: string;
    inverted: boolean;
    visibilityRuleId: string;
    cmsBlockId: string;
    cmsBlockVersionId: string;
    visibilityRule: Entities['rule'] | undefined;
    cmsBlock: Entities['cms_block'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface SwagCmsExtensionsForm {
    id: string;
    cmsSlotId: string;
    cmsSlotVersionId: string;
    isTemplate: boolean;
    technicalName: string;
    title: string;
    successMessage: string;
    receivers: unknown;
    mailTemplateId: string;
    groups: Entities['swag_cms_extensions_form_group'][] | undefined;
    cmsSlot: Entities['cms_slot'] | undefined;
    mailTemplate: Entities['mail_template'] | undefined;
    translations: Entities['swag_cms_extensions_form_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {title?: string, successMessage?: string, receivers?: unknown};
}

export interface SwagCmsExtensionsFormGroup {
    id: string;
    formId: string;
    title: string;
    technicalName: string;
    position: number;
    fields: Entities['swag_cms_extensions_form_group_field'][] | undefined;
    form: Entities['swag_cms_extensions_form'] | undefined;
    translations: Entities['swag_cms_extensions_form_group_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {title?: string};
}

export interface SwagCmsExtensionsFormGroupField {
    id: string;
    groupId: string;
    position: number;
    width: number;
    type: string;
    technicalName: string;
    required: boolean;
    label: string;
    placeholder: string;
    errorMessage: string;
    config: unknown;
    translations: Entities['swag_cms_extensions_form_group_field_translation'][] | undefined;
    group: Entities['swag_cms_extensions_form_group'] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {label?: string, placeholder?: string, errorMessage?: string, config?: unknown};
}

export interface SwagCmsExtensionsFormGroupFieldTranslation {
    label: string;
    placeholder: string;
    errorMessage: string;
    config: unknown;
    createdAt: string;
    updatedAt: string;
    swagCmsExtensionsFormGroupFieldId: string;
    languageId: string;
    swagCmsExtensionsFormGroupField: Entities['swag_cms_extensions_form_group_field'] | undefined;
    language: Entities['language'] | undefined;
}

export interface SwagCmsExtensionsFormGroupTranslation {
    title: string;
    createdAt: string;
    updatedAt: string;
    swagCmsExtensionsFormGroupId: string;
    languageId: string;
    swagCmsExtensionsFormGroup: Entities['swag_cms_extensions_form_group'] | undefined;
    language: Entities['language'] | undefined;
}

export interface SwagCmsExtensionsFormTranslation {
    title: string;
    successMessage: string;
    receivers: unknown;
    createdAt: string;
    updatedAt: string;
    swagCmsExtensionsFormId: string;
    languageId: string;
    swagCmsExtensionsForm: Entities['swag_cms_extensions_form'] | undefined;
    language: Entities['language'] | undefined;
}

export interface SwagCmsExtensionsQuickview {
    id: string;
    active: boolean;
    cmsBlockId: string;
    cmsBlockVersionId: string;
    cmsBlock: Entities['cms_block'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface SwagCmsExtensionsScrollNavigation {
    id: string;
    active: boolean;
    cmsSectionVersionId: string;
    displayName: string;
    translations: Entities['swag_cms_extensions_scroll_navigation_translation'][] | undefined;
    cmsSectionId: string;
    cmsSection: Entities['cms_section'] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {displayName?: string};
}

export interface SwagCmsExtensionsScrollNavigationPageSettings {
    id: string;
    active: boolean;
    duration: number;
    easing: string;
    bouncy: boolean;
    easingDegree: number;
    cmsPageId: string;
    cmsPageVersionId: string;
    cmsPage: Entities['cms_page'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface SwagCmsExtensionsScrollNavigationTranslation {
    displayName: string;
    createdAt: string;
    updatedAt: string;
    swagCmsExtensionsScrollNavigationId: string;
    languageId: string;
    swagCmsExtensionsScrollNavigation: Entities['swag_cms_extensions_scroll_navigation'] | undefined;
    language: Entities['language'] | undefined;
}

export interface SwagDelayAction {
    id: string;
    eventName: string;
    flowId: string;
    orderId: string;
    orderVersionId: string;
    customerId: string;
    executionTime: string;
    expired: boolean;
    delaySequenceId: string;
    stored: unknown;
    order: Entities['order'] | undefined;
    customer: Entities['customer'] | undefined;
    flow: Entities['flow'] | undefined;
    sequence: Entities['flow_sequence'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface SwagSequenceWebhookEventLog {
    sequenceId: string;
    webhookEventLogId: string;
    flowSequence: Entities['flow_sequence'] | undefined;
    webhookEventLog: Entities['webhook_event_log'] | undefined;
}

export interface SystemConfig {
    id: string;
    configurationKey: string;
    configurationValue: unknown;
    salesChannelId: string;
    salesChannel: Entities['sales_channel'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface Tag {
    id: string;
    name: string;
    products: Entities['product'][] | undefined;
    media: Entities['media'][] | undefined;
    categories: Entities['category'][] | undefined;
    customers: Entities['customer'][] | undefined;
    orders: Entities['order'][] | undefined;
    shippingMethods: Entities['shipping_method'][] | undefined;
    newsletterRecipients: Entities['newsletter_recipient'][] | undefined;
    landingPages: Entities['landing_page'][] | undefined;
    rules: Entities['rule'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface Tax {
    id: string;
    taxRate: number;
    name: string;
    position: number;
    customFields: unknown;
    products: Entities['product'][] | undefined;
    rules: Entities['tax_rule'][] | undefined;
    shippingMethods: Entities['shipping_method'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface TaxProvider {
    id: string;
    identifier: string;
    active: boolean;
    name: string;
    priority: number;
    processUrl: string;
    availabilityRuleId: string;
    appId: string;
    customFields: unknown;
    translations: Entities['tax_provider_translation'][] | undefined;
    availabilityRule: Entities['rule'] | undefined;
    app: Entities['app'] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {name?: string, customFields?: unknown};
}

export interface TaxProviderTranslation {
    name: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    taxProviderId: string;
    languageId: string;
    taxProvider: Entities['tax_provider'] | undefined;
    language: Entities['language'] | undefined;
}

export interface TaxRule {
    id: string;
    taxRuleTypeId: string;
    countryId: string;
    taxRate: number;
    data: unknown;
    taxId: string;
    type: Entities['tax_rule_type'] | undefined;
    country: Entities['country'] | undefined;
    tax: Entities['tax'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface TaxRuleType {
    id: string;
    technicalName: string;
    position: number;
    typeName: string;
    rules: Entities['tax_rule'][] | undefined;
    translations: Entities['tax_rule_type_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {typeName?: string};
}

export interface TaxRuleTypeTranslation {
    typeName: string;
    createdAt: string;
    updatedAt: string;
    taxRuleTypeId: string;
    languageId: string;
    taxRuleType: Entities['tax_rule_type'] | undefined;
    language: Entities['language'] | undefined;
}

export interface Theme {
    id: string;
    technicalName: string;
    name: string;
    author: string;
    description: string;
    labels: unknown;
    helpTexts: unknown;
    customFields: unknown;
    previewMediaId: string;
    parentThemeId: string;
    baseConfig: unknown;
    configValues: unknown;
    active: boolean;
    translations: Entities['theme_translation'][] | undefined;
    salesChannels: Entities['sales_channel'][] | undefined;
    media: Entities['media'][] | undefined;
    previewMedia: Entities['media'] | undefined;
    dependentThemes: Entities['theme'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {description?: string, labels?: unknown, helpTexts?: unknown, customFields?: unknown};
}

export interface ThemeChild {
    parentId: string;
    childId: string;
    parentTheme: Entities['theme'] | undefined;
    childTheme: Entities['theme'] | undefined;
}

export interface ThemeMedia {
    themeId: string;
    mediaId: string;
    theme: Entities['theme'] | undefined;
    media: Entities['media'] | undefined;
}

export interface ThemeSalesChannel {
    salesChannelId: string;
    themeId: string;
    theme: Entities['theme'] | undefined;
    salesChannel: Entities['sales_channel'] | undefined;
}

export interface ThemeTranslation {
    description: string;
    labels: unknown;
    helpTexts: unknown;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    themeId: string;
    languageId: string;
    theme: Entities['theme'] | undefined;
    language: Entities['language'] | undefined;
}

export interface Unit {
    id: string;
    shortCode: string;
    name: string;
    customFields: unknown;
    products: Entities['product'][] | undefined;
    translations: Entities['unit_translation'][] | undefined;
    createdAt: string;
    updatedAt: string;
    translated: {shortCode?: string, name?: string, customFields?: unknown};
}

export interface UnitTranslation {
    shortCode: string;
    name: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    unitId: string;
    languageId: string;
    unit: Entities['unit'] | undefined;
    language: Entities['language'] | undefined;
}

export interface User {
    id: string;
    localeId: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    active: boolean;
    admin: boolean;
    lastUpdatedPasswordAt: string;
    timeZone: string;
    customFields: unknown;
    locale: Entities['locale'] | undefined;
    avatarId: string;
    avatarMedia: Entities['media'] | undefined;
    media: Entities['media'][] | undefined;
    accessKeys: Entities['user_access_key'][] | undefined;
    configs: Entities['user_config'][] | undefined;
    stateMachineHistoryEntries: Entities['state_machine_history'][] | undefined;
    importExportLogEntries: Entities['import_export_log'][] | undefined;
    aclRoles: Entities['acl_role'][] | undefined;
    recoveryUser: Entities['user_recovery'] | undefined;
    storeToken: string;
    createdOrders: Entities['order'][] | undefined;
    updatedOrders: Entities['order'][] | undefined;
    createdCustomers: Entities['customer'][] | undefined;
    updatedCustomers: Entities['customer'][] | undefined;
    createdAt: string;
    updatedAt: string;
    createdNotifications: unknown;
    orderReturnsCreated: Entities['order_return'][] | undefined;
    orderReturnsUpdated: Entities['order_return'][] | undefined;
}

export interface UserAccessKey {
    id: string;
    userId: string;
    accessKey: string;
    secretAccessKey: string;
    lastUsageAt: string;
    customFields: unknown;
    user: Entities['user'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface UserConfig {
    id: string;
    userId: string;
    key: string;
    value: unknown;
    user: Entities['user'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface UserRecovery {
    id: string;
    hash: string;
    userId: string;
    createdAt: string;
    user: Entities['user'] | undefined;
    updatedAt: string;
}

export interface Version {
    id: string;
    name: string;
    commits: Entities['version_commit'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface VersionCommit {
    id: string;
    versionId: string;
    userId: string;
    integrationId: string;
    autoIncrement: number;
    isMerge: boolean;
    message: string;
    data: Entities['version_commit_data'][] | undefined;
    version: Entities['version'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface VersionCommitData {
    id: string;
    versionCommitId: string;
    commit: Entities['version_commit'] | undefined;
    userId: string;
    integrationId: string;
    autoIncrement: number;
    entityName: string;
    entityId: unknown;
    action: string;
    payload: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface Warehouse {
    id: string;
    name: string;
    description: string;
    productWarehouses: Entities['product_warehouse'][] | undefined;
    groups: Entities['warehouse_group'][] | undefined;
    orderProducts: Entities['order_product_warehouse'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface WarehouseGroup {
    id: string;
    name: string;
    description: string;
    priority: number;
    ruleId: string;
    rule: Entities['rule'] | undefined;
    warehouses: Entities['warehouse'][] | undefined;
    products: Entities['product'][] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface WarehouseGroupWarehouse {
    warehouseId: string;
    warehouseGroupId: string;
    priority: number;
    warehouseGroup: Entities['warehouse_group'] | undefined;
    warehouse: Entities['warehouse'] | undefined;
}

export interface Webhook {
    id: string;
    name: string;
    eventName: string;
    url: string;
    errorCount: number;
    active: boolean;
    appId: string;
    app: Entities['app'] | undefined;
    createdAt: string;
    updatedAt: string;
}

export interface WebhookEventLog {
    id: string;
    appName: string;
    webhookName: string;
    eventName: string;
    deliveryStatus: string;
    timestamp: number;
    processingTime: number;
    appVersion: string;
    requestContent: unknown;
    responseContent: unknown;
    responseStatusCode: number;
    responseReasonPhrase: string;
    url: string;
    serializedWebhookMessage: string;
    customFields: unknown;
    createdAt: string;
    updatedAt: string;
    flowSequences: Entities['flow_sequence'][] | undefined;
}

export interface Entities {
    'acl_role': AclRole;
    'acl_user_role': AclUserRole;
    'app': App;
    'app_action_button': AppActionButton;
    'app_action_button_translation': AppActionButtonTranslation;
    'app_administration_snippet': AppAdministrationSnippet;
    'app_cms_block': AppCmsBlock;
    'app_cms_block_translation': AppCmsBlockTranslation;
    'app_flow_action': AppFlowAction;
    'app_flow_action_translation': AppFlowActionTranslation;
    'app_payment_method': AppPaymentMethod;
    'app_script_condition': AppScriptCondition;
    'app_script_condition_translation': AppScriptConditionTranslation;
    'app_template': AppTemplate;
    'app_translation': AppTranslation;
    'category': Category;
    'category_tag': CategoryTag;
    'category_translation': CategoryTranslation;
    'cms_block': CmsBlock;
    'cms_page': CmsPage;
    'cms_page_translation': CmsPageTranslation;
    'cms_section': CmsSection;
    'cms_slot': CmsSlot;
    'cms_slot_translation': CmsSlotTranslation;
    'country': Country;
    'country_state': CountryState;
    'country_state_translation': CountryStateTranslation;
    'country_translation': CountryTranslation;
    'currency': Currency;
    'currency_country_rounding': CurrencyCountryRounding;
    'currency_translation': CurrencyTranslation;
    'custom_entity': CustomEntity;
    'custom_field': CustomField;
    'custom_field_set': CustomFieldSet;
    'custom_field_set_relation': CustomFieldSetRelation;
    'custom_price': CustomPrice;
    'customer': Customer;
    'customer_address': CustomerAddress;
    'customer_group': CustomerGroup;
    'customer_group_registration_sales_channels': CustomerGroupRegistrationSalesChannels;
    'customer_group_translation': CustomerGroupTranslation;
    'customer_recovery': CustomerRecovery;
    'customer_tag': CustomerTag;
    'customer_wishlist': CustomerWishlist;
    'customer_wishlist_product': CustomerWishlistProduct;
    'delivery_time': DeliveryTime;
    'delivery_time_translation': DeliveryTimeTranslation;
    'document': Document;
    'document_base_config': DocumentBaseConfig;
    'document_base_config_sales_channel': DocumentBaseConfigSalesChannel;
    'document_type': DocumentType;
    'document_type_translation': DocumentTypeTranslation;
    'flow': Flow;
    'flow_sequence': FlowSequence;
    'flow_template': FlowTemplate;
    'import_export_file': ImportExportFile;
    'import_export_log': ImportExportLog;
    'import_export_profile': ImportExportProfile;
    'import_export_profile_translation': ImportExportProfileTranslation;
    'integration': Integration;
    'integration_role': IntegrationRole;
    'landing_page': LandingPage;
    'landing_page_sales_channel': LandingPageSalesChannel;
    'landing_page_tag': LandingPageTag;
    'landing_page_translation': LandingPageTranslation;
    'language': Language;
    'locale': Locale;
    'locale_translation': LocaleTranslation;
    'log_entry': LogEntry;
    'mail_header_footer': MailHeaderFooter;
    'mail_header_footer_translation': MailHeaderFooterTranslation;
    'mail_template': MailTemplate;
    'mail_template_media': MailTemplateMedia;
    'mail_template_translation': MailTemplateTranslation;
    'mail_template_type': MailTemplateType;
    'mail_template_type_translation': MailTemplateTypeTranslation;
    'main_category': MainCategory;
    'media': Media;
    'media_default_folder': MediaDefaultFolder;
    'media_folder': MediaFolder;
    'media_folder_configuration': MediaFolderConfiguration;
    'media_folder_configuration_media_thumbnail_size': MediaFolderConfigurationMediaThumbnailSize;
    'media_tag': MediaTag;
    'media_thumbnail': MediaThumbnail;
    'media_thumbnail_size': MediaThumbnailSize;
    'media_translation': MediaTranslation;
    'newsletter_recipient': NewsletterRecipient;
    'newsletter_recipient_tag': NewsletterRecipientTag;
    'number_range': NumberRange;
    'number_range_sales_channel': NumberRangeSalesChannel;
    'number_range_state': NumberRangeState;
    'number_range_translation': NumberRangeTranslation;
    'number_range_type': NumberRangeType;
    'number_range_type_translation': NumberRangeTypeTranslation;
    'order': Order;
    'order_address': OrderAddress;
    'order_customer': OrderCustomer;
    'order_delivery': OrderDelivery;
    'order_delivery_position': OrderDeliveryPosition;
    'order_line_item': OrderLineItem;
    'order_line_item_download': OrderLineItemDownload;
    'order_product_warehouse': OrderProductWarehouse;
    'order_return': OrderReturn;
    'order_return_line_item': OrderReturnLineItem;
    'order_return_line_item_reason': OrderReturnLineItemReason;
    'order_return_line_item_reason_translation': OrderReturnLineItemReasonTranslation;
    'order_tag': OrderTag;
    'order_transaction': OrderTransaction;
    'order_transaction_capture': OrderTransactionCapture;
    'order_transaction_capture_refund': OrderTransactionCaptureRefund;
    'order_transaction_capture_refund_position': OrderTransactionCaptureRefundPosition;
    'order_warehouse_group': OrderWarehouseGroup;
    'payment_method': PaymentMethod;
    'payment_method_translation': PaymentMethodTranslation;
    'plugin': Plugin;
    'plugin_translation': PluginTranslation;
    'product': Product;
    'product_category': ProductCategory;
    'product_category_tree': ProductCategoryTree;
    'product_configurator_setting': ProductConfiguratorSetting;
    'product_cross_selling': ProductCrossSelling;
    'product_cross_selling_assigned_products': ProductCrossSellingAssignedProducts;
    'product_cross_selling_translation': ProductCrossSellingTranslation;
    'product_custom_field_set': ProductCustomFieldSet;
    'product_download': ProductDownload;
    'product_export': ProductExport;
    'product_feature_set': ProductFeatureSet;
    'product_feature_set_translation': ProductFeatureSetTranslation;
    'product_keyword_dictionary': ProductKeywordDictionary;
    'product_manufacturer': ProductManufacturer;
    'product_manufacturer_translation': ProductManufacturerTranslation;
    'product_media': ProductMedia;
    'product_option': ProductOption;
    'product_price': ProductPrice;
    'product_property': ProductProperty;
    'product_review': ProductReview;
    'product_search_config': ProductSearchConfig;
    'product_search_config_field': ProductSearchConfigField;
    'product_search_keyword': ProductSearchKeyword;
    'product_sorting': ProductSorting;
    'product_sorting_translation': ProductSortingTranslation;
    'product_stream': ProductStream;
    'product_stream_filter': ProductStreamFilter;
    'product_stream_mapping': ProductStreamMapping;
    'product_stream_translation': ProductStreamTranslation;
    'product_tag': ProductTag;
    'product_translation': ProductTranslation;
    'product_visibility': ProductVisibility;
    'product_warehouse': ProductWarehouse;
    'product_warehouse_group': ProductWarehouseGroup;
    'promotion': Promotion;
    'promotion_cart_rule': PromotionCartRule;
    'promotion_discount': PromotionDiscount;
    'promotion_discount_prices': PromotionDiscountPrices;
    'promotion_discount_rule': PromotionDiscountRule;
    'promotion_individual_code': PromotionIndividualCode;
    'promotion_order_rule': PromotionOrderRule;
    'promotion_persona_customer': PromotionPersonaCustomer;
    'promotion_persona_rule': PromotionPersonaRule;
    'promotion_sales_channel': PromotionSalesChannel;
    'promotion_setgroup': PromotionSetgroup;
    'promotion_setgroup_rule': PromotionSetgroupRule;
    'promotion_translation': PromotionTranslation;
    'property_group': PropertyGroup;
    'property_group_option': PropertyGroupOption;
    'property_group_option_translation': PropertyGroupOptionTranslation;
    'property_group_translation': PropertyGroupTranslation;
    'rule': Rule;
    'rule_condition': RuleCondition;
    'rule_tag': RuleTag;
    'sales_channel': SalesChannel;
    'sales_channel_analytics': SalesChannelAnalytics;
    'sales_channel_country': SalesChannelCountry;
    'sales_channel_currency': SalesChannelCurrency;
    'sales_channel_domain': SalesChannelDomain;
    'sales_channel_language': SalesChannelLanguage;
    'sales_channel_payment_method': SalesChannelPaymentMethod;
    'sales_channel_shipping_method': SalesChannelShippingMethod;
    'sales_channel_translation': SalesChannelTranslation;
    'sales_channel_type': SalesChannelType;
    'sales_channel_type_translation': SalesChannelTypeTranslation;
    'salutation': Salutation;
    'salutation_translation': SalutationTranslation;
    'scheduled_task': ScheduledTask;
    'script': Script;
    'seo_url': SeoUrl;
    'seo_url_template': SeoUrlTemplate;
    'shipping_method': ShippingMethod;
    'shipping_method_price': ShippingMethodPrice;
    'shipping_method_tag': ShippingMethodTag;
    'shipping_method_translation': ShippingMethodTranslation;
    'snippet': Snippet;
    'snippet_set': SnippetSet;
    'state_machine': StateMachine;
    'state_machine_history': StateMachineHistory;
    'state_machine_state': StateMachineState;
    'state_machine_state_translation': StateMachineStateTranslation;
    'state_machine_transition': StateMachineTransition;
    'state_machine_translation': StateMachineTranslation;
    'swag_b2b_company': SwagB2bCompany;
    'swag_b2b_employee': SwagB2bEmployee;
    'swag_cms_extensions_block_rule': SwagCmsExtensionsBlockRule;
    'swag_cms_extensions_form': SwagCmsExtensionsForm;
    'swag_cms_extensions_form_group': SwagCmsExtensionsFormGroup;
    'swag_cms_extensions_form_group_field': SwagCmsExtensionsFormGroupField;
    'swag_cms_extensions_form_group_field_translation': SwagCmsExtensionsFormGroupFieldTranslation;
    'swag_cms_extensions_form_group_translation': SwagCmsExtensionsFormGroupTranslation;
    'swag_cms_extensions_form_translation': SwagCmsExtensionsFormTranslation;
    'swag_cms_extensions_quickview': SwagCmsExtensionsQuickview;
    'swag_cms_extensions_scroll_navigation': SwagCmsExtensionsScrollNavigation;
    'swag_cms_extensions_scroll_navigation_page_settings': SwagCmsExtensionsScrollNavigationPageSettings;
    'swag_cms_extensions_scroll_navigation_translation': SwagCmsExtensionsScrollNavigationTranslation;
    'swag_delay_action': SwagDelayAction;
    'swag_sequence_webhook_event_log': SwagSequenceWebhookEventLog;
    'system_config': SystemConfig;
    'tag': Tag;
    'tax': Tax;
    'tax_provider': TaxProvider;
    'tax_provider_translation': TaxProviderTranslation;
    'tax_rule': TaxRule;
    'tax_rule_type': TaxRuleType;
    'tax_rule_type_translation': TaxRuleTypeTranslation;
    'theme': Theme;
    'theme_child': ThemeChild;
    'theme_media': ThemeMedia;
    'theme_sales_channel': ThemeSalesChannel;
    'theme_translation': ThemeTranslation;
    'unit': Unit;
    'unit_translation': UnitTranslation;
    'user': User;
    'user_access_key': UserAccessKey;
    'user_config': UserConfig;
    'user_recovery': UserRecovery;
    'version': Version;
    'version_commit': VersionCommit;
    'version_commit_data': VersionCommitData;
    'warehouse': Warehouse;
    'warehouse_group': WarehouseGroup;
    'warehouse_group_warehouse': WarehouseGroupWarehouse;
    'webhook': Webhook;
    'webhook_event_log': WebhookEventLog;
}

