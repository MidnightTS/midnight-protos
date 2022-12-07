"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarDieAnimationEndRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarDieAnimationEndRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarDieAnimationEndRsp", [
            { no: 12, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "die_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, skillId: 0, dieGuid: 0n };
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
                case /* int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 skill_id */ 10:
                    message.skillId = reader.uint32();
                    break;
                case /* uint64 die_guid */ 7:
                    message.dieGuid = reader.uint64().toBigInt();
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
        /* int32 retcode = 12; */
        if (message.retcode !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 skill_id = 10; */
        if (message.skillId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.skillId);
        /* uint64 die_guid = 7; */
        if (message.dieGuid !== 0n)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.dieGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarDieAnimationEndRsp
 */
exports.AvatarDieAnimationEndRsp = new AvatarDieAnimationEndRsp$Type();
