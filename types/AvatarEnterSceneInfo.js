"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarEnterSceneInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilitySyncStateInfo_1 = require("./AbilitySyncStateInfo");
const ServerBuff_1 = require("./ServerBuff");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarEnterSceneInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarEnterSceneInfo", [
            { no: 5, name: "weapon_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "avatar_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ServerBuff_1.ServerBuff },
            { no: 6, name: "Unk3300_EMAGOKCPPKN", kind: "message", jsonName: "Unk3300EMAGOKCPPKN", T: () => AbilitySyncStateInfo_1.AbilitySyncStateInfo },
            { no: 8, name: "buff_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_FCDDPFADNAI", kind: "message", jsonName: "Unk3300FCDDPFADNAI", T: () => AbilitySyncStateInfo_1.AbilitySyncStateInfo },
            { no: 15, name: "weapon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { weaponEntityId: 0, avatarGuid: 0n, avatarEntityId: 0, serverBuffList: [], buffIdList: [], weaponGuid: 0n };
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
                case /* uint32 weapon_entity_id */ 5:
                    message.weaponEntityId = reader.uint32();
                    break;
                case /* uint64 avatar_guid */ 9:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 avatar_entity_id */ 13:
                    message.avatarEntityId = reader.uint32();
                    break;
                case /* repeated ServerBuff server_buff_list */ 7:
                    message.serverBuffList.push(ServerBuff_1.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* AbilitySyncStateInfo Unk3300_EMAGOKCPPKN = 6 [json_name = "Unk3300EMAGOKCPPKN"];*/ 6:
                    message.unk3300EMAGOKCPPKN = AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.unk3300EMAGOKCPPKN);
                    break;
                case /* repeated uint32 buff_id_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.buffIdList.push(reader.uint32());
                    else
                        message.buffIdList.push(reader.uint32());
                    break;
                case /* AbilitySyncStateInfo Unk3300_FCDDPFADNAI = 1 [json_name = "Unk3300FCDDPFADNAI"];*/ 1:
                    message.unk3300FCDDPFADNAI = AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.unk3300FCDDPFADNAI);
                    break;
                case /* uint64 weapon_guid */ 15:
                    message.weaponGuid = reader.uint64().toBigInt();
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
        /* uint32 weapon_entity_id = 5; */
        if (message.weaponEntityId !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.weaponEntityId);
        /* uint64 avatar_guid = 9; */
        if (message.avatarGuid !== 0n)
            writer.tag(9, runtime_2.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 avatar_entity_id = 13; */
        if (message.avatarEntityId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.avatarEntityId);
        /* repeated ServerBuff server_buff_list = 7; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            ServerBuff_1.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* AbilitySyncStateInfo Unk3300_EMAGOKCPPKN = 6 [json_name = "Unk3300EMAGOKCPPKN"]; */
        if (message.unk3300EMAGOKCPPKN)
            AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryWrite(message.unk3300EMAGOKCPPKN, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 buff_id_list = 8; */
        if (message.buffIdList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.buffIdList.length; i++)
                writer.uint32(message.buffIdList[i]);
            writer.join();
        }
        /* AbilitySyncStateInfo Unk3300_FCDDPFADNAI = 1 [json_name = "Unk3300FCDDPFADNAI"]; */
        if (message.unk3300FCDDPFADNAI)
            AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryWrite(message.unk3300FCDDPFADNAI, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint64 weapon_guid = 15; */
        if (message.weaponGuid !== 0n)
            writer.tag(15, runtime_2.WireType.Varint).uint64(message.weaponGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarEnterSceneInfo
 */
exports.AvatarEnterSceneInfo = new AvatarEnterSceneInfo$Type();
