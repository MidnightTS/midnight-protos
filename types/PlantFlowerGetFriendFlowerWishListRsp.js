"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantFlowerGetFriendFlowerWishListRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlantFlowerFriendFlowerWishData_1 = require("./PlantFlowerFriendFlowerWishData");
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerGetFriendFlowerWishListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlantFlowerGetFriendFlowerWishListRsp", [
            { no: 14, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "friend_flower_wish_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PlantFlowerFriendFlowerWishData_1.PlantFlowerFriendFlowerWishData }
        ]);
    }
    create(value) {
        const message = { scheduleId: 0, retcode: 0, friendFlowerWishList: [] };
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
                case /* uint32 schedule_id */ 14:
                    message.scheduleId = reader.uint32();
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* repeated PlantFlowerFriendFlowerWishData friend_flower_wish_list */ 13:
                    message.friendFlowerWishList.push(PlantFlowerFriendFlowerWishData_1.PlantFlowerFriendFlowerWishData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 schedule_id = 14; */
        if (message.scheduleId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated PlantFlowerFriendFlowerWishData friend_flower_wish_list = 13; */
        for (let i = 0; i < message.friendFlowerWishList.length; i++)
            PlantFlowerFriendFlowerWishData_1.PlantFlowerFriendFlowerWishData.internalBinaryWrite(message.friendFlowerWishList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerGetFriendFlowerWishListRsp
 */
exports.PlantFlowerGetFriendFlowerWishListRsp = new PlantFlowerGetFriendFlowerWishListRsp$Type();
