"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetIsAutoUnlockSpecificEquipReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SetIsAutoUnlockSpecificEquipReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SetIsAutoUnlockSpecificEquipReq", [
            { no: 8, name: "is_auto_unlock_specific_equip", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isAutoUnlockSpecificEquip: false };
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
                case /* bool is_auto_unlock_specific_equip */ 8:
                    message.isAutoUnlockSpecificEquip = reader.bool();
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
        /* bool is_auto_unlock_specific_equip = 8; */
        if (message.isAutoUnlockSpecificEquip !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isAutoUnlockSpecificEquip);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetIsAutoUnlockSpecificEquipReq
 */
exports.SetIsAutoUnlockSpecificEquipReq = new SetIsAutoUnlockSpecificEquipReq$Type();
