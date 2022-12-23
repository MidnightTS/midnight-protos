"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungusRenameReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FungusRenameReq$Type extends runtime_5.MessageType {
    constructor() {
        super("FungusRenameReq", [
            { no: 12, name: "fungus_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "name_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fungusId: 0, nameId: 0 };
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
                case /* uint32 fungus_id */ 12:
                    message.fungusId = reader.uint32();
                    break;
                case /* uint32 name_id */ 11:
                    message.nameId = reader.uint32();
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
        /* uint32 fungus_id = 12; */
        if (message.fungusId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.fungusId);
        /* uint32 name_id = 11; */
        if (message.nameId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.nameId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusRenameReq
 */
exports.FungusRenameReq = new FungusRenameReq$Type();
