"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrucibleBattleUidInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
// @generated message type with reflection information, may provide speed optimized methods
class CrucibleBattleUidInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CrucibleBattleUidInfo", [
            { no: 8, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 14, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "icon", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, icon: 0, onlineId: "", nickname: "" };
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
                case /* ProfilePicture profile_picture */ 8:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* uint32 uid */ 14:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 icon */ 4:
                    message.icon = reader.uint32();
                    break;
                case /* string online_id */ 13:
                    message.onlineId = reader.string();
                    break;
                case /* string nickname */ 3:
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
    internalBinaryWrite(message, writer, options) {
        /* ProfilePicture profile_picture = 8; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 uid = 14; */
        if (message.uid !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.uid);
        /* uint32 icon = 4; */
        if (message.icon !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.icon);
        /* string online_id = 13; */
        if (message.onlineId !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* string nickname = 3; */
        if (message.nickname !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.nickname);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CrucibleBattleUidInfo
 */
exports.CrucibleBattleUidInfo = new CrucibleBattleUidInfo$Type();
