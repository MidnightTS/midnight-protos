"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HideAndSeekSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
const ExhibitionDisplayInfo_1 = require("./ExhibitionDisplayInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HideAndSeekSettleInfo", [
            { no: 2, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExhibitionDisplayInfo_1.ExhibitionDisplayInfo },
            { no: 15, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "head_image", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture }
        ]);
    }
    create(value) {
        const message = { cardList: [], nickname: "", headImage: 0, uid: 0, onlineId: "" };
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
                case /* repeated ExhibitionDisplayInfo card_list */ 2:
                    message.cardList.push(ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string nickname */ 15:
                    message.nickname = reader.string();
                    break;
                case /* uint32 head_image */ 9:
                    message.headImage = reader.uint32();
                    break;
                case /* uint32 uid */ 6:
                    message.uid = reader.uint32();
                    break;
                case /* string online_id */ 5:
                    message.onlineId = reader.string();
                    break;
                case /* ProfilePicture profile_picture */ 14:
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
    internalBinaryWrite(message, writer, options) {
        /* repeated ExhibitionDisplayInfo card_list = 2; */
        for (let i = 0; i < message.cardList.length; i++)
            ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryWrite(message.cardList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string nickname = 15; */
        if (message.nickname !== "")
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* uint32 head_image = 9; */
        if (message.headImage !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.headImage);
        /* uint32 uid = 6; */
        if (message.uid !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.uid);
        /* string online_id = 5; */
        if (message.onlineId !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* ProfilePicture profile_picture = 14; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HideAndSeekSettleInfo
 */
exports.HideAndSeekSettleInfo = new HideAndSeekSettleInfo$Type();
