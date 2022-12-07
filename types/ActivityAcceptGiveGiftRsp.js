"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityAcceptGiveGiftRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ActivityAcceptGiftResultInfo_1 = require("./ActivityAcceptGiftResultInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityAcceptGiveGiftRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityAcceptGiveGiftRsp", [
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "accept_gift_result_info", kind: "message", T: () => ActivityAcceptGiftResultInfo_1.ActivityAcceptGiftResultInfo },
            { no: 1, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, scheduleId: 0 };
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
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* ActivityAcceptGiftResultInfo accept_gift_result_info */ 2:
                    message.acceptGiftResultInfo = ActivityAcceptGiftResultInfo_1.ActivityAcceptGiftResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.acceptGiftResultInfo);
                    break;
                case /* uint32 schedule_id */ 1:
                    message.scheduleId = reader.uint32();
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
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* ActivityAcceptGiftResultInfo accept_gift_result_info = 2; */
        if (message.acceptGiftResultInfo)
            ActivityAcceptGiftResultInfo_1.ActivityAcceptGiftResultInfo.internalBinaryWrite(message.acceptGiftResultInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 schedule_id = 1; */
        if (message.scheduleId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.scheduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityAcceptGiveGiftRsp
 */
exports.ActivityAcceptGiveGiftRsp = new ActivityAcceptGiveGiftRsp$Type();
