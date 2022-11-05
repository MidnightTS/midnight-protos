"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayTeamEntityInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilitySyncStateInfo_1 = require("./AbilitySyncStateInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlayTeamEntityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayTeamEntityInfo", [
            { no: 1, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "player_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "authority_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "gadget_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "ability_info", kind: "message", T: () => AbilitySyncStateInfo_1.AbilitySyncStateInfo }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 player_uid */ 2:
                    message.playerUid = reader.uint32();
                    break;
                case /* optional uint32 authority_peer_id */ 3:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* optional uint32 gadget_config_id */ 5:
                    message.gadgetConfigId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AbilitySyncStateInfo ability_info */ 6:
                    message.abilityInfo = AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.abilityInfo);
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
        /* optional uint32 entity_id = 1; */
        if (message.entityId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 player_uid = 2; */
        if (message.playerUid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* optional uint32 authority_peer_id = 3; */
        if (message.authorityPeerId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.authorityPeerId);
        /* optional uint32 gadget_config_id = 5; */
        if (message.gadgetConfigId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.gadgetConfigId);
        /* optional com.midnights.game.AbilitySyncStateInfo ability_info = 6; */
        if (message.abilityInfo)
            AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryWrite(message.abilityInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayTeamEntityInfo
 */
exports.PlayTeamEntityInfo = new PlayTeamEntityInfo$Type();
