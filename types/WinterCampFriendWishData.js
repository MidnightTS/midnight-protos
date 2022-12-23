"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinterCampFriendWishData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampFriendWishData$Type extends runtime_5.MessageType {
    constructor() {
        super("WinterCampFriendWishData", [
            { no: 9, name: "item_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture }
        ]);
    }
    create(value) {
        const message = { itemIdList: [], nickname: "", uid: 0 };
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
                case /* repeated uint32 item_id_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.itemIdList.push(reader.uint32());
                    else
                        message.itemIdList.push(reader.uint32());
                    break;
                case /* string nickname */ 15:
                    message.nickname = reader.string();
                    break;
                case /* uint32 uid */ 6:
                    message.uid = reader.uint32();
                    break;
                case /* ProfilePicture profile_picture */ 10:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 item_id_list = 9; */
        if (message.itemIdList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.itemIdList.length; i++)
                writer.uint32(message.itemIdList[i]);
            writer.join();
        }
        /* string nickname = 15; */
        if (message.nickname !== "")
            writer.tag(15, runtime_2.WireType.LengthDelimited).string(message.nickname);
        /* uint32 uid = 6; */
        if (message.uid !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.uid);
        /* ProfilePicture profile_picture = 10; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampFriendWishData
 */
exports.WinterCampFriendWishData = new WinterCampFriendWishData$Type();
