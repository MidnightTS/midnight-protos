"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeFormulaDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ForgeFormulaDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ForgeFormulaDataNotify", [
            { no: 4, name: "is_locked", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "forge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isLocked: false, forgeId: 0 };
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
                case /* bool is_locked */ 4:
                    message.isLocked = reader.bool();
                    break;
                case /* uint32 forge_id */ 3:
                    message.forgeId = reader.uint32();
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
        /* bool is_locked = 4; */
        if (message.isLocked !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isLocked);
        /* uint32 forge_id = 3; */
        if (message.forgeId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.forgeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForgeFormulaDataNotify
 */
exports.ForgeFormulaDataNotify = new ForgeFormulaDataNotify$Type();
