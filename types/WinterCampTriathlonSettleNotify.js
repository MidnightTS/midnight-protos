"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinterCampTriathlonSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampTriathlonSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WinterCampTriathlonSettleNotify", [
            { no: 11, name: "Unk3300_ACDOMBHMNJG", kind: "scalar", jsonName: "Unk3300ACDOMBHMNJG", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_OEFOGONENFN", kind: "scalar", jsonName: "Unk3300OEFOGONENFN", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "remain_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_EMNKJGKNCMP", kind: "scalar", jsonName: "Unk3300EMNKJGKNCMP", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300ACDOMBHMNJG: 0, isSuccess: false, score: 0, isNewRecord: false, galleryId: 0, unk3300OEFOGONENFN: 0, remainTime: 0, unk3300EMNKJGKNCMP: 0 };
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
                case /* uint32 Unk3300_ACDOMBHMNJG = 11 [json_name = "Unk3300ACDOMBHMNJG"];*/ 11:
                    message.unk3300ACDOMBHMNJG = reader.uint32();
                    break;
                case /* bool is_success */ 10:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 score */ 15:
                    message.score = reader.uint32();
                    break;
                case /* bool is_new_record */ 7:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 gallery_id */ 14:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 Unk3300_OEFOGONENFN = 12 [json_name = "Unk3300OEFOGONENFN"];*/ 12:
                    message.unk3300OEFOGONENFN = reader.uint32();
                    break;
                case /* uint32 remain_time */ 6:
                    message.remainTime = reader.uint32();
                    break;
                case /* uint32 Unk3300_EMNKJGKNCMP = 5 [json_name = "Unk3300EMNKJGKNCMP"];*/ 5:
                    message.unk3300EMNKJGKNCMP = reader.uint32();
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
        /* uint32 Unk3300_ACDOMBHMNJG = 11 [json_name = "Unk3300ACDOMBHMNJG"]; */
        if (message.unk3300ACDOMBHMNJG !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300ACDOMBHMNJG);
        /* bool is_success = 10; */
        if (message.isSuccess !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 score = 15; */
        if (message.score !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.score);
        /* bool is_new_record = 7; */
        if (message.isNewRecord !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 gallery_id = 14; */
        if (message.galleryId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* uint32 Unk3300_OEFOGONENFN = 12 [json_name = "Unk3300OEFOGONENFN"]; */
        if (message.unk3300OEFOGONENFN !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300OEFOGONENFN);
        /* uint32 remain_time = 6; */
        if (message.remainTime !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.remainTime);
        /* uint32 Unk3300_EMNKJGKNCMP = 5 [json_name = "Unk3300EMNKJGKNCMP"]; */
        if (message.unk3300EMNKJGKNCMP !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300EMNKJGKNCMP);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampTriathlonSettleNotify
 */
exports.WinterCampTriathlonSettleNotify = new WinterCampTriathlonSettleNotify$Type();
