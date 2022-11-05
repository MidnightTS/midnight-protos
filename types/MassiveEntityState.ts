// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "MassiveEntityState.proto" (package "com.midnights.game", syntax proto3)
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
 * @generated from protobuf message com.midnights.game.MassiveEntityState
 */
export interface MassiveEntityState {
    /**
     * @generated from protobuf field: optional uint32 entity_type = 1;
     */
    entityType?: number;
    /**
     * @generated from protobuf field: optional int64 obj_id = 2;
     */
    objId?: bigint;
    /**
     * @generated from protobuf field: optional uint32 element_state = 3;
     */
    elementState?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class MassiveEntityState$Type extends MessageType<MassiveEntityState> {
    constructor() {
        super("com.midnights.game.MassiveEntityState", [
            { no: 1, name: "entity_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "obj_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "element_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<MassiveEntityState>): MassiveEntityState {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MassiveEntityState>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MassiveEntityState): MassiveEntityState {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_type */ 1:
                    message.entityType = reader.uint32();
                    break;
                case /* optional int64 obj_id */ 2:
                    message.objId = reader.int64().toBigInt();
                    break;
                case /* optional uint32 element_state */ 3:
                    message.elementState = reader.uint32();
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
    internalBinaryWrite(message: MassiveEntityState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 entity_type = 1; */
        if (message.entityType !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.entityType);
        /* optional int64 obj_id = 2; */
        if (message.objId !== undefined)
            writer.tag(2, WireType.Varint).int64(message.objId);
        /* optional uint32 element_state = 3; */
        if (message.elementState !== undefined)
            writer.tag(3, WireType.Varint).uint32(message.elementState);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MassiveEntityState
 */
export const MassiveEntityState = new MassiveEntityState$Type();
