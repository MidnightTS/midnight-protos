"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonPlayerDieNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlayerDieType_1 = require("./PlayerDieType");
const StrengthenPointData_1 = require("./StrengthenPointData");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonPlayerDieNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonPlayerDieNotify", [
            { no: 7, name: "strengthen_point_data_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => StrengthenPointData_1.StrengthenPointData } },
            { no: 8, name: "die_type", kind: "enum", T: () => ["PlayerDieType", PlayerDieType_1.PlayerDieType, "PLAYER_DIE_TYPE_"] },
            { no: 3, name: "revive_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "wait_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "murderer_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "monster_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "gadget_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { strengthenPointDataMap: {}, dieType: 0, reviveCount: 0, waitTime: 0, dungeonId: 0, murdererEntityId: 0, entity: { oneofKind: undefined } };
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
                case /* map<uint32, StrengthenPointData> strengthen_point_data_map */ 7:
                    this.binaryReadMap7(message.strengthenPointDataMap, reader, options);
                    break;
                case /* PlayerDieType die_type */ 8:
                    message.dieType = reader.int32();
                    break;
                case /* uint32 revive_count */ 3:
                    message.reviveCount = reader.uint32();
                    break;
                case /* uint32 wait_time */ 4:
                    message.waitTime = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 6:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 murderer_entity_id */ 11:
                    message.murdererEntityId = reader.uint32();
                    break;
                case /* uint32 monster_id */ 10:
                    message.entity = {
                        oneofKind: "monsterId",
                        monsterId: reader.uint32()
                    };
                    break;
                case /* uint32 gadget_id */ 14:
                    message.entity = {
                        oneofKind: "gadgetId",
                        gadgetId: reader.uint32()
                    };
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
    binaryReadMap7(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = StrengthenPointData_1.StrengthenPointData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field DungeonPlayerDieNotify.strengthen_point_data_map");
            }
        }
        map[key ?? 0] = val ?? StrengthenPointData_1.StrengthenPointData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, StrengthenPointData> strengthen_point_data_map = 7; */
        for (let k of Object.keys(message.strengthenPointDataMap)) {
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            StrengthenPointData_1.StrengthenPointData.internalBinaryWrite(message.strengthenPointDataMap[k], writer, options);
            writer.join().join();
        }
        /* PlayerDieType die_type = 8; */
        if (message.dieType !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.dieType);
        /* uint32 revive_count = 3; */
        if (message.reviveCount !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.reviveCount);
        /* uint32 wait_time = 4; */
        if (message.waitTime !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.waitTime);
        /* uint32 dungeon_id = 6; */
        if (message.dungeonId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* uint32 murderer_entity_id = 11; */
        if (message.murdererEntityId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.murdererEntityId);
        /* uint32 monster_id = 10; */
        if (message.entity.oneofKind === "monsterId")
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.entity.monsterId);
        /* uint32 gadget_id = 14; */
        if (message.entity.oneofKind === "gadgetId")
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.entity.gadgetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonPlayerDieNotify
 */
exports.DungeonPlayerDieNotify = new DungeonPlayerDieNotify$Type();
