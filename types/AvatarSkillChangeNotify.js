"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarSkillChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarSkillChangeNotify", [
            { no: 4, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "old_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cur_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "skill_depot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "avatar_skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n, oldLevel: 0, curLevel: 0, skillDepotId: 0, entityId: 0, avatarSkillId: 0 };
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
                case /* uint64 avatar_guid */ 4:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 old_level */ 7:
                    message.oldLevel = reader.uint32();
                    break;
                case /* uint32 cur_level */ 15:
                    message.curLevel = reader.uint32();
                    break;
                case /* uint32 skill_depot_id */ 6:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 avatar_skill_id */ 11:
                    message.avatarSkillId = reader.uint32();
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
        /* uint64 avatar_guid = 4; */
        if (message.avatarGuid !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 old_level = 7; */
        if (message.oldLevel !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.oldLevel);
        /* uint32 cur_level = 15; */
        if (message.curLevel !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.curLevel);
        /* uint32 skill_depot_id = 6; */
        if (message.skillDepotId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.skillDepotId);
        /* uint32 entity_id = 1; */
        if (message.entityId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 avatar_skill_id = 11; */
        if (message.avatarSkillId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.avatarSkillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarSkillChangeNotify
 */
exports.AvatarSkillChangeNotify = new AvatarSkillChangeNotify$Type();
