"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeRecordNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChallengeRecord_1 = require("./ChallengeRecord");
// @generated message type with reflection information, may provide speed optimized methods
class ChallengeRecordNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ChallengeRecordNotify", [
            { no: 15, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "challenge_record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChallengeRecord_1.ChallengeRecord }
        ]);
    }
    create(value) {
        const message = { groupId: 0, challengeRecordList: [] };
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
                case /* uint32 group_id */ 15:
                    message.groupId = reader.uint32();
                    break;
                case /* repeated ChallengeRecord challenge_record_list */ 9:
                    message.challengeRecordList.push(ChallengeRecord_1.ChallengeRecord.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 group_id = 15; */
        if (message.groupId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.groupId);
        /* repeated ChallengeRecord challenge_record_list = 9; */
        for (let i = 0; i < message.challengeRecordList.length; i++)
            ChallengeRecord_1.ChallengeRecord.internalBinaryWrite(message.challengeRecordList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChallengeRecordNotify
 */
exports.ChallengeRecordNotify = new ChallengeRecordNotify$Type();
