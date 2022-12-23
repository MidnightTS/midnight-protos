"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGSkillPreviewTokenInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewTokenInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGSkillPreviewTokenInfo", [
            { no: 11, name: "token_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_MMIKPPJMHAD", kind: "scalar", jsonName: "Unk3300MMIKPPJMHAD", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_IKICJMEFEON", kind: "scalar", jsonName: "Unk3300IKICJMEFEON", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { tokenType: 0, unk3300MMIKPPJMHAD: 0, unk3300IKICJMEFEON: 0 };
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
                case /* uint32 token_type */ 11:
                    message.tokenType = reader.uint32();
                    break;
                case /* uint32 Unk3300_MMIKPPJMHAD = 10 [json_name = "Unk3300MMIKPPJMHAD"];*/ 10:
                    message.unk3300MMIKPPJMHAD = reader.uint32();
                    break;
                case /* uint32 Unk3300_IKICJMEFEON = 3 [json_name = "Unk3300IKICJMEFEON"];*/ 3:
                    message.unk3300IKICJMEFEON = reader.uint32();
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
        /* uint32 token_type = 11; */
        if (message.tokenType !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.tokenType);
        /* uint32 Unk3300_MMIKPPJMHAD = 10 [json_name = "Unk3300MMIKPPJMHAD"]; */
        if (message.unk3300MMIKPPJMHAD !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300MMIKPPJMHAD);
        /* uint32 Unk3300_IKICJMEFEON = 3 [json_name = "Unk3300IKICJMEFEON"]; */
        if (message.unk3300IKICJMEFEON !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300IKICJMEFEON);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSkillPreviewTokenInfo
 */
exports.GCGSkillPreviewTokenInfo = new GCGSkillPreviewTokenInfo$Type();
