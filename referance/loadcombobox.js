var objSlist = [];
var objClist = [];
var objComlist = [];
var objProductList = [];
var salesmanlist = [];
var objEmployeelist = [];
var CName = localStorage.getItem("CompanyName");
var CAddress = localStorage.getItem("Address");
var CPhone = localStorage.getItem("Phone");
var Comid = localStorage.getItem("Comid");
var MComid = localStorage.getItem("MComid");
var CommonCompany = localStorage.getItem("CommonCompany");
if (CommonCompany == "true") {
    Comid = MComid;
}
var SComid = Comid;
var SupplierCommon = localStorage.getItem("SupplierCommon");
if (SupplierCommon == "true") {
    SComid = MComid;
}
var MirrorTable = localStorage.getItem("MirrorTableOnline");
if (MirrorTable == 1) {
    SComid = MComid;
}
var CommonCompany = localStorage.getItem("CommonCompany");
if (CommonCompany == "true") {
    SComid = MComid;
}
function loadbrand(async) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        async: async,
        url: "/Brand/SelectBrand",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            getdata = data.data;
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}

function loadbrandcombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/Brand/SelectBrand",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "BrandName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadbankcombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/BankMaster/GetBank",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadAccountNameBankcombo(combo, cash) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/AccountGroup/SelectAccountGroupCash",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"Cash":' + cash + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}

function loadPaymentTermscombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        async : false,
        url: "/PaymentTermsMaster/SelectPaymentTerms",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "TermsName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadSymbolcombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/SymbolMaster/SelectSymbol",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "SName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadAgentCompanycombomulti(combo,combo1) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/AgentCompanyMaster/SelectAgentCompany",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "Name", valueMember: "Id" });
            $(combo1).jqxComboBox({ source: data.data, displayMember: "Name", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadAgentCompanycombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/AgentCompanyMaster/SelectAgentCompany",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "Name", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}

function loadDriverNamecombo(combo) {
    var getdata = {};
    var objlist = {};
    var type = "";
    $.ajax({
        url: "/DriverMaster/SelectDriverName",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "DriverName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadTruckNamecombo(combo) {
    var getdata = {};
    var objlist = {};
    var type = "";
    $.ajax({
        url: "/TruckMaster/SelectTruckAll",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "TruckName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadJobTypecombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        async: false,
        url: "/JobTypeMaster/SelectJobType",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "Name", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadJobStatuscombo(combo,async) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        async: async,
        url: "/JobStatusMaster/SelectJobStatus",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "Name", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}


function loadCustomercombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/CustomerMaster/GetCustomer",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}

function loadClassfication(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/AccountsGroupMaster/SelectClasification",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}



function loadCustomercombos(combos) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        async : false,
        url: "/CustomerMaster/GetCustomer",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            for (var i = 0; i < combos.length; i++) {
                $(combos[i]).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
            }
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadaddressinput(combo,combo1,combo2) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/AddressMaster/SelectDistinctAddress",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            if (combo != null) {
                $(combo).jqxInput({ source: data.data, popupZIndex: 2000 });
            }
            if (combo1 != null) {
                $(combo1).jqxInput({ source: data.data, popupZIndex: 2001 });
            }
            if (combo2 != null) {
                $(combo2).jqxInput({ source: data.data, popupZIndex: 2002 });
            }
            
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}

function loadsuppliercombo(combo, Type ) {
    var objlist = {};
    $.ajax({
        async: false,
        url: "/SupplierMaster/GetSupplier",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"type":"' + Type + '"}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
}


function loadAccountcombos(combos, Type) {
    var objlist = {};
    $.ajax({
        url: "/AccountsGroupMaster/GetAccountsGroupMaster",
        type: "POST",
        async: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"type":"' + Type + '"}',
        success: function (data) {
            objlist = data.data;
            for (var i = 0; i < combos.length; i++) {
                $(combos[i]).jqxComboBox({
                    source: data.data, displayMember: "AccountName", valueMember: "Id", searchMode: 'contains',
                    renderer: function (index, label, value) {
                        var datarecord = data.data[index];
                        var table = '<table style="min-width: 150px;"><tr><td>' + datarecord.AccountName1 + '</td></tr><tr><td>' + datarecord.AccountCode + '</td></tr></table>';
                        return table;
                    }
                    });
            }
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
    return objlist;
}
function loadAccountCodecombos(combos, Type) {
    var objlist = {};
    $.ajax({
        url: "/AccountsGroupMaster/GetAccountsGroupMaster",
        type: "POST",
        async: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"type":"' + Type + '"}',
        success: function (data) {
            objlist = data.data;
            for (var i = 0; i < combos.length; i++) {
                $(combos[i]).jqxComboBox({
                    source: data.data, displayMember: "AccountCode", valueMember: "Id", searchMode: 'contains'
                });
            }
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
    return objlist;
}

function loadbankcombo(combo) {
    var objlist = {};
    $.ajax({
        url: "/BankMaster/GetBank",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"type":""}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
}
function loaddrivercombo(combo) {
    var objlist = {};
    $.ajax({
        async: false,
        url: "/DriverMaster/GetDriver",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"type":""}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
}
function loadtruckcombo(combo) {
    var objlist = {};
    $.ajax({
        async: false,
        url: "/TruckMaster/GetTruck",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"type":""}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
}
function loadClassificationcombo(combo) {
    var objlist = {};
    $.ajax({
        async: false,
        url: "/ItemMaster/SelectClassificationCombo",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
}
function loadSelfbilledcombo(combo) {
    var objlist = {};
    $.ajax({
        async: false,
        url: "/SupplierMaster/GetSelfbilled",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
}
function loadMSICCodecombo(combo) {
    var objlist = {};
    $.ajax({
        async: false,
        url: "/SupplierMaster/GetMSICCode",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
}
function loadExpenseTypecombo(combo) {

    var objlist = {};
    $.ajax({
        async: false,
        url: "/ExpenseMaster/SelectExpense",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "Name", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
    
}
function loadSubExpenseTypecombo(combo,ExpId) {

    var objlist = {};
    $.ajax({
        async: false,
        url: "/SubExpenseMaster/GetSubExpense",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"Expenseid":' + ExpId +'}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "Description", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });

}
function loadaddresscombo(combo) {
    
    var objlist = {};
    var KeyWord = "";
    $.ajax({
        async: false,
        url: "/AddressMaster/SelectAddress",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"KeyWord":""}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "Name", valueMember: "Id" });

        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
         
        }

    });
   
}
function loadProductCodecombo(combo) {
    var PCode = "";
    var PName = "";
    var objlist = {
        'Comid': Comid,
        'Code': true,
    };
    $.ajax({
        async: false,
        url: "/ProductMaster/SelectProductMasterCombo",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(objlist),
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });

}
function loadProductNamecombo(combo) {
    var PCode = "";
    var PName = "";
    var objlist = {
        'Comid': Comid,
        'Code': false,
    };
    $.ajax({
        async: false,
        url: "/ProductMaster/SelectProductMasterCombo",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(objlist),
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });

}
function loadItemCodecombo(combo) {
    var PCode = "";
    var PName = "";
    var objlist = {
        'Comid': Comid,
        'Code': true,
    };
    $.ajax({
        async: false,
        url: "/ItemMaster/SelectItemMasterCombo",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(objlist),
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });

}
function loadItemNamecombo(combo) {
    var PCode = "";
    var PName = "";
    var objlist = {
        'Comid': Comid,
        'Code': false,
    };
    $.ajax({
        async: false,
        url: "/ItemMaster/SelectItemMasterCombo",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(objlist),
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });

}

function loadeemployeecombos(combos, Type, Type1) {
    var objlist = {};
    $.ajax({
        url: "/EmployeeMaster/GetEmployee",
        type: "POST",
        async: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"type":"' + Type + '","type1":"' + Type1 + '"}',
        success: function (data) {
            objEmployeelist = data.data;
            objlist = data.data;
            for (var i = 0; i < combos.length; i++) {
                $(combos[i]).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
            }
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
    return objlist;
}


function loadportcombo(combo) {
    var objlist = {};
    $.ajax({
        url: "/JobTypeMaster/GetPort",
        type: "POST",
        dataType: "json",
        contentType: "application/Comid; charset=utf-8",
        data: '{"Comid":' + Comid + ',"type":""}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
}


function loadPortNamecombo(combo) {
    var objlist = {};
    $.ajax({
        url: "/PortMaster/SelectPort",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "PortName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }

    });
}


function loadEmployeeTypecombo(combo,all) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        async: false,
        url: "/EmployeeMaster/SelectEmployeeType",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"all":' + all + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, selectedIndex: 0, displayMember: "CustomerName", valueMember: "CustomerName" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadSupplierTypecombo(combo, all) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        async: false,
        url: "/SupplierMaster/SelectSupplierType",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"all":' + all + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, selectedIndex: 0, displayMember: "SupplierName", valueMember: "SupplierName" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}

function loaduomcombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/UOM/SelectUOM",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "UOMName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadlocationcombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/Location/SelectLocation",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "LocationName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadSalesMancombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/SalesMan/SelectSalesMan",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            salesmanlist = data.data;
            $(combo).jqxComboBox({ source: data.data, displayMember: "SalesManName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadAreacombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/Area/SelectArea",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            salesmanlist = data.data;
            $(combo).jqxComboBox({ source: data.data, displayMember: "AreaName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadCashiercombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/Cashier/SelectCashier",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            objCashierlist = data.data;
            $(combo).jqxComboBox({ source: data.data, displayMember: "CashierName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadSaleTypecombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/CardMaster/SelectSaleType",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "Saletype", valueMember: "CardAccountRefId" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadCountercombo(combo) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/Cashier/SelectCounter",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            $(combo).jqxComboBox({ source: data.data, displayMember: "CashierName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadproductcombo(combo1, combo2) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/ItemMaster/GetProductList",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            objProductList = data;
            $(combo1).jqxComboBox({ source: data, displayMember: "ProductName", valueMember: "Id" });
            $(combo2).jqxComboBox({ source: data, displayMember: "Productcode", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadsize(async) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        async: async,
        url: "/SizeMaster/SelectSizeMaster",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            getdata = data.data;
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }
    });
    return getdata;
}
function loadcolor(async) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        async: async,
        url: "/ColorMaster/SelectColorMaster",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            getdata = data.data;
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function loadmodel(async) {
    var getdata = {};
    var objlist = {};
    $.ajax({
        async: async,
        url: "/ModelMaster/SelectModelMaster",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            getdata = data.data;
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }

    });
    return getdata;
}
function ProductListP(grid,height) {

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
function ProductListPP(grid, height) {

    var Comid = localStorage.getItem("Comid");
    var MComid = localStorage.getItem("MComid");
    var CommonCompany = localStorage.getItem("CommonCompany");
    if (CommonCompany == "true") {
        Comid = MComid;
    }

    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/ProductMaster/GetProductList",
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


}
function ServiceListPP(grid, height) {

    var Comid = localStorage.getItem("Comid");
    var MComid = localStorage.getItem("MComid");
    var CommonCompany = localStorage.getItem("CommonCompany");
    if (CommonCompany == "true") {
        Comid = MComid;
    }

    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/ServiceMaster/GetServiceList",
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
                        { name: 'Servicecode', type: 'string' },
                        { name: 'ServiceName', type: 'string' },
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
                        { text: 'ServiceCode', datafield: 'Servicecode', width: 120 },
                        { text: 'Description', datafield: 'ServiceName', width: 320 },
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
                $(grid).jqxGrid('selectcell', 0, 'ServiceName');
                $(grid).jqxGrid('focus');
            }

        },
        error: function (error) {
            //   MsgBox('Technical Fault Contact Software Vendor  !!!.');
        }

    });


}

function SupplierComboList(combo, async, AccountType) {

    var datavalue = '{"Comid":' + SComid + ',"AccountType":"' + AccountType + '"}'
    var objlist = {};
    $.ajax({
        async: async,
        url: "/Supplier/SelectSupplierAll",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: datavalue,
        success: function (data) {
            objSlist = data.data;
            $(combo).jqxComboBox({ source: data.data, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }


    });
}
function AllCompanyComboList(combo, async) {

    var datavalue = '{"Comid":' + SComid + '}'
    var objlist = {};
    $.ajax({
        async: async,
        url: "/MultiPurchaseOrder/SelectCompanyPoOrder",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: datavalue,
        success: function (data) {
            objSlist = data.No;
            $(combo).jqxComboBox({ source: data.No, displayMember: "CName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }


    });
}
function CustomerComboList(combo1, combo2, combo3, async, AccountType) {
    var Comid = localStorage.getItem("Comid");
    var MComid = localStorage.getItem("MComid");
    var CustomerCommon = localStorage.getItem("CustomerCommon");
    if (CustomerCommon == "true") {
        Comid = MComid;
    }
    var datavalue = '{"Comid":' + Comid + ',"AccountType":"' + AccountType + '"}'
    var objlist = {};
    $.ajax({
        async: async,
        url: "/Supplier/SelectSupplierAll",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: datavalue,
        success: function (data) {
            objClist = data.data;
            var tempcustomerlist1 = objClist;
            var tempcustomerlist2 = objClist;
            var customerlistcrm = tempcustomerlist1.filter(obj => obj.CRMNO != "" && obj.CRMNO != null);
            var customerlistMo = tempcustomerlist2.filter(obj => obj.MobileNo != "");
            $(combo1).jqxComboBox({ source: objClist, displayMember: "AccountName", valueMember: "Id" });
            $(combo2).jqxComboBox({ source: customerlistcrm, displayMember: "CRMNO", valueMember: "Id" });
            $(combo3).jqxComboBox({ source: customerlistMo, displayMember: "MobileNo", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }


    });
}
function LoadBranchNot(combo) {
    var Comid = localStorage.getItem("Comid");
    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/StockTransfer/SelectCompany",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + ',"MComid":' + MComid + '}',
        success: function (data) {
            objComlist = data.data;
            $(combo).jqxComboBox({ source: objComlist, displayMember: "BranchName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));

        }


    });
}
function LoadBranchAll(combo) {

    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/StockTransfer/SelectBranchAll",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"MComid":' + MComid + '}',
        success: function (data) {
            objComlist = data.data;
            $(combo).jqxComboBox({ source: objComlist, displayMember: "BranchName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));

        }


    });
}
function CustomerComboListSingle(combo, async, AccountType) {
    var Comid = localStorage.getItem("Comid");
    var MComid = localStorage.getItem("MComid");
    var CustomerCommon = localStorage.getItem("CustomerCommon");
    if (CustomerCommon == "true") {
        Comid = MComid;
    }
    var datavalue = '{"Comid":' + Comid + ',"AccountType":"' + AccountType + '"}'
    var objlist = {};
    $.ajax({
        async: async,
        url: "/Supplier/SelectSupplierAll",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: datavalue,
        success: function (data) {
            objClist = data.data;
            $(combo).jqxComboBox({ source: objClist, displayMember: "AccountName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }


    });
}
function CRMNoCombo(combo, async, AccountType) {
    var Comid = localStorage.getItem("Comid");
    var MComid = localStorage.getItem("MComid");
    var CustomerCommon = localStorage.getItem("CustomerCommon");
    if (CustomerCommon == "true") {
        Comid = MComid;
    }
    var datavalue = '{"Comid":' + Comid + ',"AccountType":"' + AccountType + '"}'
    var objlist = {};
    $.ajax({
        async: async,
        url: "/Supplier/SelectSupplierAll",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: datavalue,
        success: function (data) {

            var customerlistcrm = data.data.filter(obj => obj.CRMNO != "" && obj.CRMNO != null);
            $(combo).jqxComboBox({ source: customerlistcrm, displayMember: "CRMNO", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }


    });
}
function loadCustomerCardType(async) {
    var Comid = localStorage.getItem("Comid");
    var getdata = {};
    var objlist = {};
    $.ajax({
        async: async,
        url: "/CustomerCardType/SelectCustomerCardType",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            getdata = data.data;
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
        }


    });
    return getdata;
}
function opencustomer(combo) {
    var Comid = localStorage.getItem("Comid");
    var item = combo.jqxComboBox('getSelectedItem');
    CustomerRefId = item.value;
    if (CustomerRefId != 0) {
        var Keyword = "";
        var datavalue = '{"Comid":' + Comid + ',"Startindex":' + 0 + ',"PageCount":' + 20 + ',"Keyword":"' + CustomerRefId + '","Column":"Id"}'
        $.ajax({
            url: "/CustomerMaster/SelectCustomer",
            type: "POST",
            dataType: "json",
            data: datavalue,
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var tempdata = data.data;
                if (tempdata != null) {
                    var string = "<div class='text-left'><strong>NAME :</strong>" + tempdata[0].CustomerName + "<br>" +
                        "<strong>Customer Code :</strong>" + tempdata[0].AccountCode + "<br>" +
                        "<strong>ADDRESS :</strong>" + tempdata[0].Address1 + "<br>" +
                        "<strong>PHONE :</strong>" + tempdata[0].OPhone + "<br>" +
                        "<strong>Code :</strong>" + tempdata[0].CompanyCode + "<br>"+
                    "<strong>Terms :</strong>" + tempdata[0].TermsName + "</div>";
                    MsgBox(string, null, 'CUSTOMER DEAILS');
                    return;
                }

            }
        });

    }
}
function openSupplier(combo) {
    var Comid = localStorage.getItem("Comid");
    var item = combo.jqxComboBox('getSelectedItem');
    SupplierRefId = item.value;
    if (SupplierRefId != 0) {
        var Keyword = "";
        var datavalue = '{"Comid":' + Comid + ',"Startindex":' + 0 + ',"PageCount":' + 20 + ',"Keyword":"' + SupplierRefId + '","Column":"Id"}'
        $.ajax({
            url: "/SupplierMaster/SelectSupplier",
            type: "POST",
            dataType: "json",
            data: datavalue,
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var tempdata = data.data;
                if (tempdata != null) {
                    var string = "<div class='text-left'><strong>NAME :</strong>" + tempdata[0].SupplierName + "<br>" +
                        "<strong>Supplier Code :</strong>" + tempdata[0].AccountCode + "<br>" +
                        "<strong>ADDRESS :</strong>" + tempdata[0].Address1 + "<br>" +
                        "<strong>PHONE :</strong>" + tempdata[0].OPhone + "<br>" +
                        "<strong>Code :</strong>" + tempdata[0].CompanyCode + "</div>";
                    MsgBox(string, null, 'Supplier DEAILS');
                    return;
                }

            }
        });

    }
}
//function ProductListP(grid) {

//    var Comid = localStorage.getItem("Comid");
//    var MComid = localStorage.getItem("MComid");
//    var CommonCompany = localStorage.getItem("CommonCompany");
//    if (CommonCompany == "true") {
//        Comid = MComid;
//    }

//    var getdata = {};
//    var objlist = {};
//    $.ajax({
//        url: "/ItemMaster/GetProductList",
//        type: "POST",
//        dataType: "json",
//        contentType: "application/json; charset=utf-8",
//        data: '{"Comid":' + Comid + '}',
//        success: function (data) {
//            getdata = data;
//            var source =
//            {
//                localdata: getdata,
//                datatype: "local",
//                datafields:
//                    [
//                        { name: 'Productcode', type: 'string' },
//                        { name: 'ProductName', type: 'string' },
//                        { name: 'MRP', type: 'number' },
//                        { name: 'PurRate', type: 'number' },
//                        { name: 'GST', type: 'number' },
//                        { name: 'Id', type: 'number' }

//                    ],
//                addrow: function (rowid, rowdata, position, commit) {
//                    commit(true);
//                    // AutoScroll(grid, rowid);
//                },
//                deleterow: function (rowid, commit) {
//                    commit(true);
//                    // AutoScroll(grid, rowid);
//                },
//                updaterow: function (rowid, newdata, commit) {
//                    newdata.EditMode = 1;
//                    commit(true);
//                }
//            };

//            var dataAdapter = new $.jqx.dataAdapter(source);
//            $(grid).jqxGrid(
//                {
//                    width: 700,
//                    height: 350,

//                    // pageable: true,
//                    //   sortable: true,
//                    rowsheight: 25,
//                    columnsheight: 25,
//                    scrollmode: 'deferred',
//                    editable: false,
//                    theme: 'classic',
//                    showaggregates: true,
//                    editmode: 'programmatic',
//                    keyboardnavigation: true,
//                    selectionmode: 'singlecell',

//                    //  pagesizeoptions: ['50', '100', '500', '1000'],
//                    // pagesize: 50,
//                    source: dataAdapter,

//                    columns: [
//                        { text: 'ProductCode', datafield: 'Productcode', width: 120 },
//                        { text: 'Description', datafield: 'ProductName', width: 320 },
//                        { text: 'MRP', datafield: 'MRP', width: 85, cellsalign: 'right', cellsformat: 'd2' },
//                        { text: 'Pur.Rate', datafield: 'PurRate', width: 85, cellsalign: 'right', cellsformat: 'd2' },
//                        { text: 'GST', datafield: 'GST', width: 75, cellsalign: 'right', cellsformat: 'd2' },
//                        { text: 'Id', datafield: 'Id', width: 90, hidden: true }
//                    ]
//                });
//            $(grid).jqxGrid("render");
//            var localizationobj = {};
//            localizationobj.thousandsseparator = "";
//            $(grid).jqxGrid('localizestrings', localizationobj);
//            if (getdata.length != 0) {
//                $(grid).jqxGrid('selectcell', 0, 'ProductName');
//                $(grid).jqxGrid('focus');
//            }

//        },
//        error: function (error) {
//            //   MsgBox('Technical Fault Contact Software Vendor  !!!.');
//        }

//    });


//}
function ProductListS(grid) {

    var Comid = localStorage.getItem("Comid");
    var MComid = localStorage.getItem("MComid");
    var CommonCompany = localStorage.getItem("CommonCompany");
    if (CommonCompany == "true") {
        Comid = MComid;
    }
    var Width = 700;
    var Tamil = localStorage.getItem("Tamil");
    var Hide = true;
    if (Tamil == "true") {
        Hide = false;
        Width = Width + 250;
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
                        { name: 'PrintName', type: 'string' },
                        { name: 'MRP', type: 'number' },
                        { name: 'SaleRate', type: 'number' },
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
                    width: Width,
                    height: 350,

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
                        { text: 'TamilName', datafield: 'PrintName', width: 250, hidden: Hide },
                        { text: 'MRP', datafield: 'MRP', width: 85, cellsalign: 'right', cellsformat: 'd2' },
                        { text: 'SaleRate', datafield: 'SaleRate', width: 85, cellsalign: 'right', cellsformat: 'd2' },
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
function RepackingItemComboList(combo, async, Comid) {

    var datavalue = '{"Comid":' + Comid + '}'
    var objlist = {};
    $.ajax({
        async: async,
        url: "/RepackingMaster/RepackingItemMaster",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: datavalue,
        success: function (data) {
            objSlist = data.data;
            $(combo).jqxComboBox({ source: objSlist, displayMember: "ProductName", valueMember: "Id" });
        },
        error: function (xhr, err) {
            var responseTitle = $(xhr.responseText).filter('title').get(0);
            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));
            return [];
        }


    });
}
function ProductListR(grid) {

    var Comid = localStorage.getItem("Comid");
    var MComid = localStorage.getItem("MComid");
    var CommonCompany = localStorage.getItem("CommonCompany");
    if (CommonCompany == "true") {
        Comid = MComid;
    }

    var getdata = {};
    var objlist = {};
    $.ajax({
        url: "/RepackingMaster/RepackingItemMasterSub",
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: '{"Comid":' + Comid + '}',
        success: function (data) {
            getdata = data.data1;
            var source =
            {
                localdata: getdata,
                datatype: "local",
                datafields:
                    [
                        { name: 'Productcode', type: 'string' },
                        { name: 'ProductName', type: 'string' },
                        { name: 'StockQty', type: 'number' },
                        { name: 'Uom', type: 'number' },
                        { name: 'NetWeight', type: 'number' },
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
                    height: 350,

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
                        { text: 'StockQty', datafield: 'StockQty', width: 85, cellsalign: 'right', cellsformat: 'd2' },
                        { text: 'Uom', datafield: 'Uom', width: 85, cellsalign: 'right', cellsformat: 'd2' },
                        { text: 'NetWeight', datafield: 'NetWeight', width: 75, cellsalign: 'right', cellsformat: 'd2' },
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