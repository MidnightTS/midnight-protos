"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneTeamAvatar = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ServerBuff_1 = require("./ServerBuff");
const SceneEntityInfo_1 = require("./SceneEntityInfo");
const AbilityControlBlock_1 = require("./AbilityControlBlock");
const AbilitySyncStateInfo_1 = require("./AbilitySyncStateInfo");
const AvatarInfo_1 = require("./AvatarInfo");
const SceneAvatarInfo_1 = require("./SceneAvatarInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneTeamAvatar$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneTeamAvatar", [
            { no: 14, name: "scene_avatar_info", kind: "message", T: () => SceneAvatarInfo_1.SceneAvatarInfo },
            { no: 15, name: "avatar_info", kind: "message", T: () => AvatarInfo_1.AvatarInfo },
            { no: 10, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_EMAGOKCPPKN", kind: "message", jsonName: "Unk3300EMAGOKCPPKN", T: () => AbilitySyncStateInfo_1.AbilitySyncStateInfo },
            { no: 2, name: "ability_control_block", kind: "message", T: () => AbilityControlBlock_1.AbilityControlBlock },
            { no: 8, name: "Unk3300_ONCNAJBJGKM", kind: "scalar", jsonName: "Unk3300ONCNAJBJGKM", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "Unk3300_FCDDPFADNAI", kind: "message", jsonName: "Unk3300FCDDPFADNAI", T: () => AbilitySyncStateInfo_1.AbilitySyncStateInfo },
            { no: 12, name: "weapon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "scene_entity_info", kind: "message", T: () => SceneEntityInfo_1.SceneEntityInfo },
            { no: 5, name: "weapon_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 625, name: "Unk3300_ILECHHKDIEM", kind: "scalar", jsonName: "Unk3300ILECHHKDIEM", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "Unk3300_GENGJLPJCCN", kind: "scalar", jsonName: "Unk3300GENGJLPJCCN", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ServerBuff_1.ServerBuff }
        ]);
    }
    create(value) {
        const message = { entityId: 0, unk3300ONCNAJBJGKM: false, weaponGuid: 0n, playerUid: 0, weaponEntityId: 0, sceneId: 0, unk3300ILECHHKDIEM: false, avatarGuid: 0n, unk3300GENGJLPJCCN: false, serverBuffList: [] };
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
                case /* SceneAvatarInfo scene_avatar_info */ 14:
                    message.sceneAvatarInfo = SceneAvatarInfo_1.SceneAvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneAvatarInfo);
                    break;
                case /* AvatarInfo avatar_info */ 15:
                    message.avatarInfo = AvatarInfo_1.AvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatarInfo);
                    break;
                case /* uint32 entity_id */ 10:
                    message.entityId = reader.uint32();
                    break;
                case /* AbilitySyncStateInfo Unk3300_EMAGOKCPPKN = 6 [json_name = "Unk3300EMAGOKCPPKN"];*/ 6:
                    message.unk3300EMAGOKCPPKN = AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.unk3300EMAGOKCPPKN);
                    break;
                case /* AbilityControlBlock ability_control_block */ 2:
                    message.abilityControlBlock = AbilityControlBlock_1.AbilityControlBlock.internalBinaryRead(reader, reader.uint32(), options, message.abilityControlBlock);
                    break;
                case /* bool Unk3300_ONCNAJBJGKM = 8 [json_name = "Unk3300ONCNAJBJGKM"];*/ 8:
                    message.unk3300ONCNAJBJGKM = reader.bool();
                    break;
                case /* AbilitySyncStateInfo Unk3300_FCDDPFADNAI = 4 [json_name = "Unk3300FCDDPFADNAI"];*/ 4:
                    message.unk3300FCDDPFADNAI = AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.unk3300FCDDPFADNAI);
                    break;
                case /* uint64 weapon_guid */ 12:
                    message.weaponGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 player_uid */ 1:
                    message.playerUid = reader.uint32();
                    break;
                case /* SceneEntityInfo scene_entity_info */ 11:
                    message.sceneEntityInfo = SceneEntityInfo_1.SceneEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneEntityInfo);
                    break;
                case /* uint32 weapon_entity_id */ 5:
                    message.weaponEntityId = reader.uint32();
                    break;
                case /* uint32 scene_id */ 9:
                    message.sceneId = reader.uint32();
                    break;
                case /* bool Unk3300_ILECHHKDIEM = 625 [json_name = "Unk3300ILECHHKDIEM"];*/ 625:
                    message.unk3300ILECHHKDIEM = reader.bool();
                    break;
                case /* uint64 avatar_guid */ 3:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* bool Unk3300_GENGJLPJCCN = 13 [json_name = "Unk3300GENGJLPJCCN"];*/ 13:
                    message.unk3300GENGJLPJCCN = reader.bool();
                    break;
                case /* repeated ServerBuff server_buff_list */ 7:
                    message.serverBuffList.push(ServerBuff_1.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
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
        /* SceneAvatarInfo scene_avatar_info = 14; */
        if (message.sceneAvatarInfo)
            SceneAvatarInfo_1.SceneAvatarInfo.internalBinaryWrite(message.sceneAvatarInfo, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AvatarInfo avatar_info = 15; */
        if (message.avatarInfo)
            AvatarInfo_1.AvatarInfo.internalBinaryWrite(message.avatarInfo, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 10; */
        if (message.entityId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.entityId);
        /* AbilitySyncStateInfo Unk3300_EMAGOKCPPKN = 6 [json_name = "Unk3300EMAGOKCPPKN"]; */
        if (message.unk3300EMAGOKCPPKN)
            AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryWrite(message.unk3300EMAGOKCPPKN, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityControlBlock ability_control_block = 2; */
        if (message.abilityControlBlock)
            AbilityControlBlock_1.AbilityControlBlock.internalBinaryWrite(message.abilityControlBlock, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_ONCNAJBJGKM = 8 [json_name = "Unk3300ONCNAJBJGKM"]; */
        if (message.unk3300ONCNAJBJGKM !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.unk3300ONCNAJBJGKM);
        /* AbilitySyncStateInfo Unk3300_FCDDPFADNAI = 4 [json_name = "Unk3300FCDDPFADNAI"]; */
        if (message.unk3300FCDDPFADNAI)
            AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryWrite(message.unk3300FCDDPFADNAI, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 weapon_guid = 12; */
        if (message.weaponGuid !== 0n)
            writer.tag(12, runtime_1.WireType.Varint).uint64(message.weaponGuid);
        /* uint32 player_uid = 1; */
        if (message.playerUid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* SceneEntityInfo scene_entity_info = 11; */
        if (message.sceneEntityInfo)
            SceneEntityInfo_1.SceneEntityInfo.internalBinaryWrite(message.sceneEntityInfo, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 weapon_entity_id = 5; */
        if (message.weaponEntityId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.weaponEntityId);
        /* uint32 scene_id = 9; */
        if (message.sceneId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* bool Unk3300_ILECHHKDIEM = 625 [json_name = "Unk3300ILECHHKDIEM"]; */
        if (message.unk3300ILECHHKDIEM !== false)
            writer.tag(625, runtime_1.WireType.Varint).bool(message.unk3300ILECHHKDIEM);
        /* uint64 avatar_guid = 3; */
        if (message.avatarGuid !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* bool Unk3300_GENGJLPJCCN = 13 [json_name = "Unk3300GENGJLPJCCN"]; */
        if (message.unk3300GENGJLPJCCN !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.unk3300GENGJLPJCCN);
        /* repeated ServerBuff server_buff_list = 7; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            ServerBuff_1.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneTeamAvatar
 */
exports.SceneTeamAvatar = new SceneTeamAvatar$Type();
