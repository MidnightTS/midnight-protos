"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerApplyEnterMpResultRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterMpResultRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerApplyEnterMpResultRsp", [
            { no: 8, name: "apply_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_agreed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { applyUid: 0, param: 0, isAgreed: false, retcode: 0 };
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
                case /* uint32 apply_uid */ 8:
                    message.applyUid = reader.uint32();
                    break;
                case /* uint32 param */ 9:
                    message.param = reader.uint32();
                    break;
                case /* bool is_agreed */ 13:
                    message.isAgreed = reader.bool();
                    break;
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
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
        /* uint32 apply_uid = 8; */
        if (message.applyUid !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.applyUid);
        /* uint32 param = 9; */
        if (message.param !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.param);
        /* bool is_agreed = 13; */
        if (message.isAgreed !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isAgreed);
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerApplyEnterMpResultRsp
 */
exports.PlayerApplyEnterMpResultRsp = new PlayerApplyEnterMpResultRsp$Type();
