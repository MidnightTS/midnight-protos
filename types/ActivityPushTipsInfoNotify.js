"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityPushTipsInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ActivityPushTipsData_1 = require("./ActivityPushTipsData");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityPushTipsInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityPushTipsInfoNotify", [
            { no: 3, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "activity_push_tips_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ActivityPushTipsData_1.ActivityPushTipsData },
            { no: 13, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { scheduleId: 0, activityPushTipsDataList: [], activityId: 0 };
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
                case /* uint32 schedule_id */ 3:
                    message.scheduleId = reader.uint32();
                    break;
                case /* repeated ActivityPushTipsData activity_push_tips_data_list */ 10:
                    message.activityPushTipsDataList.push(ActivityPushTipsData_1.ActivityPushTipsData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 activity_id */ 13:
                    message.activityId = reader.uint32();
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
        /* uint32 schedule_id = 3; */
        if (message.scheduleId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* repeated ActivityPushTipsData activity_push_tips_data_list = 10; */
        for (let i = 0; i < message.activityPushTipsDataList.length; i++)
            ActivityPushTipsData_1.ActivityPushTipsData.internalBinaryWrite(message.activityPushTipsDataList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 activity_id = 13; */
        if (message.activityId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.activityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityPushTipsInfoNotify
 */
exports.ActivityPushTipsInfoNotify = new ActivityPushTipsInfoNotify$Type();
