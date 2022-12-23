"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldOwnerDailyTaskNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DailyTaskInfo_1 = require("./DailyTaskInfo");
// @generated message type with reflection information, may provide speed optimized methods
class WorldOwnerDailyTaskNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WorldOwnerDailyTaskNotify", [
            { no: 4, name: "filter_city_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "task_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DailyTaskInfo_1.DailyTaskInfo },
            { no: 9, name: "finished_daily_task_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { filterCityId: 0, taskList: [], finishedDailyTaskNum: 0 };
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
                case /* uint32 filter_city_id */ 4:
                    message.filterCityId = reader.uint32();
                    break;
                case /* repeated DailyTaskInfo task_list */ 2:
                    message.taskList.push(DailyTaskInfo_1.DailyTaskInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 finished_daily_task_num */ 9:
                    message.finishedDailyTaskNum = reader.uint32();
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
        /* uint32 filter_city_id = 4; */
        if (message.filterCityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.filterCityId);
        /* repeated DailyTaskInfo task_list = 2; */
        for (let i = 0; i < message.taskList.length; i++)
            DailyTaskInfo_1.DailyTaskInfo.internalBinaryWrite(message.taskList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 finished_daily_task_num = 9; */
        if (message.finishedDailyTaskNum !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.finishedDailyTaskNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WorldOwnerDailyTaskNotify
 */
exports.WorldOwnerDailyTaskNotify = new WorldOwnerDailyTaskNotify$Type();
