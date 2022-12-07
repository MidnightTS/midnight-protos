"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityGetRecvGiftListRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ActivityRecvGiftData_1 = require("./ActivityRecvGiftData");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityGetRecvGiftListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityGetRecvGiftListRsp", [
            { no: 7, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "recv_gift_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ActivityRecvGiftData_1.ActivityRecvGiftData }
        ]);
    }
    create(value) {
        const message = { scheduleId: 0, retcode: 0, recvGiftList: [] };
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
                case /* uint32 schedule_id */ 7:
                    message.scheduleId = reader.uint32();
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* repeated ActivityRecvGiftData recv_gift_list */ 10:
                    message.recvGiftList.push(ActivityRecvGiftData_1.ActivityRecvGiftData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 schedule_id = 7; */
        if (message.scheduleId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated ActivityRecvGiftData recv_gift_list = 10; */
        for (let i = 0; i < message.recvGiftList.length; i++)
            ActivityRecvGiftData_1.ActivityRecvGiftData.internalBinaryWrite(message.recvGiftList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityGetRecvGiftListRsp
 */
exports.ActivityGetRecvGiftListRsp = new ActivityGetRecvGiftListRsp$Type();
