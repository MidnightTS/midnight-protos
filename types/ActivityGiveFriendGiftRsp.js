"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityGiveFriendGiftRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityGiveFriendGiftRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityGiveFriendGiftRsp", [
            { no: 15, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "limit_gift_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { scheduleId: 0, retcode: 0, limitGiftList: [] };
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
                case /* uint32 schedule_id */ 15:
                    message.scheduleId = reader.uint32();
                    break;
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 limit_gift_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.limitGiftList.push(reader.uint32());
                    else
                        message.limitGiftList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 schedule_id = 15; */
        if (message.scheduleId !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.scheduleId);
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 limit_gift_list = 14; */
        if (message.limitGiftList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.limitGiftList.length; i++)
                writer.uint32(message.limitGiftList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityGiveFriendGiftRsp
 */
exports.ActivityGiveFriendGiftRsp = new ActivityGiveFriendGiftRsp$Type();
