"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAvatarSummonAllEventNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeAvatarSummonEventInfo_1 = require("./HomeAvatarSummonEventInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarSummonAllEventNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeAvatarSummonAllEventNotify", [
            { no: 14, name: "summon_event_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeAvatarSummonEventInfo_1.HomeAvatarSummonEventInfo }
        ]);
    }
    create(value) {
        const message = { summonEventList: [] };
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
                case /* repeated HomeAvatarSummonEventInfo summon_event_list */ 14:
                    message.summonEventList.push(HomeAvatarSummonEventInfo_1.HomeAvatarSummonEventInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated HomeAvatarSummonEventInfo summon_event_list = 14; */
        for (let i = 0; i < message.summonEventList.length; i++)
            HomeAvatarSummonEventInfo_1.HomeAvatarSummonEventInfo.internalBinaryWrite(message.summonEventList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeAvatarSummonAllEventNotify
 */
exports.HomeAvatarSummonAllEventNotify = new HomeAvatarSummonAllEventNotify$Type();
