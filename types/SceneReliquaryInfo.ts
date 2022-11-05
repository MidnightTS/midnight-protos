// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "SceneReliquaryInfo.proto" (package "com.midnights.game", syntax proto3)
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
 * @generated from protobuf message com.midnights.game.SceneReliquaryInfo
 */
export interface SceneReliquaryInfo {
    /**
     * @generated from protobuf field: optional uint32 item_id = 1;
     */
    itemId?: number;
    /**
     * @generated from protobuf field: optional uint64 guid = 2;
     */
    guid?: bigint;
    /**
     * @generated from protobuf field: optional uint32 level = 3;
     */
    level?: number;
    /**
     * @generated from protobuf field: optional uint32 promote_level = 4;
     */
    promoteLevel?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneReliquaryInfo$Type extends MessageType<SceneReliquaryInfo> {
    constructor() {
        super("com.midnights.game.SceneReliquaryInfo", [
            { no: 1, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SceneReliquaryInfo>): SceneReliquaryInfo {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneReliquaryInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneReliquaryInfo): SceneReliquaryInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 item_id */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* optional uint64 guid */ 2:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 level */ 3:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 promote_level */ 4:
                    message.promoteLevel = reader.uint32();
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
    internalBinaryWrite(message: SceneReliquaryInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 item_id = 1; */
        if (message.itemId !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.itemId);
        /* optional uint64 guid = 2; */
        if (message.guid !== undefined)
            writer.tag(2, WireType.Varint).uint64(message.guid);
        /* optional uint32 level = 3; */
        if (message.level !== undefined)
            writer.tag(3, WireType.Varint).uint32(message.level);
        /* optional uint32 promote_level = 4; */
        if (message.promoteLevel !== undefined)
            writer.tag(4, WireType.Varint).uint32(message.promoteLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneReliquaryInfo
 */
export const SceneReliquaryInfo = new SceneReliquaryInfo$Type();
