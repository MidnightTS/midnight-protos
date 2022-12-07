"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiceActivityGivingRecordNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SpiceActivityGivingRecordNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SpiceActivityGivingRecordNotify", [
            { no: 3, name: "Unk3300_CIHIAJEGCBO", kind: "scalar", jsonName: "Unk3300CIHIAJEGCBO", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_LAKPMMIPBMI", kind: "scalar", jsonName: "Unk3300LAKPMMIPBMI", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300CIHIAJEGCBO: 0, unk3300LAKPMMIPBMI: 0, avatarId: 0 };
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
                case /* uint32 Unk3300_CIHIAJEGCBO = 3 [json_name = "Unk3300CIHIAJEGCBO"];*/ 3:
                    message.unk3300CIHIAJEGCBO = reader.uint32();
                    break;
                case /* uint32 Unk3300_LAKPMMIPBMI = 2 [json_name = "Unk3300LAKPMMIPBMI"];*/ 2:
                    message.unk3300LAKPMMIPBMI = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 5:
                    message.avatarId = reader.uint32();
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
        /* uint32 Unk3300_CIHIAJEGCBO = 3 [json_name = "Unk3300CIHIAJEGCBO"]; */
        if (message.unk3300CIHIAJEGCBO !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300CIHIAJEGCBO);
        /* uint32 Unk3300_LAKPMMIPBMI = 2 [json_name = "Unk3300LAKPMMIPBMI"]; */
        if (message.unk3300LAKPMMIPBMI !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300LAKPMMIPBMI);
        /* uint32 avatar_id = 5; */
        if (message.avatarId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SpiceActivityGivingRecordNotify
 */
exports.SpiceActivityGivingRecordNotify = new SpiceActivityGivingRecordNotify$Type();
