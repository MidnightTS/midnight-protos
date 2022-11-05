// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "EntityEnvironmentInfo.proto" (package "com.midnights.game", syntax proto3)
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
 * @generated from protobuf message com.midnights.game.EntityEnvironmentInfo
 */
export interface EntityEnvironmentInfo {
    /**
     * @generated from protobuf field: optional uint32 json_climate_type = 1;
     */
    jsonClimateType?: number;
    /**
     * @generated from protobuf field: optional uint32 climate_area_id = 2;
     */
    climateAreaId?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class EntityEnvironmentInfo$Type extends MessageType<EntityEnvironmentInfo> {
    constructor() {
        super("com.midnights.game.EntityEnvironmentInfo", [
            { no: 1, name: "json_climate_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "climate_area_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<EntityEnvironmentInfo>): EntityEnvironmentInfo {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EntityEnvironmentInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityEnvironmentInfo): EntityEnvironmentInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 json_climate_type */ 1:
                    message.jsonClimateType = reader.uint32();
                    break;
                case /* optional uint32 climate_area_id */ 2:
                    message.climateAreaId = reader.uint32();
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
    internalBinaryWrite(message: EntityEnvironmentInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 json_climate_type = 1; */
        if (message.jsonClimateType !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.jsonClimateType);
        /* optional uint32 climate_area_id = 2; */
        if (message.climateAreaId !== undefined)
            writer.tag(2, WireType.Varint).uint32(message.climateAreaId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityEnvironmentInfo
 */
export const EntityEnvironmentInfo = new EntityEnvironmentInfo$Type();