"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGChallengeData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGChallengeData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GCGChallengeData", [
            { no: 1, name: "challenge_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "challenge_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { paramList: [] };
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
                case /* optional uint32 challenge_id */ 1:
                    message.challengeId = reader.uint32();
                    break;
                case /* optional uint32 challenge_type */ 2:
                    message.challengeType = reader.uint32();
                    break;
                case /* repeated uint32 param_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* optional uint32 progress */ 4:
                    message.progress = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 challenge_id = 1; */
        if (message.challengeId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.challengeId);
        /* optional uint32 challenge_type = 2; */
        if (message.challengeType !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.challengeType);
        /* repeated uint32 param_list = 3; */
        if (message.paramList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        /* optional uint32 progress = 4; */
        if (message.progress !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.progress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GCGChallengeData
 */
exports.GCGChallengeData = new GCGChallengeData$Type();
