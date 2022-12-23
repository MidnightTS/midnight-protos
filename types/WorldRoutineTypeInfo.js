"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldRoutineTypeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WorldRoutineInfo_1 = require("./WorldRoutineInfo");
// @generated message type with reflection information, may provide speed optimized methods
class WorldRoutineTypeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("WorldRoutineTypeInfo", [
            { no: 13, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "world_routine_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WorldRoutineInfo_1.WorldRoutineInfo },
            { no: 2, name: "routine_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { nextRefreshTime: 0, worldRoutineInfoList: [], routineType: 0 };
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
                case /* uint32 next_refresh_time */ 13:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* repeated WorldRoutineInfo world_routine_info_list */ 10:
                    message.worldRoutineInfoList.push(WorldRoutineInfo_1.WorldRoutineInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 routine_type */ 2:
                    message.routineType = reader.uint32();
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
        /* uint32 next_refresh_time = 13; */
        if (message.nextRefreshTime !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        /* repeated WorldRoutineInfo world_routine_info_list = 10; */
        for (let i = 0; i < message.worldRoutineInfoList.length; i++)
            WorldRoutineInfo_1.WorldRoutineInfo.internalBinaryWrite(message.worldRoutineInfoList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 routine_type = 2; */
        if (message.routineType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.routineType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WorldRoutineTypeInfo
 */
exports.WorldRoutineTypeInfo = new WorldRoutineTypeInfo$Type();
