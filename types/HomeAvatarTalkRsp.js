"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAvatarTalkRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeAvatarTalkFinishInfo_1 = require("./HomeAvatarTalkFinishInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarTalkRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeAvatarTalkRsp", [
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "avatar_talk_info", kind: "message", T: () => HomeAvatarTalkFinishInfo_1.HomeAvatarTalkFinishInfo }
        ]);
    }
    create(value) {
        const message = { retcode: 0 };
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
                case /* HomeAvatarTalkFinishInfo avatar_talk_info */ 4:
                    message.avatarTalkInfo = HomeAvatarTalkFinishInfo_1.HomeAvatarTalkFinishInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarTalkInfo);
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
        /* HomeAvatarTalkFinishInfo avatar_talk_info = 4; */
        if (message.avatarTalkInfo)
            HomeAvatarTalkFinishInfo_1.HomeAvatarTalkFinishInfo.internalBinaryWrite(message.avatarTalkInfo, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeAvatarTalkRsp
 */
exports.HomeAvatarTalkRsp = new HomeAvatarTalkRsp$Type();
