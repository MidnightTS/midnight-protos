"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerEnterSceneInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MPLevelEntityInfo_1 = require("./MPLevelEntityInfo");
const AvatarEnterSceneInfo_1 = require("./AvatarEnterSceneInfo");
const TeamEnterSceneInfo_1 = require("./TeamEnterSceneInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerEnterSceneInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerEnterSceneInfoNotify", [
            { no: 6, name: "team_enter_info", kind: "message", T: () => TeamEnterSceneInfo_1.TeamEnterSceneInfo },
            { no: 10, name: "avatar_enter_info", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AvatarEnterSceneInfo_1.AvatarEnterSceneInfo },
            { no: 4, name: "cur_avatar_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "mp_level_entity_info", kind: "message", T: () => MPLevelEntityInfo_1.MPLevelEntityInfo },
            { no: 1, name: "enter_scene_token", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarEnterInfo: [], curAvatarEntityId: 0, enterSceneToken: 0 };
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
                case /* TeamEnterSceneInfo team_enter_info */ 6:
                    message.teamEnterInfo = TeamEnterSceneInfo_1.TeamEnterSceneInfo.internalBinaryRead(reader, reader.uint32(), options, message.teamEnterInfo);
                    break;
                case /* repeated AvatarEnterSceneInfo avatar_enter_info */ 10:
                    message.avatarEnterInfo.push(AvatarEnterSceneInfo_1.AvatarEnterSceneInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 cur_avatar_entity_id */ 4:
                    message.curAvatarEntityId = reader.uint32();
                    break;
                case /* MPLevelEntityInfo mp_level_entity_info */ 15:
                    message.mpLevelEntityInfo = MPLevelEntityInfo_1.MPLevelEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.mpLevelEntityInfo);
                    break;
                case /* uint32 enter_scene_token */ 1:
                    message.enterSceneToken = reader.uint32();
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
        /* TeamEnterSceneInfo team_enter_info = 6; */
        if (message.teamEnterInfo)
            TeamEnterSceneInfo_1.TeamEnterSceneInfo.internalBinaryWrite(message.teamEnterInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated AvatarEnterSceneInfo avatar_enter_info = 10; */
        for (let i = 0; i < message.avatarEnterInfo.length; i++)
            AvatarEnterSceneInfo_1.AvatarEnterSceneInfo.internalBinaryWrite(message.avatarEnterInfo[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 cur_avatar_entity_id = 4; */
        if (message.curAvatarEntityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.curAvatarEntityId);
        /* MPLevelEntityInfo mp_level_entity_info = 15; */
        if (message.mpLevelEntityInfo)
            MPLevelEntityInfo_1.MPLevelEntityInfo.internalBinaryWrite(message.mpLevelEntityInfo, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 enter_scene_token = 1; */
        if (message.enterSceneToken !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerEnterSceneInfoNotify
 */
exports.PlayerEnterSceneInfoNotify = new PlayerEnterSceneInfoNotify$Type();
