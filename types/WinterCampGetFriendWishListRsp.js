"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinterCampGetFriendWishListRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WinterCampFriendWishData_1 = require("./WinterCampFriendWishData");
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampGetFriendWishListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("WinterCampGetFriendWishListRsp", [
            { no: 3, name: "wish_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WinterCampFriendWishData_1.WinterCampFriendWishData },
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { wishDataList: [], retcode: 0 };
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
                case /* repeated WinterCampFriendWishData wish_data_list */ 3:
                    message.wishDataList.push(WinterCampFriendWishData_1.WinterCampFriendWishData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 15:
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
        /* repeated WinterCampFriendWishData wish_data_list = 3; */
        for (let i = 0; i < message.wishDataList.length; i++)
            WinterCampFriendWishData_1.WinterCampFriendWishData.internalBinaryWrite(message.wishDataList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampGetFriendWishListRsp
 */
exports.WinterCampGetFriendWishListRsp = new WinterCampGetFriendWishListRsp$Type();
