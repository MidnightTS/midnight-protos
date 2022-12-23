"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarSatiationData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSatiationData$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarSatiationData", [
            { no: 15, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "penalty_finish_time", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 7, name: "finish_time", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n, penaltyFinishTime: 0, finishTime: 0 };
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
                case /* uint64 avatar_guid */ 15:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* float penalty_finish_time */ 6:
                    message.penaltyFinishTime = reader.float();
                    break;
                case /* float finish_time */ 7:
                    message.finishTime = reader.float();
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
        /* uint64 avatar_guid = 15; */
        if (message.avatarGuid !== 0n)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* float penalty_finish_time = 6; */
        if (message.penaltyFinishTime !== 0)
            writer.tag(6, runtime_1.WireType.Bit32).float(message.penaltyFinishTime);
        /* float finish_time = 7; */
        if (message.finishTime !== 0)
            writer.tag(7, runtime_1.WireType.Bit32).float(message.finishTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarSatiationData
 */
exports.AvatarSatiationData = new AvatarSatiationData$Type();
