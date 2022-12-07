"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseItemRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class UseItemRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("UseItemRsp", [
            { no: 9, name: "option_idx", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "target_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { optionIdx: 0, itemId: 0, retcode: 0, guid: 0n, targetGuid: 0n };
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
                case /* uint32 option_idx */ 9:
                    message.optionIdx = reader.uint32();
                    break;
                case /* uint32 item_id */ 13:
                    message.itemId = reader.uint32();
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 guid */ 14:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* uint64 target_guid */ 10:
                    message.targetGuid = reader.uint64().toBigInt();
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
        /* uint32 option_idx = 9; */
        if (message.optionIdx !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.optionIdx);
        /* uint32 item_id = 13; */
        if (message.itemId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.itemId);
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint64 guid = 14; */
        if (message.guid !== 0n)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.guid);
        /* uint64 target_guid = 10; */
        if (message.targetGuid !== 0n)
            writer.tag(10, runtime_1.WireType.Varint).uint64(message.targetGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UseItemRsp
 */
exports.UseItemRsp = new UseItemRsp$Type();
