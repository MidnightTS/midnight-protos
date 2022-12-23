"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UgcNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class UgcNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("UgcNotify", [
            { no: 8, name: "Unk3300_IBLDINGJJFI", kind: "scalar", jsonName: "Unk3300IBLDINGJJFI", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "is_ugc_feature_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_KPABJPMLHCD", kind: "scalar", jsonName: "Unk3300KPABJPMLHCD", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { unk3300IBLDINGJJFI: false, isUgcFeatureClosed: false, unk3300KPABJPMLHCD: false };
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
                case /* bool Unk3300_IBLDINGJJFI = 8 [json_name = "Unk3300IBLDINGJJFI"];*/ 8:
                    message.unk3300IBLDINGJJFI = reader.bool();
                    break;
                case /* bool is_ugc_feature_closed */ 6:
                    message.isUgcFeatureClosed = reader.bool();
                    break;
                case /* bool Unk3300_KPABJPMLHCD = 9 [json_name = "Unk3300KPABJPMLHCD"];*/ 9:
                    message.unk3300KPABJPMLHCD = reader.bool();
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
        /* bool Unk3300_IBLDINGJJFI = 8 [json_name = "Unk3300IBLDINGJJFI"]; */
        if (message.unk3300IBLDINGJJFI !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.unk3300IBLDINGJJFI);
        /* bool is_ugc_feature_closed = 6; */
        if (message.isUgcFeatureClosed !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isUgcFeatureClosed);
        /* bool Unk3300_KPABJPMLHCD = 9 [json_name = "Unk3300KPABJPMLHCD"]; */
        if (message.unk3300KPABJPMLHCD !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.unk3300KPABJPMLHCD);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UgcNotify
 */
exports.UgcNotify = new UgcNotify$Type();
