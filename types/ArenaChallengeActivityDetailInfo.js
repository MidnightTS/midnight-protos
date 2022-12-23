"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArenaChallengeActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ArenaChallengeMonsterLevel_1 = require("./ArenaChallengeMonsterLevel");
// @generated message type with reflection information, may provide speed optimized methods
class ArenaChallengeActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ArenaChallengeActivityDetailInfo", [
            { no: 15, name: "level_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ArenaChallengeMonsterLevel_1.ArenaChallengeMonsterLevel },
            { no: 1, name: "level_open_time_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 4, name: "is_finish_any_level", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "world_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { levelList: [], levelOpenTimeMap: {}, isFinishAnyLevel: false, worldLevel: 0 };
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
                case /* repeated ArenaChallengeMonsterLevel level_list */ 15:
                    message.levelList.push(ArenaChallengeMonsterLevel_1.ArenaChallengeMonsterLevel.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<uint32, uint32> level_open_time_map */ 1:
                    this.binaryReadMap1(message.levelOpenTimeMap, reader, options);
                    break;
                case /* bool is_finish_any_level */ 4:
                    message.isFinishAnyLevel = reader.bool();
                    break;
                case /* uint32 world_level */ 7:
                    message.worldLevel = reader.uint32();
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
                default: throw new globalThis.Error("unknown map entry field for field ArenaChallengeActivityDetailInfo.level_open_time_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated ArenaChallengeMonsterLevel level_list = 15; */
        for (let i = 0; i < message.levelList.length; i++)
            ArenaChallengeMonsterLevel_1.ArenaChallengeMonsterLevel.internalBinaryWrite(message.levelList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> level_open_time_map = 1; */
        for (let k of Object.keys(message.levelOpenTimeMap))
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.levelOpenTimeMap[k]).join();
        /* bool is_finish_any_level = 4; */
        if (message.isFinishAnyLevel !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isFinishAnyLevel);
        /* uint32 world_level = 7; */
        if (message.worldLevel !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.worldLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ArenaChallengeActivityDetailInfo
 */
exports.ArenaChallengeActivityDetailInfo = new ArenaChallengeActivityDetailInfo$Type();
