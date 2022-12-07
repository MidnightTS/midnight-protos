"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanternRiteFireworksReformSkillInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class LanternRiteFireworksReformSkillInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("LanternRiteFireworksReformSkillInfo", [
            { no: 9, name: "is_unlock", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_IEPBAPJHLEI", kind: "scalar", jsonName: "Unk3300IEPBAPJHLEI", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_EDPPFFFLFGG", kind: "scalar", jsonName: "Unk3300EDPPFFFLFGG", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isUnlock: false, skillId: 0, unk3300IEPBAPJHLEI: 0, unk3300EDPPFFFLFGG: 0 };
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
                case /* bool is_unlock */ 9:
                    message.isUnlock = reader.bool();
                    break;
                case /* uint32 skill_id */ 1:
                    message.skillId = reader.uint32();
                    break;
                case /* uint32 Unk3300_IEPBAPJHLEI = 15 [json_name = "Unk3300IEPBAPJHLEI"];*/ 15:
                    message.unk3300IEPBAPJHLEI = reader.uint32();
                    break;
                case /* uint32 Unk3300_EDPPFFFLFGG = 10 [json_name = "Unk3300EDPPFFFLFGG"];*/ 10:
                    message.unk3300EDPPFFFLFGG = reader.uint32();
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
        /* bool is_unlock = 9; */
        if (message.isUnlock !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isUnlock);
        /* uint32 skill_id = 1; */
        if (message.skillId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.skillId);
        /* uint32 Unk3300_IEPBAPJHLEI = 15 [json_name = "Unk3300IEPBAPJHLEI"]; */
        if (message.unk3300IEPBAPJHLEI !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300IEPBAPJHLEI);
        /* uint32 Unk3300_EDPPFFFLFGG = 10 [json_name = "Unk3300EDPPFFFLFGG"]; */
        if (message.unk3300EDPPFFFLFGG !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300EDPPFFFLFGG);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternRiteFireworksReformSkillInfo
 */
exports.LanternRiteFireworksReformSkillInfo = new LanternRiteFireworksReformSkillInfo$Type();
