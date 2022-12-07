"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureMapBonusChallengeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class TreasureMapBonusChallengeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("TreasureMapBonusChallengeInfo", [
            { no: 5, name: "is_done", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "solution_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "fragment_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 8 /*ScalarType.BOOL*/ } },
            { no: 13, name: "is_active", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isDone: false, solutionId: 0, fragmentMap: {}, isActive: false, configId: 0 };
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
                case /* bool is_done */ 5:
                    message.isDone = reader.bool();
                    break;
                case /* uint32 solution_id */ 15:
                    message.solutionId = reader.uint32();
                    break;
                case /* map<uint32, bool> fragment_map */ 11:
                    this.binaryReadMap11(message.fragmentMap, reader, options);
                    break;
                case /* bool is_active */ 13:
                    message.isActive = reader.bool();
                    break;
                case /* uint32 config_id */ 10:
                    message.configId = reader.uint32();
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
                    val = reader.bool();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field TreasureMapBonusChallengeInfo.fragment_map");
            }
        }
        map[key ?? 0] = val ?? false;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_done = 5; */
        if (message.isDone !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isDone);
        /* uint32 solution_id = 15; */
        if (message.solutionId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.solutionId);
        /* map<uint32, bool> fragment_map = 11; */
        for (let k of Object.keys(message.fragmentMap))
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).bool(message.fragmentMap[k]).join();
        /* bool is_active = 13; */
        if (message.isActive !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isActive);
        /* uint32 config_id = 10; */
        if (message.configId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.configId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TreasureMapBonusChallengeInfo
 */
exports.TreasureMapBonusChallengeInfo = new TreasureMapBonusChallengeInfo$Type();
