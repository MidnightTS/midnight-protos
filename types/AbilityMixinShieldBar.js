"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMixinShieldBar = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinShieldBar$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinShieldBar", [
            { no: 8, name: "max_shield", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "shield", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "player_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "element_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { maxShield: 0, shield: 0, playerNum: 0, elementType: 0 };
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
                case /* float max_shield */ 8:
                    message.maxShield = reader.float();
                    break;
                case /* float shield */ 4:
                    message.shield = reader.float();
                    break;
                case /* uint32 player_num */ 3:
                    message.playerNum = reader.uint32();
                    break;
                case /* uint32 element_type */ 7:
                    message.elementType = reader.uint32();
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
        /* float max_shield = 8; */
        if (message.maxShield !== 0)
            writer.tag(8, runtime_1.WireType.Bit32).float(message.maxShield);
        /* float shield = 4; */
        if (message.shield !== 0)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.shield);
        /* uint32 player_num = 3; */
        if (message.playerNum !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.playerNum);
        /* uint32 element_type = 7; */
        if (message.elementType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.elementType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinShieldBar
 */
exports.AbilityMixinShieldBar = new AbilityMixinShieldBar$Type();
