"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetActivityScheduleRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ActivityScheduleInfo_1 = require("./ActivityScheduleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GetActivityScheduleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetActivityScheduleRsp", [
            { no: 15, name: "activity_schedule_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ActivityScheduleInfo_1.ActivityScheduleInfo },
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "remain_fly_sea_lamp_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { activityScheduleList: [], retcode: 0, remainFlySeaLampNum: 0 };
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
                case /* repeated ActivityScheduleInfo activity_schedule_list */ 15:
                    message.activityScheduleList.push(ActivityScheduleInfo_1.ActivityScheduleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 remain_fly_sea_lamp_num */ 7:
                    message.remainFlySeaLampNum = reader.uint32();
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
        /* repeated ActivityScheduleInfo activity_schedule_list = 15; */
        for (let i = 0; i < message.activityScheduleList.length; i++)
            ActivityScheduleInfo_1.ActivityScheduleInfo.internalBinaryWrite(message.activityScheduleList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 remain_fly_sea_lamp_num = 7; */
        if (message.remainFlySeaLampNum !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.remainFlySeaLampNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetActivityScheduleRsp
 */
exports.GetActivityScheduleRsp = new GetActivityScheduleRsp$Type();
