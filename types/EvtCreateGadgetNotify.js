"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtCreateGadgetNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForwardType_1 = require("./ForwardType");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtCreateGadgetNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtCreateGadgetNotify", [
            { no: 1652, name: "target_entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "init_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 15, name: "Unk3300_DLBIJFOONBA", kind: "scalar", jsonName: "Unk3300DLBIJFOONBA", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "owner_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 414, name: "target_lock_point_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "prop_owner_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "target_lock_point_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1433, name: "Unk3300_OJHDJGAFDNN", kind: "scalar", jsonName: "Unk3300OJHDJGAFDNN", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "camp_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_EJNBIGLGMII", kind: "scalar", jsonName: "Unk3300EJNBIGLGMII", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "init_euler_angles", kind: "message", T: () => Vector_1.Vector },
            { no: 609, name: "is_peer_id_from_player", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "room_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "camp_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "target_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { targetEntityIdList: [], unk3300DLBIJFOONBA: false, ownerEntityId: 0, forwardType: 0, targetLockPointIndexList: [], propOwnerEntityId: 0, targetLockPointIndex: 0, unk3300OJHDJGAFDNN: false, campId: 0, unk3300EJNBIGLGMII: false, isPeerIdFromPlayer: false, roomId: 0, configId: 0, campType: 0, guid: 0n, entityId: 0, targetEntityId: 0 };
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
                case /* repeated uint32 target_entity_id_list */ 1652:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.targetEntityIdList.push(reader.uint32());
                    else
                        message.targetEntityIdList.push(reader.uint32());
                    break;
                case /* Vector init_pos */ 9:
                    message.initPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.initPos);
                    break;
                case /* bool Unk3300_DLBIJFOONBA = 15 [json_name = "Unk3300DLBIJFOONBA"];*/ 15:
                    message.unk3300DLBIJFOONBA = reader.bool();
                    break;
                case /* uint32 owner_entity_id */ 2:
                    message.ownerEntityId = reader.uint32();
                    break;
                case /* ForwardType forward_type */ 3:
                    message.forwardType = reader.int32();
                    break;
                case /* repeated uint32 target_lock_point_index_list */ 414:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.targetLockPointIndexList.push(reader.uint32());
                    else
                        message.targetLockPointIndexList.push(reader.uint32());
                    break;
                case /* uint32 prop_owner_entity_id */ 6:
                    message.propOwnerEntityId = reader.uint32();
                    break;
                case /* uint32 target_lock_point_index */ 4:
                    message.targetLockPointIndex = reader.uint32();
                    break;
                case /* bool Unk3300_OJHDJGAFDNN = 1433 [json_name = "Unk3300OJHDJGAFDNN"];*/ 1433:
                    message.unk3300OJHDJGAFDNN = reader.bool();
                    break;
                case /* uint32 camp_id */ 10:
                    message.campId = reader.uint32();
                    break;
                case /* bool Unk3300_EJNBIGLGMII = 8 [json_name = "Unk3300EJNBIGLGMII"];*/ 8:
                    message.unk3300EJNBIGLGMII = reader.bool();
                    break;
                case /* Vector init_euler_angles */ 12:
                    message.initEulerAngles = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.initEulerAngles);
                    break;
                case /* bool is_peer_id_from_player */ 609:
                    message.isPeerIdFromPlayer = reader.bool();
                    break;
                case /* uint32 room_id */ 5:
                    message.roomId = reader.uint32();
                    break;
                case /* uint32 config_id */ 14:
                    message.configId = reader.uint32();
                    break;
                case /* uint32 camp_type */ 13:
                    message.campType = reader.uint32();
                    break;
                case /* uint64 guid */ 7:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 target_entity_id */ 11:
                    message.targetEntityId = reader.uint32();
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
        /* repeated uint32 target_entity_id_list = 1652; */
        if (message.targetEntityIdList.length) {
            writer.tag(1652, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.targetEntityIdList.length; i++)
                writer.uint32(message.targetEntityIdList[i]);
            writer.join();
        }
        /* Vector init_pos = 9; */
        if (message.initPos)
            Vector_1.Vector.internalBinaryWrite(message.initPos, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_DLBIJFOONBA = 15 [json_name = "Unk3300DLBIJFOONBA"]; */
        if (message.unk3300DLBIJFOONBA !== false)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.unk3300DLBIJFOONBA);
        /* uint32 owner_entity_id = 2; */
        if (message.ownerEntityId !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.ownerEntityId);
        /* ForwardType forward_type = 3; */
        if (message.forwardType !== 0)
            writer.tag(3, runtime_2.WireType.Varint).int32(message.forwardType);
        /* repeated uint32 target_lock_point_index_list = 414; */
        if (message.targetLockPointIndexList.length) {
            writer.tag(414, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.targetLockPointIndexList.length; i++)
                writer.uint32(message.targetLockPointIndexList[i]);
            writer.join();
        }
        /* uint32 prop_owner_entity_id = 6; */
        if (message.propOwnerEntityId !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.propOwnerEntityId);
        /* uint32 target_lock_point_index = 4; */
        if (message.targetLockPointIndex !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.targetLockPointIndex);
        /* bool Unk3300_OJHDJGAFDNN = 1433 [json_name = "Unk3300OJHDJGAFDNN"]; */
        if (message.unk3300OJHDJGAFDNN !== false)
            writer.tag(1433, runtime_2.WireType.Varint).bool(message.unk3300OJHDJGAFDNN);
        /* uint32 camp_id = 10; */
        if (message.campId !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.campId);
        /* bool Unk3300_EJNBIGLGMII = 8 [json_name = "Unk3300EJNBIGLGMII"]; */
        if (message.unk3300EJNBIGLGMII !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.unk3300EJNBIGLGMII);
        /* Vector init_euler_angles = 12; */
        if (message.initEulerAngles)
            Vector_1.Vector.internalBinaryWrite(message.initEulerAngles, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* bool is_peer_id_from_player = 609; */
        if (message.isPeerIdFromPlayer !== false)
            writer.tag(609, runtime_2.WireType.Varint).bool(message.isPeerIdFromPlayer);
        /* uint32 room_id = 5; */
        if (message.roomId !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.roomId);
        /* uint32 config_id = 14; */
        if (message.configId !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.configId);
        /* uint32 camp_type = 13; */
        if (message.campType !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.campType);
        /* uint64 guid = 7; */
        if (message.guid !== 0n)
            writer.tag(7, runtime_2.WireType.Varint).uint64(message.guid);
        /* uint32 entity_id = 1; */
        if (message.entityId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.entityId);
        /* uint32 target_entity_id = 11; */
        if (message.targetEntityId !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.targetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtCreateGadgetNotify
 */
exports.EvtCreateGadgetNotify = new EvtCreateGadgetNotify$Type();
