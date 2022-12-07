"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarCardChangeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarCardChangeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarCardChangeReq", [
            { no: 11, name: "count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { count: 0, itemId: 0, avatarGuid: 0n };
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
                case /* uint32 count */ 11:
                    message.count = reader.uint32();
                    break;
                case /* uint32 item_id */ 4:
                    message.itemId = reader.uint32();
                    break;
                case /* uint64 avatar_guid */ 14:
                    message.avatarGuid = reader.uint64().toBigInt();
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
        /* uint32 count = 11; */
        if (message.count !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.count);
        /* uint32 item_id = 4; */
        if (message.itemId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.itemId);
        /* uint64 avatar_guid = 14; */
        if (message.avatarGuid !== 0n)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarCardChangeReq
 */
exports.AvatarCardChangeReq = new AvatarCardChangeReq$Type();
