"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientLoadingCostumeVerificationNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ClientLoadingCostumeVerificationNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ClientLoadingCostumeVerificationNotify", [
            { no: 5, name: "prefab_hash", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "costume_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { prefabHash: 0n, guid: 0n, costumeId: 0 };
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
                case /* uint64 prefab_hash */ 5:
                    message.prefabHash = reader.uint64().toBigInt();
                    break;
                case /* uint64 guid */ 1:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* uint32 costume_id */ 7:
                    message.costumeId = reader.uint32();
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
        /* uint64 prefab_hash = 5; */
        if (message.prefabHash !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.prefabHash);
        /* uint64 guid = 1; */
        if (message.guid !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.guid);
        /* uint32 costume_id = 7; */
        if (message.costumeId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ClientLoadingCostumeVerificationNotify
 */
exports.ClientLoadingCostumeVerificationNotify = new ClientLoadingCostumeVerificationNotify$Type();
