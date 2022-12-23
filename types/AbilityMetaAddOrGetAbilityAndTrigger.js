"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMetaAddOrGetAbilityAndTrigger = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilityString_1 = require("./AbilityString");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaAddOrGetAbilityAndTrigger$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMetaAddOrGetAbilityAndTrigger", [
            { no: 4, name: "trigger_argument", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 12, name: "ability_name", kind: "message", T: () => AbilityString_1.AbilityString },
            { no: 13, name: "ability_override", kind: "message", T: () => AbilityString_1.AbilityString }
        ]);
    }
    create(value) {
        const message = { triggerArgument: 0 };
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
                case /* float trigger_argument */ 4:
                    message.triggerArgument = reader.float();
                    break;
                case /* AbilityString ability_name */ 12:
                    message.abilityName = AbilityString_1.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.abilityName);
                    break;
                case /* AbilityString ability_override */ 13:
                    message.abilityOverride = AbilityString_1.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.abilityOverride);
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
        /* float trigger_argument = 4; */
        if (message.triggerArgument !== 0)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.triggerArgument);
        /* AbilityString ability_name = 12; */
        if (message.abilityName)
            AbilityString_1.AbilityString.internalBinaryWrite(message.abilityName, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityString ability_override = 13; */
        if (message.abilityOverride)
            AbilityString_1.AbilityString.internalBinaryWrite(message.abilityOverride, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMetaAddOrGetAbilityAndTrigger
 */
exports.AbilityMetaAddOrGetAbilityAndTrigger = new AbilityMetaAddOrGetAbilityAndTrigger$Type();
