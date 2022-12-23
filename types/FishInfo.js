"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FishInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FishInfo", [
            { no: 14, name: "Unk3300_AKFBFEDCELN", kind: "scalar", jsonName: "Unk3300AKFBFEDCELN", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_FIICLBEFHLL", kind: "scalar", jsonName: "Unk3300FIICLBEFHLL", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300AKFBFEDCELN: 0, unk3300FIICLBEFHLL: 0 };
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
                case /* uint32 Unk3300_AKFBFEDCELN = 14 [json_name = "Unk3300AKFBFEDCELN"];*/ 14:
                    message.unk3300AKFBFEDCELN = reader.uint32();
                    break;
                case /* uint32 Unk3300_FIICLBEFHLL = 7 [json_name = "Unk3300FIICLBEFHLL"];*/ 7:
                    message.unk3300FIICLBEFHLL = reader.uint32();
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
        /* uint32 Unk3300_AKFBFEDCELN = 14 [json_name = "Unk3300AKFBFEDCELN"]; */
        if (message.unk3300AKFBFEDCELN !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300AKFBFEDCELN);
        /* uint32 Unk3300_FIICLBEFHLL = 7 [json_name = "Unk3300FIICLBEFHLL"]; */
        if (message.unk3300FIICLBEFHLL !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300FIICLBEFHLL);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FishInfo
 */
exports.FishInfo = new FishInfo$Type();
