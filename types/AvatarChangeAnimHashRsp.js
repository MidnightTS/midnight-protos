"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarChangeAnimHashRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarChangeAnimHashRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarChangeAnimHashRsp", [
            { no: 3, name: "anim_hash", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { animHash: 0, retcode: 0, avatarGuid: 0n };
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
                case /* uint32 anim_hash */ 3:
                    message.animHash = reader.uint32();
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 avatar_guid */ 8:
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
        /* uint32 anim_hash = 3; */
        if (message.animHash !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.animHash);
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint64 avatar_guid = 8; */
        if (message.avatarGuid !== 0n)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarChangeAnimHashRsp
 */
exports.AvatarChangeAnimHashRsp = new AvatarChangeAnimHashRsp$Type();
