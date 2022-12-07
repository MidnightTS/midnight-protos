"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityArgument = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityArgument$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityArgument", [
            { no: 14, name: "int_arg", kind: "scalar", oneof: "arg", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "float_arg", kind: "scalar", oneof: "arg", T: 2 /*ScalarType.FLOAT*/ },
            { no: 9, name: "str_arg", kind: "scalar", oneof: "arg", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { arg: { oneofKind: undefined } };
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
                case /* uint32 int_arg */ 14:
                    message.arg = {
                        oneofKind: "intArg",
                        intArg: reader.uint32()
                    };
                    break;
                case /* float float_arg */ 7:
                    message.arg = {
                        oneofKind: "floatArg",
                        floatArg: reader.float()
                    };
                    break;
                case /* string str_arg */ 9:
                    message.arg = {
                        oneofKind: "strArg",
                        strArg: reader.string()
                    };
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
        /* uint32 int_arg = 14; */
        if (message.arg.oneofKind === "intArg")
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.arg.intArg);
        /* float float_arg = 7; */
        if (message.arg.oneofKind === "floatArg")
            writer.tag(7, runtime_1.WireType.Bit32).float(message.arg.floatArg);
        /* string str_arg = 9; */
        if (message.arg.oneofKind === "strArg")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.arg.strArg);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityArgument
 */
exports.AbilityArgument = new AbilityArgument$Type();
