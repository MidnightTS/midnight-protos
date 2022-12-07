"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityGetFriendGiftWishListRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ActivityFriendGiftWishData_1 = require("./ActivityFriendGiftWishData");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityGetFriendGiftWishListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityGetFriendGiftWishListRsp", [
            { no: 12, name: "friend_gift_wish_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ActivityFriendGiftWishData_1.ActivityFriendGiftWishData },
            { no: 4, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { friendGiftWishList: [], scheduleId: 0, retcode: 0 };
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
                case /* repeated ActivityFriendGiftWishData friend_gift_wish_list */ 12:
                    message.friendGiftWishList.push(ActivityFriendGiftWishData_1.ActivityFriendGiftWishData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 schedule_id */ 4:
                    message.scheduleId = reader.uint32();
                    break;
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
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
        /* repeated ActivityFriendGiftWishData friend_gift_wish_list = 12; */
        for (let i = 0; i < message.friendGiftWishList.length; i++)
            ActivityFriendGiftWishData_1.ActivityFriendGiftWishData.internalBinaryWrite(message.friendGiftWishList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 schedule_id = 4; */
        if (message.scheduleId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityGetFriendGiftWishListRsp
 */
exports.ActivityGetFriendGiftWishListRsp = new ActivityGetFriendGiftWishListRsp$Type();
