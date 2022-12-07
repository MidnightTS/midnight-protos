"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMetaUpdateBaseReactionDamage = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilityString_1 = require("./AbilityString");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaUpdateBaseReactionDamage$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMetaUpdateBaseReactionDamage", [
            { no: 2, name: "Unk3300_OIPAEGAMCLI", kind: "scalar", jsonName: "Unk3300OIPAEGAMCLI", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_CAKEJCJKHOA", kind: "scalar", jsonName: "Unk3300CAKEJCJKHOA", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "ability_name", kind: "message", T: () => AbilityString_1.AbilityString },
            { no: 14, name: "global_value_key", kind: "message", T: () => AbilityString_1.AbilityString }
        ]);
    }
    create(value) {
        const message = { unk3300OIPAEGAMCLI: 0, unk3300CAKEJCJKHOA: 0 };
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
                case /* uint32 Unk3300_OIPAEGAMCLI = 2 [json_name = "Unk3300OIPAEGAMCLI"];*/ 2:
                    message.unk3300OIPAEGAMCLI = reader.uint32();
                    break;
                case /* uint32 Unk3300_CAKEJCJKHOA = 13 [json_name = "Unk3300CAKEJCJKHOA"];*/ 13:
                    message.unk3300CAKEJCJKHOA = reader.uint32();
                    break;
                case /* AbilityString ability_name */ 6:
                    message.abilityName = AbilityString_1.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.abilityName);
                    break;
                case /* AbilityString global_value_key */ 14:
                    message.globalValueKey = AbilityString_1.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.globalValueKey);
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
        /* uint32 Unk3300_OIPAEGAMCLI = 2 [json_name = "Unk3300OIPAEGAMCLI"]; */
        if (message.unk3300OIPAEGAMCLI !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300OIPAEGAMCLI);
        /* uint32 Unk3300_CAKEJCJKHOA = 13 [json_name = "Unk3300CAKEJCJKHOA"]; */
        if (message.unk3300CAKEJCJKHOA !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300CAKEJCJKHOA);
        /* AbilityString ability_name = 6; */
        if (message.abilityName)
            AbilityString_1.AbilityString.internalBinaryWrite(message.abilityName, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityString global_value_key = 14; */
        if (message.globalValueKey)
            AbilityString_1.AbilityString.internalBinaryWrite(message.globalValueKey, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMetaUpdateBaseReactionDamage
 */
exports.AbilityMetaUpdateBaseReactionDamage = new AbilityMetaUpdateBaseReactionDamage$Type();
