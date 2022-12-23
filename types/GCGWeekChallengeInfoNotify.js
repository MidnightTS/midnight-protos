"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGWeekChallengeInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGWeekChallengeInfo_1 = require("./GCGWeekChallengeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GCGWeekChallengeInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGWeekChallengeInfoNotify", [
            { no: 3, name: "challenge_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGWeekChallengeInfo_1.GCGWeekChallengeInfo },
            { no: 4, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_notify_npc_change", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { challengeInfoList: [], nextRefreshTime: 0, isNotifyNpcChange: false };
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
                case /* repeated GCGWeekChallengeInfo challenge_info_list */ 3:
                    message.challengeInfoList.push(GCGWeekChallengeInfo_1.GCGWeekChallengeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 next_refresh_time */ 4:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* bool is_notify_npc_change */ 7:
                    message.isNotifyNpcChange = reader.bool();
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
        /* repeated GCGWeekChallengeInfo challenge_info_list = 3; */
        for (let i = 0; i < message.challengeInfoList.length; i++)
            GCGWeekChallengeInfo_1.GCGWeekChallengeInfo.internalBinaryWrite(message.challengeInfoList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 next_refresh_time = 4; */
        if (message.nextRefreshTime !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        /* bool is_notify_npc_change = 7; */
        if (message.isNotifyNpcChange !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isNotifyNpcChange);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGWeekChallengeInfoNotify
 */
exports.GCGWeekChallengeInfoNotify = new GCGWeekChallengeInfoNotify$Type();
