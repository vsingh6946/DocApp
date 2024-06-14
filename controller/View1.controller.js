sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/format/DateFormat",
    "sap/ui/model/json/JSONModel",
    "sap/ui/unified/library",
    "sap/m/library",
    "sap/ui/core/date/UI5Date",
    "sap/ui/core/library",
],
    function (Controller, MessageToast, DateFormat, JSONModel, unifiedLibrary, mobileLibrary, UI5Date, coreLibrary) {
        "use strict";
        var CalendarDayType = unifiedLibrary.CalendarDayType;
        var ValueState = coreLibrary.ValueState;
        var StickyMode = mobileLibrary.PlanningCalendarStickyMode;
        return Controller.extend("project1.controller.View1", {
            onInit: function () {

                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData({
                    startDate: UI5Date.getInstance("2024", "6", "15"),

                    appointments: [{
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "15", "8", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "15", "9", "0")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "15", "10", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "15", "11", "0")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "15", "11", "30"),
                        endDate: UI5Date.getInstance("2024", "6", "15", "12", "30")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "15", "16", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "15", "17", "0")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "16", "8", "30"),
                        endDate: UI5Date.getInstance("2024", "6", "16", "9", "30")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "16", "10", "30"),
                        endDate: UI5Date.getInstance("2024", "6", "16", "11", "30")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        tentative: true,
                        startDate: UI5Date.getInstance("2024", "6", "16", "11", "30"),
                        endDate: UI5Date.getInstance("2024", "6", "16", "12", "30")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "16", "17", "00"),
                        endDate: UI5Date.getInstance("2024", "6", "16", "18", "00")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "17", "13", "9"),
                        endDate: UI5Date.getInstance("2024", "6", "17", "13", "9")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "17", "14", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "17", "14", "15")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "17", "14", "15"),
                        endDate: UI5Date.getInstance("2024", "6", "17", "14", "30")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "17", "14", "10"),
                        endDate: UI5Date.getInstance("2024", "6", "17", "15", "30")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "18", "6", "30"),
                        endDate: UI5Date.getInstance("2024", "6", "18", "7", "0")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "18", "7", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "18", "8", "0")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "18", "8", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "18", "9", "0")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "18", "9", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "18", "10", "0")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "18", "11", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "18", "14", "0")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "19", "9", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "19", "9", "15", "0")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "19", "9", "9"),
                        endDate: UI5Date.getInstance("2024", "6", "19", "9", "20")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "19", "6", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "19", "7", "0")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "19", "15", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "19", "15", "30")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        icon: "sap-icon://home",
                        startDate: UI5Date.getInstance("2024", "6", "19", "7", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "19", "7", "30")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "20", "8", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "20", "9", "30")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "20", "8", "30"),
                        endDate: UI5Date.getInstance("2024", "6", "20", "12", "0")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "20", "4", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "20", "12", "30")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "20", "15", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "20", "19", "30")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "20", "20", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "20", "21", "30")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type09,
                        text: "out of office",
                        startDate: UI5Date.getInstance("2024", "6", "20", "12", "0"),
                        endDate: UI5Date.getInstance("2024", "6", "20", "14", "0")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type09,
                        startDate: UI5Date.getInstance("2024", "6", "20", "00", "00"),
                        endDate: UI5Date.getInstance("2024", "6", "20", "00", "00")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "20", "00", "00"),
                        endDate: UI5Date.getInstance("2024", "6", "20", "00", "00")
                    }, {
                        title: "Available",
                        type: CalendarDayType.Type08,
                        startDate: UI5Date.getInstance("2024", "6", "20", "00", "00"),
                        endDate: UI5Date.getInstance("2024", "6", "20", "00", "00")
                    }
                    ]
                });

                this.getView().setModel(oModel);

                oModel = new JSONModel();
                oModel.setData({ allDay: false });
                this.getView().setModel(oModel, "allDay");

                oModel = new JSONModel();
                oModel.setData({ stickyMode: StickyMode.None, enableAppointmentsDragAndDrop: true, enableAppointmentsResize: true, enableAppointmentsCreate: true });
                this.getView().setModel(oModel, "settings");
            },
            onBookAppointment: function (oEvent) {
                if (this.getView().byId("patientName").getValue() === "" || this.getView().byId("idDatePicker").getValue() === "") {
                    sap.m.MessageBox.error("Please fill the required details");
                    return;
                }
                if (this.getView().byId("idDatePicker").getValueState() == "Error") {
                    sap.m.MessageBox.error("Slot not available for selected Date and Time. Please check the available slots");
                    return;
                } else {
                    this.getView().byId("idHealthDesc").setValue("");
                    this.getView().byId("patientName").setValue("");
                    this.getView().byId("idDatePicker").setValue("");
                    this.getView().byId("idDatePicker").setValueState("None");
                    this.getView().byId("idDatePicker").setValueStateText("");
                    sap.m.MessageBox.success("Appointed booked successfully");
                }//Comment
            },  //test
            onCalendarViewPress: function () {
                this.getView().byId("idCalendar").setVisible(true);
                this.getView().byId("idCheckBtn").setVisible(false);
                // this.getView().byId("idHideBtn").setVisible(true);
            },
            
            onChangeDateTime: function (oEvent) {
                var enteredDate = this.getView().byId("idDatePicker").getValue();
                var modelData = this.getOwnerComponent().getModel("bookedSchedule").getData();
                var count = 0;
                for (var i = 0; i < modelData.length; i++) {
                    for (var z = 0; z < modelData[i].Time.split(",").length; z++) {
                        var jsonDateTime = modelData[i].Date + ", " + modelData[i].Time.split(", ")[z];
                        if (enteredDate === jsonDateTime) {
                            count++
                            break;

                        }
                    }
                    if (count !== 0) {
                        break;
                    }

                }
                if (count === 0) {
                    MessageToast.show("Slot not available for selected Date and Time");
                    this.getView().byId("idDatePicker").setValueState("Error");
                    this.getView().byId("idDatePicker").setValueStateText("Slot not available for selected Date and Time");
                } else {
                    this.getView().byId("idDatePicker").setValueState("None");
                    this.getView().byId("idDatePicker").setValueStateText("");
                }


            },
            onCheckSchedule: function (oEvent) {
                var oButton = oEvent.getSource();
                this.byId("actionSheet").openBy(oButton);
            },
            onTableViewPress: function () {
                this.getView().byId("idCalendar").setVisible(false);
                if (!this.message) {
                    this.message = sap.ui.xmlfragment("project1.fragment.schedule", this);
                    this.getView().addDependent(this.message);
                }
                this.message.open();
            }



            //  
        });
    });
