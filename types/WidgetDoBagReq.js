"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetDoBagReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WidgetCreatorInfo_1 = require("./WidgetCreatorInfo");
const WidgetCreateLocationInfo_1 = require("./WidgetCreateLocationInfo");
// @generated message type with reflection information, may provide speed optimized methods
class WidgetDoBagReq$Type extends runtime_5.MessageType {
    constructor() {
        super("WidgetDoBagReq", [
            { no: 11, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 434, name: "location_info", kind: "message", oneof: "opInfo", T: () => WidgetCreateLocationInfo_1.WidgetCreateLocationInfo },
            { no: 1338, name: "widget_creator_info", kind: "message", oneof: "opInfo", T: () => WidgetCreatorInfo_1.WidgetCreatorInfo }
        ]);
    }
    create(value) {
        const message = { materialId: 0, opInfo: { oneofKind: undefined } };
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
                case /* uint32 material_id */ 11:
                    message.materialId = reader.uint32();
                    break;
                case /* WidgetCreateLocationInfo location_info */ 434:
                    message.opInfo = {
                        oneofKind: "locationInfo",
                        locationInfo: WidgetCreateLocationInfo_1.WidgetCreateLocationInfo.internalBinaryRead(reader, reader.uint32(), options, message.opInfo.locationInfo)
                    };
                    break;
                case /* WidgetCreatorInfo widget_creator_info */ 1338:
                    message.opInfo = {
                        oneofKind: "widgetCreatorInfo",
                        widgetCreatorInfo: WidgetCreatorInfo_1.WidgetCreatorInfo.internalBinaryRead(reader, reader.uint32(), options, message.opInfo.widgetCreatorInfo)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 material_id = 11; */
        if (message.materialId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.materialId);
        /* WidgetCreateLocationInfo location_info = 434; */
        if (message.opInfo.oneofKind === "locationInfo")
            WidgetCreateLocationInfo_1.WidgetCreateLocationInfo.internalBinaryWrite(message.opInfo.locationInfo, writer.tag(434, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* WidgetCreatorInfo widget_creator_info = 1338; */
        if (message.opInfo.oneofKind === "widgetCreatorInfo")
            WidgetCreatorInfo_1.WidgetCreatorInfo.internalBinaryWrite(message.opInfo.widgetCreatorInfo, writer.tag(1338, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetDoBagReq
 */
exports.WidgetDoBagReq = new WidgetDoBagReq$Type();
