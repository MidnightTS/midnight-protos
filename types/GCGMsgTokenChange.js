"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgTokenChange = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGReason_1 = require("./GCGReason");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgTokenChange$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgTokenChange", [
            { no: 7, name: "token_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_LLGHGEALDDI", kind: "scalar", jsonName: "Unk3300LLGHGEALDDI", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "reason", kind: "enum", T: () => ["GCGReason", GCGReason_1.GCGReason] },
            { no: 12, name: "Unk3300_LCNKBFBJDFM", kind: "scalar", jsonName: "Unk3300LCNKBFBJDFM", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { tokenType: 0, unk3300LLGHGEALDDI: 0, reason: 0, unk3300LCNKBFBJDFM: 0, cardGuid: 0 };
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
                case /* uint32 token_type */ 7:
                    message.tokenType = reader.uint32();
                    break;
                case /* uint32 Unk3300_LLGHGEALDDI = 10 [json_name = "Unk3300LLGHGEALDDI"];*/ 10:
                    message.unk3300LLGHGEALDDI = reader.uint32();
                    break;
                case /* GCGReason reason */ 3:
                    message.reason = reader.int32();
                    break;
                case /* uint32 Unk3300_LCNKBFBJDFM = 12 [json_name = "Unk3300LCNKBFBJDFM"];*/ 12:
                    message.unk3300LCNKBFBJDFM = reader.uint32();
                    break;
                case /* uint32 card_guid */ 13:
                    message.cardGuid = reader.uint32();
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
        /* uint32 token_type = 7; */
        if (message.tokenType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.tokenType);
        /* uint32 Unk3300_LLGHGEALDDI = 10 [json_name = "Unk3300LLGHGEALDDI"]; */
        if (message.unk3300LLGHGEALDDI !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300LLGHGEALDDI);
        /* GCGReason reason = 3; */
        if (message.reason !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.reason);
        /* uint32 Unk3300_LCNKBFBJDFM = 12 [json_name = "Unk3300LCNKBFBJDFM"]; */
        if (message.unk3300LCNKBFBJDFM !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300LCNKBFBJDFM);
        /* uint32 card_guid = 13; */
        if (message.cardGuid !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.cardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgTokenChange
 */
exports.GCGMsgTokenChange = new GCGMsgTokenChange$Type();
