"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickBreakerDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BrickBreakerLevelInfo_1 = require("./BrickBreakerLevelInfo");
const BrickBreakerActivityStageInfo_1 = require("./BrickBreakerActivityStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class BrickBreakerDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BrickBreakerDetailInfo", [
            { no: 13, name: "stage_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BrickBreakerActivityStageInfo_1.BrickBreakerActivityStageInfo },
            { no: 9, name: "dungeon_level_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BrickBreakerLevelInfo_1.BrickBreakerLevelInfo },
            { no: 11, name: "world_level_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BrickBreakerLevelInfo_1.BrickBreakerLevelInfo },
            { no: 1, name: "skill_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { stageInfoList: [], dungeonLevelInfoList: [], worldLevelInfoList: [], skillInfoMap: {} };
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
                case /* repeated BrickBreakerActivityStageInfo stage_info_list */ 13:
                    message.stageInfoList.push(BrickBreakerActivityStageInfo_1.BrickBreakerActivityStageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BrickBreakerLevelInfo dungeon_level_info_list */ 9:
                    message.dungeonLevelInfoList.push(BrickBreakerLevelInfo_1.BrickBreakerLevelInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BrickBreakerLevelInfo world_level_info_list */ 11:
                    message.worldLevelInfoList.push(BrickBreakerLevelInfo_1.BrickBreakerLevelInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<uint32, uint32> skill_info_map */ 1:
                    this.binaryReadMap1(message.skillInfoMap, reader, options);
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
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field BrickBreakerDetailInfo.skill_info_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated BrickBreakerActivityStageInfo stage_info_list = 13; */
        for (let i = 0; i < message.stageInfoList.length; i++)
            BrickBreakerActivityStageInfo_1.BrickBreakerActivityStageInfo.internalBinaryWrite(message.stageInfoList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated BrickBreakerLevelInfo dungeon_level_info_list = 9; */
        for (let i = 0; i < message.dungeonLevelInfoList.length; i++)
            BrickBreakerLevelInfo_1.BrickBreakerLevelInfo.internalBinaryWrite(message.dungeonLevelInfoList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated BrickBreakerLevelInfo world_level_info_list = 11; */
        for (let i = 0; i < message.worldLevelInfoList.length; i++)
            BrickBreakerLevelInfo_1.BrickBreakerLevelInfo.internalBinaryWrite(message.worldLevelInfoList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> skill_info_map = 1; */
        for (let k of Object.keys(message.skillInfoMap))
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.skillInfoMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BrickBreakerDetailInfo
 */
exports.BrickBreakerDetailInfo = new BrickBreakerDetailInfo$Type();
