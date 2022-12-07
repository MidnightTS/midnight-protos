"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeGroupPlayerInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
// @generated message type with reflection information, may provide speed optimized methods
class HomeGroupPlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeGroupPlayerInfo", [
            { no: 10, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 9, name: "player_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { psnId: "", nickname: "", uid: 0, playerLevel: 0, onlineId: "" };
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
                case /* string psn_id */ 10:
                    message.psnId = reader.string();
                    break;
                case /* string nickname */ 13:
                    message.nickname = reader.string();
                    break;
                case /* uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* ProfilePicture profile_picture */ 2:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* uint32 player_level */ 9:
                    message.playerLevel = reader.uint32();
                    break;
                case /* string online_id */ 4:
                    message.onlineId = reader.string();
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
        /* string psn_id = 10; */
        if (message.psnId !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.psnId);
        /* string nickname = 13; */
        if (message.nickname !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* uint32 uid = 1; */
        if (message.uid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.uid);
        /* ProfilePicture profile_picture = 2; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 player_level = 9; */
        if (message.playerLevel !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.playerLevel);
        /* string online_id = 4; */
        if (message.onlineId !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeGroupPlayerInfo
 */
exports.HomeGroupPlayerInfo = new HomeGroupPlayerInfo$Type();
