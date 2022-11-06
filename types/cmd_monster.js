"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsterSummonTagNotify = exports.MonsterSummonTagNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.MonsterSummonTagNotify.CmdId
 */
var MonsterSummonTagNotify_CmdId;
(function (MonsterSummonTagNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MonsterSummonTagNotify_CmdId[MonsterSummonTagNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1372;
     */
    MonsterSummonTagNotify_CmdId[MonsterSummonTagNotify_CmdId["CMD_ID"] = 1372] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MonsterSummonTagNotify_CmdId[MonsterSummonTagNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MonsterSummonTagNotify_CmdId[MonsterSummonTagNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MonsterSummonTagNotify_CmdId = exports.MonsterSummonTagNotify_CmdId || (exports.MonsterSummonTagNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class MonsterSummonTagNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MonsterSummonTagNotify", [
            { no: 1, name: "summon_tag_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "monster_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { summonTagMap: {} };
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
                case /* map<uint32, uint32> summon_tag_map */ 1:
                    this.binaryReadMap1(message.summonTagMap, reader, options);
                    break;
                case /* optional uint32 monster_entity_id */ 8:
                    message.monsterEntityId = reader.uint32();
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.MonsterSummonTagNotify.summon_tag_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> summon_tag_map = 1; */
        for (let k of Object.keys(message.summonTagMap))
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.summonTagMap[k]).join();
        /* optional uint32 monster_entity_id = 8; */
        if (message.monsterEntityId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.monsterEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MonsterSummonTagNotify
 */
exports.MonsterSummonTagNotify = new MonsterSummonTagNotify$Type();
