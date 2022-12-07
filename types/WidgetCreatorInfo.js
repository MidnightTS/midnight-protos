"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetCreatorInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WidgetCreateLocationInfo_1 = require("./WidgetCreateLocationInfo");
const WidgetCreatorOpType_1 = require("./WidgetCreatorOpType");
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCreatorInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("WidgetCreatorInfo", [
            { no: 14, name: "op_type", kind: "enum", T: () => ["WidgetCreatorOpType", WidgetCreatorOpType_1.WidgetCreatorOpType, "WIDGET_CREATOR_OP_TYPE_"] },
            { no: 12, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "location_info", kind: "message", T: () => WidgetCreateLocationInfo_1.WidgetCreateLocationInfo }
        ]);
    }
    create(value) {
        const message = { opType: 0, entityId: 0 };
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
                case /* WidgetCreatorOpType op_type */ 14:
                    message.opType = reader.int32();
                    break;
                case /* uint32 entity_id */ 12:
                    message.entityId = reader.uint32();
                    break;
                case /* WidgetCreateLocationInfo location_info */ 9:
                    message.locationInfo = WidgetCreateLocationInfo_1.WidgetCreateLocationInfo.internalBinaryRead(reader, reader.uint32(), options, message.locationInfo);
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
        /* WidgetCreatorOpType op_type = 14; */
        if (message.opType !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.opType);
        /* uint32 entity_id = 12; */
        if (message.entityId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.entityId);
        /* WidgetCreateLocationInfo location_info = 9; */
        if (message.locationInfo)
            WidgetCreateLocationInfo_1.WidgetCreateLocationInfo.internalBinaryWrite(message.locationInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetCreatorInfo
 */
exports.WidgetCreatorInfo = new WidgetCreatorInfo$Type();
