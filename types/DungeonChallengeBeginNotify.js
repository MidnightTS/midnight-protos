"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonChallengeBeginNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonChallengeBeginNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonChallengeBeginNotify", [
            { no: 3, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "father_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { challengeIndex: 0, fatherIndex: 0, groupId: 0, uidList: [], challengeId: 0, paramList: [] };
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
                case /* uint32 challenge_index */ 3:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* uint32 father_index */ 13:
                    message.fatherIndex = reader.uint32();
                    break;
                case /* uint32 group_id */ 15:
                    message.groupId = reader.uint32();
                    break;
                case /* repeated uint32 uid_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.uidList.push(reader.uint32());
                    else
                        message.uidList.push(reader.uint32());
                    break;
                case /* uint32 challenge_id */ 7:
                    message.challengeId = reader.uint32();
                    break;
                case /* repeated uint32 param_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
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
        /* uint32 challenge_index = 3; */
        if (message.challengeIndex !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.challengeIndex);
        /* uint32 father_index = 13; */
        if (message.fatherIndex !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.fatherIndex);
        /* uint32 group_id = 15; */
        if (message.groupId !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.groupId);
        /* repeated uint32 uid_list = 8; */
        if (message.uidList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.uidList.length; i++)
                writer.uint32(message.uidList[i]);
            writer.join();
        }
        /* uint32 challenge_id = 7; */
        if (message.challengeId !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.challengeId);
        /* repeated uint32 param_list = 2; */
        if (message.paramList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonChallengeBeginNotify
 */
exports.DungeonChallengeBeginNotify = new DungeonChallengeBeginNotify$Type();
