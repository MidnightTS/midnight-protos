"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AISnapshotInfo = exports.AISnapshotEntityData = exports.AISnapshotEntitySkillCycle = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AISnapshotEntitySkillCycle$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AISnapshotEntitySkillCycle", [
            { no: 12, name: "failed", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "trydoskill", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "success", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "selected", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "skill_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional bool failed */ 12:
                    message.failed = reader.bool();
                    break;
                case /* optional bool trydoskill */ 8:
                    message.trydoskill = reader.bool();
                    break;
                case /* optional bool success */ 9:
                    message.success = reader.bool();
                    break;
                case /* optional bool selected */ 1:
                    message.selected = reader.bool();
                    break;
                case /* optional uint32 skill_id */ 2:
                    message.skillId = reader.uint32();
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
    internalBinaryWrite(message, writer, options) {
        /* optional bool failed = 12; */
        if (message.failed !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.failed);
        /* optional bool trydoskill = 8; */
        if (message.trydoskill !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.trydoskill);
        /* optional bool success = 9; */
        if (message.success !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.success);
        /* optional bool selected = 1; */
        if (message.selected !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.selected);
        /* optional uint32 skill_id = 2; */
        if (message.skillId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.skillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AISnapshotEntitySkillCycle
 */
exports.AISnapshotEntitySkillCycle = new AISnapshotEntitySkillCycle$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AISnapshotEntityData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AISnapshotEntityData", [
            { no: 5, name: "tick_time", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "tactic", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "finished_skill_cycles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.AISnapshotEntitySkillCycle },
            { no: 4, name: "moved_distance", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 13, name: "ai_target_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "threat_target_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "threat_list_size", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "hitting_avatars", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 11, name: "distance_to_player", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "attack_target_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "real_time", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { finishedSkillCycles: [], hittingAvatars: {} };
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
                case /* optional float tick_time */ 5:
                    message.tickTime = reader.float();
                    break;
                case /* optional uint32 tactic */ 2:
                    message.tactic = reader.uint32();
                    break;
                case /* repeated com.midnights.game.AISnapshotEntitySkillCycle finished_skill_cycles */ 9:
                    message.finishedSkillCycles.push(exports.AISnapshotEntitySkillCycle.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional float moved_distance */ 4:
                    message.movedDistance = reader.float();
                    break;
                case /* optional uint32 ai_target_id */ 13:
                    message.aiTargetId = reader.uint32();
                    break;
                case /* optional uint32 threat_target_id */ 3:
                    message.threatTargetId = reader.uint32();
                    break;
                case /* optional uint32 threat_list_size */ 1:
                    message.threatListSize = reader.uint32();
                    break;
                case /* optional uint32 entity_id */ 15:
                    message.entityId = reader.uint32();
                    break;
                case /* map<uint32, uint32> hitting_avatars */ 7:
                    this.binaryReadMap7(message.hittingAvatars, reader, options);
                    break;
                case /* optional float distance_to_player */ 11:
                    message.distanceToPlayer = reader.float();
                    break;
                case /* optional uint32 attack_target_id */ 10:
                    message.attackTargetId = reader.uint32();
                    break;
                case /* optional float real_time */ 14:
                    message.realTime = reader.float();
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AISnapshotEntityData.hitting_avatars");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float tick_time = 5; */
        if (message.tickTime !== undefined)
            writer.tag(5, runtime_1.WireType.Bit32).float(message.tickTime);
        /* optional uint32 tactic = 2; */
        if (message.tactic !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.tactic);
        /* repeated com.midnights.game.AISnapshotEntitySkillCycle finished_skill_cycles = 9; */
        for (let i = 0; i < message.finishedSkillCycles.length; i++)
            exports.AISnapshotEntitySkillCycle.internalBinaryWrite(message.finishedSkillCycles[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional float moved_distance = 4; */
        if (message.movedDistance !== undefined)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.movedDistance);
        /* optional uint32 ai_target_id = 13; */
        if (message.aiTargetId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.aiTargetId);
        /* optional uint32 threat_target_id = 3; */
        if (message.threatTargetId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.threatTargetId);
        /* optional uint32 threat_list_size = 1; */
        if (message.threatListSize !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.threatListSize);
        /* optional uint32 entity_id = 15; */
        if (message.entityId !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.entityId);
        /* map<uint32, uint32> hitting_avatars = 7; */
        for (let k of Object.keys(message.hittingAvatars))
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.hittingAvatars[k]).join();
        /* optional float distance_to_player = 11; */
        if (message.distanceToPlayer !== undefined)
            writer.tag(11, runtime_1.WireType.Bit32).float(message.distanceToPlayer);
        /* optional uint32 attack_target_id = 10; */
        if (message.attackTargetId !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.attackTargetId);
        /* optional float real_time = 14; */
        if (message.realTime !== undefined)
            writer.tag(14, runtime_1.WireType.Bit32).float(message.realTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AISnapshotEntityData
 */
exports.AISnapshotEntityData = new AISnapshotEntityData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AISnapshotInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AISnapshotInfo", [
            { no: 13, name: "ai_snapshots", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.AISnapshotEntityData }
        ]);
    }
    create(value) {
        const message = { aiSnapshots: [] };
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
                case /* repeated com.midnights.game.AISnapshotEntityData ai_snapshots */ 13:
                    message.aiSnapshots.push(exports.AISnapshotEntityData.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.AISnapshotEntityData ai_snapshots = 13; */
        for (let i = 0; i < message.aiSnapshots.length; i++)
            exports.AISnapshotEntityData.internalBinaryWrite(message.aiSnapshots[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AISnapshotInfo
 */
exports.AISnapshotInfo = new AISnapshotInfo$Type();
