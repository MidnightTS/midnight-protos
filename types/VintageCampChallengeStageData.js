"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageCampChallengeStageData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const VintageCampChallengeLevelData_1 = require("./VintageCampChallengeLevelData");
// @generated message type with reflection information, may provide speed optimized methods
class VintageCampChallengeStageData$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageCampChallengeStageData", [
            { no: 4, name: "max_finished_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "camp_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => VintageCampChallengeLevelData_1.VintageCampChallengeLevelData } },
            { no: 2, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { maxFinishedLevel: 0, isFinish: false, campLevelMap: {}, isOpen: false, stageId: 0, openTime: 0 };
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
                case /* uint32 max_finished_level */ 4:
                    message.maxFinishedLevel = reader.uint32();
                    break;
                case /* bool is_finish */ 14:
                    message.isFinish = reader.bool();
                    break;
                case /* map<uint32, VintageCampChallengeLevelData> camp_level_map */ 6:
                    this.binaryReadMap6(message.campLevelMap, reader, options);
                    break;
                case /* bool is_open */ 2:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 stage_id */ 13:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 open_time */ 7:
                    message.openTime = reader.uint32();
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
    binaryReadMap6(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = VintageCampChallengeLevelData_1.VintageCampChallengeLevelData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field VintageCampChallengeStageData.camp_level_map");
            }
        }
        map[key ?? 0] = val ?? VintageCampChallengeLevelData_1.VintageCampChallengeLevelData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 max_finished_level = 4; */
        if (message.maxFinishedLevel !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.maxFinishedLevel);
        /* bool is_finish = 14; */
        if (message.isFinish !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isFinish);
        /* map<uint32, VintageCampChallengeLevelData> camp_level_map = 6; */
        for (let k of Object.keys(message.campLevelMap)) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            VintageCampChallengeLevelData_1.VintageCampChallengeLevelData.internalBinaryWrite(message.campLevelMap[k], writer, options);
            writer.join().join();
        }
        /* bool is_open = 2; */
        if (message.isOpen !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isOpen);
        /* uint32 stage_id = 13; */
        if (message.stageId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 open_time = 7; */
        if (message.openTime !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.openTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageCampChallengeStageData
 */
exports.VintageCampChallengeStageData = new VintageCampChallengeStageData$Type();
