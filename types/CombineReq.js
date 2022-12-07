"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombineReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CombineReq$Type extends runtime_5.MessageType {
    constructor() {
        super("CombineReq", [
            { no: 6, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "combine_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "combine_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n, combineId: 0, combineCount: 0 };
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
                case /* uint64 avatar_guid */ 6:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 combine_id */ 5:
                    message.combineId = reader.uint32();
                    break;
                case /* uint32 combine_count */ 15:
                    message.combineCount = reader.uint32();
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
        /* uint64 avatar_guid = 6; */
        if (message.avatarGuid !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 combine_id = 5; */
        if (message.combineId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.combineId);
        /* uint32 combine_count = 15; */
        if (message.combineCount !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.combineCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CombineReq
 */
exports.CombineReq = new CombineReq$Type();
