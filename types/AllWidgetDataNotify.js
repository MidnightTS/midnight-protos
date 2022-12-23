"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllWidgetDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AnchorPointData_1 = require("./AnchorPointData");
const WeatherWizardData_1 = require("./WeatherWizardData");
const ClientCollectorData_1 = require("./ClientCollectorData");
const SkyCrystalDetectorData_1 = require("./SkyCrystalDetectorData");
const WidgetCoolDownData_1 = require("./WidgetCoolDownData");
const WidgetSlotData_1 = require("./WidgetSlotData");
const OneoffGatherPointDetectorData_1 = require("./OneoffGatherPointDetectorData");
const LunchBoxData_1 = require("./LunchBoxData");
// @generated message type with reflection information, may provide speed optimized methods
class AllWidgetDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AllWidgetDataNotify", [
            { no: 5, name: "next_anchor_point_usable_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "lunch_box_data", kind: "message", T: () => LunchBoxData_1.LunchBoxData },
            { no: 14, name: "oneoff_gather_point_detector_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => OneoffGatherPointDetectorData_1.OneoffGatherPointDetectorData },
            { no: 6, name: "slot_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WidgetSlotData_1.WidgetSlotData },
            { no: 9, name: "background_active_widget_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cool_down_group_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WidgetCoolDownData_1.WidgetCoolDownData },
            { no: 4, name: "sky_crystal_detector_data", kind: "message", T: () => SkyCrystalDetectorData_1.SkyCrystalDetectorData },
            { no: 7, name: "client_collector_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ClientCollectorData_1.ClientCollectorData },
            { no: 15, name: "weather_wizard_data", kind: "message", T: () => WeatherWizardData_1.WeatherWizardData },
            { no: 10, name: "normal_cool_down_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WidgetCoolDownData_1.WidgetCoolDownData },
            { no: 13, name: "anchor_point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AnchorPointData_1.AnchorPointData }
        ]);
    }
    create(value) {
        const message = { nextAnchorPointUsableTime: 0, oneoffGatherPointDetectorDataList: [], slotList: [], backgroundActiveWidgetList: [], coolDownGroupDataList: [], clientCollectorDataList: [], normalCoolDownDataList: [], anchorPointList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 next_anchor_point_usable_time */ 5:
                    message.nextAnchorPointUsableTime = reader.uint32();
                    break;
                case /* LunchBoxData lunch_box_data */ 1:
                    message.lunchBoxData = LunchBoxData_1.LunchBoxData.internalBinaryRead(reader, reader.uint32(), options, message.lunchBoxData);
                    break;
                case /* repeated OneoffGatherPointDetectorData oneoff_gather_point_detector_data_list */ 14:
                    message.oneoffGatherPointDetectorDataList.push(OneoffGatherPointDetectorData_1.OneoffGatherPointDetectorData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated WidgetSlotData slot_list */ 6:
                    message.slotList.push(WidgetSlotData_1.WidgetSlotData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 background_active_widget_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.backgroundActiveWidgetList.push(reader.uint32());
                    else
                        message.backgroundActiveWidgetList.push(reader.uint32());
                    break;
                case /* repeated WidgetCoolDownData cool_down_group_data_list */ 3:
                    message.coolDownGroupDataList.push(WidgetCoolDownData_1.WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* SkyCrystalDetectorData sky_crystal_detector_data */ 4:
                    message.skyCrystalDetectorData = SkyCrystalDetectorData_1.SkyCrystalDetectorData.internalBinaryRead(reader, reader.uint32(), options, message.skyCrystalDetectorData);
                    break;
                case /* repeated ClientCollectorData client_collector_data_list */ 7:
                    message.clientCollectorDataList.push(ClientCollectorData_1.ClientCollectorData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* WeatherWizardData weather_wizard_data */ 15:
                    message.weatherWizardData = WeatherWizardData_1.WeatherWizardData.internalBinaryRead(reader, reader.uint32(), options, message.weatherWizardData);
                    break;
                case /* repeated WidgetCoolDownData normal_cool_down_data_list */ 10:
                    message.normalCoolDownDataList.push(WidgetCoolDownData_1.WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated AnchorPointData anchor_point_list */ 13:
                    message.anchorPointList.push(AnchorPointData_1.AnchorPointData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 next_anchor_point_usable_time = 5; */
        if (message.nextAnchorPointUsableTime !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.nextAnchorPointUsableTime);
        /* LunchBoxData lunch_box_data = 1; */
        if (message.lunchBoxData)
            LunchBoxData_1.LunchBoxData.internalBinaryWrite(message.lunchBoxData, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated OneoffGatherPointDetectorData oneoff_gather_point_detector_data_list = 14; */
        for (let i = 0; i < message.oneoffGatherPointDetectorDataList.length; i++)
            OneoffGatherPointDetectorData_1.OneoffGatherPointDetectorData.internalBinaryWrite(message.oneoffGatherPointDetectorDataList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated WidgetSlotData slot_list = 6; */
        for (let i = 0; i < message.slotList.length; i++)
            WidgetSlotData_1.WidgetSlotData.internalBinaryWrite(message.slotList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 background_active_widget_list = 9; */
        if (message.backgroundActiveWidgetList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.backgroundActiveWidgetList.length; i++)
                writer.uint32(message.backgroundActiveWidgetList[i]);
            writer.join();
        }
        /* repeated WidgetCoolDownData cool_down_group_data_list = 3; */
        for (let i = 0; i < message.coolDownGroupDataList.length; i++)
            WidgetCoolDownData_1.WidgetCoolDownData.internalBinaryWrite(message.coolDownGroupDataList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* SkyCrystalDetectorData sky_crystal_detector_data = 4; */
        if (message.skyCrystalDetectorData)
            SkyCrystalDetectorData_1.SkyCrystalDetectorData.internalBinaryWrite(message.skyCrystalDetectorData, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated ClientCollectorData client_collector_data_list = 7; */
        for (let i = 0; i < message.clientCollectorDataList.length; i++)
            ClientCollectorData_1.ClientCollectorData.internalBinaryWrite(message.clientCollectorDataList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* WeatherWizardData weather_wizard_data = 15; */
        if (message.weatherWizardData)
            WeatherWizardData_1.WeatherWizardData.internalBinaryWrite(message.weatherWizardData, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated WidgetCoolDownData normal_cool_down_data_list = 10; */
        for (let i = 0; i < message.normalCoolDownDataList.length; i++)
            WidgetCoolDownData_1.WidgetCoolDownData.internalBinaryWrite(message.normalCoolDownDataList[i], writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated AnchorPointData anchor_point_list = 13; */
        for (let i = 0; i < message.anchorPointList.length; i++)
            AnchorPointData_1.AnchorPointData.internalBinaryWrite(message.anchorPointList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AllWidgetDataNotify
 */
exports.AllWidgetDataNotify = new AllWidgetDataNotify$Type();
