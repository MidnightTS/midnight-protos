"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodexDataUpdateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CodexType_1 = require("./CodexType");
// @generated message type with reflection information, may provide speed optimized methods
class CodexDataUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("CodexDataUpdateNotify", [
            { no: 10, name: "weapon_max_promote_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "type", kind: "enum", T: () => ["CodexType", CodexType_1.CodexType, "CODEX_TYPE_"] },
            { no: 3, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { weaponMaxPromoteLevel: 0, type: 0, id: 0 };
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
                case /* uint32 weapon_max_promote_level */ 10:
                    message.weaponMaxPromoteLevel = reader.uint32();
                    break;
                case /* CodexType type */ 5:
                    message.type = reader.int32();
                    break;
                case /* uint32 id */ 3:
                    message.id = reader.uint32();
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
        /* uint32 weapon_max_promote_level = 10; */
        if (message.weaponMaxPromoteLevel !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.weaponMaxPromoteLevel);
        /* CodexType type = 5; */
        if (message.type !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.type);
        /* uint32 id = 3; */
        if (message.id !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CodexDataUpdateNotify
 */
exports.CodexDataUpdateNotify = new CodexDataUpdateNotify$Type();
