
// export const base_url = "http://ec2-43-204-114-19.ap-south-1.compute.amazonaws.com:8045";
export const base_url = "http://localhost:8045";

//export const base_url = "http://admin.boozemart.bsconsultants.us";

export const apis = {
    // base:"http://ec2-43-204-114-19.ap-south-1.compute.amazonaws.com:8045",
    base:"http://localhost:8045",


    login: "/user/authenticate",
    changePassword:"/user/password",
    user:"/user/",
    admin: "/admin/",
    addAdmin:"/admin",

    home: "/dashboard",
    roles: "/role/all",
    role: "/role/",
    addRole:"/role",
    subAdminList: "/admins",
    taxList: "/tax/taxList",
    addTax:"/tax/AddTax",
    updateTax:"/tax/TaxUpdate/",
    deleteTax:"/tax/RemoveTax/",
    idList: "/id",
    membershipList: "/membership",
    reportItemSaleByStore: "/report/item-sale/by-store",
    reportItemSaleByTodayStore: "/report/required/itemlist/today/store",
    reportTotalItemSalesLast30Days: "/report/total-item-sales/last-30-days",
    reportTotalItemSalesLast30DaysDet: "/report/total-item-sales/last-30-days/det",
    reportTopDeliveryBoy: "/report/dboy-top",
    reportDeliveryBoy: "/report/dboy",
    reportTopStore: "/report/store-top",
    reportStore: "/report/store",
    reportTopUser: "/report/user-top",
    reportUser: "/report/user",
    reportTax: "/report/tax",
    driversForNotification: "/drivers-for-notification",
    storesForNotification:"/stores-for-notification",
    usersForNotification: "/users-for-notification",
    notificationListDriver: "/notification/driver",
    notificationListStore: "/notify/Store_Notifications",
    notificationListUser: "/notify/Users_Notifications",
    userList: "/user",
    deliveryBoy:"/deliveryBoy/",
    userDetail: "/user/detail",
    usersWalletRechargeHistory: "/users/wallet-recharge-history",
    categoryList: "/readCategory",
    AllCategory:"/AllCategory",
    ListSubCategory:"/SubCategory",
    categoryListAll: "/category/all",
    subCategoryList: "/sub-category",
    addCategory:"/addToCategory",
    product:"/product/",
    AllCategory:"/AllCategory",
    deleteCategory:"/removeFromCategory",
    updateCategory:"/updateCategoryItem/",
    productList: "/products?items_per_page=111&page_number=1",
    addproduct: "/products/upload",
    storereportTotalItemSalesLast30Days: "/readStore_order",
    productVariant: "/product/Variant",
    bulkUploadProduct: "/products/upload",
    bulkUploadVariant: "/productVarient/upload",
    bulkUploadCity: "/bulk/upload/city",
    bulkUploadSociety: "/bulk/upload/society",
    trendingSearchProduct: "/Trending_Products",
    setTrendingSearchProduct:"/setTrending_Products",
    storeProductsList: "/store-data",
    reamoveTrendingProduct:"/reamoveTrending_Products",
    societyList: "/userId",
    areaBulkUploadCitySociety: "/area-bulk-upload/city-society",
    cityList: "/city",
    storesWaitingForApprovalStoreList: "/stores/waiting-for-approval/store",
    storesFinance: "/stores/finance",
    adminStoreList: "/stores",
    adminDBoyStoreList: "/d-boy/store",
    adminStoreOrder: "/admin/store/order",
    adminAllOrders: "/order/all?items_per_page=11111&page_number=1",
    adminTotalOrders:"/order/Total?items_per_page=11111&page_number=1",
    dashBoardOrders:"/order/dashboardOrders",
    adminBestSeller:"/Product_Ranking?items_per_page=1111&page_number=1",
    adminCancelledOrders: "/admin/cancelled/orders",
    ThisWeekCancelledOrderPercentage:"/order/percentIncrease_cancelledOrders",
    ThisWeekPendingOrderPercentage:"/order/percentIncrease_pendingOrders",
    ThisWeekNewOrderPercentage:"/order/percentIncrease_NewOrders",
    ThisWeekAppUsersPercentage:"/user/percentIncrease_NewUsers",
    adminCompleteOrders: "/admin/complete-orders",
    adminOngoingOrders: "/admin/ongoing-orders",
    adminOutForDeliveryOrders: "/admin/out-for-delivery-orders",
    adminPaymentFailedOrders: "/admin/payment-failed-orders",
    adminPendingOrders: "/admin/pending-orders",
    ordersTodayAll: "/orders/today/all",
    storeMissedOrders: "/store/missed/orders",
    cancelledOrders: "/cancelled/orders",
    nearByStore: "/near-by-store",
    payoutReq: "/payout-req",
    prv: "/prv",
    redeem: "/redeem",
    dBoyadd:"/deliveryBoys",
    reward: "/reward",
    dBoyList: "/deliveryBoys",
    dBoyOrder: "/d-boy/orders",
    dBoyIncentive: "/d-boy-incentive",
    aboutUs: "/about-us",
    terms: "/terms",
    driverFeedbackList: "/driver-feedback",
    stores: "/stores",
    userFeedbackList: "/user/all",
    driverCallbackRequests: "/driver-callback-requests",
    storeCallbackRequests: "/store-callback-requests",
    userCallbackRequests: "/user-callback-requests",
    cancellingReasonsList: "/cancel-reason",
    CancellingReason: "/cancel-reason/",
    logo: "/logo",
    countryCode: "/country-code",
    currency: "/currency",
    fcm: "/fcm",
    timeSlot: "/time-slot",
    minSetting: "/min-setting",
    msg91: "/msg91",
    twilio: "/twilio",
    sms: "/sms",
    firebase: "/firebase",
    firebaseIso: "/firebase-iso",
    settings: "/settings",
    mapApi: "/map-api",
    mapBox: "/map-box",
    mapSetting: "/map-setting",
    appNotice: "/app-notice",
    referral: "/referral-points",
    incentive: "/admin-driver-incentive",
    userNotNull: "/user-not-null",
    userNotNull2: "/user-not-null-2",
    appLink: "/app-link",
    imageSpace: "/image-space"
};
