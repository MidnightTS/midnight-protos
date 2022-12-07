"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerFloorRecord = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const TowerLevelRecord_1 = require("./TowerLevelRecord");
// @generated message type with reflection information, may provide speed optimized methods
class TowerFloorRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("TowerFloorRecord", [
            { no: 11, name: "passed_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "passed_level_record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TowerLevelRecord_1.TowerLevelRecord },
            { no: 12, name: "floor_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "floor_star_reward_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { passedLevelMap: {}, passedLevelRecordList: [], floorId: 0, floorStarRewardProgress: 0 };
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
                case /* map<uint32, uint32> passed_level_map */ 11:
                    this.binaryReadMap11(message.passedLevelMap, reader, options);
                    break;
                case /* repeated TowerLevelRecord passed_level_record_list */ 2:
                    message.passedLevelRecordList.push(TowerLevelRecord_1.TowerLevelRecord.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 floor_id */ 12:
                    message.floorId = reader.uint32();
                    break;
                case /* uint32 floor_star_reward_progress */ 4:
                    message.floorStarRewardProgress = reader.uint32();
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
    binaryReadMap11(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field TowerFloorRecord.passed_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> passed_level_map = 11; */
        for (let k of Object.keys(message.passedLevelMap))
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.passedLevelMap[k]).join();
        /* repeated TowerLevelRecord passed_level_record_list = 2; */
        for (let i = 0; i < message.passedLevelRecordList.length; i++)
            TowerLevelRecord_1.TowerLevelRecord.internalBinaryWrite(message.passedLevelRecordList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 floor_id = 12; */
        if (message.floorId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.floorId);
        /* uint32 floor_star_reward_progress = 4; */
        if (message.floorStarRewardProgress !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.floorStarRewardProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerFloorRecord
 */
exports.TowerFloorRecord = new TowerFloorRecord$Type();
