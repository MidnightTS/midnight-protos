"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetSlotData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WidgetSlotTag_1 = require("./WidgetSlotTag");
// @generated message type with reflection information, may provide speed optimized methods
class WidgetSlotData$Type extends runtime_5.MessageType {
    constructor() {
        super("WidgetSlotData", [
            { no: 15, name: "cd_over_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_active", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "tag", kind: "enum", T: () => ["WidgetSlotTag", WidgetSlotTag_1.WidgetSlotTag, "WIDGET_SLOT_TAG_"] }
        ]);
    }
    create(value) {
        const message = { cdOverTime: 0, isActive: false, materialId: 0, tag: 0 };
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
                case /* uint32 cd_over_time */ 15:
                    message.cdOverTime = reader.uint32();
                    break;
                case /* bool is_active */ 3:
                    message.isActive = reader.bool();
                    break;
                case /* uint32 material_id */ 8:
                    message.materialId = reader.uint32();
                    break;
                case /* WidgetSlotTag tag */ 11:
                    message.tag = reader.int32();
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
        /* uint32 cd_over_time = 15; */
        if (message.cdOverTime !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.cdOverTime);
        /* bool is_active = 3; */
        if (message.isActive !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isActive);
        /* uint32 material_id = 8; */
        if (message.materialId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.materialId);
        /* WidgetSlotTag tag = 11; */
        if (message.tag !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.tag);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetSlotData
 */
exports.WidgetSlotData = new WidgetSlotData$Type();
