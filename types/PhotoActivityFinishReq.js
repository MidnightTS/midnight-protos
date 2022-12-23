"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoActivityFinishReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PhotoActivityFinishReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PhotoActivityFinishReq", [
            { no: 8, name: "pos_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "check_root_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_succ", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { posId: 0, checkRootId: 0, isSucc: false };
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
                case /* uint32 pos_id */ 8:
                    message.posId = reader.uint32();
                    break;
                case /* uint32 check_root_id */ 11:
                    message.checkRootId = reader.uint32();
                    break;
                case /* bool is_succ */ 15:
                    message.isSucc = reader.bool();
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
        /* uint32 pos_id = 8; */
        if (message.posId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.posId);
        /* uint32 check_root_id = 11; */
        if (message.checkRootId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.checkRootId);
        /* bool is_succ = 15; */
        if (message.isSucc !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isSucc);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PhotoActivityFinishReq
 */
exports.PhotoActivityFinishReq = new PhotoActivityFinishReq$Type();
