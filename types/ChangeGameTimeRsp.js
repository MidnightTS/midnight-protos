"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeGameTimeRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChangeGameTimeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ChangeGameTimeRsp", [
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "extra_days", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "cur_game_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, extraDays: 0, curGameTime: 0 };
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
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 extra_days */ 2:
                    message.extraDays = reader.uint32();
                    break;
                case /* uint32 cur_game_time */ 8:
                    message.curGameTime = reader.uint32();
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
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 extra_days = 2; */
        if (message.extraDays !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.extraDays);
        /* uint32 cur_game_time = 8; */
        if (message.curGameTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.curGameTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChangeGameTimeRsp
 */
exports.ChangeGameTimeRsp = new ChangeGameTimeRsp$Type();
