"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarLifeStateChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlayerDieType_1 = require("./PlayerDieType");
const ServerBuff_1 = require("./ServerBuff");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarLifeStateChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarLifeStateChangeNotify", [
            { no: 11, name: "source_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ServerBuff_1.ServerBuff },
            { no: 12, name: "move_reliable_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "life_state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "die_type", kind: "enum", T: () => ["PlayerDieType", PlayerDieType_1.PlayerDieType, "PLAYER_DIE_TYPE_"] },
            { no: 15, name: "attack_tag", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { sourceEntityId: 0, serverBuffList: [], moveReliableSeq: 0, lifeState: 0, dieType: 0, attackTag: "", avatarGuid: 0n };
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
                case /* uint32 source_entity_id */ 11:
                    message.sourceEntityId = reader.uint32();
                    break;
                case /* repeated ServerBuff server_buff_list */ 14:
                    message.serverBuffList.push(ServerBuff_1.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 move_reliable_seq */ 12:
                    message.moveReliableSeq = reader.uint32();
                    break;
                case /* uint32 life_state */ 6:
                    message.lifeState = reader.uint32();
                    break;
                case /* PlayerDieType die_type */ 5:
                    message.dieType = reader.int32();
                    break;
                case /* string attack_tag */ 15:
                    message.attackTag = reader.string();
                    break;
                case /* uint64 avatar_guid */ 2:
                    message.avatarGuid = reader.uint64().toBigInt();
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
        /* uint32 source_entity_id = 11; */
        if (message.sourceEntityId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.sourceEntityId);
        /* repeated ServerBuff server_buff_list = 14; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            ServerBuff_1.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 move_reliable_seq = 12; */
        if (message.moveReliableSeq !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.moveReliableSeq);
        /* uint32 life_state = 6; */
        if (message.lifeState !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.lifeState);
        /* PlayerDieType die_type = 5; */
        if (message.dieType !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.dieType);
        /* string attack_tag = 15; */
        if (message.attackTag !== "")
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.attackTag);
        /* uint64 avatar_guid = 2; */
        if (message.avatarGuid !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarLifeStateChangeNotify
 */
exports.AvatarLifeStateChangeNotify = new AvatarLifeStateChangeNotify$Type();
