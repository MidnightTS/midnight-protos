"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMixinElementShield = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinElementShield$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinElementShield", [
            { no: 9, name: "player_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "shield", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "is_shield_broken", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "sub_shield", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 13, name: "max_shield", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "absorb_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { playerNum: 0, shield: 0, isShieldBroken: false, subShield: 0, maxShield: 0, absorbType: 0 };
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
                case /* uint32 player_num */ 9:
                    message.playerNum = reader.uint32();
                    break;
                case /* float shield */ 5:
                    message.shield = reader.float();
                    break;
                case /* bool is_shield_broken */ 8:
                    message.isShieldBroken = reader.bool();
                    break;
                case /* float sub_shield */ 4:
                    message.subShield = reader.float();
                    break;
                case /* float max_shield */ 13:
                    message.maxShield = reader.float();
                    break;
                case /* uint32 absorb_type */ 10:
                    message.absorbType = reader.uint32();
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
        /* uint32 player_num = 9; */
        if (message.playerNum !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.playerNum);
        /* float shield = 5; */
        if (message.shield !== 0)
            writer.tag(5, runtime_1.WireType.Bit32).float(message.shield);
        /* bool is_shield_broken = 8; */
        if (message.isShieldBroken !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isShieldBroken);
        /* float sub_shield = 4; */
        if (message.subShield !== 0)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.subShield);
        /* float max_shield = 13; */
        if (message.maxShield !== 0)
            writer.tag(13, runtime_1.WireType.Bit32).float(message.maxShield);
        /* uint32 absorb_type = 10; */
        if (message.absorbType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.absorbType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinElementShield
 */
exports.AbilityMixinElementShield = new AbilityMixinElementShield$Type();
