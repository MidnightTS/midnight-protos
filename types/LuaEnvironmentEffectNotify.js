"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuaEnvironmentEffectNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class LuaEnvironmentEffectNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("LuaEnvironmentEffectNotify", [
            { no: 8, name: "type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "int_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "effect_alias", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "float_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { type: 0, intParamList: [], effectAlias: "", floatParamList: [] };
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
                case /* uint32 type */ 8:
                    message.type = reader.uint32();
                    break;
                case /* repeated int32 int_param_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.intParamList.push(reader.int32());
                    else
                        message.intParamList.push(reader.int32());
                    break;
                case /* string effect_alias */ 3:
                    message.effectAlias = reader.string();
                    break;
                case /* repeated float float_param_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.floatParamList.push(reader.float());
                    else
                        message.floatParamList.push(reader.float());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 type = 8; */
        if (message.type !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.type);
        /* repeated int32 int_param_list = 10; */
        if (message.intParamList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.intParamList.length; i++)
                writer.int32(message.intParamList[i]);
            writer.join();
        }
        /* string effect_alias = 3; */
        if (message.effectAlias !== "")
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.effectAlias);
        /* repeated float float_param_list = 12; */
        if (message.floatParamList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.floatParamList.length; i++)
                writer.float(message.floatParamList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LuaEnvironmentEffectNotify
 */
exports.LuaEnvironmentEffectNotify = new LuaEnvironmentEffectNotify$Type();
