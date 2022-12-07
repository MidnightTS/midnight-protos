"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonInterruptChallengeRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonInterruptChallengeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonInterruptChallengeRsp", [
            { no: 10, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { groupId: 0, challengeId: 0, retcode: 0, challengeIndex: 0 };
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
                case /* uint32 group_id */ 10:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 challenge_id */ 5:
                    message.challengeId = reader.uint32();
                    break;
                case /* int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 challenge_index */ 14:
                    message.challengeIndex = reader.uint32();
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
        /* uint32 group_id = 10; */
        if (message.groupId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.groupId);
        /* uint32 challenge_id = 5; */
        if (message.challengeId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.challengeId);
        /* int32 retcode = 12; */
        if (message.retcode !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 challenge_index = 14; */
        if (message.challengeIndex !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonInterruptChallengeRsp
 */
exports.DungeonInterruptChallengeRsp = new DungeonInterruptChallengeRsp$Type();
