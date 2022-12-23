"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneTeamUpdateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SceneTeamAvatar_1 = require("./SceneTeamAvatar");
// @generated message type with reflection information, may provide speed optimized methods
class SceneTeamUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneTeamUpdateNotify", [
            { no: 11, name: "scene_team_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SceneTeamAvatar_1.SceneTeamAvatar },
            { no: 7, name: "is_in_mp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { sceneTeamAvatarList: [], isInMp: false };
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
                case /* repeated SceneTeamAvatar scene_team_avatar_list */ 11:
                    message.sceneTeamAvatarList.push(SceneTeamAvatar_1.SceneTeamAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_in_mp */ 7:
                    message.isInMp = reader.bool();
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
        /* repeated SceneTeamAvatar scene_team_avatar_list = 11; */
        for (let i = 0; i < message.sceneTeamAvatarList.length; i++)
            SceneTeamAvatar_1.SceneTeamAvatar.internalBinaryWrite(message.sceneTeamAvatarList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_in_mp = 7; */
        if (message.isInMp !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isInMp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneTeamUpdateNotify
 */
exports.SceneTeamUpdateNotify = new SceneTeamUpdateNotify$Type();
