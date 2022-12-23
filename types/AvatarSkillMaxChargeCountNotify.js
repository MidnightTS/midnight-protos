"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarSkillMaxChargeCountNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillMaxChargeCountNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarSkillMaxChargeCountNotify", [
            { no: 4, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "max_charge_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n, maxChargeCount: 0, skillId: 0 };
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
                case /* uint32 max_charge_count */ 9:
                    message.maxChargeCount = reader.uint32();
                    break;
                case /* uint32 skill_id */ 6:
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
        /* uint64 avatar_guid = 4; */
        if (message.avatarGuid !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 max_charge_count = 9; */
        if (message.maxChargeCount !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.maxChargeCount);
        /* uint32 skill_id = 6; */
        if (message.skillId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.skillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarSkillMaxChargeCountNotify
 */
exports.AvatarSkillMaxChargeCountNotify = new AvatarSkillMaxChargeCountNotify$Type();
