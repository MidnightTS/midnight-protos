"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGPlayerGCGState = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGPlayerGCGState$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGPlayerGCGState", [
            { no: 14, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_GIKOMFNNAAA", kind: "scalar", jsonName: "Unk3300GIKOMFNNAAA", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "Unk3300_DEKGMKCCGEG", kind: "scalar", jsonName: "Unk3300DEKGMKCCGEG", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, unk3300GIKOMFNNAAA: false, unk3300DEKGMKCCGEG: false };
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
                case /* uint32 uid */ 14:
                    message.uid = reader.uint32();
                    break;
                case /* bool Unk3300_GIKOMFNNAAA = 11 [json_name = "Unk3300GIKOMFNNAAA"];*/ 11:
                    message.unk3300GIKOMFNNAAA = reader.bool();
                    break;
                case /* bool Unk3300_DEKGMKCCGEG = 4 [json_name = "Unk3300DEKGMKCCGEG"];*/ 4:
                    message.unk3300DEKGMKCCGEG = reader.bool();
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
        /* uint32 uid = 14; */
        if (message.uid !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.uid);
        /* bool Unk3300_GIKOMFNNAAA = 11 [json_name = "Unk3300GIKOMFNNAAA"]; */
        if (message.unk3300GIKOMFNNAAA !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.unk3300GIKOMFNNAAA);
        /* bool Unk3300_DEKGMKCCGEG = 4 [json_name = "Unk3300DEKGMKCCGEG"]; */
        if (message.unk3300DEKGMKCCGEG !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.unk3300DEKGMKCCGEG);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGPlayerGCGState
 */
exports.GCGPlayerGCGState = new GCGPlayerGCGState$Type();
