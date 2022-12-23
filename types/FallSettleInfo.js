"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class FallSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FallSettleInfo", [
            { no: 14, name: "final_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "player_info", kind: "message", T: () => OnlinePlayerInfo_1.OnlinePlayerInfo },
            { no: 13, name: "flower_ring_catch_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "catch_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "remain_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { finalScore: 0, flowerRingCatchCountMap: {}, uid: 0, catchCount: 0, remainTime: 0 };
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
                case /* uint32 final_score */ 14:
                    message.finalScore = reader.uint32();
                    break;
                case /* OnlinePlayerInfo player_info */ 9:
                    message.playerInfo = OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                case /* map<uint32, uint32> flower_ring_catch_count_map */ 13:
                    this.binaryReadMap13(message.flowerRingCatchCountMap, reader, options);
                    break;
                case /* uint32 uid */ 2:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 catch_count */ 1:
                    message.catchCount = reader.uint32();
                    break;
                case /* uint32 remain_time */ 6:
                    message.remainTime = reader.uint32();
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
    binaryReadMap13(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field FallSettleInfo.flower_ring_catch_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 final_score = 14; */
        if (message.finalScore !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.finalScore);
        /* OnlinePlayerInfo player_info = 9; */
        if (message.playerInfo)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> flower_ring_catch_count_map = 13; */
        for (let k of Object.keys(message.flowerRingCatchCountMap))
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.flowerRingCatchCountMap[k]).join();
        /* uint32 uid = 2; */
        if (message.uid !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.uid);
        /* uint32 catch_count = 1; */
        if (message.catchCount !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.catchCount);
        /* uint32 remain_time = 6; */
        if (message.remainTime !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.remainTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FallSettleInfo
 */
exports.FallSettleInfo = new FallSettleInfo$Type();
