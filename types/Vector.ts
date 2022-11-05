// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "Vector.proto" (package "com.midnights.game", syntax proto3)
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
 * @generated from protobuf message com.midnights.game.Vector
 */
export interface Vector {
    /**
     * @generated from protobuf field: optional float x = 1;
     */
    x?: number;
    /**
     * @generated from protobuf field: optional float y = 2;
     */
    y?: number;
    /**
     * @generated from protobuf field: optional float z = 3;
     */
    z?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class Vector$Type extends MessageType<Vector> {
    constructor() {
        super("com.midnights.game.Vector", [
            { no: 1, name: "x", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "y", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "z", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<Vector>): Vector {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Vector>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Vector): Vector {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float x */ 1:
                    message.x = reader.float();
                    break;
                case /* optional float y */ 2:
                    message.y = reader.float();
                    break;
                case /* optional float z */ 3:
                    message.z = reader.float();
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
    internalBinaryWrite(message: Vector, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional float x = 1; */
        if (message.x !== undefined)
            writer.tag(1, WireType.Bit32).float(message.x);
        /* optional float y = 2; */
        if (message.y !== undefined)
            writer.tag(2, WireType.Bit32).float(message.y);
        /* optional float z = 3; */
        if (message.z !== undefined)
            writer.tag(3, WireType.Bit32).float(message.z);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Vector
 */
export const Vector = new Vector$Type();
