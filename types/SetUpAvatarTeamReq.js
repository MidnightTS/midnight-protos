"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetUpAvatarTeamReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SetUpAvatarTeamReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SetUpAvatarTeamReq", [
            { no: 13, name: "team_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "cur_avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 14, name: "avatar_team_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { teamId: 0, curAvatarGuid: 0n, avatarTeamGuidList: [] };
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
                case /* uint32 team_id */ 13:
                    message.teamId = reader.uint32();
                    break;
                case /* uint64 cur_avatar_guid */ 5:
                    message.curAvatarGuid = reader.uint64().toBigInt();
                    break;
                case /* repeated uint64 avatar_team_guid_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarTeamGuidList.push(reader.uint64().toBigInt());
                    else
                        message.avatarTeamGuidList.push(reader.uint64().toBigInt());
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
        /* uint32 team_id = 13; */
        if (message.teamId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.teamId);
        /* uint64 cur_avatar_guid = 5; */
        if (message.curAvatarGuid !== 0n)
            writer.tag(5, runtime_2.WireType.Varint).uint64(message.curAvatarGuid);
        /* repeated uint64 avatar_team_guid_list = 14; */
        if (message.avatarTeamGuidList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarTeamGuidList.length; i++)
                writer.uint64(message.avatarTeamGuidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetUpAvatarTeamReq
 */
exports.SetUpAvatarTeamReq = new SetUpAvatarTeamReq$Type();
