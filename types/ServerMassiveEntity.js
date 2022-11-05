"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerMassiveEntity = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MassiveBoxInfo_1 = require("./MassiveBoxInfo");
const MassiveGrassInfo_1 = require("./MassiveGrassInfo");
const MassiveWaterInfo_1 = require("./MassiveWaterInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ServerMassiveEntity$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ServerMassiveEntity", [
            { no: 1, name: "entity_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "runtime_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "authority_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "obj_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "water_info", kind: "message", oneof: "entityInfo", T: () => MassiveWaterInfo_1.MassiveWaterInfo },
            { no: 7, name: "grass_info", kind: "message", oneof: "entityInfo", T: () => MassiveGrassInfo_1.MassiveGrassInfo },
            { no: 8, name: "box_info", kind: "message", oneof: "entityInfo", T: () => MassiveBoxInfo_1.MassiveBoxInfo }
        ]);
    }
    create(value) {
        const message = { entityInfo: { oneofKind: undefined } };
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
                case /* optional uint32 entity_type */ 1:
                    message.entityType = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* optional uint32 runtime_id */ 3:
                    message.runtimeId = reader.uint32();
                    break;
                case /* optional uint32 authority_peer_id */ 4:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* optional int64 obj_id */ 5:
                    message.objId = reader.int64().toBigInt();
                    break;
                case /* com.midnights.game.MassiveWaterInfo water_info */ 6:
                    message.entityInfo = {
                        oneofKind: "waterInfo",
                        waterInfo: MassiveWaterInfo_1.MassiveWaterInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityInfo.waterInfo)
                    };
                    break;
                case /* com.midnights.game.MassiveGrassInfo grass_info */ 7:
                    message.entityInfo = {
                        oneofKind: "grassInfo",
                        grassInfo: MassiveGrassInfo_1.MassiveGrassInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityInfo.grassInfo)
                    };
                    break;
                case /* com.midnights.game.MassiveBoxInfo box_info */ 8:
                    message.entityInfo = {
                        oneofKind: "boxInfo",
                        boxInfo: MassiveBoxInfo_1.MassiveBoxInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityInfo.boxInfo)
                    };
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
        /* optional uint32 entity_type = 1; */
        if (message.entityType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityType);
        /* optional uint32 config_id = 2; */
        if (message.configId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.configId);
        /* optional uint32 runtime_id = 3; */
        if (message.runtimeId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.runtimeId);
        /* optional uint32 authority_peer_id = 4; */
        if (message.authorityPeerId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.authorityPeerId);
        /* optional int64 obj_id = 5; */
        if (message.objId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int64(message.objId);
        /* com.midnights.game.MassiveWaterInfo water_info = 6; */
        if (message.entityInfo.oneofKind === "waterInfo")
            MassiveWaterInfo_1.MassiveWaterInfo.internalBinaryWrite(message.entityInfo.waterInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.MassiveGrassInfo grass_info = 7; */
        if (message.entityInfo.oneofKind === "grassInfo")
            MassiveGrassInfo_1.MassiveGrassInfo.internalBinaryWrite(message.entityInfo.grassInfo, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.MassiveBoxInfo box_info = 8; */
        if (message.entityInfo.oneofKind === "boxInfo")
            MassiveBoxInfo_1.MassiveBoxInfo.internalBinaryWrite(message.entityInfo.boxInfo, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ServerMassiveEntity
 */
exports.ServerMassiveEntity = new ServerMassiveEntity$Type();
