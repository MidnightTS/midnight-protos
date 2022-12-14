"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProudSkillExtraLevelNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ProudSkillExtraLevelNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ProudSkillExtraLevelNotify", [
            { no: 13, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "extra_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "talent_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "talent_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n, extraLevel: 0, talentType: 0, talentIndex: 0 };
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
                case /* uint64 avatar_guid */ 13:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 extra_level */ 4:
                    message.extraLevel = reader.uint32();
                    break;
                case /* uint32 talent_type */ 8:
                    message.talentType = reader.uint32();
                    break;
                case /* uint32 talent_index */ 2:
                    message.talentIndex = reader.uint32();
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
        /* uint64 avatar_guid = 13; */
        if (message.avatarGuid !== 0n)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 extra_level = 4; */
        if (message.extraLevel !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.extraLevel);
        /* uint32 talent_type = 8; */
        if (message.talentType !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.talentType);
        /* uint32 talent_index = 2; */
        if (message.talentIndex !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.talentIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ProudSkillExtraLevelNotify
 */
exports.ProudSkillExtraLevelNotify = new ProudSkillExtraLevelNotify$Type();
