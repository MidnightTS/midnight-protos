"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarChangeCostumeRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarChangeCostumeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarChangeCostumeRsp", [
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "costume_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, avatarGuid: 0n, costumeId: 0 };
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
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 avatar_guid */ 9:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 costume_id */ 3:
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
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint64 avatar_guid = 9; */
        if (message.avatarGuid !== 0n)
            writer.tag(9, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 costume_id = 3; */
        if (message.costumeId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarChangeCostumeRsp
 */
exports.AvatarChangeCostumeRsp = new AvatarChangeCostumeRsp$Type();
