"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabWearBuffReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabWearBuffReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabWearBuffReq", [
            { no: 13, name: "slot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_mp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "buff_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { slotId: 0, isMp: false, buffId: 0 };
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
                case /* uint32 slot_id */ 13:
                    message.slotId = reader.uint32();
                    break;
                case /* bool is_mp */ 6:
                    message.isMp = reader.bool();
                    break;
                case /* uint32 buff_id */ 1:
                    message.buffId = reader.uint32();
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
        /* uint32 slot_id = 13; */
        if (message.slotId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.slotId);
        /* bool is_mp = 6; */
        if (message.isMp !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isMp);
        /* uint32 buff_id = 1; */
        if (message.buffId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.buffId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabWearBuffReq
 */
exports.ChannelerSlabWearBuffReq = new ChannelerSlabWearBuffReq$Type();
