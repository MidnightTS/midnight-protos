// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "BuildingInfo.proto" (package "com.midnights.game", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message com.midnights.game.BuildingInfo
 */
export interface BuildingInfo {
    /**
     * @generated from protobuf field: optional uint32 building_id = 1;
     */
    buildingId?: number;
    /**
     * @generated from protobuf field: optional uint32 point_config_id = 2;
     */
    pointConfigId?: number;
    /**
     * @generated from protobuf field: optional uint32 cost = 3;
     */
    cost?: number;
    /**
     * @generated from protobuf field: optional uint32 refund = 5;
     */
    refund?: number;
    /**
     * @generated from protobuf field: optional uint32 owner_uid = 6;
     */
    ownerUid?: number;
    /**
     * @generated from protobuf field: optional uint32 current_num = 7;
     */
    currentNum?: number;
    /**
     * @generated from protobuf field: optional uint32 max_num = 8;
     */
    maxNum?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class BuildingInfo$Type extends MessageType<BuildingInfo> {
    constructor() {
        super("com.midnights.game.BuildingInfo", [
            { no: 1, name: "building_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "point_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cost", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "refund", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "current_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "max_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<BuildingInfo>): BuildingInfo {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BuildingInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BuildingInfo): BuildingInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 building_id */ 1:
                    message.buildingId = reader.uint32();
                    break;
                case /* optional uint32 point_config_id */ 2:
                    message.pointConfigId = reader.uint32();
                    break;
                case /* optional uint32 cost */ 3:
                    message.cost = reader.uint32();
                    break;
                case /* optional uint32 refund */ 5:
                    message.refund = reader.uint32();
                    break;
                case /* optional uint32 owner_uid */ 6:
                    message.ownerUid = reader.uint32();
                    break;
                case /* optional uint32 current_num */ 7:
                    message.currentNum = reader.uint32();
                    break;
                case /* optional uint32 max_num */ 8:
                    message.maxNum = reader.uint32();
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
    internalBinaryWrite(message: BuildingInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 building_id = 1; */
        if (message.buildingId !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.buildingId);
        /* optional uint32 point_config_id = 2; */
        if (message.pointConfigId !== undefined)
            writer.tag(2, WireType.Varint).uint32(message.pointConfigId);
        /* optional uint32 cost = 3; */
        if (message.cost !== undefined)
            writer.tag(3, WireType.Varint).uint32(message.cost);
        /* optional uint32 refund = 5; */
        if (message.refund !== undefined)
            writer.tag(5, WireType.Varint).uint32(message.refund);
        /* optional uint32 owner_uid = 6; */
        if (message.ownerUid !== undefined)
            writer.tag(6, WireType.Varint).uint32(message.ownerUid);
        /* optional uint32 current_num = 7; */
        if (message.currentNum !== undefined)
            writer.tag(7, WireType.Varint).uint32(message.currentNum);
        /* optional uint32 max_num = 8; */
        if (message.maxNum !== undefined)
            writer.tag(8, WireType.Varint).uint32(message.maxNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BuildingInfo
 */
export const BuildingInfo = new BuildingInfo$Type();
