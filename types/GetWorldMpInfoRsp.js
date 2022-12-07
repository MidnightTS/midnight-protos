"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWorldMpInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GetWorldMpInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetWorldMpInfoRsp", [
            { no: 15, name: "quit_mp_valid_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "is_in_mp_mode", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { quitMpValidTime: 0, retcode: 0, isInMpMode: false };
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
                case /* uint32 quit_mp_valid_time */ 15:
                    message.quitMpValidTime = reader.uint32();
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_in_mp_mode */ 14:
                    message.isInMpMode = reader.bool();
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
        /* uint32 quit_mp_valid_time = 15; */
        if (message.quitMpValidTime !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.quitMpValidTime);
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* bool is_in_mp_mode = 14; */
        if (message.isInMpMode !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isInMpMode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetWorldMpInfoRsp
 */
exports.GetWorldMpInfoRsp = new GetWorldMpInfoRsp$Type();
