var MsgTitle = "Maleva"
var GridEnterMode = false;
var testing = false;
var AllowNegativeStock = localStorage.getItem("AllowNegativeStock");
var loginusername = "sa";
var ScWidth = percentage(screen.width, 40);
var ScHeight = percentage(screen.height, 17);
var ScWidth1 = percentage(screen.width, 25);
var ScHeight1 = percentage(screen.height, 10);
var SearchGroupName = ""
var SearchGroupText = "";
var malaysiazone = 8;
var menulist = localStorage.getItem("menulistload");
$('#sidebar-menu').append(menulist);
//$('#Compname').html(localStorage.getItem("CompanyName"));
$('#Compname').html("SHIP SPARE IN TRANSIT");
var MirrorTable = localStorage.getItem("MirrorTableOnline");
$('#lblusername1').html(localStorage.getItem("username"));
$('#lblpower1').html(localStorage.getItem("priv"));
$('#lblusername2').html(localStorage.getItem("username"));
$('#lblpower2').html(localStorage.getItem("priv"));
var commonexpirydays = 15;
var ExpenseDueDays = 5;
var ExpServiceAligmentGreecedays = 5;
var apadbonamexpirydays = 60;
var defaultprate =2.15;
var companyexp = []
var driverexp = ["licenseExp",
    "GDLExp",
    "KuantanPort",
    "NorthportPort",
    "PkfzPort",
    "KliaPort",
    "PguPort",
    "TanjungPort",
    "PenangPort",
    "PtpPort",
    "WestportPort",]
var truckexp = ["RotexMyExp",
    "RotexSGExp",
    "PuspacomExp",
    "RotexMyExp1",
    "RotexSGExp1",
    "PuspacomExp1",
    "InsuratnceExp",
    "BonamExp",
    "ApadExp",
    "ServiceExp",
    "AlignmentExp",
    "GreeceExp",]
BillTypelist = [
    "MY",
    "TR",]
LinkList = [
    "1ST LINK",
    "2ND LINK",]
EnterList = [
    "IN",
    "OUT",]
YesNoList = [
    "YES",
    "NO",]
ManPowerList = [
    "NO",
    "1",
    "2",]
EXITList = [
    "NO",
    "EMPTY 80",
    "EMPTY 50"]
GridPortlist = [
    { 'Name': 'WESTPORT-B18', },
    { 'Name': 'NORTHPORT- B10', },
    { 'Name': 'SOUTHPORT-B11', },
    { 'Name': 'WESTPORT LBT- B7X', },
    { 'Name': 'WESTPORT DRY BULK- B7Y', },
    { 'Name': 'PULAU KETAM JETTY', },
    { 'Name': 'KAPAR POWERSTATION-B11', },
    { 'Name': 'WESTPORT CRIUSE TERMINAL-B7S', },
    { 'Name': 'PTP-J33', },
    { 'Name': 'PASIRGUDANG PORT- J15', },
    { 'Name': 'TANJUNG LANGSAT-J76', },
    { 'Name': 'TANJUNG BIN- J33', },
    { 'Name': 'PASIR  PUTIH JETTY', },
    { 'Name': 'PENGERENG PORT-J15', },
    { 'Name': 'PENDAS JETTY', },
    { 'Name': 'PARMESWARA JETTY MELAKA- M14', },
    { 'Name': 'TANJUNG BRUAS MELAKA-M14', },
    { 'Name': 'SUNGAI UDANG MELAKA-M15', },
    { 'Name': 'SUNGAI LINGGI-M23', },
    { 'Name': 'PORT DICKSON- N11', },
    { 'Name': 'KUANTAN PORT -C13', },
    { 'Name': 'KEMAMAN PORT (KSB)- T16', },
    { 'Name': 'LIKIR BULK TERMINAL LUMUT A22', },
    { 'Name': 'MARITIME TERMINAL  LUMUT A22', },
    { 'Name': 'VALI PORT A13', },
    { 'Name': 'KERTEH', },
    { 'Name': 'MMHE', },
    { 'Name': 'BWCT -PENANG P15', },
    { 'Name': 'BUTTERWORTH', },
    { 'Name': 'PBCT-PENANG P88', },
    { 'Name': 'NBCT-PENANG P14', },
    { 'Name': 'SPCT-PENANG  P20', },
    { 'Name': 'TOK BALI', },
    { 'Name': 'KSB  WEST KEMAMAN T15', },
    { 'Name': 'KPK KEMAMAN T16', },
    { 'Name': 'KEMAMAN PORT (KSB) T16', },
    { 'Name': 'LUMUT PORT-A22', },
    { 'Name': 'SAPANGAR BAY CONTAINER PORT', },
    { 'Name': 'KOTA KINABALU PORT', },
    { 'Name': 'SAPANGAR BAY OIL TERMINAL', },
    { 'Name': 'KUDAT PORT', },
    { 'Name': 'SANDAKAN PORT', },
    { 'Name': 'LAHAD DATU PORT', },
    { 'Name': 'KUNAK PORT', },
    { 'Name': 'TAWAU PORT', },
    { 'Name': 'LABUAN PORT', },
    { 'Name': 'MIRI PORT', },
    { 'Name': 'SAMALAJU PORT', },
    { 'Name': 'RAJANG PORT', },
    { 'Name': 'TANJUNG MANIS PORT', },
    { 'Name': 'KUCHING PORT', },
    { 'Name': 'SIBU PORT', },
    { 'Name': 'SARIKEI PORT', },
    { 'Name': 'BINTULU PORT', },
]

GridCargolist = [
    { 'Name': 'AT AIRPORT', },
    { 'Name': 'NOT ARRIVED', },
    { 'Name': 'WESTPORT', },
    { 'Name': 'NORTHPORT', },
    { 'Name': 'SOUTHPORT', },
    { 'Name': 'PKG OFFICE', },
    { 'Name': 'SEREMBAN OFFICE', },
    { 'Name': 'PTP OFFICE', },
    { 'Name': 'PTP CABIN', },
    { 'Name': 'PGU CABIN', },
    { 'Name': 'DELIVERED', },
]

LicenseCategory    = [
    { 'Name': 'LICENSE', },
    { 'Name': 'AGREEMENT', },
]


CountryCurrency = [
    { 'Name': 'INR', },
    { 'Name': 'RM', },
]

Portlist = [
    "WESTPORT-B18",
"NORTHPORT- B10",
"SOUTHPORT-B11",
"WESTPORT LBT- B7X",
"WESTPORT DRY BULK- B7Y",
"PULAU KETAM JETTY",
"KAPAR POWERSTATION-B11",
"WESTPORT CRIUSE TERMINAL-B7S",
"PTP-J33",
"PASIRGUDANG PORT- J15",
"TANJUNG LANGSAT-J76",
"TANJUNG BIN- J33",
"PASIR  PUTIH JETTY",
"PENGERENG PORT-J15",
"PENDAS JETTY",
"PARMESWARA JETTY MELAKA- M14",
"TANJUNG BRUAS MELAKA-M14",
"SUNGAI UDANG MELAKA-M15",
"SUNGAI LINGGI-M23",
"PORT DICKSON- N11",
"KUANTAN PORT -C13",
"KEMAMAN PORT (KSB)- T16",
"LIKIR BULK TERMINAL LUMUT A22",
"MARITIME TERMINAL  LUMUT A22",
"VALI PORT A13",
"KERTEH",
"MMHE",
"BWCT -PENANG P15",
"BUTTERWORTH",
"PBCT-PENANG P88",
"NBCT-PENANG P14",
"SPCT-PENANG  P20",
"TOK BALI",
"KSB  WEST KEMAMAN T15",
"KPK KEMAMAN T16",
"KEMAMAN PORT (KSB) T16",
"LUMUT PORT-A22",
"SAPANGAR BAY CONTAINER PORT",
"KOTA KINABALU PORT",
"SAPANGAR BAY OIL TERMINAL",
"KUDAT PORT",
"SANDAKAN PORT",
"LAHAD DATU PORT",
"KUNAK PORT",
"TAWAU PORT",
"LABUAN PORT",
"MIRI PORT",
"SAMALAJU PORT",
"RAJANG PORT",
"TANJUNG MANIS PORT",
"KUCHING PORT",
"SIBU PORT",
"SARIKEI PORT",
"BINTULU PORT",
]
SaleTypelist = [
    'CREDIT',
    'CASH',
]
Forwardinglist = [
    'K1',
    'K2',
    'K3',
    'K8',
]

Zblist = [
    'ZB1',
    'ZB2',
]

vessellist = [
    "CONTAINER VESSEL",
    "BULK CARRIER",
    "TANKER VESSEL",
    "CRUISE VESSEL",
    "RORO VESSEL",
    "NAVY VESSEL",
    "TUG BOARD",
    "BOAT SUPPLY",
]

commoditylist = [
    "SHIP SPARE",
    "PROVISION",
    "GENERAL CARGO",
]
cargolist = [
    "AT AIRPORT",
    "NOT ARRIVED",
    "WESTPORT",
    "NORTHPORT",
    "SOUTHPORT",
    "PKG OFFICE",
    "SEREMBAN OFFICE",
    "PTP OFFICE",
    "PTP CABIN",
    "PGU CABIN",
    "DELIVERED",
]
RulesTypelist = [
    "SALES",
    "HR",
    "ADMIN",
    "OPERATION",
    "BOARDING",
    "FORWARDING",
    "AIR FRIEGHT",
    "ACCOUNTS",
    "TRANSPORTATION",
    "MAINTENANCE",
    "OPERATIONADMIN",
    "HRADMIN",
    "SECONDADMIN",
    "WAREHOUSE"
]
Paymentstatuslist = [
    'SEND FOR APPROVAL',
    'PENDING DOCUMENTS',
    'ACCEPETED',
    'REJECTED',
    'COMPLETED',
]
ImageFolderlist = [
    'AirFrieght',
    'Boarding',
    'DriverPickup',
    'DriverDelivery',
]
TollTypelist = [
    { 'Name': 'OTHERS', },
    { 'Name': 'RELOAD', },
    { 'Name': 'USAGE', },
]

PaymentTypelist = [
    { key: 0 , value: "Direct Payment" },
    { key: 1, value: "From Payment" },
    { key: 2, value: "From Expense" },
    { key: 3 , value: "From Salary" },
    { key: 4, value: "From Renewal" },
    { key: 5, value: "From Claim" }
];
StatusTypelist = [
    { key: 0, value: "Pending" },
    { key: 1, value: "Invoice Done" },
];
Paymentlist = [
    'PAYMENT FOR ACCOUNT',
    'EXPENSE',
    'SALARY',
    'RENEWAL',
]

expenselist = [
    "HIRE PURCHASE",
    "SALARY",
    "OTHER EXPENSES",
    "DIRECTOR EXPENSES",
    "TENANCY",
    "MAINTENANCE",
    "UTILITY",
    "VENDOR",
    "BACKLOG",
    "FUEL",
    "TOLL",
    "CLAIM",
    "KASTAM DUTY",
    "Advance"
]
TransportMasterlist = [
    "MASTER",
    "CUSTOMER",
    "AGENT",
    "AGENT COMPANY",
    "LOCATION",
    "ADDRESS",
    "DRIVER", 
    "TRUCK",
]
CustomerServiceMasterlist = [
    "MASTER",
    "CUSTOMER",
    "AGENT",
    "AGENT COMPANY",
    "ADDRESS",
    "LOCATION",
   
]

Admin2Masterlist = [
    "ADMIN2",
    "CUSTOMER SERVICE - PUVI TEAM",
    "CUSTOMER SERVICE - SHANDHIYA TEAM",
    "TRANSPORTATION - PAVITHRA TEAM"

]



ReceivablesMasterlist = [
    "MASTER",
   "CUSTOMER"
]
PayableMasterlist = [
    "MASTER",
    "EXPENSE",
    "SUB EXPENSE",
    "SUPPLIER",
    "CHART OF ACCOUNTS",
    "BANK MASTER"

]
TruckMaintenanceMasterlist = [
    "MASTER",
    "DRIVER",
    "TRUCK",
    "PRODUCT",
    "UOM",
    "SUPPLIER",
]
EmployeeDBlist = [
  
    "ADMIN",
    "CUSTOMER SERVICE - SIVA",
    "CUSTOMER SERVICE - MALA",
    "CUSTOMER SERVICE - SANGKARI",
    "RECEIVABLE",
    "PAYABLE",
    "TRANSPORTATION",
    "FORWARDING",
    "MAINTENANCE",
    "OPERATION ADMIN",
    "HR",
    "HRADMIN",

]
EmployeeDB2list = [
    "CUSTOMER SERVICE - MALA",
    "PAYABLE",

]
EmployeeDB3list = [
    "CUSTOMER SERVICE - NAGA",
    "DASHBOARD - MALA",

]
PayableDB2list = [
    "PAYABLE",
    "MAINTENANCE",
    "RECEIVABLE"

]
Desclist = [
    "BREAKDOWN",
    "REPAIR",
    "SERVICE",
    "SPARE PARTS"
]
BillStatuslist = [
    "ASSIGNED",
    "RECEIPT RECEIVED",
    "RECEIPT UPLOADED",
    "INVOICE MADE",
    "PAYMENT COMPLETED",
    "Cancel"
]
BillStatus = [
    "Completed",
    "Cancel"
]

TinTypelist = [
    "Company (Malaysia)",
    "Individual (Foreign)",
    "Individual (Malaysia)",
    "Company (Foreign)",
    "General public",
    "Government"
]
TinTypeSupplierlist = [
    "Company (Malaysia)",
    "Individual (Foreign)",
    "Individual (Malaysia)",
    "Company (Foreign)",
]
Validationlist = [
    "Follow E-Invoice Settings",
    "Full Validation",
    "Deferred Validation",
    "Non-Validation"
]
eValidationlist = [
    { 'Name': 'Follow E-Invoice Settings', },
    { 'Name': 'Full Validation', },
    { 'Name': 'Deferred Validation', },
    { 'Name': 'Non-Validation', }
]

const stateList = [
    { "Code": "01", "State": "Johor" },
    { "Code": "02", "State": "Kedah" },
    { "Code": "03", "State": "Kelantan" },
    { "Code": "04", "State": "Melaka" },
    { "Code": "05", "State": "Negeri Sembilan" },
    { "Code": "06", "State": "Pahang" },
    { "Code": "07", "State": "Pulau Pinang" },
    { "Code": "08", "State": "Perak" },
    { "Code": "09", "State": "Perlis" },
    { "Code": "10", "State": "Selangor" },
    { "Code": "11", "State": "Terengganu" },
    { "Code": "12", "State": "Sabah" },
    { "Code": "13", "State": "Sarawak" },
    { "Code": "14", "State": "Wilayah Persekutuan Kuala Lumpur" },
    { "Code": "15", "State": "Wilayah Persekutuan Labuan" },
    { "Code": "16", "State": "Wilayah Persekutuan Putrajaya" },
    { "Code": "17", "State": "Not Applicable" }
];





function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
}

function company() {
    if (localStorage.getItem("priv") == "Admin") {
        window.location.href = "/Companysetting";
    }
    else {
        MsgBox("Access Denied !!!.Admin Only Allowed.")
    }
}

function Setting() {

    if (localStorage.getItem("priv") == "Admin") {
        window.location.href = "/Mainsetting";
    }
    else {
        MsgBox("Access Denied !!!.Admin Only Allowed.")
    }
}

function MsgBoxYesNo(msg) {
    var defer = $.Deferred();
    return Swal.fire({
        title: MsgTitle,
        text: msg,
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        confirmButtonClass: "btn btn-primary",
        cancelButtonClass: "btn btn-danger ml-1",
        buttonsStyling: !1,
        //zIndex: 20000,
    })


}

function MsgBoxPrintView(msg) {
    var defer = $.Deferred();
    return Swal.fire({
        title: MsgTitle,
        text: msg,
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        confirmButtonText: "Print",
        confirmButtonClass: "btn btn-primary",
        confirmButtonClass: "btn btn-primary",
        cancelButtonClass: "btn btn-danger ml-1",
        buttonsStyling: !1,
    })


}

function Unitwindow(show) {
    var $this = $(this);

    var width = $this.width();
    var height = $this.height();
    let centerX = (width - 300) / 2;
    let centerY = (height - 500) / 2;
    if (show == 1) {
        $("#btnsave").jqxButton({ width: 100, height: 40, value: "Save", textPosition: "left" });
        $("#btndelete").jqxButton({ width: 100, height: 40, value: "Delete", textPosition: "left" });
    }
    $("#unitwindow").jqxWindow({
        position: { x: centerX, y: centerY },
        showCollapseButton: false, maxHeight: 700, maxWidth: 1000, minHeight: 50, minWidth: 200, height: 400, width: 410, resizable: false, keyboardCloseKey: 0,
        initContent: function () {

        }
    });


}
function MsgBoxYesNo1(msg) {

    Swal.fire({
        title: MsgTitle,
        text: msg,
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        confirmButtonClass: "btn btn-primary",
        cancelButtonClass: "btn btn-danger ml-1",
        buttonsStyling: !1,
    }).then(function (t) {
        t.value
            ? Swal.fire({
                type: "success",
                title: MsgTitle,
                text: "",
                confirmButtonClass: "btn btn-success",
            })
            : t.dismiss === Swal.DismissReason.cancel

    });


}

function MsgBox(msg, callback,Title) {
    //setTimeout(function () {

    //}, 1);

    return Swal.fire({
        title: Title != null?Title: MsgTitle,
        html: msg,
        zIndex: 50,
        allowOutsideClick: !0,
        confirmButtonClass: "btn btn-primary",
        buttonsStyling: !1,
    })

}
function percentage(value, per) {
    return Math.round(value * (per / 100));
}
function addrow(grid) {
    var generaterow1 = function (i) {
        var row = {};
        return row;
    }
    var datarow = generaterow1();
    $(grid).jqxGrid('addrow', null, datarow);
}
function NotificationSuccess(messge) {
    setTimeout(function () {
        var t, o = "rtl" === $("html").attr("data-textdirection")
        toastr.success(messge, "Success", { closeButton: !0, tapToDismiss: !1, progressBar: !0, rtl: o })
    }, 1);

}

function F5ViewWindow(window, maxsize) {
    var $this = $(this);

    var width = $this.width();
    var height = $this.height();
    let centerX = (width - 800) / 2;
    let centerY = (height - 650) / 2;
    var setwidth = 800;
    var setheight = 650;
    var maxheight = 700;
    var maxwidth = 1000;
    if (maxsize == true) {
        setwidth = width;
        setheight = height;
        maxheight = height / 1.1;
        maxwidth = width / 1.1;
        centerX = maxwidth - (maxwidth / 1.05);
        centerY = maxheight - (maxheight / 1.05);
    }

    // var offset = gridcashier.offset();
    $(window).jqxWindow({
        position: { x: centerX, y: centerY },
        showCollapseButton: false, maxHeight: maxheight, maxWidth: maxwidth, minHeight: 200, minWidth: 200, height: setheight, width: setwidth, isModal: true, keyboardCloseKey: 0, resizable: false,
        initContent: function () {

        }
    });
    $(window).jqxWindow({ zIndex: 50 });
    $(window).jqxWindow('Open');
}

function ViewWindow(window, sheight, swidth) {
    var $this = $(this);
    var width = $this.width();
    var height = $this.height();
    let centerX = 0;
    let centerY = 0;
    var setwidth = 0;
    var setheight = 0;
    var maxheight = 0;
    var maxwidth = 0;
    setwidth = swidth;
    setheight = sheight;
    maxheight = sheight;
    maxwidth = swidth;
    centerX = (width - swidth) / 2;
    centerY = (height - sheight) / 2;
    $(window).jqxWindow({
        position: { x: centerX, y: centerY },
        showCollapseButton: false, maxHeight: maxheight, maxWidth: maxwidth, minHeight: 200, minWidth: 200, height: setheight, width: setwidth, isModal: true, keyboardCloseKey: 0, resizable: false,
        initContent: function () {

        }
    });
    $(window).jqxWindow({ zIndex: 50 });
    $(window).jqxWindow('Open');
}

function NotificationWarning(messge) {
    setTimeout(function () {
        var t, o = "rtl" === $("html").attr("data-textdirection")
        toastr.warning(messge, { closeButton: !0, tapToDismiss: !1, rtl: o })
    }, 1);
}

function NotificationError(messge) {
    setTimeout(function () {
        var t, o = "rtl" === $("html").attr("data-textdirection")
        toastr.error(messge, "Error!", { closeButton: !0, tapToDismiss: !1, rtl: o })
    }, 1);
}

function NotificationInfo(messge) {
    setTimeout(function () {
        var t, o = "rtl" === $("html").attr("data-textdirection")
        toastr.info(messge, "Information", { closeButton: !0, tapToDismiss: !1, rtl: o })
    }, 1);
}
function NullToString(str) {
    return !str || 0 === str.length ? '' : str;
}

function AllowStock(itemid, Qty, type) {
    if (AllowNegativeStock == false) {

        var currentstock = 0;
        var objlist1 = ServiceCallById("/Master/Currentstock", '{"Id":' + itemid + '}');
        if (objlist1 != null)
            if (objlist1.length != 0) {
                currentstock = objlist1.data;
            }
        var NowQty = ValNum(Qty);
        if (type == 1) {
            NowQty = ValNum(currentstock) + ValNum(NowQty);
        }
        else {
            NowQty = ValNum(currentstock) - ValNum(NowQty);
        }
        if (ValNum(NowQty) >= 0) {
            return true;
        }
        else {
            MsgBox("Negative Stock Not Allowed!!!");

            return false;
        }

    }
    else {
        return true;
    }

}
function AllowStockAllDelete(datalist, itemid, Qty, RealQty, Stockqty, type, NStock) {
    if (AllowNegativeStock == false) {

        var result = [];
        datalist.reduce(function (res, value) {
            if (!res[value[itemid]]) {
                res[value[itemid]] = { [itemid]: value[itemid], [Qty]: 0, [RealQty]: 0, [Stockqty]: 0, [NStock]: 0 };
                result.push(res[value[itemid]])
            }
            res[value[itemid]][Qty] = ValNum(res[value[itemid]][Qty]) + ValNum(value[Qty]);
            res[value[itemid]][Stockqty] = ValNum(value[Stockqty]);
            res[value[itemid]][NStock] = ValNum(value[NStock]);
            res[value[itemid]][RealQty] = ValNum(res[value[itemid]][RealQty]) + ValNum(value[RealQty]);

            return res;
        }, {});

        for (var i = 0; i < result.length; i++) {
            if (ValNum(result[i][itemid]) != 0) {
                var NowQty = ValNum(result[i][RealQty]);
                if (ValNum(result[i][NStock]) == 0) {
                    var stock = ValNum(result[i][Stockqty]);

                    if (type == 1) {
                        NowQty = ValNum(stock) + ValNum(NowQty);
                    }
                    else {
                        NowQty = ValNum(stock) - ValNum(NowQty);
                    }
                    if (ValNum(NowQty) >= 0) {

                    }
                    else {
                        MsgBox("Negative Stock Not Allowed!!!");
                        StockIndex = findcolumnindex(datalist, result[i][itemid], itemid)
                        return false;
                    }
                }
            }
            return true;
        }
    }
    else {
        return true;
    }
}
function AllowStockAllSale(datalist, itemid, Qty, RealQty, Stockqty, NStock) {
    if (AllowNegativeStock == "false") {

        var result = [];
        datalist.reduce(function (res, value) {
            if (!res[value[itemid]]) {
                res[value[itemid]] = { [itemid]: value[itemid], [Qty]: 0, [RealQty]: 0, [Stockqty]: 0, [NStock]: 0 };
                result.push(res[value[itemid]])
            }
            res[value[itemid]][Qty] = ValNum(res[value[itemid]][Qty]) + ValNum(value[Qty]);
            res[value[itemid]][Stockqty] = ValNum(value[Stockqty]);
            res[value[itemid]][NStock] = ValNum(value[NStock]);
            res[value[itemid]][RealQty] = ValNum(res[value[itemid]][RealQty]) + ValNum(value[RealQty]);

            return res;
        }, {});

        for (var i = 0; i < result.length; i++) {
            var NowQty = 0;
            if (ValNum(result[i][NStock]) == 0) {
                var stock = ValNum(result[i][Stockqty]);
                if (ValNum(result[i][RealQty]) != 0) {
                    NowQty = ValNum(result[i][RealQty]) - ValNum(result[i][Qty]);
                }
                else {
                    NowQty = result[i][Qty];
                }
                if (ValNum(result[i][RealQty]) == 0) {
                    NowQty = ValNum(stock) - ValNum(NowQty);
                }
                else {
                    NowQty = ValNum(stock) + ValNum(NowQty);
                }
                if (ValNum(NowQty) >= 0) {

                }
                else {
                    MsgBox("Negative Stock Not Allowed!!!");
                    StockIndex = findcolumnindex(datalist, result[i][itemid], itemid)
                    return false;
                }
            }
        }
        return true;
    }
    else {
        return true;
    }
}
function AllowStockAllPurchase(datalist, itemid, Qty, RealQty, Stockqty, NStock) {
    if (AllowNegativeStock == "false") {

        var result = [];
        datalist.reduce(function (res, value) {
            if (!res[value[itemid]]) {
                res[value[itemid]] = { [itemid]: value[itemid], [Qty]: 0, [RealQty]: 0, [Stockqty]: 0, [NStock]: 0 };
                result.push(res[value[itemid]])
            }
            res[value[itemid]][Qty] = ValNum(res[value[itemid]][Qty]) + ValNum(value[Qty]);
            res[value[itemid]][Stockqty] = ValNum(value[Stockqty]);
            res[value[itemid]][NStock] = ValNum(value[NStock]);
            res[value[itemid]][RealQty] = ValNum(res[value[itemid]][RealQty]) + ValNum(value[RealQty]);

            return res;
        }, {});

        for (var i = 0; i < result.length; i++) {
            var NowQty = 0;
            if (ValNum(result[i][NStock]) == 0) {
                var stock = ValNum(result[i][Stockqty]);
                if (ValNum(result[i][RealQty]) != 0) {
                    NowQty = ValNum(result[i][RealQty]) - ValNum(result[i][Qty]);
                }
                else {
                    NowQty = result[i][Qty];
                }
                if (ValNum(result[i][RealQty]) == 0) {
                    NowQty = ValNum(stock) + ValNum(NowQty);
                }
                else {
                    NowQty = ValNum(stock) - ValNum(NowQty);
                }
                if (ValNum(NowQty) >= 0) {

                }
                else {
                    MsgBox("Negative Stock Not Allowed!!!");
                    StockIndex = findcolumnindex(datalist, result[i][itemid], itemid)
                    return false;
                }
            }
        }
        return true;
    }
    else {
        return true;
    }
}
function CheckDuplicate(grid, columnname, Columnmsg) {
    var gridrows = $(grid).jqxGrid('getrows');
    var index = 0;
    var flag = true;
    var column = [];
    for (var i = 0; i < gridrows.length; i++) {
        column.push(gridrows[i][columnname]);
    }
    var item_list = column;
    var unique_list = [];
    var duplicate_list = [];

    function check_insert_unique(item) {
        if (unique_list.includes(item)) {
            MsgBox(Columnmsg + " " + item + " Already Exists !");
            $(grid).jqxGrid('selectcell', index, columnname);
            $(grid).jqxGrid('focus');
            flag = false;
        } else {
            if (unique_list.indexOf(item) == -1) {
                unique_list.push(item)
            }
        }
    }

    for (let i = 0; i < item_list.length; i++) {
        if (flag == true) {
            index = i;
            check_insert_unique(item_list[i]);
        }
        else {
            return false;
        }
    }
    if (flag == true) {
        return true;
    }
    else {
        return false;
    }

}


function GirdColumns(grid) {
    var objlist = $(grid).jqxGrid('getrows');
    tempgridcolumns = Object.getOwnPropertyNames(objlist[0]);
    var index = tempgridcolumns.indexOf("boundindex");
    if (index > -1) {
        tempgridcolumns.splice(index, 1);
    }
    index = tempgridcolumns.indexOf("uid");
    if (index > -1) {
        tempgridcolumns.splice(index, 1);
    }
    index = tempgridcolumns.indexOf("uniqueid");
    if (index > -1) {
        tempgridcolumns.splice(index, 1);
    }
    index = tempgridcolumns.indexOf("visibleindex");
    if (index > -1) {
        tempgridcolumns.splice(index, 1);
    }
    index = tempgridcolumns.indexOf("EditMode");
    if (index > -1) {
        tempgridcolumns.splice(index, 1);
    }
    return tempgridcolumns;
}
function ValNum(value) {
    if (value == null) {
        value = 0;
    }
    if (value == "") {
        value = 0;
    }
    if (isNaN(value) === true) {
        return 0;
    }
    else {
        return parseFloat(value);
    }
}
function ValNum2(value) {
    if (value == null) {
        value = 1000;
    }
    if (value == "") {
        value = 1000;
    }
    if (isNaN(value) === true) {
        return 0;
    }
    else {
        return parseFloat(value);
    }
}

//#region====DATE FUNCTION===
function jsondatetimestring(date) {
    var myDate = new Date(Date.parse(date))
    console.log(myDate);
    console.log($.jqx.dataFormat.formatdate(myDate, 'yyyy,MM, dd HH:mm'));
    return $.jqx.dataFormat.formatdate(myDate, 'yyyy,MM, dd HH:mm');
}
function jsondatestring(date) {
    console.log(date);
    var myDate = new Date(Date.parse(date))
    console.log(myDate);
    console.log($.jqx.dataFormat.formatdate(myDate, 'dd/MM/yyyy'));
    return $.jqx.dataFormat.formatdate(myDate, 'dd/MM/yyyy');
}
function jsondatestringcontroller(date) {
    console.log(date);
    var myDate = new Date(Date.parse(date))
    console.log(myDate);
    console.log($.jqx.dataFormat.formatdate(myDate, 'yyyy/MM/dd'));
    return $.jqx.dataFormat.formatdate(myDate, 'yyyy/MM/dd');
}
function dateformatU(date, time) {
    console.log(date)
    var datearray = date.split("/");
    if (time == true) {
        var datearray1 = date.split(" ");
        var datearray = datearray1[0].split("/");
        return (datearray[2] + '/' + datearray[1] + '/' + datearray[0] + " " + datearray1[1]);
    }
    else {
        return (datearray[2] + '/' + datearray[1] + '/' + datearray[0]);
    }

}
function dateformatUYear(date) {
    console.log(date)
    var datearray = date.split("/");
        return datearray[2];
}
function dateformatUMonth(date) {
    console.log(date)
    var datearray = date.split("/");
    return datearray[1];
}
function currentdate(adddays) {
    var CurrentDate = new Date();
    if (adddays != 0) {
        CurrentDate = CurrentDate.setDate(CurrentDate.getDate() + adddays);
    }
    var formatCurrentdate = new Date(CurrentDate);
    formatCurrentdate = $.jqx.dataFormat.formatdate(formatCurrentdate, 'yyyy/MM/dd');
    return formatCurrentdate.toString();
}
function firstDateOfWeek(date) {
    var CurrentDate = new Date();
    if (date != null) {
        CurrentDate = date;
    }
    var dayOfWeek = CurrentDate.getDay(); 
    var firstDayOfWeek = new Date(CurrentDate);
    firstDayOfWeek.setDate(CurrentDate.getDate() - dayOfWeek); 
    var formatFirstDayOfWeek = $.jqx.dataFormat.formatdate(firstDayOfWeek, 'yyyy/MM/dd');
    return formatFirstDayOfWeek.toString();
}
function lastDateOfWeek(date) {
    var CurrentDate = new Date();
    if (date != null) {
        CurrentDate = date;
    }
    var dayOfWeek = CurrentDate.getDay();

    var firstDayOfWeek = new Date(CurrentDate);
    firstDayOfWeek.setDate(CurrentDate.getDate() - dayOfWeek); 
    var lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6); 
    var formatLastDayOfWeek = $.jqx.dataFormat.formatdate(lastDayOfWeek, 'yyyy/MM/dd');
    return formatLastDayOfWeek.toString();
}
function firstDateOfMonth(date) {
    var CurrentDate = new Date();
    if (date != null) {
        CurrentDate = date;
    }
    
    var formatCurrentdate = new Date(CurrentDate.getFullYear(), CurrentDate.getMonth(), 1);
    formatCurrentdate = $.jqx.dataFormat.formatdate(formatCurrentdate, 'yyyy/MM/dd');
    return formatCurrentdate.toString();
}
function lastDateOfMonth(date) {
    var CurrentDate = new Date();
    if (date != null) {
        CurrentDate = date;
    }
  
    var formatCurrentdate = new Date(CurrentDate.getFullYear(), CurrentDate.getMonth() + 1, 0);
    formatCurrentdate = $.jqx.dataFormat.formatdate(formatCurrentdate, 'yyyy/MM/dd');
    return formatCurrentdate.toString();
}
function firstDateOfPreviousMonth(date, MonthDifference) {
    var CurrentDate = new Date();
    if (date != null) {
        CurrentDate = date;
    }
    CurrentDate.setMonth(CurrentDate.getMonth() - MonthDifference);
    var firstDayOfPreviousMonth = new Date(CurrentDate.getFullYear(), CurrentDate.getMonth(), 1);
    var formattedDate = $.jqx.dataFormat.formatdate(firstDayOfPreviousMonth, 'yyyy/MM/dd');

    return formattedDate.toString();
}
function lastDateOfPreviousMonth(date, MonthDifference) {
    var CurrentDate = new Date();
    if (date != null) {
        CurrentDate = date;
    }

    CurrentDate.setMonth(CurrentDate.getMonth() - MonthDifference);
    var firstDayOfNextMonth = new Date(CurrentDate.getFullYear(), CurrentDate.getMonth() + 1, 1);
    var lastDayOfPreviousMonth = new Date(firstDayOfNextMonth - 1);
    var formattedDate = $.jqx.dataFormat.formatdate(lastDayOfPreviousMonth, 'yyyy/MM/dd');

    return formattedDate.toString();
}
function currentMonthName(diff) {
    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var now = new Date();
    var currentMonthName = monthNames[now.getMonth() - diff];
    return currentMonthName;
}
function parseDate(dateString) {
    // Split the date string into day, month, and year components
    var parts = dateString.split('-');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1; // Months are zero-based in JavaScript
    var year = parseInt(parts[2], 10);

    // Create and return a new Date object
    return new Date(year, month, day);
}

function MinusDays(date, days) {
    var cdate = new Date(date);
    cdate = cdate.setDate(cdate.getDate() - days);
    return new Date(cdate);

}

function AddDays(date, days) {
    var cdate = new Date(date);
    cdate = cdate.setDate(cdate.getDate() + days);
    return new Date(cdate);

}
function jsondate(date) {
    //var myDate = new Date(date.match(/\d+/)[0] * 1).getUTCUnix();
    ////var dd = myDate.getUTCUnix();
    //return $.jqx.dataFormat.formatdate(myDate, 'dd/MM/yyyy');
    var myDate = new Date(date.match(/\d+/)[0] * 1);
    if (myDate.toString().includes("Singapore") == false) {
        myDate = myDate.getUTCUnix();
    }
    console.log(myDate);
    //return $.jqx.dataFormat.formatdate(myDate, 'dd/MM/yyyy');
    //console.log(myDate.getTimezoneOffset());
    //var dd = myDate.getUTCUnix();
    //console.log(myDate);
    //console.log(dd);
    return $.jqx.dataFormat.formatdate(myDate, 'dd/MM/yyyy');
}
function jsondatesystem(date) {
    var myDate = new Date(date.match(/\d+/)[0] * 1);
    return $.jqx.dataFormat.formatdate(myDate, 'MM/dd/yyyy');
}
function jsondatetime(date) {
    var myDate = new Date(date.match(/\d+/)[0] * 1);

    console.log(myDate);
    return $.jqx.dataFormat.formatdate(myDate, 'yyyy,MM, dd HH:mm');
}
function dateformatINTIME(date) {
    var utc = date.toUTCString();
    var off = date.getTimezoneOffset();
    var unix = date.getUTCUnix();
    var time = date.getUTCUnixTime();
    //var tt= date.
    //var date = Date.parse(utc);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    var HH = date.getHours();
    var MM = date.getMinutes();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var cdate = dd + '/' + mm + '/' + yyyy;
    return cdate;
}
function dateformat(date) {
    var parts = date.split('/');

    var datearray = date.split("/");
    return (datearray[1] + '/' + datearray[0] + '/' + datearray[2]);

}
function dateformatIN(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var cdate = dd + '/' + mm + '/' + yyyy;
    return cdate;
}
Date.prototype.getUTCUnixTime = function () {
    return Math.floor(new Date(
        this.getUTCFullYear(),
        this.getUTCMonth(),
        this.getUTCDate(),
        this.getUTCHours() + malaysiazone,
        this.getUTCMinutes(),
        this.getUTCSeconds()
    ).getTime() / 1000);
}
//#enregion

function roundoff1(num) {
    if (num < 0) {
        num = num * (-1);
        var data = (+(Math.round(num + "e+6") + "e-6")).toFixed(2);
        return (data * (-1));
    }
    else {
        return (+(Math.round(num + "e+6") + "e-6")).toFixed(6);
    }
}
function roundoff3(num) {
    if (num < 0) {
        num = num * (-1);
        var data = (+(Math.round(num + "e+3") + "e-3")).toFixed(3);
        return (data * (-1));
    }
    else {
        return (+(Math.round(num + "e+3") + "e-3")).toFixed(3);
    }
}
function roundoff(num) {
    if (num < 0) {
        num = num * (-1);
        var data = (+(Math.round(num + "e+2") + "e-2")).toFixed(2);
        return (data * (-1));
    }
    else {
        return (+(Math.round(num + "e+2") + "e-2")).toFixed(2);
    }
}
function Keypress09(key) {
    if (key == "0" ||
        key == "1" || key == "2" ||
        key == "3" || key == "4" ||
        key == "5" || key == "6" ||
        key == "7" || key == "8" ||
        key == "9") {
        return true;
    }
    else {
        return false;
    }
}

function Keypress012(key) {
    if (key == "0" || key == "1" ||
        key == "2" ) {
        return true;
    }
    else {
        return false;
    }
}

function Keypress09N(key, value) {
    if (key == "0" || key == "-" ||
        key == "1" || key == "2" ||
        key == "3" || key == "4" ||
        key == "5" || key == "6" ||
        key == "7" || key == "8" ||
        key == "9") {
        if ((value.toString().startsWith("-")) == true && key == "-") {

            return false;
        }
        else {

            if (value.toString().length == 0 && key == "-") {
                return true;
            }
            else {
                if (key == "-") {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    }
    else {
        return false;
    }
}
$(document).on("keyup", 'input[type="textbox"]', function () {
    var length = $(this).val.length;
    if (length != 0) {
        $(this).val($(this).val().replace(/[a-z]/g, function (letter) {
            return letter.toUpperCase();
        }));

    }
});

$(document).on("keyup", '.jqx-combobox-input', function () {
    var length = $(this).val.length;
    if (length != 0) {
        $(this).val($(this).val().replace(/[a-z]/g, function (letter) {
            return letter.toUpperCase();
        }));

    }
});
function AutoScrollPage(grid, rowidnew) {
    var pagesize = $(grid).jqxGrid('getdatainformation').paginginformation.pagesize;
    var reminder = rowidnew % pagesize;
    var top = (reminder * 25);
    var height = $(grid).jqxGrid('height') / 2;
    //  $(grid).jqxGrid('refresh');
    top = top - height;

    /* setTimeout(function () { $(grid).jqxGrid('scrolloffset', top, 0); }, 25);*/
    setTimeout(function () { $(grid).jqxGrid('scrolloffset', top, 120); }, 25);


}
function AutoScrollH(grid, widthcolumns, column) {
    var widthnew = 0;
    if (widthcolumns.length != null) {
        if (widthcolumns.length != 0) {
            var index = findcolumnindex(widthcolumns, column, "datafield");

            if (index != null) {
                if (index != 0) {
                    index = index - 1;
                    for (var i = index; i > 0; i--) {
                        widthnew = widthnew + widthcolumns[i].width;
                    }
                    //   widthnew = widthnew;
                    var position = $(grid).jqxGrid('scrollposition');
                    var top = position.top;
                    setTimeout(function () { $(grid).jqxGrid('scrolloffset', top, widthnew); }, 10);
                }
            }

        }
    }
}
var Request_Controller = function (Request_Name = '', Reactivate_Timeout = 60000) {
    var a = this;
    a.Start_Request = function () {
        if (window.Requests == undefined) {
            window.Requests = {};
        }
        window.Requests[Request_Name] = { 'Status': 1, 'Time': + new Date() };
    }

    a.End_Request = function () {
        if (window.Requests == undefined) {
            window.Requests = [];
        }
        window.Requests[Request_Name] = undefined;
    }

    a.Is_Request_Running = function () {
        if (window.Requests == undefined || window.Requests[Request_Name] == undefined) {
            return 0;
        } else {
            var Time = + new Date();
            // Reactivate the request flag if server take more than 10 sec to respond
            if (window.Requests[Request_Name]['Time'] < (Time - Reactivate_Timeout)) {
                return 0;
            } else {
                return 1
            }
        }
    }
}

function KeypressAmountN(key, value) {
    if (key == "0" || key == "." ||
        key == "1" || key == "2" ||
        key == "3" || key == "4" ||
        key == "5" || key == "6" ||
        key == "7" || key == "8" || key == "-" ||
        key == "9") {
        if (value.split(".").length >= 2 && key == ".") {

            return false;
        }
        else {

            if ((value.toString().startsWith("-")) == true && key == "-") {

                try {
                    if (value.substring(1, value.length - 4).Equals(".")) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                catch (err) {
                    return false;
                }

            }
            else {

                if (value.toString().length == 0 && key == "-") {
                    return true;
                }
                else {
                    if (key == "-") {
                        try {
                            if (value.substring(1, value.length - 4).Equals(".")) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        catch (err) {
                            return false;
                        }
                    }
                    else {
                        return true;
                    }
                }


            }

        }
    }
    else {
        return false;
    }
}

function KeypressAmount(key, value) {
    if (key == "0" || key == "." ||
        key == "1" || key == "2" ||
        key == "3" || key == "4" ||
        key == "5" || key == "6" ||
        key == "7" || key == "8" ||
        key == "9") {
        var temp = value.toString().split(".");
        if (value.toString().split(".").length >= 2 && key == ".") {

            return false;
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}


function GirdFocusNextCell(grid, rowindex, columnindex, cloumnname, rowcount, AmountColumn, tempgirdfocuscolumns, widthcolumns) {

    var index = findcolumnindex(tempgirdfocuscolumns, cloumnname, "column");
    if (tempgirdfocuscolumns.length - 1 == index) {
        if (rowcount - 1 == rowindex) {
            if (ValNum($(grid).jqxGrid('getcellvalue', rowindex, AmountColumn)) != 0) {

                addrow(grid);
                setTimeout(function () {
                    $(grid).jqxGrid('endrowedit', rowindex, false);
                    if (tempgirdfocuscolumns[1].focus == 1) {
                        $(grid).jqxGrid('selectcell', rowcount, tempgirdfocuscolumns[1].column);
                    }
                    else {
                        $(grid).jqxGrid('selectcell', rowcount, tempgirdfocuscolumns[2].column);
                    }
                    $(grid).jqxGrid('focus');
                }, 50);


                return;
            }
            else {
                MsgBox("Amount Column is Zero.Please Check It !!!.");
                return;
            }
        }
        else {
            setTimeout(function () {
                $(grid).jqxGrid('endrowedit', rowindex, false);
                $(grid).jqxGrid('selectcell', rowcount - 1, tempgirdfocuscolumns[1].column);
                $(grid).jqxGrid('focus');
            }, 50);


            return;
        }
    }
    else {
        var c1 = index + 1;
        for (var i = c1; i <= tempgirdfocuscolumns.length; i++) {
            var focus = tempgirdfocuscolumns[c1].focus;
            var temp = tempgirdfocuscolumns[c1].column;
            var flag = false;
            if (temp != null) {
                if (temp.endsWith("combo") == true) {
                    c1 = c1 + 1;
                    flag = true;
                }
            }
            if (flag == false) {
                if (tempgirdfocuscolumns.length - 1 == c1) {

                    if (focus == 1) {
                        AutoScrollH(grid, widthcolumns, tempgirdfocuscolumns[c1].column);
                        $(grid).jqxGrid('selectcell', rowindex, tempgirdfocuscolumns[c1].column);
                        $(grid).jqxGrid('focus');
                        return;
                    }
                    else {
                        if (rowcount - 1 == rowindex) {
                            if (ValNum($(grid).jqxGrid('getcellvalue', rowindex, AmountColumn)) != 0) {
                                addrow(grid);
                                setTimeout(function () {
                                    $(grid).jqxGrid('endrowedit', rowindex, false);
                                    if (tempgirdfocuscolumns[1].focus == 1) {
                                        $(grid).jqxGrid('selectcell', rowcount, tempgirdfocuscolumns[1].column);
                                    }
                                    else {
                                        $(grid).jqxGrid('selectcell', rowcount, tempgirdfocuscolumns[2].column);
                                    }
                                    $(grid).jqxGrid('focus');
                                }, 50);


                                return;
                            }
                            else {
                                MsgBox("Amount Column is Zero.Please Check It !!!.");
                                return;
                            }
                        }
                        else {
                            setTimeout(function () {
                                $(grid).jqxGrid('endrowedit', rowindex, false);
                                $(grid).jqxGrid('selectcell', rowcount - 1, tempgirdfocuscolumns[1].column);
                                $(grid).jqxGrid('focus');
                            }, 50);

                            return;
                        }
                    }
                }
                else {
                    if (focus == 0) {
                        c1 = c1 + 1;
                    }
                    else {
                        AutoScrollH(grid, widthcolumns, tempgirdfocuscolumns[c1].column);
                        $(grid).jqxGrid('selectcell', rowindex, tempgirdfocuscolumns[c1].column);
                        $(grid).jqxGrid('focus');
                        return;
                    }
                }
            }
        }

    }

}

function DeleteRow(grid, rowindex, columnindex, cloumnname, rowcount, msgstatus) {
    if (msgstatus == 1) {


        var str = "Do you Want to Delete Row?";

        MsgBoxYesNo(str).then(function (reply) {
            if (reply.isConfirmed) {


                if (rowcount > 1) {
                    var id = $(grid).jqxGrid('getrowid', rowindex);
                    var commit = $(grid).jqxGrid('deleterow', id);
                    rowcount = rowcount - 1;
                }
                else {
                    var id = $(grid).jqxGrid('getrowid', rowindex);
                    var commit = $(grid).jqxGrid('deleterow', id);
                    addrow(grid);
                }
                rowcount = $(grid).jqxGrid('getdatainformation').rowscount;
                var value = $(grid).jqxGrid('getcellvalue', rowcount - 1, cloumnname);
                if (NullToString($(grid).jqxGrid('getcellvalue', rowcount - 1, cloumnname)) != "") {
                    addrow(grid);
                    setTimeout(function () {
                        $(grid).jqxGrid('selectcell', rowcount, cloumnname);
                        $(grid).jqxGrid('focus');
                    }, 50);

                }
                else {
                    setTimeout(function () {
                        $(grid).jqxGrid('selectcell', rowcount - 1, cloumnname);
                        $(grid).jqxGrid('focus');
                    }, 50);

                }
            }
        });

    }
    else {
        if (rowcount > 1) {
            var id = $(grid).jqxGrid('getrowid', rowindex);
            var commit = $(grid).jqxGrid('deleterow', id);
            rowcount = rowcount - 1;
        }
        else {
            var id = $(grid).jqxGrid('getrowid', rowindex);
            var commit = $(grid).jqxGrid('deleterow', id);
            addrow(grid);
        }
        rowcount = $(grid).jqxGrid('getdatainformation').rowscount;
        var value = $(grid).jqxGrid('getcellvalue', rowcount - 1, cloumnname);
        if (NullToString($(grid).jqxGrid('getcellvalue', rowcount - 1, cloumnname)) != "") {
            addrow(grid);

            setTimeout(function () {
                $(grid).jqxGrid('selectcell', rowcount, cloumnname);
                $(grid).jqxGrid('focus');
            }, 50);
        }
        else {
            setTimeout(function () {
                $(grid).jqxGrid('selectcell', rowcount - 1, cloumnname);
                $(grid).jqxGrid('focus');
            }, 50);

        }
    }
}
function DeleteRowNew(grid, rowindex, columnindex, cloumnname, rowcount, msgstatus) {
    var id = $(grid).jqxGrid('getrowid', rowindex);
    var commit = $(grid).jqxGrid('deleterow', id);
    rowcount = $(grid).jqxGrid('getdatainformation').rowscount;
    if (rowcount != 0) {
        setTimeout(function () {
            $(grid).jqxGrid('selectcell', rowcount, cloumnname);
            $(grid).jqxGrid('focus');
        }, 50);
    }
}
//function parseDate(str) {
//    var mdy = str.split('/');
//    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
//}
function findindex(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return null;
}

function findcolumnindex(array, value, columnname) {
    for (var i = 0; i < array.length; i++) {
        var temp = array[i][columnname];
        if (temp == value) {
            return i;
        }
    }
    return null;
}
function VisibleColumn(filename, gridcolumns) {
    var MComid = localStorage.getItem("MComid");
    totalwidthgrid = 0;
    var getData = [];
    $.ajax({
        async: false,
        url: "/Content/Appdata/Visible/" + MComid + "/" + filename + ".json?v = " + new Date(),
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            if (data != null) {
                if (data.length != 0) {
                    getData = data;
                    //for (var i = 0; i < data.length; i++) {
                    //    gridItemmaster.jqxGrid('showcolumn', data[i].column);
                    //}
                }
            }

        },
        error: function (error, e1) {

        },
    });
    for (var i = 0; i < getData.length; i++) {
        var column = getData[i].column;
        var Visible = getData[i].Visible;
        getData[i].Comid = MComid;
        if (Visible == false) {
            Visible = true;
        }
        else {
            Visible = false;
        }
        var Width = getData[i].Width;
        var index = findcolumnindex(gridcolumns, column, "datafield")// gridcolumns.indexOf(column);
        if (index != null) {
            try {
                var hiddenvalue = gridcolumns[index].hidden;
                if (hiddenvalue != null) {
                    gridcolumns[index].hidden = Visible;
                }
                if (Visible == false) {
                    totalwidthgrid = totalwidthgrid + Width;
                }
                gridcolumns[index].width = Width;

            }
            catch (err) {

            }
        }
    }
}
function newguid() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
function MRPWindow(window, grid, datalist) {
    MultiMRP(grid, datalist);
    var $this = $(this);
    var width = $this.width();
    var height = $this.height();
    let centerX = (width - 450) / 2;
    let centerY = (height - 450) / 2;

    // var offset = gridcashier.offset();
    $(window).jqxWindow({
        position: { x: centerX, y: centerY },
        showCollapseButton: false, maxHeight: 400, maxWidth: 700, minHeight: 200, minWidth: 200, height: 300, width: 525, isModal: true, keyboardCloseKey: 0, resizable: false,
        initContent: function () {

        }
    });
    $(window).jqxWindow('Open');
    setTimeout(function () {
        $(grid).jqxGrid('selectcell', 0, 'MRP');
        $(grid).jqxGrid('focus');
    }, 500);
}
function AutoScroll(grid, rowidnew) {
    var Rowcount = $(grid).jqxGrid('getdatainformation').rowscount;
    var top = (Rowcount * 25);
    // setTimeout(function () { $(grid).jqxGrid('refresh'); }, 10);
    setTimeout(function () { $(grid).jqxGrid('scrolloffset', top, 0); }, 10);



}



function ProductWindowR3(window, grid, gridmain, X, Y, ismodel, height) {
    var $this = $(this);
    var offset = $(gridmain).offset();

    $(window).jqxWindow({
        position: { x: offset.left + X, y: offset.top + Y },
        showCollapseButton: false, maxHeight: 1200, maxWidth: 1200, minHeight: 300, minWidth: 300, height: height, width: 725, keyboardCloseKey: 0, isModal: ismodel, resizable: false,
  
    });

    $(window).jqxWindow('Open');

 /*  $(grid).jqxGrid('focus');*/
 


}



function CustomerNtf(grid, height,Cid) {

    var Comid = localStorage.getItem("Comid");
    var getdata = {};
    var CustId = 0;
    if (Cid > 0) {
         CustId = Cid;
    }
    var objlist = {
        "Comid": Comid,
        "Id": CustId
    };

    $.ajax({
        url: "/CustomerMaster/SelectCustomerNtf",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(objlist),
        success: function (data) {
            var getdata = data.data || [];

            var source = {
                localdata: getdata,
                datatype: "local",
                datafields: [
                    { name: 'Id', type: 'number' },
                    { name: 'CustomerMasterRefId', type: 'number' },
                    { name: 'Name', type: 'string' },
                    { name: 'Whatsapp', type: 'string' },
                    { name: 'Email', type: 'string' }
                ],
                addrow: function (rowid, rowdata, position, commit) {
                    commit(true);
                    AutoScroll(grid, rowid);
                },
                deleterow: function (rowid, commit) {
                    commit(true);
                    AutoScroll(grid, rowid);
                },
                updaterow: function (rowid, newdata, commit) {
                    newdata.EditMode = 1;
                    commit(true);
                }
            };

            var dataAdapter = new $.jqx.dataAdapter(source);
            $(grid).jqxGrid({
                width: 700,
                height: height,
                rowsheight: 25,
                columnsheight: 25,
                scrollmode: 'deferred',
                showaggregates: true,
                theme: 'classic',
                editmode: 'programmatic',
                filterable: false,
                pageable: true,
                editable: true,
                pagesize: 15,
                keyboardnavigation: true,
                selectionmode: 'singlecell',
                source: dataAdapter,
                columns: [
                    { text: 'Id', datafield: 'Id', width: 90, hidden: true },
                    { text: 'Name', datafield: 'Name', width: 250 },
                    { text: 'Whatsapp', datafield: 'Whatsapp', width: 150 },
                    { text: 'Email', datafield: 'Email', width: 250 }
                ]
            });

            var emptyRow = {
                Id: 0,
                CustomerMasterRefId: 0,
                Name: '',
                Whatsapp: '',
                Email: ''
            };
            $(grid).jqxGrid('addrow', null, emptyRow);
          /*  $(grid).jqxGrid('focus');*/
        },

        error: function (error) {
               MsgBox('Technical Fault Contact Software Vendor  !!!.');
        }

    });


}



function MsgBoxViewPrintMail(msg) {
    var defer = $.Deferred();
    $('<div>' + msg + '</div>').dialog({
        autoOpen: true,
        resizable: false,
        height: 'auto',
        width: 500,
        modal: true,
        close: function () {
            $(this).dialog('destroy');
        },
        title: MsgTitle,
        buttons: {
            "Print": function () {
                defer.resolve("Print");
                $(this).dialog("close");
            },
            "View": function () {
                defer.resolve("View");
                $(this).dialog("close");
            },
            "Mail": function () {
                defer.resolve("Mail");
                $(this).dialog("close");
            },
            "Cancel": function () {
                defer.resolve("Cancel");
                $(this).dialog("close");
            }
        }
    });
    return defer.promise(); //important to return the defer promise
}
function AutoScrollNew(grid, rowidnew) {
    var Rowcount = $(grid).jqxGrid('getdatainformation').rowscount;
    var top = (Rowcount * 25);
    setTimeout(function () { $(grid).jqxGrid('refresh'); }, 100);
    // setTimeout(function () { $(grid).jqxGrid('refresh'); }, 10);
    setTimeout(function () { $(grid).jqxGrid('scrolloffset', top, 0); }, 100);
    setTimeout(function () { $(grid).jqxGrid('refresh'); }, 100);



}
function AutoScrollPurchase(grid, rowidnew, grdHeight) {
    var Rowcount = $(grid).jqxGrid('getdatainformation').rowscount;
    var reminder = grdHeight % 25;
    reminder = Rowcount - reminder;
    if (reminder > 0) {
        var top = (reminder * 75);


        setTimeout(function () { $(grid).jqxGrid('refresh'); }, 50);
        setTimeout(function () { $(grid).jqxGrid('scrolloffset', top, 0); }, 10);
    }



}
function AutoScrollKeydown(grid, rowindex) {
    var top = ((rowindex - 1) * 25);
    var position = $(grid).jqxGrid('scrollposition');
    var left = position.left;
    setTimeout(function () { $(grid).jqxGrid('scrolloffset', top, left); }, 5);



}
function MultiMRP(grid, datalist) {

    var source =
    {
        localdata: datalist,
        datatype: "local",
        datafields:
            [
                { name: 'ProductCode', type: 'string' },
                { name: 'ProductName', type: 'string' },
                { name: 'MRP', type: 'number' },
                { name: 'Stock', type: 'number' },
                { name: 'Id', type: 'number' }

            ],
        addrow: function (rowid, rowdata, position, commit) {
            commit(true);
            AutoScroll(grid, rowid);
        },
        deleterow: function (rowid, commit) {
            commit(true);
            AutoScroll(grid, rowid);
        },
        updaterow: function (rowid, newdata, commit) {
            newdata.EditMode = 1;
            commit(true);
        }
    };

    var dataAdapter = new $.jqx.dataAdapter(source);
    $(grid).jqxGrid(
        {
            width: 512,
            height: 255,
            rowsheight: 25,
            columnsheight: 25,
            // pageable: true,
            //   sortable: true,
            scrollmode: 'deferred',
            editable: false,
            theme: 'classic',
            showaggregates: true,
            editmode: 'programmatic',
            keyboardnavigation: true,
            selectionmode: 'singlecell',

            //  pagesizeoptions: ['50', '100', '500', '1000'],
            // pagesize: 50,
            source: dataAdapter,

            columns: [
                { text: 'Description', datafield: 'ProductName', width: 311 },
                { text: 'MRP', datafield: 'MRP', width: 100, cellsalign: 'right', cellsformat: 'd2' },
                { text: 'Stock', datafield: 'Stock', width: 100, cellsalign: 'right', cellsformat: 'd2' },
                { text: 'ProductCode', datafield: 'ProductCode', width: 100, hidden: true },
                { text: 'Id', datafield: 'Id', width: 90, hidden: true }
            ]
        });
    $(grid).jqxGrid("render");
    var localizationobj = {};
    localizationobj.thousandsseparator = "";
    $(grid).jqxGrid('localizestrings', localizationobj);
    $(grid).jqxGrid('selectcell', 0, 'MRP');
    $(grid).jqxGrid('focus');
}

function ExpWindow(window, grid, code) {
    ExpStock(grid, code);
    if (ExpCount != 0) {
        var $this = $(this);

        var width = $this.width();
        var height = $this.height();
        let centerX = (width - 295) / 2;
        let centerY = (height - 330) / 2;

        // var offset = gridcashier.offset();
        $(window).jqxWindow({
            position: { x: centerX, y: centerY },
            showCollapseButton: false, maxHeight: 400, maxWidth: 700, minHeight: 200, minWidth: 200, height: 330, width: 295, isModal: true, keyboardCloseKey: 0, resizable: false,
            initContent: function () {

            }
        });
        $(window).jqxWindow('Open');
        setTimeout(function () {
            $(grid).jqxGrid('selectcell', 0, 'Stock');
            $(grid).jqxGrid('focus');
        }, 600);
    }
}
var ExpCount = 0;
function ExpStock(grid, code) {
    var Comid = localStorage.getItem("Comid");
    var getdata = {};
    $.ajax({
        async: false,
        url: "/ItemMaster/SelectExpStock",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Id":' + code + ',"Comid":' + Comid + '}',
        success: function (data) {
            getdata = data.data;

        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }


    });
    ExpCount = getdata.length;
    getdata.forEach((obj, index) => {
        //  obj = $.extend(obj, { [grdMRP]: parseFloat(obj[grdMRP]).toFixed(2) });

        if (obj.UOMDecimal == 2) {
            obj = $.extend(obj, { Stock: parseFloat(obj.Stock).toFixed(2) });
        } else if (obj.UOMDecimal == 3) {
            obj = $.extend(obj, { Stock: parseFloat(obj.Stock).toFixed(3) });
        }
        else {
            obj = $.extend(obj, { Stock: parseFloat(obj.Stock).toFixed(0) });
        }

    });
    var source =
    {
        localdata: getdata,
        datatype: "local",
        datafields:
            [
                { name: 'Expdate', type: 'date' },
                { name: 'MFdate', type: 'date' },
                { name: 'Stock', type: 'string' },
                { name: 'Id', type: 'int' }

            ],
        addrow: function (rowid, rowdata, position, commit) {
            commit(true);
            AutoScroll(grid, rowid);
        },
        deleterow: function (rowid, commit) {
            commit(true);
            AutoScroll(grid, rowid);
        },
        updaterow: function (rowid, newdata, commit) {
            commit(true);
        }
    };

    var dataAdapter = new $.jqx.dataAdapter(source);
    $(grid).jqxGrid(
        {
            width: 280,
            height: 280,
            rowsheight: 25,
            columnsheight: 25,
            // pageable: true,
            //   sortable: true,
            scrollmode: 'deferred',
            editable: false,
            theme: 'classic',
            showaggregates: true,
            editmode: 'programmatic',
            keyboardnavigation: true,
            selectionmode: 'singlecell',

            //  pagesizeoptions: ['50', '100', '500', '1000'],
            // pagesize: 50,
            source: dataAdapter,

            columns: [
                { text: 'Expdate', datafield: 'Expdate', width: 100, culture: 'as-IN', formatString: 'dd/MM/yyyy', cellsformat: 'dd/MM/yyyy' },
                { text: 'MFdate', datafield: 'MFdate', width: 100, culture: 'as-IN', formatString: 'dd/MM/yyyy', cellsformat: 'dd/MM/yyyy' },
                { text: 'Stock', datafield: 'Stock', width: 80, cellsalign: 'right' },
                { text: 'Id', datafield: 'Id', width: 90, hidden: true }
            ]
        });
    $(grid).jqxGrid("render");
    $(grid).jqxGrid('selectcell', 0, 'Stock');
    $(grid).jqxGrid('focus');
}
var widthnewbatch = 0;
function Batchgrid(grid, datalist) {


    var MainSet = JSON.parse(localStorage.getItem("Mainsetting"));
    var BatchNoText = MainSet[0].BatchNoName;

    var source =
    {
        localdata: datalist,
        datatype: "local",
        datafields:
            [

                { name: 'ProductName', type: 'string' },
                { name: 'BatchNo', type: 'string' },
                { name: 'Stock', type: 'number' },
                { name: 'SalesRate', type: 'number' },
                { name: 'Batchid', type: 'int' },
                { name: 'MFDate', type: 'date' },
                { name: 'ExpDate', type: 'date' },
                { name: 'SizeCombo', type: 'string' },
                { name: 'BrandCombo', type: 'string' },
                { name: 'ColorCombo', type: 'string' },
                { name: 'ModelCombo', type: 'string' },
                { name: 'GengerCombo', type: 'string' },

            ],
        addrow: function (rowid, rowdata, position, commit) {
            commit(true);
            AutoScroll(grid, rowid);
        },
        deleterow: function (rowid, commit) {
            commit(true);
            AutoScroll(grid, rowid);
        },
        updaterow: function (rowid, newdata, commit) {
            commit(true);
        }
    };

    var dataAdapter = new $.jqx.dataAdapter(source);

    var gridcolumns = [
        { text: 'Description', datafield: 'ProductName', width: 200, hidden: false },
        { text: BatchNoText, datafield: 'BatchNo', width: 140, hidden: false },
        { text: 'Stock', datafield: 'Stock', width: 75, cellsalign: 'right', cellsformat: 'd0', hidden: false },
        { text: 'SaleRate', datafield: 'SalesRate', width: 75, cellsalign: 'right', cellsformat: 'd2', hidden: false },
        { text: 'Batchid', datafield: 'Batchid', width: 75, hidden: true },
        { text: 'MFDate', datafield: 'MFDate', width: 100, culture: 'as-IN', formatString: 'dd/MM/yyyy', cellsformat: 'dd/MM/yyyy', hidden: true },
        { text: 'ExpDate', datafield: 'ExpDate', width: 100, culture: 'as-IN', formatString: 'dd/MM/yyyy', cellsformat: 'dd/MM/yyyy', hidden: true },
        { text: 'Size', datafield: 'SizeCombo', width: 75, hidden: true },
        { text: 'Brand', datafield: 'BrandCombo', width: 75, hidden: true },
        { text: 'Color', datafield: 'ColorCombo', width: 75, cellsalign: 'right', cellsformat: 'd2', hidden: true },
        { text: 'Model', datafield: 'ModelCombo', width: 75, cellsalign: 'right', cellsformat: 'd2', hidden: true },
        { text: 'Genger', datafield: 'GengerCombo', width: 75, hidden: true }
    ]

    var widthnew = 515;
    var objdata = datalist.filter(obj => obj.ExpDate != null);
    if (objdata.length != 0) {
        var index = findcolumnindex(gridcolumns, "ExpDate", "datafield")
        if (index != null) {
            gridcolumns[index].hidden = false;
        }
        widthnew = widthnew + 100;
    }
    objdata = datalist.filter(obj => obj.MFDate != null);
    if (objdata.length != 0) {
        var index = findcolumnindex(gridcolumns, "MFDate", "datafield")
        if (index != null) {
            gridcolumns[index].hidden = false;
        }
        widthnew = widthnew + 100;
    }
    objdata = datalist.filter(obj => obj.BrandCombo != "");
    if (objdata.length != 0) {
        widthnew = widthnew + 75;
        var index = findcolumnindex(gridcolumns, "BrandCombo", "datafield")
        if (index != null) {
            gridcolumns[index].hidden = false;
        }
    }
    objdata = datalist.filter(obj => obj.ColorCombo != "");
    if (objdata.length != 0) {
        widthnew = widthnew + 75;
        var index = findcolumnindex(gridcolumns, "ColorCombo", "datafield")
        if (index != null) {
            gridcolumns[index].hidden = false;
        }
    }
    objdata = datalist.filter(obj => obj.ModelCombo != "");
    if (objdata.length != 0) {
        widthnew = widthnew + 75;
        var index = findcolumnindex(gridcolumns, "ModelCombo", "datafield")
        if (index != null) {
            gridcolumns[index].hidden = false;
        }
    }
    objdata = datalist.filter(obj => obj.SizeCombo != "");
    if (objdata.length != 0) {
        widthnew = widthnew + 75;
        var index = findcolumnindex(gridcolumns, "SizeCombo", "datafield")
        if (index != null) {
            gridcolumns[index].hidden = false;
        }
    }

    widthnewbatch = widthnew;
    $(grid).jqxGrid(
        {
            width: widthnew,
            height: 300,
            rowsheight: 25,
            columnsheight: 25,
            // pageable: true,
            //   sortable: true,
            scrollmode: 'deferred',
            editable: false,
            theme: 'classic',
            showaggregates: true,
            editmode: 'programmatic',
            keyboardnavigation: true,
            selectionmode: 'singlecell',

            //  pagesizeoptions: ['50', '100', '500', '1000'],
            // pagesize: 50,
            source: dataAdapter

        });
    $(grid).jqxGrid({ columns: gridcolumns });
    $(grid).jqxGrid("render");
    var localizationobj = {};

    localizationobj.thousandsseparator = "";
    $(grid).jqxGrid('localizestrings', localizationobj);

    $(grid).jqxGrid('selectcell', 0, 'BatchNo');
    $(grid).jqxGrid('focus');
}
function BatchWindow(window, grid, datalist) {
    Batchgrid(grid, datalist);


    var $this = $(this);

    var width = $this.width();
    var height = $this.height();
    let centerX = (width - widthnewbatch + 10) / 2;
    let centerY = (height - 350) / 2;

    // var offset = gridcashier.offset();
    $(window).jqxWindow({
        position: { x: centerX, y: centerY },
        showCollapseButton: false, maxHeight: 400, maxWidth: 1000, minHeight: 200, minWidth: 200, height: 350, width: widthnewbatch + 10, isModal: true, keyboardCloseKey: 0, resizable: false,
        initContent: function () {

        }
    });
    $(window).jqxWindow('Open');
    setTimeout(function () {
        $(grid).jqxGrid('selectcell', 0, 'BatchNo');
        $(grid).jqxGrid('focus');
    }, 600);
}
function BillHoldgrid(grid, datalist) {




    var source =
    {
        localdata: datalist,
        datatype: "local",
        datafields:
            [

                { name: 'HoldName', type: 'string' },
                { name: 'Id', type: 'int' },

            ],
        addrow: function (rowid, rowdata, position, commit) {
            commit(true);
            AutoScroll(grid, rowid);
        },
        deleterow: function (rowid, commit) {
            commit(true);
            AutoScroll(grid, rowid);
        },
        updaterow: function (rowid, newdata, commit) {
            commit(true);
        }
    };

    var dataAdapter = new $.jqx.dataAdapter(source);

    var gridcolumns = [
        { text: 'HoldName', datafield: 'HoldName', width: 150, hidden: false },
        { text: 'Id', datafield: 'Id', width: 100, hidden: true }

    ]

    $(grid).jqxGrid(
        {
            width: 165,
            height: 250,
            rowsheight: 25,
            columnsheight: 25,
            // pageable: true,
            //   sortable: true,
            scrollmode: 'deferred',
            editable: false,
            theme: 'classic',
            showaggregates: true,
            editmode: 'programmatic',
            keyboardnavigation: true,
            selectionmode: 'singlecell',

            //  pagesizeoptions: ['50', '100', '500', '1000'],
            // pagesize: 50,
            source: dataAdapter

        });
    $(grid).jqxGrid({ columns: gridcolumns });
    $(grid).jqxGrid("render");
    var localizationobj = {};

    localizationobj.thousandsseparator = "";
    $(grid).jqxGrid('localizestrings', localizationobj);

    $(grid).jqxGrid('selectcell', 0, 'HoldName');
    $(grid).jqxGrid('focus');
}
function BillHoldWindow(window, grid, datalist) {
    BillHoldgrid(grid, datalist);
    var $this = $(this);

    var width = $this.width();
    var height = $this.height();
    let centerX = (width - 180) / 2;
    let centerY = (height - 300) / 2;

    // var offset = gridcashier.offset();
    $(window).jqxWindow({
        position: { x: centerX, y: centerY },
        showCollapseButton: false, maxHeight: 400, maxWidth: 700, minHeight: 100, minWidth: 100, height: 300, width: 180, isModal: true, keyboardCloseKey: 0, resizable: false,
        initContent: function () {

        }
    });
    $(window).jqxWindow('Open');
    setTimeout(function () {
        $(grid).jqxGrid('selectcell', 0, 'HoldName');
        $(grid).jqxGrid('focus');
    }, 250);
}
function ServiceCallById(url, datavalue) {
    if (datavalue != "") {
        var objlist = [];
        $.ajax({
            async: false,
            url: url,
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            // data: '{"Id":' + value + '}',
            data: datavalue,
            success: function (data) {
                if (data.ok == true) {
                    objlist = data.data;
                }
                else {
                    MsgBox(data.messge);
                }

            },
            complete: function () {


            },
            error: function (xhr, err) {
                var responseTitle = $(xhr.responseText).filter('title').get(0);
                MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            }
        });
        return objlist;
    }
    else {
        var objlist = [];
        $.ajax({
            async: false,
            url: url,
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            // data: '{"Id":' + value + '}',
            data: JSON.stringify(objlist),
            success: function (data) {
                objlist = data;
            },
            complete: function () {
                $('#jqxLoader').jqxLoader('close');

            },
            error: function (xhr, err) {
                var responseTitle = $(xhr.responseText).filter('title').get(0);
                MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            }
        });
        return objlist;
    }
}
function ZeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}
var UnitFocus = 0;
function UnitMasterList(grid, Id, show) {
    var getdata = {};
    var objlist = {};
    UnitFocus = 0;
    var master = 1;
    if (show == true) {
        master = 0;
    }
    $.ajax({
        url: "/ItemMaster/SelectUnitMaster",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Id":' + Id + ',"Comid":' + Comid + ',"master":' + master + '}',
        success: function (data) {
            getdata = data.data;

            if (getdata.length != 0) {  //Add decimal places
                getdata.forEach((obj, index) => {
                    obj = $.extend(obj, { ["SaleRate"]: parseFloat(obj["SaleRate"]).toFixed(2) });
                })

                for (var i = 0; i < getdata.length; i++) {

                    if (getdata[i]["Default1"] == "1") {
                        UnitFocus = i;
                    }
                }
            }

            var source =
            {
                localdata: getdata,
                datatype: "local",
                datafields:
                    [
                        { name: 'UOMNAME', type: 'string' },
                        { name: 'Nos', type: 'string' },
                        { name: 'SaleRate', type: 'string' },
                        { name: 'Default1', type: 'number' },
                        { name: 'UOMId', type: 'number' },
                        { name: 'decimalvalue', type: 'number' },
                        { name: 'Id', type: 'number' }

                    ],
                addrow: function (rowid, rowdata, position, commit) {
                    commit(true);
                    // AutoScroll(grid, rowid);
                },
                deleterow: function (rowid, commit) {
                    commit(true);
                    // AutoScroll(grid, rowid);
                },
                updaterow: function (rowid, newdata, commit) {
                    newdata.EditMode = 1;
                    commit(true);
                }
            };

            var dataAdapter = new $.jqx.dataAdapter(source);
            $(grid).jqxGrid(
                {
                    width: 450,
                    height: 300,

                    // pageable: true,
                    //   sortable: true,
                    rowsheight: 25,
                    columnsheight: 25,
                    scrollmode: 'deferred',
                    editable: false,
                    theme: 'classic',
                    showaggregates: true,
                    editmode: 'programmatic',
                    keyboardnavigation: true,
                    selectionmode: 'singlecell',

                    //  pagesizeoptions: ['50', '100', '500', '1000'],
                    // pagesize: 50,
                    source: dataAdapter,

                    columns: [
                        { text: 'UOM', datafield: 'UOMNAME', width: 150 },
                        { text: 'Nos', datafield: 'Nos', width: 75 },
                        { text: 'SaleRate', datafield: 'SaleRate', width: 100 },
                        { text: 'Default', datafield: 'Default1', width: 75, hidden: show },
                        { text: 'UOMId', datafield: 'UOMId', width: 90, hidden: true },
                        { text: 'decimalvalue', datafield: 'decimalvalue', width: 90, hidden: true },
                        { text: 'Id', datafield: 'Id', width: 90, hidden: true }
                    ]
                });
            $(grid).jqxGrid("render");


        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }
    });


}


function GirdNextCell(grid, rowindex, columnindex, cloumnname, widthcolumns, rowcount) {
    var tempgridcolumns = GirdColumns(grid);
    columnindex = tempgridcolumns.indexOf(columnindex);
    if (columnindex == tempgridcolumns.length - 1) {
        if (rowindex == rowcount - 1) {
            if ($(grid).jqxGrid('getcellvalue', rowindex, cloumnname) != "") {
                addrow(grid);

            }
            else {
                return;
            }
        }

        $(grid).jqxGrid('selectcell', rowindex + 1, cloumnname);
        $(grid).jqxGrid('focus');
        return;
    }
    else {
        var c1 = columnindex + 1;
        for (var i = c1; i <= tempgridcolumns.length; i++) {
            var temp = tempgridcolumns[c1];
            var flag = false;
            if (temp != null) {
                if (temp.endsWith("combo") == true) {
                    c1 = c1 + 1;
                    flag = true;
                }
            }
            if (flag == false) {
                if (tempgridcolumns.length == c1) {
                    if (rowcount - 1 == rowindex) {
                        if ($(grid).jqxGrid('getcellvalue', rowindex, cloumnname) != "") {
                            addrow(grid);
                        }
                        else {
                            return;
                        }
                    }
                    $(grid).jqxGrid('selectcell', rowindex + 1, cloumnname);
                    $(grid).jqxGrid('focus');
                    return;
                }
                else if ($(grid).jqxGrid('iscolumnvisible', temp) == true) {
                    AutoScrollH(grid, widthcolumns, temp);
                    $(grid).jqxGrid('selectcell', rowindex, temp);
                    $(grid).jqxGrid('focus');
                    return;
                }
                else {
                    c1 = c1 + 1;
                }
            }

        }
    }
}

function SGirdNextCell(grid, rowindex, columnindex, cloumnname, widthcolumns, rowcount) {
    var tempgridcolumns = GirdColumns(grid);
    columnindex = tempgridcolumns.indexOf(columnindex);
    if (columnindex == tempgridcolumns.length - 1) {
        if (rowindex == rowcount - 1) {
         
                addrow(grid);

          
    
        }

        $(grid).jqxGrid('selectcell', rowindex + 1, cloumnname);
        $(grid).jqxGrid('focus');
        return;
    }
    else {
        var c1 = columnindex + 1;
        for (var i = c1; i <= tempgridcolumns.length; i++) {
            var temp = tempgridcolumns[c1];
            var flag = false;
            if (temp != null) {
                if (temp.endsWith("combo") == true) {
                    c1 = c1 + 1;
                    flag = true;
                }
            }
            if (flag == false) {
                if (tempgridcolumns.length == c1) {
                    if (rowcount - 1 == rowindex) {
                        if ($(grid).jqxGrid('getcellvalue', rowindex, cloumnname) != "") {
                            addrow(grid);
                        }
                        else {
                            return;
                        }
                    }
                    $(grid).jqxGrid('selectcell', rowindex + 1, cloumnname);
                    $(grid).jqxGrid('focus');
                    return;
                }
                else if ($(grid).jqxGrid('iscolumnvisible', temp) == true) {
                    AutoScrollH(grid, widthcolumns, temp);
                    $(grid).jqxGrid('selectcell', rowindex, temp);
                    $(grid).jqxGrid('focus');
                    return;
                }
                else {
                    c1 = c1 + 1;
                }
            }

        }
    }
}

function sidemenustop() {


    $('body').addClass('mini-sidebar');
    $(this).removeClass('active');
    $('.subdrop + ul');
    localStorage.removeItem('screenModeNightTokenState', 'night');
    setTimeout(function () {
        $("body").addClass("mini-sidebar");
        $(".header-left").removeClass("active");
    }, 100);





}
function formatErrorMessage(jqXHR, exception) {

    if (jqXHR.status === 0) {
        return ('Not connected.\nPlease verify your network connection.');
    } else if (jqXHR.status == 404) {
        return ('The requested page not found. [404]');
    } else if (jqXHR.status == 500) {
        return ('Internal Server Error [500].');
    } else if (exception === 'parsererror') {
        return ('Requested JSON parse failed.');
    } else if (exception === 'timeout') {
        return ('Time out error.');
    } else if (exception === 'abort') {
        return ('Ajax request aborted.');
    } else {
        return ('Uncaught Error.\n' + jqXHR.responseText);
    }
}


function ProductWindowP(window1, grid, gridmain, X, Y, ismodel) {
    var $this = $(this);
    var offset = $(gridmain).offset();
    window.currentGrid = gridmain;
    var Tamil = localStorage.getItem("Tamil");
    var width = 725;
    if (Tamil == "true") {
        width = 725 + 250;

    }
    // var offset = gridcashier.offset();
    $(window1).jqxWindow({
        position: { x: offset.left + X, y: offset.top + Y },
        showCollapseButton: false, maxHeight: 1200, maxWidth: 1200, minHeight: 300, minWidth: 300, height: 425, width: width, keyboardCloseKey: 0, isModal: ismodel, resizable: false,
        initContent: function () {
            if (ismodel == true) {
                $('#input').jqxInput('focus');
            }
        }
    });
    $(window1).on('close', function (event) {
          $(gridmain).jqxGrid('focus');
    });
    $(window1).jqxWindow('Open');
    $("#input").jqxInput({ placeHolder: "Search ProductName", width: 440, height: 30, minLength: 1 });
    if (ismodel == true) {
        setTimeout(function () {

            $('#input').jqxInput('focus');
        }, 100);gridproduct
    }
}
function ServiceWindowP(window1, grid, gridmain, X, Y, ismodel) {
    var $this = $(this);
    var offset = $(gridmain).offset();
    window.currentGrid = gridmain;
    var Tamil = localStorage.getItem("Tamil");
    var width = 725;
    if (Tamil == "true") {
        width = 725 + 250;

    }
    // var offset = gridcashier.offset();
    $(window1).jqxWindow({
        position: { x: offset.left + X, y: offset.top + Y },
        showCollapseButton: false, maxHeight: 1200, maxWidth: 1200, minHeight: 300, minWidth: 300, height: 425, width: width, keyboardCloseKey: 0, isModal: ismodel, resizable: false,
        initContent: function () {
            if (ismodel == true) {
                $('#inputS').jqxInput('focus');
            }
        }
    });
    $(window1).on('close', function (event) {
          $(gridmain).jqxGrid('focus');
    });
    $(window1).jqxWindow('Open');
    $("#inputS").jqxInput({ placeHolder: "Search ServiceName", width: 440, height: 30, minLength: 1 });
    if (ismodel == true) {
        setTimeout(function () {

            $('#inputS').jqxInput('focus');
        }, 100);
    }
}
function ProductWindowR(window, grid, gridmain, X, Y, ismodel) {
    var $this = $(this);
    var offset = $(gridmain).offset();
    
    // var offset = gridcashier.offset();
    $(window).jqxWindow({
        position: { x: offset.left + X, y: offset.top + Y },
        showCollapseButton: false, maxHeight: 1200, maxWidth: 1200, minHeight: 300, minWidth: 300, height: 425, width: 725, keyboardCloseKey: 0, isModal: ismodel, resizable: false,
        initContent: function () {
            if (ismodel == true) {
                $('#input').jqxInput('focus');
            }
        }
    });
    $(window).on('close', function (event) {
        //  $(gridmain).jqxGrid('focus');
    });
    $(window).jqxWindow('Open');
    $("#input").jqxInput({ placeHolder: "Search ProductName", width: 440, height: 30, minLength: 1 });
    if (ismodel == true) {
        setTimeout(function () {

            $('#input').jqxInput('focus');
        }, 100);
    }
}
function ProductWindowR2(window, grid, gridmain, X, Y, ismodel,height) {
    var $this = $(this);
    var offset = $(gridmain).offset();

    // var offset = gridcashier.offset();
    $(window).jqxWindow({
        position: { x: offset.left + X, y: offset.top + Y },
        showCollapseButton: false, maxHeight: 1200, maxWidth: 1200, minHeight: 300, minWidth: 300, height: height, width: 725, keyboardCloseKey: 0, isModal: ismodel, resizable: false,
        initContent: function () {
            if (ismodel == true) {
                $('#input').jqxInput('focus');
            }
        }
    });
    $(window).on('close', function (event) {
        //  $(gridmain).jqxGrid('focus');
    });
    $(window).jqxWindow('Open');
    $("#input").jqxInput({ placeHolder: "Search ProductName", width: 440, height: 30, minLength: 1 });
    if (ismodel == true) {
        setTimeout(function () {

            $('#input').jqxInput('focus');
        }, 100);
    }
}

function DeliveryaddressWindowR2(window, grid, gridmain, X, Y, ismodel, height) {
    var $this = $(this);
    var offset = $(gridmain).offset();

    // var offset = gridcashier.offset();
    $(window).jqxWindow({
        position: { x: offset.left + X, y: offset.top + Y },
        showCollapseButton: false, maxHeight: 1200, maxWidth: 1200, minHeight: 300, minWidth: 300, height: height, width: 725, keyboardCloseKey: 0, isModal: ismodel, resizable: false,
        initContent: function () {
            if (ismodel == true) {
                $('#deliveryaddressinput').jqxInput('focus');
            }
        }
    });
    $(window).on('close', function (event) {
        //  $(gridmain).jqxGrid('focus');
    });
    $(window).jqxWindow('Open');
    $("#deliveryaddressinput").jqxInput({ placeHolder: "Search Addreass", width: 440, height: 30, minLength: 1 });
    if (ismodel == true) {
        setTimeout(function () {

            $('#deliveryaddressinput').jqxInput('focus');
        }, 100);
    }
}

function PickupaddressWindowR2(window, grid, gridmain, X, Y, ismodel, height) {
    var $this = $(this);
    var offset = $(gridmain).offset();

    // var offset = gridcashier.offset();
    $(window).jqxWindow({
        position: { x: offset.left + X, y: offset.top + Y },
        showCollapseButton: false, maxHeight: 1200, maxWidth: 1200, minHeight: 300, minWidth: 300, height: height, width: 725, keyboardCloseKey: 0, isModal: ismodel, resizable: false,
        initContent: function () {
            if (ismodel == true) {
                $('#addressinput').jqxInput('focus');
            }
        }
    });
    $(window).on('close', function (event) {
        //  $(gridmain).jqxGrid('focus');
    });
    $(window).jqxWindow('Open');
    $("#addressinput").jqxInput({ placeHolder: "Search Addreass", width: 440, height: 30, minLength: 1 });
    if (ismodel == true) {
        setTimeout(function () {

            $('#addressinput').jqxInput('focus');
        }, 100);
    }
}


function ProductListQ(grid, height) {

    var Comid = localStorage.getItem("Comid");
    var MComid = localStorage.getItem("MComid");
    var CommonCompany = localStorage.getItem("CommonCompany");
    if (CommonCompany == "true") {
        Comid = MComid;
    }

    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/ItemMaster/GetProductList",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            getdata = data;
            var source =
            {
                localdata: getdata,
                datatype: "local",
                datafields:
                    [
                        { name: 'Productcode', type: 'string' },
                        { name: 'ProductName', type: 'string' },
                        { name: 'MRP', type: 'number' },
                        { name: 'PurRate', type: 'number' },
                        { name: 'GST', type: 'number' },
                        { name: 'Id', type: 'number' }

                    ],
                addrow: function (rowid, rowdata, position, commit) {
                    commit(true);
                    // AutoScroll(grid, rowid);
                },
                deleterow: function (rowid, commit) {
                    commit(true);
                    // AutoScroll(grid, rowid);
                },
                updaterow: function (rowid, newdata, commit) {
                    newdata.EditMode = 1;
                    commit(true);
                }
            };

            var dataAdapter = new $.jqx.dataAdapter(source);
            $(grid).jqxGrid(
                {
                    width: 700,
                    height: height,

                    // pageable: true,
                    //   sortable: true,
                    rowsheight: 25,
                    columnsheight: 25,
                    scrollmode: 'deferred',
                    editable: false,
                    theme: 'classic',
                    showaggregates: true,
                    editmode: 'programmatic',
                    keyboardnavigation: true,
                    selectionmode: 'singlecell',

                    //  pagesizeoptions: ['50', '100', '500', '1000'],
                    // pagesize: 50,
                    source: dataAdapter,

                    columns: [
                        { text: 'ProductCode', datafield: 'Productcode', width: 120, hidden: true },
                        { text: 'Description', datafield: 'ProductName', width: 320 },
                        { text: 'MRP', datafield: 'MRP', width: 85, cellsalign: 'right', cellsformat: 'd2' },
                        { text: 'Pur.Rate', datafield: 'PurRate', width: 85, cellsalign: 'right', cellsformat: 'd2' },
                        { text: 'GST', datafield: 'GST', width: 75, cellsalign: 'right', cellsformat: 'd2' },
                        { text: 'Id', datafield: 'Id', width: 90, hidden: true }
                    ]
                });
            $(grid).jqxGrid("render");
            var localizationobj = {};
            localizationobj.thousandsseparator = "";
            $(grid).jqxGrid('localizestrings', localizationobj);
            if (getdata.length != 0) {
                $(grid).jqxGrid('selectcell', 0, 'ProductName');
                $(grid).jqxGrid('focus');
            }
        },
        error: function (error) {
            //   MsgBox('Technical Fault Contact Software Vendor  !!!.');
        }

    });


}
/*function ProductListP(grid, height) {

    var Comid = localStorage.getItem("Comid");
    var MComid = localStorage.getItem("MComid");
    var CommonCompany = localStorage.getItem("CommonCompany");
    if (CommonCompany == "true") {
        Comid = MComid;
    }

    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/ItemMaster/GetProductList",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            getdata = data;
            var source =
            {
                localdata: getdata,
                datatype: "local",
                datafields:
                    [
                        { name: 'Productcode', type: 'string' },
                        { name: 'ProductName', type: 'string' },
                        { name: 'MRP', type: 'number' },
                        { name: 'PurRate', type: 'number' },
                        { name: 'GST', type: 'number' },
                        { name: 'Id', type: 'number' }

                    ],
                addrow: function (rowid, rowdata, position, commit) {
                    commit(true);
                    // AutoScroll(grid, rowid);
                },
                deleterow: function (rowid, commit) {
                    commit(true);
                    // AutoScroll(grid, rowid);
                },
                updaterow: function (rowid, newdata, commit) {
                    newdata.EditMode = 1;
                    commit(true);
                }
            };

            var dataAdapter = new $.jqx.dataAdapter(source);
            $(grid).jqxGrid(
                {
                    width: 700,
                    height: height,

                    // pageable: true,
                    //   sortable: true,
                    rowsheight: 25,
                    columnsheight: 25,
                    scrollmode: 'deferred',
                    editable: false,
                    theme: 'classic',
                    showaggregates: true,
                    editmode: 'programmatic',
                    keyboardnavigation: true,
                    selectionmode: 'singlecell',

                    //  pagesizeoptions: ['50', '100', '500', '1000'],
                    // pagesize: 50,
                    source: dataAdapter,

                    columns: [
                        { text: 'ProductCode', datafield: 'Productcode', width: 120 },
                        { text: 'Description', datafield: 'ProductName', width: 320 },
                        { text: 'MRP', datafield: 'MRP', width: 85, cellsalign: 'right', cellsformat: 'd2' },
                        { text: 'Pur.Rate', datafield: 'PurRate', width: 85, cellsalign: 'right', cellsformat: 'd2' },
                        { text: 'GST', datafield: 'GST', width: 75, cellsalign: 'right', cellsformat: 'd2' },
                        { text: 'Id', datafield: 'Id', width: 90, hidden: true }
                    ]
                });
            $(grid).jqxGrid("render");
            var localizationobj = {};
            localizationobj.thousandsseparator = "";
            $(grid).jqxGrid('localizestrings', localizationobj);
            if (getdata.length != 0) {
                $(grid).jqxGrid('selectcell', 0, 'ProductName');
                $(grid).jqxGrid('focus');
            }
        },
        error: function (error) {
            //   MsgBox('Technical Fault Contact Software Vendor  !!!.');
        }

    });


}*/
function ExpenseListP(grid, height) {

    var Comid = localStorage.getItem("Comid");
    var MComid = localStorage.getItem("MComid");
    var CommonCompany = localStorage.getItem("CommonCompany");
    if (CommonCompany == "true") {
        Comid = MComid;
    }

    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/PaymentVoucher/SelectCOAExpense",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"Expenseid":0,"Keyword":"Expense"}',
        success: function (data) {
            getdata = data.data;
            var source =
            {
                localdata: getdata,
                datatype: "local",
                datafields:
                    [
                        { name: 'AccountCode', type: 'string' },
                        { name: 'AccountName', type: 'string' },
                        { name: 'ParentName', type: 'string' },
                        { name: 'ClassificationName', type: 'string' },
                        { name: 'Classification', type: 'number' },
                        { name: 'Id', type: 'number' }

                    ],
                addrow: function (rowid, rowdata, position, commit) {
                    commit(true);
                    // AutoScroll(grid, rowid);
                },
                deleterow: function (rowid, commit) {
                    commit(true);
                    // AutoScroll(grid, rowid);
                },
                updaterow: function (rowid, newdata, commit) {
                    newdata.EditMode = 1;
                    commit(true);
                }
            };

            var dataAdapter = new $.jqx.dataAdapter(source);
            $(grid).jqxGrid(
                {
                    width: 700,
                    height: height,

                    // pageable: true,
                    //   sortable: true,
                    rowsheight: 25,
                    columnsheight: 25,
                    scrollmode: 'deferred',
                    editable: false,
                    theme: 'classic',
                    showaggregates: true,
                    editmode: 'programmatic',
                    keyboardnavigation: true,
                    selectionmode: 'singlecell',

                    //  pagesizeoptions: ['50', '100', '500', '1000'],
                    // pagesize: 50,
                    source: dataAdapter,

                    columns: [
                        { text: 'AccountCode', datafield: 'AccountCode', width: 120 },
                        { text: 'AccountName', datafield: 'AccountName', width: 220 },
                        { text: 'ParentName', datafield: 'ParentName', width: 220 },
                        { text: 'ClassificationName', datafield: 'ClassificationName', width: 220 },
                        { text: 'Classification', datafield: 'Classification', width: 90, hidden: true },
                        { text: 'Id', datafield: 'Id', width: 90, hidden: true }
                    ]
                });
            $(grid).jqxGrid("render");
            var localizationobj = {};
            localizationobj.thousandsseparator = "";
            $(grid).jqxGrid('localizestrings', localizationobj);
            if (getdata.length != 0) {
                $(grid).jqxGrid('selectcell', 0, 'AccountName');
                $(grid).jqxGrid('focus');
            }

        },
        error: function (error) {
            //   MsgBox('Technical Fault Contact Software Vendor  !!!.');
        }

    });


}
function ExpenseListPG(grid, height) {

    var Comid = localStorage.getItem("Comid");
    var MComid = localStorage.getItem("MComid");
    var CommonCompany = localStorage.getItem("CommonCompany");
    if (CommonCompany == "true") {
        Comid = MComid;
    }

    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/PaymentVoucher/SelectCOAGroupExpense",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"Expenseid":0,"Keyword":"MAINTENANCE","Keyword2":"MAINTANENCE"}',
        success: function (data) {
            getdata = data.data;
            var source =
            {
                localdata: getdata,
                datatype: "local",
                datafields:
                    [
                        { name: 'AccountCode', type: 'string' },
                        { name: 'AccountName', type: 'string' },
                        { name: 'ParentName', type: 'string' },
                        { name: 'Id', type: 'number' }

                    ],
                addrow: function (rowid, rowdata, position, commit) {
                    commit(true);
                    // AutoScroll(grid, rowid);
                },
                deleterow: function (rowid, commit) {
                    commit(true);
                    // AutoScroll(grid, rowid);
                },
                updaterow: function (rowid, newdata, commit) {
                    newdata.EditMode = 1;
                    commit(true);
                }
            };

            var dataAdapter = new $.jqx.dataAdapter(source);
            $(grid).jqxGrid(
                {
                    width: 700,
                    height: height,

                    // pageable: true,
                    //   sortable: true,
                    rowsheight: 25,
                    columnsheight: 25,
                    scrollmode: 'deferred',
                    editable: false,
                    theme: 'classic',
                    showaggregates: true,
                    editmode: 'programmatic',
                    keyboardnavigation: true,
                    selectionmode: 'singlecell',

                    //  pagesizeoptions: ['50', '100', '500', '1000'],
                    // pagesize: 50,
                    source: dataAdapter,

                    columns: [
                        { text: 'AccountCode', datafield: 'AccountCode', width: 120 },
                        { text: 'AccountName', datafield: 'AccountName', width: 220 },
                        { text: 'ParentName', datafield: 'ParentName', width: 220 },
                        { text: 'Id', datafield: 'Id', width: 90, hidden: true }
                    ]
                });
            $(grid).jqxGrid("render");
            var localizationobj = {};
            localizationobj.thousandsseparator = "";
            $(grid).jqxGrid('localizestrings', localizationobj);
            if (getdata.length != 0) {
                $(grid).jqxGrid('selectcell', 0, 'AccountName');
                $(grid).jqxGrid('focus');
            }

        },
        error: function (error) {
            //   MsgBox('Technical Fault Contact Software Vendor  !!!.');
        }

    });


}
function ExpenseWindowR2(window, grid, gridmain, X, Y, ismodel, height) {
    var $this = $(this);
    var offset = $(gridmain).offset();

    // var offset = gridcashier.offset();
    $(window).jqxWindow({
        position: { x: offset.left + X, y: offset.top + Y },
        showCollapseButton: false, maxHeight: 1200, maxWidth: 1200, minHeight: 300, minWidth: 300, height: height, width: 725, keyboardCloseKey: 0, isModal: ismodel, resizable: false,
        initContent: function () {
            if (ismodel == true) {
                $('#input').jqxInput('focus');
            }
        }
    });
    $(window).on('close', function (event) {
        //  $(gridmain).jqxGrid('focus');
    });
    $(window).jqxWindow('Open');
    $("#input").jqxInput({ placeHolder: "Search AccountName", width: 440, height: 30, minLength: 1 });
    if (ismodel == true) {
        setTimeout(function () {

            $('#input').jqxInput('focus');
        }, 100);
    }
}
function AddressListGrid(grid, height,list) {
    var getdata = list;
    var source =
    {
        localdata: getdata,
        datatype: "local",
        datafields:
            [
                { name: 'Address', type: 'string' },

            ],
        addrow: function (rowid, rowdata, position, commit) {
            commit(true);
            // AutoScroll(grid, rowid);
        },
        deleterow: function (rowid, commit) {
            commit(true);
            // AutoScroll(grid, rowid);
        },
        updaterow: function (rowid, newdata, commit) {
            commit(true);
        }
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    $(grid).jqxGrid(
        {
            width: "100%",
            height: height,
            rowsheight: 25,
            columnsheight: 25,
            scrollmode: 'deferred',
            editable: false,
            theme: 'classic',
            showaggregates: true,
            editmode: 'programmatic',
            keyboardnavigation: true,
            selectionmode: 'singlecell',
            source: dataAdapter,
            columns: [
                { text: 'Address', datafield: 'Address', width: '100%' },
            ]
        });
    $(grid).jqxGrid("render");
    if (getdata.length != 0) {
        $(grid).jqxGrid('selectcell', 0, 'Address');
        $(grid).jqxGrid('focus');
    }
}
function QuantityListGrid(grid, height, list) {
    var getdata = list;
    var source =
    {
        localdata: getdata,
        datatype: "local",
        datafields:
            [
                { name: 'Quantity', type: 'string' },

            ],
        addrow: function (rowid, rowdata, position, commit) {
            commit(true);
            // AutoScroll(grid, rowid);
        },
        deleterow: function (rowid, commit) {
            commit(true);
            // AutoScroll(grid, rowid);
        },
        updaterow: function (rowid, newdata, commit) {
            commit(true);
        }
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    $(grid).jqxGrid(
        {
            width: "100%",
            height: height,
            rowsheight: 25,
            columnsheight: 25,
            scrollmode: 'deferred',
            editable: false,
            theme: 'classic',
            showaggregates: true,
            editmode: 'programmatic',
            keyboardnavigation: true,
            selectionmode: 'singlecell',
            source: dataAdapter,
            columns: [
                { text: 'Quantity', datafield: 'Quantity', width: '100%' },
            ]
        });
    $(grid).jqxGrid("render");
    if (getdata.length != 0) {
        $(grid).jqxGrid('selectcell', 0, 'Address');
        $(grid).jqxGrid('focus');
    }
}
function AddressListtWindow(window, grid, gridmain, X, Y, ismodel, height) {
    var $this = $(this);
    var offset = $(gridmain).offset();
    $(window).jqxWindow({
        position: { x: offset.left + X, y: offset.top + Y },
        showCollapseButton: false, maxHeight: 1200, maxWidth: 1300, minHeight: 300, minWidth: 300, height: height, width: 1165, keyboardCloseKey: 0, isModal: ismodel, resizable: false,
    });
    $(window).on('close', function (event) {
    });
    $(window).jqxWindow('Open');
}
function QuantityListtWindow(window, grid, gridmain, X, Y, ismodel, height) {
    var $this = $(this);
    var offset = $(gridmain).offset();
    $(window).jqxWindow({
        position: { x: offset.left + X, y: offset.top + Y },
        showCollapseButton: false, maxHeight: 1200, maxWidth: 1300, minHeight: 300, minWidth: 300, height: height, width: 1165, keyboardCloseKey: 0, isModal: ismodel, resizable: false,
    });
    $(window).on('close', function (event) {
    });
    $(window).jqxWindow('Open');
}
function arraygroupsum(arraylist, groupcolumn, sumcolumn) {
    var result = [];
    arraylist.reduce(function (res, value) {
        if (!res[value[groupcolumn]]) {
            res[value[groupcolumn]] = { [groupcolumn]: value[groupcolumn], [sumcolumn]: 0 };
            result.push(res[value[groupcolumn]])
        }
        res[value[groupcolumn]][sumcolumn] += ValNum(value[sumcolumn]);
        return res;
    }, {});
    return result;
}
function arraygroupsumNew(arraylist, groupcolumn, sumcolumn, sumcolumn1, sumcolumn2) {
    var result = [];
    arraylist.reduce(function (res, value) {
        if (!res[value[groupcolumn]]) {
            res[value[groupcolumn]] = { [groupcolumn]: value[groupcolumn], [sumcolumn]: 0, [sumcolumn1]: 0, [sumcolumn2]: 0 };
            result.push(res[value[groupcolumn]])
        }
        res[value[groupcolumn]][sumcolumn] += value[sumcolumn];
        res[value[groupcolumn]][sumcolumn1] += value[sumcolumn1];
        res[value[groupcolumn]][sumcolumn2] += value[sumcolumn2];
        return res;
    }, {});
    return result;
}
function GridKeyPressValidation(grid, event, length, EntryType, scaleLength, Negativevalue) {
    var cell = $(grid).jqxGrid('getselectedcell');
    var rowindex = cell.rowindex;
    var columnname = cell.datafield;
    var value = $(grid).jqxGrid('getcelltext', rowindex, columnname);
    try {
        $(grid).jqxGrid('setcellvalue', rowindex, "EditMode", "1");
    }
    catch (err) {

    }
    if (GridEnterMode) {
        $(grid).jqxGrid('setcellvalue', rowindex, columnname, "");
        value = $(grid).jqxGrid('getcelltext', rowindex, columnname);
        GridEnterMode = false;
    }
    if (NullToString(value) == "-.") {
        $(grid).jqxGrid('setcellvalue', rowindex, columnname, "-0.");
        value = $(grid).jqxGrid('getcelltext', rowindex, columnname);
    }
    if (value == null) {
        value = "";
    }
    value = value.toString();
    var e = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
    if (e == 0) {
        if (NullToString(value).length >= 1) {
            value = value.substring(0, value.length - 1)
            $(grid).jqxGrid('setcellvalue', rowindex, columnname, value);
        }
        return;
    }
    if (EntryType == "int") {
        if (Keypress09(event.key)) {
            if (NullToString(value).length < length) {
                if (ValNum(value) == 0) {
                    $(grid).jqxGrid('setcellvalue', rowindex, columnname, event.key);
                }
                else {
                    $(grid).jqxGrid('setcellvalue', rowindex, columnname, NullToString(value) + event.key);
                }
            }
        }
        return;
    }
    if (EntryType == "int3") {
        if (Keypress012(event.key)) {
            $(grid).jqxGrid('setcellvalue', rowindex, columnname, event.key);
        }
        return;
    }
    else if (EntryType == "intN") {
        if (Keypress09N(event.key, NullToString(value))) {
            if (NullToString(value).length < length) {

                if (NullToString(value).toString().startsWith("-")) {
                    $(grid).jqxGrid('setcellvalue', rowindex, columnname, NullToString(value) + event.key);
                }
                else {
                    if (ValNum(value) == 0) {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, event.key);
                    }
                    else {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, NullToString(value) + event.key);
                    }
                }
            }
        }
        return;
    }
    else if (EntryType == "float") {

        if (KeypressAmount(event.key, NullToString(value))) {

            var ttt = NullToString(value).length;
            if (NullToString(value).length < length) {

                if (event.key == "." && NullToString(value) == "") {
                    $(grid).jqxGrid('setcellvalue', rowindex, columnname, "0.");
                    return;
                }
                if (NullToString(value).includes(".")) {
                    if (value.split(".")[1].length < scaleLength) {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, NullToString(value) + event.key);
                    }
                    else if (value.split(".")[1].length == scaleLength) {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, event.key);
                    }
                }
                else {
                    if (event.key == "." && ValNum(value) == 0) {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, "0.");
                        return;
                    }
                    else if (ValNum(value) == 0) {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, event.key);
                    }
                    else {
                        var temp = NullToString(value) + event.key;
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, temp);
                    }
                }
            }
        }
        return;
    }
    else if (EntryType == "floatN") {

        if (KeypressAmountN(event.key, NullToString(value))) {

            if (NullToString(value).length < length) {
                if (Negativevalue == 0) {
                    if (event.key == "." && NullToString(value) == "") {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, "0.");
                        return;
                    }
                }
                if (NullToString(value).includes(".")) {
                    if (value.split(".")[1].length < scaleLength) {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, NullToString(value) + event.key);
                    }
                    else if (value.split(".")[1].length == scaleLength) {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, event.key);
                    }
                }
                else {
                    if (event.key == "." && ValNum(value) == 0 && Negativevalue == 0) {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, "0.");
                        return;
                    }
                    else if (NullToString(value).toString().startsWith("-")) {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, NullToString(value) + event.key);
                    }
                    else if (ValNum(value) == 0) {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, event.key);
                    }
                    else {
                        $(grid).jqxGrid('setcellvalue', rowindex, columnname, NullToString(value) + event.key);
                    }
                }
            }
        }
        return;
    }
    else if (EntryType == "string") {
        if (NullToString(value).length < length) {
            $(grid).jqxGrid('setcellvalue', rowindex, columnname, NullToString(value) + event.key.toString().toUpperCase());
        }
    }
    else if (EntryType == "strings") {
        if (NullToString(value).length < length) {
            $(grid).jqxGrid('setcellvalue', rowindex, columnname, NullToString(value) + event.key.toString().toLowerCase());
        }
    }
    else {
        if (e >= 97 && e <= 122) {
            var newKey = e - 32;
            event.keyCode = newKey;
            event.charCode = newKey;
        }
    }

}
function textPressValidation(txt, event, length, EntryType, scaleLength, Negativevalue) {
    value = txt.val();
    if (value == null) {
        value = "";
    }
    value = value.toString();
    var e = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
    if (e == 0 || e == 8) {
        if (NullToString(value).length >= 1) {
            value = value.substring(0, value.length - 1)
            txt.val(value);
        }
        event.preventDefault();
    }
    if (EntryType == "int") {
        if (Keypress09(event.key)) {
            if (NullToString(value).length < length) {
                if (ValNum(value) == 0) {
                    txt.val(event.key);
                }
                else {
                    txt.val(NullToString(value) + event.key);
                }
            }
        }
        event.preventDefault();
    }
    else if (EntryType == "intN") {
        if (Keypress09N(event.key, NullToString(value))) {
            if (NullToString(value).length < length) {

                if (NullToString(value).toString().startsWith("-")) {
                    txt.val(NullToString(value) + event.key);
                }
                else {
                    if (ValNum(value) == 0) {
                        txt.val(event.key);
                    }
                    else {
                        txt.val(NullToString(value) + event.key);
                    }
                }
            }
        }
        event.preventDefault();
    }
    else if (EntryType == "float") {

        if (KeypressAmount(event.key, NullToString(value))) {

            var ttt = NullToString(value).length;
            if (NullToString(value).length < length) {

                if (event.key == "." && NullToString(value) == "") {
                    txt.val("0.");
                    return;
                }
                if (NullToString(value).includes(".")) {
                    if (value.split(".")[1].length < scaleLength) {
                        txt.val(NullToString(value) + event.key);
                    }
                    else if (value.split(".")[1].length == scaleLength) {
                        txt.val(event.key);
                    }
                }
                else {
                    if (event.key == "." && ValNum(value) == 0) {
                        txt.val("0.");
                        return;
                    }
                    else if (ValNum(value) == 0) {
                        txt.val(event.key);
                    }
                    else {
                        var temp = NullToString(value) + event.key;
                        txt.val(temp);
                    }
                }
            }
        }
        event.preventDefault();
    }
    else if (EntryType == "floatN") {

        if (KeypressAmountN(event.key, NullToString(value))) {

            if (NullToString(value).length < length) {
                if (Negativevalue == 0) {
                    if (event.key == "." && NullToString(value) == "") {
                        txt.val("0.");
                        return;
                    }
                }
                if (NullToString(value).includes(".")) {
                    if (value.split(".")[1].length < scaleLength) {
                        txt.val(NullToString(value) + event.key);
                    }
                    else if (value.split(".")[1].length == scaleLength) {
                        txt.val(event.key);
                    }
                }
                else {
                    if (event.key == "." && ValNum(value) == 0 && Negativevalue == 0) {
                        txt.val("0.");
                        return;
                    }
                    else if (NullToString(value).toString().startsWith("-")) {
                        txt.val(NullToString(value) + event.key);
                    }
                    else if (ValNum(value) == 0) {
                        txt.val(event.key);
                    }
                    else {
                        txt.val(NullToString(value) + event.key);
                    }
                }
            }
        }
        event.preventDefault();
    }
    else if (EntryType == "string") {
        if (NullToString(value).length < length) {
            txt.val(NullToString(value) + event.key.toString().toUpperCase());
        }
    }
    else if (EntryType == "strings") {
        if (NullToString(value).length < length) {
            txt.val(NullToString(value) + event.key.toString().toLowerCase());
        }
    }
    else {
        if (e >= 97 && e <= 122) {
            var newKey = e - 32;
            event.keyCode = newKey;
            event.charCode = newKey;
        }
    }
}
function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function getunixTimestamp () {
    var unixTimestamp = Math.floor(Date.now() / 1000);
    return unixTimestamp;
}
function showCustomPrompt(callback) {

    // overlay
    var overlay = document.createElement("div");
    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "9999"
    });

    // modal box
    var box = document.createElement("div");
    Object.assign(box.style, {
        position: "relative",
        background: "#ffffff",
        padding: "25px",
        borderRadius: "12px",
        width: "320px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        fontFamily: "Segoe UI, Arial"
    });

    // company logo (top-right corner)
    var logo = document.createElement("img");
    logo.src = "/assets/img/roundlogo.png";
    Object.assign(logo.style, {
        position: "absolute",
        top: "10px",
        right: "10px",
        width: "35px",
        height: "35px",
        borderRadius: "50%"
    });

    // title
    var title = document.createElement("div");
    title.innerText = "Add Header";
    Object.assign(title.style, {
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "15px"
    });

    // input
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter header name...";
    Object.assign(input.style, {
        width: "100%",
        padding: "10px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        marginBottom: "20px"
    });

    // button container
    var btnWrap = document.createElement("div");
    btnWrap.style.textAlign = "right";

    // Add button
    var okBtn = document.createElement("button");
    okBtn.innerText = "Add";
    Object.assign(okBtn.style, {
        padding: "8px 16px",
        background: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        marginRight: "8px"
    });

    // Cancel button
    var cancelBtn = document.createElement("button");
    cancelBtn.innerText = "Cancel";
    Object.assign(cancelBtn.style, {
        padding: "8px 16px",
        background: "#6c757d",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
    });

    okBtn.onclick = function () {
        callback(input.value);
        document.body.removeChild(overlay);
    };

    cancelBtn.onclick = function () {
        document.body.removeChild(overlay);
    };

    // Enter key support
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            okBtn.click();
        }
    });

    btnWrap.appendChild(okBtn);
    btnWrap.appendChild(cancelBtn);

    box.appendChild(logo);
    box.appendChild(title);
    box.appendChild(input);
    box.appendChild(btnWrap);

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    input.focus();
}

