"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipParam = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class EquipParam$Type extends runtime_5.MessageType {
    constructor() {
        super("EquipParam", [
            { no: 1, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "item_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "item_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "promote_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { itemId: 0, itemNum: 0, itemLevel: 0, promoteLevel: 0 };
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
                case /* uint32 item_id */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* uint32 item_num */ 2:
                    message.itemNum = reader.uint32();
                    break;
                case /* uint32 item_level */ 3:
                    message.itemLevel = reader.uint32();
                    break;
                case /* uint32 promote_level */ 4:
                    message.promoteLevel = reader.uint32();
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
        /* uint32 item_id = 1; */
        if (message.itemId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.itemId);
        /* uint32 item_num = 2; */
        if (message.itemNum !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.itemNum);
        /* uint32 item_level = 3; */
        if (message.itemLevel !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.itemLevel);
        /* uint32 promote_level = 4; */
        if (message.promoteLevel !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.promoteLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EquipParam
 */
exports.EquipParam = new EquipParam$Type();
