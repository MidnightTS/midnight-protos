"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabWearBuffRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabWearBuffRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabWearBuffRsp", [
            { no: 7, name: "is_mp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "buff_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "slot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { isMp: false, buffId: 0, slotId: 0, retcode: 0 };
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
                case /* bool is_mp */ 7:
                    message.isMp = reader.bool();
                    break;
                case /* uint32 buff_id */ 8:
                    message.buffId = reader.uint32();
                    break;
                case /* uint32 slot_id */ 11:
                    message.slotId = reader.uint32();
                    break;
                case /* int32 retcode */ 13:
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
        /* bool is_mp = 7; */
        if (message.isMp !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isMp);
        /* uint32 buff_id = 8; */
        if (message.buffId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.buffId);
        /* uint32 slot_id = 11; */
        if (message.slotId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.slotId);
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabWearBuffRsp
 */
exports.ChannelerSlabWearBuffRsp = new ChannelerSlabWearBuffRsp$Type();
