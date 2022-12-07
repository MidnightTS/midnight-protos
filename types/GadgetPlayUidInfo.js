"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetPlayUidInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProfilePicture_1 = require("./ProfilePicture");
// @generated message type with reflection information, may provide speed optimized methods
class GadgetPlayUidInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GadgetPlayUidInfo", [
            { no: 5, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "icon", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "battle_watcher_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "profile_picture", kind: "message", T: () => ProfilePicture_1.ProfilePicture },
            { no: 12, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { onlineId: "", score: 0, nickname: "", icon: 0, battleWatcherId: 0, uid: 0 };
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
                case /* string online_id */ 5:
                    message.onlineId = reader.string();
                    break;
                case /* uint32 score */ 1:
                    message.score = reader.uint32();
                    break;
                case /* string nickname */ 11:
                    message.nickname = reader.string();
                    break;
                case /* uint32 icon */ 15:
                    message.icon = reader.uint32();
                    break;
                case /* uint32 battle_watcher_id */ 9:
                    message.battleWatcherId = reader.uint32();
                    break;
                case /* ProfilePicture profile_picture */ 6:
                    message.profilePicture = ProfilePicture_1.ProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* uint32 uid */ 12:
                    message.uid = reader.uint32();
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
        /* string online_id = 5; */
        if (message.onlineId !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.onlineId);
        /* uint32 score = 1; */
        if (message.score !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.score);
        /* string nickname = 11; */
        if (message.nickname !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* uint32 icon = 15; */
        if (message.icon !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.icon);
        /* uint32 battle_watcher_id = 9; */
        if (message.battleWatcherId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.battleWatcherId);
        /* ProfilePicture profile_picture = 6; */
        if (message.profilePicture)
            ProfilePicture_1.ProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 uid = 12; */
        if (message.uid !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetPlayUidInfo
 */
exports.GadgetPlayUidInfo = new GadgetPlayUidInfo$Type();
