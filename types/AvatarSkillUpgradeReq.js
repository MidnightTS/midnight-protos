"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarSkillUpgradeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillUpgradeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarSkillUpgradeReq", [
            { no: 5, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "avatar_skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "old_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n, avatarSkillId: 0, oldLevel: 0 };
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
                case /* uint64 avatar_guid */ 5:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 avatar_skill_id */ 12:
                    message.avatarSkillId = reader.uint32();
                    break;
                case /* uint32 old_level */ 8:
                    message.oldLevel = reader.uint32();
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
        /* uint64 avatar_guid = 5; */
        if (message.avatarGuid !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 avatar_skill_id = 12; */
        if (message.avatarSkillId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.avatarSkillId);
        /* uint32 old_level = 8; */
        if (message.oldLevel !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.oldLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarSkillUpgradeReq
 */
exports.AvatarSkillUpgradeReq = new AvatarSkillUpgradeReq$Type();
