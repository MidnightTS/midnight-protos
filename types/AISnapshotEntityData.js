"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AISnapshotEntityData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AISnapshotEntitySkillCycle_1 = require("./AISnapshotEntitySkillCycle");
// @generated message type with reflection information, may provide speed optimized methods
class AISnapshotEntityData$Type extends runtime_5.MessageType {
    constructor() {
        super("AISnapshotEntityData", [
            { no: 14, name: "finished_skill_cycles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AISnapshotEntitySkillCycle_1.AISnapshotEntitySkillCycle },
            { no: 2, name: "attack_target_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_ALBMEMMJEJA", kind: "scalar", jsonName: "Unk3300ALBMEMMJEJA", T: 2 /*ScalarType.FLOAT*/ },
            { no: 5, name: "Unk3300_IADJCDJOKND", kind: "scalar", jsonName: "Unk3300IADJCDJOKND", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_FNCIDLDKANO", kind: "scalar", jsonName: "Unk3300FNCIDLDKANO", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_GPCFOCIFHCD", kind: "scalar", jsonName: "Unk3300GPCFOCIFHCD", T: 2 /*ScalarType.FLOAT*/ },
            { no: 12, name: "Unk3300_FMBBEIHCCJO", kind: "scalar", jsonName: "Unk3300FMBBEIHCCJO", T: 2 /*ScalarType.FLOAT*/ },
            { no: 11, name: "Unk3300_LIJIDJOLLEB", kind: "scalar", jsonName: "Unk3300LIJIDJOLLEB", T: 2 /*ScalarType.FLOAT*/ },
            { no: 9, name: "Unk3300_GNBOAJHMNJO", kind: "scalar", jsonName: "Unk3300GNBOAJHMNJO", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "hitting_avatars", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 3, name: "Unk3300_FIKEAEPLOHJ", kind: "scalar", jsonName: "Unk3300FIKEAEPLOHJ", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { finishedSkillCycles: [], attackTargetId: 0, entityId: 0, unk3300ALBMEMMJEJA: 0, unk3300IADJCDJOKND: 0, unk3300FNCIDLDKANO: 0, unk3300GPCFOCIFHCD: 0, unk3300FMBBEIHCCJO: 0, unk3300LIJIDJOLLEB: 0, unk3300GNBOAJHMNJO: 0, hittingAvatars: {}, unk3300FIKEAEPLOHJ: 0 };
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
                case /* repeated AISnapshotEntitySkillCycle finished_skill_cycles */ 14:
                    message.finishedSkillCycles.push(AISnapshotEntitySkillCycle_1.AISnapshotEntitySkillCycle.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 attack_target_id */ 2:
                    message.attackTargetId = reader.uint32();
                    break;
                case /* uint32 entity_id */ 6:
                    message.entityId = reader.uint32();
                    break;
                case /* float Unk3300_ALBMEMMJEJA = 13 [json_name = "Unk3300ALBMEMMJEJA"];*/ 13:
                    message.unk3300ALBMEMMJEJA = reader.float();
                    break;
                case /* uint32 Unk3300_IADJCDJOKND = 5 [json_name = "Unk3300IADJCDJOKND"];*/ 5:
                    message.unk3300IADJCDJOKND = reader.uint32();
                    break;
                case /* uint32 Unk3300_FNCIDLDKANO = 7 [json_name = "Unk3300FNCIDLDKANO"];*/ 7:
                    message.unk3300FNCIDLDKANO = reader.uint32();
                    break;
                case /* float Unk3300_GPCFOCIFHCD = 15 [json_name = "Unk3300GPCFOCIFHCD"];*/ 15:
                    message.unk3300GPCFOCIFHCD = reader.float();
                    break;
                case /* float Unk3300_FMBBEIHCCJO = 12 [json_name = "Unk3300FMBBEIHCCJO"];*/ 12:
                    message.unk3300FMBBEIHCCJO = reader.float();
                    break;
                case /* float Unk3300_LIJIDJOLLEB = 11 [json_name = "Unk3300LIJIDJOLLEB"];*/ 11:
                    message.unk3300LIJIDJOLLEB = reader.float();
                    break;
                case /* uint32 Unk3300_GNBOAJHMNJO = 9 [json_name = "Unk3300GNBOAJHMNJO"];*/ 9:
                    message.unk3300GNBOAJHMNJO = reader.uint32();
                    break;
                case /* map<uint32, uint32> hitting_avatars */ 4:
                    this.binaryReadMap4(message.hittingAvatars, reader, options);
                    break;
                case /* uint32 Unk3300_FIKEAEPLOHJ = 3 [json_name = "Unk3300FIKEAEPLOHJ"];*/ 3:
                    message.unk3300FIKEAEPLOHJ = reader.uint32();
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
    binaryReadMap4(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field AISnapshotEntityData.hitting_avatars");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated AISnapshotEntitySkillCycle finished_skill_cycles = 14; */
        for (let i = 0; i < message.finishedSkillCycles.length; i++)
            AISnapshotEntitySkillCycle_1.AISnapshotEntitySkillCycle.internalBinaryWrite(message.finishedSkillCycles[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 attack_target_id = 2; */
        if (message.attackTargetId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.attackTargetId);
        /* uint32 entity_id = 6; */
        if (message.entityId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.entityId);
        /* float Unk3300_ALBMEMMJEJA = 13 [json_name = "Unk3300ALBMEMMJEJA"]; */
        if (message.unk3300ALBMEMMJEJA !== 0)
            writer.tag(13, runtime_1.WireType.Bit32).float(message.unk3300ALBMEMMJEJA);
        /* uint32 Unk3300_IADJCDJOKND = 5 [json_name = "Unk3300IADJCDJOKND"]; */
        if (message.unk3300IADJCDJOKND !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300IADJCDJOKND);
        /* uint32 Unk3300_FNCIDLDKANO = 7 [json_name = "Unk3300FNCIDLDKANO"]; */
        if (message.unk3300FNCIDLDKANO !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300FNCIDLDKANO);
        /* float Unk3300_GPCFOCIFHCD = 15 [json_name = "Unk3300GPCFOCIFHCD"]; */
        if (message.unk3300GPCFOCIFHCD !== 0)
            writer.tag(15, runtime_1.WireType.Bit32).float(message.unk3300GPCFOCIFHCD);
        /* float Unk3300_FMBBEIHCCJO = 12 [json_name = "Unk3300FMBBEIHCCJO"]; */
        if (message.unk3300FMBBEIHCCJO !== 0)
            writer.tag(12, runtime_1.WireType.Bit32).float(message.unk3300FMBBEIHCCJO);
        /* float Unk3300_LIJIDJOLLEB = 11 [json_name = "Unk3300LIJIDJOLLEB"]; */
        if (message.unk3300LIJIDJOLLEB !== 0)
            writer.tag(11, runtime_1.WireType.Bit32).float(message.unk3300LIJIDJOLLEB);
        /* uint32 Unk3300_GNBOAJHMNJO = 9 [json_name = "Unk3300GNBOAJHMNJO"]; */
        if (message.unk3300GNBOAJHMNJO !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300GNBOAJHMNJO);
        /* map<uint32, uint32> hitting_avatars = 4; */
        for (let k of Object.keys(message.hittingAvatars))
            writer.tag(4, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.hittingAvatars[k]).join();
        /* uint32 Unk3300_FIKEAEPLOHJ = 3 [json_name = "Unk3300FIKEAEPLOHJ"]; */
        if (message.unk3300FIKEAEPLOHJ !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300FIKEAEPLOHJ);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AISnapshotEntityData
 */
exports.AISnapshotEntityData = new AISnapshotEntityData$Type();
