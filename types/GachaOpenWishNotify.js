"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GachaOpenWishNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GachaOpenWishNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GachaOpenWishNotify", [
            { no: 1, name: "gacha_schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "gacha_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { gachaScheduleId: 0, gachaType: 0 };
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
                case /* uint32 gacha_schedule_id */ 1:
                    message.gachaScheduleId = reader.uint32();
                    break;
                case /* uint32 gacha_type */ 10:
                    message.gachaType = reader.uint32();
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
        /* uint32 gacha_schedule_id = 1; */
        if (message.gachaScheduleId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.gachaScheduleId);
        /* uint32 gacha_type = 10; */
        if (message.gachaType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.gachaType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GachaOpenWishNotify
 */
exports.GachaOpenWishNotify = new GachaOpenWishNotify$Type();
