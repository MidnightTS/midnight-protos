"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAvatarRewardEventNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeAvatarRewardEventInfo_1 = require("./HomeAvatarRewardEventInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarRewardEventNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeAvatarRewardEventNotify", [
            { no: 8, name: "pending_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeAvatarRewardEventInfo_1.HomeAvatarRewardEventInfo },
            { no: 14, name: "reward_event", kind: "message", T: () => HomeAvatarRewardEventInfo_1.HomeAvatarRewardEventInfo },
            { no: 3, name: "is_event_trigger", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { pendingList: [], isEventTrigger: false };
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
                case /* repeated HomeAvatarRewardEventInfo pending_list */ 8:
                    message.pendingList.push(HomeAvatarRewardEventInfo_1.HomeAvatarRewardEventInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* HomeAvatarRewardEventInfo reward_event */ 14:
                    message.rewardEvent = HomeAvatarRewardEventInfo_1.HomeAvatarRewardEventInfo.internalBinaryRead(reader, reader.uint32(), options, message.rewardEvent);
                    break;
                case /* bool is_event_trigger */ 3:
                    message.isEventTrigger = reader.bool();
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
        /* repeated HomeAvatarRewardEventInfo pending_list = 8; */
        for (let i = 0; i < message.pendingList.length; i++)
            HomeAvatarRewardEventInfo_1.HomeAvatarRewardEventInfo.internalBinaryWrite(message.pendingList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* HomeAvatarRewardEventInfo reward_event = 14; */
        if (message.rewardEvent)
            HomeAvatarRewardEventInfo_1.HomeAvatarRewardEventInfo.internalBinaryWrite(message.rewardEvent, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_event_trigger = 3; */
        if (message.isEventTrigger !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isEventTrigger);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeAvatarRewardEventNotify
 */
exports.HomeAvatarRewardEventNotify = new HomeAvatarRewardEventNotify$Type();
