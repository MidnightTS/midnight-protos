"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMixinGlobalShield = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinGlobalShield$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinGlobalShield", [
            { no: 14, name: "max_shield", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "is_create_effect", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "shield_effect_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "sub_shield", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "height_offset", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { maxShield: 0, isCreateEffect: false, shieldEffectName: "", subShield: 0, avatarId: 0, heightOffset: 0 };
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
                case /* float max_shield */ 14:
                    message.maxShield = reader.float();
                    break;
                case /* bool is_create_effect */ 4:
                    message.isCreateEffect = reader.bool();
                    break;
                case /* string shield_effect_name */ 12:
                    message.shieldEffectName = reader.string();
                    break;
                case /* float sub_shield */ 10:
                    message.subShield = reader.float();
                    break;
                case /* uint32 avatar_id */ 3:
                    message.avatarId = reader.uint32();
                    break;
                case /* float height_offset */ 1:
                    message.heightOffset = reader.float();
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
        /* float max_shield = 14; */
        if (message.maxShield !== 0)
            writer.tag(14, runtime_1.WireType.Bit32).float(message.maxShield);
        /* bool is_create_effect = 4; */
        if (message.isCreateEffect !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isCreateEffect);
        /* string shield_effect_name = 12; */
        if (message.shieldEffectName !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.shieldEffectName);
        /* float sub_shield = 10; */
        if (message.subShield !== 0)
            writer.tag(10, runtime_1.WireType.Bit32).float(message.subShield);
        /* uint32 avatar_id = 3; */
        if (message.avatarId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* float height_offset = 1; */
        if (message.heightOffset !== 0)
            writer.tag(1, runtime_1.WireType.Bit32).float(message.heightOffset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinGlobalShield
 */
exports.AbilityMixinGlobalShield = new AbilityMixinGlobalShield$Type();
