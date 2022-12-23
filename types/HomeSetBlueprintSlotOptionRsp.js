"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSetBlueprintSlotOptionRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeSetBlueprintSlotOptionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeSetBlueprintSlotOptionRsp", [
            { no: 5, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "is_allow_copy", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "slot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, isAllowCopy: false, slotId: 0 };
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
                case /* int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_allow_copy */ 15:
                    message.isAllowCopy = reader.bool();
                    break;
                case /* uint32 slot_id */ 10:
                    message.slotId = reader.uint32();
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
        /* int32 retcode = 5; */
        if (message.retcode !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        /* bool is_allow_copy = 15; */
        if (message.isAllowCopy !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isAllowCopy);
        /* uint32 slot_id = 10; */
        if (message.slotId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.slotId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeSetBlueprintSlotOptionRsp
 */
exports.HomeSetBlueprintSlotOptionRsp = new HomeSetBlueprintSlotOptionRsp$Type();
