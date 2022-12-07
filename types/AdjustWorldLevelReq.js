"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjustWorldLevelReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AdjustWorldLevelReq$Type extends runtime_5.MessageType {
    constructor() {
        super("AdjustWorldLevelReq", [
            { no: 14, name: "Unk3300_DNLKIMGLBLP", kind: "scalar", jsonName: "Unk3300DNLKIMGLBLP", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_DJBKBPDCBFH", kind: "scalar", jsonName: "Unk3300DJBKBPDCBFH", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300DNLKIMGLBLP: 0, unk3300DJBKBPDCBFH: 0 };
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
                case /* uint32 Unk3300_DNLKIMGLBLP = 14 [json_name = "Unk3300DNLKIMGLBLP"];*/ 14:
                    message.unk3300DNLKIMGLBLP = reader.uint32();
                    break;
                case /* uint32 Unk3300_DJBKBPDCBFH = 3 [json_name = "Unk3300DJBKBPDCBFH"];*/ 3:
                    message.unk3300DJBKBPDCBFH = reader.uint32();
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
        /* uint32 Unk3300_DNLKIMGLBLP = 14 [json_name = "Unk3300DNLKIMGLBLP"]; */
        if (message.unk3300DNLKIMGLBLP !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300DNLKIMGLBLP);
        /* uint32 Unk3300_DJBKBPDCBFH = 3 [json_name = "Unk3300DJBKBPDCBFH"]; */
        if (message.unk3300DJBKBPDCBFH !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300DJBKBPDCBFH);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AdjustWorldLevelReq
 */
exports.AdjustWorldLevelReq = new AdjustWorldLevelReq$Type();
