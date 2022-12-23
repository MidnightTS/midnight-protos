"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SumoStageData_1 = require("./SumoStageData");
// @generated message type with reflection information, may provide speed optimized methods
class SumoActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SumoActivityDetailInfo", [
            { no: 11, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "last_stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "sumo_stage_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => SumoStageData_1.SumoStageData } }
        ]);
    }
    create(value) {
        const message = { difficultyId: 0, lastStageId: 0, sumoStageMap: {} };
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
                case /* uint32 difficulty_id */ 11:
                    message.difficultyId = reader.uint32();
                    break;
                case /* uint32 last_stage_id */ 12:
                    message.lastStageId = reader.uint32();
                    break;
                case /* map<uint32, SumoStageData> sumo_stage_map */ 1:
                    this.binaryReadMap1(message.sumoStageMap, reader, options);
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
                    val = SumoStageData_1.SumoStageData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SumoActivityDetailInfo.sumo_stage_map");
            }
        }
        map[key ?? 0] = val ?? SumoStageData_1.SumoStageData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 difficulty_id = 11; */
        if (message.difficultyId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.difficultyId);
        /* uint32 last_stage_id = 12; */
        if (message.lastStageId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.lastStageId);
        /* map<uint32, SumoStageData> sumo_stage_map = 1; */
        for (let k of Object.keys(message.sumoStageMap)) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            SumoStageData_1.SumoStageData.internalBinaryWrite(message.sumoStageMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SumoActivityDetailInfo
 */
exports.SumoActivityDetailInfo = new SumoActivityDetailInfo$Type();
