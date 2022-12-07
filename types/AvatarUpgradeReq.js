"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarUpgradeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarUpgradeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarUpgradeReq", [
            { no: 12, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { itemId: 0, count: 0, avatarGuid: 0n };
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
                case /* uint32 item_id */ 12:
                    message.itemId = reader.uint32();
                    break;
                case /* uint32 count */ 7:
                    message.count = reader.uint32();
                    break;
                case /* uint64 avatar_guid */ 1:
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
        /* uint32 item_id = 12; */
        if (message.itemId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.itemId);
        /* uint32 count = 7; */
        if (message.count !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.count);
        /* uint64 avatar_guid = 1; */
        if (message.avatarGuid !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarUpgradeReq
 */
exports.AvatarUpgradeReq = new AvatarUpgradeReq$Type();
