"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarUnlockTalentNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarUnlockTalentNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarUnlockTalentNotify", [
            { no: 9, name: "skill_depot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "talent_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { skillDepotId: 0, avatarGuid: 0n, entityId: 0, talentId: 0 };
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
                case /* uint32 skill_depot_id */ 9:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* uint64 avatar_guid */ 3:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 entity_id */ 10:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 talent_id */ 8:
                    message.talentId = reader.uint32();
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
        /* uint32 skill_depot_id = 9; */
        if (message.skillDepotId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.skillDepotId);
        /* uint64 avatar_guid = 3; */
        if (message.avatarGuid !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 entity_id = 10; */
        if (message.entityId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 talent_id = 8; */
        if (message.talentId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.talentId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarUnlockTalentNotify
 */
exports.AvatarUnlockTalentNotify = new AvatarUnlockTalentNotify$Type();
