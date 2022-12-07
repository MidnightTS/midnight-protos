"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarSkillUpgradeRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillUpgradeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarSkillUpgradeRsp", [
            { no: 6, name: "cur_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "avatar_skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "old_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { curLevel: 0, avatarSkillId: 0, retcode: 0, oldLevel: 0, avatarGuid: 0n };
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
                case /* uint32 cur_level */ 6:
                    message.curLevel = reader.uint32();
                    break;
                case /* uint32 avatar_skill_id */ 13:
                    message.avatarSkillId = reader.uint32();
                    break;
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 old_level */ 1:
                    message.oldLevel = reader.uint32();
                    break;
                case /* uint64 avatar_guid */ 5:
                    message.avatarGuid = reader.uint64().toBigInt();
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
        /* uint32 cur_level = 6; */
        if (message.curLevel !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.curLevel);
        /* uint32 avatar_skill_id = 13; */
        if (message.avatarSkillId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.avatarSkillId);
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 old_level = 1; */
        if (message.oldLevel !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.oldLevel);
        /* uint64 avatar_guid = 5; */
        if (message.avatarGuid !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarSkillUpgradeRsp
 */
exports.AvatarSkillUpgradeRsp = new AvatarSkillUpgradeRsp$Type();
