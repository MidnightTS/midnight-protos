"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackHitEffectResult = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AttackHitEffectResult$Type extends runtime_5.MessageType {
    constructor() {
        super("AttackHitEffectResult", [
            { no: 13, name: "air_strength", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "hit_halt_time_scale", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 9, name: "hit_halt_time", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "Unk3300_LCKECJCKKJK", kind: "scalar", jsonName: "Unk3300LCKECJCKKJK", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_KLNGDAMMFIF", kind: "scalar", jsonName: "Unk3300KLNGDAMMFIF", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retreat_strength", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { airStrength: 0, hitHaltTimeScale: 0, hitHaltTime: 0, unk3300LCKECJCKKJK: 0, unk3300KLNGDAMMFIF: 0, retreatStrength: 0 };
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
                case /* float air_strength */ 13:
                    message.airStrength = reader.float();
                    break;
                case /* float hit_halt_time_scale */ 10:
                    message.hitHaltTimeScale = reader.float();
                    break;
                case /* float hit_halt_time */ 9:
                    message.hitHaltTime = reader.float();
                    break;
                case /* uint32 Unk3300_LCKECJCKKJK = 8 [json_name = "Unk3300LCKECJCKKJK"];*/ 8:
                    message.unk3300LCKECJCKKJK = reader.uint32();
                    break;
                case /* uint32 Unk3300_KLNGDAMMFIF = 1 [json_name = "Unk3300KLNGDAMMFIF"];*/ 1:
                    message.unk3300KLNGDAMMFIF = reader.uint32();
                    break;
                case /* float retreat_strength */ 3:
                    message.retreatStrength = reader.float();
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
        /* float air_strength = 13; */
        if (message.airStrength !== 0)
            writer.tag(13, runtime_1.WireType.Bit32).float(message.airStrength);
        /* float hit_halt_time_scale = 10; */
        if (message.hitHaltTimeScale !== 0)
            writer.tag(10, runtime_1.WireType.Bit32).float(message.hitHaltTimeScale);
        /* float hit_halt_time = 9; */
        if (message.hitHaltTime !== 0)
            writer.tag(9, runtime_1.WireType.Bit32).float(message.hitHaltTime);
        /* uint32 Unk3300_LCKECJCKKJK = 8 [json_name = "Unk3300LCKECJCKKJK"]; */
        if (message.unk3300LCKECJCKKJK !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300LCKECJCKKJK);
        /* uint32 Unk3300_KLNGDAMMFIF = 1 [json_name = "Unk3300KLNGDAMMFIF"]; */
        if (message.unk3300KLNGDAMMFIF !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300KLNGDAMMFIF);
        /* float retreat_strength = 3; */
        if (message.retreatStrength !== 0)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.retreatStrength);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AttackHitEffectResult
 */
exports.AttackHitEffectResult = new AttackHitEffectResult$Type();
