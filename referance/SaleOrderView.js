$(document).ready(function () {
  
    var pageedit = 1;
    var pageadd = 1;
    var pageview = 0;
    var pagedelete = 0;
    var FileattachId = 0;
    var ColumnVisible = true;
    
    var EmployeeRefid = localStorage.getItem("EmployeeRefid");
    if (EmployeeRefid == '' || EmployeeRefid == undefined) {
        EmployeeRefid = 0;
    }
    var loginEmployeename = localStorage.getItem("EmployeeName");
    if (loginEmployeename == '' || loginEmployeename == undefined) {
        loginEmployeename = '';
    }
    var EmpType = localStorage.getItem("EmployeeType");
    if (EmpType == "ADMIN" || EmpType == "RECEIVABLE") {

        ColumnVisible = false;
    }
    $("#txtheading").text('SALE ORDER    (' + (loginEmployeename) + ')');
    //TotalWidthSetting
    var totalwidth = 870;
    var WindowWidthFull = screen.width - percentage(screen.width, 15);
    var WindowHeightFull = screen.height - percentage(screen.height, 15);
    var WindowWidth = screen.width - percentage(screen.width, 15);
    var WindowHeight = $(this).height() - 60;
    var gridHeight = WindowHeight - 100;

    //End
    var EditId = 0;

    $("#jqxLoader").jqxLoader({ width: 100, height: 60, imagePosition: 'top' });

    var cmbJobtypeview = $("#cmbJobtypeview");
    cmbJobtypeview.jqxComboBox({ width: '100%', height: 25, });
    var EditStatus = 0;

    var Comid = localStorage.getItem("Comid");
    var MComid = localStorage.getItem("MComid");
    //Text Box
    var txtJobNoSearch = $("#txtJobNoSearch");

    var gridStatus = $("#gridStatus");

    //F5View
    var dtpfromdate = $('#dtpfromdate');
    var dtptodate = $('#dtptodate');
    var cmbcustomerview = $('#cmbcustomerview');
    var cmbEmployeenameview = $('#cmbEmployeenameview');
    var cmbstatustypeview = $('#cmbstatustypeview');
    var btnopenFilter = $('#btnopenFilter');
    btnopenFilter.jqxButton({ width: 80, height: 30, });
    var deletesourcelist = [];
    var btnview = $('#btnview');
    var btnexcel = $('#btnexcel');
    
    var rbteta = $('#rbteta');
    var rbtleta = $('#rbtleta');
    var rbtoeta = $('#rbtoeta');
    var rbtneta = $('#rbtneta');

    var rbtdis = $('#rbtdis');
    var rbtemp = $('#rbtemp');
    var rbtinv = $('#rbtinv');

    var masterdata1 = {};
    var detailsdata1 = {};

    var dtpremarks1 = $('#dtpremarks1');
    var dtpremarks2 = $('#dtpremarks2');
    var dtpremarks3 = $('#dtpremarks3');
    var txtVesselNameview = $('#txtVesselNameview');
    var txtLoadingVesselNameview = $('#txtLoadingVesselNameview');
    txtVesselNameview.jqxInput({ height: 25, width: '100%' });
    txtLoadingVesselNameview.jqxInput({ height: 25, width: '100%' });
    txtJobNoSearch.jqxInput({ height: 25, width: '100%' });
    dtpfromdate.jqxDateTimeInput({ formatString: 'dd/MM/yyyy', height: '22px', width: '100%' });
    dtptodate.jqxDateTimeInput({ formatString: 'dd/MM/yyyy', height: '22px', width: '100%' });
    cmbcustomerview.jqxComboBox({ width: '100%', height: '22px', });
    cmbEmployeenameview.jqxComboBox({ width: '100%', height: '22px', disabled: true });
    cmbstatustypeview.jqxComboBox({ width: '100%', height: '22px', multiSelect: true });

    btnview.jqxButton({ width: 80, height: 30, });
    btnexcel.jqxButton({ width: 80, height: 30, });
    rbteta.jqxRadioButton({ width: '100%', height: 25, groupName: "Panel2" });
    rbtleta.jqxRadioButton({ width: '100%', height: 25, groupName: "Panel2" });
    rbtoeta.jqxRadioButton({ width: '100%', height: 25, groupName: "Panel2" });
    rbtneta.jqxRadioButton({ width: '100%', height: 25, checked: true, groupName: "Panel2" });

    rbtdis.jqxCheckBox({ width: '100%', height: 25, });
    rbtemp.jqxCheckBox({ checked: true, width: '100%', height: 25, });
    rbtinv.jqxCheckBox({ width: '100%', height: 25, });
    dtpremarks1.jqxRadioButton({ height: 20, width: "100%", groupName: "Panel1" });
    dtpremarks2.jqxRadioButton({ height: 20, width: "100%", groupName: "Panel1" });
    dtpremarks3.jqxRadioButton({ height: 20, width: "100%", groupName: "Panel1" });
    var completestatusnotshow = false;

    var gridf5view = $("#gridf5view");

    var StatusList = "";
    var grdProductCode = "ProductCode"    
    var objloginEmployeelist = [];

    $("#btnFileUpload").jqxButton({ width: '100%', height: 25 });


    $('#btnFileUpload').on('click', function (e) {
        e.preventDefault();
        var files = $("#filebrowser").get(0).files;
        if (files.length > 0 || deletesourcelist.length > 0) {
            methods.fileupload(FileattachId);
        }
        $("#PreviewFile").jqxWindow('Close');
    });


    //grid F5
    var F5id = "";
    gridf5view.on('rowdoubleclick', function (event) {
        var args = event.args;
        var rowindex = args.rowindex;
        F5id = gridf5view.jqxGrid('getcellvalue', rowindex, 'Id');
        if (pageedit == 0) {
            MsgBox("Page Edit Permission Denied !!!.");
            return;
        }
        Presskey = "F5"
        PasswordType = 1;
        window.open("/SaleOrder/?Id=" + F5id, "_blank");
       // EditPasswordWindow(1);
    });

    gridf5view.bind('keydown', function (event) {
        var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
        if (key == '40') {

        }
        if (key == '13') {
            var cell = gridf5view.jqxGrid('getselectedcell');
            var rowindex = cell.rowindex;
            var Id = gridf5view.jqxGrid('getcellvalue', rowindex, 'Id');
            var JobMasterRefId = gridf5view.jqxGrid('getcellvalue', rowindex, 'JobMasterRefId');
            var JobStatus = gridf5view.jqxGrid('getcellvalue', rowindex, 'JobStatus');

            StatusList(gridStatus, JobMasterRefId, 0);
            $("#Statuswindow").jqxWindow('Open');
            setTimeout(function () {
                gridStatus.jqxGrid('selectcell', 0, 'StatusName');
                gridStatus.jqxGrid('focus');
            }, 100);



        }


    });
    gridStatus.bind('keydown', function (event) {
        var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
        if (key == '40') {

        }
        if (key == '13') {
            var cell = gridStatus.jqxGrid('getselectedcell');
            var rowindex = cell.rowindex;
            var value = gridStatus.jqxGrid('getcellvalue', rowindex, 'StatusName');
            var SId = gridStatus.jqxGrid('getcellvalue', rowindex, 'Status');


            var cell1 = gridf5view.jqxGrid('getselectedcell');
            var rowindex1 = cell1.rowindex;
            gridf5view.jqxGrid('selectrow', rowindex1);
            var selectedrows = gridf5view.jqxGrid('getselectedrowindexes');





            var Id = gridf5view.jqxGrid('getcellvalue', rowindex1, 'Id');
            $.ajax({
                async: false,
                url: "/SaleOrder/UpdateJobStatus",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: '{"Id":"' + Id + '","JobStatusId":' + SId + '}',
                //data: datavalue,
                success: function (data) {
                    if (data.ok == true) {
                        NotificationSuccess(data.message);

                 
                        masterdata1[rowindex1]["JobStatus"] = value;
                        methods.loadfun();

                        gridStatus.jqxGrid('clearfilters');
                        $("#Statuswindow").jqxWindow('Close');
                        gridf5view.jqxGrid('selectcell', rowindex1, 'JobStatus');
                        gridf5view.jqxGrid('focus');

                    }
                    else {
                        MsgBox(data.message);
                    }
                },
                error: function (error) {
                    MsgBox('Technical Fault Contact Software Vendor  !!!.');
                }
            });

          
           
        }


    });
    $(document).on('click', "#btnview", function () {
        completestatusnotshow = false;
        methods.F5Viewget(false);
    });
    $(document).on('click', "#btnexcel", function () {
        completestatusnotshow = false;
        methods.F5Viewget(true);
    });
    $("#txtEditpassword").bind('keydown', function (event) {
        var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
        if (key == '13') {
            if ($("#txtEditpassword").val() != "" && $("#txtEditpassword").val() != null) {
                var type = "";
                if (PasswordType == 1) {
                    type = "EditPassword";
                }
                else if (PasswordType == 0) {
                    type = "FormConfig";
                }
                else if (PasswordType == 2) {
                    type = "AdminPower";
                }
                else if (PasswordType == 3) {
                    type = "SpclPower";
                }
                PassStatus = false;
                $.ajax({
                    async: false,
                    url: "/Login/EditPassword",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    data: '{"password":"' + $("#txtEditpassword").val() + '","type":"' + type + '","Comid":' + Comid + '}',
                    //data: datavalue,
                    success: function (data) {
                        if (data.ok == true) {
                            PassStatus = true;
                            $('#LockEditWindow').jqxWindow('Close');
                        }
                        else {
                            alert("Invaild Password !!!.");
                        }
                    },
                    error: function (error) {
                        MsgBox('Technical Fault Contact Software Vendor  !!!.');
                    }
                });
            }
        }
    });
    var PasswordType = 0;
    function EditPasswordWindow(type) {
        var titlenew = "";
        if (type == 1) {
            titlenew = "Edit Pwd";
        }
        else if (type == 0) {
            titlenew = "Form Pwd";
        }
        else if (type == 2) {
            titlenew = "Admin Pwd";
        }
        else if (type == 3) {
            titlenew = "Spcl Pwd";
        }
        let centerX = (screen.width - 450) / 2;
        let centerY = (screen.height - 450) / 2;

        $('#LockEditWindow').jqxWindow({
            position: { x: centerX, y: centerY },
            showCollapseButton: false,
            showCloseButton: true,
            height: 150,
            width: 120,
            title: titlenew,
            isModal: true,
            keyboardCloseKey: 0,
            resizable: false,
            initContent: function () {
            }
        });
        $('#LockEditWindow').jqxWindow('Open');
        setTimeout(function () {
            $('#txtEditpassword').val('');
            $("#txtEditpassword").focus();
        }, 250);

    }
    function Employeeloginwindow() {
        $("#cmbEmployeename").jqxComboBox({ width: '100%', height: '22px' });
        //  $("#txtpassword").jqxPasswordInput({ height: 18, width: '98%' });   

        $("#cmbEmployeename").jqxComboBox({ placeHolder: "Select Employee Name" });
        var $this = $(this);

        var width = $this.width();
        var height = $this.height();
        let centerX = (width - 390) / 2;
        let centerY = (height - 110) / 2;
        // $("#cashierlogin").jqxWindow({ resizable: false });

        $("#Employeelogin").jqxWindow({
            position: { x: centerX, y: centerY },
            showCollapseButton: false, maxHeight: 700, maxWidth: 1000, minHeight: 50, minWidth: 200, height: 110, width: 390, resizable: false, isModal: true, keyboardCloseKey: 0,
            initContent: function () {

            }
        });
        $("#Employeelogin").jqxWindow('Open');

        setTimeout(function () {
            $("#cmbEmployeename").jqxComboBox('focus');
        }, 500);
    }
    $('#Employeelogin').on('close', function (event) {
        if (EmployeeRefid == 0) {

            MsgBox("Login Password Empty.Page Access Permission Denied !!!.");
            setTimeout(function () {
                window.location.href = "/Home";
            }, 250);

        }
    });
    function ImagePreviewWindow() {
        $("#cmbImageType").jqxComboBox({ width: '100%', height: '22px' });
        $("#cmbImageType").jqxComboBox({ placeHolder: "Select Type", source: ImageFolderlist });
        var $this = $(this);

        var width = $this.width();
        var height = $this.height();
        let centerX = (width - 900) / 2;
        let centerY = (height - 650) / 2;
        $("#PreviewImage").jqxWindow({
            position: { x: centerX, y: centerY },
            showCollapseButton: false, maxHeight: 700, maxWidth: 1000, minHeight: 50, minWidth: 200, height: 650, width: 900, resizable: false, isModal: true, keyboardCloseKey: 0,
            initContent: function () {

            }
        });
        $("#PreviewImage").jqxWindow('Open');

        setTimeout(function () {
            $("#cmbImageType").jqxComboBox('focus');
        }, 500);
    }
    $('#PreviewImage').on('close', function (event) {
        
        ImageSaleId = 0;
        $("#preview-container").empty();
        $('#cmbImageType').jqxComboBox('clearSelection');
    });
    $('#cmbImageType').on('change', function (event) {

        var ImageFolders = "";

        var args = event.args;
        if (args) {
            var item = args.item;
            var label = item.label;
            var directory = "/Upload/" + Comid + "/SalesOrder/" + ImageSaleId + "/" + label + "";
            if ($('#cmbImageType').jqxComboBox('getSelectedItem').value != null) {
                $('#jqxLoader').jqxLoader('open');
                $.ajax({
                    url: "/Common/FetchFiles",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    data: '{"ImageDirectory":"' + directory + '"}',
                    success: function (data) {
                        $('#jqxLoader').jqxLoader('close');
                        if (data.ok == true) {
                            var ImageName = data.data;
                            var comma = "";
                            for (var i = 0; i < ImageName.length; i++) {
                                var Names = directory + "/" + ImageName[i];
                                ImageFolders = ImageFolders + comma + Names;
                                comma = ",";

                            }
                            methods.imagePreview1(ImageFolders, ImageSaleId);
                        }
                        else {
                            ImageFolders = "";
                            $("#preview-container").empty();
                        }

                    },
                    error: function (error) {
                        $('#jqxLoader').jqxLoader('open');
                        MsgBox('Technical Fault Contact Software Vendor  !!!.');
                    }

                });
            }
            else {
                MsgBox("Select Vaild Type !!!.");
            }
        }

    });
    $(document).on('keydown', '#cmbEmployeename', function (event) {
        var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
        if (key == '13') {

            if ($('#cmbEmployeename').jqxComboBox('getSelectedItem').value != null) {
                $("#password").focus();
            }
            else {
                MsgBox("Select Vaild Employee Name !!!.");

            }
        }
     
    });
    $("#password").bind('keydown', function (event) {
        var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
        if (key == '13') {
            if ($("#password").val() != "") {
                var Cid = 0;
                var password = $("#password").val();
                if ($('#cmbEmployeename').jqxComboBox('getSelectedItem').value != null) {
                    Cid = $('#cmbEmployeename').jqxComboBox('getSelectedItem').value;
                    var getdata = objloginEmployeelist.filter(obj => obj.Id == Cid && obj.Password == password);
                    if (getdata.length != 0) {
                        EmployeeRefid = getdata[0].Id;
                        loginEmployeename = getdata[0].AccountName;
                        localStorage.setItem('EmployeeRefid', EmployeeRefid);
                        localStorage.setItem('EmployeeName', getdata[0].AccountName);
                        $("#txtheading").text('SALE ORDER    (' + (loginEmployeename) + ')');
                        $("#Employeelogin").jqxWindow('Close');
                        cmbCustomerName.jqxDropDownList('focus');
                        methods.saleviewpush();
                    }
                    else {
                        alert("Invaild Password !!!.");
                    }
                }
                else {
                    alert("Select Vaild Employee Name !!!.");
                }
            }
            else {
                alert("Select Vaild Password !!!.");

            }
        }
    });
    var Presskey = "";
    var PassStatus = false;
    $('#LockEditWindow').on('close', function (event) {
        setTimeout(function () {
            if (Presskey == "ESC") {
                $('#LockEditWindow').jqxWindow('Close');
            }
            if (PassStatus == true) {
                if (Presskey == "F3") {
                    var value = prompt("Enter the SaleOrder Number", "");
                    if (ValNum(value) != 0) {

                        methods.SaleOrderEdit(0, value);

                    }

                }
                if (Presskey == "F5") {
                    // $("#F5Viewwindow").jqxWindow('Close');
                    //    window.location.href = "/SaleOrder/?Id=" + F5id;
                    window.open("/SaleOrder/?Id=" + F5id, "_blank");
                    // methods.SaleOrderEdit(F5id, 0);
                }
                if (Presskey == "INVOICE") {
                    methods.InvoiceConvert();
                }
                //if (Presskey == "F9") {



                //    methods.DeleteSaleOrder();

                //}
            }
        }, 250);

    });
    $('#btnview1').on('click', function (e) {
        e.preventDefault();
        methods.F5Viewinit(false, f5init);
    });
    $('#btnlogout').on('click', function (e) {
        e.preventDefault();
        var str = 'Do you Want to Logout?'
        MsgBoxYesNo(str).then(function (reply) {
            if (reply.isConfirmed) {
                localStorage.setItem('EmployeeRefid', 0);
                localStorage.setItem('EmployeeName', '');
                setTimeout(function () {
                    window.location.href = "/Home";
                }, 250);
            }
        });
    });

    $(document).on('keydown', function (e) {
        if (EmployeeRefid == 0) {
            if (e.keyCode == 112 || e.keyCode == 121, e.keyCode == 116, e.keyCode == 120) {
                e.preventDefault();
                return;
            }
        }
        //F1
        if (e.keyCode == 112) {
            e.preventDefault();

            methods.SaleOrderSave();

        }
        //f10
        if (e.keyCode == 121) {
            EditStatus = 0;
            methods.Clear();
        }

        //F5
        if (e.keyCode == 116) {
            e.preventDefault();

            methods.F5Viewinit(false, f5init);
        }
        //f6
        if (e.keyCode == 117)
        {
            e.preventDefault();

            var cell = gridf5view.jqxGrid('getselectedcell');
            var rowindex = cell.rowindex;
            var Id = gridf5view.jqxGrid('getcellvalue', rowindex, 'Id');
            var JobMasterRefId = gridf5view.jqxGrid('getcellvalue', rowindex, 'JobMasterRefId');
            var JobStatus = gridf5view.jqxGrid('getcellvalue', rowindex, 'JobStatus');
            
            StatusList(gridStatus, JobMasterRefId, 0);
            $("#Statuswindow").jqxWindow('Open');
            setTimeout(function () {
                gridStatus.jqxGrid('selectcell', 0, 'StatusName');
                gridStatus.jqxGrid('focus');
            }, 100);

        }

        //F9
        if (e.keyCode === 120) {
            e.preventDefault();
            if (pagedelete == 0) {
                MsgBox("Page Delete Permission Denied !!!.");
                return;
            }
            if (EditId == 0) {
                MsgBox("No Delete Id !!!.");
                return;
            }
            Presskey = "F9"
            PasswordType = 1;
            EditPasswordWindow(1);

        }
    });

    $('#rbtemp').on('change', function (e) {
        e.preventDefault();
        if ($("#rbtemp").jqxCheckBox('val')) {
            cmbEmployeenameview.jqxComboBox({ disabled: true });
        }
        else {
            cmbEmployeenameview.jqxComboBox({ disabled: false });
        }
    });
    var f5init = false;
    function StatusList(grid,JobId,Complete) {
        var getdata = {};
        var objlist = {};
        $.ajax({
            url: "/JobTypeMaster/SelectJobAllDataOnly",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: '{"Comid":' + Comid + ',"Jobid":' + JobId + ',"Complete":' + Complete + '}',
            success: function (data) {
                getdata = data.data;
                var source =
                {
                    localdata: getdata,
                    datatype: "local",
                    datafields:
                        [
                            { name: 'StatusName', type: 'string' },
                            { name: 'Status', type: 'number' }

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
                        width: 300,
                        height: 430,

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
                            { text: 'JobStatus', datafield: 'StatusName', width: 280 },
                            { text: 'Id', datafield: 'Status', width: 90, hidden: true }
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
    function Statuswindow() {
        var $this = $(this);
        var width = $this.width();
        var height = $this.height();
        let centerX = (width - 300) / 2;
        let centerY = (height - 500) / 2;

        // $("#cashierlogin").jqxWindow({ resizable: false });
        // var offset = gridcashier.offset();
        $("#Statuswindow").jqxWindow({
            position: { x: centerX, y: centerY },
            showCollapseButton: false, maxHeight: 700, maxWidth: 1000, minHeight: 50, minWidth: 200, height: 500,
            //zIndex: 1010,
            width: 310, resizable: false, keyboardCloseKey: 0,
            initContent: function () {

            }
        });


    }
    var customerclose = [];
    cmbstatustypeview.on('keydown select change close', function (event) {
        var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
        if (key == '13' || (key == '0' && (event.type == 'mouse' || event.type == 'close'))) {
            if (cmbstatustypeview.jqxComboBox('getSelectedIndex') != -1) {
                var item = cmbstatustypeview.jqxComboBox('getSelectedItem');
                if (item) {
                    var label = item.label;
                    var value = item.value;
                    if (cmbstatustypeview.jqxComboBox('getSelectedItem').value != null) {
                        if (event.type == 'close') {
                            customerclose = [{ Id: value, Time: getunixTimestamp() }];
                            console.log(getunixTimestamp());
                        }
                        else {
                            if (customerclose.length != 0) {
                                if (customerclose[0].Id == value) {
                                    var tt = getunixTimestamp();
                                    console.log(customerclose[0].Time);
                                    console.log(tt);
                                    console.log(tt - customerclose[0].Time);
                                    if ((tt - customerclose[0].Time) < 10) {
                                        customerclose = []
                                        return;
                                    }
                                }
                                customerclose = [];
                            }
                        }

                        var selectedItems = cmbstatustypeview.jqxComboBox('getSelectedItems');
                        StatusList = "";
                        var selectedValues = selectedItems.map(function (items) {
                           
                            if (StatusList == "") {
                                StatusList = items.value.toString();
                            }
                            else {
                                StatusList += "," + items.value.toString();
                            }
                        });
                        


                    }
                    else {

                        MsgBox("Select Vaild Supplier Name!!!.");
                    }
                }
            }
        }
    });
    cmbstatustypeview.on('unselect', function (event) {
        var selectedItems = cmbstatustypeview.jqxComboBox('getSelectedItems');
        StatusList = "";
        var selectedValues = selectedItems.map(function (items) {

            if (StatusList == "") {
                StatusList = items.value.toString();
            }
            else {
                StatusList += "," + items.value.toString();
            }
        });
    });


    function FilePreviewWindow() {
        var $this = $(this);

        var width = $this.width();
        var height = $this.height();
        let centerX = (width - 900) / 2;
        let centerY = (height - 650) / 2;
        $("#PreviewFile").jqxWindow({
            position: { x: centerX, y: centerY },
            showCollapseButton: false, maxHeight: 700, maxWidth: 1000, minHeight: 50, minWidth: 200, height: 650, width: 900, resizable: false, isModal: true, keyboardCloseKey: 0,
            initContent: function () {

            }
        });
        $("#PreviewFile").jqxWindow('Open');

        setTimeout(function () {

        }, 500);
    }


    $("#filterWindow").jqxWindow({
        width: 300,
        height: 200,
        resizable: false,
        isModal: true,
        autoOpen: false,
        modalOpacity: 0.3,
        draggable: true,
        showCloseButton: true
    });

    $("#btnopenFilter").on('click', function () {
        var cols = gridf5view.jqxGrid('columns').records;
        var visibleCols = [];
        visibleCols.push({ label: "Select Column", value: "" });

        $.each(cols, function (i, col) {
            if (!col.hidden) {
                visibleCols.push({ label: col.text, value: col.datafield });
            }
        });

        $("#columnDropdown").jqxDropDownList({
            source: visibleCols,
            displayMember: "label",
            valueMember: "value",
            width: '95%',
            height: 25,
            selectedIndex: 0
        });

        $("#filterValue").val("");
        $("#filterWindow").jqxWindow('open');
        $("#filterWindow").jqxWindow('bringToFront');
    });

    $("#applyFilter").on('click', function () {
        var column = $("#columnDropdown").val();
        var value = $("#filterValue").val();

        if (value) {
            var filtergroup = new $.jqx.filter();
            var filter = filtergroup.createfilter('stringfilter', value, 'contains');
            filtergroup.addfilter(1, filter);

            gridf5view.jqxGrid('addfilter', column, filtergroup);
            gridf5view.jqxGrid('applyfilters');
        }
        $("#filterWindow").jqxWindow('close');
    });


    methods = (function () {
        return {
            init: function () {
                sidemenustop();
                methods.createElements();
                methods.loadCompany();
               
                var data = [];
               // methods.loadgrid(data);
                methods.F5Viewinit(false, f5init);
                //EmployeeRefid = 0;
                if (EmployeeRefid == 0) {
                    Employeeloginwindow();
                }
                else {
                    methods.saleviewpush();
                }

 
                Statuswindow();
            },
            createElements: function () {
                var jqxWidget = $('#jqxWidget');
                var offset = jqxWidget.offset();
        
              
            },
            loadCompany() {
               
                loadJobTypecombo(cmbJobtypeview);
                cmbJobtypeview.jqxComboBox({ placeHolder: "Select Job Type" });
                loadCustomercombo(cmbcustomerview);
                loadJobStatuscombo(cmbstatustypeview,false);
  
                cmbcustomerview.jqxComboBox({ placeHolder: "Select Customer Name" });
      
                objloginEmployeelist = loadeemployeecombos([cmbEmployeename], "SALES", "ADMIN");
                loadeemployeecombos([cmbEmployeenameview], "SALES", "ADMIN")

            },
            PoPush: function (IdList) {
                var IdList1;
                if (IdList != null) {
                    IdList1 = IdList;
                }
                else if (EditId != 0) {
                    IdList1 = [{ id: EditId, jobno: txtJobNo.val() }];

                }
                localStorage.setItem("PUSHPO", JSON.stringify(IdList1));
                window.open("/PurchaseOrderMaster?Push=1", "_blank");
            },
            Addrowfunc: function () {
                addrow(gridSale);
                var rowscount = gridSale.jqxGrid('getdatainformation').rowscount;
                gridSale.jqxGrid('selectcell', rowscount - 1, grdProductCode);
                gridSale.jqxGrid('focus');
            },
            DoConvert: function (row, datafield, value) {
                editrow = row;
                if (editrow >= 0) {
                    //var cell = gridf5view.jqxGrid('getselectedcell');
                    //var selectedrowindex = cell.rowindex;
                    //rowIndexnew = cell.rowindex;

                    //var rowdata = gridf5view.jqxGrid('getrowdata', selectedrowindex);
                    //var SoId = rowdata.Id;
                    var SoId = gridf5view.jqxGrid('getcellvalue', editrow, 'Id');
                    //var args = row.args;
                    //var rowindex = args.rowindex;
                    //SoId = gridf5view.jqxGrid('getcellvalue', rowindex, 'Id');
                    var str = 'Do you Want to Prepare DO?'
                    MsgBoxYesNo(str).then(function (reply) {
                        if (reply.isConfirmed) {
                            $('#jqxLoader').jqxLoader('open');
                            var objlist = {
                                'SoId': SoId,
                                'Comid': Comid,
                            };
                            $.ajax({

                                url: "/SaleOrder/DoConvert",
                                type: "POST",
                                dataType: "json",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(objlist),
                                success: function (data) {
                                    $('#jqxLoader').jqxLoader('close');
                                    if (data.ok == true) {
                                        var w = window.open("../Reports/ReportViewer.aspx?ReportName=" + "DoReport" + "&TimeStamp=" + getunixTimestamp() + "", '_blank', "directories = 0, titlebar = 0, toolbar = 0, location = 0, status = 0, menubar = 0, scrollbars = yes, resizable = no,width=" + screen.width + ",height=" + (screen.height - 100) + "");
                                        w.addEventListener('load', function () { w.document.title = 'DO Report'; }, false);
                                    }
                                    else {

                                        MsgBox('No Record !!!.');
                                    }
                                },
                                error: function (xhr, err) {
                                    var responseTitle = $(xhr.responseText).filter('title').get(0);
                                    MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));

                                }
                            });
                        }
                    });
                }
            },
            PoConvert: function (row, datafield, value) {
                editrow = row;
                if (editrow >= 0) {
                    var id = gridf5view.jqxGrid('getcellvalue', editrow, 'Id');
                    var jobno = gridf5view.jqxGrid('getcellvalue', editrow, 'BillNoDisplay');
                    var IdList = [{ id: id, jobno: jobno }];
                    methods.PoPush(IdList);
                }
            },
            InvoiceConvertPass: function (row, datafield, value) {
                editrow = row;
                if (editrow >= 0) {
                    F5id = gridf5view.jqxGrid('getcellvalue', editrow, 'Id');
                    Presskey = "INVOICE";
                    PassStatus = false;
                    PasswordType = 3;
                    EditPasswordWindow(3);
                }
            },
            InvoiceConvert: function () {
                if (PassStatus === true) {
                    var str = 'Do you Want to Prepare Invoice?'
                    MsgBoxYesNo(str).then(function (reply) {
                        if (reply.isConfirmed) {
                            $('#jqxLoader').jqxLoader('open');
                            var objlist = {
                                'SoId': F5id,
                                'Comid': Comid,
                            };
                            $.ajax({

                                url: "/SaleOrder/InvoiceConvert",
                                type: "POST",
                                dataType: "json",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(objlist),
                                success: function (data) {
                                    $('#jqxLoader').jqxLoader('close');
                                    if (data.ok == true) {
                                        var w = window.open("../Reports/ReportViewer.aspx?ReportName=" + "InvoiceReport" + "&TimeStamp=" + getunixTimestamp() + "", '_blank', "directories = 0, titlebar = 0, toolbar = 0, location = 0, status = 0, menubar = 0, scrollbars = yes, resizable = no,width=" + screen.width + ",height=" + (screen.height - 100) + "");
                                        w.addEventListener('load', function () { w.document.title = 'Invoice Report'; }, false);
                                    }
                                    else {

                                        MsgBox('No Record !!!.');
                                    }
                                },
                                error: function (xhr, err) {
                                    var responseTitle = $(xhr.responseText).filter('title').get(0);
                                    MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));

                                }
                            });
                        }
                    });
                }
            },
            InvoiceOpen: function (row) {
                var SoId = gridf5view.jqxGrid('getcellvalue', row, 'InvoiceId');
                if (SoId != 0) {
                    var URL = "/SaleInvoice/InvoiceConvert";

                    var str = 'Do you Want to Open Invoice?'
                    MsgBoxYesNo(str).then(function (reply) {
                        if (reply.isConfirmed) {
                            $('#jqxLoader').jqxLoader('open');
                            var objlist = {
                                'SoId': SoId,
                                'Comid': Comid,
                            };
                            $.ajax({

                                url: URL,
                                type: "POST",
                                dataType: "json",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(objlist),
                                success: function (data) {
                                    $('#jqxLoader').jqxLoader('close');
                                    if (data.ok == true) {
                                        if (data.Data1 != "") {
                                            //window.location.href = "/SaleOrder";
                                            window.open(data.Data1, "_blank");
                                        }
                                        else {
                                            var w = window.open("../Reports/ReportViewer.aspx?ReportName=" + "InvoiceReport" + "&TimeStamp=" + getunixTimestamp() + "", '_blank', "directories = 0, titlebar = 0, toolbar = 0, location = 0, status = 0, menubar = 0, scrollbars = yes, resizable = no,width=" + screen.width + ",height=" + (screen.height - 100) + "");
                                            w.addEventListener('load', function () { w.document.title = 'Invoice Report'; }, false);
                                        }
                                    }
                                    else {

                                        MsgBox(data.Message);
                                    }
                                },
                                complete: function () {
                                    $('#jqxLoader').jqxLoader('close');
                                },
                                error: function (xhr, err) {
                                    var responseTitle = $(xhr.responseText).filter('title').get(0);
                                    MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));

                                }
                            });
                        }
                    });
                }
                else {
                    MsgBox("Invoice Doesn't exists for this Job !!");
                    return;
                }
            },
            F5Viewinit: function (push, f5init) {
                if (f5init == false) {
                    if (push != null && push == true) {
                        $("#dtpfromdate").jqxDateTimeInput('setDate', jsondatestring(currentdate(0)));
                        $("#dtptodate").jqxDateTimeInput('setDate', jsondatestring(currentdate(+30)));
                        rbtemp.jqxCheckBox({ checked: false });
                        rbteta.jqxRadioButton({ checked: true, });
                        completestatusnotshow = true;
                    }
                    else {
                        $("#dtpfromdate").jqxDateTimeInput('setDate', new Date());
                        $("#dtptodate").jqxDateTimeInput('setDate', new Date());
                    }
                    $("#dtpremarks1").jqxRadioButton({ checked: false });
                    $("#dtpremarks2").jqxRadioButton({ checked: false });
                    $("#dtpremarks3").jqxRadioButton({ checked: true });
                    f5init = true;
                }
                methods.F5Viewget(false);
            },
            F5Viewget: function (excel,type) {
                var employeetype = 0;
                var sid = 0;
                var eid = 0;
                var ssid = 0;
                var status = '';
                var ETA = false;
                var ETAType = 0;
                var JId = 0;
                var Pickup = false;
                var Offvesselname = txtVesselNameview.val();
                var Loadingvesselname = txtLoadingVesselNameview.val();
                var Invoice = false;
                if ($("#rbtneta").jqxRadioButton('checked')) {
                    ETA = false;
                    ETAType = 0;
                }
                else if ($("#rbteta").jqxRadioButton('checked')) {
                    ETA = true;
                    ETAType = 0;
                }
                else if ($("#rbtoeta").jqxRadioButton('checked')) {
                    ETA = true;
                    ETAType = 1;
                }
                else if ($("#rbtleta").jqxRadioButton('checked')) {
                    ETA = true;
                    ETAType = 2;
                }
                if ($("#rbtdis").jqxCheckBox('val')) {
                    Pickup = true;
                }
                if ($('#cmbcustomerview').jqxComboBox('getSelectedIndex') != -1) {
                    var item = $('#cmbcustomerview').jqxComboBox('getSelectedItem');
                    sid = item.value;
                }
                if ($('#cmbEmployeenameview').jqxComboBox('getSelectedIndex') != -1) {
                    var item = $('#cmbEmployeenameview').jqxComboBox('getSelectedItem');
                    eid = item.value;
                }
                if ($('#cmbstatustypeview').jqxComboBox('getSelectedIndex') != -1) {
                    var item = $('#cmbstatustypeview').jqxComboBox('getSelectedItem');
                    if (item != undefined) {
                        ssid = item.value;
                    }
                }
                if (dateformatU($("#dtpfromdate").jqxDateTimeInput('getText'), false) > dateformatU($("#dtptodate").jqxDateTimeInput('getText'), false)) {
                    MsgBox("From Date Is Greater Than To Date");
                    return;
                }
                var Remarks = 0;
                if ($("#dtpremarks1").jqxRadioButton('checked')) {
                    Remarks = 1;
                }
                if ($("#dtpremarks2").jqxRadioButton('checked')) {
                    Remarks = 2;
                }
                if ($("#dtpremarks3").jqxRadioButton('checked')) {
                    Remarks = 3;
                }
                var LEmployeeRefid = 0;
                if ($("#rbtemp").jqxCheckBox('val')) {
                    LEmployeeRefid = EmployeeRefid;
                }
                else {
                    LEmployeeRefid = eid;
                }
                if ($("#rbtinv").jqxCheckBox('val')) {
                    Invoice = true;
                }
                if (cmbJobtypeview.jqxComboBox('getSelectedIndex') != -1) {
                    var item = cmbJobtypeview.jqxComboBox('getSelectedItem');
                    JId = item.value;
                }
                if (type == 1) {
                    employeetype = 2;
                }
                var objlist = [{ Invoice: Invoice, fromdate: dateformatU($("#dtpfromdate").jqxDateTimeInput('getText'), false), todate: dateformatU($("#dtptodate").jqxDateTimeInput('getText'), false), Id: sid, Comid: Comid, Employeeid: LEmployeeRefid, Statusid: ssid, Search: txtJobNoSearch.val(), Remarks: Remarks, ETA: ETA, ETAType: ETAType, Pickup: Pickup, Offvesselname: Offvesselname, Loadingvesselname: Loadingvesselname, JId: JId, employeetype: employeetype }];
                methods.F5View(objlist, excel);
            },
            saleviewpush: function () {
                var EmployeeRefid2 = localStorage.getItem("EmployeeRefid2");
                if (EmployeeRefid2 == '' || EmployeeRefid2 == undefined) {
                    EmployeeRefid2 = 0;
                }
                var Id = 0;
                var query = window.location.search.substring(1);
                if (query != null) {
                    Id = Number(query.replace("Id=", ""));
                    if (Id != null && Id > 0 && Id != "") {
                        Id = Id;
                        pid = Id;
                    }
                    else {
                        Id = 0;
                    }
                }
                var value = Id;
                if (value != 0) {
                    rbtemp.jqxCheckBox({ checked: false });
                    cmbstatustypeview.jqxComboBox('selectItem', value);
                    var date = new Date('2024-06-01');
                    dtpfromdate.jqxDateTimeInput('setDate', date);
                    cmbEmployeenameview.jqxComboBox('selectItem', EmployeeRefid2);
                    methods.F5Viewget(false,1);
                }
                else {
                    var objdata = localStorage.getItem("SaleViewOpen");
                    if (objdata != null && objdata != 'null' && objdata != 0) {
                        localStorage.setItem("SaleViewOpen", null)
                        methods.F5Viewinit(true, f5init);
                    }

                }

            },
            F5View: function (objlist, excel) {
                if (pageedit == 0) {
                    MsgBox("Page Edit Permission Denied !!!.");
                    return;
                }
                var FDate = $.jqx.dataFormat.formatdate(objlist[0].fromdate, 'MM/dd/yyyy');
                var TDate = $.jqx.dataFormat.formatdate(objlist[0].todate, 'MM/dd/yyyy');
                var masterdata = {};
                var detailsdata = {};
                var objlist = {
                    "Comid": Comid,
                    "Fromdate": FDate,
                    "Todate": TDate,
                    "Id": objlist[0].Id,
                    "Employeeid": objlist[0].Employeeid,
                    "Statusid": objlist[0].Statusid,
                    "completestatusnotshow": completestatusnotshow,
                    "Search": objlist[0].Search,
                    "Remarks": objlist[0].Remarks,
                    "ETA": objlist[0].ETA,
                    "ETAType": objlist[0].ETAType,
                    "Pickup": objlist[0].Pickup,
                    "Offvesselname": objlist[0].Offvesselname,
                    "Loadingvesselname": objlist[0].Loadingvesselname,
                    "JId": objlist[0].JId,
                    "Invoice": objlist[0].Invoice,
                };
                $('#jqxLoader').jqxLoader('open');
                $.ajax({
                    url: "/SaleOrder/SelectSaleOrder",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(objlist),
                    success: function (data) {
                        $('#jqxLoader').jqxLoader('close');
                        if (data.ok == false) {
                            MsgBox(data.message);
                            return;
                        }
                        if (excel == true) {
                            methods.ExcelDownload(JSON.parse(JSON.stringify(data)));
                        }
                        masterdata = data.Data[0].salemaster;
                        detailsdata = data.Data[0].saledetails;

                        var total = 0;
                        var Count = 0;
                        for (var i = 0; i < masterdata.length; i++) {
                            total = total + masterdata[i].NetAmt;
                            Count = Count + 1;
                        }
                        $("#lblviewCount").text(Count.toFixed(2));
                        $("#lblviewamt").text(total.toFixed(2));
                        var source =
                        {
                            localdata: masterdata,
                            datatype: "local",
                            datafields:
                                [
                                    { name: 'Id', type: 'number' },
                                    { name: 'InvoiceId', type: 'number' },
                                    { name: 'NetAmt', type: 'number' },
                                    { name: 'EmployeeName', type: 'string' },
                                    { name: 'QNECode', type: 'string' },
                                    { name: 'QNEId', type: 'string' },
                                    { name: 'BillDate', type: 'string' },
                                    { name: 'BillTime', type: 'string' },
                                    { name: 'CashierName', type: 'string' },
                                    { name: 'BillNo', type: 'int' },
                                    { name: 'BillNoDisplay', type: 'string' },
                                    { name: 'InvoiceNo', type: 'string' },
                                    { name: 'SaleType', type: 'string' },
                                    { name: 'CustomerName', type: 'string' },
                                    { name: 'Remarks', type: 'string' },
                                    { name: 'SPickupDate', type: 'string' },
                                    { name: 'SETA', type: 'string' },
                                    { name: 'SETB', type: 'string' },
                                    { name: 'SOETA', type: 'string' },
                                    { name: 'SOETB', type: 'string' },
                                    { name: 'SPort', type: 'string' },
                                    { name: 'Offvesselname', type: 'string' },
                                    { name: 'Loadingvesselname', type: 'string' },
                                    { name: 'JobType', type: 'string' },
                                    { name: 'JobStatus', type: 'string' },
                                    { name: 'Origin', type: 'string' },
                                    { name: 'Destination', type: 'string' },
                                    { name: 'JobMasterRefId', type: 'number' },
                                ],
                            id: 'Id'
                        };
                        var masterdataAdapter = new $.jqx.dataAdapter(source);
                        var detailssource =
                        {
                            localdata: detailsdata,
                            datatype: "local",
                            datafields:
                                [
                                    { name: 'DiscountAmt', type: 'number' },
                                    { name: 'DiscountPercent', type: 'number' },
                                    { name: 'ItemQty', type: 'number' },
                                    { name: 'MRP', type: 'number' },
                                    { name: 'ProductCode', type: 'string' },
                                    { name: 'SaleRate', type: 'number' },
                                    { name: 'ProductName', type: 'string' },
                                    { name: 'SDRemarks', type: 'string' },
                                    { name: 'SaleRefId', type: 'number' },
                                    { name: 'TaxAmt', type: 'number' },
                                    { name: 'TaxPercent', type: 'number' },
                                    { name: 'SAmount', type: 'number' },
                                ],
                            id: 'Id'
                        };
                        var detailsDataAdapter = new $.jqx.dataAdapter(detailssource, { autoBind: true });
                        var orders = detailsDataAdapter.records;

                        var nestedGrids = new Array();
                        var initrowdetails = function (index, parentElement, gridElement, record) {
                            var id = record.uid.toString();
                            var grid = $($(parentElement).children()[0]);
                            nestedGrids[index] = grid;
                            var filtergroup = new $.jqx.filter();
                            var filter_or_operator = 1;
                            var filtervalue = id;
                            var filtercondition = 'equal';
                            var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                            var ordersbyid = [];
                            for (var m = 0; m < orders.length; m++) {
                                var result = filter.evaluate(orders[m]["SaleRefId"]);
                                if (result)
                                    ordersbyid.push(orders[m]);
                            }

                            var orderssource = {
                                datafields:
                                    [
                                        { name: 'DiscountAmt', type: 'number' },
                                        { name: 'DiscountPercent', type: 'number' },
                                        { name: 'ItemQty', type: 'number' },
                                        { name: 'MRP', type: 'number' },
                                        { name: 'ProductCode', type: 'string' },
                                        { name: 'SaleRate', type: 'number' },
                                        { name: 'ProductName', type: 'string' },
                                        { name: 'SDRemarks', type: 'string' },

                                        { name: 'SaleRefId', type: 'number' },
                                        { name: 'TaxAmt', type: 'number' },
                                        { name: 'TaxPercent', type: 'number' },
                                        { name: 'SAmount', type: 'number' },

                                    ],
                                id: 'SaleRefId',
                                localdata: ordersbyid
                            }
                            var nestedGridAdapter = new $.jqx.dataAdapter(orderssource);

                            if (grid != null) {
                                grid.jqxGrid({
                                    source: nestedGridAdapter, width: '100%',
                                    height: '95%',
                                    columnsautoresize: true,
                                    columnsresize: true,
                                    columns: [
                                        { text: 'Code', datafield: 'ProductCode', width: 100 },
                                        { text: 'Description', datafield: 'ProductName', width: 250 },
                                        { text: 'Remarks', datafield: 'SDRemarks', width: 250 },
                                        //{ text: 'MRP', datafield: 'MRP', width: 90, cellsalign: 'right', cellsformat: 'd2' },
                                        { text: 'SaleRate', datafield: 'SaleRate', width: 90, cellsalign: 'right', cellsformat: 'd2' },
                                        { text: 'Qty', datafield: 'ItemQty', width: 80, cellsalign: 'right', cellsformat: 'd2' },
                                        { text: 'GST(%)', datafield: 'TaxPercent', width: 80, cellsalign: 'right', cellsformat: 'd2' },
                                        { text: 'Amount', datafield: 'SAmount', width: 80, cellsalign: 'right', cellsformat: 'd2' },

                                        //{ text: 'GSTAmt', datafield: 'TaxAmt', width: 90, cellsalign: 'right', cellsformat: 'd2' },
                                        //{ text: 'Disc(%)', datafield: 'DiscountPercent', width: 80, cellsalign: 'right', cellsformat: 'd2' },
                                        //{ text: 'DiscAmt', datafield: 'DiscountAmt', width: 90, cellsalign: 'right', cellsformat: 'd2' },
                                    ]
                                });
                                localizationobj.thousandsseparator = "";
                                grid.jqxGrid('localizestrings', localizationobj);
                            }
                        }
                        var imagerenderersedit = function (row, datafield, value) {
                            return '<div class="form-inline"><img onclick="methods.DoConvert(' + row + ')" style="margin:0 auto;cursor:pointer" class="img-fluid rounded mx-auto d-block mt-2 hovers" height="20" width="20" src="/Content/images/pngimages/pdf.png" /></div>';
                        }
                        var imagerenderersedit3 = function (row, datafield, value) {
                            return '<div class="form-inline"><img onclick="methods.PoConvert(' + row + ')" style="margin:0 auto;cursor:pointer" class="img-fluid rounded mx-auto d-block mt-2 hovers" height="20" width="20" src="/Content/images/pngimages/push.png" /></div>';
                        }
                        //var imagerenderersedit1 = function (row, datafield, value) {
                        //    return '<div class="form-inline"><img onclick="methods.InvoiceConvertPass(' + row + ')" style="margin:0 auto;cursor:pointer" class="img-fluid rounded mx-auto d-block mt-2 hovers" height="20" width="20" src="/Content/images/pngimages/pdf.png" /></div>';
                        //}
                        var imagerenderersedit2 = function (row, datafield, value) {
                            return '<div class="form-inline"><img onclick="methods.ShowImagePreview(' + row + ')" style="margin:0 auto;cursor:pointer" class="img-fluid rounded mx-auto d-block mt-2 hovers" height="20" width="20" src="/Content/images/pngimages/gallery.png" /></div>';
                        }
                        var imagerenderersedit4 = function (row, datafield, value) {
                            return '<div class="form-inline"><img onclick="methods.ShowFilePreview(' + row + ')" style="margin:0 auto;cursor:pointer" class="img-fluid rounded mx-auto d-block mt-2 hovers" height="20" width="20" src="/Content/images/pngimages/file.png" /></div>';

                        }
                        var imagerenderersedit5 = function (row, datafield, value) {
                            return '<div class="form-inline"><img onclick="methods.InvoiceOpen(' + row + ')" style="margin:0 auto;cursor:pointer" class="img-fluid rounded mx-auto d-block mt-2 hovers" height="20" width="20" src="/Content/images/pngimages/pdf.png" /></div>';

                        }


                        var imagerenderersedit6 = function (row, datafield, value) {
                            return '<div class="form-inline"><img onclick="methods.ShowimageattachPreview(' + row + ')" style="margin:0 auto;cursor:pointer" class="img-fluid rounded mx-auto d-block mt-2 hovers" height="20" width="20" src="/Content/images/pngimages/file.png" /></div>';

                        }

                        var cellclass = function (row, columnfield, value) {
                            var rowData = gridf5view.jqxGrid('getrowdata', row);
                            var SPickupDate = rowData.SPickupDate;
                            var SETA = rowData.SETA;
                            var SOETA = rowData.SOETA;

                            var Jobid = rowData.JobMasterRefId;
                            if (SPickupDate != "" && (SETA != "" || SOETA != "")) {
                                return null;
                            }

                            else if (SPickupDate == "" && SETA == "" && SOETA == "") {
                                return 'red';
                            }
                            else if (SPickupDate == "") {
                                return 'yellow';
                            }
                            else {
                                if (Jobid == 10) {
                                    return null;
                                }
                                else {
                                    return 'green';
                                }
                            }
                        };



                        gridf5view.jqxGrid(
                            {
                                width: '100%',
                                height: '75%',
                                rowsheight: 25,
                                columnsheight: 25,
                                //pageable: true,
                                //  sortable: true,
                                columnsautoresize: true,
                                columnsresize: true,
                                scrollmode: 'deferred',
                                enablehover: false,
                                editable: false,
                                theme: 'classic',
                                showaggregates: true,
                                editmode: 'selectedcell',
                                keyboardnavigation: true,
                                filterable: true,
                                //   filtermode: 'advanced',
                                //  showfilterrow: true,
                                selectionmode: 'singlecell',
                                rowdetails: true,
                                initrowdetails: initrowdetails,
                                rowdetailstemplate: { rowdetails: "<div id='grid' style='margin: 10px;'></div>", rowdetailsheight: 220, rowdetailshidden: true },
                                //  pagesizeoptions: ['50', '100', '500', '1000'],
                                // pagesize: 50,
                                source: source,
                                //gridComplete: function () {
                                //    var rows = $("#" + mygrid).getDataIDs();
                                //    for (var i = 0; i < rows.length; i++) {
                                //        var status = $("#" + mygrid).getCell(rows[i], "Remarks");
                                //        if (status == "") {
                                //            $("#" + mygrid).jqGrid('setRowData', rows[i], false, { color: 'white', weightfont: 'bold', background: 'blue' });
                                //        }
                                //        else {
                                //            $("#" + mygrid).jqGrid('setRowData', rows[i], false, { color: 'white', weightfont: 'bold', background: 'red' });
                                //        }
                                //    }
                                //},
                                columns: [
                                    {
                                        text: 'S.No', sortable: false, filterable: false, editable: false,
                                        groupable: false, draggable: false, resizable: false,
                                        datafield: 'SNo', columntype: 'number', width: 50, hidden: false, pinned: true,
                                        cellsrenderer: function (row, column, value) {
                                            return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                                        }
                                    },
                                    { text: 'Status', datafield: 'JobStatus', width: 180, cellclassname: cellclass, },
                                    { text: 'BillTime', datafield: 'BillTime', width: 180, cellclassname: cellclass, },
                                    { text: 'Customer Name', datafield: 'CustomerName', width: 180, cellclassname: cellclass, },
                                    { text: 'Order No', datafield: 'BillNoDisplay', width: 100, cellclassname: cellclass, },
                                    { text: 'Employee Name', datafield: 'EmployeeName', width: 180, cellclassname: cellclass, },
                                    { text: 'Loadingvesselname', datafield: 'Loadingvesselname', width: 180, cellclassname: cellclass, },
                                    { text: 'L ETA', datafield: 'SETA', width: 80, cellsalign: 'left', width: 160, cellsformat: 'd2', cellclassname: cellclass, },
                                    { text: 'L ETB', datafield: 'SETB', width: 80, cellsalign: 'left', width: 160, cellsformat: 'd2', cellclassname: cellclass, },
                                    { text: 'Offvesselname', datafield: 'Offvesselname', width: 180, cellclassname: cellclass, },
                                    { text: 'O ETA', datafield: 'SOETA', width: 80, cellsalign: 'left', width: 160, cellsformat: 'd2', cellclassname: cellclass, },
                                    { text: 'O ETB', datafield: 'SOETB', width: 80, cellsalign: 'left', width: 160, cellsformat: 'd2', cellclassname: cellclass, },
                                    { text: 'PORT', datafield: 'SPort', width: 80, cellsalign: 'left', width: 120, cellsformat: 'd2', cellclassname: cellclass, },
                                    { text: 'Order Date', datafield: 'BillDate', cellsformat: 'dd/MM/yyyy', width: 90, cellclassname: cellclass, hidden: false },
                                    { text: 'Invoice No', datafield: 'InvoiceNo', width: 130, cellclassname: cellclass, },
                                    { text: 'Job Type', datafield: 'JobType', width: 130, cellclassname: cellclass, },
                                    { text: 'QNE NO', datafield: 'QNECode', width: 120, cellclassname: cellclass, },
                                    { text: 'QNE ID', datafield: 'QNEId', width: 120, cellclassname: cellclass, },
                                    { text: 'Remarks', datafield: 'Remarks', cellclassname: cellclass, hidden: false },
                                    { text: 'Origin', datafield: 'Origin', width: 90, cellclassname: cellclass, hidden: false },
                                    { text: 'Destination', datafield: 'Destination', width: 90, cellclassname: cellclass, hidden: false },
                                    { text: 'Amount', datafield: 'NetAmt', cellsalign: 'right', cellsformat: 'd2', cellclassname: cellclass, hidden: false },
                                    { text: 'PO', datafield: 'PoF', width: 50, columntype: 'Image', cellsalign: 'center', hidden: true, pinned: false, cellsrenderer: imagerenderersedit3 },
                                    { text: 'DO', datafield: 'DoF', width: 50, columntype: 'Image', cellsalign: 'center', hidden: false, pinned: false, cellsrenderer: imagerenderersedit },
                                    { text: 'INVOICE', datafield: 'INV', width: 50, columntype: 'Image', cellsalign: 'center', hidden: ColumnVisible, pinned: false, cellsrenderer: imagerenderersedit5 },
                                    //{ text: 'INVOICE', datafield: 'InvoiceF', width: 80, columntype: 'Image', cellsalign: 'center', hidden: false, pinned: false, cellsrenderer: imagerenderersedit1 },
                                    { text: 'Preview', datafield: 'Preview', width: 80, columntype: 'Image', cellsalign: 'center', hidden: false, pinned: false, cellsrenderer: imagerenderersedit2 },
                                    { text: 'Attach', datafield: 'Attach', width: 80, columntype: 'Image', cellsalign: 'center', hidden: false, pinned: false, cellsrenderer: imagerenderersedit4 },
                                    { text: 'Imageuplaod', datafield: 'Imageuplaod', width: 80, columntype: 'Image', cellsalign: 'center', hidden: false, pinned: false, cellsrenderer: imagerenderersedit4 },
                                    { text: 'SPickupDate', datafield: 'SPickupDate', width: 80, cellsalign: 'right', cellsformat: 'd2', hidden: true },
                                    { text: 'Id', datafield: 'Id', hidden: true },
                                    { text: 'InvoiceId', datafield: 'InvoiceId', hidden: true },
                                    { text: 'JobMasterRefId', datafield: 'JobMasterRefId', hidden: true }

                                ]
                            });
                        var localizationobj = {};
                        localizationobj.thousandsseparator = "";
                        gridf5view.jqxGrid('localizestrings', localizationobj);
                        F5ViewWindow("#F5Viewwindow", true);

                    },
                    error: function (error) {
                        $('#jqxLoader').jqxLoader('open');
                        MsgBox('Technical Fault Contact Software Vendor  !!!.');
                    }

                });
            },
            FileRefresh: function (data) {

                $("#filebrowser").val('');
                $("#fileList").empty();
            },
            FilePreview: function () {
                const input = document.getElementById('filebrowser');
                const fileList = document.getElementById('fileList');
                fileList.innerHTML = '';
                const files = input.files;
                if (files.length === 0) {
                    fileList.innerHTML = '<p>No files selected</p>';
                    return;
                }

                const ul = document.createElement('ul');
                if (files.length > 0) {
                    for (let i = 0; i < files.length; i++) {
                        const li = document.createElement('li');
                        li.textContent = files[i].name;

                        ul.appendChild(li);
                    }
                }
                fileList.appendChild(ul);
            },
            fileupload: function (response) {
                var data = new FormData();
                var files = $("#filebrowser").get(0).files;
                if (files.length > 0) {
                    for (var i = 0; i < files.length; i++) {
                        data.append("MyImages" + i, files[i]);
                    }
                }

                var responseId = 0;
                if (typeof response === "object" && response !== null) {
                    responseId = response.Id || response.id || 0;
                } else if (typeof response === "number") {
                    responseId = response;
                }

                var DeleteFileName = deletesourcelist.map(x => x.FilePath).join(",").toString();
                $.ajax({
                    url: "/Common/UploadFile2",
                    type: "POST",
                    processData: false,
                    contentType: false,
                    data: data,
                    headers: { 'Comid': Comid, 'Id': responseId, 'FolderName': 'SalesOrder', 'FileName': '', 'DeleteFileName': DeleteFileName },
                    success: function (response) {
                        $('#jqxLoader').jqxLoader('close');

                        //var data = {};
                        //EditStatus = 0;
                        //methods.Clear();
                        //cmbJobtype.jqxComboBox('clearSelection');
                        //setTimeout(function () { cmbJobtype.jqxComboBox('focus'); }, 500);
                    },
                    error: function (er) {
                        MsgBox('Technical Fault Contact Software Vendor  !!!.');
                    }
                });
            },
            loadfun: function () {
              
                $("#lblviewCount").text(masterdata1.length);
                var total = 0;
                $("#lblviewamt").text(total.toFixed(2));
                var source =
                {
                    localdata: masterdata1,
                    datatype: "local",
                    datafields:
                        [
                            { name: 'Id', type: 'number' },
                            { name: 'NetAmt', type: 'number' },
                            { name: 'EmployeeName', type: 'string' },
                            { name: 'QNECode', type: 'string' },
                            { name: 'QNEId', type: 'string' },
                            { name: 'BillDate', type: 'string' },
                            { name: 'BillTime', type: 'string' },
                            { name: 'CashierName', type: 'string' },
                            { name: 'BillNo', type: 'int' },
                            { name: 'BillNoDisplay', type: 'string' },
                            { name: 'InvoiceNo', type: 'string' },
                            { name: 'SaleType', type: 'string' },
                            { name: 'CustomerName', type: 'string' },
                            { name: 'Remarks', type: 'string' },
                            { name: 'SPickupDate', type: 'string' },
                            { name: 'SETA', type: 'string' },
                            { name: 'SETB', type: 'string' },
                            { name: 'SOETA', type: 'string' },
                            { name: 'SOETB', type: 'string' },
                            { name: 'SPort', type: 'string' },
                            { name: 'Offvesselname', type: 'string' },
                            { name: 'Loadingvesselname', type: 'string' },
                            { name: 'JobType', type: 'string' },
                            { name: 'JobStatus', type: 'string' },
                            { name: 'JobMasterRefId', type: 'number' },


                        ],
                    id: 'Id'
                };
                var masterdataAdapter = new $.jqx.dataAdapter(source);
                var detailssource =
                {
                    localdata: detailsdata1,
                    datatype: "local",
                    datafields:
                        [
                            { name: 'DiscountAmt', type: 'number' },
                            { name: 'DiscountPercent', type: 'number' },
                            { name: 'ItemQty', type: 'number' },
                            { name: 'MRP', type: 'number' },
                            { name: 'ProductCode', type: 'string' },
                            { name: 'SaleRate', type: 'number' },
                            { name: 'ProductName', type: 'string' },
                            { name: 'SDRemarks', type: 'string' },

                            { name: 'SaleRefId', type: 'number' },
                            { name: 'TaxAmt', type: 'number' },
                            { name: 'TaxPercent', type: 'number' },
                            { name: 'SAmount', type: 'number' },
                        ],
                    id: 'Id'
                };
                var detailsDataAdapter = new $.jqx.dataAdapter(detailssource, { autoBind: true });
                var orders = detailsDataAdapter.records;

                var nestedGrids = new Array();
                var initrowdetails = function (index, parentElement, gridElement, record) {
                    var id = record.uid.toString();
                    var grid = $($(parentElement).children()[0]);
                    nestedGrids[index] = grid;
                    var filtergroup = new $.jqx.filter();
                    var filter_or_operator = 1;
                    var filtervalue = id;
                    var filtercondition = 'equal';
                    var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                    var ordersbyid = [];
                    for (var m = 0; m < orders.length; m++) {
                        var result = filter.evaluate(orders[m]["SaleRefId"]);
                        if (result)
                            ordersbyid.push(orders[m]);
                    }

                    var orderssource = {
                        datafields:
                            [
                                { name: 'DiscountAmt', type: 'number' },
                                { name: 'DiscountPercent', type: 'number' },
                                { name: 'ItemQty', type: 'number' },
                                { name: 'MRP', type: 'number' },
                                { name: 'ProductCode', type: 'string' },
                                { name: 'SaleRate', type: 'number' },
                                { name: 'ProductName', type: 'string' },
                                { name: 'SDRemarks', type: 'string' },

                                { name: 'SaleRefId', type: 'number' },
                                { name: 'TaxAmt', type: 'number' },
                                { name: 'TaxPercent', type: 'number' },
                                { name: 'SAmount', type: 'number' },

                            ],
                        id: 'SaleRefId',
                        localdata: ordersbyid
                    }
                    var nestedGridAdapter = new $.jqx.dataAdapter(orderssource);

                    if (grid != null) {
                        grid.jqxGrid({
                            source: nestedGridAdapter, width: '100%',
                            height: '95%',
                            columnsautoresize: true,
                            columnsresize: true,
                            columns: [
                                { text: 'Code', datafield: 'ProductCode', width: 100 },
                                { text: 'Description', datafield: 'ProductName', width: 250 },
                                { text: 'Remarks', datafield: 'SDRemarks', width: 250 },

                                //{ text: 'MRP', datafield: 'MRP', width: 90, cellsalign: 'right', cellsformat: 'd2' },
                                { text: 'SaleRate', datafield: 'SaleRate', width: 90, cellsalign: 'right', cellsformat: 'd2' },
                                { text: 'Qty', datafield: 'ItemQty', width: 80, cellsalign: 'right', cellsformat: 'd2' },
                                { text: 'GST(%)', datafield: 'TaxPercent', width: 80, cellsalign: 'right', cellsformat: 'd2' },
                                { text: 'Amount', datafield: 'SAmount', width: 80, cellsalign: 'right', cellsformat: 'd2' },

                                //{ text: 'GSTAmt', datafield: 'TaxAmt', width: 90, cellsalign: 'right', cellsformat: 'd2' },
                                //{ text: 'Disc(%)', datafield: 'DiscountPercent', width: 80, cellsalign: 'right', cellsformat: 'd2' },
                                //{ text: 'DiscAmt', datafield: 'DiscountAmt', width: 90, cellsalign: 'right', cellsformat: 'd2' },
                            ]
                        });
                        localizationobj.thousandsseparator = "";
                        grid.jqxGrid('localizestrings', localizationobj);
                    }
                }
                var imagerenderersedit = function (row, datafield, value) {
                    return '<div class="form-inline"><img onclick="methods.DoConvert(' + row + ')" style="margin:0 auto;cursor:pointer" class="img-fluid rounded mx-auto d-block mt-2 hovers" height="20" width="20" src="/Content/images/pngimages/pdf.png" /></div>';
                }
                var imagerenderersedit3 = function (row, datafield, value) {
                    return '<div class="form-inline"><img onclick="methods.PoConvert(' + row + ')" style="margin:0 auto;cursor:pointer" class="img-fluid rounded mx-auto d-block mt-2 hovers" height="20" width="20" src="/Content/images/pngimages/push.png" /></div>';
                }
                //var imagerenderersedit1 = function (row, datafield, value) {
                //    return '<div class="form-inline"><img onclick="methods.InvoiceConvertPass(' + row + ')" style="margin:0 auto;cursor:pointer" class="img-fluid rounded mx-auto d-block mt-2 hovers" height="20" width="20" src="/Content/images/pngimages/pdf.png" /></div>';
                //}
                var imagerenderersedit2 = function (row, datafield, value) {
                    return '<div class="form-inline"><img onclick="methods.ShowImagePreview(' + row + ')" style="margin:0 auto;cursor:pointer" class="img-fluid rounded mx-auto d-block mt-2 hovers" height="20" width="20" src="/Content/images/pngimages/gallery.png" /></div>';

                }
                var cellclass = function (row, columnfield, value) {
                    var rowData = gridf5view.jqxGrid('getrowdata', row);
                    var SPickupDate = rowData.SPickupDate;
                    var SETA = rowData.SETA;
                    var SOETA = rowData.SOETA;

                    var Jobid = rowData.JobMasterRefId;
                    if (SPickupDate != "" && (SETA != "" || SOETA != "")) {
                        return null;
                    }

                    else if (SPickupDate == "" && SETA == "" && SOETA == "") {
                        return 'red';
                    }
                    else if (SPickupDate == "") {
                        return 'yellow';
                    }
                    else {
                        if (Jobid == 10) {
                            return null;
                        }
                        else {
                            return 'green';
                        }
                    }
                };
                gridf5view.jqxGrid(
                    {
                        width: '100%',
                        height: '62%',
                        rowsheight: 25,
                        columnsheight: 25,
                        //showfilterrow: true,
                        //filterable: true,
                        // pageable: true,
                        //   sortable: true,
                        columnsautoresize: true,
                        columnsresize: true,
                        scrollmode: 'deferred',
                        enablehover: false,
                        editable: false,
                        theme: 'classic',
                        showaggregates: true,
                        editmode: 'selectedcell',
                        keyboardnavigation: true,
                        selectionmode: 'singlecell',
                        rowdetails: true,
                        initrowdetails: initrowdetails,
                        rowdetailstemplate: { rowdetails: "<div id='grid' style='margin: 10px;'></div>", rowdetailsheight: 220, rowdetailshidden: true },
                        //  pagesizeoptions: ['50', '100', '500', '1000'],
                        // pagesize: 50,
                        source: source,
                        //gridComplete: function () {
                        //    var rows = $("#" + mygrid).getDataIDs();
                        //    for (var i = 0; i < rows.length; i++) {
                        //        var status = $("#" + mygrid).getCell(rows[i], "Remarks");
                        //        if (status == "") {
                        //            $("#" + mygrid).jqGrid('setRowData', rows[i], false, { color: 'white', weightfont: 'bold', background: 'blue' });
                        //        }
                        //        else {
                        //            $("#" + mygrid).jqGrid('setRowData', rows[i], false, { color: 'white', weightfont: 'bold', background: 'red' });
                        //        }
                        //    }
                        //},
                        columns: [
                            {
                                text: 'S.No', sortable: false, filterable: false, editable: false,
                                groupable: false, draggable: false, resizable: false,
                                datafield: 'SNo', columntype: 'number', width: 50, hidden: false, pinned: true,
                                cellsrenderer: function (row, column, value) {
                                    return "<div style='margin:4px;'>" + (value + 1) + "</div>";
                                }
                            },
                            { text: 'Status', datafield: 'JobStatus', width: 180, cellclassname: cellclass, },
                            { text: 'BillTime', datafield: 'BillTime', width: 180, cellclassname: cellclass, },
                            { text: 'Employee Name', datafield: 'EmployeeName', width: 180, cellclassname: cellclass, },
                            { text: 'Loadingvesselname', datafield: 'Loadingvesselname', width: 180, cellclassname: cellclass, },
                            { text: 'L ETA', datafield: 'SETA', width: 80, cellsalign: 'left', width: 160, cellsformat: 'd2', cellclassname: cellclass, },
                            { text: 'L ETB', datafield: 'SETB', width: 80, cellsalign: 'left', width: 160, cellsformat: 'd2', cellclassname: cellclass, },
                            { text: 'Offvesselname', datafield: 'Offvesselname', width: 180, cellclassname: cellclass, },
                            { text: 'O ETA', datafield: 'SOETA', width: 80, cellsalign: 'left', width: 160, cellsformat: 'd2', cellclassname: cellclass, },
                            { text: 'O ETB', datafield: 'SOETB', width: 80, cellsalign: 'left', width: 160, cellsformat: 'd2', cellclassname: cellclass, },
                            { text: 'PORT', datafield: 'SPort', width: 80, cellsalign: 'left', width: 120, cellsformat: 'd2', cellclassname: cellclass, },
                            { text: 'Customer Name', datafield: 'CustomerName', width: 180, cellclassname: cellclass, },
                            { text: 'Order No', datafield: 'BillNoDisplay', width: 100, cellclassname: cellclass, },
                            { text: 'Order Date', datafield: 'BillDate', cellsformat: 'dd/MM/yyyy', width: 90, cellclassname: cellclass, hidden: false },
                            { text: 'Invoice No', datafield: 'InvoiceNo', width: 120, cellclassname: cellclass, },
                            { text: 'Job Type', datafield: 'JobType', width: 130, cellclassname: cellclass, },
                            { text: 'QNE NO', datafield: 'QNECode', width: 120, cellclassname: cellclass, },
                            { text: 'QNE ID', datafield: 'QNEId', width: 120, cellclassname: cellclass, },
                            { text: 'Remarks', datafield: 'Remarks', cellclassname: cellclass, hidden: false },
                            { text: 'Amount', datafield: 'NetAmt', cellsalign: 'right', cellsformat: 'd2', cellclassname: cellclass, hidden: true },
                            { text: 'PO', datafield: 'PoF', width: 50, columntype: 'Image', cellsalign: 'center', hidden: false, pinned: false, cellsrenderer: imagerenderersedit3 },
                            { text: 'DO', datafield: 'DoF', width: 50, columntype: 'Image', cellsalign: 'center', hidden: false, pinned: false, cellsrenderer: imagerenderersedit },
                            //{ text: 'INVOICE', datafield: 'InvoiceF', width: 80, columntype: 'Image', cellsalign: 'center', hidden: false, pinned: false, cellsrenderer: imagerenderersedit1 },
                            { text: 'Preview', datafield: 'ImagePreview', width: 80, columntype: 'Image', cellsalign: 'center', hidden: false, pinned: false, cellsrenderer: imagerenderersedit2 },
                            { text: 'SPickupDate', datafield: 'SPickupDate', width: 80, cellsalign: 'right', cellsformat: 'd2', hidden: true },
                            { text: 'Id', datafield: 'Id', hidden: true },
                            { text: 'JobMasterRefId', datafield: 'JobMasterRefId', hidden: true }

                        ]
                    });
                var localizationobj = {};
                localizationobj.thousandsseparator = "";
                gridf5view.jqxGrid('localizestrings', localizationobj);
            },
            ExcelDownload: function (objlist) {
                var data1 = objlist.Data[0].salemaster;
                var data2;
                if (data1 != null) {
                    if (data1.length != 0) {  //Add decimal places
                        data1.forEach((obj, index) => {
                            obj = $.extend(obj, { ['Status']: obj['JobStatus'] });
                            obj = $.extend(obj, { ['BillTime']: obj['BillTime'] });
                            obj = $.extend(obj, { ['Employee Name']: obj['EmployeeName'] });
                            obj = $.extend(obj, { ['Loadingvesselname']: obj['Loadingvesselname'] });
                            obj = $.extend(obj, { ['L ETA']: obj['SETA'] });
                            obj = $.extend(obj, { ['L ETB']: obj['SETB'] });
                            obj = $.extend(obj, { ['Offvesselname']: obj['Offvesselname'] });
                            obj = $.extend(obj, { ['O ETA']: obj['SOETA'] });
                            obj = $.extend(obj, { ['O ETB']: obj['SOETB'] });
                            obj = $.extend(obj, { ['PORT']: obj['SPort'] });
                            obj = $.extend(obj, { ['Customer Name']: obj['CustomerName'] });
                            obj = $.extend(obj, { ['Order No']: obj['BillNoDisplay'] });
                            obj = $.extend(obj, { ['Invoice No']: obj['InvoiceNo'] });
                            obj = $.extend(obj, { ['QNE NO']: obj['QNECode'] });
                            obj = $.extend(obj, { ['QNE ID']: obj['QNEId'] });
                            //obj = $.extend(obj, { ['Order Date']: obj['BillDate'] });
                            //obj = $.extend(obj, { ['Amount']: parseFloat(obj['NetAmt']).toFixed(2) });
                            obj = $.extend(obj, { ['Remarks']: obj['Remarks'] });
                        })
                    }
                }
                alasql("SELECT Status,BillTime,[Employee Name],Loadingvesselname,[L ETA],[L ETB],Offvesselname,[O ETA],[O ETB],PORT,[Customer Name],[Order No],[Invoice No],[QNE NO],[QNE ID],[Remarks] INTO XLSX('SaleView.xlsx',{headers:true}) FROM ? ", [data1]);
            },
            SaleOrderEdit: function (Sid, SRNo) {

                if (pageedit == 0) {
                    MsgBox("Page Edit Permission Denied !!!.");
                    return;
                }
                var status = "";

                if (status == "") {
                    $('#jqxLoader').jqxLoader('open');
                    var getdata = {};
                    var objlist = {};
                    $.ajax({

                        url: "/SaleOrder/EditSaleOrder",
                        type: "POST",
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        data: '{"Id":' + Sid + ',"SaleReturnNo":' + SRNo + ',"Comid":' + Comid + '}',
                        success: function (data) {
                            if (data.ok == false) {
                                MsgBox(data.message);
                                return;
                            }

                            getdata = data.Data;
                            EditStatus = 1;
                            $('#jqxLoader').jqxLoader('close');
                            if (getdata.length != 0) {
                                methods.Clear();
                                var saledetails = getdata[0].SaleDetails;
                                var salemaster = getdata[0];

                                var saleamountdetails = [];
                                //  var saleamountdetails = getdata[0].saleamountdetails;
                                methods.saleordereditloaddetails(salemaster, saledetails, saleamountdetails, false);
                                EditStatus = 0;
                            }
                        },
                        error: function (xhr, err) {
                            var responseTitle = $(xhr.responseText).filter('title').get(0);
                            MsgBox($(responseTitle).text() + "\n" + formatErrorMessage(xhr, err));

                        }
                    });
                }

            },
            FilePreview1: function (Id) {

                $.ajax({
                    url: "/Common/FetchFile2",
                    type: "POST",
                    processData: false,
                    contentType: false,
                    headers: { 'Comid': Comid, 'Id': Id, 'FolderName': 'SalesOrder', 'FileName': '' },
                    success: function (response) {
                        const baseUrl = "https://maleva.my/";

                        const fileList2 = document.getElementById('fileList2');
                        fileList2.innerHTML = '';

                        const files = response.Data;

                        const ul = document.createElement('ul');

                        if (files.length > 0) {
                            for (let i = 0; i < files.length; i++) {
                                const li = document.createElement('li');
                                const fileUrl = baseUrl + encodeURIComponent(files[i]); // encode filename
                                li.textContent = files[i];

                                li.addEventListener('click', function () {
                                    // Wait a bit to see if a double click comes
                                    clearTimeout(li.clickTimer);
                                    li.clickTimer = setTimeout(function () {
                                        window.open(fileUrl, '_blank'); // open file only if no double click
                                    }, 250); // 250 ms delay works well
                                });

                                li.addEventListener('dblclick', function () {
                                    // If double clicked, cancel single-click action
                                    clearTimeout(li.clickTimer);
                                    if (confirm('Do you want to delete this file?')) {
                                        $.ajax({
                                            url: "/Common/DeleteFile",
                                            type: "POST",
                                            processData: false,
                                            contentType: false,
                                            headers: {
                                                'Comid': Comid,
                                                'Id': Id,
                                                'FolderName': 'SalesOrder',
                                                'FileName': files[i]
                                            },
                                            success: function (deleteResponse) {
                                                if (deleteResponse.ok) {
                                                    alert('File deleted successfully!');
                                                    li.remove();
                                                } else {
                                                    alert('Failed to delete file.');
                                                }
                                            },
                                            error: function () {
                                                alert('Error deleting file!');
                                            }
                                        });
                                    }
                                });


                                li.addEventListener('contextmenu', function (event) {
                                    event.preventDefault();
                                    window.open(fileUrl, '_blank'); // just use fileUrl
                                });

                                ul.appendChild(li);
                            }
                        } else {
                            const li = document.createElement('li');
                            li.textContent = "No files available.";
                            ul.appendChild(li);
                        }

                        fileList2.appendChild(ul);
                    },

                    error: function (er) {
                        //  MsgBox('Technical Fault Contact Software Vendor  !!!.');
                    }
                });

            },
            ShowFilePreview: function (row) {
                editrow = row;
                if (editrow >= 0) {

                    FileattachId = gridf5view.jqxGrid('getcellvalue', editrow, 'Id');
                    FilePreviewWindow();
                    methods.FilePreview1(FileattachId);


                }
            },
            ShowImagePreview: function (row) {
                editrow = row;
                if (editrow >= 0) {

                    var SoId = gridf5view.jqxGrid('getcellvalue', editrow, 'Id');
                    ImageSaleId = SoId;
                    ImagePreviewWindow();

                }
            },
            imagePreview1: function (FilePath, Id) {
                $("#preview-container").empty();

                editsourcelist = [];
                var pickuplist = [];
                FilePath.split(",").forEach(c => pickuplist.push({ 'FilePath': c, 'Id': Id, }));
                if (pickuplist.length > 0) {
                    for (var i = 0; i < pickuplist.length; i++) {
                        editsourcelist.push({ 'FilePath': pickuplist[i].FilePath, 'Id': 'im' + i + '', });
                        $("<div class='preview1' id='pv" + i + "'><img class='imgpv' onclick=methods.Openimage(\"" + pickuplist[i].FilePath + "\") id='im" + i + "' src='" + pickuplist[i].FilePath + "'></div>").appendTo("#preview-container");
                        // $("<div class='preview1' id='pv" + i + "'><img class='imgpv' onclick='openImageInNewTab(\"" + pickuplist[i].FilePath + "\")' id='im" + i + "' src='" + pickuplist[i].FilePath + "'></div>").appendTo("#preview-container");

                    }
                }
            },
            Openimage: function (url) {
                window.open(url, '_blank');
            }
        };

    })();
    window.methods = methods;
    methods.init();

});
