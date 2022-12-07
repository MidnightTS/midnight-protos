"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarTeamUpdateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarTeam_1 = require("./AvatarTeam");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarTeamUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarTeamUpdateNotify", [
            { no: 15, name: "avatar_team_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => AvatarTeam_1.AvatarTeam } },
            { no: 10, name: "temp_avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { avatarTeamMap: {}, tempAvatarGuidList: [] };
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
                case /* map<uint32, AvatarTeam> avatar_team_map */ 15:
                    this.binaryReadMap15(message.avatarTeamMap, reader, options);
                    break;
                case /* repeated uint64 temp_avatar_guid_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tempAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.tempAvatarGuidList.push(reader.uint64().toBigInt());
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
    binaryReadMap15(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = AvatarTeam_1.AvatarTeam.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarTeamUpdateNotify.avatar_team_map");
            }
        }
        map[key ?? 0] = val ?? AvatarTeam_1.AvatarTeam.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, AvatarTeam> avatar_team_map = 15; */
        for (let k of Object.keys(message.avatarTeamMap)) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            AvatarTeam_1.AvatarTeam.internalBinaryWrite(message.avatarTeamMap[k], writer, options);
            writer.join().join();
        }
        /* repeated uint64 temp_avatar_guid_list = 10; */
        if (message.tempAvatarGuidList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tempAvatarGuidList.length; i++)
                writer.uint64(message.tempAvatarGuidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarTeamUpdateNotify
 */
exports.AvatarTeamUpdateNotify = new AvatarTeamUpdateNotify$Type();
