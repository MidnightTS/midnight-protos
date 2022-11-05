"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGadgetInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ClientGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientGadgetInfo", [
            { no: 1, name: "camp_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "camp_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "target_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "async_load", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "is_peer_id_from_player", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "target_entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { targetEntityIdList: [] };
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
                case /* optional uint32 camp_id */ 1:
                    message.campId = reader.uint32();
                    break;
                case /* optional uint32 camp_type */ 2:
                    message.campType = reader.uint32();
                    break;
                case /* optional uint64 guid */ 3:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 owner_entity_id */ 4:
                    message.ownerEntityId = reader.uint32();
                    break;
                case /* optional uint32 target_entity_id */ 5:
                    message.targetEntityId = reader.uint32();
                    break;
                case /* optional bool async_load */ 6:
                    message.asyncLoad = reader.bool();
                    break;
                case /* optional bool is_peer_id_from_player */ 7:
                    message.isPeerIdFromPlayer = reader.bool();
                    break;
                case /* repeated uint32 target_entity_id_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.targetEntityIdList.push(reader.uint32());
                    else
                        message.targetEntityIdList.push(reader.uint32());
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
        /* optional uint32 camp_id = 1; */
        if (message.campId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.campId);
        /* optional uint32 camp_type = 2; */
        if (message.campType !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.campType);
        /* optional uint64 guid = 3; */
        if (message.guid !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint64(message.guid);
        /* optional uint32 owner_entity_id = 4; */
        if (message.ownerEntityId !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.ownerEntityId);
        /* optional uint32 target_entity_id = 5; */
        if (message.targetEntityId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.targetEntityId);
        /* optional bool async_load = 6; */
        if (message.asyncLoad !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.asyncLoad);
        /* optional bool is_peer_id_from_player = 7; */
        if (message.isPeerIdFromPlayer !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isPeerIdFromPlayer);
        /* repeated uint32 target_entity_id_list = 8; */
        if (message.targetEntityIdList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.targetEntityIdList.length; i++)
                writer.uint32(message.targetEntityIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientGadgetInfo
 */
exports.ClientGadgetInfo = new ClientGadgetInfo$Type();
