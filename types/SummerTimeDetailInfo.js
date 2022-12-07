"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummerTimeDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SummerTimeSprintBoatInfo_1 = require("./SummerTimeSprintBoatInfo");
const SummerTimeStageInfo_1 = require("./SummerTimeStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SummerTimeDetailInfo", [
            { no: 9, name: "stage_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => SummerTimeStageInfo_1.SummerTimeStageInfo } },
            { no: 1, name: "sprint_boat_info", kind: "message", T: () => SummerTimeSprintBoatInfo_1.SummerTimeSprintBoatInfo },
            { no: 13, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { stageMap: {}, isContentClosed: false, contentCloseTime: 0 };
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
                case /* map<uint32, SummerTimeStageInfo> stage_map */ 9:
                    this.binaryReadMap9(message.stageMap, reader, options);
                    break;
                case /* SummerTimeSprintBoatInfo sprint_boat_info */ 1:
                    message.sprintBoatInfo = SummerTimeSprintBoatInfo_1.SummerTimeSprintBoatInfo.internalBinaryRead(reader, reader.uint32(), options, message.sprintBoatInfo);
                    break;
                case /* bool is_content_closed */ 13:
                    message.isContentClosed = reader.bool();
                    break;
                case /* uint32 content_close_time */ 12:
                    message.contentCloseTime = reader.uint32();
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
    binaryReadMap9(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = SummerTimeStageInfo_1.SummerTimeStageInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SummerTimeDetailInfo.stage_map");
            }
        }
        map[key ?? 0] = val ?? SummerTimeStageInfo_1.SummerTimeStageInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, SummerTimeStageInfo> stage_map = 9; */
        for (let k of Object.keys(message.stageMap)) {
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            SummerTimeStageInfo_1.SummerTimeStageInfo.internalBinaryWrite(message.stageMap[k], writer, options);
            writer.join().join();
        }
        /* SummerTimeSprintBoatInfo sprint_boat_info = 1; */
        if (message.sprintBoatInfo)
            SummerTimeSprintBoatInfo_1.SummerTimeSprintBoatInfo.internalBinaryWrite(message.sprintBoatInfo, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_content_closed = 13; */
        if (message.isContentClosed !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* uint32 content_close_time = 12; */
        if (message.contentCloseTime !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.contentCloseTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeDetailInfo
 */
exports.SummerTimeDetailInfo = new SummerTimeDetailInfo$Type();
