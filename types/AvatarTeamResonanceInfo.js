"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarTeamResonanceInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarTeamResonanceInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarTeamResonanceInfo", [
            { no: 9, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "add_team_resonance_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "del_team_resonance_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n, entityId: 0, addTeamResonanceIdList: [], delTeamResonanceIdList: [] };
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
                case /* uint64 avatar_guid */ 9:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
                    break;
                case /* repeated uint32 add_team_resonance_id_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.addTeamResonanceIdList.push(reader.uint32());
                    else
                        message.addTeamResonanceIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 del_team_resonance_id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.delTeamResonanceIdList.push(reader.uint32());
                    else
                        message.delTeamResonanceIdList.push(reader.uint32());
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
        /* uint64 avatar_guid = 9; */
        if (message.avatarGuid !== 0n)
            writer.tag(9, runtime_2.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 entity_id = 8; */
        if (message.entityId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.entityId);
        /* repeated uint32 add_team_resonance_id_list = 15; */
        if (message.addTeamResonanceIdList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.addTeamResonanceIdList.length; i++)
                writer.uint32(message.addTeamResonanceIdList[i]);
            writer.join();
        }
        /* repeated uint32 del_team_resonance_id_list = 13; */
        if (message.delTeamResonanceIdList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.delTeamResonanceIdList.length; i++)
                writer.uint32(message.delTeamResonanceIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarTeamResonanceInfo
 */
exports.AvatarTeamResonanceInfo = new AvatarTeamResonanceInfo$Type();
