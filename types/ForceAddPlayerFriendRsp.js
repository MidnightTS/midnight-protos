"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForceAddPlayerFriendRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FriendBrief_1 = require("./FriendBrief");
// @generated message type with reflection information, may provide speed optimized methods
class ForceAddPlayerFriendRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ForceAddPlayerFriendRsp", [
            { no: 3, name: "target_friend_brief", kind: "message", T: () => FriendBrief_1.FriendBrief },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, targetUid: 0 };
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
                case /* FriendBrief target_friend_brief */ 3:
                    message.targetFriendBrief = FriendBrief_1.FriendBrief.internalBinaryRead(reader, reader.uint32(), options, message.targetFriendBrief);
                    break;
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 target_uid */ 8:
                    message.targetUid = reader.uint32();
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
        /* FriendBrief target_friend_brief = 3; */
        if (message.targetFriendBrief)
            FriendBrief_1.FriendBrief.internalBinaryWrite(message.targetFriendBrief, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 target_uid = 8; */
        if (message.targetUid !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForceAddPlayerFriendRsp
 */
exports.ForceAddPlayerFriendRsp = new ForceAddPlayerFriendRsp$Type();
