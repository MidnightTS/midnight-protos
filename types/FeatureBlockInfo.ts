// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "FeatureBlockInfo.proto" (package "com.midnights.game", syntax proto3)
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
 * @generated from protobuf message com.midnights.game.FeatureBlockInfo
 */
export interface FeatureBlockInfo {
    /**
     * @generated from protobuf field: optional uint32 feature_type = 1;
     */
    featureType?: number;
    /**
     * @generated from protobuf field: optional uint32 end_time = 2;
     */
    endTime?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FeatureBlockInfo$Type extends MessageType<FeatureBlockInfo> {
    constructor() {
        super("com.midnights.game.FeatureBlockInfo", [
            { no: 1, name: "feature_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<FeatureBlockInfo>): FeatureBlockInfo {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FeatureBlockInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeatureBlockInfo): FeatureBlockInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 feature_type */ 1:
                    message.featureType = reader.uint32();
                    break;
                case /* optional uint32 end_time */ 2:
                    message.endTime = reader.uint32();
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
    internalBinaryWrite(message: FeatureBlockInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 feature_type = 1; */
        if (message.featureType !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.featureType);
        /* optional uint32 end_time = 2; */
        if (message.endTime !== undefined)
            writer.tag(2, WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.FeatureBlockInfo
 */
export const FeatureBlockInfo = new FeatureBlockInfo$Type();
