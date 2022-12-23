"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerApplyEnterHomeResultReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterHomeResultReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerApplyEnterHomeResultReq", [
            { no: 9, name: "apply_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_agreed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { applyUid: 0, isAgreed: false };
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
                case /* uint32 apply_uid */ 9:
                    message.applyUid = reader.uint32();
                    break;
                case /* bool is_agreed */ 2:
                    message.isAgreed = reader.bool();
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
        /* uint32 apply_uid = 9; */
        if (message.applyUid !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.applyUid);
        /* bool is_agreed = 2; */
        if (message.isAgreed !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isAgreed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerApplyEnterHomeResultReq
 */
exports.PlayerApplyEnterHomeResultReq = new PlayerApplyEnterHomeResultReq$Type();
