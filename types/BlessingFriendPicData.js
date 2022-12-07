"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlessingFriendPicData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
// @generated message type with reflection information, may provide speed optimized methods
class BlessingFriendPicData$Type extends runtime_5.MessageType {
    constructor() {
        super("BlessingFriendPicData", [
            { no: 8, name: "remark_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "signature", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "pic_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 15, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture }
        ]);
    }
    create(value) {
        const message = { remarkName: "", avatarId: 0, signature: "", picNumMap: {}, uid: 0, nickname: "" };
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
                case /* string remark_name */ 8:
                    message.remarkName = reader.string();
                    break;
                case /* uint32 avatar_id */ 4:
                    message.avatarId = reader.uint32();
                    break;
                case /* string signature */ 13:
                    message.signature = reader.string();
                    break;
                case /* map<uint32, uint32> pic_num_map */ 5:
                    this.binaryReadMap5(message.picNumMap, reader, options);
                    break;
                case /* uint32 uid */ 15:
                    message.uid = reader.uint32();
                    break;
                case /* string nickname */ 9:
                    message.nickname = reader.string();
                    break;
                case /* ProfilePicture profile_picture */ 7:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
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
                default: throw new globalThis.Error("unknown map entry field for field BlessingFriendPicData.pic_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* string remark_name = 8; */
        if (message.remarkName !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.remarkName);
        /* uint32 avatar_id = 4; */
        if (message.avatarId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* string signature = 13; */
        if (message.signature !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.signature);
        /* map<uint32, uint32> pic_num_map = 5; */
        for (let k of Object.keys(message.picNumMap))
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.picNumMap[k]).join();
        /* uint32 uid = 15; */
        if (message.uid !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.uid);
        /* string nickname = 9; */
        if (message.nickname !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* ProfilePicture profile_picture = 7; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlessingFriendPicData
 */
exports.BlessingFriendPicData = new BlessingFriendPicData$Type();
