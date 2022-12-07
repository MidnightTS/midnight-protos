"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugNotify = exports.DebugNotify_Retcode = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum DebugNotify.Retcode
 */
var DebugNotify_Retcode;
(function (DebugNotify_Retcode) {
    /**
     * @generated from protobuf enum value: RETCODE_SUCC = 0;
     */
    DebugNotify_Retcode[DebugNotify_Retcode["SUCC"] = 0] = "SUCC";
    /**
     * @generated from protobuf enum value: RETCODE_FAIL = 1;
     */
    DebugNotify_Retcode[DebugNotify_Retcode["FAIL"] = 1] = "FAIL";
})(DebugNotify_Retcode = exports.DebugNotify_Retcode || (exports.DebugNotify_Retcode = {}));
// @generated message type with reflection information, may provide speed optimized methods
class DebugNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DebugNotify", [
            { no: 1, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "retcode", kind: "enum", T: () => ["DebugNotify.Retcode", DebugNotify_Retcode, "RETCODE_"] }
        ]);
    }
    create(value) {
        const message = { id: 0, name: "", retcode: 0 };
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
                case /* uint32 id */ 1:
                    message.id = reader.uint32();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* DebugNotify.Retcode retcode */ 3:
                    message.retcode = reader.int32();
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
        /* uint32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.id);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.name);
        /* DebugNotify.Retcode retcode = 3; */
        if (message.retcode !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DebugNotify
 */
exports.DebugNotify = new DebugNotify$Type();
