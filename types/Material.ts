// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "Material.proto" (package "com.midnights.game", syntax proto3)
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
import { MaterialDeleteInfo } from "./MaterialDeleteInfo";
/**
 * @generated from protobuf message com.midnights.game.Material
 */
export interface Material {
    /**
     * @generated from protobuf field: optional uint32 count = 1;
     */
    count?: number;
    /**
     * @generated from protobuf field: optional com.midnights.game.MaterialDeleteInfo delete_info = 2;
     */
    deleteInfo?: MaterialDeleteInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class Material$Type extends MessageType<Material> {
    constructor() {
        super("com.midnights.game.Material", [
            { no: 1, name: "count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "delete_info", kind: "message", T: () => MaterialDeleteInfo }
        ]);
    }
    create(value?: PartialMessage<Material>): Material {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Material>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Material): Material {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 count */ 1:
                    message.count = reader.uint32();
                    break;
                case /* optional com.midnights.game.MaterialDeleteInfo delete_info */ 2:
                    message.deleteInfo = MaterialDeleteInfo.internalBinaryRead(reader, reader.uint32(), options, message.deleteInfo);
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
    internalBinaryWrite(message: Material, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 count = 1; */
        if (message.count !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.count);
        /* optional com.midnights.game.MaterialDeleteInfo delete_info = 2; */
        if (message.deleteInfo)
            MaterialDeleteInfo.internalBinaryWrite(message.deleteInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.Material
 */
export const Material = new Material$Type();
