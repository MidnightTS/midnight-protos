// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "ClientGadgetInfo.proto" (package "com.midnights.game", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message com.midnights.game.ClientGadgetInfo
 */
export interface ClientGadgetInfo {
    /**
     * @generated from protobuf field: optional uint32 camp_id = 1;
     */
    campId?: number;
    /**
     * @generated from protobuf field: optional uint32 camp_type = 2;
     */
    campType?: number;
    /**
     * @generated from protobuf field: optional uint64 guid = 3;
     */
    guid?: bigint;
    /**
     * @generated from protobuf field: optional uint32 owner_entity_id = 4;
     */
    ownerEntityId?: number;
    /**
     * @generated from protobuf field: optional uint32 target_entity_id = 5;
     */
    targetEntityId?: number;
    /**
     * @generated from protobuf field: optional bool async_load = 6;
     */
    asyncLoad?: boolean;
    /**
     * @generated from protobuf field: optional bool is_peer_id_from_player = 7;
     */
    isPeerIdFromPlayer?: boolean;
    /**
     * @generated from protobuf field: repeated uint32 target_entity_id_list = 8;
     */
    targetEntityIdList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ClientGadgetInfo$Type extends MessageType<ClientGadgetInfo> {
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
    create(value?: PartialMessage<ClientGadgetInfo>): ClientGadgetInfo {
        const message = { targetEntityIdList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ClientGadgetInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientGadgetInfo): ClientGadgetInfo {
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
                    if (wireType === WireType.LengthDelimited)
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
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ClientGadgetInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 camp_id = 1; */
        if (message.campId !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.campId);
        /* optional uint32 camp_type = 2; */
        if (message.campType !== undefined)
            writer.tag(2, WireType.Varint).uint32(message.campType);
        /* optional uint64 guid = 3; */
        if (message.guid !== undefined)
            writer.tag(3, WireType.Varint).uint64(message.guid);
        /* optional uint32 owner_entity_id = 4; */
        if (message.ownerEntityId !== undefined)
            writer.tag(4, WireType.Varint).uint32(message.ownerEntityId);
        /* optional uint32 target_entity_id = 5; */
        if (message.targetEntityId !== undefined)
            writer.tag(5, WireType.Varint).uint32(message.targetEntityId);
        /* optional bool async_load = 6; */
        if (message.asyncLoad !== undefined)
            writer.tag(6, WireType.Varint).bool(message.asyncLoad);
        /* optional bool is_peer_id_from_player = 7; */
        if (message.isPeerIdFromPlayer !== undefined)
            writer.tag(7, WireType.Varint).bool(message.isPeerIdFromPlayer);
        /* repeated uint32 target_entity_id_list = 8; */
        if (message.targetEntityIdList.length) {
            writer.tag(8, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.targetEntityIdList.length; i++)
                writer.uint32(message.targetEntityIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientGadgetInfo
 */
export const ClientGadgetInfo = new ClientGadgetInfo$Type();