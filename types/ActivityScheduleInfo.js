"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityScheduleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityScheduleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityScheduleInfo", [
            { no: 3, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { endTime: 0, isOpen: false, beginTime: 0, scheduleId: 0, activityId: 0 };
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
                case /* uint32 end_time */ 3:
                    message.endTime = reader.uint32();
                    break;
                case /* bool is_open */ 12:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 begin_time */ 1:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 schedule_id */ 9:
                    message.scheduleId = reader.uint32();
                    break;
                case /* uint32 activity_id */ 11:
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
        /* uint32 end_time = 3; */
        if (message.endTime !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.endTime);
        /* bool is_open = 12; */
        if (message.isOpen !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isOpen);
        /* uint32 begin_time = 1; */
        if (message.beginTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* uint32 schedule_id = 9; */
        if (message.scheduleId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* uint32 activity_id = 11; */
        if (message.activityId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.activityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityScheduleInfo
 */
exports.ActivityScheduleInfo = new ActivityScheduleInfo$Type();
