"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGDSChangeFieldRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSChangeFieldRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGDSChangeFieldRsp", [
            { no: 14, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "deck_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "field_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, deckId: 0, fieldId: 0 };
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
                case /* int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 deck_id */ 6:
                    message.deckId = reader.uint32();
                    break;
                case /* uint32 field_id */ 1:
                    message.fieldId = reader.uint32();
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
        /* int32 retcode = 14; */
        if (message.retcode !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 deck_id = 6; */
        if (message.deckId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.deckId);
        /* uint32 field_id = 1; */
        if (message.fieldId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.fieldId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGDSChangeFieldRsp
 */
exports.GCGDSChangeFieldRsp = new GCGDSChangeFieldRsp$Type();
