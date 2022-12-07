"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityFriendGiftWishData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityFriendGiftWishData$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityFriendGiftWishData", [
            { no: 5, name: "gift_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 7, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 12, name: "remark_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { giftNumMap: {}, uid: 0, remarkName: "", nickname: "" };
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
                case /* map<uint32, uint32> gift_num_map */ 5:
                    this.binaryReadMap5(message.giftNumMap, reader, options);
                    break;
                case /* uint32 uid */ 7:
                    message.uid = reader.uint32();
                    break;
                case /* ProfilePicture profile_picture */ 11:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* string remark_name */ 12:
                    message.remarkName = reader.string();
                    break;
                case /* string nickname */ 2:
                    message.nickname = reader.string();
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
    binaryReadMap5(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ActivityFriendGiftWishData.gift_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> gift_num_map = 5; */
        for (let k of Object.keys(message.giftNumMap))
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.giftNumMap[k]).join();
        /* uint32 uid = 7; */
        if (message.uid !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.uid);
        /* ProfilePicture profile_picture = 11; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string remark_name = 12; */
        if (message.remarkName !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.remarkName);
        /* string nickname = 2; */
        if (message.nickname !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.nickname);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityFriendGiftWishData
 */
exports.ActivityFriendGiftWishData = new ActivityFriendGiftWishData$Type();
